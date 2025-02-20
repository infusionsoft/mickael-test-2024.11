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
    /// ListProvincesResponse
    /// </summary>
    [DataContract(Name = "ListProvincesResponse")]
    public partial class ListProvincesResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListProvincesResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ListProvincesResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ListProvincesResponse" /> class.
        /// </summary>
        /// <param name="provinces">A key-value pair of province code and province name. (required).</param>
        public ListProvincesResponse(List<Provinces> provinces = default(List<Provinces>))
        {
            // to ensure "provinces" is required (not null)
            if (provinces == null)
            {
                throw new ArgumentNullException("provinces is a required property for ListProvincesResponse and cannot be null");
            }
            this.Provinces = provinces;
        }

        /// <summary>
        /// A key-value pair of province code and province name.
        /// </summary>
        /// <value>A key-value pair of province code and province name.</value>
        [DataMember(Name = "provinces", IsRequired = true, EmitDefaultValue = true)]
        public List<Provinces> Provinces { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListProvincesResponse {\n");
            sb.Append("  Provinces: ").Append(Provinces).Append("\n");
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
