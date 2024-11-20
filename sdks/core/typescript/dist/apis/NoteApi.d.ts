import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateCustomFieldRequest } from '../models/CreateCustomFieldRequest';
import { CreateNoteRequest } from '../models/CreateNoteRequest';
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { GetNoteResponse } from '../models/GetNoteResponse';
import { ListNotesResponse } from '../models/ListNotesResponse';
import { Note } from '../models/Note';
import { ObjectModel } from '../models/ObjectModel';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
import { UpdateNoteRequest } from '../models/UpdateNoteRequest';
import { UpdateNoteResponse } from '../models/UpdateNoteResponse';
export declare class NoteApiRequestFactory extends BaseAPIRequestFactory {
    createNoteCustomFieldUsingPOST1(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createNoteUsingPOST1(contactId: string, request: CreateNoteRequest, _options?: Configuration): Promise<RequestContext>;
    deleteNoteUsingDELETE1(contactId: string, noteId: string, _options?: Configuration): Promise<RequestContext>;
    getNoteUsingGET1(contactId: string, noteId: string, _options?: Configuration): Promise<RequestContext>;
    listNotesUsingGET1(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    retrieveNoteModelUsingGET1(_options?: Configuration): Promise<RequestContext>;
    updateNoteUsingPATCH(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    updateNotesCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
}
export declare class NoteApiResponseProcessor {
    createNoteCustomFieldUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    createNoteUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Note>>;
    deleteNoteUsingDELETE1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getNoteUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetNoteResponse>>;
    listNotesUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListNotesResponse>>;
    retrieveNoteModelUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    updateNoteUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateNoteResponse>>;
    updateNotesCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
}
