"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOpportunityStageCheckListItem = void 0;
var CreateOpportunityStageCheckListItem = (function () {
    function CreateOpportunityStageCheckListItem() {
    }
    CreateOpportunityStageCheckListItem.getAttributeTypeMap = function () {
        return CreateOpportunityStageCheckListItem.attributeTypeMap;
    };
    CreateOpportunityStageCheckListItem.discriminator = undefined;
    CreateOpportunityStageCheckListItem.mapping = undefined;
    CreateOpportunityStageCheckListItem.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
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
    return CreateOpportunityStageCheckListItem;
}());
exports.CreateOpportunityStageCheckListItem = CreateOpportunityStageCheckListItem;
//# sourceMappingURL=CreateOpportunityStageCheckListItem.js.map