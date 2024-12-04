"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialAccountTypeEnum = exports.SocialAccount = void 0;
var SocialAccount = (function () {
    function SocialAccount() {
    }
    SocialAccount.getAttributeTypeMap = function () {
        return SocialAccount.attributeTypeMap;
    };
    SocialAccount.discriminator = undefined;
    SocialAccount.mapping = undefined;
    SocialAccount.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SocialAccountTypeEnum",
            "format": ""
        }
    ];
    return SocialAccount;
}());
exports.SocialAccount = SocialAccount;
var SocialAccountTypeEnum;
(function (SocialAccountTypeEnum) {
    SocialAccountTypeEnum["SocialAccountTypeUnspecified"] = "SOCIAL_ACCOUNT_TYPE_UNSPECIFIED";
    SocialAccountTypeEnum["Facebook"] = "FACEBOOK";
    SocialAccountTypeEnum["LinkedIn"] = "LINKED_IN";
    SocialAccountTypeEnum["Twitter"] = "TWITTER";
    SocialAccountTypeEnum["Instagram"] = "INSTAGRAM";
    SocialAccountTypeEnum["Snapchat"] = "SNAPCHAT";
    SocialAccountTypeEnum["Youtube"] = "YOUTUBE";
    SocialAccountTypeEnum["Pinterest"] = "PINTEREST";
})(SocialAccountTypeEnum = exports.SocialAccountTypeEnum || (exports.SocialAccountTypeEnum = {}));
//# sourceMappingURL=SocialAccount.js.map