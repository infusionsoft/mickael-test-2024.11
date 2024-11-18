export declare class ListRestMerchantAccountResponse {
    'accountName'?: string;
    'id'?: string;
    'isTest'?: boolean;
    'type'?: ListRestMerchantAccountResponseTypeEnum;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum ListRestMerchantAccountResponseTypeEnum {
    UseDefault = "USE_DEFAULT",
    PayPal = "PAY_PAL",
    PayPalPayflowPro = "PAY_PAL_PAYFLOW_PRO",
    PaypalCommerce = "PAYPAL_COMMERCE",
    PaypalCommerceUcc = "PAYPAL_COMMERCE_UCC",
    GatewayPayflowPro = "GATEWAY_PAYFLOW_PRO",
    Authorize = "AUTHORIZE",
    AuthorizeCardPresent = "AUTHORIZE_CARD_PRESENT",
    PowerPay = "POWER_PAY",
    CartConnect = "CART_CONNECT",
    SagePay = "SAGE_PAY",
    EWay = "E_WAY",
    UsaEPay = "USA_E_PAY",
    Moneris = "MONERIS",
    Dps = "DPS",
    Dummy = "DUMMY",
    InternetSecure = "INTERNET_SECURE",
    EasyPayDirect = "EASY_PAY_DIRECT",
    Nexus = "NEXUS",
    InfPay = "INF_PAY",
    Flexpay = "FLEXPAY",
    Stripe = "STRIPE",
    StripeElements = "STRIPE_ELEMENTS",
    WorldPay = "WORLD_PAY",
    Rainforest = "RAINFOREST",
    Wepay = "WEPAY",
    Keappay = "KEAPPAY",
    Manual = "MANUAL"
}
