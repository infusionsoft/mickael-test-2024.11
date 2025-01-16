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
import URL from './URL';

/**
 * The Resource model module.
 * @module com.keap.sdk.core/model/Resource
 * @version 0.0.88
 */
class Resource {
    /**
     * Constructs a new <code>Resource</code>.
     * @alias module:com.keap.sdk.core/model/Resource
     */
    constructor() { 
        
        Resource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Resource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Resource} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Resource} The populated <code>Resource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Resource();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = File.constructFromObject(data['file']);
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('inputStream')) {
                obj['inputStream'] = ApiClient.convertToType(data['inputStream'], Object);
            }
            if (data.hasOwnProperty('open')) {
                obj['open'] = ApiClient.convertToType(data['open'], 'Boolean');
            }
            if (data.hasOwnProperty('readable')) {
                obj['readable'] = ApiClient.convertToType(data['readable'], 'Boolean');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = 'String'.constructFromObject(data['uri']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = URL.constructFromObject(data['url']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Resource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Resource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `file`
        if (data['file']) { // data not null
          File.validateJSON(data['file']);
        }
        // ensure the json data is a string
        if (data['filename'] && !(typeof data['filename'] === 'string' || data['filename'] instanceof String)) {
            throw new Error("Expected the field `filename` to be a primitive type in the JSON string but got " + data['filename']);
        }
        // validate the optional field `uri`
        if (data['uri']) { // data not null
          String.validateJSON(data['uri']);
        }
        // validate the optional field `url`
        if (data['url']) { // data not null
          URL.validateJSON(data['url']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
Resource.prototype['description'] = undefined;

/**
 * @member {File} file
 */
Resource.prototype['file'] = undefined;

/**
 * @member {String} filename
 */
Resource.prototype['filename'] = undefined;

/**
 * @member {Object} inputStream
 */
Resource.prototype['inputStream'] = undefined;

/**
 * @member {Boolean} open
 */
Resource.prototype['open'] = undefined;

/**
 * @member {Boolean} readable
 */
Resource.prototype['readable'] = undefined;

/**
 * @member {String} uri
 */
Resource.prototype['uri'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/URL} url
 */
Resource.prototype['url'] = undefined;






export default Resource;
