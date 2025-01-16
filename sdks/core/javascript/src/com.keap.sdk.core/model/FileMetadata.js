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
 * The FileMetadata model module.
 * @module com.keap.sdk.core/model/FileMetadata
 * @version 0.0.88
 */
class FileMetadata {
    /**
     * Constructs a new <code>FileMetadata</code>.
     * @alias module:com.keap.sdk.core/model/FileMetadata
     */
    constructor() { 
        
        FileMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/FileMetadata} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/FileMetadata} The populated <code>FileMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileMetadata();

            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('created_by_id')) {
                obj['created_by_id'] = ApiClient.convertToType(data['created_by_id'], 'String');
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'String');
            }
            if (data.hasOwnProperty('file_box_type')) {
                obj['file_box_type'] = ApiClient.convertToType(data['file_box_type'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('file_size')) {
                obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
            if (data.hasOwnProperty('remote_file_key')) {
                obj['remote_file_key'] = ApiClient.convertToType(data['remote_file_key'], 'String');
            }
            if (data.hasOwnProperty('updated_time')) {
                obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileMetadata</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['created_by_id'] && !(typeof data['created_by_id'] === 'string' || data['created_by_id'] instanceof String)) {
            throw new Error("Expected the field `created_by_id` to be a primitive type in the JSON string but got " + data['created_by_id']);
        }
        // ensure the json data is a string
        if (data['created_time'] && !(typeof data['created_time'] === 'string' || data['created_time'] instanceof String)) {
            throw new Error("Expected the field `created_time` to be a primitive type in the JSON string but got " + data['created_time']);
        }
        // ensure the json data is a string
        if (data['file_box_type'] && !(typeof data['file_box_type'] === 'string' || data['file_box_type'] instanceof String)) {
            throw new Error("Expected the field `file_box_type` to be a primitive type in the JSON string but got " + data['file_box_type']);
        }
        // ensure the json data is a string
        if (data['file_name'] && !(typeof data['file_name'] === 'string' || data['file_name'] instanceof String)) {
            throw new Error("Expected the field `file_name` to be a primitive type in the JSON string but got " + data['file_name']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['remote_file_key'] && !(typeof data['remote_file_key'] === 'string' || data['remote_file_key'] instanceof String)) {
            throw new Error("Expected the field `remote_file_key` to be a primitive type in the JSON string but got " + data['remote_file_key']);
        }
        // ensure the json data is a string
        if (data['updated_time'] && !(typeof data['updated_time'] === 'string' || data['updated_time'] instanceof String)) {
            throw new Error("Expected the field `updated_time` to be a primitive type in the JSON string but got " + data['updated_time']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/FileMetadata.CategoryEnum} category
 */
FileMetadata.prototype['category'] = undefined;

/**
 * @member {String} contact_id
 */
FileMetadata.prototype['contact_id'] = undefined;

/**
 * @member {String} created_by_id
 */
FileMetadata.prototype['created_by_id'] = undefined;

/**
 * @member {String} created_time
 */
FileMetadata.prototype['created_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/FileMetadata.FileBoxTypeEnum} file_box_type
 */
FileMetadata.prototype['file_box_type'] = undefined;

/**
 * @member {String} file_name
 */
FileMetadata.prototype['file_name'] = undefined;

/**
 * @member {Number} file_size
 */
FileMetadata.prototype['file_size'] = undefined;

/**
 * @member {String} id
 */
FileMetadata.prototype['id'] = undefined;

/**
 * @member {Boolean} is_public
 */
FileMetadata.prototype['is_public'] = undefined;

/**
 * @member {String} remote_file_key
 */
FileMetadata.prototype['remote_file_key'] = undefined;

/**
 * @member {String} updated_time
 */
FileMetadata.prototype['updated_time'] = undefined;





/**
 * Allowed values for the <code>category</code> property.
 * @enum {String}
 * @readonly
 */
FileMetadata['CategoryEnum'] = {

    /**
     * value: "ATTACHMENTS"
     * @const
     */
    "ATTACHMENTS": "ATTACHMENTS",

    /**
     * value: "CART"
     * @const
     */
    "CART": "CART",

    /**
     * value: "DOCUMENTS"
     * @const
     */
    "DOCUMENTS": "DOCUMENTS",

    /**
     * value: "HIDDEN"
     * @const
     */
    "HIDDEN": "HIDDEN",

    /**
     * value: "INVOICE"
     * @const
     */
    "INVOICE": "INVOICE",

    /**
     * value: "LOGO"
     * @const
     */
    "LOGO": "LOGO",

    /**
     * value: "TICKETS"
     * @const
     */
    "TICKETS": "TICKETS",

    /**
     * value: "WEB_FORM"
     * @const
     */
    "WEB_FORM": "WEB_FORM",

    /**
     * value: "FUNNEL"
     * @const
     */
    "FUNNEL": "FUNNEL",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>file_box_type</code> property.
 * @enum {String}
 * @readonly
 */
FileMetadata['FileBoxTypeEnum'] = {

    /**
     * value: "APPLICATION"
     * @const
     */
    "APPLICATION": "APPLICATION",

    /**
     * value: "IMAGE"
     * @const
     */
    "IMAGE": "IMAGE",

    /**
     * value: "FAX"
     * @const
     */
    "FAX": "FAX",

    /**
     * value: "ATTACHMENT"
     * @const
     */
    "ATTACHMENT": "ATTACHMENT",

    /**
     * value: "TICKET"
     * @const
     */
    "TICKET": "TICKET",

    /**
     * value: "CONTACT"
     * @const
     */
    "CONTACT": "CONTACT",

    /**
     * value: "DIGITAL_PRODUCT"
     * @const
     */
    "DIGITAL_PRODUCT": "DIGITAL_PRODUCT",

    /**
     * value: "IMPORT"
     * @const
     */
    "IMPORT": "IMPORT",

    /**
     * value: "HIDDEN"
     * @const
     */
    "HIDDEN": "HIDDEN",

    /**
     * value: "WEB_FORM"
     * @const
     */
    "WEB_FORM": "WEB_FORM",

    /**
     * value: "STYLED_CART"
     * @const
     */
    "STYLED_CART": "STYLED_CART",

    /**
     * value: "RESAMPLED_IMAGE"
     * @const
     */
    "RESAMPLED_IMAGE": "RESAMPLED_IMAGE",

    /**
     * value: "TEMPLATE_THUMBNAIL"
     * @const
     */
    "TEMPLATE_THUMBNAIL": "TEMPLATE_THUMBNAIL",

    /**
     * value: "FUNNEL"
     * @const
     */
    "FUNNEL": "FUNNEL",

    /**
     * value: "LOGO_THUMBNAIL"
     * @const
     */
    "LOGO_THUMBNAIL": "LOGO_THUMBNAIL",

    /**
     * value: "UNLAYER"
     * @const
     */
    "UNLAYER": "UNLAYER",

    /**
     * value: "BRANDING_CENTER_LOGO"
     * @const
     */
    "BRANDING_CENTER_LOGO": "BRANDING_CENTER_LOGO",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default FileMetadata;
