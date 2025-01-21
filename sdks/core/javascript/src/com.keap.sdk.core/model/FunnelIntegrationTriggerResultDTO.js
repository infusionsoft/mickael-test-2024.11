/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FunnelIntegrationTriggerResultDTO model module.
 * @module com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO
 * @version 0.0.93
 */
class FunnelIntegrationTriggerResultDTO {
    /**
     * Constructs a new <code>FunnelIntegrationTriggerResultDTO</code>.
     * @alias module:com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO
     */
    constructor() { 
        
        FunnelIntegrationTriggerResultDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FunnelIntegrationTriggerResultDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO} The populated <code>FunnelIntegrationTriggerResultDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunnelIntegrationTriggerResultDTO();

            if (data.hasOwnProperty('automation_id')) {
                obj['automation_id'] = ApiClient.convertToType(data['automation_id'], 'Number');
            }
            if (data.hasOwnProperty('goal_id')) {
                obj['goal_id'] = ApiClient.convertToType(data['goal_id'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('schema_data')) {
                obj['schema_data'] = ApiClient.convertToType(data['schema_data'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FunnelIntegrationTriggerResultDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FunnelIntegrationTriggerResultDTO</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['schema_data'] && !(typeof data['schema_data'] === 'string' || data['schema_data'] instanceof String)) {
            throw new Error("Expected the field `schema_data` to be a primitive type in the JSON string but got " + data['schema_data']);
        }

        return true;
    }


}



/**
 * @member {Number} automation_id
 */
FunnelIntegrationTriggerResultDTO.prototype['automation_id'] = undefined;

/**
 * @member {Number} goal_id
 */
FunnelIntegrationTriggerResultDTO.prototype['goal_id'] = undefined;

/**
 * @member {String} message
 */
FunnelIntegrationTriggerResultDTO.prototype['message'] = undefined;

/**
 * @member {String} schema_data
 */
FunnelIntegrationTriggerResultDTO.prototype['schema_data'] = undefined;

/**
 * @member {Boolean} success
 */
FunnelIntegrationTriggerResultDTO.prototype['success'] = undefined;






export default FunnelIntegrationTriggerResultDTO;
