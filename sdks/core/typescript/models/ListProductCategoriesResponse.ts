/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.772697-hf-202501311118
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProductCategory } from '../models/ProductCategory';
import { HttpFile } from '../http/http';

export class ListProductCategoriesResponse {
    'nextPageToken'?: string;
    'productCategories'?: Array<ProductCategory>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "productCategories",
            "baseName": "product_categories",
            "type": "Array<ProductCategory>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListProductCategoriesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
