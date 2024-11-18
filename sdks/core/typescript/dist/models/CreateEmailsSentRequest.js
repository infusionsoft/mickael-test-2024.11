"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmailsSentRequest = void 0;
var CreateEmailsSentRequest = (function () {
    function CreateEmailsSentRequest() {
    }
    CreateEmailsSentRequest.getAttributeTypeMap = function () {
        return CreateEmailsSentRequest.attributeTypeMap;
    };
    CreateEmailsSentRequest.discriminator = undefined;
    CreateEmailsSentRequest.mapping = undefined;
    CreateEmailsSentRequest.attributeTypeMap = [
        {
            "name": "emails",
            "baseName": "emails",
            "type": "Array<CreateEmailSentRequest>",
            "format": ""
        }
    ];
    return CreateEmailsSentRequest;
}());
exports.CreateEmailsSentRequest = CreateEmailsSentRequest;
//# sourceMappingURL=CreateEmailsSentRequest.js.map