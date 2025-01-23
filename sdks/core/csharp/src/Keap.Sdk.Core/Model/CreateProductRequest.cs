/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
    /// CreateProductRequest
    /// </summary>
    [DataContract(Name = "CreateProductRequest")]
    public partial class CreateProductRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateProductRequest" /> class.
        /// </summary>
        /// <param name="active">True means active, False means inactive.</param>
        /// <param name="cityTaxable">If city-based taxes should be applied to this product.</param>
        /// <param name="countryTaxable">If country-based taxes should be applied to this product.</param>
        /// <param name="description">Product long description.</param>
        /// <param name="name">Product name.</param>
        /// <param name="price">The product price. The value is in the currency’s smallest unit. e.g. $12.50 is 1250..</param>
        /// <param name="shortDescription">Product short description.</param>
        /// <param name="sku">Product SKU.</param>
        /// <param name="stateTaxable">If state-based taxes should be applied to this product.</param>
        /// <param name="storefrontHidden">If the product should not be shown in the storefront.</param>
        /// <param name="subscriptionOnly">If the product is a subscription-only product.</param>
        /// <param name="taxable">Whether or not the product should be taxed.</param>
        /// <param name="weight">Product weight.</param>
        public CreateProductRequest(bool active = default(bool), bool cityTaxable = default(bool), bool countryTaxable = default(bool), string description = default(string), string name = default(string), long price = default(long), string shortDescription = default(string), string sku = default(string), bool stateTaxable = default(bool), bool storefrontHidden = default(bool), bool subscriptionOnly = default(bool), bool taxable = default(bool), double weight = default(double))
        {
            this.Active = active;
            this.CityTaxable = cityTaxable;
            this.CountryTaxable = countryTaxable;
            this.Description = description;
            this.Name = name;
            this.Price = price;
            this.ShortDescription = shortDescription;
            this.Sku = sku;
            this.StateTaxable = stateTaxable;
            this.StorefrontHidden = storefrontHidden;
            this.SubscriptionOnly = subscriptionOnly;
            this.Taxable = taxable;
            this.Weight = weight;
        }

        /// <summary>
        /// True means active, False means inactive
        /// </summary>
        /// <value>True means active, False means inactive</value>
        [DataMember(Name = "active", EmitDefaultValue = true)]
        public bool Active { get; set; }

        /// <summary>
        /// If city-based taxes should be applied to this product
        /// </summary>
        /// <value>If city-based taxes should be applied to this product</value>
        [DataMember(Name = "city_taxable", EmitDefaultValue = true)]
        public bool CityTaxable { get; set; }

        /// <summary>
        /// If country-based taxes should be applied to this product
        /// </summary>
        /// <value>If country-based taxes should be applied to this product</value>
        [DataMember(Name = "country_taxable", EmitDefaultValue = true)]
        public bool CountryTaxable { get; set; }

        /// <summary>
        /// Product long description
        /// </summary>
        /// <value>Product long description</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Product name
        /// </summary>
        /// <value>Product name</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// The product price. The value is in the currency’s smallest unit. e.g. $12.50 is 1250.
        /// </summary>
        /// <value>The product price. The value is in the currency’s smallest unit. e.g. $12.50 is 1250.</value>
        [DataMember(Name = "price", EmitDefaultValue = false)]
        public long Price { get; set; }

        /// <summary>
        /// Product short description
        /// </summary>
        /// <value>Product short description</value>
        [DataMember(Name = "short_description", EmitDefaultValue = false)]
        public string ShortDescription { get; set; }

        /// <summary>
        /// Product SKU
        /// </summary>
        /// <value>Product SKU</value>
        [DataMember(Name = "sku", EmitDefaultValue = false)]
        public string Sku { get; set; }

        /// <summary>
        /// If state-based taxes should be applied to this product
        /// </summary>
        /// <value>If state-based taxes should be applied to this product</value>
        [DataMember(Name = "state_taxable", EmitDefaultValue = true)]
        public bool StateTaxable { get; set; }

        /// <summary>
        /// If the product should not be shown in the storefront
        /// </summary>
        /// <value>If the product should not be shown in the storefront</value>
        [DataMember(Name = "storefront_hidden", EmitDefaultValue = true)]
        public bool StorefrontHidden { get; set; }

        /// <summary>
        /// If the product is a subscription-only product
        /// </summary>
        /// <value>If the product is a subscription-only product</value>
        [DataMember(Name = "subscription_only", EmitDefaultValue = true)]
        public bool SubscriptionOnly { get; set; }

        /// <summary>
        /// Whether or not the product should be taxed
        /// </summary>
        /// <value>Whether or not the product should be taxed</value>
        [DataMember(Name = "taxable", EmitDefaultValue = true)]
        public bool Taxable { get; set; }

        /// <summary>
        /// Product weight
        /// </summary>
        /// <value>Product weight</value>
        [DataMember(Name = "weight", EmitDefaultValue = false)]
        public double Weight { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateProductRequest {\n");
            sb.Append("  Active: ").Append(Active).Append("\n");
            sb.Append("  CityTaxable: ").Append(CityTaxable).Append("\n");
            sb.Append("  CountryTaxable: ").Append(CountryTaxable).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Price: ").Append(Price).Append("\n");
            sb.Append("  ShortDescription: ").Append(ShortDescription).Append("\n");
            sb.Append("  Sku: ").Append(Sku).Append("\n");
            sb.Append("  StateTaxable: ").Append(StateTaxable).Append("\n");
            sb.Append("  StorefrontHidden: ").Append(StorefrontHidden).Append("\n");
            sb.Append("  SubscriptionOnly: ").Append(SubscriptionOnly).Append("\n");
            sb.Append("  Taxable: ").Append(Taxable).Append("\n");
            sb.Append("  Weight: ").Append(Weight).Append("\n");
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
