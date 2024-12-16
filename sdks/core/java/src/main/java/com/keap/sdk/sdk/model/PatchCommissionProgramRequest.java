/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
 * PatchCommissionProgramRequest
 */
@JsonPropertyOrder({
  PatchCommissionProgramRequest.JSON_PROPERTY_NAME,
  PatchCommissionProgramRequest.JSON_PROPERTY_NOTES,
  PatchCommissionProgramRequest.JSON_PROPERTY_PRIORITY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class PatchCommissionProgramRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nonnull  private String name;

  public static final String JSON_PROPERTY_NOTES = "notes";
  @jakarta.annotation.Nullable  private String notes;

  public static final String JSON_PROPERTY_PRIORITY = "priority";
  @jakarta.annotation.Nullable  private Integer priority;

  public PatchCommissionProgramRequest() { 
  }

  public PatchCommissionProgramRequest name(@jakarta.annotation.Nonnull String name) {
    this.name = name;
    return this;
  }

  /**
   * The name of the Commission Program
   * @return name
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "Fitness program", requiredMode = Schema.RequiredMode.REQUIRED, description = "The name of the Commission Program")
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


  public PatchCommissionProgramRequest notes(@jakarta.annotation.Nullable String notes) {
    this.notes = notes;
    return this;
  }

  /**
   * The notes of the Commission Program
   * @return notes
   */
  @jakarta.annotation.Nullable  @Schema(example = "20% default commission", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The notes of the Commission Program")
  @JsonProperty(JSON_PROPERTY_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNotes() {
    return notes;
  }


  @JsonProperty(JSON_PROPERTY_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNotes(@jakarta.annotation.Nullable String notes) {
    this.notes = notes;
  }


  public PatchCommissionProgramRequest priority(@jakarta.annotation.Nullable Integer priority) {
    this.priority = priority;
    return this;
  }

  /**
   * The priority of the Commission Program
   * @return priority
   */
  @jakarta.annotation.Nullable  @Schema(example = "100", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The priority of the Commission Program")
  @JsonProperty(JSON_PROPERTY_PRIORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getPriority() {
    return priority;
  }


  @JsonProperty(JSON_PROPERTY_PRIORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriority(@jakarta.annotation.Nullable Integer priority) {
    this.priority = priority;
  }

  /**
   * Return true if this PatchCommissionProgramRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PatchCommissionProgramRequest patchCommissionProgramRequest = (PatchCommissionProgramRequest) o;
    return Objects.equals(this.name, patchCommissionProgramRequest.name) &&
        Objects.equals(this.notes, patchCommissionProgramRequest.notes) &&
        Objects.equals(this.priority, patchCommissionProgramRequest.priority);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, notes, priority);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PatchCommissionProgramRequest {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
    sb.append("    priority: ").append(toIndentedString(priority)).append("\n");
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
    
        private PatchCommissionProgramRequest instance;
    
        public Builder() {
          this(new PatchCommissionProgramRequest());
        }
    
        protected Builder(PatchCommissionProgramRequest instance) {
          this.instance = instance;
        }
    
        public PatchCommissionProgramRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public PatchCommissionProgramRequest.Builder notes(String notes) {
              this.instance.notes = notes;
          return this;
        }
            public PatchCommissionProgramRequest.Builder priority(Integer priority) {
              this.instance.priority = priority;
          return this;
        }
        
    
        /**
        * returns a built PatchCommissionProgramRequest instance.
        *
        * The builder is not reusable.
        */
        public PatchCommissionProgramRequest build() {
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
      public static PatchCommissionProgramRequest.Builder builder() {
        return new PatchCommissionProgramRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PatchCommissionProgramRequest.Builder toBuilder() {
        return new PatchCommissionProgramRequest.Builder()
          .name(getName())
          .notes(getNotes())
          .priority(getPriority());
      }
}

