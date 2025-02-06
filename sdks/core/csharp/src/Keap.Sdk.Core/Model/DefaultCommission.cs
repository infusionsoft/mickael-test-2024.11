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
    /// DefaultCommission
    /// </summary>
    [DataContract(Name = "DefaultCommission")]
    public partial class DefaultCommission : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DefaultCommission" /> class.
        /// </summary>
        /// <param name="dollarAmount">dollarAmount.</param>
        /// <param name="percentage">percentage.</param>
        public DefaultCommission(double dollarAmount = default(double), double percentage = default(double))
        {
            this.DollarAmount = dollarAmount;
            this.Percentage = percentage;
        }

        /// <summary>
        /// Gets or Sets DollarAmount
        /// </summary>
        [DataMember(Name = "dollar_amount", EmitDefaultValue = false)]
        public double DollarAmount { get; set; }

        /// <summary>
        /// Gets or Sets Percentage
        /// </summary>
        [DataMember(Name = "percentage", EmitDefaultValue = false)]
        public double Percentage { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class DefaultCommission {\n");
            sb.Append("  DollarAmount: ").Append(DollarAmount).Append("\n");
            sb.Append("  Percentage: ").Append(Percentage).Append("\n");
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
