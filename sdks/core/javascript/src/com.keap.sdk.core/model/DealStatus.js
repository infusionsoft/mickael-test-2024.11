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
* Enum class DealStatus.
* @enum {}
* @readonly
*/
export default class DealStatus {
    
        /**
         * value: "UNKNOWN_COULD_NOT_DESERIALIZE"
         * @const
         */
        "UNKNOWN_COULD_NOT_DESERIALIZE" = "UNKNOWN_COULD_NOT_DESERIALIZE";

    
        /**
         * value: "ACTIVE"
         * @const
         */
        "ACTIVE" = "ACTIVE";

    
        /**
         * value: "WON"
         * @const
         */
        "WON" = "WON";

    
        /**
         * value: "LOST"
         * @const
         */
        "LOST" = "LOST";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>DealStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.keap.sdk.core/model/DealStatus} The enum <code>DealStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
