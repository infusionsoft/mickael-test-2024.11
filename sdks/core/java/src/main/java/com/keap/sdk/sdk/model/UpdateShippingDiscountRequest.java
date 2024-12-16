/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
import com.keap.sdk.sdk.model.DiscountCriteria;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * UpdateShippingDiscountRequest
 */
@JsonPropertyOrder({
  UpdateShippingDiscountRequest.JSON_PROPERTY_CRITERIA,
  UpdateShippingDiscountRequest.JSON_PROPERTY_DESCRIPTION,
  UpdateShippingDiscountRequest.JSON_PROPERTY_DISCOUNT_TYPE,
  UpdateShippingDiscountRequest.JSON_PROPERTY_DISCOUNT_VALUE,
  UpdateShippingDiscountRequest.JSON_PROPERTY_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateShippingDiscountRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CRITERIA = "criteria";
  @jakarta.annotation.Nullable  private List<@Valid DiscountCriteria> criteria = new ArrayList<>();

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  /**
   * Gets or Sets discountType
   */
  public enum DiscountTypeEnum {
    AMOUNT(String.valueOf("AMOUNT")),
    
    PERCENT(String.valueOf("PERCENT")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    DiscountTypeEnum(String value) {
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
    public static DiscountTypeEnum fromValue(String value) {
      for (DiscountTypeEnum b : DiscountTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_DISCOUNT_TYPE = "discount_type";
  @jakarta.annotation.Nullable  private DiscountTypeEnum discountType;

  public static final String JSON_PROPERTY_DISCOUNT_VALUE = "discount_value";
  @jakarta.annotation.Nullable  private Double discountValue;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public UpdateShippingDiscountRequest() { 
  }

  public UpdateShippingDiscountRequest criteria(@jakarta.annotation.Nullable List<@Valid DiscountCriteria> criteria) {
    this.criteria = criteria;
    return this;
  }

  public UpdateShippingDiscountRequest addCriteriaItem(DiscountCriteria criteriaItem) {
    if (this.criteria == null) {
      this.criteria = new ArrayList<>();
    }
    this.criteria.add(criteriaItem);
    return this;
  }

  /**
   * Get criteria
   * @return criteria
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CRITERIA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid DiscountCriteria> getCriteria() {
    return criteria;
  }


  @JsonProperty(JSON_PROPERTY_CRITERIA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCriteria(@jakarta.annotation.Nullable List<@Valid DiscountCriteria> criteria) {
    this.criteria = criteria;
  }


  public UpdateShippingDiscountRequest description(@jakarta.annotation.Nullable String description) {
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


  public UpdateShippingDiscountRequest discountType(@jakarta.annotation.Nullable DiscountTypeEnum discountType) {
    this.discountType = discountType;
    return this;
  }

  /**
   * Get discountType
   * @return discountType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISCOUNT_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public DiscountTypeEnum getDiscountType() {
    return discountType;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNT_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDiscountType(@jakarta.annotation.Nullable DiscountTypeEnum discountType) {
    this.discountType = discountType;
  }


  public UpdateShippingDiscountRequest discountValue(@jakarta.annotation.Nullable Double discountValue) {
    this.discountValue = discountValue;
    return this;
  }

  /**
   * Get discountValue
   * @return discountValue
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISCOUNT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getDiscountValue() {
    return discountValue;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDiscountValue(@jakarta.annotation.Nullable Double discountValue) {
    this.discountValue = discountValue;
  }


  public UpdateShippingDiscountRequest name(@jakarta.annotation.Nullable String name) {
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

  /**
   * Return true if this UpdateShippingDiscountRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateShippingDiscountRequest updateShippingDiscountRequest = (UpdateShippingDiscountRequest) o;
    return Objects.equals(this.criteria, updateShippingDiscountRequest.criteria) &&
        Objects.equals(this.description, updateShippingDiscountRequest.description) &&
        Objects.equals(this.discountType, updateShippingDiscountRequest.discountType) &&
        Objects.equals(this.discountValue, updateShippingDiscountRequest.discountValue) &&
        Objects.equals(this.name, updateShippingDiscountRequest.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(criteria, description, discountType, discountValue, name);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateShippingDiscountRequest {\n");
    sb.append("    criteria: ").append(toIndentedString(criteria)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    discountType: ").append(toIndentedString(discountType)).append("\n");
    sb.append("    discountValue: ").append(toIndentedString(discountValue)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
    
        private UpdateShippingDiscountRequest instance;
    
        public Builder() {
          this(new UpdateShippingDiscountRequest());
        }
    
        protected Builder(UpdateShippingDiscountRequest instance) {
          this.instance = instance;
        }
    
        public UpdateShippingDiscountRequest.Builder criteria(List<@Valid DiscountCriteria> criteria) {
              this.instance.criteria = criteria;
          return this;
        }
            public UpdateShippingDiscountRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public UpdateShippingDiscountRequest.Builder discountType(DiscountTypeEnum discountType) {
              this.instance.discountType = discountType;
          return this;
        }
            public UpdateShippingDiscountRequest.Builder discountValue(Double discountValue) {
              this.instance.discountValue = discountValue;
          return this;
        }
            public UpdateShippingDiscountRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
        
    
        /**
        * returns a built UpdateShippingDiscountRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateShippingDiscountRequest build() {
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
      public static UpdateShippingDiscountRequest.Builder builder() {
        return new UpdateShippingDiscountRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateShippingDiscountRequest.Builder toBuilder() {
        return new UpdateShippingDiscountRequest.Builder()
          .criteria(getCriteria())
          .description(getDescription())
          .discountType(getDiscountType())
          .discountValue(getDiscountValue())
          .name(getName());
      }
}

