"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCommission = void 0;
var DefaultCommission = (function () {
    function DefaultCommission() {
    }
    DefaultCommission.getAttributeTypeMap = function () {
        return DefaultCommission.attributeTypeMap;
    };
    DefaultCommission.discriminator = undefined;
    DefaultCommission.mapping = undefined;
    DefaultCommission.attributeTypeMap = [
        {
            "name": "dollarAmount",
            "baseName": "dollar_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number",
            "format": "double"
        }
    ];
    return DefaultCommission;
}());
exports.DefaultCommission = DefaultCommission;
//# sourceMappingURL=DefaultCommission.js.map