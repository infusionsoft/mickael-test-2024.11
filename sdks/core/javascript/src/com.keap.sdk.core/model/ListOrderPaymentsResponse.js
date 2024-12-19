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
import InvoiceOrderPayment from './InvoiceOrderPayment';

/**
 * The ListOrderPaymentsResponse model module.
 * @module com.keap.sdk.core/model/ListOrderPaymentsResponse
 * @version 0.0.58
 */
class ListOrderPaymentsResponse {
    /**
     * Constructs a new <code>ListOrderPaymentsResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListOrderPaymentsResponse
     */
    constructor() { 
        
        ListOrderPaymentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListOrderPaymentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListOrderPaymentsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListOrderPaymentsResponse} The populated <code>ListOrderPaymentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListOrderPaymentsResponse();

            if (data.hasOwnProperty('invoice_order_payments')) {
                obj['invoice_order_payments'] = ApiClient.convertToType(data['invoice_order_payments'], [InvoiceOrderPayment]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListOrderPaymentsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListOrderPaymentsResponse</code>.
     */
    static validateJSON(data) {
        if (data['invoice_order_payments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['invoice_order_payments'])) {
                throw new Error("Expected the field `invoice_order_payments` to be an array in the JSON data but got " + data['invoice_order_payments']);
            }
            // validate the optional field `invoice_order_payments` (array)
            for (const item of data['invoice_order_payments']) {
                InvoiceOrderPayment.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/InvoiceOrderPayment>} invoice_order_payments
 */
ListOrderPaymentsResponse.prototype['invoice_order_payments'] = undefined;

/**
 * @member {String} next_page_token
 */
ListOrderPaymentsResponse.prototype['next_page_token'] = undefined;






export default ListOrderPaymentsResponse;
