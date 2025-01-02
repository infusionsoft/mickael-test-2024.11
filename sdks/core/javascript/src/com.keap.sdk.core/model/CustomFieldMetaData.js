/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomFieldOption from './CustomFieldOption';

/**
 * The CustomFieldMetaData model module.
 * @module com.keap.sdk.core/model/CustomFieldMetaData
 * @version 0.0.75
 */
class CustomFieldMetaData {
    /**
     * Constructs a new <code>CustomFieldMetaData</code>.
     * @alias module:com.keap.sdk.core/model/CustomFieldMetaData
     */
    constructor() { 
        
        CustomFieldMetaData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomFieldMetaData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CustomFieldMetaData} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CustomFieldMetaData} The populated <code>CustomFieldMetaData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldMetaData();

            if (data.hasOwnProperty('default_value')) {
                obj['default_value'] = ApiClient.convertToType(data['default_value'], 'String');
            }
            if (data.hasOwnProperty('field_name')) {
                obj['field_name'] = ApiClient.convertToType(data['field_name'], 'String');
            }
            if (data.hasOwnProperty('field_type')) {
                obj['field_type'] = ApiClient.convertToType(data['field_type'], 'String');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [CustomFieldOption]);
            }
            if (data.hasOwnProperty('record_type')) {
                obj['record_type'] = ApiClient.convertToType(data['record_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldMetaData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldMetaData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['default_value'] && !(typeof data['default_value'] === 'string' || data['default_value'] instanceof String)) {
            throw new Error("Expected the field `default_value` to be a primitive type in the JSON string but got " + data['default_value']);
        }
        // ensure the json data is a string
        if (data['field_name'] && !(typeof data['field_name'] === 'string' || data['field_name'] instanceof String)) {
            throw new Error("Expected the field `field_name` to be a primitive type in the JSON string but got " + data['field_name']);
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
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
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
                CustomFieldOption.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['record_type'] && !(typeof data['record_type'] === 'string' || data['record_type'] instanceof String)) {
            throw new Error("Expected the field `record_type` to be a primitive type in the JSON string but got " + data['record_type']);
        }

        return true;
    }


}



/**
 * @member {String} default_value
 */
CustomFieldMetaData.prototype['default_value'] = undefined;

/**
 * @member {String} field_name
 */
CustomFieldMetaData.prototype['field_name'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CustomFieldMetaData.FieldTypeEnum} field_type
 */
CustomFieldMetaData.prototype['field_type'] = undefined;

/**
 * @member {String} group_id
 */
CustomFieldMetaData.prototype['group_id'] = undefined;

/**
 * @member {String} id
 */
CustomFieldMetaData.prototype['id'] = undefined;

/**
 * @member {String} label
 */
CustomFieldMetaData.prototype['label'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomFieldOption>} options
 */
CustomFieldMetaData.prototype['options'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CustomFieldMetaData.RecordTypeEnum} record_type
 */
CustomFieldMetaData.prototype['record_type'] = undefined;





/**
 * Allowed values for the <code>field_type</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldMetaData['FieldTypeEnum'] = {

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

/**
 * Allowed values for the <code>record_type</code> property.
 * @enum {String}
 * @readonly
 */
CustomFieldMetaData['RecordTypeEnum'] = {

    /**
     * value: "CONTACT"
     * @const
     */
    "CONTACT": "CONTACT",

    /**
     * value: "REFERRAL_PARTNER"
     * @const
     */
    "REFERRAL_PARTNER": "REFERRAL_PARTNER",

    /**
     * value: "OPPORTUNITY"
     * @const
     */
    "OPPORTUNITY": "OPPORTUNITY",

    /**
     * value: "TASK_NOTE_APPOINTMENT"
     * @const
     */
    "TASK_NOTE_APPOINTMENT": "TASK_NOTE_APPOINTMENT",

    /**
     * value: "COMPANY"
     * @const
     */
    "COMPANY": "COMPANY",

    /**
     * value: "ORDER"
     * @const
     */
    "ORDER": "ORDER",

    /**
     * value: "SUBSCRIPTION"
     * @const
     */
    "SUBSCRIPTION": "SUBSCRIPTION",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default CustomFieldMetaData;
