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
import com.keap.sdk.sdk.model.HistoricalCounts;
import com.keap.sdk.sdk.model.SequencePath;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Sequence
 */
@JsonPropertyOrder({
  Sequence.JSON_PROPERTY_ACTIVE_CONTACT_COUNT,
  Sequence.JSON_PROPERTY_ACTIVE_CONTACT_COUNT_COMPLETED,
  Sequence.JSON_PROPERTY_HISTORICAL_CONTACT_COUNT,
  Sequence.JSON_PROPERTY_ID,
  Sequence.JSON_PROPERTY_NAME,
  Sequence.JSON_PROPERTY_PATHS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class Sequence implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTIVE_CONTACT_COUNT = "active_contact_count";
  @jakarta.annotation.Nullable  private Integer activeContactCount;

  public static final String JSON_PROPERTY_ACTIVE_CONTACT_COUNT_COMPLETED = "active_contact_count_completed";
  @jakarta.annotation.Nullable  private Integer activeContactCountCompleted;

  public static final String JSON_PROPERTY_HISTORICAL_CONTACT_COUNT = "historical_contact_count";
  @jakarta.annotation.Nullable  private HistoricalCounts historicalContactCount;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PATHS = "paths";
  @jakarta.annotation.Nullable  private List<@Valid SequencePath> paths = new ArrayList<>();

  public Sequence() { 
  }

  public Sequence activeContactCount(@jakarta.annotation.Nullable Integer activeContactCount) {
    this.activeContactCount = activeContactCount;
    return this;
  }

  /**
   * Get activeContactCount
   * @return activeContactCount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ACTIVE_CONTACT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getActiveContactCount() {
    return activeContactCount;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE_CONTACT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActiveContactCount(@jakarta.annotation.Nullable Integer activeContactCount) {
    this.activeContactCount = activeContactCount;
  }


  public Sequence activeContactCountCompleted(@jakarta.annotation.Nullable Integer activeContactCountCompleted) {
    this.activeContactCountCompleted = activeContactCountCompleted;
    return this;
  }

  /**
   * Get activeContactCountCompleted
   * @return activeContactCountCompleted
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ACTIVE_CONTACT_COUNT_COMPLETED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getActiveContactCountCompleted() {
    return activeContactCountCompleted;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE_CONTACT_COUNT_COMPLETED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActiveContactCountCompleted(@jakarta.annotation.Nullable Integer activeContactCountCompleted) {
    this.activeContactCountCompleted = activeContactCountCompleted;
  }


  public Sequence historicalContactCount(@jakarta.annotation.Nullable HistoricalCounts historicalContactCount) {
    this.historicalContactCount = historicalContactCount;
    return this;
  }

  /**
   * Get historicalContactCount
   * @return historicalContactCount
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_HISTORICAL_CONTACT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public HistoricalCounts getHistoricalContactCount() {
    return historicalContactCount;
  }


  @JsonProperty(JSON_PROPERTY_HISTORICAL_CONTACT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHistoricalContactCount(@jakarta.annotation.Nullable HistoricalCounts historicalContactCount) {
    this.historicalContactCount = historicalContactCount;
  }


  public Sequence id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public Sequence name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public Sequence paths(@jakarta.annotation.Nullable List<@Valid SequencePath> paths) {
    this.paths = paths;
    return this;
  }

  public Sequence addPathsItem(SequencePath pathsItem) {
    if (this.paths == null) {
      this.paths = new ArrayList<>();
    }
    this.paths.add(pathsItem);
    return this;
  }

  /**
   * Get paths
   * @return paths
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PATHS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid SequencePath> getPaths() {
    return paths;
  }


  @JsonProperty(JSON_PROPERTY_PATHS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaths(@jakarta.annotation.Nullable List<@Valid SequencePath> paths) {
    this.paths = paths;
  }

  /**
   * Return true if this Sequence object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Sequence sequence = (Sequence) o;
    return Objects.equals(this.activeContactCount, sequence.activeContactCount) &&
        Objects.equals(this.activeContactCountCompleted, sequence.activeContactCountCompleted) &&
        Objects.equals(this.historicalContactCount, sequence.historicalContactCount) &&
        Objects.equals(this.id, sequence.id) &&
        Objects.equals(this.name, sequence.name) &&
        Objects.equals(this.paths, sequence.paths);
  }

  @Override
  public int hashCode() {
    return Objects.hash(activeContactCount, activeContactCountCompleted, historicalContactCount, id, name, paths);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Sequence {\n");
    sb.append("    activeContactCount: ").append(toIndentedString(activeContactCount)).append("\n");
    sb.append("    activeContactCountCompleted: ").append(toIndentedString(activeContactCountCompleted)).append("\n");
    sb.append("    historicalContactCount: ").append(toIndentedString(historicalContactCount)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    paths: ").append(toIndentedString(paths)).append("\n");
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
    
        private Sequence instance;
    
        public Builder() {
          this(new Sequence());
        }
    
        protected Builder(Sequence instance) {
          this.instance = instance;
        }
    
        public Sequence.Builder activeContactCount(Integer activeContactCount) {
              this.instance.activeContactCount = activeContactCount;
          return this;
        }
            public Sequence.Builder activeContactCountCompleted(Integer activeContactCountCompleted) {
              this.instance.activeContactCountCompleted = activeContactCountCompleted;
          return this;
        }
            public Sequence.Builder historicalContactCount(HistoricalCounts historicalContactCount) {
              this.instance.historicalContactCount = historicalContactCount;
          return this;
        }
            public Sequence.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public Sequence.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public Sequence.Builder paths(List<@Valid SequencePath> paths) {
              this.instance.paths = paths;
          return this;
        }
        
    
        /**
        * returns a built Sequence instance.
        *
        * The builder is not reusable.
        */
        public Sequence build() {
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
      public static Sequence.Builder builder() {
        return new Sequence.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Sequence.Builder toBuilder() {
        return new Sequence.Builder()
          .activeContactCount(getActiveContactCount())
          .activeContactCountCompleted(getActiveContactCountCompleted())
          .historicalContactCount(getHistoricalContactCount())
          .id(getId())
          .name(getName())
          .paths(getPaths());
      }
}

