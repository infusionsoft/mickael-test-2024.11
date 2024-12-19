/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
import com.keap.sdk.sdk.model.Pipeline;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Response for a list of pipelines.
 */
@Schema(description = "Response for a list of pipelines.")
@JsonPropertyOrder({
  PipelineListResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  PipelineListResponse.JSON_PROPERTY_PIPELINES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class PipelineListResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_PIPELINES = "pipelines";
  @jakarta.annotation.Nullable  private List<@Valid Pipeline> pipelines = new ArrayList<>();

  public PipelineListResponse() { 
  }

  public PipelineListResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Token for the next page of results.
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Token for the next page of results.")
  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextPageToken() {
    return nextPageToken;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
  }


  public PipelineListResponse pipelines(@jakarta.annotation.Nullable List<@Valid Pipeline> pipelines) {
    this.pipelines = pipelines;
    return this;
  }

  public PipelineListResponse addPipelinesItem(Pipeline pipelinesItem) {
    if (this.pipelines == null) {
      this.pipelines = new ArrayList<>();
    }
    this.pipelines.add(pipelinesItem);
    return this;
  }

  /**
   * The list of pipelines.
   * @return pipelines
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The list of pipelines.")
  @JsonProperty(JSON_PROPERTY_PIPELINES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Pipeline> getPipelines() {
    return pipelines;
  }


  @JsonProperty(JSON_PROPERTY_PIPELINES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPipelines(@jakarta.annotation.Nullable List<@Valid Pipeline> pipelines) {
    this.pipelines = pipelines;
  }

  /**
   * Return true if this PipelineListResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PipelineListResponse pipelineListResponse = (PipelineListResponse) o;
    return Objects.equals(this.nextPageToken, pipelineListResponse.nextPageToken) &&
        Objects.equals(this.pipelines, pipelineListResponse.pipelines);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, pipelines);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PipelineListResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    pipelines: ").append(toIndentedString(pipelines)).append("\n");
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
    
        private PipelineListResponse instance;
    
        public Builder() {
          this(new PipelineListResponse());
        }
    
        protected Builder(PipelineListResponse instance) {
          this.instance = instance;
        }
    
        public PipelineListResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public PipelineListResponse.Builder pipelines(List<@Valid Pipeline> pipelines) {
              this.instance.pipelines = pipelines;
          return this;
        }
        
    
        /**
        * returns a built PipelineListResponse instance.
        *
        * The builder is not reusable.
        */
        public PipelineListResponse build() {
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
      public static PipelineListResponse.Builder builder() {
        return new PipelineListResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PipelineListResponse.Builder toBuilder() {
        return new PipelineListResponse.Builder()
          .nextPageToken(getNextPageToken())
          .pipelines(getPipelines());
      }
}

