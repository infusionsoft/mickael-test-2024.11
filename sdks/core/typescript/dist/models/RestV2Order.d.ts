import { BasicContact } from '../models/BasicContact';
import { PaymentPlan } from '../models/PaymentPlan';
import { RestV2OrderItem } from '../models/RestV2OrderItem';
import { ShippingInformation } from '../models/ShippingInformation';
export declare class RestV2Order {
    'allowPayment'?: boolean;
    'allowPaypal'?: boolean;
    'contact'?: BasicContact;
    'creationTime'?: string;
    'id'?: string;
    'invoiceNumber'?: string;
    'leadAffiliateId'?: string;
    'modificationTime'?: string;
    'notes'?: string;
    'orderItems'?: Array<RestV2OrderItem>;
    'orderTime'?: string;
    'orderType'?: string;
    'paymentPlan'?: PaymentPlan;
    'recurring'?: boolean;
    'refundTotal'?: number;
    'salesAffiliateId'?: string;
    'shippingInformation'?: ShippingInformation;
    'sourceType'?: RestV2OrderSourceTypeEnum;
    'status'?: string;
    'terms'?: string;
    'title'?: string;
    'total'?: number;
    'totalDue'?: number;
    'totalPaid'?: number;
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
export declare enum RestV2OrderSourceTypeEnum {
    Invoice = "INVOICE",
    Api = "API",
    CheckoutForm = "CHECKOUT_FORM",
    ManualPayment = "MANUAL_PAYMENT",
    Unknown = "UNKNOWN",
    QboSync = "QBO_SYNC"
}
