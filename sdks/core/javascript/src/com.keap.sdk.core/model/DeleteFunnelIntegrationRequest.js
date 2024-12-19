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
 * The DeleteFunnelIntegrationRequest model module.
 * @module com.keap.sdk.core/model/DeleteFunnelIntegrationRequest
 * @version 0.0.55
 */
class DeleteFunnelIntegrationRequest {
    /**
     * Constructs a new <code>DeleteFunnelIntegrationRequest</code>.
     * @alias module:com.keap.sdk.core/model/DeleteFunnelIntegrationRequest
     */
    constructor() { 
        
        DeleteFunnelIntegrationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFunnelIntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DeleteFunnelIntegrationRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DeleteFunnelIntegrationRequest} The populated <code>DeleteFunnelIntegrationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFunnelIntegrationRequest();

            if (data.hasOwnProperty('action_names')) {
                obj['action_names'] = ApiClient.convertToType(data['action_names'], ['String']);
            }
            if (data.hasOwnProperty('integration_names')) {
                obj['integration_names'] = ApiClient.convertToType(data['integration_names'], ['String']);
            }
            if (data.hasOwnProperty('trigger_names')) {
                obj['trigger_names'] = ApiClient.convertToType(data['trigger_names'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteFunnelIntegrationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteFunnelIntegrationRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['action_names'])) {
            throw new Error("Expected the field `action_names` to be an array in the JSON data but got " + data['action_names']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['integration_names'])) {
            throw new Error("Expected the field `integration_names` to be an array in the JSON data but got " + data['integration_names']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['trigger_names'])) {
            throw new Error("Expected the field `trigger_names` to be an array in the JSON data but got " + data['trigger_names']);
        }

        return true;
    }


}



/**
 * The name of the actions, that will be looked for and uninstalled.
 * @member {Array.<String>} action_names
 */
DeleteFunnelIntegrationRequest.prototype['action_names'] = undefined;

/**
 * The name of the integrations, that will be looked for and uninstalled. This will uninstall all triggers and actions related to this automation.
 * @member {Array.<String>} integration_names
 */
DeleteFunnelIntegrationRequest.prototype['integration_names'] = undefined;

/**
 * The name of the triggers, that will be looked for and uninstalled.
 * @member {Array.<String>} trigger_names
 */
DeleteFunnelIntegrationRequest.prototype['trigger_names'] = undefined;






export default DeleteFunnelIntegrationRequest;
