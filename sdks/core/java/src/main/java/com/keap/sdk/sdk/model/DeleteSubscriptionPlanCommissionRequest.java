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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * DeleteSubscriptionPlanCommissionRequest
 */
@JsonPropertyOrder({
  DeleteSubscriptionPlanCommissionRequest.JSON_PROPERTY_PRODUCT_ID,
  DeleteSubscriptionPlanCommissionRequest.JSON_PROPERTY_SUBSCRIPTION_PLAN_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class DeleteSubscriptionPlanCommissionRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_PRODUCT_ID = "product_id";
  @jakarta.annotation.Nullable  private String productId;

  public static final String JSON_PROPERTY_SUBSCRIPTION_PLAN_ID = "subscription_plan_id";
  @jakarta.annotation.Nullable  private String subscriptionPlanId;

  public DeleteSubscriptionPlanCommissionRequest() { 
  }

  public DeleteSubscriptionPlanCommissionRequest productId(@jakarta.annotation.Nullable String productId) {
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


  public DeleteSubscriptionPlanCommissionRequest subscriptionPlanId(@jakarta.annotation.Nullable String subscriptionPlanId) {
    this.subscriptionPlanId = subscriptionPlanId;
    return this;
  }

  /**
   * Get subscriptionPlanId
   * @return subscriptionPlanId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_PLAN_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSubscriptionPlanId() {
    return subscriptionPlanId;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_PLAN_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionPlanId(@jakarta.annotation.Nullable String subscriptionPlanId) {
    this.subscriptionPlanId = subscriptionPlanId;
  }

  /**
   * Return true if this DeleteSubscriptionPlanCommissionRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest = (DeleteSubscriptionPlanCommissionRequest) o;
    return Objects.equals(this.productId, deleteSubscriptionPlanCommissionRequest.productId) &&
        Objects.equals(this.subscriptionPlanId, deleteSubscriptionPlanCommissionRequest.subscriptionPlanId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(productId, subscriptionPlanId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DeleteSubscriptionPlanCommissionRequest {\n");
    sb.append("    productId: ").append(toIndentedString(productId)).append("\n");
    sb.append("    subscriptionPlanId: ").append(toIndentedString(subscriptionPlanId)).append("\n");
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
    
        private DeleteSubscriptionPlanCommissionRequest instance;
    
        public Builder() {
          this(new DeleteSubscriptionPlanCommissionRequest());
        }
    
        protected Builder(DeleteSubscriptionPlanCommissionRequest instance) {
          this.instance = instance;
        }
    
        public DeleteSubscriptionPlanCommissionRequest.Builder productId(String productId) {
              this.instance.productId = productId;
          return this;
        }
            public DeleteSubscriptionPlanCommissionRequest.Builder subscriptionPlanId(String subscriptionPlanId) {
              this.instance.subscriptionPlanId = subscriptionPlanId;
          return this;
        }
        
    
        /**
        * returns a built DeleteSubscriptionPlanCommissionRequest instance.
        *
        * The builder is not reusable.
        */
        public DeleteSubscriptionPlanCommissionRequest build() {
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
      public static DeleteSubscriptionPlanCommissionRequest.Builder builder() {
        return new DeleteSubscriptionPlanCommissionRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public DeleteSubscriptionPlanCommissionRequest.Builder toBuilder() {
        return new DeleteSubscriptionPlanCommissionRequest.Builder()
          .productId(getProductId())
          .subscriptionPlanId(getSubscriptionPlanId());
      }
}

