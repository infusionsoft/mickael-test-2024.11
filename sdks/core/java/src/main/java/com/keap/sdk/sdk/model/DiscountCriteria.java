/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
 * DiscountCriteria
 */
@JsonPropertyOrder({
  DiscountCriteria.JSON_PROPERTY_CODE,
  DiscountCriteria.JSON_PROPERTY_CRITERIA_ID,
  DiscountCriteria.JSON_PROPERTY_OPERATOR,
  DiscountCriteria.JSON_PROPERTY_PLAN_ID,
  DiscountCriteria.JSON_PROPERTY_PRODUCT_ID,
  DiscountCriteria.JSON_PROPERTY_PRODUCT_QUANTITY_MAX,
  DiscountCriteria.JSON_PROPERTY_PRODUCT_QUANTITY_MIN,
  DiscountCriteria.JSON_PROPERTY_RANGE_END_TIME,
  DiscountCriteria.JSON_PROPERTY_RANGE_START_TIME,
  DiscountCriteria.JSON_PROPERTY_SUBSCRIPTION_QUANTITY,
  DiscountCriteria.JSON_PROPERTY_TOTAL_AMOUNT,
  DiscountCriteria.JSON_PROPERTY_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class DiscountCriteria implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CODE = "code";
  @jakarta.annotation.Nullable  private String code;

  public static final String JSON_PROPERTY_CRITERIA_ID = "criteria_id";
  @jakarta.annotation.Nullable  private String criteriaId;

  /**
   * Gets or Sets operator
   */
  public enum OperatorEnum {
    LESS_THAN(String.valueOf("LESS_THAN")),
    
    GREATER_THAN(String.valueOf("GREATER_THAN")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    OperatorEnum(String value) {
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
    public static OperatorEnum fromValue(String value) {
      for (OperatorEnum b : OperatorEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_OPERATOR = "operator";
  @jakarta.annotation.Nullable  private OperatorEnum operator;

  public static final String JSON_PROPERTY_PLAN_ID = "plan_id";
  @jakarta.annotation.Nullable  private String planId;

  public static final String JSON_PROPERTY_PRODUCT_ID = "product_id";
  @jakarta.annotation.Nullable  private String productId;

  public static final String JSON_PROPERTY_PRODUCT_QUANTITY_MAX = "product_quantity_max";
  @jakarta.annotation.Nullable  private Integer productQuantityMax;

  public static final String JSON_PROPERTY_PRODUCT_QUANTITY_MIN = "product_quantity_min";
  @jakarta.annotation.Nullable  private Integer productQuantityMin;

  public static final String JSON_PROPERTY_RANGE_END_TIME = "range_end_time";
  @jakarta.annotation.Nullable  private String rangeEndTime;

  public static final String JSON_PROPERTY_RANGE_START_TIME = "range_start_time";
  @jakarta.annotation.Nullable  private String rangeStartTime;

  public static final String JSON_PROPERTY_SUBSCRIPTION_QUANTITY = "subscription_quantity";
  @jakarta.annotation.Nullable  private Integer subscriptionQuantity;

  public static final String JSON_PROPERTY_TOTAL_AMOUNT = "total_amount";
  @jakarta.annotation.Nullable  private Double totalAmount;

  /**
   * Gets or Sets type
   */
  public enum TypeEnum {
    DATE_RANGE(String.valueOf("DATE_RANGE")),
    
    PROMO_CODE(String.valueOf("PROMO_CODE")),
    
    PRODUCT(String.valueOf("PRODUCT")),
    
    SUBSCRIPTION_PLAN(String.valueOf("SUBSCRIPTION_PLAN")),
    
    ORDER_TOTAL(String.valueOf("ORDER_TOTAL")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    TypeEnum(String value) {
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
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_TYPE = "type";
  @jakarta.annotation.Nullable  private TypeEnum type;

  public DiscountCriteria() { 
  }

  public DiscountCriteria code(@jakarta.annotation.Nullable String code) {
    this.code = code;
    return this;
  }

  /**
   * Get code
   * @return code
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public DiscountCriteria criteriaId(@jakarta.annotation.Nullable String criteriaId) {
    this.criteriaId = criteriaId;
    return this;
  }

  /**
   * Get criteriaId
   * @return criteriaId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CRITERIA_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCriteriaId() {
    return criteriaId;
  }


  @JsonProperty(JSON_PROPERTY_CRITERIA_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCriteriaId(@jakarta.annotation.Nullable String criteriaId) {
    this.criteriaId = criteriaId;
  }


  public DiscountCriteria operator(@jakarta.annotation.Nullable OperatorEnum operator) {
    this.operator = operator;
    return this;
  }

  /**
   * Get operator
   * @return operator
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPERATOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public OperatorEnum getOperator() {
    return operator;
  }


  @JsonProperty(JSON_PROPERTY_OPERATOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOperator(@jakarta.annotation.Nullable OperatorEnum operator) {
    this.operator = operator;
  }


  public DiscountCriteria planId(@jakarta.annotation.Nullable String planId) {
    this.planId = planId;
    return this;
  }

  /**
   * Get planId
   * @return planId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PLAN_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPlanId() {
    return planId;
  }


  @JsonProperty(JSON_PROPERTY_PLAN_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPlanId(@jakarta.annotation.Nullable String planId) {
    this.planId = planId;
  }


  public DiscountCriteria productId(@jakarta.annotation.Nullable String productId) {
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


  public DiscountCriteria productQuantityMax(@jakarta.annotation.Nullable Integer productQuantityMax) {
    this.productQuantityMax = productQuantityMax;
    return this;
  }

  /**
   * Get productQuantityMax
   * @return productQuantityMax
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_QUANTITY_MAX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getProductQuantityMax() {
    return productQuantityMax;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_QUANTITY_MAX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductQuantityMax(@jakarta.annotation.Nullable Integer productQuantityMax) {
    this.productQuantityMax = productQuantityMax;
  }


  public DiscountCriteria productQuantityMin(@jakarta.annotation.Nullable Integer productQuantityMin) {
    this.productQuantityMin = productQuantityMin;
    return this;
  }

  /**
   * Get productQuantityMin
   * @return productQuantityMin
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_QUANTITY_MIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getProductQuantityMin() {
    return productQuantityMin;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_QUANTITY_MIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductQuantityMin(@jakarta.annotation.Nullable Integer productQuantityMin) {
    this.productQuantityMin = productQuantityMin;
  }


  public DiscountCriteria rangeEndTime(@jakarta.annotation.Nullable String rangeEndTime) {
    this.rangeEndTime = rangeEndTime;
    return this;
  }

  /**
   * Get rangeEndTime
   * @return rangeEndTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RANGE_END_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRangeEndTime() {
    return rangeEndTime;
  }


  @JsonProperty(JSON_PROPERTY_RANGE_END_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRangeEndTime(@jakarta.annotation.Nullable String rangeEndTime) {
    this.rangeEndTime = rangeEndTime;
  }


  public DiscountCriteria rangeStartTime(@jakarta.annotation.Nullable String rangeStartTime) {
    this.rangeStartTime = rangeStartTime;
    return this;
  }

  /**
   * Get rangeStartTime
   * @return rangeStartTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RANGE_START_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRangeStartTime() {
    return rangeStartTime;
  }


  @JsonProperty(JSON_PROPERTY_RANGE_START_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRangeStartTime(@jakarta.annotation.Nullable String rangeStartTime) {
    this.rangeStartTime = rangeStartTime;
  }


  public DiscountCriteria subscriptionQuantity(@jakarta.annotation.Nullable Integer subscriptionQuantity) {
    this.subscriptionQuantity = subscriptionQuantity;
    return this;
  }

  /**
   * Get subscriptionQuantity
   * @return subscriptionQuantity
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getSubscriptionQuantity() {
    return subscriptionQuantity;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionQuantity(@jakarta.annotation.Nullable Integer subscriptionQuantity) {
    this.subscriptionQuantity = subscriptionQuantity;
  }


  public DiscountCriteria totalAmount(@jakarta.annotation.Nullable Double totalAmount) {
    this.totalAmount = totalAmount;
    return this;
  }

  /**
   * Get totalAmount
   * @return totalAmount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TOTAL_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getTotalAmount() {
    return totalAmount;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalAmount(@jakarta.annotation.Nullable Double totalAmount) {
    this.totalAmount = totalAmount;
  }


  public DiscountCriteria type(@jakarta.annotation.Nullable TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public TypeEnum getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(@jakarta.annotation.Nullable TypeEnum type) {
    this.type = type;
  }

  /**
   * Return true if this DiscountCriteria object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DiscountCriteria discountCriteria = (DiscountCriteria) o;
    return Objects.equals(this.code, discountCriteria.code) &&
        Objects.equals(this.criteriaId, discountCriteria.criteriaId) &&
        Objects.equals(this.operator, discountCriteria.operator) &&
        Objects.equals(this.planId, discountCriteria.planId) &&
        Objects.equals(this.productId, discountCriteria.productId) &&
        Objects.equals(this.productQuantityMax, discountCriteria.productQuantityMax) &&
        Objects.equals(this.productQuantityMin, discountCriteria.productQuantityMin) &&
        Objects.equals(this.rangeEndTime, discountCriteria.rangeEndTime) &&
        Objects.equals(this.rangeStartTime, discountCriteria.rangeStartTime) &&
        Objects.equals(this.subscriptionQuantity, discountCriteria.subscriptionQuantity) &&
        Objects.equals(this.totalAmount, discountCriteria.totalAmount) &&
        Objects.equals(this.type, discountCriteria.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, criteriaId, operator, planId, productId, productQuantityMax, productQuantityMin, rangeEndTime, rangeStartTime, subscriptionQuantity, totalAmount, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DiscountCriteria {\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    criteriaId: ").append(toIndentedString(criteriaId)).append("\n");
    sb.append("    operator: ").append(toIndentedString(operator)).append("\n");
    sb.append("    planId: ").append(toIndentedString(planId)).append("\n");
    sb.append("    productId: ").append(toIndentedString(productId)).append("\n");
    sb.append("    productQuantityMax: ").append(toIndentedString(productQuantityMax)).append("\n");
    sb.append("    productQuantityMin: ").append(toIndentedString(productQuantityMin)).append("\n");
    sb.append("    rangeEndTime: ").append(toIndentedString(rangeEndTime)).append("\n");
    sb.append("    rangeStartTime: ").append(toIndentedString(rangeStartTime)).append("\n");
    sb.append("    subscriptionQuantity: ").append(toIndentedString(subscriptionQuantity)).append("\n");
    sb.append("    totalAmount: ").append(toIndentedString(totalAmount)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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
    
        private DiscountCriteria instance;
    
        public Builder() {
          this(new DiscountCriteria());
        }
    
        protected Builder(DiscountCriteria instance) {
          this.instance = instance;
        }
    
        public DiscountCriteria.Builder code(String code) {
              this.instance.code = code;
          return this;
        }
            public DiscountCriteria.Builder criteriaId(String criteriaId) {
              this.instance.criteriaId = criteriaId;
          return this;
        }
            public DiscountCriteria.Builder operator(OperatorEnum operator) {
              this.instance.operator = operator;
          return this;
        }
            public DiscountCriteria.Builder planId(String planId) {
              this.instance.planId = planId;
          return this;
        }
            public DiscountCriteria.Builder productId(String productId) {
              this.instance.productId = productId;
          return this;
        }
            public DiscountCriteria.Builder productQuantityMax(Integer productQuantityMax) {
              this.instance.productQuantityMax = productQuantityMax;
          return this;
        }
            public DiscountCriteria.Builder productQuantityMin(Integer productQuantityMin) {
              this.instance.productQuantityMin = productQuantityMin;
          return this;
        }
            public DiscountCriteria.Builder rangeEndTime(String rangeEndTime) {
              this.instance.rangeEndTime = rangeEndTime;
          return this;
        }
            public DiscountCriteria.Builder rangeStartTime(String rangeStartTime) {
              this.instance.rangeStartTime = rangeStartTime;
          return this;
        }
            public DiscountCriteria.Builder subscriptionQuantity(Integer subscriptionQuantity) {
              this.instance.subscriptionQuantity = subscriptionQuantity;
          return this;
        }
            public DiscountCriteria.Builder totalAmount(Double totalAmount) {
              this.instance.totalAmount = totalAmount;
          return this;
        }
            public DiscountCriteria.Builder type(TypeEnum type) {
              this.instance.type = type;
          return this;
        }
        
    
        /**
        * returns a built DiscountCriteria instance.
        *
        * The builder is not reusable.
        */
        public DiscountCriteria build() {
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
      public static DiscountCriteria.Builder builder() {
        return new DiscountCriteria.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public DiscountCriteria.Builder toBuilder() {
        return new DiscountCriteria.Builder()
          .code(getCode())
          .criteriaId(getCriteriaId())
          .operator(getOperator())
          .planId(getPlanId())
          .productId(getProductId())
          .productQuantityMax(getProductQuantityMax())
          .productQuantityMin(getProductQuantityMin())
          .rangeEndTime(getRangeEndTime())
          .rangeStartTime(getRangeStartTime())
          .subscriptionQuantity(getSubscriptionQuantity())
          .totalAmount(getTotalAmount())
          .type(getType());
      }
}

