/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApplicationConfigurationModuleAffiliate from './ApplicationConfigurationModuleAffiliate';
import ApplicationConfigurationModuleApplication from './ApplicationConfigurationModuleApplication';
import ApplicationConfigurationModuleAppointment from './ApplicationConfigurationModuleAppointment';
import ApplicationConfigurationModuleContact from './ApplicationConfigurationModuleContact';
import ApplicationConfigurationModuleEcommerce from './ApplicationConfigurationModuleEcommerce';
import ApplicationConfigurationModuleEmail from './ApplicationConfigurationModuleEmail';
import ApplicationConfigurationModuleForms from './ApplicationConfigurationModuleForms';
import ApplicationConfigurationModuleFulfillment from './ApplicationConfigurationModuleFulfillment';
import ApplicationConfigurationModuleInvoice from './ApplicationConfigurationModuleInvoice';
import ApplicationConfigurationModuleNote from './ApplicationConfigurationModuleNote';
import ApplicationConfigurationModuleOpportunity from './ApplicationConfigurationModuleOpportunity';
import ApplicationConfigurationModuleTask from './ApplicationConfigurationModuleTask';
import ApplicationConfigurationModuleTemplate from './ApplicationConfigurationModuleTemplate';

/**
 * The GetSettingsResponse model module.
 * @module com.keap.sdk.core/model/GetSettingsResponse
 * @version 0.0.88
 */
class GetSettingsResponse {
    /**
     * Constructs a new <code>GetSettingsResponse</code>.
     * @alias module:com.keap.sdk.core/model/GetSettingsResponse
     */
    constructor() { 
        
        GetSettingsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/GetSettingsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/GetSettingsResponse} The populated <code>GetSettingsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSettingsResponse();

            if (data.hasOwnProperty('affiliate')) {
                obj['affiliate'] = ApplicationConfigurationModuleAffiliate.constructFromObject(data['affiliate']);
            }
            if (data.hasOwnProperty('application')) {
                obj['application'] = ApplicationConfigurationModuleApplication.constructFromObject(data['application']);
            }
            if (data.hasOwnProperty('appointment')) {
                obj['appointment'] = ApplicationConfigurationModuleAppointment.constructFromObject(data['appointment']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApplicationConfigurationModuleContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('ecommerce')) {
                obj['ecommerce'] = ApplicationConfigurationModuleEcommerce.constructFromObject(data['ecommerce']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApplicationConfigurationModuleEmail.constructFromObject(data['email']);
            }
            if (data.hasOwnProperty('forms')) {
                obj['forms'] = ApplicationConfigurationModuleForms.constructFromObject(data['forms']);
            }
            if (data.hasOwnProperty('fulfillment')) {
                obj['fulfillment'] = ApplicationConfigurationModuleFulfillment.constructFromObject(data['fulfillment']);
            }
            if (data.hasOwnProperty('invoice')) {
                obj['invoice'] = ApplicationConfigurationModuleInvoice.constructFromObject(data['invoice']);
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApplicationConfigurationModuleNote.constructFromObject(data['note']);
            }
            if (data.hasOwnProperty('opportunity')) {
                obj['opportunity'] = ApplicationConfigurationModuleOpportunity.constructFromObject(data['opportunity']);
            }
            if (data.hasOwnProperty('task')) {
                obj['task'] = ApplicationConfigurationModuleTask.constructFromObject(data['task']);
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApplicationConfigurationModuleTemplate.constructFromObject(data['template']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetSettingsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetSettingsResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `affiliate`
        if (data['affiliate']) { // data not null
          ApplicationConfigurationModuleAffiliate.validateJSON(data['affiliate']);
        }
        // validate the optional field `application`
        if (data['application']) { // data not null
          ApplicationConfigurationModuleApplication.validateJSON(data['application']);
        }
        // validate the optional field `appointment`
        if (data['appointment']) { // data not null
          ApplicationConfigurationModuleAppointment.validateJSON(data['appointment']);
        }
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          ApplicationConfigurationModuleContact.validateJSON(data['contact']);
        }
        // validate the optional field `ecommerce`
        if (data['ecommerce']) { // data not null
          ApplicationConfigurationModuleEcommerce.validateJSON(data['ecommerce']);
        }
        // validate the optional field `email`
        if (data['email']) { // data not null
          ApplicationConfigurationModuleEmail.validateJSON(data['email']);
        }
        // validate the optional field `forms`
        if (data['forms']) { // data not null
          ApplicationConfigurationModuleForms.validateJSON(data['forms']);
        }
        // validate the optional field `fulfillment`
        if (data['fulfillment']) { // data not null
          ApplicationConfigurationModuleFulfillment.validateJSON(data['fulfillment']);
        }
        // validate the optional field `invoice`
        if (data['invoice']) { // data not null
          ApplicationConfigurationModuleInvoice.validateJSON(data['invoice']);
        }
        // validate the optional field `note`
        if (data['note']) { // data not null
          ApplicationConfigurationModuleNote.validateJSON(data['note']);
        }
        // validate the optional field `opportunity`
        if (data['opportunity']) { // data not null
          ApplicationConfigurationModuleOpportunity.validateJSON(data['opportunity']);
        }
        // validate the optional field `task`
        if (data['task']) { // data not null
          ApplicationConfigurationModuleTask.validateJSON(data['task']);
        }
        // validate the optional field `template`
        if (data['template']) { // data not null
          ApplicationConfigurationModuleTemplate.validateJSON(data['template']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate} affiliate
 */
GetSettingsResponse.prototype['affiliate'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleApplication} application
 */
GetSettingsResponse.prototype['application'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAppointment} appointment
 */
GetSettingsResponse.prototype['appointment'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContact} contact
 */
GetSettingsResponse.prototype['contact'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEcommerce} ecommerce
 */
GetSettingsResponse.prototype['ecommerce'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEmail} email
 */
GetSettingsResponse.prototype['email'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleForms} forms
 */
GetSettingsResponse.prototype['forms'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleFulfillment} fulfillment
 */
GetSettingsResponse.prototype['fulfillment'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleInvoice} invoice
 */
GetSettingsResponse.prototype['invoice'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleNote} note
 */
GetSettingsResponse.prototype['note'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleOpportunity} opportunity
 */
GetSettingsResponse.prototype['opportunity'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleTask} task
 */
GetSettingsResponse.prototype['task'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleTemplate} template
 */
GetSettingsResponse.prototype['template'] = undefined;






export default GetSettingsResponse;
