"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkContactsRequest = void 0;
var LinkContactsRequest = (function () {
    function LinkContactsRequest() {
    }
    LinkContactsRequest.getAttributeTypeMap = function () {
        return LinkContactsRequest.attributeTypeMap;
    };
    LinkContactsRequest.discriminator = undefined;
    LinkContactsRequest.mapping = undefined;
    LinkContactsRequest.attributeTypeMap = [
        {
            "name": "contact1Id",
            "baseName": "contact1_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contact2Id",
            "baseName": "contact2_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkTypeId",
            "baseName": "link_type_id",
            "type": "string",
            "format": ""
        }
    ];
    return LinkContactsRequest;
}());
exports.LinkContactsRequest = LinkContactsRequest;
//# sourceMappingURL=LinkContactsRequest.js.map