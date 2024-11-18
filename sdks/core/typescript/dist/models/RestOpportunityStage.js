"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestOpportunityStage = void 0;
var RestOpportunityStage = (function () {
    function RestOpportunityStage() {
    }
    RestOpportunityStage.getAttributeTypeMap = function () {
        return RestOpportunityStage.attributeTypeMap;
    };
    RestOpportunityStage.discriminator = undefined;
    RestOpportunityStage.mapping = undefined;
    RestOpportunityStage.attributeTypeMap = [
        {
            "name": "checkListItems",
            "baseName": "check_list_items",
            "type": "Array<CheckListItem>",
            "format": ""
        },
        {
            "name": "createdTime",
            "baseName": "created_time",
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
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "probability",
            "baseName": "probability",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "targetNumberDays",
            "baseName": "target_number_days",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "updatedTime",
            "baseName": "updated_time",
            "type": "string",
            "format": ""
        }
    ];
    return RestOpportunityStage;
}());
exports.RestOpportunityStage = RestOpportunityStage;
//# sourceMappingURL=RestOpportunityStage.js.map