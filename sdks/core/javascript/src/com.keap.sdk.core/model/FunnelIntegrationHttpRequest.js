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
 * The FunnelIntegrationHttpRequest model module.
 * @module com.keap.sdk.core/model/FunnelIntegrationHttpRequest
 * @version 0.0.71
 */
class FunnelIntegrationHttpRequest {
    /**
     * Constructs a new <code>FunnelIntegrationHttpRequest</code>.
     * @alias module:com.keap.sdk.core/model/FunnelIntegrationHttpRequest
     */
    constructor() { 
        
        FunnelIntegrationHttpRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FunnelIntegrationHttpRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/FunnelIntegrationHttpRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/FunnelIntegrationHttpRequest} The populated <code>FunnelIntegrationHttpRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunnelIntegrationHttpRequest();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('call_type')) {
                obj['call_type'] = ApiClient.convertToType(data['call_type'], 'String');
            }
            if (data.hasOwnProperty('header_parameters')) {
                obj['header_parameters'] = ApiClient.convertToType(data['header_parameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('query_parameters')) {
                obj['query_parameters'] = ApiClient.convertToType(data['query_parameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FunnelIntegrationHttpRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FunnelIntegrationHttpRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['call_type'] && !(typeof data['call_type'] === 'string' || data['call_type'] instanceof String)) {
            throw new Error("Expected the field `call_type` to be a primitive type in the JSON string but got " + data['call_type']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * The body of the HTTP request that will be made when this action is processed in the builder(s).
 * @member {String} body
 */
FunnelIntegrationHttpRequest.prototype['body'] = undefined;

/**
 * The type of HTTP request that will be made when this action is processed in the builder(s).
 * @member {String} call_type
 */
FunnelIntegrationHttpRequest.prototype['call_type'] = undefined;

/**
 * A map of the header parameters of the HTTP request that will be made when this action is processed in the builder(s).
 * @member {Object.<String, String>} header_parameters
 */
FunnelIntegrationHttpRequest.prototype['header_parameters'] = undefined;

/**
 * A map of the query parameters of the HTTP request that will be made when this action is processed in the builder(s).
 * @member {Object.<String, String>} query_parameters
 */
FunnelIntegrationHttpRequest.prototype['query_parameters'] = undefined;

/**
 * The URL of the HTTP request that will be made when this action is processed in the builder(s).
 * @member {String} url
 */
FunnelIntegrationHttpRequest.prototype['url'] = undefined;






export default FunnelIntegrationHttpRequest;
