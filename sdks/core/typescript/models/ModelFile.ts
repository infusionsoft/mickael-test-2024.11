/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ModelFile {
    'absolute'?: boolean;
    'absoluteFile'?: any;
    'absolutePath'?: string;
    'canonicalFile'?: any;
    'canonicalPath'?: string;
    'directory'?: boolean;
    'executable'?: boolean;
    'file'?: boolean;
    'freeSpace'?: number;
    'hidden'?: boolean;
    'lastModified'?: number;
    'name'?: string;
    'parent'?: string;
    'parentFile'?: any;
    'path'?: string;
    'readable'?: boolean;
    'totalSpace'?: number;
    'usableSpace'?: number;
    'writable'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "absolute",
            "baseName": "absolute",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "absoluteFile",
            "baseName": "absoluteFile",
            "type": "any",
            "format": ""
        },
        {
            "name": "absolutePath",
            "baseName": "absolutePath",
            "type": "string",
            "format": ""
        },
        {
            "name": "canonicalFile",
            "baseName": "canonicalFile",
            "type": "any",
            "format": ""
        },
        {
            "name": "canonicalPath",
            "baseName": "canonicalPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "directory",
            "baseName": "directory",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "executable",
            "baseName": "executable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "freeSpace",
            "baseName": "freeSpace",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastModified",
            "baseName": "lastModified",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentFile",
            "baseName": "parentFile",
            "type": "any",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "readable",
            "baseName": "readable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "totalSpace",
            "baseName": "totalSpace",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "usableSpace",
            "baseName": "usableSpace",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "writable",
            "baseName": "writable",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelFile.attributeTypeMap;
    }

    public constructor() {
    }
}
