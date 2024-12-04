"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaggedCompany = void 0;
var TaggedCompany = (function () {
    function TaggedCompany() {
    }
    TaggedCompany.getAttributeTypeMap = function () {
        return TaggedCompany.attributeTypeMap;
    };
    TaggedCompany.discriminator = undefined;
    TaggedCompany.mapping = undefined;
    TaggedCompany.attributeTypeMap = [
        {
            "name": "appliedTime",
            "baseName": "applied_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "Company",
            "format": ""
        }
    ];
    return TaggedCompany;
}());
exports.TaggedCompany = TaggedCompany;
//# sourceMappingURL=TaggedCompany.js.map