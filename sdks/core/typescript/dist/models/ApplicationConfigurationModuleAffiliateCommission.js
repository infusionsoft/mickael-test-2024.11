"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleAffiliateCommission = void 0;
var ApplicationConfigurationModuleAffiliateCommission = (function () {
    function ApplicationConfigurationModuleAffiliateCommission() {
    }
    ApplicationConfigurationModuleAffiliateCommission.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleAffiliateCommission.attributeTypeMap;
    };
    ApplicationConfigurationModuleAffiliateCommission.discriminator = undefined;
    ApplicationConfigurationModuleAffiliateCommission.mapping = undefined;
    ApplicationConfigurationModuleAffiliateCommission.attributeTypeMap = [
        {
            "name": "calculationType",
            "baseName": "calculation_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "levels",
            "baseName": "levels",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "participantTypes",
            "baseName": "participant_types",
            "type": "string",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleAffiliateCommission;
}());
exports.ApplicationConfigurationModuleAffiliateCommission = ApplicationConfigurationModuleAffiliateCommission;
//# sourceMappingURL=ApplicationConfigurationModuleAffiliateCommission.js.map