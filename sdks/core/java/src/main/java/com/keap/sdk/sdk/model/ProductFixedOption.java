/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
 * ProductFixedOption
 */
@JsonPropertyOrder({
  ProductFixedOption.JSON_PROPERTY_CODE,
  ProductFixedOption.JSON_PROPERTY_PRICE_ADJUSTMENT,
  ProductFixedOption.JSON_PROPERTY_VALUE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ProductFixedOption implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CODE = "code";
  @jakarta.annotation.Nullable  private String code;

  public static final String JSON_PROPERTY_PRICE_ADJUSTMENT = "price_adjustment";
  @jakarta.annotation.Nullable  private Double priceAdjustment;

  public static final String JSON_PROPERTY_VALUE = "value";
  @jakarta.annotation.Nullable  private String value;

  public ProductFixedOption() { 
  }

  public ProductFixedOption code(@jakarta.annotation.Nullable String code) {
    this.code = code;
    return this;
  }

  /**
   * An internal code to reference the option value
   * @return code
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "An internal code to reference the option value")
  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCode() {
    return code;
  }


  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCode(@jakarta.annotation.Nullable String code) {
    this.code = code;
  }


  public ProductFixedOption priceAdjustment(@jakarta.annotation.Nullable Double priceAdjustment) {
    this.priceAdjustment = priceAdjustment;
    return this;
  }

  /**
   * Positive value indicates additional amount added to the original price. Negative value indicates subtraction from the original price.
   * @return priceAdjustment
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Positive value indicates additional amount added to the original price. Negative value indicates subtraction from the original price.")
  @JsonProperty(JSON_PROPERTY_PRICE_ADJUSTMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPriceAdjustment() {
    return priceAdjustment;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_ADJUSTMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceAdjustment(@jakarta.annotation.Nullable Double priceAdjustment) {
    this.priceAdjustment = priceAdjustment;
  }


  public ProductFixedOption value(@jakarta.annotation.Nullable String value) {
    this.value = value;
    return this;
  }

  /**
   * The displayable label given to the option
   * @return value
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The displayable label given to the option")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValue(@jakarta.annotation.Nullable String value) {
    this.value = value;
  }

  /**
   * Return true if this ProductFixedOption object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductFixedOption productFixedOption = (ProductFixedOption) o;
    return Objects.equals(this.code, productFixedOption.code) &&
        Objects.equals(this.priceAdjustment, productFixedOption.priceAdjustment) &&
        Objects.equals(this.value, productFixedOption.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, priceAdjustment, value);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductFixedOption {\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    priceAdjustment: ").append(toIndentedString(priceAdjustment)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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
    
        private ProductFixedOption instance;
    
        public Builder() {
          this(new ProductFixedOption());
        }
    
        protected Builder(ProductFixedOption instance) {
          this.instance = instance;
        }
    
        public ProductFixedOption.Builder code(String code) {
              this.instance.code = code;
          return this;
        }
            public ProductFixedOption.Builder priceAdjustment(Double priceAdjustment) {
              this.instance.priceAdjustment = priceAdjustment;
          return this;
        }
            public ProductFixedOption.Builder value(String value) {
              this.instance.value = value;
          return this;
        }
        
    
        /**
        * returns a built ProductFixedOption instance.
        *
        * The builder is not reusable.
        */
        public ProductFixedOption build() {
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
      public static ProductFixedOption.Builder builder() {
        return new ProductFixedOption.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ProductFixedOption.Builder toBuilder() {
        return new ProductFixedOption.Builder()
          .code(getCode())
          .priceAdjustment(getPriceAdjustment())
          .value(getValue());
      }
}

