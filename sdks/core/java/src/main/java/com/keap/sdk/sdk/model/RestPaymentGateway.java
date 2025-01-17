/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
 * RestPaymentGateway
 */
@JsonPropertyOrder({
  RestPaymentGateway.JSON_PROPERTY_MERCHANT_ACCOUNT_ID,
  RestPaymentGateway.JSON_PROPERTY_MERCHANT_ACCOUNT_NAME,
  RestPaymentGateway.JSON_PROPERTY_USE_DEFAULT
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RestPaymentGateway implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_MERCHANT_ACCOUNT_ID = "merchant_account_id";
  @jakarta.annotation.Nullable  private String merchantAccountId;

  public static final String JSON_PROPERTY_MERCHANT_ACCOUNT_NAME = "merchant_account_name";
  @jakarta.annotation.Nullable  private String merchantAccountName;

  public static final String JSON_PROPERTY_USE_DEFAULT = "use_default";
  @jakarta.annotation.Nullable  private Boolean useDefault;

  public RestPaymentGateway() { 
  }

  public RestPaymentGateway merchantAccountId(@jakarta.annotation.Nullable String merchantAccountId) {
    this.merchantAccountId = merchantAccountId;
    return this;
  }

  /**
   * Get merchantAccountId
   * @return merchantAccountId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MERCHANT_ACCOUNT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMerchantAccountId() {
    return merchantAccountId;
  }


  @JsonProperty(JSON_PROPERTY_MERCHANT_ACCOUNT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMerchantAccountId(@jakarta.annotation.Nullable String merchantAccountId) {
    this.merchantAccountId = merchantAccountId;
  }


  public RestPaymentGateway merchantAccountName(@jakarta.annotation.Nullable String merchantAccountName) {
    this.merchantAccountName = merchantAccountName;
    return this;
  }

  /**
   * Get merchantAccountName
   * @return merchantAccountName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MERCHANT_ACCOUNT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMerchantAccountName() {
    return merchantAccountName;
  }


  @JsonProperty(JSON_PROPERTY_MERCHANT_ACCOUNT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMerchantAccountName(@jakarta.annotation.Nullable String merchantAccountName) {
    this.merchantAccountName = merchantAccountName;
  }


  public RestPaymentGateway useDefault(@jakarta.annotation.Nullable Boolean useDefault) {
    this.useDefault = useDefault;
    return this;
  }

  /**
   * Get useDefault
   * @return useDefault
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USE_DEFAULT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getUseDefault() {
    return useDefault;
  }


  @JsonProperty(JSON_PROPERTY_USE_DEFAULT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUseDefault(@jakarta.annotation.Nullable Boolean useDefault) {
    this.useDefault = useDefault;
  }

  /**
   * Return true if this RestPaymentGateway object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestPaymentGateway restPaymentGateway = (RestPaymentGateway) o;
    return Objects.equals(this.merchantAccountId, restPaymentGateway.merchantAccountId) &&
        Objects.equals(this.merchantAccountName, restPaymentGateway.merchantAccountName) &&
        Objects.equals(this.useDefault, restPaymentGateway.useDefault);
  }

  @Override
  public int hashCode() {
    return Objects.hash(merchantAccountId, merchantAccountName, useDefault);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestPaymentGateway {\n");
    sb.append("    merchantAccountId: ").append(toIndentedString(merchantAccountId)).append("\n");
    sb.append("    merchantAccountName: ").append(toIndentedString(merchantAccountName)).append("\n");
    sb.append("    useDefault: ").append(toIndentedString(useDefault)).append("\n");
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
    
        private RestPaymentGateway instance;
    
        public Builder() {
          this(new RestPaymentGateway());
        }
    
        protected Builder(RestPaymentGateway instance) {
          this.instance = instance;
        }
    
        public RestPaymentGateway.Builder merchantAccountId(String merchantAccountId) {
              this.instance.merchantAccountId = merchantAccountId;
          return this;
        }
            public RestPaymentGateway.Builder merchantAccountName(String merchantAccountName) {
              this.instance.merchantAccountName = merchantAccountName;
          return this;
        }
            public RestPaymentGateway.Builder useDefault(Boolean useDefault) {
              this.instance.useDefault = useDefault;
          return this;
        }
        
    
        /**
        * returns a built RestPaymentGateway instance.
        *
        * The builder is not reusable.
        */
        public RestPaymentGateway build() {
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
      public static RestPaymentGateway.Builder builder() {
        return new RestPaymentGateway.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestPaymentGateway.Builder toBuilder() {
        return new RestPaymentGateway.Builder()
          .merchantAccountId(getMerchantAccountId())
          .merchantAccountName(getMerchantAccountName())
          .useDefault(getUseDefault());
      }
}

