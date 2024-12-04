"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campaign = void 0;
var Campaign = (function () {
    function Campaign() {
    }
    Campaign.getAttributeTypeMap = function () {
        return Campaign.attributeTypeMap;
    };
    Campaign.discriminator = undefined;
    Campaign.mapping = undefined;
    Campaign.attributeTypeMap = [
        {
            "name": "activeContactCount",
            "baseName": "active_contact_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "completedContactCount",
            "baseName": "completed_contact_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "createdByGlobalId",
            "baseName": "created_by_global_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "goals",
            "baseName": "goals",
            "type": "Array<Goal>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "locked",
            "baseName": "locked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "publishedDate",
            "baseName": "published_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "publishedStatus",
            "baseName": "published_status",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publishedTimeZone",
            "baseName": "published_time_zone",
            "type": "string",
            "format": ""
        },
        {
            "name": "sequences",
            "baseName": "sequences",
            "type": "Array<Sequence>",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        }
    ];
    return Campaign;
}());
exports.Campaign = Campaign;
//# sourceMappingURL=Campaign.js.map