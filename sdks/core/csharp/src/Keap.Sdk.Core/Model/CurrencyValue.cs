/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
    /// CurrencyValue
    /// </summary>
    [DataContract(Name = "CurrencyValue")]
    public partial class CurrencyValue : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CurrencyValue" /> class.
        /// </summary>
        /// <param name="amount">The price amount in the smallest currency unit.</param>
        /// <param name="currencyCode">Three-letter ISO currency code.</param>
        /// <param name="formattedAmount">The product amount formatted using the tenant&#39;s currency locale.</param>
        public CurrencyValue(long amount = default(long), string currencyCode = default(string), string formattedAmount = default(string))
        {
            this.Amount = amount;
            this.CurrencyCode = currencyCode;
            this.FormattedAmount = formattedAmount;
        }

        /// <summary>
        /// The price amount in the smallest currency unit
        /// </summary>
        /// <value>The price amount in the smallest currency unit</value>
        [DataMember(Name = "amount", EmitDefaultValue = false)]
        public long Amount { get; set; }

        /// <summary>
        /// Three-letter ISO currency code
        /// </summary>
        /// <value>Three-letter ISO currency code</value>
        [DataMember(Name = "currency_code", EmitDefaultValue = false)]
        public string CurrencyCode { get; set; }

        /// <summary>
        /// The product amount formatted using the tenant&#39;s currency locale
        /// </summary>
        /// <value>The product amount formatted using the tenant&#39;s currency locale</value>
        [DataMember(Name = "formatted_amount", EmitDefaultValue = false)]
        public string FormattedAmount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CurrencyValue {\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("  CurrencyCode: ").Append(CurrencyCode).Append("\n");
            sb.Append("  FormattedAmount: ").Append(FormattedAmount).Append("\n");
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
