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
 * ApplicationConfigurationModuleFulfillment
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleFulfillment.JSON_PROPERTY_DEFAULT_MESSAGE_FIELDS,
  ApplicationConfigurationModuleFulfillment.JSON_PROPERTY_DEFAULT_MESSAGE_TO
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleFulfillment implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DEFAULT_MESSAGE_FIELDS = "default_message_fields";
  @jakarta.annotation.Nullable  private String defaultMessageFields;

  public static final String JSON_PROPERTY_DEFAULT_MESSAGE_TO = "default_message_to";
  @jakarta.annotation.Nullable  private String defaultMessageTo;

  public ApplicationConfigurationModuleFulfillment() { 
  }

  public ApplicationConfigurationModuleFulfillment defaultMessageFields(@jakarta.annotation.Nullable String defaultMessageFields) {
    this.defaultMessageFields = defaultMessageFields;
    return this;
  }

  /**
   * Get defaultMessageFields
   * @return defaultMessageFields
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_MESSAGE_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultMessageFields() {
    return defaultMessageFields;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_MESSAGE_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultMessageFields(@jakarta.annotation.Nullable String defaultMessageFields) {
    this.defaultMessageFields = defaultMessageFields;
  }


  public ApplicationConfigurationModuleFulfillment defaultMessageTo(@jakarta.annotation.Nullable String defaultMessageTo) {
    this.defaultMessageTo = defaultMessageTo;
    return this;
  }

  /**
   * Get defaultMessageTo
   * @return defaultMessageTo
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_MESSAGE_TO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultMessageTo() {
    return defaultMessageTo;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_MESSAGE_TO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultMessageTo(@jakarta.annotation.Nullable String defaultMessageTo) {
    this.defaultMessageTo = defaultMessageTo;
  }

  /**
   * Return true if this ApplicationConfigurationModuleFulfillment object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleFulfillment applicationConfigurationModuleFulfillment = (ApplicationConfigurationModuleFulfillment) o;
    return Objects.equals(this.defaultMessageFields, applicationConfigurationModuleFulfillment.defaultMessageFields) &&
        Objects.equals(this.defaultMessageTo, applicationConfigurationModuleFulfillment.defaultMessageTo);
  }

  @Override
  public int hashCode() {
    return Objects.hash(defaultMessageFields, defaultMessageTo);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleFulfillment {\n");
    sb.append("    defaultMessageFields: ").append(toIndentedString(defaultMessageFields)).append("\n");
    sb.append("    defaultMessageTo: ").append(toIndentedString(defaultMessageTo)).append("\n");
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
    
        private ApplicationConfigurationModuleFulfillment instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleFulfillment());
        }
    
        protected Builder(ApplicationConfigurationModuleFulfillment instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleFulfillment.Builder defaultMessageFields(String defaultMessageFields) {
              this.instance.defaultMessageFields = defaultMessageFields;
          return this;
        }
            public ApplicationConfigurationModuleFulfillment.Builder defaultMessageTo(String defaultMessageTo) {
              this.instance.defaultMessageTo = defaultMessageTo;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleFulfillment instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleFulfillment build() {
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
      public static ApplicationConfigurationModuleFulfillment.Builder builder() {
        return new ApplicationConfigurationModuleFulfillment.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleFulfillment.Builder toBuilder() {
        return new ApplicationConfigurationModuleFulfillment.Builder()
          .defaultMessageFields(getDefaultMessageFields())
          .defaultMessageTo(getDefaultMessageTo());
      }
}

