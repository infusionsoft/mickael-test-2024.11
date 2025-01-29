/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.770650
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
 * PaymentMethodConfig
 */
@JsonPropertyOrder({
  PaymentMethodConfig.JSON_PROPERTY_SESSION_KEY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class PaymentMethodConfig implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SESSION_KEY = "session_key";
  @jakarta.annotation.Nullable  private String sessionKey;

  public PaymentMethodConfig() { 
  }

  public PaymentMethodConfig sessionKey(@jakarta.annotation.Nullable String sessionKey) {
    this.sessionKey = sessionKey;
    return this;
  }

  /**
   * A temporary session key required for rendering Keap&#39;s payment component.
   * @return sessionKey
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "A temporary session key required for rendering Keap's payment component.")
  @JsonProperty(JSON_PROPERTY_SESSION_KEY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSessionKey() {
    return sessionKey;
  }


  @JsonProperty(JSON_PROPERTY_SESSION_KEY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSessionKey(@jakarta.annotation.Nullable String sessionKey) {
    this.sessionKey = sessionKey;
  }

  /**
   * Return true if this PaymentMethodConfig object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentMethodConfig paymentMethodConfig = (PaymentMethodConfig) o;
    return Objects.equals(this.sessionKey, paymentMethodConfig.sessionKey);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sessionKey);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentMethodConfig {\n");
    sb.append("    sessionKey: ").append(toIndentedString(sessionKey)).append("\n");
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
    
        private PaymentMethodConfig instance;
    
        public Builder() {
          this(new PaymentMethodConfig());
        }
    
        protected Builder(PaymentMethodConfig instance) {
          this.instance = instance;
        }
    
        public PaymentMethodConfig.Builder sessionKey(String sessionKey) {
              this.instance.sessionKey = sessionKey;
          return this;
        }
        
    
        /**
        * returns a built PaymentMethodConfig instance.
        *
        * The builder is not reusable.
        */
        public PaymentMethodConfig build() {
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
      public static PaymentMethodConfig.Builder builder() {
        return new PaymentMethodConfig.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PaymentMethodConfig.Builder toBuilder() {
        return new PaymentMethodConfig.Builder()
          .sessionKey(getSessionKey());
      }
}

