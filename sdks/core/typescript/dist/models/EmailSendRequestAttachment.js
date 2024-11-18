"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSendRequestAttachment = void 0;
var EmailSendRequestAttachment = (function () {
    function EmailSendRequestAttachment() {
    }
    EmailSendRequestAttachment.getAttributeTypeMap = function () {
        return EmailSendRequestAttachment.attributeTypeMap;
    };
    EmailSendRequestAttachment.discriminator = undefined;
    EmailSendRequestAttachment.mapping = undefined;
    EmailSendRequestAttachment.attributeTypeMap = [
        {
            "name": "fileData",
            "baseName": "file_data",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "file_name",
            "type": "string",
            "format": ""
        }
    ];
    return EmailSendRequestAttachment;
}());
exports.EmailSendRequestAttachment = EmailSendRequestAttachment;
//# sourceMappingURL=EmailSendRequestAttachment.js.map