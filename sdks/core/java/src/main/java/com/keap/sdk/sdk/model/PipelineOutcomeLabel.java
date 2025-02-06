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
import com.keap.sdk.sdk.model.DealStatus;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Represents a label for a pipeline outcome.
 */
@Schema(description = "Represents a label for a pipeline outcome.")
@JsonPropertyOrder({
  PipelineOutcomeLabel.JSON_PROPERTY_VALUE,
  PipelineOutcomeLabel.JSON_PROPERTY_LABEL
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class PipelineOutcomeLabel implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_VALUE = "value";
  @jakarta.annotation.Nonnull  private DealStatus value;

  public static final String JSON_PROPERTY_LABEL = "label";
  @jakarta.annotation.Nullable  private String label;

  public PipelineOutcomeLabel() { 
  }

  public PipelineOutcomeLabel value(@jakarta.annotation.Nonnull DealStatus value) {
    this.value = value;
    return this;
  }

  /**
   * The status of the deal. This field is required.
   * @return value
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The status of the deal. This field is required.")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public DealStatus getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setValue(@jakarta.annotation.Nonnull DealStatus value) {
    this.value = value;
  }


  public PipelineOutcomeLabel label(@jakarta.annotation.Nullable String label) {
    this.label = label;
    return this;
  }

  /**
   * The label for the outcome. This field is optional but must have at least one character if provided.
   * @return label
   */
  @jakarta.annotation.Nullable @Size(min=1)  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The label for the outcome. This field is optional but must have at least one character if provided.")
  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLabel() {
    return label;
  }


  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLabel(@jakarta.annotation.Nullable String label) {
    this.label = label;
  }

  /**
   * Return true if this PipelineOutcomeLabel object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PipelineOutcomeLabel pipelineOutcomeLabel = (PipelineOutcomeLabel) o;
    return Objects.equals(this.value, pipelineOutcomeLabel.value) &&
        Objects.equals(this.label, pipelineOutcomeLabel.label);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, label);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PipelineOutcomeLabel {\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
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
    
        private PipelineOutcomeLabel instance;
    
        public Builder() {
          this(new PipelineOutcomeLabel());
        }
    
        protected Builder(PipelineOutcomeLabel instance) {
          this.instance = instance;
        }
    
        public PipelineOutcomeLabel.Builder value(DealStatus value) {
              this.instance.value = value;
          return this;
        }
            public PipelineOutcomeLabel.Builder label(String label) {
              this.instance.label = label;
          return this;
        }
        
    
        /**
        * returns a built PipelineOutcomeLabel instance.
        *
        * The builder is not reusable.
        */
        public PipelineOutcomeLabel build() {
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
      public static PipelineOutcomeLabel.Builder builder() {
        return new PipelineOutcomeLabel.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PipelineOutcomeLabel.Builder toBuilder() {
        return new PipelineOutcomeLabel.Builder()
          .value(getValue())
          .label(getLabel());
      }
}

