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
 * The ApplicationConfigurationModuleOpportunityStatesWin model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesWin
 * @version 0.0.42
 */
class ApplicationConfigurationModuleOpportunityStatesWin {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleOpportunityStatesWin</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesWin
     */
    constructor() { 
        
        ApplicationConfigurationModuleOpportunityStatesWin.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleOpportunityStatesWin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesWin} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesWin} The populated <code>ApplicationConfigurationModuleOpportunityStatesWin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleOpportunityStatesWin();

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
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleOpportunityStatesWin</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleOpportunityStatesWin</code>.
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
ApplicationConfigurationModuleOpportunityStatesWin.prototype['reasons'] = undefined;

/**
 * @member {String} stage
 */
ApplicationConfigurationModuleOpportunityStatesWin.prototype['stage'] = undefined;






export default ApplicationConfigurationModuleOpportunityStatesWin;
