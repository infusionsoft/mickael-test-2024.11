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
import DealStatus from './DealStatus';

/**
 * The PipelineOutcomeLabel model module.
 * @module com.keap.sdk.core/model/PipelineOutcomeLabel
 * @version 0.0.64
 */
class PipelineOutcomeLabel {
    /**
     * Constructs a new <code>PipelineOutcomeLabel</code>.
     * Represents a label for a pipeline outcome.
     * @alias module:com.keap.sdk.core/model/PipelineOutcomeLabel
     * @param value {module:com.keap.sdk.core/model/DealStatus} The status of the deal. This field is required.
     */
    constructor(value) { 
        
        PipelineOutcomeLabel.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['value'] = value;
    }

    /**
     * Constructs a <code>PipelineOutcomeLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PipelineOutcomeLabel} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PipelineOutcomeLabel} The populated <code>PipelineOutcomeLabel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineOutcomeLabel();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], DealStatus);
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineOutcomeLabel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineOutcomeLabel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PipelineOutcomeLabel.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }

        return true;
    }


}

PipelineOutcomeLabel.RequiredProperties = ["value"];

/**
 * The status of the deal. This field is required.
 * @member {module:com.keap.sdk.core/model/DealStatus} value
 */
PipelineOutcomeLabel.prototype['value'] = undefined;

/**
 * The label for the outcome. This field is optional but must have at least one character if provided.
 * @member {String} label
 */
PipelineOutcomeLabel.prototype['label'] = undefined;






export default PipelineOutcomeLabel;
