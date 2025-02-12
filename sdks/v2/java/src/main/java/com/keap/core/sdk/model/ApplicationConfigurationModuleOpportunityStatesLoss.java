/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.core.sdk.model;

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
 * ApplicationConfigurationModuleOpportunityStatesLoss
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleOpportunityStatesLoss.JSON_PROPERTY_REASONS,
  ApplicationConfigurationModuleOpportunityStatesLoss.JSON_PROPERTY_STAGE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleOpportunityStatesLoss implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REASONS = "reasons";
  @jakarta.annotation.Nullable  private String reasons;

  public static final String JSON_PROPERTY_STAGE = "stage";
  @jakarta.annotation.Nullable  private String stage;

  public ApplicationConfigurationModuleOpportunityStatesLoss() { 
  }

  public ApplicationConfigurationModuleOpportunityStatesLoss reasons(@jakarta.annotation.Nullable String reasons) {
    this.reasons = reasons;
    return this;
  }

  /**
   * Get reasons
   * @return reasons
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REASONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getReasons() {
    return reasons;
  }


  @JsonProperty(JSON_PROPERTY_REASONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReasons(@jakarta.annotation.Nullable String reasons) {
    this.reasons = reasons;
  }


  public ApplicationConfigurationModuleOpportunityStatesLoss stage(@jakarta.annotation.Nullable String stage) {
    this.stage = stage;
    return this;
  }

  /**
   * Get stage
   * @return stage
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStage() {
    return stage;
  }


  @JsonProperty(JSON_PROPERTY_STAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStage(@jakarta.annotation.Nullable String stage) {
    this.stage = stage;
  }

  /**
   * Return true if this ApplicationConfigurationModuleOpportunityStatesLoss object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleOpportunityStatesLoss applicationConfigurationModuleOpportunityStatesLoss = (ApplicationConfigurationModuleOpportunityStatesLoss) o;
    return Objects.equals(this.reasons, applicationConfigurationModuleOpportunityStatesLoss.reasons) &&
        Objects.equals(this.stage, applicationConfigurationModuleOpportunityStatesLoss.stage);
  }

  @Override
  public int hashCode() {
    return Objects.hash(reasons, stage);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleOpportunityStatesLoss {\n");
    sb.append("    reasons: ").append(toIndentedString(reasons)).append("\n");
    sb.append("    stage: ").append(toIndentedString(stage)).append("\n");
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
    
        private ApplicationConfigurationModuleOpportunityStatesLoss instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleOpportunityStatesLoss());
        }
    
        protected Builder(ApplicationConfigurationModuleOpportunityStatesLoss instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleOpportunityStatesLoss.Builder reasons(String reasons) {
              this.instance.reasons = reasons;
          return this;
        }
            public ApplicationConfigurationModuleOpportunityStatesLoss.Builder stage(String stage) {
              this.instance.stage = stage;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleOpportunityStatesLoss instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleOpportunityStatesLoss build() {
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
      public static ApplicationConfigurationModuleOpportunityStatesLoss.Builder builder() {
        return new ApplicationConfigurationModuleOpportunityStatesLoss.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleOpportunityStatesLoss.Builder toBuilder() {
        return new ApplicationConfigurationModuleOpportunityStatesLoss.Builder()
          .reasons(getReasons())
          .stage(getStage());
      }
}

