/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
 * FunnelIntegrationTriggerResultDTO
 */
@JsonPropertyOrder({
  FunnelIntegrationTriggerResultDTO.JSON_PROPERTY_AUTOMATION_ID,
  FunnelIntegrationTriggerResultDTO.JSON_PROPERTY_GOAL_ID,
  FunnelIntegrationTriggerResultDTO.JSON_PROPERTY_MESSAGE,
  FunnelIntegrationTriggerResultDTO.JSON_PROPERTY_SCHEMA_DATA,
  FunnelIntegrationTriggerResultDTO.JSON_PROPERTY_SUCCESS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class FunnelIntegrationTriggerResultDTO implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AUTOMATION_ID = "automation_id";
  @jakarta.annotation.Nullable  private Long automationId;

  public static final String JSON_PROPERTY_GOAL_ID = "goal_id";
  @jakarta.annotation.Nullable  private Long goalId;

  public static final String JSON_PROPERTY_MESSAGE = "message";
  @jakarta.annotation.Nullable  private String message;

  public static final String JSON_PROPERTY_SCHEMA_DATA = "schema_data";
  @jakarta.annotation.Nullable  private String schemaData;

  public static final String JSON_PROPERTY_SUCCESS = "success";
  @jakarta.annotation.Nullable  private Boolean success;

  public FunnelIntegrationTriggerResultDTO() { 
  }

  public FunnelIntegrationTriggerResultDTO automationId(@jakarta.annotation.Nullable Long automationId) {
    this.automationId = automationId;
    return this;
  }

  /**
   * Get automationId
   * @return automationId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AUTOMATION_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getAutomationId() {
    return automationId;
  }


  @JsonProperty(JSON_PROPERTY_AUTOMATION_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAutomationId(@jakarta.annotation.Nullable Long automationId) {
    this.automationId = automationId;
  }


  public FunnelIntegrationTriggerResultDTO goalId(@jakarta.annotation.Nullable Long goalId) {
    this.goalId = goalId;
    return this;
  }

  /**
   * Get goalId
   * @return goalId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_GOAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getGoalId() {
    return goalId;
  }


  @JsonProperty(JSON_PROPERTY_GOAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGoalId(@jakarta.annotation.Nullable Long goalId) {
    this.goalId = goalId;
  }


  public FunnelIntegrationTriggerResultDTO message(@jakarta.annotation.Nullable String message) {
    this.message = message;
    return this;
  }

  /**
   * Get message
   * @return message
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMessage() {
    return message;
  }


  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMessage(@jakarta.annotation.Nullable String message) {
    this.message = message;
  }


  public FunnelIntegrationTriggerResultDTO schemaData(@jakarta.annotation.Nullable String schemaData) {
    this.schemaData = schemaData;
    return this;
  }

  /**
   * Get schemaData
   * @return schemaData
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SCHEMA_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSchemaData() {
    return schemaData;
  }


  @JsonProperty(JSON_PROPERTY_SCHEMA_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSchemaData(@jakarta.annotation.Nullable String schemaData) {
    this.schemaData = schemaData;
  }


  public FunnelIntegrationTriggerResultDTO success(@jakarta.annotation.Nullable Boolean success) {
    this.success = success;
    return this;
  }

  /**
   * Get success
   * @return success
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUCCESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getSuccess() {
    return success;
  }


  @JsonProperty(JSON_PROPERTY_SUCCESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSuccess(@jakarta.annotation.Nullable Boolean success) {
    this.success = success;
  }

  /**
   * Return true if this FunnelIntegrationTriggerResultDTO object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FunnelIntegrationTriggerResultDTO funnelIntegrationTriggerResultDTO = (FunnelIntegrationTriggerResultDTO) o;
    return Objects.equals(this.automationId, funnelIntegrationTriggerResultDTO.automationId) &&
        Objects.equals(this.goalId, funnelIntegrationTriggerResultDTO.goalId) &&
        Objects.equals(this.message, funnelIntegrationTriggerResultDTO.message) &&
        Objects.equals(this.schemaData, funnelIntegrationTriggerResultDTO.schemaData) &&
        Objects.equals(this.success, funnelIntegrationTriggerResultDTO.success);
  }

  @Override
  public int hashCode() {
    return Objects.hash(automationId, goalId, message, schemaData, success);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FunnelIntegrationTriggerResultDTO {\n");
    sb.append("    automationId: ").append(toIndentedString(automationId)).append("\n");
    sb.append("    goalId: ").append(toIndentedString(goalId)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    schemaData: ").append(toIndentedString(schemaData)).append("\n");
    sb.append("    success: ").append(toIndentedString(success)).append("\n");
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
    
        private FunnelIntegrationTriggerResultDTO instance;
    
        public Builder() {
          this(new FunnelIntegrationTriggerResultDTO());
        }
    
        protected Builder(FunnelIntegrationTriggerResultDTO instance) {
          this.instance = instance;
        }
    
        public FunnelIntegrationTriggerResultDTO.Builder automationId(Long automationId) {
              this.instance.automationId = automationId;
          return this;
        }
            public FunnelIntegrationTriggerResultDTO.Builder goalId(Long goalId) {
              this.instance.goalId = goalId;
          return this;
        }
            public FunnelIntegrationTriggerResultDTO.Builder message(String message) {
              this.instance.message = message;
          return this;
        }
            public FunnelIntegrationTriggerResultDTO.Builder schemaData(String schemaData) {
              this.instance.schemaData = schemaData;
          return this;
        }
            public FunnelIntegrationTriggerResultDTO.Builder success(Boolean success) {
              this.instance.success = success;
          return this;
        }
        
    
        /**
        * returns a built FunnelIntegrationTriggerResultDTO instance.
        *
        * The builder is not reusable.
        */
        public FunnelIntegrationTriggerResultDTO build() {
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
      public static FunnelIntegrationTriggerResultDTO.Builder builder() {
        return new FunnelIntegrationTriggerResultDTO.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public FunnelIntegrationTriggerResultDTO.Builder toBuilder() {
        return new FunnelIntegrationTriggerResultDTO.Builder()
          .automationId(getAutomationId())
          .goalId(getGoalId())
          .message(getMessage())
          .schemaData(getSchemaData())
          .success(getSuccess());
      }
}

