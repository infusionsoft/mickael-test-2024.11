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
    /// ApplicationConfigurationModuleAffiliate
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleAffiliate")]
    public partial class ApplicationConfigurationModuleAffiliate : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleAffiliate" /> class.
        /// </summary>
        /// <param name="chooseAffiliate">chooseAffiliate.</param>
        /// <param name="commission">commission.</param>
        /// <param name="customAffiliateUrl">customAffiliateUrl.</param>
        /// <param name="displayAffiliateIpAddress">displayAffiliateIpAddress.</param>
        /// <param name="doNotNotifyAffiliate">doNotNotifyAffiliate.</param>
        /// <param name="skipPayIfUnused">skipPayIfUnused.</param>
        /// <param name="useReferralHistoryIfNoTrackingCookie">useReferralHistoryIfNoTrackingCookie.</param>
        public ApplicationConfigurationModuleAffiliate(bool chooseAffiliate = default(bool), ApplicationConfigurationModuleAffiliateCommission commission = default(ApplicationConfigurationModuleAffiliateCommission), string customAffiliateUrl = default(string), bool displayAffiliateIpAddress = default(bool), bool doNotNotifyAffiliate = default(bool), bool skipPayIfUnused = default(bool), bool useReferralHistoryIfNoTrackingCookie = default(bool))
        {
            this.ChooseAffiliate = chooseAffiliate;
            this.Commission = commission;
            this.CustomAffiliateUrl = customAffiliateUrl;
            this.DisplayAffiliateIpAddress = displayAffiliateIpAddress;
            this.DoNotNotifyAffiliate = doNotNotifyAffiliate;
            this.SkipPayIfUnused = skipPayIfUnused;
            this.UseReferralHistoryIfNoTrackingCookie = useReferralHistoryIfNoTrackingCookie;
        }

        /// <summary>
        /// Gets or Sets ChooseAffiliate
        /// </summary>
        [DataMember(Name = "choose_affiliate", EmitDefaultValue = true)]
        public bool ChooseAffiliate { get; set; }

        /// <summary>
        /// Gets or Sets Commission
        /// </summary>
        [DataMember(Name = "commission", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleAffiliateCommission Commission { get; set; }

        /// <summary>
        /// Gets or Sets CustomAffiliateUrl
        /// </summary>
        [DataMember(Name = "custom_affiliate_url", EmitDefaultValue = false)]
        public string CustomAffiliateUrl { get; set; }

        /// <summary>
        /// Gets or Sets DisplayAffiliateIpAddress
        /// </summary>
        [DataMember(Name = "display_affiliate_ip_address", EmitDefaultValue = true)]
        public bool DisplayAffiliateIpAddress { get; set; }

        /// <summary>
        /// Gets or Sets DoNotNotifyAffiliate
        /// </summary>
        [DataMember(Name = "do_not_notify_affiliate", EmitDefaultValue = true)]
        public bool DoNotNotifyAffiliate { get; set; }

        /// <summary>
        /// Gets or Sets SkipPayIfUnused
        /// </summary>
        [DataMember(Name = "skip_pay_if_unused", EmitDefaultValue = true)]
        public bool SkipPayIfUnused { get; set; }

        /// <summary>
        /// Gets or Sets UseReferralHistoryIfNoTrackingCookie
        /// </summary>
        [DataMember(Name = "use_referral_history_if_no_tracking_cookie", EmitDefaultValue = true)]
        public bool UseReferralHistoryIfNoTrackingCookie { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleAffiliate {\n");
            sb.Append("  ChooseAffiliate: ").Append(ChooseAffiliate).Append("\n");
            sb.Append("  Commission: ").Append(Commission).Append("\n");
            sb.Append("  CustomAffiliateUrl: ").Append(CustomAffiliateUrl).Append("\n");
            sb.Append("  DisplayAffiliateIpAddress: ").Append(DisplayAffiliateIpAddress).Append("\n");
            sb.Append("  DoNotNotifyAffiliate: ").Append(DoNotNotifyAffiliate).Append("\n");
            sb.Append("  SkipPayIfUnused: ").Append(SkipPayIfUnused).Append("\n");
            sb.Append("  UseReferralHistoryIfNoTrackingCookie: ").Append(UseReferralHistoryIfNoTrackingCookie).Append("\n");
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
