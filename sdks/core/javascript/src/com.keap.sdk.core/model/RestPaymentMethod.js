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
import CardInfo from './CardInfo';

/**
 * The RestPaymentMethod model module.
 * @module com.keap.sdk.core/model/RestPaymentMethod
 * @version 0.0.26
 */
class RestPaymentMethod {
    /**
     * Constructs a new <code>RestPaymentMethod</code>.
     * @alias module:com.keap.sdk.core/model/RestPaymentMethod
     */
    constructor() { 
        
        RestPaymentMethod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestPaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestPaymentMethod} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestPaymentMethod} The populated <code>RestPaymentMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestPaymentMethod();

            if (data.hasOwnProperty('cardInfo')) {
                obj['cardInfo'] = CardInfo.constructFromObject(data['cardInfo']);
            }
            if (data.hasOwnProperty('dateCreated')) {
                obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('paymentMethodType')) {
                obj['paymentMethodType'] = ApiClient.convertToType(data['paymentMethodType'], 'String');
            }
            if (data.hasOwnProperty('processorId')) {
                obj['processorId'] = ApiClient.convertToType(data['processorId'], 'String');
            }
            if (data.hasOwnProperty('processorType')) {
                obj['processorType'] = ApiClient.convertToType(data['processorType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestPaymentMethod</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestPaymentMethod</code>.
     */
    static validateJSON(data) {
        // validate the optional field `cardInfo`
        if (data['cardInfo']) { // data not null
          CardInfo.validateJSON(data['cardInfo']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['paymentMethodType'] && !(typeof data['paymentMethodType'] === 'string' || data['paymentMethodType'] instanceof String)) {
            throw new Error("Expected the field `paymentMethodType` to be a primitive type in the JSON string but got " + data['paymentMethodType']);
        }
        // ensure the json data is a string
        if (data['processorId'] && !(typeof data['processorId'] === 'string' || data['processorId'] instanceof String)) {
            throw new Error("Expected the field `processorId` to be a primitive type in the JSON string but got " + data['processorId']);
        }
        // ensure the json data is a string
        if (data['processorType'] && !(typeof data['processorType'] === 'string' || data['processorType'] instanceof String)) {
            throw new Error("Expected the field `processorType` to be a primitive type in the JSON string but got " + data['processorType']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/CardInfo} cardInfo
 */
RestPaymentMethod.prototype['cardInfo'] = undefined;

/**
 * @member {Date} dateCreated
 */
RestPaymentMethod.prototype['dateCreated'] = undefined;

/**
 * @member {String} id
 */
RestPaymentMethod.prototype['id'] = undefined;

/**
 * @member {String} paymentMethodType
 */
RestPaymentMethod.prototype['paymentMethodType'] = undefined;

/**
 * @member {String} processorId
 */
RestPaymentMethod.prototype['processorId'] = undefined;

/**
 * @member {String} processorType
 */
RestPaymentMethod.prototype['processorType'] = undefined;






export default RestPaymentMethod;
