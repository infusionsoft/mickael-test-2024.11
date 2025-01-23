/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The File model module.
 * @module com.keap.sdk.core/model/File
 * @version 0.0.104
 */
class File {
    /**
     * Constructs a new <code>File</code>.
     * @alias module:com.keap.sdk.core/model/File
     */
    constructor() { 
        
        File.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/File} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/File} The populated <code>File</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new File();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Boolean');
            }
            if (data.hasOwnProperty('absoluteFile')) {
                obj['absoluteFile'] = File.constructFromObject(data['absoluteFile']);
            }
            if (data.hasOwnProperty('absolutePath')) {
                obj['absolutePath'] = ApiClient.convertToType(data['absolutePath'], 'String');
            }
            if (data.hasOwnProperty('canonicalFile')) {
                obj['canonicalFile'] = File.constructFromObject(data['canonicalFile']);
            }
            if (data.hasOwnProperty('canonicalPath')) {
                obj['canonicalPath'] = ApiClient.convertToType(data['canonicalPath'], 'String');
            }
            if (data.hasOwnProperty('directory')) {
                obj['directory'] = ApiClient.convertToType(data['directory'], 'Boolean');
            }
            if (data.hasOwnProperty('executable')) {
                obj['executable'] = ApiClient.convertToType(data['executable'], 'Boolean');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'Boolean');
            }
            if (data.hasOwnProperty('freeSpace')) {
                obj['freeSpace'] = ApiClient.convertToType(data['freeSpace'], 'Number');
            }
            if (data.hasOwnProperty('hidden')) {
                obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
            if (data.hasOwnProperty('parentFile')) {
                obj['parentFile'] = File.constructFromObject(data['parentFile']);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('readable')) {
                obj['readable'] = ApiClient.convertToType(data['readable'], 'Boolean');
            }
            if (data.hasOwnProperty('totalSpace')) {
                obj['totalSpace'] = ApiClient.convertToType(data['totalSpace'], 'Number');
            }
            if (data.hasOwnProperty('usableSpace')) {
                obj['usableSpace'] = ApiClient.convertToType(data['usableSpace'], 'Number');
            }
            if (data.hasOwnProperty('writable')) {
                obj['writable'] = ApiClient.convertToType(data['writable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>File</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>File</code>.
     */
    static validateJSON(data) {
        // validate the optional field `absoluteFile`
        if (data['absoluteFile']) { // data not null
          File.validateJSON(data['absoluteFile']);
        }
        // ensure the json data is a string
        if (data['absolutePath'] && !(typeof data['absolutePath'] === 'string' || data['absolutePath'] instanceof String)) {
            throw new Error("Expected the field `absolutePath` to be a primitive type in the JSON string but got " + data['absolutePath']);
        }
        // validate the optional field `canonicalFile`
        if (data['canonicalFile']) { // data not null
          File.validateJSON(data['canonicalFile']);
        }
        // ensure the json data is a string
        if (data['canonicalPath'] && !(typeof data['canonicalPath'] === 'string' || data['canonicalPath'] instanceof String)) {
            throw new Error("Expected the field `canonicalPath` to be a primitive type in the JSON string but got " + data['canonicalPath']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['parent'] && !(typeof data['parent'] === 'string' || data['parent'] instanceof String)) {
            throw new Error("Expected the field `parent` to be a primitive type in the JSON string but got " + data['parent']);
        }
        // validate the optional field `parentFile`
        if (data['parentFile']) { // data not null
          File.validateJSON(data['parentFile']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}



/**
 * @member {Boolean} absolute
 */
File.prototype['absolute'] = undefined;

/**
 * @member {File} absoluteFile
 */
File.prototype['absoluteFile'] = undefined;

/**
 * @member {String} absolutePath
 */
File.prototype['absolutePath'] = undefined;

/**
 * @member {File} canonicalFile
 */
File.prototype['canonicalFile'] = undefined;

/**
 * @member {String} canonicalPath
 */
File.prototype['canonicalPath'] = undefined;

/**
 * @member {Boolean} directory
 */
File.prototype['directory'] = undefined;

/**
 * @member {Boolean} executable
 */
File.prototype['executable'] = undefined;

/**
 * @member {Boolean} file
 */
File.prototype['file'] = undefined;

/**
 * @member {Number} freeSpace
 */
File.prototype['freeSpace'] = undefined;

/**
 * @member {Boolean} hidden
 */
File.prototype['hidden'] = undefined;

/**
 * @member {Number} lastModified
 */
File.prototype['lastModified'] = undefined;

/**
 * @member {String} name
 */
File.prototype['name'] = undefined;

/**
 * @member {String} parent
 */
File.prototype['parent'] = undefined;

/**
 * @member {File} parentFile
 */
File.prototype['parentFile'] = undefined;

/**
 * @member {String} path
 */
File.prototype['path'] = undefined;

/**
 * @member {Boolean} readable
 */
File.prototype['readable'] = undefined;

/**
 * @member {Number} totalSpace
 */
File.prototype['totalSpace'] = undefined;

/**
 * @member {Number} usableSpace
 */
File.prototype['usableSpace'] = undefined;

/**
 * @member {Boolean} writable
 */
File.prototype['writable'] = undefined;






export default File;
