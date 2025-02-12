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
    /// UpdateOrderItemRequest
    /// </summary>
    [DataContract(Name = "UpdateOrderItemRequest")]
    public partial class UpdateOrderItemRequest : IValidatableObject
    {
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum UNKNOWN for value: UNKNOWN
            /// </summary>
            [EnumMember(Value = "UNKNOWN")]
            UNKNOWN,

            /// <summary>
            /// Enum SHIPPING for value: SHIPPING
            /// </summary>
            [EnumMember(Value = "SHIPPING")]
            SHIPPING,

            /// <summary>
            /// Enum TAX for value: TAX
            /// </summary>
            [EnumMember(Value = "TAX")]
            TAX,

            /// <summary>
            /// Enum SERVICE for value: SERVICE
            /// </summary>
            [EnumMember(Value = "SERVICE")]
            SERVICE,

            /// <summary>
            /// Enum PRODUCT for value: PRODUCT
            /// </summary>
            [EnumMember(Value = "PRODUCT")]
            PRODUCT,

            /// <summary>
            /// Enum UPSELL for value: UPSELL
            /// </summary>
            [EnumMember(Value = "UPSELL")]
            UPSELL,

            /// <summary>
            /// Enum FINANCECHARGE for value: FINANCE_CHARGE
            /// </summary>
            [EnumMember(Value = "FINANCE_CHARGE")]
            FINANCECHARGE,

            /// <summary>
            /// Enum SPECIAL for value: SPECIAL
            /// </summary>
            [EnumMember(Value = "SPECIAL")]
            SPECIAL,

            /// <summary>
            /// Enum PROGRAM for value: PROGRAM
            /// </summary>
            [EnumMember(Value = "PROGRAM")]
            PROGRAM,

            /// <summary>
            /// Enum SUBSCRIPTION for value: SUBSCRIPTION
            /// </summary>
            [EnumMember(Value = "SUBSCRIPTION")]
            SUBSCRIPTION,

            /// <summary>
            /// Enum SPECIALFREETRIALDAYS for value: SPECIAL_FREE_TRIAL_DAYS
            /// </summary>
            [EnumMember(Value = "SPECIAL_FREE_TRIAL_DAYS")]
            SPECIALFREETRIALDAYS,

            /// <summary>
            /// Enum SPECIALORDERTOTAL for value: SPECIAL_ORDER_TOTAL
            /// </summary>
            [EnumMember(Value = "SPECIAL_ORDER_TOTAL")]
            SPECIALORDERTOTAL,

            /// <summary>
            /// Enum SPECIALPRODUCT for value: SPECIAL_PRODUCT
            /// </summary>
            [EnumMember(Value = "SPECIAL_PRODUCT")]
            SPECIALPRODUCT,

            /// <summary>
            /// Enum SPECIALCATEGORY for value: SPECIAL_CATEGORY
            /// </summary>
            [EnumMember(Value = "SPECIAL_CATEGORY")]
            SPECIALCATEGORY,

            /// <summary>
            /// Enum SPECIALSHIPPING for value: SPECIAL_SHIPPING
            /// </summary>
            [EnumMember(Value = "SPECIAL_SHIPPING")]
            SPECIALSHIPPING,

            /// <summary>
            /// Enum TIP for value: TIP
            /// </summary>
            [EnumMember(Value = "TIP")]
            TIP,

            /// <summary>
            /// Enum OTHER for value: OTHER
            /// </summary>
            [EnumMember(Value = "OTHER")]
            OTHER
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateOrderItemRequest" /> class.
        /// </summary>
        /// <param name="chargeInventory">Determine if the order item has an impact on inventory..</param>
        /// <param name="costPerUnit">costPerUnit.</param>
        /// <param name="description">description.</param>
        /// <param name="name">name.</param>
        /// <param name="note">note.</param>
        /// <param name="pricePerUnit">pricePerUnit.</param>
        /// <param name="quantity">quantity.</param>
        /// <param name="type">type.</param>
        public UpdateOrderItemRequest(bool chargeInventory = default(bool), double costPerUnit = default(double), string description = default(string), string name = default(string), string note = default(string), double pricePerUnit = default(double), int quantity = default(int), TypeEnum? type = default(TypeEnum?))
        {
            this.ChargeInventory = chargeInventory;
            this.CostPerUnit = costPerUnit;
            this.Description = description;
            this.Name = name;
            this.Note = note;
            this.PricePerUnit = pricePerUnit;
            this.Quantity = quantity;
            this.Type = type;
        }

        /// <summary>
        /// Determine if the order item has an impact on inventory.
        /// </summary>
        /// <value>Determine if the order item has an impact on inventory.</value>
        [DataMember(Name = "charge_inventory", EmitDefaultValue = true)]
        public bool ChargeInventory { get; set; }

        /// <summary>
        /// Gets or Sets CostPerUnit
        /// </summary>
        [DataMember(Name = "cost_per_unit", EmitDefaultValue = false)]
        public double CostPerUnit { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Note
        /// </summary>
        [DataMember(Name = "note", EmitDefaultValue = false)]
        public string Note { get; set; }

        /// <summary>
        /// Gets or Sets PricePerUnit
        /// </summary>
        [DataMember(Name = "price_per_unit", EmitDefaultValue = false)]
        public double PricePerUnit { get; set; }

        /// <summary>
        /// Gets or Sets Quantity
        /// </summary>
        [DataMember(Name = "quantity", EmitDefaultValue = false)]
        public int Quantity { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateOrderItemRequest {\n");
            sb.Append("  ChargeInventory: ").Append(ChargeInventory).Append("\n");
            sb.Append("  CostPerUnit: ").Append(CostPerUnit).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Note: ").Append(Note).Append("\n");
            sb.Append("  PricePerUnit: ").Append(PricePerUnit).Append("\n");
            sb.Append("  Quantity: ").Append(Quantity).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
