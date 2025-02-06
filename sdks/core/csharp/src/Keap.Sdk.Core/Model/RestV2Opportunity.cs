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
    /// RestV2Opportunity
    /// </summary>
    [DataContract(Name = "RestV2Opportunity")]
    public partial class RestV2Opportunity : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RestV2Opportunity" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected RestV2Opportunity() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="RestV2Opportunity" /> class.
        /// </summary>
        /// <param name="affiliateId">affiliateId.</param>
        /// <param name="contact">contact (required).</param>
        /// <param name="createdTime">createdTime.</param>
        /// <param name="customFields">customFields.</param>
        /// <param name="estimatedCloseTime">estimatedCloseTime.</param>
        /// <param name="id">id.</param>
        /// <param name="includeInForecast">includeInForecast.</param>
        /// <param name="lastUpdatedTime">lastUpdatedTime.</param>
        /// <param name="nextActionNotes">nextActionNotes.</param>
        /// <param name="nextActionTime">nextActionTime.</param>
        /// <param name="opportunityNotes">opportunityNotes.</param>
        /// <param name="opportunityTitle">opportunityTitle (required).</param>
        /// <param name="projectedRevenueHigh">projectedRevenueHigh.</param>
        /// <param name="projectedRevenueLow">projectedRevenueLow.</param>
        /// <param name="stage">stage (required).</param>
        /// <param name="user">user.</param>
        public RestV2Opportunity(string affiliateId = default(string), OpportunityContact contact = default(OpportunityContact), string createdTime = default(string), List<CustomField> customFields = default(List<CustomField>), string estimatedCloseTime = default(string), string id = default(string), bool includeInForecast = default(bool), string lastUpdatedTime = default(string), string nextActionNotes = default(string), string nextActionTime = default(string), string opportunityNotes = default(string), string opportunityTitle = default(string), double projectedRevenueHigh = default(double), double projectedRevenueLow = default(double), OpportunityStage stage = default(OpportunityStage), RestV2User user = default(RestV2User))
        {
            // to ensure "contact" is required (not null)
            if (contact == null)
            {
                throw new ArgumentNullException("contact is a required property for RestV2Opportunity and cannot be null");
            }
            this.Contact = contact;
            // to ensure "opportunityTitle" is required (not null)
            if (opportunityTitle == null)
            {
                throw new ArgumentNullException("opportunityTitle is a required property for RestV2Opportunity and cannot be null");
            }
            this.OpportunityTitle = opportunityTitle;
            // to ensure "stage" is required (not null)
            if (stage == null)
            {
                throw new ArgumentNullException("stage is a required property for RestV2Opportunity and cannot be null");
            }
            this.Stage = stage;
            this.AffiliateId = affiliateId;
            this.CreatedTime = createdTime;
            this.CustomFields = customFields;
            this.EstimatedCloseTime = estimatedCloseTime;
            this.Id = id;
            this.IncludeInForecast = includeInForecast;
            this.LastUpdatedTime = lastUpdatedTime;
            this.NextActionNotes = nextActionNotes;
            this.NextActionTime = nextActionTime;
            this.OpportunityNotes = opportunityNotes;
            this.ProjectedRevenueHigh = projectedRevenueHigh;
            this.ProjectedRevenueLow = projectedRevenueLow;
            this.User = user;
        }

        /// <summary>
        /// Gets or Sets AffiliateId
        /// </summary>
        [DataMember(Name = "affiliate_id", EmitDefaultValue = false)]
        public string AffiliateId { get; set; }

        /// <summary>
        /// Gets or Sets Contact
        /// </summary>
        [DataMember(Name = "contact", IsRequired = true, EmitDefaultValue = true)]
        public OpportunityContact Contact { get; set; }

        /// <summary>
        /// Gets or Sets CreatedTime
        /// </summary>
        [DataMember(Name = "created_time", EmitDefaultValue = false)]
        public string CreatedTime { get; set; }

        /// <summary>
        /// Gets or Sets CustomFields
        /// </summary>
        [DataMember(Name = "custom_fields", EmitDefaultValue = false)]
        public List<CustomField> CustomFields { get; set; }

        /// <summary>
        /// Gets or Sets EstimatedCloseTime
        /// </summary>
        [DataMember(Name = "estimated_close_time", EmitDefaultValue = false)]
        public string EstimatedCloseTime { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets IncludeInForecast
        /// </summary>
        [DataMember(Name = "include_in_forecast", EmitDefaultValue = true)]
        public bool IncludeInForecast { get; set; }

        /// <summary>
        /// Gets or Sets LastUpdatedTime
        /// </summary>
        [DataMember(Name = "last_updated_time", EmitDefaultValue = false)]
        public string LastUpdatedTime { get; set; }

        /// <summary>
        /// Gets or Sets NextActionNotes
        /// </summary>
        [DataMember(Name = "next_action_notes", EmitDefaultValue = false)]
        public string NextActionNotes { get; set; }

        /// <summary>
        /// Gets or Sets NextActionTime
        /// </summary>
        [DataMember(Name = "next_action_time", EmitDefaultValue = false)]
        public string NextActionTime { get; set; }

        /// <summary>
        /// Gets or Sets OpportunityNotes
        /// </summary>
        [DataMember(Name = "opportunity_notes", EmitDefaultValue = false)]
        public string OpportunityNotes { get; set; }

        /// <summary>
        /// Gets or Sets OpportunityTitle
        /// </summary>
        [DataMember(Name = "opportunity_title", IsRequired = true, EmitDefaultValue = true)]
        public string OpportunityTitle { get; set; }

        /// <summary>
        /// Gets or Sets ProjectedRevenueHigh
        /// </summary>
        [DataMember(Name = "projected_revenue_high", EmitDefaultValue = false)]
        public double ProjectedRevenueHigh { get; set; }

        /// <summary>
        /// Gets or Sets ProjectedRevenueLow
        /// </summary>
        [DataMember(Name = "projected_revenue_low", EmitDefaultValue = false)]
        public double ProjectedRevenueLow { get; set; }

        /// <summary>
        /// Gets or Sets Stage
        /// </summary>
        [DataMember(Name = "stage", IsRequired = true, EmitDefaultValue = true)]
        public OpportunityStage Stage { get; set; }

        /// <summary>
        /// Gets or Sets User
        /// </summary>
        [DataMember(Name = "user", EmitDefaultValue = false)]
        public RestV2User User { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RestV2Opportunity {\n");
            sb.Append("  AffiliateId: ").Append(AffiliateId).Append("\n");
            sb.Append("  Contact: ").Append(Contact).Append("\n");
            sb.Append("  CreatedTime: ").Append(CreatedTime).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  EstimatedCloseTime: ").Append(EstimatedCloseTime).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  IncludeInForecast: ").Append(IncludeInForecast).Append("\n");
            sb.Append("  LastUpdatedTime: ").Append(LastUpdatedTime).Append("\n");
            sb.Append("  NextActionNotes: ").Append(NextActionNotes).Append("\n");
            sb.Append("  NextActionTime: ").Append(NextActionTime).Append("\n");
            sb.Append("  OpportunityNotes: ").Append(OpportunityNotes).Append("\n");
            sb.Append("  OpportunityTitle: ").Append(OpportunityTitle).Append("\n");
            sb.Append("  ProjectedRevenueHigh: ").Append(ProjectedRevenueHigh).Append("\n");
            sb.Append("  ProjectedRevenueLow: ").Append(ProjectedRevenueLow).Append("\n");
            sb.Append("  Stage: ").Append(Stage).Append("\n");
            sb.Append("  User: ").Append(User).Append("\n");
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
