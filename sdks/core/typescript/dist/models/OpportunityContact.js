"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunityContact = void 0;
var OpportunityContact = (function () {
    function OpportunityContact() {
    }
    OpportunityContact.getAttributeTypeMap = function () {
        return OpportunityContact.attributeTypeMap;
    };
    OpportunityContact.discriminator = undefined;
    OpportunityContact.mapping = undefined;
    OpportunityContact.attributeTypeMap = [
        {
            "name": "companyName",
            "baseName": "company_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "jobTitle",
            "baseName": "job_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        }
    ];
    return OpportunityContact;
}());
exports.OpportunityContact = OpportunityContact;
//# sourceMappingURL=OpportunityContact.js.map