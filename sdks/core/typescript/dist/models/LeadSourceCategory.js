"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadSourceCategory = void 0;
var LeadSourceCategory = (function () {
    function LeadSourceCategory() {
    }
    LeadSourceCategory.getAttributeTypeMap = function () {
        return LeadSourceCategory.attributeTypeMap;
    };
    LeadSourceCategory.discriminator = undefined;
    LeadSourceCategory.mapping = undefined;
    LeadSourceCategory.attributeTypeMap = [
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
        }
    ];
    return LeadSourceCategory;
}());
exports.LeadSourceCategory = LeadSourceCategory;
//# sourceMappingURL=LeadSourceCategory.js.map