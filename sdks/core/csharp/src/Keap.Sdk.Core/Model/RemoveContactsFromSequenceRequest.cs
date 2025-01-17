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
    /// RemoveContactsFromSequenceRequest
    /// </summary>
    [DataContract(Name = "RemoveContactsFromSequenceRequest")]
    public partial class RemoveContactsFromSequenceRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RemoveContactsFromSequenceRequest" /> class.
        /// </summary>
        /// <param name="contactIds">contactIds.</param>
        public RemoveContactsFromSequenceRequest(List<string> contactIds = default(List<string>))
        {
            this.ContactIds = contactIds;
        }

        /// <summary>
        /// Gets or Sets ContactIds
        /// </summary>
        [DataMember(Name = "contact_ids", EmitDefaultValue = false)]
        public List<string> ContactIds { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RemoveContactsFromSequenceRequest {\n");
            sb.Append("  ContactIds: ").Append(ContactIds).Append("\n");
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
