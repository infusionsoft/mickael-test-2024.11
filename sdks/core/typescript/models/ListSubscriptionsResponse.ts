/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RestSubscriptionV2 } from '../models/RestSubscriptionV2';
import { HttpFile } from '../http/http';

export class ListSubscriptionsResponse {
    'nextPageToken'?: string;
    'subscriptions'?: Array<RestSubscriptionV2>;

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
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Array<RestSubscriptionV2>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListSubscriptionsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
