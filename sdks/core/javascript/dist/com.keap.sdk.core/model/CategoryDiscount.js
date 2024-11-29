"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Criteria = _interopRequireDefault(require("./Criteria"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The CategoryDiscount model module.
 * @module com.keap.sdk.core/model/CategoryDiscount
 * @version 0.0.23
 */
var CategoryDiscount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CategoryDiscount</code>.
   * @alias module:com.keap.sdk.core/model/CategoryDiscount
   */
  function CategoryDiscount() {
    _classCallCheck(this, CategoryDiscount);
    CategoryDiscount.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(CategoryDiscount, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CategoryDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CategoryDiscount} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CategoryDiscount} The populated <code>CategoryDiscount</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CategoryDiscount();
        if (data.hasOwnProperty('apply_to_commissions')) {
          obj['apply_to_commissions'] = _ApiClient["default"].convertToType(data['apply_to_commissions'], 'Number');
        }
        if (data.hasOwnProperty('category_id')) {
          obj['category_id'] = _ApiClient["default"].convertToType(data['category_id'], 'String');
        }
        if (data.hasOwnProperty('criteria')) {
          obj['criteria'] = _ApiClient["default"].convertToType(data['criteria'], [_Criteria["default"]]);
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('discount_percent')) {
          obj['discount_percent'] = _ApiClient["default"].convertToType(data['discount_percent'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('product_categories')) {
          obj['product_categories'] = _ApiClient["default"].convertToType(data['product_categories'], ['String']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CategoryDiscount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CategoryDiscount</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['category_id'] && !(typeof data['category_id'] === 'string' || data['category_id'] instanceof String)) {
        throw new Error("Expected the field `category_id` to be a primitive type in the JSON string but got " + data['category_id']);
      }
      if (data['criteria']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['criteria'])) {
          throw new Error("Expected the field `criteria` to be an array in the JSON data but got " + data['criteria']);
        }
        // validate the optional field `criteria` (array)
        var _iterator = _createForOfIteratorHelper(data['criteria']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _Criteria["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['product_categories'])) {
        throw new Error("Expected the field `product_categories` to be an array in the JSON data but got " + data['product_categories']);
      }
      return true;
    }
  }]);
}();
/**
 * @member {Number} apply_to_commissions
 */
CategoryDiscount.prototype['apply_to_commissions'] = undefined;

/**
 * @member {String} category_id
 */
CategoryDiscount.prototype['category_id'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/Criteria>} criteria
 */
CategoryDiscount.prototype['criteria'] = undefined;

/**
 * @member {String} description
 */
CategoryDiscount.prototype['description'] = undefined;

/**
 * @member {Number} discount_percent
 */
CategoryDiscount.prototype['discount_percent'] = undefined;

/**
 * @member {String} name
 */
CategoryDiscount.prototype['name'] = undefined;

/**
 * @member {Array.<String>} product_categories
 */
CategoryDiscount.prototype['product_categories'] = undefined;
var _default = exports["default"] = CategoryDiscount;