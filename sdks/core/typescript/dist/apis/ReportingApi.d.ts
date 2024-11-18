import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ReportExecutionResult } from '../models/ReportExecutionResult';
export declare class ReportingApiRequestFactory extends BaseAPIRequestFactory {
    runReportUsingPOST(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ReportingApiResponseProcessor {
    runReportUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReportExecutionResult>>;
}
