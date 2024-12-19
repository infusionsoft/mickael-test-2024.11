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

/**
 * The DealAllOfCustomFields model module.
 * @module com.keap.sdk.core/model/DealAllOfCustomFields
 * @version 0.0.55
 */
class DealAllOfCustomFields {
    /**
     * Constructs a new <code>DealAllOfCustomFields</code>.
     * @alias module:com.keap.sdk.core/model/DealAllOfCustomFields
     */
    constructor() { 
        
        DealAllOfCustomFields.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealAllOfCustomFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DealAllOfCustomFields} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DealAllOfCustomFields} The populated <code>DealAllOfCustomFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealAllOfCustomFields();

        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DealAllOfCustomFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealAllOfCustomFields</code>.
     */
    static validateJSON(data) {

        return true;
    }


}








export default DealAllOfCustomFields;
