"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestAffiliate = void 0;
var RestAffiliate = (function () {
    function RestAffiliate() {
    }
    RestAffiliate.getAttributeTypeMap = function () {
        return RestAffiliate.attributeTypeMap;
    };
    RestAffiliate.discriminator = undefined;
    RestAffiliate.mapping = undefined;
    RestAffiliate.attributeTypeMap = [
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
            "name": "id",
            "baseName": "id",
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
            "type": "string",
            "format": ""
        },
        {
            "name": "uniqueSiteId",
            "baseName": "unique_site_id",
            "type": "string",
            "format": ""
        }
    ];
    return RestAffiliate;
}());
exports.RestAffiliate = RestAffiliate;
//# sourceMappingURL=RestAffiliate.js.map