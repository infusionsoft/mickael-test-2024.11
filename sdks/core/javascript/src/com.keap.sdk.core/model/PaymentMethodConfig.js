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

/**
 * The PaymentMethodConfig model module.
 * @module com.keap.sdk.core/model/PaymentMethodConfig
 * @version 0.0.88
 */
class PaymentMethodConfig {
    /**
     * Constructs a new <code>PaymentMethodConfig</code>.
     * @alias module:com.keap.sdk.core/model/PaymentMethodConfig
     */
    constructor() { 
        
        PaymentMethodConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentMethodConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PaymentMethodConfig} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PaymentMethodConfig} The populated <code>PaymentMethodConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethodConfig();

            if (data.hasOwnProperty('session_key')) {
                obj['session_key'] = ApiClient.convertToType(data['session_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentMethodConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentMethodConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['session_key'] && !(typeof data['session_key'] === 'string' || data['session_key'] instanceof String)) {
            throw new Error("Expected the field `session_key` to be a primitive type in the JSON string but got " + data['session_key']);
        }

        return true;
    }


}



/**
 * A temporary session key required for rendering Keap's payment component.
 * @member {String} session_key
 */
PaymentMethodConfig.prototype['session_key'] = undefined;






export default PaymentMethodConfig;
