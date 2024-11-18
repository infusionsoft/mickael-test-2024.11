import { LandingPage } from '../models/LandingPage';
export declare class ListLandingPagesResponse {
    'landingpages'?: Array<LandingPage>;
    'nextPageToken'?: string;
    'pageSize'?: string;
    'pages'?: string;
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
