"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactApiResponseProcessor = exports.ContactApiRequestFactory = void 0;
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
var ContactApiRequestFactory = (function (_super) {
    __extends(ContactApiRequestFactory, _super);
    function ContactApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactApiRequestFactory.prototype.createContactLinkTypeUsingPOST = function (request, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (request === null || request === undefined) {
                            throw new baseapi_1.RequiredError("ContactApi", "createContactLinkTypeUsingPOST", "request");
                        }
                        localVarPath = '/v2/contacts/links/types';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(request, "CreateContactLinkTypeRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.createContactUsingPOST1 = function (contact, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/v2/contacts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(contact, "CreatePatchContactRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.deleteContactUsingDELETE1 = function (contactId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (contactId === null || contactId === undefined) {
                            throw new baseapi_1.RequiredError("ContactApi", "deleteContactUsingDELETE1", "contactId");
                        }
                        localVarPath = '/v2/contacts/{contact_id}'
                            .replace('{' + 'contact_id' + '}', encodeURIComponent(String(contactId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.getContactUsingGET1 = function (contactId, fields, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, serializedParams, _i, serializedParams_1, serializedParam, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (contactId === null || contactId === undefined) {
                            throw new baseapi_1.RequiredError("ContactApi", "getContactUsingGET1", "contactId");
                        }
                        localVarPath = '/v2/contacts/{contact_id}'
                            .replace('{' + 'contact_id' + '}', encodeURIComponent(String(contactId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (fields !== undefined) {
                            serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(fields, "Array<string>", "");
                            for (_i = 0, serializedParams_1 = serializedParams; _i < serializedParams_1.length; _i++) {
                                serializedParam = serializedParams_1[_i];
                                requestContext.appendQueryParam("fields", serializedParam);
                            }
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.getContactsBySearchTermUsingGET = function (searchParam, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (searchParam === null || searchParam === undefined) {
                            throw new baseapi_1.RequiredError("ContactApi", "getContactsBySearchTermUsingGET", "searchParam");
                        }
                        localVarPath = '/v2/contacts:search';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (searchParam !== undefined) {
                            requestContext.setQueryParam("searchParam", ObjectSerializer_1.ObjectSerializer.serialize(searchParam, "string", ""));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.linkContactsUsingPOST = function (linkContactsRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (linkContactsRequest === null || linkContactsRequest === undefined) {
                            throw new baseapi_1.RequiredError("ContactApi", "linkContactsUsingPOST", "linkContactsRequest");
                        }
                        localVarPath = '/v2/contacts:link';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(linkContactsRequest, "LinkContactsRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.listContactLinkTypesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/v2/contacts/links/types';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (filter !== undefined) {
                            requestContext.setQueryParam("filter", ObjectSerializer_1.ObjectSerializer.serialize(filter, "'name'", ""));
                        }
                        if (orderBy !== undefined) {
                            requestContext.setQueryParam("orderBy", ObjectSerializer_1.ObjectSerializer.serialize(orderBy, "string", ""));
                        }
                        if (pageSize !== undefined) {
                            requestContext.setQueryParam("pageSize", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int32"));
                        }
                        if (pageToken !== undefined) {
                            requestContext.setQueryParam("pageToken", ObjectSerializer_1.ObjectSerializer.serialize(pageToken, "string", ""));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.listContactLinksUsingGET = function (contactId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (contactId === null || contactId === undefined) {
                            throw new baseapi_1.RequiredError("ContactApi", "listContactLinksUsingGET", "contactId");
                        }
                        localVarPath = '/v2/contacts/{contact_id}/links'
                            .replace('{' + 'contact_id' + '}', encodeURIComponent(String(contactId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.listContactsUsingGET1 = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, serializedParams, _i, serializedParams_2, serializedParam, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/v2/contacts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (fields !== undefined) {
                            serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(fields, "Array<string>", "");
                            for (_i = 0, serializedParams_2 = serializedParams; _i < serializedParams_2.length; _i++) {
                                serializedParam = serializedParams_2[_i];
                                requestContext.appendQueryParam("fields", serializedParam);
                            }
                        }
                        if (filter !== undefined) {
                            requestContext.setQueryParam("filter", ObjectSerializer_1.ObjectSerializer.serialize(filter, "string", ""));
                        }
                        if (orderBy !== undefined) {
                            requestContext.setQueryParam("order_by", ObjectSerializer_1.ObjectSerializer.serialize(orderBy, "string", ""));
                        }
                        if (pageSize !== undefined) {
                            requestContext.setQueryParam("page_size", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int32"));
                        }
                        if (pageToken !== undefined) {
                            requestContext.setQueryParam("page_token", ObjectSerializer_1.ObjectSerializer.serialize(pageToken, "string", ""));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.listPaymentMethodsUsingGET = function (contactId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (contactId === null || contactId === undefined) {
                            throw new baseapi_1.RequiredError("ContactApi", "listPaymentMethodsUsingGET", "contactId");
                        }
                        localVarPath = '/v2/contacts/{contact_id}/paymentMethods'
                            .replace('{' + 'contact_id' + '}', encodeURIComponent(String(contactId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.patchContactUsingPATCH = function (contactId, updateMask, contact, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, serializedParams, _i, serializedParams_3, serializedParam, contentType, serializedBody, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (contactId === null || contactId === undefined) {
                            throw new baseapi_1.RequiredError("ContactApi", "patchContactUsingPATCH", "contactId");
                        }
                        localVarPath = '/v2/contacts/{contact_id}'
                            .replace('{' + 'contact_id' + '}', encodeURIComponent(String(contactId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (updateMask !== undefined) {
                            serializedParams = ObjectSerializer_1.ObjectSerializer.serialize(updateMask, "Array<string>", "");
                            for (_i = 0, serializedParams_3 = serializedParams; _i < serializedParams_3.length; _i++) {
                                serializedParam = serializedParams_3[_i];
                                requestContext.appendQueryParam("update_mask", serializedParam);
                            }
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(contact, "CreatePatchContactRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.retrieveContactModelUsingGET1 = function (_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/v2/contacts/model';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    ContactApiRequestFactory.prototype.unlinkContactsUsingPOST = function (linkContactsRequest, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (linkContactsRequest === null || linkContactsRequest === undefined) {
                            throw new baseapi_1.RequiredError("ContactApi", "unlinkContactsUsingPOST", "linkContactsRequest");
                        }
                        localVarPath = '/v2/contacts:unlink';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(linkContactsRequest, "LinkContactsRequest", ""), contentType);
                        requestContext.setBody(serializedBody);
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 2];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2, requestContext];
                }
            });
        });
    };
    return ContactApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.ContactApiRequestFactory = ContactApiRequestFactory;
var ContactApiResponseProcessor = (function () {
    function ContactApiResponseProcessor() {
    }
    ContactApiResponseProcessor.prototype.createContactLinkTypeUsingPOSTWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, _s, _t;
            return __generator(this, function (_u) {
                switch (_u.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("201", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_u.sent(), contentType]),
                            "ContactLinkType", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_u.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_u.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_u.sent(), contentType]),
                            "ContactLinkType", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 8:
                        _s = exception_1.ApiException.bind;
                        _t = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 9: throw new (_s.apply(exception_1.ApiException, _t.concat([_u.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.createContactUsingPOST1WithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, _s, _t;
            return __generator(this, function (_u) {
                switch (_u.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("201", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_u.sent(), contentType]),
                            "Contact", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_u.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_u.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_u.sent(), contentType]),
                            "Contact", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 8:
                        _s = exception_1.ApiException.bind;
                        _t = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 9: throw new (_s.apply(exception_1.ApiException, _t.concat([_u.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.deleteContactUsingDELETE1WithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, _s, _t;
            return __generator(this, function (_u) {
                switch (_u.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                            return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined)];
                        }
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_u.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_u.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_u.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_u.sent(), contentType]),
                            "void", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 8:
                        _s = exception_1.ApiException.bind;
                        _t = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 9: throw new (_s.apply(exception_1.ApiException, _t.concat([_u.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.getContactUsingGET1WithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "Contact", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "Contact", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 10:
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.getContactsBySearchTermUsingGETWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "ListBasicContactResponse", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "ListBasicContactResponse", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 10:
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.linkContactsUsingPOSTWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, _s, _t;
            return __generator(this, function (_u) {
                switch (_u.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("201", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_u.sent(), contentType]),
                            "ContactLink", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_u.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_u.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_u.sent(), contentType]),
                            "ContactLink", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 8:
                        _s = exception_1.ApiException.bind;
                        _t = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 9: throw new (_s.apply(exception_1.ApiException, _t.concat([_u.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.listContactLinkTypesUsingGETWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "ListContactLinkTypesResponse", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "ListContactLinkTypesResponse", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 10:
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.listContactLinksUsingGETWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "ListContactLinksResponse", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "ListContactLinksResponse", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 10:
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.listContactsUsingGET1WithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "ListContactsResponse", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "ListContactsResponse", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 10:
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.listPaymentMethodsUsingGETWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "PaymentMethodList", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "PaymentMethodList", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 10:
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.patchContactUsingPATCHWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "Contact", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "Contact", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 10:
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.retrieveContactModelUsingGET1WithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "ObjectModel", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 8:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "ObjectModel", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 10:
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    ContactApiResponseProcessor.prototype.unlinkContactsUsingPOSTWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if ((0, util_1.isCodeInRange)("204", response.httpStatusCode)) {
                            return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined)];
                        }
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Error", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "void", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    return ContactApiResponseProcessor;
}());
exports.ContactApiResponseProcessor = ContactApiResponseProcessor;
//# sourceMappingURL=ContactApi.js.map