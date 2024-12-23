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
import ApplicationConfigurationModuleOpportunityStatesActive from './ApplicationConfigurationModuleOpportunityStatesActive';
import ApplicationConfigurationModuleOpportunityStatesLoss from './ApplicationConfigurationModuleOpportunityStatesLoss';
import ApplicationConfigurationModuleOpportunityStatesWin from './ApplicationConfigurationModuleOpportunityStatesWin';

/**
 * The ApplicationConfigurationModuleOpportunityStates model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStates
 * @version 0.0.65
 */
class ApplicationConfigurationModuleOpportunityStates {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleOpportunityStates</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStates
     */
    constructor() { 
        
        ApplicationConfigurationModuleOpportunityStates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleOpportunityStates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStates} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStates} The populated <code>ApplicationConfigurationModuleOpportunityStates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleOpportunityStates();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApplicationConfigurationModuleOpportunityStatesActive.constructFromObject(data['active']);
            }
            if (data.hasOwnProperty('loss')) {
                obj['loss'] = ApplicationConfigurationModuleOpportunityStatesLoss.constructFromObject(data['loss']);
            }
            if (data.hasOwnProperty('win')) {
                obj['win'] = ApplicationConfigurationModuleOpportunityStatesWin.constructFromObject(data['win']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleOpportunityStates</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleOpportunityStates</code>.
     */
    static validateJSON(data) {
        // validate the optional field `active`
        if (data['active']) { // data not null
          ApplicationConfigurationModuleOpportunityStatesActive.validateJSON(data['active']);
        }
        // validate the optional field `loss`
        if (data['loss']) { // data not null
          ApplicationConfigurationModuleOpportunityStatesLoss.validateJSON(data['loss']);
        }
        // validate the optional field `win`
        if (data['win']) { // data not null
          ApplicationConfigurationModuleOpportunityStatesWin.validateJSON(data['win']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesActive} active
 */
ApplicationConfigurationModuleOpportunityStates.prototype['active'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesLoss} loss
 */
ApplicationConfigurationModuleOpportunityStates.prototype['loss'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunityStatesWin} win
 */
ApplicationConfigurationModuleOpportunityStates.prototype['win'] = undefined;






export default ApplicationConfigurationModuleOpportunityStates;
