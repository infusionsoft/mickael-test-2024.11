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
 * The ContactUtmResponse model module.
 * @module com.keap.sdk.core/model/ContactUtmResponse
 * @version 0.0.57
 */
class ContactUtmResponse {
    /**
     * Constructs a new <code>ContactUtmResponse</code>.
     * @alias module:com.keap.sdk.core/model/ContactUtmResponse
     */
    constructor() { 
        
        ContactUtmResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactUtmResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ContactUtmResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ContactUtmResponse} The populated <code>ContactUtmResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactUtmResponse();

            if (data.hasOwnProperty('dateCreated')) {
                obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'Date');
            }
            if (data.hasOwnProperty('firstTouch')) {
                obj['firstTouch'] = ApiClient.convertToType(data['firstTouch'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('keapSourceId')) {
                obj['keapSourceId'] = ApiClient.convertToType(data['keapSourceId'], 'String');
            }
            if (data.hasOwnProperty('lastTouch')) {
                obj['lastTouch'] = ApiClient.convertToType(data['lastTouch'], 'Boolean');
            }
            if (data.hasOwnProperty('utmCampaign')) {
                obj['utmCampaign'] = ApiClient.convertToType(data['utmCampaign'], 'String');
            }
            if (data.hasOwnProperty('utmContent')) {
                obj['utmContent'] = ApiClient.convertToType(data['utmContent'], 'String');
            }
            if (data.hasOwnProperty('utmMedium')) {
                obj['utmMedium'] = ApiClient.convertToType(data['utmMedium'], 'String');
            }
            if (data.hasOwnProperty('utmSource')) {
                obj['utmSource'] = ApiClient.convertToType(data['utmSource'], 'String');
            }
            if (data.hasOwnProperty('utmTerm')) {
                obj['utmTerm'] = ApiClient.convertToType(data['utmTerm'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactUtmResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactUtmResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['keapSourceId'] && !(typeof data['keapSourceId'] === 'string' || data['keapSourceId'] instanceof String)) {
            throw new Error("Expected the field `keapSourceId` to be a primitive type in the JSON string but got " + data['keapSourceId']);
        }
        // ensure the json data is a string
        if (data['utmCampaign'] && !(typeof data['utmCampaign'] === 'string' || data['utmCampaign'] instanceof String)) {
            throw new Error("Expected the field `utmCampaign` to be a primitive type in the JSON string but got " + data['utmCampaign']);
        }
        // ensure the json data is a string
        if (data['utmContent'] && !(typeof data['utmContent'] === 'string' || data['utmContent'] instanceof String)) {
            throw new Error("Expected the field `utmContent` to be a primitive type in the JSON string but got " + data['utmContent']);
        }
        // ensure the json data is a string
        if (data['utmMedium'] && !(typeof data['utmMedium'] === 'string' || data['utmMedium'] instanceof String)) {
            throw new Error("Expected the field `utmMedium` to be a primitive type in the JSON string but got " + data['utmMedium']);
        }
        // ensure the json data is a string
        if (data['utmSource'] && !(typeof data['utmSource'] === 'string' || data['utmSource'] instanceof String)) {
            throw new Error("Expected the field `utmSource` to be a primitive type in the JSON string but got " + data['utmSource']);
        }
        // ensure the json data is a string
        if (data['utmTerm'] && !(typeof data['utmTerm'] === 'string' || data['utmTerm'] instanceof String)) {
            throw new Error("Expected the field `utmTerm` to be a primitive type in the JSON string but got " + data['utmTerm']);
        }

        return true;
    }


}



/**
 * @member {Date} dateCreated
 */
ContactUtmResponse.prototype['dateCreated'] = undefined;

/**
 * @member {Boolean} firstTouch
 */
ContactUtmResponse.prototype['firstTouch'] = undefined;

/**
 * @member {Number} id
 */
ContactUtmResponse.prototype['id'] = undefined;

/**
 * @member {String} keapSourceId
 */
ContactUtmResponse.prototype['keapSourceId'] = undefined;

/**
 * @member {Boolean} lastTouch
 */
ContactUtmResponse.prototype['lastTouch'] = undefined;

/**
 * @member {String} utmCampaign
 */
ContactUtmResponse.prototype['utmCampaign'] = undefined;

/**
 * @member {String} utmContent
 */
ContactUtmResponse.prototype['utmContent'] = undefined;

/**
 * @member {String} utmMedium
 */
ContactUtmResponse.prototype['utmMedium'] = undefined;

/**
 * @member {String} utmSource
 */
ContactUtmResponse.prototype['utmSource'] = undefined;

/**
 * @member {String} utmTerm
 */
ContactUtmResponse.prototype['utmTerm'] = undefined;






export default ContactUtmResponse;
