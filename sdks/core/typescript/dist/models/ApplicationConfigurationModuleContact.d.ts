import { ApplicationConfigurationModuleContactAddressLabels } from '../models/ApplicationConfigurationModuleContactAddressLabels';
export declare class ApplicationConfigurationModuleContact {
    'addressLabels'?: ApplicationConfigurationModuleContactAddressLabels;
    'contactTypes'?: string;
    'defaultNewContactForm'?: string;
    'disableContactEditInClientLogin'?: boolean;
    'faxTypes'?: string;
    'phoneTypes'?: string;
    'suffixTypes'?: string;
    'titleTypes'?: string;
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
