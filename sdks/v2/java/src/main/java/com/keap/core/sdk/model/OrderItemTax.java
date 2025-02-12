/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.core.sdk.model;

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
 * OrderItemTax
 */
@JsonPropertyOrder({
  OrderItemTax.JSON_PROPERTY_AMOUNT,
  OrderItemTax.JSON_PROPERTY_ID,
  OrderItemTax.JSON_PROPERTY_NAME,
  OrderItemTax.JSON_PROPERTY_ORDER_ITEM_ID,
  OrderItemTax.JSON_PROPERTY_RATE,
  OrderItemTax.JSON_PROPERTY_TAX_TEMPLATE_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class OrderItemTax implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AMOUNT = "amount";
  @jakarta.annotation.Nullable  private Double amount;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private Long id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_ORDER_ITEM_ID = "orderItemId";
  @jakarta.annotation.Nullable  private Long orderItemId;

  public static final String JSON_PROPERTY_RATE = "rate";
  @jakarta.annotation.Nullable  private Double rate;

  public static final String JSON_PROPERTY_TAX_TEMPLATE_ID = "taxTemplateId";
  @jakarta.annotation.Nullable  private Long taxTemplateId;

  public OrderItemTax() { 
  }

  public OrderItemTax amount(@jakarta.annotation.Nullable Double amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Get amount
   * @return amount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getAmount() {
    return amount;
  }


  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAmount(@jakarta.annotation.Nullable Double amount) {
    this.amount = amount;
  }


  public OrderItemTax id(@jakarta.annotation.Nullable Long id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable Long id) {
    this.id = id;
  }


  public OrderItemTax name(@jakarta.annotation.Nullable String name) {
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


  public OrderItemTax orderItemId(@jakarta.annotation.Nullable Long orderItemId) {
    this.orderItemId = orderItemId;
    return this;
  }

  /**
   * Get orderItemId
   * @return orderItemId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER_ITEM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getOrderItemId() {
    return orderItemId;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_ITEM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOrderItemId(@jakarta.annotation.Nullable Long orderItemId) {
    this.orderItemId = orderItemId;
  }


  public OrderItemTax rate(@jakarta.annotation.Nullable Double rate) {
    this.rate = rate;
    return this;
  }

  /**
   * Get rate
   * @return rate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getRate() {
    return rate;
  }


  @JsonProperty(JSON_PROPERTY_RATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRate(@jakarta.annotation.Nullable Double rate) {
    this.rate = rate;
  }


  public OrderItemTax taxTemplateId(@jakarta.annotation.Nullable Long taxTemplateId) {
    this.taxTemplateId = taxTemplateId;
    return this;
  }

  /**
   * Get taxTemplateId
   * @return taxTemplateId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TAX_TEMPLATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getTaxTemplateId() {
    return taxTemplateId;
  }


  @JsonProperty(JSON_PROPERTY_TAX_TEMPLATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTaxTemplateId(@jakarta.annotation.Nullable Long taxTemplateId) {
    this.taxTemplateId = taxTemplateId;
  }

  /**
   * Return true if this OrderItemTax object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderItemTax orderItemTax = (OrderItemTax) o;
    return Objects.equals(this.amount, orderItemTax.amount) &&
        Objects.equals(this.id, orderItemTax.id) &&
        Objects.equals(this.name, orderItemTax.name) &&
        Objects.equals(this.orderItemId, orderItemTax.orderItemId) &&
        Objects.equals(this.rate, orderItemTax.rate) &&
        Objects.equals(this.taxTemplateId, orderItemTax.taxTemplateId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, id, name, orderItemId, rate, taxTemplateId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderItemTax {\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    orderItemId: ").append(toIndentedString(orderItemId)).append("\n");
    sb.append("    rate: ").append(toIndentedString(rate)).append("\n");
    sb.append("    taxTemplateId: ").append(toIndentedString(taxTemplateId)).append("\n");
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
    
        private OrderItemTax instance;
    
        public Builder() {
          this(new OrderItemTax());
        }
    
        protected Builder(OrderItemTax instance) {
          this.instance = instance;
        }
    
        public OrderItemTax.Builder amount(Double amount) {
              this.instance.amount = amount;
          return this;
        }
            public OrderItemTax.Builder id(Long id) {
              this.instance.id = id;
          return this;
        }
            public OrderItemTax.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public OrderItemTax.Builder orderItemId(Long orderItemId) {
              this.instance.orderItemId = orderItemId;
          return this;
        }
            public OrderItemTax.Builder rate(Double rate) {
              this.instance.rate = rate;
          return this;
        }
            public OrderItemTax.Builder taxTemplateId(Long taxTemplateId) {
              this.instance.taxTemplateId = taxTemplateId;
          return this;
        }
        
    
        /**
        * returns a built OrderItemTax instance.
        *
        * The builder is not reusable.
        */
        public OrderItemTax build() {
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
      public static OrderItemTax.Builder builder() {
        return new OrderItemTax.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public OrderItemTax.Builder toBuilder() {
        return new OrderItemTax.Builder()
          .amount(getAmount())
          .id(getId())
          .name(getName())
          .orderItemId(getOrderItemId())
          .rate(getRate())
          .taxTemplateId(getTaxTemplateId());
      }
}

