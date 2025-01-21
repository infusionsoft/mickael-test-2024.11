/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EmailAddressRequest from './EmailAddressRequest';

/**
 * The CreateUserRequestV2 model module.
 * @module com.keap.sdk.core/model/CreateUserRequestV2
 * @version 0.0.94
 */
class CreateUserRequestV2 {
    /**
     * Constructs a new <code>CreateUserRequestV2</code>.
     * @alias module:com.keap.sdk.core/model/CreateUserRequestV2
     * @param emailAddress {module:com.keap.sdk.core/model/EmailAddressRequest} 
     * @param givenName {String} 
     */
    constructor(emailAddress, givenName) { 
        
        CreateUserRequestV2.initialize(this, emailAddress, givenName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, emailAddress, givenName) { 
        obj['email_address'] = emailAddress;
        obj['given_name'] = givenName;
    }

    /**
     * Constructs a <code>CreateUserRequestV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateUserRequestV2} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateUserRequestV2} The populated <code>CreateUserRequestV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserRequestV2();

            if (data.hasOwnProperty('admin')) {
                obj['admin'] = ApiClient.convertToType(data['admin'], 'Boolean');
            }
            if (data.hasOwnProperty('email_address')) {
                obj['email_address'] = EmailAddressRequest.constructFromObject(data['email_address']);
            }
            if (data.hasOwnProperty('given_name')) {
                obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
            }
            if (data.hasOwnProperty('partner')) {
                obj['partner'] = ApiClient.convertToType(data['partner'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateUserRequestV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateUserRequestV2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateUserRequestV2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `email_address`
        if (data['email_address']) { // data not null
          EmailAddressRequest.validateJSON(data['email_address']);
        }
        // ensure the json data is a string
        if (data['given_name'] && !(typeof data['given_name'] === 'string' || data['given_name'] instanceof String)) {
            throw new Error("Expected the field `given_name` to be a primitive type in the JSON string but got " + data['given_name']);
        }

        return true;
    }


}

CreateUserRequestV2.RequiredProperties = ["email_address", "given_name"];

/**
 * @member {Boolean} admin
 */
CreateUserRequestV2.prototype['admin'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/EmailAddressRequest} email_address
 */
CreateUserRequestV2.prototype['email_address'] = undefined;

/**
 * @member {String} given_name
 */
CreateUserRequestV2.prototype['given_name'] = undefined;

/**
 * @member {Boolean} partner
 */
CreateUserRequestV2.prototype['partner'] = undefined;






export default CreateUserRequestV2;
