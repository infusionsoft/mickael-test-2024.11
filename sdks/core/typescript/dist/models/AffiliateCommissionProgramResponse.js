"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCommissionProgramResponse = void 0;
var AffiliateCommissionProgramResponse = (function () {
    function AffiliateCommissionProgramResponse() {
    }
    AffiliateCommissionProgramResponse.getAttributeTypeMap = function () {
        return AffiliateCommissionProgramResponse.attributeTypeMap;
    };
    AffiliateCommissionProgramResponse.discriminator = undefined;
    AffiliateCommissionProgramResponse.mapping = undefined;
    AffiliateCommissionProgramResponse.attributeTypeMap = [
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
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        }
    ];
    return AffiliateCommissionProgramResponse;
}());
exports.AffiliateCommissionProgramResponse = AffiliateCommissionProgramResponse;
//# sourceMappingURL=AffiliateCommissionProgramResponse.js.map