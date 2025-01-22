/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InvoiceOrderPayment model module.
 * @module com.keap.sdk.core/model/InvoiceOrderPayment
 * @version 0.0.98
 */
class InvoiceOrderPayment {
    /**
     * Constructs a new <code>InvoiceOrderPayment</code>.
     * @alias module:com.keap.sdk.core/model/InvoiceOrderPayment
     */
    constructor() { 
        
        InvoiceOrderPayment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceOrderPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/InvoiceOrderPayment} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/InvoiceOrderPayment} The populated <code>InvoiceOrderPayment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceOrderPayment();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('invoice_id')) {
                obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'String');
            }
            if (data.hasOwnProperty('last_updated_time')) {
                obj['last_updated_time'] = ApiClient.convertToType(data['last_updated_time'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('pay_status')) {
                obj['pay_status'] = ApiClient.convertToType(data['pay_status'], 'String');
            }
            if (data.hasOwnProperty('pay_time')) {
                obj['pay_time'] = ApiClient.convertToType(data['pay_time'], 'String');
            }
            if (data.hasOwnProperty('payment_id')) {
                obj['payment_id'] = ApiClient.convertToType(data['payment_id'], 'String');
            }
            if (data.hasOwnProperty('refund_invoice_payment_id')) {
                obj['refund_invoice_payment_id'] = ApiClient.convertToType(data['refund_invoice_payment_id'], 'String');
            }
            if (data.hasOwnProperty('skip_commission')) {
                obj['skip_commission'] = ApiClient.convertToType(data['skip_commission'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceOrderPayment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceOrderPayment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['invoice_id'] && !(typeof data['invoice_id'] === 'string' || data['invoice_id'] instanceof String)) {
            throw new Error("Expected the field `invoice_id` to be a primitive type in the JSON string but got " + data['invoice_id']);
        }
        // ensure the json data is a string
        if (data['last_updated_time'] && !(typeof data['last_updated_time'] === 'string' || data['last_updated_time'] instanceof String)) {
            throw new Error("Expected the field `last_updated_time` to be a primitive type in the JSON string but got " + data['last_updated_time']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }
        // ensure the json data is a string
        if (data['pay_status'] && !(typeof data['pay_status'] === 'string' || data['pay_status'] instanceof String)) {
            throw new Error("Expected the field `pay_status` to be a primitive type in the JSON string but got " + data['pay_status']);
        }
        // ensure the json data is a string
        if (data['pay_time'] && !(typeof data['pay_time'] === 'string' || data['pay_time'] instanceof String)) {
            throw new Error("Expected the field `pay_time` to be a primitive type in the JSON string but got " + data['pay_time']);
        }
        // ensure the json data is a string
        if (data['payment_id'] && !(typeof data['payment_id'] === 'string' || data['payment_id'] instanceof String)) {
            throw new Error("Expected the field `payment_id` to be a primitive type in the JSON string but got " + data['payment_id']);
        }
        // ensure the json data is a string
        if (data['refund_invoice_payment_id'] && !(typeof data['refund_invoice_payment_id'] === 'string' || data['refund_invoice_payment_id'] instanceof String)) {
            throw new Error("Expected the field `refund_invoice_payment_id` to be a primitive type in the JSON string but got " + data['refund_invoice_payment_id']);
        }

        return true;
    }


}



/**
 * @member {Number} amount
 */
InvoiceOrderPayment.prototype['amount'] = undefined;

/**
 * @member {String} id
 */
InvoiceOrderPayment.prototype['id'] = undefined;

/**
 * @member {String} invoice_id
 */
InvoiceOrderPayment.prototype['invoice_id'] = undefined;

/**
 * @member {String} last_updated_time
 */
InvoiceOrderPayment.prototype['last_updated_time'] = undefined;

/**
 * @member {String} note
 */
InvoiceOrderPayment.prototype['note'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/InvoiceOrderPayment.PayStatusEnum} pay_status
 */
InvoiceOrderPayment.prototype['pay_status'] = undefined;

/**
 * @member {String} pay_time
 */
InvoiceOrderPayment.prototype['pay_time'] = undefined;

/**
 * @member {String} payment_id
 */
InvoiceOrderPayment.prototype['payment_id'] = undefined;

/**
 * @member {String} refund_invoice_payment_id
 */
InvoiceOrderPayment.prototype['refund_invoice_payment_id'] = undefined;

/**
 * @member {Boolean} skip_commission
 */
InvoiceOrderPayment.prototype['skip_commission'] = undefined;





/**
 * Allowed values for the <code>pay_status</code> property.
 * @enum {String}
 * @readonly
 */
InvoiceOrderPayment['PayStatusEnum'] = {

    /**
     * value: "MANUAL_PAID"
     * @const
     */
    "MANUAL_PAID": "MANUAL_PAID",

    /**
     * value: "REFUNDED"
     * @const
     */
    "REFUNDED": "REFUNDED",

    /**
     * value: "VOIDED"
     * @const
     */
    "VOIDED": "VOIDED",

    /**
     * value: "PAYPAL_PAID"
     * @const
     */
    "PAYPAL_PAID": "PAYPAL_PAID",

    /**
     * value: "APPROVED"
     * @const
     */
    "APPROVED": "APPROVED",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",

    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR",

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default InvoiceOrderPayment;
