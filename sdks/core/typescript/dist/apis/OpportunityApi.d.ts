import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateCustomFieldRequest } from '../models/CreateCustomFieldRequest';
import { CreateOpportunityRequest } from '../models/CreateOpportunityRequest';
import { CreateOpportunityStageRequest } from '../models/CreateOpportunityStageRequest';
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { ListOpportunitiesResponse } from '../models/ListOpportunitiesResponse';
import { ListOpportunityStagesResponse } from '../models/ListOpportunityStagesResponse';
import { PatchOpportunityRequest } from '../models/PatchOpportunityRequest';
import { RestOpportunityStage } from '../models/RestOpportunityStage';
import { RestV2Opportunity } from '../models/RestV2Opportunity';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
export declare class OpportunityApiRequestFactory extends BaseAPIRequestFactory {
    createOpportunityCustomFieldsUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createOpportunityStageUsingPOST(opportunityStage?: CreateOpportunityStageRequest, _options?: Configuration): Promise<RequestContext>;
    createOpportunityUsingPOST1(opportunity?: CreateOpportunityRequest, _options?: Configuration): Promise<RequestContext>;
    deleteOpportunityStageUsingDELETE(stageId: string, _options?: Configuration): Promise<RequestContext>;
    deleteOpportunityUsingDELETE(opportunityId: string, _options?: Configuration): Promise<RequestContext>;
    getOpportunityStageUsingGET(stageId: string, _options?: Configuration): Promise<RequestContext>;
    getOpportunityUsingGET1(opportunityId: string, _options?: Configuration): Promise<RequestContext>;
    listOpportunitiesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listOpportunityStagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    updateOpportunityCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    updateOpportunityUsingPATCH(opportunityId: string, request: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
}
export declare class OpportunityApiResponseProcessor {
    createOpportunityCustomFieldsUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    createOpportunityStageUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestOpportunityStage>>;
    createOpportunityUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Opportunity>>;
    deleteOpportunityStageUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteOpportunityUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getOpportunityStageUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestOpportunityStage>>;
    getOpportunityUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Opportunity>>;
    listOpportunitiesUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListOpportunitiesResponse>>;
    listOpportunityStagesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListOpportunityStagesResponse>>;
    updateOpportunityCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    updateOpportunityUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Opportunity>>;
}
