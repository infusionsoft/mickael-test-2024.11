/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CreateRestOrderItemRequest {
    'description'?: string;
    /**
    * Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0.
    */
    'price'?: number;
    /**
    * The id of the product to be added to the order.
    */
    'productId': string;
    'productType'?: CreateRestOrderItemRequestProductTypeEnum;
    /**
    * Quantity must be greater than or equal to 1
    */
    'quantity': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "productType",
            "baseName": "product_type",
            "type": "CreateRestOrderItemRequestProductTypeEnum",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return CreateRestOrderItemRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateRestOrderItemRequestProductTypeEnum {
    Product = 'PRODUCT',
    Digital = 'DIGITAL'
}

