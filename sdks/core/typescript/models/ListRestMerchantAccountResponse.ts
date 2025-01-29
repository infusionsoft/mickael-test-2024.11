/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.770650
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ListRestMerchantAccountResponse {
    'accountName'?: string;
    'id'?: string;
    'isTest'?: boolean;
    'type'?: ListRestMerchantAccountResponseTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountName",
            "baseName": "account_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isTest",
            "baseName": "is_test",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ListRestMerchantAccountResponseTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListRestMerchantAccountResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ListRestMerchantAccountResponseTypeEnum {
    UseDefault = 'USE_DEFAULT',
    PayPal = 'PAY_PAL',
    PayPalPayflowPro = 'PAY_PAL_PAYFLOW_PRO',
    PaypalCommerce = 'PAYPAL_COMMERCE',
    PaypalCommerceUcc = 'PAYPAL_COMMERCE_UCC',
    GatewayPayflowPro = 'GATEWAY_PAYFLOW_PRO',
    Authorize = 'AUTHORIZE',
    AuthorizeCardPresent = 'AUTHORIZE_CARD_PRESENT',
    PowerPay = 'POWER_PAY',
    CartConnect = 'CART_CONNECT',
    SagePay = 'SAGE_PAY',
    EWay = 'E_WAY',
    UsaEPay = 'USA_E_PAY',
    Moneris = 'MONERIS',
    Dps = 'DPS',
    Dummy = 'DUMMY',
    InternetSecure = 'INTERNET_SECURE',
    EasyPayDirect = 'EASY_PAY_DIRECT',
    Nexus = 'NEXUS',
    InfPay = 'INF_PAY',
    Flexpay = 'FLEXPAY',
    Stripe = 'STRIPE',
    StripeElements = 'STRIPE_ELEMENTS',
    WorldPay = 'WORLD_PAY',
    Rainforest = 'RAINFOREST',
    Wepay = 'WEPAY',
    Keappay = 'KEAPPAY',
    Manual = 'MANUAL'
}

