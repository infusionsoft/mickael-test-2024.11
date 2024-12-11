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
import StackTraceElement from './StackTraceElement';

/**
 * The Throwable model module.
 * @module com.keap.sdk.core/model/Throwable
 * @version 0.0.42
 */
class Throwable {
    /**
     * Constructs a new <code>Throwable</code>.
     * @alias module:com.keap.sdk.core/model/Throwable
     */
    constructor() { 
        
        Throwable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Throwable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Throwable} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Throwable} The populated <code>Throwable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Throwable();

            if (data.hasOwnProperty('cause')) {
                obj['cause'] = Throwable.constructFromObject(data['cause']);
            }
            if (data.hasOwnProperty('localizedMessage')) {
                obj['localizedMessage'] = ApiClient.convertToType(data['localizedMessage'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('stackTrace')) {
                obj['stackTrace'] = ApiClient.convertToType(data['stackTrace'], [StackTraceElement]);
            }
            if (data.hasOwnProperty('suppressed')) {
                obj['suppressed'] = ApiClient.convertToType(data['suppressed'], [Throwable]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Throwable</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Throwable</code>.
     */
    static validateJSON(data) {
        // validate the optional field `cause`
        if (data['cause']) { // data not null
          Throwable.validateJSON(data['cause']);
        }
        // ensure the json data is a string
        if (data['localizedMessage'] && !(typeof data['localizedMessage'] === 'string' || data['localizedMessage'] instanceof String)) {
            throw new Error("Expected the field `localizedMessage` to be a primitive type in the JSON string but got " + data['localizedMessage']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['stackTrace']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stackTrace'])) {
                throw new Error("Expected the field `stackTrace` to be an array in the JSON data but got " + data['stackTrace']);
            }
            // validate the optional field `stackTrace` (array)
            for (const item of data['stackTrace']) {
                StackTraceElement.validateJSON(item);
            };
        }
        if (data['suppressed']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['suppressed'])) {
                throw new Error("Expected the field `suppressed` to be an array in the JSON data but got " + data['suppressed']);
            }
            // validate the optional field `suppressed` (array)
            for (const item of data['suppressed']) {
                Throwable.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/Throwable} cause
 */
Throwable.prototype['cause'] = undefined;

/**
 * @member {String} localizedMessage
 */
Throwable.prototype['localizedMessage'] = undefined;

/**
 * @member {String} message
 */
Throwable.prototype['message'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/StackTraceElement>} stackTrace
 */
Throwable.prototype['stackTrace'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/Throwable>} suppressed
 */
Throwable.prototype['suppressed'] = undefined;






export default Throwable;
