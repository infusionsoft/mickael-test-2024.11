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

/**
 * The FunnelIntegrationTriggerEventDTO model module.
 * @module com.keap.sdk.core/model/FunnelIntegrationTriggerEventDTO
 * @version 0.0.74
 */
class FunnelIntegrationTriggerEventDTO {
    /**
     * Constructs a new <code>FunnelIntegrationTriggerEventDTO</code>.
     * @alias module:com.keap.sdk.core/model/FunnelIntegrationTriggerEventDTO
     */
    constructor() { 
        
        FunnelIntegrationTriggerEventDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FunnelIntegrationTriggerEventDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/FunnelIntegrationTriggerEventDTO} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/FunnelIntegrationTriggerEventDTO} The populated <code>FunnelIntegrationTriggerEventDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunnelIntegrationTriggerEventDTO();

            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'Number');
            }
            if (data.hasOwnProperty('oracle_id')) {
                obj['oracle_id'] = ApiClient.convertToType(data['oracle_id'], 'String');
            }
            if (data.hasOwnProperty('schema_data')) {
                obj['schema_data'] = ApiClient.convertToType(data['schema_data'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FunnelIntegrationTriggerEventDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FunnelIntegrationTriggerEventDTO</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['oracle_id'] && !(typeof data['oracle_id'] === 'string' || data['oracle_id'] instanceof String)) {
            throw new Error("Expected the field `oracle_id` to be a primitive type in the JSON string but got " + data['oracle_id']);
        }
        // ensure the json data is a string
        if (data['schema_data'] && !(typeof data['schema_data'] === 'string' || data['schema_data'] instanceof String)) {
            throw new Error("Expected the field `schema_data` to be a primitive type in the JSON string but got " + data['schema_data']);
        }

        return true;
    }


}



/**
 * @member {Number} contact_id
 */
FunnelIntegrationTriggerEventDTO.prototype['contact_id'] = undefined;

/**
 * @member {String} oracle_id
 */
FunnelIntegrationTriggerEventDTO.prototype['oracle_id'] = undefined;

/**
 * @member {String} schema_data
 */
FunnelIntegrationTriggerEventDTO.prototype['schema_data'] = undefined;






export default FunnelIntegrationTriggerEventDTO;
