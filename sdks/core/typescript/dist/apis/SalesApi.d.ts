import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
export declare class SalesApiRequestFactory extends BaseAPIRequestFactory {
    setMerchantGatewayAsDefaultUsingPOST(id: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class SalesApiResponseProcessor {
    setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
