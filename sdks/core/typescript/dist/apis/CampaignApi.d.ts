import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AddContactsToSequenceRequest } from '../models/AddContactsToSequenceRequest';
import { AddContactsToSequenceResponse } from '../models/AddContactsToSequenceResponse';
import { Campaign } from '../models/Campaign';
import { ListCampaignsResponse } from '../models/ListCampaignsResponse';
import { RemoveContactsFromSequenceRequest } from '../models/RemoveContactsFromSequenceRequest';
import { RemoveContactsFromSequenceResponse } from '../models/RemoveContactsFromSequenceResponse';
export declare class CampaignApiRequestFactory extends BaseAPIRequestFactory {
    addContactsToCampaignSequenceUsingPOST1(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: Configuration): Promise<RequestContext>;
    getCampaignUsingGET1(campaignId: string, _options?: Configuration): Promise<RequestContext>;
    listCampaignsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Promise<RequestContext>;
    removeContactsFromCampaignSequenceUsingPOST(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CampaignApiResponseProcessor {
    addContactsToCampaignSequenceUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddContactsToSequenceResponse>>;
    getCampaignUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Campaign>>;
    listCampaignsUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListCampaignsResponse>>;
    removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RemoveContactsFromSequenceResponse>>;
}
