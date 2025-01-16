/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
    /// AffiliateProgramV2
    /// </summary>
    [DataContract(Name = "AffiliateProgramV2")]
    public partial class AffiliateProgramV2 : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AffiliateProgramV2" /> class.
        /// </summary>
        /// <param name="affiliateId">The affiliate_Id for Affiliate commission program.</param>
        /// <param name="createTime">The created time of affiliate commission program.</param>
        /// <param name="defaultCommission">defaultCommission.</param>
        /// <param name="id">The affiliate commission program name.</param>
        /// <param name="name">The affiliate commission program name.</param>
        /// <param name="notes">The affiliate commission program notes.</param>
        /// <param name="priority">The Affiliate commission program priority.</param>
        /// <param name="productCommissions">productCommissions.</param>
        /// <param name="subscriptionCommissions">subscriptionCommissions.</param>
        public AffiliateProgramV2(string affiliateId = default(string), DateTime createTime = default(DateTime), DefaultCommission defaultCommission = default(DefaultCommission), string id = default(string), string name = default(string), string notes = default(string), string priority = default(string), List<ProductCommission> productCommissions = default(List<ProductCommission>), List<SubscriptionCommission> subscriptionCommissions = default(List<SubscriptionCommission>))
        {
            this.AffiliateId = affiliateId;
            this.CreateTime = createTime;
            this.DefaultCommission = defaultCommission;
            this.Id = id;
            this.Name = name;
            this.Notes = notes;
            this.Priority = priority;
            this.ProductCommissions = productCommissions;
            this.SubscriptionCommissions = subscriptionCommissions;
        }

        /// <summary>
        /// The affiliate_Id for Affiliate commission program
        /// </summary>
        /// <value>The affiliate_Id for Affiliate commission program</value>
        /*
        <example>123</example>
        */
        [DataMember(Name = "affiliate_id", EmitDefaultValue = false)]
        public string AffiliateId { get; set; }

        /// <summary>
        /// The created time of affiliate commission program
        /// </summary>
        /// <value>The created time of affiliate commission program</value>
        /*
        <example>2019-08-24T14:15:22Z</example>
        */
        [DataMember(Name = "create_time", EmitDefaultValue = false)]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// Gets or Sets DefaultCommission
        /// </summary>
        [DataMember(Name = "default_commission", EmitDefaultValue = false)]
        public DefaultCommission DefaultCommission { get; set; }

        /// <summary>
        /// The affiliate commission program name
        /// </summary>
        /// <value>The affiliate commission program name</value>
        /*
        <example>1</example>
        */
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// The affiliate commission program name
        /// </summary>
        /// <value>The affiliate commission program name</value>
        /*
        <example>commission program</example>
        */
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// The affiliate commission program notes
        /// </summary>
        /// <value>The affiliate commission program notes</value>
        /*
        <example>notes for the commission program</example>
        */
        [DataMember(Name = "notes", EmitDefaultValue = false)]
        public string Notes { get; set; }

        /// <summary>
        /// The Affiliate commission program priority
        /// </summary>
        /// <value>The Affiliate commission program priority</value>
        /*
        <example>0</example>
        */
        [DataMember(Name = "priority", EmitDefaultValue = false)]
        public string Priority { get; set; }

        /// <summary>
        /// Gets or Sets ProductCommissions
        /// </summary>
        [DataMember(Name = "product_commissions", EmitDefaultValue = false)]
        public List<ProductCommission> ProductCommissions { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionCommissions
        /// </summary>
        [DataMember(Name = "subscription_commissions", EmitDefaultValue = false)]
        public List<SubscriptionCommission> SubscriptionCommissions { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AffiliateProgramV2 {\n");
            sb.Append("  AffiliateId: ").Append(AffiliateId).Append("\n");
            sb.Append("  CreateTime: ").Append(CreateTime).Append("\n");
            sb.Append("  DefaultCommission: ").Append(DefaultCommission).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Notes: ").Append(Notes).Append("\n");
            sb.Append("  Priority: ").Append(Priority).Append("\n");
            sb.Append("  ProductCommissions: ").Append(ProductCommissions).Append("\n");
            sb.Append("  SubscriptionCommissions: ").Append(SubscriptionCommissions).Append("\n");
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
