/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
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
 * ProductCommission
 */
@JsonPropertyOrder({
  ProductCommission.JSON_PROPERTY_DOLLAR_AMOUNT,
  ProductCommission.JSON_PROPERTY_PERCENTAGE,
  ProductCommission.JSON_PROPERTY_PRODUCT_ID,
  ProductCommission.JSON_PROPERTY_PRODUCT_NAME,
  ProductCommission.JSON_PROPERTY_PRODUCT_PRICE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ProductCommission implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DOLLAR_AMOUNT = "dollar_amount";
  @jakarta.annotation.Nullable  private Double dollarAmount;

  public static final String JSON_PROPERTY_PERCENTAGE = "percentage";
  @jakarta.annotation.Nullable  private Double percentage;

  public static final String JSON_PROPERTY_PRODUCT_ID = "product_id";
  @jakarta.annotation.Nullable  private String productId;

  public static final String JSON_PROPERTY_PRODUCT_NAME = "product_name";
  @jakarta.annotation.Nullable  private String productName;

  public static final String JSON_PROPERTY_PRODUCT_PRICE = "product_price";
  @jakarta.annotation.Nullable  private Double productPrice;

  public ProductCommission() { 
  }

  public ProductCommission dollarAmount(@jakarta.annotation.Nullable Double dollarAmount) {
    this.dollarAmount = dollarAmount;
    return this;
  }

  /**
   * Get dollarAmount
   * @return dollarAmount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getDollarAmount() {
    return dollarAmount;
  }


  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDollarAmount(@jakarta.annotation.Nullable Double dollarAmount) {
    this.dollarAmount = dollarAmount;
  }


  public ProductCommission percentage(@jakarta.annotation.Nullable Double percentage) {
    this.percentage = percentage;
    return this;
  }

  /**
   * Get percentage
   * @return percentage
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPercentage() {
    return percentage;
  }


  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPercentage(@jakarta.annotation.Nullable Double percentage) {
    this.percentage = percentage;
  }


  public ProductCommission productId(@jakarta.annotation.Nullable String productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Get productId
   * @return productId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getProductId() {
    return productId;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductId(@jakarta.annotation.Nullable String productId) {
    this.productId = productId;
  }


  public ProductCommission productName(@jakarta.annotation.Nullable String productName) {
    this.productName = productName;
    return this;
  }

  /**
   * Get productName
   * @return productName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getProductName() {
    return productName;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductName(@jakarta.annotation.Nullable String productName) {
    this.productName = productName;
  }


  public ProductCommission productPrice(@jakarta.annotation.Nullable Double productPrice) {
    this.productPrice = productPrice;
    return this;
  }

  /**
   * Get productPrice
   * @return productPrice
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getProductPrice() {
    return productPrice;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductPrice(@jakarta.annotation.Nullable Double productPrice) {
    this.productPrice = productPrice;
  }

  /**
   * Return true if this ProductCommission object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductCommission productCommission = (ProductCommission) o;
    return Objects.equals(this.dollarAmount, productCommission.dollarAmount) &&
        Objects.equals(this.percentage, productCommission.percentage) &&
        Objects.equals(this.productId, productCommission.productId) &&
        Objects.equals(this.productName, productCommission.productName) &&
        Objects.equals(this.productPrice, productCommission.productPrice);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dollarAmount, percentage, productId, productName, productPrice);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductCommission {\n");
    sb.append("    dollarAmount: ").append(toIndentedString(dollarAmount)).append("\n");
    sb.append("    percentage: ").append(toIndentedString(percentage)).append("\n");
    sb.append("    productId: ").append(toIndentedString(productId)).append("\n");
    sb.append("    productName: ").append(toIndentedString(productName)).append("\n");
    sb.append("    productPrice: ").append(toIndentedString(productPrice)).append("\n");
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
    
        private ProductCommission instance;
    
        public Builder() {
          this(new ProductCommission());
        }
    
        protected Builder(ProductCommission instance) {
          this.instance = instance;
        }
    
        public ProductCommission.Builder dollarAmount(Double dollarAmount) {
              this.instance.dollarAmount = dollarAmount;
          return this;
        }
            public ProductCommission.Builder percentage(Double percentage) {
              this.instance.percentage = percentage;
          return this;
        }
            public ProductCommission.Builder productId(String productId) {
              this.instance.productId = productId;
          return this;
        }
            public ProductCommission.Builder productName(String productName) {
              this.instance.productName = productName;
          return this;
        }
            public ProductCommission.Builder productPrice(Double productPrice) {
              this.instance.productPrice = productPrice;
          return this;
        }
        
    
        /**
        * returns a built ProductCommission instance.
        *
        * The builder is not reusable.
        */
        public ProductCommission build() {
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
      public static ProductCommission.Builder builder() {
        return new ProductCommission.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ProductCommission.Builder toBuilder() {
        return new ProductCommission.Builder()
          .dollarAmount(getDollarAmount())
          .percentage(getPercentage())
          .productId(getProductId())
          .productName(getProductName())
          .productPrice(getProductPrice());
      }
}

