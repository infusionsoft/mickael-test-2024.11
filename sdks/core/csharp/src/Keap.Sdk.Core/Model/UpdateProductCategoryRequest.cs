/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.770650
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
    /// UpdateProductCategoryRequest
    /// </summary>
    [DataContract(Name = "UpdateProductCategoryRequest")]
    public partial class UpdateProductCategoryRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateProductCategoryRequest" /> class.
        /// </summary>
        /// <param name="displayOrderIndex">displayOrderIndex.</param>
        /// <param name="name">name.</param>
        /// <param name="parentCategoryId">parentCategoryId.</param>
        public UpdateProductCategoryRequest(int displayOrderIndex = default(int), string name = default(string), string parentCategoryId = default(string))
        {
            this.DisplayOrderIndex = displayOrderIndex;
            this.Name = name;
            this.ParentCategoryId = parentCategoryId;
        }

        /// <summary>
        /// Gets or Sets DisplayOrderIndex
        /// </summary>
        [DataMember(Name = "display_order_index", EmitDefaultValue = false)]
        public int DisplayOrderIndex { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets ParentCategoryId
        /// </summary>
        [DataMember(Name = "parent_category_id", EmitDefaultValue = false)]
        public string ParentCategoryId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateProductCategoryRequest {\n");
            sb.Append("  DisplayOrderIndex: ").Append(DisplayOrderIndex).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ParentCategoryId: ").Append(ParentCategoryId).Append("\n");
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
