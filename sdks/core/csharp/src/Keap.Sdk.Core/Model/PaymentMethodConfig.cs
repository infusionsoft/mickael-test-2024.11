/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
    /// PaymentMethodConfig
    /// </summary>
    [DataContract(Name = "PaymentMethodConfig")]
    public partial class PaymentMethodConfig : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentMethodConfig" /> class.
        /// </summary>
        /// <param name="sessionKey">A temporary session key required for rendering Keap&#39;s payment component..</param>
        public PaymentMethodConfig(string sessionKey = default(string))
        {
            this.SessionKey = sessionKey;
        }

        /// <summary>
        /// A temporary session key required for rendering Keap&#39;s payment component.
        /// </summary>
        /// <value>A temporary session key required for rendering Keap&#39;s payment component.</value>
        [DataMember(Name = "session_key", EmitDefaultValue = false)]
        public string SessionKey { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PaymentMethodConfig {\n");
            sb.Append("  SessionKey: ").Append(SessionKey).Append("\n");
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
