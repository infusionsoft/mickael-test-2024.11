/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateCustomFieldOptionRequest from './CreateCustomFieldOptionRequest';

/**
 * The CreateCustomFieldRequest model module.
 * @module com.keap.sdk.core/model/CreateCustomFieldRequest
 * @version 0.0.38
 */
class CreateCustomFieldRequest {
    /**
     * Constructs a new <code>CreateCustomFieldRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateCustomFieldRequest
     * @param fieldType {module:com.keap.sdk.core/model/CreateCustomFieldRequest.FieldTypeEnum} 
     * @param label {String} 
     */
    constructor(fieldType, label) { 
        
        CreateCustomFieldRequest.initialize(this, fieldType, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldType, label) { 
        obj['field_type'] = fieldType;
        obj['label'] = label;
    }

    /**
     * Constructs a <code>CreateCustomFieldRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateCustomFieldRequest} The populated <code>CreateCustomFieldRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCustomFieldRequest();

            if (data.hasOwnProperty('field_type')) {
                obj['field_type'] = ApiClient.convertToType(data['field_type'], 'String');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [CreateCustomFieldOptionRequest]);
            }
            if (data.hasOwnProperty('user_group_id')) {
                obj['user_group_id'] = ApiClient.convertToType(data['user_group_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCustomFieldRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCustomFieldRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateCustomFieldRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['field_type'] && !(typeof data['field_type'] === 'string' || data['field_type'] instanceof String)) {
            throw new Error("Expected the field `field_type` to be a primitive type in the JSON string but got " + data['field_type']);
        }
        // ensure the json data is a string
        if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
            throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                CreateCustomFieldOptionRequest.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['user_group_id'] && !(typeof data['user_group_id'] === 'string' || data['user_group_id'] instanceof String)) {
            throw new Error("Expected the field `user_group_id` to be a primitive type in the JSON string but got " + data['user_group_id']);
        }

        return true;
    }


}

CreateCustomFieldRequest.RequiredProperties = ["field_type", "label"];

/**
 * @member {module:com.keap.sdk.core/model/CreateCustomFieldRequest.FieldTypeEnum} field_type
 */
CreateCustomFieldRequest.prototype['field_type'] = undefined;

/**
 * An optional tab group to place the field under in the interface.  If not specified, will default to the 'Custom Fields' tab.
 * @member {String} group_id
 */
CreateCustomFieldRequest.prototype['group_id'] = undefined;

/**
 * @member {String} label
 */
CreateCustomFieldRequest.prototype['label'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CreateCustomFieldOptionRequest>} options
 */
CreateCustomFieldRequest.prototype['options'] = undefined;

/**
 * An optional user group to choose from when selecting values for User or UserListBox fields.
 * @member {String} user_group_id
 */
CreateCustomFieldRequest.prototype['user_group_id'] = undefined;





/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateCustomFieldRequest['FieldTypeEnum'] = {

    /**
     * value: "CURRENCY"
     * @const
     */
    "CURRENCY": "CURRENCY",

    /**
     * value: "DATE"
     * @const
     */
    "DATE": "DATE",

    /**
     * value: "DATE_TIME"
     * @const
     */
    "DATE_TIME": "DATE_TIME",

    /**
     * value: "DAY_OF_WEEK"
     * @const
     */
    "DAY_OF_WEEK": "DAY_OF_WEEK",

    /**
     * value: "DECIMAL_NUMBER"
     * @const
     */
    "DECIMAL_NUMBER": "DECIMAL_NUMBER",

    /**
     * value: "DRILLDOWN"
     * @const
     */
    "DRILLDOWN": "DRILLDOWN",

    /**
     * value: "DROPDOWN"
     * @const
     */
    "DROPDOWN": "DROPDOWN",

    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL",

    /**
     * value: "LIST_BOX"
     * @const
     */
    "LIST_BOX": "LIST_BOX",

    /**
     * value: "MONTH"
     * @const
     */
    "MONTH": "MONTH",

    /**
     * value: "NAME"
     * @const
     */
    "NAME": "NAME",

    /**
     * value: "PERCENT"
     * @const
     */
    "PERCENT": "PERCENT",

    /**
     * value: "PHONE_NUMBER"
     * @const
     */
    "PHONE_NUMBER": "PHONE_NUMBER",

    /**
     * value: "RADIO"
     * @const
     */
    "RADIO": "RADIO",

    /**
     * value: "SOCIAL_SECURITY_NUMBER"
     * @const
     */
    "SOCIAL_SECURITY_NUMBER": "SOCIAL_SECURITY_NUMBER",

    /**
     * value: "STATE"
     * @const
     */
    "STATE": "STATE",

    /**
     * value: "TEXT"
     * @const
     */
    "TEXT": "TEXT",

    /**
     * value: "TEXT_AREA"
     * @const
     */
    "TEXT_AREA": "TEXT_AREA",

    /**
     * value: "USER"
     * @const
     */
    "USER": "USER",

    /**
     * value: "USER_LIST_BOX"
     * @const
     */
    "USER_LIST_BOX": "USER_LIST_BOX",

    /**
     * value: "WEBSITE"
     * @const
     */
    "WEBSITE": "WEBSITE",

    /**
     * value: "WHOLE_NUMBER"
     * @const
     */
    "WHOLE_NUMBER": "WHOLE_NUMBER",

    /**
     * value: "YEAR"
     * @const
     */
    "YEAR": "YEAR",

    /**
     * value: "YES_NO"
     * @const
     */
    "YES_NO": "YES_NO",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default CreateCustomFieldRequest;
