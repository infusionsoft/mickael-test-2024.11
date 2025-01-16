/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
    /// CreatePaymentRequest
    /// </summary>
    [DataContract(Name = "CreatePaymentRequest")]
    public partial class CreatePaymentRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreatePaymentRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreatePaymentRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreatePaymentRequest" /> class.
        /// </summary>
        /// <param name="applyToCommissions">applyToCommissions (required).</param>
        /// <param name="notes">notes.</param>
        /// <param name="paymentAmount">paymentAmount (required).</param>
        /// <param name="paymentMethodId">paymentMethodId.</param>
        /// <param name="paymentMethodType">paymentMethodType.</param>
        /// <param name="paymentTime">paymentTime.</param>
        public CreatePaymentRequest(bool applyToCommissions = default(bool), string notes = default(string), double paymentAmount = default(double), string paymentMethodId = default(string), string paymentMethodType = default(string), string paymentTime = default(string))
        {
            this.ApplyToCommissions = applyToCommissions;
            this.PaymentAmount = paymentAmount;
            this.Notes = notes;
            this.PaymentMethodId = paymentMethodId;
            this.PaymentMethodType = paymentMethodType;
            this.PaymentTime = paymentTime;
        }

        /// <summary>
        /// Gets or Sets ApplyToCommissions
        /// </summary>
        [DataMember(Name = "apply_to_commissions", IsRequired = true, EmitDefaultValue = true)]
        public bool ApplyToCommissions { get; set; }

        /// <summary>
        /// Gets or Sets Notes
        /// </summary>
        [DataMember(Name = "notes", EmitDefaultValue = false)]
        public string Notes { get; set; }

        /// <summary>
        /// Gets or Sets PaymentAmount
        /// </summary>
        [DataMember(Name = "payment_amount", IsRequired = true, EmitDefaultValue = true)]
        public double PaymentAmount { get; set; }

        /// <summary>
        /// Gets or Sets PaymentMethodId
        /// </summary>
        [DataMember(Name = "payment_method_id", EmitDefaultValue = false)]
        public string PaymentMethodId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentMethodType
        /// </summary>
        [DataMember(Name = "payment_method_type", EmitDefaultValue = false)]
        public string PaymentMethodType { get; set; }

        /// <summary>
        /// Gets or Sets PaymentTime
        /// </summary>
        [DataMember(Name = "payment_time", EmitDefaultValue = false)]
        public string PaymentTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreatePaymentRequest {\n");
            sb.Append("  ApplyToCommissions: ").Append(ApplyToCommissions).Append("\n");
            sb.Append("  Notes: ").Append(Notes).Append("\n");
            sb.Append("  PaymentAmount: ").Append(PaymentAmount).Append("\n");
            sb.Append("  PaymentMethodId: ").Append(PaymentMethodId).Append("\n");
            sb.Append("  PaymentMethodType: ").Append(PaymentMethodType).Append("\n");
            sb.Append("  PaymentTime: ").Append(PaymentTime).Append("\n");
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
