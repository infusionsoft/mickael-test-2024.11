/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
    /// RestV2Product
    /// </summary>
    [DataContract(Name = "RestV2Product")]
    public partial class RestV2Product : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RestV2Product" /> class.
        /// </summary>
        /// <param name="active">True means active, False means inactive.</param>
        /// <param name="categories">List of category ids to indicate which categories this product will belong to. Can be empty..</param>
        /// <param name="cityTaxable">If city-based taxes should be applied to this product.</param>
        /// <param name="countryTaxable">If country-based taxes should be applied to this product.</param>
        /// <param name="description">Product long description.</param>
        /// <param name="id">The product ID.</param>
        /// <param name="name">Product name.</param>
        /// <param name="options">List of product options. Can be empty..</param>
        /// <param name="price">price.</param>
        /// <param name="shortDescription">Product short description.</param>
        /// <param name="sku">Product SKU.</param>
        /// <param name="stateTaxable">If state-based taxes should be applied to this product.</param>
        /// <param name="storefrontHidden">If the product should not be shown in the storefront.</param>
        /// <param name="subscriptionOnly">If the product is a subscription-only product.</param>
        /// <param name="subscriptionPlans">List of subscription plans associated with the product. Can be empty..</param>
        /// <param name="taxable">Whether or not the product should be taxed.</param>
        /// <param name="weight">Product weight.</param>
        public RestV2Product(bool active = default(bool), List<string> categories = default(List<string>), bool cityTaxable = default(bool), bool countryTaxable = default(bool), string description = default(string), string id = default(string), string name = default(string), List<ProductOptions> options = default(List<ProductOptions>), CurrencyValue price = default(CurrencyValue), string shortDescription = default(string), string sku = default(string), bool stateTaxable = default(bool), bool storefrontHidden = default(bool), bool subscriptionOnly = default(bool), List<SubscriptionPlan> subscriptionPlans = default(List<SubscriptionPlan>), bool taxable = default(bool), double weight = default(double))
        {
            this.Active = active;
            this.Categories = categories;
            this.CityTaxable = cityTaxable;
            this.CountryTaxable = countryTaxable;
            this.Description = description;
            this.Id = id;
            this.Name = name;
            this.Options = options;
            this.Price = price;
            this.ShortDescription = shortDescription;
            this.Sku = sku;
            this.StateTaxable = stateTaxable;
            this.StorefrontHidden = storefrontHidden;
            this.SubscriptionOnly = subscriptionOnly;
            this.SubscriptionPlans = subscriptionPlans;
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
        /// List of category ids to indicate which categories this product will belong to. Can be empty.
        /// </summary>
        /// <value>List of category ids to indicate which categories this product will belong to. Can be empty.</value>
        [DataMember(Name = "categories", EmitDefaultValue = false)]
        public List<string> Categories { get; set; }

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
        /// The product ID
        /// </summary>
        /// <value>The product ID</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Product name
        /// </summary>
        /// <value>Product name</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// List of product options. Can be empty.
        /// </summary>
        /// <value>List of product options. Can be empty.</value>
        [DataMember(Name = "options", EmitDefaultValue = false)]
        public List<ProductOptions> Options { get; set; }

        /// <summary>
        /// Gets or Sets Price
        /// </summary>
        [DataMember(Name = "price", EmitDefaultValue = false)]
        public CurrencyValue Price { get; set; }

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
        /// List of subscription plans associated with the product. Can be empty.
        /// </summary>
        /// <value>List of subscription plans associated with the product. Can be empty.</value>
        [DataMember(Name = "subscription_plans", EmitDefaultValue = false)]
        public List<SubscriptionPlan> SubscriptionPlans { get; set; }

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
            sb.Append("class RestV2Product {\n");
            sb.Append("  Active: ").Append(Active).Append("\n");
            sb.Append("  Categories: ").Append(Categories).Append("\n");
            sb.Append("  CityTaxable: ").Append(CityTaxable).Append("\n");
            sb.Append("  CountryTaxable: ").Append(CountryTaxable).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Options: ").Append(Options).Append("\n");
            sb.Append("  Price: ").Append(Price).Append("\n");
            sb.Append("  ShortDescription: ").Append(ShortDescription).Append("\n");
            sb.Append("  Sku: ").Append(Sku).Append("\n");
            sb.Append("  StateTaxable: ").Append(StateTaxable).Append("\n");
            sb.Append("  StorefrontHidden: ").Append(StorefrontHidden).Append("\n");
            sb.Append("  SubscriptionOnly: ").Append(SubscriptionOnly).Append("\n");
            sb.Append("  SubscriptionPlans: ").Append(SubscriptionPlans).Append("\n");
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
