"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrPatchAffiliateLinkRequest = void 0;
var CreateOrPatchAffiliateLinkRequest = (function () {
    function CreateOrPatchAffiliateLinkRequest() {
    }
    CreateOrPatchAffiliateLinkRequest.getAttributeTypeMap = function () {
        return CreateOrPatchAffiliateLinkRequest.attributeTypeMap;
    };
    CreateOrPatchAffiliateLinkRequest.discriminator = undefined;
    CreateOrPatchAffiliateLinkRequest.mapping = undefined;
    CreateOrPatchAffiliateLinkRequest.attributeTypeMap = [
        {
            "name": "affiliateId",
            "baseName": "affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
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
            "name": "programIds",
            "baseName": "program_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "websiteAddress",
            "baseName": "website_address",
            "type": "string",
            "format": ""
        }
    ];
    return CreateOrPatchAffiliateLinkRequest;
}());
exports.CreateOrPatchAffiliateLinkRequest = CreateOrPatchAffiliateLinkRequest;
//# sourceMappingURL=CreateOrPatchAffiliateLinkRequest.js.map