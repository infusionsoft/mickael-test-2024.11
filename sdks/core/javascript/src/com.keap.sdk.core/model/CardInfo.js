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
 * The CardInfo model module.
 * @module com.keap.sdk.core/model/CardInfo
 * @version 0.0.105
 */
class CardInfo {
    /**
     * Constructs a new <code>CardInfo</code>.
     * @alias module:com.keap.sdk.core/model/CardInfo
     */
    constructor() { 
        
        CardInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CardInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CardInfo} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CardInfo} The populated <code>CardInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardInfo();

            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('cardType')) {
                obj['cardType'] = ApiClient.convertToType(data['cardType'], 'String');
            }
            if (data.hasOwnProperty('expirationMonth')) {
                obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
            }
            if (data.hasOwnProperty('expirationYear')) {
                obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
            }
            if (data.hasOwnProperty('lastFour')) {
                obj['lastFour'] = ApiClient.convertToType(data['lastFour'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CardInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CardInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['brand'] && !(typeof data['brand'] === 'string' || data['brand'] instanceof String)) {
            throw new Error("Expected the field `brand` to be a primitive type in the JSON string but got " + data['brand']);
        }
        // ensure the json data is a string
        if (data['cardType'] && !(typeof data['cardType'] === 'string' || data['cardType'] instanceof String)) {
            throw new Error("Expected the field `cardType` to be a primitive type in the JSON string but got " + data['cardType']);
        }
        // ensure the json data is a string
        if (data['expirationMonth'] && !(typeof data['expirationMonth'] === 'string' || data['expirationMonth'] instanceof String)) {
            throw new Error("Expected the field `expirationMonth` to be a primitive type in the JSON string but got " + data['expirationMonth']);
        }
        // ensure the json data is a string
        if (data['expirationYear'] && !(typeof data['expirationYear'] === 'string' || data['expirationYear'] instanceof String)) {
            throw new Error("Expected the field `expirationYear` to be a primitive type in the JSON string but got " + data['expirationYear']);
        }
        // ensure the json data is a string
        if (data['lastFour'] && !(typeof data['lastFour'] === 'string' || data['lastFour'] instanceof String)) {
            throw new Error("Expected the field `lastFour` to be a primitive type in the JSON string but got " + data['lastFour']);
        }

        return true;
    }


}



/**
 * @member {String} brand
 */
CardInfo.prototype['brand'] = undefined;

/**
 * @member {String} cardType
 */
CardInfo.prototype['cardType'] = undefined;

/**
 * @member {String} expirationMonth
 */
CardInfo.prototype['expirationMonth'] = undefined;

/**
 * @member {String} expirationYear
 */
CardInfo.prototype['expirationYear'] = undefined;

/**
 * @member {String} lastFour
 */
CardInfo.prototype['lastFour'] = undefined;






export default CardInfo;
