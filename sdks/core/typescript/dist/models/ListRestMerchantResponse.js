"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRestMerchantResponse = void 0;
var ListRestMerchantResponse = (function () {
    function ListRestMerchantResponse() {
    }
    ListRestMerchantResponse.getAttributeTypeMap = function () {
        return ListRestMerchantResponse.attributeTypeMap;
    };
    ListRestMerchantResponse.discriminator = undefined;
    ListRestMerchantResponse.mapping = undefined;
    ListRestMerchantResponse.attributeTypeMap = [
        {
            "name": "defaultMerchantAccountId",
            "baseName": "default_merchant_account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantAccounts",
            "baseName": "merchant_accounts",
            "type": "Array<ListRestMerchantAccountResponse>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListRestMerchantResponse;
}());
exports.ListRestMerchantResponse = ListRestMerchantResponse;
//# sourceMappingURL=ListRestMerchantResponse.js.map