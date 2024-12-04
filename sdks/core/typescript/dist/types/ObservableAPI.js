"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableUsersApi = exports.ObservableTaskApi = exports.ObservableTagsApi = exports.ObservableSubscriptionsApi = exports.ObservableSubscriptionPlansApi = exports.ObservableShippingApi = exports.ObservableSettingsApi = exports.ObservableSalesApi = exports.ObservableReportingApi = exports.ObservableReferralApi = exports.ObservableProductApi = exports.ObservablePreReleaseApi = exports.ObservablePaymentMethodConfigApi = exports.ObservableOrdersApi = exports.ObservableOpportunityApi = exports.ObservableNoteApi = exports.ObservableMerchantApi = exports.ObservableLocaleApi = exports.ObservableLeadSourcesApi = exports.ObservableLandingPagesApi = exports.ObservableFunnelIntegrationApi = exports.ObservableFreeTrialDiscountApi = exports.ObservableEmailAddressApi = exports.ObservableEmailApi = exports.ObservableContactApi = exports.ObservableCompanyApi = exports.ObservableCategoryDiscountApi = exports.ObservableCampaignApi = exports.ObservableBusinessProfileApi = exports.ObservableAutomationCategoryApi = exports.ObservableAutomationApi = exports.ObservableAffiliateApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var AffiliateApi_1 = require("../apis/AffiliateApi");
var ObservableAffiliateApi = (function () {
    function ObservableAffiliateApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AffiliateApi_1.AffiliateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AffiliateApi_1.AffiliateApiResponseProcessor();
    }
    ObservableAffiliateApi.prototype.addAffiliateToProgramUsingPOSTWithHttpInfo = function (id, affiliateAddToProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.addAffiliateToProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.addAffiliateToProgramUsingPOST = function (id, affiliateAddToProgramRequest, _options) {
        return this.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.addAffiliateUsingPOSTWithHttpInfo = function (insertAffiliate, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.addAffiliateUsingPOST(insertAffiliate, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.addAffiliateUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.addAffiliateUsingPOST = function (insertAffiliate, _options) {
        return this.addAffiliateUsingPOSTWithHttpInfo(insertAffiliate, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.addCommissionProgramUsingPOSTWithHttpInfo = function (insertCommissionProgram, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.addCommissionProgramUsingPOST(insertCommissionProgram, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.addCommissionProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.addCommissionProgramUsingPOST = function (insertCommissionProgram, _options) {
        return this.addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.assignProductCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, productCommissionProgram, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.assignProductCommissionProgramUsingPOST(commissionProgramId, productCommissionProgram, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.assignProductCommissionProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.assignProductCommissionProgramUsingPOST = function (commissionProgramId, productCommissionProgram, _options) {
        return this.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, productCommissionProgram, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, subscriptionCommissionProgram, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, subscriptionCommissionProgram, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.assignSubscriptionCommissionProgramUsingPOST = function (commissionProgramId, subscriptionCommissionProgram, _options) {
        return this.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, subscriptionCommissionProgram, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.createAffiliateCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createAffiliateCustomFieldUsingPOST(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createAffiliateCustomFieldUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.createAffiliateCustomFieldUsingPOST = function (customField, _options) {
        return this.createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.createDefaultCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, createDefaultCommissionProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createDefaultCommissionProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.createDefaultCommissionProgramUsingPOST = function (commissionProgramId, createDefaultCommissionProgramRequest, _options) {
        return this.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.createRedirectLinkUsingPOSTWithHttpInfo = function (request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createRedirectLinkUsingPOST(request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createRedirectLinkUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.createRedirectLinkUsingPOST = function (request, _options) {
        return this.createRedirectLinkUsingPOSTWithHttpInfo(request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo = function (commissionProgramId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.deleteAffiliateCommissionProgramUsingDELETE = function (commissionProgramId, _options) {
        return this.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.deleteAffiliateUsingDELETEWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAffiliateUsingDELETE(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteAffiliateUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.deleteAffiliateUsingDELETE = function (id, _options) {
        return this.deleteAffiliateUsingDELETEWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.deleteRedirectLinkUsingDELETEWithHttpInfo = function (redirectId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteRedirectLinkUsingDELETE(redirectId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_21 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_21(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_22 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_22(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteRedirectLinkUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.deleteRedirectLinkUsingDELETE = function (redirectId, _options) {
        return this.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.getAffiliateCommissionTotalUsingGETWithHttpInfo = function (affiliateId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAffiliateCommissionTotalUsingGET(affiliateId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_23 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_23(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_24 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_24(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAffiliateCommissionTotalUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.getAffiliateCommissionTotalUsingGET = function (affiliateId, _options) {
        return this.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.getAffiliateCommissionsUsingGETWithHttpInfo = function (affiliateId, filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_25 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_25(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_26 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_26(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAffiliateCommissionsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.getAffiliateCommissionsUsingGET = function (affiliateId, filter, orderBy, pageSize, pageToken, _options) {
        return this.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.getAffiliateCustomFieldsUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAffiliateCustomFieldsUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_27 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_27(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_28 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_28(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAffiliateCustomFieldsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.getAffiliateCustomFieldsUsingGET = function (_options) {
        return this.getAffiliateCustomFieldsUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.getAffiliateUsingGET1WithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAffiliateUsingGET1(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_29 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_29(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_30 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_30(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAffiliateUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.getAffiliateUsingGET1 = function (id, _options) {
        return this.getAffiliateUsingGET1WithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.getCommissionProgramUsingGETWithHttpInfo = function (commissionProgramId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCommissionProgramUsingGET(commissionProgramId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_31 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_31(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_32 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_32(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCommissionProgramUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.getCommissionProgramUsingGET = function (commissionProgramId, _options) {
        return this.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.getRedirectLinkUsingGETWithHttpInfo = function (redirectId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getRedirectLinkUsingGET(redirectId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_33 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_33(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_34 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_34(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getRedirectLinkUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.getRedirectLinkUsingGET = function (redirectId, _options) {
        return this.getRedirectLinkUsingGETWithHttpInfo(redirectId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.listAffiliateCommissionProgramsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_35 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_35(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_36 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_36(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listAffiliateCommissionProgramsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.listAffiliateCommissionProgramsUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.listAffiliateLinksUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_37 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_37(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_38 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_38(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listAffiliateLinksUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.listAffiliateLinksUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.listSummariesUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_39 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_39(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_40 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_40(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listSummariesUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.listSummariesUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.patchCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, patchCommissionProgramRequest, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_41 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_41(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_42 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_42(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCommissionProgramUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.patchCommissionProgramUsingPATCH = function (commissionProgramId, patchCommissionProgramRequest, updateMask, _options) {
        return this.patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.patchDefaultCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_43 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_43(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_44 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_44(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.patchDefaultCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options) {
        return this.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.patchProductCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_45 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_45(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_46 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_46(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchProductCommissionProgramUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.patchProductCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options) {
        return this.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_47 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_47(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_48 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_48(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.patchSubscriptionCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options) {
        return this.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.removeAffiliateFromProgramUsingPOSTWithHttpInfo = function (id, removeFromProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.removeAffiliateFromProgramUsingPOST(id, removeFromProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_49 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_49(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_50 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_50(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.removeAffiliateFromProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.removeAffiliateFromProgramUsingPOST = function (id, removeFromProgramRequest, _options) {
        return this.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo = function (commissionId, deleteSubscriptionPlanCommissionRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_51 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_51(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_52 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_52(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOST = function (commissionId, deleteSubscriptionPlanCommissionRequest, _options) {
        return this.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.updateAffiliateCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateAffiliateCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_53 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_53(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_54 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_54(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.updateAffiliateCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.updateAffiliateUsingPATCHWithHttpInfo = function (id, patchAffiliate, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateAffiliateUsingPATCH(id, patchAffiliate, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_55 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_55(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_56 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_56(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateAffiliateUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.updateAffiliateUsingPATCH = function (id, patchAffiliate, _options) {
        return this.updateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliate, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAffiliateApi.prototype.updateRedirectLinkUsingPATCHWithHttpInfo = function (redirectId, request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateRedirectLinkUsingPATCH(redirectId, request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_57 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_57(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_58 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_58(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateRedirectLinkUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableAffiliateApi.prototype.updateRedirectLinkUsingPATCH = function (redirectId, request, _options) {
        return this.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableAffiliateApi;
}());
exports.ObservableAffiliateApi = ObservableAffiliateApi;
var AutomationApi_1 = require("../apis/AutomationApi");
var ObservableAutomationApi = (function () {
    function ObservableAutomationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutomationApi_1.AutomationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutomationApi_1.AutomationApiResponseProcessor();
    }
    ObservableAutomationApi.prototype.addContactsToAutomationSequenceUsingPOSTWithHttpInfo = function (automationId, sequenceId, addToAutomationSequenceRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_59 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_59(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_60 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_60(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationApi.prototype.addContactsToAutomationSequenceUsingPOST = function (automationId, sequenceId, addToAutomationSequenceRequest, _options) {
        return this.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAutomationApi.prototype.deleteAutomationUsingDELETEWithHttpInfo = function (automationIds, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAutomationUsingDELETE(automationIds, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_61 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_61(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_62 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_62(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteAutomationUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationApi.prototype.deleteAutomationUsingDELETE = function (automationIds, _options) {
        return this.deleteAutomationUsingDELETEWithHttpInfo(automationIds, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAutomationApi.prototype.getAutomationUsingGETWithHttpInfo = function (automationId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAutomationUsingGET(automationId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_63 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_63(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_64 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_64(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAutomationUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationApi.prototype.getAutomationUsingGET = function (automationId, _options) {
        return this.getAutomationUsingGETWithHttpInfo(automationId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAutomationApi.prototype.listAllAutomationIdsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAllAutomationIdsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_65 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_65(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_66 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_66(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listAllAutomationIdsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationApi.prototype.listAllAutomationIdsUsingGET = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        return this.listAllAutomationIdsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAutomationApi.prototype.listAutomationsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAutomationsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_67 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_67(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_68 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_68(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listAutomationsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationApi.prototype.listAutomationsUsingGET = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        return this.listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAutomationApi.prototype.updateAutomationCategoryUsingPUTWithHttpInfo = function (updateAutomationCategoryRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_69 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_69(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_70 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_70(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateAutomationCategoryUsingPUTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationApi.prototype.updateAutomationCategoryUsingPUT = function (updateAutomationCategoryRequest, _options) {
        return this.updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableAutomationApi;
}());
exports.ObservableAutomationApi = ObservableAutomationApi;
var AutomationCategoryApi_1 = require("../apis/AutomationCategoryApi");
var ObservableAutomationCategoryApi = (function () {
    function ObservableAutomationCategoryApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutomationCategoryApi_1.AutomationCategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutomationCategoryApi_1.AutomationCategoryApiResponseProcessor();
    }
    ObservableAutomationCategoryApi.prototype.createCategoryUsingPOSTWithHttpInfo = function (createAutomationCategoryRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createCategoryUsingPOST(createAutomationCategoryRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_71 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_71(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_72 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_72(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createCategoryUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationCategoryApi.prototype.createCategoryUsingPOST = function (createAutomationCategoryRequest, _options) {
        return this.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAutomationCategoryApi.prototype.deleteCategoriesUsingDELETEWithHttpInfo = function (ids, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCategoriesUsingDELETE(ids, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_73 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_73(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_74 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_74(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCategoriesUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationCategoryApi.prototype.deleteCategoriesUsingDELETE = function (ids, _options) {
        return this.deleteCategoriesUsingDELETEWithHttpInfo(ids, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAutomationCategoryApi.prototype.listCategoriesUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listCategoriesUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_75 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_75(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_76 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_76(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listCategoriesUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationCategoryApi.prototype.listCategoriesUsingGET = function (_options) {
        return this.listCategoriesUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAutomationCategoryApi.prototype.saveCategoryUsingPUTWithHttpInfo = function (saveAutomationCategoryRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.saveCategoryUsingPUT(saveAutomationCategoryRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_77 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_77(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_78 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_78(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.saveCategoryUsingPUTWithHttpInfo(rsp); }));
        }));
    };
    ObservableAutomationCategoryApi.prototype.saveCategoryUsingPUT = function (saveAutomationCategoryRequest, _options) {
        return this.saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableAutomationCategoryApi;
}());
exports.ObservableAutomationCategoryApi = ObservableAutomationCategoryApi;
var BusinessProfileApi_1 = require("../apis/BusinessProfileApi");
var ObservableBusinessProfileApi = (function () {
    function ObservableBusinessProfileApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BusinessProfileApi_1.BusinessProfileApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BusinessProfileApi_1.BusinessProfileApiResponseProcessor();
    }
    ObservableBusinessProfileApi.prototype.getBusinessProfileUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getBusinessProfileUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_79 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_79(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_80 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_80(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getBusinessProfileUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableBusinessProfileApi.prototype.getBusinessProfileUsingGET = function (_options) {
        return this.getBusinessProfileUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableBusinessProfileApi.prototype.patchBusinessProfileUsingPATCHWithHttpInfo = function (updateMask, businessProfile, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchBusinessProfileUsingPATCH(updateMask, businessProfile, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_81 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_81(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_82 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_82(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchBusinessProfileUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableBusinessProfileApi.prototype.patchBusinessProfileUsingPATCH = function (updateMask, businessProfile, _options) {
        return this.patchBusinessProfileUsingPATCHWithHttpInfo(updateMask, businessProfile, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableBusinessProfileApi;
}());
exports.ObservableBusinessProfileApi = ObservableBusinessProfileApi;
var CampaignApi_1 = require("../apis/CampaignApi");
var ObservableCampaignApi = (function () {
    function ObservableCampaignApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CampaignApi_1.CampaignApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CampaignApi_1.CampaignApiResponseProcessor();
    }
    ObservableCampaignApi.prototype.addContactsToCampaignSequenceUsingPOST1WithHttpInfo = function (campaignId, sequenceId, addContactsToSequenceRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_83 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_83(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_84 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_84(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableCampaignApi.prototype.addContactsToCampaignSequenceUsingPOST1 = function (campaignId, sequenceId, addContactsToSequenceRequest, _options) {
        return this.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCampaignApi.prototype.getCampaignUsingGET1WithHttpInfo = function (campaignId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCampaignUsingGET1(campaignId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_85 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_85(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_86 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_86(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCampaignUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableCampaignApi.prototype.getCampaignUsingGET1 = function (campaignId, _options) {
        return this.getCampaignUsingGET1WithHttpInfo(campaignId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCampaignApi.prototype.listCampaignsUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listCampaignsUsingGET1(filter, orderBy, pageSize, pageToken, stats, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_87 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_87(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_88 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_88(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listCampaignsUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableCampaignApi.prototype.listCampaignsUsingGET1 = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        return this.listCampaignsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCampaignApi.prototype.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo = function (campaignId, sequenceId, removeContactsFromSequenceRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_89 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_89(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_90 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_90(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableCampaignApi.prototype.removeContactsFromCampaignSequenceUsingPOST = function (campaignId, sequenceId, removeContactsFromSequenceRequest, _options) {
        return this.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCampaignApi;
}());
exports.ObservableCampaignApi = ObservableCampaignApi;
var CategoryDiscountApi_1 = require("../apis/CategoryDiscountApi");
var ObservableCategoryDiscountApi = (function () {
    function ObservableCategoryDiscountApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoryDiscountApi_1.CategoryDiscountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoryDiscountApi_1.CategoryDiscountApiResponseProcessor();
    }
    ObservableCategoryDiscountApi.prototype.deleteDiscountUsingDELETEWithHttpInfo = function (discountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE(discountId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_91 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_91(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_92 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_92(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteDiscountUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableCategoryDiscountApi.prototype.deleteDiscountUsingDELETE = function (discountId, _options) {
        return this.deleteDiscountUsingDELETEWithHttpInfo(discountId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCategoryDiscountApi.prototype.getDiscountUsingGETWithHttpInfo = function (discountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getDiscountUsingGET(discountId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_93 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_93(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_94 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_94(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getDiscountUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableCategoryDiscountApi.prototype.getDiscountUsingGET = function (discountId, _options) {
        return this.getDiscountUsingGETWithHttpInfo(discountId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCategoryDiscountApi;
}());
exports.ObservableCategoryDiscountApi = ObservableCategoryDiscountApi;
var CompanyApi_1 = require("../apis/CompanyApi");
var ObservableCompanyApi = (function () {
    function ObservableCompanyApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CompanyApi_1.CompanyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CompanyApi_1.CompanyApiResponseProcessor();
    }
    ObservableCompanyApi.prototype.createCompanyUsingPOST1WithHttpInfo = function (company, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createCompanyUsingPOST1(company, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_95 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_95(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_96 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_96(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createCompanyUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableCompanyApi.prototype.createCompanyUsingPOST1 = function (company, _options) {
        return this.createCompanyUsingPOST1WithHttpInfo(company, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCompanyApi.prototype.deleteCompanyUsingDELETEWithHttpInfo = function (companyId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCompanyUsingDELETE(companyId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_97 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_97(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_98 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_98(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCompanyUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableCompanyApi.prototype.deleteCompanyUsingDELETE = function (companyId, _options) {
        return this.deleteCompanyUsingDELETEWithHttpInfo(companyId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCompanyApi.prototype.getCompanyUsingGET1WithHttpInfo = function (companyId, fields, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCompanyUsingGET1(companyId, fields, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_99 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_99(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_100 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_100(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCompanyUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableCompanyApi.prototype.getCompanyUsingGET1 = function (companyId, fields, _options) {
        return this.getCompanyUsingGET1WithHttpInfo(companyId, fields, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCompanyApi.prototype.listCompaniesUsingGET1WithHttpInfo = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listCompaniesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_101 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_101(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_102 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_102(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listCompaniesUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableCompanyApi.prototype.listCompaniesUsingGET1 = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        return this.listCompaniesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCompanyApi.prototype.patchCompanyUsingPATCHWithHttpInfo = function (companyId, updateMask, company, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCompanyUsingPATCH(companyId, updateMask, company, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_103 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_103(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_104 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_104(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCompanyUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableCompanyApi.prototype.patchCompanyUsingPATCH = function (companyId, updateMask, company, _options) {
        return this.patchCompanyUsingPATCHWithHttpInfo(companyId, updateMask, company, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCompanyApi;
}());
exports.ObservableCompanyApi = ObservableCompanyApi;
var ContactApi_1 = require("../apis/ContactApi");
var ObservableContactApi = (function () {
    function ObservableContactApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContactApi_1.ContactApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContactApi_1.ContactApiResponseProcessor();
    }
    ObservableContactApi.prototype.createContactLinkTypeUsingPOSTWithHttpInfo = function (request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createContactLinkTypeUsingPOST(request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_105 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_105(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_106 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_106(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createContactLinkTypeUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.createContactLinkTypeUsingPOST = function (request, _options) {
        return this.createContactLinkTypeUsingPOSTWithHttpInfo(request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.createContactUsingPOST1WithHttpInfo = function (contact, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createContactUsingPOST1(contact, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_107 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_107(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_108 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_108(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createContactUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.createContactUsingPOST1 = function (contact, _options) {
        return this.createContactUsingPOST1WithHttpInfo(contact, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.deleteContactUsingDELETE1WithHttpInfo = function (contactId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteContactUsingDELETE1(contactId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_109 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_109(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_110 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_110(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteContactUsingDELETE1WithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.deleteContactUsingDELETE1 = function (contactId, _options) {
        return this.deleteContactUsingDELETE1WithHttpInfo(contactId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.getContactUsingGET1WithHttpInfo = function (contactId, fields, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getContactUsingGET1(contactId, fields, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_111 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_111(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_112 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_112(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getContactUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.getContactUsingGET1 = function (contactId, fields, _options) {
        return this.getContactUsingGET1WithHttpInfo(contactId, fields, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.getContactsBySearchTermUsingGETWithHttpInfo = function (searchParam, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getContactsBySearchTermUsingGET(searchParam, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_113 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_113(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_114 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_114(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getContactsBySearchTermUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.getContactsBySearchTermUsingGET = function (searchParam, _options) {
        return this.getContactsBySearchTermUsingGETWithHttpInfo(searchParam, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.linkContactsUsingPOSTWithHttpInfo = function (linkContactsRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.linkContactsUsingPOST(linkContactsRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_115 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_115(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_116 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_116(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.linkContactsUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.linkContactsUsingPOST = function (linkContactsRequest, _options) {
        return this.linkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.listContactLinkTypesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listContactLinkTypesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_117 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_117(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_118 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_118(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listContactLinkTypesUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.listContactLinkTypesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listContactLinkTypesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.listContactLinksUsingGETWithHttpInfo = function (contactId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listContactLinksUsingGET(contactId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_119 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_119(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_120 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_120(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listContactLinksUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.listContactLinksUsingGET = function (contactId, _options) {
        return this.listContactLinksUsingGETWithHttpInfo(contactId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.listContactsUsingGET1WithHttpInfo = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listContactsUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_121 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_121(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_122 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_122(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listContactsUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.listContactsUsingGET1 = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        return this.listContactsUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.listPaymentMethodsUsingGETWithHttpInfo = function (contactId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listPaymentMethodsUsingGET(contactId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_123 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_123(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_124 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_124(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listPaymentMethodsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.listPaymentMethodsUsingGET = function (contactId, _options) {
        return this.listPaymentMethodsUsingGETWithHttpInfo(contactId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.patchContactUsingPATCHWithHttpInfo = function (contactId, updateMask, contact, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchContactUsingPATCH(contactId, updateMask, contact, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_125 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_125(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_126 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_126(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchContactUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.patchContactUsingPATCH = function (contactId, updateMask, contact, _options) {
        return this.patchContactUsingPATCHWithHttpInfo(contactId, updateMask, contact, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.retrieveContactModelUsingGET1WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.retrieveContactModelUsingGET1(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_127 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_127(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_128 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_128(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.retrieveContactModelUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.retrieveContactModelUsingGET1 = function (_options) {
        return this.retrieveContactModelUsingGET1WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableContactApi.prototype.unlinkContactsUsingPOSTWithHttpInfo = function (linkContactsRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.unlinkContactsUsingPOST(linkContactsRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_129 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_129(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_130 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_130(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.unlinkContactsUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableContactApi.prototype.unlinkContactsUsingPOST = function (linkContactsRequest, _options) {
        return this.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableContactApi;
}());
exports.ObservableContactApi = ObservableContactApi;
var EmailApi_1 = require("../apis/EmailApi");
var ObservableEmailApi = (function () {
    function ObservableEmailApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailApi_1.EmailApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailApi_1.EmailApiResponseProcessor();
    }
    ObservableEmailApi.prototype.createEmailUsingPOST1WithHttpInfo = function (emailWithContent, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createEmailUsingPOST1(emailWithContent, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_131 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_131(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_132 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_132(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createEmailUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableEmailApi.prototype.createEmailUsingPOST1 = function (emailWithContent, _options) {
        return this.createEmailUsingPOST1WithHttpInfo(emailWithContent, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEmailApi.prototype.createEmailsUsingPOST1WithHttpInfo = function (createEmailsSentRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createEmailsUsingPOST1(createEmailsSentRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_133 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_133(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_134 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_134(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createEmailsUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableEmailApi.prototype.createEmailsUsingPOST1 = function (createEmailsSentRequest, _options) {
        return this.createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEmailApi.prototype.deleteEmailUsingDELETE1WithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteEmailUsingDELETE1(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_135 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_135(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_136 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_136(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteEmailUsingDELETE1WithHttpInfo(rsp); }));
        }));
    };
    ObservableEmailApi.prototype.deleteEmailUsingDELETE1 = function (id, _options) {
        return this.deleteEmailUsingDELETE1WithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEmailApi.prototype.deleteEmailsUsingPOST1WithHttpInfo = function (deleteEmailsRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteEmailsUsingPOST1(deleteEmailsRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_137 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_137(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_138 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_138(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteEmailsUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableEmailApi.prototype.deleteEmailsUsingPOST1 = function (deleteEmailsRequest, _options) {
        return this.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEmailApi.prototype.getEmailUsingGET1WithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getEmailUsingGET1(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_139 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_139(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_140 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_140(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getEmailUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableEmailApi.prototype.getEmailUsingGET1 = function (id, _options) {
        return this.getEmailUsingGET1WithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEmailApi.prototype.sendEmailUsingPOST1WithHttpInfo = function (emailSendRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.sendEmailUsingPOST1(emailSendRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_141 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_141(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_142 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_142(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.sendEmailUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableEmailApi.prototype.sendEmailUsingPOST1 = function (emailSendRequest, _options) {
        return this.sendEmailUsingPOST1WithHttpInfo(emailSendRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableEmailApi;
}());
exports.ObservableEmailApi = ObservableEmailApi;
var EmailAddressApi_1 = require("../apis/EmailAddressApi");
var ObservableEmailAddressApi = (function () {
    function ObservableEmailAddressApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailAddressApi_1.EmailAddressApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailAddressApi_1.EmailAddressApiResponseProcessor();
    }
    ObservableEmailAddressApi.prototype.getEmailAddressStatusUsingGETWithHttpInfo = function (email, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getEmailAddressStatusUsingGET(email, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_143 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_143(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_144 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_144(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getEmailAddressStatusUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableEmailAddressApi.prototype.getEmailAddressStatusUsingGET = function (email, _options) {
        return this.getEmailAddressStatusUsingGETWithHttpInfo(email, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableEmailAddressApi.prototype.updateEmailAddressOptStatusUsingPUTWithHttpInfo = function (email, updateEmailAddress, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateEmailAddressOptStatusUsingPUT(email, updateEmailAddress, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_145 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_145(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_146 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_146(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateEmailAddressOptStatusUsingPUTWithHttpInfo(rsp); }));
        }));
    };
    ObservableEmailAddressApi.prototype.updateEmailAddressOptStatusUsingPUT = function (email, updateEmailAddress, _options) {
        return this.updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableEmailAddressApi;
}());
exports.ObservableEmailAddressApi = ObservableEmailAddressApi;
var FreeTrialDiscountApi_1 = require("../apis/FreeTrialDiscountApi");
var ObservableFreeTrialDiscountApi = (function () {
    function ObservableFreeTrialDiscountApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FreeTrialDiscountApi_1.FreeTrialDiscountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FreeTrialDiscountApi_1.FreeTrialDiscountApiResponseProcessor();
    }
    ObservableFreeTrialDiscountApi.prototype.deleteDiscountUsingDELETE1WithHttpInfo = function (discountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE1(discountId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_147 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_147(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_148 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_148(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteDiscountUsingDELETE1WithHttpInfo(rsp); }));
        }));
    };
    ObservableFreeTrialDiscountApi.prototype.deleteDiscountUsingDELETE1 = function (discountId, _options) {
        return this.deleteDiscountUsingDELETE1WithHttpInfo(discountId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableFreeTrialDiscountApi;
}());
exports.ObservableFreeTrialDiscountApi = ObservableFreeTrialDiscountApi;
var FunnelIntegrationApi_1 = require("../apis/FunnelIntegrationApi");
var ObservableFunnelIntegrationApi = (function () {
    function ObservableFunnelIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunnelIntegrationApi_1.FunnelIntegrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunnelIntegrationApi_1.FunnelIntegrationApiResponseProcessor();
    }
    ObservableFunnelIntegrationApi.prototype.createFunnelIntegrationUsingPOSTWithHttpInfo = function (createFunnelIntegrationRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_149 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_149(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_150 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_150(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createFunnelIntegrationUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableFunnelIntegrationApi.prototype.createFunnelIntegrationUsingPOST = function (createFunnelIntegrationRequest, _options) {
        return this.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableFunnelIntegrationApi.prototype.createIntegrationTriggerEventUsingPOSTWithHttpInfo = function (createFunnelIntegrationTriggerEvents, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_151 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_151(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_152 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_152(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createIntegrationTriggerEventUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableFunnelIntegrationApi.prototype.createIntegrationTriggerEventUsingPOST = function (createFunnelIntegrationTriggerEvents, _options) {
        return this.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableFunnelIntegrationApi.prototype.deleteFunnelIntegrationUsingPOSTWithHttpInfo = function (deleteFunnelIntegrationRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_153 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_153(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_154 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_154(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteFunnelIntegrationUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableFunnelIntegrationApi.prototype.deleteFunnelIntegrationUsingPOST = function (deleteFunnelIntegrationRequest, _options) {
        return this.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableFunnelIntegrationApi;
}());
exports.ObservableFunnelIntegrationApi = ObservableFunnelIntegrationApi;
var LandingPagesApi_1 = require("../apis/LandingPagesApi");
var ObservableLandingPagesApi = (function () {
    function ObservableLandingPagesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LandingPagesApi_1.LandingPagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LandingPagesApi_1.LandingPagesApiResponseProcessor();
    }
    ObservableLandingPagesApi.prototype.listLandingPagesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listLandingPagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_155 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_155(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_156 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_156(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listLandingPagesUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableLandingPagesApi.prototype.listLandingPagesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listLandingPagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLandingPagesApi;
}());
exports.ObservableLandingPagesApi = ObservableLandingPagesApi;
var LeadSourcesApi_1 = require("../apis/LeadSourcesApi");
var ObservableLeadSourcesApi = (function () {
    function ObservableLeadSourcesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeadSourcesApi_1.LeadSourcesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeadSourcesApi_1.LeadSourcesApiResponseProcessor();
    }
    ObservableLeadSourcesApi.prototype.createLeadSourceUsingPOSTWithHttpInfo = function (leadsource, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createLeadSourceUsingPOST(leadsource, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_157 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_157(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_158 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_158(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createLeadSourceUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableLeadSourcesApi.prototype.createLeadSourceUsingPOST = function (leadsource, _options) {
        return this.createLeadSourceUsingPOSTWithHttpInfo(leadsource, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLeadSourcesApi.prototype.listLeadSourcesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_159 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_159(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_160 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_160(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listLeadSourcesUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableLeadSourcesApi.prototype.listLeadSourcesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLeadSourcesApi;
}());
exports.ObservableLeadSourcesApi = ObservableLeadSourcesApi;
var LocaleApi_1 = require("../apis/LocaleApi");
var ObservableLocaleApi = (function () {
    function ObservableLocaleApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocaleApi_1.LocaleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocaleApi_1.LocaleApiResponseProcessor();
    }
    ObservableLocaleApi.prototype.listCountriesUsingGET2WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listCountriesUsingGET2(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_161 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_161(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_162 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_162(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listCountriesUsingGET2WithHttpInfo(rsp); }));
        }));
    };
    ObservableLocaleApi.prototype.listCountriesUsingGET2 = function (_options) {
        return this.listCountriesUsingGET2WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLocaleApi.prototype.listProvincesForCountryUsingGETWithHttpInfo = function (countryCode, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listProvincesForCountryUsingGET(countryCode, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_163 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_163(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_164 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_164(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listProvincesForCountryUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableLocaleApi.prototype.listProvincesForCountryUsingGET = function (countryCode, _options) {
        return this.listProvincesForCountryUsingGETWithHttpInfo(countryCode, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLocaleApi;
}());
exports.ObservableLocaleApi = ObservableLocaleApi;
var MerchantApi_1 = require("../apis/MerchantApi");
var ObservableMerchantApi = (function () {
    function ObservableMerchantApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MerchantApi_1.MerchantApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MerchantApi_1.MerchantApiResponseProcessor();
    }
    ObservableMerchantApi.prototype.listMerchantsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listMerchantsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_165 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_165(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_166 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_166(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listMerchantsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableMerchantApi.prototype.listMerchantsUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableMerchantApi;
}());
exports.ObservableMerchantApi = ObservableMerchantApi;
var NoteApi_1 = require("../apis/NoteApi");
var ObservableNoteApi = (function () {
    function ObservableNoteApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NoteApi_1.NoteApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NoteApi_1.NoteApiResponseProcessor();
    }
    ObservableNoteApi.prototype.createNoteCustomFieldUsingPOST1WithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createNoteCustomFieldUsingPOST1(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_167 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_167(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_168 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_168(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createNoteCustomFieldUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableNoteApi.prototype.createNoteCustomFieldUsingPOST1 = function (customField, _options) {
        return this.createNoteCustomFieldUsingPOST1WithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableNoteApi.prototype.createNoteUsingPOST1WithHttpInfo = function (contactId, request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createNoteUsingPOST1(contactId, request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_169 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_169(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_170 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_170(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createNoteUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableNoteApi.prototype.createNoteUsingPOST1 = function (contactId, request, _options) {
        return this.createNoteUsingPOST1WithHttpInfo(contactId, request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableNoteApi.prototype.deleteNoteUsingDELETE1WithHttpInfo = function (contactId, noteId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteNoteUsingDELETE1(contactId, noteId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_171 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_171(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_172 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_172(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteNoteUsingDELETE1WithHttpInfo(rsp); }));
        }));
    };
    ObservableNoteApi.prototype.deleteNoteUsingDELETE1 = function (contactId, noteId, _options) {
        return this.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableNoteApi.prototype.getNoteUsingGET1WithHttpInfo = function (contactId, noteId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNoteUsingGET1(contactId, noteId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_173 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_173(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_174 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_174(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNoteUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableNoteApi.prototype.getNoteUsingGET1 = function (contactId, noteId, _options) {
        return this.getNoteUsingGET1WithHttpInfo(contactId, noteId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableNoteApi.prototype.listNotesUsingGET1WithHttpInfo = function (contactId, filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_175 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_175(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_176 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_176(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listNotesUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableNoteApi.prototype.listNotesUsingGET1 = function (contactId, filter, orderBy, pageSize, pageToken, _options) {
        return this.listNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableNoteApi.prototype.retrieveNoteModelUsingGET1WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.retrieveNoteModelUsingGET1(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_177 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_177(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_178 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_178(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.retrieveNoteModelUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableNoteApi.prototype.retrieveNoteModelUsingGET1 = function (_options) {
        return this.retrieveNoteModelUsingGET1WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableNoteApi.prototype.updateNoteUsingPATCHWithHttpInfo = function (contactId, noteId, updateNoteRequest, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_179 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_179(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_180 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_180(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateNoteUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableNoteApi.prototype.updateNoteUsingPATCH = function (contactId, noteId, updateNoteRequest, updateMask, _options) {
        return this.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableNoteApi.prototype.updateNotesCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateNotesCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_181 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_181(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_182 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_182(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateNotesCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableNoteApi.prototype.updateNotesCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableNoteApi;
}());
exports.ObservableNoteApi = ObservableNoteApi;
var OpportunityApi_1 = require("../apis/OpportunityApi");
var ObservableOpportunityApi = (function () {
    function ObservableOpportunityApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OpportunityApi_1.OpportunityApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OpportunityApi_1.OpportunityApiResponseProcessor();
    }
    ObservableOpportunityApi.prototype.createOpportunityCustomFieldsUsingPOSTWithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOpportunityCustomFieldsUsingPOST(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_183 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_183(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_184 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_184(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.createOpportunityCustomFieldsUsingPOST = function (customField, _options) {
        return this.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.createOpportunityStageUsingPOSTWithHttpInfo = function (opportunityStage, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOpportunityStageUsingPOST(opportunityStage, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_185 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_185(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_186 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_186(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOpportunityStageUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.createOpportunityStageUsingPOST = function (opportunityStage, _options) {
        return this.createOpportunityStageUsingPOSTWithHttpInfo(opportunityStage, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.createOpportunityUsingPOST1WithHttpInfo = function (opportunity, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOpportunityUsingPOST1(opportunity, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_187 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_187(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_188 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_188(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOpportunityUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.createOpportunityUsingPOST1 = function (opportunity, _options) {
        return this.createOpportunityUsingPOST1WithHttpInfo(opportunity, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.deleteOpportunityStageUsingDELETEWithHttpInfo = function (stageId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteOpportunityStageUsingDELETE(stageId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_189 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_189(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_190 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_190(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteOpportunityStageUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.deleteOpportunityStageUsingDELETE = function (stageId, _options) {
        return this.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.deleteOpportunityUsingDELETEWithHttpInfo = function (opportunityId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteOpportunityUsingDELETE(opportunityId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_191 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_191(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_192 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_192(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteOpportunityUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.deleteOpportunityUsingDELETE = function (opportunityId, _options) {
        return this.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.getOpportunityStageUsingGETWithHttpInfo = function (stageId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getOpportunityStageUsingGET(stageId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_193 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_193(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_194 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_194(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getOpportunityStageUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.getOpportunityStageUsingGET = function (stageId, _options) {
        return this.getOpportunityStageUsingGETWithHttpInfo(stageId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.getOpportunityUsingGET1WithHttpInfo = function (opportunityId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getOpportunityUsingGET1(opportunityId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_195 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_195(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_196 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_196(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getOpportunityUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.getOpportunityUsingGET1 = function (opportunityId, _options) {
        return this.getOpportunityUsingGET1WithHttpInfo(opportunityId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.listOpportunitiesUsingGET1WithHttpInfo = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_197 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_197(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_198 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_198(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listOpportunitiesUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.listOpportunitiesUsingGET1 = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        return this.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.listOpportunityStagesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_199 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_199(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_200 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_200(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listOpportunityStagesUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.listOpportunityStagesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.updateOpportunityCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateOpportunityCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_201 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_201(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_202 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_202(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.updateOpportunityCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOpportunityApi.prototype.updateOpportunityUsingPATCHWithHttpInfo = function (opportunityId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateOpportunityUsingPATCH(opportunityId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_203 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_203(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_204 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_204(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateOpportunityUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableOpportunityApi.prototype.updateOpportunityUsingPATCH = function (opportunityId, request, updateMask, _options) {
        return this.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableOpportunityApi;
}());
exports.ObservableOpportunityApi = ObservableOpportunityApi;
var OrdersApi_1 = require("../apis/OrdersApi");
var ObservableOrdersApi = (function () {
    function ObservableOrdersApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrdersApi_1.OrdersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrdersApi_1.OrdersApiResponseProcessor();
    }
    ObservableOrdersApi.prototype.createOrderCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOrderCustomFieldUsingPOST(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_205 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_205(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_206 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_206(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOrderCustomFieldUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.createOrderCustomFieldUsingPOST = function (customField, _options) {
        return this.createOrderCustomFieldUsingPOSTWithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOrdersApi.prototype.createOrderItemsOnOrderUsingPOST1WithHttpInfo = function (orderId, createRestOrderItemRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_207 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_207(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_208 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_208(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOrderItemsOnOrderUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.createOrderItemsOnOrderUsingPOST1 = function (orderId, createRestOrderItemRequest, _options) {
        return this.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOrdersApi.prototype.createOrderUsingPOST1WithHttpInfo = function (createOrderRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOrderUsingPOST1(createOrderRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_209 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_209(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_210 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_210(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOrderUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.createOrderUsingPOST1 = function (createOrderRequest, _options) {
        return this.createOrderUsingPOST1WithHttpInfo(createOrderRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOrdersApi.prototype.createPaymentOnOrderUsingPOST1WithHttpInfo = function (orderId, createPaymentRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_211 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_211(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_212 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_212(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createPaymentOnOrderUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.createPaymentOnOrderUsingPOST1 = function (orderId, createPaymentRequest, _options) {
        return this.createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOrdersApi.prototype.deleteOrderUsingDELETE1WithHttpInfo = function (orderId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteOrderUsingDELETE1(orderId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_213 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_213(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_214 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_214(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteOrderUsingDELETE1WithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.deleteOrderUsingDELETE1 = function (orderId, _options) {
        return this.deleteOrderUsingDELETE1WithHttpInfo(orderId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOrdersApi.prototype.getOrderUsingGET1WithHttpInfo = function (orderId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getOrderUsingGET1(orderId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_215 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_215(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_216 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_216(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getOrderUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.getOrderUsingGET1 = function (orderId, _options) {
        return this.getOrderUsingGET1WithHttpInfo(orderId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOrdersApi.prototype.listOrdersUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listOrdersUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_217 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_217(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_218 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_218(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listOrdersUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.listOrdersUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listOrdersUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOrdersApi.prototype.patchOrderUsingPATCHWithHttpInfo = function (orderId, updateMask, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchOrderUsingPATCH(orderId, updateMask, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_219 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_219(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_220 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_220(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchOrderUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.patchOrderUsingPATCH = function (orderId, updateMask, order, _options) {
        return this.patchOrderUsingPATCHWithHttpInfo(orderId, updateMask, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOrdersApi.prototype.retrieveOrderCustomFieldModelUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.retrieveOrderCustomFieldModelUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_221 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_221(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_222 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_222(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.retrieveOrderCustomFieldModelUsingGET = function (_options) {
        return this.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableOrdersApi.prototype.updateOrderCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateOrderCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_223 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_223(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_224 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_224(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateOrderCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableOrdersApi.prototype.updateOrderCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableOrdersApi;
}());
exports.ObservableOrdersApi = ObservableOrdersApi;
var PaymentMethodConfigApi_1 = require("../apis/PaymentMethodConfigApi");
var ObservablePaymentMethodConfigApi = (function () {
    function ObservablePaymentMethodConfigApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentMethodConfigApi_1.PaymentMethodConfigApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentMethodConfigApi_1.PaymentMethodConfigApiResponseProcessor();
    }
    ObservablePaymentMethodConfigApi.prototype.createPaymentMethodConfigUsingPOSTWithHttpInfo = function (request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createPaymentMethodConfigUsingPOST(request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_225 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_225(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_226 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_226(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createPaymentMethodConfigUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePaymentMethodConfigApi.prototype.createPaymentMethodConfigUsingPOST = function (request, _options) {
        return this.createPaymentMethodConfigUsingPOSTWithHttpInfo(request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePaymentMethodConfigApi;
}());
exports.ObservablePaymentMethodConfigApi = ObservablePaymentMethodConfigApi;
var PreReleaseApi_1 = require("../apis/PreReleaseApi");
var ObservablePreReleaseApi = (function () {
    function ObservablePreReleaseApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PreReleaseApi_1.PreReleaseApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PreReleaseApi_1.PreReleaseApiResponseProcessor();
    }
    ObservablePreReleaseApi.prototype.addAffiliateToProgramUsingPOSTWithHttpInfo = function (id, affiliateAddToProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_227 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_227(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_228 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_228(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.addAffiliateToProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.addAffiliateToProgramUsingPOST = function (id, affiliateAddToProgramRequest, _options) {
        return this.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.addCommissionProgramUsingPOSTWithHttpInfo = function (insertCommissionProgram, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.addCommissionProgramUsingPOST(insertCommissionProgram, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_229 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_229(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_230 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_230(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.addCommissionProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.addCommissionProgramUsingPOST = function (insertCommissionProgram, _options) {
        return this.addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.assignProductCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, productCommissionProgram, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.assignProductCommissionProgramUsingPOST(commissionProgramId, productCommissionProgram, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_231 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_231(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_232 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_232(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.assignProductCommissionProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.assignProductCommissionProgramUsingPOST = function (commissionProgramId, productCommissionProgram, _options) {
        return this.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, productCommissionProgram, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, subscriptionCommissionProgram, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, subscriptionCommissionProgram, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_233 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_233(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_234 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_234(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.assignSubscriptionCommissionProgramUsingPOST = function (commissionProgramId, subscriptionCommissionProgram, _options) {
        return this.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, subscriptionCommissionProgram, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.cancelSubscriptionUsingPOSTWithHttpInfo = function (subscriptionId, cancelSubscriptionsRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_235 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_235(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_236 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_236(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.cancelSubscriptionUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.cancelSubscriptionUsingPOST = function (subscriptionId, cancelSubscriptionsRequest, _options) {
        return this.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createAffiliateCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createAffiliateCustomFieldUsingPOST(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_237 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_237(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_238 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_238(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createAffiliateCustomFieldUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createAffiliateCustomFieldUsingPOST = function (customField, _options) {
        return this.createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createDefaultCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, createDefaultCommissionProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_239 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_239(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_240 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_240(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createDefaultCommissionProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createDefaultCommissionProgramUsingPOST = function (commissionProgramId, createDefaultCommissionProgramRequest, _options) {
        return this.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createFunnelIntegrationUsingPOSTWithHttpInfo = function (createFunnelIntegrationRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_241 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_241(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_242 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_242(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createFunnelIntegrationUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createFunnelIntegrationUsingPOST = function (createFunnelIntegrationRequest, _options) {
        return this.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createIntegrationTriggerEventUsingPOSTWithHttpInfo = function (createFunnelIntegrationTriggerEvents, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_243 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_243(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_244 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_244(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createIntegrationTriggerEventUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createIntegrationTriggerEventUsingPOST = function (createFunnelIntegrationTriggerEvents, _options) {
        return this.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createLeadSourceUsingPOSTWithHttpInfo = function (leadsource, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createLeadSourceUsingPOST(leadsource, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_245 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_245(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_246 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_246(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createLeadSourceUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createLeadSourceUsingPOST = function (leadsource, _options) {
        return this.createLeadSourceUsingPOSTWithHttpInfo(leadsource, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createNoteCustomFieldUsingPOST1WithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createNoteCustomFieldUsingPOST1(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_247 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_247(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_248 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_248(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createNoteCustomFieldUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createNoteCustomFieldUsingPOST1 = function (customField, _options) {
        return this.createNoteCustomFieldUsingPOST1WithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createOpportunityCustomFieldsUsingPOSTWithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOpportunityCustomFieldsUsingPOST(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_249 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_249(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_250 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_250(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createOpportunityCustomFieldsUsingPOST = function (customField, _options) {
        return this.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createOpportunityStageUsingPOSTWithHttpInfo = function (opportunityStage, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOpportunityStageUsingPOST(opportunityStage, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_251 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_251(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_252 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_252(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOpportunityStageUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createOpportunityStageUsingPOST = function (opportunityStage, _options) {
        return this.createOpportunityStageUsingPOSTWithHttpInfo(opportunityStage, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createOpportunityUsingPOST1WithHttpInfo = function (opportunity, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOpportunityUsingPOST1(opportunity, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_253 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_253(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_254 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_254(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOpportunityUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createOpportunityUsingPOST1 = function (opportunity, _options) {
        return this.createOpportunityUsingPOST1WithHttpInfo(opportunity, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createOrderCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOrderCustomFieldUsingPOST(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_255 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_255(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_256 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_256(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOrderCustomFieldUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createOrderCustomFieldUsingPOST = function (customField, _options) {
        return this.createOrderCustomFieldUsingPOSTWithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createOrderItemsOnOrderUsingPOST1WithHttpInfo = function (orderId, createRestOrderItemRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_257 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_257(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_258 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_258(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOrderItemsOnOrderUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createOrderItemsOnOrderUsingPOST1 = function (orderId, createRestOrderItemRequest, _options) {
        return this.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createOrderUsingPOST1WithHttpInfo = function (createOrderRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createOrderUsingPOST1(createOrderRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_259 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_259(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_260 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_260(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createOrderUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createOrderUsingPOST1 = function (createOrderRequest, _options) {
        return this.createOrderUsingPOST1WithHttpInfo(createOrderRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createRedirectLinkUsingPOSTWithHttpInfo = function (request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createRedirectLinkUsingPOST(request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_261 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_261(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_262 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_262(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createRedirectLinkUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createRedirectLinkUsingPOST = function (request, _options) {
        return this.createRedirectLinkUsingPOSTWithHttpInfo(request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createReferralUsingPOSTWithHttpInfo = function (request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createReferralUsingPOST(request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_263 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_263(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_264 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_264(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createReferralUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createReferralUsingPOST = function (request, _options) {
        return this.createReferralUsingPOSTWithHttpInfo(request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createSubscriptionCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createSubscriptionCustomFieldUsingPOST(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_265 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_265(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_266 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_266(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createSubscriptionCustomFieldUsingPOST = function (customField, _options) {
        return this.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createTaskCustomFieldUsingPOST1WithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createTaskCustomFieldUsingPOST1(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_267 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_267(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_268 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_268(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createTaskCustomFieldUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createTaskCustomFieldUsingPOST1 = function (customField, _options) {
        return this.createTaskCustomFieldUsingPOST1WithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createTaskUsingPOST1WithHttpInfo = function (task, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createTaskUsingPOST1(task, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_269 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_269(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_270 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_270(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createTaskUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createTaskUsingPOST1 = function (task, _options) {
        return this.createTaskUsingPOST1WithHttpInfo(task, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.createUserUsingPOST1WithHttpInfo = function (user, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createUserUsingPOST1(user, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_271 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_271(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_272 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_272(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createUserUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.createUserUsingPOST1 = function (user, _options) {
        return this.createUserUsingPOST1WithHttpInfo(user, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo = function (commissionProgramId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_273 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_273(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_274 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_274(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteAffiliateCommissionProgramUsingDELETE = function (commissionProgramId, _options) {
        return this.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteAffiliateUsingDELETEWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAffiliateUsingDELETE(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_275 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_275(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_276 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_276(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteAffiliateUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteAffiliateUsingDELETE = function (id, _options) {
        return this.deleteAffiliateUsingDELETEWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteDiscountUsingDELETEWithHttpInfo = function (discountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE(discountId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_277 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_277(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_278 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_278(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteDiscountUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteDiscountUsingDELETE = function (discountId, _options) {
        return this.deleteDiscountUsingDELETEWithHttpInfo(discountId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteDiscountUsingDELETE1WithHttpInfo = function (discountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE1(discountId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_279 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_279(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_280 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_280(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteDiscountUsingDELETE1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteDiscountUsingDELETE1 = function (discountId, _options) {
        return this.deleteDiscountUsingDELETE1WithHttpInfo(discountId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteFunnelIntegrationUsingPOSTWithHttpInfo = function (deleteFunnelIntegrationRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_281 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_281(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_282 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_282(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteFunnelIntegrationUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteFunnelIntegrationUsingPOST = function (deleteFunnelIntegrationRequest, _options) {
        return this.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteOpportunityStageUsingDELETEWithHttpInfo = function (stageId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteOpportunityStageUsingDELETE(stageId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_283 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_283(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_284 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_284(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteOpportunityStageUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteOpportunityStageUsingDELETE = function (stageId, _options) {
        return this.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteOpportunityUsingDELETEWithHttpInfo = function (opportunityId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteOpportunityUsingDELETE(opportunityId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_285 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_285(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_286 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_286(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteOpportunityUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteOpportunityUsingDELETE = function (opportunityId, _options) {
        return this.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteOrderUsingDELETE1WithHttpInfo = function (orderId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteOrderUsingDELETE1(orderId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_287 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_287(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_288 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_288(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteOrderUsingDELETE1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteOrderUsingDELETE1 = function (orderId, _options) {
        return this.deleteOrderUsingDELETE1WithHttpInfo(orderId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteRedirectLinkUsingDELETEWithHttpInfo = function (redirectId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteRedirectLinkUsingDELETE(redirectId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_289 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_289(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_290 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_290(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteRedirectLinkUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteRedirectLinkUsingDELETE = function (redirectId, _options) {
        return this.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteTaskCustomFieldUsingDELETEWithHttpInfo = function (customFieldId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteTaskCustomFieldUsingDELETE(customFieldId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_291 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_291(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_292 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_292(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteTaskCustomFieldUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteTaskCustomFieldUsingDELETE = function (customFieldId, _options) {
        return this.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.deleteTaskUsingDELETE1WithHttpInfo = function (taskId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteTaskUsingDELETE1(taskId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_293 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_293(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_294 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_294(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteTaskUsingDELETE1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.deleteTaskUsingDELETE1 = function (taskId, _options) {
        return this.deleteTaskUsingDELETE1WithHttpInfo(taskId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getAffiliateCommissionTotalUsingGETWithHttpInfo = function (affiliateId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAffiliateCommissionTotalUsingGET(affiliateId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_295 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_295(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_296 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_296(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAffiliateCommissionTotalUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getAffiliateCommissionTotalUsingGET = function (affiliateId, _options) {
        return this.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getAffiliateCommissionsUsingGETWithHttpInfo = function (affiliateId, filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_297 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_297(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_298 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_298(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAffiliateCommissionsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getAffiliateCommissionsUsingGET = function (affiliateId, filter, orderBy, pageSize, pageToken, _options) {
        return this.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getAffiliateCustomFieldsUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAffiliateCustomFieldsUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_299 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_299(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_300 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_300(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAffiliateCustomFieldsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getAffiliateCustomFieldsUsingGET = function (_options) {
        return this.getAffiliateCustomFieldsUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getCommissionProgramUsingGETWithHttpInfo = function (commissionProgramId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCommissionProgramUsingGET(commissionProgramId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_301 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_301(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_302 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_302(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCommissionProgramUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getCommissionProgramUsingGET = function (commissionProgramId, _options) {
        return this.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getContactsBySearchTermUsingGETWithHttpInfo = function (searchParam, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getContactsBySearchTermUsingGET(searchParam, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_303 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_303(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_304 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_304(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getContactsBySearchTermUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getContactsBySearchTermUsingGET = function (searchParam, _options) {
        return this.getContactsBySearchTermUsingGETWithHttpInfo(searchParam, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getDiscountUsingGETWithHttpInfo = function (discountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getDiscountUsingGET(discountId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_305 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_305(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_306 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_306(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getDiscountUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getDiscountUsingGET = function (discountId, _options) {
        return this.getDiscountUsingGETWithHttpInfo(discountId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getOpportunityStageUsingGETWithHttpInfo = function (stageId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getOpportunityStageUsingGET(stageId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_307 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_307(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_308 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_308(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getOpportunityStageUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getOpportunityStageUsingGET = function (stageId, _options) {
        return this.getOpportunityStageUsingGETWithHttpInfo(stageId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getOpportunityUsingGET1WithHttpInfo = function (opportunityId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getOpportunityUsingGET1(opportunityId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_309 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_309(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_310 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_310(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getOpportunityUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getOpportunityUsingGET1 = function (opportunityId, _options) {
        return this.getOpportunityUsingGET1WithHttpInfo(opportunityId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getOrderUsingGET1WithHttpInfo = function (orderId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getOrderUsingGET1(orderId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_311 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_311(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_312 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_312(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getOrderUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getOrderUsingGET1 = function (orderId, _options) {
        return this.getOrderUsingGET1WithHttpInfo(orderId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getRedirectLinkUsingGETWithHttpInfo = function (redirectId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getRedirectLinkUsingGET(redirectId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_313 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_313(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_314 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_314(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getRedirectLinkUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getRedirectLinkUsingGET = function (redirectId, _options) {
        return this.getRedirectLinkUsingGETWithHttpInfo(redirectId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getTaskUsingGET1WithHttpInfo = function (taskId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getTaskUsingGET1(taskId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_315 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_315(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_316 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_316(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getTaskUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getTaskUsingGET1 = function (taskId, _options) {
        return this.getTaskUsingGET1WithHttpInfo(taskId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getUserByIdUsingGETWithHttpInfo = function (userId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUserByIdUsingGET(userId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_317 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_317(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_318 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_318(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getUserByIdUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getUserByIdUsingGET = function (userId, _options) {
        return this.getUserByIdUsingGETWithHttpInfo(userId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getUserInfoUsingGET1WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUserInfoUsingGET1(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_319 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_319(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_320 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_320(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getUserInfoUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getUserInfoUsingGET1 = function (_options) {
        return this.getUserInfoUsingGET1WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.getUserSignatureUsingGET1WithHttpInfo = function (userId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUserSignatureUsingGET1(userId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_321 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_321(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_322 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_322(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getUserSignatureUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.getUserSignatureUsingGET1 = function (userId, _options) {
        return this.getUserSignatureUsingGET1WithHttpInfo(userId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listAffiliateCommissionProgramsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_323 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_323(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_324 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_324(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listAffiliateCommissionProgramsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listAffiliateCommissionProgramsUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listAffiliateLinksUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_325 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_325(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_326 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_326(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listAffiliateLinksUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listAffiliateLinksUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listCountriesUsingGET2WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listCountriesUsingGET2(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_327 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_327(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_328 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_328(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listCountriesUsingGET2WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listCountriesUsingGET2 = function (_options) {
        return this.listCountriesUsingGET2WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listLandingPagesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listLandingPagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_329 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_329(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_330 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_330(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listLandingPagesUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listLandingPagesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listLandingPagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listLeadSourcesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_331 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_331(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_332 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_332(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listLeadSourcesUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listLeadSourcesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listMerchantsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listMerchantsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_333 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_333(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_334 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_334(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listMerchantsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listMerchantsUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listOpportunitiesUsingGET1WithHttpInfo = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_335 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_335(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_336 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_336(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listOpportunitiesUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listOpportunitiesUsingGET1 = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        return this.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listOpportunityStagesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_337 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_337(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_338 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_338(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listOpportunityStagesUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listOpportunityStagesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listOrdersUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listOrdersUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_339 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_339(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_340 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_340(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listOrdersUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listOrdersUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listOrdersUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listProductsUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listProductsUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_341 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_341(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_342 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_342(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listProductsUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listProductsUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listProvincesForCountryUsingGETWithHttpInfo = function (countryCode, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listProvincesForCountryUsingGET(countryCode, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_343 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_343(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_344 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_344(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listProvincesForCountryUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listProvincesForCountryUsingGET = function (countryCode, _options) {
        return this.listProvincesForCountryUsingGETWithHttpInfo(countryCode, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listShippingMethodsUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listShippingMethodsUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_345 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_345(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_346 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_346(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listShippingMethodsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listShippingMethodsUsingGET = function (_options) {
        return this.listShippingMethodsUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listSubscriptionPlansUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_347 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_347(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_348 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_348(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listSubscriptionPlansUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listSubscriptionPlansUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listSummariesUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_349 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_349(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_350 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_350(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listSummariesUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listSummariesUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listTasksUsingGET1WithHttpInfo = function (endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_351 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_351(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_352 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_352(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listTasksUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listTasksUsingGET1 = function (endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options) {
        return this.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.listUsersUsingGET1WithHttpInfo = function (filter, orderBy, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listUsersUsingGET1(filter, orderBy, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_353 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_353(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_354 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_354(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listUsersUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.listUsersUsingGET1 = function (filter, orderBy, _options) {
        return this.listUsersUsingGET1WithHttpInfo(filter, orderBy, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.patchDefaultCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_355 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_355(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_356 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_356(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.patchDefaultCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options) {
        return this.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.patchOrderUsingPATCHWithHttpInfo = function (orderId, updateMask, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchOrderUsingPATCH(orderId, updateMask, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_357 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_357(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_358 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_358(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchOrderUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.patchOrderUsingPATCH = function (orderId, updateMask, order, _options) {
        return this.patchOrderUsingPATCHWithHttpInfo(orderId, updateMask, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.patchProductCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_359 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_359(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_360 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_360(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchProductCommissionProgramUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.patchProductCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options) {
        return this.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_361 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_361(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_362 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_362(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.patchSubscriptionCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options) {
        return this.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.patchTaskUsingPATCHWithHttpInfo = function (taskId, updateMask, task, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchTaskUsingPATCH(taskId, updateMask, task, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_363 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_363(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_364 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_364(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchTaskUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.patchTaskUsingPATCH = function (taskId, updateMask, task, _options) {
        return this.patchTaskUsingPATCHWithHttpInfo(taskId, updateMask, task, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.patchUserUsingPATCHWithHttpInfo = function (userId, updateMask, user, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchUserUsingPATCH(userId, updateMask, user, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_365 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_365(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_366 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_366(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchUserUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.patchUserUsingPATCH = function (userId, updateMask, user, _options) {
        return this.patchUserUsingPATCHWithHttpInfo(userId, updateMask, user, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.removeAffiliateFromProgramUsingPOSTWithHttpInfo = function (id, removeFromProgramRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.removeAffiliateFromProgramUsingPOST(id, removeFromProgramRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_367 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_367(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_368 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_368(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.removeAffiliateFromProgramUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.removeAffiliateFromProgramUsingPOST = function (id, removeFromProgramRequest, _options) {
        return this.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo = function (commissionId, deleteSubscriptionPlanCommissionRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_369 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_369(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_370 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_370(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOST = function (commissionId, deleteSubscriptionPlanCommissionRequest, _options) {
        return this.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.retrieveNoteModelUsingGET1WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.retrieveNoteModelUsingGET1(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_371 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_371(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_372 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_372(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.retrieveNoteModelUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.retrieveNoteModelUsingGET1 = function (_options) {
        return this.retrieveNoteModelUsingGET1WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.retrieveOrderCustomFieldModelUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.retrieveOrderCustomFieldModelUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_373 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_373(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_374 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_374(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.retrieveOrderCustomFieldModelUsingGET = function (_options) {
        return this.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.retrieveSubscriptionCustomFieldModelUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_375 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_375(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_376 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_376(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.retrieveSubscriptionCustomFieldModelUsingGET = function (_options) {
        return this.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.retrieveTaskModelUsingGET1WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.retrieveTaskModelUsingGET1(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_377 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_377(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_378 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_378(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.retrieveTaskModelUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.retrieveTaskModelUsingGET1 = function (_options) {
        return this.retrieveTaskModelUsingGET1WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.updateAffiliateCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateAffiliateCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_379 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_379(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_380 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_380(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.updateAffiliateCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.updateNotesCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateNotesCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_381 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_381(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_382 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_382(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateNotesCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.updateNotesCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.updateOpportunityCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateOpportunityCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_383 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_383(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_384 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_384(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.updateOpportunityCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.updateOpportunityUsingPATCHWithHttpInfo = function (opportunityId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateOpportunityUsingPATCH(opportunityId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_385 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_385(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_386 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_386(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateOpportunityUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.updateOpportunityUsingPATCH = function (opportunityId, request, updateMask, _options) {
        return this.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.updateOrderCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateOrderCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_387 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_387(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_388 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_388(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateOrderCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.updateOrderCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.updateRedirectLinkUsingPATCHWithHttpInfo = function (redirectId, request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateRedirectLinkUsingPATCH(redirectId, request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_389 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_389(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_390 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_390(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateRedirectLinkUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.updateRedirectLinkUsingPATCH = function (redirectId, request, _options) {
        return this.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_391 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_391(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_392 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_392(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.updateSubscriptionCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePreReleaseApi.prototype.updateTaskCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateTaskCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_393 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_393(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_394 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_394(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateTaskCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservablePreReleaseApi.prototype.updateTaskCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePreReleaseApi;
}());
exports.ObservablePreReleaseApi = ObservablePreReleaseApi;
var ProductApi_1 = require("../apis/ProductApi");
var ObservableProductApi = (function () {
    function ObservableProductApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductApi_1.ProductApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductApi_1.ProductApiResponseProcessor();
    }
    ObservableProductApi.prototype.listProductsUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listProductsUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_395 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_395(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_396 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_396(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listProductsUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableProductApi.prototype.listProductsUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableProductApi;
}());
exports.ObservableProductApi = ObservableProductApi;
var ReferralApi_1 = require("../apis/ReferralApi");
var ObservableReferralApi = (function () {
    function ObservableReferralApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReferralApi_1.ReferralApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReferralApi_1.ReferralApiResponseProcessor();
    }
    ObservableReferralApi.prototype.createReferralUsingPOSTWithHttpInfo = function (request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createReferralUsingPOST(request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_397 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_397(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_398 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_398(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createReferralUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableReferralApi.prototype.createReferralUsingPOST = function (request, _options) {
        return this.createReferralUsingPOSTWithHttpInfo(request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableReferralApi;
}());
exports.ObservableReferralApi = ObservableReferralApi;
var ReportingApi_1 = require("../apis/ReportingApi");
var ObservableReportingApi = (function () {
    function ObservableReportingApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReportingApi_1.ReportingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReportingApi_1.ReportingApiResponseProcessor();
    }
    ObservableReportingApi.prototype.runReportUsingPOSTWithHttpInfo = function (reportId, fields, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.runReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_399 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_399(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_400 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_400(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.runReportUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableReportingApi.prototype.runReportUsingPOST = function (reportId, fields, orderBy, pageSize, pageToken, _options) {
        return this.runReportUsingPOSTWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableReportingApi;
}());
exports.ObservableReportingApi = ObservableReportingApi;
var SalesApi_1 = require("../apis/SalesApi");
var ObservableSalesApi = (function () {
    function ObservableSalesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SalesApi_1.SalesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SalesApi_1.SalesApiResponseProcessor();
    }
    ObservableSalesApi.prototype.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo = function (id, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.setMerchantGatewayAsDefaultUsingPOST(id, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_401 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_401(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_402 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_402(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableSalesApi.prototype.setMerchantGatewayAsDefaultUsingPOST = function (id, _options) {
        return this.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableSalesApi;
}());
exports.ObservableSalesApi = ObservableSalesApi;
var SettingsApi_1 = require("../apis/SettingsApi");
var ObservableSettingsApi = (function () {
    function ObservableSettingsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApi_1.SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApi_1.SettingsApiResponseProcessor();
    }
    ObservableSettingsApi.prototype.getApplicationConfigurationsUsingGETWithHttpInfo = function (fields, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getApplicationConfigurationsUsingGET(fields, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_403 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_403(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_404 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_404(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getApplicationConfigurationsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableSettingsApi.prototype.getApplicationConfigurationsUsingGET = function (fields, _options) {
        return this.getApplicationConfigurationsUsingGETWithHttpInfo(fields, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableSettingsApi.prototype.getContactOptionTypesUsingGET1WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getContactOptionTypesUsingGET1(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_405 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_405(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_406 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_406(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getContactOptionTypesUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableSettingsApi.prototype.getContactOptionTypesUsingGET1 = function (_options) {
        return this.getContactOptionTypesUsingGET1WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableSettingsApi.prototype.isApplicationEnabledUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.isApplicationEnabledUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_407 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_407(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_408 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_408(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.isApplicationEnabledUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableSettingsApi.prototype.isApplicationEnabledUsingGET = function (_options) {
        return this.isApplicationEnabledUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableSettingsApi;
}());
exports.ObservableSettingsApi = ObservableSettingsApi;
var ShippingApi_1 = require("../apis/ShippingApi");
var ObservableShippingApi = (function () {
    function ObservableShippingApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ShippingApi_1.ShippingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ShippingApi_1.ShippingApiResponseProcessor();
    }
    ObservableShippingApi.prototype.listShippingMethodsUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listShippingMethodsUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_409 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_409(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_410 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_410(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listShippingMethodsUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableShippingApi.prototype.listShippingMethodsUsingGET = function (_options) {
        return this.listShippingMethodsUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableShippingApi;
}());
exports.ObservableShippingApi = ObservableShippingApi;
var SubscriptionPlansApi_1 = require("../apis/SubscriptionPlansApi");
var ObservableSubscriptionPlansApi = (function () {
    function ObservableSubscriptionPlansApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionPlansApi_1.SubscriptionPlansApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionPlansApi_1.SubscriptionPlansApiResponseProcessor();
    }
    ObservableSubscriptionPlansApi.prototype.listSubscriptionPlansUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_411 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_411(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_412 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_412(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listSubscriptionPlansUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableSubscriptionPlansApi.prototype.listSubscriptionPlansUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableSubscriptionPlansApi;
}());
exports.ObservableSubscriptionPlansApi = ObservableSubscriptionPlansApi;
var SubscriptionsApi_1 = require("../apis/SubscriptionsApi");
var ObservableSubscriptionsApi = (function () {
    function ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionsApi_1.SubscriptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionsApi_1.SubscriptionsApiResponseProcessor();
    }
    ObservableSubscriptionsApi.prototype.cancelSubscriptionUsingPOSTWithHttpInfo = function (subscriptionId, cancelSubscriptionsRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_413 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_413(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_414 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_414(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.cancelSubscriptionUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableSubscriptionsApi.prototype.cancelSubscriptionUsingPOST = function (subscriptionId, cancelSubscriptionsRequest, _options) {
        return this.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableSubscriptionsApi.prototype.createSubscriptionCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createSubscriptionCustomFieldUsingPOST(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_415 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_415(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_416 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_416(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableSubscriptionsApi.prototype.createSubscriptionCustomFieldUsingPOST = function (customField, _options) {
        return this.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableSubscriptionsApi.prototype.createSubscriptionV2UsingPOSTWithHttpInfo = function (createSubscriptionV2, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createSubscriptionV2UsingPOST(createSubscriptionV2, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_417 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_417(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_418 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_418(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createSubscriptionV2UsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableSubscriptionsApi.prototype.createSubscriptionV2UsingPOST = function (createSubscriptionV2, _options) {
        return this.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableSubscriptionsApi.prototype.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.retrieveSubscriptionCustomFieldModelUsingGET(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_419 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_419(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_420 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_420(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableSubscriptionsApi.prototype.retrieveSubscriptionCustomFieldModelUsingGET = function (_options) {
        return this.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableSubscriptionsApi.prototype.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_421 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_421(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_422 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_422(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableSubscriptionsApi.prototype.updateSubscriptionCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableSubscriptionsApi;
}());
exports.ObservableSubscriptionsApi = ObservableSubscriptionsApi;
var TagsApi_1 = require("../apis/TagsApi");
var ObservableTagsApi = (function () {
    function ObservableTagsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsApi_1.TagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsApi_1.TagsApiResponseProcessor();
    }
    ObservableTagsApi.prototype.applyTagsUsingPOSTWithHttpInfo = function (tagId, applyRemoveTagRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.applyTagsUsingPOST(tagId, applyRemoveTagRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_423 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_423(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_424 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_424(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.applyTagsUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.applyTagsUsingPOST = function (tagId, applyRemoveTagRequest, _options) {
        return this.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.createTagCategoryUsingPOST1WithHttpInfo = function (request, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createTagCategoryUsingPOST1(request, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_425 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_425(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_426 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_426(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createTagCategoryUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.createTagCategoryUsingPOST1 = function (request, _options) {
        return this.createTagCategoryUsingPOST1WithHttpInfo(request, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.createTagUsingPOST1WithHttpInfo = function (tag, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createTagUsingPOST1(tag, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_427 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_427(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_428 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_428(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createTagUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.createTagUsingPOST1 = function (tag, _options) {
        return this.createTagUsingPOST1WithHttpInfo(tag, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.deleteTagCategoryUsingDELETEWithHttpInfo = function (tagCategoryId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteTagCategoryUsingDELETE(tagCategoryId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_429 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_429(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_430 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_430(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteTagCategoryUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.deleteTagCategoryUsingDELETE = function (tagCategoryId, _options) {
        return this.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.deleteTagUsingDELETEWithHttpInfo = function (tagId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteTagUsingDELETE(tagId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_431 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_431(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_432 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_432(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteTagUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.deleteTagUsingDELETE = function (tagId, _options) {
        return this.deleteTagUsingDELETEWithHttpInfo(tagId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.getCategoryUsingGETWithHttpInfo = function (tagCategoryId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCategoryUsingGET(tagCategoryId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_433 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_433(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_434 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_434(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCategoryUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.getCategoryUsingGET = function (tagCategoryId, _options) {
        return this.getCategoryUsingGETWithHttpInfo(tagCategoryId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.getTagUsingGET1WithHttpInfo = function (tagId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getTagUsingGET1(tagId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_435 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_435(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_436 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_436(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getTagUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.getTagUsingGET1 = function (tagId, _options) {
        return this.getTagUsingGET1WithHttpInfo(tagId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.listCompaniesForTagIdUsingGET1WithHttpInfo = function (tagId, filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_437 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_437(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_438 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_438(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listCompaniesForTagIdUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.listCompaniesForTagIdUsingGET1 = function (tagId, filter, orderBy, pageSize, pageToken, _options) {
        return this.listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.listContactsWithTagIdUsingGETWithHttpInfo = function (tagId, filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_439 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_439(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_440 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_440(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listContactsWithTagIdUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.listContactsWithTagIdUsingGET = function (tagId, filter, orderBy, pageSize, pageToken, _options) {
        return this.listContactsWithTagIdUsingGETWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.listTagCategoriesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_441 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_441(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_442 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_442(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listTagCategoriesUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.listTagCategoriesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listTagCategoriesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.listTagsUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listTagsUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_443 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_443(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_444 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_444(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listTagsUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.listTagsUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        return this.listTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.patchTagCategoryUsingPATCHWithHttpInfo = function (tagCategoryId, updateMask, tagCategory, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchTagCategoryUsingPATCH(tagCategoryId, updateMask, tagCategory, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_445 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_445(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_446 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_446(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchTagCategoryUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.patchTagCategoryUsingPATCH = function (tagCategoryId, updateMask, tagCategory, _options) {
        return this.patchTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, tagCategory, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.patchTagUsingPATCHWithHttpInfo = function (tagId, updateMask, tag, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchTagUsingPATCH(tagId, updateMask, tag, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_447 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_447(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_448 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_448(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchTagUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.patchTagUsingPATCH = function (tagId, updateMask, tag, _options) {
        return this.patchTagUsingPATCHWithHttpInfo(tagId, updateMask, tag, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTagsApi.prototype.removeTagsUsingPOSTWithHttpInfo = function (tagId, applyRemoveTagRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.removeTagsUsingPOST(tagId, applyRemoveTagRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_449 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_449(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_450 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_450(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.removeTagsUsingPOSTWithHttpInfo(rsp); }));
        }));
    };
    ObservableTagsApi.prototype.removeTagsUsingPOST = function (tagId, applyRemoveTagRequest, _options) {
        return this.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableTagsApi;
}());
exports.ObservableTagsApi = ObservableTagsApi;
var TaskApi_1 = require("../apis/TaskApi");
var ObservableTaskApi = (function () {
    function ObservableTaskApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TaskApi_1.TaskApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TaskApi_1.TaskApiResponseProcessor();
    }
    ObservableTaskApi.prototype.createTaskCustomFieldUsingPOST1WithHttpInfo = function (customField, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createTaskCustomFieldUsingPOST1(customField, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_451 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_451(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_452 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_452(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createTaskCustomFieldUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTaskApi.prototype.createTaskCustomFieldUsingPOST1 = function (customField, _options) {
        return this.createTaskCustomFieldUsingPOST1WithHttpInfo(customField, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTaskApi.prototype.createTaskUsingPOST1WithHttpInfo = function (task, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createTaskUsingPOST1(task, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_453 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_453(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_454 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_454(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createTaskUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTaskApi.prototype.createTaskUsingPOST1 = function (task, _options) {
        return this.createTaskUsingPOST1WithHttpInfo(task, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTaskApi.prototype.deleteTaskCustomFieldUsingDELETEWithHttpInfo = function (customFieldId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteTaskCustomFieldUsingDELETE(customFieldId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_455 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_455(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_456 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_456(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteTaskCustomFieldUsingDELETEWithHttpInfo(rsp); }));
        }));
    };
    ObservableTaskApi.prototype.deleteTaskCustomFieldUsingDELETE = function (customFieldId, _options) {
        return this.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTaskApi.prototype.deleteTaskUsingDELETE1WithHttpInfo = function (taskId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteTaskUsingDELETE1(taskId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_457 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_457(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_458 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_458(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteTaskUsingDELETE1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTaskApi.prototype.deleteTaskUsingDELETE1 = function (taskId, _options) {
        return this.deleteTaskUsingDELETE1WithHttpInfo(taskId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTaskApi.prototype.getTaskUsingGET1WithHttpInfo = function (taskId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getTaskUsingGET1(taskId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_459 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_459(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_460 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_460(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getTaskUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTaskApi.prototype.getTaskUsingGET1 = function (taskId, _options) {
        return this.getTaskUsingGET1WithHttpInfo(taskId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTaskApi.prototype.listTasksUsingGET1WithHttpInfo = function (endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_461 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_461(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_462 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_462(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listTasksUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTaskApi.prototype.listTasksUsingGET1 = function (endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options) {
        return this.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTaskApi.prototype.patchTaskUsingPATCHWithHttpInfo = function (taskId, updateMask, task, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchTaskUsingPATCH(taskId, updateMask, task, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_463 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_463(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_464 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_464(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchTaskUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableTaskApi.prototype.patchTaskUsingPATCH = function (taskId, updateMask, task, _options) {
        return this.patchTaskUsingPATCHWithHttpInfo(taskId, updateMask, task, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTaskApi.prototype.retrieveTaskModelUsingGET1WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.retrieveTaskModelUsingGET1(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_465 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_465(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_466 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_466(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.retrieveTaskModelUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableTaskApi.prototype.retrieveTaskModelUsingGET1 = function (_options) {
        return this.retrieveTaskModelUsingGET1WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableTaskApi.prototype.updateTaskCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateTaskCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_467 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_467(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_468 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_468(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateTaskCustomFieldUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableTaskApi.prototype.updateTaskCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        return this.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableTaskApi;
}());
exports.ObservableTaskApi = ObservableTaskApi;
var UsersApi_1 = require("../apis/UsersApi");
var ObservableUsersApi = (function () {
    function ObservableUsersApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApi_1.UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApi_1.UsersApiResponseProcessor();
    }
    ObservableUsersApi.prototype.createUserUsingPOST1WithHttpInfo = function (user, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createUserUsingPOST1(user, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_469 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_469(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_470 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_470(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.createUserUsingPOST1WithHttpInfo(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.createUserUsingPOST1 = function (user, _options) {
        return this.createUserUsingPOST1WithHttpInfo(user, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableUsersApi.prototype.getUserByIdUsingGETWithHttpInfo = function (userId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUserByIdUsingGET(userId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_471 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_471(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_472 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_472(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getUserByIdUsingGETWithHttpInfo(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.getUserByIdUsingGET = function (userId, _options) {
        return this.getUserByIdUsingGETWithHttpInfo(userId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableUsersApi.prototype.getUserInfoUsingGET1WithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUserInfoUsingGET1(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_473 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_473(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_474 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_474(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getUserInfoUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.getUserInfoUsingGET1 = function (_options) {
        return this.getUserInfoUsingGET1WithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableUsersApi.prototype.getUserSignatureUsingGET1WithHttpInfo = function (userId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUserSignatureUsingGET1(userId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_475 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_475(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_476 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_476(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getUserSignatureUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.getUserSignatureUsingGET1 = function (userId, _options) {
        return this.getUserSignatureUsingGET1WithHttpInfo(userId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableUsersApi.prototype.listUsersUsingGET1WithHttpInfo = function (filter, orderBy, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listUsersUsingGET1(filter, orderBy, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_477 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_477(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_478 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_478(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listUsersUsingGET1WithHttpInfo(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.listUsersUsingGET1 = function (filter, orderBy, _options) {
        return this.listUsersUsingGET1WithHttpInfo(filter, orderBy, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableUsersApi.prototype.patchUserUsingPATCHWithHttpInfo = function (userId, updateMask, user, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchUserUsingPATCH(userId, updateMask, user, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_479 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_479(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_480 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_480(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchUserUsingPATCHWithHttpInfo(rsp); }));
        }));
    };
    ObservableUsersApi.prototype.patchUserUsingPATCH = function (userId, updateMask, user, _options) {
        return this.patchUserUsingPATCHWithHttpInfo(userId, updateMask, user, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableUsersApi;
}());
exports.ObservableUsersApi = ObservableUsersApi;
//# sourceMappingURL=ObservableAPI.js.map