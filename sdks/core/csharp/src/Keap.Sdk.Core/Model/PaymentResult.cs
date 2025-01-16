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
    /// PaymentResult
    /// </summary>
    [DataContract(Name = "PaymentResult")]
    public partial class PaymentResult : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentResult" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="invoiceId">invoiceId.</param>
        /// <param name="paymentAmount">paymentAmount.</param>
        /// <param name="paymentStatusMessage">paymentStatusMessage.</param>
        /// <param name="transactionId">transactionId.</param>
        public PaymentResult(string id = default(string), string invoiceId = default(string), double paymentAmount = default(double), string paymentStatusMessage = default(string), string transactionId = default(string))
        {
            this.Id = id;
            this.InvoiceId = invoiceId;
            this.PaymentAmount = paymentAmount;
            this.PaymentStatusMessage = paymentStatusMessage;
            this.TransactionId = transactionId;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets InvoiceId
        /// </summary>
        [DataMember(Name = "invoice_id", EmitDefaultValue = false)]
        public string InvoiceId { get; set; }

        /// <summary>
        /// Gets or Sets PaymentAmount
        /// </summary>
        [DataMember(Name = "payment_amount", EmitDefaultValue = false)]
        public double PaymentAmount { get; set; }

        /// <summary>
        /// Gets or Sets PaymentStatusMessage
        /// </summary>
        [DataMember(Name = "payment_status_message", EmitDefaultValue = false)]
        public string PaymentStatusMessage { get; set; }

        /// <summary>
        /// Gets or Sets TransactionId
        /// </summary>
        [DataMember(Name = "transaction_id", EmitDefaultValue = false)]
        public string TransactionId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PaymentResult {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  InvoiceId: ").Append(InvoiceId).Append("\n");
            sb.Append("  PaymentAmount: ").Append(PaymentAmount).Append("\n");
            sb.Append("  PaymentStatusMessage: ").Append(PaymentStatusMessage).Append("\n");
            sb.Append("  TransactionId: ").Append(TransactionId).Append("\n");
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
