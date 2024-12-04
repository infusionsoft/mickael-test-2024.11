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
import ApplicationConfigurationModuleAffiliateCommission from './ApplicationConfigurationModuleAffiliateCommission';

/**
 * The ApplicationConfigurationModuleAffiliate model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate
 * @version 0.0.29
 */
class ApplicationConfigurationModuleAffiliate {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleAffiliate</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate
     */
    constructor() { 
        
        ApplicationConfigurationModuleAffiliate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliate} The populated <code>ApplicationConfigurationModuleAffiliate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleAffiliate();

            if (data.hasOwnProperty('choose_affiliate')) {
                obj['choose_affiliate'] = ApiClient.convertToType(data['choose_affiliate'], 'Boolean');
            }
            if (data.hasOwnProperty('commission')) {
                obj['commission'] = ApplicationConfigurationModuleAffiliateCommission.constructFromObject(data['commission']);
            }
            if (data.hasOwnProperty('custom_affiliate_url')) {
                obj['custom_affiliate_url'] = ApiClient.convertToType(data['custom_affiliate_url'], 'String');
            }
            if (data.hasOwnProperty('display_affiliate_ip_address')) {
                obj['display_affiliate_ip_address'] = ApiClient.convertToType(data['display_affiliate_ip_address'], 'Boolean');
            }
            if (data.hasOwnProperty('do_not_notify_affiliate')) {
                obj['do_not_notify_affiliate'] = ApiClient.convertToType(data['do_not_notify_affiliate'], 'Boolean');
            }
            if (data.hasOwnProperty('skip_pay_if_unused')) {
                obj['skip_pay_if_unused'] = ApiClient.convertToType(data['skip_pay_if_unused'], 'Boolean');
            }
            if (data.hasOwnProperty('use_referral_history_if_no_tracking_cookie')) {
                obj['use_referral_history_if_no_tracking_cookie'] = ApiClient.convertToType(data['use_referral_history_if_no_tracking_cookie'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleAffiliate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleAffiliate</code>.
     */
    static validateJSON(data) {
        // validate the optional field `commission`
        if (data['commission']) { // data not null
          ApplicationConfigurationModuleAffiliateCommission.validateJSON(data['commission']);
        }
        // ensure the json data is a string
        if (data['custom_affiliate_url'] && !(typeof data['custom_affiliate_url'] === 'string' || data['custom_affiliate_url'] instanceof String)) {
            throw new Error("Expected the field `custom_affiliate_url` to be a primitive type in the JSON string but got " + data['custom_affiliate_url']);
        }

        return true;
    }


}



/**
 * @member {Boolean} choose_affiliate
 */
ApplicationConfigurationModuleAffiliate.prototype['choose_affiliate'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleAffiliateCommission} commission
 */
ApplicationConfigurationModuleAffiliate.prototype['commission'] = undefined;

/**
 * @member {String} custom_affiliate_url
 */
ApplicationConfigurationModuleAffiliate.prototype['custom_affiliate_url'] = undefined;

/**
 * @member {Boolean} display_affiliate_ip_address
 */
ApplicationConfigurationModuleAffiliate.prototype['display_affiliate_ip_address'] = undefined;

/**
 * @member {Boolean} do_not_notify_affiliate
 */
ApplicationConfigurationModuleAffiliate.prototype['do_not_notify_affiliate'] = undefined;

/**
 * @member {Boolean} skip_pay_if_unused
 */
ApplicationConfigurationModuleAffiliate.prototype['skip_pay_if_unused'] = undefined;

/**
 * @member {Boolean} use_referral_history_if_no_tracking_cookie
 */
ApplicationConfigurationModuleAffiliate.prototype['use_referral_history_if_no_tracking_cookie'] = undefined;






export default ApplicationConfigurationModuleAffiliate;
