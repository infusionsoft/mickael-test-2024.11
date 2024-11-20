import { ApplicationCompany } from '../models/ApplicationCompany';
import { ApplicationFeaturesEnabled } from '../models/ApplicationFeaturesEnabled';
export declare class ApplicationConfigurationModuleApplication {
    'company'?: ApplicationCompany;
    'defaultViewLocale'?: string;
    'featuresEnabled'?: ApplicationFeaturesEnabled;
    'timeZone'?: string;
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
