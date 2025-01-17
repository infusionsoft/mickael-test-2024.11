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
 * ApplicationConfigurationModuleTemplate
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleTemplate.JSON_PROPERTY_DEFAULT_COUNTRY_CODE,
  ApplicationConfigurationModuleTemplate.JSON_PROPERTY_DEFAULT_USER_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleTemplate implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DEFAULT_COUNTRY_CODE = "default_country_code";
  @jakarta.annotation.Nullable  private Integer defaultCountryCode;

  public static final String JSON_PROPERTY_DEFAULT_USER_ID = "default_user_id";
  @jakarta.annotation.Nullable  private Long defaultUserId;

  public ApplicationConfigurationModuleTemplate() { 
  }

  public ApplicationConfigurationModuleTemplate defaultCountryCode(@jakarta.annotation.Nullable Integer defaultCountryCode) {
    this.defaultCountryCode = defaultCountryCode;
    return this;
  }

  /**
   * Get defaultCountryCode
   * @return defaultCountryCode
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_COUNTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getDefaultCountryCode() {
    return defaultCountryCode;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_COUNTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultCountryCode(@jakarta.annotation.Nullable Integer defaultCountryCode) {
    this.defaultCountryCode = defaultCountryCode;
  }


  public ApplicationConfigurationModuleTemplate defaultUserId(@jakarta.annotation.Nullable Long defaultUserId) {
    this.defaultUserId = defaultUserId;
    return this;
  }

  /**
   * Get defaultUserId
   * @return defaultUserId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getDefaultUserId() {
    return defaultUserId;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultUserId(@jakarta.annotation.Nullable Long defaultUserId) {
    this.defaultUserId = defaultUserId;
  }

  /**
   * Return true if this ApplicationConfigurationModuleTemplate object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleTemplate applicationConfigurationModuleTemplate = (ApplicationConfigurationModuleTemplate) o;
    return Objects.equals(this.defaultCountryCode, applicationConfigurationModuleTemplate.defaultCountryCode) &&
        Objects.equals(this.defaultUserId, applicationConfigurationModuleTemplate.defaultUserId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(defaultCountryCode, defaultUserId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleTemplate {\n");
    sb.append("    defaultCountryCode: ").append(toIndentedString(defaultCountryCode)).append("\n");
    sb.append("    defaultUserId: ").append(toIndentedString(defaultUserId)).append("\n");
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
    
        private ApplicationConfigurationModuleTemplate instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleTemplate());
        }
    
        protected Builder(ApplicationConfigurationModuleTemplate instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleTemplate.Builder defaultCountryCode(Integer defaultCountryCode) {
              this.instance.defaultCountryCode = defaultCountryCode;
          return this;
        }
            public ApplicationConfigurationModuleTemplate.Builder defaultUserId(Long defaultUserId) {
              this.instance.defaultUserId = defaultUserId;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleTemplate instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleTemplate build() {
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
      public static ApplicationConfigurationModuleTemplate.Builder builder() {
        return new ApplicationConfigurationModuleTemplate.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleTemplate.Builder toBuilder() {
        return new ApplicationConfigurationModuleTemplate.Builder()
          .defaultCountryCode(getDefaultCountryCode())
          .defaultUserId(getDefaultUserId());
      }
}

