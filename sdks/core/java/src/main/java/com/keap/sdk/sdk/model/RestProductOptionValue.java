/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
 * RestProductOptionValue
 */
@JsonPropertyOrder({
  RestProductOptionValue.JSON_PROPERTY_ID,
  RestProductOptionValue.JSON_PROPERTY_INDEX,
  RestProductOptionValue.JSON_PROPERTY_IS_DEFAULT,
  RestProductOptionValue.JSON_PROPERTY_LABEL,
  RestProductOptionValue.JSON_PROPERTY_PRICE_ADJUSTMENT,
  RestProductOptionValue.JSON_PROPERTY_SKU
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RestProductOptionValue implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_INDEX = "index";
  @jakarta.annotation.Nullable  private Integer index;

  public static final String JSON_PROPERTY_IS_DEFAULT = "is_default";
  @jakarta.annotation.Nullable  private Boolean isDefault;

  public static final String JSON_PROPERTY_LABEL = "label";
  @jakarta.annotation.Nullable  private String label;

  public static final String JSON_PROPERTY_PRICE_ADJUSTMENT = "price_adjustment";
  @jakarta.annotation.Nullable  private Double priceAdjustment;

  public static final String JSON_PROPERTY_SKU = "sku";
  @jakarta.annotation.Nullable  private String sku;

  public RestProductOptionValue() { 
  }

  public RestProductOptionValue id(@jakarta.annotation.Nullable String id) {
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
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable String id) {
    this.id = id;
  }


  public RestProductOptionValue index(@jakarta.annotation.Nullable Integer index) {
    this.index = index;
    return this;
  }

  /**
   * Get index
   * @return index
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getIndex() {
    return index;
  }


  @JsonProperty(JSON_PROPERTY_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIndex(@jakarta.annotation.Nullable Integer index) {
    this.index = index;
  }


  public RestProductOptionValue isDefault(@jakarta.annotation.Nullable Boolean isDefault) {
    this.isDefault = isDefault;
    return this;
  }

  /**
   * Get isDefault
   * @return isDefault
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_IS_DEFAULT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getIsDefault() {
    return isDefault;
  }


  @JsonProperty(JSON_PROPERTY_IS_DEFAULT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsDefault(@jakarta.annotation.Nullable Boolean isDefault) {
    this.isDefault = isDefault;
  }


  public RestProductOptionValue label(@jakarta.annotation.Nullable String label) {
    this.label = label;
    return this;
  }

  /**
   * Get label
   * @return label
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLabel() {
    return label;
  }


  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLabel(@jakarta.annotation.Nullable String label) {
    this.label = label;
  }


  public RestProductOptionValue priceAdjustment(@jakarta.annotation.Nullable Double priceAdjustment) {
    this.priceAdjustment = priceAdjustment;
    return this;
  }

  /**
   * Get priceAdjustment
   * @return priceAdjustment
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public RestProductOptionValue sku(@jakarta.annotation.Nullable String sku) {
    this.sku = sku;
    return this;
  }

  /**
   * Get sku
   * @return sku
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SKU)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSku() {
    return sku;
  }


  @JsonProperty(JSON_PROPERTY_SKU)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSku(@jakarta.annotation.Nullable String sku) {
    this.sku = sku;
  }

  /**
   * Return true if this RestProductOptionValue object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestProductOptionValue restProductOptionValue = (RestProductOptionValue) o;
    return Objects.equals(this.id, restProductOptionValue.id) &&
        Objects.equals(this.index, restProductOptionValue.index) &&
        Objects.equals(this.isDefault, restProductOptionValue.isDefault) &&
        Objects.equals(this.label, restProductOptionValue.label) &&
        Objects.equals(this.priceAdjustment, restProductOptionValue.priceAdjustment) &&
        Objects.equals(this.sku, restProductOptionValue.sku);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, index, isDefault, label, priceAdjustment, sku);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestProductOptionValue {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    index: ").append(toIndentedString(index)).append("\n");
    sb.append("    isDefault: ").append(toIndentedString(isDefault)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    priceAdjustment: ").append(toIndentedString(priceAdjustment)).append("\n");
    sb.append("    sku: ").append(toIndentedString(sku)).append("\n");
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
    
        private RestProductOptionValue instance;
    
        public Builder() {
          this(new RestProductOptionValue());
        }
    
        protected Builder(RestProductOptionValue instance) {
          this.instance = instance;
        }
    
        public RestProductOptionValue.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public RestProductOptionValue.Builder index(Integer index) {
              this.instance.index = index;
          return this;
        }
            public RestProductOptionValue.Builder isDefault(Boolean isDefault) {
              this.instance.isDefault = isDefault;
          return this;
        }
            public RestProductOptionValue.Builder label(String label) {
              this.instance.label = label;
          return this;
        }
            public RestProductOptionValue.Builder priceAdjustment(Double priceAdjustment) {
              this.instance.priceAdjustment = priceAdjustment;
          return this;
        }
            public RestProductOptionValue.Builder sku(String sku) {
              this.instance.sku = sku;
          return this;
        }
        
    
        /**
        * returns a built RestProductOptionValue instance.
        *
        * The builder is not reusable.
        */
        public RestProductOptionValue build() {
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
      public static RestProductOptionValue.Builder builder() {
        return new RestProductOptionValue.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestProductOptionValue.Builder toBuilder() {
        return new RestProductOptionValue.Builder()
          .id(getId())
          .index(getIndex())
          .isDefault(getIsDefault())
          .label(getLabel())
          .priceAdjustment(getPriceAdjustment())
          .sku(getSku());
      }
}

