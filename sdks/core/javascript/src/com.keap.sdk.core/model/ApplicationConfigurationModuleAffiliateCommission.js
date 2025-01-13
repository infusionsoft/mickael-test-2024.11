/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApplicationConfigurationModuleAffiliateCommission model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliateCommission
 * @version 0.0.86
 */
class ApplicationConfigurationModuleAffiliateCommission {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleAffiliateCommission</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliateCommission
     */
    constructor() { 
        
        ApplicationConfigurationModuleAffiliateCommission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleAffiliateCommission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliateCommission} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliateCommission} The populated <code>ApplicationConfigurationModuleAffiliateCommission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleAffiliateCommission();

            if (data.hasOwnProperty('calculation_type')) {
                obj['calculation_type'] = ApiClient.convertToType(data['calculation_type'], 'String');
            }
            if (data.hasOwnProperty('levels')) {
                obj['levels'] = ApiClient.convertToType(data['levels'], 'Number');
            }
            if (data.hasOwnProperty('participant_types')) {
                obj['participant_types'] = ApiClient.convertToType(data['participant_types'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleAffiliateCommission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleAffiliateCommission</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['calculation_type'] && !(typeof data['calculation_type'] === 'string' || data['calculation_type'] instanceof String)) {
            throw new Error("Expected the field `calculation_type` to be a primitive type in the JSON string but got " + data['calculation_type']);
        }
        // ensure the json data is a string
        if (data['participant_types'] && !(typeof data['participant_types'] === 'string' || data['participant_types'] instanceof String)) {
            throw new Error("Expected the field `participant_types` to be a primitive type in the JSON string but got " + data['participant_types']);
        }

        return true;
    }


}



/**
 * @member {String} calculation_type
 */
ApplicationConfigurationModuleAffiliateCommission.prototype['calculation_type'] = undefined;

/**
 * @member {Number} levels
 */
ApplicationConfigurationModuleAffiliateCommission.prototype['levels'] = undefined;

/**
 * @member {String} participant_types
 */
ApplicationConfigurationModuleAffiliateCommission.prototype['participant_types'] = undefined;






export default ApplicationConfigurationModuleAffiliateCommission;
