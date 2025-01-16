/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
 * CancelSubscriptionsRequest
 */
@JsonPropertyOrder({
  CancelSubscriptionsRequest.JSON_PROPERTY_REASON
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CancelSubscriptionsRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REASON = "reason";
  @jakarta.annotation.Nullable  private String reason;

  public CancelSubscriptionsRequest() { 
  }

  public CancelSubscriptionsRequest reason(@jakarta.annotation.Nullable String reason) {
    this.reason = reason;
    return this;
  }

  /**
   * Get reason
   * @return reason
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REASON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getReason() {
    return reason;
  }


  @JsonProperty(JSON_PROPERTY_REASON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReason(@jakarta.annotation.Nullable String reason) {
    this.reason = reason;
  }

  /**
   * Return true if this CancelSubscriptionsRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CancelSubscriptionsRequest cancelSubscriptionsRequest = (CancelSubscriptionsRequest) o;
    return Objects.equals(this.reason, cancelSubscriptionsRequest.reason);
  }

  @Override
  public int hashCode() {
    return Objects.hash(reason);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CancelSubscriptionsRequest {\n");
    sb.append("    reason: ").append(toIndentedString(reason)).append("\n");
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
    
        private CancelSubscriptionsRequest instance;
    
        public Builder() {
          this(new CancelSubscriptionsRequest());
        }
    
        protected Builder(CancelSubscriptionsRequest instance) {
          this.instance = instance;
        }
    
        public CancelSubscriptionsRequest.Builder reason(String reason) {
              this.instance.reason = reason;
          return this;
        }
        
    
        /**
        * returns a built CancelSubscriptionsRequest instance.
        *
        * The builder is not reusable.
        */
        public CancelSubscriptionsRequest build() {
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
      public static CancelSubscriptionsRequest.Builder builder() {
        return new CancelSubscriptionsRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CancelSubscriptionsRequest.Builder toBuilder() {
        return new CancelSubscriptionsRequest.Builder()
          .reason(getReason());
      }
}

