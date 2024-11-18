"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchOpportunityRequest = void 0;
var PatchOpportunityRequest = (function () {
    function PatchOpportunityRequest() {
    }
    PatchOpportunityRequest.getAttributeTypeMap = function () {
        return PatchOpportunityRequest.attributeTypeMap;
    };
    PatchOpportunityRequest.discriminator = undefined;
    PatchOpportunityRequest.mapping = undefined;
    PatchOpportunityRequest.attributeTypeMap = [
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
    return PatchOpportunityRequest;
}());
exports.PatchOpportunityRequest = PatchOpportunityRequest;
//# sourceMappingURL=PatchOpportunityRequest.js.map