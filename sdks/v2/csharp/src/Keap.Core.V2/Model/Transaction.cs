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
    /// Transaction
    /// </summary>
    [DataContract(Name = "Transaction")]
    public partial class Transaction : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Transaction" /> class.
        /// </summary>
        /// <param name="contactId">Reference to the contact the transaction was for..</param>
        /// <param name="id">The unique identifier of the transaction..</param>
        /// <param name="isLive">true if this is a live transaction, false if the transaction is a test or sandbox transaction..</param>
        /// <param name="isSuccessful">true if the transaction resulted in a success, false if the transaction resulted in a failure or error..</param>
        /// <param name="orderId">Reference to the order this transaction was for.</param>
        /// <param name="paymentGatewayId">Reference to the payment processor to where the transaction attempt was made..</param>
        /// <param name="paymentGatewayType">The type of payment processor. Possible values are: PAYPAL, STRIPE, KEAP_PAY, AUTHORIZE, EWAY, OTHER. For transactions that did got go through a processor/gateway, value is MANUAL.</param>
        /// <param name="paymentId">Reference to the payment record that on successful transactions. No reference if the transaction failed..</param>
        /// <param name="transactionAmount">transactionAmount.</param>
        /// <param name="transactionTime">ISO date-time of the transaction. e.g 2024-04-28 11:25:44.</param>
        /// <param name="transactionType">The type of transaction. Possible values: CAPTURE, VOID, REFUND, CREDIT, APPROVAL.</param>
        public Transaction(string contactId = default(string), string id = default(string), bool isLive = default(bool), bool isSuccessful = default(bool), string orderId = default(string), string paymentGatewayId = default(string), string paymentGatewayType = default(string), string paymentId = default(string), CurrencyValue transactionAmount = default(CurrencyValue), string transactionTime = default(string), string transactionType = default(string))
        {
            this.ContactId = contactId;
            this.Id = id;
            this.IsLive = isLive;
            this.IsSuccessful = isSuccessful;
            this.OrderId = orderId;
            this.PaymentGatewayId = paymentGatewayId;
            this.PaymentGatewayType = paymentGatewayType;
            this.PaymentId = paymentId;
            this.TransactionAmount = transactionAmount;
            this.TransactionTime = transactionTime;
            this.TransactionType = transactionType;
        }

        /// <summary>
        /// Reference to the contact the transaction was for.
        /// </summary>
        /// <value>Reference to the contact the transaction was for.</value>
        /*
        <example>1</example>
        */
        [DataMember(Name = "contact_id", EmitDefaultValue = false)]
        public string ContactId { get; set; }

        /// <summary>
        /// The unique identifier of the transaction.
        /// </summary>
        /// <value>The unique identifier of the transaction.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// true if this is a live transaction, false if the transaction is a test or sandbox transaction.
        /// </summary>
        /// <value>true if this is a live transaction, false if the transaction is a test or sandbox transaction.</value>
        [DataMember(Name = "is_live", EmitDefaultValue = true)]
        public bool IsLive { get; set; }

        /// <summary>
        /// true if the transaction resulted in a success, false if the transaction resulted in a failure or error.
        /// </summary>
        /// <value>true if the transaction resulted in a success, false if the transaction resulted in a failure or error.</value>
        [DataMember(Name = "is_successful", EmitDefaultValue = true)]
        public bool IsSuccessful { get; set; }

        /// <summary>
        /// Reference to the order this transaction was for
        /// </summary>
        /// <value>Reference to the order this transaction was for</value>
        /*
        <example>1</example>
        */
        [DataMember(Name = "order_id", EmitDefaultValue = false)]
        public string OrderId { get; set; }

        /// <summary>
        /// Reference to the payment processor to where the transaction attempt was made.
        /// </summary>
        /// <value>Reference to the payment processor to where the transaction attempt was made.</value>
        [DataMember(Name = "payment_gateway_id", EmitDefaultValue = false)]
        public string PaymentGatewayId { get; set; }

        /// <summary>
        /// The type of payment processor. Possible values are: PAYPAL, STRIPE, KEAP_PAY, AUTHORIZE, EWAY, OTHER. For transactions that did got go through a processor/gateway, value is MANUAL
        /// </summary>
        /// <value>The type of payment processor. Possible values are: PAYPAL, STRIPE, KEAP_PAY, AUTHORIZE, EWAY, OTHER. For transactions that did got go through a processor/gateway, value is MANUAL</value>
        [DataMember(Name = "payment_gateway_type", EmitDefaultValue = false)]
        public string PaymentGatewayType { get; set; }

        /// <summary>
        /// Reference to the payment record that on successful transactions. No reference if the transaction failed.
        /// </summary>
        /// <value>Reference to the payment record that on successful transactions. No reference if the transaction failed.</value>
        /*
        <example>1</example>
        */
        [DataMember(Name = "payment_id", EmitDefaultValue = false)]
        public string PaymentId { get; set; }

        /// <summary>
        /// Gets or Sets TransactionAmount
        /// </summary>
        [DataMember(Name = "transaction_amount", EmitDefaultValue = false)]
        public CurrencyValue TransactionAmount { get; set; }

        /// <summary>
        /// ISO date-time of the transaction. e.g 2024-04-28 11:25:44
        /// </summary>
        /// <value>ISO date-time of the transaction. e.g 2024-04-28 11:25:44</value>
        [DataMember(Name = "transaction_time", EmitDefaultValue = false)]
        public string TransactionTime { get; set; }

        /// <summary>
        /// The type of transaction. Possible values: CAPTURE, VOID, REFUND, CREDIT, APPROVAL
        /// </summary>
        /// <value>The type of transaction. Possible values: CAPTURE, VOID, REFUND, CREDIT, APPROVAL</value>
        [DataMember(Name = "transaction_type", EmitDefaultValue = false)]
        public string TransactionType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Transaction {\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  IsLive: ").Append(IsLive).Append("\n");
            sb.Append("  IsSuccessful: ").Append(IsSuccessful).Append("\n");
            sb.Append("  OrderId: ").Append(OrderId).Append("\n");
            sb.Append("  PaymentGatewayId: ").Append(PaymentGatewayId).Append("\n");
            sb.Append("  PaymentGatewayType: ").Append(PaymentGatewayType).Append("\n");
            sb.Append("  PaymentId: ").Append(PaymentId).Append("\n");
            sb.Append("  TransactionAmount: ").Append(TransactionAmount).Append("\n");
            sb.Append("  TransactionTime: ").Append(TransactionTime).Append("\n");
            sb.Append("  TransactionType: ").Append(TransactionType).Append("\n");
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
