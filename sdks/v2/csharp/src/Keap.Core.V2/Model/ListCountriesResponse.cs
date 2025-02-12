/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
    /// ListCountriesResponse
    /// </summary>
    [DataContract(Name = "ListCountriesResponse")]
    public partial class ListCountriesResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListCountriesResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ListCountriesResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ListCountriesResponse" /> class.
        /// </summary>
        /// <param name="countries">A key-value pair of country code and country name. (required).</param>
        public ListCountriesResponse(List<Country> countries = default(List<Country>))
        {
            // to ensure "countries" is required (not null)
            if (countries == null)
            {
                throw new ArgumentNullException("countries is a required property for ListCountriesResponse and cannot be null");
            }
            this.Countries = countries;
        }

        /// <summary>
        /// A key-value pair of country code and country name.
        /// </summary>
        /// <value>A key-value pair of country code and country name.</value>
        [DataMember(Name = "countries", IsRequired = true, EmitDefaultValue = true)]
        public List<Country> Countries { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListCountriesResponse {\n");
            sb.Append("  Countries: ").Append(Countries).Append("\n");
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
