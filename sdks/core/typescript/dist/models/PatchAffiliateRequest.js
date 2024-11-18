"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchAffiliateRequestStatusEnum = exports.PatchAffiliateRequest = void 0;
var PatchAffiliateRequest = (function () {
    function PatchAffiliateRequest() {
    }
    PatchAffiliateRequest.getAttributeTypeMap = function () {
        return PatchAffiliateRequest.attributeTypeMap;
    };
    PatchAffiliateRequest.discriminator = undefined;
    PatchAffiliateRequest.mapping = undefined;
    PatchAffiliateRequest.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PatchAffiliateRequestStatusEnum",
            "format": ""
        }
    ];
    return PatchAffiliateRequest;
}());
exports.PatchAffiliateRequest = PatchAffiliateRequest;
var PatchAffiliateRequestStatusEnum;
(function (PatchAffiliateRequestStatusEnum) {
    PatchAffiliateRequestStatusEnum["Active"] = "active";
    PatchAffiliateRequestStatusEnum["Inactive"] = "inactive";
})(PatchAffiliateRequestStatusEnum = exports.PatchAffiliateRequestStatusEnum || (exports.PatchAffiliateRequestStatusEnum = {}));
//# sourceMappingURL=PatchAffiliateRequest.js.map