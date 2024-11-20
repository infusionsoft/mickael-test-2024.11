/*
 * Keap REST API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
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
    /// ProductCommission
    /// </summary>
    [DataContract(Name = "ProductCommission")]
    public partial class ProductCommission : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductCommission" /> class.
        /// </summary>
        /// <param name="dollarAmount">dollarAmount.</param>
        /// <param name="percentage">percentage.</param>
        /// <param name="productId">productId.</param>
        /// <param name="productName">productName.</param>
        /// <param name="productPrice">productPrice.</param>
        public ProductCommission(double dollarAmount = default(double), double percentage = default(double), string productId = default(string), string productName = default(string), double productPrice = default(double))
        {
            this.DollarAmount = dollarAmount;
            this.Percentage = percentage;
            this.ProductId = productId;
            this.ProductName = productName;
            this.ProductPrice = productPrice;
        }

        /// <summary>
        /// Gets or Sets DollarAmount
        /// </summary>
        [DataMember(Name = "dollar_amount", EmitDefaultValue = false)]
        public double DollarAmount { get; set; }

        /// <summary>
        /// Gets or Sets Percentage
        /// </summary>
        [DataMember(Name = "percentage", EmitDefaultValue = false)]
        public double Percentage { get; set; }

        /// <summary>
        /// Gets or Sets ProductId
        /// </summary>
        [DataMember(Name = "product_id", EmitDefaultValue = false)]
        public string ProductId { get; set; }

        /// <summary>
        /// Gets or Sets ProductName
        /// </summary>
        [DataMember(Name = "product_name", EmitDefaultValue = false)]
        public string ProductName { get; set; }

        /// <summary>
        /// Gets or Sets ProductPrice
        /// </summary>
        [DataMember(Name = "product_price", EmitDefaultValue = false)]
        public double ProductPrice { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ProductCommission {\n");
            sb.Append("  DollarAmount: ").Append(DollarAmount).Append("\n");
            sb.Append("  Percentage: ").Append(Percentage).Append("\n");
            sb.Append("  ProductId: ").Append(ProductId).Append("\n");
            sb.Append("  ProductName: ").Append(ProductName).Append("\n");
            sb.Append("  ProductPrice: ").Append(ProductPrice).Append("\n");
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
