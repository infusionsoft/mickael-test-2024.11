import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateUserRequestV2 } from '../models/CreateUserRequestV2';
import { GetUserInfoResponse } from '../models/GetUserInfoResponse';
import { ListUserResponse } from '../models/ListUserResponse';
import { PatchUserRequestV2 } from '../models/PatchUserRequestV2';
import { User } from '../models/User';
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    createUserUsingPOST1(user?: CreateUserRequestV2, _options?: Configuration): Promise<RequestContext>;
    getUserByIdUsingGET(userId: string, _options?: Configuration): Promise<RequestContext>;
    getUserInfoUsingGET1(_options?: Configuration): Promise<RequestContext>;
    getUserSignatureUsingGET1(userId: string, _options?: Configuration): Promise<RequestContext>;
    listUsersUsingGET1(filter?: string, orderBy?: string, _options?: Configuration): Promise<RequestContext>;
    patchUserUsingPATCH(userId: string, updateMask?: Array<string>, user?: PatchUserRequestV2, _options?: Configuration): Promise<RequestContext>;
}
export declare class UsersApiResponseProcessor {
    createUserUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
    getUserByIdUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
    getUserInfoUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetUserInfoResponse>>;
    getUserSignatureUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    listUsersUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListUserResponse>>;
    patchUserUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
}
