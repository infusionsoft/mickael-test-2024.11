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
 * The Origin model module.
 * @module com.keap.sdk.core/model/Origin
 * @version 0.0.23
 */
class Origin {
    /**
     * Constructs a new <code>Origin</code>.
     * @alias module:com.keap.sdk.core/model/Origin
     */
    constructor() { 
        
        Origin.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Origin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Origin} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Origin} The populated <code>Origin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Origin();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Origin</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Origin</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['date'] && !(typeof data['date'] === 'string' || data['date'] instanceof String)) {
            throw new Error("Expected the field `date` to be a primitive type in the JSON string but got " + data['date']);
        }
        // ensure the json data is a string
        if (data['ip_address'] && !(typeof data['ip_address'] === 'string' || data['ip_address'] instanceof String)) {
            throw new Error("Expected the field `ip_address` to be a primitive type in the JSON string but got " + data['ip_address']);
        }

        return true;
    }


}



/**
 * @member {String} date
 */
Origin.prototype['date'] = undefined;

/**
 * @member {String} ip_address
 */
Origin.prototype['ip_address'] = undefined;






export default Origin;
