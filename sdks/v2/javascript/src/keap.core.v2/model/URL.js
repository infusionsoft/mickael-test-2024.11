/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The URL model module.
 * @module keap.core.v2/model/URL
 */
class URL {
    /**
     * Constructs a new <code>URL</code>.
     * @alias module:keap.core.v2/model/URL
     */
    constructor() { 
        
        URL.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>URL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/URL} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/URL} The populated <code>URL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new URL();

            if (data.hasOwnProperty('authority')) {
                obj['authority'] = ApiClient.convertToType(data['authority'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], Object);
            }
            if (data.hasOwnProperty('defaultPort')) {
                obj['defaultPort'] = ApiClient.convertToType(data['defaultPort'], 'Number');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
            if (data.hasOwnProperty('userInfo')) {
                obj['userInfo'] = ApiClient.convertToType(data['userInfo'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>URL</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>URL</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['authority'] && !(typeof data['authority'] === 'string' || data['authority'] instanceof String)) {
            throw new Error("Expected the field `authority` to be a primitive type in the JSON string but got " + data['authority']);
        }
        // ensure the json data is a string
        if (data['file'] && !(typeof data['file'] === 'string' || data['file'] instanceof String)) {
            throw new Error("Expected the field `file` to be a primitive type in the JSON string but got " + data['file']);
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
        if (data['protocol'] && !(typeof data['protocol'] === 'string' || data['protocol'] instanceof String)) {
            throw new Error("Expected the field `protocol` to be a primitive type in the JSON string but got " + data['protocol']);
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }
        // ensure the json data is a string
        if (data['ref'] && !(typeof data['ref'] === 'string' || data['ref'] instanceof String)) {
            throw new Error("Expected the field `ref` to be a primitive type in the JSON string but got " + data['ref']);
        }
        // ensure the json data is a string
        if (data['userInfo'] && !(typeof data['userInfo'] === 'string' || data['userInfo'] instanceof String)) {
            throw new Error("Expected the field `userInfo` to be a primitive type in the JSON string but got " + data['userInfo']);
        }

        return true;
    }


}



/**
 * @member {String} authority
 */
URL.prototype['authority'] = undefined;

/**
 * @member {Object} content
 */
URL.prototype['content'] = undefined;

/**
 * @member {Number} defaultPort
 */
URL.prototype['defaultPort'] = undefined;

/**
 * @member {String} file
 */
URL.prototype['file'] = undefined;

/**
 * @member {String} host
 */
URL.prototype['host'] = undefined;

/**
 * @member {String} path
 */
URL.prototype['path'] = undefined;

/**
 * @member {Number} port
 */
URL.prototype['port'] = undefined;

/**
 * @member {String} protocol
 */
URL.prototype['protocol'] = undefined;

/**
 * @member {String} query
 */
URL.prototype['query'] = undefined;

/**
 * @member {String} ref
 */
URL.prototype['ref'] = undefined;

/**
 * @member {String} userInfo
 */
URL.prototype['userInfo'] = undefined;






export default URL;
