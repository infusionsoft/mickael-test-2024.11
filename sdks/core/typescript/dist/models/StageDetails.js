"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageDetails = void 0;
var StageDetails = (function () {
    function StageDetails() {
    }
    StageDetails.getAttributeTypeMap = function () {
        return StageDetails.attributeTypeMap;
    };
    StageDetails.discriminator = undefined;
    StageDetails.mapping = undefined;
    StageDetails.attributeTypeMap = [
        {
            "name": "checkListItems",
            "baseName": "check_list_items",
            "type": "Array<CheckListItemDetails>",
            "format": ""
        },
        {
            "name": "probability",
            "baseName": "probability",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "stageOrder",
            "baseName": "stage_order",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "targetNumDays",
            "baseName": "target_num_days",
            "type": "number",
            "format": "int32"
        }
    ];
    return StageDetails;
}());
exports.StageDetails = StageDetails;
//# sourceMappingURL=StageDetails.js.map