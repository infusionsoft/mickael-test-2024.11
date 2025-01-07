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
 * The ApplicationConfigurationModuleInvoice model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleInvoice
 * @version 0.0.80
 */
class ApplicationConfigurationModuleInvoice {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleInvoice</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleInvoice
     */
    constructor() { 
        
        ApplicationConfigurationModuleInvoice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleInvoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleInvoice} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleInvoice} The populated <code>ApplicationConfigurationModuleInvoice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleInvoice();

            if (data.hasOwnProperty('tax_label')) {
                obj['tax_label'] = ApiClient.convertToType(data['tax_label'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleInvoice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleInvoice</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tax_label'] && !(typeof data['tax_label'] === 'string' || data['tax_label'] instanceof String)) {
            throw new Error("Expected the field `tax_label` to be a primitive type in the JSON string but got " + data['tax_label']);
        }

        return true;
    }


}



/**
 * @member {String} tax_label
 */
ApplicationConfigurationModuleInvoice.prototype['tax_label'] = undefined;






export default ApplicationConfigurationModuleInvoice;
