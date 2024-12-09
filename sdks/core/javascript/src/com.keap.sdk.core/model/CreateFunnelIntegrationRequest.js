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
import FunnelIntegrationAction from './FunnelIntegrationAction';

/**
 * The CreateFunnelIntegrationRequest model module.
 * @module com.keap.sdk.core/model/CreateFunnelIntegrationRequest
 * @version 0.0.36
 */
class CreateFunnelIntegrationRequest {
    /**
     * Constructs a new <code>CreateFunnelIntegrationRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateFunnelIntegrationRequest
     */
    constructor() { 
        
        CreateFunnelIntegrationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateFunnelIntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateFunnelIntegrationRequest} The populated <code>CreateFunnelIntegrationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFunnelIntegrationRequest();

            if (data.hasOwnProperty('base_url')) {
                obj['base_url'] = ApiClient.convertToType(data['base_url'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('funnel_integration_actions')) {
                obj['funnel_integration_actions'] = ApiClient.convertToType(data['funnel_integration_actions'], [FunnelIntegrationAction]);
            }
            if (data.hasOwnProperty('funnel_integration_triggers')) {
                obj['funnel_integration_triggers'] = ApiClient.convertToType(data['funnel_integration_triggers'], [FunnelIntegrationAction]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateFunnelIntegrationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateFunnelIntegrationRequest</code>.
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
        if (data['funnel_integration_actions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['funnel_integration_actions'])) {
                throw new Error("Expected the field `funnel_integration_actions` to be an array in the JSON data but got " + data['funnel_integration_actions']);
            }
            // validate the optional field `funnel_integration_actions` (array)
            for (const item of data['funnel_integration_actions']) {
                FunnelIntegrationAction.validateJSON(item);
            };
        }
        if (data['funnel_integration_triggers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['funnel_integration_triggers'])) {
                throw new Error("Expected the field `funnel_integration_triggers` to be an array in the JSON data but got " + data['funnel_integration_triggers']);
            }
            // validate the optional field `funnel_integration_triggers` (array)
            for (const item of data['funnel_integration_triggers']) {
                FunnelIntegrationAction.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The base URL of the integration, that will be used to call the integration related REST endpoints.
 * @member {String} base_url
 */
CreateFunnelIntegrationRequest.prototype['base_url'] = undefined;

/**
 * The context of the integration, that will be used internally to identify the integration.
 * @member {String} context
 */
CreateFunnelIntegrationRequest.prototype['context'] = undefined;

/**
 * The flag to enable or disable the integration.
 * @member {Boolean} enabled
 */
CreateFunnelIntegrationRequest.prototype['enabled'] = undefined;

/**
 * The list of actions that will be installed with the integration.
 * @member {Array.<module:com.keap.sdk.core/model/FunnelIntegrationAction>} funnel_integration_actions
 */
CreateFunnelIntegrationRequest.prototype['funnel_integration_actions'] = undefined;

/**
 * The list of triggers that will be installed with the integration.
 * @member {Array.<module:com.keap.sdk.core/model/FunnelIntegrationAction>} funnel_integration_triggers
 */
CreateFunnelIntegrationRequest.prototype['funnel_integration_triggers'] = undefined;

/**
 * The name of the integration, that will be used internally to identify the integration.
 * @member {String} name
 */
CreateFunnelIntegrationRequest.prototype['name'] = undefined;






export default CreateFunnelIntegrationRequest;
