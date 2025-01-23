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
    /// BusinessProfileAddressResponse
    /// </summary>
    [DataContract(Name = "BusinessProfileAddressResponse")]
    public partial class BusinessProfileAddressResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BusinessProfileAddressResponse" /> class.
        /// </summary>
        /// <param name="countryCode">An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3).</param>
        /// <param name="line1">line1.</param>
        /// <param name="line2">line2.</param>
        /// <param name="locality">The municipality to which the address belongs.</param>
        /// <param name="postalCode">postalCode.</param>
        /// <param name="region">The long-name descriptive version of the Region Code.</param>
        public BusinessProfileAddressResponse(string countryCode = default(string), string line1 = default(string), string line2 = default(string), string locality = default(string), string postalCode = default(string), string region = default(string))
        {
            this.CountryCode = countryCode;
            this.Line1 = line1;
            this.Line2 = line2;
            this.Locality = locality;
            this.PostalCode = postalCode;
            this.Region = region;
        }

        /// <summary>
        /// An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
        /// </summary>
        /// <value>An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)</value>
        /*
        <example>USA</example>
        */
        [DataMember(Name = "country_code", EmitDefaultValue = false)]
        public string CountryCode { get; set; }

        /// <summary>
        /// Gets or Sets Line1
        /// </summary>
        [DataMember(Name = "line1", EmitDefaultValue = false)]
        public string Line1 { get; set; }

        /// <summary>
        /// Gets or Sets Line2
        /// </summary>
        [DataMember(Name = "line2", EmitDefaultValue = false)]
        public string Line2 { get; set; }

        /// <summary>
        /// The municipality to which the address belongs
        /// </summary>
        /// <value>The municipality to which the address belongs</value>
        /*
        <example>Phoenix</example>
        */
        [DataMember(Name = "locality", EmitDefaultValue = false)]
        public string Locality { get; set; }

        /// <summary>
        /// Gets or Sets PostalCode
        /// </summary>
        [DataMember(Name = "postal_code", EmitDefaultValue = false)]
        public string PostalCode { get; set; }

        /// <summary>
        /// The long-name descriptive version of the Region Code
        /// </summary>
        /// <value>The long-name descriptive version of the Region Code</value>
        /*
        <example>Arizona</example>
        */
        [DataMember(Name = "region", EmitDefaultValue = false)]
        public string Region { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class BusinessProfileAddressResponse {\n");
            sb.Append("  CountryCode: ").Append(CountryCode).Append("\n");
            sb.Append("  Line1: ").Append(Line1).Append("\n");
            sb.Append("  Line2: ").Append(Line2).Append("\n");
            sb.Append("  Locality: ").Append(Locality).Append("\n");
            sb.Append("  PostalCode: ").Append(PostalCode).Append("\n");
            sb.Append("  Region: ").Append(Region).Append("\n");
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
