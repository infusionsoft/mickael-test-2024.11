import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateCustomFieldRequest } from '../models/CreateCustomFieldRequest';
import { CreatePaymentRequest } from '../models/CreatePaymentRequest';
import { CreateRestOrderItemRequest } from '../models/CreateRestOrderItemRequest';
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { ListOrders } from '../models/ListOrders';
import { ObjectModel } from '../models/ObjectModel';
import { PaymentResult } from '../models/PaymentResult';
import { RestCreateOrderRequest } from '../models/RestCreateOrderRequest';
import { RestV2Order } from '../models/RestV2Order';
import { RestV2OrderItem } from '../models/RestV2OrderItem';
import { RestV2PatchOrderRequest } from '../models/RestV2PatchOrderRequest';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
export declare class OrdersApiRequestFactory extends BaseAPIRequestFactory {
    createOrderCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createOrderItemsOnOrderUsingPOST1(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Promise<RequestContext>;
    createOrderUsingPOST1(createOrderRequest: RestCreateOrderRequest, _options?: Configuration): Promise<RequestContext>;
    createPaymentOnOrderUsingPOST1(orderId: string, createPaymentRequest: CreatePaymentRequest, _options?: Configuration): Promise<RequestContext>;
    deleteOrderUsingDELETE1(orderId: string, _options?: Configuration): Promise<RequestContext>;
    getOrderUsingGET1(orderId: string, _options?: Configuration): Promise<RequestContext>;
    listOrdersUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    patchOrderUsingPATCH(orderId: string, updateMask?: Array<string>, order?: RestV2PatchOrderRequest, _options?: Configuration): Promise<RequestContext>;
    retrieveOrderCustomFieldModelUsingGET(_options?: Configuration): Promise<RequestContext>;
    updateOrderCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
}
export declare class OrdersApiResponseProcessor {
    createOrderCustomFieldUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    createOrderItemsOnOrderUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2OrderItem>>;
    createOrderUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Order>>;
    createPaymentOnOrderUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaymentResult>>;
    deleteOrderUsingDELETE1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getOrderUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Order>>;
    listOrdersUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListOrders>>;
    patchOrderUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Order>>;
    retrieveOrderCustomFieldModelUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    updateOrderCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
}
