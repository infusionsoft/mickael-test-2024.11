/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
    /// CreateFileRequest
    /// </summary>
    [DataContract(Name = "CreateFileRequest")]
    public partial class CreateFileRequest : IValidatableObject
    {
        /// <summary>
        /// Defines FileAssociation
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum FileAssociationEnum
        {
            /// <summary>
            /// Enum CONTACT for value: CONTACT
            /// </summary>
            [EnumMember(Value = "CONTACT")]
            CONTACT = 1,

            /// <summary>
            /// Enum USER for value: USER
            /// </summary>
            [EnumMember(Value = "USER")]
            USER = 2,

            /// <summary>
            /// Enum COMPANY for value: COMPANY
            /// </summary>
            [EnumMember(Value = "COMPANY")]
            COMPANY = 3
        }

        /// <summary>
        /// Gets or Sets FileAssociation
        /// </summary>
        [DataMember(Name = "file_association", EmitDefaultValue = false)]
        public FileAssociationEnum? FileAssociation { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateFileRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateFileRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateFileRequest" /> class.
        /// </summary>
        /// <param name="contactId">contactId (required).</param>
        /// <param name="fileAssociation">fileAssociation.</param>
        /// <param name="fileName">fileName (required).</param>
        /// <param name="isPublic">isPublic.</param>
        public CreateFileRequest(string contactId = default(string), FileAssociationEnum? fileAssociation = default(FileAssociationEnum?), string fileName = default(string), bool isPublic = default(bool))
        {
            // to ensure "contactId" is required (not null)
            if (contactId == null)
            {
                throw new ArgumentNullException("contactId is a required property for CreateFileRequest and cannot be null");
            }
            this.ContactId = contactId;
            // to ensure "fileName" is required (not null)
            if (fileName == null)
            {
                throw new ArgumentNullException("fileName is a required property for CreateFileRequest and cannot be null");
            }
            this.FileName = fileName;
            this.FileAssociation = fileAssociation;
            this.IsPublic = isPublic;
        }

        /// <summary>
        /// Gets or Sets ContactId
        /// </summary>
        [DataMember(Name = "contact_id", IsRequired = true, EmitDefaultValue = true)]
        public string ContactId { get; set; }

        /// <summary>
        /// Gets or Sets FileName
        /// </summary>
        [DataMember(Name = "file_name", IsRequired = true, EmitDefaultValue = true)]
        public string FileName { get; set; }

        /// <summary>
        /// Gets or Sets IsPublic
        /// </summary>
        [DataMember(Name = "is_public", EmitDefaultValue = true)]
        public bool IsPublic { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateFileRequest {\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  FileAssociation: ").Append(FileAssociation).Append("\n");
            sb.Append("  FileName: ").Append(FileName).Append("\n");
            sb.Append("  IsPublic: ").Append(IsPublic).Append("\n");
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
