/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LandingPage model module.
 * @module com.keap.sdk.core/model/LandingPage
 * @version 0.0.85
 */
class LandingPage {
    /**
     * Constructs a new <code>LandingPage</code>.
     * @alias module:com.keap.sdk.core/model/LandingPage
     */
    constructor() { 
        
        LandingPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LandingPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/LandingPage} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/LandingPage} The populated <code>LandingPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LandingPage();

            if (data.hasOwnProperty('html_preview_url')) {
                obj['html_preview_url'] = ApiClient.convertToType(data['html_preview_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('template_group_status')) {
                obj['template_group_status'] = ApiClient.convertToType(data['template_group_status'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LandingPage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LandingPage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['html_preview_url'] && !(typeof data['html_preview_url'] === 'string' || data['html_preview_url'] instanceof String)) {
            throw new Error("Expected the field `html_preview_url` to be a primitive type in the JSON string but got " + data['html_preview_url']);
        }
        // ensure the json data is a string
        if (data['html_url'] && !(typeof data['html_url'] === 'string' || data['html_url'] instanceof String)) {
            throw new Error("Expected the field `html_url` to be a primitive type in the JSON string but got " + data['html_url']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['template_group_status'] && !(typeof data['template_group_status'] === 'string' || data['template_group_status'] instanceof String)) {
            throw new Error("Expected the field `template_group_status` to be a primitive type in the JSON string but got " + data['template_group_status']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * @member {String} html_preview_url
 */
LandingPage.prototype['html_preview_url'] = undefined;

/**
 * @member {String} html_url
 */
LandingPage.prototype['html_url'] = undefined;

/**
 * @member {String} id
 */
LandingPage.prototype['id'] = undefined;

/**
 * @member {String} template_group_status
 */
LandingPage.prototype['template_group_status'] = undefined;

/**
 * @member {String} title
 */
LandingPage.prototype['title'] = undefined;






export default LandingPage;
