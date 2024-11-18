import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreatePaymentMethodConfigRequest } from '../models/CreatePaymentMethodConfigRequest';
import { PaymentMethodConfig } from '../models/PaymentMethodConfig';
export declare class PaymentMethodConfigApiRequestFactory extends BaseAPIRequestFactory {
    createPaymentMethodConfigUsingPOST(request: CreatePaymentMethodConfigRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentMethodConfigApiResponseProcessor {
    createPaymentMethodConfigUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaymentMethodConfig>>;
}
