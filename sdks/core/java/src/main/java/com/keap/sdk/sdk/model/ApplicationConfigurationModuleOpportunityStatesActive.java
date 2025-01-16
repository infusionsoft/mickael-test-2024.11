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
 * ApplicationConfigurationModuleOpportunityStatesActive
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleOpportunityStatesActive.JSON_PROPERTY_STAGES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleOpportunityStatesActive implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_STAGES = "stages";
  @jakarta.annotation.Nullable  private String stages;

  public ApplicationConfigurationModuleOpportunityStatesActive() { 
  }

  public ApplicationConfigurationModuleOpportunityStatesActive stages(@jakarta.annotation.Nullable String stages) {
    this.stages = stages;
    return this;
  }

  /**
   * Get stages
   * @return stages
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STAGES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStages() {
    return stages;
  }


  @JsonProperty(JSON_PROPERTY_STAGES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStages(@jakarta.annotation.Nullable String stages) {
    this.stages = stages;
  }

  /**
   * Return true if this ApplicationConfigurationModuleOpportunityStatesActive object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleOpportunityStatesActive applicationConfigurationModuleOpportunityStatesActive = (ApplicationConfigurationModuleOpportunityStatesActive) o;
    return Objects.equals(this.stages, applicationConfigurationModuleOpportunityStatesActive.stages);
  }

  @Override
  public int hashCode() {
    return Objects.hash(stages);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleOpportunityStatesActive {\n");
    sb.append("    stages: ").append(toIndentedString(stages)).append("\n");
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
    
        private ApplicationConfigurationModuleOpportunityStatesActive instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleOpportunityStatesActive());
        }
    
        protected Builder(ApplicationConfigurationModuleOpportunityStatesActive instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleOpportunityStatesActive.Builder stages(String stages) {
              this.instance.stages = stages;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleOpportunityStatesActive instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleOpportunityStatesActive build() {
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
      public static ApplicationConfigurationModuleOpportunityStatesActive.Builder builder() {
        return new ApplicationConfigurationModuleOpportunityStatesActive.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleOpportunityStatesActive.Builder toBuilder() {
        return new ApplicationConfigurationModuleOpportunityStatesActive.Builder()
          .stages(getStages());
      }
}

