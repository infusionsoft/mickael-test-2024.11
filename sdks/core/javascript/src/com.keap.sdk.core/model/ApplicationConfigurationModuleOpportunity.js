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
import ApplicationConfigurationModuleOpportunityStates from './ApplicationConfigurationModuleOpportunityStates';

/**
 * The ApplicationConfigurationModuleOpportunity model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunity
 * @version 0.0.106
 */
class ApplicationConfigurationModuleOpportunity {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleOpportunity</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunity
     */
    constructor() { 
        
        ApplicationConfigurationModuleOpportunity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleOpportunity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunity} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunity} The populated <code>ApplicationConfigurationModuleOpportunity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleOpportunity();

            if (data.hasOwnProperty('default_stage')) {
                obj['default_stage'] = ApiClient.convertToType(data['default_stage'], 'String');
            }
            if (data.hasOwnProperty('states')) {
                obj['states'] = ApplicationConfigurationModuleOpportunityStates.constructFromObject(data['states']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleOpportunity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleOpportunity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['default_stage'] && !(typeof data['default_stage'] === 'string' || data['default_stage'] instanceof String)) {
            throw new Error("Expected the field `default_stage` to be a primitive type in the JSON string but got " + data['default_stage']);
        }
        // validate the optional field `states`
        if (data['states']) { // data not null
          ApplicationConfigurationModuleOpportunityStates.validateJSON(data['states']);
        }

        return true;
    }


}



/**
 * @member {String} default_stage
 */
ApplicationConfigurationModuleOpportunity.prototype['default_stage'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStates} states
 */
ApplicationConfigurationModuleOpportunity.prototype['states'] = undefined;






export default ApplicationConfigurationModuleOpportunity;
