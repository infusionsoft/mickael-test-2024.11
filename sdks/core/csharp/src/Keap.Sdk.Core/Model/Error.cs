/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
    /// Error
    /// </summary>
    [DataContract(Name = "Error")]
    public partial class Error : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Error" /> class.
        /// </summary>
        /// <param name="cause">cause.</param>
        /// <param name="localizedMessage">localizedMessage.</param>
        /// <param name="message">message.</param>
        /// <param name="stackTrace">stackTrace.</param>
        /// <param name="suppressed">suppressed.</param>
        public Error(Throwable cause = default(Throwable), string localizedMessage = default(string), string message = default(string), List<StackTraceElement> stackTrace = default(List<StackTraceElement>), List<Throwable> suppressed = default(List<Throwable>))
        {
            this.Cause = cause;
            this.LocalizedMessage = localizedMessage;
            this.Message = message;
            this.StackTrace = stackTrace;
            this.Suppressed = suppressed;
        }

        /// <summary>
        /// Gets or Sets Cause
        /// </summary>
        [DataMember(Name = "cause", EmitDefaultValue = false)]
        public Throwable Cause { get; set; }

        /// <summary>
        /// Gets or Sets LocalizedMessage
        /// </summary>
        [DataMember(Name = "localizedMessage", EmitDefaultValue = false)]
        public string LocalizedMessage { get; set; }

        /// <summary>
        /// Gets or Sets Message
        /// </summary>
        [DataMember(Name = "message", EmitDefaultValue = false)]
        public string Message { get; set; }

        /// <summary>
        /// Gets or Sets StackTrace
        /// </summary>
        [DataMember(Name = "stackTrace", EmitDefaultValue = false)]
        public List<StackTraceElement> StackTrace { get; set; }

        /// <summary>
        /// Gets or Sets Suppressed
        /// </summary>
        [DataMember(Name = "suppressed", EmitDefaultValue = false)]
        public List<Throwable> Suppressed { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Error {\n");
            sb.Append("  Cause: ").Append(Cause).Append("\n");
            sb.Append("  LocalizedMessage: ").Append(LocalizedMessage).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  StackTrace: ").Append(StackTrace).Append("\n");
            sb.Append("  Suppressed: ").Append(Suppressed).Append("\n");
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
