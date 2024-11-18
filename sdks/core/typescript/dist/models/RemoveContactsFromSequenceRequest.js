"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveContactsFromSequenceRequest = void 0;
var RemoveContactsFromSequenceRequest = (function () {
    function RemoveContactsFromSequenceRequest() {
    }
    RemoveContactsFromSequenceRequest.getAttributeTypeMap = function () {
        return RemoveContactsFromSequenceRequest.attributeTypeMap;
    };
    RemoveContactsFromSequenceRequest.discriminator = undefined;
    RemoveContactsFromSequenceRequest.mapping = undefined;
    RemoveContactsFromSequenceRequest.attributeTypeMap = [
        {
            "name": "contactIds",
            "baseName": "contact_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return RemoveContactsFromSequenceRequest;
}());
exports.RemoveContactsFromSequenceRequest = RemoveContactsFromSequenceRequest;
//# sourceMappingURL=RemoveContactsFromSequenceRequest.js.map