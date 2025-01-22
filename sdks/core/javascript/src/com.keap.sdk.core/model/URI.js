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
 * The URI model module.
 * @module com.keap.sdk.core/model/URI
 * @version 0.0.99
 */
class URI {
    /**
     * Constructs a new <code>URI</code>.
     * @alias module:com.keap.sdk.core/model/URI
     */
    constructor() { 
        
        URI.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>URI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/URI} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/URI} The populated <code>URI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new URI();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Boolean');
            }
            if (data.hasOwnProperty('authority')) {
                obj['authority'] = ApiClient.convertToType(data['authority'], 'String');
            }
            if (data.hasOwnProperty('fragment')) {
                obj['fragment'] = ApiClient.convertToType(data['fragment'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('opaque')) {
                obj['opaque'] = ApiClient.convertToType(data['opaque'], 'Boolean');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('rawAuthority')) {
                obj['rawAuthority'] = ApiClient.convertToType(data['rawAuthority'], 'String');
            }
            if (data.hasOwnProperty('rawFragment')) {
                obj['rawFragment'] = ApiClient.convertToType(data['rawFragment'], 'String');
            }
            if (data.hasOwnProperty('rawPath')) {
                obj['rawPath'] = ApiClient.convertToType(data['rawPath'], 'String');
            }
            if (data.hasOwnProperty('rawQuery')) {
                obj['rawQuery'] = ApiClient.convertToType(data['rawQuery'], 'String');
            }
            if (data.hasOwnProperty('rawSchemeSpecificPart')) {
                obj['rawSchemeSpecificPart'] = ApiClient.convertToType(data['rawSchemeSpecificPart'], 'String');
            }
            if (data.hasOwnProperty('rawUserInfo')) {
                obj['rawUserInfo'] = ApiClient.convertToType(data['rawUserInfo'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
            if (data.hasOwnProperty('schemeSpecificPart')) {
                obj['schemeSpecificPart'] = ApiClient.convertToType(data['schemeSpecificPart'], 'String');
            }
            if (data.hasOwnProperty('userInfo')) {
                obj['userInfo'] = ApiClient.convertToType(data['userInfo'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>URI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>URI</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['authority'] && !(typeof data['authority'] === 'string' || data['authority'] instanceof String)) {
            throw new Error("Expected the field `authority` to be a primitive type in the JSON string but got " + data['authority']);
        }
        // ensure the json data is a string
        if (data['fragment'] && !(typeof data['fragment'] === 'string' || data['fragment'] instanceof String)) {
            throw new Error("Expected the field `fragment` to be a primitive type in the JSON string but got " + data['fragment']);
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }
        // ensure the json data is a string
        if (data['rawAuthority'] && !(typeof data['rawAuthority'] === 'string' || data['rawAuthority'] instanceof String)) {
            throw new Error("Expected the field `rawAuthority` to be a primitive type in the JSON string but got " + data['rawAuthority']);
        }
        // ensure the json data is a string
        if (data['rawFragment'] && !(typeof data['rawFragment'] === 'string' || data['rawFragment'] instanceof String)) {
            throw new Error("Expected the field `rawFragment` to be a primitive type in the JSON string but got " + data['rawFragment']);
        }
        // ensure the json data is a string
        if (data['rawPath'] && !(typeof data['rawPath'] === 'string' || data['rawPath'] instanceof String)) {
            throw new Error("Expected the field `rawPath` to be a primitive type in the JSON string but got " + data['rawPath']);
        }
        // ensure the json data is a string
        if (data['rawQuery'] && !(typeof data['rawQuery'] === 'string' || data['rawQuery'] instanceof String)) {
            throw new Error("Expected the field `rawQuery` to be a primitive type in the JSON string but got " + data['rawQuery']);
        }
        // ensure the json data is a string
        if (data['rawSchemeSpecificPart'] && !(typeof data['rawSchemeSpecificPart'] === 'string' || data['rawSchemeSpecificPart'] instanceof String)) {
            throw new Error("Expected the field `rawSchemeSpecificPart` to be a primitive type in the JSON string but got " + data['rawSchemeSpecificPart']);
        }
        // ensure the json data is a string
        if (data['rawUserInfo'] && !(typeof data['rawUserInfo'] === 'string' || data['rawUserInfo'] instanceof String)) {
            throw new Error("Expected the field `rawUserInfo` to be a primitive type in the JSON string but got " + data['rawUserInfo']);
        }
        // ensure the json data is a string
        if (data['scheme'] && !(typeof data['scheme'] === 'string' || data['scheme'] instanceof String)) {
            throw new Error("Expected the field `scheme` to be a primitive type in the JSON string but got " + data['scheme']);
        }
        // ensure the json data is a string
        if (data['schemeSpecificPart'] && !(typeof data['schemeSpecificPart'] === 'string' || data['schemeSpecificPart'] instanceof String)) {
            throw new Error("Expected the field `schemeSpecificPart` to be a primitive type in the JSON string but got " + data['schemeSpecificPart']);
        }
        // ensure the json data is a string
        if (data['userInfo'] && !(typeof data['userInfo'] === 'string' || data['userInfo'] instanceof String)) {
            throw new Error("Expected the field `userInfo` to be a primitive type in the JSON string but got " + data['userInfo']);
        }

        return true;
    }


}



/**
 * @member {Boolean} absolute
 */
URI.prototype['absolute'] = undefined;

/**
 * @member {String} authority
 */
URI.prototype['authority'] = undefined;

/**
 * @member {String} fragment
 */
URI.prototype['fragment'] = undefined;

/**
 * @member {String} host
 */
URI.prototype['host'] = undefined;

/**
 * @member {Boolean} opaque
 */
URI.prototype['opaque'] = undefined;

/**
 * @member {String} path
 */
URI.prototype['path'] = undefined;

/**
 * @member {Number} port
 */
URI.prototype['port'] = undefined;

/**
 * @member {String} query
 */
URI.prototype['query'] = undefined;

/**
 * @member {String} rawAuthority
 */
URI.prototype['rawAuthority'] = undefined;

/**
 * @member {String} rawFragment
 */
URI.prototype['rawFragment'] = undefined;

/**
 * @member {String} rawPath
 */
URI.prototype['rawPath'] = undefined;

/**
 * @member {String} rawQuery
 */
URI.prototype['rawQuery'] = undefined;

/**
 * @member {String} rawSchemeSpecificPart
 */
URI.prototype['rawSchemeSpecificPart'] = undefined;

/**
 * @member {String} rawUserInfo
 */
URI.prototype['rawUserInfo'] = undefined;

/**
 * @member {String} scheme
 */
URI.prototype['scheme'] = undefined;

/**
 * @member {String} schemeSpecificPart
 */
URI.prototype['schemeSpecificPart'] = undefined;

/**
 * @member {String} userInfo
 */
URI.prototype['userInfo'] = undefined;






export default URI;
