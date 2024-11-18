"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOpportunityRequest = void 0;
var CreateOpportunityRequest = (function () {
    function CreateOpportunityRequest() {
    }
    CreateOpportunityRequest.getAttributeTypeMap = function () {
        return CreateOpportunityRequest.attributeTypeMap;
    };
    CreateOpportunityRequest.discriminator = undefined;
    CreateOpportunityRequest.mapping = undefined;
    CreateOpportunityRequest.attributeTypeMap = [
        {
            "name": "affiliateId",
            "baseName": "affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomField>",
            "format": ""
        },
        {
            "name": "estimatedCloseTime",
            "baseName": "estimated_close_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeInForecast",
            "baseName": "include_in_forecast",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "nextActionNotes",
            "baseName": "next_action_notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextActionTime",
            "baseName": "next_action_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "opportunityNotes",
            "baseName": "opportunity_notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "opportunityTitle",
            "baseName": "opportunity_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectedRevenueHigh",
            "baseName": "projected_revenue_high",
            "type": "number",
            "format": "double"
        },
        {
            "name": "projectedRevenueLow",
            "baseName": "projected_revenue_low",
            "type": "number",
            "format": "double"
        },
        {
            "name": "stageId",
            "baseName": "stage_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }
    ];
    return CreateOpportunityRequest;
}());
exports.CreateOpportunityRequest = CreateOpportunityRequest;
//# sourceMappingURL=CreateOpportunityRequest.js.map