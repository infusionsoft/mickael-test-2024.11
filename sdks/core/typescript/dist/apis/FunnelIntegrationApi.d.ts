import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateFunnelIntegrationRequest } from '../models/CreateFunnelIntegrationRequest';
import { CreateFunnelIntegrationTriggerEvents } from '../models/CreateFunnelIntegrationTriggerEvents';
import { DeleteFunnelIntegrationRequest } from '../models/DeleteFunnelIntegrationRequest';
import { FunnelIntegrationTriggerResultDTO } from '../models/FunnelIntegrationTriggerResultDTO';
export declare class FunnelIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Promise<RequestContext>;
    createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Promise<RequestContext>;
    deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class FunnelIntegrationApiResponseProcessor {
    createFunnelIntegrationUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    createIntegrationTriggerEventUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>>;
    deleteFunnelIntegrationUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
