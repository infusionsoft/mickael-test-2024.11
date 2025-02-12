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
import com.keap.core.sdk.model.DiscountCriteria;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateProductDiscountRequest
 */
@JsonPropertyOrder({
  CreateProductDiscountRequest.JSON_PROPERTY_APPLY_TO_COMMISSIONS,
  CreateProductDiscountRequest.JSON_PROPERTY_CRITERIA,
  CreateProductDiscountRequest.JSON_PROPERTY_DESCRIPTION,
  CreateProductDiscountRequest.JSON_PROPERTY_DISCOUNT_TYPE,
  CreateProductDiscountRequest.JSON_PROPERTY_DISCOUNT_VALUE,
  CreateProductDiscountRequest.JSON_PROPERTY_NAME,
  CreateProductDiscountRequest.JSON_PROPERTY_PRODUCT_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateProductDiscountRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_APPLY_TO_COMMISSIONS = "apply_to_commissions";
  @jakarta.annotation.Nullable  private Boolean applyToCommissions;

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
  @jakarta.annotation.Nonnull  private DiscountTypeEnum discountType;

  public static final String JSON_PROPERTY_DISCOUNT_VALUE = "discount_value";
  @jakarta.annotation.Nonnull  private Double discountValue;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PRODUCT_ID = "product_id";
  @jakarta.annotation.Nonnull  private String productId;

  public CreateProductDiscountRequest() { 
  }

  public CreateProductDiscountRequest applyToCommissions(@jakarta.annotation.Nullable Boolean applyToCommissions) {
    this.applyToCommissions = applyToCommissions;
    return this;
  }

  /**
   * Get applyToCommissions
   * @return applyToCommissions
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_APPLY_TO_COMMISSIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getApplyToCommissions() {
    return applyToCommissions;
  }


  @JsonProperty(JSON_PROPERTY_APPLY_TO_COMMISSIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setApplyToCommissions(@jakarta.annotation.Nullable Boolean applyToCommissions) {
    this.applyToCommissions = applyToCommissions;
  }


  public CreateProductDiscountRequest criteria(@jakarta.annotation.Nullable List<@Valid DiscountCriteria> criteria) {
    this.criteria = criteria;
    return this;
  }

  public CreateProductDiscountRequest addCriteriaItem(DiscountCriteria criteriaItem) {
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


  public CreateProductDiscountRequest description(@jakarta.annotation.Nullable String description) {
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


  public CreateProductDiscountRequest discountType(@jakarta.annotation.Nonnull DiscountTypeEnum discountType) {
    this.discountType = discountType;
    return this;
  }

  /**
   * Get discountType
   * @return discountType
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISCOUNT_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public DiscountTypeEnum getDiscountType() {
    return discountType;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNT_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDiscountType(@jakarta.annotation.Nonnull DiscountTypeEnum discountType) {
    this.discountType = discountType;
  }


  public CreateProductDiscountRequest discountValue(@jakarta.annotation.Nonnull Double discountValue) {
    this.discountValue = discountValue;
    return this;
  }

  /**
   * Get discountValue
   * @return discountValue
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISCOUNT_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Double getDiscountValue() {
    return discountValue;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNT_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDiscountValue(@jakarta.annotation.Nonnull Double discountValue) {
    this.discountValue = discountValue;
  }


  public CreateProductDiscountRequest name(@jakarta.annotation.Nullable String name) {
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


  public CreateProductDiscountRequest productId(@jakarta.annotation.Nonnull String productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Get productId
   * @return productId
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getProductId() {
    return productId;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setProductId(@jakarta.annotation.Nonnull String productId) {
    this.productId = productId;
  }

  /**
   * Return true if this CreateProductDiscountRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateProductDiscountRequest createProductDiscountRequest = (CreateProductDiscountRequest) o;
    return Objects.equals(this.applyToCommissions, createProductDiscountRequest.applyToCommissions) &&
        Objects.equals(this.criteria, createProductDiscountRequest.criteria) &&
        Objects.equals(this.description, createProductDiscountRequest.description) &&
        Objects.equals(this.discountType, createProductDiscountRequest.discountType) &&
        Objects.equals(this.discountValue, createProductDiscountRequest.discountValue) &&
        Objects.equals(this.name, createProductDiscountRequest.name) &&
        Objects.equals(this.productId, createProductDiscountRequest.productId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(applyToCommissions, criteria, description, discountType, discountValue, name, productId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateProductDiscountRequest {\n");
    sb.append("    applyToCommissions: ").append(toIndentedString(applyToCommissions)).append("\n");
    sb.append("    criteria: ").append(toIndentedString(criteria)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    discountType: ").append(toIndentedString(discountType)).append("\n");
    sb.append("    discountValue: ").append(toIndentedString(discountValue)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    productId: ").append(toIndentedString(productId)).append("\n");
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
    
        private CreateProductDiscountRequest instance;
    
        public Builder() {
          this(new CreateProductDiscountRequest());
        }
    
        protected Builder(CreateProductDiscountRequest instance) {
          this.instance = instance;
        }
    
        public CreateProductDiscountRequest.Builder applyToCommissions(Boolean applyToCommissions) {
              this.instance.applyToCommissions = applyToCommissions;
          return this;
        }
            public CreateProductDiscountRequest.Builder criteria(List<@Valid DiscountCriteria> criteria) {
              this.instance.criteria = criteria;
          return this;
        }
            public CreateProductDiscountRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CreateProductDiscountRequest.Builder discountType(DiscountTypeEnum discountType) {
              this.instance.discountType = discountType;
          return this;
        }
            public CreateProductDiscountRequest.Builder discountValue(Double discountValue) {
              this.instance.discountValue = discountValue;
          return this;
        }
            public CreateProductDiscountRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public CreateProductDiscountRequest.Builder productId(String productId) {
              this.instance.productId = productId;
          return this;
        }
        
    
        /**
        * returns a built CreateProductDiscountRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateProductDiscountRequest build() {
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
      public static CreateProductDiscountRequest.Builder builder() {
        return new CreateProductDiscountRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateProductDiscountRequest.Builder toBuilder() {
        return new CreateProductDiscountRequest.Builder()
          .applyToCommissions(getApplyToCommissions())
          .criteria(getCriteria())
          .description(getDescription())
          .discountType(getDiscountType())
          .discountValue(getDiscountValue())
          .name(getName())
          .productId(getProductId());
      }
}

