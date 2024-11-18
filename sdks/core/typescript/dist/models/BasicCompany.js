"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicCompany = void 0;
var BasicCompany = (function () {
    function BasicCompany() {
    }
    BasicCompany.getAttributeTypeMap = function () {
        return BasicCompany.attributeTypeMap;
    };
    BasicCompany.discriminator = undefined;
    BasicCompany.mapping = undefined;
    BasicCompany.attributeTypeMap = [
        {
            "name": "companyName",
            "baseName": "company_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }
    ];
    return BasicCompany;
}());
exports.BasicCompany = BasicCompany;
//# sourceMappingURL=BasicCompany.js.map