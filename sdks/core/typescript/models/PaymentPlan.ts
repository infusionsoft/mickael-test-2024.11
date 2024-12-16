/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RestPaymentGateway } from '../models/RestPaymentGateway';
import { HttpFile } from '../http/http';

export class PaymentPlan {
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

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "autoCharge",
            "baseName": "auto_charge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "creditCardId",
            "baseName": "credit_card_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "daysBetweenPayments",
            "baseName": "days_between_payments",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "initialPaymentAmount",
            "baseName": "initial_payment_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "initialPaymentDate",
            "baseName": "initial_payment_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "initialPaymentPercent",
            "baseName": "initial_payment_percent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "numberOfPayments",
            "baseName": "number_of_payments",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "paymentGateway",
            "baseName": "payment_gateway",
            "type": "RestPaymentGateway",
            "format": ""
        },
        {
            "name": "paymentMethodId",
            "baseName": "payment_method_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "planStartDate",
            "baseName": "plan_start_date",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentPlan.attributeTypeMap;
    }

    public constructor() {
    }
}
