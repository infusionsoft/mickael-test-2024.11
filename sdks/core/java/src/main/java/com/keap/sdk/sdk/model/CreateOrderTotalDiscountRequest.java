/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
 * CreateOrderTotalDiscountRequest
 */
@JsonPropertyOrder({
  CreateOrderTotalDiscountRequest.JSON_PROPERTY_APPLY_TO_COMMISSIONS,
  CreateOrderTotalDiscountRequest.JSON_PROPERTY_CRITERIA,
  CreateOrderTotalDiscountRequest.JSON_PROPERTY_DESCRIPTION,
  CreateOrderTotalDiscountRequest.JSON_PROPERTY_DISCOUNT_STRATEGY,
  CreateOrderTotalDiscountRequest.JSON_PROPERTY_DISCOUNT_TYPE,
  CreateOrderTotalDiscountRequest.JSON_PROPERTY_DISCOUNT_VALUE,
  CreateOrderTotalDiscountRequest.JSON_PROPERTY_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateOrderTotalDiscountRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_APPLY_TO_COMMISSIONS = "apply_to_commissions";
  @jakarta.annotation.Nullable  private Boolean applyToCommissions;

  public static final String JSON_PROPERTY_CRITERIA = "criteria";
  @jakarta.annotation.Nullable  private List<@Valid DiscountCriteria> criteria = new ArrayList<>();

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  /**
   * Gets or Sets discountStrategy
   */
  public enum DiscountStrategyEnum {
    GROSS(String.valueOf("GROSS")),
    
    NET(String.valueOf("NET")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    DiscountStrategyEnum(String value) {
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
    public static DiscountStrategyEnum fromValue(String value) {
      for (DiscountStrategyEnum b : DiscountStrategyEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_DISCOUNT_STRATEGY = "discount_strategy";
  @jakarta.annotation.Nullable  private DiscountStrategyEnum discountStrategy;

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
  @jakarta.annotation.Nonnull  private String name;

  public CreateOrderTotalDiscountRequest() { 
  }

  public CreateOrderTotalDiscountRequest applyToCommissions(@jakarta.annotation.Nullable Boolean applyToCommissions) {
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


  public CreateOrderTotalDiscountRequest criteria(@jakarta.annotation.Nullable List<@Valid DiscountCriteria> criteria) {
    this.criteria = criteria;
    return this;
  }

  public CreateOrderTotalDiscountRequest addCriteriaItem(DiscountCriteria criteriaItem) {
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


  public CreateOrderTotalDiscountRequest description(@jakarta.annotation.Nullable String description) {
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


  public CreateOrderTotalDiscountRequest discountStrategy(@jakarta.annotation.Nullable DiscountStrategyEnum discountStrategy) {
    this.discountStrategy = discountStrategy;
    return this;
  }

  /**
   * Get discountStrategy
   * @return discountStrategy
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISCOUNT_STRATEGY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public DiscountStrategyEnum getDiscountStrategy() {
    return discountStrategy;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNT_STRATEGY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDiscountStrategy(@jakarta.annotation.Nullable DiscountStrategyEnum discountStrategy) {
    this.discountStrategy = discountStrategy;
  }


  public CreateOrderTotalDiscountRequest discountType(@jakarta.annotation.Nonnull DiscountTypeEnum discountType) {
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


  public CreateOrderTotalDiscountRequest discountValue(@jakarta.annotation.Nonnull Double discountValue) {
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


  public CreateOrderTotalDiscountRequest name(@jakarta.annotation.Nonnull String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(@jakarta.annotation.Nonnull String name) {
    this.name = name;
  }

  /**
   * Return true if this CreateOrderTotalDiscountRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateOrderTotalDiscountRequest createOrderTotalDiscountRequest = (CreateOrderTotalDiscountRequest) o;
    return Objects.equals(this.applyToCommissions, createOrderTotalDiscountRequest.applyToCommissions) &&
        Objects.equals(this.criteria, createOrderTotalDiscountRequest.criteria) &&
        Objects.equals(this.description, createOrderTotalDiscountRequest.description) &&
        Objects.equals(this.discountStrategy, createOrderTotalDiscountRequest.discountStrategy) &&
        Objects.equals(this.discountType, createOrderTotalDiscountRequest.discountType) &&
        Objects.equals(this.discountValue, createOrderTotalDiscountRequest.discountValue) &&
        Objects.equals(this.name, createOrderTotalDiscountRequest.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(applyToCommissions, criteria, description, discountStrategy, discountType, discountValue, name);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateOrderTotalDiscountRequest {\n");
    sb.append("    applyToCommissions: ").append(toIndentedString(applyToCommissions)).append("\n");
    sb.append("    criteria: ").append(toIndentedString(criteria)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    discountStrategy: ").append(toIndentedString(discountStrategy)).append("\n");
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
    
        private CreateOrderTotalDiscountRequest instance;
    
        public Builder() {
          this(new CreateOrderTotalDiscountRequest());
        }
    
        protected Builder(CreateOrderTotalDiscountRequest instance) {
          this.instance = instance;
        }
    
        public CreateOrderTotalDiscountRequest.Builder applyToCommissions(Boolean applyToCommissions) {
              this.instance.applyToCommissions = applyToCommissions;
          return this;
        }
            public CreateOrderTotalDiscountRequest.Builder criteria(List<@Valid DiscountCriteria> criteria) {
              this.instance.criteria = criteria;
          return this;
        }
            public CreateOrderTotalDiscountRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CreateOrderTotalDiscountRequest.Builder discountStrategy(DiscountStrategyEnum discountStrategy) {
              this.instance.discountStrategy = discountStrategy;
          return this;
        }
            public CreateOrderTotalDiscountRequest.Builder discountType(DiscountTypeEnum discountType) {
              this.instance.discountType = discountType;
          return this;
        }
            public CreateOrderTotalDiscountRequest.Builder discountValue(Double discountValue) {
              this.instance.discountValue = discountValue;
          return this;
        }
            public CreateOrderTotalDiscountRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
        
    
        /**
        * returns a built CreateOrderTotalDiscountRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateOrderTotalDiscountRequest build() {
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
      public static CreateOrderTotalDiscountRequest.Builder builder() {
        return new CreateOrderTotalDiscountRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateOrderTotalDiscountRequest.Builder toBuilder() {
        return new CreateOrderTotalDiscountRequest.Builder()
          .applyToCommissions(getApplyToCommissions())
          .criteria(getCriteria())
          .description(getDescription())
          .discountStrategy(getDiscountStrategy())
          .discountType(getDiscountType())
          .discountValue(getDiscountValue())
          .name(getName());
      }
}

