/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
import com.keap.sdk.sdk.model.CurrencyValue;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * SubscriptionPlanInterest
 */
@JsonPropertyOrder({
  SubscriptionPlanInterest.JSON_PROPERTY_DISCOUNT_PERCENT,
  SubscriptionPlanInterest.JSON_PROPERTY_ID,
  SubscriptionPlanInterest.JSON_PROPERTY_PRICE,
  SubscriptionPlanInterest.JSON_PROPERTY_QUANTITY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class SubscriptionPlanInterest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DISCOUNT_PERCENT = "discount_percent";
  @jakarta.annotation.Nullable  private Integer discountPercent;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_PRICE = "price";
  @jakarta.annotation.Nullable  private CurrencyValue price;

  public static final String JSON_PROPERTY_QUANTITY = "quantity";
  @jakarta.annotation.Nullable  private Integer quantity;

  public SubscriptionPlanInterest() { 
  }

  public SubscriptionPlanInterest discountPercent(@jakarta.annotation.Nullable Integer discountPercent) {
    this.discountPercent = discountPercent;
    return this;
  }

  /**
   * The percent to discount the product. Percent represented in a whole number, for example 10 is 10%
   * @return discountPercent
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The percent to discount the product. Percent represented in a whole number, for example 10 is 10%")
  @JsonProperty(JSON_PROPERTY_DISCOUNT_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getDiscountPercent() {
    return discountPercent;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNT_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDiscountPercent(@jakarta.annotation.Nullable Integer discountPercent) {
    this.discountPercent = discountPercent;
  }


  public SubscriptionPlanInterest id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * The product ID
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The product ID")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable String id) {
    this.id = id;
  }


  public SubscriptionPlanInterest price(@jakarta.annotation.Nullable CurrencyValue price) {
    this.price = price;
    return this;
  }

  /**
   * Get price
   * @return price
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CurrencyValue getPrice() {
    return price;
  }


  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrice(@jakarta.annotation.Nullable CurrencyValue price) {
    this.price = price;
  }


  public SubscriptionPlanInterest quantity(@jakarta.annotation.Nullable Integer quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * The quantity of product.
   * @return quantity
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The quantity of product.")
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

  /**
   * Return true if this SubscriptionPlanInterest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SubscriptionPlanInterest subscriptionPlanInterest = (SubscriptionPlanInterest) o;
    return Objects.equals(this.discountPercent, subscriptionPlanInterest.discountPercent) &&
        Objects.equals(this.id, subscriptionPlanInterest.id) &&
        Objects.equals(this.price, subscriptionPlanInterest.price) &&
        Objects.equals(this.quantity, subscriptionPlanInterest.quantity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(discountPercent, id, price, quantity);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SubscriptionPlanInterest {\n");
    sb.append("    discountPercent: ").append(toIndentedString(discountPercent)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
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
    
        private SubscriptionPlanInterest instance;
    
        public Builder() {
          this(new SubscriptionPlanInterest());
        }
    
        protected Builder(SubscriptionPlanInterest instance) {
          this.instance = instance;
        }
    
        public SubscriptionPlanInterest.Builder discountPercent(Integer discountPercent) {
              this.instance.discountPercent = discountPercent;
          return this;
        }
            public SubscriptionPlanInterest.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public SubscriptionPlanInterest.Builder price(CurrencyValue price) {
              this.instance.price = price;
          return this;
        }
            public SubscriptionPlanInterest.Builder quantity(Integer quantity) {
              this.instance.quantity = quantity;
          return this;
        }
        
    
        /**
        * returns a built SubscriptionPlanInterest instance.
        *
        * The builder is not reusable.
        */
        public SubscriptionPlanInterest build() {
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
      public static SubscriptionPlanInterest.Builder builder() {
        return new SubscriptionPlanInterest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public SubscriptionPlanInterest.Builder toBuilder() {
        return new SubscriptionPlanInterest.Builder()
          .discountPercent(getDiscountPercent())
          .id(getId())
          .price(getPrice())
          .quantity(getQuantity());
      }
}

