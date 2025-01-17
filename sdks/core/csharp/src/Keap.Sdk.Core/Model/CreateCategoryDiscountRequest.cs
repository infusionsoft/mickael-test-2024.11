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
    /// CreateCategoryDiscountRequest
    /// </summary>
    [DataContract(Name = "CreateCategoryDiscountRequest")]
    public partial class CreateCategoryDiscountRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCategoryDiscountRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateCategoryDiscountRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCategoryDiscountRequest" /> class.
        /// </summary>
        /// <param name="applyToCommissions">applyToCommissions (required).</param>
        /// <param name="criteria">criteria.</param>
        /// <param name="description">description.</param>
        /// <param name="discountPercent">discountPercent (required).</param>
        /// <param name="name">name (required).</param>
        /// <param name="productCategoryIds">productCategoryIds (required).</param>
        public CreateCategoryDiscountRequest(bool applyToCommissions = default(bool), List<DiscountCriteria> criteria = default(List<DiscountCriteria>), string description = default(string), double discountPercent = default(double), string name = default(string), List<string> productCategoryIds = default(List<string>))
        {
            this.ApplyToCommissions = applyToCommissions;
            this.DiscountPercent = discountPercent;
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new ArgumentNullException("name is a required property for CreateCategoryDiscountRequest and cannot be null");
            }
            this.Name = name;
            // to ensure "productCategoryIds" is required (not null)
            if (productCategoryIds == null)
            {
                throw new ArgumentNullException("productCategoryIds is a required property for CreateCategoryDiscountRequest and cannot be null");
            }
            this.ProductCategoryIds = productCategoryIds;
            this.Criteria = criteria;
            this.Description = description;
        }

        /// <summary>
        /// Gets or Sets ApplyToCommissions
        /// </summary>
        [DataMember(Name = "apply_to_commissions", IsRequired = true, EmitDefaultValue = true)]
        public bool ApplyToCommissions { get; set; }

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
        [DataMember(Name = "discount_percent", IsRequired = true, EmitDefaultValue = true)]
        public double DiscountPercent { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets ProductCategoryIds
        /// </summary>
        [DataMember(Name = "product_category_ids", IsRequired = true, EmitDefaultValue = true)]
        public List<string> ProductCategoryIds { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateCategoryDiscountRequest {\n");
            sb.Append("  ApplyToCommissions: ").Append(ApplyToCommissions).Append("\n");
            sb.Append("  Criteria: ").Append(Criteria).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  DiscountPercent: ").Append(DiscountPercent).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ProductCategoryIds: ").Append(ProductCategoryIds).Append("\n");
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
