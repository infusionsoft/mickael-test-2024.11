/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
    /// LandingPage
    /// </summary>
    [DataContract(Name = "LandingPage")]
    public partial class LandingPage : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LandingPage" /> class.
        /// </summary>
        /// <param name="htmlPreviewUrl">htmlPreviewUrl.</param>
        /// <param name="htmlUrl">htmlUrl.</param>
        /// <param name="id">id.</param>
        /// <param name="templateGroupStatus">templateGroupStatus.</param>
        /// <param name="title">title.</param>
        public LandingPage(string htmlPreviewUrl = default(string), string htmlUrl = default(string), string id = default(string), string templateGroupStatus = default(string), string title = default(string))
        {
            this.HtmlPreviewUrl = htmlPreviewUrl;
            this.HtmlUrl = htmlUrl;
            this.Id = id;
            this.TemplateGroupStatus = templateGroupStatus;
            this.Title = title;
        }

        /// <summary>
        /// Gets or Sets HtmlPreviewUrl
        /// </summary>
        [DataMember(Name = "html_preview_url", EmitDefaultValue = false)]
        public string HtmlPreviewUrl { get; set; }

        /// <summary>
        /// Gets or Sets HtmlUrl
        /// </summary>
        [DataMember(Name = "html_url", EmitDefaultValue = false)]
        public string HtmlUrl { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets TemplateGroupStatus
        /// </summary>
        [DataMember(Name = "template_group_status", EmitDefaultValue = false)]
        public string TemplateGroupStatus { get; set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name = "title", EmitDefaultValue = false)]
        public string Title { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class LandingPage {\n");
            sb.Append("  HtmlPreviewUrl: ").Append(HtmlPreviewUrl).Append("\n");
            sb.Append("  HtmlUrl: ").Append(HtmlUrl).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  TemplateGroupStatus: ").Append(TemplateGroupStatus).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
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
