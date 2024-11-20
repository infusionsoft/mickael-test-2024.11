/*
 * Keap REST API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
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
    /// User
    /// </summary>
    [DataContract(Name = "User")]
    public partial class User : IValidatableObject
    {
        /// <summary>
        /// Defines Status
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum Active for value: Active
            /// </summary>
            [EnumMember(Value = "Active")]
            Active = 1,

            /// <summary>
            /// Enum Invited for value: Invited
            /// </summary>
            [EnumMember(Value = "Invited")]
            Invited = 2,

            /// <summary>
            /// Enum Inactive for value: Inactive
            /// </summary>
            [EnumMember(Value = "Inactive")]
            Inactive = 3,

            /// <summary>
            /// Enum NotAUser for value: NotAUser
            /// </summary>
            [EnumMember(Value = "NotAUser")]
            NotAUser = 4
        }

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public StatusEnum? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="User" /> class.
        /// </summary>
        /// <param name="address">address.</param>
        /// <param name="admin">admin.</param>
        /// <param name="companyName">companyName.</param>
        /// <param name="createTime">createTime.</param>
        /// <param name="createdBy">createdBy.</param>
        /// <param name="emailAddresses">emailAddresses.</param>
        /// <param name="familyName">familyName.</param>
        /// <param name="faxNumbers">faxNumbers.</param>
        /// <param name="givenName">givenName.</param>
        /// <param name="globalUserId">globalUserId.</param>
        /// <param name="id">id.</param>
        /// <param name="keapId">keapId.</param>
        /// <param name="partner">partner.</param>
        /// <param name="phoneNumbers">phoneNumbers.</param>
        /// <param name="socialAccounts">socialAccounts.</param>
        /// <param name="status">status.</param>
        /// <param name="varTimeZone">varTimeZone.</param>
        /// <param name="title">title.</param>
        /// <param name="updateTime">updateTime.</param>
        /// <param name="updatedBy">updatedBy.</param>
        /// <param name="website">website.</param>
        public User(Address address = default(Address), bool admin = default(bool), string companyName = default(string), string createTime = default(string), long createdBy = default(long), List<EmailAddress> emailAddresses = default(List<EmailAddress>), string familyName = default(string), List<FaxNumber> faxNumbers = default(List<FaxNumber>), string givenName = default(string), long globalUserId = default(long), long id = default(long), string keapId = default(string), bool partner = default(bool), List<PhoneNumber> phoneNumbers = default(List<PhoneNumber>), List<SocialAccount> socialAccounts = default(List<SocialAccount>), StatusEnum? status = default(StatusEnum?), string varTimeZone = default(string), string title = default(string), string updateTime = default(string), long updatedBy = default(long), string website = default(string))
        {
            this.Address = address;
            this.Admin = admin;
            this.CompanyName = companyName;
            this.CreateTime = createTime;
            this.CreatedBy = createdBy;
            this.EmailAddresses = emailAddresses;
            this.FamilyName = familyName;
            this.FaxNumbers = faxNumbers;
            this.GivenName = givenName;
            this.GlobalUserId = globalUserId;
            this.Id = id;
            this.KeapId = keapId;
            this.Partner = partner;
            this.PhoneNumbers = phoneNumbers;
            this.SocialAccounts = socialAccounts;
            this.Status = status;
            this.VarTimeZone = varTimeZone;
            this.Title = title;
            this.UpdateTime = updateTime;
            this.UpdatedBy = updatedBy;
            this.Website = website;
        }

        /// <summary>
        /// Gets or Sets Address
        /// </summary>
        [DataMember(Name = "address", EmitDefaultValue = false)]
        public Address Address { get; set; }

        /// <summary>
        /// Gets or Sets Admin
        /// </summary>
        [DataMember(Name = "admin", EmitDefaultValue = true)]
        public bool Admin { get; set; }

        /// <summary>
        /// Gets or Sets CompanyName
        /// </summary>
        [DataMember(Name = "company_name", EmitDefaultValue = false)]
        public string CompanyName { get; set; }

        /// <summary>
        /// Gets or Sets CreateTime
        /// </summary>
        [DataMember(Name = "create_time", EmitDefaultValue = false)]
        public string CreateTime { get; set; }

        /// <summary>
        /// Gets or Sets CreatedBy
        /// </summary>
        [DataMember(Name = "created_by", EmitDefaultValue = false)]
        public long CreatedBy { get; set; }

        /// <summary>
        /// Gets or Sets EmailAddresses
        /// </summary>
        [DataMember(Name = "email_addresses", EmitDefaultValue = false)]
        public List<EmailAddress> EmailAddresses { get; set; }

        /// <summary>
        /// Gets or Sets FamilyName
        /// </summary>
        [DataMember(Name = "family_name", EmitDefaultValue = false)]
        public string FamilyName { get; set; }

        /// <summary>
        /// Gets or Sets FaxNumbers
        /// </summary>
        [DataMember(Name = "fax_numbers", EmitDefaultValue = false)]
        public List<FaxNumber> FaxNumbers { get; set; }

        /// <summary>
        /// Gets or Sets GivenName
        /// </summary>
        [DataMember(Name = "given_name", EmitDefaultValue = false)]
        public string GivenName { get; set; }

        /// <summary>
        /// Gets or Sets GlobalUserId
        /// </summary>
        [DataMember(Name = "global_user_id", EmitDefaultValue = false)]
        public long GlobalUserId { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public long Id { get; set; }

        /// <summary>
        /// Gets or Sets KeapId
        /// </summary>
        [DataMember(Name = "keap_id", EmitDefaultValue = false)]
        public string KeapId { get; set; }

        /// <summary>
        /// Gets or Sets Partner
        /// </summary>
        [DataMember(Name = "partner", EmitDefaultValue = true)]
        public bool Partner { get; set; }

        /// <summary>
        /// Gets or Sets PhoneNumbers
        /// </summary>
        [DataMember(Name = "phone_numbers", EmitDefaultValue = false)]
        public List<PhoneNumber> PhoneNumbers { get; set; }

        /// <summary>
        /// Gets or Sets SocialAccounts
        /// </summary>
        [DataMember(Name = "social_accounts", EmitDefaultValue = false)]
        public List<SocialAccount> SocialAccounts { get; set; }

        /// <summary>
        /// Gets or Sets VarTimeZone
        /// </summary>
        [DataMember(Name = "time_zone", EmitDefaultValue = false)]
        public string VarTimeZone { get; set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name = "title", EmitDefaultValue = false)]
        public string Title { get; set; }

        /// <summary>
        /// Gets or Sets UpdateTime
        /// </summary>
        [DataMember(Name = "update_time", EmitDefaultValue = false)]
        public string UpdateTime { get; set; }

        /// <summary>
        /// Gets or Sets UpdatedBy
        /// </summary>
        [DataMember(Name = "updated_by", EmitDefaultValue = false)]
        public long UpdatedBy { get; set; }

        /// <summary>
        /// Gets or Sets Website
        /// </summary>
        [DataMember(Name = "website", EmitDefaultValue = false)]
        public string Website { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class User {\n");
            sb.Append("  Address: ").Append(Address).Append("\n");
            sb.Append("  Admin: ").Append(Admin).Append("\n");
            sb.Append("  CompanyName: ").Append(CompanyName).Append("\n");
            sb.Append("  CreateTime: ").Append(CreateTime).Append("\n");
            sb.Append("  CreatedBy: ").Append(CreatedBy).Append("\n");
            sb.Append("  EmailAddresses: ").Append(EmailAddresses).Append("\n");
            sb.Append("  FamilyName: ").Append(FamilyName).Append("\n");
            sb.Append("  FaxNumbers: ").Append(FaxNumbers).Append("\n");
            sb.Append("  GivenName: ").Append(GivenName).Append("\n");
            sb.Append("  GlobalUserId: ").Append(GlobalUserId).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  KeapId: ").Append(KeapId).Append("\n");
            sb.Append("  Partner: ").Append(Partner).Append("\n");
            sb.Append("  PhoneNumbers: ").Append(PhoneNumbers).Append("\n");
            sb.Append("  SocialAccounts: ").Append(SocialAccounts).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  VarTimeZone: ").Append(VarTimeZone).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  UpdateTime: ").Append(UpdateTime).Append("\n");
            sb.Append("  UpdatedBy: ").Append(UpdatedBy).Append("\n");
            sb.Append("  Website: ").Append(Website).Append("\n");
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
