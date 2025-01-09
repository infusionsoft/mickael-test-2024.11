/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
    /// OrderItemProduct
    /// </summary>
    [DataContract(Name = "OrderItemProduct")]
    public partial class OrderItemProduct : IValidatableObject
    {
        /// <summary>
        /// Defines Status
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum INACTIVE for value: INACTIVE
            /// </summary>
            [EnumMember(Value = "INACTIVE")]
            INACTIVE = 1,

            /// <summary>
            /// Enum ACTIVE for value: ACTIVE
            /// </summary>
            [EnumMember(Value = "ACTIVE")]
            ACTIVE = 2
        }

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public StatusEnum? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="OrderItemProduct" /> class.
        /// </summary>
        /// <param name="createdTime">createdTime.</param>
        /// <param name="description">description.</param>
        /// <param name="id">id.</param>
        /// <param name="lastUpdatedTime">lastUpdatedTime.</param>
        /// <param name="name">name.</param>
        /// <param name="productOptions">productOptions.</param>
        /// <param name="productPrice">productPrice.</param>
        /// <param name="productShortDescription">productShortDescription.</param>
        /// <param name="shippable">shippable.</param>
        /// <param name="sku">sku.</param>
        /// <param name="status">status.</param>
        /// <param name="subscriptionOnly">subscriptionOnly.</param>
        /// <param name="subscriptionPlans">subscriptionPlans.</param>
        /// <param name="taxable">taxable.</param>
        /// <param name="url">The url is the permalink to the resource.</param>
        public OrderItemProduct(string createdTime = default(string), string description = default(string), string id = default(string), string lastUpdatedTime = default(string), string name = default(string), List<RestProductOption> productOptions = default(List<RestProductOption>), double productPrice = default(double), string productShortDescription = default(string), bool shippable = default(bool), string sku = default(string), StatusEnum? status = default(StatusEnum?), bool subscriptionOnly = default(bool), List<RestSubscriptionPlan> subscriptionPlans = default(List<RestSubscriptionPlan>), bool taxable = default(bool), string url = default(string))
        {
            this.CreatedTime = createdTime;
            this.Description = description;
            this.Id = id;
            this.LastUpdatedTime = lastUpdatedTime;
            this.Name = name;
            this.ProductOptions = productOptions;
            this.ProductPrice = productPrice;
            this.ProductShortDescription = productShortDescription;
            this.Shippable = shippable;
            this.Sku = sku;
            this.Status = status;
            this.SubscriptionOnly = subscriptionOnly;
            this.SubscriptionPlans = subscriptionPlans;
            this.Taxable = taxable;
            this.Url = url;
        }

        /// <summary>
        /// Gets or Sets CreatedTime
        /// </summary>
        [DataMember(Name = "created_time", EmitDefaultValue = false)]
        public string CreatedTime { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets LastUpdatedTime
        /// </summary>
        [DataMember(Name = "last_updated_time", EmitDefaultValue = false)]
        public string LastUpdatedTime { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets ProductOptions
        /// </summary>
        [DataMember(Name = "product_options", EmitDefaultValue = false)]
        public List<RestProductOption> ProductOptions { get; set; }

        /// <summary>
        /// Gets or Sets ProductPrice
        /// </summary>
        [DataMember(Name = "product_price", EmitDefaultValue = false)]
        public double ProductPrice { get; set; }

        /// <summary>
        /// Gets or Sets ProductShortDescription
        /// </summary>
        [DataMember(Name = "product_short_description", EmitDefaultValue = false)]
        public string ProductShortDescription { get; set; }

        /// <summary>
        /// Gets or Sets Shippable
        /// </summary>
        [DataMember(Name = "shippable", EmitDefaultValue = true)]
        public bool Shippable { get; set; }

        /// <summary>
        /// Gets or Sets Sku
        /// </summary>
        [DataMember(Name = "sku", EmitDefaultValue = false)]
        public string Sku { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionOnly
        /// </summary>
        [DataMember(Name = "subscription_only", EmitDefaultValue = true)]
        public bool SubscriptionOnly { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionPlans
        /// </summary>
        [DataMember(Name = "subscription_plans", EmitDefaultValue = false)]
        public List<RestSubscriptionPlan> SubscriptionPlans { get; set; }

        /// <summary>
        /// Gets or Sets Taxable
        /// </summary>
        [DataMember(Name = "taxable", EmitDefaultValue = true)]
        public bool Taxable { get; set; }

        /// <summary>
        /// The url is the permalink to the resource
        /// </summary>
        /// <value>The url is the permalink to the resource</value>
        [DataMember(Name = "url", EmitDefaultValue = false)]
        public string Url { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class OrderItemProduct {\n");
            sb.Append("  CreatedTime: ").Append(CreatedTime).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  LastUpdatedTime: ").Append(LastUpdatedTime).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ProductOptions: ").Append(ProductOptions).Append("\n");
            sb.Append("  ProductPrice: ").Append(ProductPrice).Append("\n");
            sb.Append("  ProductShortDescription: ").Append(ProductShortDescription).Append("\n");
            sb.Append("  Shippable: ").Append(Shippable).Append("\n");
            sb.Append("  Sku: ").Append(Sku).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  SubscriptionOnly: ").Append(SubscriptionOnly).Append("\n");
            sb.Append("  SubscriptionPlans: ").Append(SubscriptionPlans).Append("\n");
            sb.Append("  Taxable: ").Append(Taxable).Append("\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
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
