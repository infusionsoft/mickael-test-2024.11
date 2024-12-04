"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAddressRequestFieldEnum = exports.EmailAddressRequest = void 0;
var EmailAddressRequest = (function () {
    function EmailAddressRequest() {
    }
    EmailAddressRequest.getAttributeTypeMap = function () {
        return EmailAddressRequest.attributeTypeMap;
    };
    EmailAddressRequest.discriminator = undefined;
    EmailAddressRequest.mapping = undefined;
    EmailAddressRequest.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "EmailAddressRequestFieldEnum",
            "format": ""
        },
        {
            "name": "optInReason",
            "baseName": "opt_in_reason",
            "type": "string",
            "format": ""
        }
    ];
    return EmailAddressRequest;
}());
exports.EmailAddressRequest = EmailAddressRequest;
var EmailAddressRequestFieldEnum;
(function (EmailAddressRequestFieldEnum) {
    EmailAddressRequestFieldEnum["EmailFieldUnspecified"] = "EMAIL_FIELD_UNSPECIFIED";
    EmailAddressRequestFieldEnum["Email1"] = "EMAIL1";
    EmailAddressRequestFieldEnum["Email2"] = "EMAIL2";
    EmailAddressRequestFieldEnum["Email3"] = "EMAIL3";
})(EmailAddressRequestFieldEnum = exports.EmailAddressRequestFieldEnum || (exports.EmailAddressRequestFieldEnum = {}));
//# sourceMappingURL=EmailAddressRequest.js.map