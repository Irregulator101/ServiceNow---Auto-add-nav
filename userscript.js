// ==UserScript==
// @name           ServiceNow - Auto-add nav frame
// @namespace      Violentmonkey Scripts
// @include        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/.+?\.do(.+?|$)/
// @include        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/sp_config(.+?|$)/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/now\/nav\/ui\/classic\/params\/target/.+?/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/login\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/login_redirect\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/validate_multifactor_auth_code\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/side_door\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/navpage\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/logout_success\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/\$.+/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/sys_store_app\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/session_timeout\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/auth_redirect\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/x_snc_sso_auth\.do/
// @exclude        /https?:\/\/.+?\.(service-now|servicenowservices)\.com\/workflow_ide\.do(.+?|$)/
// @grant          none
// @version        0.5
// @author         Eric Schultz
// @description    Created 10/29/2024
// ==/UserScript==

// Ensure we're not in a popup window before running
if(window.menubar.visible) {
  var rex = /\.com\/(.+)/;
  var match = window.location.href.match(rex);
  window.location.href = window.location.href.replace(match[0], '.com/now/nav/ui/classic/params/target/' + encodeURIComponent(match[1]));
}