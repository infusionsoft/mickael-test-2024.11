"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestProductOptionTypeEnum = exports.RestProductOption = void 0;
var RestProductOption = (function () {
    function RestProductOption() {
    }
    RestProductOption.getAttributeTypeMap = function () {
        return RestProductOption.attributeTypeMap;
    };
    RestProductOption.discriminator = undefined;
    RestProductOption.mapping = undefined;
    RestProductOption.attributeTypeMap = [
        {
            "name": "allowSpaces",
            "baseName": "allow_spaces",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canContainCharacter",
            "baseName": "can_contain_character",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canContainNumber",
            "baseName": "can_contain_number",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canEndWithCharacter",
            "baseName": "can_end_with_character",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canEndWithNumber",
            "baseName": "can_end_with_number",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canStartWithCharacter",
            "baseName": "can_start_with_character",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canStartWithNumber",
            "baseName": "can_start_with_number",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "displayIndex",
            "baseName": "display_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxChars",
            "baseName": "max_chars",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "minChars",
            "baseName": "min_chars",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "textMessage",
            "baseName": "text_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RestProductOptionTypeEnum",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<RestProductOptionValue>",
            "format": ""
        }
    ];
    return RestProductOption;
}());
exports.RestProductOption = RestProductOption;
var RestProductOptionTypeEnum;
(function (RestProductOptionTypeEnum) {
    RestProductOptionTypeEnum["FixedList"] = "FIXED_LIST";
    RestProductOptionTypeEnum["Variable"] = "VARIABLE";
})(RestProductOptionTypeEnum = exports.RestProductOptionTypeEnum || (exports.RestProductOptionTypeEnum = {}));
//# sourceMappingURL=RestProductOption.js.map