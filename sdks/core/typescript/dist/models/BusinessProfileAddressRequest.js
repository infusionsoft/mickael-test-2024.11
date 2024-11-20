"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessProfileAddressRequest = void 0;
var BusinessProfileAddressRequest = (function () {
    function BusinessProfileAddressRequest() {
    }
    BusinessProfileAddressRequest.getAttributeTypeMap = function () {
        return BusinessProfileAddressRequest.attributeTypeMap;
    };
    BusinessProfileAddressRequest.discriminator = undefined;
    BusinessProfileAddressRequest.mapping = undefined;
    BusinessProfileAddressRequest.attributeTypeMap = [
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string",
            "format": ""
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string",
            "format": ""
        },
        {
            "name": "locality",
            "baseName": "locality",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        }
    ];
    return BusinessProfileAddressRequest;
}());
exports.BusinessProfileAddressRequest = BusinessProfileAddressRequest;
//# sourceMappingURL=BusinessProfileAddressRequest.js.map