"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTypeEnum = exports.Item = void 0;
var Item = (function () {
    function Item() {
    }
    Item.getAttributeTypeMap = function () {
        return Item.attributeTypeMap;
    };
    Item.discriminator = undefined;
    Item.mapping = undefined;
    Item.attributeTypeMap = [
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
            "name": "nextItemId",
            "baseName": "next_item_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "previousItemId",
            "baseName": "previous_item_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ItemTypeEnum",
            "format": ""
        }
    ];
    return Item;
}());
exports.Item = Item;
var ItemTypeEnum;
(function (ItemTypeEnum) {
    ItemTypeEnum["Null"] = "NULL";
    ItemTypeEnum["Start"] = "Start";
    ItemTypeEnum["Wait"] = "Wait";
    ItemTypeEnum["DelayTimer"] = "DelayTimer";
    ItemTypeEnum["ContactTimer"] = "ContactTimer";
    ItemTypeEnum["DateTimer"] = "DateTimer";
    ItemTypeEnum["AppointmentTimer"] = "AppointmentTimer";
    ItemTypeEnum["Email"] = "Email";
    ItemTypeEnum["BardEmail"] = "BardEmail";
    ItemTypeEnum["UnlayerEmail"] = "UnlayerEmail";
    ItemTypeEnum["EmailConfirm"] = "EmailConfirm";
    ItemTypeEnum["Voice"] = "Voice";
    ItemTypeEnum["Fax"] = "Fax";
    ItemTypeEnum["Letter"] = "Letter";
    ItemTypeEnum["AutomatedSms"] = "AutomatedSms";
    ItemTypeEnum["Tag"] = "Tag";
    ItemTypeEnum["Opportunity"] = "Opportunity";
    ItemTypeEnum["Note"] = "Note";
    ItemTypeEnum["Task"] = "Task";
    ItemTypeEnum["CompleteTasks"] = "CompleteTasks";
    ItemTypeEnum["Appointment"] = "Appointment";
    ItemTypeEnum["AssignOwner"] = "AssignOwner";
    ItemTypeEnum["FieldValue"] = "FieldValue";
    ItemTypeEnum["Fulfillment"] = "Fulfillment";
    ItemTypeEnum["CreateOrder"] = "CreateOrder";
    ItemTypeEnum["Deal"] = "Deal";
    ItemTypeEnum["AddToSequence"] = "AddToSequence";
    ItemTypeEnum["CancelSubscription"] = "CancelSubscription";
    ItemTypeEnum["MoveOpportunity"] = "MoveOpportunity";
    ItemTypeEnum["Http"] = "Http";
    ItemTypeEnum["CustomerHub"] = "CustomerHub";
    ItemTypeEnum["HttpRequest"] = "HttpRequest";
    ItemTypeEnum["IntegrationAction"] = "IntegrationAction";
    ItemTypeEnum["ActionSet"] = "ActionSet";
})(ItemTypeEnum = exports.ItemTypeEnum || (exports.ItemTypeEnum = {}));
//# sourceMappingURL=Item.js.map