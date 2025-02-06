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
    /// GetUserInfoResponseBase
    /// </summary>
    [DataContract(Name = "GetUserInfoResponseBase")]
    public partial class GetUserInfoResponseBase : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetUserInfoResponseBase" /> class.
        /// </summary>
        /// <param name="email">email.</param>
        /// <param name="familyName">familyName.</param>
        /// <param name="givenName">givenName.</param>
        /// <param name="id">id.</param>
        /// <param name="isAdmin">isAdmin.</param>
        /// <param name="keapId">keapId.</param>
        /// <param name="middleName">middleName.</param>
        /// <param name="preferredName">preferredName.</param>
        /// <param name="sub">sub.</param>
        public GetUserInfoResponseBase(string email = default(string), string familyName = default(string), string givenName = default(string), Object id = default(Object), bool isAdmin = default(bool), string keapId = default(string), string middleName = default(string), string preferredName = default(string), string sub = default(string))
        {
            this.Email = email;
            this.FamilyName = familyName;
            this.GivenName = givenName;
            this.Id = id;
            this.IsAdmin = isAdmin;
            this.KeapId = keapId;
            this.MiddleName = middleName;
            this.PreferredName = preferredName;
            this.Sub = sub;
        }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name = "email", EmitDefaultValue = false)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets FamilyName
        /// </summary>
        [DataMember(Name = "family_name", EmitDefaultValue = false)]
        public string FamilyName { get; set; }

        /// <summary>
        /// Gets or Sets GivenName
        /// </summary>
        [DataMember(Name = "given_name", EmitDefaultValue = false)]
        public string GivenName { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public Object Id { get; set; }

        /// <summary>
        /// Gets or Sets IsAdmin
        /// </summary>
        [DataMember(Name = "is_admin", EmitDefaultValue = true)]
        public bool IsAdmin { get; set; }

        /// <summary>
        /// Gets or Sets KeapId
        /// </summary>
        [DataMember(Name = "keap_id", EmitDefaultValue = false)]
        public string KeapId { get; set; }

        /// <summary>
        /// Gets or Sets MiddleName
        /// </summary>
        [DataMember(Name = "middle_name", EmitDefaultValue = false)]
        public string MiddleName { get; set; }

        /// <summary>
        /// Gets or Sets PreferredName
        /// </summary>
        [DataMember(Name = "preferred_name", EmitDefaultValue = false)]
        public string PreferredName { get; set; }

        /// <summary>
        /// Gets or Sets Sub
        /// </summary>
        [DataMember(Name = "sub", EmitDefaultValue = false)]
        public string Sub { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetUserInfoResponseBase {\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  FamilyName: ").Append(FamilyName).Append("\n");
            sb.Append("  GivenName: ").Append(GivenName).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  IsAdmin: ").Append(IsAdmin).Append("\n");
            sb.Append("  KeapId: ").Append(KeapId).Append("\n");
            sb.Append("  MiddleName: ").Append(MiddleName).Append("\n");
            sb.Append("  PreferredName: ").Append(PreferredName).Append("\n");
            sb.Append("  Sub: ").Append(Sub).Append("\n");
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
