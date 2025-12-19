;(function (w, d) {
  'use strict';

  var PX = (w.myPx = w.myPx || {});
  PX.pixelId = PX.pixelId || null;
  PX.queue = PX.queue || [];

  var CFG = {
    endpoint: 'https://n8n.caiosantosxp.tech/webhook/pixel/collect',
    cookiePrefix: 'mp_',
    storagePrefix: 'mp_',
    vidKey: 'mp_vid',
    sidKey: 'mp_sid',
    queueKey: 'mp_queue',
    cookieDays: 90,
    visitorDays: 365,
    maxQueue: 50,
    dataLayerAttachSnapshot: true,
    dataLayerAttachLatestEvent: true,
    enableGA4CollectParsing: true,
    sgtmDomain: 'https://fast.modella.com.br',
    allowParams: ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','gclid','ttclid','wbraid','gbraid','msclkid']
  };

  // --- HELPERS ---
  function now() { return Date.now(); }
  function setLS(k, v) { try { w.localStorage.setItem(k, v); } catch(e) {} }
  function getLS(k) { try { return w.localStorage.getItem(k); } catch(e) { return null; } }
  function setCookie(n, v, ddy) {
    var maxAge = ddy * 24 * 60 * 60;
    d.cookie = n + '=' + encodeURIComponent(v) + '; Path=/; Max-Age=' + maxAge + '; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
  }
  function getCookie(n) {
    var m = d.cookie.match(new RegExp('(?:^|; )' + n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }

  function getOrCreateVisitorId() {
    var vid = getCookie(CFG.vidKey) || getLS(CFG.vidKey);
    if (!vid) { vid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v=c=='x'?r:(r&0x3|0x8); return v.toString(16); }); setCookie(CFG.vidKey, vid, CFG.visitorDays); setLS(CFG.vidKey, vid); }
    return vid;
  }

  function getOrCreateSessionId() {
    var sid = getLS(CFG.sidKey);
    if (!sid) { sid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v=c=='x'?r:(r&0x3|0x8); return v.toString(16); }); setLS(CFG.sidKey, sid); }
    return sid;
  }

  var lastEventAt = {};
  function dedupeByTime(name, ms) {
    var t = now();
    if (lastEventAt[name] && (t - lastEventAt[name] < (ms || 500))) return true;
    lastEventAt[name] = t;
    return false;
  }

  // --- TRACKING CORE ---
  PX.track = function (eventName, data) {
    try {
      if (!eventName) return;
      
      // Padronização forçada para page_view
      var cleanName = String(eventName).toLowerCase().replace('pageview', 'page_view');

      var payload = {
        pixelId: PX.pixelId,
        event: cleanName,
        ts: now(),
        url: w.location.href,
        referrer: d.referrer,
        vid: getOrCreateVisitorId(),
        sid: getOrCreateSessionId(),
        data: data || {}
      };

      var body = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(CFG.endpoint, body);
      } else {
        w.fetch(CFG.endpoint, { method: 'POST', body: body, keepalive: true });
      }
    } catch (e) {}
  };

  // --- HOOK DATALAYER (CORRIGIDO PARA TRAY) ---
  function hookDataLayer() {
    var dl = (w.dataLayer = w.dataLayer || []);

    if (dl.__mp_hooked) return;
    dl.__mp_hooked = true;

    var map = {
      'page_view': 'page_view',
      'view_item': 'view_item',
      'view_item_list': 'view_item_list',
      'add_to_cart_tray': 'add_to_cart',
      'view_cart': 'view_cart',
      'checkout (step 1)': 'begin_checkout',
      'checkout (step 2)': 'initiated_checkout',
      'checkout (step 3)': 'sign_up',
      'checkout (step 4)': 'add_shipping_info',
      'checkout (step 6)': 'add_payment_info',
      'purchase': 'purchase',
      'purchase_new_customer': 'purchase'
    };

    function handle(obj) {
      if (!obj) return;

      var ev = obj.event ? String(obj.event) : null;
      var pc = obj.pageCategory ? String(obj.pageCategory) : null;
      
      var mappedName = null;

      // 1. Lógica específica para view_item na Tray (baseado na imagem f6b28b)
      if (pc === "Produto" && !ev) {
        mappedName = 'view_item';
      } 
      // 2. Lógica padrão para eventos com nome
      else if (ev && map[ev]) {
        mappedName = map[ev];
      }

      if (mappedName) {
        // Log para confirmar que o script identificou o evento
        console.log('Evento identificado:', mappedName, '| Categoria:', pc);
        
        if (dedupeByTime('dl_' + mappedName, 500)) return;
        
        PX.track(mappedName, { 
          source: 'datalayer', 
          page_category: pc,
          ecommerce: obj.ecommerce || obj 
        });
      }
    }

    // Processa itens antigos e novos
    for (var i = 0; i < dl.length; i++) handle(dl[i]);
    var origPush = dl.push;
    dl.push = function () {
      for (var i = 0; i < arguments.length; i++) handle(arguments[i]);
      return origPush.apply(dl, arguments);
    };
  }

  // --- DESDUPLICAÇÃO E CARRINHO (Suas funções solicitadas) ---
  function initSgtmDedupe() {
    var removeSw = function() {
      var found = false;
      d.querySelectorAll('iframe').forEach(function(f) {
        try {
          var sw = f.contentWindow.document.querySelector('iframe[src^="'+CFG.sgtmDomain+'/_/service_worker/"]');
          if (sw) { sw.remove(); found = true; }
        } catch(e) {}
      });
      return found;
    };
    if (!removeSw()) {
      var obs = new MutationObserver(function() { if(removeSw()) obs.disconnect(); });
      obs.observe(d.documentElement, { childList: true, subtree: true });
    }
  }

  function initTrayModal() {
    if (!w.IntersectionObserver) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(en) {
        if (en.isIntersecting && en.target.textContent.trim() === "Meu Carrinho") {
          var q = d.querySelector('#quant');
          PX.track('add_to_cart', { source: 'tray_modal', quantity: q ? q.value : 1 });
          obs.unobserve(en.target);
        }
      });
    });
    d.querySelectorAll('h4.modal-title').forEach(function(el) { if(el.textContent.trim()==="Meu Carrinho") obs.observe(el); });
  }

  // --- INIT ---
  PX.init = function () {
    setLS('page_url_ls', w.location.href);
    setLS('page_referrer_ls', d.referrer);
    
    hookDataLayer();
    initSgtmDedupe();
    initTrayModal();

    // Se o seu site NÃO dispara page_view via DataLayer, descomente a linha abaixo:
    PX.track('page_view', { source: 'manual_init' });
  };

  PX.init();

})(window, document);
