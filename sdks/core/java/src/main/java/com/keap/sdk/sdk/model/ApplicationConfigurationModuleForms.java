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
 * ApplicationConfigurationModuleForms
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleForms.JSON_PROPERTY_SPAM_FILTERS_ENABLED
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleForms implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SPAM_FILTERS_ENABLED = "spam_filters_enabled";
  @jakarta.annotation.Nullable  private Boolean spamFiltersEnabled;

  public ApplicationConfigurationModuleForms() { 
  }

  public ApplicationConfigurationModuleForms spamFiltersEnabled(@jakarta.annotation.Nullable Boolean spamFiltersEnabled) {
    this.spamFiltersEnabled = spamFiltersEnabled;
    return this;
  }

  /**
   * Get spamFiltersEnabled
   * @return spamFiltersEnabled
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SPAM_FILTERS_ENABLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getSpamFiltersEnabled() {
    return spamFiltersEnabled;
  }


  @JsonProperty(JSON_PROPERTY_SPAM_FILTERS_ENABLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSpamFiltersEnabled(@jakarta.annotation.Nullable Boolean spamFiltersEnabled) {
    this.spamFiltersEnabled = spamFiltersEnabled;
  }

  /**
   * Return true if this ApplicationConfigurationModuleForms object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleForms applicationConfigurationModuleForms = (ApplicationConfigurationModuleForms) o;
    return Objects.equals(this.spamFiltersEnabled, applicationConfigurationModuleForms.spamFiltersEnabled);
  }

  @Override
  public int hashCode() {
    return Objects.hash(spamFiltersEnabled);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleForms {\n");
    sb.append("    spamFiltersEnabled: ").append(toIndentedString(spamFiltersEnabled)).append("\n");
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
    
        private ApplicationConfigurationModuleForms instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleForms());
        }
    
        protected Builder(ApplicationConfigurationModuleForms instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleForms.Builder spamFiltersEnabled(Boolean spamFiltersEnabled) {
              this.instance.spamFiltersEnabled = spamFiltersEnabled;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleForms instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleForms build() {
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
      public static ApplicationConfigurationModuleForms.Builder builder() {
        return new ApplicationConfigurationModuleForms.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleForms.Builder toBuilder() {
        return new ApplicationConfigurationModuleForms.Builder()
          .spamFiltersEnabled(getSpamFiltersEnabled());
      }
}

