"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalTypeEnum = exports.Goal = void 0;
var Goal = (function () {
    function Goal() {
    }
    Goal.getAttributeTypeMap = function () {
        return Goal.attributeTypeMap;
    };
    Goal.discriminator = undefined;
    Goal.mapping = undefined;
    Goal.attributeTypeMap = [
        {
            "name": "historicalContactCounts",
            "baseName": "historical_contact_counts",
            "type": "HistoricalCounts",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextSequenceIds",
            "baseName": "next_sequence_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "previousSequenceIds",
            "baseName": "previous_sequence_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GoalTypeEnum",
            "format": ""
        }
    ];
    return Goal;
}());
exports.Goal = Goal;
var GoalTypeEnum;
(function (GoalTypeEnum) {
    GoalTypeEnum["WebForm"] = "WebForm";
    GoalTypeEnum["LandingPage"] = "LandingPage";
    GoalTypeEnum["Survey"] = "Survey";
    GoalTypeEnum["LinkClick"] = "LinkClick";
    GoalTypeEnum["EmailOpened"] = "EmailOpened";
    GoalTypeEnum["Score"] = "Score";
    GoalTypeEnum["Purchase"] = "Purchase";
    GoalTypeEnum["FailedPurchase"] = "FailedPurchase";
    GoalTypeEnum["Quote"] = "Quote";
    GoalTypeEnum["WebsiteTrigger"] = "WebsiteTrigger";
    GoalTypeEnum["InternalForm"] = "InternalForm";
    GoalTypeEnum["SmartForm"] = "SmartForm";
    GoalTypeEnum["AppointmentEvent"] = "AppointmentEvent";
    GoalTypeEnum["Task"] = "Task";
    GoalTypeEnum["StageMove"] = "StageMove";
    GoalTypeEnum["Note"] = "Note";
    GoalTypeEnum["Tag"] = "Tag";
    GoalTypeEnum["PipelineStageMove"] = "PipelineStageMove";
    GoalTypeEnum["UnlayerLandingPage"] = "UnlayerLandingPage";
    GoalTypeEnum["GroSocial"] = "GroSocial";
    GoalTypeEnum["TwitterForm"] = "TwitterForm";
    GoalTypeEnum["Api"] = "API";
    GoalTypeEnum["WordPress"] = "WordPress";
    GoalTypeEnum["NewLandingPage"] = "NewLandingPage";
    GoalTypeEnum["IntegrationTrigger"] = "IntegrationTrigger";
})(GoalTypeEnum = exports.GoalTypeEnum || (exports.GoalTypeEnum = {}));
//# sourceMappingURL=Goal.js.map