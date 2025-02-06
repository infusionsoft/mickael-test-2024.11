/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Item model module.
 * @module keap.sdk.core/model/Item
 */
class Item {
    /**
     * Constructs a new <code>Item</code>.
     * @alias module:keap.sdk.core/model/Item
     */
    constructor() { 
        
        Item.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/Item} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/Item} The populated <code>Item</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Item();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('next_item_id')) {
                obj['next_item_id'] = ApiClient.convertToType(data['next_item_id'], 'String');
            }
            if (data.hasOwnProperty('previous_item_id')) {
                obj['previous_item_id'] = ApiClient.convertToType(data['previous_item_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Item</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Item</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['next_item_id'] && !(typeof data['next_item_id'] === 'string' || data['next_item_id'] instanceof String)) {
            throw new Error("Expected the field `next_item_id` to be a primitive type in the JSON string but got " + data['next_item_id']);
        }
        // ensure the json data is a string
        if (data['previous_item_id'] && !(typeof data['previous_item_id'] === 'string' || data['previous_item_id'] instanceof String)) {
            throw new Error("Expected the field `previous_item_id` to be a primitive type in the JSON string but got " + data['previous_item_id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Item.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Item.prototype['name'] = undefined;

/**
 * @member {String} next_item_id
 */
Item.prototype['next_item_id'] = undefined;

/**
 * @member {String} previous_item_id
 */
Item.prototype['previous_item_id'] = undefined;

/**
 * @member {module:keap.sdk.core/model/Item.TypeEnum} type
 */
Item.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Item['TypeEnum'] = {

    /**
     * value: "NULL"
     * @const
     */
    "NULL": "NULL",

    /**
     * value: "Start"
     * @const
     */
    "Start": "Start",

    /**
     * value: "Wait"
     * @const
     */
    "Wait": "Wait",

    /**
     * value: "DelayTimer"
     * @const
     */
    "DelayTimer": "DelayTimer",

    /**
     * value: "ContactTimer"
     * @const
     */
    "ContactTimer": "ContactTimer",

    /**
     * value: "DateTimer"
     * @const
     */
    "DateTimer": "DateTimer",

    /**
     * value: "AppointmentTimer"
     * @const
     */
    "AppointmentTimer": "AppointmentTimer",

    /**
     * value: "Email"
     * @const
     */
    "Email": "Email",

    /**
     * value: "BardEmail"
     * @const
     */
    "BardEmail": "BardEmail",

    /**
     * value: "UnlayerEmail"
     * @const
     */
    "UnlayerEmail": "UnlayerEmail",

    /**
     * value: "EmailConfirm"
     * @const
     */
    "EmailConfirm": "EmailConfirm",

    /**
     * value: "Voice"
     * @const
     */
    "Voice": "Voice",

    /**
     * value: "Fax"
     * @const
     */
    "Fax": "Fax",

    /**
     * value: "Letter"
     * @const
     */
    "Letter": "Letter",

    /**
     * value: "AutomatedSms"
     * @const
     */
    "AutomatedSms": "AutomatedSms",

    /**
     * value: "Tag"
     * @const
     */
    "Tag": "Tag",

    /**
     * value: "Opportunity"
     * @const
     */
    "Opportunity": "Opportunity",

    /**
     * value: "Note"
     * @const
     */
    "Note": "Note",

    /**
     * value: "Task"
     * @const
     */
    "Task": "Task",

    /**
     * value: "CompleteTasks"
     * @const
     */
    "CompleteTasks": "CompleteTasks",

    /**
     * value: "Appointment"
     * @const
     */
    "Appointment": "Appointment",

    /**
     * value: "AssignOwner"
     * @const
     */
    "AssignOwner": "AssignOwner",

    /**
     * value: "FieldValue"
     * @const
     */
    "FieldValue": "FieldValue",

    /**
     * value: "Fulfillment"
     * @const
     */
    "Fulfillment": "Fulfillment",

    /**
     * value: "CreateOrder"
     * @const
     */
    "CreateOrder": "CreateOrder",

    /**
     * value: "Deal"
     * @const
     */
    "Deal": "Deal",

    /**
     * value: "AddToSequence"
     * @const
     */
    "AddToSequence": "AddToSequence",

    /**
     * value: "CancelSubscription"
     * @const
     */
    "CancelSubscription": "CancelSubscription",

    /**
     * value: "MoveOpportunity"
     * @const
     */
    "MoveOpportunity": "MoveOpportunity",

    /**
     * value: "Http"
     * @const
     */
    "Http": "Http",

    /**
     * value: "CustomerHub"
     * @const
     */
    "CustomerHub": "CustomerHub",

    /**
     * value: "HttpRequest"
     * @const
     */
    "HttpRequest": "HttpRequest",

    /**
     * value: "IntegrationAction"
     * @const
     */
    "IntegrationAction": "IntegrationAction",

    /**
     * value: "ActionSet"
     * @const
     */
    "ActionSet": "ActionSet",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default Item;
