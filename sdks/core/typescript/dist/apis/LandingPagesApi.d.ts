import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ListLandingPagesResponse } from '../models/ListLandingPagesResponse';
export declare class LandingPagesApiRequestFactory extends BaseAPIRequestFactory {
    listLandingPagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class LandingPagesApiResponseProcessor {
    listLandingPagesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListLandingPagesResponse>>;
}
