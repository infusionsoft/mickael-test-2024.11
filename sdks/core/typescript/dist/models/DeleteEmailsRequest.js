"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmailsRequest = void 0;
var DeleteEmailsRequest = (function () {
    function DeleteEmailsRequest() {
    }
    DeleteEmailsRequest.getAttributeTypeMap = function () {
        return DeleteEmailsRequest.attributeTypeMap;
    };
    DeleteEmailsRequest.discriminator = undefined;
    DeleteEmailsRequest.mapping = undefined;
    DeleteEmailsRequest.attributeTypeMap = [
        {
            "name": "emailIds",
            "baseName": "email_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return DeleteEmailsRequest;
}());
exports.DeleteEmailsRequest = DeleteEmailsRequest;
//# sourceMappingURL=DeleteEmailsRequest.js.map