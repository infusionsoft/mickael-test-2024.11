/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
 * RestV2Subscription
 */
@JsonPropertyOrder({
  RestV2Subscription.JSON_PROPERTY_SUBSCRIPTION_ACTIVE,
  RestV2Subscription.JSON_PROPERTY_SUBSCRIPTION_CYCLES_COMPLETED,
  RestV2Subscription.JSON_PROPERTY_SUBSCRIPTION_END_DATE,
  RestV2Subscription.JSON_PROPERTY_SUBSCRIPTION_ID,
  RestV2Subscription.JSON_PROPERTY_SUBSCRIPTION_NEXT_BILL_DATE,
  RestV2Subscription.JSON_PROPERTY_SUBSCRIPTION_START_DATE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RestV2Subscription implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SUBSCRIPTION_ACTIVE = "subscription_active";
  @jakarta.annotation.Nullable  private Boolean subscriptionActive;

  public static final String JSON_PROPERTY_SUBSCRIPTION_CYCLES_COMPLETED = "subscription_cycles_completed";
  @jakarta.annotation.Nullable  private Integer subscriptionCyclesCompleted;

  public static final String JSON_PROPERTY_SUBSCRIPTION_END_DATE = "subscription_end_date";
  @jakarta.annotation.Nullable  private String subscriptionEndDate;

  public static final String JSON_PROPERTY_SUBSCRIPTION_ID = "subscription_id";
  @jakarta.annotation.Nullable  private String subscriptionId;

  public static final String JSON_PROPERTY_SUBSCRIPTION_NEXT_BILL_DATE = "subscription_next_bill_date";
  @jakarta.annotation.Nullable  private String subscriptionNextBillDate;

  public static final String JSON_PROPERTY_SUBSCRIPTION_START_DATE = "subscription_start_date";
  @jakarta.annotation.Nullable  private String subscriptionStartDate;

  public RestV2Subscription() { 
  }

  public RestV2Subscription subscriptionActive(@jakarta.annotation.Nullable Boolean subscriptionActive) {
    this.subscriptionActive = subscriptionActive;
    return this;
  }

  /**
   * Get subscriptionActive
   * @return subscriptionActive
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getSubscriptionActive() {
    return subscriptionActive;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionActive(@jakarta.annotation.Nullable Boolean subscriptionActive) {
    this.subscriptionActive = subscriptionActive;
  }


  public RestV2Subscription subscriptionCyclesCompleted(@jakarta.annotation.Nullable Integer subscriptionCyclesCompleted) {
    this.subscriptionCyclesCompleted = subscriptionCyclesCompleted;
    return this;
  }

  /**
   * Get subscriptionCyclesCompleted
   * @return subscriptionCyclesCompleted
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_CYCLES_COMPLETED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getSubscriptionCyclesCompleted() {
    return subscriptionCyclesCompleted;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_CYCLES_COMPLETED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionCyclesCompleted(@jakarta.annotation.Nullable Integer subscriptionCyclesCompleted) {
    this.subscriptionCyclesCompleted = subscriptionCyclesCompleted;
  }


  public RestV2Subscription subscriptionEndDate(@jakarta.annotation.Nullable String subscriptionEndDate) {
    this.subscriptionEndDate = subscriptionEndDate;
    return this;
  }

  /**
   * Get subscriptionEndDate
   * @return subscriptionEndDate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSubscriptionEndDate() {
    return subscriptionEndDate;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionEndDate(@jakarta.annotation.Nullable String subscriptionEndDate) {
    this.subscriptionEndDate = subscriptionEndDate;
  }


  public RestV2Subscription subscriptionId(@jakarta.annotation.Nullable String subscriptionId) {
    this.subscriptionId = subscriptionId;
    return this;
  }

  /**
   * Get subscriptionId
   * @return subscriptionId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSubscriptionId() {
    return subscriptionId;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionId(@jakarta.annotation.Nullable String subscriptionId) {
    this.subscriptionId = subscriptionId;
  }


  public RestV2Subscription subscriptionNextBillDate(@jakarta.annotation.Nullable String subscriptionNextBillDate) {
    this.subscriptionNextBillDate = subscriptionNextBillDate;
    return this;
  }

  /**
   * Get subscriptionNextBillDate
   * @return subscriptionNextBillDate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_NEXT_BILL_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSubscriptionNextBillDate() {
    return subscriptionNextBillDate;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_NEXT_BILL_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionNextBillDate(@jakarta.annotation.Nullable String subscriptionNextBillDate) {
    this.subscriptionNextBillDate = subscriptionNextBillDate;
  }


  public RestV2Subscription subscriptionStartDate(@jakarta.annotation.Nullable String subscriptionStartDate) {
    this.subscriptionStartDate = subscriptionStartDate;
    return this;
  }

  /**
   * Get subscriptionStartDate
   * @return subscriptionStartDate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSubscriptionStartDate() {
    return subscriptionStartDate;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionStartDate(@jakarta.annotation.Nullable String subscriptionStartDate) {
    this.subscriptionStartDate = subscriptionStartDate;
  }

  /**
   * Return true if this RestV2Subscription object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestV2Subscription restV2Subscription = (RestV2Subscription) o;
    return Objects.equals(this.subscriptionActive, restV2Subscription.subscriptionActive) &&
        Objects.equals(this.subscriptionCyclesCompleted, restV2Subscription.subscriptionCyclesCompleted) &&
        Objects.equals(this.subscriptionEndDate, restV2Subscription.subscriptionEndDate) &&
        Objects.equals(this.subscriptionId, restV2Subscription.subscriptionId) &&
        Objects.equals(this.subscriptionNextBillDate, restV2Subscription.subscriptionNextBillDate) &&
        Objects.equals(this.subscriptionStartDate, restV2Subscription.subscriptionStartDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(subscriptionActive, subscriptionCyclesCompleted, subscriptionEndDate, subscriptionId, subscriptionNextBillDate, subscriptionStartDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestV2Subscription {\n");
    sb.append("    subscriptionActive: ").append(toIndentedString(subscriptionActive)).append("\n");
    sb.append("    subscriptionCyclesCompleted: ").append(toIndentedString(subscriptionCyclesCompleted)).append("\n");
    sb.append("    subscriptionEndDate: ").append(toIndentedString(subscriptionEndDate)).append("\n");
    sb.append("    subscriptionId: ").append(toIndentedString(subscriptionId)).append("\n");
    sb.append("    subscriptionNextBillDate: ").append(toIndentedString(subscriptionNextBillDate)).append("\n");
    sb.append("    subscriptionStartDate: ").append(toIndentedString(subscriptionStartDate)).append("\n");
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
    
        private RestV2Subscription instance;
    
        public Builder() {
          this(new RestV2Subscription());
        }
    
        protected Builder(RestV2Subscription instance) {
          this.instance = instance;
        }
    
        public RestV2Subscription.Builder subscriptionActive(Boolean subscriptionActive) {
              this.instance.subscriptionActive = subscriptionActive;
          return this;
        }
            public RestV2Subscription.Builder subscriptionCyclesCompleted(Integer subscriptionCyclesCompleted) {
              this.instance.subscriptionCyclesCompleted = subscriptionCyclesCompleted;
          return this;
        }
            public RestV2Subscription.Builder subscriptionEndDate(String subscriptionEndDate) {
              this.instance.subscriptionEndDate = subscriptionEndDate;
          return this;
        }
            public RestV2Subscription.Builder subscriptionId(String subscriptionId) {
              this.instance.subscriptionId = subscriptionId;
          return this;
        }
            public RestV2Subscription.Builder subscriptionNextBillDate(String subscriptionNextBillDate) {
              this.instance.subscriptionNextBillDate = subscriptionNextBillDate;
          return this;
        }
            public RestV2Subscription.Builder subscriptionStartDate(String subscriptionStartDate) {
              this.instance.subscriptionStartDate = subscriptionStartDate;
          return this;
        }
        
    
        /**
        * returns a built RestV2Subscription instance.
        *
        * The builder is not reusable.
        */
        public RestV2Subscription build() {
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
      public static RestV2Subscription.Builder builder() {
        return new RestV2Subscription.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestV2Subscription.Builder toBuilder() {
        return new RestV2Subscription.Builder()
          .subscriptionActive(getSubscriptionActive())
          .subscriptionCyclesCompleted(getSubscriptionCyclesCompleted())
          .subscriptionEndDate(getSubscriptionEndDate())
          .subscriptionId(getSubscriptionId())
          .subscriptionNextBillDate(getSubscriptionNextBillDate())
          .subscriptionStartDate(getSubscriptionStartDate());
      }
}

