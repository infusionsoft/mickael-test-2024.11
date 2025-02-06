/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SubscriptionPlan from './SubscriptionPlan';

/**
 * The ListSubscriptionPlansResponse model module.
 * @module keap.sdk.core/model/ListSubscriptionPlansResponse
 */
class ListSubscriptionPlansResponse {
    /**
     * Constructs a new <code>ListSubscriptionPlansResponse</code>.
     * @alias module:keap.sdk.core/model/ListSubscriptionPlansResponse
     */
    constructor() { 
        
        ListSubscriptionPlansResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListSubscriptionPlansResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/ListSubscriptionPlansResponse} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/ListSubscriptionPlansResponse} The populated <code>ListSubscriptionPlansResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSubscriptionPlansResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], [SubscriptionPlan]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListSubscriptionPlansResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListSubscriptionPlansResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['subscriptions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subscriptions'])) {
                throw new Error("Expected the field `subscriptions` to be an array in the JSON data but got " + data['subscriptions']);
            }
            // validate the optional field `subscriptions` (array)
            for (const item of data['subscriptions']) {
                SubscriptionPlan.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListSubscriptionPlansResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:keap.sdk.core/model/SubscriptionPlan>} subscriptions
 */
ListSubscriptionPlansResponse.prototype['subscriptions'] = undefined;






export default ListSubscriptionPlansResponse;
