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
 * CreateSubscriptionCommissionProgramRequest
 */
@JsonPropertyOrder({
  CreateSubscriptionCommissionProgramRequest.JSON_PROPERTY_DOLLAR_AMOUNT,
  CreateSubscriptionCommissionProgramRequest.JSON_PROPERTY_PERCENTAGE,
  CreateSubscriptionCommissionProgramRequest.JSON_PROPERTY_SUBSCRIPTION_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateSubscriptionCommissionProgramRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DOLLAR_AMOUNT = "dollar_amount";
  @jakarta.annotation.Nullable  private String dollarAmount;

  public static final String JSON_PROPERTY_PERCENTAGE = "percentage";
  @jakarta.annotation.Nullable  private String percentage;

  public static final String JSON_PROPERTY_SUBSCRIPTION_ID = "subscription_id";
  @jakarta.annotation.Nullable  private String subscriptionId;

  public CreateSubscriptionCommissionProgramRequest() { 
  }

  public CreateSubscriptionCommissionProgramRequest dollarAmount(@jakarta.annotation.Nullable String dollarAmount) {
    this.dollarAmount = dollarAmount;
    return this;
  }

  /**
   * Get dollarAmount
   * @return dollarAmount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDollarAmount() {
    return dollarAmount;
  }


  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDollarAmount(@jakarta.annotation.Nullable String dollarAmount) {
    this.dollarAmount = dollarAmount;
  }


  public CreateSubscriptionCommissionProgramRequest percentage(@jakarta.annotation.Nullable String percentage) {
    this.percentage = percentage;
    return this;
  }

  /**
   * Get percentage
   * @return percentage
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPercentage() {
    return percentage;
  }


  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPercentage(@jakarta.annotation.Nullable String percentage) {
    this.percentage = percentage;
  }


  public CreateSubscriptionCommissionProgramRequest subscriptionId(@jakarta.annotation.Nullable String subscriptionId) {
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

  /**
   * Return true if this CreateSubscriptionCommissionProgramRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateSubscriptionCommissionProgramRequest createSubscriptionCommissionProgramRequest = (CreateSubscriptionCommissionProgramRequest) o;
    return Objects.equals(this.dollarAmount, createSubscriptionCommissionProgramRequest.dollarAmount) &&
        Objects.equals(this.percentage, createSubscriptionCommissionProgramRequest.percentage) &&
        Objects.equals(this.subscriptionId, createSubscriptionCommissionProgramRequest.subscriptionId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dollarAmount, percentage, subscriptionId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateSubscriptionCommissionProgramRequest {\n");
    sb.append("    dollarAmount: ").append(toIndentedString(dollarAmount)).append("\n");
    sb.append("    percentage: ").append(toIndentedString(percentage)).append("\n");
    sb.append("    subscriptionId: ").append(toIndentedString(subscriptionId)).append("\n");
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
    
        private CreateSubscriptionCommissionProgramRequest instance;
    
        public Builder() {
          this(new CreateSubscriptionCommissionProgramRequest());
        }
    
        protected Builder(CreateSubscriptionCommissionProgramRequest instance) {
          this.instance = instance;
        }
    
        public CreateSubscriptionCommissionProgramRequest.Builder dollarAmount(String dollarAmount) {
              this.instance.dollarAmount = dollarAmount;
          return this;
        }
            public CreateSubscriptionCommissionProgramRequest.Builder percentage(String percentage) {
              this.instance.percentage = percentage;
          return this;
        }
            public CreateSubscriptionCommissionProgramRequest.Builder subscriptionId(String subscriptionId) {
              this.instance.subscriptionId = subscriptionId;
          return this;
        }
        
    
        /**
        * returns a built CreateSubscriptionCommissionProgramRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateSubscriptionCommissionProgramRequest build() {
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
      public static CreateSubscriptionCommissionProgramRequest.Builder builder() {
        return new CreateSubscriptionCommissionProgramRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateSubscriptionCommissionProgramRequest.Builder toBuilder() {
        return new CreateSubscriptionCommissionProgramRequest.Builder()
          .dollarAmount(getDollarAmount())
          .percentage(getPercentage())
          .subscriptionId(getSubscriptionId());
      }
}

