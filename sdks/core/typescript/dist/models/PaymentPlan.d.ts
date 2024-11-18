import { RestPaymentGateway } from '../models/RestPaymentGateway';
export declare class PaymentPlan {
    'autoCharge'?: boolean;
    'creditCardId'?: string;
    'daysBetweenPayments': number;
    'initialPaymentAmount'?: number;
    'initialPaymentDate'?: string;
    'initialPaymentPercent'?: number;
    'numberOfPayments': number;
    'paymentGateway'?: RestPaymentGateway;
    'paymentMethodId'?: string;
    'planStartDate': string;
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
