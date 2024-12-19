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
 * The CreateContactUtmPropertiesRequest model module.
 * @module com.keap.sdk.core/model/CreateContactUtmPropertiesRequest
 * @version 0.0.57
 */
class CreateContactUtmPropertiesRequest {
    /**
     * Constructs a new <code>CreateContactUtmPropertiesRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateContactUtmPropertiesRequest
     * @param keapSourceId {String} The formId
     */
    constructor(keapSourceId) { 
        
        CreateContactUtmPropertiesRequest.initialize(this, keapSourceId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keapSourceId) { 
        obj['keap_source_id'] = keapSourceId;
    }

    /**
     * Constructs a <code>CreateContactUtmPropertiesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateContactUtmPropertiesRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateContactUtmPropertiesRequest} The populated <code>CreateContactUtmPropertiesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateContactUtmPropertiesRequest();

            if (data.hasOwnProperty('keap_source_id')) {
                obj['keap_source_id'] = ApiClient.convertToType(data['keap_source_id'], 'String');
            }
            if (data.hasOwnProperty('utm_campaign')) {
                obj['utm_campaign'] = ApiClient.convertToType(data['utm_campaign'], 'String');
            }
            if (data.hasOwnProperty('utm_content')) {
                obj['utm_content'] = ApiClient.convertToType(data['utm_content'], 'String');
            }
            if (data.hasOwnProperty('utm_medium')) {
                obj['utm_medium'] = ApiClient.convertToType(data['utm_medium'], 'String');
            }
            if (data.hasOwnProperty('utm_source')) {
                obj['utm_source'] = ApiClient.convertToType(data['utm_source'], 'String');
            }
            if (data.hasOwnProperty('utm_term')) {
                obj['utm_term'] = ApiClient.convertToType(data['utm_term'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateContactUtmPropertiesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateContactUtmPropertiesRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateContactUtmPropertiesRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['keap_source_id'] && !(typeof data['keap_source_id'] === 'string' || data['keap_source_id'] instanceof String)) {
            throw new Error("Expected the field `keap_source_id` to be a primitive type in the JSON string but got " + data['keap_source_id']);
        }
        // ensure the json data is a string
        if (data['utm_campaign'] && !(typeof data['utm_campaign'] === 'string' || data['utm_campaign'] instanceof String)) {
            throw new Error("Expected the field `utm_campaign` to be a primitive type in the JSON string but got " + data['utm_campaign']);
        }
        // ensure the json data is a string
        if (data['utm_content'] && !(typeof data['utm_content'] === 'string' || data['utm_content'] instanceof String)) {
            throw new Error("Expected the field `utm_content` to be a primitive type in the JSON string but got " + data['utm_content']);
        }
        // ensure the json data is a string
        if (data['utm_medium'] && !(typeof data['utm_medium'] === 'string' || data['utm_medium'] instanceof String)) {
            throw new Error("Expected the field `utm_medium` to be a primitive type in the JSON string but got " + data['utm_medium']);
        }
        // ensure the json data is a string
        if (data['utm_source'] && !(typeof data['utm_source'] === 'string' || data['utm_source'] instanceof String)) {
            throw new Error("Expected the field `utm_source` to be a primitive type in the JSON string but got " + data['utm_source']);
        }
        // ensure the json data is a string
        if (data['utm_term'] && !(typeof data['utm_term'] === 'string' || data['utm_term'] instanceof String)) {
            throw new Error("Expected the field `utm_term` to be a primitive type in the JSON string but got " + data['utm_term']);
        }

        return true;
    }


}

CreateContactUtmPropertiesRequest.RequiredProperties = ["keap_source_id"];

/**
 * The formId
 * @member {String} keap_source_id
 */
CreateContactUtmPropertiesRequest.prototype['keap_source_id'] = undefined;

/**
 * UTM campaign information
 * @member {String} utm_campaign
 */
CreateContactUtmPropertiesRequest.prototype['utm_campaign'] = undefined;

/**
 * UTM content information
 * @member {String} utm_content
 */
CreateContactUtmPropertiesRequest.prototype['utm_content'] = undefined;

/**
 * UTM medium information
 * @member {String} utm_medium
 */
CreateContactUtmPropertiesRequest.prototype['utm_medium'] = undefined;

/**
 * UTM source information
 * @member {String} utm_source
 */
CreateContactUtmPropertiesRequest.prototype['utm_source'] = undefined;

/**
 * UTM term information
 * @member {String} utm_term
 */
CreateContactUtmPropertiesRequest.prototype['utm_term'] = undefined;






export default CreateContactUtmPropertiesRequest;
