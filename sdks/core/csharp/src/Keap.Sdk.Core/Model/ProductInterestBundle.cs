/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
    /// ProductInterestBundle
    /// </summary>
    [DataContract(Name = "ProductInterestBundle")]
    public partial class ProductInterestBundle : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductInterestBundle" /> class.
        /// </summary>
        /// <param name="description">Product interest bundle description.</param>
        /// <param name="id">The product interest bundle ID.</param>
        /// <param name="name">Product interest bundle name.</param>
        /// <param name="productInterests">Product interests.</param>
        /// <param name="subscriptionPlanInterests">Subscription plan interests.</param>
        public ProductInterestBundle(string description = default(string), string id = default(string), string name = default(string), List<ProductInterest> productInterests = default(List<ProductInterest>), List<SubscriptionPlanInterest> subscriptionPlanInterests = default(List<SubscriptionPlanInterest>))
        {
            this.Description = description;
            this.Id = id;
            this.Name = name;
            this.ProductInterests = productInterests;
            this.SubscriptionPlanInterests = subscriptionPlanInterests;
        }

        /// <summary>
        /// Product interest bundle description
        /// </summary>
        /// <value>Product interest bundle description</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// The product interest bundle ID
        /// </summary>
        /// <value>The product interest bundle ID</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Product interest bundle name
        /// </summary>
        /// <value>Product interest bundle name</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Product interests
        /// </summary>
        /// <value>Product interests</value>
        [DataMember(Name = "product_interests", EmitDefaultValue = false)]
        public List<ProductInterest> ProductInterests { get; set; }

        /// <summary>
        /// Subscription plan interests
        /// </summary>
        /// <value>Subscription plan interests</value>
        [DataMember(Name = "subscription_plan_interests", EmitDefaultValue = false)]
        public List<SubscriptionPlanInterest> SubscriptionPlanInterests { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ProductInterestBundle {\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ProductInterests: ").Append(ProductInterests).Append("\n");
            sb.Append("  SubscriptionPlanInterests: ").Append(SubscriptionPlanInterests).Append("\n");
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
