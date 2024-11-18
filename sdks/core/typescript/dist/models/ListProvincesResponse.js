"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProvincesResponse = void 0;
var ListProvincesResponse = (function () {
    function ListProvincesResponse() {
    }
    ListProvincesResponse.getAttributeTypeMap = function () {
        return ListProvincesResponse.attributeTypeMap;
    };
    ListProvincesResponse.discriminator = undefined;
    ListProvincesResponse.mapping = undefined;
    ListProvincesResponse.attributeTypeMap = [
        {
            "name": "provinces",
            "baseName": "provinces",
            "type": "Array<Provinces>",
            "format": ""
        }
    ];
    return ListProvincesResponse;
}());
exports.ListProvincesResponse = ListProvincesResponse;
//# sourceMappingURL=ListProvincesResponse.js.map