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
import CustomField from './CustomField';
import OpportunityContact from './OpportunityContact';
import OpportunityStage from './OpportunityStage';
import RestV2User from './RestV2User';

/**
 * The RestV2Opportunity model module.
 * @module com.keap.sdk.core/model/RestV2Opportunity
 * @version 0.0.68
 */
class RestV2Opportunity {
    /**
     * Constructs a new <code>RestV2Opportunity</code>.
     * @alias module:com.keap.sdk.core/model/RestV2Opportunity
     * @param contact {module:com.keap.sdk.core/model/OpportunityContact} 
     * @param opportunityTitle {String} 
     * @param stage {module:com.keap.sdk.core/model/OpportunityStage} 
     */
    constructor(contact, opportunityTitle, stage) { 
        
        RestV2Opportunity.initialize(this, contact, opportunityTitle, stage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contact, opportunityTitle, stage) { 
        obj['contact'] = contact;
        obj['opportunity_title'] = opportunityTitle;
        obj['stage'] = stage;
    }

    /**
     * Constructs a <code>RestV2Opportunity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestV2Opportunity} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestV2Opportunity} The populated <code>RestV2Opportunity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestV2Opportunity();

            if (data.hasOwnProperty('affiliate_id')) {
                obj['affiliate_id'] = ApiClient.convertToType(data['affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = OpportunityContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'String');
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [CustomField]);
            }
            if (data.hasOwnProperty('estimated_close_time')) {
                obj['estimated_close_time'] = ApiClient.convertToType(data['estimated_close_time'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('include_in_forecast')) {
                obj['include_in_forecast'] = ApiClient.convertToType(data['include_in_forecast'], 'Boolean');
            }
            if (data.hasOwnProperty('last_updated_time')) {
                obj['last_updated_time'] = ApiClient.convertToType(data['last_updated_time'], 'String');
            }
            if (data.hasOwnProperty('next_action_notes')) {
                obj['next_action_notes'] = ApiClient.convertToType(data['next_action_notes'], 'String');
            }
            if (data.hasOwnProperty('next_action_time')) {
                obj['next_action_time'] = ApiClient.convertToType(data['next_action_time'], 'String');
            }
            if (data.hasOwnProperty('opportunity_notes')) {
                obj['opportunity_notes'] = ApiClient.convertToType(data['opportunity_notes'], 'String');
            }
            if (data.hasOwnProperty('opportunity_title')) {
                obj['opportunity_title'] = ApiClient.convertToType(data['opportunity_title'], 'String');
            }
            if (data.hasOwnProperty('projected_revenue_high')) {
                obj['projected_revenue_high'] = ApiClient.convertToType(data['projected_revenue_high'], 'Number');
            }
            if (data.hasOwnProperty('projected_revenue_low')) {
                obj['projected_revenue_low'] = ApiClient.convertToType(data['projected_revenue_low'], 'Number');
            }
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = OpportunityStage.constructFromObject(data['stage']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = RestV2User.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2Opportunity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2Opportunity</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RestV2Opportunity.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['affiliate_id'] && !(typeof data['affiliate_id'] === 'string' || data['affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `affiliate_id` to be a primitive type in the JSON string but got " + data['affiliate_id']);
        }
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          OpportunityContact.validateJSON(data['contact']);
        }
        // ensure the json data is a string
        if (data['created_time'] && !(typeof data['created_time'] === 'string' || data['created_time'] instanceof String)) {
            throw new Error("Expected the field `created_time` to be a primitive type in the JSON string but got " + data['created_time']);
        }
        if (data['custom_fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['custom_fields'])) {
                throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
            }
            // validate the optional field `custom_fields` (array)
            for (const item of data['custom_fields']) {
                CustomField.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['estimated_close_time'] && !(typeof data['estimated_close_time'] === 'string' || data['estimated_close_time'] instanceof String)) {
            throw new Error("Expected the field `estimated_close_time` to be a primitive type in the JSON string but got " + data['estimated_close_time']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['last_updated_time'] && !(typeof data['last_updated_time'] === 'string' || data['last_updated_time'] instanceof String)) {
            throw new Error("Expected the field `last_updated_time` to be a primitive type in the JSON string but got " + data['last_updated_time']);
        }
        // ensure the json data is a string
        if (data['next_action_notes'] && !(typeof data['next_action_notes'] === 'string' || data['next_action_notes'] instanceof String)) {
            throw new Error("Expected the field `next_action_notes` to be a primitive type in the JSON string but got " + data['next_action_notes']);
        }
        // ensure the json data is a string
        if (data['next_action_time'] && !(typeof data['next_action_time'] === 'string' || data['next_action_time'] instanceof String)) {
            throw new Error("Expected the field `next_action_time` to be a primitive type in the JSON string but got " + data['next_action_time']);
        }
        // ensure the json data is a string
        if (data['opportunity_notes'] && !(typeof data['opportunity_notes'] === 'string' || data['opportunity_notes'] instanceof String)) {
            throw new Error("Expected the field `opportunity_notes` to be a primitive type in the JSON string but got " + data['opportunity_notes']);
        }
        // ensure the json data is a string
        if (data['opportunity_title'] && !(typeof data['opportunity_title'] === 'string' || data['opportunity_title'] instanceof String)) {
            throw new Error("Expected the field `opportunity_title` to be a primitive type in the JSON string but got " + data['opportunity_title']);
        }
        // validate the optional field `stage`
        if (data['stage']) { // data not null
          OpportunityStage.validateJSON(data['stage']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          RestV2User.validateJSON(data['user']);
        }

        return true;
    }


}

RestV2Opportunity.RequiredProperties = ["contact", "opportunity_title", "stage"];

/**
 * @member {String} affiliate_id
 */
RestV2Opportunity.prototype['affiliate_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/OpportunityContact} contact
 */
RestV2Opportunity.prototype['contact'] = undefined;

/**
 * @member {String} created_time
 */
RestV2Opportunity.prototype['created_time'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomField>} custom_fields
 */
RestV2Opportunity.prototype['custom_fields'] = undefined;

/**
 * @member {String} estimated_close_time
 */
RestV2Opportunity.prototype['estimated_close_time'] = undefined;

/**
 * @member {String} id
 */
RestV2Opportunity.prototype['id'] = undefined;

/**
 * @member {Boolean} include_in_forecast
 */
RestV2Opportunity.prototype['include_in_forecast'] = undefined;

/**
 * @member {String} last_updated_time
 */
RestV2Opportunity.prototype['last_updated_time'] = undefined;

/**
 * @member {String} next_action_notes
 */
RestV2Opportunity.prototype['next_action_notes'] = undefined;

/**
 * @member {String} next_action_time
 */
RestV2Opportunity.prototype['next_action_time'] = undefined;

/**
 * @member {String} opportunity_notes
 */
RestV2Opportunity.prototype['opportunity_notes'] = undefined;

/**
 * @member {String} opportunity_title
 */
RestV2Opportunity.prototype['opportunity_title'] = undefined;

/**
 * @member {Number} projected_revenue_high
 */
RestV2Opportunity.prototype['projected_revenue_high'] = undefined;

/**
 * @member {Number} projected_revenue_low
 */
RestV2Opportunity.prototype['projected_revenue_low'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/OpportunityStage} stage
 */
RestV2Opportunity.prototype['stage'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestV2User} user
 */
RestV2Opportunity.prototype['user'] = undefined;






export default RestV2Opportunity;
