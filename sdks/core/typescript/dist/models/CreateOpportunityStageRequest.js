"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOpportunityStageRequest = void 0;
var CreateOpportunityStageRequest = (function () {
    function CreateOpportunityStageRequest() {
    }
    CreateOpportunityStageRequest.getAttributeTypeMap = function () {
        return CreateOpportunityStageRequest.attributeTypeMap;
    };
    CreateOpportunityStageRequest.discriminator = undefined;
    CreateOpportunityStageRequest.mapping = undefined;
    CreateOpportunityStageRequest.attributeTypeMap = [
        {
            "name": "checkListItems",
            "baseName": "check_list_items",
            "type": "Array<CreateOpportunityStageCheckListItem>",
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
        }
    ];
    return CreateOpportunityStageRequest;
}());
exports.CreateOpportunityStageRequest = CreateOpportunityStageRequest;
//# sourceMappingURL=CreateOpportunityStageRequest.js.map