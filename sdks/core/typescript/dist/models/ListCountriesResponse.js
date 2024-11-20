"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCountriesResponse = void 0;
var ListCountriesResponse = (function () {
    function ListCountriesResponse() {
    }
    ListCountriesResponse.getAttributeTypeMap = function () {
        return ListCountriesResponse.attributeTypeMap;
    };
    ListCountriesResponse.discriminator = undefined;
    ListCountriesResponse.mapping = undefined;
    ListCountriesResponse.attributeTypeMap = [
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<Country>",
            "format": ""
        }
    ];
    return ListCountriesResponse;
}());
exports.ListCountriesResponse = ListCountriesResponse;
//# sourceMappingURL=ListCountriesResponse.js.map