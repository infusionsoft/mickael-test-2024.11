/*
 * Keap REST API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
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
    /// EmailSendRequestAttachment
    /// </summary>
    [DataContract(Name = "EmailSendRequestAttachment")]
    public partial class EmailSendRequestAttachment : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EmailSendRequestAttachment" /> class.
        /// </summary>
        /// <param name="fileData">The content of the attachment, encoded in Base64.</param>
        /// <param name="fileName">The filename of the attached file, including extension.</param>
        public EmailSendRequestAttachment(string fileData = default(string), string fileName = default(string))
        {
            this.FileData = fileData;
            this.FileName = fileName;
        }

        /// <summary>
        /// The content of the attachment, encoded in Base64
        /// </summary>
        /// <value>The content of the attachment, encoded in Base64</value>
        [DataMember(Name = "file_data", EmitDefaultValue = false)]
        public string FileData { get; set; }

        /// <summary>
        /// The filename of the attached file, including extension
        /// </summary>
        /// <value>The filename of the attached file, including extension</value>
        [DataMember(Name = "file_name", EmitDefaultValue = false)]
        public string FileName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EmailSendRequestAttachment {\n");
            sb.Append("  FileData: ").Append(FileData).Append("\n");
            sb.Append("  FileName: ").Append(FileName).Append("\n");
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
