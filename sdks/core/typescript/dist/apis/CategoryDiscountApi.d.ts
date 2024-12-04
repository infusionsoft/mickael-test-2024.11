import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CategoryDiscount } from '../models/CategoryDiscount';
export declare class CategoryDiscountApiRequestFactory extends BaseAPIRequestFactory {
    deleteDiscountUsingDELETE(discountId: string, _options?: Configuration): Promise<RequestContext>;
    getDiscountUsingGET(discountId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class CategoryDiscountApiResponseProcessor {
    deleteDiscountUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getDiscountUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryDiscount>>;
}
