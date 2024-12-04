"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckListItemDetails = void 0;
var CheckListItemDetails = (function () {
    function CheckListItemDetails() {
    }
    CheckListItemDetails.getAttributeTypeMap = function () {
        return CheckListItemDetails.attributeTypeMap;
    };
    CheckListItemDetails.discriminator = undefined;
    CheckListItemDetails.mapping = undefined;
    CheckListItemDetails.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "doneDate",
            "baseName": "done_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "instanceId",
            "baseName": "instance_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "itemOrder",
            "baseName": "item_order",
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
    return CheckListItemDetails;
}());
exports.CheckListItemDetails = CheckListItemDetails;
//# sourceMappingURL=CheckListItemDetails.js.map