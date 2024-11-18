"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingPage = void 0;
var LandingPage = (function () {
    function LandingPage() {
    }
    LandingPage.getAttributeTypeMap = function () {
        return LandingPage.attributeTypeMap;
    };
    LandingPage.discriminator = undefined;
    LandingPage.mapping = undefined;
    LandingPage.attributeTypeMap = [
        {
            "name": "htmlPreviewUrl",
            "baseName": "html_preview_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "htmlUrl",
            "baseName": "html_url",
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
            "name": "templateGroupStatus",
            "baseName": "template_group_status",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }
    ];
    return LandingPage;
}());
exports.LandingPage = LandingPage;
//# sourceMappingURL=LandingPage.js.map