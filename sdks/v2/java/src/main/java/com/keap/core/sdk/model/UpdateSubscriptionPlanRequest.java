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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * UpdateSubscriptionPlanRequest
 */
@JsonPropertyOrder({
  UpdateSubscriptionPlanRequest.JSON_PROPERTY_ACTIVE,
  UpdateSubscriptionPlanRequest.JSON_PROPERTY_ALLOW_PRORATING,
  UpdateSubscriptionPlanRequest.JSON_PROPERTY_CYCLE_TYPE,
  UpdateSubscriptionPlanRequest.JSON_PROPERTY_DISPLAY_ORDER_INDEX,
  UpdateSubscriptionPlanRequest.JSON_PROPERTY_FREQUENCY,
  UpdateSubscriptionPlanRequest.JSON_PROPERTY_PLAN_PRICE,
  UpdateSubscriptionPlanRequest.JSON_PROPERTY_TOTAL_CYCLES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateSubscriptionPlanRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTIVE = "active";
  @jakarta.annotation.Nullable  private Boolean active;

  public static final String JSON_PROPERTY_ALLOW_PRORATING = "allow_prorating";
  @jakarta.annotation.Nullable  private Boolean allowProrating;

  /**
   * The cycle type of the subscription plan.
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
  @jakarta.annotation.Nonnull  private CycleTypeEnum cycleType;

  public static final String JSON_PROPERTY_DISPLAY_ORDER_INDEX = "display_order_index";
  @jakarta.annotation.Nullable  private Integer displayOrderIndex;

  public static final String JSON_PROPERTY_FREQUENCY = "frequency";
  @jakarta.annotation.Nullable  private Integer frequency;

  public static final String JSON_PROPERTY_PLAN_PRICE = "plan_price";
  @jakarta.annotation.Nonnull  private Double planPrice;

  public static final String JSON_PROPERTY_TOTAL_CYCLES = "total_cycles";
  @jakarta.annotation.Nullable  private Integer totalCycles;

  public UpdateSubscriptionPlanRequest() { 
  }

  public UpdateSubscriptionPlanRequest active(@jakarta.annotation.Nullable Boolean active) {
    this.active = active;
    return this;
  }

  /**
   * Whether the subscription plan is active.
   * @return active
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Whether the subscription plan is active.")
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


  public UpdateSubscriptionPlanRequest allowProrating(@jakarta.annotation.Nullable Boolean allowProrating) {
    this.allowProrating = allowProrating;
    return this;
  }

  /**
   * Allow prorating of the subscription plan.
   * @return allowProrating
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Allow prorating of the subscription plan.")
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


  public UpdateSubscriptionPlanRequest cycleType(@jakarta.annotation.Nonnull CycleTypeEnum cycleType) {
    this.cycleType = cycleType;
    return this;
  }

  /**
   * The cycle type of the subscription plan.
   * @return cycleType
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The cycle type of the subscription plan.")
  @JsonProperty(JSON_PROPERTY_CYCLE_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public CycleTypeEnum getCycleType() {
    return cycleType;
  }


  @JsonProperty(JSON_PROPERTY_CYCLE_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCycleType(@jakarta.annotation.Nonnull CycleTypeEnum cycleType) {
    this.cycleType = cycleType;
  }


  public UpdateSubscriptionPlanRequest displayOrderIndex(@jakarta.annotation.Nullable Integer displayOrderIndex) {
    this.displayOrderIndex = displayOrderIndex;
    return this;
  }

  /**
   * The order that this plan will be displayed to the user.
   * @return displayOrderIndex
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The order that this plan will be displayed to the user.")
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


  public UpdateSubscriptionPlanRequest frequency(@jakarta.annotation.Nullable Integer frequency) {
    this.frequency = frequency;
    return this;
  }

  /**
   * The frequency of the subscription plan.
   * @return frequency
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The frequency of the subscription plan.")
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


  public UpdateSubscriptionPlanRequest planPrice(@jakarta.annotation.Nonnull Double planPrice) {
    this.planPrice = planPrice;
    return this;
  }

  /**
   * The price of the subscription plan in the smallest currency unit.
   * @return planPrice
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The price of the subscription plan in the smallest currency unit.")
  @JsonProperty(JSON_PROPERTY_PLAN_PRICE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Double getPlanPrice() {
    return planPrice;
  }


  @JsonProperty(JSON_PROPERTY_PLAN_PRICE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPlanPrice(@jakarta.annotation.Nonnull Double planPrice) {
    this.planPrice = planPrice;
  }


  public UpdateSubscriptionPlanRequest totalCycles(@jakarta.annotation.Nullable Integer totalCycles) {
    this.totalCycles = totalCycles;
    return this;
  }

  /**
   * How many cycles the subscription plan will have.  0 means infinite.
   * @return totalCycles
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "How many cycles the subscription plan will have.  0 means infinite.")
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
   * Return true if this UpdateSubscriptionPlanRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateSubscriptionPlanRequest updateSubscriptionPlanRequest = (UpdateSubscriptionPlanRequest) o;
    return Objects.equals(this.active, updateSubscriptionPlanRequest.active) &&
        Objects.equals(this.allowProrating, updateSubscriptionPlanRequest.allowProrating) &&
        Objects.equals(this.cycleType, updateSubscriptionPlanRequest.cycleType) &&
        Objects.equals(this.displayOrderIndex, updateSubscriptionPlanRequest.displayOrderIndex) &&
        Objects.equals(this.frequency, updateSubscriptionPlanRequest.frequency) &&
        Objects.equals(this.planPrice, updateSubscriptionPlanRequest.planPrice) &&
        Objects.equals(this.totalCycles, updateSubscriptionPlanRequest.totalCycles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(active, allowProrating, cycleType, displayOrderIndex, frequency, planPrice, totalCycles);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateSubscriptionPlanRequest {\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
    sb.append("    allowProrating: ").append(toIndentedString(allowProrating)).append("\n");
    sb.append("    cycleType: ").append(toIndentedString(cycleType)).append("\n");
    sb.append("    displayOrderIndex: ").append(toIndentedString(displayOrderIndex)).append("\n");
    sb.append("    frequency: ").append(toIndentedString(frequency)).append("\n");
    sb.append("    planPrice: ").append(toIndentedString(planPrice)).append("\n");
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
    
        private UpdateSubscriptionPlanRequest instance;
    
        public Builder() {
          this(new UpdateSubscriptionPlanRequest());
        }
    
        protected Builder(UpdateSubscriptionPlanRequest instance) {
          this.instance = instance;
        }
    
        public UpdateSubscriptionPlanRequest.Builder active(Boolean active) {
              this.instance.active = active;
          return this;
        }
            public UpdateSubscriptionPlanRequest.Builder allowProrating(Boolean allowProrating) {
              this.instance.allowProrating = allowProrating;
          return this;
        }
            public UpdateSubscriptionPlanRequest.Builder cycleType(CycleTypeEnum cycleType) {
              this.instance.cycleType = cycleType;
          return this;
        }
            public UpdateSubscriptionPlanRequest.Builder displayOrderIndex(Integer displayOrderIndex) {
              this.instance.displayOrderIndex = displayOrderIndex;
          return this;
        }
            public UpdateSubscriptionPlanRequest.Builder frequency(Integer frequency) {
              this.instance.frequency = frequency;
          return this;
        }
            public UpdateSubscriptionPlanRequest.Builder planPrice(Double planPrice) {
              this.instance.planPrice = planPrice;
          return this;
        }
            public UpdateSubscriptionPlanRequest.Builder totalCycles(Integer totalCycles) {
              this.instance.totalCycles = totalCycles;
          return this;
        }
        
    
        /**
        * returns a built UpdateSubscriptionPlanRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateSubscriptionPlanRequest build() {
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
      public static UpdateSubscriptionPlanRequest.Builder builder() {
        return new UpdateSubscriptionPlanRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateSubscriptionPlanRequest.Builder toBuilder() {
        return new UpdateSubscriptionPlanRequest.Builder()
          .active(getActive())
          .allowProrating(getAllowProrating())
          .cycleType(getCycleType())
          .displayOrderIndex(getDisplayOrderIndex())
          .frequency(getFrequency())
          .planPrice(getPlanPrice())
          .totalCycles(getTotalCycles());
      }
}

