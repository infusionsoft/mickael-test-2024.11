"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckListItem = void 0;
var CheckListItem = (function () {
    function CheckListItem() {
    }
    CheckListItem.getAttributeTypeMap = function () {
        return CheckListItem.attributeTypeMap;
    };
    CheckListItem.discriminator = undefined;
    CheckListItem.mapping = undefined;
    CheckListItem.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
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
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean",
            "format": ""
        }
    ];
    return CheckListItem;
}());
exports.CheckListItem = CheckListItem;
//# sourceMappingURL=CheckListItem.js.map