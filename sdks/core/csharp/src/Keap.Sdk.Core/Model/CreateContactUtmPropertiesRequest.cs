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
    /// CreateContactUtmPropertiesRequest
    /// </summary>
    [DataContract(Name = "CreateContactUtmPropertiesRequest")]
    public partial class CreateContactUtmPropertiesRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateContactUtmPropertiesRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateContactUtmPropertiesRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateContactUtmPropertiesRequest" /> class.
        /// </summary>
        /// <param name="keapSourceId">The formId (required).</param>
        /// <param name="utmCampaign">UTM campaign information.</param>
        /// <param name="utmContent">UTM content information.</param>
        /// <param name="utmMedium">UTM medium information.</param>
        /// <param name="utmSource">UTM source information.</param>
        /// <param name="utmTerm">UTM term information.</param>
        public CreateContactUtmPropertiesRequest(string keapSourceId = default(string), string utmCampaign = default(string), string utmContent = default(string), string utmMedium = default(string), string utmSource = default(string), string utmTerm = default(string))
        {
            // to ensure "keapSourceId" is required (not null)
            if (keapSourceId == null)
            {
                throw new ArgumentNullException("keapSourceId is a required property for CreateContactUtmPropertiesRequest and cannot be null");
            }
            this.KeapSourceId = keapSourceId;
            this.UtmCampaign = utmCampaign;
            this.UtmContent = utmContent;
            this.UtmMedium = utmMedium;
            this.UtmSource = utmSource;
            this.UtmTerm = utmTerm;
        }

        /// <summary>
        /// The formId
        /// </summary>
        /// <value>The formId</value>
        /*
        <example>6088383224687662</example>
        */
        [DataMember(Name = "keap_source_id", IsRequired = true, EmitDefaultValue = true)]
        public string KeapSourceId { get; set; }

        /// <summary>
        /// UTM campaign information
        /// </summary>
        /// <value>UTM campaign information</value>
        /*
        <example>spring_sale</example>
        */
        [DataMember(Name = "utm_campaign", EmitDefaultValue = false)]
        public string UtmCampaign { get; set; }

        /// <summary>
        /// UTM content information
        /// </summary>
        /// <value>UTM content information</value>
        /*
        <example>textlink</example>
        */
        [DataMember(Name = "utm_content", EmitDefaultValue = false)]
        public string UtmContent { get; set; }

        /// <summary>
        /// UTM medium information
        /// </summary>
        /// <value>UTM medium information</value>
        /*
        <example>cpc</example>
        */
        [DataMember(Name = "utm_medium", EmitDefaultValue = false)]
        public string UtmMedium { get; set; }

        /// <summary>
        /// UTM source information
        /// </summary>
        /// <value>UTM source information</value>
        /*
        <example>google</example>
        */
        [DataMember(Name = "utm_source", EmitDefaultValue = false)]
        public string UtmSource { get; set; }

        /// <summary>
        /// UTM term information
        /// </summary>
        /// <value>UTM term information</value>
        /*
        <example>financial_consulting</example>
        */
        [DataMember(Name = "utm_term", EmitDefaultValue = false)]
        public string UtmTerm { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateContactUtmPropertiesRequest {\n");
            sb.Append("  KeapSourceId: ").Append(KeapSourceId).Append("\n");
            sb.Append("  UtmCampaign: ").Append(UtmCampaign).Append("\n");
            sb.Append("  UtmContent: ").Append(UtmContent).Append("\n");
            sb.Append("  UtmMedium: ").Append(UtmMedium).Append("\n");
            sb.Append("  UtmSource: ").Append(UtmSource).Append("\n");
            sb.Append("  UtmTerm: ").Append(UtmTerm).Append("\n");
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
