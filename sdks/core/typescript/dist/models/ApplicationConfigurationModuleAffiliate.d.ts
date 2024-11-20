import { ApplicationConfigurationModuleAffiliateCommission } from '../models/ApplicationConfigurationModuleAffiliateCommission';
export declare class ApplicationConfigurationModuleAffiliate {
    'chooseAffiliate'?: boolean;
    'commission'?: ApplicationConfigurationModuleAffiliateCommission;
    'customAffiliateUrl'?: string;
    'displayAffiliateIpAddress'?: boolean;
    'doNotNotifyAffiliate'?: boolean;
    'skipPayIfUnused'?: boolean;
    'useReferralHistoryIfNoTrackingCookie'?: boolean;
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
