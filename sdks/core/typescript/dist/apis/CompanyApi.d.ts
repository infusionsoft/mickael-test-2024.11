import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Company } from '../models/Company';
import { CreateCompanyRequest } from '../models/CreateCompanyRequest';
import { ListCompaniesResponse } from '../models/ListCompaniesResponse';
import { PatchCompanyRequest } from '../models/PatchCompanyRequest';
export declare class CompanyApiRequestFactory extends BaseAPIRequestFactory {
    createCompanyUsingPOST1(company?: CreateCompanyRequest, _options?: Configuration): Promise<RequestContext>;
    deleteCompanyUsingDELETE(companyId: string, _options?: Configuration): Promise<RequestContext>;
    getCompanyUsingGET1(companyId: string, fields?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    listCompaniesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    patchCompanyUsingPATCH(companyId: string, updateMask?: Array<string>, company?: PatchCompanyRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CompanyApiResponseProcessor {
    createCompanyUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Company>>;
    deleteCompanyUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getCompanyUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Company>>;
    listCompaniesUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListCompaniesResponse>>;
    patchCompanyUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Company>>;
}
