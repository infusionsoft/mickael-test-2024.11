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
    /// ListProductInterestBundleResponse
    /// </summary>
    [DataContract(Name = "ListProductInterestBundleResponse")]
    public partial class ListProductInterestBundleResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListProductInterestBundleResponse" /> class.
        /// </summary>
        /// <param name="nextPageToken">nextPageToken.</param>
        /// <param name="productInterestBundles">productInterestBundles.</param>
        public ListProductInterestBundleResponse(string nextPageToken = default(string), List<ProductInterestBundle> productInterestBundles = default(List<ProductInterestBundle>))
        {
            this.NextPageToken = nextPageToken;
            this.ProductInterestBundles = productInterestBundles;
        }

        /// <summary>
        /// Gets or Sets NextPageToken
        /// </summary>
        [DataMember(Name = "next_page_token", EmitDefaultValue = false)]
        public string NextPageToken { get; set; }

        /// <summary>
        /// Gets or Sets ProductInterestBundles
        /// </summary>
        [DataMember(Name = "product_interest_bundles", EmitDefaultValue = false)]
        public List<ProductInterestBundle> ProductInterestBundles { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListProductInterestBundleResponse {\n");
            sb.Append("  NextPageToken: ").Append(NextPageToken).Append("\n");
            sb.Append("  ProductInterestBundles: ").Append(ProductInterestBundles).Append("\n");
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
