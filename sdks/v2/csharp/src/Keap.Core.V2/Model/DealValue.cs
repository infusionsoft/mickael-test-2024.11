/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
using OpenAPIDateConverter = Keap.Core.V2.Client.OpenAPIDateConverter;

namespace Keap.Core.V2.Model
{
    /// <summary>
    /// The monetary value of the deal. This field is required and must be valid.
    /// </summary>
    [DataContract(Name = "Deal_value")]
    public partial class DealValue : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DealValue" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected DealValue() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="DealValue" /> class.
        /// </summary>
        /// <param name="amount">The amount of money. This field is required. (required).</param>
        /// <param name="currency">The currency of the money. This field is required. (required).</param>
        public DealValue(double amount = default(double), string currency = default(string))
        {
            this.Amount = amount;
            // to ensure "currency" is required (not null)
            if (currency == null)
            {
                throw new ArgumentNullException("currency is a required property for DealValue and cannot be null");
            }
            this.Currency = currency;
        }

        /// <summary>
        /// The amount of money. This field is required.
        /// </summary>
        /// <value>The amount of money. This field is required.</value>
        [DataMember(Name = "amount", IsRequired = true, EmitDefaultValue = true)]
        public double Amount { get; set; }

        /// <summary>
        /// The currency of the money. This field is required.
        /// </summary>
        /// <value>The currency of the money. This field is required.</value>
        [DataMember(Name = "currency", IsRequired = true, EmitDefaultValue = true)]
        public string Currency { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class DealValue {\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
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
