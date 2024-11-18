"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestV2Opportunity = void 0;
var RestV2Opportunity = (function () {
    function RestV2Opportunity() {
    }
    RestV2Opportunity.getAttributeTypeMap = function () {
        return RestV2Opportunity.attributeTypeMap;
    };
    RestV2Opportunity.discriminator = undefined;
    RestV2Opportunity.mapping = undefined;
    RestV2Opportunity.attributeTypeMap = [
        {
            "name": "affiliateId",
            "baseName": "affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "OpportunityContact",
            "format": ""
        },
        {
            "name": "createdTime",
            "baseName": "created_time",
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
            "name": "id",
            "baseName": "id",
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
            "name": "lastUpdatedTime",
            "baseName": "last_updated_time",
            "type": "string",
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
            "name": "stage",
            "baseName": "stage",
            "type": "OpportunityStage",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "RestV2User",
            "format": ""
        }
    ];
    return RestV2Opportunity;
}());
exports.RestV2Opportunity = RestV2Opportunity;
//# sourceMappingURL=RestV2Opportunity.js.map