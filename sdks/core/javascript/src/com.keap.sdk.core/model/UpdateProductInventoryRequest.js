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
 * The UpdateProductInventoryRequest model module.
 * @module com.keap.sdk.core/model/UpdateProductInventoryRequest
 * @version 0.0.68
 */
class UpdateProductInventoryRequest {
    /**
     * Constructs a new <code>UpdateProductInventoryRequest</code>.
     * @alias module:com.keap.sdk.core/model/UpdateProductInventoryRequest
     */
    constructor() { 
        
        UpdateProductInventoryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateProductInventoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateProductInventoryRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateProductInventoryRequest} The populated <code>UpdateProductInventoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProductInventoryRequest();

            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateProductInventoryRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateProductInventoryRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {Number} quantity
 */
UpdateProductInventoryRequest.prototype['quantity'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/UpdateProductInventoryRequest.TypeEnum} type
 */
UpdateProductInventoryRequest.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
UpdateProductInventoryRequest['TypeEnum'] = {

    /**
     * value: "INCREASE"
     * @const
     */
    "INCREASE": "INCREASE",

    /**
     * value: "DECREASE"
     * @const
     */
    "DECREASE": "DECREASE",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default UpdateProductInventoryRequest;
