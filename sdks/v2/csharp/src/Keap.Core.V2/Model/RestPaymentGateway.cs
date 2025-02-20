/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
using OpenAPIDateConverter = Keap.Core.V2.Client.OpenAPIDateConverter;

namespace Keap.Core.V2.Model
{
    /// <summary>
    /// RestPaymentGateway
    /// </summary>
    [DataContract(Name = "RestPaymentGateway")]
    public partial class RestPaymentGateway : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RestPaymentGateway" /> class.
        /// </summary>
        /// <param name="merchantAccountId">merchantAccountId.</param>
        /// <param name="merchantAccountName">merchantAccountName.</param>
        /// <param name="useDefault">useDefault.</param>
        public RestPaymentGateway(string merchantAccountId = default(string), string merchantAccountName = default(string), bool useDefault = default(bool))
        {
            this.MerchantAccountId = merchantAccountId;
            this.MerchantAccountName = merchantAccountName;
            this.UseDefault = useDefault;
        }

        /// <summary>
        /// Gets or Sets MerchantAccountId
        /// </summary>
        [DataMember(Name = "merchant_account_id", EmitDefaultValue = false)]
        public string MerchantAccountId { get; set; }

        /// <summary>
        /// Gets or Sets MerchantAccountName
        /// </summary>
        [DataMember(Name = "merchant_account_name", EmitDefaultValue = false)]
        public string MerchantAccountName { get; set; }

        /// <summary>
        /// Gets or Sets UseDefault
        /// </summary>
        [DataMember(Name = "use_default", EmitDefaultValue = true)]
        public bool UseDefault { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RestPaymentGateway {\n");
            sb.Append("  MerchantAccountId: ").Append(MerchantAccountId).Append("\n");
            sb.Append("  MerchantAccountName: ").Append(MerchantAccountName).Append("\n");
            sb.Append("  UseDefault: ").Append(UseDefault).Append("\n");
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
