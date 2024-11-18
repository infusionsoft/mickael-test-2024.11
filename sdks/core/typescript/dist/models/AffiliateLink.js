"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateLink = void 0;
var AffiliateLink = (function () {
    function AffiliateLink() {
    }
    AffiliateLink.getAttributeTypeMap = function () {
        return AffiliateLink.attributeTypeMap;
    };
    AffiliateLink.discriminator = undefined;
    AffiliateLink.mapping = undefined;
    AffiliateLink.attributeTypeMap = [
        {
            "name": "affiliateId",
            "baseName": "affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "localUrlCode",
            "baseName": "local_url_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "programIds",
            "baseName": "program_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "redirectUrl",
            "baseName": "redirect_url",
            "type": "string",
            "format": ""
        }
    ];
    return AffiliateLink;
}());
exports.AffiliateLink = AffiliateLink;
//# sourceMappingURL=AffiliateLink.js.map