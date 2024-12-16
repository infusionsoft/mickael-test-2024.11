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
    /// CategoryDiscount
    /// </summary>
    [DataContract(Name = "CategoryDiscount")]
    public partial class CategoryDiscount : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CategoryDiscount" /> class.
        /// </summary>
        /// <param name="applyToCommissions">applyToCommissions.</param>
        /// <param name="categoryId">categoryId.</param>
        /// <param name="criteria">criteria.</param>
        /// <param name="description">description.</param>
        /// <param name="discountPercent">discountPercent.</param>
        /// <param name="name">name.</param>
        /// <param name="productCategories">productCategories.</param>
        public CategoryDiscount(bool applyToCommissions = default(bool), string categoryId = default(string), List<DiscountCriteria> criteria = default(List<DiscountCriteria>), string description = default(string), double discountPercent = default(double), string name = default(string), List<string> productCategories = default(List<string>))
        {
            this.ApplyToCommissions = applyToCommissions;
            this.CategoryId = categoryId;
            this.Criteria = criteria;
            this.Description = description;
            this.DiscountPercent = discountPercent;
            this.Name = name;
            this.ProductCategories = productCategories;
        }

        /// <summary>
        /// Gets or Sets ApplyToCommissions
        /// </summary>
        [DataMember(Name = "apply_to_commissions", EmitDefaultValue = true)]
        public bool ApplyToCommissions { get; set; }

        /// <summary>
        /// Gets or Sets CategoryId
        /// </summary>
        [DataMember(Name = "category_id", EmitDefaultValue = false)]
        public string CategoryId { get; set; }

        /// <summary>
        /// Gets or Sets Criteria
        /// </summary>
        [DataMember(Name = "criteria", EmitDefaultValue = false)]
        public List<DiscountCriteria> Criteria { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets DiscountPercent
        /// </summary>
        [DataMember(Name = "discount_percent", EmitDefaultValue = false)]
        public double DiscountPercent { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets ProductCategories
        /// </summary>
        [DataMember(Name = "product_categories", EmitDefaultValue = false)]
        public List<string> ProductCategories { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CategoryDiscount {\n");
            sb.Append("  ApplyToCommissions: ").Append(ApplyToCommissions).Append("\n");
            sb.Append("  CategoryId: ").Append(CategoryId).Append("\n");
            sb.Append("  Criteria: ").Append(Criteria).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  DiscountPercent: ").Append(DiscountPercent).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ProductCategories: ").Append(ProductCategories).Append("\n");
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
