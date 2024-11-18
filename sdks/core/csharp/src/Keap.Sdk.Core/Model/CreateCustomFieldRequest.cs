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
    /// CreateCustomFieldRequest
    /// </summary>
    [DataContract(Name = "CreateCustomFieldRequest")]
    public partial class CreateCustomFieldRequest : IValidatableObject
    {
        /// <summary>
        /// Defines FieldType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum FieldTypeEnum
        {
            /// <summary>
            /// Enum CURRENCY for value: CURRENCY
            /// </summary>
            [EnumMember(Value = "CURRENCY")]
            CURRENCY = 1,

            /// <summary>
            /// Enum DATE for value: DATE
            /// </summary>
            [EnumMember(Value = "DATE")]
            DATE = 2,

            /// <summary>
            /// Enum DATETIME for value: DATE_TIME
            /// </summary>
            [EnumMember(Value = "DATE_TIME")]
            DATETIME = 3,

            /// <summary>
            /// Enum DAYOFWEEK for value: DAY_OF_WEEK
            /// </summary>
            [EnumMember(Value = "DAY_OF_WEEK")]
            DAYOFWEEK = 4,

            /// <summary>
            /// Enum DECIMALNUMBER for value: DECIMAL_NUMBER
            /// </summary>
            [EnumMember(Value = "DECIMAL_NUMBER")]
            DECIMALNUMBER = 5,

            /// <summary>
            /// Enum DRILLDOWN for value: DRILLDOWN
            /// </summary>
            [EnumMember(Value = "DRILLDOWN")]
            DRILLDOWN = 6,

            /// <summary>
            /// Enum DROPDOWN for value: DROPDOWN
            /// </summary>
            [EnumMember(Value = "DROPDOWN")]
            DROPDOWN = 7,

            /// <summary>
            /// Enum EMAIL for value: EMAIL
            /// </summary>
            [EnumMember(Value = "EMAIL")]
            EMAIL = 8,

            /// <summary>
            /// Enum LISTBOX for value: LIST_BOX
            /// </summary>
            [EnumMember(Value = "LIST_BOX")]
            LISTBOX = 9,

            /// <summary>
            /// Enum MONTH for value: MONTH
            /// </summary>
            [EnumMember(Value = "MONTH")]
            MONTH = 10,

            /// <summary>
            /// Enum NAME for value: NAME
            /// </summary>
            [EnumMember(Value = "NAME")]
            NAME = 11,

            /// <summary>
            /// Enum PERCENT for value: PERCENT
            /// </summary>
            [EnumMember(Value = "PERCENT")]
            PERCENT = 12,

            /// <summary>
            /// Enum PHONENUMBER for value: PHONE_NUMBER
            /// </summary>
            [EnumMember(Value = "PHONE_NUMBER")]
            PHONENUMBER = 13,

            /// <summary>
            /// Enum RADIO for value: RADIO
            /// </summary>
            [EnumMember(Value = "RADIO")]
            RADIO = 14,

            /// <summary>
            /// Enum SOCIALSECURITYNUMBER for value: SOCIAL_SECURITY_NUMBER
            /// </summary>
            [EnumMember(Value = "SOCIAL_SECURITY_NUMBER")]
            SOCIALSECURITYNUMBER = 15,

            /// <summary>
            /// Enum STATE for value: STATE
            /// </summary>
            [EnumMember(Value = "STATE")]
            STATE = 16,

            /// <summary>
            /// Enum TEXT for value: TEXT
            /// </summary>
            [EnumMember(Value = "TEXT")]
            TEXT = 17,

            /// <summary>
            /// Enum TEXTAREA for value: TEXT_AREA
            /// </summary>
            [EnumMember(Value = "TEXT_AREA")]
            TEXTAREA = 18,

            /// <summary>
            /// Enum USER for value: USER
            /// </summary>
            [EnumMember(Value = "USER")]
            USER = 19,

            /// <summary>
            /// Enum USERLISTBOX for value: USER_LIST_BOX
            /// </summary>
            [EnumMember(Value = "USER_LIST_BOX")]
            USERLISTBOX = 20,

            /// <summary>
            /// Enum WEBSITE for value: WEBSITE
            /// </summary>
            [EnumMember(Value = "WEBSITE")]
            WEBSITE = 21,

            /// <summary>
            /// Enum WHOLENUMBER for value: WHOLE_NUMBER
            /// </summary>
            [EnumMember(Value = "WHOLE_NUMBER")]
            WHOLENUMBER = 22,

            /// <summary>
            /// Enum YEAR for value: YEAR
            /// </summary>
            [EnumMember(Value = "YEAR")]
            YEAR = 23,

            /// <summary>
            /// Enum YESNO for value: YES_NO
            /// </summary>
            [EnumMember(Value = "YES_NO")]
            YESNO = 24
        }

        /// <summary>
        /// Gets or Sets FieldType
        /// </summary>
        [DataMember(Name = "field_type", IsRequired = true, EmitDefaultValue = true)]
        public FieldTypeEnum FieldType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCustomFieldRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateCustomFieldRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCustomFieldRequest" /> class.
        /// </summary>
        /// <param name="fieldType">fieldType (required).</param>
        /// <param name="groupId">An optional tab group to place the field under in the interface.  If not specified, will default to the &#39;Custom Fields&#39; tab..</param>
        /// <param name="label">label (required).</param>
        /// <param name="options">options.</param>
        /// <param name="userGroupId">An optional user group to choose from when selecting values for User or UserListBox fields..</param>
        public CreateCustomFieldRequest(FieldTypeEnum fieldType = default(FieldTypeEnum), string groupId = default(string), string label = default(string), List<CreateCustomFieldOptionRequest> options = default(List<CreateCustomFieldOptionRequest>), string userGroupId = default(string))
        {
            this.FieldType = fieldType;
            // to ensure "label" is required (not null)
            if (label == null)
            {
                throw new ArgumentNullException("label is a required property for CreateCustomFieldRequest and cannot be null");
            }
            this.Label = label;
            this.GroupId = groupId;
            this.Options = options;
            this.UserGroupId = userGroupId;
        }

        /// <summary>
        /// An optional tab group to place the field under in the interface.  If not specified, will default to the &#39;Custom Fields&#39; tab.
        /// </summary>
        /// <value>An optional tab group to place the field under in the interface.  If not specified, will default to the &#39;Custom Fields&#39; tab.</value>
        [DataMember(Name = "group_id", EmitDefaultValue = false)]
        public string GroupId { get; set; }

        /// <summary>
        /// Gets or Sets Label
        /// </summary>
        [DataMember(Name = "label", IsRequired = true, EmitDefaultValue = true)]
        public string Label { get; set; }

        /// <summary>
        /// Gets or Sets Options
        /// </summary>
        [DataMember(Name = "options", EmitDefaultValue = false)]
        public List<CreateCustomFieldOptionRequest> Options { get; set; }

        /// <summary>
        /// An optional user group to choose from when selecting values for User or UserListBox fields.
        /// </summary>
        /// <value>An optional user group to choose from when selecting values for User or UserListBox fields.</value>
        [DataMember(Name = "user_group_id", EmitDefaultValue = false)]
        public string UserGroupId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateCustomFieldRequest {\n");
            sb.Append("  FieldType: ").Append(FieldType).Append("\n");
            sb.Append("  GroupId: ").Append(GroupId).Append("\n");
            sb.Append("  Label: ").Append(Label).Append("\n");
            sb.Append("  Options: ").Append(Options).Append("\n");
            sb.Append("  UserGroupId: ").Append(UserGroupId).Append("\n");
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
