"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmailAddress = void 0;
var UpdateEmailAddress = (function () {
    function UpdateEmailAddress() {
    }
    UpdateEmailAddress.getAttributeTypeMap = function () {
        return UpdateEmailAddress.attributeTypeMap;
    };
    UpdateEmailAddress.discriminator = undefined;
    UpdateEmailAddress.mapping = undefined;
    UpdateEmailAddress.attributeTypeMap = [
        {
            "name": "optedIn",
            "baseName": "opted_in",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        }
    ];
    return UpdateEmailAddress;
}());
exports.UpdateEmailAddress = UpdateEmailAddress;
//# sourceMappingURL=UpdateEmailAddress.js.map