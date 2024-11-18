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
    /// FunnelIntegrationAction
    /// </summary>
    [DataContract(Name = "FunnelIntegrationAction")]
    public partial class FunnelIntegrationAction : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FunnelIntegrationAction" /> class.
        /// </summary>
        /// <param name="baseUrl">The base URL of the trigger, that will be used to call the integration related REST endpoints..</param>
        /// <param name="context">The context of the trigger, that will be used internally to identify the integration..</param>
        /// <param name="enabled">The flag to enable or disable the integration trigger..</param>
        /// <param name="iconUrl">The icon URL of the trigger, that will be used to display the icon of this specific integration trigger..</param>
        /// <param name="name">The name of the trigger, that will be used internally to identify and initiate the trigger..</param>
        /// <param name="schemaFields">The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated..</param>
        public FunnelIntegrationAction(string baseUrl = default(string), string context = default(string), bool enabled = default(bool), string iconUrl = default(string), string name = default(string), List<FunnelIntegrationSchemaField> schemaFields = default(List<FunnelIntegrationSchemaField>))
        {
            this.BaseUrl = baseUrl;
            this.Context = context;
            this.Enabled = enabled;
            this.IconUrl = iconUrl;
            this.Name = name;
            this.SchemaFields = schemaFields;
        }

        /// <summary>
        /// The base URL of the trigger, that will be used to call the integration related REST endpoints.
        /// </summary>
        /// <value>The base URL of the trigger, that will be used to call the integration related REST endpoints.</value>
        [DataMember(Name = "base_url", EmitDefaultValue = false)]
        public string BaseUrl { get; set; }

        /// <summary>
        /// The context of the trigger, that will be used internally to identify the integration.
        /// </summary>
        /// <value>The context of the trigger, that will be used internally to identify the integration.</value>
        [DataMember(Name = "context", EmitDefaultValue = false)]
        public string Context { get; set; }

        /// <summary>
        /// The flag to enable or disable the integration trigger.
        /// </summary>
        /// <value>The flag to enable or disable the integration trigger.</value>
        [DataMember(Name = "enabled", EmitDefaultValue = true)]
        public bool Enabled { get; set; }

        /// <summary>
        /// The icon URL of the trigger, that will be used to display the icon of this specific integration trigger.
        /// </summary>
        /// <value>The icon URL of the trigger, that will be used to display the icon of this specific integration trigger.</value>
        [DataMember(Name = "icon_url", EmitDefaultValue = false)]
        public string IconUrl { get; set; }

        /// <summary>
        /// The name of the trigger, that will be used internally to identify and initiate the trigger.
        /// </summary>
        /// <value>The name of the trigger, that will be used internally to identify and initiate the trigger.</value>
        /*
        <example>My Trigger, MyTrigger, My 1 New Very Exciting Trigger</example>
        */
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated.
        /// </summary>
        /// <value>The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated.</value>
        /*
        <example>&quot;schema_fields&quot;: [
                {
                    &quot;name&quot;: &quot;my_schema_field&quot;,
                    &quot;type&quot;: &quot;String&quot;,
                    &quot;label&quot;: &quot;My Schema Field&quot;
                },
                {
                    &quot;name&quot;: &quot;num_sales&quot;,
                    &quot;type&quot;: &quot;Integer&quot;,
                    &quot;label&quot;: &quot;Number of Sales&quot;
                }

            ],</example>
        */
        [DataMember(Name = "schema_fields", EmitDefaultValue = false)]
        public List<FunnelIntegrationSchemaField> SchemaFields { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FunnelIntegrationAction {\n");
            sb.Append("  BaseUrl: ").Append(BaseUrl).Append("\n");
            sb.Append("  Context: ").Append(Context).Append("\n");
            sb.Append("  Enabled: ").Append(Enabled).Append("\n");
            sb.Append("  IconUrl: ").Append(IconUrl).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  SchemaFields: ").Append(SchemaFields).Append("\n");
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
