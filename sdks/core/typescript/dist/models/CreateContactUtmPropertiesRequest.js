"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactUtmPropertiesRequest = void 0;
var CreateContactUtmPropertiesRequest = (function () {
    function CreateContactUtmPropertiesRequest() {
    }
    CreateContactUtmPropertiesRequest.getAttributeTypeMap = function () {
        return CreateContactUtmPropertiesRequest.attributeTypeMap;
    };
    CreateContactUtmPropertiesRequest.discriminator = undefined;
    CreateContactUtmPropertiesRequest.mapping = undefined;
    CreateContactUtmPropertiesRequest.attributeTypeMap = [
        {
            "name": "keapSourceId",
            "baseName": "keap_source_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmCampaign",
            "baseName": "utm_campaign",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmContent",
            "baseName": "utm_content",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmMedium",
            "baseName": "utm_medium",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmSource",
            "baseName": "utm_source",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmTerm",
            "baseName": "utm_term",
            "type": "string",
            "format": ""
        }
    ];
    return CreateContactUtmPropertiesRequest;
}());
exports.CreateContactUtmPropertiesRequest = CreateContactUtmPropertiesRequest;
//# sourceMappingURL=CreateContactUtmPropertiesRequest.js.map