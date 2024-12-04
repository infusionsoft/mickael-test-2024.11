"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUtmResponse = void 0;
var ContactUtmResponse = (function () {
    function ContactUtmResponse() {
    }
    ContactUtmResponse.getAttributeTypeMap = function () {
        return ContactUtmResponse.attributeTypeMap;
    };
    ContactUtmResponse.discriminator = undefined;
    ContactUtmResponse.mapping = undefined;
    ContactUtmResponse.attributeTypeMap = [
        {
            "name": "dateCreated",
            "baseName": "dateCreated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "firstTouch",
            "baseName": "firstTouch",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "keapSourceId",
            "baseName": "keapSourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastTouch",
            "baseName": "lastTouch",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "utmCampaign",
            "baseName": "utmCampaign",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmContent",
            "baseName": "utmContent",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmMedium",
            "baseName": "utmMedium",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmSource",
            "baseName": "utmSource",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmTerm",
            "baseName": "utmTerm",
            "type": "string",
            "format": ""
        }
    ];
    return ContactUtmResponse;
}());
exports.ContactUtmResponse = ContactUtmResponse;
//# sourceMappingURL=ContactUtmResponse.js.map