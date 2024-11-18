/*
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Goal
 */
@JsonPropertyOrder({
  Goal.JSON_PROPERTY_HISTORICAL_CONTACT_COUNTS,
  Goal.JSON_PROPERTY_ID,
  Goal.JSON_PROPERTY_NAME,
  Goal.JSON_PROPERTY_NEXT_SEQUENCE_IDS,
  Goal.JSON_PROPERTY_PREVIOUS_SEQUENCE_IDS,
  Goal.JSON_PROPERTY_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.9.0")
public class Goal implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_HISTORICAL_CONTACT_COUNTS = "historical_contact_counts";
  private HistoricalCounts historicalContactCounts;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_NEXT_SEQUENCE_IDS = "next_sequence_ids";
  private List<String> nextSequenceIds = new ArrayList<>();

  public static final String JSON_PROPERTY_PREVIOUS_SEQUENCE_IDS = "previous_sequence_ids";
  private List<String> previousSequenceIds = new ArrayList<>();

  /**
   * Gets or Sets type
   */
  public enum TypeEnum {
    WEB_FORM("WebForm"),
    
    LANDING_PAGE("LandingPage"),
    
    SURVEY("Survey"),
    
    LINK_CLICK("LinkClick"),
    
    EMAIL_OPENED("EmailOpened"),
    
    SCORE("Score"),
    
    PURCHASE("Purchase"),
    
    FAILED_PURCHASE("FailedPurchase"),
    
    QUOTE("Quote"),
    
    WEBSITE_TRIGGER("WebsiteTrigger"),
    
    INTERNAL_FORM("InternalForm"),
    
    SMART_FORM("SmartForm"),
    
    APPOINTMENT_EVENT("AppointmentEvent"),
    
    TASK("Task"),
    
    STAGE_MOVE("StageMove"),
    
    NOTE("Note"),
    
    TAG("Tag"),
    
    PIPELINE_STAGE_MOVE("PipelineStageMove"),
    
    UNLAYER_LANDING_PAGE("UnlayerLandingPage"),
    
    GRO_SOCIAL("GroSocial"),
    
    TWITTER_FORM("TwitterForm"),
    
    API("API"),
    
    WORD_PRESS("WordPress"),
    
    NEW_LANDING_PAGE("NewLandingPage"),
    
    INTEGRATION_TRIGGER("IntegrationTrigger"),
    
    UNKNOWN_COULD_NOT_DESERIALIZE("unknown_default_open_api");

    private String value;

    TypeEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_TYPE = "type";
  private TypeEnum type;

  public Goal() { 
  }

  public Goal historicalContactCounts(HistoricalCounts historicalContactCounts) {
    this.historicalContactCounts = historicalContactCounts;
    return this;
  }

  /**
   * Get historicalContactCounts
   * @return historicalContactCounts
   */
  @jakarta.annotation.Nullable
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_HISTORICAL_CONTACT_COUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public HistoricalCounts getHistoricalContactCounts() {
    return historicalContactCounts;
  }


  @JsonProperty(JSON_PROPERTY_HISTORICAL_CONTACT_COUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHistoricalContactCounts(HistoricalCounts historicalContactCounts) {
    this.historicalContactCounts = historicalContactCounts;
  }


  public Goal id(String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(String id) {
    this.id = id;
  }


  public Goal name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public Goal nextSequenceIds(List<String> nextSequenceIds) {
    this.nextSequenceIds = nextSequenceIds;
    return this;
  }

  public Goal addNextSequenceIdsItem(String nextSequenceIdsItem) {
    if (this.nextSequenceIds == null) {
      this.nextSequenceIds = new ArrayList<>();
    }
    this.nextSequenceIds.add(nextSequenceIdsItem);
    return this;
  }

  /**
   * Get nextSequenceIds
   * @return nextSequenceIds
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_SEQUENCE_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getNextSequenceIds() {
    return nextSequenceIds;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_SEQUENCE_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextSequenceIds(List<String> nextSequenceIds) {
    this.nextSequenceIds = nextSequenceIds;
  }


  public Goal previousSequenceIds(List<String> previousSequenceIds) {
    this.previousSequenceIds = previousSequenceIds;
    return this;
  }

  public Goal addPreviousSequenceIdsItem(String previousSequenceIdsItem) {
    if (this.previousSequenceIds == null) {
      this.previousSequenceIds = new ArrayList<>();
    }
    this.previousSequenceIds.add(previousSequenceIdsItem);
    return this;
  }

  /**
   * Get previousSequenceIds
   * @return previousSequenceIds
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PREVIOUS_SEQUENCE_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getPreviousSequenceIds() {
    return previousSequenceIds;
  }


  @JsonProperty(JSON_PROPERTY_PREVIOUS_SEQUENCE_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPreviousSequenceIds(List<String> previousSequenceIds) {
    this.previousSequenceIds = previousSequenceIds;
  }


  public Goal type(TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public TypeEnum getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(TypeEnum type) {
    this.type = type;
  }

  /**
   * Return true if this Goal object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Goal goal = (Goal) o;
    return Objects.equals(this.historicalContactCounts, goal.historicalContactCounts) &&
        Objects.equals(this.id, goal.id) &&
        Objects.equals(this.name, goal.name) &&
        Objects.equals(this.nextSequenceIds, goal.nextSequenceIds) &&
        Objects.equals(this.previousSequenceIds, goal.previousSequenceIds) &&
        Objects.equals(this.type, goal.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(historicalContactCounts, id, name, nextSequenceIds, previousSequenceIds, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Goal {\n");
    sb.append("    historicalContactCounts: ").append(toIndentedString(historicalContactCounts)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    nextSequenceIds: ").append(toIndentedString(nextSequenceIds)).append("\n");
    sb.append("    previousSequenceIds: ").append(toIndentedString(previousSequenceIds)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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
    
        private Goal instance;
    
        public Builder() {
          this(new Goal());
        }
    
        protected Builder(Goal instance) {
          this.instance = instance;
        }
    
        public Goal.Builder historicalContactCounts(HistoricalCounts historicalContactCounts) {
              this.instance.historicalContactCounts = historicalContactCounts;
          return this;
        }
            public Goal.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public Goal.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public Goal.Builder nextSequenceIds(List<String> nextSequenceIds) {
              this.instance.nextSequenceIds = nextSequenceIds;
          return this;
        }
            public Goal.Builder previousSequenceIds(List<String> previousSequenceIds) {
              this.instance.previousSequenceIds = previousSequenceIds;
          return this;
        }
            public Goal.Builder type(TypeEnum type) {
              this.instance.type = type;
          return this;
        }
        
    
        /**
        * returns a built Goal instance.
        *
        * The builder is not reusable.
        */
        public Goal build() {
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
      public static Goal.Builder builder() {
        return new Goal.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Goal.Builder toBuilder() {
        return new Goal.Builder()
          .historicalContactCounts(getHistoricalContactCounts())
          .id(getId())
          .name(getName())
          .nextSequenceIds(getNextSequenceIds())
          .previousSequenceIds(getPreviousSequenceIds())
          .type(getType());
      }
}

