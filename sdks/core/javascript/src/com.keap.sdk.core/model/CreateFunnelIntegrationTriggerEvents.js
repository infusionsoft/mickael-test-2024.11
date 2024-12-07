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
import FunnelIntegrationTriggerEventDTO from './FunnelIntegrationTriggerEventDTO';

/**
 * The CreateFunnelIntegrationTriggerEvents model module.
 * @module com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents
 * @version 0.0.32
 */
class CreateFunnelIntegrationTriggerEvents {
    /**
     * Constructs a new <code>CreateFunnelIntegrationTriggerEvents</code>.
     * @alias module:com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents
     */
    constructor() { 
        
        CreateFunnelIntegrationTriggerEvents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateFunnelIntegrationTriggerEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents} The populated <code>CreateFunnelIntegrationTriggerEvents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFunnelIntegrationTriggerEvents();

            if (data.hasOwnProperty('funnel_integration_trigger_events')) {
                obj['funnel_integration_trigger_events'] = ApiClient.convertToType(data['funnel_integration_trigger_events'], [FunnelIntegrationTriggerEventDTO]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateFunnelIntegrationTriggerEvents</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateFunnelIntegrationTriggerEvents</code>.
     */
    static validateJSON(data) {
        if (data['funnel_integration_trigger_events']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['funnel_integration_trigger_events'])) {
                throw new Error("Expected the field `funnel_integration_trigger_events` to be an array in the JSON data but got " + data['funnel_integration_trigger_events']);
            }
            // validate the optional field `funnel_integration_trigger_events` (array)
            for (const item of data['funnel_integration_trigger_events']) {
                FunnelIntegrationTriggerEventDTO.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * A list of trigger events to be created.
 * @member {Array.<module:com.keap.sdk.core/model/FunnelIntegrationTriggerEventDTO>} funnel_integration_trigger_events
 */
CreateFunnelIntegrationTriggerEvents.prototype['funnel_integration_trigger_events'] = undefined;






export default CreateFunnelIntegrationTriggerEvents;
