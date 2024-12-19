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
import BaseModel from './BaseModel';

/**
 * The DealContact model module.
 * @module com.keap.sdk.core/model/DealContact
 * @version 0.0.53
 */
class DealContact {
    /**
     * Constructs a new <code>DealContact</code>.
     * Represents a contact entity in the system. Extends the BaseModel class.
     * @alias module:com.keap.sdk.core/model/DealContact
     * @implements module:com.keap.sdk.core/model/BaseModel
     * @param primaryContact {Boolean} Indicates if this contact is the primary contact. This field is required.
     */
    constructor(primaryContact) { 
        BaseModel.initialize(this);
        DealContact.initialize(this, primaryContact);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, primaryContact) { 
        obj['primary_contact'] = primaryContact;
    }

    /**
     * Constructs a <code>DealContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DealContact} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DealContact} The populated <code>DealContact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealContact();
            BaseModel.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('primary_contact')) {
                obj['primary_contact'] = ApiClient.convertToType(data['primary_contact'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DealContact</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealContact</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DealContact.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}

DealContact.RequiredProperties = ["primary_contact"];

/**
 * Unique identifier for the model.
 * @member {String} id
 */
DealContact.prototype['id'] = undefined;

/**
 * Indicates if this contact is the primary contact. This field is required.
 * @member {Boolean} primary_contact
 */
DealContact.prototype['primary_contact'] = undefined;


// Implement BaseModel interface:
/**
 * Unique identifier for the model.
 * @member {String} id
 */
BaseModel.prototype['id'] = undefined;




export default DealContact;
