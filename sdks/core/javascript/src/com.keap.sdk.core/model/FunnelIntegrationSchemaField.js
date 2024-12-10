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

/**
 * The FunnelIntegrationSchemaField model module.
 * @module com.keap.sdk.core/model/FunnelIntegrationSchemaField
 * @version 0.0.39
 */
class FunnelIntegrationSchemaField {
    /**
     * Constructs a new <code>FunnelIntegrationSchemaField</code>.
     * @alias module:com.keap.sdk.core/model/FunnelIntegrationSchemaField
     */
    constructor() { 
        
        FunnelIntegrationSchemaField.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FunnelIntegrationSchemaField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/FunnelIntegrationSchemaField} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/FunnelIntegrationSchemaField} The populated <code>FunnelIntegrationSchemaField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunnelIntegrationSchemaField();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FunnelIntegrationSchemaField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FunnelIntegrationSchemaField</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * The label that will be used to show the name of the field in the UI.
 * @member {String} label
 */
FunnelIntegrationSchemaField.prototype['label'] = undefined;

/**
 * The name of the schema field. Will be the defauly label, if no label is provided.
 * @member {String} name
 */
FunnelIntegrationSchemaField.prototype['name'] = undefined;

/**
 * The data type of the field.
 * @member {String} type
 */
FunnelIntegrationSchemaField.prototype['type'] = undefined;






export default FunnelIntegrationSchemaField;
