import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ApplyRemoveTagRequest } from '../models/ApplyRemoveTagRequest';
import { ApplyTagsResponse } from '../models/ApplyTagsResponse';
import { CreateUpdateTagCategoryRequest } from '../models/CreateUpdateTagCategoryRequest';
import { CreateUpdateTagRequest } from '../models/CreateUpdateTagRequest';
import { GetTagCategoryResponse } from '../models/GetTagCategoryResponse';
import { ListTagCategoriesResponse } from '../models/ListTagCategoriesResponse';
import { ListTaggedCompaniesResponse } from '../models/ListTaggedCompaniesResponse';
import { ListTaggedContactsResponse } from '../models/ListTaggedContactsResponse';
import { ListTagsResponse } from '../models/ListTagsResponse';
import { Tag } from '../models/Tag';
import { UpdateTagCategoryResponse } from '../models/UpdateTagCategoryResponse';
import { UpdateTagResponse } from '../models/UpdateTagResponse';
export declare class TagsApiRequestFactory extends BaseAPIRequestFactory {
    applyTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Promise<RequestContext>;
    createTagCategoryUsingPOST1(request: CreateUpdateTagCategoryRequest, _options?: Configuration): Promise<RequestContext>;
    createTagUsingPOST1(tag: CreateUpdateTagRequest, _options?: Configuration): Promise<RequestContext>;
    deleteTagCategoryUsingDELETE(tagCategoryId: string, _options?: Configuration): Promise<RequestContext>;
    deleteTagUsingDELETE(tagId: string, _options?: Configuration): Promise<RequestContext>;
    getCategoryUsingGET(tagCategoryId: string, _options?: Configuration): Promise<RequestContext>;
    getTagUsingGET1(tagId: string, _options?: Configuration): Promise<RequestContext>;
    listCompaniesForTagIdUsingGET1(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listContactsWithTagIdUsingGET(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listTagCategoriesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listTagsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    patchTagCategoryUsingPATCH(tagCategoryId: string, updateMask?: Array<string>, tagCategory?: CreateUpdateTagCategoryRequest, _options?: Configuration): Promise<RequestContext>;
    patchTagUsingPATCH(tagId: string, updateMask?: Array<string>, tag?: CreateUpdateTagRequest, _options?: Configuration): Promise<RequestContext>;
    removeTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class TagsApiResponseProcessor {
    applyTagsUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApplyTagsResponse>>;
    createTagCategoryUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tag>>;
    createTagUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tag>>;
    deleteTagCategoryUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteTagUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getCategoryUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetTagCategoryResponse>>;
    getTagUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Tag>>;
    listCompaniesForTagIdUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListTaggedCompaniesResponse>>;
    listContactsWithTagIdUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListTaggedContactsResponse>>;
    listTagCategoriesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListTagCategoriesResponse>>;
    listTagsUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListTagsResponse>>;
    patchTagCategoryUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateTagCategoryResponse>>;
    patchTagUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateTagResponse>>;
    removeTagsUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
