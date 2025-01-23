/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FunnelIntegrationSchemaField from './FunnelIntegrationSchemaField';

/**
 * The FunnelIntegrationAction model module.
 * @module com.keap.sdk.core/model/FunnelIntegrationAction
 * @version 0.0.101
 */
class FunnelIntegrationAction {
    /**
     * Constructs a new <code>FunnelIntegrationAction</code>.
     * @alias module:com.keap.sdk.core/model/FunnelIntegrationAction
     */
    constructor() { 
        
        FunnelIntegrationAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FunnelIntegrationAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/FunnelIntegrationAction} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/FunnelIntegrationAction} The populated <code>FunnelIntegrationAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunnelIntegrationAction();

            if (data.hasOwnProperty('base_url')) {
                obj['base_url'] = ApiClient.convertToType(data['base_url'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('schema_fields')) {
                obj['schema_fields'] = ApiClient.convertToType(data['schema_fields'], [FunnelIntegrationSchemaField]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FunnelIntegrationAction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FunnelIntegrationAction</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['base_url'] && !(typeof data['base_url'] === 'string' || data['base_url'] instanceof String)) {
            throw new Error("Expected the field `base_url` to be a primitive type in the JSON string but got " + data['base_url']);
        }
        // ensure the json data is a string
        if (data['context'] && !(typeof data['context'] === 'string' || data['context'] instanceof String)) {
            throw new Error("Expected the field `context` to be a primitive type in the JSON string but got " + data['context']);
        }
        // ensure the json data is a string
        if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
            throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['schema_fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['schema_fields'])) {
                throw new Error("Expected the field `schema_fields` to be an array in the JSON data but got " + data['schema_fields']);
            }
            // validate the optional field `schema_fields` (array)
            for (const item of data['schema_fields']) {
                FunnelIntegrationSchemaField.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The base URL of the trigger, that will be used to call the integration related REST endpoints.
 * @member {String} base_url
 */
FunnelIntegrationAction.prototype['base_url'] = undefined;

/**
 * The context of the trigger, that will be used internally to identify the integration.
 * @member {String} context
 */
FunnelIntegrationAction.prototype['context'] = undefined;

/**
 * The flag to enable or disable the integration trigger.
 * @member {Boolean} enabled
 */
FunnelIntegrationAction.prototype['enabled'] = undefined;

/**
 * The icon URL of the trigger, that will be used to display the icon of this specific integration trigger.
 * @member {String} icon_url
 */
FunnelIntegrationAction.prototype['icon_url'] = undefined;

/**
 * The name of the trigger, that will be used internally to identify and initiate the trigger.
 * @member {String} name
 */
FunnelIntegrationAction.prototype['name'] = undefined;

/**
 * The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated.
 * @member {Array.<module:com.keap.sdk.core/model/FunnelIntegrationSchemaField>} schema_fields
 */
FunnelIntegrationAction.prototype['schema_fields'] = undefined;






export default FunnelIntegrationAction;
