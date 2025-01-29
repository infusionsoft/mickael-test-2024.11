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
 * Request for updating a stage.
 */
@Schema(description = "Request for updating a stage.")
@JsonPropertyOrder({
  UpdateStageRequest.JSON_PROPERTY_NAME,
  UpdateStageRequest.JSON_PROPERTY_PREVIOUS_STAGE_ID,
  UpdateStageRequest.JSON_PROPERTY_NEXT_STAGE_ID,
  UpdateStageRequest.JSON_PROPERTY_PIPELINE_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateStageRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PREVIOUS_STAGE_ID = "previous_stage_id";
  @jakarta.annotation.Nullable  private String previousStageId;

  public static final String JSON_PROPERTY_NEXT_STAGE_ID = "next_stage_id";
  @jakarta.annotation.Nullable  private String nextStageId;

  public static final String JSON_PROPERTY_PIPELINE_ID = "pipeline_id";
  @jakarta.annotation.Nullable  private String pipelineId;

  public UpdateStageRequest() { 
  }

  public UpdateStageRequest name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * The name of the stage.
   * @return name
   */
  @jakarta.annotation.Nullable  @NotNull
 @Size(min=1)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The name of the stage.")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(@jakarta.annotation.Nullable String name) {
    this.name = name;
  }


  public UpdateStageRequest previousStageId(@jakarta.annotation.Nullable String previousStageId) {
    this.previousStageId = previousStageId;
    return this;
  }

  /**
   * The ID of the previous stage.
   * @return previousStageId
   */
  @jakarta.annotation.Nullable  @NotNull
 @Size(min=1)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The ID of the previous stage.")
  @JsonProperty(JSON_PROPERTY_PREVIOUS_STAGE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getPreviousStageId() {
    return previousStageId;
  }


  @JsonProperty(JSON_PROPERTY_PREVIOUS_STAGE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPreviousStageId(@jakarta.annotation.Nullable String previousStageId) {
    this.previousStageId = previousStageId;
  }


  public UpdateStageRequest nextStageId(@jakarta.annotation.Nullable String nextStageId) {
    this.nextStageId = nextStageId;
    return this;
  }

  /**
   * The ID of the next stage.
   * @return nextStageId
   */
  @jakarta.annotation.Nullable  @NotNull
 @Size(min=1)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The ID of the next stage.")
  @JsonProperty(JSON_PROPERTY_NEXT_STAGE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getNextStageId() {
    return nextStageId;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_STAGE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setNextStageId(@jakarta.annotation.Nullable String nextStageId) {
    this.nextStageId = nextStageId;
  }


  public UpdateStageRequest pipelineId(@jakarta.annotation.Nullable String pipelineId) {
    this.pipelineId = pipelineId;
    return this;
  }

  /**
   * The ID of the pipeline.
   * @return pipelineId
   */
  @jakarta.annotation.Nullable  @NotNull
 @Size(min=1)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The ID of the pipeline.")
  @JsonProperty(JSON_PROPERTY_PIPELINE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getPipelineId() {
    return pipelineId;
  }


  @JsonProperty(JSON_PROPERTY_PIPELINE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPipelineId(@jakarta.annotation.Nullable String pipelineId) {
    this.pipelineId = pipelineId;
  }

  /**
   * Return true if this UpdateStageRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateStageRequest updateStageRequest = (UpdateStageRequest) o;
    return Objects.equals(this.name, updateStageRequest.name) &&
        Objects.equals(this.previousStageId, updateStageRequest.previousStageId) &&
        Objects.equals(this.nextStageId, updateStageRequest.nextStageId) &&
        Objects.equals(this.pipelineId, updateStageRequest.pipelineId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, previousStageId, nextStageId, pipelineId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateStageRequest {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    previousStageId: ").append(toIndentedString(previousStageId)).append("\n");
    sb.append("    nextStageId: ").append(toIndentedString(nextStageId)).append("\n");
    sb.append("    pipelineId: ").append(toIndentedString(pipelineId)).append("\n");
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
    
        private UpdateStageRequest instance;
    
        public Builder() {
          this(new UpdateStageRequest());
        }
    
        protected Builder(UpdateStageRequest instance) {
          this.instance = instance;
        }
    
        public UpdateStageRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public UpdateStageRequest.Builder previousStageId(String previousStageId) {
              this.instance.previousStageId = previousStageId;
          return this;
        }
            public UpdateStageRequest.Builder nextStageId(String nextStageId) {
              this.instance.nextStageId = nextStageId;
          return this;
        }
            public UpdateStageRequest.Builder pipelineId(String pipelineId) {
              this.instance.pipelineId = pipelineId;
          return this;
        }
        
    
        /**
        * returns a built UpdateStageRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateStageRequest build() {
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
      public static UpdateStageRequest.Builder builder() {
        return new UpdateStageRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateStageRequest.Builder toBuilder() {
        return new UpdateStageRequest.Builder()
          .name(getName())
          .previousStageId(getPreviousStageId())
          .nextStageId(getNextStageId())
          .pipelineId(getPipelineId());
      }
}

