"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAffiliateRequestStatusEnum = exports.CreateAffiliateRequest = void 0;
var CreateAffiliateRequest = (function () {
    function CreateAffiliateRequest() {
    }
    CreateAffiliateRequest.getAttributeTypeMap = function () {
        return CreateAffiliateRequest.attributeTypeMap;
    };
    CreateAffiliateRequest.discriminator = undefined;
    CreateAffiliateRequest.mapping = undefined;
    CreateAffiliateRequest.attributeTypeMap = [
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
            "type": "CreateAffiliateRequestStatusEnum",
            "format": ""
        }
    ];
    return CreateAffiliateRequest;
}());
exports.CreateAffiliateRequest = CreateAffiliateRequest;
var CreateAffiliateRequestStatusEnum;
(function (CreateAffiliateRequestStatusEnum) {
    CreateAffiliateRequestStatusEnum["Active"] = "active";
    CreateAffiliateRequestStatusEnum["Inactive"] = "inactive";
})(CreateAffiliateRequestStatusEnum = exports.CreateAffiliateRequestStatusEnum || (exports.CreateAffiliateRequestStatusEnum = {}));
//# sourceMappingURL=CreateAffiliateRequest.js.map