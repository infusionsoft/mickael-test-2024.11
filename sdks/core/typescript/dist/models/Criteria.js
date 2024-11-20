"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriteriaTypeEnum = exports.Criteria = void 0;
var Criteria = (function () {
    function Criteria() {
    }
    Criteria.getAttributeTypeMap = function () {
        return Criteria.attributeTypeMap;
    };
    Criteria.discriminator = undefined;
    Criteria.mapping = undefined;
    Criteria.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "criteriaId",
            "baseName": "criteria_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "endRangeDate",
            "baseName": "end_range_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "startRangeDate",
            "baseName": "start_range_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CriteriaTypeEnum",
            "format": ""
        }
    ];
    return Criteria;
}());
exports.Criteria = Criteria;
var CriteriaTypeEnum;
(function (CriteriaTypeEnum) {
    CriteriaTypeEnum["DateRange"] = "date range";
    CriteriaTypeEnum["PromoCode"] = "promo code";
})(CriteriaTypeEnum = exports.CriteriaTypeEnum || (exports.CriteriaTypeEnum = {}));
//# sourceMappingURL=Criteria.js.map