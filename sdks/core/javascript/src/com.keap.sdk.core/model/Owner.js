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
 * The Owner model module.
 * @module com.keap.sdk.core/model/Owner
 * @version 0.0.69
 */
class Owner {
    /**
     * Constructs a new <code>Owner</code>.
     * Represents an owner entity in the system. Extends the BaseModel class.
     * @alias module:com.keap.sdk.core/model/Owner
     * @implements module:com.keap.sdk.core/model/BaseModel
     */
    constructor() { 
        BaseModel.initialize(this);
        Owner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Owner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Owner} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Owner} The populated <code>Owner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Owner();
            BaseModel.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Owner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Owner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * Unique identifier for the model.
 * @member {String} id
 */
Owner.prototype['id'] = undefined;


// Implement BaseModel interface:
/**
 * Unique identifier for the model.
 * @member {String} id
 */
BaseModel.prototype['id'] = undefined;




export default Owner;
