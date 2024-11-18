import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CategoryDiscount } from '../models/CategoryDiscount';
export declare class DiscountApiRequestFactory extends BaseAPIRequestFactory {
    getCategoryDiscountUsingGET(discountId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class DiscountApiResponseProcessor {
    getCategoryDiscountUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryDiscount>>;
}
