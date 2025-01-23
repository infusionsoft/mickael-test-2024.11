/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
import com.keap.sdk.sdk.model.Stage;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * A pipeline
 */
@Schema(description = "A pipeline")
@JsonPropertyOrder({
  Pipeline.JSON_PROPERTY_ID,
  Pipeline.JSON_PROPERTY_NAME,
  Pipeline.JSON_PROPERTY_STAGES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class Pipeline implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_STAGES = "stages";
  @jakarta.annotation.Nullable  private List<@Valid Stage> stages = new ArrayList<>();

  public Pipeline() { 
  }

  public Pipeline id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Unique identifier for the model.
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Unique identifier for the model.")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable String id) {
    this.id = id;
  }


  public Pipeline name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * The name of the pipeline.
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The name of the pipeline.")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(@jakarta.annotation.Nullable String name) {
    this.name = name;
  }


  public Pipeline stages(@jakarta.annotation.Nullable List<@Valid Stage> stages) {
    this.stages = stages;
    return this;
  }

  public Pipeline addStagesItem(Stage stagesItem) {
    if (this.stages == null) {
      this.stages = new ArrayList<>();
    }
    this.stages.add(stagesItem);
    return this;
  }

  /**
   * The list of stages in the pipeline.
   * @return stages
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The list of stages in the pipeline.")
  @JsonProperty(JSON_PROPERTY_STAGES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Stage> getStages() {
    return stages;
  }


  @JsonProperty(JSON_PROPERTY_STAGES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStages(@jakarta.annotation.Nullable List<@Valid Stage> stages) {
    this.stages = stages;
  }

  /**
   * Return true if this Pipeline object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Pipeline pipeline = (Pipeline) o;
    return Objects.equals(this.id, pipeline.id) &&
        Objects.equals(this.name, pipeline.name) &&
        Objects.equals(this.stages, pipeline.stages);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, stages);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Pipeline {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
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
    
        private Pipeline instance;
    
        public Builder() {
          this(new Pipeline());
        }
    
        protected Builder(Pipeline instance) {
          this.instance = instance;
        }
    
        public Pipeline.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public Pipeline.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public Pipeline.Builder stages(List<@Valid Stage> stages) {
              this.instance.stages = stages;
          return this;
        }
        
    
        /**
        * returns a built Pipeline instance.
        *
        * The builder is not reusable.
        */
        public Pipeline build() {
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
      public static Pipeline.Builder builder() {
        return new Pipeline.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Pipeline.Builder toBuilder() {
        return new Pipeline.Builder()
          .id(getId())
          .name(getName())
          .stages(getStages());
      }
}

