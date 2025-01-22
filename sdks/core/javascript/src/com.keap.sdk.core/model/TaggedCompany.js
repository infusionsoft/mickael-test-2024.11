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
import Company from './Company';

/**
 * The TaggedCompany model module.
 * @module com.keap.sdk.core/model/TaggedCompany
 * @version 0.0.97
 */
class TaggedCompany {
    /**
     * Constructs a new <code>TaggedCompany</code>.
     * @alias module:com.keap.sdk.core/model/TaggedCompany
     */
    constructor() { 
        
        TaggedCompany.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaggedCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/TaggedCompany} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/TaggedCompany} The populated <code>TaggedCompany</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaggedCompany();

            if (data.hasOwnProperty('applied_time')) {
                obj['applied_time'] = ApiClient.convertToType(data['applied_time'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = Company.constructFromObject(data['company']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TaggedCompany</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaggedCompany</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['applied_time'] && !(typeof data['applied_time'] === 'string' || data['applied_time'] instanceof String)) {
            throw new Error("Expected the field `applied_time` to be a primitive type in the JSON string but got " + data['applied_time']);
        }
        // validate the optional field `company`
        if (data['company']) { // data not null
          Company.validateJSON(data['company']);
        }

        return true;
    }


}



/**
 * @member {String} applied_time
 */
TaggedCompany.prototype['applied_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Company} company
 */
TaggedCompany.prototype['company'] = undefined;






export default TaggedCompany;
