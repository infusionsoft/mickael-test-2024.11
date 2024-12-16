/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
 * GetApplicationEnabledStatusResponse
 */
@JsonPropertyOrder({
  GetApplicationEnabledStatusResponse.JSON_PROPERTY_ENABLED
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class GetApplicationEnabledStatusResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ENABLED = "enabled";
  @jakarta.annotation.Nullable  private Boolean enabled;

  public GetApplicationEnabledStatusResponse() { 
  }

  public GetApplicationEnabledStatusResponse enabled(@jakarta.annotation.Nullable Boolean enabled) {
    this.enabled = enabled;
    return this;
  }

  /**
   * Get enabled
   * @return enabled
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ENABLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getEnabled() {
    return enabled;
  }


  @JsonProperty(JSON_PROPERTY_ENABLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnabled(@jakarta.annotation.Nullable Boolean enabled) {
    this.enabled = enabled;
  }

  /**
   * Return true if this GetApplicationEnabledStatusResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetApplicationEnabledStatusResponse getApplicationEnabledStatusResponse = (GetApplicationEnabledStatusResponse) o;
    return Objects.equals(this.enabled, getApplicationEnabledStatusResponse.enabled);
  }

  @Override
  public int hashCode() {
    return Objects.hash(enabled);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetApplicationEnabledStatusResponse {\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
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
    
        private GetApplicationEnabledStatusResponse instance;
    
        public Builder() {
          this(new GetApplicationEnabledStatusResponse());
        }
    
        protected Builder(GetApplicationEnabledStatusResponse instance) {
          this.instance = instance;
        }
    
        public GetApplicationEnabledStatusResponse.Builder enabled(Boolean enabled) {
              this.instance.enabled = enabled;
          return this;
        }
        
    
        /**
        * returns a built GetApplicationEnabledStatusResponse instance.
        *
        * The builder is not reusable.
        */
        public GetApplicationEnabledStatusResponse build() {
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
      public static GetApplicationEnabledStatusResponse.Builder builder() {
        return new GetApplicationEnabledStatusResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public GetApplicationEnabledStatusResponse.Builder toBuilder() {
        return new GetApplicationEnabledStatusResponse.Builder()
          .enabled(getEnabled());
      }
}

