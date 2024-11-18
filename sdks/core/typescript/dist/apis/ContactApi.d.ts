import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { Contact } from '../models/Contact';
import { ContactLink } from '../models/ContactLink';
import { ContactLinkType } from '../models/ContactLinkType';
import { CreateContactLinkTypeRequest } from '../models/CreateContactLinkTypeRequest';
import { CreatePatchContactRequest } from '../models/CreatePatchContactRequest';
import { LinkContactsRequest } from '../models/LinkContactsRequest';
import { ListBasicContactResponse } from '../models/ListBasicContactResponse';
import { ListContactLinkTypesResponse } from '../models/ListContactLinkTypesResponse';
import { ListContactLinksResponse } from '../models/ListContactLinksResponse';
import { ListContactsResponse } from '../models/ListContactsResponse';
import { ObjectModel } from '../models/ObjectModel';
import { PaymentMethodList } from '../models/PaymentMethodList';
export declare class ContactApiRequestFactory extends BaseAPIRequestFactory {
    createContactLinkTypeUsingPOST(request: CreateContactLinkTypeRequest, _options?: Configuration): Promise<RequestContext>;
    createContactUsingPOST1(contact?: CreatePatchContactRequest, _options?: Configuration): Promise<RequestContext>;
    deleteContactUsingDELETE1(contactId: string, _options?: Configuration): Promise<RequestContext>;
    getContactUsingGET1(contactId: string, fields?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    getContactsBySearchTermUsingGET(searchParam: string, _options?: Configuration): Promise<RequestContext>;
    linkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Promise<RequestContext>;
    listContactLinkTypesUsingGET(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listContactLinksUsingGET(contactId: string, _options?: Configuration): Promise<RequestContext>;
    listContactsUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listPaymentMethodsUsingGET(contactId: number, _options?: Configuration): Promise<RequestContext>;
    patchContactUsingPATCH(contactId: string, updateMask?: Array<string>, contact?: CreatePatchContactRequest, _options?: Configuration): Promise<RequestContext>;
    retrieveContactModelUsingGET1(_options?: Configuration): Promise<RequestContext>;
    unlinkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ContactApiResponseProcessor {
    createContactLinkTypeUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ContactLinkType>>;
    createContactUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Contact>>;
    deleteContactUsingDELETE1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getContactUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Contact>>;
    getContactsBySearchTermUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListBasicContactResponse>>;
    linkContactsUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ContactLink>>;
    listContactLinkTypesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListContactLinkTypesResponse>>;
    listContactLinksUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListContactLinksResponse>>;
    listContactsUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListContactsResponse>>;
    listPaymentMethodsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaymentMethodList>>;
    patchContactUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Contact>>;
    retrieveContactModelUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    unlinkContactsUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
