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
export declare class GetSettingsResponse {
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
