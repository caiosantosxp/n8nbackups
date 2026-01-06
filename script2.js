// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "19",

            "macros": [{
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout.actionField.step"
            }, {
                "function": "__e"
            }, {
                "function": "__cvt_M63B8"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "email"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "user_id_stape"
            }, {
                "function": "__v",
                "convert_case_to": 1,
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "visitorDemographicInfo.city"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 5], 8, 16], ";return a=a.normalize(\"NFD\").replace(\/([\\u0300-\\u036f]|[^0-9a-zA-Z])\/g,\"\")})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "user_ct"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 6], 8, 16], "||", ["escape", ["macro", 7], 8, 16], "||\"\";return a})();"]
            }, {
                "function": "__v",
                "convert_case_to": 1,
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "visitorDemographicInfo.state"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "user_st"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 9], 8, 16], "||", ["escape", ["macro", 10], 8, 16], "||\"\";return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "visitorDemographicInfo.zipCode"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 12],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "^(\\d{5}).*", "value", "$1"]]
            }, {
                "function": "__v",
                "convert_case_to": 1,
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "customerName"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 14],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "(.*)\\s(.*)$", "value", "$1"]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 14],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "(.*)\\s(.*)$", "value", "$2"]]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('[id\\x3d\"customer-phone\"]');if(!a||!a.value)return\"\";a=a.value;a=a.replace(\/\\D\/g,\"\");a.length\u003E0\u0026\u0026(a=\"55\"+a);return a})();"]
            }, {
                "function": "__c",
                "vtp_value": "4112071705706979"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=localStorage.getItem(\"ids_VI\");return JSON.parse(a)})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=localStorage.getItem(\"price_VI\");return JSON.parse(a)})();"]
            }, {
                "function": "__c",
                "vtp_value": "product"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "_fbp"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return localStorage.getItem(\"page_url_ls\")})();"]
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "fbclid",
                "vtp_customUrlSource": ["macro", 23],
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.cookie.match(\/(?:^|;\\s*)_fbc=([^;]+)\/);if(a)return decodeURIComponent(a[1]);a=", ["escape", ["macro", 24], 8, 16], ";if(!a)return\"\";var b=Date.now();a=\"fb.2.\"+b+\".\"+a;document.cookie=\"_fbc\\x3d\"+encodeURIComponent(a)+\"; Path\\x3d\/; SameSite\\x3dLax; Secure\";return a})();"]
            }, {
                "function": "__k",
                "convert_undefined_to": ["macro", 25],
                "vtp_decodeCookie": false,
                "vtp_name": "_fbc"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "user_em"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "user_zp"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "user_fn"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "user_ln"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "user_ph"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "idProduct"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "priceSell"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "nameProduct"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "customerStatus"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.products"
            }, {
                "function": "__cvt_5RMBX",
                "vtp_impressionsVar": ["macro", 36],
                "vtp_option": "impressions"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.shipping"
            }, {
                "function": "__cvt_PL349",
                "vtp_inputArray": ["macro", 36],
                "vtp_delimiter": ",",
                "vtp_keyToConcatenate": "id"
            }, {
                "function": "__cvt_PL349",
                "vtp_inputArray": ["macro", 36],
                "vtp_delimiter": ",",
                "vtp_keyToConcatenate": "name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout.actionField.option"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.coupon"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 35],
                "vtp_map": ["list", ["map", "key", "Existing", "value", "false"],
                    ["map", "key", "New", "value", "true"]
                ]
            }, {
                "function": "__c",
                "vtp_value": "G-TGN000000"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "userId"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "utm_source",
                "vtp_customUrlSource": ["macro", 23],
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "utm_medium",
                "vtp_customUrlSource": ["macro", 23],
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "utm_campaign",
                "vtp_customUrlSource": ["macro", 23],
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "gclid",
                "vtp_customUrlSource": ["macro", 23],
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "gbraid",
                "vtp_customUrlSource": ["macro", 23],
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "wbraid",
                "vtp_customUrlSource": ["macro", 23],
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return localStorage.getItem(\"page_referrer_ls\")})();"]
            }, {
                "function": "__gtes",
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "user_data.email_address", "parameterValue", ["macro", 3]],
                    ["map", "parameter", "user_data.phone_number", "parameterValue", ["macro", 17]],
                    ["map", "parameter", "user_data.address.first_name", "parameterValue", ["macro", 15]],
                    ["map", "parameter", "user_data.address.last_name", "parameterValue", ["macro", 16]],
                    ["map", "parameter", "user_data.address.city", "parameterValue", ["macro", 8]],
                    ["map", "parameter", "user_data.address.region", "parameterValue", ["macro", 11]],
                    ["map", "parameter", "user_data.address.postal_code", "parameterValue", ["macro", 13]],
                    ["map", "parameter", "user_data.address.country", "parameterValue", "br"],
                    ["map", "parameter", "x-fb-ud-external_id", "parameterValue", ["macro", 4]],
                    ["map", "parameter", "x-fb-ck-fbp", "parameterValue", ["macro", 22]],
                    ["map", "parameter", "x-fb-ck-fbc", "parameterValue", ["macro", 26]],
                    ["map", "parameter", "event_id", "parameterValue", ["macro", 2]],
                    ["map", "parameter", "first_party_collection", "parameterValue", "true"],
                    ["map", "parameter", "userId", "parameterValue", ["macro", 47]],
                    ["map", "parameter", "utm_source_ls", "parameterValue", ["macro", 48]],
                    ["map", "parameter", "utm_medium_ls", "parameterValue", ["macro", 49]],
                    ["map", "parameter", "utm_campaign_ls", "parameterValue", ["macro", 50]],
                    ["map", "parameter", "gclid_ls", "parameterValue", ["macro", 51]],
                    ["map", "parameter", "gbraid_ls", "parameterValue", ["macro", 52]],
                    ["map", "parameter", "wbraid_ls", "parameterValue", ["macro", 53]],
                    ["map", "parameter", "fbclid_ls", "parameterValue", ["macro", 25]],
                    ["map", "parameter", "referrer_ls", "parameterValue", ["macro", 54]]
                ]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "ck_gender"
            }, {
                "function": "__gtes",
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "user_data.email_address", "parameterValue", ["macro", 27]],
                    ["map", "parameter", "user_data.phone_number", "parameterValue", ["macro", 31]],
                    ["map", "parameter", "user_data.address.first_name", "parameterValue", ["macro", 29]],
                    ["map", "parameter", "user_data.address.last_name", "parameterValue", ["macro", 30]],
                    ["map", "parameter", "user_data.address.city", "parameterValue", ["macro", 7]],
                    ["map", "parameter", "user_data.address.region", "parameterValue", ["macro", 10]],
                    ["map", "parameter", "user_data.address.postal_code", "parameterValue", ["macro", 28]],
                    ["map", "parameter", "user_data.address.country", "parameterValue", "br"],
                    ["map", "parameter", "x-fb-ud-external_id", "parameterValue", ["macro", 4]],
                    ["map", "parameter", "x-fb-ck-fbp", "parameterValue", ["macro", 22]],
                    ["map", "parameter", "x-fb-ck-fbc", "parameterValue", ["macro", 26]],
                    ["map", "parameter", "event_id", "parameterValue", ["macro", 2]],
                    ["map", "parameter", "first_party_collection", "parameterValue", "true"],
                    ["map", "parameter", "x-fb-ud-ge", "parameterValue", ["macro", 56]],
                    ["map", "parameter", "utm_source_ls", "parameterValue", ["macro", 48]],
                    ["map", "parameter", "utm_medium_ls", "parameterValue", ["macro", 49]],
                    ["map", "parameter", "utm_campaign_ls", "parameterValue", ["macro", 50]],
                    ["map", "parameter", "fbclid_ls", "parameterValue", ["macro", 25]],
                    ["map", "parameter", "gclid_ls", "parameterValue", ["macro", 51]],
                    ["map", "parameter", "wbraid_ls", "parameterValue", ["macro", 53]],
                    ["map", "parameter", "gbraid_ls", "parameterValue", ["macro", 52]],
                    ["map", "parameter", "referrer_ls", "parameterValue", ["macro", 54]]
                ]
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('input[type\\x3d\"email\"][data-mbz-input\\x3d\"email\"]');if(a\u0026\u0026a.value)return a.value.trim()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('input[type\\x3d\"tel\"][data-mbz-input\\x3d\"tel\"]');if(a\u0026\u0026a.value)return a=a.value.replace(\/\\D\/g,\"\"),a.startsWith(\"55\")||(a=\"55\"+a),a})();"]
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('input[name\\x3d\"email\"]').value;return a})();"]
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('input[name\\x3d\"name\"]').value;return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('input[name\\x3d\"personal_phone\"]').value;return a=a.replace(\/[\\+\\(\\)\\-\\s]\/g,\"\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=localStorage.getItem(\"matriz_VI\");return JSON.parse(a)})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "siteSearchTerm"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout.products"
            }, {
                "function": "__cvt_5RMBX",
                "vtp_productsVar": ["macro", 67],
                "vtp_option": "products"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){total_produtos=0;meus_dados=", ["escape", ["macro", 68], 8, 16], ";$.each(meus_dados,function(a){total_produtos+=parseFloat(meus_dados[a].price)*parseFloat(meus_dados[a].quantity)});return total_produtos})();"]
            }, {
                "function": "__cvt_PL349",
                "vtp_inputArray": ["macro", 67],
                "vtp_delimiter": ",",
                "vtp_keyToConcatenate": "id"
            }, {
                "function": "__cvt_PL349",
                "vtp_inputArray": ["macro", 67],
                "vtp_delimiter": ",",
                "vtp_keyToConcatenate": "name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "productCategoryName"
            }, {
                "function": "__v",
                "convert_undefined_to": ["macro", 72],
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "category"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__cvt_5NR5C",
                "vtp_returnComponent": "uri",
                "vtp_uriIndex": "1",
                "vtp_returnUriIndex": true,
                "vtp_uriDecode": true,
                "vtp_inputURL": ["macro", 74],
                "vtp_inverseIndex": false
            }, {
                "function": "__cvt_5NR5C",
                "vtp_returnComponent": "uri",
                "vtp_uriIndex": "2",
                "vtp_returnUriIndex": true,
                "vtp_uriDecode": true,
                "vtp_inputURL": ["macro", 74],
                "vtp_inverseIndex": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "brand"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=[{item_id:", ["escape", ["macro", 32], 8, 16], ",item_name:", ["escape", ["macro", 34], 8, 16], ",item_category:", ["escape", ["macro", 78], 8, 16], ",item_brand:", ["escape", ["macro", 79], 8, 16], ",price:parseFloat(", ["escape", ["macro", 33], 8, 16], "),quantity:1}];return a})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout.products"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "session_id",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "utm_source_first"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "utm_medium_first"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "utm_campaign_first"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.revenue"
            }, {
                "function": "__c",
                "vtp_value": "https:\/\/webhook.chatuba.me\/webhook\/d3552e24-5703-4b66-bcee-a64dc638faa2"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "idCategory"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByName(\"phone\")[0].value;a?(a=a.replace(\/[\\s()-]\/g,\"\"),a=\"55\".concat(a)):validado=!1;return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByName(\"gender\")[0].value;return a})();"]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 92],
                "vtp_map": ["list", ["map", "key", "1", "value", "m"],
                    ["map", "key", "2", "value", "f"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByName(\"birth-date\")[0].value;return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 94], 8, 16], ";a=a.split(\"\/\");return a=a[2]+a[1]+a[0]})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 26], 8, 16], ";return a===void 0||a===null||String(a).trim()===\"\"?!1:!0})();"]
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__d",
                "vtp_elementId": "gtmScript",
                "vtp_attributeName": "data-hash",
                "vtp_selectorType": "ID"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "checkoutTotal"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "products"
            }, {
                "function": "__c",
                "vtp_value": "xR7gCJbzrZYYEKnhlb4p"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.products"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "fix"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout.actionField.step"
            }, {
                "function": "__c",
                "vtp_value": "654904874"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "nameProduct"
            }, {
                "function": "__c",
                "vtp_value": "2613866623086"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('[id\\x3d\"quant_modal\"]').value;return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "idProduct"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "idProduct"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "idProduct"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "reference"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "nameProduct"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "priceSell"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "brand"
            }, {
                "function": "__jsm",
                "convert_null_to": ["macro", 111],
                "convert_undefined_to": ["macro", 111],
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\"#quant\").value;return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a={product_name:\"\",product_id:\"\",product_price:\"\",product_category:\"\",product_quantity:\"\"};a.product_id=", ["escape", ["macro", 114], 8, 16], ";a.product_name=", ["escape", ["macro", 116], 8, 16], ";a.product_price=", ["escape", ["macro", 117], 8, 16], ";a.product_category=", ["escape", ["macro", 73], 8, 16], ";a.product_quantity=", ["escape", ["macro", 119], 8, 16], ";a.product_variant_id=", ["escape", ["macro", 115], 8, 16], ";a.product_brand=", ["escape", ["macro", 118], 8, 16], ";return[a]})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "listProducts"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 121], 8, 16], ",d=[],a=0;a\u003Cb.length;a++){var c={product_name:\"\",product_id:\"\",product_price:\"\",product_category:\"\"};c.product_id=b[a].idProduct;c.product_name=b[a].nameProduct;c.product_price=b[a].price;c.product_category=b[a].category;c.product_brand=b[a].brand;c.product_variant_id=b[a].reference;d.push(c)}return d})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 122], 8, 16], ",b=", ["escape", ["macro", 120], 8, 16], ",c=", ["escape", ["macro", 77], 8, 16], ";return a=c==\"catalogo\"?a:b})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "price"
            }, {
                "function": "__c",
                "vtp_value": "G-WZYQ97GLK8"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 113], 8, 16], ";return a=[{id:a,google_business_vertical:\"retail\"}]})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.products"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 127], 8, 16], ",d=b.length,a=-1,c=[];++a\u003Cd;)c[a]=b[a].id;return c})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 127], 8, 16], ".map(function(a){return{item_name:a.name,item_id:a.id,price:parseFloat(a.price),item_brand:a.brand,item_category:a.category,quantity:parseFloat(a.quantity)}})})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "customerEmail"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "priceSell"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 132], 8, 16], ";return a=parseFloat(a)})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.items"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventModel.items"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "items"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "ck_dob"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var c=", ["escape", ["macro", 127], 8, 16], ",a=0;c.forEach(function(b){a+=parseFloat(b.price)*parseFloat(b.quantity)});return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 83], 8, 16], ".map(function(a){return{item_name:a.name,item_id:a.id,price:parseFloat(a.price),item_brand:a.brand,item_category:a.category,quantity:parseFloat(a.quantity)}})})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 103], 8, 16], ",d=[],a=0;a\u003Cb.length;a++){var c={product_name:\"\",product_id:\"\",product_price:\"\",product_category:\"\",product_quantity:\"\"};c.product_id=b[a].id;c.product_name=b[a].name;c.product_price=b[a].price;c.product_category=b[a].category;c.product_brand=b[a].brand;c.product_variant_id=b[a].variant_id;c.product_quantity=b[a].quantity;d.push(c)}return d})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.shipping"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "brand"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "remarketing"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 108], 8, 16], ",b=", ["escape", ["macro", 113], 8, 16], ",c=", ["escape", ["macro", 133], 8, 16], ",d=", ["escape", ["macro", 73], 8, 16], ",e=1;return a=[{item_name:a,item_id:b,price:parseFloat(c),item_category:d,quantity:parseFloat(e)}]})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "listProducts"
            }, {
                "function": "__jsm",
                "convert_case_to": 1,
                "vtp_javascript": ["template", "(function(){var a=document.querySelector('[data-mbz-custom-id\\x3d\"39254\"]');return a?a.value:\"\"})();"]
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_standardEventName": "InitiateCheckout",
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 3]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 8]],
                    ["map", "name", "st", "value", ["macro", 11]],
                    ["map", "name", "zp", "value", ["macro", 13]],
                    ["map", "name", "fn", "value", ["macro", 15]],
                    ["map", "name", "ln", "value", ["macro", 16]],
                    ["map", "name", "ph", "value", ["macro", 17]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_ids", "value", ["macro", 19]],
                    ["map", "name", "value", "value", ["macro", 20]],
                    ["map", "name", "currency", "value", "BRL"],
                    ["map", "name", "content_type", "value", ["macro", 21]],
                    ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_advancedMatching": true,
                "tag_id": 97
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 3]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 8]],
                    ["map", "name", "st", "value", ["macro", 11]],
                    ["map", "name", "zp", "value", ["macro", 13]],
                    ["map", "name", "fn", "value", ["macro", 15]],
                    ["map", "name", "ln", "value", ["macro", 16]],
                    ["map", "name", "ph", "value", ["macro", 17]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_ids", "value", ["macro", 19]],
                    ["map", "name", "value", "value", ["macro", 20]],
                    ["map", "name", "currency", "value", "BRL"],
                    ["map", "name", "content_type", "value", ["macro", 21]],
                    ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_customEventName": "add_shipping_info",
                "vtp_advancedMatching": true,
                "tag_id": 108
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_standardEventName": "AddToCart",
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 27]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 7]],
                    ["map", "name", "st", "value", ["macro", 10]],
                    ["map", "name", "zp", "value", ["macro", 28]],
                    ["map", "name", "fn", "value", ["macro", 29]],
                    ["map", "name", "ln", "value", ["macro", 30]],
                    ["map", "name", "ph", "value", ["macro", 31]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_ids", "value", ["macro", 32]],
                    ["map", "name", "value", "value", ["macro", 33]],
                    ["map", "name", "currency", "value", "BRL"],
                    ["map", "name", "content_type", "value", ["macro", 21]],
                    ["map", "name", "content_name", "value", ["macro", 34]],
                    ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_advancedMatching": true,
                "tag_id": 110
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 37]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 38]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "transaction_id", "parameterValue", ["macro", 39]],
                    ["map", "parameter", "shipping", "parameterValue", ["macro", 40]],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 41]],
                    ["map", "parameter", "x-fb-cd-content_name", "parameterValue", ["macro", 42]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]],
                    ["map", "parameter", "payment_type", "parameterValue", ["macro", 43]],
                    ["map", "parameter", "coupon", "parameterValue", ["macro", 44]],
                    ["map", "parameter", "new_customer", "parameterValue", ["macro", 45]]
                ],
                "vtp_eventName": "purchase_new_customer",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 55],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 123
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "page_view",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 57],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 127
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": ["macro", 18],
                "vtp_eventId": ["macro", 2],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 59]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 7]],
                    ["map", "name", "st", "value", ["macro", 10]],
                    ["map", "name", "zp", "value", ["macro", 28]],
                    ["map", "name", "fn", "value", ["macro", 29]],
                    ["map", "name", "ln", "value", ["macro", 30]],
                    ["map", "name", "ph", "value", ["macro", 60]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_eventName": "custom",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_customEventName": "lead_popup",
                "vtp_consent": true,
                "vtp_advancedMatching": true,
                "tag_id": 145
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 61]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 7]],
                    ["map", "name", "st", "value", ["macro", 10]],
                    ["map", "name", "zp", "value", ["macro", 28]],
                    ["map", "name", "fn", "value", ["macro", 62]],
                    ["map", "name", "ln", "value", ["macro", 30]],
                    ["map", "name", "ph", "value", ["macro", 63]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_customEventName": "pop_up_email",
                "vtp_advancedMatching": true,
                "tag_id": 155
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 37]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 38]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "transaction_id", "parameterValue", ["macro", 39]],
                    ["map", "parameter", "shipping", "parameterValue", ["macro", 40]],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 41]],
                    ["map", "parameter", "x-fb-cd-content_name", "parameterValue", ["macro", 42]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]],
                    ["map", "parameter", "payment_type", "parameterValue", ["macro", 43]],
                    ["map", "parameter", "coupon", "parameterValue", ["macro", 44]],
                    ["map", "parameter", "new_customer", "parameterValue", ["macro", 45]]
                ],
                "vtp_eventName": "purchase",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 55],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 159
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 64]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 20]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 19]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]]
                ],
                "vtp_eventName": "add_shipping_info",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 55],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 160
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_standardEventName": "Search",
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 27]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 7]],
                    ["map", "name", "st", "value", ["macro", 10]],
                    ["map", "name", "zp", "value", ["macro", 28]],
                    ["map", "name", "fn", "value", ["macro", 29]],
                    ["map", "name", "ln", "value", ["macro", 30]],
                    ["map", "name", "ph", "value", ["macro", 31]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]],
                    ["map", "name", "search_string", "value", ["macro", 66]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_advancedMatching": true,
                "tag_id": 163
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 68]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 69]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 70]],
                    ["map", "parameter", "x-fb-cd-content_name", "parameterValue", ["macro", 71]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]]
                ],
                "vtp_eventName": "view_cart",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 57],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 169
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 27]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 7]],
                    ["map", "name", "st", "value", ["macro", 10]],
                    ["map", "name", "zp", "value", ["macro", 28]],
                    ["map", "name", "fn", "value", ["macro", 29]],
                    ["map", "name", "ln", "value", ["macro", 30]],
                    ["map", "name", "ph", "value", ["macro", 31]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_category", "value", ["macro", 73]],
                    ["map", "name", "item_category", "value", ["macro", 75]],
                    ["map", "name", "item_category2", "value", ["macro", 76]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_customEventName": "view_item_list",
                "vtp_advancedMatching": true,
                "tag_id": 184
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 80]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 33]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 32]],
                    ["map", "parameter", "x-fb-cd-content_name", "parameterValue", ["macro", 34]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]]
                ],
                "vtp_eventName": "view_item",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 57],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 189
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_standardEventName": "CompleteRegistration",
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 61]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 8]],
                    ["map", "name", "st", "value", ["macro", 11]],
                    ["map", "name", "zp", "value", ["macro", 13]],
                    ["map", "name", "fn", "value", ["macro", 15]],
                    ["map", "name", "ln", "value", ["macro", 16]],
                    ["map", "name", "ph", "value", ["macro", 17]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_ids", "value", ["macro", 19]],
                    ["map", "name", "value", "value", ["macro", 20]],
                    ["map", "name", "currency", "value", "BRL"],
                    ["map", "name", "content_type", "value", ["macro", 21]],
                    ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_advancedMatching": true,
                "tag_id": 193
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 80]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 33]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 32]],
                    ["map", "parameter", "x-fb-cd-content_name", "parameterValue", ["macro", 34]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]]
                ],
                "vtp_eventName": "add_to_cart",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 57],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 194
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 3]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 8]],
                    ["map", "name", "st", "value", ["macro", 11]],
                    ["map", "name", "zp", "value", ["macro", 13]],
                    ["map", "name", "fn", "value", ["macro", 15]],
                    ["map", "name", "ln", "value", ["macro", 16]],
                    ["map", "name", "ph", "value", ["macro", 17]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_ids", "value", ["macro", 41]],
                    ["map", "name", "value", "value", ["macro", 38]],
                    ["map", "name", "currency", "value", "BRL"],
                    ["map", "name", "content_type", "value", ["macro", 21]],
                    ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]],
                    ["map", "name", "content_name", "value", ["macro", 42]],
                    ["map", "name", "order_id", "value", ["macro", 39]],
                    ["map", "name", "shipping", "value", ["macro", 40]],
                    ["map", "name", "predicted_ltv", "value", ["macro", 38]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_customEventName": "purchase_old_customer",
                "vtp_advancedMatching": true,
                "tag_id": 196
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": ["macro", 18],
                "vtp_eventId": ["macro", 2],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 27]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 7]],
                    ["map", "name", "st", "value", ["macro", 10]],
                    ["map", "name", "zp", "value", ["macro", 28]],
                    ["map", "name", "fn", "value", ["macro", 29]],
                    ["map", "name", "ln", "value", ["macro", 30]],
                    ["map", "name", "ph", "value", ["macro", 31]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_eventName": "custom",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_customEventName": "lead_whatsapp",
                "vtp_consent": true,
                "vtp_advancedMatching": true,
                "tag_id": 197
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 68]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 69]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 70]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]],
                    ["map", "parameter", "token_checkout", "parameterValue", ["macro", 84]],
                    ["map", "parameter", "utm_source_first", "parameterValue", ["macro", 85]],
                    ["map", "parameter", "utm_medium_first", "parameterValue", ["macro", 86]],
                    ["map", "parameter", "utm_campaign_first", "parameterValue", ["macro", 87]]
                ],
                "vtp_eventName": "begin_checkout_carregamento",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 55],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 210
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": ["macro", 18],
                "vtp_eventId": ["macro", 2],
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 27]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 7]],
                    ["map", "name", "st", "value", ["macro", 10]],
                    ["map", "name", "zp", "value", ["macro", 28]],
                    ["map", "name", "fn", "value", ["macro", 29]],
                    ["map", "name", "ln", "value", ["macro", 30]],
                    ["map", "name", "ph", "value", ["macro", 31]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": true,
                "tag_id": 214
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 3]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 8]],
                    ["map", "name", "st", "value", ["macro", 11]],
                    ["map", "name", "zp", "value", ["macro", 13]],
                    ["map", "name", "fn", "value", ["macro", 15]],
                    ["map", "name", "ln", "value", ["macro", 16]],
                    ["map", "name", "ph", "value", ["macro", 17]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_ids", "value", ["macro", 41]],
                    ["map", "name", "value", "value", ["macro", 38]],
                    ["map", "name", "currency", "value", "BRL"],
                    ["map", "name", "content_type", "value", ["macro", 21]],
                    ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]],
                    ["map", "name", "content_name", "value", ["macro", 42]],
                    ["map", "name", "order_id", "value", ["macro", 39]],
                    ["map", "name", "shipping", "value", ["macro", 40]],
                    ["map", "name", "predicted_ltv", "value", ["macro", 88]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_customEventName": "purchase_new_customer",
                "vtp_advancedMatching": true,
                "tag_id": 216
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "user_data.email_address", "parameterValue", ["macro", 59]],
                    ["map", "parameter", "user_data.phone_number", "parameterValue", ["macro", 60]]
                ],
                "vtp_eventName": "lead_popup",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 57],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 217
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 37]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 38]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "transaction_id", "parameterValue", ["macro", 39]],
                    ["map", "parameter", "shipping", "parameterValue", ["macro", 40]],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 41]],
                    ["map", "parameter", "x-fb-cd-content_name", "parameterValue", ["macro", 42]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]],
                    ["map", "parameter", "payment_type", "parameterValue", ["macro", 43]],
                    ["map", "parameter", "coupon", "parameterValue", ["macro", 44]],
                    ["map", "parameter", "new_customer", "parameterValue", ["macro", 45]]
                ],
                "vtp_eventName": "purchase_old_customer",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 55],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 218
            }, {
                "function": "__googtag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_tagId": ["macro", 46],
                "vtp_configSettingsTable": ["list", ["map", "parameter", "send_page_view", "parameterValue", "false"],
                    ["map", "parameter", "server_container_url", "parameterValue", ["macro", 89]]
                ],
                "tag_id": 221
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "item_list_id", "parameterValue", ["macro", 90]],
                    ["map", "parameter", "item_list_name", "parameterValue", ["macro", 73]],
                    ["map", "parameter", "item_category", "parameterValue", ["macro", 75]],
                    ["map", "parameter", "item_category2", "parameterValue", ["macro", 76]]
                ],
                "vtp_eventName": "view_item_list",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 57],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 222
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "search_term", "parameterValue", ["macro", 66]]],
                "vtp_eventName": "search",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 57],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 226
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_standardEventName": "ViewContent",
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 27]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 7]],
                    ["map", "name", "st", "value", ["macro", 10]],
                    ["map", "name", "zp", "value", ["macro", 28]],
                    ["map", "name", "fn", "value", ["macro", 29]],
                    ["map", "name", "ln", "value", ["macro", 30]],
                    ["map", "name", "ph", "value", ["macro", 31]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_ids", "value", ["macro", 32]],
                    ["map", "name", "value", "value", ["macro", 33]],
                    ["map", "name", "currency", "value", "BRL"],
                    ["map", "name", "content_type", "value", ["macro", 21]],
                    ["map", "name", "content_name", "value", ["macro", 34]],
                    ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_advancedMatching": true,
                "tag_id": 228
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 64]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 20]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 19]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]],
                    ["map", "parameter", "user_data.phone_number", "parameterValue", ["macro", 91]],
                    ["map", "parameter", "user_data.email_address", "parameterValue", ["macro", 61]],
                    ["map", "parameter", "x-fb-ud-ge", "parameterValue", ["macro", 93]],
                    ["map", "parameter", "x-fb-ud-db", "parameterValue", ["macro", 95]]
                ],
                "vtp_eventName": "sign_up",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 55],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 229
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "user_data.address.first_name", "parameterValue", ["macro", 62]],
                    ["map", "parameter", "user_data.email_address", "parameterValue", ["macro", 61]]
                ],
                "vtp_eventName": "pop_up_email",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 57],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 232
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 27]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 7]],
                    ["map", "name", "st", "value", ["macro", 10]],
                    ["map", "name", "zp", "value", ["macro", 28]],
                    ["map", "name", "fn", "value", ["macro", 29]],
                    ["map", "name", "ln", "value", ["macro", 30]],
                    ["map", "name", "ph", "value", ["macro", 31]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_ids", "value", ["macro", 70]],
                    ["map", "name", "value", "value", ["macro", 69]],
                    ["map", "name", "currency", "value", "BRL"],
                    ["map", "name", "content_type", "value", ["macro", 21]],
                    ["map", "name", "content_name", "value", ["macro", 71]],
                    ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_customEventName": "view_cart",
                "vtp_advancedMatching": true,
                "tag_id": 234
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "lead_whatsapp",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 57],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 237
            }, {
                "function": "__cvt_5RM3Q",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_eventId": ["macro", 2],
                "vtp_standardEventName": "AddPaymentInfo",
                "vtp_advancedMatchingList": ["list", ["map", "name", "em", "value", ["macro", 3]],
                    ["map", "name", "external_id", "value", ["macro", 4]],
                    ["map", "name", "ct", "value", ["macro", 8]],
                    ["map", "name", "st", "value", ["macro", 11]],
                    ["map", "name", "zp", "value", ["macro", 13]],
                    ["map", "name", "fn", "value", ["macro", 15]],
                    ["map", "name", "ln", "value", ["macro", 16]],
                    ["map", "name", "ph", "value", ["macro", 17]],
                    ["map", "name", "cn", "value", "br"]
                ],
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_pixelId": ["macro", 18],
                "vtp_objectPropertyList": ["list", ["map", "name", "content_ids", "value", ["macro", 19]],
                    ["map", "name", "value", "value", ["macro", 20]],
                    ["map", "name", "currency", "value", "BRL"],
                    ["map", "name", "content_type", "value", ["macro", 21]],
                    ["map", "name", "fbp", "value", ["macro", 22]],
                    ["map", "name", "fbc", "value", ["macro", 26]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_advancedMatching": true,
                "tag_id": 241
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 64]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 20]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 19]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]]
                ],
                "vtp_eventName": "add_payment_info",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 55],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 243
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 64]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 20]],
                    ["map", "parameter", "currency", "parameterValue", "BRL"],
                    ["map", "parameter", "x-fb-cd-content_ids", "parameterValue", ["macro", 19]],
                    ["map", "parameter", "x-fb-cd-content_type", "parameterValue", ["macro", 21]],
                    ["map", "parameter", "token_checkout", "parameterValue", ["macro", 84]],
                    ["map", "parameter", "utm_source_first", "parameterValue", ["macro", 85]],
                    ["map", "parameter", "utm_medium_first", "parameterValue", ["macro", 86]],
                    ["map", "parameter", "utm_campaign_first", "parameterValue", ["macro", 87]],
                    ["map", "parameter", "fbc_true", "parameterValue", ["macro", 96]]
                ],
                "vtp_eventName": "begin_checkout",
                "vtp_measurementIdOverride": ["macro", 46],
                "vtp_eventSettingsVariable": ["macro", 55],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 244
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_uniqueTriggerId": "227184559_43",
                "tag_id": 247
            }, {
                "function": "__cl",
                "tag_id": 248
            }, {
                "function": "__cl",
                "tag_id": 249
            }, {
                "function": "__cl",
                "tag_id": 250
            }, {
                "function": "__fsl",
                "vtp_waitForTags": "",
                "vtp_checkValidation": "",
                "vtp_uniqueTriggerId": "227184559_176",
                "tag_id": 251
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "227184559_224_202", "227184559_224_143"],
                "vtp_uniqueTriggerId": "227184559_224",
                "tag_id": 252
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "227184559_224_202",
                "tag_id": 253
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "227184559_224_143",
                "tag_id": 255
            }, {
                "function": "__cl",
                "tag_id": 256
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003ElocalStorage.setItem(\"page_url_ls\",", ["escape", ["macro", 74], 8, 16], ");localStorage.setItem(\"page_referrer_ls\",", ["escape", ["macro", 97], 8, 16], ");\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 38
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar observer=new IntersectionObserver(function(a){a.forEach(function(c){if(c.isIntersecting\u0026\u0026c.target.textContent.trim()===\"Meu Carrinho\"){var b=document.querySelector(\"#quant\");b=b?b.value:null;window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"add_to_cart_tray\",element:\"modal-title\",quantidade:b});observer.unobserve(c.target)}})},{root:null,threshold:.1}),targetElements=document.querySelectorAll(\"h4.modal-title\");\ntargetElements.forEach(function(a){a.textContent.trim()===\"Meu Carrinho\"\u0026\u0026observer.observe(a)});\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 149
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(){var b=window.document.querySelectorAll(\"iframe\");b.forEach(function(c){try{var a=c.contentWindow.document.querySelector('iframe[src^\\x3d\"'+f+'\/_\/service_worker\/\"][src*\\x3d\"sw_iframe.html\"]');if(a)return a.remove(),!0}catch(h){}})}var f=\"https:\/\/webhook.chatuba.me\/webhook\/d3552e24-5703-4b66-bcee-a64dc638faa2\";try{var g=d();if(!g){var e=new MutationObserver(function(b){try{b.forEach(function(c){c.addedNodes.forEach(function(a){a.tagName===\"IFRAME\"\u0026\u0026a.src===\"\"\u0026\u0026(a=d())\u0026\u0026e.disconnect()})})}catch(c){}});e.observe(document.documentElement,\n{childList:!0,subtree:!0})}}catch(b){}})();\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 177
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 98], 3], "\"\u003ElocalStorage.setItem(\"matriz_VI\",JSON.stringify(", ["escape", ["macro", 68], 8, 16], "));localStorage.setItem(\"price_VI\",JSON.stringify(", ["escape", ["macro", 69], 8, 16], "));localStorage.setItem(\"ids_VI\",JSON.stringify(", ["escape", ["macro", 70], 8, 16], "));\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 211
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript nonce=\"", ["escape", ["macro", 98], 3], "\" type=\"text\/gtmscript\"\u003E(function(b,c){var a=b.myPx=b.myPx||{};a.queue=a.queue||[];a.track=a.track||function(){a.queue.push(arguments)};a.identify=a.identify||function(){a.queue.push([\"identify\",arguments])};a.pixelId=\"4e6d2345-2271-4c09-9060-dcef4d7131dd\";b=c.createElement(\"script\");b.async=!0;b.src=\"https:\/\/n8n.caiosantosxp.tech\/webhook\/pixel.js\";b.setAttribute(\"nonce\",\"", ["escape", ["macro", 98], 7], "\");c.head.appendChild(b)})(window,document);\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 246
            }],
            "predicates": [{
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "2"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "checkout"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "4"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "add_to_cart_tray"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "New"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "purchase"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 58],
                "arg1": "Cadastrar"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.click"
            }, {
                "function": "_cn",
                "arg0": ["macro", 58],
                "arg1": "ENVIAR"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.formSubmit"
            }, {
                "function": "_cn",
                "arg0": ["macro", 65],
                "arg1": "Busca"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "cart"
            }, {
                "function": "_cn",
                "arg0": ["macro", 65],
                "arg1": "catalogo"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.load"
            }, {
                "function": "_cn",
                "arg0": ["macro", 77],
                "arg1": "Produto"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "3"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "Existing"
            }, {
                "function": "_cn",
                "arg0": ["macro", 81],
                "arg1": "api.whatsapp"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 82],
                "arg1": "(^$|((^|,)227184559_43($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 83],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.init"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "6"
            }, {
                "function": "_cn",
                "arg0": ["macro", 58],
                "arg1": "Cadastrar"
            }, {
                "function": "_cn",
                "arg0": ["macro", 74],
                "arg1": "fbclid"
            }, {
                "function": "_cn",
                "arg0": ["macro", 74],
                "arg1": "gbraid"
            }, {
                "function": "_cn",
                "arg0": ["macro", 74],
                "arg1": "gclid"
            }, {
                "function": "_cn",
                "arg0": ["macro", 74],
                "arg1": "utm"
            }, {
                "function": "_cn",
                "arg0": ["macro", 74],
                "arg1": "wbraid"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "5"
            }, {
                "function": "_cn",
                "arg0": ["macro", 77],
                "arg1": "EasyCheckout_Identification"
            }, {
                "function": "_eq",
                "arg0": ["macro", 77],
                "arg1": "catalogo"
            }],
            "rules": [
                [
                    ["if", 0, 1],
                    ["add", 0, 32, 46]
                ],
                [
                    ["if", 1, 2],
                    ["add", 1, 8, 46]
                ],
                [
                    ["if", 3],
                    ["add", 2, 14, 46]
                ],
                [
                    ["if", 4, 5],
                    ["add", 3, 19]
                ],
                [
                    ["if", 6],
                    ["add", 4, 18, 43, 44, 46, 33, 34, 35, 36, 37, 38, 41]
                ],
                [
                    ["if", 7, 8],
                    ["add", 5, 20, 40]
                ],
                [
                    ["if", 9, 10],
                    ["add", 6, 27]
                ],
                [
                    ["if", 5],
                    ["add", 7]
                ],
                [
                    ["if", 6, 11],
                    ["add", 9, 24]
                ],
                [
                    ["if", 12],
                    ["add", 10, 28, 46]
                ],
                [
                    ["if", 13, 14],
                    ["add", 11, 23]
                ],
                [
                    ["if", 14, 15],
                    ["add", 12, 25]
                ],
                [
                    ["if", 1, 16],
                    ["add", 13, 26, 46]
                ],
                [
                    ["if", 5, 17],
                    ["add", 15, 21]
                ],
                [
                    ["if", 18, 19, 20],
                    ["add", 16, 29]
                ],
                [
                    ["if", 1],
                    ["unless", 21],
                    ["add", 17, 45, 46]
                ],
                [
                    ["if", 22],
                    ["add", 22]
                ],
                [
                    ["if", 1, 23],
                    ["add", 30, 31, 46]
                ],
                [
                    ["if", 10, 24],
                    ["add", 39]
                ],
                [
                    ["if", 6, 25],
                    ["add", 42]
                ],
                [
                    ["if", 6, 26],
                    ["add", 42]
                ],
                [
                    ["if", 6, 27],
                    ["add", 42]
                ],
                [
                    ["if", 6, 28],
                    ["add", 42]
                ],
                [
                    ["if", 6, 29],
                    ["add", 42]
                ],
                [
                    ["if", 1, 30],
                    ["add", 46]
                ],
                [
                    ["if", 1, 31],
                    ["add", 46]
                ],
                [
                    ["if", 6, 32],
                    ["add", 46]
                ]
            ]
        },
        "runtime": [
            [50, "__cvt_5NR5C", [46, "a"],
                [50, "g", [46, "i"],
                    [36, [2, [2, [2, [15, "i"], "slice", [7, 1]], "split", [7, "&"]], "reduce", [7, [51, "", [7, "j", "k"],
                            [52, "l", [2, [15, "k"], "split", [7, "="]]],
                            [43, [15, "j"],
                                [16, [15, "l"], 0],
                                [16, [15, "l"], 1]
                            ],
                            [36, [15, "j"]]
                        ],
                        [8]
                    ]]]
                ],
                [50, "h", [46, "i", "j"],
                    [52, "k", [2, [2, [2, [17, [15, "e"], "baseURL"], "split", [7, "/"]], "filter", [7, [51, "", [7, "m"],
                        [36, [15, "m"]]
                    ]]], "slice", [7, 2]]],
                    [52, "l", [39, [20, [15, "j"], true],
                        [37, [17, [15, "k"], "length"],
                            [15, "i"]
                        ],
                        [37, [15, "i"], 1]
                    ]],
                    [36, [39, [17, [15, "a"], "returnUriIndex"],
                        [16, [15, "k"],
                            [15, "l"]
                        ],
                        [0, [0, "/", [2, [15, "k"], "join", [7, "/"]]], "/"]
                    ]]
                ],
                [52, "b", ["require", "decodeUriComponent"]],
                [52, "c", [17, [15, "a"], "inputURL"]],
                [52, "d", [20, [2, [15, "c"], "indexOf", [7, "http"]], 0]],
                [22, [28, [15, "d"]],
                    [46, [36, [44]]]
                ],
                [52, "e", [13, [41, "$0"],
                    [3, "$0", [51, "", [7],
                        [52, "i", [8]],
                        [52, "j", [39, [20, [2, [15, "c"], "indexOf", [7, "#"]],
                                [27, 1]
                            ],
                            [17, [15, "c"], "length"],
                            [2, [15, "c"], "indexOf", [7, "#"]]
                        ]],
                        [52, "k", [39, [20, [2, [15, "c"], "indexOf", [7, "?"]],
                                [27, 1]
                            ],
                            [15, "j"],
                            [2, [15, "c"], "indexOf", [7, "?"]]
                        ]],
                        [43, [15, "i"], "baseURL", [2, [15, "c"], "slice", [7, 0, [15, "k"]]]],
                        [43, [15, "i"], "queries", [2, [15, "c"], "slice", [7, [15, "k"],
                            [15, "j"]
                        ]]],
                        [43, [15, "i"], "fragment", [2, [15, "c"], "slice", [7, [15, "j"],
                            [17, [15, "c"], "length"]
                        ]]],
                        [36, [15, "i"]]
                    ]],
                    ["$0"]
                ]],
                [52, "f", [8]],
                [43, [15, "f"], "protocol", [2, [2, [17, [15, "e"], "baseURL"], "slice", [7, 0, [2, [17, [15, "e"], "baseURL"], "indexOf", [7, ":"]]]], "toUpperCase", [7]]],
                [43, [15, "f"], "hostname", [16, [2, [2, [17, [15, "e"], "baseURL"], "split", [7, "/"]], "filter", [7, [51, "", [7, "i"],
                    [36, [15, "i"]]
                ]]], 1]],
                [43, [15, "f"], "rootHostname", [2, [2, [2, [17, [15, "f"], "hostname"], "split", [7, "."]], "slice", [7, [37, [17, [2, [17, [15, "f"], "hostname"], "split", [7, "."]], "length"], 2]]], "join", [7, "."]]],
                [43, [15, "f"], "uri", ["h", [17, [15, "a"], "uriIndex"],
                    [17, [15, "a"], "inverseIndex"]
                ]],
                [43, [15, "f"], "queryParam", [39, [17, [15, "a"], "returnObjectified"],
                    ["g", [17, [15, "e"], "queries"]],
                    [16, ["g", [17, [15, "e"], "queries"]],
                        [17, [15, "a"], "returnQueryKey"]
                    ]
                ]],
                [43, [15, "f"], "fragment", [2, [17, [15, "e"], "fragment"], "slice", [7, 1]]],
                [43, [15, "f"], "baseURL", [17, [15, "e"], "baseURL"]],
                [36, [16, [15, "f"],
                    [17, [15, "a"], "returnComponent"]
                ]]
            ],
            [50, "__cvt_5RM3Q", [46, "a"],
                [52, "b", ["require", "createQueue"]],
                [52, "c", ["require", "callInWindow"]],
                [52, "d", ["require", "aliasInWindow"]],
                [52, "e", ["require", "copyFromWindow"]],
                [52, "f", ["require", "setInWindow"]],
                [52, "g", ["require", "injectScript"]],
                [52, "h", ["require", "makeTableMap"]],
                [52, "i", ["require", "makeNumber"]],
                [52, "j", ["require", "getType"]],
                [52, "k", ["require", "copyFromDataLayer"]],
                [52, "l", ["require", "Math"]],
                [52, "m", ["require", "logToConsole"]],
                [52, "n", [30, ["e", "_fbq_gtm_ids"],
                    [7]
                ]],
                [52, "o", [17, [15, "a"], "pixelId"]],
                [52, "p", [7, "AddPaymentInfo", "AddToCart", "AddToWishlist", "CompleteRegistration", "Contact", "CustomizeProduct", "Donate", "FindLocation", "InitiateCheckout", "Lead", "PageView", "Purchase", "Schedule", "Search", "StartTrial", "SubmitApplication", "Subscribe", "ViewContent"]],
                [52, "q", ["k", "ecommerce", 1]],
                [52, "r", [51, "", [7, "aG"],
                    ["m", [15, "aG"]],
                    [2, [15, "a"], "gtmOnFailure", [7]]
                ]],
                [52, "s", [51, "", [7, "aG", "aH"],
                    [55, "aI", [15, "aH"],
                        [46, [22, [2, [15, "aH"], "hasOwnProperty", [7, [15, "aI"]]],
                            [46, [43, [15, "aG"],
                                [15, "aI"],
                                [16, [15, "aH"],
                                    [15, "aI"]
                                ]
                            ]]
                        ]]
                    ],
                    [36, [15, "aG"]]
                ]],
                [52, "t", [51, "", [7, "aG"],
                    [36, [8, "id", [17, [15, "aG"], "id"], "quantity", [17, [15, "aG"], "quantity"]]]
                ]],
                [41, "u", "v", "w"],
                [22, [17, [15, "a"], "enhancedEcommerce"],
                    [46, [22, [28, [15, "q"]],
                            [46, [36, ["r", "Facebook Pixel: No valid \"ecommerce\" object found in dataLayer"]]]
                        ],
                        [22, [17, [15, "q"], "detail"],
                            [46, [3, "u", "ViewContent"],
                                [3, "v", "detail"]
                            ],
                            [46, [22, [17, [15, "q"], "add"],
                                [46, [3, "u", "AddToCart"],
                                    [3, "v", "add"]
                                ],
                                [46, [22, [17, [15, "q"], "checkout"],
                                    [46, [3, "u", "InitiateCheckout"],
                                        [3, "v", "checkout"]
                                    ],
                                    [46, [22, [17, [15, "q"], "purchase"],
                                        [46, [3, "u", "Purchase"],
                                            [3, "v", "purchase"]
                                        ],
                                        [46, [36, ["r", "Facebook Pixel: Most recently pushed \"ecommerce\" object must be one of types \"detail\", \"add\", \"checkout\" or \"purchase\"."]]]
                                    ]]
                                ]]
                            ]]
                        ],
                        [22, [30, [28, [17, [16, [15, "q"],
                                    [15, "v"]
                                ], "products"]],
                                [21, ["j", [17, [16, [15, "q"],
                                    [15, "v"]
                                ], "products"]], "array"]
                            ],
                            [46, [36, ["r", "Facebook pixel: Most recently pushed \"ecommerce\" object did not have a valid \"products\" array."]]]
                        ],
                        [3, "w", [8, "content_type", "product", "contents", [2, [17, [16, [15, "q"],
                            [15, "v"]
                        ], "products"], "map", [7, [15, "t"]]], "value", [2, [17, [16, [15, "q"],
                            [15, "v"]
                        ], "products"], "reduce", [7, [51, "", [7, "aG", "aH"],
                            [52, "aI", [10, [2, [15, "l"], "round", [7, [26, [26, ["i", [30, [17, [15, "aH"], "price"], 0]],
                                [30, [17, [15, "aH"], "quantity"], 1]
                            ], 100]]], 100]],
                            [36, [0, [15, "aG"],
                                [15, "aI"]
                            ]]
                        ], 0]], "currency", [30, [17, [15, "q"], "currencyCode"], "USD"]]],
                        [22, [18, [2, [7, "InitiateCheckout", "Purchase"], "indexOf", [7, [15, "u"]]],
                                [27, 1]
                            ],
                            [46, [43, [15, "w"], "num_items", [2, [17, [16, [15, "q"],
                                [15, "v"]
                            ], "products"], "reduce", [7, [51, "", [7, "aG", "aH"],
                                [36, [0, [15, "aG"],
                                    ["i", [30, [17, [15, "aH"], "quantity"], 1]]
                                ]]
                            ], 0]]]]
                        ]
                    ]
                ],
                [52, "x", [39, [1, [17, [15, "a"], "advancedMatchingList"],
                        [17, [17, [15, "a"], "advancedMatchingList"], "length"]
                    ],
                    ["h", [17, [15, "a"], "advancedMatchingList"], "name", "value"],
                    [8]
                ]],
                [52, "y", [39, [1, [17, [15, "a"], "objectPropertyList"],
                        [17, [17, [15, "a"], "objectPropertyList"], "length"]
                    ],
                    ["h", [17, [15, "a"], "objectPropertyList"], "name", "value"],
                    [8]
                ]],
                [52, "z", [39, [20, ["j", [17, [15, "a"], "objectPropertiesFromVariable"]], "object"],
                    [17, [15, "a"], "objectPropertiesFromVariable"],
                    [8]
                ]],
                [52, "aA", ["s", [15, "z"],
                    [15, "y"]
                ]],
                [52, "aB", ["s", [30, [15, "w"],
                        [8]
                    ],
                    [15, "aA"]
                ]],
                [3, "u", [30, [15, "u"],
                    [39, [20, [17, [15, "a"], "eventName"], "custom"],
                        [17, [15, "a"], "customEventName"],
                        [39, [20, [17, [15, "a"], "eventName"], "variable"],
                            [17, [15, "a"], "variableEventName"],
                            [17, [15, "a"], "standardEventName"]
                        ]
                    ]
                ]],
                [52, "aC", [39, [20, [2, [15, "p"], "indexOf", [7, [15, "u"]]],
                    [27, 1]
                ], "trackSingleCustom", "trackSingle"]],
                [52, "aD", [39, [20, [17, [15, "a"], "consent"], false], "revoke", "grant"]],
                [52, "aE", [51, "", [7],
                    [41, "aG"],
                    [3, "aG", ["e", "fbq"]],
                    [22, [15, "aG"],
                        [46, [36, [15, "aG"]]]
                    ],
                    ["f", "fbq", [51, "", [7],
                        [52, "aH", ["e", "fbq.callMethod.apply"]],
                        [22, [15, "aH"],
                            [46, ["c", "fbq.callMethod.apply", [45],
                                [15, "arguments"]
                            ]],
                            [46, ["c", "fbq.queue.push", [15, "arguments"]]]
                        ]
                    ]],
                    ["d", "_fbq", "fbq"],
                    ["b", "fbq.queue"],
                    [36, ["e", "fbq"]]
                ]],
                [52, "aF", ["aE"]],
                ["aF", "consent", [15, "aD"]],
                [22, [17, [15, "a"], "dpoLDU"],
                    [46, ["aF", "dataProcessingOptions", [7, "LDU"],
                        ["i", [17, [15, "a"], "dpoCountry"]],
                        ["i", [17, [15, "a"], "dpoState"]]
                    ]]
                ],
                [2, [2, [15, "o"], "split", [7, ","]], "forEach", [7, [51, "", [7, "aG"],
                    [22, [20, [2, [15, "n"], "indexOf", [7, [15, "aG"]]],
                            [27, 1]
                        ],
                        [46, [22, [17, [15, "a"], "disableAutoConfig"],
                                [46, ["aF", "set", "autoConfig", false, [15, "aG"]]]
                            ],
                            [22, [17, [15, "a"], "disablePushState"],
                                [46, ["f", "fbq.disablePushState", true]]
                            ],
                            ["aF", "init", [15, "aG"],
                                [15, "x"]
                            ],
                            ["aF", "set", "agent", "tmSimo-GTM-WebTemplate", [15, "aG"]],
                            [2, [15, "n"], "push", [7, [15, "aG"]]],
                            ["f", "_fbq_gtm_ids", [15, "n"], true]
                        ]
                    ],
                    [22, [17, [15, "a"], "eventId"],
                        [46, ["aF", [15, "aC"],
                            [15, "aG"],
                            [15, "u"],
                            [15, "aB"],
                            [8, "eventID", [17, [15, "a"], "eventId"]]
                        ]],
                        [46, ["aF", [15, "aC"],
                            [15, "aG"],
                            [15, "u"],
                            [15, "aB"]
                        ]]
                    ]
                ]]],
                ["g", "https://connect.facebook.net/en_US/fbevents.js", [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"], "fbPixel"
                ]
            ],
            [50, "__cvt_5RMBX", [46, "a"],
                [52, "b", ["require", "copyFromDataLayer"]],
                [52, "c", ["require", "getType"]],
                [52, "d", ["require", "makeNumber"]],
                [52, "e", ["require", "makeTableMap"]],
                [52, "f", ["require", "Math"]],
                [52, "g", [39, [17, [15, "a"], "customDims"],
                    ["e", [17, [15, "a"], "customDims"], "cdindex", "cdparam"],
                    [8]
                ]],
                [52, "h", [39, [17, [15, "a"], "customMets"],
                    ["e", [17, [15, "a"], "customMets"], "cmindex", "cmparam"],
                    [8]
                ]],
                [52, "i", [51, "", [7, "l"],
                    [52, "m", [39, [17, [15, "l"], "category"],
                        [2, [17, [15, "l"], "category"], "split", [7, "/"]],
                        [7]
                    ]],
                    [52, "n", [8, "item_id", [17, [15, "l"], "id"], "item_name", [17, [15, "l"], "name"], "price", [17, [15, "l"], "price"], "item_brand", [17, [15, "l"], "brand"], "item_variant", [17, [15, "l"], "variant"], "quantity", [39, [17, [15, "l"], "quantity"],
                        [2, [15, "f"], "round", [7, [17, [15, "l"], "quantity"]]],
                        [17, [15, "l"], "quantity"]
                    ]]],
                    [2, [15, "m"], "forEach", [7, [51, "", [7, "o", "p"],
                        [22, [20, [15, "p"], 0],
                            [46, [43, [15, "n"], "item_category", [15, "o"]]],
                            [46, [43, [15, "n"],
                                [0, "item_category", [0, [15, "p"], 1]],
                                [15, "o"]
                            ]]
                        ]
                    ]]],
                    [55, "o", [15, "l"],
                        [46, [22, [16, [15, "g"],
                                    [15, "o"]
                                ],
                                [46, [43, [15, "n"],
                                    [16, [15, "g"],
                                        [15, "o"]
                                    ],
                                    [16, [15, "l"],
                                        [15, "o"]
                                    ]
                                ]]
                            ],
                            [22, [16, [15, "h"],
                                    [15, "o"]
                                ],
                                [46, [43, [15, "n"],
                                    [16, [15, "h"],
                                        [15, "o"]
                                    ],
                                    [16, [15, "l"],
                                        [15, "o"]
                                    ]
                                ]]
                            ],
                            [22, [20, [2, [15, "o"], "indexOf", [7, "dimension"]], 0],
                                [46, [53, [41, "p"],
                                    [3, "p", [16, [15, "g"],
                                        [16, [2, [15, "o"], "split", [7, "dimension"]], 1]
                                    ]],
                                    [43, [15, "n"],
                                        [30, [15, "p"],
                                            [15, "o"]
                                        ],
                                        [16, [15, "l"],
                                            [15, "o"]
                                        ]
                                    ]
                                ]]
                            ],
                            [22, [20, [2, [15, "o"], "indexOf", [7, "metric"]], 0],
                                [46, [53, [41, "p"],
                                    [3, "p", [16, [15, "h"],
                                        [16, [2, [15, "o"], "split", [7, "metric"]], 1]
                                    ]],
                                    [43, [15, "n"],
                                        [30, [15, "p"],
                                            [15, "o"]
                                        ],
                                        [30, ["d", [16, [15, "l"],
                                            [15, "o"]
                                        ]], 0]
                                    ]
                                ]]
                            ]
                        ]
                    ],
                    [36, [15, "n"]]
                ]],
                [52, "j", [51, "", [7, "l"],
                    [52, "m", ["i", [15, "l"]]],
                    [43, [15, "m"], "item_list_name", [17, [15, "l"], "list"]],
                    [43, [15, "m"], "index", [17, [15, "l"], "position"]],
                    [36, [15, "m"]]
                ]],
                [52, "k", [51, "", [7, "l"],
                    [36, [8, "promotion_name", [17, [15, "l"], "name"], "promotion_id", [17, [15, "l"], "id"], "creative_name", [17, [15, "l"], "creative"], "creative_slot", [17, [15, "l"], "position"]]]
                ]],
                [22, [20, [17, [15, "a"], "option"], "auto"],
                    [46, [53, [52, "l", [30, ["b", "ecommerce", 1],
                            [8]
                        ]],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "click"]],
                                [20, ["c", [17, [17, [15, "l"], "click"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "click"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "click"], "actionField"],
                                    [17, [17, [17, [15, "l"], "click"], "actionField"], "list"],
                                    [44]
                                ]],
                                [43, [15, "n"], "index", [17, [15, "m"], "position"]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "detail"]],
                                [20, ["c", [17, [17, [15, "l"], "detail"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "detail"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "detail"], "actionField"],
                                    [17, [17, [17, [15, "l"], "detail"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "add"]],
                                [20, ["c", [17, [17, [15, "l"], "add"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "add"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "add"], "actionField"],
                                    [17, [17, [17, [15, "l"], "add"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "remove"]],
                                [20, ["c", [17, [17, [15, "l"], "remove"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "remove"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "remove"], "actionField"],
                                    [17, [17, [17, [15, "l"], "remove"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "checkout"]],
                                [20, ["c", [17, [17, [15, "l"], "checkout"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "checkout"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "checkout"], "actionField"],
                                    [17, [17, [17, [15, "l"], "checkout"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "purchase"]],
                                [20, ["c", [17, [17, [15, "l"], "purchase"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "purchase"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "purchase"], "actionField"],
                                    [17, [17, [17, [15, "l"], "purchase"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "refund"]],
                                [20, ["c", [17, [17, [15, "l"], "refund"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "refund"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "refund"], "actionField"],
                                    [17, [17, [17, [15, "l"], "refund"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "impressions"]],
                                [20, ["c", [17, [15, "l"], "impressions"]], "array"]
                            ],
                            [46, [36, [2, [17, [15, "l"], "impressions"], "map", [7, [15, "j"]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "promoView"]],
                                [20, ["c", [17, [17, [15, "l"], "promoView"], "promotions"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "promoView"], "promotions"], "map", [7, [15, "k"]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "promoClick"]],
                                [20, ["c", [17, [17, [15, "l"], "promoClick"], "promotions"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "promoClick"], "promotions"], "map", [7, [15, "k"]]]]]
                        ],
                        [36, [7]]
                    ]]
                ],
                [22, [1, [20, [17, [15, "a"], "option"], "products"],
                        [20, ["c", [17, [15, "a"], "productsVar"]], "array"]
                    ],
                    [46, [36, [2, [17, [15, "a"], "productsVar"], "map", [7, [15, "i"]]]]]
                ],
                [22, [1, [20, [17, [15, "a"], "option"], "impressions"],
                        [20, ["c", [17, [15, "a"], "impressionsVar"]], "array"]
                    ],
                    [46, [36, [2, [17, [15, "a"], "impressionsVar"], "map", [7, [15, "j"]]]]]
                ],
                [22, [20, [17, [15, "a"], "option"], "promotions"],
                    [46, [36, [2, [17, [15, "a"], "promotionsVar"], "map", [7, [15, "k"]]]]]
                ]
            ],
            [50, "__cvt_M63B8", [46, "a"],
                [50, "g", [46],
                    [41, "j"],
                    [3, "j", [30, ["b", "gtm.uniqueEventId"], 0]],
                    [36, [39, [19, [15, "j"], 0],
                        [15, "j"], "00"
                    ]]
                ],
                [50, "h", [46],
                    [41, "j"],
                    [3, "j", ["d", "gtmBrowserId"]],
                    [22, [28, [15, "j"]],
                        [46, [3, "j", [0, ["e"],
                                ["f", 100000, 999999]
                            ]],
                            ["c", "gtmBrowserId", [15, "j"], false]
                        ]
                    ],
                    [36, [15, "j"]]
                ],
                [50, "i", [46],
                    [41, "j"],
                    [3, "j", ["d", "gtmPageLoadId"]],
                    [22, [28, [15, "j"]],
                        [46, [3, "j", [0, ["e"],
                                ["f", 100000, 999999]
                            ]],
                            ["c", "gtmPageLoadId", [15, "j"], false]
                        ]
                    ],
                    [36, [15, "j"]]
                ],
                [52, "b", ["require", "copyFromDataLayer"]],
                [52, "c", ["require", "setInWindow"]],
                [52, "d", ["require", "copyFromWindow"]],
                [52, "e", ["require", "getTimestampMillis"]],
                [52, "f", ["require", "generateRandom"]],
                [36, [0, [0, [0, ["h"], "_"],
                        ["i"]
                    ],
                    ["g"]
                ]]
            ],
            [50, "__cvt_PL349", [46, "a"],
                [52, "b", ["require", "callInWindow"]],
                [52, "c", ["require", "getType"]],
                [52, "d", [17, [15, "a"], "inputArray"]],
                [52, "e", [17, [15, "a"], "keyToConcatenate"]],
                [52, "f", [17, [15, "a"], "delimiter"]],
                [22, [21, ["c", [15, "d"]], "array"],
                    [46, [36]]
                ],
                [36, [2, [2, [2, [15, "d"], "map", [7, [51, "", [7, "g"],
                    [36, [16, [15, "g"],
                        [15, "e"]
                    ]]
                ]]], "filter", [7, [51, "", [7, "g"],
                    [36, [15, "g"]]
                ]]], "join", [7, [15, "f"]]]]
            ],
            [50, "__aev", [46, "a"],
                [50, "aC", [46, "aJ"],
                    [22, [2, [15, "v"], "hasOwnProperty", [7, [15, "aJ"]]],
                        [46, [53, [36, [16, [15, "v"],
                            [15, "aJ"]
                        ]]]]
                    ],
                    [52, "aK", [16, [15, "z"], "element"]],
                    [22, [28, [15, "aK"]],
                        [46, [36, [44]]]
                    ],
                    [52, "aL", ["g", [15, "aK"]]],
                    ["aD", [15, "aJ"],
                        [15, "aL"]
                    ],
                    [36, [15, "aL"]]
                ],
                [50, "aD", [46, "aJ", "aK"],
                    [43, [15, "v"],
                        [15, "aJ"],
                        [15, "aK"]
                    ],
                    [2, [15, "w"], "push", [7, [15, "aJ"]]],
                    [22, [18, [17, [15, "w"], "length"],
                            [15, "s"]
                        ],
                        [46, [53, [52, "aL", [2, [15, "w"], "shift", [7]]],
                            [2, [15, "b"], "delete", [7, [15, "v"],
                                [15, "aL"]
                            ]]
                        ]]
                    ]
                ],
                [50, "aE", [46, "aJ", "aK"],
                    [52, "aL", ["n", [30, [30, [16, [15, "z"], "elementUrl"],
                        [15, "aJ"]
                    ], ""]]],
                    [52, "aM", ["n", [30, [17, [15, "aK"], "component"], "URL"]]],
                    [38, [15, "aM"],
                        [46, "URL", "IS_OUTBOUND", "PROTOCOL", "HOST", "PORT", "PATH", "EXTENSION", "QUERY", "FRAGMENT"],
                        [46, [5, [46, [36, [15, "aL"]]]],
                            [5, [46, [36, ["aG", [15, "aL"],
                                [17, [15, "aK"], "affiliatedDomains"]
                            ]]]],
                            [5, [46, [36, [2, [15, "l"], "B", [7, [15, "aL"]]]]]],
                            [5, [46, [36, [2, [15, "l"], "C", [7, [15, "aL"],
                                [17, [15, "aK"], "stripWww"]
                            ]]]]],
                            [5, [46, [36, [2, [15, "l"], "D", [7, [15, "aL"]]]]]],
                            [5, [46, [36, [2, [15, "l"], "E", [7, [15, "aL"],
                                [17, [15, "aK"], "defaultPages"]
                            ]]]]],
                            [5, [46, [36, [2, [15, "l"], "F", [7, [15, "aL"]]]]]],
                            [5, [46, [22, [17, [15, "aK"], "queryKey"],
                                [46, [53, [36, [2, [15, "l"], "H", [7, [15, "aL"],
                                    [17, [15, "aK"], "queryKey"]
                                ]]]]],
                                [46, [53, [36, [2, [17, ["m", [15, "aL"]], "search"], "replace", [7, "?", ""]]]]]
                            ]]],
                            [5, [46, [36, [2, [15, "l"], "G", [7, [15, "aL"]]]]]],
                            [9, [46, [36, [17, ["m", [15, "aL"]], "href"]]]]
                        ]
                    ]
                ],
                [50, "aF", [46, "aJ", "aK"],
                    [52, "aL", [8, "ATTRIBUTE", "elementAttribute", "CLASSES", "elementClasses", "ELEMENT", "element", "ID", "elementId", "HISTORY_CHANGE_SOURCE", "historyChangeSource", "HISTORY_NEW_STATE", "newHistoryState", "HISTORY_NEW_URL_FRAGMENT", "newUrlFragment", "HISTORY_OLD_STATE", "oldHistoryState", "HISTORY_OLD_URL_FRAGMENT", "oldUrlFragment", "TARGET", "elementTarget"]],
                    [52, "aM", [16, [15, "z"],
                        [16, [15, "aL"],
                            [15, "aJ"]
                        ]
                    ]],
                    [36, [39, [21, [15, "aM"],
                            [44]
                        ],
                        [15, "aM"],
                        [15, "aK"]
                    ]]
                ],
                [50, "aG", [46, "aJ", "aK"],
                    [22, [28, [15, "aJ"]],
                        [46, [53, [36, false]]]
                    ],
                    [52, "aL", ["aI", [15, "aJ"]]],
                    [22, ["aH", [15, "aL"],
                            ["k"]
                        ],
                        [46, [53, [36, false]]]
                    ],
                    [22, [28, ["q", [15, "aK"]]],
                        [46, [53, [3, "aK", [2, [2, ["n", [30, [15, "aK"], ""]], "replace", [7, ["c", "\\s+", "g"], ""]], "split", [7, ","]]]]]
                    ],
                    [65, "aM", [15, "aK"],
                        [46, [53, [22, [20, ["j", [15, "aM"]], "object"],
                            [46, [53, [22, [16, [15, "aM"], "is_regex"],
                                [46, [53, [52, "aN", ["c", [16, [15, "aM"], "domain"]]],
                                    [22, [20, [15, "aN"],
                                            [45]
                                        ],
                                        [46, [6]]
                                    ],
                                    [22, ["p", [15, "aN"],
                                            [15, "aL"]
                                        ],
                                        [46, [53, [36, false]]]
                                    ]
                                ]],
                                [46, [53, [22, ["aH", [15, "aL"],
                                        [16, [15, "aM"], "domain"]
                                    ],
                                    [46, [53, [36, false]]]
                                ]]]
                            ]]],
                            [46, [22, [20, ["j", [15, "aM"]], "RegExp"],
                                [46, [53, [22, ["p", [15, "aM"],
                                        [15, "aL"]
                                    ],
                                    [46, [53, [36, false]]]
                                ]]],
                                [46, [53, [22, ["aH", [15, "aL"],
                                        [15, "aM"]
                                    ],
                                    [46, [53, [36, false]]]
                                ]]]
                            ]]
                        ]]]
                    ],
                    [36, true]
                ],
                [50, "aH", [46, "aJ", "aK"],
                    [22, [28, [15, "aK"]],
                        [46, [36, false]]
                    ],
                    [22, [19, [2, [15, "aJ"], "indexOf", [7, [15, "aK"]]], 0],
                        [46, [36, true]]
                    ],
                    [3, "aK", ["aI", [15, "aK"]]],
                    [22, [28, [15, "aK"]],
                        [46, [36, false]]
                    ],
                    [3, "aK", [2, [15, "aK"], "toLowerCase", [7]]],
                    [41, "aL"],
                    [3, "aL", [37, [17, [15, "aJ"], "length"],
                        [17, [15, "aK"], "length"]
                    ]],
                    [22, [1, [18, [15, "aL"], 0],
                            [29, [2, [15, "aK"], "charAt", [7, 0]], "."]
                        ],
                        [46, [53, [34, [3, "aL", [37, [15, "aL"], 1]]],
                            [3, "aK", [0, ".", [15, "aK"]]]
                        ]]
                    ],
                    [36, [1, [19, [15, "aL"], 0],
                        [12, [2, [15, "aJ"], "indexOf", [7, [15, "aK"],
                                [15, "aL"]
                            ]],
                            [15, "aL"]
                        ]
                    ]]
                ],
                [50, "aI", [46, "aJ"],
                    [22, [28, ["p", [15, "r"],
                            [15, "aJ"]
                        ]],
                        [46, [53, [3, "aJ", [0, "http://", [15, "aJ"]]]]]
                    ],
                    [36, [2, [15, "l"], "C", [7, [15, "aJ"], true]]]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "internal.createRegex"]],
                [52, "d", ["require", "internal.getElementAttribute"]],
                [52, "e", ["require", "internal.getElementValue"]],
                [52, "f", ["require", "internal.getEventData"]],
                [52, "g", ["require", "internal.getElementInnerText"]],
                [52, "h", ["require", "internal.getElementProperty"]],
                [52, "i", ["require", "internal.copyFromDataLayerCache"]],
                [52, "j", ["require", "getType"]],
                [52, "k", ["require", "getUrl"]],
                [52, "l", [15, "__module_legacyUrls"]],
                [52, "m", ["require", "internal.legacyParseUrl"]],
                [52, "n", ["require", "makeString"]],
                [52, "o", ["require", "templateStorage"]],
                [52, "p", ["require", "internal.testRegex"]],
                [52, "q", [51, "", [7, "aJ"],
                    [36, [20, ["j", [15, "aJ"]], "array"]]
                ]],
                [52, "r", ["c", "^https?:\\/\\/", "i"]],
                [52, "s", 35],
                [52, "t", "eq"],
                [52, "u", "evc"],
                [52, "v", [30, [2, [15, "o"], "getItem", [7, [15, "u"]]],
                    [8]
                ]],
                [2, [15, "o"], "setItem", [7, [15, "u"],
                    [15, "v"]
                ]],
                [52, "w", [30, [2, [15, "o"], "getItem", [7, [15, "t"]]],
                    [7]
                ]],
                [2, [15, "o"], "setItem", [7, [15, "t"],
                    [15, "w"]
                ]],
                [52, "x", [17, [15, "a"], "defaultValue"]],
                [52, "y", [17, [15, "a"], "varType"]],
                [52, "z", ["i", "gtm"]],
                [38, [15, "y"],
                    [46, "TAG_NAME", "TEXT", "URL", "ATTRIBUTE"],
                    [46, [5, [46, [52, "aA", [16, [15, "z"], "element"]],
                            [52, "aB", [1, [15, "aA"],
                                ["h", [15, "aA"], "tagName"]
                            ]],
                            [36, [30, [15, "aB"],
                                [15, "x"]
                            ]]
                        ]],
                        [5, [46, [36, [30, ["aC", ["f", "gtm\\.uniqueEventId"]],
                            [15, "x"]
                        ]]]],
                        [5, [46, [36, ["aE", [15, "x"],
                            [15, "a"]
                        ]]]],
                        [5, [46, [22, [20, [17, [15, "a"], "attribute"],
                                [44]
                            ],
                            [46, [53, [36, ["aF", [15, "y"],
                                [15, "x"]
                            ]]]],
                            [46, [53, [52, "aJ", [16, [15, "z"], "element"]],
                                [52, "aK", [1, [15, "aJ"],
                                    [39, [20, [17, [15, "a"], "attribute"], "value"],
                                        ["e", [15, "aJ"]],
                                        ["d", [15, "aJ"],
                                            [17, [15, "a"], "attribute"]
                                        ]
                                    ]
                                ]],
                                [36, [30, [30, [15, "aK"],
                                    [15, "x"]
                                ], ""]]
                            ]]
                        ]]],
                        [9, [46, [36, ["aF", [15, "y"],
                            [15, "x"]
                        ]]]]
                    ]
                ]
            ],
            [50, "__c", [46, "a"],
                [36, [17, [15, "a"], "value"]]
            ],
            [50, "__cl", [46, "a"],
                [52, "b", ["require", "internal.enableAutoEventOnClick"]],
                ["b"],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__d", [46, "a"],
                [50, "j", [46, "l", "m"],
                    [22, [28, [15, "l"]],
                        [46, [53, [36, [45]]]]
                    ],
                    [22, [28, [15, "m"]],
                        [46, [53, [36, ["c", [15, "l"]]]]]
                    ],
                    [22, [20, [15, "m"], "value"],
                        [46, [53, [36, ["g", [15, "l"]]]]]
                    ],
                    [22, [1, [20, [15, "m"], "checked"],
                            [20, ["f", [15, "l"]], "HTMLInputElement"]
                        ],
                        [46, [53, [52, "n", ["h", [15, "l"], "type"]],
                            [22, [30, [20, [15, "n"], "radio"],
                                    [20, [15, "n"], "checkbox"]
                                ],
                                [46, [53, [36, ["i", [15, "l"], "checked"]]]]
                            ]
                        ]]
                    ],
                    [36, ["h", [15, "l"],
                        [15, "m"]
                    ]]
                ],
                [52, "b", ["require", "internal.getElementById"]],
                [52, "c", ["require", "internal.getElementInnerText"]],
                [52, "d", ["require", "internal.getElementsByCssSelector"]],
                [52, "e", ["require", "makeString"]],
                [52, "f", ["require", "getType"]],
                [52, "g", ["require", "internal.getElementValue"]],
                [52, "h", ["require", "internal.getElementAttribute"]],
                [52, "i", ["require", "internal.getElementProperty"]],
                [41, "k"],
                [3, "k", [44]],
                [22, [12, [17, [15, "a"], "selectorType"], "CSS"],
                    [46, [53, [52, "l", ["d", [17, [15, "a"], "elementSelector"]]],
                        [22, [1, [15, "l"],
                                [18, [17, [15, "l"], "length"], 0]
                            ],
                            [46, [53, [3, "k", [16, [15, "l"], 0]]]]
                        ]
                    ]],
                    [46, [53, [3, "k", ["b", [17, [15, "a"], "elementId"]]]]]
                ],
                [36, [2, ["e", ["j", [15, "k"],
                    [17, [15, "a"], "attributeName"]
                ]], "trim", [7]]]
            ],
            [50, "__e", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getEventData"]],
                    ["$0", "event"]
                ]]
            ],
            [50, "__f", [46, "a"],
                [52, "b", ["require", "copyFromDataLayer"]],
                [52, "c", ["require", "getReferrerUrl"]],
                [52, "d", ["require", "makeString"]],
                [52, "e", ["require", "parseUrl"]],
                [52, "f", [15, "__module_legacyUrls"]],
                [52, "g", [30, ["b", "gtm.referrer", 1],
                    ["c"]
                ]],
                [22, [28, [15, "g"]],
                    [46, [36, ["d", [15, "g"]]]]
                ],
                [38, [17, [15, "a"], "component"],
                    [46, "PROTOCOL", "HOST", "PORT", "PATH", "QUERY", "FRAGMENT", "URL"],
                    [46, [5, [46, [36, [2, [15, "f"], "B", [7, [15, "g"]]]]]],
                        [5, [46, [36, [2, [15, "f"], "C", [7, [15, "g"],
                            [17, [15, "a"], "stripWww"]
                        ]]]]],
                        [5, [46, [36, [2, [15, "f"], "D", [7, [15, "g"]]]]]],
                        [5, [46, [36, [2, [15, "f"], "E", [7, [15, "g"],
                            [17, [15, "a"], "defaultPages"]
                        ]]]]],
                        [5, [46, [22, [17, [15, "a"], "queryKey"],
                                [46, [53, [36, [2, [15, "f"], "H", [7, [15, "g"],
                                    [17, [15, "a"], "queryKey"]
                                ]]]]]
                            ],
                            [52, "h", ["e", [15, "g"]]],
                            [36, [2, [17, [15, "h"], "search"], "replace", [7, "?", ""]]]
                        ]],
                        [5, [46, [36, [2, [15, "f"], "G", [7, [15, "g"]]]]]],
                        [5, [46]],
                        [9, [46, [36, [2, [15, "f"], "A", [7, ["d", [15, "g"]]]]]]]
                    ]
                ]
            ],
            [50, "__fsl", [46, "a"],
                [52, "b", ["require", "internal.enableAutoEventOnFormSubmit"]],
                [52, "c", [8, "waitForTags", [17, [15, "a"], "waitForTags"], "checkValidation", [17, [15, "a"], "checkValidation"], "waitForTagsTimeout", [17, [15, "a"], "waitForTagsTimeout"]]],
                [52, "d", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
                ["b", [15, "c"],
                    [15, "d"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__googtag", [46, "a"],
                [50, "m", [46, "v", "w"],
                    [66, "x", [2, [15, "b"], "keys", [7, [15, "w"]]],
                        [46, [53, [43, [15, "v"],
                            [15, "x"],
                            [16, [15, "w"],
                                [15, "x"]
                            ]
                        ]]]
                    ]
                ],
                [50, "n", [46],
                    [36, [7, [17, [15, "f"], "HU"],
                        [17, [15, "f"], "IM"]
                    ]]
                ],
                [50, "o", [46, "v"],
                    [52, "w", ["n"]],
                    [65, "x", [15, "w"],
                        [46, [53, [52, "y", [16, [15, "v"],
                                [15, "x"]
                            ]],
                            [22, [15, "y"],
                                [46, [36, [15, "y"]]]
                            ]
                        ]]
                    ],
                    [36, [44]]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "createArgumentsQueue"]],
                [52, "d", [15, "__module_gtag"]],
                [52, "e", ["require", "internal.gtagConfig"]],
                [52, "f", [15, "__module_gtagSchema"]],
                [52, "g", ["require", "getType"]],
                [52, "h", ["require", "internal.loadGoogleTag"]],
                [52, "i", ["require", "logToConsole"]],
                [52, "j", ["require", "makeNumber"]],
                [52, "k", ["require", "makeString"]],
                [52, "l", ["require", "makeTableMap"]],
                [52, "p", [30, [17, [15, "a"], "tagId"], ""]],
                [22, [30, [21, ["g", [15, "p"]], "string"],
                        [24, [2, [15, "p"], "indexOf", [7, "-"]], 0]
                    ],
                    [46, [53, ["i", [0, "Invalid Measurement ID for the GA4 Configuration tag: ", [15, "p"]]],
                        [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]]
                ],
                [52, "q", [30, [17, [15, "a"], "configSettingsVariable"],
                    [8]
                ]],
                [52, "r", [30, ["l", [30, [17, [15, "a"], "configSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["m", [15, "q"],
                    [15, "r"]
                ],
                [52, "s", [30, [17, [15, "a"], "eventSettingsVariable"],
                    [8]
                ]],
                [52, "t", [30, ["l", [30, [17, [15, "a"], "eventSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["m", [15, "s"],
                    [15, "t"]
                ],
                [52, "u", [15, "q"]],
                ["m", [15, "u"],
                    [15, "s"]
                ],
                [22, [30, [2, [15, "u"], "hasOwnProperty", [7, [17, [15, "f"], "JI"]]],
                        [17, [15, "a"], "userProperties"]
                    ],
                    [46, [53, [52, "v", [30, [16, [15, "u"],
                                [17, [15, "f"], "JI"]
                            ],
                            [8]
                        ]],
                        ["m", [15, "v"],
                            [30, ["l", [30, [17, [15, "a"], "userProperties"],
                                    [7]
                                ], "name", "value"],
                                [8]
                            ]
                        ],
                        [43, [15, "u"],
                            [17, [15, "f"], "JI"],
                            [15, "v"]
                        ]
                    ]]
                ],
                [2, [15, "d"], "E", [7, [15, "u"],
                    [17, [15, "d"], "B"],
                    [51, "", [7, "v"],
                        [36, [39, [20, "false", [2, ["k", [15, "v"]], "toLowerCase", [7]]], false, [28, [28, [15, "v"]]]]]
                    ]
                ]],
                [2, [15, "d"], "E", [7, [15, "u"],
                    [17, [15, "d"], "D"],
                    [51, "", [7, "v"],
                        [36, ["j", [15, "v"]]]
                    ]
                ]],
                ["h", [15, "p"],
                    [8, "firstPartyUrl", ["o", [15, "u"]]]
                ],
                ["e", [15, "p"],
                    [15, "u"],
                    [8, "noTargetGroup", true]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__gtes", [46, "a"],
                [50, "f", [46, "h", "i"],
                    [66, "j", [2, [15, "b"], "keys", [7, [15, "i"]]],
                        [46, [53, [43, [15, "h"],
                            [15, "j"],
                            [16, [15, "i"],
                                [15, "j"]
                            ]
                        ]]]
                    ]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "getType"]],
                [52, "d", [15, "__module_gtagSchema"]],
                [52, "e", ["require", "makeTableMap"]],
                [52, "g", [30, ["e", [30, [17, [15, "a"], "eventSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                [22, [17, [15, "a"], "userProperties"],
                    [46, [53, [41, "h"],
                        [3, "h", [30, [16, [15, "g"],
                                [17, [15, "d"], "JI"]
                            ],
                            [8]
                        ]],
                        [22, [29, ["c", [15, "h"]], "object"],
                            [46, [53, [3, "h", [8]]]]
                        ],
                        ["f", [15, "h"],
                            [30, ["e", [30, [17, [15, "a"], "userProperties"],
                                    [7]
                                ], "name", "value"],
                                [8]
                            ]
                        ],
                        [43, [15, "g"],
                            [17, [15, "d"], "JI"],
                            [15, "h"]
                        ]
                    ]]
                ],
                [36, [15, "g"]]
            ],
            [50, "__html", [46, "a"],
                [52, "b", ["require", "internal.injectHtml"]],
                ["b", [17, [15, "a"], "html"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"],
                    [17, [15, "a"], "useIframe"],
                    [17, [15, "a"], "supportDocumentWrite"]
                ]
            ],
            [50, "__jsm", [46, "a"],
                [52, "b", ["require", "internal.executeJavascriptString"]],
                [22, [20, [17, [15, "a"], "javascript"],
                        [44]
                    ],
                    [46, [36]]
                ],
                [36, ["b", [17, [15, "a"], "javascript"]]]
            ],
            [50, "__k", [46, "a"],
                [52, "b", ["require", "copyFromDataLayer"]],
                [52, "c", ["require", "getCookieValues"]],
                [52, "d", ["require", "internal.parseCookieValuesFromString"]],
                [52, "e", ["b", "gtm.cookie", 1]],
                [22, [15, "e"],
                    [46, [53, [36, [16, ["d", [15, "e"],
                        [17, [15, "a"], "name"],
                        [28, [28, [17, [15, "a"], "decodeCookie"]]]
                    ], 0]]]]
                ],
                [36, [16, ["c", [17, [15, "a"], "name"],
                    [28, [28, [17, [15, "a"], "decodeCookie"]]]
                ], 0]]
            ],
            [50, "__lcl", [46, "a"],
                [52, "b", ["require", "makeInteger"]],
                [52, "c", ["require", "makeString"]],
                [52, "d", ["require", "internal.enableAutoEventOnLinkClick"]],
                [52, "e", [8]],
                [22, [17, [15, "a"], "waitForTags"],
                    [46, [53, [43, [15, "e"], "waitForTags", true],
                        [43, [15, "e"], "waitForTagsTimeout", ["b", [17, [15, "a"], "waitForTagsTimeout"]]]
                    ]]
                ],
                [22, [17, [15, "a"], "checkValidation"],
                    [46, [53, [43, [15, "e"], "checkValidation", true]]]
                ],
                [52, "f", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
                ["d", [15, "e"],
                    [15, "f"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__remm", [46, "a"],
                [52, "b", ["require", "internal.createRegex"]],
                [52, "c", ["require", "internal.testRegex"]],
                [52, "d", ["require", "makeString"]],
                [52, "e", ["d", [17, [15, "a"], "input"]]],
                [52, "f", [30, [17, [15, "a"], "map"],
                    [7]
                ]],
                [52, "g", [17, [15, "a"], "fullMatch"]],
                [52, "h", [39, [17, [15, "a"], "ignoreCase"], "gi", "g"]],
                [41, "i"],
                [3, "i", [17, [15, "a"], "defaultValue"]],
                [65, "j", [15, "f"],
                    [46, [53, [41, "k"],
                        [3, "k", [30, [16, [15, "j"], "key"], ""]],
                        [22, [15, "g"],
                            [46, [3, "k", [0, [0, "^", [15, "k"]], "$"]]]
                        ],
                        [52, "l", ["b", [15, "k"],
                            [15, "h"]
                        ]],
                        [22, ["c", [15, "l"],
                                [15, "e"]
                            ],
                            [46, [53, [41, "m"],
                                [3, "m", [16, [15, "j"], "value"]],
                                [22, [17, [15, "a"], "replaceAfterMatch"],
                                    [46, [3, "m", [2, [15, "e"], "replace", [7, [15, "l"],
                                        [15, "m"]
                                    ]]]]
                                ],
                                [3, "i", [15, "m"]],
                                [4]
                            ]]
                        ]
                    ]]
                ],
                [36, [15, "i"]]
            ],
            [50, "__smm", [46, "a"],
                [52, "b", [17, [15, "a"], "input"]],
                [52, "c", [30, [13, [41, "$0"],
                        [3, "$0", ["require", "makeTableMap"]],
                        ["$0", [30, [17, [15, "a"], "map"],
                            [7]
                        ], "key", "value"]
                    ],
                    [8]
                ]],
                [36, [39, [2, [15, "c"], "hasOwnProperty", [7, [15, "b"]]],
                    [16, [15, "c"],
                        [15, "b"]
                    ],
                    [17, [15, "a"], "defaultValue"]
                ]]
            ],
            [50, "__tg", [46, "a"],
                [50, "m", [46, "o"],
                    [2, [15, "h"], "push", [7, [15, "o"]]],
                    [22, [18, [17, [15, "h"], "length"], 1],
                        [46, [36]]
                    ],
                    ["b", [51, "", [7],
                        [52, "p", [2, [15, "h"], "join", [7, ","]]],
                        [43, [15, "h"], "length", 0],
                        ["c", [8, "event", "gtm.triggerGroup", "gtm.triggers", [15, "p"]]]
                    ]]
                ],
                [50, "n", [46, "o", "p"],
                    [52, "q", [16, [15, "e"],
                        [15, "p"]
                    ]],
                    [52, "r", [2, [15, "q"], "indexOf", [7, [15, "o"]]]],
                    [22, [20, [15, "r"],
                            [27, 1]
                        ],
                        [46, [36]]
                    ],
                    [2, [15, "q"], "splice", [7, [15, "r"], 1]],
                    [22, [17, [15, "q"], "length"],
                        [46, [36]]
                    ],
                    ["m", [15, "p"]]
                ],
                [52, "b", ["require", "callLater"]],
                [52, "c", ["require", "internal.pushToDataLayer"]],
                [52, "d", ["require", "templateStorage"]],
                [52, "e", [30, [2, [15, "d"], "getItem", [7, "groups"]],
                    [8]
                ]],
                [2, [15, "d"], "setItem", [7, "groups", [15, "e"]]],
                [52, "f", [30, [2, [15, "d"], "getItem", [7, "firingIdMap"]],
                    [8]
                ]],
                [2, [15, "d"], "setItem", [7, "firingIdMap", [15, "f"]]],
                [52, "g", [30, [2, [15, "d"], "getItem", [7, "triggersFiredEarly"]],
                    [7]
                ]],
                [2, [15, "d"], "setItem", [7, "triggersFiredEarly", [15, "g"]]],
                [52, "h", [30, [2, [15, "d"], "getItem", [7, "triggerIds"]],
                    [7]
                ]],
                [2, [15, "d"], "setItem", [7, "triggerIds", [15, "h"]]],
                [2, [15, "a"], "gtmOnSuccess", [7]],
                [52, "i", [17, [15, "a"], "uniqueTriggerId"]],
                [52, "j", [17, [15, "a"], "triggerIds"]],
                [52, "k", [17, [15, "a"], "firingId"]],
                [52, "l", [17, [15, "a"], "isListeningTag"]],
                [22, [15, "l"],
                    [46, [53, [52, "o", [16, [15, "f"],
                            [15, "k"]
                        ]],
                        [22, [28, [15, "o"]],
                            [46, [53, [2, [15, "g"], "push", [7, [15, "k"]]],
                                [36]
                            ]]
                        ],
                        ["n", [15, "k"],
                            [15, "o"]
                        ],
                        [36]
                    ]]
                ],
                [43, [15, "e"],
                    [15, "i"],
                    [15, "j"]
                ],
                [65, "o", [15, "j"],
                    [46, [53, [43, [15, "f"],
                        [15, "o"],
                        [15, "i"]
                    ]]]
                ],
                [65, "o", [15, "g"],
                    [46, [53, ["n", [15, "o"],
                        [15, "i"]
                    ]]]
                ]
            ],
            [50, "__u", [46, "a"],
                [50, "k", [46, "l", "m"],
                    [52, "n", [17, [15, "m"], "multiQueryKeys"]],
                    [52, "o", [30, [17, [15, "m"], "queryKey"], ""]],
                    [52, "p", [17, [15, "m"], "ignoreEmptyQueryParam"]],
                    [22, [20, [15, "o"], ""],
                        [46, [53, [52, "r", [2, [17, ["i", [15, "l"]], "search"], "replace", [7, "?", ""]]],
                            [36, [39, [1, [28, [15, "r"]],
                                    [15, "p"]
                                ],
                                [44],
                                [15, "r"]
                            ]]
                        ]]
                    ],
                    [41, "q"],
                    [22, [15, "n"],
                        [46, [53, [22, [20, ["e", [15, "o"]], "array"],
                            [46, [53, [3, "q", [15, "o"]]]],
                            [46, [53, [52, "r", ["c", "\\s+", "g"]],
                                [3, "q", [2, [2, ["f", [15, "o"]], "replace", [7, [15, "r"], ""]], "split", [7, ","]]]
                            ]]
                        ]]],
                        [46, [53, [3, "q", [7, ["f", [15, "o"]]]]]]
                    ],
                    [65, "r", [15, "q"],
                        [46, [53, [52, "s", [2, [15, "h"], "H", [7, [15, "l"],
                                [15, "r"]
                            ]]],
                            [22, [29, [15, "s"],
                                    [44]
                                ],
                                [46, [53, [22, [1, [15, "p"],
                                            [20, [15, "s"], ""]
                                        ],
                                        [46, [53, [6]]]
                                    ],
                                    [36, [15, "s"]]
                                ]]
                            ]
                        ]]
                    ],
                    [36, [44]]
                ],
                [52, "b", ["require", "copyFromDataLayer"]],
                [52, "c", ["require", "internal.createRegex"]],
                [52, "d", ["require", "getUrl"]],
                [52, "e", ["require", "getType"]],
                [52, "f", ["require", "makeString"]],
                [52, "g", ["require", "parseUrl"]],
                [52, "h", [15, "__module_legacyUrls"]],
                [52, "i", ["require", "internal.legacyParseUrl"]],
                [41, "j"],
                [22, [17, [15, "a"], "customUrlSource"],
                    [46, [53, [3, "j", [17, [15, "a"], "customUrlSource"]]]],
                    [46, [53, [3, "j", ["b", "gtm.url", 1]]]]
                ],
                [3, "j", [30, [15, "j"],
                    ["d"]
                ]],
                [38, [17, [15, "a"], "component"],
                    [46, "PROTOCOL", "HOST", "PORT", "PATH", "EXTENSION", "QUERY", "FRAGMENT", "URL"],
                    [46, [5, [46, [36, [2, [15, "h"], "B", [7, [15, "j"]]]]]],
                        [5, [46, [36, [2, [15, "h"], "C", [7, [15, "j"],
                            [17, [15, "a"], "stripWww"]
                        ]]]]],
                        [5, [46, [36, [2, [15, "h"], "D", [7, [15, "j"]]]]]],
                        [5, [46, [36, [2, [15, "h"], "E", [7, [15, "j"],
                            [17, [15, "a"], "defaultPages"]
                        ]]]]],
                        [5, [46, [36, [2, [15, "h"], "F", [7, [15, "j"]]]]]],
                        [5, [46, [36, ["k", [15, "j"],
                            [15, "a"]
                        ]]]],
                        [5, [46, [36, [2, [15, "h"], "G", [7, [15, "j"]]]]]],
                        [5, [46]],
                        [9, [46, [36, [2, [15, "h"], "A", [7, ["f", [15, "j"]]]]]]]
                    ]
                ]
            ],
            [50, "__v", [46, "a"],
                [52, "b", ["require", "copyFromDataLayer"]],
                [52, "c", ["require", "internal.createRegex"]],
                [52, "d", ["require", "getType"]],
                [52, "e", [17, [15, "a"], "name"]],
                [22, [30, [28, [15, "e"]],
                        [21, ["d", [15, "e"]], "string"]
                    ],
                    [46, [36, false]]
                ],
                [52, "f", [2, [15, "e"], "replace", [7, ["c", "\\\\.", "g"], "."]]],
                [52, "g", ["b", [15, "f"],
                    [30, [17, [15, "a"], "dataLayerVersion"], 1]
                ]],
                [36, [39, [21, [15, "g"],
                        [44]
                    ],
                    [15, "g"],
                    [17, [15, "a"], "defaultValue"]
                ]]
            ],
            [52, "__module_gtagSchema", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [52, "b", "ad_personalization"],
                        [52, "c", "ad_storage"],
                        [52, "d", "ad_user_data"],
                        [52, "e", "consent_updated"],
                        [52, "f", "app_remove"],
                        [52, "g", "app_store_refund"],
                        [52, "h", "app_store_subscription_cancel"],
                        [52, "i", "app_store_subscription_convert"],
                        [52, "j", "app_store_subscription_renew"],
                        [52, "k", "conversion"],
                        [52, "l", "purchase"],
                        [52, "m", "first_open"],
                        [52, "n", "first_visit"],
                        [52, "o", "gtag.config"],
                        [52, "p", "in_app_purchase"],
                        [52, "q", "page_view"],
                        [52, "r", "session_start"],
                        [52, "s", "user_engagement"],
                        [52, "t", "ads_data_redaction"],
                        [52, "u", "allow_ad_personalization_signals"],
                        [52, "v", "allow_custom_scripts"],
                        [52, "w", "allow_direct_google_requests"],
                        [52, "x", "allow_enhanced_conversions"],
                        [52, "y", "allow_google_signals"],
                        [52, "z", "auid"],
                        [52, "aA", "aw_remarketing_only"],
                        [52, "aB", "discount"],
                        [52, "aC", "aw_feed_country"],
                        [52, "aD", "aw_feed_language"],
                        [52, "aE", "items"],
                        [52, "aF", "aw_merchant_id"],
                        [52, "aG", "aw_basket_type"],
                        [52, "aH", "client_id"],
                        [52, "aI", "conversion_cookie_prefix"],
                        [52, "aJ", "conversion_id"],
                        [52, "aK", "conversion_linker"],
                        [52, "aL", "conversion_api"],
                        [52, "aM", "cookie_deprecation"],
                        [52, "aN", "cookie_expires"],
                        [52, "aO", "cookie_prefix"],
                        [52, "aP", "cookie_update"],
                        [52, "aQ", "country"],
                        [52, "aR", "currency"],
                        [52, "aS", "customer_buyer_stage"],
                        [52, "aT", "customer_lifetime_value"],
                        [52, "aU", "customer_loyalty"],
                        [52, "aV", "customer_ltv_bucket"],
                        [52, "aW", "debug_mode"],
                        [52, "aX", "developer_id"],
                        [52, "aY", "shipping"],
                        [52, "aZ", "engagement_time_msec"],
                        [52, "bA", "estimated_delivery_date"],
                        [52, "bB", "event_developer_id_string"],
                        [52, "bC", "event"],
                        [52, "bD", "event_timeout"],
                        [52, "bE", "first_party_collection"],
                        [52, "bF", "match_id"],
                        [52, "bG", "gdpr_applies"],
                        [52, "bH", "google_analysis_params"],
                        [52, "bI", "_google_ng"],
                        [52, "bJ", "gpp_sid"],
                        [52, "bK", "gpp_string"],
                        [52, "bL", "gsa_experiment_id"],
                        [52, "bM", "gtag_event_feature_usage"],
                        [52, "bN", "iframe_state"],
                        [52, "bO", "ignore_referrer"],
                        [52, "bP", "is_passthrough"],
                        [52, "bQ", "language"],
                        [52, "bR", "merchant_feed_label"],
                        [52, "bS", "merchant_feed_language"],
                        [52, "bT", "merchant_id"],
                        [52, "bU", "new_customer"],
                        [52, "bV", "page_hostname"],
                        [52, "bW", "page_path"],
                        [52, "bX", "page_referrer"],
                        [52, "bY", "page_title"],
                        [52, "bZ", "_platinum_request_status"],
                        [52, "cA", "quantity"],
                        [52, "cB", "restricted_data_processing"],
                        [52, "cC", "screen_resolution"],
                        [52, "cD", "send_page_view"],
                        [52, "cE", "server_container_url"],
                        [52, "cF", "session_duration"],
                        [52, "cG", "session_engaged_time"],
                        [52, "cH", "session_id"],
                        [52, "cI", "_shared_user_id"],
                        [52, "cJ", "delivery_postal_code"],
                        [52, "cK", "topmost_url"],
                        [52, "cL", "transaction_id"],
                        [52, "cM", "transaction_id_source"],
                        [52, "cN", "transport_url"],
                        [52, "cO", "update"],
                        [52, "cP", "_user_agent_architecture"],
                        [52, "cQ", "_user_agent_bitness"],
                        [52, "cR", "_user_agent_full_version_list"],
                        [52, "cS", "_user_agent_mobile"],
                        [52, "cT", "_user_agent_model"],
                        [52, "cU", "_user_agent_platform"],
                        [52, "cV", "_user_agent_platform_version"],
                        [52, "cW", "_user_agent_wow64"],
                        [52, "cX", "user_data"],
                        [52, "cY", "user_data_auto_latency"],
                        [52, "cZ", "user_data_auto_meta"],
                        [52, "dA", "user_data_auto_multi"],
                        [52, "dB", "user_data_auto_selectors"],
                        [52, "dC", "user_data_auto_status"],
                        [52, "dD", "user_data_mode"],
                        [52, "dE", "user_id"],
                        [52, "dF", "user_properties"],
                        [52, "dG", "us_privacy_string"],
                        [52, "dH", "value"],
                        [52, "dI", "_fpm_parameters"],
                        [52, "dJ", "_host_name"],
                        [52, "dK", "_in_page_command"],
                        [52, "dL", "_measurement_type"],
                        [52, "dM", "non_personalized_ads"],
                        [52, "dN", "conversion_label"],
                        [52, "dO", "page_location"],
                        [52, "dP", "_extracted_data"],
                        [52, "dQ", "global_developer_id_string"],
                        [52, "dR", "tc_privacy_string"],
                        [36, [8, "A", [15, "b"], "B", [15, "c"], "C", [15, "d"], "F", [15, "e"], "H", [15, "f"], "I", [15, "g"], "J", [15, "h"], "K", [15, "i"], "L", [15, "j"], "N", [15, "k"], "Z", [15, "l"], "AE", [15, "m"], "AF", [15, "n"], "AG", [15, "o"], "AI", [15, "p"], "AJ", [15, "q"], "AL", [15, "r"], "AP", [15, "s"], "AZ", [15, "t"], "BG", [15, "u"], "BH", [15, "v"], "BI", [15, "w"], "BK", [15, "x"], "BL", [15, "y"], "BR", [15, "z"], "BV", [15, "aA"], "BW", [15, "aB"], "BX", [15, "aC"], "BY", [15, "aD"], "BZ", [15, "aE"], "CA", [15, "aF"], "CB", [15, "aG"], "CJ", [15, "aH"], "CO", [15, "aI"], "CP", [15, "aJ"], "JW", [15, "dN"], "CQ", [15, "aK"], "CS", [15, "aL"], "CT", [15, "aM"], "CV", [15, "aN"], "CZ", [15, "aO"], "DA", [15, "aP"], "DB", [15, "aQ"], "DC", [15, "aR"], "DD", [15, "aS"], "DE", [15, "aT"], "DF", [15, "aU"], "DG", [15, "aV"], "DK", [15, "aW"], "DL", [15, "aX"], "DX", [15, "aY"], "DZ", [15, "aZ"], "ED", [15, "bA"], "EG", [15, "bB"], "EI", [15, "bC"], "EK", [15, "bD"], "JY", [15, "dP"], "EP", [15, "bE"], "EY", [15, "bF"], "FI", [15, "bG"], "JZ", [15, "dQ"], "FM", [15, "bH"], "FN", [15, "bI"], "FQ", [15, "bJ"], "FR", [15, "bK"], "FT", [15, "bL"], "FU", [15, "bM"], "FW", [15, "bN"], "FX", [15, "bO"], "GC", [15, "bP"], "GE", [15, "bQ"], "GL", [15, "bR"], "GM", [15, "bS"], "GN", [15, "bT"], "GR", [15, "bU"], "GU", [15, "bV"], "JX", [15, "dO"], "GV", [15, "bW"], "GW", [15, "bX"], "GX", [15, "bY"], "HF", [15, "bZ"], "HH", [15, "cA"], "HL", [15, "cB"], "HP", [15, "cC"], "HS", [15, "cD"], "HU", [15, "cE"], "HW", [15, "cF"], "HY", [15, "cG"], "HZ", [15, "cH"], "IB", [15, "cI"], "IC", [15, "cJ"], "KA", [15, "dR"], "IH", [15, "cK"], "IK", [15, "cL"], "IL", [15, "cM"], "IM", [15, "cN"], "IO", [15, "cO"], "IR", [15, "cP"], "IS", [15, "cQ"], "IT", [15, "cR"], "IU", [15, "cS"], "IV", [15, "cT"], "IW", [15, "cU"], "IX", [15, "cV"], "IY", [15, "cW"], "IZ", [15, "cX"], "JA", [15, "cY"], "JB", [15, "cZ"], "JC", [15, "dA"], "JD", [15, "dB"], "JE", [15, "dC"], "JF", [15, "dD"], "JH", [15, "dE"], "JI", [15, "dF"], "JK", [15, "dG"], "JL", [15, "dH"], "JN", [15, "dI"], "JO", [15, "dJ"], "JP", [15, "dK"], "JS", [15, "dL"], "JT", [15, "dM"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]],
            [52, "__module_metadataSchema", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [52, "b", "accept_by_default"],
                        [52, "c", "allow_ad_personalization"],
                        [52, "d", "consent_state"],
                        [52, "e", "consent_updated"],
                        [52, "f", "conversion_linker_enabled"],
                        [52, "g", "cookie_options"],
                        [52, "h", "em_event"],
                        [52, "i", "event_start_timestamp_ms"],
                        [52, "j", "event_usage"],
                        [52, "k", "ga4_collection_subdomain"],
                        [52, "l", "handle_internally"],
                        [52, "m", "hit_type"],
                        [52, "n", "hit_type_override"],
                        [52, "o", "is_conversion"],
                        [52, "p", "is_external_event"],
                        [52, "q", "is_first_visit"],
                        [52, "r", "is_first_visit_conversion"],
                        [52, "s", "is_fpm_encryption"],
                        [52, "t", "is_fpm_split"],
                        [52, "u", "is_gcp_conversion"],
                        [52, "v", "is_google_signals_allowed"],
                        [52, "w", "is_server_side_destination"],
                        [52, "x", "is_session_start"],
                        [52, "y", "is_session_start_conversion"],
                        [52, "z", "is_sgtm_ga_ads_conversion_study_control_group"],
                        [52, "aA", "is_sgtm_prehit"],
                        [52, "aB", "is_split_conversion"],
                        [52, "aC", "is_syn"],
                        [52, "aD", "prehit_for_retry"],
                        [52, "aE", "redact_ads_data"],
                        [52, "aF", "redact_click_ids"],
                        [52, "aG", "send_ccm_parallel_ping"],
                        [52, "aH", "send_user_data_hit"],
                        [52, "aI", "speculative"],
                        [52, "aJ", "syn_or_mod"],
                        [52, "aK", "transient_ecsid"],
                        [52, "aL", "transmission_type"],
                        [52, "aM", "user_data"],
                        [52, "aN", "user_data_from_automatic"],
                        [52, "aO", "user_data_from_automatic_getter"],
                        [52, "aP", "user_data_from_code"],
                        [52, "aQ", "user_data_from_manual"],
                        [36, [8, "A", [15, "b"], "D", [15, "c"], "J", [15, "d"], "K", [15, "e"], "L", [15, "f"], "M", [15, "g"], "S", [15, "h"], "Y", [15, "i"], "Z", [15, "j"], "AH", [15, "k"], "AJ", [15, "l"], "AK", [15, "m"], "AL", [15, "n"], "AP", [15, "o"], "AS", [15, "p"], "AU", [15, "q"], "AV", [15, "r"], "AX", [15, "s"], "AY", [15, "t"], "AZ", [15, "u"], "BA", [15, "v"], "BE", [15, "w"], "BF", [15, "x"], "BG", [15, "y"], "BH", [15, "z"], "BI", [15, "aA"], "BK", [15, "aB"], "BL", [15, "aC"], "BS", [15, "aD"], "BV", [15, "aE"], "BW", [15, "aF"], "BY", [15, "aG"], "CC", [15, "aH"], "CE", [15, "aI"], "CH", [15, "aJ"], "CI", [15, "aK"], "CJ", [15, "aL"], "CK", [15, "aM"], "CL", [15, "aN"], "CM", [15, "aO"], "CN", [15, "aP"], "CO", [15, "aQ"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]],
            [52, "__module_featureFlags", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [52, "b", 32],
                        [52, "c", 33],
                        [52, "d", 44],
                        [52, "e", 45],
                        [52, "f", 46],
                        [52, "g", 47],
                        [52, "h", 113],
                        [52, "i", 129],
                        [52, "j", 156],
                        [52, "k", 168],
                        [52, "l", 174],
                        [52, "m", 178],
                        [52, "n", 243],
                        [52, "o", 252],
                        [52, "p", 253],
                        [52, "q", 254],
                        [52, "r", 275],
                        [52, "s", 276],
                        [36, [8, "CR", [15, "o"], "BP", [15, "k"], "M", [15, "b"], "N", [15, "c"], "R", [15, "d"], "S", [15, "e"], "T", [15, "f"], "U", [15, "g"], "BR", [15, "l"], "BS", [15, "m"], "DG", [15, "s"], "DF", [15, "r"], "AR", [15, "h"], "CP", [15, "n"], "AZ", [15, "i"], "CT", [15, "q"], "CS", [15, "p"], "BJ", [15, "j"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]],
            [52, "__module_legacyUrls", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "h", [46, "p"],
                            [52, "q", [2, [15, "p"], "indexOf", [7, "#"]]],
                            [36, [39, [23, [15, "q"], 0],
                                [15, "p"],
                                [2, [15, "p"], "substring", [7, 0, [15, "q"]]]
                            ]]
                        ],
                        [50, "i", [46, "p"],
                            [52, "q", [17, ["e", [15, "p"]], "protocol"]],
                            [36, [39, [15, "q"],
                                [2, [15, "q"], "replace", [7, ":", ""]], ""
                            ]]
                        ],
                        [50, "j", [46, "p", "q"],
                            [41, "r"],
                            [3, "r", [17, ["e", [15, "p"]], "hostname"]],
                            [22, [28, [15, "r"]],
                                [46, [36, ""]]
                            ],
                            [52, "s", ["b", ":[0-9]+"]],
                            [3, "r", [2, [15, "r"], "replace", [7, [15, "s"], ""]]],
                            [22, [15, "q"],
                                [46, [53, [52, "t", ["b", "^www\\d*\\."]],
                                    [52, "u", [2, [15, "r"], "match", [7, [15, "t"]]]],
                                    [22, [1, [15, "u"],
                                            [16, [15, "u"], 0]
                                        ],
                                        [46, [3, "r", [2, [15, "r"], "substring", [7, [17, [16, [15, "u"], 0], "length"]]]]]
                                    ]
                                ]]
                            ],
                            [36, [15, "r"]]
                        ],
                        [50, "k", [46, "p"],
                            [52, "q", ["e", [15, "p"]]],
                            [41, "r"],
                            [3, "r", ["f", [17, [15, "q"], "port"]]],
                            [22, [28, [15, "r"]],
                                [46, [53, [22, [20, [17, [15, "q"], "protocol"], "http:"],
                                    [46, [53, [3, "r", 80]]],
                                    [46, [22, [20, [17, [15, "q"], "protocol"], "https:"],
                                        [46, [53, [3, "r", 443]]],
                                        [46, [53, [3, "r", ""]]]
                                    ]]
                                ]]]
                            ],
                            [36, ["g", [15, "r"]]]
                        ],
                        [50, "l", [46, "p", "q"],
                            [52, "r", ["e", [15, "p"]]],
                            [41, "s"],
                            [3, "s", [39, [20, [2, [17, [15, "r"], "pathname"], "indexOf", [7, "/"]], 0],
                                [17, [15, "r"], "pathname"],
                                [0, "/", [17, [15, "r"], "pathName"]]
                            ]],
                            [22, [20, ["d", [15, "q"]], "array"],
                                [46, [53, [52, "t", [2, [15, "s"], "split", [7, "/"]]],
                                    [22, [19, [2, [15, "q"], "indexOf", [7, [16, [15, "t"],
                                            [37, [17, [15, "t"], "length"], 1]
                                        ]]], 0],
                                        [46, [53, [43, [15, "t"],
                                                [37, [17, [15, "t"], "length"], 1], ""
                                            ],
                                            [3, "s", [2, [15, "t"], "join", [7, "/"]]]
                                        ]]
                                    ]
                                ]]
                            ],
                            [36, [15, "s"]]
                        ],
                        [50, "m", [46, "p"],
                            [52, "q", [17, ["e", [15, "p"]], "pathname"]],
                            [52, "r", [2, [15, "q"], "split", [7, "."]]],
                            [41, "s"],
                            [3, "s", [39, [18, [17, [15, "r"], "length"], 1],
                                [16, [15, "r"],
                                    [37, [17, [15, "r"], "length"], 1]
                                ], ""
                            ]],
                            [36, [16, [2, [15, "s"], "split", [7, "/"]], 0]]
                        ],
                        [50, "n", [46, "p"],
                            [52, "q", [17, ["e", [15, "p"]], "hash"]],
                            [36, [2, [15, "q"], "replace", [7, "#", ""]]]
                        ],
                        [50, "o", [46, "p", "q"],
                            [50, "s", [46, "t"],
                                [36, ["c", [2, [15, "t"], "replace", [7, ["b", "\\+", "g"], " "]]]]
                            ],
                            [52, "r", [2, [17, ["e", [15, "p"]], "search"], "replace", [7, "?", ""]]],
                            [65, "t", [2, [15, "r"], "split", [7, "&"]],
                                [46, [53, [52, "u", [2, [15, "t"], "split", [7, "="]]],
                                    [22, [21, ["s", [16, [15, "u"], 0]],
                                            [15, "q"]
                                        ],
                                        [46, [6]]
                                    ],
                                    [36, ["s", [2, [2, [15, "u"], "slice", [7, 1]], "join", [7, "="]]]]
                                ]]
                            ],
                            [36]
                        ],
                        [52, "b", ["require", "internal.createRegex"]],
                        [52, "c", ["require", "decodeUriComponent"]],
                        [52, "d", ["require", "getType"]],
                        [52, "e", ["require", "internal.legacyParseUrl"]],
                        [52, "f", ["require", "makeNumber"]],
                        [52, "g", ["require", "makeString"]],
                        [36, [8, "F", [15, "m"], "H", [15, "o"], "G", [15, "n"], "C", [15, "j"], "E", [15, "l"], "D", [15, "k"], "B", [15, "i"], "A", [15, "h"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]],
            [52, "__module_gtag", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "n", [46, "r", "s", "t"],
                            [65, "u", [15, "s"],
                                [46, [53, [22, [2, [15, "r"], "hasOwnProperty", [7, [15, "u"]]],
                                    [46, [53, [43, [15, "r"],
                                        [15, "u"],
                                        ["t", [16, [15, "r"],
                                            [15, "u"]
                                        ]]
                                    ]]]
                                ]]]
                            ]
                        ],
                        [50, "o", [46, "r", "s"],
                            ["n", [15, "r"],
                                [15, "s"],
                                [51, "", [7, "t"],
                                    [36, [39, [20, "false", [2, ["e", [15, "t"]], "toLowerCase", [7]]], false, [28, [28, [15, "t"]]]]]
                                ]
                            ]
                        ],
                        [50, "p", [46, "r", "s"],
                            ["n", [15, "r"],
                                [15, "s"],
                                [15, "d"]
                            ]
                        ],
                        [50, "q", [46, "r", "s"],
                            [52, "t", ["h"]],
                            [22, [1, [15, "t"],
                                    [18, [2, [15, "t"], "indexOf", [7, [15, "s"]]],
                                        [27, 1]
                                    ]
                                ],
                                [46, [53, [43, [15, "r"],
                                    [17, [15, "i"], "AJ"], true
                                ]]]
                            ]
                        ],
                        [52, "b", ["require", "Object"]],
                        [52, "c", [15, "__module_gtagSchema"]],
                        [52, "d", ["require", "makeNumber"]],
                        [52, "e", ["require", "makeString"]],
                        [52, "f", ["require", "internal.isFeatureEnabled"]],
                        [52, "g", [15, "__module_featureFlags"]],
                        [52, "h", ["require", "internal.getDestinationIds"]],
                        [52, "i", [15, "__module_metadataSchema"]],
                        [52, "j", [2, [15, "b"], "freeze", [7, [7, [17, [15, "c"], "BG"],
                            [17, [15, "c"], "BI"],
                            [17, [15, "c"], "BL"],
                            [17, [15, "c"], "DA"],
                            [17, [15, "c"], "FX"],
                            [17, [15, "c"], "IO"],
                            [17, [15, "c"], "EP"],
                            [17, [15, "c"], "HS"]
                        ]]]],
                        [52, "k", [2, [15, "b"], "freeze", [7, [7, [17, [15, "c"], "BG"],
                            [17, [15, "c"], "BI"],
                            [17, [15, "c"], "BL"],
                            [17, [15, "c"], "DA"],
                            [17, [15, "c"], "FX"],
                            [17, [15, "c"], "IO"],
                            [17, [15, "c"], "EP"],
                            [17, [15, "c"], "HS"]
                        ]]]],
                        [52, "l", [2, [15, "b"], "freeze", [7, [7, [17, [15, "c"], "CV"],
                            [17, [15, "c"], "EK"],
                            [17, [15, "c"], "HW"],
                            [17, [15, "c"], "HY"],
                            [17, [15, "c"], "DZ"]
                        ]]]],
                        [52, "m", [2, [15, "b"], "freeze", [7, [7, [17, [15, "c"], "CV"],
                            [17, [15, "c"], "EK"],
                            [17, [15, "c"], "HW"],
                            [17, [15, "c"], "HY"],
                            [17, [15, "c"], "DZ"]
                        ]]]],
                        [36, [8, "B", [15, "k"], "D", [15, "m"], "A", [15, "j"], "C", [15, "l"], "F", [15, "o"], "G", [15, "p"], "E", [15, "n"], "H", [15, "q"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]]

        ],
        "entities": {
            "__aev": {
                "2": true,
                "5": true
            },
            "__c": {
                "2": true,
                "5": true
            },
            "__d": {
                "2": true
            },
            "__e": {
                "2": true,
                "5": true
            },
            "__f": {
                "2": true,
                "5": true
            },
            "__fsl": {
                "5": true
            },
            "__googtag": {
                "1": 10,
                "5": true
            },
            "__gtes": {
                "5": true
            },
            "__k": {
                "2": true
            },
            "__lcl": {
                "5": true
            },
            "__remm": {
                "2": true,
                "5": true
            },
            "__smm": {
                "2": true,
                "5": true
            },
            "__tg": {
                "5": true
            },
            "__u": {
                "2": true,
                "5": true
            },
            "__v": {
                "2": true,
                "5": true
            }


        },
        "blob": {
            "1": "19",
            "10": "GTM-K7TBF4JP",
            "14": "5cc1",
            "15": "0",
            "16": "ChEIgILzygYQ6qW8jIOCu+TvARIdALN2a0kSOVhCYT2dtJ5zQeJk9azzTwcxk3baghgaAvTV",
            "19": "dataLayer",
            "20": "",
            "21": "www.googletagmanager.com",
            "22": "eyIwIjoiQlIiLCIxIjoiQlItU0MiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20uYnIiLCI0IjoiIiwiNSI6ZmFsc2UsIjYiOmZhbHNlLCI3IjoiYWRfc3RvcmFnZXxhbmFseXRpY3Nfc3RvcmFnZXxhZF91c2VyX2RhdGF8YWRfcGVyc29uYWxpemF0aW9uIiwiOCI6IiJ9",
            "23": "google.tagmanager.debugui2.queue",
            "24": "tagassistant.google.com",
            "27": 0.005,
            "3": "www.googletagmanager.com",
            "30": "BR",
            "31": "BR-SC",
            "32": false,
            "36": "https://adservice.google.com/pagead/regclk",
            "37": "__TAGGY_INSTALLED",
            "38": "cct.google",
            "39": "googTaggyReferrer",
            "40": "https://cct.google/taggy/agent.js",
            "41": "google.tagmanager.ta.prodqueue",
            "42": 0.01,
            "43": "{\"keys\":[{\"hpkePublicKey\":{\"params\":{\"aead\":\"AES_128_GCM\",\"kdf\":\"HKDF_SHA256\",\"kem\":\"DHKEM_P256_HKDF_SHA256\"},\"publicKey\":\"BGOCJW/OEXLmJ3IRLMk6rbHPnIGs1shm6Ks1OUYo3eJoZRh6+Dgo1h8HteELkz89d+H1hDIdN0arkSyUlf6iAP8=\",\"version\":0},\"id\":\"fab2c1bd-9644-4ce0-b927-f3d718555226\"},{\"hpkePublicKey\":{\"params\":{\"aead\":\"AES_128_GCM\",\"kdf\":\"HKDF_SHA256\",\"kem\":\"DHKEM_P256_HKDF_SHA256\"},\"publicKey\":\"BILm1CKwNNvCG7UOMUljy60NlWCkhMiQ0qDvxTCdnuJVDs+nnvGuik5Tz7/IQn8rkBhwyb7qzBGsBjzaCnHKvdg=\",\"version\":0},\"id\":\"bbbc9c98-8227-4c38-a50a-bae5f16dee1b\"},{\"hpkePublicKey\":{\"params\":{\"aead\":\"AES_128_GCM\",\"kdf\":\"HKDF_SHA256\",\"kem\":\"DHKEM_P256_HKDF_SHA256\"},\"publicKey\":\"BGfgEkoB+WSzbDA8faFgG1sEabmwtncYOi9rW8DFpduqlB+I78oR9e5EHXhRLpbJqufc2R/gAa99OSLEQH7N+34=\",\"version\":0},\"id\":\"a647bd02-ff71-4e15-91a9-9546c2f45e8e\"},{\"hpkePublicKey\":{\"params\":{\"aead\":\"AES_128_GCM\",\"kdf\":\"HKDF_SHA256\",\"kem\":\"DHKEM_P256_HKDF_SHA256\"},\"publicKey\":\"BPGlNL8FMmDtReDiKw3Q65myGuSVyoUu9g5OTNjdIn4YSUr7akfwVB3EHob0bMOiWqI7w5/5ACdpO9cE70/Wguk=\",\"version\":0},\"id\":\"4da6a358-7232-43d8-b01c-9564e6d84728\"},{\"hpkePublicKey\":{\"params\":{\"aead\":\"AES_128_GCM\",\"kdf\":\"HKDF_SHA256\",\"kem\":\"DHKEM_P256_HKDF_SHA256\"},\"publicKey\":\"BGPSV6h3E/qn4svPd3GUsRrELMETEzEGoyY3j3X3jkcAB1Y/0fCfoC8wgJuVIgrjbEdB04q0+ElSttDBF68X2FA=\",\"version\":0},\"id\":\"4a68a2f1-b9af-4bef-918e-2f261612a310\"}]}",
            "44": "103116026~103200004~104684208~104684211~116184927~116184929~116251938~116251940",
            "46": {
                "1": "1000",
                "10": "6150",
                "11": "5c20",
                "14": "1000",
                "16": "US-CO~US-CT~US-MT~US-NE~US-NH~US-TX~US-MN~US-NJ~US-MD~US-OR~US-DE",
                "17": "US-CO~US-CT~US-MT~US-NE~US-NH~US-TX~US-MN~US-NJ~US-MD",
                "2": "9",
                "20": "5000",
                "21": "5000",
                "22": "4.0.0",
                "23": "0.0.0",
                "25": "1",
                "26": "4000",
                "27": "100",
                "3": "5",
                "4": "ad_storage|analytics_storage|ad_user_data|ad_personalization",
                "44": "15000",
                "48": "30000",
                "5": "ad_storage|analytics_storage|ad_user_data",
                "6": "1",
                "7": "10"
            },
            "48": true,
            "5": "GTM-K7TBF4JP",
            "55": [],
            "56": [{
                "1": 403,
                "3": 0.5,
                "4": 115938465,
                "5": 115938466,
                "6": 0,
                "7": 2
            }, {
                "1": 404,
                "3": 0.5,
                "4": 115938468,
                "5": 115938469,
                "6": 0,
                "7": 1
            }, {
                "1": 433,
                "3": 0.1,
                "4": 116682875,
                "5": 116682876,
                "6": 116682877,
                "7": 2
            }, {
                "1": 429,
                "2": true
            }, {
                "1": 409,
                "3": 0.1,
                "4": 116744866,
                "5": 116744867,
                "6": 0,
                "7": 2
            }, {
                "1": 434,
                "2": true
            }, {
                "1": 417,
                "2": true
            }, {
                "1": 420,
                "2": true
            }, {
                "1": 406,
                "2": true
            }, {
                "1": 414,
                "3": 0.01,
                "4": 115985661,
                "5": 115985660,
                "6": 0,
                "7": 2
            }, {
                "1": 415,
                "2": true
            }, {
                "1": 412,
                "2": true
            }, {
                "1": 441,
                "3": 0.01,
                "4": 116910502,
                "5": 116910503,
                "6": 0,
                "7": 1
            }],
            "59": ["GTM-K7TBF4JP"],
            "6": "227184559"
        },
        "permissions": {
            "__cvt_5NR5C": {},
            "__cvt_5RM3Q": {
                "access_globals": {
                    "keys": [{
                        "key": "fbq",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq",
                        "read": false,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm_ids",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.callMethod.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue.push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.disablePushState",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]
                },
                "logging": {
                    "environments": "debug"
                },
                "read_data_layer": {
                    "keyPatterns": ["ecommerce"]
                }
            },
            "__cvt_5RMBX": {
                "read_data_layer": {
                    "keyPatterns": ["ecommerce"]
                }
            },
            "__cvt_M63B8": {
                "read_data_layer": {
                    "allowedKeys": "specific",
                    "keyPatterns": ["gtm.uniqueEventId"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtmPageLoadId",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "gtmBrowserId",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                }
            },
            "__cvt_PL349": {
                "access_globals": {
                    "keys": [{
                        "key": "toString.call",
                        "read": false,
                        "write": false,
                        "execute": true
                    }]
                }
            },
            "__aev": {
                "read_data_layer": {
                    "allowedKeys": "specific",
                    "keyPatterns": ["gtm"]
                },
                "read_event_data": {
                    "eventDataAccess": "any"
                },
                "read_dom_element_text": {},
                "get_element_attributes": {
                    "allowedAttributes": "any"
                },
                "get_url": {
                    "urlParts": "any"
                },
                "access_dom_element_properties": {
                    "properties": [{
                        "property": "tagName",
                        "read": true
                    }]
                },
                "access_template_storage": {},
                "access_element_values": {
                    "allowRead": [true],
                    "allowWrite": [false]
                }
            },
            "__c": {},
            "__cl": {
                "detect_click_events": {}
            },
            "__d": {
                "read_dom_elements": {
                    "allowedElementIds": "any",
                    "allowedCssSelectors": "any"
                },
                "read_dom_element_text": {},
                "access_element_values": {
                    "allowRead": [true],
                    "allowWrite": [false]
                },
                "get_element_attributes": {
                    "allowedAttributes": "any"
                },
                "access_dom_element_properties": {
                    "properties": [{
                        "property": "checked",
                        "read": true
                    }]
                }
            },
            "__e": {
                "read_event_data": {
                    "eventDataAccess": "specific",
                    "keyPatterns": ["event"]
                }
            },
            "__f": {
                "read_data_layer": {
                    "keyPatterns": ["gtm.referrer"]
                },
                "get_referrer": {
                    "urlParts": "any"
                }
            },
            "__fsl": {
                "detect_form_submit_events": {
                    "allowWaitForTags": true
                }
            },
            "__googtag": {
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtag",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "dataLayer",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "configure_google_tags": {
                    "allowedTagIds": "any"
                },
                "load_google_tags": {
                    "allowedTagIds": "any",
                    "allowFirstPartyUrls": true,
                    "allowedFirstPartyUrls": "any"
                }
            },
            "__gtes": {},
            "__html": {
                "unsafe_inject_arbitrary_html": {}
            },
            "__jsm": {
                "unsafe_run_arbitrary_javascript": {}
            },
            "__k": {
                "get_cookies": {
                    "cookieAccess": "any"
                },
                "read_data_layer": {
                    "keyPatterns": ["gtm.cookie"]
                }
            },
            "__lcl": {
                "detect_link_click_events": {
                    "allowWaitForTags": true
                }
            },
            "__remm": {},
            "__smm": {},
            "__tg": {
                "access_template_storage": {},
                "update_data_layer": {}
            },
            "__u": {
                "read_data_layer": {
                    "keyPatterns": ["gtm.url"]
                },
                "get_url": {
                    "urlParts": "any"
                }
            },
            "__v": {
                "read_data_layer": {
                    "allowedKeys": "any"
                }
            }


        }

        ,
        "sandboxed_scripts": [
                "__cvt_5NR5C", "__cvt_5RM3Q", "__cvt_5RMBX", "__cvt_M63B8", "__cvt_PL349"

            ]

            ,
        "security_groups": {
            "customScripts": [
                "__html",
                "__jsm"

            ],
            "google": [
                "__aev",
                "__c",
                "__cl",
                "__d",
                "__e",
                "__f",
                "__googtag",
                "__gtes",
                "__k",
                "__remm",
                "__smm",
                "__tg",
                "__u",
                "__v"

            ]


        }



    };



    try {
        (function() {
            /*

             Copyright The Closure Library Authors.
             SPDX-License-Identifier: Apache-2.0
            */
            var C = this || self,
                D = function(n, u) {
                    for (var x = n.split("."), t = C, q; x.length && (q = x.shift());) x.length || u === void 0 ? t = t[q] && t[q] !== Object.prototype[q] ? t[q] : t[q] = {} : t[q] = u
                };
            /*
             Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
            var E, F = function() {};
            (function() {
                function n(h, l) {
                    h = h || "";
                    l = l || {};
                    for (var y in u) u.hasOwnProperty(y) && (l.O && (l["fix_" + y] = !0), l.H = l.H || l["fix_" + y]);
                    var z = {
                            comment: /^\x3c!--/,
                            endTag: /^<\//,
                            atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                            startTag: /^</,
                            chars: /^[^<]/
                        },
                        e = {
                            comment: function() {
                                var a = h.indexOf("--\x3e");
                                if (a >= 0) return {
                                    content: h.substr(4, a),
                                    length: a + 3
                                }
                            },
                            endTag: function() {
                                var a = h.match(t);
                                if (a) return {
                                    tagName: a[1],
                                    length: a[0].length
                                }
                            },
                            atomicTag: function() {
                                var a = e.startTag();
                                if (a) {
                                    var b = h.slice(a.length);
                                    if (b.match(new RegExp("</\\s*" + a.tagName + "\\s*>", "i"))) {
                                        var c = b.match(new RegExp("([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>", "i"));
                                        if (c) return {
                                            tagName: a.tagName,
                                            g: a.g,
                                            content: c[1],
                                            length: c[0].length + a.length
                                        }
                                    }
                                }
                            },
                            startTag: function() {
                                var a = h.match(x);
                                if (a) {
                                    var b = {};
                                    a[2].replace(q, function(c, d) {
                                        var k = arguments[2] || arguments[3] || arguments[4] || B.test(d) && d || null,
                                            g = document.createElement("div");
                                        g.innerHTML = k;
                                        b[d] = g.textContent || g.innerText || k
                                    });
                                    return {
                                        tagName: a[1],
                                        g: b,
                                        u: !!a[3],
                                        length: a[0].length
                                    }
                                }
                            },
                            chars: function() {
                                var a =
                                    h.indexOf("<");
                                return {
                                    length: a >= 0 ? a : h.length
                                }
                            }
                        },
                        f = function() {
                            for (var a in z)
                                if (z[a].test(h)) {
                                    var b = e[a]();
                                    return b ? (b.type = b.type || a, b.text = h.substr(0, b.length), h = h.slice(b.length), b) : null
                                }
                        };
                    l.H && function() {
                        var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                            b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                            c = [];
                        c.I = function() {
                            return this[this.length - 1]
                        };
                        c.A = function(m) {
                            var p = this.I();
                            return p && p.tagName && p.tagName.toUpperCase() === m.toUpperCase()
                        };
                        c.W = function(m) {
                            for (var p =
                                    0, w; w = this[p]; p++)
                                if (w.tagName === m) return !0;
                            return !1
                        };
                        var d = function(m) {
                                m && m.type === "startTag" && (m.u = a.test(m.tagName) || m.u);
                                return m
                            },
                            k = f,
                            g = function() {
                                h = "</" + c.pop().tagName + ">" + h
                            },
                            r = {
                                startTag: function(m) {
                                    var p = m.tagName;
                                    p.toUpperCase() === "TR" && c.A("TABLE") ? (h = "<TBODY>" + h, v()) : l.pa && b.test(p) && c.W(p) ? c.A(p) ? g() : (h = "</" + m.tagName + ">" + h, v()) : m.u || c.push(m)
                                },
                                endTag: function(m) {
                                    c.I() ? l.X && !c.A(m.tagName) ? g() : c.pop() : l.X && (k(), v())
                                }
                            },
                            v = function() {
                                var m = h,
                                    p = d(k());
                                h = m;
                                if (p && r[p.type]) r[p.type](p)
                            };
                        f = function() {
                            v();
                            return d(k())
                        }
                    }();
                    return {
                        append: function(a) {
                            h += a
                        },
                        fa: f,
                        ta: function(a) {
                            for (var b;
                                (b = f()) && (!a[b.type] || a[b.type](b) !== !1););
                        },
                        clear: function() {
                            var a = h;
                            h = "";
                            return a
                        },
                        ua: function() {
                            return h
                        },
                        stack: []
                    }
                }
                var u = function() {
                        var h = {},
                            l = this.document.createElement("div");
                        l.innerHTML = "<P><I></P></I>";
                        h.wa = l.innerHTML !== "<P><I></P></I>";
                        l.innerHTML = "<P><i><P></P></i></P>";
                        h.va = l.childNodes.length === 2;
                        return h
                    }(),
                    x = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                    t = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                    q = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
                    B = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
                n.supports = u;
                for (var A in u);
                E = n
            })();
            (function() {
                function n() {}

                function u(e) {
                    return e !== void 0 && e !== null
                }

                function x(e, f, a) {
                    var b, c = e && e.length || 0;
                    for (b = 0; b < c; b++) f.call(a, e[b], b)
                }

                function t(e, f, a) {
                    for (var b in e) e.hasOwnProperty(b) && f.call(a, b, e[b])
                }

                function q(e, f) {
                    t(f, function(a, b) {
                        e[a] = b
                    });
                    return e
                }

                function B(e, f) {
                    e = e || {};
                    t(f, function(a, b) {
                        u(e[a]) || (e[a] = b)
                    });
                    return e
                }

                function A(e) {
                    try {
                        return y.call(e)
                    } catch (a) {
                        var f = [];
                        x(e, function(b) {
                            f.push(b)
                        });
                        return f
                    }
                }
                var h = {
                        K: n,
                        L: n,
                        M: n,
                        N: n,
                        P: n,
                        R: function(e) {
                            return e
                        },
                        done: n,
                        error: function(e) {
                            throw e;
                        },
                        ga: !1
                    },
                    l = this;
                if (!l.postscribe) {
                    var y = Array.prototype.slice,
                        z = function() {
                            function e(a, b, c) {
                                var d = "data-ps-" + b;
                                if (arguments.length === 2) {
                                    var k = a.getAttribute(d);
                                    return u(k) ? String(k) : k
                                }
                                u(c) && c !== "" ? a.setAttribute(d, c) : a.removeAttribute(d)
                            }

                            function f(a, b) {
                                var c = a.ownerDocument;
                                q(this, {
                                    root: a,
                                    options: b,
                                    l: c.defaultView || c.parentWindow,
                                    i: c,
                                    o: E("", {
                                        O: !0
                                    }),
                                    v: [a],
                                    C: "",
                                    D: c.createElement(a.nodeName),
                                    j: [],
                                    h: []
                                });
                                e(this.D, "proxyof", 0)
                            }
                            f.prototype.write = function() {
                                [].push.apply(this.h, arguments);
                                for (var a; !this.m &&
                                    this.h.length;) a = this.h.shift(), "function" === typeof a ? this.V(a) : this.F(a)
                            };
                            f.prototype.V = function(a) {
                                var b = {
                                    type: "function",
                                    value: a.name || a.toString()
                                };
                                this.B(b);
                                a.call(this.l, this.i);
                                this.J(b)
                            };
                            f.prototype.F = function(a) {
                                this.o.append(a);
                                for (var b, c = [], d, k;
                                    (b = this.o.fa()) && !(d = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("script") : !1) && !(k = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("style") : !1);) c.push(b);
                                this.la(c);
                                d && this.Y(b);
                                k && this.Z(b)
                            };
                            f.prototype.la = function(a) {
                                var b = this.S(a);
                                b.G && (b.aa = this.C + b.G, this.C += b.proxy, this.D.innerHTML = b.aa, this.ja())
                            };
                            f.prototype.S = function(a) {
                                var b = this.v.length,
                                    c = [],
                                    d = [],
                                    k = [];
                                x(a, function(g) {
                                    c.push(g.text);
                                    if (g.g) {
                                        if (!/^noscript$/i.test(g.tagName)) {
                                            var r = b++;
                                            d.push(g.text.replace(/(\/?>)/, " data-ps-id=" + r + " $1"));
                                            g.g.id !== "ps-script" && g.g.id !== "ps-style" && k.push(g.type === "atomicTag" ? "" : "<" + g.tagName + " data-ps-proxyof=" + r + (g.u ? " />" : ">"))
                                        }
                                    } else d.push(g.text), k.push(g.type === "endTag" ? g.text : "")
                                });
                                return {
                                    xa: a,
                                    raw: c.join(""),
                                    G: d.join(""),
                                    proxy: k.join("")
                                }
                            };
                            f.prototype.ja = function() {
                                for (var a, b = [this.D]; u(a = b.shift());) {
                                    var c = a.nodeType === 1;
                                    if (!c || !e(a, "proxyof")) {
                                        c && (this.v[e(a, "id")] = a, e(a, "id", null));
                                        var d = a.parentNode && e(a.parentNode, "proxyof");
                                        d && this.v[d].appendChild(a)
                                    }
                                    b.unshift.apply(b, A(a.childNodes))
                                }
                            };
                            f.prototype.Y = function(a) {
                                var b = this.o.clear();
                                b && this.h.unshift(b);
                                a.src = a.g.src || a.g.na;
                                a.src && this.j.length ? this.m = a : this.B(a);
                                var c = this;
                                this.ka(a, function() {
                                    c.J(a)
                                })
                            };
                            f.prototype.Z = function(a) {
                                var b = this.o.clear();
                                b && this.h.unshift(b);
                                a.type =
                                    a.g.type || a.g.TYPE || "text/css";
                                this.ma(a);
                                b && this.write()
                            };
                            f.prototype.ma = function(a) {
                                var b = this.U(a);
                                this.ca(b);
                                a.content && (b.styleSheet && !b.sheet ? b.styleSheet.cssText = a.content : b.appendChild(this.i.createTextNode(a.content)))
                            };
                            f.prototype.U = function(a) {
                                var b = this.i.createElement(a.tagName);
                                b.setAttribute("type", a.type);
                                t(a.g, function(c, d) {
                                    b.setAttribute(c, d)
                                });
                                return b
                            };
                            f.prototype.ca = function(a) {
                                this.F('<span id="ps-style"/>');
                                var b = this.i.getElementById("ps-style");
                                b.parentNode.replaceChild(a,
                                    b)
                            };
                            f.prototype.B = function(a) {
                                a.da = this.h;
                                this.h = [];
                                this.j.unshift(a)
                            };
                            f.prototype.J = function(a) {
                                a !== this.j[0] ? this.options.error({
                                    message: "Bad script nesting or script finished twice"
                                }) : (this.j.shift(), this.write.apply(this, a.da), !this.j.length && this.m && (this.B(this.m), this.m = null))
                            };
                            f.prototype.ka = function(a, b) {
                                var c = this.T(a),
                                    d = this.ia(c),
                                    k = this.options.K;
                                a.src && (c.src = a.src, this.ha(c, d ? k : function() {
                                    b();
                                    k()
                                }));
                                try {
                                    this.ba(c), a.src && !d || b()
                                } catch (g) {
                                    this.options.error(g), b()
                                }
                            };
                            f.prototype.T = function(a) {
                                var b =
                                    this.i.createElement(a.tagName);
                                t(a.g, function(c, d) {
                                    b.setAttribute(c, d)
                                });
                                a.content && (b.text = a.content);
                                return b
                            };
                            f.prototype.ba = function(a) {
                                this.F('<span id="ps-script"/>');
                                var b = this.i.getElementById("ps-script");
                                b.parentNode.replaceChild(a, b)
                            };
                            f.prototype.ha = function(a, b) {
                                function c() {
                                    a = a.onload = a.onreadystatechange = a.onerror = null
                                }
                                var d = this.options.error;
                                q(a, {
                                    onload: function() {
                                        c();
                                        b()
                                    },
                                    onreadystatechange: function() {
                                        /^(loaded|complete)$/.test(a.readyState) && (c(), b())
                                    },
                                    onerror: function() {
                                        var k = {
                                            message: "remote script failed " + a.src
                                        };
                                        c();
                                        d(k);
                                        b()
                                    }
                                })
                            };
                            f.prototype.ia = function(a) {
                                return !/^script$/i.test(a.nodeName) || !!(this.options.ga && a.src && a.hasAttribute("async"))
                            };
                            return f
                        }();
                    l.postscribe = function() {
                        function e() {
                            var d = b.shift(),
                                k;
                            d && (k = d[d.length - 1], k.L(), d.stream = f.apply(null, d), k.M())
                        }

                        function f(d, k, g) {
                            function r(w) {
                                w = g.R(w);
                                c.write(w);
                                g.N(w)
                            }
                            c = new z(d, g);
                            c.id = a++;
                            c.name = g.name || c.id;
                            var v = d.ownerDocument,
                                m = {
                                    close: v.close,
                                    open: v.open,
                                    write: v.write,
                                    writeln: v.writeln
                                };
                            q(v, {
                                close: n,
                                open: n,
                                write: function() {
                                    return r(A(arguments).join(""))
                                },
                                writeln: function() {
                                    return r(A(arguments).join("") + "\n")
                                }
                            });
                            var p = c.l.onerror || n;
                            c.l.onerror = function(w, G, H) {
                                g.error({
                                    ra: w + " - " + G + ":" + H
                                });
                                p.apply(c.l, arguments)
                            };
                            c.write(k, function() {
                                q(v, m);
                                c.l.onerror = p;
                                g.done();
                                c = null;
                                e()
                            });
                            return c
                        }
                        var a = 0,
                            b = [],
                            c = null;
                        return q(function(d, k, g) {
                            "function" === typeof g && (g = {
                                done: g
                            });
                            g = B(g, h);
                            d = /^#/.test(d) ? l.document.getElementById(d.substr(1)) : d.qa ? d[0] : d;
                            var r = [d, k, g];
                            d.ea = {
                                cancel: function() {
                                    r.stream ? r.stream.abort() :
                                        r[1] = n
                                }
                            };
                            g.P(r);
                            b.push(r);
                            c || e();
                            return d.ea
                        }, {
                            streams: {},
                            sa: b,
                            oa: z
                        })
                    }();
                    F = l.postscribe
                }
            })();
            D("google_tag_manager_external.postscribe.installPostscribe", function() {
                var n = window.google_tag_manager;
                n && (n.postscribe || (n.postscribe = window.postscribe || F))
            });
            D("google_tag_manager_external.postscribe.getPostscribe", function() {
                return window.google_tag_manager.postscribe
            });
        }).call(this);
    } catch {}


    var k, ba = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        da = function(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        ea = da(this),
        fa = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ia = {},
        ka = {},
        na = function(a, b, c) {
            if (!c || a != null) {
                var d = ka[b];
                if (d == null) return a[b];
                var e = a[d];
                return e !== void 0 ? e : a[b]
            }
        },
        oa = function(a, b, c) {
            if (b) a: {
                var d = a.split("."),
                    e = d.length === 1,
                    f = d[0],
                    g;!e && f in ia ? g = ia : g = ea;
                for (var h = 0; h < d.length - 1; h++) {
                    var l = d[h];
                    if (!(l in g)) break a;
                    g = g[l]
                }
                var n = d[d.length - 1],
                    p = fa && c === "es6" ? g[n] : null,
                    q = b(p);
                if (q != null)
                    if (e) ca(ia, n, {
                        configurable: !0,
                        writable: !0,
                        value: q
                    });
                    else if (q !== p) {
                    if (ka[n] === void 0) {
                        var r =
                            Math.random() * 1E9 >>> 0;
                        ka[n] = fa ? ea.Symbol(n) : "$jscp$" + r + "$" + n
                    }
                    ca(g, ka[n], {
                        configurable: !0,
                        writable: !0,
                        value: q
                    })
                }
            }
        },
        qa;
    if (fa && typeof Object.setPrototypeOf == "function") qa = Object.setPrototypeOf;
    else {
        var ra;
        a: {
            var sa = {
                    a: !0
                },
                ua = {};
            try {
                ua.__proto__ = sa;
                ra = ua.a;
                break a
            } catch (a) {}
            ra = !1
        }
        qa = ra ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var va = qa,
        wa = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (va) va(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ns = b.prototype
        },
        xa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        m = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: xa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ya = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        za = function(a) {
            return a instanceof Array ? a : ya(m(a))
        },
        Ba = function(a) {
            return Aa(a, a)
        },
        Aa = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        Ca = fa && typeof na(Object, "assign") == "function" ? na(Object, "assign") : function(a, b) {
            if (a == null) throw new TypeError("No nullish arg");
            a = Object(a);
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    oa("Object.assign", function(a) {
        return a || Ca
    }, "es6");
    var Da = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ea = this || self,
        Fa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ns = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.wt = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        };
    var Ga = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Ha = function() {
        this.map = {};
        this.C = {}
    };
    Ha.prototype.get = function(a) {
        return this.map["dust." + a]
    };
    Ha.prototype.set = function(a, b) {
        var c = "dust." + a;
        this.C.hasOwnProperty(c) || (this.map[c] = b)
    };
    Ha.prototype.has = function(a) {
        return this.map.hasOwnProperty("dust." + a)
    };
    Ha.prototype.remove = function(a) {
        var b = "dust." + a;
        this.C.hasOwnProperty(b) || delete this.map[b]
    };
    var Ia = function(a, b) {
        var c = [],
            d;
        for (d in a.map)
            if (a.map.hasOwnProperty(d)) {
                var e = d.substring(5);
                switch (b) {
                    case 1:
                        c.push(e);
                        break;
                    case 2:
                        c.push(a.map[d]);
                        break;
                    case 3:
                        c.push([e, a.map[d]])
                }
            } return c
    };
    Ha.prototype.ya = function() {
        return Ia(this, 1)
    };
    Ha.prototype.wc = function() {
        return Ia(this, 2)
    };
    Ha.prototype.hc = function() {
        return Ia(this, 3)
    };
    var Ja = function() {};
    Ja.prototype.reset = function() {};
    var Ka = function(a, b) {
        this.T = a;
        this.parent = b;
        this.P = this.C = void 0;
        this.Bb = !1;
        this.H = function(c, d, e) {
            return c.apply(d, e)
        };
        this.values = new Ha
    };
    Ka.prototype.add = function(a, b) {
        La(this, a, b, !1)
    };
    Ka.prototype.Fh = function(a, b) {
        La(this, a, b, !0)
    };
    var La = function(a, b, c, d) {
        if (!a.Bb)
            if (d) {
                var e = a.values;
                e.set(b, c);
                e.C["dust." + b] = !0
            } else a.values.set(b, c)
    };
    k = Ka.prototype;
    k.set = function(a, b) {
        this.Bb || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b))
    };
    k.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    k.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    };
    k.ob = function() {
        var a = new Ka(this.T, this);
        this.C && a.Qb(this.C);
        a.Zc(this.H);
        a.Ud(this.P);
        return a
    };
    k.Ld = function() {
        return this.T
    };
    k.Qb = function(a) {
        this.C = a
    };
    k.kn = function() {
        return this.C
    };
    k.Zc = function(a) {
        this.H = a
    };
    k.kj = function() {
        return this.H
    };
    k.Va = function() {
        this.Bb = !0
    };
    k.Ud = function(a) {
        this.P = a
    };
    k.qb = function() {
        return this.P
    };
    var Na = function() {
        this.value = {};
        this.prefix = "gtm."
    };
    Na.prototype.set = function(a, b) {
        this.value[this.prefix + String(a)] = b
    };
    Na.prototype.get = function(a) {
        return this.value[this.prefix + String(a)]
    };
    Na.prototype.has = function(a) {
        return this.value.hasOwnProperty(this.prefix + String(a))
    };

    function Oa() {
        try {
            if (Map) return new Map
        } catch (a) {}
        return new Na
    };
    var Pa = function() {
        this.values = []
    };
    Pa.prototype.add = function(a) {
        this.values.indexOf(a) === -1 && this.values.push(a)
    };
    Pa.prototype.has = function(a) {
        return this.values.indexOf(a) > -1
    };
    var Qa = function(a, b) {
        this.ka = a;
        this.parent = b;
        this.T = this.H = void 0;
        this.Bb = !1;
        this.P = function(d, e, f) {
            return d.apply(e, f)
        };
        this.C = Oa();
        var c;
        a: {
            try {
                if (Set) {
                    c = new Set;
                    break a
                }
            } catch (d) {}
            c = new Pa
        }
        this.V = c
    };
    Qa.prototype.add = function(a, b) {
        Ra(this, a, b, !1)
    };
    Qa.prototype.Fh = function(a, b) {
        Ra(this, a, b, !0)
    };
    var Ra = function(a, b, c, d) {
        a.Bb || a.V.has(b) || (d && a.V.add(b), a.C.set(b, c))
    };
    k = Qa.prototype;
    k.set = function(a, b) {
        this.Bb || (!this.C.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.V.has(a) || this.C.set(a, b))
    };
    k.get = function(a) {
        return this.C.has(a) ? this.C.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    k.has = function(a) {
        return !!this.C.has(a) || !(!this.parent || !this.parent.has(a))
    };
    k.ob = function() {
        var a = new Qa(this.ka, this);
        this.H && a.Qb(this.H);
        a.Zc(this.P);
        a.Ud(this.T);
        return a
    };
    k.Ld = function() {
        return this.ka
    };
    k.Qb = function(a) {
        this.H = a
    };
    k.kn = function() {
        return this.H
    };
    k.Zc = function(a) {
        this.P = a
    };
    k.kj = function() {
        return this.P
    };
    k.Va = function() {
        this.Bb = !0
    };
    k.Ud = function(a) {
        this.T = a
    };
    k.qb = function() {
        return this.T
    };
    var Ta = function(a, b, c) {
        var d;
        d = Error.call(this, a.message);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.un = a;
        this.Zm = c === void 0 ? !1 : c;
        this.debugInfo = [];
        this.C = b
    };
    wa(Ta, Error);
    var Ua = function(a) {
        return a instanceof Ta ? a : new Ta(a, void 0, !0)
    };
    var Va = [];

    function Wa(a) {
        return Va[a] === void 0 ? !1 : Va[a]
    };
    var Xa = Oa();

    function Ya(a, b) {
        for (var c, d = m(b), e = d.next(); !e.done && !(c = $a(a, e.value), c instanceof Ga); e = d.next());
        return c
    }

    function $a(a, b) {
        try {
            if (Wa(18)) {
                var c = b[0],
                    d = b.slice(1),
                    e = String(c),
                    f = Xa.has(e) ? Xa.get(e) : a.get(e);
                if (!f || typeof f.invoke !== "function") throw Ua(Error("Attempting to execute non-function " + b[0] + "."));
                return f.apply(a, d)
            }
            var g = m(b),
                h = g.next().value,
                l = ya(g),
                n = a.get(String(h));
            if (!n || typeof n.invoke !== "function") throw Ua(Error("Attempting to execute non-function " + b[0] + "."));
            return n.invoke.apply(n, [a].concat(za(l)))
        } catch (q) {
            var p = a.kn();
            p && p(q, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw q;
        }
    };
    var ab = function() {
        this.H = new Ja;
        this.C = Wa(18) ? new Qa(this.H) : new Ka(this.H)
    };
    k = ab.prototype;
    k.Ld = function() {
        return this.H
    };
    k.Qb = function(a) {
        this.C.Qb(a)
    };
    k.Zc = function(a) {
        this.C.Zc(a)
    };
    k.execute = function(a) {
        return this.Kj([a].concat(za(Da.apply(1, arguments))))
    };
    k.Kj = function() {
        for (var a, b = m(Da.apply(0, arguments)), c = b.next(); !c.done; c = b.next()) a = $a(this.C, c.value);
        return a
    };
    k.Ip = function(a) {
        var b = Da.apply(1, arguments),
            c = this.C.ob();
        c.Ud(a);
        for (var d, e = m(b), f = e.next(); !f.done; f = e.next()) d = $a(c, f.value);
        return d
    };
    k.Va = function() {
        this.C.Va()
    };
    var bb = function() {
        this.Ha = !1;
        this.da = new Ha
    };
    k = bb.prototype;
    k.get = function(a) {
        return this.da.get(a)
    };
    k.set = function(a, b) {
        this.Ha || this.da.set(a, b)
    };
    k.has = function(a) {
        return this.da.has(a)
    };
    k.remove = function(a) {
        this.Ha || this.da.remove(a)
    };
    k.ya = function() {
        return this.da.ya()
    };
    k.wc = function() {
        return this.da.wc()
    };
    k.hc = function() {
        return this.da.hc()
    };
    k.Va = function() {
        this.Ha = !0
    };
    k.Bb = function() {
        return this.Ha
    };

    function db() {
        for (var a = eb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function fb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var eb, gb;

    function hb(a) {
        eb = eb || fb();
        gb = gb || db();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(eb[l], eb[n], eb[p], eb[q])
        }
        return b.join("")
    }

    function ib(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = gb[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        eb = eb || fb();
        gb = gb || db();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (h === 64 && e === -1) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2), h !== 64 && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var jb = {};

    function kb(a, b) {
        var c = jb[a];
        c || (c = jb[a] = []);
        c[b] = !0
    }

    function lb() {
        delete jb.GA4_EVENT
    }

    function nb() {
        var a = ob.slice();
        jb.GTAG_EVENT_FEATURE_CHANNEL = a
    }

    function pb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) d % 8 === 0 && d > 0 && (b.push(String.fromCharCode(c)), c = 0), a[d] && (c |= 1 << d % 8);
        c > 0 && b.push(String.fromCharCode(c));
        return hb(b.join("")).replace(/\.+$/, "")
    };

    function qb() {}

    function rb(a) {
        return typeof a === "function"
    }

    function sb(a) {
        return typeof a === "string"
    }

    function tb(a) {
        return typeof a === "number" && !isNaN(a)
    }

    function ub(a) {
        return Array.isArray(a) ? a : [a]
    }

    function vb(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function wb(a, b) {
        if (!tb(a) || !tb(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    function xb(a, b) {
        for (var c = new yb, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e])) return !0;
        return !1
    }

    function zb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function Ab(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }

    function Bb(a) {
        return Math.round(Number(a)) || 0
    }

    function Cb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }

    function Db(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }

    function Eb(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }

    function Fb() {
        return new Date(Date.now())
    }

    function Gb() {
        return Fb().getTime()
    }
    var yb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    yb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    yb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    yb.prototype.contains = function(a) {
        return this.get(a) !== void 0
    };

    function Hb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }

    function Ib(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }

    function Jb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function Kb(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }

    function Lb(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }

    function Mb(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    }

    function Nb(a, b, c) {
        c = c || [];
        for (var d = a, e = 0; e < b.length - 1; e++) {
            if (!d.hasOwnProperty(b[e])) return;
            d = d[b[e]];
            if (c.indexOf(d) >= 0) return
        }
        return d
    }

    function Ob(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var Rb = /^\w{1,9}$/;

    function Sb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        zb(a, function(d, e) {
            Rb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }

    function Tb(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
        }
        return new Uint8Array(b)
    }

    function Ub(a, b) {
        function c() {
            e && ++d === b && (e(), e = null, c.done = !0)
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c
    }

    function Vb(a) {
        if (!a) return a;
        var b = a;
        try {
            b = decodeURIComponent(a)
        } catch (d) {}
        var c = b.split(",");
        return c.length === 2 && c[0] === c[1] ? c[0] : a
    }

    function Wb(a, b, c) {
        function d(n) {
            var p = n.split("=")[0];
            if (a.indexOf(p) < 0) return n;
            if (c !== void 0) return p + "=" + c
        }

        function e(n) {
            return n.split("&").map(d).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var f = b.href.split(/[?#]/)[0],
            g = b.search,
            h = b.hash;
        g[0] === "?" && (g = g.substring(1));
        h[0] === "#" && (h = h.substring(1));
        g = e(g);
        h = e(h);
        g !== "" && (g = "?" + g);
        h !== "" && (h = "#" + h);
        var l = "" + f + g + h;
        l[l.length - 1] === "/" && (l = l.substring(0, l.length - 1));
        return l
    }

    function Xb(a) {
        for (var b = 0; b < 3; ++b) try {
            var c = decodeURIComponent(a).replace(/\+/g, " ");
            if (c === a) break;
            a = c
        } catch (d) {
            return ""
        }
        return a
    }

    function Yb() {
        var a = w,
            b;
        a: {
            var c = a.crypto || a.msCrypto;
            if (c && c.getRandomValues) try {
                var d = new Uint8Array(25);
                c.getRandomValues(d);
                b = btoa(String.fromCharCode.apply(String, za(d))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                break a
            } catch (e) {}
            b = void 0
        }
        return b
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var Zb = globalThis.trustedTypes,
        $b;

    function ac() {
        var a = null;
        if (!Zb) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Zb.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function bc() {
        $b === void 0 && ($b = ac());
        return $b
    };
    var cc = function(a) {
        this.C = a
    };
    cc.prototype.toString = function() {
        return this.C + ""
    };

    function dc(a) {
        var b = a,
            c = bc(),
            d = c ? c.createScriptURL(b) : b;
        return new cc(d)
    }

    function ec(a) {
        if (a instanceof cc) return a.C;
        throw Error("");
    };
    var fc = Ba([""]),
        hc = Aa(["\x00"], ["\\0"]),
        ic = Aa(["\n"], ["\\n"]),
        jc = Aa(["\x00"], ["\\u0000"]);

    function kc(a) {
        return a.toString().indexOf("`") === -1
    }
    kc(function(a) {
        return a(fc)
    }) || kc(function(a) {
        return a(hc)
    }) || kc(function(a) {
        return a(ic)
    }) || kc(function(a) {
        return a(jc)
    });
    var lc = function(a) {
        this.C = a
    };
    lc.prototype.toString = function() {
        return this.C
    };
    var mc = function(a) {
        this.yr = a
    };

    function nc(a) {
        return new mc(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var oc = [nc("data"), nc("http"), nc("https"), nc("mailto"), nc("ftp"), new mc(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function pc(a) {
        var b;
        b = b === void 0 ? oc : b;
        if (a instanceof lc) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof mc && d.yr(a)) return new lc(a)
        }
    }
    var qc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function rc(a) {
        var b;
        if (a instanceof lc)
            if (a instanceof lc) b = a.C;
            else throw Error("");
        else b = qc.test(a) ? a : void 0;
        return b
    };

    function sc(a, b) {
        var c = rc(b);
        c !== void 0 && (a.action = c)
    };

    function tc(a, b) {
        throw Error(b === void 0 ? "unexpected value " + a + "!" : b);
    };
    var uc = function(a) {
        this.C = a
    };
    uc.prototype.toString = function() {
        return this.C + ""
    };
    var wc = function() {
        this.C = vc[0].toLowerCase()
    };
    wc.prototype.toString = function() {
        return this.C
    };

    function xc(a, b) {
        var c = [new wc];
        if (c.length === 0) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof wc) g = f.C;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return e.indexOf(f) !== 0
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };
    var yc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function zc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var w = window,
        Ac = window.history,
        z = document,
        Bc = navigator;

    function Cc() {
        var a;
        try {
            a = Bc.serviceWorker
        } catch (b) {
            return
        }
        return a
    }
    var Dc = z.currentScript,
        Ec = Dc && Dc.src;

    function Fc(a, b) {
        var c = w,
            d = c[a];
        c[a] = d === void 0 ? b : d;
        return c[a]
    }

    function Gc(a) {
        return (Bc.userAgent || "").indexOf(a) !== -1
    }

    function Hc() {
        return Gc("Firefox") || Gc("FxiOS")
    }

    function Ic() {
        return (Gc("GSA") || Gc("GoogleApp")) && (Gc("iPhone") || Gc("iPad"))
    }

    function Jc() {
        return Gc("Edg/") || Gc("EdgA/") || Gc("EdgiOS/")
    }
    var Kc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Lc = {
            height: 1,
            onload: 1,
            src: 1,
            style: 1,
            width: 1
        };

    function Mc(a, b, c) {
        b && zb(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function Nc(a, b, c, d, e) {
        var f = z.createElement("script");
        Mc(f, d, Kc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var g;
        g = dc(zc(a));
        f.src = ec(g);
        var h, l = f.ownerDocument;
        l = l === void 0 ? document : l;
        var n, p, q = (p = (n = l).querySelector) == null ? void 0 : p.call(n, "script[nonce]");
        (h = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") && f.setAttribute("nonce", h);
        b && (f.onload = b);
        c && (f.onerror = c);
        if (e) e.appendChild(f);
        else {
            var r = z.getElementsByTagName("script")[0] || z.body || z.head;
            r.parentNode.insertBefore(f, r)
        }
        return f
    }

    function Oc() {
        if (Ec) {
            var a = Ec.toLowerCase();
            if (a.indexOf("https://") === 0) return 2;
            if (a.indexOf("http://") === 0) return 3
        }
        return 1
    }

    function Pc(a, b, c, d, e, f) {
        f = f === void 0 ? !0 : f;
        var g = e,
            h = !1;
        g || (g = z.createElement("iframe"), h = !0);
        Mc(g, c, Lc);
        d && zb(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        a !== void 0 && (g.src = a);
        if (h) {
            var l = z.body && z.body.lastChild || z.body || z.head;
            l.parentNode.insertBefore(g, l)
        }
        b && (g.onload = b);
        return g
    }

    function Qc(a, b, c, d) {
        return Rc(a, b, c, d)
    }

    function Sc(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, !!d)
    }

    function Tc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }

    function Uc(a) {
        w.setTimeout(a, 0)
    }

    function Vc(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }

    function Wc(a) {
        var b = a.innerText || a.textContent || "";
        b && b !== " " && (b = b.replace(/^[\s\xa0]+/g, ""), b = b.replace(/[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }

    function Xc(a) {
        var b = z.createElement("div"),
            c = b,
            d, e = zc("A<div>" + a + "</div>"),
            f = bc(),
            g = f ? f.createHTML(e) : e;
        d = new uc(g);
        if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName)) throw Error("");
        var h;
        if (d instanceof uc) h = d.C;
        else throw Error("");
        c.innerHTML = h;
        b = b.lastChild;
        for (var l = []; b && b.firstChild;) l.push(b.removeChild(b.firstChild));
        return l
    }

    function Yc(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }

    function Zc(a, b, c) {
        var d;
        try {
            d = Bc.sendBeacon && Bc.sendBeacon(a)
        } catch (e) {
            kb("TAGGING", 15)
        }
        d ? b == null || b() : Rc(a, b, c)
    }

    function $c(a, b) {
        try {
            return Bc.sendBeacon(a, b)
        } catch (c) {
            kb("TAGGING", 15)
        }
        return !1
    }
    var ad = Object.freeze({
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    });

    function bd(a, b, c, d, e) {
        if (cd()) {
            var f = na(Object, "assign").call(Object, {}, ad);
            b && (f.body = b);
            c && (c.attributionReporting && (f.attributionReporting = c.attributionReporting), c.browsingTopics !== void 0 && (f.browsingTopics = c.browsingTopics), c.credentials && (f.credentials = c.credentials), c.keepalive !== void 0 && (f.keepalive = c.keepalive), c.method && (f.method = c.method), c.mode && (f.mode = c.mode));
            try {
                var g = w.fetch(a, f);
                if (g) return g.then(function(l) {
                    l && (l.ok || l.status === 0) ? d == null || d() : e == null || e()
                }).catch(function() {
                    e ==
                        null || e()
                }), !0
            } catch (l) {}
        }
        if ((c == null ? 0 : c.Re) || (c == null ? 0 : c.credentials) && c.credentials !== "include") return e == null || e(), !1;
        if (b) {
            var h = $c(a, b);
            h ? d == null || d() : e == null || e();
            return h
        }
        dd(a, d, e);
        return !0
    }

    function cd() {
        return typeof w.fetch === "function"
    }

    function ed(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c
    }

    function fd() {
        var a = w.performance;
        if (a && rb(a.now)) return a.now()
    }

    function gd() {
        var a, b = w.performance;
        if (b && b.getEntriesByType) try {
            var c = b.getEntriesByType("navigation");
            c && c.length > 0 && (a = c[0].type)
        } catch (d) {
            return "e"
        }
        if (!a) return "u";
        switch (a) {
            case "navigate":
                return "n";
            case "back_forward":
                return "h";
            case "reload":
                return "r";
            case "prerender":
                return "p";
            default:
                return "x"
        }
    }

    function hd() {
        return w.performance || void 0
    }

    function id() {
        var a = w.webPixelsManager;
        return a ? a.createShopifyExtend !== void 0 : !1
    }
    var Rc = function(a, b, c, d) {
            var e = new Image(1, 1);
            Mc(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a;
            return e
        },
        dd = Zc;

    function jd(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function kd(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }

    function ld(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function md(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        return String(c).indexOf(String(d)) > -1
    }

    function nd(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }

    function od(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        switch (c) {
            case "pageLocation":
                var e = w.location.href;
                d instanceof bb && d.get("stripProtocol") && (e = e.replace(/^https?:\/\//, ""));
                return e
        }
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
    */
    var pd = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        qd = function(a) {
            if (a == null) return String(a);
            var b = pd.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        rd = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        sd = function(a) {
            if (!a || qd(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !rd(a, "constructor") && !rd(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return b === void 0 ||
                rd(a, b)
        },
        td = function(a, b) {
            var c = b || (qd(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (rd(a, d)) {
                    var e = a[d];
                    qd(e) == "array" ? (qd(c[d]) != "array" && (c[d] = []), c[d] = td(e, c[d])) : sd(e) ? (sd(c[d]) || (c[d] = {}), c[d] = td(e, c[d])) : c[d] = e
                } return c
        };

    function ud(a) {
        if (a == void 0 || Array.isArray(a) || sd(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    }

    function vd(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    };
    var wd = function(a) {
        a = a === void 0 ? [] : a;
        this.da = new Ha;
        this.values = [];
        this.Ha = !1;
        for (var b in a) a.hasOwnProperty(b) && (vd(b) ? this.values[Number(b)] = a[Number(b)] : this.da.set(b, a[b]))
    };
    k = wd.prototype;
    k.toString = function(a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.values.length; c++) {
            var d = this.values[c];
            d === null || d === void 0 ? b.push("") : d instanceof wd ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    k.set = function(a, b) {
        if (!this.Ha)
            if (a === "length") {
                if (!vd(b)) throw Ua(Error("RangeError: Length property must be a valid integer."));
                this.values.length = Number(b)
            } else vd(a) ? this.values[Number(a)] = b : this.da.set(a, b)
    };
    k.get = function(a) {
        return a === "length" ? this.length() : vd(a) ? this.values[Number(a)] : this.da.get(a)
    };
    k.length = function() {
        return this.values.length
    };
    k.ya = function() {
        for (var a = this.da.ya(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(String(b));
        return a
    };
    k.wc = function() {
        for (var a = this.da.wc(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(this.values[b]);
        return a
    };
    k.hc = function() {
        for (var a = this.da.hc(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
        return a
    };
    k.remove = function(a) {
        vd(a) ? delete this.values[Number(a)] : this.Ha || this.da.remove(a)
    };
    k.pop = function() {
        return this.values.pop()
    };
    k.push = function() {
        return this.values.push.apply(this.values, za(Da.apply(0, arguments)))
    };
    k.shift = function() {
        return this.values.shift()
    };
    k.splice = function(a, b) {
        var c = Da.apply(2, arguments);
        return b === void 0 && c.length === 0 ? new wd(this.values.splice(a)) : new wd(this.values.splice.apply(this.values, [a, b || 0].concat(za(c))))
    };
    k.unshift = function() {
        return this.values.unshift.apply(this.values, za(Da.apply(0, arguments)))
    };
    k.has = function(a) {
        return vd(a) && this.values.hasOwnProperty(a) || this.da.has(a)
    };
    k.Va = function() {
        this.Ha = !0;
        Object.freeze(this.values)
    };
    k.Bb = function() {
        return this.Ha
    };

    function xd(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var yd = function(a, b) {
        this.functionName = a;
        this.Kd = b;
        this.da = new Ha;
        this.Ha = !1
    };
    k = yd.prototype;
    k.toString = function() {
        return this.functionName
    };
    k.getName = function() {
        return this.functionName
    };
    k.getKeys = function() {
        return new wd(this.ya())
    };
    k.invoke = function(a) {
        return this.Kd.call.apply(this.Kd, [new zd(this, a)].concat(za(Da.apply(1, arguments))))
    };
    k.apply = function(a, b) {
        return this.Kd.apply(new zd(this, a), b)
    };
    k.Ob = function(a) {
        var b = Da.apply(1, arguments);
        try {
            return this.invoke.apply(this, [a].concat(za(b)))
        } catch (c) {}
    };
    k.get = function(a) {
        return this.da.get(a)
    };
    k.set = function(a, b) {
        this.Ha || this.da.set(a, b)
    };
    k.has = function(a) {
        return this.da.has(a)
    };
    k.remove = function(a) {
        this.Ha || this.da.remove(a)
    };
    k.ya = function() {
        return this.da.ya()
    };
    k.wc = function() {
        return this.da.wc()
    };
    k.hc = function() {
        return this.da.hc()
    };
    k.Va = function() {
        this.Ha = !0
    };
    k.Bb = function() {
        return this.Ha
    };
    var Ad = function(a, b) {
        yd.call(this, a, b)
    };
    wa(Ad, yd);
    var Bd = function(a, b) {
        yd.call(this, a, b)
    };
    wa(Bd, yd);
    var zd = function(a, b) {
        this.Kd = a;
        this.K = b
    };
    zd.prototype.evaluate = function(a) {
        var b = this.K;
        return Array.isArray(a) ? $a(b, a) : a
    };
    zd.prototype.getName = function() {
        return this.Kd.getName()
    };
    zd.prototype.Ld = function() {
        return this.K.Ld()
    };
    var Cd = function() {
        this.map = new Map
    };
    Cd.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    Cd.prototype.get = function(a) {
        return this.map.get(a)
    };
    var Dd = function() {
        this.keys = [];
        this.values = []
    };
    Dd.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    Dd.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b]
    };

    function Ed() {
        try {
            return Map ? new Cd : new Dd
        } catch (a) {
            return new Dd
        }
    };
    var Fd = function(a) {
        if (a instanceof Fd) return a;
        if (ud(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    Fd.prototype.getValue = function() {
        return this.value
    };
    Fd.prototype.toString = function() {
        return String(this.value)
    };
    var Hd = function(a) {
        this.promise = a;
        this.Ha = !1;
        this.da = new Ha;
        this.da.set("then", Gd(this));
        this.da.set("catch", Gd(this, !0));
        this.da.set("finally", Gd(this, !1, !0))
    };
    k = Hd.prototype;
    k.get = function(a) {
        return this.da.get(a)
    };
    k.set = function(a, b) {
        this.Ha || this.da.set(a, b)
    };
    k.has = function(a) {
        return this.da.has(a)
    };
    k.remove = function(a) {
        this.Ha || this.da.remove(a)
    };
    k.ya = function() {
        return this.da.ya()
    };
    k.wc = function() {
        return this.da.wc()
    };
    k.hc = function() {
        return this.da.hc()
    };
    var Gd = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new Ad("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof Ad || (d = void 0);
            e instanceof Ad || (e = void 0);
            var f = this.K.ob(),
                g = function(l) {
                    return function(n) {
                        try {
                            return c ? (l.invoke(f), a.promise) : l.invoke(f, n)
                        } catch (p) {
                            return Promise.reject(p instanceof Error ? new Fd(p) : String(p))
                        }
                    }
                },
                h = a.promise.then(d && g(d), e && g(e));
            return new Hd(h)
        })
    };
    Hd.prototype.Va = function() {
        this.Ha = !0
    };
    Hd.prototype.Bb = function() {
        return this.Ha
    };

    function B(a, b, c) {
        var d = Ed(),
            e = function(g, h) {
                for (var l = g.ya(), n = 0; n < l.length; n++) h[l[n]] = f(g.get(l[n]))
            },
            f = function(g) {
                if (g === null || g === void 0) return g;
                var h = d.get(g);
                if (h) return h;
                if (g instanceof wd) {
                    var l = [];
                    d.set(g, l);
                    for (var n = g.ya(), p = 0; p < n.length; p++) l[n[p]] = f(g.get(n[p]));
                    return l
                }
                if (g instanceof Hd) return g.promise.then(function(t) {
                    return B(t, b, 1)
                }, function(t) {
                    return Promise.reject(B(t, b, 1))
                });
                if (g instanceof bb) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                if (g instanceof Ad) {
                    var r = function() {
                        for (var t = [], v = 0; v < arguments.length; v++) t[v] = Id(arguments[v], b, c);
                        var x = new Ka(b ? b.Ld() : new Ja);
                        b && x.Ud(b.qb());
                        return f(Wa(18) ? g.apply(x, t) : g.invoke.apply(g, [x].concat(za(t))))
                    };
                    d.set(g, r);
                    e(g, r);
                    return r
                }
                var u = !1;
                switch (c) {
                    case 1:
                        u = !0;
                        break;
                    case 2:
                        u = !1;
                        break;
                    case 3:
                        u = !1;
                        break;
                    default:
                }
                if (g instanceof Fd && u) return g.getValue();
                switch (typeof g) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return g;
                    case "object":
                        if (g === null) return null
                }
            };
        return f(a)
    }

    function Id(a, b, c) {
        var d = Ed(),
            e = function(g, h) {
                for (var l in g) g.hasOwnProperty(l) && h.set(l, f(g[l]))
            },
            f = function(g) {
                var h = d.get(g);
                if (h) return h;
                if (Array.isArray(g) || Ab(g)) {
                    var l = new wd;
                    d.set(g, l);
                    for (var n in g) g.hasOwnProperty(n) && l.set(n, f(g[n]));
                    return l
                }
                if (sd(g)) {
                    var p = new bb;
                    d.set(g, p);
                    e(g, p);
                    return p
                }
                if (typeof g === "function") {
                    var q = new Ad("", function() {
                        for (var t = Da.apply(0, arguments), v = [], x = 0; x < t.length; x++) v[x] = B(this.evaluate(t[x]), b, c);
                        return f(this.K.kj()(g, g, v))
                    });
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                var r = typeof g;
                if (g === null || r === "string" || r === "number" || r === "boolean") return g;
                var u = !1;
                switch (c) {
                    case 1:
                        u = !0;
                        break;
                    case 2:
                        u = !1;
                        break;
                    default:
                }
                if (g !== void 0 && u) return new Fd(g)
            };
        return f(a)
    };
    var Jd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof wd)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new wd(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new wd(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new wd(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this,
                za(Da.apply(1, arguments)))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Ua(Error("TypeError: Reduce on List with no elements."));
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    } if (g === d) throw Ua(Error("TypeError: Reduce on List with no elements."));
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Ua(Error("TypeError: ReduceRight on List with no elements."));
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    } if (g > d) throw Ua(Error("TypeError: ReduceRight on List with no elements."));
            }
            for (var h = f; h >= 0; h--) this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = xd(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c ===
                void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new wd(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = xd(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this,
                [b, c].concat(za(Da.apply(3, arguments))))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, za(Da.apply(1, arguments)))
        }
    };
    var Kd = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        Ld = new Ga("break"),
        Md = new Ga("continue");

    function Nd(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }

    function Od(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function Pd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!(f instanceof wd)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (d === null || d === void 0) throw Ua(Error("TypeError: Can't read property " + e + " of " + d + "."));
        var g = typeof d === "number";
        if (typeof d === "boolean" || g) {
            if (e === "toString") {
                if (g && f.length()) {
                    var h = B(f.get(0));
                    try {
                        return d.toString(h)
                    } catch (x) {}
                }
                return d.toString()
            }
            if (Wa(22) && e === "toLocaleString" && g) {
                var l = B(f.get(0)),
                    n = B(f.get(1));
                return d.toLocaleString(l,
                    n)
            }
            throw Ua(Error("TypeError: " + d + "." + e + " is not a function."));
        }
        if (typeof d === "string") {
            if (Kd.hasOwnProperty(e)) {
                var p = B(f, void 0, 1);
                return Id(d[e].apply(d, p), this.K)
            }
            throw Ua(Error("TypeError: " + e + " is not a function"));
        }
        if (d instanceof wd) {
            if (d.has(e)) {
                var q = d.get(String(e));
                if (q instanceof Ad) {
                    var r = xd(f);
                    return Wa(18) ? q.apply(this.K, r) : q.invoke.apply(q, [this.K].concat(za(r)))
                }
                throw Ua(Error("TypeError: " + e + " is not a function"));
            }
            if (Jd.supportedMethods.indexOf(e) >= 0) {
                var u = xd(f);
                return Jd[e].call.apply(Jd[e],
                    [d, this.K].concat(za(u)))
            }
        }
        if (d instanceof Ad || d instanceof bb || d instanceof Hd) {
            if (d.has(e)) {
                var t = d.get(e);
                if (t instanceof Ad) {
                    var v = xd(f);
                    return Wa(18) ? t.apply(this.K, v) : t.invoke.apply(t, [this.K].concat(za(v)))
                }
                throw Ua(Error("TypeError: " + e + " is not a function"));
            }
            if (e === "toString") return d instanceof Ad ? d.getName() : d.toString();
            if (e === "hasOwnProperty") return d.has(f.get(0))
        }
        if (d instanceof Fd && e === "toString") return d.toString();
        throw Ua(Error("TypeError: Object has no '" + e + "' property."));
    }

    function Qd(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.K;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }

    function Rd() {
        var a = Da.apply(0, arguments),
            b = this.K.ob(),
            c = Ya(b, a);
        if (c instanceof Ga) return c
    }

    function Sd() {
        return Ld
    }

    function Td(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof Ga) return d
        }
    }

    function Ud() {
        for (var a = this.K, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                a.Fh(c, d)
            }
        }
    }

    function Vd() {
        return Md
    }

    function Wd(a, b) {
        return new Ga(a, this.evaluate(b))
    }

    function Xd(a, b) {
        var c = Da.apply(2, arguments),
            d;
        d = new wd;
        for (var e = this.evaluate(b), f = 0; f < e.length; f++) d.push(e[f]);
        var g = [51, a, d].concat(za(c));
        this.K.add(a, this.evaluate(g))
    }

    function Yd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }

    function Zd(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b),
            e = c instanceof Fd,
            f = d instanceof Fd;
        return e || f ? e && f ? c.getValue() === d.getValue() : !1 : c == d
    }

    function $d() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a
    }

    function ae(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Ya(f, d);
            if (g instanceof Ga) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
        }
    }

    function be(a, b, c) {
        if (typeof b === "string") return ae(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof bb || b instanceof Hd || b instanceof wd || b instanceof Ad) {
            var d = b.ya(),
                e = d.length;
            return ae(a, function() {
                return e
            }, function(f) {
                return d[f]
            }, c)
        }
    }

    function ce(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.K;
        return be(function(h) {
            g.set(d, h);
            return g
        }, e, f)
    }

    function de(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.K;
        return be(function(h) {
            var l = g.ob();
            l.Fh(d, h);
            return l
        }, e, f)
    }

    function ee(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.K;
        return be(function(h) {
            var l = g.ob();
            l.add(d, h);
            return l
        }, e, f)
    }

    function fe(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.K;
        return ge(function(h) {
            g.set(d, h);
            return g
        }, e, f)
    }

    function he(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.K;
        return ge(function(h) {
            var l = g.ob();
            l.Fh(d, h);
            return l
        }, e, f)
    }

    function ie(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.K;
        return ge(function(h) {
            var l = g.ob();
            l.add(d, h);
            return l
        }, e, f)
    }

    function ge(a, b, c) {
        if (typeof b === "string") return ae(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof wd) return ae(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw Ua(Error("The value is not iterable."));
    }

    function je(a, b, c, d) {
        function e(q, r) {
            for (var u = 0; u < f.length(); u++) {
                var t = f.get(u);
                r.add(t, q.get(t))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof wd)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.K,
            h = this.evaluate(d),
            l = g.ob();
        for (e(g, l); $a(l, b);) {
            var n = Ya(l, h);
            if (n instanceof Ga) {
                if (n.type === "break") break;
                if (n.type === "return") return n
            }
            var p = g.ob();
            e(l, p);
            $a(p, c);
            l = p
        }
    }

    function me(a, b) {
        var c = Da.apply(2, arguments),
            d = this.K,
            e = this.evaluate(b);
        if (!(e instanceof wd)) throw Error("Error: non-List value given for Fn argument names.");
        return new Ad(a, function() {
            return function() {
                var f = Da.apply(0, arguments),
                    g = d.ob();
                g.qb() === void 0 && g.Ud(this.K.qb());
                for (var h = [], l = 0; l < f.length; l++) {
                    var n = this.evaluate(f[l]);
                    h[l] = n
                }
                for (var p = e.get("length"), q = 0; q < p; q++) q < h.length ? g.add(e.get(q), h[q]) : g.add(e.get(q), void 0);
                g.add("arguments", new wd(h));
                var r = Ya(g, c);
                if (r instanceof Ga) return r.type ===
                    "return" ? r.data : r
            }
        }())
    }

    function ne(a) {
        var b = this.evaluate(a),
            c = this.K;
        if (oe && !c.has(b)) throw new ReferenceError(b + " is not defined.");
        return c.get(b)
    }

    function pe(a, b) {
        var c, d = this.evaluate(a),
            e = this.evaluate(b);
        if (d === void 0 || d === null) throw Ua(Error("TypeError: Cannot read properties of " + d + " (reading '" + e + "')"));
        if (d instanceof bb || d instanceof Hd || d instanceof wd || d instanceof Ad) c = d.get(e);
        else if (typeof d === "string") e === "length" ? c = d.length : vd(e) && (c = d[e]);
        else if (d instanceof Fd) return;
        return c
    }

    function qe(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }

    function re(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }

    function se(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        c instanceof Fd && (c = c.getValue());
        d instanceof Fd && (d = d.getValue());
        return c === d
    }

    function te(a, b) {
        return !se.call(this, a, b)
    }

    function ue(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Ya(this.K, d);
        if (e instanceof Ga) return e
    }
    var oe = !1;

    function ve(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }

    function we(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }

    function xe() {
        for (var a = new wd, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }

    function ye() {
        for (var a = new bb, b = 0; b < arguments.length - 1; b += 2) {
            var c = String(this.evaluate(arguments[b])),
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }

    function ze(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }

    function Ae(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }

    function Be(a) {
        return -this.evaluate(a)
    }

    function Ce(a) {
        return !this.evaluate(a)
    }

    function De(a, b) {
        return !Zd.call(this, a, b)
    }

    function Ee() {
        return null
    }

    function Fe(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function Ge(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }

    function He(a) {
        return this.evaluate(a)
    }

    function Ie() {
        return Da.apply(0, arguments)
    }

    function Je(a) {
        return new Ga("return", this.evaluate(a))
    }

    function Ke(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (d === null || d === void 0) throw Ua(Error("TypeError: Can't set property " + e + " of " + d + "."));
        (d instanceof Ad || d instanceof wd || d instanceof bb) && d.set(String(e), f);
        return f
    }

    function Le(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }

    function Me(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!Array.isArray(e) || !Array.isArray(f)) throw Error("Error: Malformed switch instruction.");
        for (var g, h = !1, l = 0; l < e.length; l++)
            if (h || d === this.evaluate(e[l]))
                if (g = this.evaluate(f[l]), g instanceof Ga) {
                    var n = g.type;
                    if (n === "break") return;
                    if (n === "return" || n === "continue") return g
                } else h = !0;
        if (f.length === e.length + 1 && (g = this.evaluate(f[f.length - 1]), g instanceof Ga && (g.type === "return" || g.type === "continue"))) return g
    }

    function Ne(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }

    function Oe(a) {
        var b = this.evaluate(a);
        return b instanceof Ad ? "function" : typeof b
    }

    function Pe() {
        for (var a = this.K, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }

    function Qe(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Ya(this.K, e);
            if (f instanceof Ga) {
                if (f.type === "break") return;
                if (f.type === "return") return f
            }
        }
        for (; this.evaluate(a);) {
            var g = Ya(this.K, e);
            if (g instanceof Ga) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
            this.evaluate(b)
        }
    }

    function Se(a) {
        return ~Number(this.evaluate(a))
    }

    function Te(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }

    function Ue(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }

    function Ve(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }

    function We(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }

    function Xe(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }

    function Ye(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }

    function Ze() {}

    function $e(a, b, c) {
        try {
            var d = this.evaluate(b);
            if (d instanceof Ga) return d
        } catch (h) {
            if (!(h instanceof Ta && h.Zm)) throw h;
            var e = this.K.ob();
            a !== "" && (h instanceof Ta && (h = h.un), e.add(a, new Fd(h)));
            var f = this.evaluate(c),
                g = Ya(e, f);
            if (g instanceof Ga) return g
        }
    }

    function af(a, b) {
        var c, d;
        try {
            d = this.evaluate(a)
        } catch (f) {
            if (!(f instanceof Ta && f.Zm)) throw f;
            c = f
        }
        var e = this.evaluate(b);
        if (e instanceof Ga) return e;
        if (c) throw c;
        if (d instanceof Ga) return d
    };
    var cf = function() {
        this.C = new ab;
        bf(this)
    };
    cf.prototype.execute = function(a) {
        return this.C.Kj(a)
    };
    var bf = function(a) {
        var b = function(c, d) {
            var e = new Bd(String(c), d);
            e.Va();
            var f = String(c);
            a.C.C.set(f, e);
            Xa.set(f, e)
        };
        b("map", ye);
        b("and", jd);
        b("contains", md);
        b("equals", kd);
        b("or", ld);
        b("startsWith", nd);
        b("variable", od)
    };
    cf.prototype.Qb = function(a) {
        this.C.Qb(a)
    };
    var ef = function() {
        this.H = !1;
        this.C = new ab;
        df(this);
        this.H = !0
    };
    ef.prototype.execute = function(a) {
        return ff(this.C.Kj(a))
    };
    var gf = function(a, b, c) {
        return ff(a.C.Ip(b, c))
    };
    ef.prototype.Va = function() {
        this.C.Va()
    };
    var df = function(a) {
        var b = function(c, d) {
            var e = String(c),
                f = new Bd(e, d);
            f.Va();
            a.C.C.set(e, f);
            Xa.set(e, f)
        };
        b(0, Nd);
        b(1, Od);
        b(2, Pd);
        b(3, Qd);
        b(56, We);
        b(57, Te);
        b(58, Se);
        b(59, Ye);
        b(60, Ue);
        b(61, Ve);
        b(62, Xe);
        b(53, Rd);
        b(4, Sd);
        b(5, Td);
        b(68, $e);
        b(52, Ud);
        b(6, Vd);
        b(49, Wd);
        b(7, xe);
        b(8, ye);
        b(9, Td);
        b(50, Xd);
        b(10, Yd);
        b(12, Zd);
        b(13, $d);
        b(67, af);
        b(51, me);
        b(47, ce);
        b(54, de);
        b(55, ee);
        b(63, je);
        b(64, fe);
        b(65, he);
        b(66, ie);
        b(15, ne);
        b(16, pe);
        b(17, pe);
        b(18, qe);
        b(19, re);
        b(20, se);
        b(21, te);
        b(22, ue);
        b(23, ve);
        b(24, we);
        b(25, ze);
        b(26,
            Ae);
        b(27, Be);
        b(28, Ce);
        b(29, De);
        b(45, Ee);
        b(30, Fe);
        b(32, Ge);
        b(33, Ge);
        b(34, He);
        b(35, He);
        b(46, Ie);
        b(36, Je);
        b(43, Ke);
        b(37, Le);
        b(38, Me);
        b(39, Ne);
        b(40, Oe);
        b(44, Ze);
        b(41, Pe);
        b(42, Qe)
    };
    ef.prototype.Ld = function() {
        return this.C.Ld()
    };
    ef.prototype.Qb = function(a) {
        this.C.Qb(a)
    };
    ef.prototype.Zc = function(a) {
        this.C.Zc(a)
    };

    function ff(a) {
        if (a instanceof Ga || a instanceof Ad || a instanceof wd || a instanceof bb || a instanceof Hd || a instanceof Fd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
    };
    var hf = function(a) {
        this.message = a
    };

    function jf(a) {
        a.Ct = !0;
        return a
    };
    var kf = jf(function(a) {
        return typeof a === "string"
    });

    function lf(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return b === void 0 ? new hf("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function mf(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var nf = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function of(a, b) {
        for (var c = "", d = !0; a > 7;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + lf(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + lf(a | b) + c
    }

    function pf(a, b) {
        var c;
        var d = a.Th,
            e = a.yj;
        d === void 0 ? c = "" : (e || (e = 0), c = "" + of(1, 1) + lf(d << 2 | e));
        var f = a.qq,
            g = "4" + c + (f ? "" + of(2, 1) + lf(f) : ""),
            h, l = a.Gn;
        h = l && nf.test(l) ? "" + of(3, 2) + l : "";
        var n, p = a.Bn;
        n = p ? "" + of(4, 1) + lf(p) : "";
        var q;
        var r = a.ctid;
        if (r && b) {
            var u = of(5, 3),
                t = r.split("-"),
                v = t[0].toUpperCase();
            if (v !== "GTM" && v !== "OPT") q = "";
            else {
                var x = t[1];
                q = "" + u + lf(1 + x.length) + (a.zr || 0) + x
            }
        } else q = "";
        var y = a.ks,
            A = a.canonicalId,
            C = a.Ra,
            D = a.Gt,
            H = g + h + n + q + (y ? "" + of(6, 1) + lf(y) : "") + (A ? "" + of(7, 3) + lf(A.length) + A : "") + (C ? "" + of(8, 3) +
                lf(C.length) + C : "") + (D ? "" + of(9, 3) + lf(D.length) + D : ""),
            J;
        var O = a.xq;
        O = O === void 0 ? {} : O;
        for (var aa = [], W = m(Object.keys(O)), N = W.next(); !N.done; N = W.next()) {
            var S = N.value;
            aa[Number(S)] = O[S]
        }
        if (aa.length) {
            var la = of(10, 3),
                ja;
            if (aa.length === 0) ja = lf(0);
            else {
                for (var V = [], U = 0, ha = !1, ta = 0; ta < aa.length; ta++) {
                    ha = !0;
                    var pa = ta % 6;
                    aa[ta] && (U |= 1 << pa);
                    pa === 5 && (V.push(lf(U)), U = 0, ha = !1)
                }
                ha && V.push(lf(U));
                ja = V.join("")
            }
            var Ma = ja;
            J = "" + la + lf(Ma.length) + Ma
        } else J = "";
        var Sa = a.Gr,
            mb = a.Ur,
            cb = a.ls;
        return H + J + (Sa ? "" + of(11, 3) + lf(Sa.length) +
            Sa : "") + (mb ? "" + of(13, 3) + lf(mb.length) + mb : "") + (cb ? "" + of(14, 1) + lf(cb) : "")
    };

    function qf(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function rf(a, b) {
        for (var c = ib(b), d = new Uint8Array(c.length), e = 0; e < c.length; e++) d[e] = c.charCodeAt(e);
        if (d.length !== 32) throw Error("Key is not 32 bytes.");
        return sf(a, d)
    }

    function sf(a, b) {
        if (a === "") return "";
        var c = Tb(a),
            d = b.slice(-2),
            e = [].concat(za(d), za(c)).map(function(g, h) {
                return g ^ b[h % b.length]
            }),
            f = new Uint8Array([].concat(za(e), za(d)));
        return hb(String.fromCharCode.apply(String, za(f))).replace(/\.+$/, "")
    };
    var tf = function() {
        function a(b) {
            return {
                toString: function() {
                    return b
                }
            }
        }
        return {
            Zn: a("consent"),
            lk: a("convert_case_to"),
            mk: a("convert_false_to"),
            nk: a("convert_null_to"),
            pk: a("convert_true_to"),
            qk: a("convert_undefined_to"),
            Es: a("debug_mode_metadata"),
            Ta: a("function"),
            th: a("instance_name"),
            Mp: a("live_only"),
            Np: a("malware_disabled"),
            METADATA: a("metadata"),
            Qp: a("original_activity_id"),
            bt: a("original_vendor_template_id"),
            Zs: a("once_on_load"),
            Pp: a("once_per_event"),
            sm: a("once_per_load"),
            et: a("priority_override"),
            it: a("respected_consent_types"),
            Bm: a("setup_tags"),
            Eh: a("tag_id"),
            Nm: a("teardown_tags")
        }
    }();
    var vf = function(a) {
            return uf[a]
        },
        xf = function(a) {
            return wf[a]
        },
        zf = function(a) {
            return yf[a]
        },
        Af = [],
        yf = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Bf = /[\x00\x22\x26\x27\x3c\x3e]/g;
    Af[3] = function(a) {
        return String(a).replace(Bf, zf)
    };
    var Ff = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        wf = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        };
    Af[7] = function(a) {
        return String(a).replace(Ff, xf)
    };
    Af[8] = function(a) {
        if (a == null) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Ff, xf) + "'"
        }
    };
    var Nf = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        uf = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        };
    Af[16] = function(a) {
        return a
    };
    var Pf;
    var Qf = [],
        Rf = [],
        Sf = [],
        Tf = [],
        Uf = [],
        Vf, Wf, Xf;

    function Yf(a) {
        Xf = Xf || a
    }

    function Zf() {
        for (var a = data.resource || {}, b = a.macros || [], c = 0; c < b.length; c++) Qf.push(b[c]);
        for (var d = a.tags || [], e = 0; e < d.length; e++) Tf.push(d[e]);
        for (var f = a.predicates || [], g = 0; g < f.length; g++) Sf.push(f[g]);
        for (var h = a.rules || [], l = 0; l < h.length; l++) {
            for (var n = h[l], p = {}, q = 0; q < n.length; q++) {
                var r = n[q][0];
                p[r] = Array.prototype.slice.call(n[q], 1);
                r !== "if" && r !== "unless" || $f(p[r])
            }
            Rf.push(p)
        }
    }

    function $f(a) {}
    var ag, bg = [],
        cg = [];

    function dg(a, b) {
        var c = {};
        c[tf.Ta] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }

    function eg(a, b, c) {
        try {
            return Wf(fg(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }
    var fg = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = gg(a[e], b, c));
            return d
        },
        gg = function(a, b, c) {
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(gg(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Qf[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var h = String(g[tf.th]);
                        try {
                            var l = fg(g, b, c);
                            l.vtp_gtmEventId = b.id;
                            b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                            d = hg(l, {
                                event: b,
                                index: f,
                                type: 2,
                                name: h
                            });
                            ag && (d = ag.yq(d, l))
                        } catch (A) {
                            b.logMacroError && b.logMacroError(A, Number(f), h), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[gg(a[n], b, c)] = gg(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = gg(a[q], b, c);
                            Xf && (p = p || Xf.vr(r));
                            d.push(r)
                        }
                        return Xf && p ? Xf.Dq(d) : d.join("");
                    case "escape":
                        d = gg(a[1], b, c);
                        if (Xf && Array.isArray(a[1]) && a[1][0] === "macro" && Xf.wr(a)) return Xf.Mr(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Af[a[u]] && (d = Af[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!Tf[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return {
                            gn: a[2], index: t
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[tf.Ta] = a[1];
                        var x = eg(v, b, c),
                            y = !!a[4];
                        return y || x !== 2 ? y !== (x === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        hg = function(a, b) {
            var c = a[tf.Ta],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Vf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
                e && bg.indexOf(c) !== -1,
                g = {},
                h = {},
                l;
            for (l in a) a.hasOwnProperty(l) && Lb(l, "vtp_") && (e && (g[l] = a[l]), !e || f) && (h[l.substring(4)] = a[l]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (b.name == null) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (q == null) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = Qf[q];
                                    break;
                                case 1:
                                    r = Tf[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var u = r && r[tf.th];
                            n = u ? String(u) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var t, v, x;
            if (f && cg.indexOf(c) === -1) {
                cg.push(c);
                var y = Gb();
                t = e(g);
                var A = Gb() - y,
                    C = Gb();
                v = Pf(c, h, b);
                x = A - (Gb() - C)
            } else if (e && (t = e(g)), !e || f) v = Pf(c, h, b);
            if (f && d) {
                d.reportMacroDiscrepancy(d.id, c, void 0, !0);
                if (ud(t)) {
                    var D = !1;
                    if (Array.isArray(t)) D = !Array.isArray(v);
                    else if (sd(t))
                        if (sd(v)) {
                            if (c === "__gas") a: {
                                for (var H = t, J = v, O = m(Object.keys(H)), aa = O.next(); !aa.done; aa = O.next()) {
                                    var W = aa.value;
                                    if (W === "vtp_fieldsToSet" || W === "vtp_contentGroup" || W === "vtp_dimension" || W === "vtp_metric") {
                                        var N = H[W],
                                            S = J[W.substring(4)];
                                        if (ig(W, N, J[W]) && ig(W, N, S)) continue;
                                        else {
                                            D = !0;
                                            break a
                                        }
                                    }
                                    if (W !== "vtp_gtmCachedValues" && W !== "vtp_gtmEntityIndex" && W !== "vtp_gtmEntityName" && W !== "function" && W !== "instance_name") {
                                        var la = H[W];
                                        if (!jg(J[W], la) || !jg(J[W.substring(4)], la)) {
                                            D = !0;
                                            break a
                                        }
                                    }
                                }
                                D = !1
                            }
                        } else D = !0;
                    else D = typeof t === "function" ? typeof v !== "function" : t !== v;
                    D && d.reportMacroDiscrepancy(d.id, c)
                } else t !== v && d.reportMacroDiscrepancy(d.id, c);
                x !== void 0 && d.reportMacroDiscrepancy(d.id, c, x)
            }
            return e ? t : v
        };

    function ig(a, b, c) {
        if (b.length !== c.length) return !1;
        var d, e;
        a === "vtp_fieldsToSet" ? (d = "fieldName", e = "value") : (d = "index", e = a === "vtp_contentGroup" ? "group" : a === "vtp_dimension" ? "dimension" : "metric");
        for (var f = 0; f < b.length; f++)
            if (!jg(b[f][d], c[f][d]) || !jg(b[f][e], c[f][e])) return !1;
        return !0
    }

    function jg(a, b) {
        return typeof a === "number" ? typeof b !== "number" ? !1 : String(a).length === 13 ? Math.abs(a - b) < 1E3 : a === b : typeof a === "function" ? typeof b === "function" : Array.isArray(a) ? Array.isArray(b) && a.length === b.length ? !0 : !1 : sd(a) ? sd(b) : a === b
    };

    function kg(a) {
        var b;
        b = b === void 0 ? !1 : b;
        var c, d;
        return ((c = data) == null ? 0 : (d = c.blob) == null ? 0 : d.hasOwnProperty(a)) ? !!data.blob[a] : b
    }

    function E(a) {
        var b;
        b = b === void 0 ? "" : b;
        var c, d;
        return ((c = data) == null ? 0 : (d = c.blob) == null ? 0 : d.hasOwnProperty(a)) ? String(data.blob[a]) : b
    }

    function lg(a) {
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(a)) ? Number(data.blob[a]) : 0
    }

    function mg(a) {
        var b;
        b = b === void 0 ? [] : b;
        var c, d, e = (c = data) == null ? void 0 : (d = c.blob) == null ? void 0 : d[a];
        return Array.isArray(e) ? e : b
    }

    function ng(a) {
        var b;
        b = b === void 0 ? "" : b;
        var c = og(46);
        return c && (c == null ? 0 : c.hasOwnProperty(a)) ? String(c[a]) : b
    }

    function pg(a, b) {
        var c = og(46);
        return c && (c == null ? 0 : c.hasOwnProperty(a)) ? Number(c[a]) : b
    }

    function og(a) {
        var b, c;
        return (b = data) == null ? void 0 : (c = b.blob) == null ? void 0 : c[a]
    };
    var qg = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    wa(qg, Error);
    qg.prototype.getMessage = function() {
        return this.message
    };

    function rg(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) rg(a[c], b[c])
        }
    };

    function sg() {
        return function(a, b) {
            var c;
            var d = tg;
            a instanceof Ta ? (a.C = d, c = a) : c = new Ta(a, d);
            var e = c;
            b && e.debugInfo.push(b);
            throw e;
        }
    }

    function tg(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--) tb(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };

    function ug(a) {
        function b(r) {
            for (var u = 0; u < r.length; u++) d[r[u]] = !0
        }
        for (var c = [], d = [], e = vg(a), f = 0; f < Rf.length; f++) {
            var g = Rf[f],
                h = wg(g, e);
            if (h) {
                for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                b(g.block || [])
            } else h === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < Tf.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }

    function wg(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0) return !1;
            if (e === 2) return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (h === 2) return null;
            if (h === 1) return !1
        }
        return !0
    }

    function vg(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = eg(Sf[c], a));
            return b[c]
        }
    };

    function xg(a, b) {
        b[tf.lk] && typeof a === "string" && (a = b[tf.lk] === 1 ? a.toLowerCase() : a.toUpperCase());
        b.hasOwnProperty(tf.nk) && a === null && (a = b[tf.nk]);
        b.hasOwnProperty(tf.qk) && a === void 0 && (a = b[tf.qk]);
        b.hasOwnProperty(tf.pk) && a === !0 && (a = b[tf.pk]);
        b.hasOwnProperty(tf.mk) && a === !1 && (a = b[tf.mk]);
        return a
    };
    var yg = function() {
            this.C = {}
        },
        Ag = function(a, b) {
            var c = zg.C,
                d;
            (d = c.C)[a] != null || (d[a] = []);
            c.C[a].push(function() {
                return b.apply(null, za(Da.apply(0, arguments)))
            })
        };

    function Bg(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (h) {
                    g = typeof h === "string" ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new qg(c, d, g);
            }
    }

    function Cg(a, b, c) {
        return function(d) {
            if (d) {
                var e = a.C[d],
                    f = a.C.all;
                if (e || f) {
                    var g = c.apply(void 0, [d].concat(za(Da.apply(1, arguments))));
                    Bg(e, b, d, g);
                    Bg(f, b, d, g)
                }
            }
        }
    };
    var Fg = function(a, b) {
            var c = this;
            this.H = {};
            this.C = new yg;
            var d = {},
                e = {},
                f = Cg(this.C, a, function(g) {
                    return g && d[g] ? d[g].apply(void 0, [g].concat(za(Da.apply(1, arguments)))) : {}
                });
            zb(b, function(g, h) {
                function l(p) {
                    var q = Da.apply(1, arguments);
                    if (!n[p]) throw Dg(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(za(q)))
                }
                var n = {};
                zb(h, function(p, q) {
                    var r = Eg(p, q);
                    n[p] = r.assert;
                    d[p] || (d[p] = r.U);
                    r.Xm && !e[p] && (e[p] = r.Xm)
                });
                c.H[g] = function(p, q) {
                    var r = n[p];
                    if (!r) throw Dg(p, {}, "The requested permission " + p + " is not configured.");
                    var u = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, u);
                    f.apply(void 0, u);
                    var t = e[p];
                    t && t.apply(null, [l].concat(za(u.slice(1))))
                }
            })
        },
        Hg = function(a) {
            return zg.H[a] || function() {}
        };

    function Eg(a, b) {
        var c = dg(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Dg;
        try {
            return hg(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new qg(e, {}, "Permission " + e + " is unknown.");
                },
                U: function() {
                    throw new qg(a, {}, "Permission " + a + " is unknown.");
                }
            }
        }
    }

    function Dg(a, b, c) {
        return new qg(a, b, c)
    };
    var Ig = E(5),
        Jg = E(20),
        Kg = E(1),
        Lg = !1;
    var Mg = {};
    Mg.Nn = kg(29);
    Mg.Jq = kg(28);
    var F = {
        M: {
            jo: 1,
            mo: 2,
            Om: 3,
            wm: 4,
            xk: 5,
            yk: 6,
            Dp: 7,
            no: 8,
            Cp: 9,
            io: 10,
            ho: 11,
            Gm: 12,
            Cm: 13,
            fk: 14,
            Sn: 15,
            Un: 16,
            qm: 17,
            zk: 18,
            km: 19,
            ko: 20,
            Op: 21,
            Xn: 22,
            Tn: 23,
            Vn: 24,
            vk: 25,
            dk: 26,
            Xp: 27,
            Ql: 28,
            Yl: 29,
            Xl: 30,
            Wl: 31,
            Tl: 32,
            Rl: 33,
            Sl: 34,
            Pl: 35,
            Ol: 36,
            zp: 37,
            Ap: 38,
            yp: 39
        }
    };
    F.M[F.M.jo] = "CREATE_EVENT_SOURCE";
    F.M[F.M.mo] = "EDIT_EVENT";
    F.M[F.M.Om] = "TRAFFIC_TYPE";
    F.M[F.M.wm] = "REFERRAL_EXCLUSION";
    F.M[F.M.xk] = "ECOMMERCE_FROM_GTM_TAG";
    F.M[F.M.yk] = "ECOMMERCE_FROM_GTM_UA_SCHEMA";
    F.M[F.M.Dp] = "GA_SEND";
    F.M[F.M.no] = "EM_FORM";
    F.M[F.M.Cp] = "GA_GAM_LINK";
    F.M[F.M.io] = "CREATE_EVENT_AUTO_PAGE_PATH";
    F.M[F.M.ho] = "CREATED_EVENT";
    F.M[F.M.Gm] = "SIDELOADED";
    F.M[F.M.Cm] = "SGTM_LEGACY_CONFIGURATION";
    F.M[F.M.fk] = "CCD_EM_EVENT";
    F.M[F.M.Sn] = "AUTO_REDACT_EMAIL";
    F.M[F.M.Un] = "AUTO_REDACT_QUERY_PARAM";
    F.M[F.M.qm] = "MULTIPLE_PAGEVIEW_FROM_CONFIG";
    F.M[F.M.zk] = "EM_EVENT_SENT_BEFORE_CONFIG";
    F.M[F.M.km] = "LOADED_VIA_CST_OR_SIDELOADING";
    F.M[F.M.ko] = "DECODED_PARAM_MATCH";
    F.M[F.M.Op] = "NON_DECODED_PARAM_MATCH";
    F.M[F.M.Xn] = "CCD_EVENT_SGTM";
    F.M[F.M.Tn] = "AUTO_REDACT_EMAIL_SGTM";
    F.M[F.M.Vn] = "AUTO_REDACT_QUERY_PARAM_SGTM";
    F.M[F.M.vk] = "DAILY_LIMIT_REACHED";
    F.M[F.M.dk] = "BURST_LIMIT_REACHED";
    F.M[F.M.Xp] = "SHARED_USER_ID_SET_AFTER_REQUEST";
    F.M[F.M.Ql] = "GA4_MULTIPLE_SESSION_COOKIES";
    F.M[F.M.Yl] = "INVALID_GA4_SESSION_COUNT";
    F.M[F.M.Xl] = "INVALID_GA4_LAST_EVENT_TIMESTAMP";
    F.M[F.M.Wl] = "INVALID_GA4_JOIN_TIMER";
    F.M[F.M.Tl] = "GA4_STALE_SESSION_COOKIE_SELECTED";
    F.M[F.M.Rl] = "GA4_SESSION_COOKIE_GS1_READ";
    F.M[F.M.Sl] = "GA4_SESSION_COOKIE_GS2_READ";
    F.M[F.M.Pl] = "GA4_DL_PARAM_RECOVERY_AVAILABLE";
    F.M[F.M.Ol] = "GA4_DL_PARAM_RECOVERY_APPLIED";
    F.M[F.M.zp] = "GA4_GOOGLE_SIGNALS_ALLOWED";
    F.M[F.M.Ap] = "GA4_GOOGLE_SIGNALS_ENABLED";
    F.M[F.M.yp] = "GA4_FALLBACK_REQUEST";
    var Sg = {},
        Tg = (Sg.uaa = !0, Sg.uab = !0, Sg.uafvl = !0, Sg.uamb = !0, Sg.uam = !0, Sg.uap = !0, Sg.uapv = !0, Sg.uaw = !0, Sg);
    var ah = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!Zg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    h = g ? e.slice(0, e.length - 2) : e,
                    l;
                a: if (d.length === 0) l = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!$g.exec(n[p])) {
                                l = !1;
                                break a
                            } l = !0
                    }
                if (!l || h.length > d.length || !g && d.length !== e.length ? 0 : g ? Lb(d, h) && (d === h || d.charAt(h.length) === ".") : d === h) return !0
            }
            return !1
        },
        $g = /^[a-z$_][\w-$]*$/i,
        Zg = /^(?:[a-z_$][a-z-_$0-9]*\.)*[a-z_$][a-z-_$0-9]*(?:\.\*)?$/i;
    var bh = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function ch(a, b) {
        var c = String(a),
            d = String(b),
            e = c.length - d.length;
        return e >= 0 && c.indexOf(d, e) === e
    }

    function dh(a, b) {
        return String(a).split(",").indexOf(String(b)) >= 0
    }
    var eh = new yb;

    function fh(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + String(d),
                f = eh.get(e);
            f || (f = new RegExp(b, d), eh.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function gh(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }

    function hh(a, b) {
        return String(a) === String(b)
    }

    function ih(a, b) {
        return Number(a) >= Number(b)
    }

    function jh(a, b) {
        return Number(a) <= Number(b)
    }

    function kh(a, b) {
        return Number(a) > Number(b)
    }

    function lh(a, b) {
        return Number(a) < Number(b)
    }

    function mh(a, b) {
        return Lb(String(a), String(b))
    };
    var nh = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        oh = function(a, b) {
            var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
            nh(b, "/*") && (b = b.slice(0, -2));
            nh(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && d.length === 1) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (e === -1 || f === 0 && e !== 0) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var h = d[d.length - 1];
            return a.lastIndexOf(h) === a.length - h.length
        },
        ph = function(a) {
            return a.protocol ===
                "https:" && (!a.port || a.port === "443")
        },
        sh = function(a, b) {
            var c;
            if (!(c = !ph(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (e.length < 2) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!qh.exec(e[f])) {
                                d = !1;
                                break a
                            } d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var h;
                var l = a,
                    n = b[g];
                if (!rh.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var u = l.hostname,
                    t = q;
                if (Lb(t, "*.")) {
                    t = t.slice(2);
                    var v = u.toLowerCase().indexOf(t.toLowerCase());
                    r = v === -1 ? !1 : u.length === t.length ? !0 : u.length !==
                        t.length + v ? !1 : u[v - 1] === "."
                } else r = u.toLowerCase() === t.toLowerCase();
                if (r) {
                    var x = p.slice(p.indexOf("/"));
                    h = oh(l.pathname + l.search, x) ? !0 : !1
                } else h = !1;
                if (h) return !0
            }
            return !1
        },
        qh = /^[a-z0-9-]+$/i,
        rh = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
    var th = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        uh = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        };

    function vh(a, b) {
        for (var c = ["input:!*"], d = 0; d < c.length; d++) {
            var e = th.exec(c[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                h = e[3],
                l = b[d];
            if (l == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (h !== "*") {
                var n = typeof l;
                l instanceof Ad ? n = "Fn" : l instanceof wd ? n = "List" : l instanceof bb ? n = "PixieMap" : l instanceof Hd ? n = "PixiePromise" : l instanceof Fd && (n = "OpaqueValue");
                if (n !== h) throw Error("Error in " + a + ". Argument " + f + " has type " + ((uh[n] || n) + ", which does not match required type ") +
                    ((uh[h] || h) + "."));
            }
        }
    }

    function G(a, b, c) {
        for (var d = [], e = m(c), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            g instanceof Ad ? d.push("function") : g instanceof wd ? d.push("Array") : g instanceof bb ? d.push("Object") : g instanceof Hd ? d.push("Promise") : g instanceof Fd ? d.push("OpaqueValue") : d.push(typeof g)
        }
        return Error("Argument error in " + a + ". Expected argument types [" + (b.join(",") + "], but received [") + (d.join(",") + "]."))
    }

    function wh(a) {
        return a instanceof bb
    }

    function xh(a) {
        return wh(a) || a === null || yh(a)
    }

    function zh(a) {
        return a instanceof Ad
    }

    function Ah(a) {
        return zh(a) || a === null || yh(a)
    }

    function Bh(a) {
        return a instanceof wd
    }

    function Ch(a) {
        return a instanceof Fd
    }

    function Dh(a) {
        return typeof a === "string"
    }

    function Eh(a) {
        return Dh(a) || a === null || yh(a)
    }

    function Fh(a) {
        return typeof a === "boolean"
    }

    function Gh(a) {
        return Fh(a) || yh(a)
    }

    function Hh(a) {
        return Fh(a) || a === null || yh(a)
    }

    function Ih(a) {
        return typeof a === "number"
    }

    function yh(a) {
        return a === void 0
    };

    function Jh(a) {
        return "" + a
    }

    function Kh(a, b) {
        var c = [];
        return c
    };

    function Lh(a, b) {
        var c = new Ad(a, function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                throw Ua(g);
            }
        });
        c.Va();
        return c
    }

    function Mh(a, b) {
        var c = new bb,
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                rb(e) ? c.set(d, Lh(a + "_" + d, e)) : sd(e) ? c.set(d, Mh(a + "_" + d, e)) : (tb(e) || sb(e) || typeof e === "boolean") && c.set(d, e)
            } c.Va();
        return c
    };

    function Nh(a, b) {
        if (!Dh(a)) throw G(this.getName(), ["string"], arguments);
        if (!Eh(b)) throw G(this.getName(), ["string", "undefined"], arguments);
        var c = {},
            d = new bb;
        return d = Mh("AssertApiSubject",
            c)
    };

    function Oh(a, b) {
        if (!Eh(b)) throw G(this.getName(), ["string", "undefined"], arguments);
        if (a instanceof Hd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new bb;
        return d = Mh("AssertThatSubject", c)
    };

    function Ph(a) {
        return function() {
            for (var b = Da.apply(0, arguments), c = [], d = this.K, e = 0; e < b.length; ++e) c.push(B(b[e], d));
            return Id(a.apply(null, c))
        }
    }

    function Qh() {
        for (var a = Math, b = Rh, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Ph(a[e].bind(a)))
        }
        return c
    };

    function Sh(a) {
        return a != null && Lb(a, "__cvt_")
    };

    function Th(a) {
        var b;
        return b
    };

    function Uh(a) {
        var b;
        if (!Dh(a)) throw G(this.getName(), ["string"], arguments);
        try {
            b = decodeURIComponent(a)
        } catch (c) {}
        return b
    };

    function Vh(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };

    function Wh(a) {
        try {
            return encodeURIComponent(String(a))
        } catch (b) {}
    };

    function ai(a) {
        if (!Eh(a)) throw G(this.getName(), ["string|undefined"], arguments);
    };

    function bi(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; d >= 0; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = c !== 0 ? b ^ c >> 21 : b;
        return b
    };

    function ci(a) {
        var b = B(a);
        return bi(b ? "" + b : "")
    };

    function di(a, b) {
        if (!Ih(a) || !Ih(b)) throw G(this.getName(), ["number", "number"], arguments);
        return wb(a, b)
    };

    function ei() {
        return (new Date).getTime()
    };

    function fi(a) {
        if (a === null) return "null";
        if (a instanceof wd) return "array";
        if (a instanceof Ad) return "function";
        if (a instanceof Fd) {
            var b = a.getValue();
            if ((b == null ? void 0 : b.constructor) === void 0 || b.constructor.name === void 0) {
                var c = String(b);
                return c.substring(8, c.length - 1)
            }
            return String(b.constructor.name)
        }
        return typeof a
    };

    function gi(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Lg || Mg.Nn) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Id(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(B(c))
            }),
            publicName: "JSON"
        }
    };

    function hi(a) {
        return Bb(B(a, this.K))
    };

    function ii(a) {
        return Number(B(a, this.K))
    };

    function ji(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };

    function ki(a, b, c) {
        var d = null,
            e = !1;
        if (!Bh(a) || !Dh(b) || !Dh(c)) throw G(this.getName(), ["Array", "string", "string"], arguments);
        d = new bb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof bb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Rh = "floor ceil round max min abs pow sqrt".split(" ");

    function li() {
        var a = {};
        return {
            Sq: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            Jn: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }

    function mi(a, b) {
        return function() {
            return Ad.prototype.invoke.apply(a, [b].concat(za(Da.apply(0, arguments))))
        }
    }

    function ni(a, b) {
        if (!Dh(a)) throw G(this.getName(), ["string", "any"], arguments);
    }

    function oi(a, b) {
        if (!Dh(a) || !wh(b)) throw G(this.getName(), ["string", "PixieMap"], arguments);
    };
    var pi = {};
    var qi = function(a) {
        var b = new bb;
        if (a instanceof wd)
            for (var c = a.ya(), d = 0; d < c.length; d++) {
                var e = c[d];
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof Ad)
                for (var f = a.ya(), g = 0; g < f.length; g++) {
                    var h = f[g];
                    b.set(h, a.get(h))
                } else
                    for (var l = 0; l < a.length; l++) b.set(l, a[l]);
        return b
    };
    pi.keys = function(a) {
        vh(this.getName(), arguments);
        if (a instanceof wd || a instanceof Ad || typeof a === "string") a = qi(a);
        if (a instanceof bb || a instanceof Hd) return new wd(a.ya());
        return new wd
    };
    pi.values = function(a) {
        vh(this.getName(), arguments);
        if (a instanceof wd || a instanceof Ad || typeof a === "string") a = qi(a);
        if (a instanceof bb || a instanceof Hd) return new wd(a.wc());
        return new wd
    };
    pi.entries = function(a) {
        vh(this.getName(), arguments);
        if (a instanceof wd || a instanceof Ad || typeof a === "string") a = qi(a);
        if (a instanceof bb || a instanceof Hd) return new wd(a.hc().map(function(b) {
            return new wd(b)
        }));
        return new wd
    };
    pi.freeze = function(a) {
        (a instanceof bb || a instanceof Hd || a instanceof wd || a instanceof Ad) && a.Va();
        return a
    };
    pi.delete = function(a, b) {
        if (a instanceof bb && !a.Bb()) return a.remove(b), !0;
        return !1
    };

    function I(a, b) {
        var c = Da.apply(2, arguments),
            d = a.K.qb();
        if (!d) throw Error("Missing program state.");
        if (d.Sr) {
            try {
                d.Ym.apply(null, [b].concat(za(c)))
            } catch (e) {
                throw kb("TAGGING", 21), e;
            }
            return
        }
        d.Ym.apply(null, [b].concat(za(c)))
    };
    var ri = function() {
        this.H = {};
        this.C = {};
        this.P = !0;
    };
    ri.prototype.get = function(a, b) {
        var c = this.contains(a) ? this.H[a] : void 0;
        return c
    };
    ri.prototype.contains = function(a) {
        return this.H.hasOwnProperty(a)
    };
    ri.prototype.add = function(a, b, c) {
        if (this.contains(a)) throw Error("Attempting to add a function which already exists: " + a + ".");
        if (this.C.hasOwnProperty(a)) throw Error("Attempting to add an API with an existing private API name: " + a + ".");
        this.H[a] = c ? void 0 : rb(b) ? Lh(a, b) : Mh(a, b)
    };

    function si(a, b) {
        var c = void 0;
        return c
    };

    function ti() {
        var a = {};
        return a
    };
    var K = {
        m: {
            Na: "ad_personalization",
            W: "ad_storage",
            X: "ad_user_data",
            ja: "analytics_storage",
            oc: "region",
            ia: "consent_updated",
            Jg: "wait_for_update",
            oo: "app_remove",
            po: "app_store_refund",
            qo: "app_store_subscription_cancel",
            ro: "app_store_subscription_convert",
            so: "app_store_subscription_renew",
            uo: "consent_update",
            vo: "conversion",
            Bk: "add_payment_info",
            Ck: "add_shipping_info",
            ee: "add_to_cart",
            fe: "remove_from_cart",
            Dk: "view_cart",
            fd: "begin_checkout",
            Is: "generate_lead",
            he: "select_item",
            qc: "view_item_list",
            zc: "select_promotion",
            rc: "view_promotion",
            Cb: "purchase",
            ie: "refund",
            sc: "view_item",
            Ek: "add_to_wishlist",
            wo: "exception",
            xo: "first_open",
            yo: "first_visit",
            ma: "gtag.config",
            Db: "gtag.get",
            zo: "in_app_purchase",
            gd: "page_view",
            Ao: "screen_view",
            Bo: "session_start",
            Co: "source_update",
            Do: "timing_complete",
            Eo: "track_social",
            je: "user_engagement",
            Fo: "user_id_update",
            bf: "gclid_link_decoration_source",
            cf: "gclid_storage_source",
            uc: "gclgb",
            tb: "gclid",
            Fk: "gclid_len",
            ke: "gclgs",
            me: "gcllp",
            ne: "gclst",
            Ia: "ads_data_redaction",
            df: "gad_source",
            ef: "gad_source_src",
            hd: "gclid_url",
            Gk: "gclsrc",
            ff: "gbraid",
            oe: "wbraid",
            Sb: "allow_ad_personalization_signals",
            hf: "allow_custom_scripts",
            jf: "allow_direct_google_requests",
            Pg: "allow_display_features",
            di: "allow_enhanced_conversions",
            Tb: "allow_google_signals",
            ei: "allow_interest_groups",
            Go: "app_id",
            Ho: "app_installer_id",
            Io: "app_name",
            Jo: "app_version",
            jd: "auid",
            Js: "auto_detection_enabled",
            Ko: "auto_event",
            Hk: "aw_remarketing",
            fi: "aw_remarketing_only",
            kf: "discount",
            lf: "aw_feed_country",
            nf: "aw_feed_language",
            Aa: "items",
            pf: "aw_merchant_id",
            gi: "aw_basket_type",
            qf: "campaign_content",
            rf: "campaign_id",
            tf: "campaign_medium",
            uf: "campaign_name",
            vf: "campaign",
            wf: "campaign_source",
            xf: "campaign_term",
            Ub: "client_id",
            Ik: "rnd",
            hi: "consent_update_type",
            Lo: "content_group",
            Mo: "content_type",
            Eb: "conversion_cookie_prefix",
            ii: "conversion_id",
            ub: "conversion_linker",
            Qg: "conversion_linker_disabled",
            kd: "conversion_api",
            Rg: "cookie_deprecation",
            wb: "cookie_domain",
            xb: "cookie_expires",
            Fb: "cookie_flags",
            ld: "cookie_name",
            Vb: "cookie_path",
            Xa: "cookie_prefix",
            Ac: "cookie_update",
            Bc: "country",
            kb: "currency",
            Sg: "customer_buyer_stage",
            qe: "customer_lifetime_value",
            Tg: "customer_loyalty",
            Ug: "customer_ltv_bucket",
            se: "custom_map",
            Vg: "gcldc",
            md: "dclid",
            Jk: "debug_mode",
            Ga: "developer_id",
            No: "disable_merchant_reported_purchases",
            Cc: "dc_custom_params",
            Kk: "dc_natural_search",
            Oo: "dynamic_event_settings",
            Lk: "affiliation",
            Wg: "checkout_option",
            ji: "checkout_step",
            Mk: "coupon",
            yf: "item_list_name",
            ki: "list_name",
            Po: "promotions",
            nd: "shipping",
            Nk: "tax",
            Xg: "engagement_time_msec",
            Yg: "enhanced_client_id",
            Qo: "enhanced_conversions",
            Ks: "enhanced_conversions_automatic_settings",
            te: "estimated_delivery_date",
            zf: "event_callback",
            Ro: "event_category",
            Dc: "event_developer_id_string",
            So: "event_label",
            Ec: "event",
            li: "event_settings",
            Zg: "event_timeout",
            To: "description",
            Uo: "fatal",
            Vo: "experiments",
            mi: "firebase_id",
            Af: "first_party_collection",
            ah: "_x_20",
            vc: "_x_19",
            Wo: "flight_error_code",
            Xo: "flight_error_message",
            Ok: "fl_activity_category",
            Pk: "fl_activity_group",
            ni: "fl_advertiser_id",
            Qk: "fl_ar_dedupe",
            Bf: "match_id",
            Rk: "fl_random_number",
            Sk: "tran",
            Tk: "u",
            bh: "gac_gclid",
            ue: "gac_wbraid",
            Uk: "gac_wbraid_multiple_conversions",
            Yo: "ga_restrict_domain",
            Vk: "ga_temp_client_id",
            Zo: "ga_temp_ecid",
            ve: "gdpr_applies",
            Wk: "geo_granularity",
            Cf: "value_callback",
            Df: "value_key",
            Gc: "google_analysis_params",
            we: "_google_ng",
            Ef: "google_signals",
            ap: "google_tld",
            eh: "gpp_sid",
            fh: "gpp_string",
            gh: "groups",
            Xk: "gsa_experiment_id",
            Ff: "gtag_event_feature_usage",
            Yk: "gtm_up",
            pd: "iframe_state",
            Gf: "ignore_referrer",
            Zk: "internal_traffic_results",
            al: "_is_fpm",
            Hc: "is_legacy_converted",
            Ic: "is_legacy_loaded",
            oi: "is_passthrough",
            xe: "_lps",
            lb: "language",
            hh: "legacy_developer_id_string",
            cb: "linker",
            Hf: "accept_incoming",
            Jc: "decorate_forms",
            ra: "domains",
            rd: "url_position",
            Kc: "merchant_feed_label",
            Lc: "merchant_feed_language",
            Mc: "merchant_id",
            bl: "method",
            bp: "name",
            fl: "navigation_type",
            ye: "new_customer",
            ih: "non_interaction",
            cp: "optimize_id",
            il: "page_hostname",
            If: "page_path",
            Ya: "page_referrer",
            Gb: "page_title",
            ep: "passengers",
            jl: "phone_conversion_callback",
            fp: "phone_conversion_country_code",
            kl: "phone_conversion_css_class",
            hp: "phone_conversion_ids",
            ml: "phone_conversion_number",
            nl: "phone_conversion_options",
            jp: "_platinum_request_status",
            kp: "_protected_audience_enabled",
            ze: "quantity",
            jh: "redact_device_info",
            ol: "referral_exclusion_definition",
            Ls: "_request_start_time",
            Wb: "restricted_data_processing",
            lp: "retoken",
            mp: "sample_rate",
            ri: "screen_name",
            Nc: "screen_resolution",
            pl: "_script_source",
            np: "search_term",
            sd: "send_page_view",
            ud: "send_to",
            vd: "server_container_url",
            op: "session_attributes_encoded",
            kh: "session_duration",
            mh: "session_engaged",
            si: "session_engaged_time",
            Xb: "session_id",
            nh: "session_number",
            Jf: "_shared_user_id",
            wd: "delivery_postal_code",
            Ms: "_tag_firing_delay",
            Ns: "_tag_firing_time",
            Os: "temporary_client_id",
            pp: "_timezone",
            ui: "topmost_url",
            oh: "tracking_id",
            wi: "traffic_type",
            Ja: "transaction_id",
            ql: "transaction_id_source",
            Oc: "transport_url",
            qp: "trip_type",
            xd: "update",
            Hb: "url_passthrough",
            rl: "uptgs",
            Kf: "_user_agent_architecture",
            Lf: "_user_agent_bitness",
            Mf: "_user_agent_full_version_list",
            Nf: "_user_agent_mobile",
            Of: "_user_agent_model",
            Pf: "_user_agent_platform",
            Qf: "_user_agent_platform_version",
            Rf: "_user_agent_wow64",
            Ib: "user_data",
            sl: "user_data_auto_latency",
            tl: "user_data_auto_meta",
            vl: "user_data_auto_multi",
            wl: "user_data_auto_selectors",
            xl: "user_data_auto_status",
            Jb: "user_data_mode",
            yl: "user_data_settings",
            Oa: "user_id",
            yd: "user_properties",
            zl: "_user_region",
            Sf: "us_privacy_string",
            Ka: "value",
            Al: "wbraid_multiple_conversions",
            Pc: "_fpm_parameters",
            Ci: "_host_name",
            Zl: "_in_page_command",
            Ei: "_ip_override",
            gm: "_is_passthrough_cid",
            zh: "_measurement_type",
            Hd: "non_personalized_ads",
            Ri: "_sst_parameters",
            Wp: "sgtm_geo_user_country",
            pe: "conversion_label",
            xa: "page_location",
            od: "_extracted_data",
            Fc: "global_developer_id_string",
            Ae: "tc_privacy_string"
        }
    };
    var ui = {},
        zi = (ui[K.m.ia] = "gcu", ui[K.m.uc] = "gclgb", ui[K.m.tb] = "gclaw", ui[K.m.Fk] = "gclid_len", ui[K.m.ke] = "gclgs", ui[K.m.me] = "gcllp", ui[K.m.ne] = "gclst", ui[K.m.jd] = "auid", ui[K.m.Ko] = "ae", ui[K.m.kf] = "dscnt", ui[K.m.lf] = "fcntr", ui[K.m.nf] = "flng", ui[K.m.pf] = "mid", ui[K.m.gi] = "bttype", ui[K.m.Ub] = "gacid", ui[K.m.pe] = "label", ui[K.m.kd] = "capi", ui[K.m.Rg] = "pscdl", ui[K.m.kb] = "currency_code", ui[K.m.Sg] = "clobs", ui[K.m.qe] = "vdltv", ui[K.m.Tg] = "clolo", ui[K.m.Ug] = "clolb", ui[K.m.Jk] = "_dbg", ui[K.m.te] = "oedeld", ui[K.m.Dc] =
            "edid", ui[K.m.bh] = "gac", ui[K.m.ue] = "gacgb", ui[K.m.Uk] = "gacmcov", ui[K.m.ve] = "gdpr", ui[K.m.Fc] = "gdid", ui[K.m.we] = "_ng", ui[K.m.eh] = "gpp_sid", ui[K.m.fh] = "gpp", ui[K.m.Xk] = "gsaexp", ui[K.m.Ff] = "_tu", ui[K.m.pd] = "frm", ui[K.m.oi] = "gtm_up", ui[K.m.xe] = "lps", ui[K.m.hh] = "did", ui[K.m.Kc] = "fcntr", ui[K.m.Lc] = "flng", ui[K.m.Mc] = "mid", ui[K.m.ye] = void 0, ui[K.m.Gb] = "tiba", ui[K.m.Wb] = "rdp", ui[K.m.Xb] = "ecsid", ui[K.m.Jf] = "ga_uid", ui[K.m.wd] = "delopc", ui[K.m.Ae] = "gdpr_consent", ui[K.m.Ja] = "oid", ui[K.m.ql] = "oidsrc", ui[K.m.rl] =
            "uptgs", ui[K.m.Kf] = "uaa", ui[K.m.Lf] = "uab", ui[K.m.Mf] = "uafvl", ui[K.m.Nf] = "uamb", ui[K.m.Of] = "uam", ui[K.m.Pf] = "uap", ui[K.m.Qf] = "uapv", ui[K.m.Rf] = "uaw", ui[K.m.sl] = "ec_lat", ui[K.m.tl] = "ec_meta", ui[K.m.vl] = "ec_m", ui[K.m.wl] = "ec_sel", ui[K.m.xl] = "ec_s", ui[K.m.Jb] = "ec_mode", ui[K.m.Oa] = "userId", ui[K.m.Sf] = "us_privacy", ui[K.m.Ka] = "value", ui[K.m.Al] = "mcov", ui[K.m.Ci] = "hn", ui[K.m.Zl] = "gtm_ee", ui[K.m.Ei] = "uip", ui[K.m.zh] = "mt", ui[K.m.Hd] = "npa", ui[K.m.Wp] = "sg_uc", ui[K.m.ii] = null, ui[K.m.Nc] = null, ui[K.m.lb] = null, ui[K.m.Aa] =
            null, ui[K.m.xa] = null, ui[K.m.Ya] = null, ui[K.m.ui] = null, ui[K.m.Pc] = null, ui[K.m.bf] = null, ui[K.m.cf] = null, ui[K.m.Gc] = null, ui[K.m.od] = null, ui);

    function Ai(a, b) {
        if (a) {
            var c = a.split("x");
            c.length === 2 && (Bi(b, "u_w", c[0]), Bi(b, "u_h", c[1]))
        }
    }

    function Ci(a) {
        var b = Di;
        b = b === void 0 ? Ei : b;
        var c;
        var d = b;
        if (a && a.length) {
            for (var e = [], f = 0; f < a.length; ++f) {
                var g = a[f];
                g && e.push({
                    item_id: d(g),
                    quantity: g.quantity,
                    value: g.price,
                    start_date: g.start_date,
                    end_date: g.end_date
                })
            }
            c = e
        } else c = [];
        var h;
        var l = c;
        if (l) {
            for (var n = [], p = 0; p < l.length; p++) {
                var q = l[p],
                    r = [];
                q && (r.push(Fi(q.value)), r.push(Fi(q.quantity)), r.push(Fi(q.item_id)), r.push(Fi(q.start_date)), r.push(Fi(q.end_date)), n.push("(" + r.join("*") + ")"))
            }
            h = n.length > 0 ? n.join("") : ""
        } else h = "";
        return h
    }

    function Ei(a) {
        return Gi(a.item_id, a.id, a.item_name)
    }

    function Gi() {
        for (var a = m(Da.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            if (c !== null && c !== void 0) return c
        }
    }

    function Hi(a) {
        if (a && a.length) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
            }
            return b.join(",")
        }
    }

    function Bi(a, b, c) {
        c === void 0 || c === null || c === "" && !Tg[b] || (a[b] = c)
    }

    function Fi(a) {
        return typeof a !== "number" && typeof a !== "string" ? "" : a.toString()
    };
    var Ii = {},
        Ji = function() {
            for (var a = !1, b = !1, c = 0; a === b;)
                if (a = wb(0, 1) === 0, b = wb(0, 1) === 0, c++, c > 30) return;
            return a
        },
        Li = {
            Xr: Ki
        };

    function Ki(a, b) {
        var c = Ii[b];
        if (!(wb(0, 9999) < c.probability * (c.controlId2 ? 4 : 2) * 1E4)) return a;
        a: {
            var d = c.studyId,
                e = c.experimentId,
                f = c.controlId,
                g = c.controlId2;
            if (!((a.exp || {})[e] || (a.exp || {})[f] || g && (a.exp || {})[g])) {
                var h = Ji();
                if (h !== void 0) {
                    var l = h ? 0 : 1;
                    if (g) {
                        var n = Ji();
                        if (n === void 0) break a;
                        l |= (n ? 0 : 1) << 1
                    }
                    l === 0 ? Mi(a, e, d) : l === 1 ? Mi(a, f, d) : l === 2 && Mi(a, g, d)
                }
            }
        }
        return a
    }

    function Ni(a, b) {
        return Ii[b] ? !!Ii[b].active || Ii[b].probability > .5 || !!(a.exp || {})[Ii[b].experimentId] : !1
    }

    function Oi(a, b) {
        for (var c = a.exp || {}, d = m(Object.keys(c).map(Number)), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (c[f] === b) return f
        }
    }

    function Mi(a, b, c) {
        var d = a.exp || {};
        d[b] = c;
        a.exp = d
    };
    var Pi = {
        O: {
            ek: "call_conversion",
            ae: "ccm_conversion",
            Ea: "conversion",
            tp: "floodlight",
            Uf: "ga_conversion",
            Bd: "gcp_remarketing",
            jm: "landing_page",
            Ba: "page_view",
            Ge: "fpm_test_hit",
            Kb: "remarketing",
            Zb: "user_data_lead",
            zb: "user_data_web"
        }
    };
    var Qi = function() {
            this.C = new Set;
            this.H = new Set
        },
        Si = function(a) {
            var b = Ri.C;
            a = a === void 0 ? [] : a;
            var c = [].concat(za(b.C)).concat([].concat(za(b.H))).concat(a);
            c.sort(function(d, e) {
                return d - e
            });
            return c
        },
        Ti = function() {
            var a = [].concat(za(Ri.C.C));
            a.sort(function(b, c) {
                return b - c
            });
            return a
        },
        Ui = function() {
            var a = Ri.C,
                b = E(44);
            a.C = new Set;
            if (b !== "")
                for (var c = m(b.split("~")), d = c.next(); !d.done; d = c.next()) {
                    var e = Number(d.value);
                    isNaN(e) || a.C.add(e)
                }
        };
    var Vi = {},
        Wi = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        Xi = {
            __paused: 1,
            __tg: 1
        },
        Yi;
    for (Yi in Wi) Wi.hasOwnProperty(Yi) && (Xi[Yi] = 1);
    var Zi = kg(45),
        $i, aj = !1;
    $i = aj;
    var bj = null,
        cj = {},
        dj = "";
    Vi.Si = dj;
    var Ri = new function() {
        this.C = new Qi;
        this.H = !1
    };
    var ej = /:[0-9]+$/,
        fj = /^\d+\.fls\.doubleclick\.net$/;

    function gj(a, b, c, d) {
        var e = hj(a, !!d, b),
            f, g;
        return c ? (g = e[b]) != null ? g : [] : (f = e[b]) == null ? void 0 : f[0]
    }

    function hj(a, b, c) {
        for (var d = {}, e = m(a.split("&")), f = e.next(); !f.done; f = e.next()) {
            var g = m(f.value.split("=")),
                h = g.next().value,
                l = ya(g),
                n = decodeURIComponent(h.replace(/\+/g, " "));
            if (c === void 0 || n === c) {
                var p = l.join("=");
                d[n] || (d[n] = []);
                d[n].push(b ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return d
    }

    function ij(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {}
    }

    function jj(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = kj(a.protocol) || kj(w.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : w.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || w.location.hostname).replace(ej, "").toLowerCase());
        return lj(a, b, c, d, e)
    }

    function lj(a, b, c, d, e) {
        var f, g = kj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = mj(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(ej, "").toLowerCase();
                if (c) {
                    var h = /^www\d*\./.exec(f);
                    h && h[0] && (f = f.substring(h[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || kb("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var l = f.split("/");
                (d || []).indexOf(l[l.length -
                    1]) >= 0 && (l[l.length - 1] = "");
                f = l.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = gj(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }

    function kj(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }

    function mj(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c)
        }
        return b
    }
    var nj = {},
        oj = 0;

    function pj(a) {
        var b = nj[a];
        if (!b) {
            var c = z.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || kb("TAGGING", 1), d = "/" + d);
            var e = c.hostname.replace(ej, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            oj < 5 && (nj[a] = b, oj++)
        }
        return b
    }

    function qj(a, b, c) {
        var d = pj(a);
        return Wb(b, d, c)
    }

    function rj(a) {
        var b = pj(w.location.href),
            c = jj(b, "host", !1);
        if (c && c.match(fj)) {
            var d = jj(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0]
            }
        }
    };
    var sj = {
            "https://www.google.com": "/g",
            "https://www.googleadservices.com": "/as",
            "https://pagead2.googlesyndication.com": "/gs"
        },
        tj = ["/as/d/ccm/conversion", "/g/d/ccm/conversion", "/gs/ccm/conversion", "/d/ccm/form-data"];

    function uj() {
        return kg(47) ? lg(54) !== 1 : !1
    }

    function vj() {
        var a = E(18),
            b = a.length;
        return a[b - 1] === "/" ? a.substring(0, b - 1) : a
    }

    function wj(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return pj("" + c + b).href
        }
    }

    function xj(a, b) {
        if (uj() || kg(50)) return wj(a, b)
    }

    function yj() {
        return !!Vi.Si && Vi.Si.split("@@").join("") !== "SGTM_TOKEN"
    }

    function zj(a) {
        for (var b = m([K.m.vd, K.m.Oc]), c = b.next(); !c.done; c = b.next()) {
            var d = L(a, c.value);
            if (d) return d
        }
    }

    function Aj(a, b, c) {
        c = c === void 0 ? "" : c;
        if (!uj()) return a;
        var d = b ? sj[a] || "" : "";
        d === "/gs" && (c = "");
        return "" + vj() + d + c
    }

    function Bj(a) {
        if (!uj()) return a;
        for (var b = m(tj), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            if (Lb(a, "" + vj() + d)) return a + "&_uip=" + encodeURIComponent("::")
        }
        return a
    };
    var Cj = /gtag[.\/]js/,
        Dj = /gtm[.\/]js/,
        Ej = !1;

    function Fj(a) {
        if ((a.scriptContainerId || "").indexOf("GTM-") >= 0) {
            var b;
            a: {
                var c, d = (c = a.scriptElement) == null ? void 0 : c.src;
                if (d) {
                    for (var e = kg(47), f = pj(d), g = e ? f.pathname : "" + f.hostname + f.pathname, h = z.scripts, l = "", n = 0; n < h.length; ++n) {
                        var p = h[n];
                        if (!(p.innerHTML.length === 0 || !e && p.innerHTML.indexOf(a.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || p.innerHTML.indexOf(g) < 0)) {
                            if (p.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                b = String(n);
                                break a
                            }
                            l = String(n)
                        }
                    }
                    if (l) {
                        b = l;
                        break a
                    }
                }
                b = void 0
            }
            var q = b;
            if (q) return Ej = !0,
                q
        }
        var r = [].slice.call(z.scripts);
        return a.scriptElement ? String(r.indexOf(a.scriptElement)) : "-1"
    }

    function Gj(a) {
        if (Ej) return "1";
        var b, c = (b = a.scriptElement) == null ? void 0 : b.src;
        if (c) {
            if (Cj.test(c)) return "3";
            if (Dj.test(c)) return "2"
        }
        return "0"
    };

    function M(a) {
        kb("GTM", a)
    };

    function Hj(a) {
        var b = Ij().destinationArray[a],
            c = Ij().destination[a];
        return b && b.length > 0 ? b[0] : c
    }

    function Jj(a, b) {
        var c = Ij();
        c.pending || (c.pending = []);
        vb(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }

    function Kj() {
        var a = w.google_tags_first_party;
        Array.isArray(a) || (a = []);
        for (var b = {}, c = m(a), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return Object.freeze(b)
    }
    var Lj = function() {
        this.container = {};
        this.destination = {};
        this.destinationArray = {};
        this.canonical = {};
        this.pending = [];
        this.injectedFirstPartyContainers = {};
        this.injectedFirstPartyContainers = Kj()
    };

    function Ij() {
        var a = Fc("google_tag_data", {}),
            b = a.tidr;
        b && typeof b === "object" || (b = new Lj, a.tidr = b);
        var c = b;
        c.container || (c.container = {});
        c.destination || (c.destination = {});
        c.destinationArray || (c.destinationArray = {});
        c.canonical || (c.canonical = {});
        c.pending || (c.pending = []);
        c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = Kj());
        return c
    };

    function Mj() {
        return kg(7) && Nj().some(function(a) {
            return a === E(5)
        })
    }

    function Oj() {
        var a;
        return (a = mg(55)) != null ? a : []
    }

    function Pj() {
        return E(6) || "_" + E(5)
    }

    function Qj() {
        var a = E(10);
        return a ? a.split("|") : [E(5)]
    }

    function Nj() {
        var a = mg(59);
        return Array.isArray(a) ? a.filter(function(b) {
            return typeof b === "string"
        }).filter(function(b) {
            return b.indexOf("GTM-") !== 0
        }) : []
    }

    function Rj() {
        var a = Sj(Tj()),
            b = a && a.parent;
        if (b) return Sj(b)
    }

    function Uj() {
        var a = Sj(Tj());
        if (a) {
            for (; a.parent;) {
                var b = Sj(a.parent);
                if (!b) break;
                a = b
            }
            return a
        }
    }

    function Sj(a) {
        var b = Ij();
        return a.isDestination ? Hj(a.ctid) : b.container[a.ctid]
    }

    function Vj() {
        var a = Ij();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Qj(), f = Nj(), g = {}, h = 0; h < a.pending.length; g = {
                    Dg: void 0
                }, h++) g.Dg = a.pending[h], vb(g.Dg.target.isDestination ? f : e, function(l) {
                return function(n) {
                    return n === l.Dg.target.ctid
                }
            }(g)) ? d || (b = g.Dg.onLoad, d = !0) : c.push(g.Dg);
            a.pending = c;
            if (b) try {
                b(Pj())
            } catch (l) {}
        }
    }

    function Wj() {
        for (var a = E(5), b = Qj(), c = Nj(), d = Oj(), e = function(q, r) {
                var u = {
                    canonicalContainerId: E(6),
                    scriptContainerId: a,
                    state: 2,
                    containers: b.slice(),
                    destinations: c.slice()
                };
                Dc && (u.scriptElement = Dc);
                Ec && (u.scriptSource = Ec);
                Rj() === void 0 && (u.htmlLoadOrder = Fj(u), u.loadScriptType = Gj(u));
                var t, v;
                switch (r) {
                    case 0:
                        t = function(A) {
                            f.container[q] = A
                        };
                        v = f.container[q];
                        break;
                    case 1:
                        t = function(A) {
                            f.destinationArray[q] = f.destinationArray[q] || [];
                            f.destinationArray[q].unshift(A)
                        };
                        var x, y = ((x = f.destinationArray[q]) ==
                            null ? void 0 : x[0]) || f.destination[q];
                        !y || y.state !== 0 && y.state !== 1 || (v = y);
                        break;
                    case 2:
                        t = function(A) {
                            f.destinationArray[q] = f.destinationArray[q] || [];
                            f.destinationArray[q].push(A)
                        }, v = void 0
                }
                t && (v ? (v.state === 0 && M(93), na(Object, "assign").call(Object, v, u)) : t(u))
            }, f = Ij(), g = m(b), h = g.next(); !h.done; h = g.next()) e(h.value, 0);
        for (var l = m(c), n = l.next(); !n.done; n = l.next()) {
            var p = n.value;
            d.includes(p) ? e(p, 1) : e(p, 2)
        }
        f.canonical[Pj()] = {};
        Vj()
    }

    function Xj() {
        var a = Pj();
        return !!Ij().canonical[a]
    }

    function Yj(a) {
        return !!Ij().container[a]
    }

    function Zj() {
        var a = Tj(),
            b = Sj(a);
        return b && b.context
    }

    function ak(a) {
        var b = Hj(a);
        return b ? b.state !== 0 : !1
    }

    function Tj() {
        return {
            ctid: E(5),
            isDestination: kg(7)
        }
    }

    function bk(a, b, c) {
        var d = Tj(),
            e = Ij().container[a];
        e && e.state !== 3 || (Ij().container[a] = {
            state: 1,
            context: b,
            parent: d
        }, Jj({
            ctid: a,
            isDestination: !1
        }, c))
    }

    function ck() {
        var a = Ij().container,
            b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1
    }

    function dk() {
        var a = {};
        zb(Ij().destination, function(b, c) {
            (c == null ? void 0 : c.state) === 0 && (a[b] = c)
        });
        zb(Ij().destinationArray, function(b, c) {
            var d = c[0];
            (d == null ? void 0 : d.state) === 0 && (a[b] = d)
        });
        return a
    }

    function ek(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }

    function fk() {
        for (var a = Ij(), b = m(Qj()), c = b.next(); !c.done; c = b.next())
            if (a.injectedFirstPartyContainers[c.value]) return !0;
        return !1
    };
    var gk = {},
        hk = (gk.tdp = 1, gk.exp = 1, gk.pid = 1, gk.dl = 1, gk.seq = 1, gk.t = 1, gk.v = 1, gk),
        ik = {};

    function jk() {
        return Object.keys(ik).filter(function(a) {
            return ik[a]
        })
    }
    var kk = {};

    function lk(a, b, c) {
        kk[a] = b;
        (c === void 0 || c) && mk(a)
    }

    function mk(a, b) {
        ik[a] !== void 0 && (b === void 0 || !b) || Lb(E(5), "GTM-") && a === "mcc" || (ik[a] = !0)
    }

    function nk(a) {
        a.forEach(function(b) {
            hk[b] || (ik[b] = !1)
        })
    };

    function ok(a) {
        a = a === void 0 ? [] : a;
        return Si(a).join("~")
    };
    var pk = [];

    function qk(a) {
        switch (a) {
            case 1:
                return 0;
            case 421:
                return 21;
            case 436:
                return 22;
            case 235:
                return 19;
            case 38:
                return 14;
            case 287:
                return 12;
            case 288:
                return 13;
            case 285:
                return 10;
            case 286:
                return 11;
            case 219:
                return 8;
            case 220:
                return 9;
            case 53:
                return 1;
            case 54:
                return 2;
            case 52:
                return 5;
            case 203:
                return 18;
            case 75:
                return 3;
            case 103:
                return 15;
            case 197:
                return 16;
            case 109:
                return 20;
            case 116:
                return 4;
            case 135:
                return 7
        }
    }

    function rk(a, b) {
        pk[a] = b;
        var c = qk(a);
        c !== void 0 && (Va[c] = b)
    }

    function sk(a) {
        rk(a, !0)
    }
    sk(120);
    sk(87);
    sk(132);
    sk(20);
    sk(72);
    sk(113);
    sk(116);
    rk(23, !1), sk(24);
    pg(6, 6E4);
    pg(7, 1);
    pg(35, 50);
    sk(37);

    sk(123);
    sk(158);
    sk(71);

    sk(135);
    sk(38);
    sk(103);

    sk(101);
    sk(435);
    sk(21);

    sk(141);
    sk(183);
    sk(185);
    sk(197);
    sk(200);
    sk(206);
    sk(218);
    sk(232);
    sk(252);

    sk(275);

    function P(a) {
        return !!pk[a]
    };

    function wk() {
        return {
            total: 0,
            jb: 0,
            Se: {}
        }
    }

    function xk(a, b, c, d) {
        var e = Object.keys(a.Te).sort(function(f, g) {
            return Number(f) - Number(g)
        }).map(function(f) {
            return [f, b(a.Te[f])]
        }).filter(function(f) {
            return f[1] !== void 0
        }).map(function(f) {
            return f.join(c)
        }).join(d);
        return e ? e : void 0
    }

    function yk(a, b) {
        var c, d, e;
        c = c === void 0 ? "_" : c;
        d = d === void 0 ? ";" : d;
        e = e === void 0 ? "~" : e;
        for (var f = [], g = m(Object.keys(a.Se).sort()), h = g.next(); !h.done; h = g.next()) {
            var l = h.value,
                n = xk(a.Se[l], b, c, d);
            if (n) {
                var p = void 0;
                f.push("" + ((p = l) != null ? p : "") + d + n)
            }
        }
        return f.length ? f.join(e) : void 0
    }

    function zk(a) {
        a.jb = 0;
        for (var b = m(Object.keys(a.Se)), c = b.next(); !c.done; c = b.next()) {
            var d = a.Se[c.value];
            d.jb = 0;
            for (var e = m(Object.keys(d.Te)), f = e.next(); !f.done; f = e.next()) d.Te[f.value].jb = 0
        }
    }

    function Ak(a, b, c) {
        var d;
        d = d === void 0 ? 1 : d;
        a.total += d;
        a.jb += d;
        var e, f = b === void 0 ? "" : b;
        e = a.Se[f] || (a.Se[f] = {
            total: 0,
            jb: 0,
            Te: {}
        });
        e.total += d;
        e.jb += d;
        var g, h = String(c);
        g = e.Te[h] || (e.Te[h] = {
            total: 0,
            jb: 0
        });
        g.total += d;
        g.jb += d
    };
    var Bk = wk();
    var Ck = {},
        Dk = (Ck[1] = {}, Ck[2] = {}, Ck[3] = {}, Ck[4] = {}, Ck);

    function Ek(a, b, c) {
        var d = Fk(b, c);
        if (d) {
            var e = Dk[b][d];
            e || (e = Dk[b][d] = []);
            e.push(na(Object, "assign").call(Object, {}, a));
            Ak(Bk, a.destinationId, a.endpoint);
            a.endpoint !== 56 && a.endpoint !== 61 && mk("mde", !0)
        }
    }

    function Gk(a, b) {
        var c = Fk(a, b);
        if (c) {
            var d = Dk[a][c];
            d && (Dk[a][c] = d.filter(function(e) {
                return !e.Cn
            }))
        }
    }

    function Hk(a) {
        switch (a) {
            case "script-src":
            case "script-src-elem":
                return 1;
            case "frame-src":
                return 4;
            case "connect-src":
                return 2;
            case "img-src":
                return 3
        }
    }

    function Fk(a, b) {
        var c = b;
        if (b[0] === "/") {
            var d;
            c = ((d = w.location) == null ? void 0 : d.origin) + b
        }
        try {
            var e = new URL(c);
            return a === 4 ? e.origin : e.origin + e.pathname
        } catch (f) {}
    };

    function Ik(a) {
        var b = String(a[tf.Ta] || "").replace(/_/g, "");
        return Lb(b, "cvt") ? "cvt" : b
    }
    var Jk = w.location.search.indexOf("?gtm_latency=") >= 0 || w.location.search.indexOf("&gtm_latency=") >= 0;
    var Kk = Math.random(),
        Lk, Mk = lg(27);
    Lk = Jk || Kk < Mk;
    var Nk, Ok = lg(42);
    Nk = Jk || Kk >= 1 - Ok;

    function Pk(a, b, c) {
        var d, e = a.GooglebQhCsO;
        e || (e = {}, a.GooglebQhCsO = e);
        d = e;
        if (d[b]) return !1;
        d[b] = [];
        d[b][0] = c;
        return !0
    };
    var Qk, Rk;
    a: {
        for (var Sk = ["CLOSURE_FLAGS"], Tk = Ea, Uk = 0; Uk < Sk.length; Uk++)
            if (Tk = Tk[Sk[Uk]], Tk == null) {
                Rk = null;
                break a
            } Rk = Tk
    }
    var Vk = Rk && Rk[610401301];
    Qk = Vk != null ? Vk : !1;

    function Wk() {
        var a = Ea.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Xk, bl = Ea.navigator;
    Xk = bl ? bl.userAgentData || null : null;

    function cl(a) {
        if (!Qk || !Xk) return !1;
        for (var b = 0; b < Xk.brands.length; b++) {
            var c = Xk.brands[b].brand;
            if (c && c.indexOf(a) != -1) return !0
        }
        return !1
    }

    function dl(a) {
        return Wk().indexOf(a) != -1
    };

    function el() {
        return Qk ? !!Xk && Xk.brands.length > 0 : !1
    }

    function fl() {
        return el() ? !1 : dl("Opera")
    }

    function gl() {
        return dl("Firefox") || dl("FxiOS")
    }

    function hl() {
        return el() ? cl("Chromium") : (dl("Chrome") || dl("CriOS")) && !(el() ? 0 : dl("Edge")) || dl("Silk")
    };

    function il() {
        return Qk ? !!Xk && !!Xk.platform : !1
    }

    function jl() {
        return dl("iPhone") && !dl("iPod") && !dl("iPad")
    }

    function kl() {
        jl() || dl("iPad") || dl("iPod")
    };
    var ll = function(a) {
        ll[" "](a);
        return a
    };
    ll[" "] = function() {};
    fl();
    el() || dl("Trident") || dl("MSIE");
    dl("Edge");
    !dl("Gecko") || Wk().toLowerCase().indexOf("webkit") != -1 && !dl("Edge") || dl("Trident") || dl("MSIE") || dl("Edge");
    Wk().toLowerCase().indexOf("webkit") != -1 && !dl("Edge") && dl("Mobile");
    il() || dl("Macintosh");
    il() || dl("Windows");
    (il() ? Xk.platform === "Linux" : dl("Linux")) || il() || dl("CrOS");
    il() || dl("Android");
    jl();
    dl("iPad");
    dl("iPod");
    kl();
    Wk().toLowerCase().indexOf("kaios");
    gl();
    jl() || dl("iPod");
    dl("iPad");
    !dl("Android") || hl() || gl() || fl() || dl("Silk");
    hl();
    !dl("Safari") || hl() || (el() ? 0 : dl("Coast")) || fl() || (el() ? 0 : dl("Edge")) || (el() ? cl("Microsoft Edge") : dl("Edg/")) || (el() ? cl("Opera") : dl("OPR")) || gl() || dl("Silk") || dl("Android") || kl();
    var ml = {},
        nl = null;

    function ol(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        var f = 4;
        f === void 0 && (f = 0);
        if (!nl) {
            nl = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; l < 5; l++) {
                var n = g.concat(h[l].split(""));
                ml[l] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    nl[q] === void 0 && (nl[q] = p)
                }
            }
        }
        for (var r = ml[f], u = Array(Math.floor(b.length / 3)), t = r[64] || "", v = 0, x = 0; v < b.length - 2; v += 3) {
            var y = b[v],
                A = b[v + 1],
                C = b[v + 2],
                D = r[y >> 2],
                H = r[(y & 3) << 4 | A >> 4],
                J = r[(A & 15) << 2 | C >> 6],
                O = r[C & 63];
            u[x++] = "" + D + H + J + O
        }
        var aa = 0,
            W = t;
        switch (b.length - v) {
            case 2:
                aa = b[v + 1], W = r[(aa & 15) << 2] || t;
            case 1:
                var N = b[v];
                u[x] = "" + r[N >> 2] + r[(N & 3) << 4 | aa >> 4] + W + t
        }
        return u.join("")
    };
    var pl = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    };

    function ql(a, b, c, d) {
        for (var e = b, f = c.length;
            (e = a.indexOf(c, e)) >= 0 && e < d;) {
            var g = a.charCodeAt(e - 1);
            if (g == 38 || g == 63) {
                var h = a.charCodeAt(e + f);
                if (!h || h == 61 || h == 38 || h == 35) return e
            }
            e += f + 1
        }
        return -1
    }
    var rl = /#|$/;

    function sl(a, b) {
        var c = a.search(rl),
            d = ql(a, 0, b, c);
        if (d < 0) return null;
        var e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return pl(a.slice(d, e !== -1 ? e : 0))
    }
    var tl = /[?&]($|#)/;

    function ul(a, b, c) {
        for (var d, e = a.search(rl), f = 0, g, h = [];
            (g = ql(a, f, b, e)) >= 0;) h.push(a.substring(f, g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.slice(f));
        d = h.join("").replace(tl, "$1");
        var l, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            r < 0 && (r = d.length);
            var u = d.indexOf("?"),
                t;
            u < 0 || u > r ? (u = r, t = "") : t = d.substring(u + 1, r);
            q = [d.slice(0, u), t, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            l = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else l = d;
        return l
    };

    function vl(a, b, c, d, e, f, g) {
        var h = sl(c, "fmt");
        if (d) {
            var l = sl(c, "random"),
                n = sl(c, "label") || "";
            if (!l) return !1;
            var p = ol(pl(n) + ":" + pl(l));
            if (!Pk(a, p, d)) return !1
        }
        h && Number(h) !== 4 && (c = ul(c, "rfmt", h));
        var q = ul(c, "fmt", 4),
            r = b.getElementsByTagName("script")[0].parentElement;
        g == null || wl(g);
        Nc(q, function() {
            g == null || xl(g);
            a.google_noFurtherRedirects && d && (a.google_noFurtherRedirects = null, d())
        }, function() {
            g == null || xl(g);
            e == null || e()
        }, f, r || void 0);
        return !0
    };

    function yl(a) {
        var b = Da.apply(1, arguments);
        Nk && (Ek(a, 2, b[0]), Ek(a, 3, b[0]));
        Zc.apply(null, za(b))
    }

    function zl(a) {
        var b = Da.apply(1, arguments);
        Nk && Ek(a, 2, b[0]);
        return $c.apply(null, za(b))
    }

    function Al(a) {
        var b = Da.apply(1, arguments);
        Nk && Ek(a, 3, b[0]);
        Qc.apply(null, za(b))
    }

    function Bl(a) {
        var b = Da.apply(1, arguments),
            c = b[0];
        Nk && (Ek(a, 2, c), Ek(a, 3, c));
        return bd.apply(null, za(b))
    }

    function Cl(a) {
        var b = Da.apply(1, arguments);
        Nk && Ek(a, 1, b[0]);
        Nc.apply(null, za(b))
    }

    function Dl(a) {
        var b = Da.apply(1, arguments);
        b[0] && Nk && Ek(a, 4, b[0]);
        Pc.apply(null, za(b))
    }

    function El(a) {
        var b = Da.apply(1, arguments);
        Nk && Ek(a, 1, b[2]);
        return vl.apply(null, za(b))
    };
    var Fl = {
        Ma: {
            Ce: 0,
            Fe: 1,
            Ki: 2
        }
    };
    Fl.Ma[Fl.Ma.Ce] = "FULL_TRANSMISSION";
    Fl.Ma[Fl.Ma.Fe] = "LIMITED_TRANSMISSION";
    Fl.Ma[Fl.Ma.Ki] = "NO_TRANSMISSION";
    var Gl = {
        aa: {
            Sc: 0,
            Sa: 1,
            dd: 2,
            Qc: 3
        }
    };
    Gl.aa[Gl.aa.Sc] = "NO_QUEUE";
    Gl.aa[Gl.aa.Sa] = "ADS";
    Gl.aa[Gl.aa.dd] = "ANALYTICS";
    Gl.aa[Gl.aa.Qc] = "MONITORING";

    function Hl() {
        var a = Fc("google_tag_data", {});
        return a.ics = a.ics || new Il
    }
    var Il = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.C = []
    };
    Il.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        kb("TAGGING", 19);
        b == null ? kb("TAGGING", 18) : Jl(this, a, b === "granted", c, d, e, f, g)
    };
    Il.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) Jl(this, a[d], void 0, void 0, "", "", b, c)
    };
    var Jl = function(a, b, c, d, e, f, g, h) {
        var l = a.entries,
            n = l[b] || {},
            p = n.region,
            q = d && sb(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0),
                u = {
                    region: q,
                    declare_region: n.declare_region,
                    implicit: n.implicit,
                    default: c !== void 0 ? c : n.default,
                    declare: n.declare,
                    update: n.update,
                    quiet: r
                };
            if (e !== "" || n.default !== !1) l[b] = u;
            r && w.setTimeout(function() {
                l[b] === u && u.quiet && (kb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, h),
                    a.notifyListeners())
            }, g)
        }
    };
    k = Il.prototype;
    k.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            h = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var l = m(d), n = l.next(); !n.done; n = l.next()) Kl(this, n.value)
        } else if (b !== void 0 && h !== b)
            for (var p = m(d), q = p.next(); !q.done; q = p.next()) Kl(this, q.value)
    };
    k.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    k.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            h = g.declare_region,
            l = c && sb(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || l === e || (l === d ? h !== e : !l && !h)) {
            var n = {
                region: g.region,
                declare_region: l,
                declare: b === "granted",
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if (d !== "" || g.declare !== !1) f[a] = n
        }
    };
    k.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    };
    k.getConsentState = function(a, b) {
        var c = this.entries,
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (b.usedContainerScopedDefaults) {
            var f = b.containerScopedDefaults[a];
            if (f === 3) return 1;
            if (f === 2) return 2
        } else if (e = d.default, e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var g = b.delegatedConsentTypes[a],
                h = c[g] || {};
            e = h.update;
            if (e !== void 0) return e ? 1 : 2;
            if (b.usedContainerScopedDefaults) {
                var l = b.containerScopedDefaults[g];
                if (l === 3) return 1;
                if (l === 2) return 2
            } else if (e =
                h.default, e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    k.addListener = function(a, b) {
        this.C.push({
            consentTypes: a,
            Kd: b
        })
    };
    var Kl = function(a, b) {
        for (var c = 0; c < a.C.length; ++c) {
            var d = a.C[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.xn = !0)
        }
    };
    Il.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.C.length; ++c) {
            var d = this.C[c];
            if (d.xn) {
                d.xn = !1;
                try {
                    d.Kd({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var Ll = !1,
        Ml = !1,
        Nl = {},
        Ol = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (Nl.ad_storage = 1, Nl.analytics_storage = 1, Nl.ad_user_data = 1, Nl.ad_personalization = 1, Nl),
            usedContainerScopedDefaults: !1
        };

    function Pl(a) {
        var b = Hl();
        b.accessedAny = !0;
        return (sb(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, Ol)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        })
    }

    function Ql(a) {
        var b = Hl();
        b.accessedAny = !0;
        return b.getConsentState(a, Ol)
    }

    function Rl(a) {
        var b = Hl();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function Sl() {
        if (!Wa(6)) return !1;
        var a = Hl();
        a.accessedAny = !0;
        if (a.active) return !0;
        if (!Ol.usedContainerScopedDefaults) return !1;
        for (var b = m(Object.keys(Ol.containerScopedDefaults)), c = b.next(); !c.done; c = b.next())
            if (Ol.containerScopedDefaults[c.value] !== 1) return !0;
        return !1
    }

    function Tl(a, b) {
        Hl().addListener(a, b)
    }

    function Ul(a, b) {
        Hl().notifyListeners(a, b)
    }

    function Vl(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Rl(b[e])) return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Tl(b, function(e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }

    function Wl(a, b) {
        function c() {
            for (var h = [], l = 0; l < e.length; l++) {
                var n = e[l];
                Pl(n) && !f[n] && h.push(n)
            }
            return h
        }

        function d(h) {
            for (var l = 0; l < h.length; l++) f[h[l]] = !0
        }
        var e = sb(b) ? [b] : b,
            f = {},
            g = c();
        g.length !== e.length && (d(g), Tl(e, function(h) {
            function l(q) {
                q.length !== 0 && (d(q), h.consentTypes = q, a(h))
            }
            var n = c();
            if (n.length !== 0) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? l(n) : w.setTimeout(function() {
                    l(c())
                }, 500)
            }
        }))
    };
    var Xl = {},
        Yl = (Xl[Gl.aa.Sc] = Fl.Ma.Ce, Xl[Gl.aa.Sa] = Fl.Ma.Ce, Xl[Gl.aa.dd] = Fl.Ma.Ce, Xl[Gl.aa.Qc] = Fl.Ma.Ce, Xl),
        Zl = function(a, b) {
            this.C = a;
            this.consentTypes = b
        };
    Zl.prototype.isConsentGranted = function() {
        switch (this.C) {
            case 0:
                return this.consentTypes.every(function(a) {
                    return Pl(a)
                });
            case 1:
                return this.consentTypes.some(function(a) {
                    return Pl(a)
                });
            default:
                tc(this.C, "consentsRequired had an unknown type")
        }
    };
    var $l = {},
        am = ($l[Gl.aa.Sc] = new Zl(0, []), $l[Gl.aa.Sa] = new Zl(0, ["ad_storage"]), $l[Gl.aa.dd] = new Zl(0, ["analytics_storage"]), $l[Gl.aa.Qc] = new Zl(1, ["ad_storage", "analytics_storage"]), $l);
    var cm = function(a) {
        var b = this;
        this.type = a;
        this.C = [];
        Tl(am[a].consentTypes, function() {
            bm(b) || b.flush()
        })
    };
    cm.prototype.flush = function() {
        for (var a = m(this.C), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            c()
        }
        this.C = []
    };
    var bm = function(a) {
            return Yl[a.type] === Fl.Ma.Ki && !am[a.type].isConsentGranted()
        },
        dm = function(a, b) {
            bm(a) ? a.C.push(b) : b()
        },
        em = new Map;

    function fm(a) {
        em.has(a) || em.set(a, new cm(a));
        return em.get(a)
    };
    var gm = {
        Z: {
            Rn: "aw_user_data_cache",
            Zh: "cookie_deprecation_label",
            Og: "diagnostics_page_id",
            Hs: "em_registry",
            xi: "eab",
            up: "fl_user_data_cache",
            Bp: "ga4_user_data_cache",
            De: "ip_geo_data_cache",
            Di: "ip_geo_fetch_in_progress",
            rm: "nb_data",
            Mi: "page_experiment_ids",
            tm: "pld",
            He: "pt_data",
            vm: "pt_listener_set",
            Am: "service_worker_endpoint",
            Dm: "shared_user_id",
            Em: "shared_user_id_requested",
            Dh: "shared_user_id_source"
        }
    };
    var hm = function(a) {
        return jf(function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    }(gm.Z);

    function im(a, b) {
        b = b === void 0 ? !1 : b;
        if (hm(a)) {
            var c, d, e = (d = (c = Fc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a]) return e[a];
            if (b) {
                var f = void 0,
                    g = 1,
                    h = {},
                    l = {
                        set: function(n) {
                            f = n;
                            l.notify()
                        },
                        get: function() {
                            return f
                        },
                        subscribe: function(n) {
                            h[String(g)] = n;
                            return g++
                        },
                        unsubscribe: function(n) {
                            var p = String(n);
                            return h.hasOwnProperty(p) ? (delete h[p], !0) : !1
                        },
                        notify: function() {
                            for (var n = m(Object.keys(h)), p = n.next(); !p.done; p = n.next()) {
                                var q = p.value;
                                try {
                                    h[q](a, f)
                                } catch (r) {}
                            }
                        }
                    };
                return e[a] = l
            }
        }
    }

    function jm(a, b) {
        var c = im(a, !0);
        c && c.set(b)
    }

    function km(a) {
        var b;
        return (b = im(a)) == null ? void 0 : b.get()
    }

    function lm(a, b) {
        var c = im(a);
        if (!c) {
            c = im(a, !0);
            if (!c) return;
            c.set(b)
        }
        return c.get()
    }

    function mm(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = im(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }

    function nm(a, b) {
        var c = im(a);
        return c ? c.unsubscribe(b) : !1
    };
    var om = ["fin", "mcc"],
        pm = !1;

    function qm(a) {
        a = a === void 0 ? !1 : a;
        var b = jk().filter(function(c) {
            return kk[c] !== void 0 && (a || !om.includes(c))
        });
        nk(b);
        return b.map(function(c) {
            var d = kk[c];
            typeof d === "function" && (d = d());
            return d ? "&" + c + "=" + d : ""
        }).join("") + "&z=0"
    }

    function rm(a) {
        var b = "https://" + E(21),
            c = "/td?id=" + E(5);
        return "" + Aj(b) + c + a
    }

    function sm(a) {
        a = a === void 0 ? !1 : a;
        if (Ri.H && Nk && E(5)) {
            var b = fm(Gl.aa.Qc);
            if (bm(b)) pm || (pm = !0, dm(b, sm));
            else {
                a && lk("fin", "1");
                var c = qm(a),
                    d = rm(c),
                    e = {
                        destinationId: E(5),
                        endpoint: 61
                    };
                a ? Bl(e, d, void 0, {
                    Re: !0
                }, void 0, function() {
                    Al(e, d + "&img=1")
                }) : Al(e, d);
                pm = !1;
                tm(c)
            }
        }
    }

    function tm(a) {
        if (P(426) && Ec && (Lb(Ec, "https://www.googletagmanager.com/") || kg(47)) && !(a.indexOf("&csp=") < 0 && a.indexOf("&mde=") < 0)) {
            var b;
            a: {
                try {
                    if (Ec) {
                        b = new URL(Ec);
                        break a
                    }
                } catch (c) {}
                b = void 0
            }
            b && Nc("" + Ec + (Ec.indexOf("?") >= 0 ? "&" : "?") + "is_td=1" + a)
        }
    }

    function um() {
        jk().some(function(a) {
            return !hk[a]
        }) && sm(!0)
    }
    var vm;

    function wm() {
        if (km(gm.Z.Og) === void 0) {
            var a = function() {
                jm(gm.Z.Og, wb());
                vm = 0
            };
            a();
            w.setInterval(a, 864E5)
        } else mm(gm.Z.Og, function() {
            vm = 0
        });
        vm = 0
    }

    function xm() {
        wm();
        lk("v", "3");
        lk("t", "t");
        lk("pid", function() {
            return String(km(gm.Z.Og))
        });
        lk("seq", function() {
            return String(++vm)
        });
        lk("exp", ok());
        Sc(w, "pagehide", um)
    };
    var ym = ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization"],
        zm = [K.m.vd, K.m.Oc, K.m.Af, K.m.Ub, K.m.Xb, K.m.Oa, K.m.cb, K.m.Xa, K.m.wb, K.m.Vb],
        Am = !1,
        Bm = !1,
        Cm = {},
        Dm = {};

    function Em() {
        !Bm && Am && (ym.some(function(a) {
            return Ol.containerScopedDefaults[a] !== 1
        }) || Fm("mbc"));
        Bm = !0
    }

    function Fm(a) {
        Nk && (lk(a, "1"), sm())
    }

    function Gm(a, b) {
        if (!Cm[b] && (Cm[b] = !0, Dm[b]))
            for (var c = m(zm), d = c.next(); !d.done; d = c.next())
                if (L(a, d.value)) {
                    Fm("erc");
                    break
                }
    };

    function Hm(a) {
        kb("HEALTH", a)
    };
    var Im = {},
        Jm = !1;

    function Km() {
        function a() {
            c !== void 0 && nm(gm.Z.De, c);
            try {
                var e = km(gm.Z.De);
                Im = JSON.parse(e)
            } catch (f) {
                M(123), Hm(2), Im = {}
            }
            Jm = !0;
            b()
        }
        var b = Lm,
            c = void 0,
            d = km(gm.Z.De);
        d ? a(d) : (c = mm(gm.Z.De, a), Mm())
    }

    function Mm() {
        function a(b) {
            jm(gm.Z.De, b || "{}");
            jm(gm.Z.Di, !1)
        }
        if (!km(gm.Z.Di)) {
            jm(gm.Z.Di, !0);
            try {
                w.fetch("https://www.google.com/ccm/geo", {
                    method: "GET",
                    cache: "no-store",
                    mode: "cors",
                    credentials: "omit"
                }).then(function(b) {
                    b.ok ? b.text().then(function(c) {
                        a(c)
                    }, function() {
                        a()
                    }) : a()
                }, function() {
                    a()
                })
            } catch (b) {
                a()
            }
        }
    }

    function Nm() {
        var a = E(22);
        try {
            return JSON.parse(ib(a))
        } catch (b) {
            return M(123), Hm(2), {}
        }
    }

    function Om() {
        return Im["0"] || ""
    }

    function Pm() {
        return Im["1"] || ""
    }

    function Qm() {
        var a = !1;
        return a
    }

    function Rm() {
        return Im["6"] !== !1
    }

    function Sm() {
        var a = "";
        return a
    }

    function Tm() {
        var a = "";
        return a
    };
    var Um = {},
        Vm = Object.freeze((Um[K.m.Sb] = 1, Um[K.m.Pg] = 1, Um[K.m.di] = 1, Um[K.m.Tb] = 1, Um[K.m.Aa] = 1, Um[K.m.wb] = 1, Um[K.m.xb] = 1, Um[K.m.Fb] = 1, Um[K.m.ld] = 1, Um[K.m.Vb] = 1, Um[K.m.Xa] = 1, Um[K.m.Ac] = 1, Um[K.m.se] = 1, Um[K.m.Ga] = 1, Um[K.m.Oo] = 1, Um[K.m.zf] = 1, Um[K.m.li] = 1, Um[K.m.Zg] = 1, Um[K.m.od] = 1, Um[K.m.Af] = 1, Um[K.m.Yo] = 1, Um[K.m.Gc] = 1, Um[K.m.Ef] = 1, Um[K.m.ap] = 1, Um[K.m.gh] = 1, Um[K.m.Zk] = 1, Um[K.m.Hc] = 1, Um[K.m.Ic] = 1, Um[K.m.cb] = 1, Um[K.m.ol] = 1, Um[K.m.Wb] = 1, Um[K.m.sd] = 1, Um[K.m.ud] = 1, Um[K.m.vd] = 1, Um[K.m.kh] = 1, Um[K.m.si] = 1, Um[K.m.wd] =
            1, Um[K.m.Oc] = 1, Um[K.m.xd] = 1, Um[K.m.yl] = 1, Um[K.m.yd] = 1, Um[K.m.Pc] = 1, Um[K.m.Ri] = 1, Um));
    Object.freeze([K.m.xa, K.m.Ya, K.m.Gb, K.m.lb, K.m.ri, K.m.Oa, K.m.mi, K.m.Lo]);
    var Wm = {},
        Xm = Object.freeze((Wm[K.m.oo] = 1, Wm[K.m.po] = 1, Wm[K.m.qo] = 1, Wm[K.m.ro] = 1, Wm[K.m.so] = 1, Wm[K.m.xo] = 1, Wm[K.m.yo] = 1, Wm[K.m.zo] = 1, Wm[K.m.Bo] = 1, Wm[K.m.je] = 1, Wm)),
        Ym = {},
        Zm = Object.freeze((Ym[K.m.Bk] = 1, Ym[K.m.Ck] = 1, Ym[K.m.ee] = 1, Ym[K.m.fe] = 1, Ym[K.m.Dk] = 1, Ym[K.m.fd] = 1, Ym[K.m.he] = 1, Ym[K.m.qc] = 1, Ym[K.m.zc] = 1, Ym[K.m.rc] = 1, Ym[K.m.Cb] = 1, Ym[K.m.ie] = 1, Ym[K.m.sc] = 1, Ym[K.m.Ek] = 1, Ym)),
        $m = Object.freeze([K.m.Sb, K.m.jf, K.m.Tb, K.m.Ac, K.m.Af, K.m.Gf, K.m.sd, K.m.xd]),
        an = Object.freeze([].concat(za($m))),
        bn = Object.freeze([K.m.xb,
            K.m.Zg, K.m.kh, K.m.si, K.m.Xg
        ]),
        cn = Object.freeze([].concat(za(bn))),
        dn = {},
        en = (dn[K.m.W] = "1", dn[K.m.ja] = "2", dn[K.m.X] = "3", dn[K.m.Na] = "4", dn),
        fn = {},
        gn = Object.freeze((fn.search = "s", fn.youtube = "y", fn.playstore = "p", fn.shopping = "h", fn.ads = "a", fn.maps = "m", fn));

    function hn(a) {
        return typeof a !== "object" || a === null ? {} : a
    }

    function jn(a) {
        return a === void 0 || a === null ? "" : typeof a === "object" ? a.toString() : String(a)
    }

    function kn(a) {
        if (a !== void 0 && a !== null) return jn(a)
    }

    function ln(a) {
        return typeof a === "number" ? a : kn(a)
    };

    function mn(a) {
        return a && a.indexOf("pending:") === 0 ? nn(a.substr(8)) : !1
    }

    function nn(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = Gb();
        return b < c + 3E5 && b > c - 9E5
    };
    var on = !1,
        pn = !1,
        qn = !1,
        rn = 0,
        sn = !1,
        tn = [];

    function un(a) {
        if (rn === 0) sn && tn && (tn.length >= 100 && tn.shift(), tn.push(a));
        else if (vn()) {
            var b = E(41),
                c = Fc(b, []);
            c.length >= 50 && c.shift();
            c.push(a)
        }
    }

    function wn() {
        xn();
        Tc(z, "TAProdDebugSignal", wn)
    }

    function xn() {
        if (!pn) {
            pn = !0;
            yn();
            var a = tn;
            tn = void 0;
            a == null || a.forEach(function(b) {
                un(b)
            })
        }
    }

    function yn() {
        var a = z.documentElement.getAttribute("data-tag-assistant-prod-present");
        nn(a) ? rn = 1 : !mn(a) || on || qn ? rn = 2 : (qn = !0, Sc(z, "TAProdDebugSignal", wn, !1), w.setTimeout(function() {
            xn();
            on = !0
        }, 200))
    }

    function vn() {
        if (!sn) return !1;
        switch (rn) {
            case 1:
            case 0:
                return !0;
            case 2:
                return !1;
            default:
                return !1
        }
    };
    var zn = !1;

    function An(a, b) {
        var c = Qj(),
            d = Nj();
        E(26);
        var e = kg(47) ? 0 : kg(50) ? 1 : 3,
            f = vj();
        if (vn()) {
            var g = Bn("INIT");
            g.containerLoadSource = a != null ? a : 0;
            b && (g.parentTargetReference = b);
            g.aliases = c;
            g.destinations = d;
            e !== void 0 && (g.gtg = {
                source: e,
                mPath: f != null ? f : ""
            });
            un(g)
        }
    }

    function Cn(a) {
        var b, c, d, e;
        b = a.targetId;
        c = a.request;
        d = a.hb;
        e = a.isBatched;
        var f;
        if (f = vn()) {
            var g;
            a: switch (c.endpoint) {
                case 19:
                case 47:
                    g = !0;
                    break a;
                default:
                    g = !1
            }
            f = !g
        }
        if (f) {
            var h = Bn("GTAG_HIT", {
                eventId: d.eventId,
                priorityId: d.priorityId
            });
            h.target = b;
            h.url = c.url;
            c.postBody && (h.postBody = c.postBody);
            h.parameterEncoding = c.parameterEncoding;
            h.endpoint = c.endpoint;
            e !== void 0 && (h.isBatched = e);
            un(h)
        }
    }

    function Dn(a) {
        vn() && Cn(a())
    }

    function Bn(a, b) {
        b = b === void 0 ? {} : b;
        b.groupId = En;
        var c, d = b,
            e = Fn,
            f = {
                publicId: Gn
            };
        d.eventId != null && (f.eventId = d.eventId);
        d.priorityId != null && (f.priorityId = d.priorityId);
        d.eventName && (f.eventName = d.eventName);
        d.groupId && (f.groupId = d.groupId);
        d.tagName && (f.tagName = d.tagName);
        c = {
            containerProduct: "GTM",
            key: f,
            version: e,
            messageType: a
        };
        c.containerProduct = zn ? "OGT" : "GTM";
        c.key.targetRef = Hn;
        return c
    }
    var Gn = "",
        Fn = "",
        Hn = {
            ctid: "",
            isDestination: !1
        },
        En;

    function In(a) {
        var b = E(5),
            c = Mj(),
            d = E(6),
            e = E(1);
        E(23);
        rn = 0;
        sn = !0;
        yn();
        En = a;
        Gn = b;
        Fn = e;
        zn = Zi;
        Hn = {
            ctid: b,
            isDestination: c,
            canonicalId: d
        }
    };
    var Jn = [K.m.W, K.m.ja, K.m.X, K.m.Na],
        Kn, Ln;

    function Mn(a) {
        var b = a[K.m.oc];
        b || (b = [""]);
        for (var c = {
                rg: 0
            }; c.rg < b.length; c = {
                rg: c.rg
            }, ++c.rg) zb(a, function(d) {
            return function(e, f) {
                if (e !== K.m.oc) {
                    var g = jn(f),
                        h = b[d.rg],
                        l = Om(),
                        n = Pm();
                    Ml = !0;
                    Ll && kb("TAGGING", 20);
                    Hl().declare(e, g, h, l, n)
                }
            }
        }(c))
    }

    function Nn(a) {
        Em();
        !Ln && Kn && Fm("crc");
        Ln = !0;
        var b = a[K.m.Jg];
        b && M(41);
        var c = a[K.m.oc];
        c ? M(40) : c = [""];
        for (var d = {
                sg: 0
            }; d.sg < c.length; d = {
                sg: d.sg
            }, ++d.sg) zb(a, function(e) {
            return function(f, g) {
                if (f !== K.m.oc && f !== K.m.Jg) {
                    var h = kn(g),
                        l = c[e.sg],
                        n = Number(b),
                        p = Om(),
                        q = Pm();
                    n = n === void 0 ? 0 : n;
                    Ll = !0;
                    Ml && kb("TAGGING", 20);
                    Hl().default(f, h, l, p, q, n, Ol)
                }
            }
        }(d))
    }

    function On(a) {
        Ol.usedContainerScopedDefaults = !0;
        var b = a[K.m.oc];
        if (b) {
            var c = Array.isArray(b) ? b : [b];
            if (!c.includes(Pm()) && !c.includes(Om())) return
        }
        zb(a, function(d, e) {
            switch (d) {
                case "ad_storage":
                case "analytics_storage":
                case "ad_user_data":
                case "ad_personalization":
                    break;
                default:
                    return
            }
            Ol.usedContainerScopedDefaults = !0;
            Ol.containerScopedDefaults[d] = e === "granted" ? 3 : 2
        })
    }

    function Pn(a, b) {
        Em();
        Kn = !0;
        zb(a, function(c, d) {
            var e = jn(d);
            Ll = !0;
            Ml && kb("TAGGING", 20);
            Hl().update(c, e, Ol)
        });
        Ul(b.eventId, b.priorityId)
    }

    function Qn(a) {
        a.hasOwnProperty("all") && (Ol.selectedAllCorePlatformServices = !0, zb(gn, function(b) {
            Ol.corePlatformServices[b] = a.all === "granted";
            Ol.usedCorePlatformServices = !0
        }));
        zb(a, function(b, c) {
            b !== "all" && (Ol.corePlatformServices[b] = c === "granted", Ol.usedCorePlatformServices = !0)
        })
    }

    function Rn(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return Pl(b)
        })
    }

    function Sn(a, b) {
        Tl(a, b)
    }

    function Tn(a, b) {
        Wl(a, b)
    }

    function Un(a, b) {
        Vl(a, b)
    }

    function Vn() {
        var a = [K.m.W, K.m.Na, K.m.X];
        Hl().waitForUpdate(a, 500, Ol)
    }

    function Wn(a) {
        for (var b = m(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            Hl().clearTimeout(d, void 0, Ol)
        }
        Ul()
    }

    function Xn() {
        if (!$i)
            for (var a = Rm() ? Yn(ng(5)) : Yn(ng(4)), b = 0; b < Jn.length; b++) {
                var c = Jn[b],
                    d = c,
                    e = a[c] ? "granted" : "denied";
                Hl().implicit(d, e)
            }
    }

    function Yn(a) {
        for (var b = {}, c = m(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    };
    var Zn = w.google_tag_manager = w.google_tag_manager || {};

    function $n(a, b) {
        return Zn[a] = Zn[a] || b()
    }

    function ao() {
        var a = E(5),
            b = bo;
        Zn[a] = Zn[a] || b
    }

    function co() {
        var a = E(19);
        return Zn[a] = Zn[a] || {}
    }

    function eo() {
        var a = E(19);
        return Zn[a]
    }

    function fo() {
        var a = Zn.sequence || 1;
        Zn.sequence = a + 1;
        return a
    }
    w.google_tag_data = w.google_tag_data || {};
    var go = !1,
        ho = [];

    function io() {
        if (!go) {
            go = !0;
            for (var a = ho.length - 1; a >= 0; a--) ho[a]();
            ho = []
        }
    };
    var jo = /^(?:AW|DC|G|GF|GT|HA|MC|UA)$/,
        ko = /\s/;

    function lo(a, b) {
        if (sb(a)) {
            a = Eb(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (jo.test(d)) {
                    var e = a.substring(c + 1),
                        f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var h = g(f[1]);
                            h.length === 2 && (f[1] = h[0], f.push(h[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var l = 0; l < f.length; l++)
                            if (!f[l] || ko.test(f[l]) && (d !== "AW" || l !== 1)) return
                    }
                    return {
                        id: a,
                        prefix: d,
                        destinationId: d + "-" + f[0],
                        ids: f
                    }
                }
            }
        }
    }

    function mo(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = lo(a[d], b);
            e && (c[e.id] = e)
        }
        var f = [],
            g;
        for (g in c)
            if (c.hasOwnProperty(g)) {
                var h = c[g];
                h.prefix === "AW" && h.ids[no[1]] && f.push(h.destinationId)
            } for (var l = 0; l < f.length; ++l) delete c[f[l]];
        for (var n = [], p = m(Object.keys(c)), q = p.next(); !q.done; q = p.next()) n.push(c[q.value]);
        return n
    }
    var oo = {},
        no = (oo[0] = 0, oo[1] = 1, oo[2] = 2, oo[3] = 0, oo[4] = 1, oo[5] = 0, oo[6] = 0, oo[7] = 0, oo);
    var po = pg(34, 500),
        qo = {},
        ro = {},
        so = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        to = {},
        uo = Object.freeze((to[K.m.sd] = !0, to)),
        vo = void 0;

    function wo(a, b) {
        if (b.length && Nk) {
            var c;
            (c = qo)[a] != null || (c[a] = []);
            ro[a] != null || (ro[a] = []);
            var d = b.filter(function(e) {
                return !ro[a].includes(e)
            });
            qo[a].push.apply(qo[a], za(d));
            ro[a].push.apply(ro[a], za(d));
            !vo && d.length > 0 && (mk("tdc", !0), vo = w.setTimeout(function() {
                sm();
                qo = {};
                vo = void 0
            }, po))
        }
    }

    function xo(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function yo(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function(r, u) {
                var t;
                qd(u) === "object" ? t = u[r] : qd(u) === "array" && (t = u[r]);
                return t === void 0 ? uo[r] : t
            },
            f = xo(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var h = (d ? d + "." : "") + g,
                    l = e(g, a),
                    n = e(g, b),
                    p = qd(l) === "object" || qd(l) === "array",
                    q = qd(n) === "object" || qd(n) === "array";
                if (p && q) yo(l, n, c, h);
                else if (p || q || l !== n) c[h] = !0
            } return Object.keys(c)
    }

    function zo() {
        lk("tdc", function() {
            vo && (w.clearTimeout(vo), vo = void 0);
            var a = [],
                b;
            for (b in qo) qo.hasOwnProperty(b) && a.push(b + "*" + qo[b].join("."));
            return a.length ? a.join("!") : void 0
        }, !1)
    };
    var Ao = {
        R: {
            Zj: 1,
            Qi: 2,
            Vj: 3,
            tk: 4,
            Wj: 5,
            ed: 6,
            sk: 7,
            Lp: 8,
            zm: 9,
            Xj: 10,
            Yj: 11,
            sh: 12,
            Ml: 13,
            Jl: 14,
            Ll: 15,
            Il: 16,
            Kl: 17,
            Hl: 18,
            Qn: 19,
            vp: 20,
            wp: 21,
            Ji: 22
        }
    };
    Ao.R[Ao.R.Zj] = "ALLOW_INTEREST_GROUPS";
    Ao.R[Ao.R.Qi] = "SERVER_CONTAINER_URL";
    Ao.R[Ao.R.Vj] = "ADS_DATA_REDACTION";
    Ao.R[Ao.R.tk] = "CUSTOMER_LIFETIME_VALUE";
    Ao.R[Ao.R.Wj] = "ALLOW_CUSTOM_SCRIPTS";
    Ao.R[Ao.R.ed] = "ANY_COOKIE_PARAMS";
    Ao.R[Ao.R.sk] = "COOKIE_EXPIRES";
    Ao.R[Ao.R.Lp] = "LEGACY_ENHANCED_CONVERSION_JS_VARIABLE";
    Ao.R[Ao.R.zm] = "RESTRICTED_DATA_PROCESSING";
    Ao.R[Ao.R.Xj] = "ALLOW_DISPLAY_FEATURES";
    Ao.R[Ao.R.Yj] = "ALLOW_GOOGLE_SIGNALS";
    Ao.R[Ao.R.sh] = "GENERATED_TRANSACTION_ID";
    Ao.R[Ao.R.Ml] = "FLOODLIGHT_COUNTING_METHOD_UNKNOWN";
    Ao.R[Ao.R.Jl] = "FLOODLIGHT_COUNTING_METHOD_STANDARD";
    Ao.R[Ao.R.Ll] = "FLOODLIGHT_COUNTING_METHOD_UNIQUE";
    Ao.R[Ao.R.Il] = "FLOODLIGHT_COUNTING_METHOD_PER_SESSION";
    Ao.R[Ao.R.Kl] = "FLOODLIGHT_COUNTING_METHOD_TRANSACTIONS";
    Ao.R[Ao.R.Hl] = "FLOODLIGHT_COUNTING_METHOD_ITEMS_SOLD";
    Ao.R[Ao.R.Qn] = "ADS_OGT_V1_USAGE";
    Ao.R[Ao.R.vp] = "FORM_INTERACTION_PERMISSION_DENIED";
    Ao.R[Ao.R.wp] = "FORM_SUBMIT_PERMISSION_DENIED";
    Ao.R[Ao.R.Ji] = "MICROTASK_NOT_SUPPORTED";
    var Bo = {},
        Co = (Bo[K.m.ei] = Ao.R.Zj, Bo[K.m.vd] = Ao.R.Qi, Bo[K.m.Oc] = Ao.R.Qi, Bo[K.m.Ia] = Ao.R.Vj, Bo[K.m.qe] = Ao.R.tk, Bo[K.m.hf] = Ao.R.Wj, Bo[K.m.Ac] = Ao.R.ed, Bo[K.m.Xa] = Ao.R.ed, Bo[K.m.wb] = Ao.R.ed, Bo[K.m.ld] = Ao.R.ed, Bo[K.m.Vb] = Ao.R.ed, Bo[K.m.Fb] = Ao.R.ed, Bo[K.m.xb] = Ao.R.sk, Bo[K.m.Wb] = Ao.R.zm, Bo[K.m.Pg] = Ao.R.Xj, Bo[K.m.Tb] = Ao.R.Yj, Bo),
        Do = {},
        Eo = (Do.unknown = Ao.R.Ml, Do.standard = Ao.R.Jl, Do.unique = Ao.R.Ll, Do.per_session = Ao.R.Il, Do.transactions = Ao.R.Kl, Do.items_sold = Ao.R.Hl, Do);
    var ob = [];

    function Fo(a, b) {
        b = b === void 0 ? !1 : b;
        kb("GTAG_EVENT_FEATURE_CHANNEL", a);
        b && (ob[a] = !0)
    }

    function Go(a, b) {
        b = b === void 0 ? !1 : b;
        for (var c = Object.keys(a), d = m(Object.keys(Co)), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            c.includes(f) && Fo(Co[f], b)
        }
    };
    var Ho = function(a, b, c, d, e, f, g, h, l, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.C = c;
            this.V = d;
            this.H = e;
            this.T = f;
            this.P = g;
            this.eventMetadata = h;
            this.onSuccess = l;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        Io = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.C);
                    c.push(a.V);
                    c.push(a.H);
                    c.push(a.T);
                    c.push(a.P);
                    break;
                case 2:
                    c.push(a.C);
                    break;
                case 1:
                    c.push(a.V);
                    c.push(a.H);
                    c.push(a.T);
                    c.push(a.P);
                    break;
                case 4:
                    c.push(a.C), c.push(a.V), c.push(a.H), c.push(a.T)
            }
            return c
        },
        L = function(a, b, c, d) {
            for (var e = m(Io(a, d === void 0 ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b]
            }
            return c
        },
        Jo = function(a) {
            for (var b = {}, c = Io(a, 4), d = m(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = m(f), h = g.next(); !h.done; h = g.next()) b[h.value] = 1;
            return Object.keys(b)
        };
    Ho.prototype.getMergedValues = function(a, b, c) {
        function d(n) {
            sd(n) && zb(n, function(p, q) {
                f = !0;
                e[p] = q
            })
        }
        b = b === void 0 ? 3 : b;
        var e = {},
            f = !1;
        c && d(c);
        var g = Io(this, b);
        g.reverse();
        for (var h = m(g), l = h.next(); !l.done; l = h.next()) d(l.value[a]);
        return f ? e : void 0
    };
    var Ko = function(a) {
            for (var b = [K.m.vf, K.m.qf, K.m.rf, K.m.tf, K.m.uf, K.m.wf, K.m.xf], c = Io(a, 3), d = m(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, h = !1, l = m(b), n = l.next(); !n.done; n = l.next()) {
                    var p = n.value;
                    f[p] !== void 0 && (g[p] = f[p], h = !0)
                }
                var q = h ? g : void 0;
                if (q) return q
            }
            return {}
        },
        Lo = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.H = {};
            this.V = {};
            this.C = {};
            this.P = {};
            this.ka = {};
            this.T = {};
            this.eventMetadata = {};
            this.isGtmEvent = !1;
            this.onSuccess = function() {};
            this.onFailure = function() {}
        },
        Mo = function(a,
            b) {
            a.H = b;
            return a
        },
        No = function(a, b) {
            a.V = b;
            return a
        },
        Oo = function(a, b) {
            a.C = b;
            return a
        },
        Po = function(a, b) {
            a.P = b;
            return a
        },
        Qo = function(a, b) {
            a.ka = b;
            return a
        },
        Ro = function(a, b) {
            a.T = b;
            return a
        },
        So = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        To = function(a, b) {
            a.onSuccess = b;
            return a
        },
        dp = function(a, b) {
            a.onFailure = b;
            return a
        },
        ep = function(a, b) {
            a.isGtmEvent = b;
            return a
        },
        fp = function(a) {
            return new Ho(a.eventId, a.priorityId, a.H, a.V, a.C, a.P, a.T, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
        };
    var Q = {
        A: {
            Vh: "accept_by_default",
            Sj: "add_tag_timing",
            Zd: "ads_event_page_view",
            bd: "allow_ad_personalization",
            Bs: "auto_event",
            bk: "batch_on_navigation",
            gk: "client_id_source",
            Ye: "consent_event_id",
            Ze: "consent_priority_id",
            Ds: "consent_state",
            ia: "consent_updated",
            be: "conversion_linker_enabled",
            Fa: "cookie_options",
            Lg: "create_dc_join",
            Mg: "create_fpm_geo_join",
            Ng: "create_fpm_signals_join",
            ce: "create_google_join",
            wk: "dc_random",
            de: "em_event",
            Gs: "endpoint_for_debug",
            Ak: "enhanced_client_id_source",
            bi: "enhanced_match_result",
            Bl: "euid_logged_in_state",
            Be: "euid_mode_enabled",
            mb: "event_start_timestamp_ms",
            Fl: "event_usage",
            zi: "extra_tag_experiment_ids",
            Rs: "add_parameter",
            Ai: "attribution_reporting_experiment",
            Bi: "counting_method",
            qh: "send_as_iframe",
            Ss: "parameter_order",
            rh: "parsed_target",
            xp: "ga4_collection_subdomain",
            Ul: "gbraid_cookie_marked",
            eb: "handle_internally",
            ba: "hit_type",
            Cd: "hit_type_override",
            Vf: "ignore_hit_success_failure",
            Vs: "is_config_command",
            uh: "is_consent_update",
            Wf: "is_conversion",
            am: "is_ecommerce",
            bm: "is_ec_cm_split",
            Dd: "is_external_event",
            Fi: "is_fallback_aw_conversion_ping_allowed",
            Xf: "is_first_visit",
            dm: "is_first_visit_conversion",
            wh: "is_fl_fallback_conversion_flow_allowed",
            Ed: "is_fpm_encryption",
            Gi: "is_fpm_split",
            Yb: "is_gcp_conversion",
            fm: "is_google_signals_allowed",
            Fd: "is_merchant_center",
            xh: "is_new_to_site",
            Yf: "is_personalization",
            yh: "is_server_side_destination",
            Ee: "is_session_start",
            hm: "is_session_start_conversion",
            Ws: "is_sgtm_ga_ads_conversion_study_control_group",
            Xs: "is_sgtm_prehit",
            im: "is_sgtm_service_worker",
            Hi: "is_split_conversion",
            Gp: "is_syn",
            Hp: "is_test_event",
            Zf: "join_id",
            Ii: "join_elapsed",
            cg: "join_timer_sec",
            lm: "local_storage_aw_conversion_counters",
            Ie: "tunnel_updated",
            ct: "prehit_for_retry",
            ft: "promises",
            ht: "record_aw_latency",
            Tc: "redact_ads_data",
            Je: "redact_click_ids",
            ym: "remarketing_only",
            Oi: "send_ccm_parallel_ping",
            jt: "send_ccm_parallel_test_ping",
            gg: "send_to_destinations",
            Pi: "send_to_targets",
            Up: "send_user_data_hit",
            Pa: "source_canonical_id",
            wa: "speculative",
            Hm: "speculative_in_message",
            Jm: "suppress_script_load",
            Km: "syn_or_mod",
            Pm: "transient_ecsid",
            hg: "transmission_type",
            Ua: "user_data",
            nt: "user_data_from_automatic",
            ot: "user_data_from_automatic_getter",
            Rm: "user_data_from_code",
            aq: "user_data_from_manual",
            Sm: "user_data_mode",
            ig: "user_id_updated"
        }
    };
    var gp = new yb,
        hp = {},
        ip = {},
        lp = {
            name: E(19),
            set: function(a, b) {
                td(Ob(a, b), hp);
                jp()
            },
            get: function(a) {
                return kp(a, 2)
            },
            reset: function() {
                gp = new yb;
                hp = {};
                jp()
            }
        };

    function kp(a, b) {
        return b != 2 ? gp.get(a) : mp(a)
    }

    function mp(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = hp, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return
        }
        return d
    }

    function np(a, b) {
        ip.hasOwnProperty(a) || (gp.set(a, b), td(Ob(a, b), hp), jp())
    }

    function op() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = kp(c, 1);
            if (Array.isArray(d) || sd(d)) d = td(d, null);
            ip[c] = d
        }
    }

    function jp(a) {
        zb(ip, function(b, c) {
            gp.set(b, c);
            td(Ob(b), hp);
            td(Ob(b, c), hp);
            a && delete ip[b]
        })
    }

    function pp(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? mp(a) : gp.get(a);
        qd(d) === "array" || qd(d) === "object" ? c = td(d, null) : c = d;
        return c
    };
    var qp = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };

    function rp(a) {
        a = a === void 0 ? {} : a;
        var b = E(5).split("-")[0].toUpperCase(),
            c, d = {
                ctid: E(5),
                Bn: lg(15),
                Gn: E(14),
                zr: kg(7) ? 2 : 1,
                ks: a.In,
                canonicalId: E(6),
                Ur: (c = Uj()) == null ? void 0 : c.canonicalContainerId,
                ls: a.Wd === void 0 ? void 0 : a.Wd ? 10 : 12
            };
        d.canonicalId !== a.Ra && (d.Ra = a.Ra);
        var e = Rj();
        d.Gr = e ? e.canonicalContainerId : void 0;
        Zi ? (d.Th = qp[b], d.Th || (d.Th = 0)) : d.Th = $i ? 13 : 10;
        kg(47) ? (d.yj = 0, d.qq = 2) : kg(50) ? d.yj = 1 : d.yj = 3;
        var f = a,
            g = {
                6: !1
            };
        lg(54) === 2 ? g[7] = !0 : lg(54) === 1 && (g[2] = !0);
        if (Ec) {
            var h = jj(pj(Ec), "host");
            h && (g[8] = h.match(/^(www\.)?googletagmanager\.com$/) ===
                null)
        }
        if (P(417)) {
            var l;
            g[9] = (l = f.mc) != null ? l : !1
        }
        if (P(420)) {
            var n = Zj(),
                p;
            g[10] = (p = n == null ? void 0 : n.fromContainerExecution) != null ? p : !1
        }
        d.xq = g;
        return pf(d, a.Gh)
    };
    var sp = {
            Pn: pg(3, 0)
        },
        tp = [],
        up = !1;

    function vp(a) {
        tp.push(a)
    }
    var wp = void 0,
        xp = {},
        yp = void 0,
        zp = new function() {
            var a = 5;
            sp.Pn > 0 && (a = sp.Pn);
            this.H = a;
            this.C = 0;
            this.P = []
        },
        Ap = 1E3;

    function Bp(a, b) {
        var c = wp;
        if (c === void 0)
            if (b) c = fo();
            else return "";
        for (var d = [Aj("https://" + E(21)), "/a", "?id=" + E(5)], e = m(tp), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, h = g({
                    eventId: c,
                    Yd: !!a
                }), l = m(h), n = l.next(); !n.done; n = l.next()) {
                var p = m(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }

    function Cp() {
        if (Ri.H && (yp && (w.clearTimeout(yp), yp = void 0), wp !== void 0 && Dp)) {
            var a = fm(Gl.aa.Qc);
            if (bm(a)) up || (up = !0, dm(a, Cp));
            else {
                var b;
                if (!(b = xp[wp])) {
                    var c = zp;
                    b = c.C < c.H ? !1 : Gb() - c.P[c.C % c.H] < 1E3
                }
                if (b || Ap-- <= 0) M(1), xp[wp] = !0;
                else {
                    var d = zp,
                        e = d.C++ % d.H;
                    d.P[e] = Gb();
                    var f = Bp(!0);
                    Al({
                        destinationId: E(5),
                        endpoint: 56,
                        eventId: wp
                    }, f);
                    up = Dp = !1
                }
            }
        }
    }

    function Ep() {
        if (Lk && Ri.H) {
            var a = Bp(!0, !0);
            Al({
                destinationId: E(5),
                endpoint: 56,
                eventId: wp
            }, a)
        }
    }
    var Dp = !1;

    function Fp(a) {
        xp[a] || (a !== wp && (Cp(), wp = a), Dp = !0, yp || (yp = w.setTimeout(Cp, 500)), Bp().length >= 2022 && Cp())
    }
    var Gp = wb();

    function Hp() {
        Gp = wb()
    }

    function Ip() {
        var a = [
                ["v", "3"],
                ["t", "t"],
                ["pid", String(Gp)]
            ],
            b = rp();
        b && a.push(["gtm", b]);
        return a
    };
    var Jp = {};

    function Kp(a, b, c) {
        Lk && a !== void 0 && (Jp[a] = Jp[a] || [], Jp[a].push(c + b), Fp(a))
    }

    function Lp(a) {
        var b = a.eventId,
            c = a.Yd,
            d = [],
            e = Jp[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete Jp[b];
        return d
    };
    var Mp = !1;

    function Np(a, b, c, d) {
        var e = lo(c, d.isGtmEvent);
        e && (Mp && (d.deferrable = !0), Op.push("event", [b, a], e, d))
    }

    function Pp(a, b, c, d) {
        var e = lo(c, d.isGtmEvent);
        e && Op.push("get", [a, b], e, d)
    }

    function Qp(a) {
        var b = lo(a, !0),
            c;
        b ? c = Rp(Op, b).T : c = {};
        return c
    }
    var Sp = function() {
            this.C = {};
            this.T = {};
            this.V = {};
            this.ka = null;
            this.P = {};
            this.H = !1;
            this.status = 1
        },
        Tp = function(a, b, c, d) {
            this.H = Gb();
            this.C = b;
            this.args = c;
            this.messageContext = d;
            this.type = a
        };

    function Up(a) {
        var b = {};
        zb(a, function(c, d) {
            td(Ob(c, d), b)
        });
        return b
    }
    var Vp = function() {
            this.destinations = {};
            this.C = {};
            this.commands = []
        },
        Rp = function(a, b) {
            return a.destinations[b.destinationId] = a.destinations[b.destinationId] || new Sp
        },
        Wp = function(a, b, c, d) {
            if (d.C) {
                var e = Rp(a, d.C),
                    f = e.ka;
                if (f) {
                    var g = td(c, null),
                        h = td(e.C[d.C.destinationId], null),
                        l = td(e.P, null),
                        n = td(e.T, null),
                        p = td(a.C, null),
                        q = {};
                    if (Lk) try {
                        q = td(hp, null)
                    } catch (x) {
                        M(72)
                    }
                    var r = d.C.prefix,
                        u = function(x) {
                            Kp(d.messageContext.eventId, r, x)
                        },
                        t = fp(ep(dp(To(So(Qo(Po(Ro(Oo(No(Mo(new Lo(d.messageContext.eventId, d.messageContext.priorityId),
                            g), h), l), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var x = u;
                                u = void 0;
                                x("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (u) {
                                var x = u;
                                u = void 0;
                                x("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent)),
                        v = function() {
                            try {
                                Kp(d.messageContext.eventId, r, "1");
                                var x = d.type,
                                    y = d.C.id;
                                if (Nk && x === "config") {
                                    var A, C = (A = lo(y)) == null ? void 0 : A.ids;
                                    if (!(C && C.length > 1)) {
                                        var D, H = Fc("google_tag_data", {});
                                        H.td || (H.td = {});
                                        D = H.td;
                                        var J =
                                            td(t.T);
                                        td(t.C, J);
                                        var O = [],
                                            aa;
                                        for (aa in D) D.hasOwnProperty(aa) && yo(D[aa], J).length && O.push(aa);
                                        O.length && (wo(y, O), kb("TAGGING", so[z.readyState] || 14));
                                        D[y] = J
                                    }
                                }
                                f(d.C.id, b, d.H, t)
                            } catch (W) {
                                Kp(d.messageContext.eventId, r, "4")
                            }
                        };
                    b === "gtag.get" ? v() : dm(e.sa, v)
                }
            }
        },
        Xp = function(a, b) {
            if (b.type !== "require")
                if (b.C)
                    for (var c = Rp(a, b.C).V[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.V)
                                for (var g = f.V[b.type] || [], h = 0; h < g.length; h++) g[h]()
                        }
        };
    Vp.prototype.register = function(a, b, c, d) {
        var e = Rp(this, a);
        e.status !== 3 && (e.ka = b, e.status = 3, e.sa = fm(c), Yp(this, a, d || {}), this.flush())
    };
    Vp.prototype.push = function(a, b, c, d) {
        c !== void 0 && (Rp(this, c).status === 1 && (Rp(this, c).status = 2, this.push("require", [{}], c, {})), Rp(this, c).H && (d.deferrable = !1), d.eventMetadata || (d.eventMetadata = {}), d.eventMetadata[Q.A.gg] || (d.eventMetadata[Q.A.gg] = [c.destinationId]), d.eventMetadata[Q.A.Pi] || (d.eventMetadata[Q.A.Pi] = [c.id]));
        this.commands.push(new Tp(a, c, b, d));
        d.deferrable || this.flush()
    };
    Vp.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1; this.commands.length;) {
            var e = this.commands[0],
                f = e.C;
            if (e.messageContext.deferrable) !f || Rp(this, f).H ? (e.messageContext.deferrable = !1, this.commands.push(e)) : c.push(e), this.commands.shift();
            else {
                switch (e.type) {
                    case "require":
                        if (Rp(this, f).status !== 3 && !a) {
                            this.commands.push.apply(this.commands, c);
                            return
                        }
                        break;
                    case "set":
                        var g = e.args[0];
                        zb(g, function(A, C) {
                            td(Ob(A, C), b.C)
                        });
                        Go(g, !0);
                        break;
                    case "config":
                        var h = Rp(this, f),
                            l = Up(e.args[0]),
                            n = !!l[K.m.xd];
                        delete l[K.m.xd];
                        var p = f.destinationId === f.id;
                        Go(l, !0);
                        n || (p ? h.P = {} : h.C[f.id] = {});
                        h.H && n || Wp(this, K.m.ma, l, e);
                        h.H = !0;
                        p ? td(l, h.P) : (td(l, h.C[f.id]), M(70));
                        d = !0;
                        break;
                    case "event":
                        var q = Up(e.args[0]);
                        Go(q);
                        Wp(this, e.args[1], q, e);
                        break;
                    case "get":
                        var r = {},
                            u = (r[K.m.Df] = e.args[0], r[K.m.Cf] = e.args[1], r);
                        Wp(this, K.m.Db, u, e);
                        break;
                    case "container_config":
                        var t = Rp(this, f),
                            v = Up(e.args[0]);
                        Go(v, !0);
                        t.H = !0;
                        t.P = v;
                        d = !0;
                        break;
                    case "destination_config":
                        var x = Rp(this, f),
                            y = Up(e.args[0]);
                        Go(y, !0);
                        x.C[f.id] || (x.C[f.id] = {});
                        x.H = !0;
                        x.C[f.id] = y;
                        d = !0;
                        break;
                    case "reset_container_config":
                        Rp(this, f).P = {};
                        break;
                    case "reset_target_config":
                        Rp(this, f).C[f.id] = {}
                }
                this.commands.shift();
                Xp(this, e)
            }
        }
        this.commands.push.apply(this.commands, c);
        d && this.flush()
    };
    var Yp = function(a, b, c) {
            var d = td(c, null);
            td(Rp(a, b).T, d);
            Rp(a, b).T = d
        },
        Op = new Vp;

    function Zp(a) {
        var b = a.location.href;
        if (a === a.top) return {
            url: b,
            xr: !0
        };
        var c = !1,
            d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        var e = a.location.ancestorOrigins;
        if (e) {
            var f = e[e.length - 1],
                g;
            f && ((g = b) == null ? void 0 : g.indexOf(f)) === -1 && (c = !1, b = f)
        }
        return {
            url: b,
            xr: c
        }
    }

    function $p(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    ll(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function aq() {
        for (var a = w, b = a; a && a != a.parent;) a = a.parent, $p(a) && (b = a);
        return b
    };
    var bq = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        cq = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function dq(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    var eq = function(a, b) {
            for (var c = a, d = 0; d < 50; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (h) {
                    e = !1
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        fq = function(a) {
            var b = w;
            if (b.top == b) return 0;
            if (a === void 0 ? 0 : a) {
                var c = b.location.ancestorOrigins;
                if (c) return c[c.length - 1] == b.location.origin ? 1 : 2
            }
            return $p(b.top) ? 1 : 2
        },
        gq = function(a) {
            a = a === void 0 ? document : a;
            return a.createElement("img")
        };

    function hq(a, b, c) {
        return typeof a.addEventListener === "function" ? (a.addEventListener(b, c, !1), !0) : !1
    }

    function iq(a, b, c) {
        typeof a.removeEventListener === "function" && a.removeEventListener(b, c, !1)
    };

    function jq(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = gq(a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = yc(g, e);
                    h >= 0 && Array.prototype.splice.call(g, h, 1)
                }
                iq(e, "load", f);
                iq(e, "error", f)
            };
            hq(e, "load", f);
            hq(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }

    function kq(a) {
        var b;
        b = b === void 0 ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        dq(a, function(d, e) {
            if (d || d === 0) c += "&" + e + "=" + encodeURIComponent(String(d))
        });
        lq(c, b)
    }

    function lq(a, b) {
        var c = window,
            d;
        b = b === void 0 ? !1 : b;
        d = d === void 0 ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else jq(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
    };
    var mq = function() {
        this.ka = this.ka;
        this.T = this.T
    };
    mq.prototype.ka = !1;
    mq.prototype.dispose = function() {
        this.ka || (this.ka = !0, this.P())
    };
    mq.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    mq.prototype.addOnDisposeCallback = function(a, b) {
        this.ka ? b !== void 0 ? a.call(b) : a() : (this.T || (this.T = []), b && (a = a.bind(b)), this.T.push(a))
    };
    mq.prototype.P = function() {
        if (this.T)
            for (; this.T.length;) this.T.shift()()
    };

    function nq(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
    var oq = function(a, b) {
        b = b === void 0 ? {} : b;
        mq.call(this);
        this.C = null;
        this.sa = {};
        this.Rc = 0;
        this.V = null;
        this.H = a;
        var c;
        this.yb = (c = b.timeoutMs) != null ? c : 500;
        var d;
        this.nb = (d = b.xt) != null ? d : !1
    };
    wa(oq, mq);
    oq.prototype.P = function() {
        this.sa = {};
        this.V && (iq(this.H, "message", this.V), delete this.V);
        delete this.sa;
        delete this.H;
        delete this.C;
        mq.prototype.P.call(this)
    };
    var qq = function(a) {
        return typeof a.H.__tcfapi === "function" || pq(a) != null
    };
    oq.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.nb
            },
            d = cq(function() {
                return a(c)
            }),
            e = 0;
        this.yb !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.yb));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = nq(c), c.internalBlockOnErrors = b.nb, h && c.internalErrorState === 0 || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            rq(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    oq.prototype.removeEventListener = function(a) {
        a && a.listenerId && rq(this, "removeEventListener", null, a.listenerId)
    };
    var tq = function(a, b, c) {
            var d;
            d = d === void 0 ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (f !== void 0) {
                        e = f[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (g === 0) return !1;
            var h = c;
            c === 2 ? (h = 0, g === 2 && (h = 1)) : c === 3 && (h = 1, g === 1 && (h = 0));
            var l;
            if (h === 0)
                if (a.purpose && a.vendor) {
                    var n = sq(a.vendor.consents, d === void 0 ? "755" : d);
                    l = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && sq(a.purpose.consents, b)
                } else l = !0;
            else l = h === 1 ? a.purpose && a.vendor ? sq(a.purpose.legitimateInterests,
                b) && sq(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return l
        },
        sq = function(a, b) {
            return !(!a || !a[b])
        },
        rq = function(a, b, c, d) {
            c || (c = function() {});
            var e = a.H;
            if (typeof e.__tcfapi === "function") {
                var f = e.__tcfapi;
                f(b, 2, c, d)
            } else if (pq(a)) {
                uq(a);
                var g = ++a.Rc;
                a.sa[g] = c;
                if (a.C) {
                    var h = {};
                    a.C.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: g,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        pq = function(a) {
            if (a.C) return a.C;
            a.C = eq(a.H, "__tcfapiLocator");
            return a.C
        },
        uq = function(a) {
            if (!a.V) {
                var b = function(c) {
                    try {
                        var d;
                        d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                        a.sa[d.callId](d.returnValue, d.success)
                    } catch (e) {}
                };
                a.V = b;
                hq(a.H, "message", b)
            }
        },
        vq = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = nq(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (kq({
                e: String(a.internalErrorState)
            }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        };
    var wq = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };
    pg(32, 500);

    function xq() {
        return $n("tcf", function() {
            return {}
        })
    }
    var yq = function() {
        return new oq(w, {
            timeoutMs: -1
        })
    };

    function zq() {
        var a = xq(),
            b = yq();
        qq(b) && !Aq() && !Bq() && M(124);
        if (!a.active && qq(b)) {
            Aq() && (a.active = !0, a.purposes = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Hl().active = !0, a.tcString = "tcunavailable");
            Vn();
            try {
                b.addEventListener(function(c) {
                    if (c.internalErrorState !== 0) Cq(a), Wn([K.m.W, K.m.Na, K.m.X]), Hl().active = !0;
                    else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, Bq() && (a.active = !0), !Dq(c) || Aq() || Bq()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies ===
                            !1) {
                            var e = {},
                                f;
                            for (f in wq) wq.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (Dq(c)) {
                            var g = {},
                                h;
                            for (h in wq)
                                if (wq.hasOwnProperty(h))
                                    if (h === "1") {
                                        var l, n = c,
                                            p = {
                                                Rq: !0
                                            };
                                        p = p === void 0 ? {} : p;
                                        l = vq(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.idpcApplies : (p.idpcApplies || n.gdprApplies !== void 0 || p.Rq) && (p.idpcApplies || typeof n.tcString === "string" && n.tcString.length) ? tq(n, "1", 0) : !0 : !1;
                                        g["1"] = l
                                    } else g[h] = tq(c, h, wq[h]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.purposes = d;
                            var q = {},
                                r = (q[K.m.W] = a.purposes["1"] ? "granted" : "denied", q);
                            a.gdprApplies !== !0 ? (Wn([K.m.W, K.m.Na, K.m.X]), Hl().active = !0) : (r[K.m.Na] = a.purposes["3"] && a.purposes["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[K.m.X] = a.purposes["1"] && a.purposes["7"] ? "granted" : "denied" : Wn([K.m.X]), Pn(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: Eq() || ""
                            }))
                        }
                    } else Wn([K.m.W, K.m.Na, K.m.X])
                })
            } catch (c) {
                Cq(a), Wn([K.m.W, K.m.Na, K.m.X]), Hl().active = !0
            }
        }
    }

    function Cq(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Dq(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }

    function Aq() {
        return w.gtag_enable_tcf_support === !0
    }

    function Bq() {
        return xq().enableAdvertiserConsentMode === !0
    }

    function Eq() {
        var a = xq();
        if (a.active) return a.tcString
    }

    function Fq() {
        var a = xq();
        if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
    }

    function Gq(a) {
        if (!wq.hasOwnProperty(String(a))) return !0;
        var b = xq();
        return b.active && b.purposes ? !!b.purposes[String(a)] : !0
    };
    var Hq = [K.m.W, K.m.ja, K.m.X, K.m.Na],
        Iq = {},
        Jq = (Iq[K.m.W] = 1, Iq[K.m.ja] = 2, Iq);

    function Kq(a) {
        if (a === void 0) return 0;
        switch (L(a, K.m.Sb)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }

    function Lq() {
        return (P(183) ? ng(16).split("~") : ng(17).split("~")).indexOf(Pm()) !== -1 && Bc.globalPrivacyControl === !0
    }

    function Mq(a) {
        if (Lq()) return !1;
        var b = Kq(a);
        if (b === 3) return !1;
        switch (Ql(K.m.Na)) {
            case 1:
            case 3:
                return !0;
            case 2:
                return !1;
            case 4:
                return b === 2;
            case 0:
                return !0;
            default:
                return !1
        }
    }

    function Nq() {
        return Sl() || !Pl(K.m.W) || !Pl(K.m.ja)
    }

    function Oq() {
        var a = {},
            b;
        for (b in Jq) Jq.hasOwnProperty(b) && (a[Jq[b]] = Ql(b));
        return "G1" + mf(a[1] || 0) + mf(a[2] || 0)
    }
    var Pq = {},
        Qq = (Pq[K.m.W] = 0, Pq[K.m.ja] = 1, Pq[K.m.X] = 2, Pq[K.m.Na] = 3, Pq);

    function Rq(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }

    function Sq(a) {
        for (var b = "1", c = 0; c < Hq.length; c++) {
            var d = b,
                e, f = Hq[c],
                g = Ol.delegatedConsentTypes[f];
            e = g === void 0 ? 0 : Qq.hasOwnProperty(g) ? 12 | Qq[g] : 8;
            var h = Hl();
            h.accessedAny = !0;
            var l = h.entries[f] || {};
            e = e << 2 | Rq(l.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Rq(l.declare) << 4 | Rq(l.default) << 2 | Rq(l.update)])
        }
        var n = b,
            p = (Lq() ? 1 : 0) << 3,
            q = (Sl() ? 1 : 0) << 2,
            r = Kq(a);
        b = n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [p |
            q | r
        ];
        return b += "" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Ol.containerScopedDefaults.ad_storage << 4 | Ol.containerScopedDefaults.analytics_storage << 2 | Ol.containerScopedDefaults.ad_user_data] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [(Ol.usedContainerScopedDefaults ? 1 : 0) << 2 | Ol.containerScopedDefaults.ad_personalization]
    }

    function Tq() {
        if (!Pl(K.m.X)) return "-";
        if (P(170)) return "a";
        for (var a = Object.keys(gn), b = {}, c = m(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = Ol.corePlatformServices[e] !== !1
        }
        for (var f = "", g = m(a), h = g.next(); !h.done; h = g.next()) {
            var l = h.value;
            b[l] && (f += gn[l])
        }(Ol.usedCorePlatformServices ? Ol.selectedAllCorePlatformServices : 1) && (f += "o");
        return f || "-"
    }

    function Uq() {
        return Rm() || (Aq() || Bq()) && Fq() === "1" ? "1" : "0"
    }

    function Vq() {
        return (Rm() ? !0 : !(!Aq() && !Bq()) && Fq() === "1") || !Pl(K.m.X)
    }

    function Wq() {
        var a = "0",
            b = "0",
            c;
        var d = xq();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
        var e = "0",
            f;
        var g = xq();
        f = g.active ? g.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
        var h = 0;
        Rm() && (h |= 1);
        Fq() === "1" && (h |= 2);
        Aq() && (h |= 4);
        var l;
        var n = xq();
        l = n.enableAdvertiserConsentMode !==
            void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        l === "1" && (h |= 8);
        Hl().waitPeriodTimedOut && (h |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h]
    }

    function Xq() {
        return Pm() === "US-CO"
    };

    function Yq(a, b, c, d) {
        var e, f = Number(a.Xc != null ? a.Xc : void 0);
        f !== 0 && (e = new Date((b || Gb()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            yc: d
        }
    };
    var Zq = ["ad_storage", "ad_user_data"];

    function $q(a, b) {
        if (!a) return kb("TAGGING", 32), 10;
        if (b === null || b === void 0 || b === "") return kb("TAGGING", 33), 11;
        var c = ar(!1);
        if (c.error !== 0) return kb("TAGGING", 34), c.error;
        if (!c.value) return kb("TAGGING", 35), 2;
        c.value[a] = b;
        var d = br(c);
        d !== 0 && kb("TAGGING", 36);
        return d
    }

    function cr(a) {
        if (!a) return kb("TAGGING", 27), {
            error: 10
        };
        var b = ar();
        if (b.error !== 0) return kb("TAGGING", 29), b;
        if (!b.value) return kb("TAGGING", 30), {
            error: 2
        };
        if (!(a in b.value)) return kb("TAGGING", 31), {
            value: void 0,
            error: 15
        };
        var c = b.value[a];
        return c === null || c === void 0 || c === "" ? (kb("TAGGING", 28), {
            value: void 0,
            error: 11
        }) : {
            value: c,
            error: 0
        }
    }

    function ar(a) {
        a = a === void 0 ? !0 : a;
        if (!Pl(Zq)) return kb("TAGGING", 43), {
            error: 3
        };
        try {
            if (!w.localStorage) return kb("TAGGING", 44), {
                error: 1
            }
        } catch (f) {
            return kb("TAGGING", 45), {
                error: 14
            }
        }
        var b = {
                schema: "gcl",
                version: 1
            },
            c = void 0;
        try {
            c = w.localStorage.getItem("_gcl_ls")
        } catch (f) {
            return kb("TAGGING", 46), {
                error: 13
            }
        }
        try {
            if (c) {
                var d = JSON.parse(c);
                if (d && typeof d === "object") b = d;
                else return kb("TAGGING", 47), {
                    error: 12
                }
            }
        } catch (f) {
            return kb("TAGGING", 48), {
                error: 8
            }
        }
        if (b.schema !== "gcl") return kb("TAGGING", 49), {
            error: 4
        };
        if (b.version !== 1) return kb("TAGGING", 50), {
            error: 5
        };
        try {
            var e = dr(b);
            a && e && br({
                value: b,
                error: 0
            })
        } catch (f) {
            return kb("TAGGING", 48), {
                error: 8
            }
        }
        return {
            value: b,
            error: 0
        }
    }

    function dr(a) {
        if (!a || typeof a !== "object") return !1;
        if ("expires" in a && "value" in a) {
            var b;
            typeof a.expires === "number" ? b = a.expires : b = typeof a.expires === "string" ? Number(a.expires) : NaN;
            if (isNaN(b) || !(Date.now() <= b)) return a.value = null, a.error = 9, kb("TAGGING", 54), !0
        } else {
            for (var c = !1, d = m(Object.keys(a)), e = d.next(); !e.done; e = d.next()) c = dr(a[e.value]) || c;
            return c
        }
        return !1
    }

    function br(a) {
        if (a.error) return a.error;
        if (!a.value) return kb("TAGGING", 42), 2;
        var b = a.value,
            c;
        try {
            c = JSON.stringify(b)
        } catch (d) {
            return kb("TAGGING", 52), 6
        }
        try {
            w.localStorage.setItem("_gcl_ls", c)
        } catch (d) {
            return kb("TAGGING", 53), 7
        }
        return 0
    };
    var er = {
            Ag: "value",
            fb: "conversionCount",
            Bg: 1
        },
        fr = {
            Nh: 8,
            Sh: 9,
            Ag: "timeouts",
            fb: "timeouts",
            Bg: 0
        },
        gr = {
            Nh: 10,
            Sh: 11,
            Ag: "errors",
            fb: "errors",
            Bg: 0
        },
        hr = [er, fr, gr, {
            Nh: 12,
            Sh: 13,
            Ag: "eopCount",
            fb: "endOfPageCount",
            Bg: 0
        }];

    function ir(a) {
        var b;
        b = b === void 0 ? 1 : b;
        if (!jr(a)) return {};
        var c = kr(hr),
            d = c[a.fb];
        if (d === void 0 || d === -1) return c;
        var e = {},
            f = na(Object, "assign").call(Object, {}, c, (e[a.fb] = d + b, e));
        return lr(f) ? f : c
    }

    function kr(a) {
        var b;
        a: {
            var c = cr("gcl_ctr");
            if (c.error === 0 && c.value && typeof c.value === "object") {
                var d = c.value;
                try {
                    b = "value" in d && typeof d.value === "object" ? d.value : void 0;
                    break a
                } catch (p) {}
            }
            b = void 0
        }
        for (var e = b, f = {}, g = m(a), h = g.next(); !h.done; h = g.next()) {
            var l = h.value;
            if (e && jr(l)) {
                var n = e[l.Ag];
                n === void 0 || Number.isNaN(n) ? f[l.fb] = -1 : f[l.fb] = Number(n)
            } else f[l.fb] = -1
        }
        return f
    }

    function lr(a, b) {
        b = b || {};
        for (var c = Gb(), d = Yq(b, c, !0), e = {}, f = m(hr), g = f.next(); !g.done; g = f.next()) {
            var h = g.value,
                l = a[h.fb];
            l !== void 0 && l !== -1 && (e[h.Ag] = l)
        }
        e.creationTimeMs = c;
        return $q("gcl_ctr", {
            value: e,
            expires: Number(d.expires)
        }) === 0 ? !0 : !1
    }

    function jr(a) {
        return Pl(["ad_storage", "ad_user_data"]) ? !a.Sh || Wa(a.Sh) : !1
    }

    function mr(a) {
        return Pl(["ad_storage", "ad_user_data"]) ? !a.Nh || Wa(a.Nh) : !1
    };
    var nr = {
        N: {
            Tp: 0,
            Uj: 1,
            Kg: 2,
            jk: 3,
            Xh: 4,
            hk: 5,
            ik: 6,
            kk: 7,
            Yh: 8,
            Dl: 9,
            Cl: 10,
            yi: 11,
            El: 12,
            ph: 13,
            Nl: 14,
            eg: 15,
            Rp: 16,
            Ke: 17,
            Ui: 18,
            Vi: 19,
            Wi: 20,
            Mm: 21,
            Xi: 22,
            ai: 23,
            uk: 24
        }
    };
    nr.N[nr.N.Tp] = "RESERVED_ZERO";
    nr.N[nr.N.Uj] = "ADS_CONVERSION_HIT";
    nr.N[nr.N.Kg] = "CONTAINER_EXECUTE_START";
    nr.N[nr.N.jk] = "CONTAINER_SETUP_END";
    nr.N[nr.N.Xh] = "CONTAINER_SETUP_START";
    nr.N[nr.N.hk] = "CONTAINER_BLOCKING_END";
    nr.N[nr.N.ik] = "CONTAINER_EXECUTE_END";
    nr.N[nr.N.kk] = "CONTAINER_YIELD_END";
    nr.N[nr.N.Yh] = "CONTAINER_YIELD_START";
    nr.N[nr.N.Dl] = "EVENT_EXECUTE_END";
    nr.N[nr.N.Cl] = "EVENT_EVALUATION_END";
    nr.N[nr.N.yi] = "EVENT_EVALUATION_START";
    nr.N[nr.N.El] = "EVENT_SETUP_END";
    nr.N[nr.N.ph] = "EVENT_SETUP_START";
    nr.N[nr.N.Nl] = "GA4_CONVERSION_HIT";
    nr.N[nr.N.eg] = "PAGE_LOAD";
    nr.N[nr.N.Rp] = "PAGEVIEW";
    nr.N[nr.N.Ke] = "SNIPPET_LOAD";
    nr.N[nr.N.Ui] = "TAG_CALLBACK_ERROR";
    nr.N[nr.N.Vi] = "TAG_CALLBACK_FAILURE";
    nr.N[nr.N.Wi] = "TAG_CALLBACK_SUCCESS";
    nr.N[nr.N.Mm] = "TAG_EXECUTE_END";
    nr.N[nr.N.Xi] = "TAG_EXECUTE_START";
    nr.N[nr.N.ai] = "CUSTOM_PERFORMANCE_START";
    nr.N[nr.N.uk] = "CUSTOM_PERFORMANCE_END";
    var or = [],
        pr = {},
        qr = {};

    function rr(a) {
        if (Wa(20) && or.includes(a)) {
            var b;
            (b = hd()) == null || b.mark(a + "-" + nr.N.ai + "-" + (qr[a] || 0))
        }
    }

    function sr(a) {
        if (Wa(20) && or.includes(a)) {
            var b = a + "-" + nr.N.uk + "-" + (qr[a] || 0),
                c = {
                    start: a + "-" + nr.N.ai + "-" + (qr[a] || 0),
                    end: b
                },
                d;
            (d = hd()) == null || d.mark(b);
            var e, f, g = (f = (e = hd()) == null ? void 0 : e.measure(b, c)) == null ? void 0 : f.duration;
            g !== void 0 && (qr[a] = (qr[a] || 0) + 1, pr[a] = g + (pr[a] || 0))
        }
    };
    var tr = ["3", "4"];

    function ur(a) {
        return a.origin !== "null"
    };

    function vr(a, b, c, d) {
        try {
            rr("3");
            var e;
            return (e = wr(function(f) {
                return f === a
            }, b, c, d)[a]) != null ? e : []
        } finally {
            sr("3")
        }
    }

    function wr(a, b, c, d) {
        var e;
        if (xr(d)) {
            for (var f = {}, g = String(b || yr()).split(";"), h = 0; h < g.length; h++) {
                var l = g[h].split("="),
                    n = l[0].trim();
                if (n && a(n)) {
                    var p = l.slice(1).join("=").trim();
                    p && c && (p = decodeURIComponent(p));
                    var q = void 0,
                        r = void 0;
                    ((q = f)[r = n] || (q[r] = [])).push(p)
                }
            }
            e = f
        } else e = {};
        return e
    }

    function zr(a, b, c, d, e) {
        if (xr(e)) {
            var f = Ar(a, d, e);
            if (f.length === 1) return f[0];
            if (f.length !== 0) {
                f = Br(f, function(g) {
                    return g.Hq
                }, b);
                if (f.length === 1) return f[0];
                f = Br(f, function(g) {
                    return g.Ir
                }, c);
                return f[0]
            }
        }
    }

    function Cr(a, b, c, d) {
        var e = yr(),
            f = window;
        ur(f) && (f.document.cookie = a);
        var g = yr();
        return e !== g || c !== void 0 && vr(b, g, !1, d).indexOf(c) >= 0
    }

    function Dr(a, b, c, d) {
        function e(x, y, A) {
            if (A == null) return delete h[y], x;
            h[y] = A;
            return x + "; " + y + "=" + A
        }

        function f(x, y) {
            if (y == null) return x;
            h[y] = !0;
            return x + "; " + y
        }
        if (!xr(c.yc)) return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Er(b), g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var l;
        c.expires instanceof Date ? l = c.expires.toUTCString() : c.expires != null && (l = "" + c.expires);
        g = e(g, "expires", l);
        g = e(g, "max-age", c.Cr);
        g = e(g, "samesite", c.Wr);
        c.secure &&
            (g = f(g, "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = Fr(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
                var t = p[u] !== "none" ? p[u] : void 0,
                    v = e(g, "domain", t);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (x) {
                    q = x;
                    continue
                }
                r = !0;
                if (!Gr(t, c.path) && Cr(v, a, b, c.yc)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return Gr(n, c.path) ? 1 : Cr(g, a, b, c.yc) ? 0 : 1
    }

    function Hr(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        rr("2");
        var d = Dr(a, b, c);
        sr("2");
        return d
    }

    function Br(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                l = b(h);
            l === c ? d.push(h) : f === void 0 || l < f ? (e = [h], f = l) : l === f && e.push(h)
        }
        return d.length > 0 ? d : e
    }

    function Ar(a, b, c) {
        for (var d = [], e = vr(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || !h || b.indexOf(h) !== -1) {
                var l = g.shift();
                if (l) {
                    var n = l.split("-");
                    d.push({
                        zq: e[f],
                        Aq: g.join("."),
                        Hq: Number(n[0]) || 1,
                        Ir: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }

    function Er(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var Ir = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Jr = /(^|\.)doubleclick\.net$/i;

    function Gr(a, b) {
        return a !== void 0 && (Jr.test(window.document.location.hostname) || b === "/" && Ir.test(a))
    }

    function Kr(a) {
        if (!a) return 1;
        var b = a;
        Wa(5) && a === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length
    }

    function Lr(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function Mr(a, b) {
        var c = "" + Kr(a),
            d = Lr(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var yr = function() {
            return ur(window) ? window.document.cookie : ""
        },
        xr = function(a) {
            return a && Wa(6) ? (Array.isArray(a) ? a : [a]).every(function(b) {
                return Rl(b) && Pl(b)
            }) : !0
        },
        Fr = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Jr.test(e) || Ir.test(e) || a.push("none");
            return a
        };

    function Nr(a) {
        var b = Math.round(Math.random() * 2147483647);
        return a ? String(b ^ bi(a) & 2147483647) : String(b)
    }

    function Or(a) {
        return [Nr(a), Math.round(Gb() / 1E3)].join(".")
    }

    function Pr(a, b, c, d, e) {
        var f = Kr(b),
            g;
        return (g = zr(a, f, Lr(c), d, e)) == null ? void 0 : g.Aq
    };
    var Qr;

    function Rr() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }

        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = Sr,
            d = Tr,
            e = Ur();
        if (!e.init) {
            Sc(z, "mousedown", a);
            Sc(z, "keyup", a);
            Sc(z, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            };
            e.init = !0
        }
    }

    function Vr(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        Ur().decorators.push(f)
    }

    function Wr(a, b, c) {
        for (var d = Ur().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
                h;
            if (h = !c || g.forms) a: {
                var l = g.domains,
                    n = a,
                    p = !!g.sameHost;
                if (l && (p || n !== z.location.hostname))
                    for (var q = 0; q < l.length; q++)
                        if (l[q] instanceof RegExp) {
                            if (l[q].test(n)) {
                                h = !0;
                                break a
                            }
                        } else if (n.indexOf(l[q]) >= 0 || p && l[q].indexOf(n) >= 0) {
                    h = !0;
                    break a
                }
                h = !1
            }
            if (h) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && Jb(e, g.callback())
            }
        }
        return e
    }

    function Ur() {
        var a = Fc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Xr = /(.*?)\*(.*?)\*(.*)/,
        Yr = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Zr = /^(?:www\.|m\.|amp\.)+/,
        $r = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function as(a) {
        var b = $r.exec(a);
        if (b) return {
            Fj: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function bs(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    function cs(a, b) {
        var c = [Bc.userAgent, (new Date).getTimezoneOffset(), Bc.userLanguage || Bc.language, Math.floor(Gb() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = Qr)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, h = 0; h < 8; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Qr = d;
        for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ Qr[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }

    function ds(a) {
        return function(b) {
            var c = pj(w.location.href),
                d = c.search.replace("?", ""),
                e = gj(d, "_gl", !1, !0) || "";
            b.query = es(e) || {};
            var f = jj(c, "fragment"),
                g;
            var h = -1;
            if (Lb(f, "_gl=")) h = 4;
            else {
                var l = f.indexOf("&_gl=");
                l > 0 && (h = l + 3 + 2)
            }
            if (h < 0) g = void 0;
            else {
                var n = f.indexOf("&", h);
                g = n < 0 ? f.substring(h) : f.substring(h, n)
            }
            b.fragment = es(g || "") || {};
            a && fs(c, d, f)
        }
    }

    function gs(a, b) {
        var c = bs(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    function fs(a, b, c) {
        function d(g, h) {
            var l = gs("_gl", g);
            l.length && (l = h + l);
            return l
        }
        if (Ac && Ac.replaceState) {
            var e = bs("_gl");
            if (e.test(b) || e.test(c)) {
                var f = jj(a, "path");
                b = d(b, "?");
                c = d(c, "#");
                Ac.replaceState({}, "", "" + f + b + c)
            }
        }
    }

    function hs(a, b) {
        var c = ds(!!b),
            d = Ur();
        d.data || (d.data = {
            query: {},
            fragment: {}
        }, c(d.data));
        var e = {},
            f = d.data;
        f && (Jb(e, f.query), a && Jb(e, f.fragment));
        return e
    }
    var es = function(a) {
        try {
            var b = is(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = ib(d[e + 1]);
                    c[f] = g
                }
                kb("TAGGING", 6);
                return c
            }
        } catch (h) {
            kb("TAGGING", 8)
        }
    };

    function is(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = Xr.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = ij(d) || ""
                }
                c = void 0
            }
            var g = c;
            if (g && g[1] === "1") {
                var h = g[3],
                    l;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === cs(h, p)) {
                            l = !0;
                            break a
                        } l = !1
                }
                if (l) return h;
                kb("TAGGING", 7)
            }
        }
    }

    function js(a, b, c, d, e) {
        function f(p) {
            p = gs(a, p);
            var q = p.charAt(p.length - 1);
            p && q !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = as(c);
        if (!g) return "";
        var h = g.query || "",
            l = g.fragment || "",
            n = a + "=" + b;
        d ? l.substring(1).length !== 0 && e || (l = "#" + f(l.substring(1))) : h = "?" + f(h.substring(1));
        return "" + g.Fj + h + l
    }

    function ks(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var u in n)
                    if (n.hasOwnProperty(u)) {
                        r = !0;
                        break a
                    } r = !1
            }
            if (r) {
                var t, v = [],
                    x;
                for (x in n)
                    if (n.hasOwnProperty(x)) {
                        var y = n[x];
                        y !== void 0 && y === y && y !== null && y.toString() !== "[object Object]" && (v.push(x), v.push(hb(String(y))))
                    } var A = v.join("*");
                t = ["1", cs(A), A].join("*");
                d ? (Wa(3) || Wa(1) || !p) && ls("_gl", t, a, p, q) : ms("_gl", t, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = Wr(b, 1, d),
            f = Wr(b, 2, d),
            g = Wr(b, 4, d),
            h = Wr(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        Wa(1) && c(g, !0, !0);
        for (var l in h) h.hasOwnProperty(l) &&
            ns(l, h[l], a)
    }

    function ns(a, b, c) {
        c.tagName.toLowerCase() === "a" ? ms(a, b, c) : c.tagName.toLowerCase() === "form" && ls(a, b, c)
    }

    function ms(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !Wa(4) || d)) {
                var h = w.location.href,
                    l = as(c.href),
                    n = as(h);
                g = !(l && n && l.Fj === n.Fj && l.query === n.query && l.fragment)
            }
            f = g
        }
        if (f) {
            var p = js(a, b, c.href, d, e);
            qc.test(p) && (c.href = p)
        }
    }

    function ls(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c) {
            var f = c.getAttribute("action") || "";
            if (f) {
                var g = (c.method || "").toLowerCase();
                if (g !== "get" || d) {
                    if (g === "get" || g === "post") {
                        var h = js(a, b, f, d, e);
                        qc.test(h) && (c.action = h)
                    }
                } else {
                    for (var l = c.childNodes || [], n = !1, p = 0; p < l.length; p++) {
                        var q = l[p];
                        if (q.name === a) {
                            q.setAttribute("value", b);
                            n = !0;
                            break
                        }
                    }
                    if (!n) {
                        var r = z.createElement("input");
                        r.setAttribute("type", "hidden");
                        r.setAttribute("name", a);
                        r.setAttribute("value", b);
                        c.appendChild(r)
                    }
                }
            }
        }
    }

    function Sr(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || ks(e, e.hostname)
            }
        } catch (g) {}
    }

    function Tr(a) {
        try {
            var b = a.getAttribute("action");
            if (b) {
                var c = jj(pj(b), "host");
                ks(a, c)
            }
        } catch (d) {}
    }

    function os(a, b, c, d) {
        Rr();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        Vr(a, b, e, d, !1);
        e === 2 && kb("TAGGING", 23);
        d && kb("TAGGING", 24)
    }

    function ps(a, b) {
        Rr();
        Vr(a, [lj(w.location, "host", !0)], b, !0, !0)
    }

    function qs() {
        var a = z.location.hostname,
            b = Yr.exec(z.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                g = f[1];
            e = g === "s" ? ij(f[2]) || "" : ij(g) || ""
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(Zr, ""),
            l = e.replace(Zr, "");
        return h === l || Mb(h, "." + l)
    }

    function rs(a, b) {
        return a === !1 ? !1 : a || b || qs()
    };
    var ss = ["1"],
        ts = {},
        us = {};

    function vs(a, b) {
        b = b === void 0 ? !0 : b;
        var c = ws(a.prefix);
        if (ts[c]) xs(a);
        else if (ys(c, a.path, a.domain)) {
            var d = us[ws(a.prefix)] || {
                id: void 0,
                Ph: void 0
            };
            b && zs(a, d.id, d.Ph);
            xs(a)
        } else {
            var e = rj("auiddc");
            if (e) kb("TAGGING", 17), ts[c] = e;
            else if (b) {
                var f = ws(a.prefix),
                    g = Or();
                As(f, g, a);
                ys(c, a.path, a.domain);
                xs(a, !0)
            }
        }
    }

    function xs(a, b) {
        if ((b === void 0 ? 0 : b) && jr(er)) {
            var c = ar(!1);
            c.error !== 0 ? kb("TAGGING", 38) : c.value ? "gcl_ctr" in c.value ? (delete c.value.gcl_ctr, br(c) !== 0 && kb("TAGGING", 41)) : kb("TAGGING", 40) : kb("TAGGING", 39)
        }
        if (mr(er) && kr([er])[er.fb] === -1) {
            for (var d = {}, e = (d[er.fb] = 0, d), f = m(hr), g = f.next(); !g.done; g = f.next()) {
                var h = g.value;
                h !== er && mr(h) && (e[h.fb] = 0)
            }
            lr(e, a)
        }
    }

    function zs(a, b, c) {
        var d = ws(a.prefix),
            e = ts[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Gb() / 1E3)));
                    As(d, h, a, g * 1E3)
                }
            }
        }
    }

    function As(a, b, c, d) {
        var e;
        e = ["1", Mr(c.domain, c.path), b].join(".");
        var f = Yq(c, d);
        f.yc = Bs();
        Hr(a, e, f)
    }

    function ys(a, b, c) {
        var d = Pr(a, b, c, ss, Bs());
        if (!d) return !1;
        Cs(a, d);
        return !0
    }

    function Cs(a, b) {
        var c = b.split(".");
        c.length === 5 ? (ts[a] = c.slice(0, 2).join("."), us[a] = {
            id: c.slice(2, 4).join("."),
            Ph: Number(c[4]) || 0
        }) : c.length === 3 ? us[a] = {
            id: c.slice(0, 2).join("."),
            Ph: Number(c[2]) || 0
        } : ts[a] = b
    }

    function ws(a) {
        return (a || "_gcl") + "_au"
    }

    function Ds(a) {
        function b() {
            Pl(c) && a()
        }
        var c = Bs();
        Vl(function() {
            b();
            Pl(c) || Wl(b, c)
        }, c)
    }

    function Es(a) {
        var b = hs(!0),
            c = ws(a.prefix);
        Ds(function() {
            var d = b[c];
            if (d) {
                Cs(c, d);
                var e = Number(ts[c].split(".")[1]) * 1E3;
                if (e) {
                    kb("TAGGING", 16);
                    var f = Yq(a, e);
                    f.yc = Bs();
                    var g = ["1", Mr(a.domain, a.path), d].join(".");
                    Hr(c, g, f)
                }
            }
        })
    }

    function Fs(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                h = Pr(a, e.path, e.domain, ss, Bs());
            h && (g[a] = h);
            return g
        };
        Ds(function() {
            os(f, b, c, d)
        })
    }

    function Bs() {
        return ["ad_storage", "ad_user_data"]
    };

    function Gs(a) {
        for (var b = [], c = z.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Xd: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    }

    function Hs(a, b) {
        var c = Gs(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].Xd] || (d[c[e].Xd] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    gclid: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].Xd].push(g)
            }
        }
        return d
    };
    var Is = {},
        Js = (Is.k = {
            fa: /^[\w-]+$/
        }, Is.b = {
            fa: /^[\w-]+$/,
            Ij: !0
        }, Is.i = {
            fa: /^[1-9]\d*$/
        }, Is.h = {
            fa: /^\d+$/
        }, Is.t = {
            fa: /^[1-9]\d*$/
        }, Is.d = {
            fa: /^[A-Za-z0-9_-]+$/
        }, Is.j = {
            fa: /^\d+$/
        }, Is.u = {
            fa: /^[1-9]\d*$/
        }, Is.l = {
            fa: /^[01]$/
        }, Is.o = {
            fa: /^[1-9]\d*$/
        }, Is.g = {
            fa: /^[01]$/
        }, Is.s = {
            fa: /^.+$/
        }, Is);
    var Ks = {},
        Os = (Ks[5] = {
            Uh: {
                2: Ls
            },
            xj: "2",
            Hh: ["k", "i", "b", "u"]
        }, Ks[4] = {
            Uh: {
                2: Ls,
                GCL: Ms
            },
            xj: "2",
            Hh: ["k", "i", "b"]
        }, Ks[2] = {
            Uh: {
                GS2: Ls,
                GS1: Ns
            },
            xj: "GS2",
            Hh: "sogtjlhd".split("")
        }, Ks);

    function Ps(a, b, c) {
        var d = Os[b];
        if (d) {
            var e = a.split(".")[0];
            c == null || c(e);
            if (e) {
                var f = d.Uh[e];
                if (f) return f(a, b)
            }
        }
    }

    function Ls(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = c[2];
            if (d.indexOf("$") === -1 && d.indexOf("%24") !== -1) try {
                d = decodeURIComponent(d)
            } catch (u) {}
            var e = {},
                f = Os[b];
            if (f) {
                for (var g = f.Hh, h = m(d.split("$")), l = h.next(); !l.done; l = h.next()) {
                    var n = l.value,
                        p = n[0];
                    if (g.indexOf(p) !== -1) try {
                        var q = decodeURIComponent(n.substring(1)),
                            r = Js[p];
                        r && (r.Ij ? (e[p] = e[p] || [], e[p].push(q)) : e[p] = q)
                    } catch (u) {}
                }
                return e
            }
        }
    }

    function Qs(a, b, c) {
        var d = Os[b];
        if (d) return [d.xj, c || "1", Rs(a, b)].join(".")
    }

    function Rs(a, b) {
        var c = Os[b];
        if (c) {
            for (var d = [], e = m(c.Hh), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    h = Js[g];
                if (h) {
                    var l = a[g];
                    if (l !== void 0)
                        if (h.Ij && Array.isArray(l))
                            for (var n = m(l), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
                        else d.push(encodeURIComponent("" + g + l))
                }
            }
            return d.join("$")
        }
    }

    function Ms(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return e.k = d, e.i = c, e.b = b, e
    }

    function Ns(a) {
        var b = a.split(".").slice(2);
        if (!(b.length < 5 || b.length > 7)) {
            var c = {};
            return c.s = b[0], c.o = b[1], c.g = b[2], c.t = b[3], c.j = b[4], c.l = b[5], c.h = b[6], c
        }
    };
    var Ss = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]],
        [2, "analytics_storage"]
    ]);

    function Ts(a, b, c) {
        if (Os[b]) {
            for (var d = [], e = vr(a, void 0, void 0, Ss.get(b)), f = m(e), g = f.next(); !g.done; g = f.next()) {
                var h = Ps(g.value, b, c);
                h && d.push(Us(h))
            }
            return d
        }
    }

    function Vs(a) {
        var b = Ws;
        if (Os[2]) {
            for (var c = {}, d = wr(a, void 0, void 0, Ss.get(2)), e = Object.keys(d).sort(), f = m(e), g = f.next(); !g.done; g = f.next())
                for (var h = g.value, l = m(d[h]), n = l.next(); !n.done; n = l.next()) {
                    var p = Ps(n.value, 2, b);
                    p && (c[h] || (c[h] = []), c[h].push(Us(p)))
                }
            return c
        }
    }

    function Xs(a, b, c, d, e) {
        d = d || {};
        var f = Mr(d.domain, d.path),
            g = Qs(b, c, f);
        if (!g) return 1;
        var h = Yq(d, e, void 0, Ss.get(c));
        return Hr(a, g, h)
    }

    function Ys(a, b) {
        var c = b.fa;
        return typeof c === "function" ? c(a) : c.test(a)
    }

    function Us(a) {
        for (var b = m(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                lg: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.lg = Js[e];
            d.lg ? d.lg.Ij ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(h) {
                    return Ys(h, g.lg)
                }
            }(d)) : void 0 : typeof f === "string" && Ys(f, d.lg) || (a[e] = void 0) : a[e] = void 0
        }
        return a
    };
    var Zs = function() {
        this.value = 0
    };
    Zs.prototype.set = function(a) {
        return this.value |= 1 << a
    };
    var $s = function(a, b) {
        b <= 0 || (a.value |= 1 << b - 1)
    };
    Zs.prototype.get = function() {
        return this.value
    };
    Zs.prototype.clear = function(a) {
        this.value &= ~(1 << a)
    };
    Zs.prototype.clearAll = function() {
        this.value = 0
    };
    Zs.prototype.equals = function(a) {
        return this.value === a.value
    };

    function at(a) {
        if (a) try {
            return new Uint8Array(atob(a.replace(/-/g, "+").replace(/_/g, "/")).split("").map(function(b) {
                return b.charCodeAt(0)
            }))
        } catch (b) {}
    }

    function bt(a, b) {
        var c = 0,
            d = 0,
            e, f = b;
        do {
            if (f >= a.length) return;
            e = a[f++];
            c |= (e & 127) << d;
            d += 7
        } while (e & 128);
        return [c, f]
    };

    function ct() {
        var a = String,
            b = w.location.hostname,
            c = w.location.pathname,
            d = b = Xb(b);
        d.split(".").length > 2 && (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
        b = d;
        c = Xb(c);
        var e = c.split(";")[0];
        e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
        return a(bi(("" + b + e).toLowerCase()))
    };
    var dt = {},
        et = (dt.gclid = !0, dt.dclid = !0, dt.gbraid = !0, dt.wbraid = !0, dt),
        ft = /^\w+$/,
        gt = /^[\w-]+$/,
        ht = {},
        it = (ht.aw = "_aw", ht.dc = "_dc", ht.gf = "_gf", ht.gp = "_gp", ht.gs = "_gs", ht.ha = "_ha", ht.ag = "_ag", ht.gb = "_gb", ht),
        jt = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/,
        kt = /^www\.googleadservices\.com$/;

    function lt() {
        return ["ad_storage", "ad_user_data"]
    }

    function mt(a) {
        return !Wa(6) || Pl(a)
    }

    function nt(a, b) {
        function c() {
            var d = mt(b);
            d && a();
            return d
        }
        Vl(function() {
            c() || Wl(c, b)
        }, b)
    }

    function ot(a) {
        return pt(a).map(function(b) {
            return b.gclid
        })
    }

    function qt(a) {
        return rt(a).filter(function(b) {
            return b.gclid
        }).map(function(b) {
            return b.gclid
        })
    }

    function rt(a) {
        var b = st(a.prefix),
            c = tt("gb", b),
            d = tt("ag", b);
        if (!d || !c) return [];
        var e = function(h) {
                return function(l) {
                    l.type = h;
                    return l
                }
            },
            f = pt(c).map(e("gb")),
            g = ut(d).map(e("ag"));
        return f.concat(g).sort(function(h, l) {
            return l.timestamp - h.timestamp
        })
    }

    function vt(a, b, c, d, e) {
        var f = vb(a, function(g) {
            return g.gclid === b
        });
        f ? (f.timestamp < c && (f.timestamp = c, f.Wc = e), f.labels = wt(f.labels || [], d || [])) : a.push({
            version: "2",
            gclid: b,
            timestamp: c,
            labels: d,
            Wc: e
        })
    }

    function ut(a) {
        for (var b = Ts(a, 5) || [], c = [], d = m(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                h = xt(f);
            h && vt(c, g.k, h, g.b || [], f.u)
        }
        return c.sort(function(l, n) {
            return n.timestamp - l.timestamp
        })
    }

    function pt(a) {
        for (var b = [], c = vr(a, z.cookie, void 0, lt()), d = m(c), e = d.next(); !e.done; e = d.next()) {
            var f = zt(e.value);
            f != null && (f.Wc = void 0, f.za = new Zs, f.Za = [1], At(b, f))
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return Bt(b)
    }

    function Ct(a, b) {
        for (var c = [], d = m(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            c.includes(f) || c.push(f)
        }
        for (var g = m(b), h = g.next(); !h.done; h = g.next()) {
            var l = h.value;
            c.includes(l) || c.push(l)
        }
        return c
    }

    function At(a, b, c) {
        c = c === void 0 ? !1 : c;
        for (var d, e, f = m(a), g = f.next(); !g.done; g = f.next()) {
            var h = g.value;
            if (h.gclid === b.gclid) {
                d = h;
                break
            }
            h.za && b.za && h.za.equals(b.za) && (e = h)
        }
        if (d) {
            var l, n, p = (l = d.za) != null ? l : new Zs,
                q = (n = b.za) != null ? n : new Zs;
            p.value |= q.value;
            d.za = p;
            d.timestamp < b.timestamp && (d.timestamp = b.timestamp, d.Wc = b.Wc);
            d.labels = Ct(d.labels || [], b.labels || []);
            d.Za = Ct(d.Za || [], b.Za || [])
        } else c && e ? na(Object, "assign").call(Object, e, b) : a.push(b)
    }

    function Dt(a) {
        if (!a) return new Zs;
        var b = new Zs;
        if (a === 1) return $s(b, 2), $s(b, 3), b;
        $s(b, a);
        return b
    }

    function Et() {
        var a = cr("gclid");
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return null;
            var c = b.value,
                d = c.value;
            if (!d || !d.match(gt)) return null;
            var e = c.linkDecorationSource,
                f = c.linkDecorationSources,
                g = new Zs;
            typeof e === "number" ? g = Dt(e) : typeof f === "number" && (g.value = f);
            return {
                version: "",
                gclid: d,
                timestamp: Number(c.creationTimeMs) || 0,
                labels: [],
                za: g,
                Za: [2]
            }
        } catch (h) {
            return null
        }
    }

    function Ft() {
        var a = cr("gcl_aw");
        if (a.error !== 0) return null;
        try {
            return a.value.reduce(function(b, c) {
                if (!c.value || typeof c.value !== "object") return b;
                var d = c.value,
                    e = d.value;
                if (!e || !e.match(gt)) return b;
                var f = new Zs,
                    g = d.linkDecorationSources;
                typeof g === "number" && (f.value = g);
                b.push({
                    version: "",
                    gclid: e,
                    timestamp: Number(d.creationTimeMs) || 0,
                    expires: Number(c.expires) || 0,
                    labels: [],
                    za: f,
                    Za: [2]
                });
                return b
            }, [])
        } catch (b) {
            return null
        }
    }

    function Gt(a) {
        for (var b = [], c = vr(a, z.cookie, void 0, lt()), d = m(c), e = d.next(); !e.done; e = d.next()) {
            var f = zt(e.value);
            f != null && (f.Wc = void 0, f.za = new Zs, f.Za = [1], At(b, f))
        }
        var g = Et();
        g && (g.Wc = void 0, g.Za = g.Za || [2], At(b, g));
        if (Wa(15)) {
            var h = Ft();
            if (h)
                for (var l = m(h), n = l.next(); !n.done; n = l.next()) {
                    var p = n.value;
                    p.Wc = void 0;
                    p.Za = p.Za || [2];
                    At(b, p)
                }
        }
        b.sort(function(q, r) {
            return r.timestamp - q.timestamp
        });
        return Bt(b)
    }

    function wt(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function st(a) {
        return a && typeof a === "string" && a.match(ft) ? a : "_gcl"
    }

    function Ht(a, b) {
        if (a) {
            var c = {
                value: a,
                za: new Zs
            };
            $s(c.za, b);
            return c
        }
    }

    function It(a, b, c) {
        var d = pj(a),
            e = jj(d, "query", !1, void 0, "gclsrc"),
            f = Ht(jj(d, "query", !1, void 0, "gclid"), c ? 4 : 2);
        if (b && (!f || !e)) {
            var g = d.hash.replace("#", "");
            f || (f = Ht(gj(g, "gclid", !1), 3));
            e || (e = gj(g, "gclsrc", !1))
        }
        return f && (e === void 0 || e === "aw" || e === "aw.ds" || Wa(19) && e === "aw.dv") ? [f] : []
    }

    function Jt(a, b) {
        var c = pj(a),
            d = jj(c, "query", !1, void 0, "gclid"),
            e = jj(c, "query", !1, void 0, "gclsrc"),
            f = jj(c, "query", !1, void 0, "wbraid");
        f = Vb(f);
        var g = jj(c, "query", !1, void 0, "gbraid"),
            h = jj(c, "query", !1, void 0, "gad_source"),
            l = jj(c, "query", !1, void 0, "dclid");
        if (b && !(d && e && f && g)) {
            var n = c.hash.replace("#", "");
            d = d || gj(n, "gclid", !1);
            e = e || gj(n, "gclsrc", !1);
            f = f || gj(n, "wbraid", !1);
            g = g || gj(n, "gbraid", !1);
            h = h || gj(n, "gad_source", !1)
        }
        return Kt(d, e, l, f, g, h)
    }

    function Lt() {
        return Jt(w.location.href, !0)
    }

    function Kt(a, b, c, d, e, f) {
        var g = {},
            h = function(l, n) {
                g[n] || (g[n] = []);
                g[n].push(l)
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(gt)) switch (b) {
            case void 0:
                h(a, "aw");
                break;
            case "aw.ds":
                h(a, "aw");
                h(a, "dc");
                break;
            case "aw.dv":
                Wa(19) && (h(a, "aw"), h(a, "dc"));
                break;
            case "ds":
                h(a, "dc");
                break;
            case "3p.ds":
                h(a, "dc");
                break;
            case "gf":
                h(a, "gf");
                break;
            case "ha":
                h(a, "ha")
        }
        c && h(c, "dc");
        d !== void 0 && gt.test(d) && (g.wbraid = d, h(d, "gb"));
        e !== void 0 && gt.test(e) && (g.gbraid = e, h(e, "ag"));
        f !== void 0 && gt.test(f) && (g.gad_source =
            f, h(f, "gs"));
        return g
    }

    function Mt(a) {
        for (var b = Lt(), c = !0, d = m(Object.keys(b)), e = d.next(); !e.done; e = d.next())
            if (b[e.value] !== void 0) {
                c = !1;
                break
            } c && (b = Jt(w.document.referrer, !1), b.gad_source = void 0);
        Nt(b, !1, a)
    }

    function Ot(a) {
        Mt(a);
        var b = It(w.location.href, !0, !1);
        b.length || (b = It(w.document.referrer, !1, !0));
        a = a || {};
        Pt(a);
        if (b.length) {
            var c = b[0],
                d = Gb(),
                e = Yq(a, d, !0),
                f = lt(),
                g = function() {
                    mt(f) && e.expires !== void 0 && $q("gclid", {
                        value: {
                            value: c.value,
                            creationTimeMs: d,
                            linkDecorationSources: c.za.get()
                        },
                        expires: Number(e.expires)
                    })
                };
            Vl(function() {
                g();
                mt(f) || Wl(g, f)
            }, f)
        }
    }

    function Pt(a) {
        var b;
        if (b = Wa(16)) {
            var c = Qt();
            b = jt.test(c) || kt.test(c) || Rt()
        }
        if (b) {
            var d;
            a: {
                for (var e = pj(w.location.href), f = hj(jj(e, "query")), g = m(Object.keys(f)), h = g.next(); !h.done; h = g.next()) {
                    var l = h.value;
                    if (!et[l]) {
                        var n = f[l][0] || "",
                            p;
                        if (!n || n.length < 50 || n.length > 200) p = !1;
                        else {
                            var q = at(n),
                                r;
                            if (q) c: {
                                var u = q;
                                if (u && u.length !== 0) {
                                    var t = 0;
                                    try {
                                        for (var v = 10; t < u.length && !(v-- <= 0);) {
                                            var x = bt(u, t);
                                            if (x === void 0) break;
                                            var y = m(x),
                                                A = y.next().value,
                                                C = y.next().value,
                                                D = A,
                                                H = C,
                                                J = D & 7;
                                            if (D >> 3 === 16382) {
                                                if (J !== 0) break;
                                                var O = bt(u, H);
                                                if (O === void 0) break;
                                                r = m(O).next().value === 1;
                                                break c
                                            }
                                            var aa;
                                            d: {
                                                var W = void 0,
                                                    N = u,
                                                    S = H;
                                                switch (J) {
                                                    case 0:
                                                        aa = (W = bt(N, S)) == null ? void 0 : W[1];
                                                        break d;
                                                    case 1:
                                                        aa = S + 8;
                                                        break d;
                                                    case 2:
                                                        var la = bt(N, S);
                                                        if (la === void 0) break;
                                                        var ja = m(la),
                                                            V = ja.next().value;
                                                        aa = ja.next().value + V;
                                                        break d;
                                                    case 5:
                                                        aa = S + 4;
                                                        break d
                                                }
                                                aa = void 0
                                            }
                                            if (aa === void 0 || aa > u.length || aa <= t) break;
                                            t = aa
                                        }
                                    } catch (ha) {}
                                }
                                r = !1
                            }
                            else r = !1;
                            p = r
                        }
                        if (p) {
                            d = n;
                            break a
                        }
                    }
                }
                d = void 0
            }
            var U = d;
            U && St(U, 7, a)
        }
    }

    function St(a, b, c) {
        c = c || {};
        var d = Gb(),
            e = Yq(c, d, !0),
            f = lt(),
            g = function() {
                if (mt(f) && e.expires !== void 0) {
                    var h = Ft() || [];
                    At(h, {
                        version: "",
                        gclid: a,
                        timestamp: d,
                        expires: Number(e.expires),
                        za: Dt(b)
                    }, !0);
                    $q("gcl_aw", h.map(function(l) {
                        return {
                            value: {
                                value: l.gclid,
                                creationTimeMs: l.timestamp,
                                linkDecorationSources: l.za ? l.za.get() : 0
                            },
                            expires: Number(l.expires)
                        }
                    }))
                }
            };
        Vl(function() {
            mt(f) ? g() : Wl(g, f)
        }, f)
    }

    function Nt(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = st(c.prefix),
            g = d || Gb(),
            h = Math.round(g / 1E3),
            l = lt(),
            n = !1,
            p = !1,
            q = Wa(21),
            r = function() {
                if (mt(l)) {
                    var u = Yq(c, g, !0);
                    u.yc = l;
                    for (var t = function(W, N) {
                            var S = tt(W, f);
                            S && (Hr(S, N, u), W !== "gb" && (n = !0))
                        }, v = function(W) {
                            var N = ["GCL", h, W];
                            e.length > 0 && N.push(e.join("."));
                            return N.join(".")
                        }, x = m(["aw", "dc", "gf", "ha", "gp"]), y = x.next(); !y.done; y = x.next()) {
                        var A = y.value;
                        a[A] && t(A, v(a[A][0]))
                    }
                    if ((!n || q) && a.gb) {
                        var C = a.gb[0],
                            D = tt("gb", f);
                        !b && pt(D).some(function(W) {
                            return W.gclid ===
                                C && W.labels && W.labels.length > 0
                        }) || t("gb", v(C))
                    }
                }
                if (!p && a.gbraid && mt("ad_storage") && (p = !0, !n || q)) {
                    var H = a.gbraid,
                        J = tt("ag", f);
                    if (b || !ut(J).some(function(W) {
                            return W.gclid === H && W.labels && W.labels.length > 0
                        })) {
                        var O = {},
                            aa = (O.k = H, O.i = "" + h, O.b = e, O);
                        Xs(J, aa, 5, c, g)
                    }
                }
                Tt(a, f, g, c)
            };
        Vl(function() {
            r();
            mt(l) || Wl(r, l)
        }, l)
    }

    function Tt(a, b, c, d) {
        if (a.gad_source !== void 0 && mt("ad_storage")) {
            var e = gd();
            if (e !== "r" && e !== "h") {
                var f = a.gad_source,
                    g = tt("gs", b);
                if (g) {
                    var h = Math.floor((Gb() - (fd() || 0)) / 1E3),
                        l, n = ct(),
                        p = {};
                    l = (p.k = f, p.i = "" + h, p.u = n, p);
                    Xs(g, l, 5, d, c)
                }
            }
        }
    }

    function Ut(a, b) {
        var c = hs(!0);
        nt(function() {
            for (var d = st(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (it[f] !== void 0) {
                    var g = tt(f, d),
                        h = c[g];
                    if (h) {
                        var l = Math.min(Vt(h), Gb()),
                            n;
                        b: {
                            for (var p = l, q = vr(g, z.cookie, void 0, lt()), r = 0; r < q.length; ++r)
                                if (Vt(q[r]) > p) {
                                    n = !0;
                                    break b
                                } n = !1
                        }
                        if (!n) {
                            var u = Yq(b, l, !0);
                            u.yc = lt();
                            Hr(g, h, u)
                        }
                    }
                }
            }
            Nt(Kt(c.gclid, c.gclsrc), !1, b)
        }, lt())
    }

    function Wt(a) {
        var b = ["ag"],
            c = hs(!0),
            d = st(a.prefix);
        nt(function() {
            for (var e = 0; e < b.length; ++e) {
                var f = tt(b[e], d);
                if (f) {
                    var g = c[f];
                    if (g) {
                        var h = Ps(g, 5);
                        if (h) {
                            var l = xt(h);
                            l || (l = Gb());
                            var n;
                            a: {
                                for (var p = l, q = Ts(f, 5), r = 0; r < q.length; ++r)
                                    if (xt(q[r]) > p) {
                                        n = !0;
                                        break a
                                    } n = !1
                            }
                            if (n) break;
                            h.i = "" + Math.round(l / 1E3);
                            Xs(f, h, 5, a, l)
                        }
                    }
                }
            }
        }, ["ad_storage"])
    }

    function tt(a, b) {
        var c = it[a];
        if (c !== void 0) return b + c
    }

    function Vt(a) {
        return Xt(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function xt(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }

    function zt(a) {
        var b = Xt(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            gclid: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }

    function Xt(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !gt.test(a[2]) ? [] : a
    }

    function Yt(a, b, c, d, e) {
        if (Array.isArray(b) && ur(w)) {
            var f = st(e),
                g = function() {
                    for (var h = {}, l = 0; l < a.length; ++l) {
                        var n = tt(a[l], f);
                        if (n) {
                            var p = vr(n, z.cookie, void 0, lt());
                            p.length && (h[n] = p.sort()[p.length - 1])
                        }
                    }
                    return h
                };
            nt(function() {
                os(g, b, c, d)
            }, lt())
        }
    }

    function Zt(a, b, c, d) {
        if (Array.isArray(a) && ur(w)) {
            var e = ["ag"],
                f = st(d),
                g = function() {
                    for (var h = {}, l = 0; l < e.length; ++l) {
                        var n = tt(e[l], f);
                        if (!n) return {};
                        var p = Ts(n, 5);
                        if (p.length) {
                            var q = p.sort(function(r, u) {
                                return xt(u) - xt(r)
                            })[0];
                            h[n] = Qs(q, 5)
                        }
                    }
                    return h
                };
            nt(function() {
                os(g, a, b, c)
            }, ["ad_storage"])
        }
    }

    function Bt(a) {
        return a.filter(function(b) {
            return gt.test(b.gclid)
        })
    }

    function $t(a, b) {
        if (ur(w)) {
            for (var c = st(b.prefix), d = {}, e = 0; e < a.length; e++) it[a[e]] && (d[a[e]] = it[a[e]]);
            nt(function() {
                zb(d, function(f, g) {
                    var h = vr(c + g, z.cookie, void 0, lt());
                    h.sort(function(u, t) {
                        return Vt(t) - Vt(u)
                    });
                    if (h.length) {
                        var l = h[0],
                            n = Vt(l),
                            p = Xt(l.split(".")).length !== 0 ? l.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = Xt(l.split(".")).length !== 0 ? l.split(".")[2] : void 0;
                        q[f] = [r];
                        Nt(q, !0, b, n, p)
                    }
                })
            }, lt())
        }
    }

    function au(a) {
        var b = ["ag"],
            c = ["gbraid"];
        nt(function() {
            for (var d = st(a.prefix), e = 0; e < b.length; ++e) {
                var f = tt(b[e], d);
                if (!f) break;
                var g = Ts(f, 5);
                if (g.length) {
                    var h = g.sort(function(q, r) {
                            return xt(r) - xt(q)
                        })[0],
                        l = xt(h),
                        n = h.b,
                        p = {};
                    p[c[e]] = h.k;
                    Nt(p, !0, a, l, n)
                }
            }
        }, ["ad_storage"])
    }

    function bu(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }

    function cu(a) {
        function b(h, l, n) {
            n && (h[l] = n)
        }
        if (Sl()) {
            var c = Lt(),
                d;
            a.includes("gad_source") && (d = c.gad_source !== void 0 ? c.gad_source : hs(!1)._gs);
            if (bu(c, a) || d) {
                var e = {};
                b(e, "gclid", c.gclid);
                b(e, "dclid", c.dclid);
                b(e, "gclsrc", c.gclsrc);
                b(e, "wbraid", c.wbraid);
                b(e, "gbraid", c.gbraid);
                ps(function() {
                    return e
                }, 3);
                var f = {},
                    g = (f._up = "1", f);
                b(g, "_gs", d);
                ps(function() {
                    return g
                }, 1)
            }
        }
    }

    function Rt() {
        var a = pj(w.location.href);
        return jj(a, "query", !1, void 0, "gad_source")
    }

    function du(a) {
        if (!Wa(1)) return null;
        var b = hs(!0).gad_source;
        if (b != null) return w.location.hash = "", b;
        if (Wa(2)) {
            b = Rt();
            if (b != null) return b;
            var c = Lt();
            if (bu(c, a)) return "0"
        }
        return null
    }

    function eu(a) {
        var b = du(a);
        b != null && ps(function() {
            var c = {};
            return c.gad_source = b, c
        }, 4)
    }

    function fu(a, b, c) {
        var d = [];
        if (b.length === 0) return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                h = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[h] || d.push(g)) : a.push(1);
            e[h] = !0
        }
        return d
    }

    function gu(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!mt(lt())) return e;
        var f = pt(a),
            g = fu(e, f, b);
        if (g.length && !d)
            for (var h = m(g), l = h.next(); !l.done; l = h.next()) {
                var n = l.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1E3), n.gclid].concat(n.labels || [], [b]).join("."),
                    r = Yq(c, p, !0);
                r.yc = lt();
                Hr(a, q, r)
            }
        return e
    }

    function hu(a, b) {
        var c = [];
        b = b || {};
        var d = rt(b),
            e = fu(c, d, a);
        if (e.length)
            for (var f = m(e), g = f.next(); !g.done; g = f.next()) {
                var h = g.value,
                    l = st(b.prefix),
                    n = tt(h.type, l);
                if (!n) break;
                var p = h,
                    q = p.version,
                    r = p.gclid,
                    u = p.labels,
                    t = p.timestamp,
                    v = Math.round(t / 1E3);
                if (h.type === "ag") {
                    var x = {},
                        y = (x.k = r, x.i = "" + v, x.b = (u || []).concat([a]), x);
                    Xs(n, y, 5, b, t)
                } else if (h.type === "gb") {
                    var A = [q, v, r].concat(u || [], [a]).join("."),
                        C = Yq(b, t, !0);
                    C.yc = lt();
                    Hr(n, A, C)
                }
            }
        return c
    }

    function iu(a, b) {
        var c = st(b),
            d = tt(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? ut(d) : pt(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function ju(a) {
        for (var b = 0, c = m(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b
    }

    function ku(a) {
        var b = Math.max(iu("aw", a), ju(mt(lt()) ? Hs() : {})),
            c = Math.max(iu("gb", a), ju(mt(lt()) ? Hs("_gac_gb", !0) : {}));
        c = Math.max(c, iu("ag", a));
        return c > b
    }

    function Qt() {
        return z.referrer ? jj(pj(z.referrer), "host") : ""
    };

    function wu(a) {
        var b = window,
            c = b.webkit;
        delete b.webkit;
        a(b.webkit);
        b.webkit = c
    }

    function xu(a) {
        var b = {
            action: "gcl_setup"
        };
        if ("CWVWebViewMessage" in a.messageHandlers) return a.messageHandlers.CWVWebViewMessage.postMessage({
            command: "awb",
            payload: b
        }), !0;
        var c = a.messageHandlers.awb;
        return c ? (c.postMessage(b), !0) : !1
    };

    function yu() {
        return ["ad_storage", "ad_user_data"]
    }

    function zu(a) {
        if (P(38) && !km(gm.Z.rm) && "webkit" in window && window.webkit.messageHandlers) {
            var b = function() {
                try {
                    wu(function(c) {
                        c && ("CWVWebViewMessage" in c.messageHandlers || "awb" in c.messageHandlers) && (jm(gm.Z.rm, function(d) {
                            d.gclid && St(d.gclid, 5, a)
                        }), xu(c) || M(178))
                    })
                } catch (c) {
                    M(177)
                }
            };
            Vl(function() {
                mt(yu()) ? b() : Wl(b, yu())
            }, yu())
        }
    };
    var Au = ["https://www.google.com", "https://www.youtube.com", "https://m.youtube.com"];

    function Bu(a) {
        return a.data.action !== "gcl_transfer" ? (M(173), !0) : a.data.gadSource ? a.data.gclid ? !1 : (M(181), !0) : (M(180), !0)
    }

    function Cu(a, b) {
        if (P(a)) {
            if (km(gm.Z.He)) return M(176), gm.Z.He;
            if (km(gm.Z.vm)) return M(170), gm.Z.He;
            var c = aq();
            if (!c) M(171);
            else if (c.opener) {
                var d = function(g) {
                    if (!Au.includes(g.origin)) M(172);
                    else if (!Bu(g)) {
                        var h = {
                            gadSource: g.data.gadSource
                        };
                        P(229) && (h.gclid = g.data.gclid);
                        jm(gm.Z.He, h);
                        a === 200 && g.data.gclid && St(String(g.data.gclid), 6, b);
                        var l;
                        (l = g.stopImmediatePropagation) == null || l.call(g);
                        iq(c, "message", d)
                    }
                };
                if (hq(c, "message", d)) {
                    jm(gm.Z.vm, !0);
                    for (var e = m(Au), f = e.next(); !f.done; f = e.next()) c.opener.postMessage({
                            action: "gcl_setup"
                        },
                        f.value);
                    M(174);
                    return gm.Z.He
                }
                M(175)
            }
        }
    };
    var Mu = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Nu = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Ou = /^\d+\.fls\.doubleclick\.net$/,
        Pu = /;gac=([^;?]+)/,
        Qu = /;gacgb=([^;?]+)/;

    function Ru(a, b) {
        if (Ou.test(z.location.host)) {
            var c = z.location.href.match(b);
            return c && c.length === 2 && c[1].match(Mu) ? ij(c[1]) || "" : ""
        }
        for (var d = [], e = m(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, h = [], l = a[g], n = 0; n < l.length; n++) h.push(l[n].gclid);
            d.push(g + ":" + h.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }

    function Su(a, b, c) {
        for (var d = mt(lt()) ? Hs("_gac_gb", !0) : {}, e = [], f = !1, g = m(Object.keys(d)), h = g.next(); !h.done; h = g.next()) {
            var l = h.value,
                n = gu("_gac_gb_" + l, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(l + ":" + n.join(","))
        }
        return {
            Pq: f ? e.join(";") : "",
            Oq: Ru(d, Qu)
        }
    }

    function Tu(a) {
        var b = z.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(Nu) ? b[1] : void 0
    }

    function Uu(a) {
        var b = {},
            c, d, e;
        Ou.test(z.location.host) && (c = Tu("gclgs"), d = Tu("gclst"), e = Tu("gcllp"));
        if (c && d && e) b.pg = c, b.Kh = d, b.Jh = e;
        else {
            var f = Gb(),
                g = ut((a || "_gcl") + "_gs"),
                h = g.map(function(p) {
                    return p.gclid
                }),
                l = g.map(function(p) {
                    return f - p.timestamp
                }),
                n = g.map(function(p) {
                    return p.Wc
                });
            h.length > 0 && l.length > 0 && n.length > 0 && (b.pg = h.join("."), b.Kh = l.join("."), b.Jh = n.join("."))
        }
        return b
    }

    function Vu(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (Ou.test(z.location.host)) {
            var e = Tu(c);
            if (e) {
                if (d) {
                    var f = new Zs;
                    $s(f, 2);
                    $s(f, 3);
                    return e.split(".").map(function(h) {
                        return {
                            gclid: h,
                            za: f,
                            Za: [1]
                        }
                    })
                }
                return e.split(".").map(function(h) {
                    return {
                        gclid: h,
                        za: new Zs,
                        Za: [1]
                    }
                })
            }
        } else {
            if (b === "gclid") {
                var g = (a || "_gcl") + "_aw";
                return d ? Gt(g) : pt(g)
            }
            if (b === "wbraid") return pt((a || "_gcl") + "_gb");
            if (b === "braids") return rt({
                prefix: a
            })
        }
        return []
    }

    function Wu(a) {
        return Ou.test(z.location.host) ? !(Tu("gclaw") || Tu("gac")) : ku(a)
    }

    function Xu(a, b, c) {
        var d;
        d = c ? hu(a, b) : gu((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    };
    var cv = function(a) {
            this.C = 1;
            this.C > 0 || (this.C = 1);
            this.onSuccess = a.D.onSuccess
        },
        dv = function(a, b) {
            return Ub(function() {
                a.C--;
                if (rb(a.onSuccess) && a.C === 0) a.onSuccess()
            }, b > 0 ? b : 1)
        };

    function gv(a, b) {
        var c = !!uj();
        switch (a) {
            case 45:
                return "https://www.google.com/ccm/collect";
            case 46:
                return c ? vj() + "/gs/ccm/collect" : "https://pagead2.googlesyndication.com/ccm/collect";
            case 51:
                return "https://www.google.com/travel/flights/click/conversion";
            case 9:
                return "https://googleads.g.doubleclick.net/pagead/viewthroughconversion";
            case 17:
                return c ? Sm() ? ev() : "" + vj() + "/ag/g/c" : ev();
            case 16:
                return c ? Sm() ? fv() : "" + vj() + "/ga/g/c" : fv();
            case 67:
                return Sm() ? "" : "https://www.google.com/g/collect";
            case 1:
                return "https://ad.doubleclick.net/activity;";
            case 2:
                return c ? vj() + "/ddm/activity/" : "https://ade.googlesyndication.com/ddm/activity/";
            case 33:
                return "https://ad.doubleclick.net/activity;register_conversion=1;";
            case 11:
                return c ? vj() + "/d/pagead/form-data" : P(141) ? "https://www.google.com/pagead/form-data" : "https://google.com/pagead/form-data";
            case 3:
                return "https://" + b.mq + ".fls.doubleclick.net/activityi;";
            case 5:
                return "https://www.googleadservices.com/pagead/conversion";
            case 6:
                return c ? vj() + "/gs/pagead/conversion" : "https://pagead2.googlesyndication.com/pagead/conversion";
            case 66:
                return "https://www.google.com/pagead/uconversion";
            case 8:
                return "https://www.google.com/pagead/1p-conversion";
            case 63:
                return "https://www.googleadservices.com/pagead/conversion";
            case 64:
                return c ? vj() + "/gs/pagead/conversion" : "https://pagead2.googlesyndication.com/pagead/conversion";
            case 65:
                return "https://www.google.com/pagead/1p-conversion";
            case 22:
                return c ? vj() + "/as/d/ccm/conversion" : "https://www.googleadservices.com/ccm/conversion";
            case 60:
                return c ? vj() + "/gs/ccm/conversion" : "https://pagead2.googlesyndication.com/ccm/conversion";
            case 23:
                return c ? vj() + "/g/d/ccm/conversion" : "https://www.google.com/ccm/conversion";
            case 55:
                return c ? vj() + "/gs/measurement/conversion" : "https://pagead2.googlesyndication.com/measurement/conversion";
            case 54:
                return P(205) ? "https://www.google.com/measurement/conversion" : c ? vj() + "/g/measurement/conversion" : "https://www.google.com/measurement/conversion";
            case 21:
                return c ? vj() + "/d/ccm/form-data" : P(141) ? "https://www.google.com/ccm/form-data" : "https://google.com/ccm/form-data";
            case 7:
            case 52:
            case 53:
            case 39:
            case 38:
            case 40:
            case 37:
            case 49:
            case 48:
            case 14:
            case 24:
            case 19:
            case 27:
            case 30:
            case 36:
            case 62:
            case 26:
            case 29:
            case 32:
            case 35:
            case 57:
            case 58:
            case 50:
            case 12:
            case 13:
            case 20:
            case 18:
            case 59:
            case 47:
            case 15:
            case 0:
            case 61:
            case 56:
            case 25:
            case 28:
            case 31:
            case 34:
                throw Error("Unsupported endpoint");
            default:
                tc(a, "Unknown endpoint")
        }
    };

    function iv(a) {
        switch (a) {
            case 0:
                break;
            case 9:
                return "e4";
            case 6:
                return "e5";
            case 14:
                return "e6";
            default:
                return "e7"
        }
    };
    var jv = "email email_address sha256_email_address phone_number sha256_phone_number first_name last_name".split(" "),
        kv = "first_name sha256_first_name last_name sha256_last_name street sha256_street city region country postal_code".split(" ");

    function lv(a, b) {
        if (!b._tag_metadata) {
            for (var c = {}, d = 0, e = 0; e < a.length; e++) d += mv(a[e], b, c) ? 1 : 0;
            d > 0 && (b._tag_metadata = c)
        }
    }

    function mv(a, b, c) {
        var d = b[a];
        if (d === void 0 || d === null) return !1;
        c[a] = Array.isArray(d) ? d.map(function() {
            return {
                mode: "c"
            }
        }) : {
            mode: "c"
        };
        return !0
    }

    function nv(a) {
        if (P(178) && a) {
            lv(jv, a);
            for (var b = ub(a.address), c = 0; c < b.length; c++) {
                var d = b[c];
                d && lv(kv, d)
            }
            var e = a.home_address;
            e && lv(kv, e)
        }
    }

    function ov(a, b, c) {
        function d(f, g) {
            g = String(g).substring(0, 100);
            e.push("" + f + encodeURIComponent(g))
        }
        if (!c) return "";
        var e = [];
        d("i", String(a));
        d("f", b);
        c.mode && d("m", c.mode);
        c.isPreHashed && d("p", "1");
        c.rawLength && d("r", String(c.rawLength));
        c.normalizedLength && d("n", String(c.normalizedLength));
        c.location && d("l", c.location);
        c.selector && d("s", c.selector);
        return e.join(".")
    };

    function pv() {
        this.blockSize = -1
    };

    function qv(a, b) {
        this.blockSize = -1;
        this.blockSize = 64;
        this.P = Ea.Uint8Array ? new Uint8Array(this.blockSize) : Array(this.blockSize);
        this.T = this.H = 0;
        this.C = [];
        this.ka = a;
        this.V = b;
        this.sa = Ea.Int32Array ? new Int32Array(64) : Array(64);
        rv === void 0 && (Ea.Int32Array ? rv = new Int32Array(sv) : rv = sv);
        this.reset()
    }
    Fa(qv, pv);
    for (var tv = [], uv = 0; uv < 63; uv++) tv[uv] = 0;
    var vv = [].concat(128, tv);
    qv.prototype.reset = function() {
        this.T = this.H = 0;
        var a;
        if (Ea.Int32Array) a = new Int32Array(this.V);
        else {
            var b = this.V,
                c = b.length;
            if (c > 0) {
                for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
                a = d
            } else a = []
        }
        this.C = a
    };
    var wv = function(a) {
        for (var b = a.P, c = a.sa, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = d * 4;
        for (var f = 16; f < 64; f++) {
            var g = c[f - 15] | 0,
                h = c[f - 2] | 0;
            c[f] = ((c[f - 16] | 0) + ((g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3) | 0) + ((c[f - 7] | 0) + ((h >>> 17 | h << 15) ^ (h >>> 19 | h << 13) ^ h >>> 10) | 0) | 0
        }
        for (var l = a.C[0] | 0, n = a.C[1] | 0, p = a.C[2] | 0, q = a.C[3] | 0, r = a.C[4] | 0, u = a.C[5] | 0, t = a.C[6] | 0, v = a.C[7] | 0, x = 0; x < 64; x++) {
            var y = ((l >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^ (l >>> 22 | l << 10)) + (l & n ^ l & p ^ n & p) | 0,
                A = (v + ((r >>> 6 | r << 26) ^ (r >>> 11 | r << 21) ^ (r >>> 25 | r << 7)) |
                    0) + (((r & u ^ ~r & t) + (rv[x] | 0) | 0) + (c[x] | 0) | 0) | 0;
            v = t;
            t = u;
            u = r;
            r = q + A | 0;
            q = p;
            p = n;
            n = l;
            l = A + y | 0
        }
        a.C[0] = a.C[0] + l | 0;
        a.C[1] = a.C[1] + n | 0;
        a.C[2] = a.C[2] + p | 0;
        a.C[3] = a.C[3] + q | 0;
        a.C[4] = a.C[4] + r | 0;
        a.C[5] = a.C[5] + u | 0;
        a.C[6] = a.C[6] + t | 0;
        a.C[7] = a.C[7] + v | 0
    };
    qv.prototype.update = function(a, b) {
        b === void 0 && (b = a.length);
        var c = 0,
            d = this.H;
        if (typeof a === "string")
            for (; c < b;) this.P[d++] = a.charCodeAt(c++), d == this.blockSize && (wv(this), d = 0);
        else {
            var e, f = typeof a;
            e = f != "object" ? f : a ? Array.isArray(a) ? "array" : f : "null";
            if (e == "array" || e == "object" && typeof a.length == "number")
                for (; c < b;) {
                    var g = a[c++];
                    if (!("number" == typeof g && 0 <= g && 255 >= g && g == (g | 0))) throw Error("message must be a byte array");
                    this.P[d++] = g;
                    d == this.blockSize && (wv(this), d = 0)
                } else throw Error("message must be string or array");
        }
        this.H = d;
        this.T += b
    };
    qv.prototype.digest = function() {
        var a = [],
            b = this.T * 8;
        this.H < 56 ? this.update(vv, 56 - this.H) : this.update(vv, this.blockSize - (this.H - 56));
        for (var c = 63; c >= 56; c--) this.P[c] = b & 255, b /= 256;
        wv(this);
        for (var d = 0, e = 0; e < this.ka; e++)
            for (var f = 24; f >= 0; f -= 8) a[d++] = this.C[e] >> f & 255;
        return a
    };
    var sv = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804,
            4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
        ],
        rv;

    function xv() {
        qv.call(this, 8, yv)
    }
    Fa(xv, qv);
    var yv = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    var zv = /^[0-9A-Fa-f]{64}$/;

    function Av(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (b) {
            return Tb(a)
        }
    }

    function Bv(a) {
        var b = w;
        if (a === "" || a === "e0") return Promise.resolve(a);
        var c;
        if ((c = b.crypto) == null ? 0 : c.subtle) {
            if (zv.test(a)) return Promise.resolve(a);
            try {
                var d = Av(a);
                return b.crypto.subtle.digest("SHA-256", d).then(function(e) {
                    return Cv(e, b)
                }).catch(function() {
                    return "e2"
                })
            } catch (e) {
                return Promise.resolve("e2")
            }
        } else return Promise.resolve("e1")
    }

    function Cv(a, b) {
        var c = Array.from(new Uint8Array(a)).map(function(d) {
            return String.fromCharCode(d)
        }).join("");
        return b.btoa(c).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    };

    function kw() {
        var a = [],
            b = Number('') || 0,
            c = Number('') || 0;
        c || (c = b / 100);
        var d = function() {
            var ma = !1;
            ma = !0;
            return ma
        }();
        a.push({
            na: 21,
            studyId: 21,
            experimentId: 105102050,
            controlId: 105102051,
            controlId2: 105102052,
            probability: c,
            active: d,
            la: 0
        });
        var e =
            Number('') || 0,
            f = Number('') || 0;
        f || (f = e / 100);
        var g = function() {
            var ma = !1;
            ma = !0;
            return ma
        }();
        a.push({
            na: 265,
            studyId: 265,
            experimentId: 115691063,
            controlId: 115691064,
            controlId2: 115691065,
            probability: f,
            active: g,
            la: 0
        });
        var h = Number('') || 0,
            l = Number('') || 0;
        l || (l = h / 100);
        var n = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 228,
            studyId: 228,
            experimentId: 105177154,
            controlId: 105177155,
            controlId2: 105255245,
            probability: l,
            active: n,
            la: 0
        });
        var p = Number('') ||
            0,
            q = Number('') || 0;
        q || (q = p / 100);
        var r = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 287,
            studyId: 287,
            experimentId: 116133312,
            controlId: 116133313,
            controlId2: 116133314,
            probability: q,
            active: r,
            la: 0
        });
        var u = Number('') ||
            0,
            t = Number('') || 0;
        t || (t = u / 100);
        var v = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 288,
            studyId: 288,
            experimentId: 116133315,
            controlId: 116133316,
            controlId2: 116133317,
            probability: t,
            active: v,
            la: 0
        });
        var x =
            Number('') || 0,
            y = Number('0.01') || 0;
        y || (y = x / 100);
        var A = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 285,
            studyId: 285,
            experimentId: 115495938,
            controlId: 115495939,
            controlId2: 115495940,
            probability: y,
            active: A,
            la: 0
        });
        var C = Number('') || 0,
            D = Number('') || 0;
        D || (D = C / 100);
        var H = function() {
            var ma = !1;
            ma = !0;
            return ma
        }();
        a.push({
            na: 286,
            studyId: 286,
            experimentId: 115495941,
            controlId: 115495942,
            controlId2: 115495943,
            probability: D,
            active: H,
            la: 0
        });
        var J = Number('') || 0,
            O = Number('') || 0;
        O || (O = J / 100);
        var aa = function() {
            var ma = !1;
            ma = !0;
            return ma
        }();
        a.push({
            na: 219,
            studyId: 219,
            experimentId: 104948811,
            controlId: 104948812,
            controlId2: 0,
            probability: O,
            active: aa,
            la: 0
        });
        var W = Number('') || 0,
            N = Number('') || 0;
        N || (N = W / 100);
        var S = function() {
            var ma = !1;
            ma = !0;
            return ma
        }();
        a.push({
            na: 220,
            studyId: 220,
            experimentId: 104948813,
            controlId: 104948814,
            controlId2: 0,
            probability: N,
            active: S,
            la: 0
        });
        var la = Number('') || 0,
            ja = Number('0.5') || 0;
        ja || (ja = la / 100);
        var V = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 255,
            studyId: 255,
            experimentId: 105391252,
            controlId: 105391253,
            controlId2: 105446120,
            probability: ja,
            active: V,
            la: 0
        });
        var U = Number('') || 0,
            ha = Number('') || 0;
        ha || (ha = U / 100);
        var ta = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 235,
            studyId: 235,
            experimentId: 105357150,
            controlId: 105357151,
            controlId2: 0,
            probability: ha,
            active: ta,
            la: 1
        });
        var pa = Number('') || 0,
            Ma = Number('0') || 0;
        Ma || (Ma = pa / 100);
        var Sa = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 170,
            studyId: 170,
            experimentId: 116024733,
            controlId: 116024734,
            controlId2: 116024735,
            probability: Ma,
            active: Sa,
            la: 0
        });
        var mb = Number('') || 0,
            cb = Number('') || 0;
        cb || (cb = mb / 100);
        var Za = function() {
            var ma = !1;
            ma = !0;
            return ma
        }();
        a.push({
            na: 203,
            studyId: 203,
            experimentId: 115480710,
            controlId: 115480709,
            controlId2: 115489982,
            probability: cb,
            active: Za,
            la: 0
        });
        var Pb = Number('') || 0,
            Qb = Number('') || 0;
        Qb || (Qb = Pb / 100);
        var ke = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 178,
            studyId: 178,
            experimentId: 115958700,
            controlId: 115958701,
            controlId2: 115958702,
            probability: Qb,
            active: ke,
            la: 0
        });
        var Gg = Number('') || 0,
            le = Number('') || 0;
        le || (le = Gg / 100);
        var Re = function() {
            var ma = !1;
            ma = !0;
            return ma
        }();
        a.push({
            na: 197,
            studyId: 197,
            experimentId: 105113532,
            controlId: 105113531,
            controlId2: 0,
            probability: le,
            active: Re,
            la: 0
        });
        var Yk = Number('') ||
            0,
            vi = Number('0.2') || 0;
        vi || (vi = Yk / 100);
        var Zk = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 243,
            studyId: 243,
            experimentId: 115616985,
            controlId: 115616986,
            controlId2: 0,
            probability: vi,
            active: Zk,
            la: 0
        });
        var Uo = Number('') || 0,
            wi = Number('') ||
            0;
        wi || (wi = Uo / 100);
        var $k = function() {
            var ma = !1;
            ma = !0;
            return ma
        }();
        a.push({
            na: 277,
            studyId: 277,
            experimentId: 116130039,
            controlId: 116130040,
            controlId2: 0,
            probability: wi,
            active: $k,
            la: 0
        });
        var Vo = Number('') || 0,
            xi = Number('1') ||
            0;
        xi || (xi = Vo / 100);
        var Wo = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 254,
            studyId: 254,
            experimentId: 115583767,
            controlId: 115583768,
            controlId2: 115583769,
            probability: xi,
            active: Wo,
            la: 0
        });
        var al = Number('') || 0,
            yi = Number('') ||
            0;
        yi || (yi = al / 100);
        var Xo = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 253,
            studyId: 253,
            experimentId: 115583770,
            controlId: 115583771,
            controlId2: 115583772,
            probability: yi,
            active: Xo,
            la: 0
        });
        var GJ = Number('') || 0,
            Yo = Number('') ||
            0;
        Yo || (Yo = GJ / 100);
        var HJ = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 266,
            studyId: 266,
            experimentId: 115718529,
            controlId: 115718530,
            controlId2: 115718531,
            probability: Yo,
            active: HJ,
            la: 0
        });
        var IJ = Number('') || 0,
            Zo = Number('') ||
            0;
        Zo || (Zo = IJ / 100);
        var JJ = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 267,
            studyId: 267,
            experimentId: 115718526,
            controlId: 115718527,
            controlId2: 115718528,
            probability: Zo,
            active: JJ,
            la: 0
        });
        var KJ = Number('') || 0,
            $o = Number('') || 0;
        $o || ($o = KJ / 100);
        var LJ = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 249,
            studyId: 249,
            experimentId: 105440521,
            controlId: 105440522,
            controlId2: 0,
            focused: !0,
            probability: $o,
            active: LJ,
            la: 0
        });
        var MJ = Number('') || 0,
            ap = Number('0.5') || 0;
        ap || (ap = MJ / 100);
        var NJ = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 195,
            studyId: 195,
            experimentId: 104527906,
            controlId: 104527907,
            controlId2: 104898015,
            probability: ap,
            active: NJ,
            la: 1
        });
        var OJ = Number('') || 0,
            bp = Number('0.5') || 0;
        bp || (bp = OJ / 100);
        var PJ = function() {
            var ma = !1;
            return ma
        }();
        a.push({
            na: 196,
            studyId: 196,
            experimentId: 104528500,
            controlId: 104528501,
            controlId2: 104898016,
            probability: bp,
            active: PJ,
            la: 0
        });
        var QJ = Number('') || 0,
            cp = Number('') || 0;
        cp || (cp = QJ / 100);
        var RJ = function() {
            var ma = !1;
            ma = !0;
            return ma
        }();
        a.push({
            na: 229,
            studyId: 229,
            experimentId: 105359938,
            controlId: 105359937,
            controlId2: 105359936,
            probability: cp,
            active: RJ,
            la: 0
        });
        return a
    };
    var lw = {};

    function mw(a) {
        var b = a,
            c = a = nw[b.studyId] ? na(Object, "assign").call(Object, {}, b, {
                active: !0
            }) : b;
        c.controlId2 && c.probability <= .25 || (c = na(Object, "assign").call(Object, {}, c, {
            controlId2: 0
        }));
        Ii[c.studyId] = c;
        a.focused && (lw[a.studyId] = !0);
        if (a.la === 1) {
            var d = a.studyId;
            ow(lm(gm.Z.Mi, {}), d);
            pw(d) && sk(d)
        } else if (a.la === 0) {
            var e = a.studyId;
            ow(qw, e);
            pw(e) && sk(e)
        }
    }

    function ow(a, b) {
        if (Ii[b]) {
            var c = Ii[b],
                d = c.experimentId,
                e = c.probability;
            if (!(a.studies || {})[b]) {
                var f = a.studies || {};
                f[b] = !0;
                a.studies = f;
                Ii[b].active || (Ii[b].probability > .5 ? Mi(a, d, b) : e <= 0 || e > 1 || Li.Xr(a, b))
            }
        }
        if (!lw[b]) {
            var g = Oi(a, b);
            g && Ri.C.H.add(g)
        }
    }
    var qw = {};

    function pw(a) {
        return Ni(lm(gm.Z.Mi, {}), a) || Ni(qw, a)
    }

    function rw(a) {
        var b = R(a, Q.A.zi) || [];
        return ok(b)
    }
    var nw = {};

    function sw() {
        var a = !1;
        if (a) {
            var b, c, d = ((b = w) == null ? void 0 : (c = b.location) == null ? void 0 : c.hash) || "";
            if (d[0] === "#" && d[1] === "_" && d[2] === "t" && d[3] === "e" && d[4] === "=") {
                var e = d.substring(5);
                if (e)
                    for (var f = m(e.split("~")), g = f.next(); !g.done; g = f.next()) {
                        var h = Number(g.value);
                        h && (nw[h] = !0, sk(h))
                    }
            }
        }
        for (var l = m(kw()), n = l.next(); !n.done; n = l.next()) mw(n.value);
        for (var p = [], q =
                m(og(56) || []), r = q.next(); !r.done; r = q.next()) {
            var u = r.value,
                t = {
                    studyId: u[1],
                    active: !!u[2],
                    probability: u[3] || 0,
                    experimentId: u[4] || 0,
                    controlId: u[5] || 0,
                    controlId2: u[6] || 0
                },
                v = 0;
            switch (u[7]) {
                case 2:
                    v = 1;
                    break;
                case 1:
                case 0:
                    v = 0
            }
            var x;
            a: switch (t.studyId) {
                case 249:
                    x = !0;
                    break a;
                default:
                    x = !1
            }
            var y = na(Object, "assign").call(Object, {}, t, {
                la: v,
                focused: x
            });
            (y.active || y.experimentId && y.controlId) && p.push(y)
        }
        for (var A = m(p), C = A.next(); !C.done; C = A.next()) mw(C.value)
    };

    function tw(a, b) {
        b && zb(b, function(c, d) {
            typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d))
        })
    };

    function uw(a, b) {
        var c = Gu(a, K.m.Gc);
        if (c && typeof c === "object")
            for (var d = m(Object.keys(c)), e = d.next(); !e.done; e = d.next()) {
                var f = e.value,
                    g = c[f];
                g !== void 0 && (g === null && (g = ""), b["gap." + f] = String(g))
            }
    };

    function vw(a, b, c, d) {
        if (vn()) {
            var e = b.D;
            Cn({
                targetId: d || [b.target.destinationId],
                request: {
                    url: a,
                    parameterEncoding: 2,
                    endpoint: c
                },
                hb: {
                    eventId: e.eventId,
                    priorityId: e.priorityId
                },
                bj: {
                    eventId: R(b, Q.A.Ye),
                    priorityId: R(b, Q.A.Ze)
                }
            })
        }
    };
    var Jw = {};
    Jw.N = nr.N;
    var Kw = {
            Ys: "L",
            Vp: "S",
            rt: "Y",
            Cs: "B",
            Qs: "E",
            Us: "I",
            mt: "TC",
            Ts: "HTC"
        },
        Lw = {
            Vp: "S",
            Ps: "V",
            Fs: "E",
            kt: "tag"
        },
        Mw = {},
        Nw = (Mw[Jw.N.Vi] = "6", Mw[Jw.N.Wi] = "5", Mw[Jw.N.Ui] = "7", Mw);

    function Ow() {
        function a(c, d) {
            var e = pb(jb[d] || []);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Pw = !1;

    function hx(a) {}

    function ix(a) {}

    function jx() {}

    function kx(a) {}

    function lx(a) {}

    function mx(a) {}

    function nx() {}

    function ox(a, b) {}

    function px(a, b, c) {}

    function qx() {};
    var rx = Object.freeze({
        cache: "no-store",
        credentials: "include",
        method: "GET",
        keepalive: !0,
        redirect: "follow"
    });

    function sx(a, b, c, d, e, f, g, h) {
        var l = na(Object, "assign").call(Object, {}, rx);
        c && (l.body = c, l.method = "POST");
        na(Object, "assign").call(Object, l, e);
        h == null || wl(h);
        w.fetch(b, l).then(function(n) {
            h == null || xl(h);
            if (!n.ok) g == null || g();
            else if (n.body) {
                var p = n.body.getReader(),
                    q = new TextDecoder;
                return new Promise(function(r) {
                    function u() {
                        p.read().then(function(t) {
                            var v;
                            v = t.done;
                            var x = q.decode(t.value, {
                                stream: !v
                            });
                            tx(d, x);
                            v ? (f == null || f(), r()) : u()
                        }).catch(function() {
                            r()
                        })
                    }
                    u()
                })
            }
        }).catch(function() {
            h == null || xl(h);
            g ? g() : P(128) && (b += "&_z=retryFetch", c ? zl(a, b, c) : yl(a, b))
        })
    };
    var ux = function(a) {
            this.P = a;
            this.C = ""
        },
        vx = function(a, b) {
            a.H = b;
            return a
        },
        tx = function(a, b) {
            b = a.C + b;
            for (var c = b.indexOf("\n\n"); c !== -1;) {
                var d = a,
                    e;
                a: {
                    var f = m(b.substring(0, c).split("\n")),
                        g = f.next().value,
                        h = f.next().value;
                    if (g.indexOf("event: message") === 0 && h.indexOf("data: ") === 0) try {
                        e = JSON.parse(h.substring(h.indexOf(":") + 1));
                        break a
                    } catch (l) {}
                    e = void 0
                }
                wx(d, e);
                b = b.substring(c + 2);
                c = b.indexOf("\n\n")
            }
            a.C = b
        },
        xx = function(a, b) {
            return function() {
                if (b.fallback_url && b.fallback_url_method) {
                    var c = {};
                    wx(a, (c[b.fallback_url_method] = [b.fallback_url], c.options = {}, c))
                }
            }
        },
        wx = function(a, b) {
            b && (yx(b.send_pixel, b.options, a.P), yx(b.create_iframe, b.options, a.T), yx(b.fetch, b.options, a.H))
        };

    function zx(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function yx(a, b, c) {
        if (a && c) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = sd(b) ? b : {}, f = m(d), g = f.next(); !g.done; g = f.next()) c(g.value, e)
        }
    };
    var zg;

    function Ax() {
        var a = data.permissions || {};
        zg = new Fg(E(5), a)
    }

    function Bx(a, b) {
        Ag(a, b)
    };
    var Cx = pg(57, 5),
        Dx = pg(58, 50),
        Ex = wb();
    var Gx = function(a, b) {
            a && (Fx("sid", a.targetId, b), Fx("cc", a.clientCount, b), Fx("tl", a.totalLifeMs, b), Fx("hc", a.heartbeatCount, b), Fx("cl", a.clientLifeMs, b))
        },
        Fx = function(a, b, c) {
            b != null && c.push(a + "=" + b)
        },
        Hx = function() {
            var a = z.referrer;
            if (a) {
                var b;
                return jj(pj(a), "host") === ((b = w.location) == null ? void 0 : b.host) ? 1 : 2
            }
            return 0
        },
        Ix = "https://" + E(21) + "/a?",
        Kx = function() {
            this.V = Jx;
            this.P = 0
        };
    Kx.prototype.H = function(a, b, c, d) {
        var e = Hx(),
            f, g = [];
        f = w === w.top && e !== 0 && b ?
            (b == null ? void 0 : b.clientCount) > 1 ? e === 2 ? 1 : 2 : e === 2 ? 0 : 3 : 4;
        a && Fx("si", a.xg, g);
        Fx("m", 0, g);
        Fx("iss", f, g);
        Fx("if", c, g);
        Gx(b, g);
        d && Fx("fm", encodeURIComponent(d.substring(0, Dx)), g);
        this.T(g);
    };
    Kx.prototype.C = function(a, b, c, d, e) {
        var f = [];
        Fx("m", 1, f);
        Fx("s", a, f);
        Fx("po", Hx(), f);
        b && (Fx("st", b.state, f), Fx("si", b.xg, f), Fx("sm", b.Fg, f));
        Gx(c, f);
        Fx("c", d, f);
        e && Fx("fm", encodeURIComponent(e.substring(0, Dx)), f);
        this.T(f);
    };
    Kx.prototype.T = function(a) {
        a = a === void 0 ? [] : a;
        !Lk || this.P >= Cx || (Fx("pid", Ex, a), Fx("bc", ++this.P, a), a.unshift("ctid=" + E(5) + "&t=s"), this.V("" + Ix + a.join("&")))
    };

    function Lx(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var Nx = function(a, b) {
        var c = w,
            d = Mx,
            e;
        var f = function(g, h, l) {
            l = l === void 0 ? {
                rn: function() {},
                sn: function() {},
                qn: function() {},
                onFailure: function() {}
            } : l;
            this.fq = g;
            this.C = h;
            this.P = l;
            this.ka = this.sa = this.heartbeatCount = this.cq = 0;
            this.Bh = !1;
            this.H = {};
            this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
            this.state = 0;
            this.xg = Lx(this.C);
            this.Fg = Lx(this.C);
            this.V = 10
        };
        f.prototype.init = function() {
            this.T(1);
            this.nb()
        };
        f.prototype.getState = function() {
            return {
                state: this.state,
                xg: Math.round(Lx(this.C) - this.xg),
                Fg: Math.round(Lx(this.C) - this.Fg)
            }
        };
        f.prototype.T = function(g) {
            this.state !== g && (this.state = g, this.Fg = Lx(this.C))
        };
        f.prototype.Lm = function() {
            return String(this.cq++)
        };
        f.prototype.nb = function() {
            var g = this;
            this.heartbeatCount++;
            this.yb({
                type: 0,
                clientId: this.id,
                requestId: this.Lm(),
                maxDelay: this.Ch()
            }, function(h) {
                if (h.type === 0) {
                    var l;
                    if (((l = h.failure) == null ? void 0 : l.failureType) != null)
                        if (h.stats && (g.stats = h.stats), g.ka++, h.isDead || g.ka > d.om) {
                            var n = h.isDead && h.failure.failureType;
                            g.V = n || 10;
                            g.T(4);
                            g.bq();
                            var p, q;
                            (q = (p = g.P).qn) == null || q.call(p, {
                                failureType: n || 10,
                                data: h.failure.data
                            })
                        } else g.T(3), g.Qm();
                    else {
                        if (g.heartbeatCount > h.stats.heartbeatCount + d.om) {
                            g.heartbeatCount = h.stats.heartbeatCount;
                            var r, u;
                            (u = (r = g.P).onFailure) == null || u.call(r, {
                                failureType: 13
                            })
                        }
                        g.stats = h.stats;
                        var t = g.state;
                        g.T(2);
                        if (t !== 2)
                            if (g.Bh) {
                                var v, x;
                                (x = (v = g.P).sn) == null || x.call(v)
                            } else {
                                g.Bh = !0;
                                var y, A;
                                (A = (y = g.P).rn) == null || A.call(y)
                            } g.ka = 0;
                        g.gq();
                        g.Qm()
                    }
                }
            })
        };
        f.prototype.Ch = function() {
            return this.state ===
                2 ? d.Fp : d.Zp
        };
        f.prototype.Qm = function() {
            var g = this;
            this.C.setTimeout(function() {
                g.nb()
            }, Math.max(0, this.Ch() - (Lx(this.C) - this.sa)))
        };
        f.prototype.kq = function(g, h, l) {
            var n = this;
            this.yb({
                type: 1,
                clientId: this.id,
                requestId: this.Lm(),
                command: g
            }, function(p) {
                if (p.type === 1)
                    if (p.result) h(p.result);
                    else {
                        var q, r, u, t = {
                                failureType: (u = (q = p.failure) == null ? void 0 : q.failureType) != null ? u : 12,
                                data: (r = p.failure) == null ? void 0 : r.data
                            },
                            v, x;
                        (x = (v = n.P).onFailure) == null || x.call(v, t);
                        l(t)
                    }
            })
        };
        f.prototype.yb = function(g, h) {
            var l =
                this;
            if (this.state === 4) g.failure = {
                failureType: this.V
            }, h(g);
            else {
                var n = this.state !== 2 && g.type !== 0,
                    p = g.requestId,
                    q, r = this.C.setTimeout(function() {
                        var t = l.H[p];
                        t && (Hm(6), l.dg(t, 7))
                    }, (q = g.maxDelay) != null ? q : d.lo),
                    u = {
                        request: g,
                        En: h,
                        yn: n,
                        Br: r
                    };
                this.H[p] = u;
                n || this.sendRequest(u)
            }
        };
        f.prototype.sendRequest = function(g) {
            this.sa = Lx(this.C);
            g.yn = !1;
            this.fq(g.request)
        };
        f.prototype.gq = function() {
            for (var g = m(Object.keys(this.H)), h = g.next(); !h.done; h = g.next()) {
                var l = this.H[h.value];
                l.yn && this.sendRequest(l)
            }
        };
        f.prototype.bq =
            function() {
                for (var g = m(Object.keys(this.H)), h = g.next(); !h.done; h = g.next()) this.dg(this.H[h.value], this.V)
            };
        f.prototype.dg = function(g, h) {
            this.Rc(g);
            var l = g.request;
            l.failure = {
                failureType: h
            };
            g.En(l)
        };
        f.prototype.Rc = function(g) {
            delete this.H[g.request.requestId];
            this.C.clearTimeout(g.Br)
        };
        f.prototype.ar = function(g) {
            this.sa = Lx(this.C);
            var h = this.H[g.requestId];
            if (h) this.Rc(h), h.En(g);
            else {
                var l, n;
                (n = (l = this.P).onFailure) == null || n.call(l, {
                    failureType: 14
                })
            }
        };
        e = new f(a, c, b);
        return e
    };
    var Ox;
    var Px = function() {
            Ox || (Ox = new Kx);
            return Ox
        },
        Jx = function(a) {
            dm(fm(Gl.aa.Qc), function() {
                Rc(a)
            })
        },
        Qx = function(a) {
            var b = a.substring(0, a.indexOf("/_/service_worker"));
            return "&1p=1" + (b ? "&path=" + encodeURIComponent(b) : "")
        },
        Rx = function(a) {
            var b = a,
                c, d = ng(11);
            d = ng(10);
            c = d;
            b ? (b.charAt(b.length - 1) !== "/" && (b += "/"), a = b + c) : a = "https://www.googletagmanager.com/static/service_worker/" + c + "/";
            var e;
            try {
                e = new URL(a)
            } catch (f) {
                return null
            }
            return e.protocol !==
                "https:" ? null : e
        },
        Sx = function(a) {
            var b = w.location.origin;
            if (!b) return null;
            (P(432) ? uj() : uj() && !a) && (a = "" + b + vj() + "/_/service_worker");
            return Rx(a)
        },
        Tx = function(a) {
            var b = km(gm.Z.Am);
            return b && b[a]
        },
        Mx = {
            Zp: pg(53, 500),
            Fp: pg(54, 5E3),
            om: pg(8, 20),
            lo: pg(55, 5E3)
        },
        Ux = function(a, b, c) {
            var d = this;
            this.H = b;
            this.V = this.T = !1;
            this.ka = null;
            this.initTime = Math.round(Gb());
            this.C = 15;
            this.P = this.Cq(a);
            w.setTimeout(function() {
                d.initialize()
            }, 1E3);
            Uc(function() {
                d.qr(a, c)
            })
        };
    k = Ux.prototype;
    k.delegate = function(a, b, c) {
        this.getState() !==
            2 ? (this.H.C(this.C, {
                state: this.getState(),
                xg: this.initTime,
                Fg: Math.round(Gb()) - this.initTime
            }, void 0, a.commandType), c({
                failureType: this.C
            })) : this.P.kq(a, b, c)
    };
    k.getState = function() {
        return this.P.getState().state
    };
    k.qr = function(a, b) {
        var c = w.location.origin,
            d = this,
            e = Pc();
        try {
            var f = e.contentDocument.createElement("iframe"),
                g = a.pathname,
                h = g[g.length - 1] === "/" ? a.toString() : a.toString() + "/",
                l = a.origin !== "https://www.googletagmanager.com" ? Qx(g) : "",
                n;
            P(133) && (n = {
                sandbox: "allow-same-origin allow-scripts"
            });
            Pc(h + "sw_iframe.html?origin=" + encodeURIComponent(c) + l + (b ? "&e=1" : ""), void 0, n, void 0, f);
            var p = function() {
                e.contentDocument.body.appendChild(f);
                f.addEventListener("load", function() {
                    d.ka = f.contentWindow;
                    e.contentWindow.addEventListener("message", function(q) {
                        q.origin === a.origin && d.P.ar(q.data)
                    });
                    d.initialize()
                })
            };
            e.contentDocument.readyState === "complete" ? p() : e.contentWindow.addEventListener("load", function() {
                p()
            })
        } catch (q) {
            e.parentElement.removeChild(e), this.C = 11, this.H.H(void 0, void 0, this.C, q.toString())
        }
    };
    k.Cq = function(a) {
        var b = this,
            c = Nx(function(d) {
                var e;
                (e = b.ka) == null || e.postMessage(d, a.origin)
            }, {
                rn: function() {
                    b.T = !0;
                    b.H.H(c.getState(), c.stats)
                },
                sn: function() {},
                qn: function(d) {
                    b.T ? (b.C = (d == null ? void 0 : d.failureType) || 10, b.H.C(b.C, c.getState(), c.stats, void 0, d == null ? void 0 : d.data)) : (b.C = (d == null ? void 0 : d.failureType) || 4, b.H.H(c.getState(), c.stats, b.C, d == null ? void 0 : d.data))
                },
                onFailure: function(d) {
                    b.C = d.failureType;
                    b.H.C(b.C, c.getState(), c.stats, d.command, d.data)
                }
            });
        return c
    };
    k.initialize = function() {
        this.V ||
            this.P.init();
        this.V = !0
    };

    function Vx() {
        var a = Cg(zg.C, "", function() {
            return {}
        });
        try {
            return a("internal_sw_allowed"), !0
        } catch (b) {
            return !1
        }
    }

    function Wx(a) {
        var b, c, d = a === void 0 ? {} : a;
        b = d.Vr;
        c = d.Ln === void 0 ? !1 : d.Ln;
        var e = Sx(b);
        if (e === null || !Vx() || P(168) || Tx(e.origin)) return;
        if (!Cc()) {
            Px().H(void 0, void 0, 6);
            return
        }
        var f = new Ux(e, Px(), c);
        lm(gm.Z.Am, {})[e.origin] = f;
    }
    var Xx = function(a, b, c, d) {
        var e;
        if ((e = Tx(a)) == null || !e.delegate) {
            var f = Cc() ? 16 : 6;
            Px().C(f, void 0, void 0, b.commandType);
            d({
                failureType: f
            });
            return
        }
        Tx(a).delegate(b, c, d);
    };

    function Yx(a, b, c, d, e) {
        var f = P(277) ? Sx() : Rx();
        if (f === null) {
            d(Cc() ? 16 : 6);
            return
        }
        var g, h = (g = Tx(f.origin)) == null ? void 0 : g.initTime,
            l = Math.round(Gb()),
            n = {
                commandType: 0,
                params: {
                    url: a,
                    method: 0,
                    templates: b,
                    body: "",
                    processResponse: !1,
                    sinceInit: h ? l - h : void 0
                }
            };
        e && (n.params.encryptionKeyString = e);
        Xx(f.origin, n, function(p) {
            c(p)
        }, function(p) {
            d(p.failureType)
        });
    }

    function Zx(a, b, c, d) {
        var e = Sx(a);
        if (e === null) {
            d("_is_sw=f" + (Cc() ? 16 : 6) + "te");
            return
        }
        var f = b ? 1 : 0,
            g = Math.round(Gb()),
            h, l = (h = Tx(e.origin)) == null ? void 0 : h.initTime,
            n = l ? g - l : void 0;
        Xx(e.origin, {
            commandType: 0,
            params: {
                url: a,
                method: f,
                templates: c,
                body: b || "",
                processResponse: !0,
                reportEarlySuccess: P(412),
                sinceInit: n,
                attributionReporting: !0,
                referer: w.location.href
            }
        }, function() {}, function(p) {
            var q = "_is_sw=f" + p.failureType,
                r, u = (r = Tx(e.origin)) == null ? void 0 : r.getState();
            u !== void 0 && (q += "s" + u);
            d(n ? q + ("t" + n) : q + "te")
        });
    };
    var $x = function(a, b) {
            this.Fr = a;
            this.timeoutMs = b;
            this.Wa = void 0
        },
        wl = function(a) {
            a.Wa || (a.Wa = setTimeout(function() {
                a.Fr();
                a.Wa = void 0
            }, a.timeoutMs))
        },
        xl = function(a) {
            a.Wa && (clearTimeout(a.Wa), a.Wa = void 0)
        };

    function By() {
        return $n("dedupe_gclid", function() {
            return Or()
        })
    };
    var Gy = {
        Li: {
            Yn: "1",
            rp: "2",
            Sp: "3"
        }
    };

    function Ly(a, b, c, d) {
        var e = Oc(),
            f;
        if (e === 1) a: {
            var g = E(3);g = g.toLowerCase();
            for (var h = "https://" + g, l = "http://" + g, n = 1, p = z.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (r.indexOf(l) === 0) {
                        f = 3;
                        break a
                    }
                    n === 1 && r.indexOf(h) === 0 && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (f === 2 || d || "http:" !== w.location.protocol ? a : b) + c
    };

    function My(a, b, c, d, e) {
        if (!Yj(a)) {
            d.loadExperiments = Ti();
            bk(a, d, e);
            var f = Ny(a),
                g = function() {
                    Ij().container[a] && (Ij().container[a].state = 3);
                    Oy()
                },
                h = {
                    destinationId: a,
                    endpoint: 0
                };
            if (uj()) Cl(h, vj() + "/" + Py(f), void 0, g);
            else {
                var l = Lb(a, "GTM-"),
                    n = yj(),
                    p = c ? "/gtag/js" : "/gtm.js",
                    q = Qy(b, p + f);
                if (!q) {
                    var r = E(3) + p;
                    n && Ec && l && (r = Ec.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    q = Ly("https://", "http://", r + f)
                }
                Cl(h, q, void 0, g)
            }
        }
    }

    function Oy() {
        ck() || zb(dk(), function(a, b) {
            Ry(a, b.transportUrl, b.context);
            M(92)
        })
    }

    function Ry(a, b, c, d) {
        if (!ak(a))
            if (c.loadExperiments || (c.loadExperiments = Ti()), ck()) {
                var e = Ij(),
                    f = Hj(a);
                f ? f.state = 0 : (f = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Tj()
                }, e.destinationArray[a] = [f]);
                Jj({
                    ctid: a,
                    isDestination: !0
                }, d);
                M(91)
            } else {
                var g = Ij(),
                    h = Hj(a);
                h ? h.state = 1 : (h = {
                    context: c,
                    state: 1,
                    parent: Tj()
                }, g.destinationArray[a] = [h]);
                Jj({
                    ctid: a,
                    isDestination: !0
                }, d);
                var l = {
                    destinationId: a,
                    endpoint: 0
                };
                if (uj()) {
                    var n = "gtd" + Ny(a, !0);
                    Cl(l, vj() + "/" + Py(n))
                } else {
                    var p = "/gtag/destination" + Ny(a, !0),
                        q = Qy(b, p);
                    q || (q =
                        Ly("https://", "http://", E(3) + p));
                    Cl(l, q)
                }
            }
    }

    function Ny(a, b) {
        b = b === void 0 ? !1 : b;
        var c = "?id=" + encodeURIComponent(a),
            d = E(19);
        d !== "dataLayer" && (c += "&l=" + d);
        if (!Lb(a, "GTM-") || b) c = P(130) ? c + (uj() ? "&sc=1" : "&cx=c") : c + "&cx=c";
        var e = c,
            f, g = {
                Bn: lg(15),
                Gn: E(14)
            };
        f = pf(g);
        c = e + ("&gtm=" + f);
        yj() && (c += "&sign=" + Vi.Si);
        var h = c,
            l = lg(54);
        if (l === 1) {
            if (h += "&fps=fc", P(429)) {
                var n = E(60);
                n && (h += "&gdev=" + n)
            }
        } else l === 2 && (h += "&fps=fe");
        return h
    }

    function Py(a) {
        if (!P(413)) return a;
        var b = E(58);
        if (!b) return M(182), a;
        try {
            return rf(a, b)
        } catch (c) {
            return M(183), a
        }
    }

    function Qy(a, b) {
        if (!P(419)) return xj(a, b);
        if ((uj() || kg(50)) && a) {
            var c = E(58),
                d = E(18);
            if (c && d) try {
                b = d + "/" + rf(b, c)
            } catch (e) {
                M(183)
            }
            return wj(a, b)
        }
    };
    var Sy = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Ty = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Uy = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Vy = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

    function Wy() {
        var a = kp("gtm.allowlist") || kp("gtm.whitelist");
        a && M(9);
        Zi && (P(212) ? a = void 0 : a = ["google", "gtagfl", "lcl", "zone", "cmpPartners"]);
        Sy.test(w.location && w.location.hostname) && (Zi ? M(116) : (M(117), kg(48) && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && Kb(Db(a), Ty),
            c = kp("gtm.blocklist") || kp("gtm.blacklist");
        c || (c = kp("tagTypeBlacklist")) && M(3);
        c ? M(8) : c = [];
        Sy.test(w.location && w.location.hostname) && (c = Db(c), c.push("nonGooglePixels", "nonGoogleScripts",
            "sandboxedScripts"));
        Db(c).indexOf("google") >= 0 && M(2);
        var d = c && Kb(Db(c), Uy),
            e = {};
        return function(f) {
            var g = f && f[tf.Ta];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var h = cj[g] || [],
                l = !0;
            if (a) {
                var n;
                if (n = l) a: {
                    if (b.indexOf(g) < 0) {
                        if (Zi && h.indexOf("cmpPartners") >= 0) {
                            n = !0;
                            break a
                        }
                        if (h && h.length > 0)
                            for (var p = 0; p < h.length; p++) {
                                if (b.indexOf(h[p]) < 0) {
                                    M(11);
                                    n = !1;
                                    break a
                                }
                            } else {
                                n = !1;
                                break a
                            }
                    }
                    n = !0
                }
                l = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r) q = r;
                else {
                    var u = xb(d, h || []);
                    u &&
                        M(10);
                    q = u
                }
            }
            var t = !l || q;
            !t && (h.indexOf("sandboxedScripts") === -1 ? 0 : Zi && h.indexOf("cmpPartners") >= 0 ? !Xy() : b && b.indexOf("sandboxedScripts") !== -1 ? 0 : xb(d, Vy)) && (t = !0);
            return e[g] = t
        }
    }

    function Xy() {
        var a = Cg(zg.C, E(5), function() {
            return {}
        });
        try {
            return a("inject_cmp_banner"), !0
        } catch (b) {
            return !1
        }
    };
    var Yy = function() {
        this.H = 0;
        this.C = {}
    };
    Yy.prototype.addListener = function(a, b, c) {
        var d = ++this.H;
        this.C[a] = this.C[a] || {};
        this.C[a][String(d)] = {
            listener: b,
            We: c
        };
        return d
    };
    Yy.prototype.removeListener = function(a, b) {
        var c = this.C[a],
            d = String(b);
        if (!c || !c[d]) return !1;
        delete c[d];
        return !0
    };
    var $y = function(a, b) {
        var c = [];
        zb(Zy.C[a], function(d, e) {
            c.indexOf(e.listener) < 0 && (e.We === void 0 || b.indexOf(e.We) >= 0) && c.push(e.listener)
        });
        return c
    };

    function az(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: E(5),
            originCId: Pj()
        }
    };

    function bz(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b]
        }
    };
    var dz = function(a, b) {
            this.C = !1;
            this.T = [];
            this.eventData = {
                tags: []
            };
            this.V = !1;
            this.H = this.P = 0;
            cz(this, a, b)
        },
        ez = function(a, b, c, d) {
            if (Xi.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            sd(d) && (e = td(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1
        },
        fz = function(a, b, c, d) {
            var e = a.eventData.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        gz = function(a) {
            if (!a.C) {
                for (var b = a.T, c = 0; c < b.length; c++) b[c]();
                a.C = !0;
                a.T.length = 0
            }
        },
        cz = function(a, b, c) {
            b !== void 0 && a.jg(b);
            c && w.setTimeout(function() {
                    gz(a)
                },
                Number(c))
        };
    dz.prototype.jg = function(a) {
        var b = this,
            c = Ib(function() {
                Uc(function() {
                    a(E(5), b.eventData)
                })
            });
        this.C ? c() : this.T.push(c)
    };
    var hz = function(a) {
            a.P++;
            return Ib(function() {
                a.H++;
                a.V && a.H >= a.P && gz(a)
            })
        },
        iz = function(a) {
            a.V = !0;
            a.H >= a.P && gz(a)
        };
    var jz = {};

    function kz() {
        return w[lz()]
    }

    function lz() {
        return w.GoogleAnalyticsObject || "ga"
    }

    function oz() {
        var a = E(5);
    }

    function pz(a, b) {
        return function() {
            var c = kz(),
                d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload"),
                        h = f.get("hitCallback"),
                        l = g.indexOf("&tid=" + b) < 0;
                    l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload", g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    };
    var vz = ["es", "1"],
        wz = {},
        xz = {};

    function yz(a, b) {
        if (Lk) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            wz[a] = [
                ["e", c],
                ["eid", a]
            ];
            Fp(a)
        }
    }

    function zz(a) {
        var b = a.eventId,
            c = a.Yd;
        if (!wz[b]) return [];
        var d = [];
        xz[b] || d.push(vz);
        d.push.apply(d, za(wz[b]));
        c && (xz[b] = !0);
        return d
    };
    var Az = {},
        Bz = {},
        Cz = {};

    function Dz(a, b, c, d) {
        Lk && P(120) && ((d === void 0 ? 0 : d) ? (Cz[b] = Cz[b] || 0, ++Cz[b]) : c !== void 0 ? (Bz[a] = Bz[a] || {}, Bz[a][b] = Math.round(c)) : (Az[a] = Az[a] || {}, Az[a][b] = (Az[a][b] || 0) + 1))
    }

    function Ez(a) {
        var b = a.eventId,
            c = a.Yd,
            d = Az[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Az[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function Fz(a) {
        var b = a.eventId,
            c = a.Yd,
            d = Bz[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Bz[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function Gz() {
        for (var a = [], b = m(Object.keys(Cz)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + Cz[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var Hz = {};

    function Iz(a, b, c) {
        Hz[a] != null || (Hz[a] = {});
        var d;
        (d = Hz[a])[c] != null || (d[c] = {});
        Hz[a][c][b] = (Hz[a][c][b] || 0) + 1
    };
    var Jz = {},
        Kz = {};

    function Lz(a, b, c) {
        if (Lk && b) {
            var d = Ik(b);
            Jz[a] = Jz[a] || [];
            Jz[a].push(c + d);
            var e = b[tf.Ta];
            if (!e) throw Error("Error: No function name given for function call.");
            var f = (Vf[e] ? "1" : "2") + d;
            Kz[a] = Kz[a] || [];
            Kz[a].push(f);
            Fp(a)
        }
    }

    function Mz(a) {
        var b = a.eventId,
            c = a.Yd,
            d = [],
            e = Jz[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = Kz[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete Jz[b], delete Kz[b]);
        return d
    };

    function Nz(a, b, c) {
        c = c === void 0 ? !1 : c;
        Oz().addRestriction(0, a, b, c)
    }

    function Pz(a, b, c) {
        c = c === void 0 ? !1 : c;
        Oz().addRestriction(1, a, b, c)
    }

    function Qz() {
        var a = Pj();
        return Oz().getRestrictions(1, a)
    }
    var Rz = function() {
            this.container = {};
            this.C = {}
        },
        Sz = function(a, b) {
            var c = a.container[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.container[b] = c);
            return c
        };
    Rz.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.C[b]) {
            var e = Sz(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    Rz.prototype.getRestrictions = function(a, b) {
        var c = Sz(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(za((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), za((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(za((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), za((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    };
    Rz.prototype.getExternalRestrictions = function(a, b) {
        var c = Sz(this, b),
            d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    };
    Rz.prototype.removeExternalRestrictions = function(a) {
        var b = Sz(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.C[a] = !0
    };

    function Oz() {
        return $n("r", function() {
            return new Rz
        })
    };

    function Tz(a, b, c, d) {
        var e = Tf[a],
            f = Uz(a, b, c, d);
        if (!f) return null;
        var g = gg(e[tf.Bm], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Tz(h.index, {
                onSuccess: f,
                onFailure: h.gn === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Uz(a, b, c, d) {
        function e() {
            function x() {
                Hm(3);
                var O = Gb() - J;
                az(1, a, Tf[a][tf.th]);
                Lz(c.id, f, "7");
                fz(c.Uc, D, "exception", O);
                P(109) && px(c, f, Jw.N.Ui);
                H || (H = !0, h())
            }
            if (f[tf.Np]) h();
            else {
                var y = fg(f, c, []),
                    A = y[tf.Zn];
                if (A != null)
                    for (var C = 0; C < A.length; C++)
                        if (!Rn(A[C])) {
                            h();
                            return
                        } var D = ez(c.Uc, String(f[tf.Ta]), Number(f[tf.Eh]), y[tf.METADATA]),
                    H = !1;
                y.vtp_gtmOnSuccess = function() {
                    if (!H) {
                        H = !0;
                        var O = Gb() - J;
                        Lz(c.id, Tf[a], "5");
                        fz(c.Uc, D, "success", O);
                        P(109) && px(c, f, Jw.N.Wi);
                        g()
                    }
                };
                y.vtp_gtmOnFailure = function() {
                    if (!H) {
                        H = !0;
                        var O = Gb() - J;
                        Lz(c.id, Tf[a], "6");
                        fz(c.Uc, D, "failure", O);
                        P(109) && px(c, f, Jw.N.Vi);
                        h()
                    }
                };
                y.vtp_gtmTagId = f.tag_id;
                y.vtp_gtmEventId = c.id;
                c.priorityId && (y.vtp_gtmPriorityId = c.priorityId);
                Lz(c.id, f, "1");
                P(109) && ox(c, f);
                var J = Gb();
                try {
                    hg(y, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (O) {
                    x(O)
                }
                P(109) && px(c, f, Jw.N.Mm)
            }
        }
        var f = Tf[a],
            g = b.onSuccess,
            h = b.onFailure,
            l = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = gg(f[tf.Nm], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Tz(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: l
                }, c, d);
            if (!q) return null;
            g = q;
            h = p.gn === 2 ? l : q
        }
        if (f[tf.sm] || f[tf.Pp]) {
            var r = f[tf.sm] ? Uf : c.rs,
                u = g,
                t = h;
            if (!r[a]) {
                var v = Vz(a, r, Ib(e));
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }

    function Vz(a, b, c) {
        var d = [],
            e = [];
        b[a] = Wz(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Xz;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Yz;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Wz(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Xz(a) {
        a()
    }

    function Yz(a, b) {
        b()
    };
    var aA = function(a, b) {
        for (var c = [], d = 0; d < Tf.length; d++)
            if (a[d]) {
                var e = Tf[d];
                var f = hz(b.Uc);
                try {
                    var g = Tz(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = e[tf.Ta];
                        if (!h) throw Error("Error: No function name given for function call.");
                        var l = Vf[h];
                        c.push({
                            Mn: d,
                            priorityOverride: (l ? l.priorityOverride || 0 : 0) || bz(e[tf.Ta], 1) || 0,
                            execute: g
                        })
                    } else Zz(d, b), f()
                } catch (p) {
                    f()
                }
            } c.sort($z);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length > 0
    };

    function bA(a, b) {
        if (!Zy) return !1;
        var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
            d = $y(a.event, c ? String(c).split(",") : []);
        if (!d.length) return !1;
        for (var e = 0; e < d.length; ++e) {
            var f = hz(b);
            try {
                d[e](a, f)
            } catch (g) {
                f()
            }
        }
        return !0
    }

    function $z(a, b) {
        var c, d = b.priorityOverride,
            e = a.priorityOverride;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.Mn,
                h = b.Mn;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function Zz(a, b) {
        if (Lk) {
            var c = function(d) {
                var e = b.isBlocked(Tf[d]) ? "3" : "4",
                    f = gg(Tf[d][tf.Bm], b, []);
                f && f.length && c(f[0].index);
                Lz(b.id, Tf[d], e);
                var g = gg(Tf[d][tf.Nm], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var cA = !1,
        Zy;

    function dA() {
        Zy || (Zy = new Yy);
        return Zy
    }

    function eA(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (P(109)) {}
        if (d === "gtm.js") {
            if (cA) return !1;
            cA = !0
        }
        var e = !1,
            f = Qz(),
            g = td(a, null);
        if (!f.every(function(u) {
                return u({
                    originalEventData: g
                })
            })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0
        }
        yz(b, d);
        var h = a.eventCallback,
            l =
            a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: fA(g, e),
                rs: [],
                logMacroError: function(u, t, v) {
                    M(6);
                    Hm(4);
                    az(2, t, v)
                },
                cachedModelValues: gA(),
                Uc: new dz(function() {
                    if (P(109)) {}
                    h && h.apply(h, Array.prototype.slice.call(arguments,
                        0))
                }, l),
                originalEventData: g
            };
        P(120) && Lk && (n.reportMacroDiscrepancy = Dz);
        P(109) && lx(n.id);
        var p = ug(n);
        P(109) && mx(n.id);
        e && (p = hA(p));
        P(109) && kx(b);
        var q = aA(p, n),
            r = bA(a, n.Uc);
        iz(n.Uc);
        d !== "gtm.js" && d !== "gtm.sync" || oz();
        return iA(p, q) || r
    }

    function gA() {
        var a = {};
        a.event = pp("event", 1);
        a.ecommerce = pp("ecommerce", 1);
        a.gtm = pp("gtm");
        a.eventModel = pp("eventModel");
        return a
    }

    function fA(a, b) {
        var c = Wy();
        return function(d) {
            var e = c(d);
            if ((!Zi || !P(407)) && e) return !0;
            var f = d && d[tf.Ta];
            if (!f || typeof f !== "string") return !0;
            f = f.replace(/^_*/, "");
            e && Zi && P(407) && Lk && Iz(Number(a["gtm.uniqueEventId"]), f, "bl");
            var g, h = Pj();
            g = Oz().getRestrictions(0, h);
            var l = a;
            b && (l = td(a, null), l["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var n = !1, p = cj[f] || [], q = m(g), r = q.next(); !r.done; r = q.next()) {
                var u = r.value;
                try {
                    u({
                        entityId: f,
                        securityGroups: p,
                        originalEventData: l
                    }) || (n = !0)
                } catch (t) {
                    n = !0
                }
            }
            return n ||
                e
        }
    }

    function hA(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Tf[c][tf.Ta]);
                if (Wi[d] || Tf[c][tf.Qp] !== void 0 || bz(d, 2)) b[c] = !0
            } return b
    }

    function iA(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Tf[c] && !Xi[String(Tf[c][tf.Ta])]) return !0;
        return !1
    };

    function jA() {
        dA().addListener("gtm.init", function(a, b) {
            Ri.H = !0;
            sm();
            b()
        })
    };

    function kA() {
        if (Zn.pscdl !== void 0) km(gm.Z.Zh) === void 0 && jm(gm.Z.Zh, Zn.pscdl);
        else {
            var a = function(c) {
                    Zn.pscdl = c;
                    jm(gm.Z.Zh, c)
                },
                b = function() {
                    a("error")
                };
            try {
                Bc.cookieDeprecationLabel ? (a("pending"), Bc.cookieDeprecationLabel.getValue().then(a).catch(b)) : a("noapi")
            } catch (c) {
                b(c)
            }
        }
    };
    var lA = !1,
        mA = 0,
        nA = [];

    function oA(a) {
        if (!lA) {
            var b = z.createEventObject,
                c = z.readyState === "complete",
                d = z.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                lA = !0;
                for (var e = 0; e < nA.length; e++) Uc(nA[e])
            }
            nA.push = function() {
                for (var f = Da.apply(0, arguments), g = 0; g < f.length; g++) Uc(f[g]);
                return 0
            }
        }
    }

    function pA() {
        if (!lA && mA < 140) {
            mA++;
            try {
                var a, b;
                (b = (a = z.documentElement).doScroll) == null || b.call(a, "left");
                oA()
            } catch (c) {
                w.setTimeout(pA, 50)
            }
        }
    }

    function qA() {
        var a = w;
        lA = !1;
        mA = 0;
        if (z.readyState === "interactive" && !z.createEventObject || z.readyState === "complete") oA();
        else {
            Sc(z, "DOMContentLoaded", oA);
            Sc(z, "readystatechange", oA);
            if (z.createEventObject && z.documentElement.doScroll) {
                var b = !0;
                try {
                    b = !a.frameElement
                } catch (c) {}
                b && pA()
            }
            Sc(a, "load", oA)
        }
    }

    function rA(a) {
        lA ? a() : nA.push(a)
    };

    function sA(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: fo()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }

    function tA(a) {
        for (var b = m([K.m.vd, K.m.Oc]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Op.C[d];
            if (e) return e
        }
    };
    var uA = !1;
    var vA = 0;

    function wA(a) {
        Nk && a === void 0 && vA === 0 && (lk("mcc", "1"), vA = 1)
    };

    function xA(a, b) {
        return arguments.length === 1 ? yA("set", a) : yA("set", a, b)
    }

    function zA(a, b) {
        return arguments.length === 1 ? yA("config", a) : yA("config", a, b)
    }

    function AA(a, b, c) {
        c = c || {};
        c[K.m.ud] = a;
        return yA("event", b, c)
    }

    function yA() {
        return arguments
    };
    var BA = function() {
        this.messages = [];
        this.C = []
    };
    BA.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = na(Object, "assign").call(Object, {}, c, {
                eventId: b,
                priorityId: d,
                fromContainerExecution: !0
            }),
            f = {
                message: a,
                notBeforeEventId: b,
                priorityId: d,
                messageContext: e
            };
        this.messages.push(f);
        for (var g = 0; g < this.C.length; g++) try {
            this.C[g](f)
        } catch (h) {}
    };
    BA.prototype.listen = function(a) {
        this.C.push(a)
    };
    BA.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    BA.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    };

    function CA(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata[Q.A.Pa] = E(6);
        DA().enqueue(a, b, c)
    }

    function EA() {
        var a = FA;
        DA().listen(a)
    }

    function DA() {
        return $n("mb", function() {
            return new BA
        })
    };
    var GA = 0,
        HA = 0,
        IA = {};
    var JA = {},
        KA = {};

    function LA(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                Hj: void 0,
                mj: void 0
            }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.Hj = lo(g, b), e.Hj) {
                    var h = Nj();
                    vb(h, function(r) {
                        return function(u) {
                            return r.Hj.destinationId === u
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var l = JA[g] || [];
                e.mj = {};
                l.forEach(function(r) {
                    return function(u) {
                        r.mj[u] = !0
                    }
                }(e));
                for (var n = Qj(), p = 0; p < n.length; p++)
                    if (e.mj[n[p]]) {
                        c = c.concat(Nj());
                        break
                    } var q = KA[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            Aj: c,
            Dr: d
        }
    }

    function MA(a) {
        zb(JA, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }

    function NA(a) {
        zb(KA, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    };
    var OA = !1,
        PA = void 0,
        QA = void 0;

    function RA(a, b, c) {
        var d = td(a, null);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && M(136);
        var e = td(b, null);
        td(c, e);
        CA(zA(Qj()[0], e), a.eventId, d)
    };

    function SA(a, b) {
        var c = {},
            d = (c.event = a, c);
        b && (d.eventModel = td(b, null), b[K.m.zf] && (d.eventCallback = b[K.m.zf]), b[K.m.Zg] && (d.eventTimeout = b[K.m.Zg]));
        return d
    }

    function TA(a, b) {
        var c = a && a[K.m.ud];
        c === void 0 && (c = kp(K.m.ud, 2), c === void 0 && (c = "default"));
        if (sb(c) || Array.isArray(c)) {
            var d;
            d = b.isGtmEvent ? sb(c) ? [c] : c : c.toString().replace(/\s+/g, "").split(",");
            var e = LA(d, b.isGtmEvent),
                f = e.Aj,
                g = e.Dr;
            if (g.length)
                for (var h = tA(a), l = 0; l < g.length; l++) {
                    var n = lo(g[l], b.isGtmEvent);
                    if (n) {
                        var p = n.destinationId,
                            q = void 0;
                        ((q = Hj(n.destinationId)) == null ? void 0 : q.state) === 0 || Ry(p, h, {
                            source: 3,
                            fromContainerExecution: b.fromContainerExecution
                        })
                    }
                }
            var r = f.concat(g);
            return {
                Aj: mo(f, b.isGtmEvent),
                nq: mo(r, b.isGtmEvent)
            }
        }
    }
    var UA = {
            config: function(a, b) {
                var c = sA(a, b);
                if (!(a.length < 2) && sb(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if (a[2] !== void 0 && !sd(a[2]) || a.length > 3) return;
                        d = a[2]
                    }
                    var e = lo(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, h;
                        a: {
                            if (!kg(7)) {
                                var l = Sj(Tj());
                                if (ek(l)) {
                                    var n = l.parent,
                                        p = n.isDestination;
                                    h = {
                                        Hr: Sj(n),
                                        Ar: p
                                    };
                                    break a
                                }
                            }
                            h = void 0
                        }
                        var q = h;
                        q && (f = q.Hr, g = q.Ar);
                        yz(c.eventId, "gtag.config");
                        var r = e.destinationId,
                            u = e.id !== r;
                        if (u ? Nj().indexOf(r) === -1 : Qj().indexOf(r) === -1) {
                            if (!b.inheritParentConfig && !d[K.m.Ic]) {
                                var t = tA(d);
                                if (u) Ry(r, t, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var v = d;
                                    PA ? RA(b, v, PA) : QA || (QA = td(v, null))
                                } else My(r, t, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (f && (M(128), g && M(130), b.inheritParentConfig)) {
                                var x;
                                var y = d;
                                QA ? (RA(b, QA, y), x = !1) : (!y[K.m.xd] && kg(11) && PA || (PA = td(y, null)), x = !0);
                                x && f.containers && f.containers.join(",");
                                return
                            }
                            Nk && (vA === 1 && (ik.mcc = !1), vA = 2);
                            if (kg(11) && !u && !d[K.m.xd]) {
                                var A = OA;
                                OA = !0;
                                var C = d,
                                    D = Object.keys(C).length >
                                    0 ? 2 : 1,
                                    H, J, O = (b == null ? void 0 : (J = b.originatingEntity) == null ? void 0 : J.originContainerId) || "";
                                H = O ? Lb(O, "GTM-") ? 3 : 2 : 1;
                                if (A) {
                                    if (M(184), HA === H || HA !== 3 && H !== 3 || M(185), GA !== 2 && D !== 2 || M(186), GA === 2 && D === 2) {
                                        var aa;
                                        a: {
                                            var W = IA,
                                                N = Object.keys(W),
                                                S = Object.keys(C);
                                            if (N.length !== S.length) aa = !0;
                                            else {
                                                for (var la = m(N), ja = la.next(); !ja.done; ja = la.next()) {
                                                    var V = ja.value;
                                                    if (!C.hasOwnProperty(V) || W[V] !== C[V]) {
                                                        aa = !0;
                                                        break a
                                                    }
                                                }
                                                aa = !1
                                            }
                                        }
                                        aa && M(189)
                                    }
                                } else GA = D, HA = H, IA = C;
                                if (A) return
                            }
                            uA || M(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    NA(e.id);
                                    var U =
                                        e.id,
                                        ha = d[K.m.gh] || "default";
                                    ha = String(ha).split(",");
                                    for (var ta = 0; ta < ha.length; ta++) {
                                        var pa = KA[ha[ta]] || [];
                                        KA[ha[ta]] = pa;
                                        pa.indexOf(U) < 0 && pa.push(U)
                                    }
                                } else {
                                    MA(e.id);
                                    var Ma = e.id,
                                        Sa = d[K.m.gh] || "default";
                                    Sa = Sa.toString().split(",");
                                    for (var mb = 0; mb < Sa.length; mb++) {
                                        var cb = JA[Sa[mb]] || [];
                                        JA[Sa[mb]] = cb;
                                        cb.indexOf(Ma) < 0 && cb.push(Ma)
                                    }
                                } delete d[K.m.gh];
                            var Za = b.eventMetadata || {};
                            Za.hasOwnProperty(Q.A.Dd) || (Za[Q.A.Dd] = !b.fromContainerExecution);
                            b.eventMetadata = Za;
                            delete d[K.m.zf];
                            for (var Pb = u ? [e.id] : Nj(), Qb =
                                    0; Qb < Pb.length; Qb++) {
                                var ke = d,
                                    Gg = Pb[Qb],
                                    le = td(b, null),
                                    Re = lo(Gg, le.isGtmEvent);
                                Re && Op.push("config", [ke], Re, le)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (a.length === 3) {
                    M(39);
                    var c = sA(a, b),
                        d = a[1],
                        e = {},
                        f = hn(a[2]),
                        g;
                    for (g in f)
                        if (f.hasOwnProperty(g)) {
                            var h = f[g];
                            e[g] = g === K.m.Jg ? Array.isArray(h) ? NaN : Number(h) : g === K.m.oc ? (Array.isArray(h) ? h : [h]).map(jn) : kn(h)
                        } b.fromContainerExecution || (e[K.m.X] && M(139), e[K.m.Na] && M(140));
                    d === "default" ? Nn(e) : d === "update" ? Pn(e, c) : d === "declare" && b.fromContainerExecution && Mn(e)
                }
            },
            container_config: function(a,
                b) {
                if (b.isGtmEvent && !(b.eventMetadata && b.eventMetadata[Q.A.eb] && b.eventMetadata[Q.A.Pa] !== Pj() || a.length !== 3) && sb(a[1]) && sd(a[2])) {
                    var c = a[2],
                        d = lo(a[1], !0);
                    if (d) {
                        var e = d.destinationId,
                            f = td(b, null),
                            g = lo(e, f.isGtmEvent);
                        g && Op.push("container_config", [c], g, f)
                    }
                }
            },
            destination_config: function(a, b) {
                if (b.isGtmEvent && !(b.eventMetadata && b.eventMetadata[Q.A.eb] && b.eventMetadata[Q.A.Pa] !== Pj() || a.length !== 3) && sb(a[1]) && sd(a[2])) {
                    var c = a[2],
                        d = lo(a[1], !0);
                    if (d) {
                        var e = d.destinationId,
                            f = td(b, null),
                            g = lo(e, f.isGtmEvent);
                        g && Op.push("destination_config", [c], g, f)
                    }
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(a.length < 2) && sb(c)) {
                    var d = void 0;
                    if (a.length > 2) {
                        if (!sd(a[2]) && a[2] !== void 0 || a.length > 3) return;
                        d = a[2]
                    }
                    var e = SA(c, d),
                        f = sA(a, b),
                        g = f.eventId,
                        h = f.priorityId;
                    e["gtm.uniqueEventId"] = g;
                    h && (e["gtm.priorityId"] = h);
                    if (c === "optimize.callback") return e.eventModel = e.eventModel || {}, e;
                    var l = TA(d, b);
                    if (l) {
                        for (var n = l.Aj, p = l.nq, q = p.map(function(O) {
                                    return O.id
                                }), r = p.map(function(O) {
                                    return O.destinationId
                                }), u = n.map(function(O) {
                                    return O.id
                                }),
                                t = m(Nj()), v = t.next(); !v.done; v = t.next()) {
                            var x = v.value;
                            r.indexOf(x) < 0 && u.push(x)
                        }
                        yz(g, c);
                        for (var y = m(u), A = y.next(); !A.done; A = y.next()) {
                            var C = A.value,
                                D = td(b, null),
                                H = td(d, null);
                            delete H[K.m.zf];
                            var J = D.eventMetadata || {};
                            J.hasOwnProperty(Q.A.Dd) || (J[Q.A.Dd] = !D.fromContainerExecution);
                            J[Q.A.Pi] = q.slice();
                            J[Q.A.gg] = r.slice();
                            D.eventMetadata = J;
                            Np(c, H, C, D)
                        }
                        e.eventModel = e.eventModel || {};
                        q.length > 0 ? e.eventModel[K.m.ud] = q.join(",") : delete e.eventModel[K.m.ud];
                        uA || M(43);
                        b.noGtmEvent === void 0 && b.eventMetadata &&
                            b.eventMetadata[Q.A.Km] && (b.noGtmEvent = !0);
                        e.eventModel[K.m.Hc] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : e
                    }
                }
            },
            get: function(a, b) {
                M(53);
                if (a.length === 4 && sb(a[1]) && sb(a[2]) && rb(a[3])) {
                    var c = lo(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        uA || M(43);
                        var f = tA();
                        if (vb(Nj(), function(h) {
                                return c.destinationId === h
                            })) {
                            sA(a, b);
                            var g = {};
                            td((g[K.m.Df] = d, g[K.m.Cf] = e, g), null);
                            Pp(d, function(h) {
                                Uc(function() {
                                    e(h)
                                })
                            }, c.id, b)
                        } else Ry(c.destinationId, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        })
                    }
                }
            },
            js: function(a, b) {
                if (a.length === 2 && a[1].getTime) {
                    uA = !0;
                    var c = sA(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (a.length === 3 && sb(a[1]) && rb(a[2])) {
                    if (Ag(a[1], a[2]), M(74), a[1] === "all") {
                        M(75);
                        var b = !1;
                        try {
                            b = a[2](E(5), "unknown", {})
                        } catch (c) {}
                        b || M(76)
                    }
                } else M(73)
            },
            set: function(a, b) {
                var c = void 0;
                a.length === 2 && sd(a[1]) ? c = td(a[1], null) : a.length === 3 && sb(a[1]) && (c = {}, sd(a[2]) || Array.isArray(a[2]) ?
                    c[a[1]] = td(a[2], null) : c[a[1]] = a[2]);
                if (c) {
                    var d = sA(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    td(c, null);
                    E(5);
                    var g = td(c, null);
                    Op.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        VA = {
            policy: !0
        };
    var XA = function(a) {
        if (WA(a)) return a;
        this.value = a
    };
    XA.prototype.getUntrustedMessageValue = function() {
        return this.value
    };
    var WA = function(a) {
        return !a || qd(a) !== "object" || sd(a) ? !1 : "getUntrustedMessageValue" in a
    };
    XA.prototype.getUntrustedMessageValue = XA.prototype.getUntrustedMessageValue;
    var YA = !1,
        ZA = [];

    function $A() {
        if (!YA) {
            YA = !0;
            for (var a = 0; a < ZA.length; a++) Uc(ZA[a])
        }
    }

    function aB(a) {
        YA ? Uc(a) : ZA.push(a)
    };
    var bB = 0,
        cB = {},
        dB = [],
        eB = [],
        fB = !1,
        gB = !1;

    function hB(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    function iB(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return jB(a)
    }

    function kB(a, b) {
        if (!tb(b) || b < 0) b = 0;
        var c = eo(),
            d = 0,
            e = !1,
            f = void 0;
        f = w.setTimeout(function() {
            e || (e = !0, a());
            f = void 0
        }, b);
        return function() {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (w.clearTimeout(f), f = void 0), e || (a(), e = !0))
        }
    }

    function lB(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (Ab(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0
        }
        return !1
    }

    function mB() {
        var a;
        if (eB.length) a = eB.shift();
        else if (dB.length) a = dB.shift();
        else return;
        var b;
        var c = a;
        if (fB || !lB(c.message)) b = c;
        else {
            fB = !0;
            var d = c.message["gtm.uniqueEventId"],
                e, f;
            typeof d === "number" ? (e = d - 2, f = d - 1) : (e = fo(), f = fo(), c.message["gtm.uniqueEventId"] = fo());
            var g = {},
                h = {
                    message: (g.event = "gtm.init_consent", g["gtm.uniqueEventId"] = e, g),
                    messageContext: {
                        eventId: e
                    }
                },
                l = {},
                n = {
                    message: (l.event = "gtm.init", l["gtm.uniqueEventId"] = f, l),
                    messageContext: {
                        eventId: f
                    }
                };
            dB.unshift(n, c);
            b = h
        }
        return b
    }

    function nB() {
        for (var a = !1, b; !gB && (b = mB());) {
            gB = !0;
            delete hp.eventModel;
            jp();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) gB = !1;
            else {
                e.fromContainerExecution && op();
                try {
                    if (rb(d)) try {
                        d.call(lp)
                    } catch (H) {} else if (Array.isArray(d)) {
                        if (sb(d[0])) {
                            var f = d[0].split("."),
                                g = f.pop(),
                                h = d.slice(1),
                                l = kp(f.join("."), 2);
                            if (l != null) try {
                                l[g].apply(l, h)
                            } catch (H) {}
                        }
                    } else {
                        var n = void 0;
                        if (Ab(d)) a: {
                            if (d.length && sb(d[0])) {
                                var p = UA[d[0]];
                                if (p && (!e.fromContainerExecution || !VA[d[0]])) {
                                    n = p(d, e);
                                    break a
                                }
                            }
                            n = void 0
                        }
                        else n =
                            d;
                        if (n) {
                            var q;
                            for (var r = n, u = r._clear || e.overwriteModelFields, t = m(Object.keys(r)), v = t.next(); !v.done; v = t.next()) {
                                var x = v.value;
                                x !== "_clear" && (u && np(x), np(x, r[x]))
                            }
                            bj || (bj = r["gtm.start"]);
                            var y = r["gtm.uniqueEventId"];
                            r.event ? (typeof y !== "number" && (y = fo(), r["gtm.uniqueEventId"] = y, np("gtm.uniqueEventId", y)), q = eA(r)) : q = !1;
                            a = q || a
                        }
                    }
                } finally {
                    e.fromContainerExecution && jp(!0);
                    var A = d["gtm.uniqueEventId"];
                    if (typeof A === "number") {
                        for (var C = cB[String(A)] || [], D = 0; D < C.length; D++) eB.push(oB(C[D]));
                        C.length && eB.sort(hB);
                        delete cB[String(A)];
                        A > bB && (bB = A)
                    }
                    gB = !1
                }
            }
        }
        return !a
    }

    function pB() {
        if (P(109)) {
            var a = !kg(51);
        }
        var c = nB();
        if (P(109)) {}
        try {
            var e = w[E(19)],
                f = E(5),
                g = e.hide;
            if (g && g[f] !== void 0 &&
                g.end) {
                g[f] = !1;
                var h = !0,
                    l;
                for (l in g)
                    if (g.hasOwnProperty(l) && g[l] === !0) {
                        h = !1;
                        break
                    } h && (g.end(), g.end = null)
            }
        } catch (n) {
            E(5)
        }
        return c
    }

    function FA(a) {
        if (bB < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            cB[b] = cB[b] || [];
            cB[b].push(a)
        } else eB.push(oB(a)), eB.sort(hB), Uc(function() {
            gB || nB()
        })
    }

    function oB(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }

    function qB() {
        function a(f) {
            var g = {};
            if (WA(f)) {
                var h = f;
                f = WA(h) ? h.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = Fc(E(19), []),
            c = co();
        c.pruned === !0 && M(83);
        cB = DA().get();
        EA();
        rA(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom", f))
            }
        });
        aB(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load", f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (Zn.SANDBOXED_JS_SEMAPHORE > 0) {
                f = [];
                for (var g = 0; g < arguments.length; g++) f[g] = new XA(arguments[g])
            } else f = [].slice.call(arguments, 0);
            var h = f.map(function(q) {
                return a(q)
            });
            dB.push.apply(dB, h);
            var l = d.apply(b, f),
                n = Math.max(100, pg(1, 300));
            if (this.length > n)
                for (M(4), c.pruned = !0; this.length > n;) this.shift();
            var p = typeof l !== "boolean" || l;
            return nB() && p
        };
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        dB.push.apply(dB, e);
        if (!kg(51)) {
            if (P(109)) {}
            Uc(pB)
        }
    }
    var jB = function(a) {
        return w[E(19)].push(a)
    };

    function rB(a) {
        jB(a)
    };

    function sB() {
        var a, b = pj(w.location.href);
        (a = b.hostname + b.pathname) && lk("dl", encodeURIComponent(a));
        var c;
        var d = E(5);
        if (d) {
            var e = kg(7) ? 1 : 0,
                f = Zj(),
                g = f && f.fromContainerExecution ? 1 : 0,
                h = f && f.source || 0,
                l = E(6);
            c = d + ";" + l + ";" + g + ";" + h + ";" + e
        } else c = void 0;
        var n = c;
        n && lk("tdp", n);
        var p = fq(!0);
        p !== void 0 && lk("frm", String(p))
    };
    var tB = wk(),
        uB = void 0;

    function vB(a) {
        return yk(a, function(b) {
            return b.jb > 0 ? String(b.jb) : void 0
        })
    }

    function wB() {
        if (vn() || Nk) lk("csp", function() {
            var a = vB(tB);
            zk(tB);
            return a
        }, !1), lk("mde", function() {
            var a = vB(Bk);
            zk(Bk);
            return a
        }, !1), w.addEventListener("securitypolicyviolation", xB)
    }

    function xB(a) {
        if (a.disposition === "enforce") {
            M(179);
            var b = Hk(a.effectiveDirective);
            if (b) {
                var c;
                var d = Fk(b, a.blockedURI);
                c = d ? Dk[b][d] : void 0;
                if (c) {
                    var e;
                    a: {
                        try {
                            var f = new URL(a.blockedURI),
                                g = f.pathname.indexOf(";");
                            e = g >= 0 ? f.origin + f.pathname.substring(0, g) : f.origin + f.pathname;
                            break a
                        } catch (v) {}
                        e = void 0
                    }
                    var h = e;
                    if (h) {
                        for (var l = m(c), n = l.next(); !n.done; n = l.next()) {
                            var p = n.value;
                            if (!p.Cn) {
                                p.Cn = !0;
                                var q = {
                                    eventId: p.eventId,
                                    priorityId: p.priorityId
                                };
                                if (vn()) {
                                    var r = q,
                                        u = {
                                            type: 1,
                                            blockedUrl: h,
                                            endpoint: p.endpoint,
                                            violation: a.effectiveDirective
                                        };
                                    if (vn()) {
                                        var t = Bn("TAG_DIAGNOSTICS", {
                                            eventId: r == null ? void 0 : r.eventId,
                                            priorityId: r == null ? void 0 : r.priorityId
                                        });
                                        t.tagDiagnostics = u;
                                        un(t)
                                    }
                                }
                                yB(p.destinationId, p.endpoint)
                            }
                        }
                        Gk(b, a.blockedURI)
                    }
                }
            }
        }
    }

    function yB(a, b) {
        Ak(tB, a, b);
        mk("csp", !0);
        mk("mde", !0);
        b !== 61 && b !== 56 && uB === void 0 && (uB = w.setTimeout(function() {
            tB.jb > 0 && sm(!1);
            uB = void 0
        }, 500))
    };
    var zB = void 0;

    function AB() {
        P(236) && w.addEventListener("pageshow", function(a) {
            a && (lk("bfc", function() {
                return zB ? "1" : "0"
            }), a.persisted ? (zB = !0, mk("bfc", !0), sm()) : zB = !1)
        })
    };

    function BB() {
        var a;
        var b = Rj();
        if (b)
            if (b.canonicalContainerId) a = b.canonicalContainerId;
            else {
                var c, d = b.scriptContainerId || ((c = b.destinations) == null ? void 0 : c[0]);
                a = d ? "_" + d : void 0
            }
        else a = void 0;
        var e = a;
        e && lk("pcid", e)
    };
    var CB = {},
        DB = (CB[1] = function() {
            return w.fetch
        }, CB[2] = function() {
            return Math.random
        }, CB[3] = function() {
            return Bc.sendBeacon
        }, CB[4] = function() {
            return w.XMLHttpRequest
        }, CB);

    function EB() {
        if (P(409)) {
            for (var a = [], b = m(Object.keys(DB)), c = b.next(); !c.done; c = b.next()) {
                var d = c.value,
                    e = DB[d](),
                    f;
                if (!(f = typeof e !== "function")) {
                    var g = Function.prototype.toString.call(e);
                    f = Mb(g, "{ [native code] }") || Mb(g, "{\n    [native code]\n}")
                }
                f || a.push(d)
            }
            a.length > 0 && lk("jsp", a.join("~"))
        }
    };
    var FB = /^(https?:)?\/\//;

    function GB() {
        var a = Uj();
        if (a) {
            var b;
            a: {
                var c, d = (c = a.scriptElement) == null ? void 0 : c.src;
                if (d) {
                    var e;
                    try {
                        var f;
                        e = (f = hd()) == null ? void 0 : f.getEntriesByType("resource")
                    } catch (q) {}
                    if (e) {
                        for (var g = -1, h = m(e), l = h.next(); !l.done; l = h.next()) {
                            var n = l.value;
                            if (n.initiatorType === "script" && (g += 1, n.name.replace(FB, "") === d.replace(FB, ""))) {
                                b = g;
                                break a
                            }
                        }
                        M(146)
                    } else M(145)
                }
                b = void 0
            }
            var p = b;
            p !== void 0 && (a.canonicalContainerId && lk("rtg", String(a.canonicalContainerId)), lk("slo", String(p)), lk("hlo", a.htmlLoadOrder || "-1"),
                lk("lst", String(a.loadScriptType || "0")))
        } else M(144)
    };

    function aC() {};
    var bC = function() {};
    bC.prototype.toString = function() {
        return "undefined"
    };
    var cC = new bC;
    var eC = function() {
            $n("rm", function() {
                return {}
            })[Pj()] = function(a) {
                if (dC.hasOwnProperty(a)) return dC[a]
            }
        },
        hC = function(a, b, c) {
            if (a instanceof fC) {
                var d = a,
                    e = d.resolve,
                    f = b,
                    g = String(fo());
                gC[g] = [f, c];
                a = e.call(d, g);
                b = qb
            }
            return {
                lr: a,
                onSuccess: b
            }
        },
        iC = function(a) {
            var b = a ? 0 : 1;
            return function(c) {
                M(a ? 134 : 135);
                var d = gC[c];
                if (d && typeof d[b] === "function") d[b]();
                gC[c] = void 0
            }
        },
        fC = function(a) {
            this.valueOf = this.toString;
            this.resolve = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === cC ? b : a[d]);
                return c.join("")
            }
        };
    fC.prototype.toString = function() {
        return this.resolve("undefined")
    };
    var dC = {},
        gC = {};
    var jC = {};

    function kC(a) {
        Lk && (jC[a] = (jC[a] || 0) + 1)
    }

    function lC() {
        var a = [];
        jC[1] && a.push("1." + jC[1]);
        jC[2] && a.push("2." + jC[2]);
        jC[3] && a.push("3." + jC[3]);
        return a.length ? [
            ["odp", a.join("~")]
        ] : []
    };

    function mC() {
        (P(212) || P(405)) && E(5).indexOf("GTM-") !== 0 && (Bx("detect_link_click_events", function(a, b, c) {
            var d = c.options;
            return P(405) ? ((d == null ? void 0 : d.waitForTags) === !0 && kC(1), !0) : (d == null ? void 0 : d.waitForTags) !== !0
        }), Bx("detect_form_submit_events", function(a, b, c) {
            var d = c.options;
            return P(405) ? ((d == null ? void 0 : d.waitForTags) === !0 && kC(2), !0) : (d == null ? void 0 : d.waitForTags) !== !0
        }), Bx("detect_youtube_activity_events", function(a, b, c) {
            var d = c.options;
            return P(405) ? ((d == null ? void 0 : d.fixMissingApi) ===
                !0 && kC(3), !0) : (d == null ? void 0 : d.fixMissingApi) !== !0
        }));
        (P(212) || P(407)) && Zi && Nz(Pj(), function(a) {
            var b, c, d;
            b = a.entityId;
            c = a.securityGroups;
            d = a.originalEventData;
            var e = "__" + b,
                f = bz(e, 5) || !(!Vf[e] || !Vf[e][5]) || c.includes("cmpPartners");
            return P(407) ? (f || Lk && Iz(Number(d["gtm.uniqueEventId"]), b, "r"), !0) : f
        })
    };

    function nC(a, b) {
        function c(g) {
            var h = pj(g),
                l = jj(h, "protocol"),
                n = jj(h, "host", !0),
                p = jj(h, "port"),
                q = jj(h, "path").toLowerCase().replace(/\/$/, "");
            if (l === void 0 || l === "http" && p === "80" || l === "https" && p === "443") l = "web", p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function oC(a) {
        return pC(a) ? 1 : 0
    }

    function pC(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = td(a, {});
                td({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (oC(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return gh(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < bh.length; g++) {
                            var h = bh[g];
                            if (b[h] != null) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (l) {}
                    f = !1
                }
                return f;
            case "_ew":
                return ch(b, c);
            case "_eq":
                return hh(b, c);
            case "_ge":
                return ih(b, c);
            case "_gt":
                return kh(b, c);
            case "_lc":
                return dh(b, c);
            case "_le":
                return jh(b,
                    c);
            case "_lt":
                return lh(b, c);
            case "_re":
                return fh(b, c, a.ignore_case);
            case "_sw":
                return mh(b, c);
            case "_um":
                return nC(b, c)
        }
        return !1
    };
    var qC = function() {
        this.C = this.gppString = void 0
    };
    qC.prototype.reset = function() {
        this.C = this.gppString = void 0
    };
    var rC = new qC;
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    var sC = function(a, b, c, d) {
        mq.call(this);
        this.Bh = b;
        this.dg = c;
        this.Rc = d;
        this.yb = new Map;
        this.Ch = 0;
        this.sa = new Map;
        this.nb = new Map;
        this.V = void 0;
        this.H = a
    };
    wa(sC, mq);
    sC.prototype.P = function() {
        delete this.C;
        this.yb.clear();
        this.sa.clear();
        this.nb.clear();
        this.V && (iq(this.H, "message", this.V), delete this.V);
        delete this.H;
        delete this.Rc;
        mq.prototype.P.call(this)
    };
    var tC = function(a) {
            if (a.C) return a.C;
            a.dg && a.dg(a.H) ? a.C = a.H : a.C = eq(a.H, a.Bh);
            var b;
            return (b = a.C) != null ? b : null
        },
        vC = function(a, b, c) {
            if (tC(a))
                if (a.C === a.H) {
                    var d = a.yb.get(b);
                    d && d(a.C, c)
                } else {
                    var e = a.sa.get(b);
                    if (e && e.zj) {
                        uC(a);
                        var f = ++a.Ch;
                        a.nb.set(f, {
                            Rh: e.Rh,
                            Gq: e.on(c),
                            persistent: b === "addEventListener"
                        });
                        a.C.postMessage(e.zj(c, f), "*")
                    }
                }
        },
        uC = function(a) {
            a.V || (a.V = function(b) {
                try {
                    var c;
                    c = a.Rc ? a.Rc(b) : void 0;
                    if (c) {
                        var d = c.Kr,
                            e = a.nb.get(d);
                        if (e) {
                            e.persistent || a.nb.delete(d);
                            var f;
                            (f = e.Rh) == null || f.call(e,
                                e.Gq, c.payload)
                        }
                    }
                } catch (g) {}
            }, hq(a.H, "message", a.V))
        };
    var wC = function(a, b) {
            var c = b.listener,
                d = (0, a.__gpp)("addEventListener", c);
            d && c(d, !0)
        },
        xC = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        yC = {
            on: function(a) {
                return a.listener
            },
            zj: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, c
            },
            Rh: function(a, b) {
                var c = b.__gppReturn;
                a(c.returnValue, c.success)
            }
        },
        zC = {
            on: function(a) {
                return a.listener
            },
            zj: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }, c
            },
            Rh: function(a, b) {
                var c = b.__gppReturn,
                    d = c.returnValue.data;
                a == null || a(d, c.success)
            }
        };

    function AC(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Kr: b.__gppReturn.callId
        }
    }
    var BC = function(a, b) {
        var c;
        c = (b === void 0 ? {} : b).timeoutMs;
        mq.call(this);
        this.caller = new sC(a, "__gppLocator", function(d) {
            return typeof d.__gpp === "function"
        }, AC);
        this.caller.yb.set("addEventListener", wC);
        this.caller.sa.set("addEventListener", yC);
        this.caller.yb.set("removeEventListener", xC);
        this.caller.sa.set("removeEventListener", zC);
        this.timeoutMs = c != null ? c : 500
    };
    wa(BC, mq);
    BC.prototype.P = function() {
        this.caller.dispose();
        mq.prototype.P.call(this)
    };
    BC.prototype.addEventListener = function(a) {
        var b = this,
            c = cq(function() {
                a(CC, !0)
            }),
            d = this.timeoutMs === -1 ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        vC(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var g;
                    var h;
                    ((h = e.pingData) == null ? void 0 : h.gppVersion) === void 0 || e.pingData.gppVersion === "1" || e.pingData.gppVersion === "1.0" ? (b.removeEventListener(e.listenerId), g = {
                        eventName: "signalStatus",
                        data: "ready",
                        pingData: {
                            internalErrorState: 1,
                            gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                            applicableSections: [-1]
                        }
                    }) : Array.isArray(e.pingData.applicableSections) ? g = e : (b.removeEventListener(e.listenerId), g = {
                        eventName: "signalStatus",
                        data: "ready",
                        pingData: {
                            internalErrorState: 2,
                            gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                            applicableSections: [-1]
                        }
                    });
                    a(g, f)
                } catch (l) {
                    if (e == null ? 0 : e.listenerId) try {
                        b.removeEventListener(e.listenerId)
                    } catch (n) {
                        a(DC, !0);
                        return
                    }
                    a(EC, !0)
                }
            }
        })
    };
    BC.prototype.removeEventListener = function(a) {
        vC(this.caller, "removeEventListener", {
            listener: function() {},
            listenerId: a
        })
    };
    var EC = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        CC = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        DC = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function FC(a) {
        var b;
        if (!(b = a.pingData.signalStatus === "ready")) {
            var c = a.pingData.applicableSections;
            b = !c || c.length === 1 && c[0] === -1
        }
        if (b) {
            rC.gppString = a.pingData.gppString;
            var d = a.pingData.applicableSections.join(",");
            rC.C = d
        }
    }

    function GC() {
        try {
            var a = new BC(w, {
                timeoutMs: -1
            });
            tC(a.caller) && a.addEventListener(FC)
        } catch (b) {}
    };

    function HC() {
        var a = [
                ["cv", E(1)],
                ["rv", E(14)],
                ["tc", Tf.filter(function(c) {
                    return c
                }).length]
            ],
            b = lg(15);
        b && a.push(["x", b]);
        ok() && a.push(["tag_exp", ok()]);
        return a
    };
    var IC = {},
        JC = {};

    function KC(a) {
        var b = a.eventId,
            c = a.Yd,
            d = [],
            e = IC[b] || [];
        e.length && d.push(["hf", e.join(".")]);
        var f = JC[b] || [];
        f.length && d.push(["ht", f.join(".")]);
        c && (delete IC[b], delete JC[b]);
        return d
    };

    function LC() {
        return !1
    }

    function MC() {
        var a = {};
        return function(b, c, d) {}
    };

    function NC() {
        var a = OC;
        return function(b, c, d) {
            var e = d && d.event;
            PC(c);
            var f = Sh(b) ? void 0 : 1,
                g = new bb;
            zb(c, function(r, u) {
                var t = Id(u, void 0, f);
                t === void 0 && u !== void 0 && M(44);
                g.set(r, t)
            });
            a.Qb(sg());
            var h = {
                Ym: Hg(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                jg: e !== void 0 ? function(r) {
                    e.Uc.jg(r)
                } : void 0,
                Nb: function() {
                    return b
                },
                log: function() {},
                Mq: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                Sr: !!bz(b, 3),
                originalEventData: e == null ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (h.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (LC()) {
                var l = MC(),
                    n, p;
                h.sb = {
                    Oj: [],
                    kg: {},
                    jc: function(r, u, t) {
                        u === 1 && (n = r);
                        u === 7 && (p = t);
                        l(r, u, t)
                    },
                    Qh: li()
                };
                h.log = function(r) {
                    var u = Da.apply(1, arguments);
                    n && l(n, 4, {
                        level: r,
                        source: p,
                        message: u
                    })
                }
            }
            var q = gf(a, h, [b, g]);
            a.Qb();
            q instanceof Ga && (q.type === "return" ? q = q.data : q = void 0);
            return B(q, void 0, f)
        }
    }

    function PC(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        rb(b) && (a.gtmOnSuccess = function() {
            Uc(b)
        });
        rb(c) && (a.gtmOnFailure = function() {
            Uc(c)
        })
    };

    function QC(a) {}
    QC.J = "internal.addAdsClickIds";

    function RC(a, b) {
        var c = this;
    }
    RC.publicName = "addConsentListener";
    var SC = !1;

    function TC(a) {
        for (var b = 0; b < a.length; ++b)
            if (SC) try {
                a[b]()
            } catch (c) {
                M(77)
            } else a[b]()
    }

    function UC(a, b, c) {
        var d = this,
            e;
        return e
    }
    UC.J = "internal.addDataLayerEventListener";

    function VC(a, b, c) {}
    VC.publicName = "addDocumentEventListener";

    function WC(a, b, c, d) {}
    WC.publicName = "addElementEventListener";

    function XC(a) {
        return a.K.qb()
    };

    function YC(a) {}
    YC.publicName = "addEventCallback";
    var ZC = function(a) {
            return typeof a === "string" ? a : String(fo())
        },
        bD = function(a, b) {
            $C(a, "init", !1) || (aD(a, "init", !0), b())
        },
        $C = function(a, b, c) {
            var d = cD(a);
            return Hb(d, b, c)
        },
        dD = function(a, b, c, d) {
            var e = cD(a),
                f = Hb(e, b, d);
            e[b] = c(f)
        },
        aD = function(a, b, c) {
            cD(a)[b] = c
        },
        cD = function(a) {
            var b = $n("autoEventsSettings", function() {
                return {}
            });
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        eD = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": ed(a, "className"),
                "gtm.elementId": a.for || Vc(a, "id") || "",
                "gtm.elementTarget": a.formTarget ||
                    ed(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || ed(a, "href") || a.src || a.code || a.codebase || "";
            return d
        };
    var hD = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e],
                    h = g.tagName.toLowerCase();
                if (!(fD.indexOf(h) < 0 || h === "input" && gD.indexOf(g.type.toLowerCase()) >= 0)) {
                    if (g.dataset[c] === d) return f;
                    f++
                }
            }
            return 0
        },
        iD = function(a) {
            if (a.form) {
                var b;
                return ((b = a.form) == null ? 0 : b.tagName) ? a.form : z.getElementById(a.form)
            }
            return Yc(a, ["form"], 100)
        },
        fD = ["input", "select", "textarea"],
        gD = ["button", "hidden", "image", "reset", "submit"];

    function mD(a) {}
    mD.J = "internal.addFormAbandonmentListener";

    function nD(a, b, c, d) {}
    nD.J = "internal.addFormData";
    var oD = {},
        pD = [],
        qD = {},
        rD = 0,
        sD = 0;

    function zD(a, b) {}
    zD.J = "internal.addFormInteractionListener";

    function GD(a, b) {}
    GD.J = "internal.addFormSubmitListener";

    function LD(a) {}
    LD.J = "internal.addGaSendListener";

    function MD(a) {
        if (!a) return {};
        var b = a.Mq;
        return az(b.type, b.index, b.name)
    }

    function ND(a) {
        return a ? {
            originatingEntity: MD(a)
        } : {}
    };
    var PD = function(a, b, c) {
            OD().updateZone(a, b, c)
        },
        RD = function(a, b, c, d, e) {
            var f = {},
                g = OD();
            c = c && Kb(c, QD);
            for (var h = g.createZone(a, c), l = 0; l < b.length; l++) {
                var n = String(b[l]);
                if (g.registerChild(n, E(5), h)) {
                    var p = n,
                        q = a,
                        r = f,
                        u = d,
                        t = e;
                    if (Lb(p, "GTM-")) My(p, void 0, !1, {
                        source: 1,
                        fromContainerExecution: !0
                    });
                    else {
                        var v = yA("js", Fb());
                        My(p, void 0, !0, {
                            source: 1,
                            fromContainerExecution: !0
                        });
                        var x = {
                            originatingEntity: u,
                            inheritParentConfig: t
                        };
                        CA(v, q, x);
                        CA(zA(p, r), q, x)
                    }
                }
            }
            return h
        },
        OD = function() {
            return $n("zones", function() {
                return new SD
            })
        },
        TD = {
            zone: 1,
            cn: 1,
            css: 1,
            ew: 1,
            eq: 1,
            ge: 1,
            gt: 1,
            lc: 1,
            le: 1,
            lt: 1,
            re: 1,
            sw: 1,
            um: 1
        },
        QD = {
            cl: ["ecl"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"]
        },
        SD = function() {
            this.C = {};
            this.H = {};
            this.P = 0
        };
    k = SD.prototype;
    k.isActive = function(a, b) {
        for (var c, d = 0; d < a.length && !(c = this.C[a[d]]); d++);
        if (!c) return !0;
        if (!this.isActive([c.Gj], b)) return !1;
        for (var e = 0; e < c.Ig.length; e++)
            if (this.H[c.Ig[e]].Pe(b)) return !0;
        return !1
    };
    k.getIsAllowedFn = function(a, b) {
        if (!this.isActive(a, b)) return function() {
            return !1
        };
        for (var c, d = 0; d < a.length &&
            !(c = this.C[a[d]]); d++);
        if (!c) return function() {
            return !0
        };
        for (var e = [], f = 0; f < c.Ig.length; f++) {
            var g = this.H[c.Ig[f]];
            g.Pe(b) && e.push(g)
        }
        if (!e.length) return function() {
            return !1
        };
        var h = this.getIsAllowedFn([c.Gj], b);
        return function(l, n) {
            n = n || [];
            if (!h(l, n)) return !1;
            for (var p = 0; p < e.length; ++p)
                if (e[p].P(l, n)) return !0;
            return !1
        }
    };
    k.unregisterChild = function(a) {
        for (var b = 0; b < a.length; b++) delete this.C[a[b]]
    };
    k.createZone = function(a, b) {
        var c = String(++this.P);
        this.H[c] = new UD(a, b);
        return c
    };
    k.updateZone = function(a,
        b, c) {
        var d = this.H[a];
        d && d.T(b, c)
    };
    k.registerChild = function(a, b, c) {
        var d = this.C[a];
        if (!d && Zn[a] || !d && Yj(a) || d && d.Gj !== b) return !1;
        if (d) return d.Ig.push(c), !1;
        this.C[a] = {
            Gj: b,
            Ig: [c]
        };
        return !0
    };
    var UD = function(a, b) {
        this.H = null;
        this.C = [{
            eventId: a,
            Pe: !0
        }];
        if (b) {
            this.H = {};
            for (var c = 0; c < b.length; c++) this.H[b[c]] = !0
        }
    };
    UD.prototype.T = function(a, b) {
        var c = this.C[this.C.length - 1];
        a <= c.eventId || c.Pe !== b && this.C.push({
            eventId: a,
            Pe: b
        })
    };
    UD.prototype.Pe = function(a) {
        for (var b = this.C.length - 1; b >= 0; b--)
            if (this.C[b].eventId <=
                a) return this.C[b].Pe;
        return !1
    };
    UD.prototype.P = function(a, b) {
        b = b || [];
        if (!this.H || TD[a] || this.H[a]) return !0;
        for (var c = 0; c < b.length; ++c)
            if (this.H[b[c]]) return !0;
        return !1
    };

    function VD(a) {
        var b = Zn.zones;
        return b ? b.getIsAllowedFn(Qj(), a) : function() {
            return !0
        }
    }

    function WD() {
        var a = Zn.zones;
        a && a.unregisterChild(Qj())
    }

    function XD() {
        Pz(Pj(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = Zn.zones;
            return c ? c.isActive(Qj(), b) : !0
        });
        Nz(Pj(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return VD(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var YD = function(a, b) {
        this.tagId = a;
        this.canonicalId = b
    };

    function ZD(a, b) {
        var c = this;
        if (!Dh(a) || !wh(b) && !yh(b)) throw G(this.getName(), ["string", "Object|undefined"], arguments);
        var d = B(b, this.K, 1) || {},
            e = d.firstPartyUrl,
            f = d.onLoad,
            g = d.loadByDestination === !0,
            h = d.isGtmEvent === !0;
        TC([function() {
            I(c, "load_google_tags", a, e)
        }]);
        if (g) {
            if (ak(a)) return a
        } else if (Yj(a)) return a;
        var l = 6,
            n = XC(this);
        h && (l = 7);
        n.Nb() === "__zone" && (l = 1);
        var p = {
                source: l,
                fromContainerExecution: !0
            },
            q = function(r) {
                Nz(r, function(u) {
                    for (var t =
                            Oz().getExternalRestrictions(0, Pj()), v = m(t), x = v.next(); !x.done; x = v.next()) {
                        var y = x.value;
                        if (!y(u)) return !1
                    }
                    return !0
                }, !0);
                Pz(r, function(u) {
                    for (var t = Oz().getExternalRestrictions(1, Pj()), v = m(t), x = v.next(); !x.done; x = v.next()) {
                        var y = x.value;
                        if (!y(u)) return !1
                    }
                    return !0
                }, !0);
                f && f(new YD(a, r))
            };
        g ? Ry(a, e, p, q) : My(a, e, !Lb(a, "GTM-"), p, q);
        f && n.Nb() === "__zone" && RD(Number.MIN_SAFE_INTEGER, [a], null, MD(XC(this)));
        return a
    }
    ZD.J = "internal.loadGoogleTag";

    function $D(a) {
        return new Ad("", function(b) {
            var c = this.evaluate(b);
            if (c instanceof Ad) return new Ad("", function() {
                var d = Da.apply(0, arguments),
                    e = this,
                    f = td(XC(this), null);
                f.eventId = a.eventId;
                f.priorityId = a.priorityId;
                f.originalEventData = a.originalEventData;
                var g = d.map(function(l) {
                        return e.evaluate(l)
                    }),
                    h = this.K.ob();
                h.Ud(f);
                return c.Ob.apply(c, [h].concat(za(g)))
            })
        })
    };

    function aE(a, b, c) {
        var d = this;
    }
    aE.J = "internal.addGoogleTagRestriction";
    var bE = {},
        cE = [];

    function jE(a, b) {}
    jE.J = "internal.addHistoryChangeListener";

    function kE(a, b, c) {}
    kE.publicName = "addWindowEventListener";

    function lE(a, b) {
        if (!Dh(a) || !Dh(b)) throw G(this.getName(), ["string", "string"], arguments);
        I(this, "access_globals", "write", a);
        I(this, "access_globals", "read", b);
        var c = a.split("."),
            d = b.split("."),
            e = w,
            f = [e, z],
            g = Nb(e, c, f),
            h = Nb(e, d, f);
        if (g === void 0 || h === void 0) return !1;
        g[c[c.length - 1]] = h[d[d.length - 1]];
        return !0
    }
    lE.publicName = "aliasInWindow";

    function mE(a, b, c) {}
    mE.J = "internal.appendRemoteConfigParameter";

    function nE(a) {
        var b;
        if (!Dh(a)) throw G(this.getName(), ["string", "...any"], arguments);
        I(this, "access_globals", "execute", a);
        for (var c = a.split("."), d = w, e = d[c[0]], f = 1; e && f < c.length; f++)
            if (d = e, e = e[c[f]], d === w || d === z) return;
        if (qd(e) !== "function") return;
        for (var g = [], h = 1; h < arguments.length; h++) g.push(B(arguments[h], this.K, 2));
        var l = this.K.kj()(e, d, g);
        b = Id(l, this.K, 2);
        b === void 0 && l !== void 0 && M(45);
        return b
    }
    nE.publicName = "callInWindow";

    function oE(a) {
        if (!zh(a)) throw G(this.getName(), ["function"], arguments);
        var b = this.K;
        Uc(function() {
            a instanceof Ad && a.Ob(b)
        });
    }
    oE.publicName = "callLater";

    function pE(a) {}
    pE.J = "callOnDomReady";

    function qE(a) {}
    qE.J = "callOnWindowLoad";

    function rE(a, b) {
        var c;
        return c
    }
    rE.J = "internal.computeGtmParameter";

    function sE(a, b) {
        var c = this;
    }
    sE.J = "internal.consentScheduleFirstTry";

    function tE(a, b) {
        var c = this;
    }
    tE.J = "internal.consentScheduleRetry";

    function uE(a) {
        var b;
        return b
    }
    uE.J = "internal.copyFromCrossContainerData";

    function vE(a, b) {
        var c;
        if (!Dh(a) || !Ih(b) && b !== null && !yh(b)) throw G(this.getName(), ["string", "number|undefined"], arguments);
        I(this, "read_data_layer", a);
        c = (b || 2) !== 2 ? kp(a, 1) : mp(a, [w, z]);
        var d = Id(c, this.K, Sh(XC(this).Nb()) ? 2 : 1);
        d === void 0 && c !== void 0 && M(45);
        return d
    }
    vE.publicName = "copyFromDataLayer";

    function wE(a) {
        var b = void 0;
        I(this, "read_data_layer", a);
        a = String(a);
        var c;
        a: {
            for (var d = XC(this).cachedModelValues, e = m(a.split(".")), f = e.next(); !f.done; f = e.next()) {
                if (d == null) {
                    c = void 0;
                    break a
                }
                d = d[f.value]
            }
            c = d
        }
        b = Id(c, this.K, 1);
        return b
    }
    wE.J = "internal.copyFromDataLayerCache";

    function xE(a) {
        var b;
        if (!Dh(a)) throw G(this.getName(), ["string"], arguments);
        I(this, "access_globals", "read", a);
        var c = a.split("."),
            d = Nb(w, c, [w, z]);
        if (!d) return;
        var e = d[c[c.length - 1]];
        b = Id(e, this.K, 2);
        b === void 0 && e !== void 0 && M(45);
        return b
    }
    xE.publicName = "copyFromWindow";

    function yE(a) {
        var b = void 0;
        return Id(b, this.K, 1)
    }
    yE.J = "internal.copyKeyFromWindow";
    var zE = function(a) {
        return a === Gl.aa.Sa && Yl[a] === Fl.Ma.Fe && !Rn(K.m.W)
    };
    var AE = function() {
            return "0"
        },
        BE = function(a) {
            if (typeof a !== "string") return "";
            var b = ["gclid", "dclid", "wbraid", "_gl"];
            P(102) && b.push("gbraid");
            return qj(a, b, "0")
        };
    var CE = {},
        DE = {},
        EE = {},
        FE = {},
        GE = {},
        HE = {},
        IE = {},
        JE = {},
        KE = {},
        LE = {},
        ME = {},
        NE = {},
        OE = {},
        PE = {},
        QE = {},
        RE = {},
        SE = {},
        TE = {},
        UE = {},
        VE = {},
        WE = {},
        XE = {},
        YE = {},
        ZE = {},
        $E = {},
        aF = {},
        bF = (aF[K.m.Oa] = (CE[2] = [zE], CE), aF[K.m.Jf] = (DE[2] = [zE], DE), aF[K.m.Bf] = (EE[2] = [zE], EE), aF[K.m.sl] = (FE[2] = [zE], FE), aF[K.m.tl] = (GE[2] = [zE], GE), aF[K.m.vl] = (HE[2] = [zE], HE), aF[K.m.wl] = (IE[2] = [zE], IE), aF[K.m.xl] = (JE[2] = [zE], JE), aF[K.m.Jb] = (KE[2] = [zE], KE), aF[K.m.Kf] = (LE[2] = [zE], LE), aF[K.m.Lf] = (ME[2] = [zE], ME), aF[K.m.Mf] = (NE[2] = [zE], NE), aF[K.m.Nf] = (OE[2] = [zE], OE), aF[K.m.Of] = (PE[2] = [zE], PE), aF[K.m.Pf] = (QE[2] = [zE], QE), aF[K.m.Qf] = (RE[2] = [zE], RE), aF[K.m.Rf] = (SE[2] = [zE], SE), aF[K.m.tb] = (TE[1] = [zE], TE), aF[K.m.hd] = (UE[1] = [zE], UE), aF[K.m.md] = (VE[1] = [zE], VE), aF[K.m.oe] = (WE[1] = [zE], WE), aF[K.m.ff] = (XE[1] = [function(a) {
            return P(102) && zE(a)
        }], XE), aF[K.m.Cc] = (YE[1] = [zE], YE), aF[K.m.xa] = (ZE[1] = [zE], ZE), aF[K.m.Ya] = ($E[1] = [zE], $E), aF),
        cF = {},
        dF = (cF[K.m.tb] = AE, cF[K.m.hd] = AE, cF[K.m.md] = AE, cF[K.m.oe] = AE, cF[K.m.ff] = AE, cF[K.m.Cc] = function(a) {
            if (!sd(a)) return {};
            var b = td(a,
                null);
            delete b.match_id;
            return b
        }, cF[K.m.xa] = BE, cF[K.m.Ya] = BE, cF),
        eF = {},
        fF = {},
        gF = (fF[Q.A.Ua] = (eF[2] = [zE], eF), fF),
        hF = {};
    var iF = function(a, b, c, d) {
        this.C = a;
        this.P = b;
        this.T = c;
        this.V = d
    };
    iF.prototype.getValue = function(a) {
        a = a === void 0 ? Gl.aa.Sc : a;
        if (!this.P.some(function(b) {
                return b(a)
            })) return this.T.some(function(b) {
            return b(a)
        }) ? this.V(this.C) : this.C
    };
    iF.prototype.H = function() {
        return qd(this.C) === "array" || sd(this.C) ? td(this.C, null) : this.C
    };
    var jF = function() {},
        kF = function(a, b) {
            this.conditions = a;
            this.C = b
        },
        lF = function(a, b, c) {
            var d, e = ((d = a.conditions[b]) == null ? void 0 : d[2]) || [],
                f, g = ((f = a.conditions[b]) == null ? void 0 : f[1]) || [];
            return new iF(c, e, g, a.C[b] || jF)
        },
        mF, nF;
    var oF, pF = !1;

    function qF() {
        pF = !0;
        kg(52) && (oF = productSettings, productSettings = void 0);
        oF = oF || {}
    }

    function rF(a) {
        pF || qF();
        return oF[a]
    };
    var sF = function(a, b, c) {
            this.eventName = b;
            this.D = c;
            this.C = {};
            this.isAborted = !1;
            this.target = a;
            this.metadata = {};
            for (var d = c.eventMetadata || {}, e = m(Object.keys(d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                T(this, g, d[g])
            }
        },
        Gu = function(a, b) {
            var c, d;
            return (c = a.C[b]) == null ? void 0 : (d = c.getValue) == null ? void 0 : d.call(c, R(a, Q.A.hg))
        },
        X = function(a, b, c) {
            var d = a.C,
                e;
            c === void 0 ? e = void 0 : (mF != null || (mF = new kF(bF, dF)), e = lF(mF, b, c));
            d[b] = e
        };
    sF.prototype.mergeHitDataForKey = function(a, b) {
        var c, d, e;
        c = (d = this.C[a]) == null ? void 0 : (e = d.H) == null ? void 0 : e.call(d);
        if (!c) return X(this, a, b), !0;
        if (!sd(c)) return !1;
        X(this, a, na(Object, "assign").call(Object, c, b));
        return !0
    };
    var tF = function(a, b) {
        b = b === void 0 ? {} : b;
        for (var c = m(Object.keys(a.C)), d = c.next(); !d.done; d = c.next()) {
            var e = d.value,
                f = void 0,
                g = void 0,
                h = void 0;
            b[e] = (f = a.C[e]) == null ? void 0 : (h = (g = f).H) == null ? void 0 : h.call(g)
        }
        return b
    };
    sF.prototype.copyToHitData = function(a, b, c) {
        var d = L(this.D, a);
        d === void 0 && (d = b);
        if (sb(d) && c !== void 0) try {
            d = c(d)
        } catch (e) {}
        d !== void 0 && X(this, a, d)
    };
    var R = function(a, b) {
            var c = a.metadata[b];
            if (b === Q.A.hg) {
                var d;
                return c == null ? void 0 : (d = c.H) == null ? void 0 : d.call(c)
            }
            var e;
            return c == null ? void 0 : (e = c.getValue) == null ? void 0 : e.call(c, R(a, Q.A.hg))
        },
        T = function(a, b, c) {
            var d = a.metadata,
                e;
            c === void 0 ? e = c : (nF != null || (nF = new kF(gF, hF)), e = lF(nF, b, c));
            d[b] = e
        },
        uF = function(a, b) {
            b = b === void 0 ? {} : b;
            for (var c = m(Object.keys(a.metadata)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value,
                    f = void 0,
                    g = void 0,
                    h = void 0;
                b[e] = (f = a.metadata[e]) == null ? void 0 : (h = (g = f).H) == null ? void 0 :
                    h.call(g)
            }
            return b
        },
        vF = function(a, b, c) {
            var d = rF(a.target.destinationId);
            return d && d[b] !== void 0 ? d[b] : c
        },
        wF = function(a) {
            for (var b = new sF(a.target, a.eventName, a.D), c = tF(a), d = m(Object.keys(c)), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                X(b, f, c[f])
            }
            for (var g = uF(a), h = m(Object.keys(g)), l = h.next(); !l.done; l = h.next()) {
                var n = l.value;
                T(b, n, g[n])
            }
            b.isAborted = a.isAborted;
            return b
        },
        xF = function(a) {
            var b = a.D,
                c = b.eventId,
                d = b.priorityId;
            return d ? c + "_" + d : String(c)
        };
    sF.prototype.accept = function() {
        var a = lm(gm.Z.xi, {}),
            b = xF(this),
            c = this.target.destinationId;
        a[b] || (a[b] = {});
        a[b][c] = Pj();
        var d = gm.Z.xi;
        if (hm(d)) {
            var e;
            (e = im(d)) == null || e.notify()
        }
    };
    sF.prototype.canBeAccepted = function(a) {
        var b = km(gm.Z.xi);
        if (!b) return !0;
        var c = b[xF(this)];
        if (!c) return !0;
        var d = c[a != null ? a : this.target.destinationId];
        return d === void 0 || d === Pj()
    };

    function yF(a) {
        return {
            getDestinationId: function() {
                return a.target.destinationId
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return Gu(a, b)
            },
            setHitData: function(b, c) {
                X(a, b, c)
            },
            setHitDataIfNotDefined: function(b, c) {
                Gu(a, b) === void 0 && X(a, b, c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return R(a, b)
            },
            setMetadata: function(b, c) {
                T(a, b, c)
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return L(a.D, b)
            },
            pb: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.C)
            },
            getMergedValues: function(b) {
                return a.D.getMergedValues(b, 3)
            },
            mergeHitDataForKey: function(b, c) {
                return sd(c) ? a.mergeHitDataForKey(b, c) : !1
            },
            accept: function() {
                a.accept()
            },
            canBeAccepted: function(b) {
                return a.canBeAccepted(b)
            }
        }
    };

    function zF(a, b) {
        var c;
        return c
    }
    zF.J = "internal.copyPreHit";

    function AF(a, b) {
        var c = null;
        if (!Dh(a) || !Dh(b)) throw G(this.getName(), ["string", "string"], arguments);
        I(this, "access_globals", "readwrite", a);
        I(this, "access_globals", "readwrite", b);
        var d = [w, z],
            e = a.split("."),
            f = Nb(w, e, d),
            g = e[e.length - 1];
        if (f === void 0) throw Error("Path " + a + " does not exist.");
        var h = f[g];
        if (h) return rb(h) ? Id(h, this.K, 2) : null;
        var l;
        h = function() {
            if (!rb(l.push)) throw Error("Object at " + b + " in window is not an array.");
            l.push.call(l,
                arguments)
        };
        f[g] = h;
        var n = b.split("."),
            p = Nb(w, n, d),
            q = n[n.length - 1];
        if (p === void 0) throw Error("Path " + n + " does not exist.");
        l = p[q];
        l === void 0 && (l = [], p[q] = l);
        c = function() {
            h.apply(h, Array.prototype.slice.call(arguments, 0))
        };
        return Id(c, this.K, 2)
    }
    AF.publicName = "createArgumentsQueue";

    function BF(a) {
        return Id(function(c) {
            var d = kz();
            if (typeof c === "function") d(function() {
                c(function(f, g, h) {
                    var l =
                        kz(),
                        n = l && l.getByName && l.getByName(f);
                    return (new w.gaplugins.Linker(n)).decorate(g, h)
                })
            });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded") return !!d.loaded
        }, this.K, 1)
    }
    BF.J = "internal.createGaCommandQueue";

    function CF(a) {
        if (!Dh(a)) throw G(this.getName(), ["string"], arguments);
        I(this, "access_globals", "readwrite", a);
        var b = a.split("."),
            c = Nb(w, b, [w, z]),
            d = b[b.length - 1];
        if (!c) throw Error("Path " + a + " does not exist.");
        var e = c[d];
        e === void 0 && (e = [], c[d] = e);
        return Id(function() {
                if (!rb(e.push)) throw Error("Object at " + a + " in window is not an array.");
                e.push.apply(e, Array.prototype.slice.call(arguments, 0))
            }, this.K,
            Sh(XC(this).Nb()) ? 2 : 1)
    }
    CF.publicName = "createQueue";

    function DF(a, b) {
        var c = null;
        if (!Dh(a) || !Eh(b)) throw G(this.getName(), ["string", "string|undefined"], arguments);
        try {
            var d = (b || "").split("").filter(function(e) {
                return "ig".indexOf(e) >= 0
            }).join("");
            c = new Fd(new RegExp(a, d))
        } catch (e) {}
        return c
    }
    DF.J = "internal.createRegex";

    function EF(a) {}
    EF.J = "internal.declareConsentState";

    function FF(a) {
        var b = "";
        return b
    }
    FF.J = "internal.decodeUrlHtmlEntities";

    function GF(a, b, c) {
        var d;
        return d
    }
    GF.J = "internal.decorateUrlWithGaCookies";

    function HF() {}
    HF.J = "internal.deferCustomEvents";

    function IF(a) {
        return P(423) || JF ? z.querySelector(a) : null
    }

    function KF(a) {
        return P(423) || JF ? z.querySelectorAll(a) : null
    }

    function LF(a, b) {
        if (P(423)) try {
            return a.closest(b)
        } catch (e) {
            return null
        } else {
            if (!JF) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!z.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (d !== null && d.nodeType ===
                1);
            return null
        }
    }
    var MF = !1;
    if (z.querySelectorAll) try {
        var NF = z.querySelectorAll(":root");
        NF && NF.length == 1 && NF[0] == z.documentElement && (MF = !0)
    } catch (a) {}
    var JF = MF;

    function OF() {
        var a = w.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }

    function PF(a) {
        if (z.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !w.getComputedStyle) return !0;
        var c = w.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (var d = a, e = c; d;) {
            if (e.display === "none") return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                h >= 0 && (g = g.substring(h + 8, g.indexOf(")", h)), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), f = String(Math.min(Number(g), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0) return !0;
            (d = d.parentElement) &&
            (e = w.getComputedStyle(d, null))
        }
        return !1
    }

    function UG(a) {
        var b;
        return b
    }
    UG.J = "internal.detectUserProvidedData";
    var XG = function(a) {
            var b = Yc(a, ["button", "input"], 50);
            if (!b) return null;
            var c = String(b.tagName).toLowerCase();
            if (c === "button") return b;
            if (c === "input") {
                var d = Vc(b, "type");
                if (d === "button" || d === "submit" || d === "image" || d === "file" || d === "reset") return b
            }
            return null
        },
        YG = function(a, b, c) {
            var d = c.target;
            if (d) {
                var e = $C(a, "individualElementIds", []);
                if (e.length > 0) {
                    var f = eD(d, b, e);
                    jB(f)
                }
                var g = !1,
                    h = $C(a, "commonButtonIds", []);
                if (h.length > 0) {
                    var l = XG(d);
                    if (l) {
                        var n = eD(l, b, h);
                        jB(n);
                        g = !0
                    }
                }
                var p = $C(a, "selectorToTriggerIds", {}),
                    q;
                for (q in p)
                    if (p.hasOwnProperty(q)) {
                        var r = g ? p[q].filter(function(v) {
                            return h.indexOf(v) === -1
                        }) : p[q];
                        if (r.length !== 0) {
                            var u = LF(d, q);
                            if (u) {
                                var t = eD(u, b, r);
                                jB(t)
                            }
                        }
                    }
            }
        };

    function ZG(a, b) {
        if (!xh(a)) throw G(this.getName(), ["Object|undefined", "any"], arguments);
        var c = a ? B(a) : {},
            d = Cb(c.matchCommonButtons),
            e = !!c.cssSelector,
            f = ZC(b);
        I(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
        var g = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
            h = c.useV2EventName ? "ecl" : "cl",
            l = function(p) {
                p.push(f);
                return p
            };
        if (e || d) {
            if (d && dD(h, "commonButtonIds", l, []), e) {
                var n = Eb(String(c.cssSelector));
                dD(h, "selectorToTriggerIds",
                    function(p) {
                        p.hasOwnProperty(n) || (p[n] = []);
                        l(p[n]);
                        return p
                    }, {})
            }
        } else dD(h, "individualElementIds", l, []);
        bD(h, function() {
            Sc(z, "click", function(p) {
                YG(h, g, p)
            }, !0)
        });
        return f
    }
    ZG.J = "internal.enableAutoEventOnClick";

    function gH(a, b) {
        return p
    }
    gH.J = "internal.enableAutoEventOnElementVisibility";

    function hH() {}
    hH.J = "internal.enableAutoEventOnError";
    var iH = {},
        jH = [],
        kH = {},
        lH = 0,
        mH = 0;

    function sH(a, b) {
        var c = this;
        return d
    }
    sH.J = "internal.enableAutoEventOnFormInteraction";
    var tH = function(a, b, c, d, e) {
            var f = $C("fsl", c ? "nv.mwt" : "mwt", 0),
                g;
            g = c ? $C("fsl", "nv.ids", []) : $C("fsl", "ids", []);
            if (!g.length) return !0;
            var h = eD(a, "gtm.formSubmit", g),
                l = a.action;
            l && l.tagName && (l = a.cloneNode(!1).action);
            M(121);
            if (l === "https://www.facebook.com/tr/") return M(122), !0;
            h["gtm.elementUrl"] = l;
            h["gtm.formCanceled"] = c;
            a.getAttribute("name") != null && (h["gtm.interactedFormName"] = a.getAttribute("name"));
            e && (h["gtm.formSubmitElement"] = e, h["gtm.formSubmitElementText"] = e.value);
            if (d && f) {
                if (!iB(h, kB(b,
                        f), f)) return !1
            } else iB(h, function() {}, f || 2E3);
            return !0
        },
        uH = function() {
            var a = [],
                b = function(c) {
                    return vb(a, function(d) {
                        return d.form === c
                    })
                };
            return {
                store: function(c, d) {
                    var e = b(c);
                    e ? e.button = d : a.push({
                        form: c,
                        button: d
                    })
                },
                get: function(c) {
                    var d = b(c);
                    if (d) return d.button
                }
            }
        },
        vH = function(a) {
            var b = a.target;
            return b && b !== "_self" && b !== "_parent" && b !== "_top" ? !1 : !0
        },
        wH = function() {
            var a = uH(),
                b = HTMLFormElement.prototype.submit;
            Sc(z, "click", function(c) {
                var d = c.target;
                if (d) {
                    var e = Yc(d, ["button", "input"], 100);
                    if (e && (e.type ===
                            "submit" || e.type === "image") && e.name && Vc(e, "value")) {
                        var f = iD(e);
                        f && a.store(f, e)
                    }
                }
            }, !1);
            Sc(z, "submit", function(c) {
                var d = c.target;
                if (!d) return c.returnValue;
                var e = c.defaultPrevented || c.returnValue === !1,
                    f = vH(d) && !e,
                    g = a.get(d),
                    h = !0;
                if (tH(d, function() {
                        if (h) {
                            var l = null,
                                n = {};
                            g && (l = z.createElement("input"), l.type = "hidden", l.name = g.name, l.value = g.value, d.appendChild(l), g.hasAttribute("formaction") && (n.action = d.getAttribute("action"), sc(d, g.getAttribute("formaction"))), g.hasAttribute("formenctype") && (n.enctype =
                                d.getAttribute("enctype"), d.setAttribute("enctype", g.getAttribute("formenctype"))), g.hasAttribute("formmethod") && (n.method = d.getAttribute("method"), d.setAttribute("method", g.getAttribute("formmethod"))), g.hasAttribute("formvalidate") && (n.validate = d.getAttribute("validate"), d.setAttribute("validate", g.getAttribute("formvalidate"))), g.hasAttribute("formtarget") && (n.target = d.getAttribute("target"), d.setAttribute("target", g.getAttribute("formtarget"))));
                            b.call(d);
                            l && (d.removeChild(l), n.hasOwnProperty("action") &&
                                sc(d, n.action), n.hasOwnProperty("enctype") && d.setAttribute("enctype", n.enctype), n.hasOwnProperty("method") && d.setAttribute("method", n.method), n.hasOwnProperty("validate") && d.setAttribute("validate", n.validate), n.hasOwnProperty("target") && d.setAttribute("target", n.target))
                        }
                    }, e, f, g)) h = !1;
                else return e || (c.preventDefault && c.preventDefault(), c.returnValue = !1), !1;
                return c.returnValue
            }, !1);
            HTMLFormElement.prototype.submit = function() {
                var c = this,
                    d = !0;
                tH(c, function() {
                    d && b.call(c)
                }, !1, vH(c)) && (b.call(c), d = !1)
            }
        };

    function xH(a, b) {
        var c = this;
        if (!xh(a)) throw G(this.getName(), ["Object|undefined", "any"], arguments);
        var d = a && a.get("waitForTags");
        TC([function() {
            I(c, "detect_form_submit_events", {
                waitForTags: !!d
            })
        }]);
        var e = a && a.get("checkValidation"),
            f = ZC(b);
        if (d) {
            var g = Number(a.get("waitForTagsTimeout"));
            g > 0 && isFinite(g) || (g = 2E3);
            var h = function(n) {
                return Math.max(g, n)
            };
            dD("fsl", "mwt", h, 0);
            e || dD("fsl", "nv.mwt", h, 0)
        }
        var l = function(n) {
            n.push(f);
            return n
        };
        dD("fsl", "ids", l, []);
        e || dD("fsl", "nv.ids", l, []);
        $C("fsl", "init", !1) || (wH(), aD("fsl", "init", !0));
        return f
    }
    xH.J = "internal.enableAutoEventOnFormSubmit";

    function CH() {
        var a = this;
    }
    CH.J = "internal.enableAutoEventOnGaSend";
    var DH = {},
        EH = [];

    function LH(a, b) {
        var c = this;
        return f
    }
    LH.J = "internal.enableAutoEventOnHistoryChange";
    var MH = ["http://", "https://", "javascript:", "file://"];
    var NH = function(a, b) {
            if (a.which === 2 || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) return !1;
            var c = ed(b, "href");
            if (c.indexOf(":") !== -1 && !MH.some(function(h) {
                    return Lb(c, h)
                })) return !1;
            var d = c.indexOf("#"),
                e = ed(b, "target");
            if (e && e !== "_self" && e !== "_parent" && e !== "_top" || d === 0) return !1;
            if (d > 0) {
                var f = mj(pj(c)),
                    g = mj(pj(w.location.href));
                return f !== g
            }
            return !0
        },
        OH = function(a, b) {
            for (var c = jj(pj((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || ed(b, "href") || b.src || b.code || b.codebase || ""), "host"),
                    d = 0; d < a.length; d++) try {
                if ((new RegExp(a[d])).test(c)) return !1
            } catch (e) {}
            return !0
        },
        PH = function() {
            function a(c) {
                var d = c.target;
                if (d && c.which !== 3 && !(c.C || c.timeStamp && c.timeStamp === b)) {
                    b = c.timeStamp;
                    d = Yc(d, ["a", "area"], 100);
                    if (!d) return c.returnValue;
                    var e = c.defaultPrevented || c.returnValue === !1,
                        f = $C("lcl", e ? "nv.mwt" : "mwt", 0),
                        g;
                    g = e ? $C("lcl", "nv.ids", []) : $C("lcl", "ids", []);
                    for (var h = [], l = 0; l < g.length; l++) {
                        var n = g[l],
                            p = $C("lcl", "aff.map", {})[n];
                        p && !OH(p, d) || h.push(n)
                    }
                    if (h.length) {
                        var q = NH(c, d),
                            r = eD(d, "gtm.linkClick",
                                h);
                        r["gtm.elementText"] = Wc(d);
                        r["gtm.willOpenInNewWindow"] = !q;
                        if (q && !e && f && d.href) {
                            var u = !!vb(String(ed(d, "rel") || "").split(" "), function(y) {
                                    return y.toLowerCase() === "noreferrer"
                                }),
                                t = w[(ed(d, "target") || "_self").substring(1)],
                                v = !0,
                                x = kB(function() {
                                    var y;
                                    if (y = v && t) {
                                        var A;
                                        a: if (u) {
                                            var C;
                                            try {
                                                C = new MouseEvent(c.type, {
                                                    bubbles: !0
                                                })
                                            } catch (D) {
                                                if (!z.createEvent) {
                                                    A = !1;
                                                    break a
                                                }
                                                C = z.createEvent("MouseEvents");
                                                C.initEvent(c.type, !0, !0)
                                            }
                                            C.C = !0;
                                            c.target.dispatchEvent(C);
                                            A = !0
                                        } else A = !1;
                                        y = !A
                                    }
                                    y && (t.location.href = ed(d,
                                        "href"))
                                }, f);
                            if (iB(r, x, f)) v = !1;
                            else return c.preventDefault && c.preventDefault(), c.returnValue = !1
                        } else iB(r, function() {}, f || 2E3);
                        return !0
                    }
                }
            }
            var b = 0;
            Sc(z, "click", a, !1);
            Sc(z, "auxclick", a, !1)
        };

    function QH(a, b) {
        var c = this;
        if (!xh(a)) throw G(this.getName(), ["Object|undefined", "any"], arguments);
        var d = B(a);
        TC([function() {
            I(c, "detect_link_click_events", d)
        }]);
        var e = d && !!d.waitForTags,
            f = d && !!d.checkValidation,
            g = d ? d.affiliateDomains : void 0,
            h = ZC(b);
        if (e) {
            var l = Number(d.waitForTagsTimeout);
            l > 0 && isFinite(l) || (l = 2E3);
            var n = function(q) {
                return Math.max(l, q)
            };
            dD("lcl", "mwt", n, 0);
            f || dD("lcl", "nv.mwt", n, 0)
        }
        var p = function(q) {
            q.push(h);
            return q
        };
        dD("lcl", "ids", p, []);
        f || dD("lcl", "nv.ids", p, []);
        g && dD("lcl", "aff.map", function(q) {
            q[h] = g;
            return q
        }, {});
        $C("lcl", "init", !1) || (PH(), aD("lcl", "init", !0));
        return h
    }
    QH.J = "internal.enableAutoEventOnLinkClick";
    var RH, SH;

    function cI(a, b) {
        var c = this;
        return d
    }
    cI.J = "internal.enableAutoEventOnScroll";

    function dI(a) {
        return function() {
            if (a.limit && a.Cj >= a.limit) a.Oh && w.clearInterval(a.Oh);
            else {
                a.Cj++;
                var b = Gb();
                jB({
                    event: a.eventName,
                    "gtm.timerId": a.Oh,
                    "gtm.timerEventNumber": a.Cj,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.limit,
                    "gtm.timerStartTime": a.Kn,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Kn,
                    "gtm.triggers": a.ys
                })
            }
        }
    }

    function eI(a, b) {
        return f
    }
    eI.J = "internal.enableAutoEventOnTimer";
    var vc = Ba(["data-gtm-yt-inspected-"]),
        gI = ["www.youtube.com", "www.youtube-nocookie.com"],
        hI, iI = !1;

    function sI(a, b) {
        var c = this;
        return e
    }
    sI.J = "internal.enableAutoEventOnYouTubeActivity";
    iI = !1;

    function tI(a, b) {
        if (!Dh(a) || !xh(b)) throw G(this.getName(), ["string", "Object|undefined"], arguments);
        var c = b ? B(b) : {},
            d = a,
            e = !1;
        return e
    }
    tI.J = "internal.evaluateBooleanExpression";
    var uI;

    function vI(a) {
        var b = !1;
        return b
    }
    vI.J = "internal.evaluateMatchingRules";
    var xI = [K.m.W, K.m.X];

    function II(a) {
        if (P(10)) return;
        var b = uj() || kg(50) || !!zj(a.D);
        P(431) && (b = kg(50) || !!zj(a.D));
        if (b || P(168)) return;
        Wx({
            Ln: P(131)
        });
    };

    function NI() {
        var a;
        a = a === void 0 ? document : a;
        var b;
        return !((b = a.featurePolicy) == null || !b.allowedFeatures().includes("attribution-reporting"))
    };
    var kJ = {};
    var mJ = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function nJ(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function oJ(a) {
        var b = a.google_tag_data,
            c;
        if (b != null && b.uach) {
            var d = b.uach,
                e = na(Object, "assign").call(Object, {}, d);
            d.fullVersionList && (e.fullVersionList = d.fullVersionList.slice(0));
            c = e
        } else c = null;
        return c
    }

    function pJ(a) {
        var b, c;
        return (c = (b = a.google_tag_data) == null ? void 0 : b.uach_promise) != null ? c : null
    }

    function qJ(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function rJ(a) {
        if (!qJ(a)) return null;
        var b = nJ(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(mJ).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var sJ = function(a) {
            var b = {};
            b[K.m.Kf] = a.architecture;
            b[K.m.Lf] = a.bitness;
            a.fullVersionList && (b[K.m.Mf] = a.fullVersionList.map(function(c) {
                return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
            }).join("|"));
            b[K.m.Nf] = a.mobile ? "1" : "0";
            b[K.m.Of] = a.model;
            b[K.m.Pf] = a.platform;
            b[K.m.Qf] = a.platformVersion;
            b[K.m.Rf] = a.wow64 ? "1" : "0";
            return b
        },
        tJ = function(a) {
            var b = 0,
                c = function(h, l) {
                    try {
                        a(h, l)
                    } catch (n) {}
                },
                d = w,
                e = oJ(d);
            if (e) c(e);
            else {
                var f = pJ(d);
                if (f) {
                    b = Math.min(Math.max(isFinite(b) ? b : 0, 0),
                        1E3);
                    var g = d.setTimeout(function() {
                        c.yg || (c.yg = !0, M(106), c(null, Error("Timeout")))
                    }, b);
                    f.then(function(h) {
                        c.yg || (c.yg = !0, M(104), d.clearTimeout(g), c(h))
                    }).catch(function(h) {
                        c.yg || (c.yg = !0, M(105), d.clearTimeout(g), c(null, h))
                    })
                } else c(null)
            }
        },
        vJ = function() {
            var a = w;
            if (qJ(a) && (uJ = Gb(), !pJ(a))) {
                var b = rJ(a);
                b && (b.then(function() {
                    M(95)
                }), b.catch(function() {
                    M(96)
                }))
            }
        },
        uJ;

    function xJ(a, b) {
        b = b === void 0 ? !1 : b;
        var c = R(a, Q.A.gg),
            d = vF(a, "custom_event_accept_rules", !1) && !b;
        if (c) {
            var e = c.indexOf(a.target.destinationId) >= 0,
                f = !0;
            R(a, Q.A.eb) && (f = R(a, Q.A.Pa) === Pj());
            e && f ? T(a, Q.A.Vh, !0) : (T(a, Q.A.Vh, !1), d || (a.isAborted = !0));
            if (a.canBeAccepted()) {
                var g = Oj().indexOf(a.target.destinationId) >= 0,
                    h = !1;
                if (!g) {
                    var l, n = (l = Hj(a.target.destinationId)) == null ? void 0 : l.canonicalContainerId;
                    n && (h = Pj() === n)
                }
                g || h ? R(a, Q.A.Vh) && a.accept() : a.isAborted = !0
            } else a.isAborted = !0
        }
    };
    var DJ = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        EJ = /^www.googleadservices.com$/;

    function FJ(a) {
        a || (a = SJ());
        return a.zs ? !1 : a.gr || a.hr || a.jr || a.ir || a.Ne || a.Ih || a.Qq || a.fc === "aw.ds" || P(235) && a.fc === "aw.dv" || a.Uq ? !0 : !1
    }

    function SJ() {
        var a = {},
            b = hs(!0);
        a.zs = !!b._up;
        var c = Lt(),
            d = nu();
        a.gr = c.aw !== void 0;
        a.hr = c.dc !== void 0;
        a.jr = c.wbraid !== void 0;
        a.ir = c.gbraid !== void 0;
        a.fc = typeof c.gclsrc === "string" ? c.gclsrc : void 0;
        a.Ne = d.Ne;
        a.Ih = d.Ih;
        var e = z.referrer ? jj(pj(z.referrer), "host") : "";
        a.Uq = DJ.test(e);
        a.Qq = EJ.test(e);
        return a
    };

    function TJ() {
        var a = w.__uspapi;
        if (rb(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function(c, d) {
                    if (d && c) {
                        var e = c.uspString;
                        e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e)
                    }
                })
            } catch (c) {}
            return b
        }
    };

    function WJ(a) {
        Nk && (Am = !0, a.eventName === K.m.ma ? Gm(a.D, a.target.id) : (R(a, Q.A.de) || (Dm[a.target.id] = !0), wA(R(a, Q.A.Pa))))
    };
    var bK = {
        Tf: {
            ao: "cd",
            bo: "ce",
            co: "cf",
            eo: "cpf",
            fo: "cu"
        }
    };

    function eK(a, b) {
        b = b === void 0 ? !0 : b;
        var c = pb(jb.GTAG_EVENT_FEATURE_CHANNEL || []);
        c && (X(a, K.m.Ff, c), b && nb())
    };

    function qK(a) {};

    function SK() {
        return Gq(7) && Gq(9) && Gq(10)
    };

    function ML(a, b, c, d) {}
    ML.J = "internal.executeEventProcessor";

    function NL(a) {
        var b;
        if (!Dh(a)) throw G(this.getName(), ["string"], arguments);
        I(this, "unsafe_run_arbitrary_javascript");
        try {
            var c = w.google_tag_manager;
            c && typeof c.e === "function" && (b = c.e(a))
        } catch (d) {}
        return Id(b, this.K, 1)
    }
    NL.J = "internal.executeJavascriptString";

    function OL(a) {
        var b;
        return b
    };

    function PL(a) {
        var b = "";
        return b
    }
    PL.J = "internal.generateClientId";

    function QL(a) {
        var b = {};
        return Id(b)
    }
    QL.J = "internal.getAdsCookieWritingOptions";

    function RL(a, b) {
        var c = !1;
        return c
    }
    RL.J = "internal.getAllowAdPersonalization";

    function SL() {
        var a;
        return a
    }
    SL.J = "internal.getAndResetEventUsage";

    function TL(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    TL.J = "internal.getAuid";

    function UL() {
        var a = new bb;
        return a
    }
    UL.publicName = "getContainerVersion";

    function VL(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        if (!Dh(a) || !Hh(b)) throw G(this.getName(), ["string", "boolean|undefined"], arguments);
        I(this, "get_cookies", a);
        c = Id(vr(a, void 0, !!b), this.K);
        return c
    }
    VL.publicName = "getCookieValues";

    function WL() {
        var a = "";
        return a
    }
    WL.J = "internal.getCorePlatformServicesParam";

    function XL() {
        return Om()
    }
    XL.J = "internal.getCountryCode";

    function YL() {
        var a = [];
        a = Nj();
        return Id(a)
    }
    YL.J = "internal.getDestinationIds";

    function ZL(a) {
        var b = new bb;
        return b
    }
    ZL.J = "internal.getDeveloperIds";

    function $L(a) {
        var b;
        return b
    }
    $L.J = "internal.getEcsidCookieValue";

    function aM(a, b) {
        var c = null;
        if (!Ch(a) || !Dh(b)) throw G(this.getName(), ["OpaqueValue", "string"], arguments);
        var d = a.getValue();
        if (!(d instanceof HTMLElement)) throw Error("getElementAttribute requires an HTML Element.");
        I(this, "get_element_attributes", d, b);
        c = Vc(d, b);
        return c
    }
    aM.J = "internal.getElementAttribute";

    function bM(a) {
        var b = null;
        I(this, "read_dom_elements", "id", a);
        var c = z.getElementById(a);
        if (c === null) return c;
        b = new Fd(c);
        return b
    }
    bM.J = "internal.getElementById";

    function cM(a) {
        var b = "";
        if (!Ch(a)) throw G(this.getName(), ["OpaqueValue"], arguments);
        var c = a.getValue();
        if (!(c instanceof HTMLElement)) throw Error("getElementInnerText requires an HTML Element.");
        I(this, "read_dom_element_text", c);
        b = Wc(c);
        return b
    }
    cM.J = "internal.getElementInnerText";

    function dM(a) {
        var b = null;
        return b
    }
    dM.J = "internal.getElementParent";

    function eM(a) {
        var b = null;
        return b
    }
    eM.J = "internal.getElementPreviousSibling";

    function fM(a, b) {
        var c = null;
        if (!Ch(a) || !Dh(b)) throw G(this.getName(), ["OpaqueValue", "string"], arguments);
        var d = a.getValue();
        if (!(d instanceof HTMLElement)) throw Error("getElementProperty requires an HTML element.");
        I(this, "access_dom_element_properties", d, "read", b);
        c = d[b];
        return Id(c)
    }
    fM.J = "internal.getElementProperty";

    function gM(a) {
        var b;
        if (!Ch(a)) throw G(this.getName(), ["OpaqueValue"], arguments);
        var c = a.getValue();
        if (!(c instanceof HTMLElement)) throw Error("getElementValue requires an HTML Element.");
        I(this, "access_element_values", c, "read");
        b = c instanceof HTMLInputElement ? c.value : Vc(c, "value") || "";
        return b
    }
    gM.J = "internal.getElementValue";

    function hM(a) {
        var b = 0;
        return b
    }
    hM.J = "internal.getElementVisibilityRatio";

    function iM(a) {
        var b = null;
        if (!Dh(a)) throw G(this.getName(), ["string"], arguments);
        I(this, "read_dom_elements", "css", a);
        b = new wd;
        var c;
        try {
            c = KF(a)
        } catch (e) {
            return null
        }
        if (c === null) return b;
        for (var d = 0; d < c.length; d++) b.set(d, new Fd(c[d]));
        return b
    }
    iM.J = "internal.getElementsByCssSelector";

    function jM(a) {
        var b;
        if (!Dh(a)) throw G(this.getName(), ["string"], arguments);
        I(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = XC(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, h = {}, l = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
                        for (var t = r[u].split("."), v = 0; v < t.length; v++) n.push(t[v]), v !== t.length - 1 && n.push(l);
                        u !== r.length - 1 && n.push(h)
                    }
                    q !== p.length - 1 && n.push(g)
                }
                for (var x = [], y = "", A = m(n), C = A.next(); !C.done; C =
                    A.next()) {
                    var D = C.value;
                    D === l ? (x.push(y), y = "") : y = D === g ? y + "\\" : D === h ? y + "." : y + D
                }
                y && x.push(y);
                for (var H = m(x), J = H.next(); !J.done; J = H.next()) {
                    if (f == null) {
                        c = void 0;
                        break a
                    }
                    f = f[J.value]
                }
                c = f
            } else c = void 0
        }
        b = Id(c, this.K, 1);
        return b
    }
    jM.J = "internal.getEventData";

    function kM(a) {
        var b = null;
        return b
    }
    kM.J = "internal.getFirstElementByCssSelector";
    var lM = {};
    lM.disableUserDataWithoutCcd = P(223);

    function mM() {
        return Id(lM)
    }
    mM.J = "internal.getFlags";

    function nM() {
        return Im["8"] || ""
    }
    nM.J = "internal.getGeoCurrencyCode";

    function oM() {
        var a;
        return a
    }
    oM.J = "internal.getGsaExperimentId";

    function pM() {
        return new Fd(cC)
    }
    pM.J = "internal.getHtmlId";

    function qM(a) {
        var b;
        return b
    }
    qM.J = "internal.getIframingState";

    function rM(a, b) {
        var c = {};
        return Id(c)
    }
    rM.J = "internal.getLinkerValueFromLocation";

    function sM() {
        var a = new bb;
        return a
    }
    sM.J = "internal.getPrivacyStrings";

    function tM(a, b) {
        var c;
        return c
    }
    tM.J = "internal.getProductSettingsParameter";

    function uM(a, b) {
        var c;
        return c
    }
    uM.publicName = "getQueryParameters";

    function vM(a, b) {
        var c;
        return c
    }
    vM.publicName = "getReferrerQueryParameters";

    function wM(a) {
        var b = "";
        if (!Eh(a)) throw G(this.getName(), ["string|undefined"], arguments);
        I(this, "get_referrer", a);
        b = lj(pj(z.referrer), a);
        return b
    }
    wM.publicName = "getReferrerUrl";

    function xM() {
        return Pm()
    }
    xM.J = "internal.getRegionCode";

    function yM(a, b) {
        var c;
        return c
    }
    yM.J = "internal.getRemoteConfigParameter";

    function zM(a, b) {
        var c = null;
        return c
    }
    zM.J = "internal.getScopedElementsByCssSelector";

    function AM() {
        var a = new bb;
        a.set("width", 0);
        a.set("height", 0);
        return a
    }
    AM.J = "internal.getScreenDimensions";

    function BM() {
        var a = "";
        return a
    }
    BM.J = "internal.getTopSameDomainUrl";

    function CM() {
        var a = "";
        return a
    }
    CM.J = "internal.getTopWindowUrl";

    function DM(a) {
        var b = "";
        if (!Eh(a)) throw G(this.getName(), ["string|undefined"], arguments);
        I(this, "get_url", a);
        b = jj(pj(w.location.href), a);
        return b
    }
    DM.publicName = "getUrl";

    function EM() {
        I(this, "get_user_agent");
        return Bc.userAgent
    }
    EM.J = "internal.getUserAgent";

    function FM() {
        var a;
        return a ? Id(sJ(a)) : a
    }
    FM.J = "internal.getUserAgentClientHints";

    function IM() {
        var a = w;
        return a.gaGlobal = a.gaGlobal || {}
    }

    function JM(a, b) {
        var c = IM();
        if (c.vid === void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };

    function kN(a) {
        (GI(a) || uj()) && X(a, K.m.zl, Pm() || Om());
        !GI(a) && uj() && X(a, K.m.Ei, "::")
    }

    function lN(a) {
        if (uj() && !GI(a) && (Sm() || X(a, K.m.al, !0), P(78))) {
            dK(a);
            cK(a, bK.Tf.eo, ln(L(a.D, K.m.Xa)));
            var b = bK.Tf.fo;
            var c = L(a.D, K.m.Ac);
            cK(a, b, c === !0 ? 1 : c === !1 ? 0 : void 0);
            cK(a, bK.Tf.co, ln(L(a.D, K.m.Fb)));
            cK(a, bK.Tf.ao, Mr(kn(L(a.D, K.m.wb)), kn(L(a.D, K.m.Vb))))
        }
    };
    var GN = {
        AW: gm.Z.Rn,
        G: gm.Z.Bp,
        DC: gm.Z.up
    };

    function HN(a) {
        var b = Gv(a);
        return "" + bi(b.map(function(c) {
            return c.value
        }).join("!"))
    }

    function IN(a) {
        var b = lo(a);
        return b && GN[b.prefix]
    }

    function JN(a, b) {
        var c = a[b];
        c && (c.clearTimerId && w.clearTimeout(c.clearTimerId), c.clearTimerId = w.setTimeout(function() {
            delete a[b]
        }, 36E5))
    };
    var tO = function(a) {
        for (var b = {}, c = String(sO.cookie).split(";"), d = 0; d < c.length; d++) {
            var e = c[d].split("="),
                f = e[0].trim();
            if (f && a(f)) {
                var g = e.slice(1).join("=").trim();
                g && (g = decodeURIComponent(g));
                var h = void 0,
                    l = void 0;
                ((h = b)[l = f] || (h[l] = [])).push(g)
            }
        }
        return b
    };
    var uO = window,
        sO = document,
        vO = function(a) {
            var b = uO._gaUserPrefs;
            if (b && b.ioo && b.ioo() || sO.documentElement.hasAttribute("data-google-analytics-opt-out") || a && uO["ga-disable-" + a] === !0) return !0;
            try {
                var c = uO.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
            } catch (f) {}
            for (var d = tO(function(f) {
                    return f === "AMP_TOKEN"
                }).AMP_TOKEN || [], e = 0; e < d.length; e++)
                if (d[e] == "$OPT_OUT") return !0;
            return sO.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var wO = "gclid dclid gclsrc wbraid gbraid gad_source gad_campaignid utm_source utm_medium utm_campaign utm_term utm_content utm_id".split(" ");

    function xO() {
        var a = z.location,
            b, c = a == null ? void 0 : (b = a.search) == null ? void 0 : b.replace("?", ""),
            d;
        if (c) {
            for (var e = [], f = hj(c, !0), g = m(wO), h = g.next(); !h.done; h = g.next()) {
                var l = h.value,
                    n = f[l];
                if (n)
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        q !== void 0 && e.push({
                            name: l,
                            value: q
                        })
                    }
            }
            d = e
        } else d = [];
        return d
    };

    function IO(a) {
        zb(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[K.m.yd] || {};
        zb(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    };

    function mP(a) {}

    function nP(a) {
        var b = function() {};
        return b
    }

    function oP(a, b) {}
    var pP = F.M.xk,
        qP = F.M.yk;

    function rP(a, b) {
        var c = Nj();
        c && c.indexOf(b) > -1 && (a[Q.A.eb] = !0)
    }
    var sP = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]))
    };

    function tP(a, b, c) {
        var d = this;
        if (!Dh(a) || !xh(b) || !xh(c)) throw G(this.getName(), ["string", "Object|undefined", "Object|undefined"], arguments);
        var e = b ? B(b) : {};
        TC([function() {
            return I(d, "configure_google_tags", a, e)
        }]);
        var f = c ? B(c) : {},
            g = XC(this);
        f.originatingEntity = MD(g);
        CA(zA(a, e), g.eventId, f);
    }
    tP.J = "internal.gtagConfig";

    function uP(a, b, c) {
        var d = this;
    }
    uP.J = "internal.gtagDestinationConfig";

    function wP(a, b) {}
    wP.publicName = "gtagSet";

    function xP() {
        var a = {};
        return a
    };

    function yP(a) {}
    yP.J = "internal.initializeServiceWorker";

    function zP(a, b) {}
    zP.publicName = "injectHiddenIframe";
    var AP = function() {
        var a = 0;
        return function(b) {
            switch (b) {
                case 1:
                    a |= 1;
                    break;
                case 2:
                    a |= 2;
                    break;
                case 3:
                    a |= 4
            }
            return a
        }
    }();

    function BP(a, b, c, d, e) {
        if (!((Dh(a) || Ch(a)) && zh(b) && zh(c) && Hh(d) && Hh(e))) throw G(this.getName(), ["string|OpaqueValue", "function", "function", "boolean|undefined", "boolean|undefined"], arguments);
        var f = XC(this);
        d && AP(3);
        e && (AP(1), AP(2));
        var g = f.eventId,
            h = f.Nb(),
            l = AP(void 0);
        if (Lk) {
            var n = String(l) + h;
            IC[g] = IC[g] || [];
            IC[g].push(n);
            JC[g] = JC[g] || [];
            JC[g].push("p" + h)
        }
        if (d && e) throw Error("useIframe and supportDocumentWrite cannot both be true.");
        I(this,
            "unsafe_inject_arbitrary_html", d, e);
        var p = B(b, this.K),
            q = B(c, this.K),
            r = B(a, this.K, 1);
        CP(r, p, q, !!d, !!e, f);
    }
    var DP = function(a, b, c, d) {
            return function() {
                try {
                    if (b.length > 0) {
                        var e = b.shift(),
                            f = DP(a, b, c, d),
                            g = e;
                        if (String(g.nodeName).toUpperCase() === "SCRIPT" && g.type === "text/gtmscript") {
                            var h = g.text || g.textContent || g.innerHTML || "",
                                l = g.getAttribute("data-gtmsrc"),
                                n = g.charset || "";
                            l ? Nc(l, f, d, {
                                async: !1,
                                id: e.id,
                                text: h,
                                charset: n
                            }, a) : (g = z.createElement("script"), g.async = !1, g.type = "text/javascript", g.id = e.id, g.text = h, g.charset = n, f && (g.onload = f), a.insertBefore(g, null));
                            l || f()
                        } else if (e.innerHTML && e.innerHTML.toLowerCase().indexOf("<script") >=
                            0) {
                            for (var p = []; e.firstChild;) p.push(e.removeChild(e.firstChild));
                            a.insertBefore(e, null);
                            DP(e, p, f, d)()
                        } else a.insertBefore(e, null), f()
                    } else c()
                } catch (q) {
                    d()
                }
            }
        },
        CP = function(a, b, c, d, e, f) {
            if (z.body) {
                var g = hC(a, b, c);
                a = g.lr;
                b = g.onSuccess;
                if (d) {} else e ?
                    EP(a, b, c) : DP(z.body, Xc(a), b, c)()
            } else w.setTimeout(function() {
                CP(a, b, c, d, e, f)
            })
        };
    var EP = function(a, b, c) {
        rA(function() {
            var d = google_tag_manager_external.postscribe.getPostscribe(),
                e = {
                    done: b
                },
                f = document.createElement("div");
            f.style.display = "none";
            f.style.visibility = "hidden";
            z.body.appendChild(f);
            try {
                d(f, a, e)
            } catch (g) {
                c()
            }
        })
    };
    BP.J = "internal.injectHtml";
    var FP = {};
    var GP = function(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], Nc(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) Uc(g[h]);
            g.push = function(l) {
                Uc(l);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) Uc(g[h]);
            e[f] = null
        }, b)) : Nc(a, c, d, b)
    };

    function HP(a, b, c, d) {
        if (!(Dh(a) && Ah(b) && Ah(c) && Eh(d))) throw G(this.getName(), ["string", "function|undefined", "function|undefined", "string|undefined"], arguments);
        I(this, "inject_script", a);
        var e = this.K;
        GP(a, void 0, function() {
            b && b.Ob(e)
        }, function() {
            c && c.Ob(e)
        }, FP, d);
    }
    var IP = {
            dl: 1,
            id: 1
        },
        JP = {};

    function KP(a, b, c, d) {}
    P(160) ? KP.publicName = "injectScript" : HP.publicName = "injectScript";
    KP.J = "internal.injectScript";

    function LP() {
        var a = !1;
        return a
    }
    LP.J = "internal.isAutoPiiEligible";

    function MP(a) {
        var b = !0;
        return b
    }
    MP.publicName = "isConsentGranted";

    function NP(a) {
        var b = !1;
        return b
    }
    NP.J = "internal.isDebugMode";

    function OP() {
        return Rm()
    }
    OP.J = "internal.isDmaRegion";

    function PP() {
        return lA
    }
    PP.J = "internal.isDomReady";

    function QP(a) {
        var b = !1;
        return b
    }
    QP.J = "internal.isEntityInfrastructure";

    function RP(a) {
        var b = !1;
        if (!Ih(a)) throw G(this.getName(), ["number"], [a]);
        b = P(a);
        return b
    }
    RP.J = "internal.isFeatureEnabled";

    function SP() {
        var a = !1;
        return a
    }
    SP.J = "internal.isFpfe";

    function TP() {
        var a = !1;
        return a
    }
    TP.J = "internal.isGcpConversion";

    function UP() {
        var a = !1;
        return a
    }
    UP.J = "internal.isLandingPage";

    function VP() {
        var a = !1;
        return a
    }
    VP.J = "internal.isOgt";

    function WP() {
        var a;
        return a
    }
    WP.J = "internal.isSafariPcmEligibleBrowser";

    function XP() {
        var a = gi(function(b) {
            XC(this).log("error", b)
        });
        a.publicName = "JSON";
        return a
    };

    function YP(a) {
        var b = void 0;
        if (!Dh(a)) throw G(this.getName(), ["string"], arguments);
        b = pj(a);
        return Id(b)
    }
    YP.J = "internal.legacyParseUrl";

    function ZP() {
        return !1
    }
    var $P = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };

    function aQ() {
        try {
            I(this, "logging")
        } catch (d) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = B(a[b], this.K);
        var c = XC(this);
        console.log.apply(console, a);
        MD(c);
    }
    aQ.publicName = "logToConsole";

    function bQ(a, b) {}
    bQ.J = "internal.mergeRemoteConfig";

    function cQ(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        if (!Dh(a) || !Dh(b) || !Gh(c)) throw G(this.getName(), ["string", "string", "boolean|undefined"], arguments);
        d = vr(b, a, !!c);
        return Id(d)
    }
    cQ.J = "internal.parseCookieValuesFromString";

    function dQ(a) {
        var b = void 0;
        if (typeof a !== "string") return;
        a && Lb(a, "//") && (a = z.location.protocol + a);
        if (typeof URL === "function") {
            var c;
            a: {
                var d;
                try {
                    d = new URL(a)
                } catch (x) {
                    c = void 0;
                    break a
                }
                for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) {
                    var h = f[g][0],
                        l = f[g][1];
                    e.hasOwnProperty(h) ? typeof e[h] === "string" ? e[h] = [e[h], l] : e[h].push(l) : e[h] = l
                }
                c = Id({
                    href: d.href,
                    origin: d.origin,
                    protocol: d.protocol,
                    username: d.username,
                    password: d.password,
                    host: d.host,
                    hostname: d.hostname,
                    port: d.port,
                    pathname: d.pathname,
                    search: d.search,
                    searchParams: e,
                    hash: d.hash
                })
            }
            return c
        }
        var n;
        try {
            n = pj(a)
        } catch (x) {
            return
        }
        if (!n.protocol || !n.host) return;
        var p = {};
        if (n.search)
            for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) {
                var u = q[r].split("="),
                    t = u[0],
                    v = ij(u.splice(1).join("=")) || "";
                v = v.replace(/\+/g, " ");
                p.hasOwnProperty(t) ? typeof p[t] === "string" ? p[t] = [p[t], v] : p[t].push(v) : p[t] = v
            }
        n.searchParams = p;
        n.origin = n.protocol + "//" + n.host;
        n.username = "";
        n.password = "";
        b = Id(n);
        return b
    }
    dQ.publicName = "parseUrl";

    function eQ(a) {}
    eQ.J = "internal.processAsNewEvent";

    function fQ(a, b, c) {
        var d;
        if (!wh(a) || !zh(b) && !yh(b) || !Ih(c) && !yh(c)) throw G(this.getName(), ["Object", "function|undefined", "number|undefined"], arguments);
        var e = B(a, this.K, 1),
            f = B(b, this.K, 1);
        I(this, "update_data_layer", e, f, c);
        d = f ? iB(e, f, c) : jB(e);
        return d
    }
    fQ.J = "internal.pushToDataLayer";

    function gQ(a) {
        var b = Da.apply(1, arguments),
            c = !1;
        return c
    }
    gQ.publicName = "queryPermission";

    function hQ(a) {
        var b = this;
    }
    hQ.J = "internal.queueAdsTransmission";

    function iQ(a) {
        var b = void 0;
        return b
    }
    iQ.publicName = "readAnalyticsStorage";

    function jQ() {
        var a = "";
        return a
    }
    jQ.publicName = "readCharacterSet";

    function kQ() {
        return E(19)
    }
    kQ.J = "internal.readDataLayerName";

    function lQ() {
        var a = "";
        return a
    }
    lQ.publicName = "readTitle";

    function mQ(a, b) {
        var c = this;
    }
    mQ.J = "internal.registerCcdCallback";

    function nQ(a, b) {
        return !0
    }
    nQ.J = "internal.registerDestination";
    var oQ = ["config", "event", "get", "set"];

    function pQ(a, b, c) {}
    pQ.J = "internal.registerGtagCommandListener";

    function qQ(a, b) {
        var c = !1;
        return c
    }
    qQ.J = "internal.removeDataLayerEventListener";

    function rQ(a, b) {}
    rQ.J = "internal.removeFormData";

    function sQ() {}
    sQ.publicName = "resetDataLayer";

    function tQ(a, b, c) {
        var d = void 0;
        return d
    }
    tQ.J = "internal.scrubUrlParams";

    function uQ(a) {}
    uQ.J = "internal.sendAdsHit";

    function vQ(a, b, c, d) {}
    vQ.J = "internal.sendGtagEvent";

    function wQ(a, b, c) {}
    wQ.publicName = "sendPixel";

    function xQ(a, b) {}
    xQ.J = "internal.setAnchorHref";

    function yQ(a) {}
    yQ.J = "internal.setContainerConsentDefaults";

    function zQ(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    zQ.publicName = "setCookie";

    function AQ(a) {}
    AQ.J = "internal.setCorePlatformServices";

    function BQ(a, b) {}
    BQ.J = "internal.setDataLayerValue";

    function CQ(a) {}
    CQ.publicName = "setDefaultConsentState";

    function DQ(a, b) {}
    DQ.J = "internal.setDelegatedConsentType";

    function EQ(a, b) {}
    EQ.J = "internal.setFormAction";

    function FQ(a, b, c) {
        c = c === void 0 ? !1 : c;
    }
    FQ.J = "internal.setInCrossContainerData";

    function GQ(a, b, c) {
        if (!Dh(a) || !Hh(c)) throw G(this.getName(), ["string", "any", "boolean|undefined"], arguments);
        I(this, "access_globals", "readwrite", a);
        var d = a.split("."),
            e = Nb(w, d, [w, z]),
            f = d.pop();
        if (e && (e[String(f)] === void 0 || c)) return e[String(f)] = B(b, this.K, 2), !0;
        return !1
    }
    GQ.publicName = "setInWindow";

    function HQ(a, b, c) {}
    HQ.J = "internal.setProductSettingsParameter";

    function IQ(a, b, c) {}
    IQ.J = "internal.setRemoteConfigParameter";

    function JQ(a, b) {}
    JQ.J = "internal.setTransmissionMode";

    function KQ(a, b, c, d) {
        var e = this;
    }
    KQ.publicName = "sha256";

    function LQ(a, b, c) {}
    LQ.J = "internal.sortRemoteConfigParameters";

    function MQ(a) {}
    MQ.J = "internal.storeAdsBraidLabels";

    function NQ(a, b) {
        var c = void 0;
        return c
    }
    NQ.J = "internal.subscribeToCrossContainerData";

    function OQ(a) {}
    OQ.J = "internal.taskSendAdsHits";
    var PQ = {},
        QQ = {};
    PQ.getItem = function(a) {
        var b = null;
        I(this, "access_template_storage");
        var c = XC(this).Nb();
        QQ[c] && (b = QQ[c].hasOwnProperty("gtm." + a) ? QQ[c]["gtm." + a] : null);
        return b
    };
    PQ.setItem = function(a, b) {
        I(this, "access_template_storage");
        var c = XC(this).Nb();
        QQ[c] = QQ[c] || {};
        QQ[c]["gtm." + a] = b;
    };
    PQ.removeItem = function(a) {
        I(this, "access_template_storage");
        var b = XC(this).Nb();
        if (!QQ[b] || !QQ[b].hasOwnProperty("gtm." + a)) return;
        delete QQ[b]["gtm." + a];
    };
    PQ.clear = function() {
        I(this, "access_template_storage"), delete QQ[XC(this).Nb()];
    };
    PQ.publicName = "templateStorage";
    PQ.resetForTest = function() {
        for (var a = m(Object.keys(QQ)), b = a.next(); !b.done; b = a.next()) delete QQ[b.value]
    };

    function RQ(a, b) {
        var c = !1;
        if (!Ch(a) || !Dh(b)) throw G(this.getName(), ["OpaqueValue", "string"], arguments);
        var d = a.getValue();
        if (!(d instanceof RegExp)) return !1;
        c = d.test(b);
        return c
    }
    RQ.J = "internal.testRegex";

    function SQ(a) {
        var b;
        return b
    };

    function TQ(a, b) {}
    TQ.J = "internal.trackUsage";

    function UQ(a, b) {
        var c;
        return c
    }
    UQ.J = "internal.unsubscribeFromCrossContainerData";

    function VQ(a) {}
    VQ.publicName = "updateConsentState";

    function WQ(a) {
        var b = !1;
        return b
    }
    WQ.J = "internal.userDataNeedsEncryption";
    var XQ;

    function YQ(a, b, c) {
        XQ = XQ || new ri;
        XQ.add(a, b, c)
    }

    function ZQ(a, b) {
        var c = XQ = XQ || new ri;
        if (c.C.hasOwnProperty(a)) throw Error("Attempting to add a private function which already exists: " + a + ".");
        if (c.contains(a)) throw Error("Attempting to add a private function with an existing API name: " + a + ".");
        c.C[a] = rb(b) ? Lh(a, b) : Mh(a, b)
    }

    function $Q() {
        return function(a) {
            var b;
            var c = XQ;
            if (c.contains(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.C.hasOwnProperty(a)) {
                    var e = this.K.qb();
                    if (e) {
                        var f = !1,
                            g = e.Nb();
                        if (g) {
                            Sh(g) || (f = !0);
                        }
                        d = f
                    } else d = !0
                }
                if (d) {
                    var h = c.C.hasOwnProperty(a) ? c.C[a] : void 0;
                    b = h
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };

    function aR() {
        var a = function(c) {
                return void ZQ(c.J, c)
            },
            b = function(c) {
                return void YQ(c.publicName, c)
            };
        b(RC);
        b(YC);
        b(lE);
        b(nE);
        b(oE);
        b(vE);
        b(xE);
        b(AF);
        b(XP());
        b(CF);
        b(UL);
        b(VL);
        b(uM);
        b(vM);
        b(wM);
        b(DM);
        b(wP);
        b(zP);
        b(MP);
        b(aQ);
        b(dQ);
        b(gQ);
        b(iQ);
        b(jQ);
        b(lQ);
        b(wQ);
        b(zQ);
        b(CQ);
        b(GQ);
        b(KQ);
        b(PQ);
        b(VQ);
        YQ("Math", Qh());
        YQ("Object", pi);
        YQ("TestHelper", ti());
        YQ("assertApi", Nh);
        YQ("assertThat", Oh);
        YQ("decodeUri", Th);
        YQ("decodeUriComponent", Uh);
        YQ("encodeUri", Vh);
        YQ("encodeUriComponent", Wh);
        YQ("fail", ai);
        YQ("generateRandom",
            di);
        YQ("getTimestamp", ei);
        YQ("getTimestampMillis", ei);
        YQ("getType", fi);
        YQ("makeInteger", hi);
        YQ("makeNumber", ii);
        YQ("makeString", ji);
        YQ("makeTableMap", ki);
        YQ("mock", ni);
        YQ("mockObject", oi);
        YQ("fromBase64", OL, !("atob" in w));
        YQ("localStorage", $P, !ZP());
        YQ("toBase64", SQ, !("btoa" in w));
        a(QC);
        a(UC);
        a(nD);
        a(zD);
        a(GD);
        a(LD);
        a(aE);
        a(jE);
        a(mE);
        a(pE);
        a(qE);
        a(rE);
        a(sE);
        a(tE);
        a(uE);
        a(wE);
        a(yE);
        a(zF);
        a(BF);
        a(DF);
        a(EF);
        a(FF);
        a(GF);
        a(HF);
        a(UG);
        a(ZG);
        a(gH);
        a(hH);
        a(sH);
        a(xH);
        a(CH);
        a(LH);
        a(QH);
        a(cI);
        a(eI);
        a(sI);
        a(tI);
        a(vI);
        a(ML);
        a(NL);
        a(PL);
        a(QL);
        a(RL);
        a(SL);
        a(TL);
        a(WL);
        a(XL);
        a(YL);
        a(ZL);
        a($L);
        a(aM);
        a(bM);
        a(cM);
        a(dM);
        a(eM);
        a(fM);
        a(gM);
        a(hM);
        a(iM);
        a(jM);
        a(kM);
        a(mM);
        a(nM);
        a(oM);
        a(pM);
        a(qM);
        a(rM);
        a(sM);
        a(tM);
        a(xM);
        a(yM);
        a(zM);
        a(AM);
        a(BM);
        a(CM);
        a(FM);
        a(tP);
        a(uP);
        a(yP);
        a(BP);
        a(KP);
        a(LP);
        a(NP);
        a(OP);
        a(PP);
        a(QP);
        a(RP);
        a(SP);
        a(TP);
        a(UP);
        a(VP);
        a(WP);
        a(YP);
        a(ZD);
        a(bQ);
        a(cQ);
        a(eQ);
        a(fQ);
        a(hQ);
        a(kQ);
        a(mQ);
        a(nQ);
        a(pQ);
        a(qQ);
        a(rQ);
        a(tQ);
        a(uQ);
        a(vQ);
        a(xQ);
        a(yQ);
        a(AQ);
        a(BQ);
        a(DQ);
        a(EQ);
        a(FQ);
        a(HQ);
        a(IQ);
        a(JQ);
        a(LQ);
        a(MQ);
        a(NQ);
        a(OQ);
        a(RQ);
        a(TQ);
        a(UQ);
        a(WQ);
        ZQ("internal.IframingStateSchema", xP());
        ZQ("internal.quickHash", ci);
        P(160) ? b(KP) : b(HP);
        return $Q()
    };
    var OC;

    function bR() {
        var a = data.sandboxed_scripts,
            b = data.security_groups;
        a: {
            var c = data.runtime || [],
                d = data.runtime_lines;OC = new ef;cR();Pf = NC();
            var e = OC,
                f = aR(),
                g = new Bd("require", f);g.Va();e.C.C.set("require", g);Xa.set("require", g);
            for (var h = [], l = 0; l < c.length; l++) {
                var n = c[l];
                if (!Array.isArray(n) || n.length < 3) {
                    if (n.length === 0) continue;
                    break a
                }
                d && d[l] && d[l].length && rg(n, d[l]);
                try {
                    OC.execute(n), P(120) && Lk && n[0] === 50 && h.push(n[1])
                } catch (r) {}
            }
            P(120) && (bg = h)
        }
        if (a && a.length)
            for (var p = 0; p < a.length; p++) {
                var q = a[p].replace(/^_*/,
                    "");
                cj[q] = ["sandboxedScripts"]
            }
        dR(b)
    }

    function cR() {
        OC.Zc(function(a, b, c) {
            Zn.SANDBOXED_JS_SEMAPHORE = Zn.SANDBOXED_JS_SEMAPHORE || 0;
            Zn.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Zn.SANDBOXED_JS_SEMAPHORE--
            }
        })
    }

    function dR(a) {
        a && zb(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                cj[e] = cj[e] || [];
                cj[e].push(b)
            }
        })
    };

    function eR(a) {
        CA(xA("developer_id." + a, !0), 0, {})
    };
    var fR = Array.isArray;

    function gR(a, b) {
        return td(a, b || null)
    }

    function Y(a) {
        return window.encodeURIComponent(a)
    }

    function hR(a, b, c) {
        Rc(a, b, c)
    }

    function iR(a) {
        var b = ["veinteractive.com", "ve-interactive.cn"];
        if (!a) return !1;
        var c = jj(pj(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                f > 0 && e.charAt(0) !== "." && (f--, e = "." + e);
                if (f >= 0 && c.indexOf(e, f) === f) return !0
            }
        }
        return !1
    }

    function jR(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }

    function kR(a, b) {
        var c = {};
        if (a)
            for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
        if (b) {
            var e = jR(b, "parameter", "parameterValue");
            e && (c = gR(e, c))
        }
        return c
    }

    function lR(a, b, c) {
        return a === void 0 || a === c ? b : a
    }
    var mR = {
        La: {
            Tj: 1,
            Im: 2,
            Tm: 3,
            Um: 4,
            Vm: 5,
            Fm: 6
        }
    };
    mR.La[mR.La.Tj] = "ADOBE_COMMERCE";
    mR.La[mR.La.Im] = "SQUARESPACE";
    mR.La[mR.La.Tm] = "WOO_COMMERCE";
    mR.La[mR.La.Um] = "WOO_COMMERCE_LEGACY";
    mR.La[mR.La.Vm] = "WORD_PRESS";
    mR.La[mR.La.Fm] = "SHOPIFY";

    function nR() {
        try {
            if (!P(243)) return [];
            var a = P(430);
            if (a) {
                var b = km(gm.Z.tm);
                if (Array.isArray(b)) return b
            }
            rr("4");
            var c = [],
                d;
            a: {
                try {
                    d = !!IF('script[data-requiremodule^="mage/"]');
                    break a
                } catch (u) {}
                d = !1
            }
            d && c.push(mR.La.Tj);
            var e;
            a: {
                try {
                    e = !!IF('script[src^="//assets.squarespace.com/"]');
                    break a
                } catch (u) {}
                e = !1
            }
            e && c.push(mR.La.Im);
            var f;
            a: {
                if (P(425)) try {
                    f = !!IF('script[src*="cdn.shopify.com"],meta[property="og:image"][content*="cdn.shopify.com"],link[rel="preconnect"][href*="cdn.shopify.com"],link[rel="preconnect"][href*="fonts.shopifycdn.com"],link[rel="preconnect"][href*="iterable-shopify"],link[rel="preconnect"][href*="v.shopify.com"]');
                    break a
                } catch (u) {}
                f = !1
            }
            f && c.push(mR.La.Fm);
            var g;
            a: {
                try {
                    g = !!IF('script[src*="woocommerce"],link[href*="woocommerce"],[class|="woocommerce"]');
                    break a
                } catch (u) {}
                g = !1
            }
            g && c.push(mR.La.Um);
            var h;
            a: {
                try {
                    var l, n = ((l = z.location) == null ? void 0 : l.hostname) || "",
                        p, q = ((p = z.location) == null ? void 0 : p.origin) || "";
                    h = Mb(n, ".wordpress.com") || !!IF('[src^="' + q + '/wp-content"],meta[name="generator"][content^="WordPress "],link[rel="dns-prefetch"][href="//s.w.org"]');
                    break a
                } catch (u) {}
                h = !1
            }
            h && c.push(mR.La.Vm);
            var r;
            a: {
                try {
                    r = !!IF('[class*="woocommerce"],meta[name="generator"][content^="WooCommerce "]');
                    break a
                } catch (u) {}
                r = !1
            }
            r && c.push(mR.La.Tm);
            sr("4");
            lA && a && jm(gm.Z.tm, c);
            return c
        } catch (u) {}
        return []
    };

    function oR(a, b, c) {
        return Nc(a, b, c, void 0)
    }

    function pR(a, b) {
        return kp(a, b || 2)
    }

    function qR(a, b) {
        w[a] = b
    }

    function rR(a, b, c) {
        var d = w;
        b && (d[a] === void 0 || c && !d[a]) && (d[a] = b);
        return d[a]
    }
    var sR = {},
        tR = Pi.O;
    var Z = {
        securityGroups: {}
    };
    Z.securityGroups.update_data_layer = ["google"],
        function() {
            function a(b, c, d, e) {
                return {
                    message: c,
                    eventCallback: d,
                    eventTimeout: e
                }
            }(function(b) {
                Z.__update_data_layer = b;
                Z.__update_data_layer.F = "update_data_layer";
                Z.__update_data_layer.isVendorTemplate = !0;
                Z.__update_data_layer.priorityOverride = 0;
                Z.__update_data_layer.isInfrastructure = !1;
                Z.__update_data_layer["5"] = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e, f, g) {
                        if (f !== void 0 && typeof f !== "function") throw c(d, {}, "eventCallback must be a function.");
                        if (g !== void 0 && typeof g !== "number") throw c(d, {}, "eventTimeout must be a number.");
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.access_template_storage = ["google"], Z.__access_template_storage = function() {
        return {
            assert: function() {},
            U: function() {
                return {}
            }
        }
    }, Z.__access_template_storage.F = "access_template_storage", Z.__access_template_storage.isVendorTemplate = !0, Z.__access_template_storage.priorityOverride = 0, Z.__access_template_storage.isInfrastructure = !1, Z.__access_template_storage["5"] = !1;

    Z.securityGroups.access_element_values = ["google"],
        function() {
            function a(b, c, d, e) {
                return {
                    element: c,
                    operation: d,
                    newValue: e
                }
            }(function(b) {
                Z.__access_element_values = b;
                Z.__access_element_values.F = "access_element_values";
                Z.__access_element_values.isVendorTemplate = !0;
                Z.__access_element_values.priorityOverride = 0;
                Z.__access_element_values.isInfrastructure = !1;
                Z.__access_element_values["5"] = !1
            })(function(b) {
                var c = b.vtp_allowRead,
                    d = b.vtp_allowWrite,
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g, h, l) {
                        if (!(g instanceof HTMLElement)) throw e(f, {}, "Element must be a HTMLElement.");
                        if (h !== "read" && h !== "write") throw e(f, {}, "Unknown operation: " + h + ".");
                        if (h == "read" && !c) throw e(f, {}, "Attempting to perform disallowed operation: read.");
                        if (h == "write") {
                            if (!d) throw e(f, {}, "Attempting to perform disallowed operation: write.");
                            if (!sb(l)) throw e(f, {}, "Attempting to write value without valid new value.");
                        }
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.F = "access_globals";
                Z.__access_globals.isVendorTemplate = !0;
                Z.__access_globals.priorityOverride = 0;
                Z.__access_globals.isInfrastructure = !1;
                Z.__access_globals["5"] = !1
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var l = c[h],
                        n = l.key;
                    l.read && e.push(n);
                    l.write && f.push(n);
                    l.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!sb(r)) throw d(p, {}, "Key must be a string.");
                        if (q === "read") {
                            if (e.indexOf(r) > -1) return
                        } else if (q === "write") {
                            if (f.indexOf(r) > -1) return
                        } else if (q === "readwrite") {
                            if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return
                        } else if (q === "execute") {
                            if (g.indexOf(r) > -1) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.access_dom_element_properties = ["google"],
        function() {
            function a(b, c, d, e) {
                var f = {
                    property: e,
                    read: !1,
                    write: !1
                };
                switch (d) {
                    case "read":
                        f.read = !0;
                        break;
                    case "write":
                        f.write = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " operation " + d);
                }
                return f
            }(function(b) {
                Z.__access_dom_element_properties = b;
                Z.__access_dom_element_properties.F = "access_dom_element_properties";
                Z.__access_dom_element_properties.isVendorTemplate = !0;
                Z.__access_dom_element_properties.priorityOverride = 0;
                Z.__access_dom_element_properties.isInfrastructure = !1;
                Z.__access_dom_element_properties["5"] = !1
            })(function(b) {
                for (var c = b.vtp_properties || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                    var h = c[g],
                        l = h.property;
                    h.read && e.push(l);
                    h.write && f.push(l)
                }
                return {
                    assert: function(n, p, q, r) {
                        if (!sb(r)) throw d(n, {}, "Property must be a string.");
                        if (q === "read") {
                            if (e.indexOf(r) > -1) return
                        } else if (q === "write") {
                            if (f.indexOf(r) > -1) return
                        } else throw d(n, {}, 'Operation must be either "read" or "write"');
                        throw d(n, {}, '"' + q + '" operation is not allowed.');
                    },
                    U: a
                }
            })
        }();

    Z.securityGroups.read_dom_element_text = ["google"],
        function() {
            function a(b, c) {
                return {
                    element: c
                }
            }(function(b) {
                Z.__read_dom_element_text = b;
                Z.__read_dom_element_text.F = "read_dom_element_text";
                Z.__read_dom_element_text.isVendorTemplate = !0;
                Z.__read_dom_element_text.priorityOverride = 0;
                Z.__read_dom_element_text.isInfrastructure = !1;
                Z.__read_dom_element_text["5"] = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e) {
                        if (!(e instanceof HTMLElement)) throw c(d, {}, "Wrong element type. Must be HTMLElement.");
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.get_referrer = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    component: c,
                    queryKey: d
                }
            }(function(b) {
                Z.__get_referrer = b;
                Z.__get_referrer.F = "get_referrer";
                Z.__get_referrer.isVendorTemplate = !0;
                Z.__get_referrer.priorityOverride = 0;
                Z.__get_referrer.isInfrastructure = !1;
                Z.__get_referrer["5"] = !1
            })(function(b) {
                var c = b.vtp_urlParts === "any" ? null : [];
                c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"),
                    b.vtp_query && c.push("query"));
                var d = c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null,
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g, h) {
                        if (g) {
                            if (!sb(g)) throw e(f, {}, "URL component must be a string.");
                            if (c && c.indexOf(g) < 0) throw e(f, {}, "Prohibited URL component: " + g);
                            if (g === "query" && d) {
                                if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                                if (!sb(h)) throw e(f, {}, "Query key must be a string.");
                                if (d.indexOf(h) < 0) throw e(f, {}, "Prohibited query key: " +
                                    h);
                            }
                        } else if (c) throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.read_event_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_event_data = b;
                Z.__read_event_data.F = "read_event_data";
                Z.__read_event_data.isVendorTemplate = !0;
                Z.__read_event_data.priorityOverride = 0;
                Z.__read_event_data.isInfrastructure = !1;
                Z.__read_event_data["5"] = !1
            })(function(b) {
                var c = b.vtp_eventDataAccess,
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (g != null && !sb(g)) throw e(f, {
                            key: g
                        }, "Key must be a string.");
                        if (c !== "any") {
                            try {
                                if (c ===
                                    "specific" && g != null && ah(g, d)) return
                            } catch (h) {
                                throw e(f, {
                                    key: g
                                }, "Invalid key filter.");
                            }
                            throw e(f, {
                                key: g
                            }, "Prohibited read from event data.");
                        }
                    },
                    U: a
                }
            })
        }();

    Z.securityGroups.read_data_layer = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_data_layer = b;
                Z.__read_data_layer.F = "read_data_layer";
                Z.__read_data_layer.isVendorTemplate = !0;
                Z.__read_data_layer.priorityOverride = 0;
                Z.__read_data_layer.isInfrastructure = !1;
                Z.__read_data_layer["5"] = !1
            })(function(b) {
                var c = b.vtp_allowedKeys || "specific",
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!sb(g)) throw e(f, {}, "Keys must be strings.");
                        if (c !== "any") {
                            try {
                                if (ah(g,
                                        d)) return
                            } catch (h) {
                                throw e(f, {}, "Invalid key filter.");
                            }
                            throw e(f, {}, "Prohibited read from data layer variable: " + g + ".");
                        }
                    },
                    U: a
                }
            })
        }();



    Z.securityGroups.gaawe = ["google"],
        function() {
            function a(f, g, h) {
                for (var l = 0; l < g.length; l++) f.hasOwnProperty(g[l]) && (f[g[l]] = h(f[g[l]]))
            }

            function b(f, g, h) {
                var l = {},
                    n = function(t, v) {
                        l[t] = l[t] || v
                    },
                    p = function(t, v, x) {
                        x = x === void 0 ? !1 : x;
                        c.push(qP);
                        if (t) {
                            l.items = l.items || [];
                            for (var y = {}, A = 0; A < t.length; y = {
                                    Cg: void 0
                                }, A++) y.Cg = {}, zb(t[A], function(D) {
                                return function(H, J) {
                                    x && H === "id" ? D.Cg.promotion_id = J : x && H === "name" ? D.Cg.promotion_name = J : D.Cg[H] = J
                                }
                            }(y)), l.items.push(y.Cg)
                        }
                        if (v)
                            for (var C in v) d.hasOwnProperty(C) ? n(d[C],
                                v[C]) : n(C, v[C])
                    },
                    q;
                f.vtp_getEcommerceDataFrom === "dataLayer" ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, sd(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (sd(q)) {
                    var r = !1,
                        u;
                    for (u in q) q.hasOwnProperty(u) && (r || (c.push(pP), r = !0), u === "currencyCode" ? n("currency", q.currencyCode) : u === "impressions" && g === K.m.qc ? p(q.impressions, null) : u === "promoClick" && g === K.m.zc ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : u === "promoView" && g === K.m.rc ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(u) ? g === e[u] && p(q[u].products, q[u].actionField) : l[u] = q[u]);
                    gR(l, h)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Z.__gaawe = f;
                Z.__gaawe.F = "gaawe";
                Z.__gaawe.isVendorTemplate = !0;
                Z.__gaawe.priorityOverride = 0;
                Z.__gaawe.isInfrastructure = !1;
                Z.__gaawe["5"] = !0
            })(function(f) {
                var g;
                g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (sb(g) && g.indexOf("G-") === 0) {
                    var h = String(f.vtp_eventName),
                        l = {};
                    c = [];
                    f.vtp_sendEcommerceData && (Zm.hasOwnProperty(h) || h === "checkout_option") && b(f, h, l);
                    var n = f.vtp_eventSettingsVariable;
                    if (n)
                        for (var p in n) n.hasOwnProperty(p) && (l[p] = n[p]);
                    if (f.vtp_eventSettingsTable) {
                        var q = jR(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
                            r;
                        for (r in q) l[r] = q[r]
                    }
                    var u = jR(f.vtp_eventParameters,
                            "name", "value"),
                        t;
                    for (t in u) u.hasOwnProperty(t) && (l[t] = u[t]);
                    var v = f.vtp_userDataVariable;
                    v && (l[K.m.Ib] = v);
                    if (l.hasOwnProperty(K.m.yd) || f.vtp_userProperties) {
                        var x = l[K.m.yd] || {};
                        gR(jR(f.vtp_userProperties, "name", "value"), x);
                        l[K.m.yd] = x
                    }
                    var y = {
                            originatingEntity: az(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                        },
                        A = {};
                    c.length > 0 && (A[Q.A.Fl] = c);
                    rP(A, g);
                    Object.keys(A).length > 0 && (y.eventMetadata = A);
                    a(l, $m, function(D) {
                        return Cb(D)
                    });
                    a(l, bn, function(D) {
                        return Number(D)
                    });
                    var C = f.vtp_gtmEventId;
                    y.noGtmEvent = !0;
                    CA(AA(g, h, l), C, y);
                    Uc(f.vtp_gtmOnSuccess)
                } else Uc(f.vtp_gtmOnFailure)
            })
        }();

    Z.securityGroups.get_element_attributes = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    element: c,
                    attribute: d
                }
            }(function(b) {
                Z.__get_element_attributes = b;
                Z.__get_element_attributes.F = "get_element_attributes";
                Z.__get_element_attributes.isVendorTemplate = !0;
                Z.__get_element_attributes.priorityOverride = 0;
                Z.__get_element_attributes.isInfrastructure = !1;
                Z.__get_element_attributes["5"] = !1
            })(function(b) {
                var c = b.vtp_allowedAttributes || "specific",
                    d = b.vtp_attributes || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f,
                        g, h) {
                        if (!sb(h)) throw e(f, {}, "Attribute must be a string.");
                        if (!(g instanceof HTMLElement)) throw e(f, {}, "Wrong element type. Must be HTMLElement.");
                        if (h === "value" || c !== "any" && (c !== "specific" || d.indexOf(h) === -1)) throw e(f, {}, 'Reading attribute "' + h + '" is not allowed.');
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.detect_link_click_events = ["google"],
        function() {
            function a(b, c) {
                return {
                    options: c
                }
            }(function(b) {
                Z.__detect_link_click_events = b;
                Z.__detect_link_click_events.F = "detect_link_click_events";
                Z.__detect_link_click_events.isVendorTemplate = !0;
                Z.__detect_link_click_events.priorityOverride = 0;
                Z.__detect_link_click_events.isInfrastructure = !1;
                Z.__detect_link_click_events["5"] = !1
            })(function(b) {
                var c = b.vtp_allowWaitForTags,
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!c && f && f.waitForTags) throw d(e, {}, "Prohibited option waitForTags.");
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.detect_form_submit_events = ["google"],
        function() {
            function a(b, c) {
                return {
                    options: c
                }
            }(function(b) {
                Z.__detect_form_submit_events = b;
                Z.__detect_form_submit_events.F = "detect_form_submit_events";
                Z.__detect_form_submit_events.isVendorTemplate = !0;
                Z.__detect_form_submit_events.priorityOverride = 0;
                Z.__detect_form_submit_events.isInfrastructure = !1;
                Z.__detect_form_submit_events["5"] = !1
            })(function(b) {
                var c = b.vtp_allowWaitForTags,
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!c && f &&
                            f.waitForTags) throw d(e, {}, "Prohibited option waitForTags.");
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.load_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    firstPartyUrl: d
                }
            }(function(b) {
                Z.__load_google_tags = b;
                Z.__load_google_tags.F = "load_google_tags";
                Z.__load_google_tags.isVendorTemplate = !0;
                Z.__load_google_tags.priorityOverride = 0;
                Z.__load_google_tags.isInfrastructure = !1;
                Z.__load_google_tags["5"] = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_allowFirstPartyUrls || !1,
                    e = b.vtp_allowedFirstPartyUrls || "specific",
                    f = b.vtp_urls || [],
                    g = b.vtp_tagIds || [],
                    h = b.vtp_createPermissionError;
                return {
                    assert: function(l, n, p) {
                        (function(q) {
                            if (!sb(q)) throw h(l, {}, "Tag ID must be a string.");
                            if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1)) throw h(l, {}, "Prohibited Tag ID: " + q + ".");
                        })(n);
                        (function(q) {
                            if (q !== void 0) {
                                if (!sb(q)) throw h(l, {}, "First party URL must be a string.");
                                if (d) {
                                    if (e === "any") return;
                                    if (e === "specific") try {
                                        if (sh(pj(q), f)) return
                                    } catch (r) {
                                        throw h(l, {}, "Invalid first party URL filter.");
                                    }
                                }
                                throw h(l, {}, "Prohibited first party URL: " + q);
                            }
                        })(p)
                    },
                    U: a
                }
            })
        }();




    Z.securityGroups.get_url = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    component: c,
                    queryKey: d
                }
            }(function(b) {
                Z.__get_url = b;
                Z.__get_url.F = "get_url";
                Z.__get_url.isVendorTemplate = !0;
                Z.__get_url.priorityOverride = 0;
                Z.__get_url.isInfrastructure = !1;
                Z.__get_url["5"] = !1
            })(function(b) {
                var c = b.vtp_urlParts === "any" ? null : [];
                c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment &&
                    c.push("fragment"));
                var d = c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null,
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g, h) {
                        if (g) {
                            if (!sb(g)) throw e(f, {}, "URL component must be a string.");
                            if (c && c.indexOf(g) < 0) throw e(f, {}, "Prohibited URL component: " + g);
                            if (g === "query" && d) {
                                if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                                if (!sb(h)) throw e(f, {}, "Query key must be a string.");
                                if (d.indexOf(h) < 0) throw e(f, {}, "Prohibited query key: " + h);
                            }
                        } else if (c) throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
                    },
                    U: a
                }
            })
        }();

    Z.securityGroups.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__inject_script = b;
                Z.__inject_script.F = "inject_script";
                Z.__inject_script.isVendorTemplate = !0;
                Z.__inject_script.priorityOverride = 0;
                Z.__inject_script.isInfrastructure = !1;
                Z.__inject_script["5"] = !1
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!sb(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (sh(pj(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " + f);
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.unsafe_run_arbitrary_javascript = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__unsafe_run_arbitrary_javascript = b;
                Z.__unsafe_run_arbitrary_javascript.F = "unsafe_run_arbitrary_javascript";
                Z.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
                Z.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
                Z.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
                Z.__unsafe_run_arbitrary_javascript["5"] = !1
            })(function() {
                return {
                    assert: function() {},
                    U: a
                }
            })
        }();




    Z.securityGroups.read_dom_elements = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    type: c,
                    value: d
                }
            }(function(b) {
                Z.__read_dom_elements = b;
                Z.__read_dom_elements.F = "read_dom_elements";
                Z.__read_dom_elements.isVendorTemplate = !0;
                Z.__read_dom_elements.priorityOverride = 0;
                Z.__read_dom_elements.isInfrastructure = !1;
                Z.__read_dom_elements["5"] = !1
            })(function(b) {
                var c = b.vtp_allowedElementIds || "none",
                    d = b.vtp_allowedCssSelectors || "none",
                    e = b.vtp_elementIds || [],
                    f = b.vtp_cssSelectors || [],
                    g = b.vtp_createPermissionError;
                return {
                    assert: function(h,
                        l, n) {
                        switch (l) {
                            case "id":
                                if (c === "none") break;
                                if (c === "any" || e.indexOf(n) > -1) return;
                                break;
                            case "css":
                                if (d === "none") break;
                                if (d === "any" || f.indexOf(n) > -1) return;
                                break;
                            default:
                                throw g(h, {}, "Unknown selector type " + l + ".");
                        }
                        throw g(h, {}, "Prohibited selector value " + n + " for selector type " + l + ".");
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.unsafe_inject_arbitrary_html = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    useIframe: c,
                    supportDocumentWrite: d
                }
            }(function(b) {
                Z.__unsafe_inject_arbitrary_html = b;
                Z.__unsafe_inject_arbitrary_html.F = "unsafe_inject_arbitrary_html";
                Z.__unsafe_inject_arbitrary_html.isVendorTemplate = !0;
                Z.__unsafe_inject_arbitrary_html.priorityOverride = 0;
                Z.__unsafe_inject_arbitrary_html.isInfrastructure = !1;
                Z.__unsafe_inject_arbitrary_html["5"] = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d,
                        e, f) {
                        if (e && f) throw c(d, {}, "Only one of useIframe and supportDocumentWrite can be true.");
                        if (e !== void 0 && typeof e !== "boolean") throw c(d, {}, "useIframe must be a boolean.");
                        if (f !== void 0 && typeof f !== "boolean") throw c(d, {}, "supportDocumentWrite must be a boolean.");
                    },
                    U: a
                }
            })
        }();

    Z.securityGroups.detect_click_events = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    matchCommonButtons: c,
                    cssSelector: d
                }
            }(function(b) {
                Z.__detect_click_events = b;
                Z.__detect_click_events.F = "detect_click_events";
                Z.__detect_click_events.isVendorTemplate = !0;
                Z.__detect_click_events.priorityOverride = 0;
                Z.__detect_click_events.isInfrastructure = !1;
                Z.__detect_click_events["5"] = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e, f) {
                        if (e !== void 0 && typeof e !== "boolean") throw c(d, {}, "matchCommonButtons must be a boolean.");
                        if (f !== void 0 && typeof f !== "string") throw c(d, {}, "cssSelector must be a string.");
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__logging = b;
                Z.__logging.F = "logging";
                Z.__logging.isVendorTemplate = !0;
                Z.__logging.priorityOverride = 0;
                Z.__logging.isInfrastructure = !1;
                Z.__logging["5"] = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = c !== "all" && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    U: a
                }
            })
        }();
    Z.securityGroups.configure_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    configuration: d
                }
            }(function(b) {
                Z.__configure_google_tags = b;
                Z.__configure_google_tags.F = "configure_google_tags";
                Z.__configure_google_tags.isVendorTemplate = !0;
                Z.__configure_google_tags.priorityOverride = 0;
                Z.__configure_google_tags.isInfrastructure = !1;
                Z.__configure_google_tags["5"] = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_tagIds || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f,
                        g) {
                        if (!sb(g)) throw e(f, {}, "Tag ID must be a string.");
                        if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1)) throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
                    },
                    U: a
                }
            })
        }();




    Z.securityGroups.get_cookies = ["google"],
        function() {
            function a(b, c) {
                return {
                    name: c
                }
            }(function(b) {
                Z.__get_cookies = b;
                Z.__get_cookies.F = "get_cookies";
                Z.__get_cookies.isVendorTemplate = !0;
                Z.__get_cookies.priorityOverride = 0;
                Z.__get_cookies.isInfrastructure = !1;
                Z.__get_cookies["5"] = !1
            })(function(b) {
                var c = b.vtp_cookieAccess || "specific",
                    d = b.vtp_cookieNames || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!sb(g)) throw e(f, {}, "Cookie name must be a string.");
                        if (c !== "any" && !(c === "specific" && d.indexOf(g) >=
                                0)) throw e(f, {}, 'Access to cookie "' + g + '" is prohibited.');
                    },
                    U: a
                }
            })
        }();
    var uR = {},
        bo = {
            dataLayer: lp,
            callback: function(a) {
                uR.hasOwnProperty(a) && rb(uR[a]) && uR[a]();
                delete uR[a]
            },
            bootstrap: 0
        };
    bo.onHtmlSuccess = iC(!0), bo.onHtmlFailure = iC(!1);

    function vR() {
        ao();
        Wj();
        Oy();
        Jb(cj, Z.securityGroups);
        var a = Sj(Tj()),
            b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        An(c, a == null ? void 0 : a.parent);
        c !== 2 && c !== 4 && c !== 3 || M(142);
        eC(), Yf({
            vr: function(d) {
                return d === cC
            },
            Dq: function(d) {
                return new fC(d)
            },
            wr: function(d) {
                for (var e = !1, f = !1, g = 2; g < d.length; g++) e = e || d[g] === 8, f = f || d[g] === 16;
                return e && f
            },
            Mr: function(d) {
                var e;
                if (d === cC) e = d;
                else {
                    var f = fo();
                    dC[f] = d;
                    e = 'google_tag_manager["rm"]["' + Pj() + '"](' + f + ")"
                }
                return e
            }
        });
        ag = {
            yq: xg
        }
    }

    function wR() {
        var a = E(60);
        a && a && (kJ[a] = !0)
    }

    function Lm() {
        try {
            if (kg(47) || !fk()) {
                Ui();
                if (P(109)) {}
                Va[6] = !0;
                var a = $n("debugGroupId", function() {
                    return String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()))
                });
                In(a);
                io();
                GC();
                zq();
                kA();
                if (Xj()) {
                    E(5);
                    WD();
                    Oz().removeExternalRestrictions(Pj());
                } else {
                    vJ();
                    sw();
                    Zf();
                    Vf = Z;
                    Wf = oC;
                    Ax();
                    bR();
                    vR();
                    mC();
                    Jm || (Im = Nm(), Im["0"] && lm(gm.Z.De, JSON.stringify(Im)));
                    Xn();
                    qB();
                    qA();
                    YA = !1;
                    z.readyState === "complete" ? $A() : Sc(w, "load", $A);
                    jA();
                    Lk && (vp(Ip), w.setInterval(Hp, 864E5), vp(HC), vp(zz), vp(Ow), vp(Lp), vp(KC), vp(Mz), P(120) && (vp(Ez), vp(Fz), vp(Gz)), jC = {}, vp(lC));
                    Nk && (xm(), zo(), sB(), GB(), BB(), lk("bt", String(kg(47) ? 2 : kg(50) ? 1 : 0)), lk("ct", String(kg(47) ?
                        0 : kg(50) ? 1 : 3)), wB(), AB(), EB());
                    google_tag_manager_external.postscribe.installPostscribe();
                    aC();
                    Hm(1);
                    XD();
                    bo.bootstrap = Gb();
                    kg(51) && pB();
                    P(109) && jx();
                    typeof w.name === "string" && Lb(w.name, "web-pixel-sandbox-CUSTOM") && id() ? eR("dMDg0Yz") : w.Shopify && (eR("dN2ZkMj"), id() && eR("dNTU0Yz"));
                    wR()
                }
            }
        } catch (b) {
            Hm(5), Ep()
        }
    }
    (function(a) {
        function b() {
            n = z.documentElement.getAttribute("data-tag-assistant-present");
            nn(n) && (l = h.Gl)
        }

        function c() {
            l && Ec ? g(l) : a()
        }
        if (!w[E(37)]) {
            var d = !1;
            if (z.referrer) {
                var e = pj(z.referrer);
                d = lj(e, "host") === E(38)
            }
            if (!d) {
                var f = vr(E(39));
                d = !(!f.length || !f[0].length)
            }
            d && (w[E(37)] = !0, Nc(E(40)))
        }
        var g = function(t) {
                var v = "GTM",
                    x = "GTM";
                Zi && (v = "OGT", x = "GTAG");
                var y = E(23),
                    A = w[y];
                A || (A = [], w[y] = A, Nc("https://" + E(3) + "/debug/bootstrap?id=" + E(5) + "&src=" + x + "&cond=" + String(t) + "&gtm=" + rp()));
                var C = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Ec,
                        containerProduct: v,
                        debug: !1,
                        id: E(5),
                        targetRef: {
                            ctid: E(5),
                            isDestination: Mj(),
                            canonicalId: E(6)
                        },
                        aliases: Qj(),
                        destinations: Nj()
                    }
                };
                C.data.resume = function() {
                    a()
                };
                kg(2) && (C.data.initialPublish = !0);
                A.push(C)
            },
            h = {
                Ep: 1,
                Vl: 2,
                xm: 3,
                rk: 4,
                Gl: 5
            };
        h[h.Ep] = "GTM_DEBUG_LEGACY_PARAM";
        h[h.Vl] = "GTM_DEBUG_PARAM";
        h[h.xm] = "REFERRER";
        h[h.rk] = "COOKIE";
        h[h.Gl] = "EXTENSION_PARAM";
        var l = void 0,
            n = void 0,
            p = jj(w.location, "query", !1, void 0, "gtm_debug");
        nn(p) && (l = h.Vl);
        if (!l && z.referrer) {
            var q = pj(z.referrer);
            lj(q,
                "host") === E(24) && (l = h.xm)
        }
        if (!l) {
            var r = vr("__TAG_ASSISTANT");
            r.length && r[0].length && (l = h.rk)
        }
        l || b();
        if (!l && mn(n)) {
            var u = !1;
            Sc(z, "TADebugSignal", function() {
                u || (u = !0, b(), c())
            }, !1);
            w.setTimeout(function() {
                u || (u = !0, b(), c())
            }, 200)
        } else c()
    })(function() {
        !kg(47) || Nm()["0"] ? Lm() : Km()
    });

})()
