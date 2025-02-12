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
    /// ProductInventory
    /// </summary>
    [DataContract(Name = "ProductInventory")]
    public partial class ProductInventory : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductInventory" /> class.
        /// </summary>
        /// <param name="emailForInventoryNotifications">The email address for notifications about inventory.</param>
        /// <param name="inventoryCount">The current inventory count for this product.</param>
        /// <param name="inventoryLimit">The inventory limit for this product.</param>
        /// <param name="outOfStockEnabled">The flag to enable out of stock inventory.</param>
        public ProductInventory(string emailForInventoryNotifications = default(string), int inventoryCount = default(int), int inventoryLimit = default(int), bool outOfStockEnabled = default(bool))
        {
            this.EmailForInventoryNotifications = emailForInventoryNotifications;
            this.InventoryCount = inventoryCount;
            this.InventoryLimit = inventoryLimit;
            this.OutOfStockEnabled = outOfStockEnabled;
        }

        /// <summary>
        /// The email address for notifications about inventory
        /// </summary>
        /// <value>The email address for notifications about inventory</value>
        [DataMember(Name = "email_for_inventory_notifications", EmitDefaultValue = false)]
        public string EmailForInventoryNotifications { get; set; }

        /// <summary>
        /// The current inventory count for this product
        /// </summary>
        /// <value>The current inventory count for this product</value>
        [DataMember(Name = "inventory_count", EmitDefaultValue = false)]
        public int InventoryCount { get; set; }

        /// <summary>
        /// The inventory limit for this product
        /// </summary>
        /// <value>The inventory limit for this product</value>
        [DataMember(Name = "inventory_limit", EmitDefaultValue = false)]
        public int InventoryLimit { get; set; }

        /// <summary>
        /// The flag to enable out of stock inventory
        /// </summary>
        /// <value>The flag to enable out of stock inventory</value>
        [DataMember(Name = "out_of_stock_enabled", EmitDefaultValue = true)]
        public bool OutOfStockEnabled { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ProductInventory {\n");
            sb.Append("  EmailForInventoryNotifications: ").Append(EmailForInventoryNotifications).Append("\n");
            sb.Append("  InventoryCount: ").Append(InventoryCount).Append("\n");
            sb.Append("  InventoryLimit: ").Append(InventoryLimit).Append("\n");
            sb.Append("  OutOfStockEnabled: ").Append(OutOfStockEnabled).Append("\n");
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
