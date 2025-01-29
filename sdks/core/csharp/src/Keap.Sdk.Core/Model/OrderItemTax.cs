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
    /// OrderItemTax
    /// </summary>
    [DataContract(Name = "OrderItemTax")]
    public partial class OrderItemTax : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OrderItemTax" /> class.
        /// </summary>
        /// <param name="amount">amount.</param>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="orderItemId">orderItemId.</param>
        /// <param name="rate">rate.</param>
        /// <param name="taxTemplateId">taxTemplateId.</param>
        public OrderItemTax(double amount = default(double), long id = default(long), string name = default(string), long orderItemId = default(long), double rate = default(double), long taxTemplateId = default(long))
        {
            this.Amount = amount;
            this.Id = id;
            this.Name = name;
            this.OrderItemId = orderItemId;
            this.Rate = rate;
            this.TaxTemplateId = taxTemplateId;
        }

        /// <summary>
        /// Gets or Sets Amount
        /// </summary>
        [DataMember(Name = "amount", EmitDefaultValue = false)]
        public double Amount { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public long Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets OrderItemId
        /// </summary>
        [DataMember(Name = "orderItemId", EmitDefaultValue = false)]
        public long OrderItemId { get; set; }

        /// <summary>
        /// Gets or Sets Rate
        /// </summary>
        [DataMember(Name = "rate", EmitDefaultValue = false)]
        public double Rate { get; set; }

        /// <summary>
        /// Gets or Sets TaxTemplateId
        /// </summary>
        [DataMember(Name = "taxTemplateId", EmitDefaultValue = false)]
        public long TaxTemplateId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class OrderItemTax {\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  OrderItemId: ").Append(OrderItemId).Append("\n");
            sb.Append("  Rate: ").Append(Rate).Append("\n");
            sb.Append("  TaxTemplateId: ").Append(TaxTemplateId).Append("\n");
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
