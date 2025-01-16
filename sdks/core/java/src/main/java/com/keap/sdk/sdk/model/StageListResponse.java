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
 * Response for a list of stages.
 */
@Schema(description = "Response for a list of stages.")
@JsonPropertyOrder({
  StageListResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  StageListResponse.JSON_PROPERTY_STAGES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class StageListResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_STAGES = "stages";
  @jakarta.annotation.Nullable  private List<@Valid Stage> stages = new ArrayList<>();

  public StageListResponse() { 
  }

  public StageListResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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


  public StageListResponse stages(@jakarta.annotation.Nullable List<@Valid Stage> stages) {
    this.stages = stages;
    return this;
  }

  public StageListResponse addStagesItem(Stage stagesItem) {
    if (this.stages == null) {
      this.stages = new ArrayList<>();
    }
    this.stages.add(stagesItem);
    return this;
  }

  /**
   * The list of stages.
   * @return stages
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The list of stages.")
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
   * Return true if this StageListResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StageListResponse stageListResponse = (StageListResponse) o;
    return Objects.equals(this.nextPageToken, stageListResponse.nextPageToken) &&
        Objects.equals(this.stages, stageListResponse.stages);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, stages);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StageListResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
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
    
        private StageListResponse instance;
    
        public Builder() {
          this(new StageListResponse());
        }
    
        protected Builder(StageListResponse instance) {
          this.instance = instance;
        }
    
        public StageListResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public StageListResponse.Builder stages(List<@Valid Stage> stages) {
              this.instance.stages = stages;
          return this;
        }
        
    
        /**
        * returns a built StageListResponse instance.
        *
        * The builder is not reusable.
        */
        public StageListResponse build() {
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
      public static StageListResponse.Builder builder() {
        return new StageListResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public StageListResponse.Builder toBuilder() {
        return new StageListResponse.Builder()
          .nextPageToken(getNextPageToken())
          .stages(getStages());
      }
}

