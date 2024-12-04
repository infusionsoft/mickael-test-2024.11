"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContactsToSequenceRequest = void 0;
var AddContactsToSequenceRequest = (function () {
    function AddContactsToSequenceRequest() {
    }
    AddContactsToSequenceRequest.getAttributeTypeMap = function () {
        return AddContactsToSequenceRequest.attributeTypeMap;
    };
    AddContactsToSequenceRequest.discriminator = undefined;
    AddContactsToSequenceRequest.mapping = undefined;
    AddContactsToSequenceRequest.attributeTypeMap = [
        {
            "name": "contactIds",
            "baseName": "contact_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return AddContactsToSequenceRequest;
}());
exports.AddContactsToSequenceRequest = AddContactsToSequenceRequest;
//# sourceMappingURL=AddContactsToSequenceRequest.js.map