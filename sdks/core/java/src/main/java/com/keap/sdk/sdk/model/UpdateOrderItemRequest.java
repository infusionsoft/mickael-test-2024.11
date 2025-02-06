/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.sdk.sdk.model;

import java.util.Objects;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * UpdateOrderItemRequest
 */
@JsonPropertyOrder({
  UpdateOrderItemRequest.JSON_PROPERTY_CHARGE_INVENTORY,
  UpdateOrderItemRequest.JSON_PROPERTY_COST_PER_UNIT,
  UpdateOrderItemRequest.JSON_PROPERTY_DESCRIPTION,
  UpdateOrderItemRequest.JSON_PROPERTY_NAME,
  UpdateOrderItemRequest.JSON_PROPERTY_NOTE,
  UpdateOrderItemRequest.JSON_PROPERTY_PRICE_PER_UNIT,
  UpdateOrderItemRequest.JSON_PROPERTY_QUANTITY,
  UpdateOrderItemRequest.JSON_PROPERTY_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateOrderItemRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CHARGE_INVENTORY = "charge_inventory";
  @jakarta.annotation.Nullable  private Boolean chargeInventory;

  public static final String JSON_PROPERTY_COST_PER_UNIT = "cost_per_unit";
  @jakarta.annotation.Nullable  private Double costPerUnit;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_NOTE = "note";
  @jakarta.annotation.Nullable  private String note;

  public static final String JSON_PROPERTY_PRICE_PER_UNIT = "price_per_unit";
  @jakarta.annotation.Nullable  private Double pricePerUnit;

  public static final String JSON_PROPERTY_QUANTITY = "quantity";
  @jakarta.annotation.Nullable  private Integer quantity;

  /**
   * Gets or Sets type
   */
  public enum TypeEnum {
    UNKNOWN(String.valueOf("UNKNOWN")),
    
    SHIPPING(String.valueOf("SHIPPING")),
    
    TAX(String.valueOf("TAX")),
    
    SERVICE(String.valueOf("SERVICE")),
    
    PRODUCT(String.valueOf("PRODUCT")),
    
    UPSELL(String.valueOf("UPSELL")),
    
    FINANCE_CHARGE(String.valueOf("FINANCE_CHARGE")),
    
    SPECIAL(String.valueOf("SPECIAL")),
    
    PROGRAM(String.valueOf("PROGRAM")),
    
    SUBSCRIPTION(String.valueOf("SUBSCRIPTION")),
    
    SPECIAL_FREE_TRIAL_DAYS(String.valueOf("SPECIAL_FREE_TRIAL_DAYS")),
    
    SPECIAL_ORDER_TOTAL(String.valueOf("SPECIAL_ORDER_TOTAL")),
    
    SPECIAL_PRODUCT(String.valueOf("SPECIAL_PRODUCT")),
    
    SPECIAL_CATEGORY(String.valueOf("SPECIAL_CATEGORY")),
    
    SPECIAL_SHIPPING(String.valueOf("SPECIAL_SHIPPING")),
    
    TIP(String.valueOf("TIP")),
    
    OTHER(String.valueOf("OTHER")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    TypeEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_TYPE = "type";
  @jakarta.annotation.Nullable  private TypeEnum type;

  public UpdateOrderItemRequest() { 
  }

  public UpdateOrderItemRequest chargeInventory(@jakarta.annotation.Nullable Boolean chargeInventory) {
    this.chargeInventory = chargeInventory;
    return this;
  }

  /**
   * Determine if the order item has an impact on inventory.
   * @return chargeInventory
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Determine if the order item has an impact on inventory.")
  @JsonProperty(JSON_PROPERTY_CHARGE_INVENTORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getChargeInventory() {
    return chargeInventory;
  }


  @JsonProperty(JSON_PROPERTY_CHARGE_INVENTORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setChargeInventory(@jakarta.annotation.Nullable Boolean chargeInventory) {
    this.chargeInventory = chargeInventory;
  }


  public UpdateOrderItemRequest costPerUnit(@jakarta.annotation.Nullable Double costPerUnit) {
    this.costPerUnit = costPerUnit;
    return this;
  }

  /**
   * Get costPerUnit
   * @return costPerUnit
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COST_PER_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getCostPerUnit() {
    return costPerUnit;
  }


  @JsonProperty(JSON_PROPERTY_COST_PER_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCostPerUnit(@jakarta.annotation.Nullable Double costPerUnit) {
    this.costPerUnit = costPerUnit;
  }


  public UpdateOrderItemRequest description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(@jakarta.annotation.Nullable String description) {
    this.description = description;
  }


  public UpdateOrderItemRequest name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(@jakarta.annotation.Nullable String name) {
    this.name = name;
  }


  public UpdateOrderItemRequest note(@jakarta.annotation.Nullable String note) {
    this.note = note;
    return this;
  }

  /**
   * Get note
   * @return note
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NOTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNote() {
    return note;
  }


  @JsonProperty(JSON_PROPERTY_NOTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNote(@jakarta.annotation.Nullable String note) {
    this.note = note;
  }


  public UpdateOrderItemRequest pricePerUnit(@jakarta.annotation.Nullable Double pricePerUnit) {
    this.pricePerUnit = pricePerUnit;
    return this;
  }

  /**
   * Get pricePerUnit
   * @return pricePerUnit
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRICE_PER_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPricePerUnit() {
    return pricePerUnit;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_PER_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPricePerUnit(@jakarta.annotation.Nullable Double pricePerUnit) {
    this.pricePerUnit = pricePerUnit;
  }


  public UpdateOrderItemRequest quantity(@jakarta.annotation.Nullable Integer quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Get quantity
   * @return quantity
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getQuantity() {
    return quantity;
  }


  @JsonProperty(JSON_PROPERTY_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setQuantity(@jakarta.annotation.Nullable Integer quantity) {
    this.quantity = quantity;
  }


  public UpdateOrderItemRequest type(@jakarta.annotation.Nullable TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public TypeEnum getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(@jakarta.annotation.Nullable TypeEnum type) {
    this.type = type;
  }

  /**
   * Return true if this UpdateOrderItemRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateOrderItemRequest updateOrderItemRequest = (UpdateOrderItemRequest) o;
    return Objects.equals(this.chargeInventory, updateOrderItemRequest.chargeInventory) &&
        Objects.equals(this.costPerUnit, updateOrderItemRequest.costPerUnit) &&
        Objects.equals(this.description, updateOrderItemRequest.description) &&
        Objects.equals(this.name, updateOrderItemRequest.name) &&
        Objects.equals(this.note, updateOrderItemRequest.note) &&
        Objects.equals(this.pricePerUnit, updateOrderItemRequest.pricePerUnit) &&
        Objects.equals(this.quantity, updateOrderItemRequest.quantity) &&
        Objects.equals(this.type, updateOrderItemRequest.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(chargeInventory, costPerUnit, description, name, note, pricePerUnit, quantity, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateOrderItemRequest {\n");
    sb.append("    chargeInventory: ").append(toIndentedString(chargeInventory)).append("\n");
    sb.append("    costPerUnit: ").append(toIndentedString(costPerUnit)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
    sb.append("    pricePerUnit: ").append(toIndentedString(pricePerUnit)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

    public static class Builder {
    
        private UpdateOrderItemRequest instance;
    
        public Builder() {
          this(new UpdateOrderItemRequest());
        }
    
        protected Builder(UpdateOrderItemRequest instance) {
          this.instance = instance;
        }
    
        public UpdateOrderItemRequest.Builder chargeInventory(Boolean chargeInventory) {
              this.instance.chargeInventory = chargeInventory;
          return this;
        }
            public UpdateOrderItemRequest.Builder costPerUnit(Double costPerUnit) {
              this.instance.costPerUnit = costPerUnit;
          return this;
        }
            public UpdateOrderItemRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public UpdateOrderItemRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public UpdateOrderItemRequest.Builder note(String note) {
              this.instance.note = note;
          return this;
        }
            public UpdateOrderItemRequest.Builder pricePerUnit(Double pricePerUnit) {
              this.instance.pricePerUnit = pricePerUnit;
          return this;
        }
            public UpdateOrderItemRequest.Builder quantity(Integer quantity) {
              this.instance.quantity = quantity;
          return this;
        }
            public UpdateOrderItemRequest.Builder type(TypeEnum type) {
              this.instance.type = type;
          return this;
        }
        
    
        /**
        * returns a built UpdateOrderItemRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateOrderItemRequest build() {
          try {
            return this.instance;
          } finally {
            // ensure that this.instance is not reused
            this.instance = null;
          }
        }
    
        @Override
        public String toString() {
          return getClass() + "=(" + instance + ")";
        }
      }
    
      /**
      * Create a builder with no initialized field.
      */
      public static UpdateOrderItemRequest.Builder builder() {
        return new UpdateOrderItemRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateOrderItemRequest.Builder toBuilder() {
        return new UpdateOrderItemRequest.Builder()
          .chargeInventory(getChargeInventory())
          .costPerUnit(getCostPerUnit())
          .description(getDescription())
          .name(getName())
          .note(getNote())
          .pricePerUnit(getPricePerUnit())
          .quantity(getQuantity())
          .type(getType());
      }
}

