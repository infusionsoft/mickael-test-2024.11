"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmailsResponse = void 0;
var DeleteEmailsResponse = (function () {
    function DeleteEmailsResponse() {
    }
    DeleteEmailsResponse.getAttributeTypeMap = function () {
        return DeleteEmailsResponse.attributeTypeMap;
    };
    DeleteEmailsResponse.discriminator = undefined;
    DeleteEmailsResponse.mapping = undefined;
    DeleteEmailsResponse.attributeTypeMap = [
        {
            "name": "results",
            "baseName": "results",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    return DeleteEmailsResponse;
}());
exports.DeleteEmailsResponse = DeleteEmailsResponse;
//# sourceMappingURL=DeleteEmailsResponse.js.map