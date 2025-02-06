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
    /// GetSettingsResponse
    /// </summary>
    [DataContract(Name = "GetSettingsResponse")]
    public partial class GetSettingsResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetSettingsResponse" /> class.
        /// </summary>
        /// <param name="affiliate">affiliate.</param>
        /// <param name="application">application.</param>
        /// <param name="appointment">appointment.</param>
        /// <param name="contact">contact.</param>
        /// <param name="ecommerce">ecommerce.</param>
        /// <param name="email">email.</param>
        /// <param name="forms">forms.</param>
        /// <param name="fulfillment">fulfillment.</param>
        /// <param name="invoice">invoice.</param>
        /// <param name="note">note.</param>
        /// <param name="opportunity">opportunity.</param>
        /// <param name="task">task.</param>
        /// <param name="template">template.</param>
        public GetSettingsResponse(ApplicationConfigurationModuleAffiliate affiliate = default(ApplicationConfigurationModuleAffiliate), ApplicationConfigurationModuleApplication application = default(ApplicationConfigurationModuleApplication), ApplicationConfigurationModuleAppointment appointment = default(ApplicationConfigurationModuleAppointment), ApplicationConfigurationModuleContact contact = default(ApplicationConfigurationModuleContact), ApplicationConfigurationModuleEcommerce ecommerce = default(ApplicationConfigurationModuleEcommerce), ApplicationConfigurationModuleEmail email = default(ApplicationConfigurationModuleEmail), ApplicationConfigurationModuleForms forms = default(ApplicationConfigurationModuleForms), ApplicationConfigurationModuleFulfillment fulfillment = default(ApplicationConfigurationModuleFulfillment), ApplicationConfigurationModuleInvoice invoice = default(ApplicationConfigurationModuleInvoice), ApplicationConfigurationModuleNote note = default(ApplicationConfigurationModuleNote), ApplicationConfigurationModuleOpportunity opportunity = default(ApplicationConfigurationModuleOpportunity), ApplicationConfigurationModuleTask task = default(ApplicationConfigurationModuleTask), ApplicationConfigurationModuleTemplate template = default(ApplicationConfigurationModuleTemplate))
        {
            this.Affiliate = affiliate;
            this.Application = application;
            this.Appointment = appointment;
            this.Contact = contact;
            this.Ecommerce = ecommerce;
            this.Email = email;
            this.Forms = forms;
            this.Fulfillment = fulfillment;
            this.Invoice = invoice;
            this.Note = note;
            this.Opportunity = opportunity;
            this.Task = task;
            this.Template = template;
        }

        /// <summary>
        /// Gets or Sets Affiliate
        /// </summary>
        [DataMember(Name = "affiliate", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleAffiliate Affiliate { get; set; }

        /// <summary>
        /// Gets or Sets Application
        /// </summary>
        [DataMember(Name = "application", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleApplication Application { get; set; }

        /// <summary>
        /// Gets or Sets Appointment
        /// </summary>
        [DataMember(Name = "appointment", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleAppointment Appointment { get; set; }

        /// <summary>
        /// Gets or Sets Contact
        /// </summary>
        [DataMember(Name = "contact", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleContact Contact { get; set; }

        /// <summary>
        /// Gets or Sets Ecommerce
        /// </summary>
        [DataMember(Name = "ecommerce", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleEcommerce Ecommerce { get; set; }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name = "email", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleEmail Email { get; set; }

        /// <summary>
        /// Gets or Sets Forms
        /// </summary>
        [DataMember(Name = "forms", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleForms Forms { get; set; }

        /// <summary>
        /// Gets or Sets Fulfillment
        /// </summary>
        [DataMember(Name = "fulfillment", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleFulfillment Fulfillment { get; set; }

        /// <summary>
        /// Gets or Sets Invoice
        /// </summary>
        [DataMember(Name = "invoice", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleInvoice Invoice { get; set; }

        /// <summary>
        /// Gets or Sets Note
        /// </summary>
        [DataMember(Name = "note", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleNote Note { get; set; }

        /// <summary>
        /// Gets or Sets Opportunity
        /// </summary>
        [DataMember(Name = "opportunity", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleOpportunity Opportunity { get; set; }

        /// <summary>
        /// Gets or Sets Task
        /// </summary>
        [DataMember(Name = "task", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleTask Task { get; set; }

        /// <summary>
        /// Gets or Sets Template
        /// </summary>
        [DataMember(Name = "template", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleTemplate Template { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetSettingsResponse {\n");
            sb.Append("  Affiliate: ").Append(Affiliate).Append("\n");
            sb.Append("  Application: ").Append(Application).Append("\n");
            sb.Append("  Appointment: ").Append(Appointment).Append("\n");
            sb.Append("  Contact: ").Append(Contact).Append("\n");
            sb.Append("  Ecommerce: ").Append(Ecommerce).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  Forms: ").Append(Forms).Append("\n");
            sb.Append("  Fulfillment: ").Append(Fulfillment).Append("\n");
            sb.Append("  Invoice: ").Append(Invoice).Append("\n");
            sb.Append("  Note: ").Append(Note).Append("\n");
            sb.Append("  Opportunity: ").Append(Opportunity).Append("\n");
            sb.Append("  Task: ").Append(Task).Append("\n");
            sb.Append("  Template: ").Append(Template).Append("\n");
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
