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

/**
 * The ApplicationConfigurationModuleOpportunityStatesActive model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesActive
 * @version 0.0.102
 */
class ApplicationConfigurationModuleOpportunityStatesActive {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleOpportunityStatesActive</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesActive
     */
    constructor() { 
        
        ApplicationConfigurationModuleOpportunityStatesActive.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleOpportunityStatesActive</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesActive} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesActive} The populated <code>ApplicationConfigurationModuleOpportunityStatesActive</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleOpportunityStatesActive();

            if (data.hasOwnProperty('stages')) {
                obj['stages'] = ApiClient.convertToType(data['stages'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleOpportunityStatesActive</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleOpportunityStatesActive</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['stages'] && !(typeof data['stages'] === 'string' || data['stages'] instanceof String)) {
            throw new Error("Expected the field `stages` to be a primitive type in the JSON string but got " + data['stages']);
        }

        return true;
    }


}



/**
 * @member {String} stages
 */
ApplicationConfigurationModuleOpportunityStatesActive.prototype['stages'] = undefined;






export default ApplicationConfigurationModuleOpportunityStatesActive;
