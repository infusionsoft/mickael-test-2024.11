/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.770650
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
    /// Contact
    /// </summary>
    [DataContract(Name = "Contact")]
    public partial class Contact : IValidatableObject
    {
        /// <summary>
        /// Defines SourceType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum SourceTypeEnum
        {
            /// <summary>
            /// Enum SOURCETYPEUNSPECIFIED for value: SOURCE_TYPE_UNSPECIFIED
            /// </summary>
            [EnumMember(Value = "SOURCE_TYPE_UNSPECIFIED")]
            SOURCETYPEUNSPECIFIED = 1,

            /// <summary>
            /// Enum API for value: API
            /// </summary>
            [EnumMember(Value = "API")]
            API = 2,

            /// <summary>
            /// Enum APPOINTMENT for value: APPOINTMENT
            /// </summary>
            [EnumMember(Value = "APPOINTMENT")]
            APPOINTMENT = 3,

            /// <summary>
            /// Enum FORMAPIHOSTED for value: FORM_API_HOSTED
            /// </summary>
            [EnumMember(Value = "FORM_API_HOSTED")]
            FORMAPIHOSTED = 4,

            /// <summary>
            /// Enum FORMAPIINTERNAL for value: FORM_API_INTERNAL
            /// </summary>
            [EnumMember(Value = "FORM_API_INTERNAL")]
            FORMAPIINTERNAL = 5,

            /// <summary>
            /// Enum IMPORT for value: IMPORT
            /// </summary>
            [EnumMember(Value = "IMPORT")]
            IMPORT = 6,

            /// <summary>
            /// Enum INTERNALFORM for value: INTERNAL_FORM
            /// </summary>
            [EnumMember(Value = "INTERNAL_FORM")]
            INTERNALFORM = 7,

            /// <summary>
            /// Enum LANDINGPAGE for value: LANDING_PAGE
            /// </summary>
            [EnumMember(Value = "LANDING_PAGE")]
            LANDINGPAGE = 8,

            /// <summary>
            /// Enum MANUAL for value: MANUAL
            /// </summary>
            [EnumMember(Value = "MANUAL")]
            MANUAL = 9,

            /// <summary>
            /// Enum OTHER for value: OTHER
            /// </summary>
            [EnumMember(Value = "OTHER")]
            OTHER = 10,

            /// <summary>
            /// Enum UNKNOWN for value: UNKNOWN
            /// </summary>
            [EnumMember(Value = "UNKNOWN")]
            UNKNOWN = 11,

            /// <summary>
            /// Enum WEBFORM for value: WEBFORM
            /// </summary>
            [EnumMember(Value = "WEBFORM")]
            WEBFORM = 12
        }

        /// <summary>
        /// Gets or Sets SourceType
        /// </summary>
        [DataMember(Name = "source_type", EmitDefaultValue = false)]
        public SourceTypeEnum? SourceType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Contact" /> class.
        /// </summary>
        /// <param name="addresses">addresses.</param>
        /// <param name="anniversaryDate">anniversaryDate.</param>
        /// <param name="birthDate">birthDate.</param>
        /// <param name="company">company.</param>
        /// <param name="contactType">contactType.</param>
        /// <param name="createTime">createTime.</param>
        /// <param name="customFields">customFields.</param>
        /// <param name="emailAddresses">emailAddresses.</param>
        /// <param name="familyName">familyName.</param>
        /// <param name="faxNumbers">faxNumbers.</param>
        /// <param name="givenName">givenName.</param>
        /// <param name="id">id.</param>
        /// <param name="jobTitle">jobTitle.</param>
        /// <param name="leadsourceId">leadsourceId.</param>
        /// <param name="links">links.</param>
        /// <param name="middleName">middleName.</param>
        /// <param name="origin">origin.</param>
        /// <param name="ownerId">ownerId.</param>
        /// <param name="phoneNumbers">phoneNumbers.</param>
        /// <param name="preferredLocale">preferredLocale.</param>
        /// <param name="preferredName">preferredName.</param>
        /// <param name="prefix">prefix.</param>
        /// <param name="referralCode">referralCode.</param>
        /// <param name="scoreValue">scoreValue.</param>
        /// <param name="socialAccounts">socialAccounts.</param>
        /// <param name="sourceType">sourceType.</param>
        /// <param name="spouseName">spouseName.</param>
        /// <param name="suffix">suffix.</param>
        /// <param name="tagIds">tagIds.</param>
        /// <param name="varTimeZone">varTimeZone.</param>
        /// <param name="updateTime">updateTime.</param>
        /// <param name="utmParameters">utmParameters.</param>
        /// <param name="website">website.</param>
        public Contact(List<Address> addresses = default(List<Address>), string anniversaryDate = default(string), string birthDate = default(string), BasicCompany company = default(BasicCompany), string contactType = default(string), string createTime = default(string), List<CustomFieldValue> customFields = default(List<CustomFieldValue>), List<EmailAddress> emailAddresses = default(List<EmailAddress>), string familyName = default(string), List<FaxNumber> faxNumbers = default(List<FaxNumber>), string givenName = default(string), string id = default(string), string jobTitle = default(string), string leadsourceId = default(string), List<Link> links = default(List<Link>), string middleName = default(string), Origin origin = default(Origin), string ownerId = default(string), List<PhoneNumber> phoneNumbers = default(List<PhoneNumber>), string preferredLocale = default(string), string preferredName = default(string), string prefix = default(string), string referralCode = default(string), string scoreValue = default(string), List<SocialAccount> socialAccounts = default(List<SocialAccount>), SourceTypeEnum? sourceType = default(SourceTypeEnum?), string spouseName = default(string), string suffix = default(string), List<string> tagIds = default(List<string>), string varTimeZone = default(string), string updateTime = default(string), List<ContactUtmResponse> utmParameters = default(List<ContactUtmResponse>), string website = default(string))
        {
            this.Addresses = addresses;
            this.AnniversaryDate = anniversaryDate;
            this.BirthDate = birthDate;
            this.Company = company;
            this.ContactType = contactType;
            this.CreateTime = createTime;
            this.CustomFields = customFields;
            this.EmailAddresses = emailAddresses;
            this.FamilyName = familyName;
            this.FaxNumbers = faxNumbers;
            this.GivenName = givenName;
            this.Id = id;
            this.JobTitle = jobTitle;
            this.LeadsourceId = leadsourceId;
            this.Links = links;
            this.MiddleName = middleName;
            this.Origin = origin;
            this.OwnerId = ownerId;
            this.PhoneNumbers = phoneNumbers;
            this.PreferredLocale = preferredLocale;
            this.PreferredName = preferredName;
            this.Prefix = prefix;
            this.ReferralCode = referralCode;
            this.ScoreValue = scoreValue;
            this.SocialAccounts = socialAccounts;
            this.SourceType = sourceType;
            this.SpouseName = spouseName;
            this.Suffix = suffix;
            this.TagIds = tagIds;
            this.VarTimeZone = varTimeZone;
            this.UpdateTime = updateTime;
            this.UtmParameters = utmParameters;
            this.Website = website;
        }

        /// <summary>
        /// Gets or Sets Addresses
        /// </summary>
        [DataMember(Name = "addresses", EmitDefaultValue = false)]
        public List<Address> Addresses { get; set; }

        /// <summary>
        /// Gets or Sets AnniversaryDate
        /// </summary>
        [DataMember(Name = "anniversary_date", EmitDefaultValue = false)]
        public string AnniversaryDate { get; set; }

        /// <summary>
        /// Gets or Sets BirthDate
        /// </summary>
        [DataMember(Name = "birth_date", EmitDefaultValue = false)]
        public string BirthDate { get; set; }

        /// <summary>
        /// Gets or Sets Company
        /// </summary>
        [DataMember(Name = "company", EmitDefaultValue = false)]
        public BasicCompany Company { get; set; }

        /// <summary>
        /// Gets or Sets ContactType
        /// </summary>
        [DataMember(Name = "contact_type", EmitDefaultValue = false)]
        public string ContactType { get; set; }

        /// <summary>
        /// Gets or Sets CreateTime
        /// </summary>
        [DataMember(Name = "create_time", EmitDefaultValue = false)]
        public string CreateTime { get; set; }

        /// <summary>
        /// Gets or Sets CustomFields
        /// </summary>
        [DataMember(Name = "custom_fields", EmitDefaultValue = false)]
        public List<CustomFieldValue> CustomFields { get; set; }

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
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets JobTitle
        /// </summary>
        [DataMember(Name = "job_title", EmitDefaultValue = false)]
        public string JobTitle { get; set; }

        /// <summary>
        /// Gets or Sets LeadsourceId
        /// </summary>
        [DataMember(Name = "leadsource_id", EmitDefaultValue = false)]
        public string LeadsourceId { get; set; }

        /// <summary>
        /// Gets or Sets Links
        /// </summary>
        [DataMember(Name = "links", EmitDefaultValue = false)]
        public List<Link> Links { get; set; }

        /// <summary>
        /// Gets or Sets MiddleName
        /// </summary>
        [DataMember(Name = "middle_name", EmitDefaultValue = false)]
        public string MiddleName { get; set; }

        /// <summary>
        /// Gets or Sets Origin
        /// </summary>
        [DataMember(Name = "origin", EmitDefaultValue = false)]
        public Origin Origin { get; set; }

        /// <summary>
        /// Gets or Sets OwnerId
        /// </summary>
        [DataMember(Name = "owner_id", EmitDefaultValue = false)]
        public string OwnerId { get; set; }

        /// <summary>
        /// Gets or Sets PhoneNumbers
        /// </summary>
        [DataMember(Name = "phone_numbers", EmitDefaultValue = false)]
        public List<PhoneNumber> PhoneNumbers { get; set; }

        /// <summary>
        /// Gets or Sets PreferredLocale
        /// </summary>
        /*
        <example>en_US</example>
        */
        [DataMember(Name = "preferred_locale", EmitDefaultValue = false)]
        public string PreferredLocale { get; set; }

        /// <summary>
        /// Gets or Sets PreferredName
        /// </summary>
        [DataMember(Name = "preferred_name", EmitDefaultValue = false)]
        public string PreferredName { get; set; }

        /// <summary>
        /// Gets or Sets Prefix
        /// </summary>
        [DataMember(Name = "prefix", EmitDefaultValue = false)]
        public string Prefix { get; set; }

        /// <summary>
        /// Gets or Sets ReferralCode
        /// </summary>
        [DataMember(Name = "referral_code", EmitDefaultValue = false)]
        public string ReferralCode { get; set; }

        /// <summary>
        /// Gets or Sets ScoreValue
        /// </summary>
        [DataMember(Name = "score_value", EmitDefaultValue = false)]
        public string ScoreValue { get; set; }

        /// <summary>
        /// Gets or Sets SocialAccounts
        /// </summary>
        [DataMember(Name = "social_accounts", EmitDefaultValue = false)]
        public List<SocialAccount> SocialAccounts { get; set; }

        /// <summary>
        /// Gets or Sets SpouseName
        /// </summary>
        [DataMember(Name = "spouse_name", EmitDefaultValue = false)]
        public string SpouseName { get; set; }

        /// <summary>
        /// Gets or Sets Suffix
        /// </summary>
        [DataMember(Name = "suffix", EmitDefaultValue = false)]
        public string Suffix { get; set; }

        /// <summary>
        /// Gets or Sets TagIds
        /// </summary>
        [DataMember(Name = "tag_ids", EmitDefaultValue = false)]
        public List<string> TagIds { get; set; }

        /// <summary>
        /// Gets or Sets VarTimeZone
        /// </summary>
        [DataMember(Name = "time_zone", EmitDefaultValue = false)]
        public string VarTimeZone { get; set; }

        /// <summary>
        /// Gets or Sets UpdateTime
        /// </summary>
        [DataMember(Name = "update_time", EmitDefaultValue = false)]
        public string UpdateTime { get; set; }

        /// <summary>
        /// Gets or Sets UtmParameters
        /// </summary>
        [DataMember(Name = "utm_parameters", EmitDefaultValue = false)]
        public List<ContactUtmResponse> UtmParameters { get; set; }

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
            sb.Append("class Contact {\n");
            sb.Append("  Addresses: ").Append(Addresses).Append("\n");
            sb.Append("  AnniversaryDate: ").Append(AnniversaryDate).Append("\n");
            sb.Append("  BirthDate: ").Append(BirthDate).Append("\n");
            sb.Append("  Company: ").Append(Company).Append("\n");
            sb.Append("  ContactType: ").Append(ContactType).Append("\n");
            sb.Append("  CreateTime: ").Append(CreateTime).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  EmailAddresses: ").Append(EmailAddresses).Append("\n");
            sb.Append("  FamilyName: ").Append(FamilyName).Append("\n");
            sb.Append("  FaxNumbers: ").Append(FaxNumbers).Append("\n");
            sb.Append("  GivenName: ").Append(GivenName).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  JobTitle: ").Append(JobTitle).Append("\n");
            sb.Append("  LeadsourceId: ").Append(LeadsourceId).Append("\n");
            sb.Append("  Links: ").Append(Links).Append("\n");
            sb.Append("  MiddleName: ").Append(MiddleName).Append("\n");
            sb.Append("  Origin: ").Append(Origin).Append("\n");
            sb.Append("  OwnerId: ").Append(OwnerId).Append("\n");
            sb.Append("  PhoneNumbers: ").Append(PhoneNumbers).Append("\n");
            sb.Append("  PreferredLocale: ").Append(PreferredLocale).Append("\n");
            sb.Append("  PreferredName: ").Append(PreferredName).Append("\n");
            sb.Append("  Prefix: ").Append(Prefix).Append("\n");
            sb.Append("  ReferralCode: ").Append(ReferralCode).Append("\n");
            sb.Append("  ScoreValue: ").Append(ScoreValue).Append("\n");
            sb.Append("  SocialAccounts: ").Append(SocialAccounts).Append("\n");
            sb.Append("  SourceType: ").Append(SourceType).Append("\n");
            sb.Append("  SpouseName: ").Append(SpouseName).Append("\n");
            sb.Append("  Suffix: ").Append(Suffix).Append("\n");
            sb.Append("  TagIds: ").Append(TagIds).Append("\n");
            sb.Append("  VarTimeZone: ").Append(VarTimeZone).Append("\n");
            sb.Append("  UpdateTime: ").Append(UpdateTime).Append("\n");
            sb.Append("  UtmParameters: ").Append(UtmParameters).Append("\n");
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
