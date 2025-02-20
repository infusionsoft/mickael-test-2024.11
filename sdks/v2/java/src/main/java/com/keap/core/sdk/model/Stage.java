/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
 * Represents a stage in a pipeline.
 */
@Schema(description = "Represents a stage in a pipeline.")
@JsonPropertyOrder({
  Stage.JSON_PROPERTY_ID,
  Stage.JSON_PROPERTY_NAME,
  Stage.JSON_PROPERTY_PIPELINE_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class Stage implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PIPELINE_ID = "pipeline_id";
  @jakarta.annotation.Nullable  private String pipelineId;

  public Stage() { 
  }

  public Stage id(@jakarta.annotation.Nullable String id) {
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


  public Stage name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * The name of the stage.
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The name of the stage.")
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


  public Stage pipelineId(@jakarta.annotation.Nullable String pipelineId) {
    this.pipelineId = pipelineId;
    return this;
  }

  /**
   * The ID of the pipeline.
   * @return pipelineId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The ID of the pipeline.")
  @JsonProperty(JSON_PROPERTY_PIPELINE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPipelineId() {
    return pipelineId;
  }


  @JsonProperty(JSON_PROPERTY_PIPELINE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPipelineId(@jakarta.annotation.Nullable String pipelineId) {
    this.pipelineId = pipelineId;
  }

  /**
   * Return true if this Stage object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Stage stage = (Stage) o;
    return Objects.equals(this.id, stage.id) &&
        Objects.equals(this.name, stage.name) &&
        Objects.equals(this.pipelineId, stage.pipelineId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, pipelineId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Stage {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
    
        private Stage instance;
    
        public Builder() {
          this(new Stage());
        }
    
        protected Builder(Stage instance) {
          this.instance = instance;
        }
    
        public Stage.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public Stage.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public Stage.Builder pipelineId(String pipelineId) {
              this.instance.pipelineId = pipelineId;
          return this;
        }
        
    
        /**
        * returns a built Stage instance.
        *
        * The builder is not reusable.
        */
        public Stage build() {
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
      public static Stage.Builder builder() {
        return new Stage.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Stage.Builder toBuilder() {
        return new Stage.Builder()
          .id(getId())
          .name(getName())
          .pipelineId(getPipelineId());
      }
}

