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
 * Represents a summary of a pipeline.
 */
@Schema(description = "Represents a summary of a pipeline.")
@JsonPropertyOrder({
  PipelineSummary.JSON_PROPERTY_ID,
  PipelineSummary.JSON_PROPERTY_PIPELINE_ID,
  PipelineSummary.JSON_PROPERTY_PIPELINE_NAME,
  PipelineSummary.JSON_PROPERTY_STAT_TOTAL_DEAL_COUNT,
  PipelineSummary.JSON_PROPERTY_STAT_NEW_DEAL_COUNT
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class PipelineSummary implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_PIPELINE_ID = "pipeline_id";
  @jakarta.annotation.Nullable  private String pipelineId;

  public static final String JSON_PROPERTY_PIPELINE_NAME = "pipeline_name";
  @jakarta.annotation.Nonnull  private String pipelineName;

  public static final String JSON_PROPERTY_STAT_TOTAL_DEAL_COUNT = "stat_total_deal_count";
  @jakarta.annotation.Nullable  private Integer statTotalDealCount;

  public static final String JSON_PROPERTY_STAT_NEW_DEAL_COUNT = "stat_new_deal_count";
  @jakarta.annotation.Nullable  private Integer statNewDealCount;

  public PipelineSummary() { 
  }

  public PipelineSummary id(@jakarta.annotation.Nullable String id) {
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


  public PipelineSummary pipelineId(@jakarta.annotation.Nullable String pipelineId) {
    this.pipelineId = pipelineId;
    return this;
  }

  /**
   * The ID of the pipeline. Can be null and must be a string of digits if present.
   * @return pipelineId
   */
  @jakarta.annotation.Nullable @Pattern(regexp="^\\d+$")  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The ID of the pipeline. Can be null and must be a string of digits if present.")
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


  public PipelineSummary pipelineName(@jakarta.annotation.Nonnull String pipelineName) {
    this.pipelineName = pipelineName;
    return this;
  }

  /**
   * The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters.
   * @return pipelineName
   */
  @jakarta.annotation.Nonnull  @NotNull
 @Size(min=1,max=255)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters.")
  @JsonProperty(JSON_PROPERTY_PIPELINE_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getPipelineName() {
    return pipelineName;
  }


  @JsonProperty(JSON_PROPERTY_PIPELINE_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPipelineName(@jakarta.annotation.Nonnull String pipelineName) {
    this.pipelineName = pipelineName;
  }


  public PipelineSummary statTotalDealCount(@jakarta.annotation.Nullable Integer statTotalDealCount) {
    this.statTotalDealCount = statTotalDealCount;
    return this;
  }

  /**
   * The total count of deals in the pipeline. Can be null.
   * @return statTotalDealCount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The total count of deals in the pipeline. Can be null.")
  @JsonProperty(JSON_PROPERTY_STAT_TOTAL_DEAL_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getStatTotalDealCount() {
    return statTotalDealCount;
  }


  @JsonProperty(JSON_PROPERTY_STAT_TOTAL_DEAL_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatTotalDealCount(@jakarta.annotation.Nullable Integer statTotalDealCount) {
    this.statTotalDealCount = statTotalDealCount;
  }


  public PipelineSummary statNewDealCount(@jakarta.annotation.Nullable Integer statNewDealCount) {
    this.statNewDealCount = statNewDealCount;
    return this;
  }

  /**
   * The count of new deals in the pipeline. Can be null.
   * @return statNewDealCount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The count of new deals in the pipeline. Can be null.")
  @JsonProperty(JSON_PROPERTY_STAT_NEW_DEAL_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getStatNewDealCount() {
    return statNewDealCount;
  }


  @JsonProperty(JSON_PROPERTY_STAT_NEW_DEAL_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatNewDealCount(@jakarta.annotation.Nullable Integer statNewDealCount) {
    this.statNewDealCount = statNewDealCount;
  }

  /**
   * Return true if this PipelineSummary object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PipelineSummary pipelineSummary = (PipelineSummary) o;
    return Objects.equals(this.id, pipelineSummary.id) &&
        Objects.equals(this.pipelineId, pipelineSummary.pipelineId) &&
        Objects.equals(this.pipelineName, pipelineSummary.pipelineName) &&
        Objects.equals(this.statTotalDealCount, pipelineSummary.statTotalDealCount) &&
        Objects.equals(this.statNewDealCount, pipelineSummary.statNewDealCount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, pipelineId, pipelineName, statTotalDealCount, statNewDealCount);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PipelineSummary {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    pipelineId: ").append(toIndentedString(pipelineId)).append("\n");
    sb.append("    pipelineName: ").append(toIndentedString(pipelineName)).append("\n");
    sb.append("    statTotalDealCount: ").append(toIndentedString(statTotalDealCount)).append("\n");
    sb.append("    statNewDealCount: ").append(toIndentedString(statNewDealCount)).append("\n");
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
    
        private PipelineSummary instance;
    
        public Builder() {
          this(new PipelineSummary());
        }
    
        protected Builder(PipelineSummary instance) {
          this.instance = instance;
        }
    
        public PipelineSummary.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public PipelineSummary.Builder pipelineId(String pipelineId) {
              this.instance.pipelineId = pipelineId;
          return this;
        }
            public PipelineSummary.Builder pipelineName(String pipelineName) {
              this.instance.pipelineName = pipelineName;
          return this;
        }
            public PipelineSummary.Builder statTotalDealCount(Integer statTotalDealCount) {
              this.instance.statTotalDealCount = statTotalDealCount;
          return this;
        }
            public PipelineSummary.Builder statNewDealCount(Integer statNewDealCount) {
              this.instance.statNewDealCount = statNewDealCount;
          return this;
        }
        
    
        /**
        * returns a built PipelineSummary instance.
        *
        * The builder is not reusable.
        */
        public PipelineSummary build() {
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
      public static PipelineSummary.Builder builder() {
        return new PipelineSummary.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PipelineSummary.Builder toBuilder() {
        return new PipelineSummary.Builder()
          .id(getId())
          .pipelineId(getPipelineId())
          .pipelineName(getPipelineName())
          .statTotalDealCount(getStatTotalDealCount())
          .statNewDealCount(getStatNewDealCount());
      }
}

