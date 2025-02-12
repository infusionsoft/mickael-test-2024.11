/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
    /// ProductInterest
    /// </summary>
    [DataContract(Name = "ProductInterest")]
    public partial class ProductInterest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductInterest" /> class.
        /// </summary>
        /// <param name="discountPercent">The percent to discount the product. Percent represented in a whole number, for example 10 is 10%.</param>
        /// <param name="id">The product ID.</param>
        /// <param name="price">price.</param>
        /// <param name="quantity">The quantity of product..</param>
        public ProductInterest(int discountPercent = default(int), string id = default(string), CurrencyValue price = default(CurrencyValue), int quantity = default(int))
        {
            this.DiscountPercent = discountPercent;
            this.Id = id;
            this.Price = price;
            this.Quantity = quantity;
        }

        /// <summary>
        /// The percent to discount the product. Percent represented in a whole number, for example 10 is 10%
        /// </summary>
        /// <value>The percent to discount the product. Percent represented in a whole number, for example 10 is 10%</value>
        [DataMember(Name = "discount_percent", EmitDefaultValue = false)]
        public int DiscountPercent { get; set; }

        /// <summary>
        /// The product ID
        /// </summary>
        /// <value>The product ID</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Price
        /// </summary>
        [DataMember(Name = "price", EmitDefaultValue = false)]
        public CurrencyValue Price { get; set; }

        /// <summary>
        /// The quantity of product.
        /// </summary>
        /// <value>The quantity of product.</value>
        [DataMember(Name = "quantity", EmitDefaultValue = false)]
        public int Quantity { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ProductInterest {\n");
            sb.Append("  DiscountPercent: ").Append(DiscountPercent).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Price: ").Append(Price).Append("\n");
            sb.Append("  Quantity: ").Append(Quantity).Append("\n");
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
