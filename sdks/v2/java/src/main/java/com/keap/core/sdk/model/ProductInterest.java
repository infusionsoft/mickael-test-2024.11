/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
import com.keap.core.sdk.model.CurrencyValue;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ProductInterest
 */
@JsonPropertyOrder({
  ProductInterest.JSON_PROPERTY_DISCOUNT_PERCENT,
  ProductInterest.JSON_PROPERTY_ID,
  ProductInterest.JSON_PROPERTY_PRICE,
  ProductInterest.JSON_PROPERTY_QUANTITY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ProductInterest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DISCOUNT_PERCENT = "discount_percent";
  @jakarta.annotation.Nullable  private Integer discountPercent;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_PRICE = "price";
  @jakarta.annotation.Nullable  private CurrencyValue price;

  public static final String JSON_PROPERTY_QUANTITY = "quantity";
  @jakarta.annotation.Nullable  private Integer quantity;

  public ProductInterest() { 
  }

  public ProductInterest discountPercent(@jakarta.annotation.Nullable Integer discountPercent) {
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


  public ProductInterest id(@jakarta.annotation.Nullable String id) {
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


  public ProductInterest price(@jakarta.annotation.Nullable CurrencyValue price) {
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


  public ProductInterest quantity(@jakarta.annotation.Nullable Integer quantity) {
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
   * Return true if this ProductInterest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductInterest productInterest = (ProductInterest) o;
    return Objects.equals(this.discountPercent, productInterest.discountPercent) &&
        Objects.equals(this.id, productInterest.id) &&
        Objects.equals(this.price, productInterest.price) &&
        Objects.equals(this.quantity, productInterest.quantity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(discountPercent, id, price, quantity);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductInterest {\n");
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
    
        private ProductInterest instance;
    
        public Builder() {
          this(new ProductInterest());
        }
    
        protected Builder(ProductInterest instance) {
          this.instance = instance;
        }
    
        public ProductInterest.Builder discountPercent(Integer discountPercent) {
              this.instance.discountPercent = discountPercent;
          return this;
        }
            public ProductInterest.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public ProductInterest.Builder price(CurrencyValue price) {
              this.instance.price = price;
          return this;
        }
            public ProductInterest.Builder quantity(Integer quantity) {
              this.instance.quantity = quantity;
          return this;
        }
        
    
        /**
        * returns a built ProductInterest instance.
        *
        * The builder is not reusable.
        */
        public ProductInterest build() {
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
      public static ProductInterest.Builder builder() {
        return new ProductInterest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ProductInterest.Builder toBuilder() {
        return new ProductInterest.Builder()
          .discountPercent(getDiscountPercent())
          .id(getId())
          .price(getPrice())
          .quantity(getQuantity());
      }
}

