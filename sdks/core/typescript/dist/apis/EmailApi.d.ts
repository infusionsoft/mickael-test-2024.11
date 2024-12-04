import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateEmailSentRequest } from '../models/CreateEmailSentRequest';
import { CreateEmailsSentRequest } from '../models/CreateEmailsSentRequest';
import { DeleteEmailsRequest } from '../models/DeleteEmailsRequest';
import { DeleteEmailsResponse } from '../models/DeleteEmailsResponse';
import { EmailSendRequest } from '../models/EmailSendRequest';
import { EmailSentWithContent } from '../models/EmailSentWithContent';
import { EmailsSentList } from '../models/EmailsSentList';
export declare class EmailApiRequestFactory extends BaseAPIRequestFactory {
    createEmailUsingPOST1(emailWithContent: CreateEmailSentRequest, _options?: Configuration): Promise<RequestContext>;
    createEmailsUsingPOST1(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: Configuration): Promise<RequestContext>;
    deleteEmailUsingDELETE1(id: string, _options?: Configuration): Promise<RequestContext>;
    deleteEmailsUsingPOST1(deleteEmailsRequest: DeleteEmailsRequest, _options?: Configuration): Promise<RequestContext>;
    getEmailUsingGET1(id: string, _options?: Configuration): Promise<RequestContext>;
    sendEmailUsingPOST1(emailSendRequest?: EmailSendRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class EmailApiResponseProcessor {
    createEmailUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<EmailSentWithContent>>;
    createEmailsUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<EmailsSentList>>;
    deleteEmailUsingDELETE1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteEmailsUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeleteEmailsResponse>>;
    getEmailUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<EmailSentWithContent>>;
    sendEmailUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
