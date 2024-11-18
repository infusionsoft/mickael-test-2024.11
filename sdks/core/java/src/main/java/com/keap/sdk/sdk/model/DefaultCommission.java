/*
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
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
 * DefaultCommission
 */
@JsonPropertyOrder({
  DefaultCommission.JSON_PROPERTY_DOLLAR_AMOUNT,
  DefaultCommission.JSON_PROPERTY_PERCENTAGE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.9.0")
public class DefaultCommission implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DOLLAR_AMOUNT = "dollar_amount";
  private Double dollarAmount;

  public static final String JSON_PROPERTY_PERCENTAGE = "percentage";
  private Double percentage;

  public DefaultCommission() { 
  }

  public DefaultCommission dollarAmount(Double dollarAmount) {
    this.dollarAmount = dollarAmount;
    return this;
  }

  /**
   * Get dollarAmount
   * @return dollarAmount
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getDollarAmount() {
    return dollarAmount;
  }


  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDollarAmount(Double dollarAmount) {
    this.dollarAmount = dollarAmount;
  }


  public DefaultCommission percentage(Double percentage) {
    this.percentage = percentage;
    return this;
  }

  /**
   * Get percentage
   * @return percentage
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPercentage() {
    return percentage;
  }


  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPercentage(Double percentage) {
    this.percentage = percentage;
  }

  /**
   * Return true if this DefaultCommission object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DefaultCommission defaultCommission = (DefaultCommission) o;
    return Objects.equals(this.dollarAmount, defaultCommission.dollarAmount) &&
        Objects.equals(this.percentage, defaultCommission.percentage);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dollarAmount, percentage);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DefaultCommission {\n");
    sb.append("    dollarAmount: ").append(toIndentedString(dollarAmount)).append("\n");
    sb.append("    percentage: ").append(toIndentedString(percentage)).append("\n");
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
    
        private DefaultCommission instance;
    
        public Builder() {
          this(new DefaultCommission());
        }
    
        protected Builder(DefaultCommission instance) {
          this.instance = instance;
        }
    
        public DefaultCommission.Builder dollarAmount(Double dollarAmount) {
              this.instance.dollarAmount = dollarAmount;
          return this;
        }
            public DefaultCommission.Builder percentage(Double percentage) {
              this.instance.percentage = percentage;
          return this;
        }
        
    
        /**
        * returns a built DefaultCommission instance.
        *
        * The builder is not reusable.
        */
        public DefaultCommission build() {
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
      public static DefaultCommission.Builder builder() {
        return new DefaultCommission.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public DefaultCommission.Builder toBuilder() {
        return new DefaultCommission.Builder()
          .dollarAmount(getDollarAmount())
          .percentage(getPercentage());
      }
}

