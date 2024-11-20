import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
export declare class FreeTrialDiscountApiRequestFactory extends BaseAPIRequestFactory {
    deleteDiscountUsingDELETE1(discountId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class FreeTrialDiscountApiResponseProcessor {
    deleteDiscountUsingDELETE1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
