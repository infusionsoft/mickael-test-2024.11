"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityStage = void 0;
var OpportunityStage = (function () {
    function OpportunityStage() {
    }
    OpportunityStage.getAttributeTypeMap = function () {
        return OpportunityStage.attributeTypeMap;
    };
    OpportunityStage.discriminator = undefined;
    OpportunityStage.mapping = undefined;
    OpportunityStage.attributeTypeMap = [
        {
            "name": "details",
            "baseName": "details",
            "type": "StageDetails",
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
            "name": "reasons",
            "baseName": "reasons",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return OpportunityStage;
}());
exports.OpportunityStage = OpportunityStage;
//# sourceMappingURL=OpportunityStage.js.map