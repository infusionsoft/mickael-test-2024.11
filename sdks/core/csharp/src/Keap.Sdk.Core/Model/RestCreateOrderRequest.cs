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
    /// RestCreateOrderRequest
    /// </summary>
    [DataContract(Name = "RestCreateOrderRequest")]
    public partial class RestCreateOrderRequest : IValidatableObject
    {
        /// <summary>
        /// Defines OrderType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum OrderTypeEnum
        {
            /// <summary>
            /// Enum OFFLINE for value: OFFLINE
            /// </summary>
            [EnumMember(Value = "OFFLINE")]
            OFFLINE = 1,

            /// <summary>
            /// Enum ONLINE for value: ONLINE
            /// </summary>
            [EnumMember(Value = "ONLINE")]
            ONLINE = 2
        }

        /// <summary>
        /// Gets or Sets OrderType
        /// </summary>
        [DataMember(Name = "order_type", IsRequired = true, EmitDefaultValue = true)]
        public OrderTypeEnum OrderType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="RestCreateOrderRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected RestCreateOrderRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="RestCreateOrderRequest" /> class.
        /// </summary>
        /// <param name="contactId">contactId (required).</param>
        /// <param name="leadAffiliateId">leadAffiliateId.</param>
        /// <param name="orderItems">orderItems (required).</param>
        /// <param name="orderTime">orderTime (required).</param>
        /// <param name="orderTitle">orderTitle (required).</param>
        /// <param name="orderType">orderType (required).</param>
        /// <param name="promoCodes">Uses multiple strings as promo codes. The corresponding discount will be applied to the order..</param>
        /// <param name="salesAffiliateId">salesAffiliateId.</param>
        /// <param name="shippingAddress">shippingAddress.</param>
        public RestCreateOrderRequest(string contactId = default(string), string leadAffiliateId = default(string), List<CreateRestOrderItemRequest> orderItems = default(List<CreateRestOrderItemRequest>), string orderTime = default(string), string orderTitle = default(string), OrderTypeEnum orderType = default(OrderTypeEnum), List<string> promoCodes = default(List<string>), string salesAffiliateId = default(string), AddressInformation shippingAddress = default(AddressInformation))
        {
            // to ensure "contactId" is required (not null)
            if (contactId == null)
            {
                throw new ArgumentNullException("contactId is a required property for RestCreateOrderRequest and cannot be null");
            }
            this.ContactId = contactId;
            // to ensure "orderItems" is required (not null)
            if (orderItems == null)
            {
                throw new ArgumentNullException("orderItems is a required property for RestCreateOrderRequest and cannot be null");
            }
            this.OrderItems = orderItems;
            // to ensure "orderTime" is required (not null)
            if (orderTime == null)
            {
                throw new ArgumentNullException("orderTime is a required property for RestCreateOrderRequest and cannot be null");
            }
            this.OrderTime = orderTime;
            // to ensure "orderTitle" is required (not null)
            if (orderTitle == null)
            {
                throw new ArgumentNullException("orderTitle is a required property for RestCreateOrderRequest and cannot be null");
            }
            this.OrderTitle = orderTitle;
            this.OrderType = orderType;
            this.LeadAffiliateId = leadAffiliateId;
            this.PromoCodes = promoCodes;
            this.SalesAffiliateId = salesAffiliateId;
            this.ShippingAddress = shippingAddress;
        }

        /// <summary>
        /// Gets or Sets ContactId
        /// </summary>
        [DataMember(Name = "contact_id", IsRequired = true, EmitDefaultValue = true)]
        public string ContactId { get; set; }

        /// <summary>
        /// Gets or Sets LeadAffiliateId
        /// </summary>
        [DataMember(Name = "lead_affiliate_id", EmitDefaultValue = false)]
        public string LeadAffiliateId { get; set; }

        /// <summary>
        /// Gets or Sets OrderItems
        /// </summary>
        [DataMember(Name = "order_items", IsRequired = true, EmitDefaultValue = true)]
        public List<CreateRestOrderItemRequest> OrderItems { get; set; }

        /// <summary>
        /// Gets or Sets OrderTime
        /// </summary>
        [DataMember(Name = "order_time", IsRequired = true, EmitDefaultValue = true)]
        public string OrderTime { get; set; }

        /// <summary>
        /// Gets or Sets OrderTitle
        /// </summary>
        [DataMember(Name = "order_title", IsRequired = true, EmitDefaultValue = true)]
        public string OrderTitle { get; set; }

        /// <summary>
        /// Uses multiple strings as promo codes. The corresponding discount will be applied to the order.
        /// </summary>
        /// <value>Uses multiple strings as promo codes. The corresponding discount will be applied to the order.</value>
        [DataMember(Name = "promo_codes", EmitDefaultValue = false)]
        public List<string> PromoCodes { get; set; }

        /// <summary>
        /// Gets or Sets SalesAffiliateId
        /// </summary>
        [DataMember(Name = "sales_affiliate_id", EmitDefaultValue = false)]
        public string SalesAffiliateId { get; set; }

        /// <summary>
        /// Gets or Sets ShippingAddress
        /// </summary>
        [DataMember(Name = "shipping_address", EmitDefaultValue = false)]
        public AddressInformation ShippingAddress { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RestCreateOrderRequest {\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  LeadAffiliateId: ").Append(LeadAffiliateId).Append("\n");
            sb.Append("  OrderItems: ").Append(OrderItems).Append("\n");
            sb.Append("  OrderTime: ").Append(OrderTime).Append("\n");
            sb.Append("  OrderTitle: ").Append(OrderTitle).Append("\n");
            sb.Append("  OrderType: ").Append(OrderType).Append("\n");
            sb.Append("  PromoCodes: ").Append(PromoCodes).Append("\n");
            sb.Append("  SalesAffiliateId: ").Append(SalesAffiliateId).Append("\n");
            sb.Append("  ShippingAddress: ").Append(ShippingAddress).Append("\n");
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
