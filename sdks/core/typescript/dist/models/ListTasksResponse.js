"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksResponse = void 0;
var ListTasksResponse = (function () {
    function ListTasksResponse() {
    }
    ListTasksResponse.getAttributeTypeMap = function () {
        return ListTasksResponse.attributeTypeMap;
    };
    ListTasksResponse.discriminator = undefined;
    ListTasksResponse.mapping = undefined;
    ListTasksResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "tasks",
            "baseName": "tasks",
            "type": "Array<Task>",
            "format": ""
        }
    ];
    return ListTasksResponse;
}());
exports.ListTasksResponse = ListTasksResponse;
//# sourceMappingURL=ListTasksResponse.js.map