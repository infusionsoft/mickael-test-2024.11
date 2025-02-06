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
    /// ProductFixedOption
    /// </summary>
    [DataContract(Name = "ProductFixedOption")]
    public partial class ProductFixedOption : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductFixedOption" /> class.
        /// </summary>
        /// <param name="code">An internal code to reference the option value.</param>
        /// <param name="priceAdjustment">Positive value indicates additional amount added to the original price. Negative value indicates subtraction from the original price..</param>
        /// <param name="value">The displayable label given to the option.</param>
        public ProductFixedOption(string code = default(string), double priceAdjustment = default(double), string value = default(string))
        {
            this.Code = code;
            this.PriceAdjustment = priceAdjustment;
            this.Value = value;
        }

        /// <summary>
        /// An internal code to reference the option value
        /// </summary>
        /// <value>An internal code to reference the option value</value>
        [DataMember(Name = "code", EmitDefaultValue = false)]
        public string Code { get; set; }

        /// <summary>
        /// Positive value indicates additional amount added to the original price. Negative value indicates subtraction from the original price.
        /// </summary>
        /// <value>Positive value indicates additional amount added to the original price. Negative value indicates subtraction from the original price.</value>
        [DataMember(Name = "price_adjustment", EmitDefaultValue = false)]
        public double PriceAdjustment { get; set; }

        /// <summary>
        /// The displayable label given to the option
        /// </summary>
        /// <value>The displayable label given to the option</value>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public string Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ProductFixedOption {\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  PriceAdjustment: ").Append(PriceAdjustment).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
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
