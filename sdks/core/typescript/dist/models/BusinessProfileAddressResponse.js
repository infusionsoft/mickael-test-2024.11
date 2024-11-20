"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessProfileAddressResponse = void 0;
var BusinessProfileAddressResponse = (function () {
    function BusinessProfileAddressResponse() {
    }
    BusinessProfileAddressResponse.getAttributeTypeMap = function () {
        return BusinessProfileAddressResponse.attributeTypeMap;
    };
    BusinessProfileAddressResponse.discriminator = undefined;
    BusinessProfileAddressResponse.mapping = undefined;
    BusinessProfileAddressResponse.attributeTypeMap = [
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
    return BusinessProfileAddressResponse;
}());
exports.BusinessProfileAddressResponse = BusinessProfileAddressResponse;
//# sourceMappingURL=BusinessProfileAddressResponse.js.map