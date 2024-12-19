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
import StageDetails from './StageDetails';

/**
 * The OpportunityStage model module.
 * @module com.keap.sdk.core/model/OpportunityStage
 * @version 0.0.52
 */
class OpportunityStage {
    /**
     * Constructs a new <code>OpportunityStage</code>.
     * @alias module:com.keap.sdk.core/model/OpportunityStage
     * @param id {String} 
     */
    constructor(id) { 
        
        OpportunityStage.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>OpportunityStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/OpportunityStage} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/OpportunityStage} The populated <code>OpportunityStage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpportunityStage();

            if (data.hasOwnProperty('details')) {
                obj['details'] = StageDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('reasons')) {
                obj['reasons'] = ApiClient.convertToType(data['reasons'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OpportunityStage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OpportunityStage</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OpportunityStage.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `details`
        if (data['details']) { // data not null
          StageDetails.validateJSON(data['details']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['reasons'])) {
            throw new Error("Expected the field `reasons` to be an array in the JSON data but got " + data['reasons']);
        }

        return true;
    }


}

OpportunityStage.RequiredProperties = ["id"];

/**
 * @member {module:com.keap.sdk.core/model/StageDetails} details
 */
OpportunityStage.prototype['details'] = undefined;

/**
 * @member {String} id
 */
OpportunityStage.prototype['id'] = undefined;

/**
 * @member {String} name
 */
OpportunityStage.prototype['name'] = undefined;

/**
 * @member {Array.<String>} reasons
 */
OpportunityStage.prototype['reasons'] = undefined;






export default OpportunityStage;
