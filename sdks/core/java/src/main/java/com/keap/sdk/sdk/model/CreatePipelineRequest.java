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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Request for creating a pipeline.
 */
@Schema(description = "Request for creating a pipeline.")
@JsonPropertyOrder({
  CreatePipelineRequest.JSON_PROPERTY_NAME,
  CreatePipelineRequest.JSON_PROPERTY_STAGES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreatePipelineRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nonnull  private String name;

  public static final String JSON_PROPERTY_STAGES = "stages";
  @jakarta.annotation.Nonnull  private List<String> stages = new ArrayList<>();

  public CreatePipelineRequest() { 
  }

  public CreatePipelineRequest name(@jakarta.annotation.Nonnull String name) {
    this.name = name;
    return this;
  }

  /**
   * The name of the pipeline.
   * @return name
   */
  @jakarta.annotation.Nonnull  @NotNull
 @Size(min=1,max=255)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The name of the pipeline.")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(@jakarta.annotation.Nonnull String name) {
    this.name = name;
  }


  public CreatePipelineRequest stages(@jakarta.annotation.Nonnull List<String> stages) {
    this.stages = stages;
    return this;
  }

  public CreatePipelineRequest addStagesItem(String stagesItem) {
    if (this.stages == null) {
      this.stages = new ArrayList<>();
    }
    this.stages.add(stagesItem);
    return this;
  }

  /**
   * The stages of the pipeline.
   * @return stages
   */
  @jakarta.annotation.Nonnull  @NotNull
 @Size(min=1,max=100)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The stages of the pipeline.")
  @JsonProperty(JSON_PROPERTY_STAGES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public List<String> getStages() {
    return stages;
  }


  @JsonProperty(JSON_PROPERTY_STAGES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setStages(@jakarta.annotation.Nonnull List<String> stages) {
    this.stages = stages;
  }

  /**
   * Return true if this CreatePipelineRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreatePipelineRequest createPipelineRequest = (CreatePipelineRequest) o;
    return Objects.equals(this.name, createPipelineRequest.name) &&
        Objects.equals(this.stages, createPipelineRequest.stages);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, stages);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreatePipelineRequest {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
    
        private CreatePipelineRequest instance;
    
        public Builder() {
          this(new CreatePipelineRequest());
        }
    
        protected Builder(CreatePipelineRequest instance) {
          this.instance = instance;
        }
    
        public CreatePipelineRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public CreatePipelineRequest.Builder stages(List<String> stages) {
              this.instance.stages = stages;
          return this;
        }
        
    
        /**
        * returns a built CreatePipelineRequest instance.
        *
        * The builder is not reusable.
        */
        public CreatePipelineRequest build() {
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
      public static CreatePipelineRequest.Builder builder() {
        return new CreatePipelineRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreatePipelineRequest.Builder toBuilder() {
        return new CreatePipelineRequest.Builder()
          .name(getName())
          .stages(getStages());
      }
}

