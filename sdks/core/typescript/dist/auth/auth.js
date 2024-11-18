"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.Oauth2Authentication = void 0;
var Oauth2Authentication = (function () {
    function Oauth2Authentication(accessToken) {
        this.accessToken = accessToken;
    }
    Oauth2Authentication.prototype.getName = function () {
        return "oauth2";
    };
    Oauth2Authentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    };
    return Oauth2Authentication;
}());
exports.Oauth2Authentication = Oauth2Authentication;
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["oauth2"]) {
        authMethods["oauth2"] = new Oauth2Authentication(config["oauth2"]["accessToken"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map