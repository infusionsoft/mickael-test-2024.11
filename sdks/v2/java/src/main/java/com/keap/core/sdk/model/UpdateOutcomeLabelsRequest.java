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
import com.keap.core.sdk.model.PipelineOutcomeLabel;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Represents a request to update outcome labels for a pipeline.
 */
@Schema(description = "Represents a request to update outcome labels for a pipeline.")
@JsonPropertyOrder({
  UpdateOutcomeLabelsRequest.JSON_PROPERTY_OUTCOME_LABELS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateOutcomeLabelsRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_OUTCOME_LABELS = "outcome_labels";
  @jakarta.annotation.Nonnull  private List<@Valid PipelineOutcomeLabel> outcomeLabels = new ArrayList<>();

  public UpdateOutcomeLabelsRequest() { 
  }

  public UpdateOutcomeLabelsRequest outcomeLabels(@jakarta.annotation.Nonnull List<@Valid PipelineOutcomeLabel> outcomeLabels) {
    this.outcomeLabels = outcomeLabels;
    return this;
  }

  public UpdateOutcomeLabelsRequest addOutcomeLabelsItem(PipelineOutcomeLabel outcomeLabelsItem) {
    if (this.outcomeLabels == null) {
      this.outcomeLabels = new ArrayList<>();
    }
    this.outcomeLabels.add(outcomeLabelsItem);
    return this;
  }

  /**
   * List of outcome labels to be updated.
   * @return outcomeLabels
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "List of outcome labels to be updated.")
  @JsonProperty(JSON_PROPERTY_OUTCOME_LABELS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public List<@Valid PipelineOutcomeLabel> getOutcomeLabels() {
    return outcomeLabels;
  }


  @JsonProperty(JSON_PROPERTY_OUTCOME_LABELS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOutcomeLabels(@jakarta.annotation.Nonnull List<@Valid PipelineOutcomeLabel> outcomeLabels) {
    this.outcomeLabels = outcomeLabels;
  }

  /**
   * Return true if this UpdateOutcomeLabelsRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateOutcomeLabelsRequest updateOutcomeLabelsRequest = (UpdateOutcomeLabelsRequest) o;
    return Objects.equals(this.outcomeLabels, updateOutcomeLabelsRequest.outcomeLabels);
  }

  @Override
  public int hashCode() {
    return Objects.hash(outcomeLabels);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateOutcomeLabelsRequest {\n");
    sb.append("    outcomeLabels: ").append(toIndentedString(outcomeLabels)).append("\n");
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
    
        private UpdateOutcomeLabelsRequest instance;
    
        public Builder() {
          this(new UpdateOutcomeLabelsRequest());
        }
    
        protected Builder(UpdateOutcomeLabelsRequest instance) {
          this.instance = instance;
        }
    
        public UpdateOutcomeLabelsRequest.Builder outcomeLabels(List<@Valid PipelineOutcomeLabel> outcomeLabels) {
              this.instance.outcomeLabels = outcomeLabels;
          return this;
        }
        
    
        /**
        * returns a built UpdateOutcomeLabelsRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateOutcomeLabelsRequest build() {
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
      public static UpdateOutcomeLabelsRequest.Builder builder() {
        return new UpdateOutcomeLabelsRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateOutcomeLabelsRequest.Builder toBuilder() {
        return new UpdateOutcomeLabelsRequest.Builder()
          .outcomeLabels(getOutcomeLabels());
      }
}

