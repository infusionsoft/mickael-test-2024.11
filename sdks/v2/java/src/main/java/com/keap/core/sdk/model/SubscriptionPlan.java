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
import com.keap.core.sdk.model.CurrencyValue;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * SubscriptionPlan
 */
@JsonPropertyOrder({
  SubscriptionPlan.JSON_PROPERTY_ACTIVE,
  SubscriptionPlan.JSON_PROPERTY_ALLOW_PRORATING,
  SubscriptionPlan.JSON_PROPERTY_CYCLE_TYPE,
  SubscriptionPlan.JSON_PROPERTY_DISPLAY_ORDER_INDEX,
  SubscriptionPlan.JSON_PROPERTY_FREQUENCY,
  SubscriptionPlan.JSON_PROPERTY_ID,
  SubscriptionPlan.JSON_PROPERTY_PLAN_PRICE,
  SubscriptionPlan.JSON_PROPERTY_PRODUCT_ID,
  SubscriptionPlan.JSON_PROPERTY_TOTAL_CYCLES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class SubscriptionPlan implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTIVE = "active";
  @jakarta.annotation.Nullable  private Boolean active;

  public static final String JSON_PROPERTY_ALLOW_PRORATING = "allow_prorating";
  @jakarta.annotation.Nullable  private Boolean allowProrating;

  /**
   * The cycle type of the subscription plan. Possible values: YEAR, MONTH, WEEK, DAY
   */
  public enum CycleTypeEnum {
    DAILY(String.valueOf("DAILY")),
    
    WEEKLY(String.valueOf("WEEKLY")),
    
    MONTHLY(String.valueOf("MONTHLY")),
    
    YEARLY(String.valueOf("YEARLY")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    CycleTypeEnum(String value) {
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
    public static CycleTypeEnum fromValue(String value) {
      for (CycleTypeEnum b : CycleTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_CYCLE_TYPE = "cycle_type";
  @jakarta.annotation.Nullable  private CycleTypeEnum cycleType;

  public static final String JSON_PROPERTY_DISPLAY_ORDER_INDEX = "display_order_index";
  @jakarta.annotation.Nullable  private Integer displayOrderIndex;

  public static final String JSON_PROPERTY_FREQUENCY = "frequency";
  @jakarta.annotation.Nullable  private Integer frequency;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_PLAN_PRICE = "plan_price";
  @jakarta.annotation.Nullable  private CurrencyValue planPrice;

  public static final String JSON_PROPERTY_PRODUCT_ID = "product_id";
  @jakarta.annotation.Nullable  private String productId;

  public static final String JSON_PROPERTY_TOTAL_CYCLES = "total_cycles";
  @jakarta.annotation.Nullable  private Integer totalCycles;

  public SubscriptionPlan() { 
  }

  public SubscriptionPlan active(@jakarta.annotation.Nullable Boolean active) {
    this.active = active;
    return this;
  }

  /**
   * If the subscription plan is active or not.
   * @return active
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If the subscription plan is active or not.")
  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getActive() {
    return active;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActive(@jakarta.annotation.Nullable Boolean active) {
    this.active = active;
  }


  public SubscriptionPlan allowProrating(@jakarta.annotation.Nullable Boolean allowProrating) {
    this.allowProrating = allowProrating;
    return this;
  }

  /**
   * Whether or not the plan will allow prorating.
   * @return allowProrating
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Whether or not the plan will allow prorating.")
  @JsonProperty(JSON_PROPERTY_ALLOW_PRORATING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAllowProrating() {
    return allowProrating;
  }


  @JsonProperty(JSON_PROPERTY_ALLOW_PRORATING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAllowProrating(@jakarta.annotation.Nullable Boolean allowProrating) {
    this.allowProrating = allowProrating;
  }


  public SubscriptionPlan cycleType(@jakarta.annotation.Nullable CycleTypeEnum cycleType) {
    this.cycleType = cycleType;
    return this;
  }

  /**
   * The cycle type of the subscription plan. Possible values: YEAR, MONTH, WEEK, DAY
   * @return cycleType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The cycle type of the subscription plan. Possible values: YEAR, MONTH, WEEK, DAY")
  @JsonProperty(JSON_PROPERTY_CYCLE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CycleTypeEnum getCycleType() {
    return cycleType;
  }


  @JsonProperty(JSON_PROPERTY_CYCLE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCycleType(@jakarta.annotation.Nullable CycleTypeEnum cycleType) {
    this.cycleType = cycleType;
  }


  public SubscriptionPlan displayOrderIndex(@jakarta.annotation.Nullable Integer displayOrderIndex) {
    this.displayOrderIndex = displayOrderIndex;
    return this;
  }

  /**
   * The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list.
   * @return displayOrderIndex
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list.")
  @JsonProperty(JSON_PROPERTY_DISPLAY_ORDER_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getDisplayOrderIndex() {
    return displayOrderIndex;
  }


  @JsonProperty(JSON_PROPERTY_DISPLAY_ORDER_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDisplayOrderIndex(@jakarta.annotation.Nullable Integer displayOrderIndex) {
    this.displayOrderIndex = displayOrderIndex;
  }


  public SubscriptionPlan frequency(@jakarta.annotation.Nullable Integer frequency) {
    this.frequency = frequency;
    return this;
  }

  /**
   * Total number of times of a cycle type which constitutes a plan cycle. Minimum value is 1.
   * @return frequency
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Total number of times of a cycle type which constitutes a plan cycle. Minimum value is 1.")
  @JsonProperty(JSON_PROPERTY_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getFrequency() {
    return frequency;
  }


  @JsonProperty(JSON_PROPERTY_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFrequency(@jakarta.annotation.Nullable Integer frequency) {
    this.frequency = frequency;
  }


  public SubscriptionPlan id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Id of the subscription plan.
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Id of the subscription plan.")
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


  public SubscriptionPlan planPrice(@jakarta.annotation.Nullable CurrencyValue planPrice) {
    this.planPrice = planPrice;
    return this;
  }

  /**
   * Get planPrice
   * @return planPrice
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PLAN_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CurrencyValue getPlanPrice() {
    return planPrice;
  }


  @JsonProperty(JSON_PROPERTY_PLAN_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPlanPrice(@jakarta.annotation.Nullable CurrencyValue planPrice) {
    this.planPrice = planPrice;
  }


  public SubscriptionPlan productId(@jakarta.annotation.Nullable String productId) {
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


  public SubscriptionPlan totalCycles(@jakarta.annotation.Nullable Integer totalCycles) {
    this.totalCycles = totalCycles;
    return this;
  }

  /**
   * Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end.
   * @return totalCycles
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end.")
  @JsonProperty(JSON_PROPERTY_TOTAL_CYCLES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getTotalCycles() {
    return totalCycles;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_CYCLES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalCycles(@jakarta.annotation.Nullable Integer totalCycles) {
    this.totalCycles = totalCycles;
  }

  /**
   * Return true if this SubscriptionPlan object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SubscriptionPlan subscriptionPlan = (SubscriptionPlan) o;
    return Objects.equals(this.active, subscriptionPlan.active) &&
        Objects.equals(this.allowProrating, subscriptionPlan.allowProrating) &&
        Objects.equals(this.cycleType, subscriptionPlan.cycleType) &&
        Objects.equals(this.displayOrderIndex, subscriptionPlan.displayOrderIndex) &&
        Objects.equals(this.frequency, subscriptionPlan.frequency) &&
        Objects.equals(this.id, subscriptionPlan.id) &&
        Objects.equals(this.planPrice, subscriptionPlan.planPrice) &&
        Objects.equals(this.productId, subscriptionPlan.productId) &&
        Objects.equals(this.totalCycles, subscriptionPlan.totalCycles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(active, allowProrating, cycleType, displayOrderIndex, frequency, id, planPrice, productId, totalCycles);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SubscriptionPlan {\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
    sb.append("    allowProrating: ").append(toIndentedString(allowProrating)).append("\n");
    sb.append("    cycleType: ").append(toIndentedString(cycleType)).append("\n");
    sb.append("    displayOrderIndex: ").append(toIndentedString(displayOrderIndex)).append("\n");
    sb.append("    frequency: ").append(toIndentedString(frequency)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    planPrice: ").append(toIndentedString(planPrice)).append("\n");
    sb.append("    productId: ").append(toIndentedString(productId)).append("\n");
    sb.append("    totalCycles: ").append(toIndentedString(totalCycles)).append("\n");
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
    
        private SubscriptionPlan instance;
    
        public Builder() {
          this(new SubscriptionPlan());
        }
    
        protected Builder(SubscriptionPlan instance) {
          this.instance = instance;
        }
    
        public SubscriptionPlan.Builder active(Boolean active) {
              this.instance.active = active;
          return this;
        }
            public SubscriptionPlan.Builder allowProrating(Boolean allowProrating) {
              this.instance.allowProrating = allowProrating;
          return this;
        }
            public SubscriptionPlan.Builder cycleType(CycleTypeEnum cycleType) {
              this.instance.cycleType = cycleType;
          return this;
        }
            public SubscriptionPlan.Builder displayOrderIndex(Integer displayOrderIndex) {
              this.instance.displayOrderIndex = displayOrderIndex;
          return this;
        }
            public SubscriptionPlan.Builder frequency(Integer frequency) {
              this.instance.frequency = frequency;
          return this;
        }
            public SubscriptionPlan.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public SubscriptionPlan.Builder planPrice(CurrencyValue planPrice) {
              this.instance.planPrice = planPrice;
          return this;
        }
            public SubscriptionPlan.Builder productId(String productId) {
              this.instance.productId = productId;
          return this;
        }
            public SubscriptionPlan.Builder totalCycles(Integer totalCycles) {
              this.instance.totalCycles = totalCycles;
          return this;
        }
        
    
        /**
        * returns a built SubscriptionPlan instance.
        *
        * The builder is not reusable.
        */
        public SubscriptionPlan build() {
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
      public static SubscriptionPlan.Builder builder() {
        return new SubscriptionPlan.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public SubscriptionPlan.Builder toBuilder() {
        return new SubscriptionPlan.Builder()
          .active(getActive())
          .allowProrating(getAllowProrating())
          .cycleType(getCycleType())
          .displayOrderIndex(getDisplayOrderIndex())
          .frequency(getFrequency())
          .id(getId())
          .planPrice(getPlanPrice())
          .productId(getProductId())
          .totalCycles(getTotalCycles());
      }
}

