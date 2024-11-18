import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ListCountriesResponse } from '../models/ListCountriesResponse';
import { ListProvincesResponse } from '../models/ListProvincesResponse';
export declare class LocaleApiRequestFactory extends BaseAPIRequestFactory {
    listCountriesUsingGET2(_options?: Configuration): Promise<RequestContext>;
    listProvincesForCountryUsingGET(countryCode: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class LocaleApiResponseProcessor {
    listCountriesUsingGET2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListCountriesResponse>>;
    listProvincesForCountryUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListProvincesResponse>>;
}
