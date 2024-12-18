/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
 * Contact: api@keap.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Keap.Sdk.Core.Client.OpenAPIDateConverter;

namespace Keap.Sdk.Core.Model
{
    /// <summary>
    /// ListRestMerchantAccountResponse
    /// </summary>
    [DataContract(Name = "ListRestMerchantAccountResponse")]
    public partial class ListRestMerchantAccountResponse : IValidatableObject
    {
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum USEDEFAULT for value: USE_DEFAULT
            /// </summary>
            [EnumMember(Value = "USE_DEFAULT")]
            USEDEFAULT = 1,

            /// <summary>
            /// Enum PAYPAL for value: PAY_PAL
            /// </summary>
            [EnumMember(Value = "PAY_PAL")]
            PAYPAL = 2,

            /// <summary>
            /// Enum PAYPALPAYFLOWPRO for value: PAY_PAL_PAYFLOW_PRO
            /// </summary>
            [EnumMember(Value = "PAY_PAL_PAYFLOW_PRO")]
            PAYPALPAYFLOWPRO = 3,

            /// <summary>
            /// Enum PAYPALCOMMERCE for value: PAYPAL_COMMERCE
            /// </summary>
            [EnumMember(Value = "PAYPAL_COMMERCE")]
            PAYPALCOMMERCE = 4,

            /// <summary>
            /// Enum PAYPALCOMMERCEUCC for value: PAYPAL_COMMERCE_UCC
            /// </summary>
            [EnumMember(Value = "PAYPAL_COMMERCE_UCC")]
            PAYPALCOMMERCEUCC = 5,

            /// <summary>
            /// Enum GATEWAYPAYFLOWPRO for value: GATEWAY_PAYFLOW_PRO
            /// </summary>
            [EnumMember(Value = "GATEWAY_PAYFLOW_PRO")]
            GATEWAYPAYFLOWPRO = 6,

            /// <summary>
            /// Enum AUTHORIZE for value: AUTHORIZE
            /// </summary>
            [EnumMember(Value = "AUTHORIZE")]
            AUTHORIZE = 7,

            /// <summary>
            /// Enum AUTHORIZECARDPRESENT for value: AUTHORIZE_CARD_PRESENT
            /// </summary>
            [EnumMember(Value = "AUTHORIZE_CARD_PRESENT")]
            AUTHORIZECARDPRESENT = 8,

            /// <summary>
            /// Enum POWERPAY for value: POWER_PAY
            /// </summary>
            [EnumMember(Value = "POWER_PAY")]
            POWERPAY = 9,

            /// <summary>
            /// Enum CARTCONNECT for value: CART_CONNECT
            /// </summary>
            [EnumMember(Value = "CART_CONNECT")]
            CARTCONNECT = 10,

            /// <summary>
            /// Enum SAGEPAY for value: SAGE_PAY
            /// </summary>
            [EnumMember(Value = "SAGE_PAY")]
            SAGEPAY = 11,

            /// <summary>
            /// Enum EWAY for value: E_WAY
            /// </summary>
            [EnumMember(Value = "E_WAY")]
            EWAY = 12,

            /// <summary>
            /// Enum USAEPAY for value: USA_E_PAY
            /// </summary>
            [EnumMember(Value = "USA_E_PAY")]
            USAEPAY = 13,

            /// <summary>
            /// Enum MONERIS for value: MONERIS
            /// </summary>
            [EnumMember(Value = "MONERIS")]
            MONERIS = 14,

            /// <summary>
            /// Enum DPS for value: DPS
            /// </summary>
            [EnumMember(Value = "DPS")]
            DPS = 15,

            /// <summary>
            /// Enum DUMMY for value: DUMMY
            /// </summary>
            [EnumMember(Value = "DUMMY")]
            DUMMY = 16,

            /// <summary>
            /// Enum INTERNETSECURE for value: INTERNET_SECURE
            /// </summary>
            [EnumMember(Value = "INTERNET_SECURE")]
            INTERNETSECURE = 17,

            /// <summary>
            /// Enum EASYPAYDIRECT for value: EASY_PAY_DIRECT
            /// </summary>
            [EnumMember(Value = "EASY_PAY_DIRECT")]
            EASYPAYDIRECT = 18,

            /// <summary>
            /// Enum NEXUS for value: NEXUS
            /// </summary>
            [EnumMember(Value = "NEXUS")]
            NEXUS = 19,

            /// <summary>
            /// Enum INFPAY for value: INF_PAY
            /// </summary>
            [EnumMember(Value = "INF_PAY")]
            INFPAY = 20,

            /// <summary>
            /// Enum FLEXPAY for value: FLEXPAY
            /// </summary>
            [EnumMember(Value = "FLEXPAY")]
            FLEXPAY = 21,

            /// <summary>
            /// Enum STRIPE for value: STRIPE
            /// </summary>
            [EnumMember(Value = "STRIPE")]
            STRIPE = 22,

            /// <summary>
            /// Enum STRIPEELEMENTS for value: STRIPE_ELEMENTS
            /// </summary>
            [EnumMember(Value = "STRIPE_ELEMENTS")]
            STRIPEELEMENTS = 23,

            /// <summary>
            /// Enum WORLDPAY for value: WORLD_PAY
            /// </summary>
            [EnumMember(Value = "WORLD_PAY")]
            WORLDPAY = 24,

            /// <summary>
            /// Enum RAINFOREST for value: RAINFOREST
            /// </summary>
            [EnumMember(Value = "RAINFOREST")]
            RAINFOREST = 25,

            /// <summary>
            /// Enum WEPAY for value: WEPAY
            /// </summary>
            [EnumMember(Value = "WEPAY")]
            WEPAY = 26,

            /// <summary>
            /// Enum KEAPPAY for value: KEAPPAY
            /// </summary>
            [EnumMember(Value = "KEAPPAY")]
            KEAPPAY = 27,

            /// <summary>
            /// Enum MANUAL for value: MANUAL
            /// </summary>
            [EnumMember(Value = "MANUAL")]
            MANUAL = 28
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ListRestMerchantAccountResponse" /> class.
        /// </summary>
        /// <param name="accountName">accountName.</param>
        /// <param name="id">id.</param>
        /// <param name="isTest">isTest.</param>
        /// <param name="type">type.</param>
        public ListRestMerchantAccountResponse(string accountName = default(string), string id = default(string), bool isTest = default(bool), TypeEnum? type = default(TypeEnum?))
        {
            this.AccountName = accountName;
            this.Id = id;
            this.IsTest = isTest;
            this.Type = type;
        }

        /// <summary>
        /// Gets or Sets AccountName
        /// </summary>
        [DataMember(Name = "account_name", EmitDefaultValue = false)]
        public string AccountName { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets IsTest
        /// </summary>
        [DataMember(Name = "is_test", EmitDefaultValue = true)]
        public bool IsTest { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListRestMerchantAccountResponse {\n");
            sb.Append("  AccountName: ").Append(AccountName).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  IsTest: ").Append(IsTest).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }    }

}
