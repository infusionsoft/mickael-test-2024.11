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
 * The ApplicationConfigurationModuleOpportunityStatesLoss model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesLoss
 * @version 0.0.55
 */
class ApplicationConfigurationModuleOpportunityStatesLoss {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleOpportunityStatesLoss</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesLoss
     */
    constructor() { 
        
        ApplicationConfigurationModuleOpportunityStatesLoss.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleOpportunityStatesLoss</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesLoss} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesLoss} The populated <code>ApplicationConfigurationModuleOpportunityStatesLoss</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleOpportunityStatesLoss();

            if (data.hasOwnProperty('reasons')) {
                obj['reasons'] = ApiClient.convertToType(data['reasons'], 'String');
            }
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = ApiClient.convertToType(data['stage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleOpportunityStatesLoss</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleOpportunityStatesLoss</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reasons'] && !(typeof data['reasons'] === 'string' || data['reasons'] instanceof String)) {
            throw new Error("Expected the field `reasons` to be a primitive type in the JSON string but got " + data['reasons']);
        }
        // ensure the json data is a string
        if (data['stage'] && !(typeof data['stage'] === 'string' || data['stage'] instanceof String)) {
            throw new Error("Expected the field `stage` to be a primitive type in the JSON string but got " + data['stage']);
        }

        return true;
    }


}



/**
 * @member {String} reasons
 */
ApplicationConfigurationModuleOpportunityStatesLoss.prototype['reasons'] = undefined;

/**
 * @member {String} stage
 */
ApplicationConfigurationModuleOpportunityStatesLoss.prototype['stage'] = undefined;






export default ApplicationConfigurationModuleOpportunityStatesLoss;
