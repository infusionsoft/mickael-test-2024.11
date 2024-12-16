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

import { ApplicationConfigurationModuleAffiliate } from '../models/ApplicationConfigurationModuleAffiliate';
import { ApplicationConfigurationModuleApplication } from '../models/ApplicationConfigurationModuleApplication';
import { ApplicationConfigurationModuleAppointment } from '../models/ApplicationConfigurationModuleAppointment';
import { ApplicationConfigurationModuleContact } from '../models/ApplicationConfigurationModuleContact';
import { ApplicationConfigurationModuleEcommerce } from '../models/ApplicationConfigurationModuleEcommerce';
import { ApplicationConfigurationModuleEmail } from '../models/ApplicationConfigurationModuleEmail';
import { ApplicationConfigurationModuleForms } from '../models/ApplicationConfigurationModuleForms';
import { ApplicationConfigurationModuleFulfillment } from '../models/ApplicationConfigurationModuleFulfillment';
import { ApplicationConfigurationModuleInvoice } from '../models/ApplicationConfigurationModuleInvoice';
import { ApplicationConfigurationModuleNote } from '../models/ApplicationConfigurationModuleNote';
import { ApplicationConfigurationModuleOpportunity } from '../models/ApplicationConfigurationModuleOpportunity';
import { ApplicationConfigurationModuleTask } from '../models/ApplicationConfigurationModuleTask';
import { ApplicationConfigurationModuleTemplate } from '../models/ApplicationConfigurationModuleTemplate';
import { HttpFile } from '../http/http';

export class GetSettingsResponse {
    'affiliate'?: ApplicationConfigurationModuleAffiliate;
    'application'?: ApplicationConfigurationModuleApplication;
    'appointment'?: ApplicationConfigurationModuleAppointment;
    'contact'?: ApplicationConfigurationModuleContact;
    'ecommerce'?: ApplicationConfigurationModuleEcommerce;
    'email'?: ApplicationConfigurationModuleEmail;
    'forms'?: ApplicationConfigurationModuleForms;
    'fulfillment'?: ApplicationConfigurationModuleFulfillment;
    'invoice'?: ApplicationConfigurationModuleInvoice;
    'note'?: ApplicationConfigurationModuleNote;
    'opportunity'?: ApplicationConfigurationModuleOpportunity;
    'task'?: ApplicationConfigurationModuleTask;
    'template'?: ApplicationConfigurationModuleTemplate;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "affiliate",
            "baseName": "affiliate",
            "type": "ApplicationConfigurationModuleAffiliate",
            "format": ""
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationConfigurationModuleApplication",
            "format": ""
        },
        {
            "name": "appointment",
            "baseName": "appointment",
            "type": "ApplicationConfigurationModuleAppointment",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "ApplicationConfigurationModuleContact",
            "format": ""
        },
        {
            "name": "ecommerce",
            "baseName": "ecommerce",
            "type": "ApplicationConfigurationModuleEcommerce",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "ApplicationConfigurationModuleEmail",
            "format": ""
        },
        {
            "name": "forms",
            "baseName": "forms",
            "type": "ApplicationConfigurationModuleForms",
            "format": ""
        },
        {
            "name": "fulfillment",
            "baseName": "fulfillment",
            "type": "ApplicationConfigurationModuleFulfillment",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "ApplicationConfigurationModuleInvoice",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "ApplicationConfigurationModuleNote",
            "format": ""
        },
        {
            "name": "opportunity",
            "baseName": "opportunity",
            "type": "ApplicationConfigurationModuleOpportunity",
            "format": ""
        },
        {
            "name": "task",
            "baseName": "task",
            "type": "ApplicationConfigurationModuleTask",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "ApplicationConfigurationModuleTemplate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetSettingsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
