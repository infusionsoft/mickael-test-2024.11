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
import com.keap.sdk.sdk.model.CurrencyValue;
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
  SubscriptionPlan.JSON_PROPERTY_BILLING_CYCLE,
  SubscriptionPlan.JSON_PROPERTY_BILLING_FREQUENCY,
  SubscriptionPlan.JSON_PROPERTY_ID,
  SubscriptionPlan.JSON_PROPERTY_NUMBER_OF_CYCLES,
  SubscriptionPlan.JSON_PROPERTY_ORDER_INDEX,
  SubscriptionPlan.JSON_PROPERTY_PLAN_PRICE,
  SubscriptionPlan.JSON_PROPERTY_PRORATE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class SubscriptionPlan implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTIVE = "active";
  @jakarta.annotation.Nullable  private Boolean active;

  public static final String JSON_PROPERTY_BILLING_CYCLE = "billing_cycle";
  @jakarta.annotation.Nullable  private String billingCycle;

  public static final String JSON_PROPERTY_BILLING_FREQUENCY = "billing_frequency";
  @jakarta.annotation.Nullable  private Integer billingFrequency;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NUMBER_OF_CYCLES = "number_of_cycles";
  @jakarta.annotation.Nullable  private Integer numberOfCycles;

  public static final String JSON_PROPERTY_ORDER_INDEX = "order_index";
  @jakarta.annotation.Nullable  private Integer orderIndex;

  public static final String JSON_PROPERTY_PLAN_PRICE = "plan_price";
  @jakarta.annotation.Nullable  private CurrencyValue planPrice;

  public static final String JSON_PROPERTY_PRORATE = "prorate";
  @jakarta.annotation.Nullable  private Boolean prorate;

  public SubscriptionPlan() { 
  }

  public SubscriptionPlan active(@jakarta.annotation.Nullable Boolean active) {
    this.active = active;
    return this;
  }

  /**
   * If the subscription plan should be active/available for purchase
   * @return active
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If the subscription plan should be active/available for purchase")
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


  public SubscriptionPlan billingCycle(@jakarta.annotation.Nullable String billingCycle) {
    this.billingCycle = billingCycle;
    return this;
  }

  /**
   * How frequent to bill. Can be: DAILY, WEEKLY, MONTHLY, or YEARLY
   * @return billingCycle
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "How frequent to bill. Can be: DAILY, WEEKLY, MONTHLY, or YEARLY")
  @JsonProperty(JSON_PROPERTY_BILLING_CYCLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getBillingCycle() {
    return billingCycle;
  }


  @JsonProperty(JSON_PROPERTY_BILLING_CYCLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBillingCycle(@jakarta.annotation.Nullable String billingCycle) {
    this.billingCycle = billingCycle;
  }


  public SubscriptionPlan billingFrequency(@jakarta.annotation.Nullable Integer billingFrequency) {
    this.billingFrequency = billingFrequency;
    return this;
  }

  /**
   * How many times per billing cycle to bill
   * @return billingFrequency
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "How many times per billing cycle to bill")
  @JsonProperty(JSON_PROPERTY_BILLING_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getBillingFrequency() {
    return billingFrequency;
  }


  @JsonProperty(JSON_PROPERTY_BILLING_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBillingFrequency(@jakarta.annotation.Nullable Integer billingFrequency) {
    this.billingFrequency = billingFrequency;
  }


  public SubscriptionPlan id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * The subscription plan id
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The subscription plan id")
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


  public SubscriptionPlan numberOfCycles(@jakarta.annotation.Nullable Integer numberOfCycles) {
    this.numberOfCycles = numberOfCycles;
    return this;
  }

  /**
   * How many billing cycles to bill. Optional field i.e. can be no value or 0.
   * @return numberOfCycles
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "How many billing cycles to bill. Optional field i.e. can be no value or 0.")
  @JsonProperty(JSON_PROPERTY_NUMBER_OF_CYCLES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getNumberOfCycles() {
    return numberOfCycles;
  }


  @JsonProperty(JSON_PROPERTY_NUMBER_OF_CYCLES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNumberOfCycles(@jakarta.annotation.Nullable Integer numberOfCycles) {
    this.numberOfCycles = numberOfCycles;
  }


  public SubscriptionPlan orderIndex(@jakarta.annotation.Nullable Integer orderIndex) {
    this.orderIndex = orderIndex;
    return this;
  }

  /**
   * Determines the order in which the plan will be displayed
   * @return orderIndex
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Determines the order in which the plan will be displayed")
  @JsonProperty(JSON_PROPERTY_ORDER_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getOrderIndex() {
    return orderIndex;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOrderIndex(@jakarta.annotation.Nullable Integer orderIndex) {
    this.orderIndex = orderIndex;
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


  public SubscriptionPlan prorate(@jakarta.annotation.Nullable Boolean prorate) {
    this.prorate = prorate;
    return this;
  }

  /**
   * If the subscription plan should allow prorating
   * @return prorate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If the subscription plan should allow prorating")
  @JsonProperty(JSON_PROPERTY_PRORATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getProrate() {
    return prorate;
  }


  @JsonProperty(JSON_PROPERTY_PRORATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProrate(@jakarta.annotation.Nullable Boolean prorate) {
    this.prorate = prorate;
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
        Objects.equals(this.billingCycle, subscriptionPlan.billingCycle) &&
        Objects.equals(this.billingFrequency, subscriptionPlan.billingFrequency) &&
        Objects.equals(this.id, subscriptionPlan.id) &&
        Objects.equals(this.numberOfCycles, subscriptionPlan.numberOfCycles) &&
        Objects.equals(this.orderIndex, subscriptionPlan.orderIndex) &&
        Objects.equals(this.planPrice, subscriptionPlan.planPrice) &&
        Objects.equals(this.prorate, subscriptionPlan.prorate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(active, billingCycle, billingFrequency, id, numberOfCycles, orderIndex, planPrice, prorate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SubscriptionPlan {\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
    sb.append("    billingCycle: ").append(toIndentedString(billingCycle)).append("\n");
    sb.append("    billingFrequency: ").append(toIndentedString(billingFrequency)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    numberOfCycles: ").append(toIndentedString(numberOfCycles)).append("\n");
    sb.append("    orderIndex: ").append(toIndentedString(orderIndex)).append("\n");
    sb.append("    planPrice: ").append(toIndentedString(planPrice)).append("\n");
    sb.append("    prorate: ").append(toIndentedString(prorate)).append("\n");
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
            public SubscriptionPlan.Builder billingCycle(String billingCycle) {
              this.instance.billingCycle = billingCycle;
          return this;
        }
            public SubscriptionPlan.Builder billingFrequency(Integer billingFrequency) {
              this.instance.billingFrequency = billingFrequency;
          return this;
        }
            public SubscriptionPlan.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public SubscriptionPlan.Builder numberOfCycles(Integer numberOfCycles) {
              this.instance.numberOfCycles = numberOfCycles;
          return this;
        }
            public SubscriptionPlan.Builder orderIndex(Integer orderIndex) {
              this.instance.orderIndex = orderIndex;
          return this;
        }
            public SubscriptionPlan.Builder planPrice(CurrencyValue planPrice) {
              this.instance.planPrice = planPrice;
          return this;
        }
            public SubscriptionPlan.Builder prorate(Boolean prorate) {
              this.instance.prorate = prorate;
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
          .billingCycle(getBillingCycle())
          .billingFrequency(getBillingFrequency())
          .id(getId())
          .numberOfCycles(getNumberOfCycles())
          .orderIndex(getOrderIndex())
          .planPrice(getPlanPrice())
          .prorate(getProrate());
      }
}

