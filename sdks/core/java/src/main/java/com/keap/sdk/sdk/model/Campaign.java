/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
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
import com.keap.sdk.sdk.model.Goal;
import com.keap.sdk.sdk.model.Sequence;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Campaign
 */
@JsonPropertyOrder({
  Campaign.JSON_PROPERTY_ACTIVE_CONTACT_COUNT,
  Campaign.JSON_PROPERTY_COMPLETED_CONTACT_COUNT,
  Campaign.JSON_PROPERTY_CREATED_BY_GLOBAL_ID,
  Campaign.JSON_PROPERTY_DATE_CREATED,
  Campaign.JSON_PROPERTY_ERROR_MESSAGE,
  Campaign.JSON_PROPERTY_GOALS,
  Campaign.JSON_PROPERTY_ID,
  Campaign.JSON_PROPERTY_LOCKED,
  Campaign.JSON_PROPERTY_NAME,
  Campaign.JSON_PROPERTY_PUBLISHED_DATE,
  Campaign.JSON_PROPERTY_PUBLISHED_STATUS,
  Campaign.JSON_PROPERTY_PUBLISHED_TIME_ZONE,
  Campaign.JSON_PROPERTY_SEQUENCES,
  Campaign.JSON_PROPERTY_TIME_ZONE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class Campaign implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTIVE_CONTACT_COUNT = "active_contact_count";
  @jakarta.annotation.Nullable  private Integer activeContactCount;

  public static final String JSON_PROPERTY_COMPLETED_CONTACT_COUNT = "completed_contact_count";
  @jakarta.annotation.Nullable  private Integer completedContactCount;

  public static final String JSON_PROPERTY_CREATED_BY_GLOBAL_ID = "created_by_global_id";
  @jakarta.annotation.Nullable  private String createdByGlobalId;

  public static final String JSON_PROPERTY_DATE_CREATED = "date_created";
  @jakarta.annotation.Nullable  private String dateCreated;

  public static final String JSON_PROPERTY_ERROR_MESSAGE = "error_message";
  @jakarta.annotation.Nullable  private String errorMessage;

  public static final String JSON_PROPERTY_GOALS = "goals";
  @jakarta.annotation.Nullable  private List<@Valid Goal> goals = new ArrayList<>();

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_LOCKED = "locked";
  @jakarta.annotation.Nullable  private Boolean locked;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PUBLISHED_DATE = "published_date";
  @jakarta.annotation.Nullable  private ZonedDateTime publishedDate;

  public static final String JSON_PROPERTY_PUBLISHED_STATUS = "published_status";
  @jakarta.annotation.Nullable  private Boolean publishedStatus;

  public static final String JSON_PROPERTY_PUBLISHED_TIME_ZONE = "published_time_zone";
  @jakarta.annotation.Nullable  private String publishedTimeZone;

  public static final String JSON_PROPERTY_SEQUENCES = "sequences";
  @jakarta.annotation.Nullable  private List<@Valid Sequence> sequences = new ArrayList<>();

  public static final String JSON_PROPERTY_TIME_ZONE = "time_zone";
  @jakarta.annotation.Nullable  private String timeZone;

  public Campaign() { 
  }

  public Campaign activeContactCount(@jakarta.annotation.Nullable Integer activeContactCount) {
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


  public Campaign completedContactCount(@jakarta.annotation.Nullable Integer completedContactCount) {
    this.completedContactCount = completedContactCount;
    return this;
  }

  /**
   * Get completedContactCount
   * @return completedContactCount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMPLETED_CONTACT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getCompletedContactCount() {
    return completedContactCount;
  }


  @JsonProperty(JSON_PROPERTY_COMPLETED_CONTACT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompletedContactCount(@jakarta.annotation.Nullable Integer completedContactCount) {
    this.completedContactCount = completedContactCount;
  }


  public Campaign createdByGlobalId(@jakarta.annotation.Nullable String createdByGlobalId) {
    this.createdByGlobalId = createdByGlobalId;
    return this;
  }

  /**
   * Get createdByGlobalId
   * @return createdByGlobalId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CREATED_BY_GLOBAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreatedByGlobalId() {
    return createdByGlobalId;
  }


  @JsonProperty(JSON_PROPERTY_CREATED_BY_GLOBAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreatedByGlobalId(@jakarta.annotation.Nullable String createdByGlobalId) {
    this.createdByGlobalId = createdByGlobalId;
  }


  public Campaign dateCreated(@jakarta.annotation.Nullable String dateCreated) {
    this.dateCreated = dateCreated;
    return this;
  }

  /**
   * Get dateCreated
   * @return dateCreated
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DATE_CREATED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDateCreated() {
    return dateCreated;
  }


  @JsonProperty(JSON_PROPERTY_DATE_CREATED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDateCreated(@jakarta.annotation.Nullable String dateCreated) {
    this.dateCreated = dateCreated;
  }


  public Campaign errorMessage(@jakarta.annotation.Nullable String errorMessage) {
    this.errorMessage = errorMessage;
    return this;
  }

  /**
   * Get errorMessage
   * @return errorMessage
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ERROR_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getErrorMessage() {
    return errorMessage;
  }


  @JsonProperty(JSON_PROPERTY_ERROR_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setErrorMessage(@jakarta.annotation.Nullable String errorMessage) {
    this.errorMessage = errorMessage;
  }


  public Campaign goals(@jakarta.annotation.Nullable List<@Valid Goal> goals) {
    this.goals = goals;
    return this;
  }

  public Campaign addGoalsItem(Goal goalsItem) {
    if (this.goals == null) {
      this.goals = new ArrayList<>();
    }
    this.goals.add(goalsItem);
    return this;
  }

  /**
   * Get goals
   * @return goals
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_GOALS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Goal> getGoals() {
    return goals;
  }


  @JsonProperty(JSON_PROPERTY_GOALS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGoals(@jakarta.annotation.Nullable List<@Valid Goal> goals) {
    this.goals = goals;
  }


  public Campaign id(@jakarta.annotation.Nullable String id) {
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


  public Campaign locked(@jakarta.annotation.Nullable Boolean locked) {
    this.locked = locked;
    return this;
  }

  /**
   * Get locked
   * @return locked
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LOCKED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getLocked() {
    return locked;
  }


  @JsonProperty(JSON_PROPERTY_LOCKED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLocked(@jakarta.annotation.Nullable Boolean locked) {
    this.locked = locked;
  }


  public Campaign name(@jakarta.annotation.Nullable String name) {
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


  public Campaign publishedDate(@jakarta.annotation.Nullable ZonedDateTime publishedDate) {
    this.publishedDate = publishedDate;
    return this;
  }

  /**
   * Get publishedDate
   * @return publishedDate
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PUBLISHED_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ZonedDateTime getPublishedDate() {
    return publishedDate;
  }


  @JsonProperty(JSON_PROPERTY_PUBLISHED_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPublishedDate(@jakarta.annotation.Nullable ZonedDateTime publishedDate) {
    this.publishedDate = publishedDate;
  }


  public Campaign publishedStatus(@jakarta.annotation.Nullable Boolean publishedStatus) {
    this.publishedStatus = publishedStatus;
    return this;
  }

  /**
   * Get publishedStatus
   * @return publishedStatus
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PUBLISHED_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getPublishedStatus() {
    return publishedStatus;
  }


  @JsonProperty(JSON_PROPERTY_PUBLISHED_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPublishedStatus(@jakarta.annotation.Nullable Boolean publishedStatus) {
    this.publishedStatus = publishedStatus;
  }


  public Campaign publishedTimeZone(@jakarta.annotation.Nullable String publishedTimeZone) {
    this.publishedTimeZone = publishedTimeZone;
    return this;
  }

  /**
   * Get publishedTimeZone
   * @return publishedTimeZone
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PUBLISHED_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPublishedTimeZone() {
    return publishedTimeZone;
  }


  @JsonProperty(JSON_PROPERTY_PUBLISHED_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPublishedTimeZone(@jakarta.annotation.Nullable String publishedTimeZone) {
    this.publishedTimeZone = publishedTimeZone;
  }


  public Campaign sequences(@jakarta.annotation.Nullable List<@Valid Sequence> sequences) {
    this.sequences = sequences;
    return this;
  }

  public Campaign addSequencesItem(Sequence sequencesItem) {
    if (this.sequences == null) {
      this.sequences = new ArrayList<>();
    }
    this.sequences.add(sequencesItem);
    return this;
  }

  /**
   * Get sequences
   * @return sequences
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SEQUENCES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Sequence> getSequences() {
    return sequences;
  }


  @JsonProperty(JSON_PROPERTY_SEQUENCES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSequences(@jakarta.annotation.Nullable List<@Valid Sequence> sequences) {
    this.sequences = sequences;
  }


  public Campaign timeZone(@jakarta.annotation.Nullable String timeZone) {
    this.timeZone = timeZone;
    return this;
  }

  /**
   * Get timeZone
   * @return timeZone
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTimeZone() {
    return timeZone;
  }


  @JsonProperty(JSON_PROPERTY_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTimeZone(@jakarta.annotation.Nullable String timeZone) {
    this.timeZone = timeZone;
  }

  /**
   * Return true if this Campaign object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Campaign campaign = (Campaign) o;
    return Objects.equals(this.activeContactCount, campaign.activeContactCount) &&
        Objects.equals(this.completedContactCount, campaign.completedContactCount) &&
        Objects.equals(this.createdByGlobalId, campaign.createdByGlobalId) &&
        Objects.equals(this.dateCreated, campaign.dateCreated) &&
        Objects.equals(this.errorMessage, campaign.errorMessage) &&
        Objects.equals(this.goals, campaign.goals) &&
        Objects.equals(this.id, campaign.id) &&
        Objects.equals(this.locked, campaign.locked) &&
        Objects.equals(this.name, campaign.name) &&
        Objects.equals(this.publishedDate, campaign.publishedDate) &&
        Objects.equals(this.publishedStatus, campaign.publishedStatus) &&
        Objects.equals(this.publishedTimeZone, campaign.publishedTimeZone) &&
        Objects.equals(this.sequences, campaign.sequences) &&
        Objects.equals(this.timeZone, campaign.timeZone);
  }

  @Override
  public int hashCode() {
    return Objects.hash(activeContactCount, completedContactCount, createdByGlobalId, dateCreated, errorMessage, goals, id, locked, name, publishedDate, publishedStatus, publishedTimeZone, sequences, timeZone);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Campaign {\n");
    sb.append("    activeContactCount: ").append(toIndentedString(activeContactCount)).append("\n");
    sb.append("    completedContactCount: ").append(toIndentedString(completedContactCount)).append("\n");
    sb.append("    createdByGlobalId: ").append(toIndentedString(createdByGlobalId)).append("\n");
    sb.append("    dateCreated: ").append(toIndentedString(dateCreated)).append("\n");
    sb.append("    errorMessage: ").append(toIndentedString(errorMessage)).append("\n");
    sb.append("    goals: ").append(toIndentedString(goals)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    locked: ").append(toIndentedString(locked)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    publishedDate: ").append(toIndentedString(publishedDate)).append("\n");
    sb.append("    publishedStatus: ").append(toIndentedString(publishedStatus)).append("\n");
    sb.append("    publishedTimeZone: ").append(toIndentedString(publishedTimeZone)).append("\n");
    sb.append("    sequences: ").append(toIndentedString(sequences)).append("\n");
    sb.append("    timeZone: ").append(toIndentedString(timeZone)).append("\n");
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
    
        private Campaign instance;
    
        public Builder() {
          this(new Campaign());
        }
    
        protected Builder(Campaign instance) {
          this.instance = instance;
        }
    
        public Campaign.Builder activeContactCount(Integer activeContactCount) {
              this.instance.activeContactCount = activeContactCount;
          return this;
        }
            public Campaign.Builder completedContactCount(Integer completedContactCount) {
              this.instance.completedContactCount = completedContactCount;
          return this;
        }
            public Campaign.Builder createdByGlobalId(String createdByGlobalId) {
              this.instance.createdByGlobalId = createdByGlobalId;
          return this;
        }
            public Campaign.Builder dateCreated(String dateCreated) {
              this.instance.dateCreated = dateCreated;
          return this;
        }
            public Campaign.Builder errorMessage(String errorMessage) {
              this.instance.errorMessage = errorMessage;
          return this;
        }
            public Campaign.Builder goals(List<@Valid Goal> goals) {
              this.instance.goals = goals;
          return this;
        }
            public Campaign.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public Campaign.Builder locked(Boolean locked) {
              this.instance.locked = locked;
          return this;
        }
            public Campaign.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public Campaign.Builder publishedDate(ZonedDateTime publishedDate) {
              this.instance.publishedDate = publishedDate;
          return this;
        }
            public Campaign.Builder publishedStatus(Boolean publishedStatus) {
              this.instance.publishedStatus = publishedStatus;
          return this;
        }
            public Campaign.Builder publishedTimeZone(String publishedTimeZone) {
              this.instance.publishedTimeZone = publishedTimeZone;
          return this;
        }
            public Campaign.Builder sequences(List<@Valid Sequence> sequences) {
              this.instance.sequences = sequences;
          return this;
        }
            public Campaign.Builder timeZone(String timeZone) {
              this.instance.timeZone = timeZone;
          return this;
        }
        
    
        /**
        * returns a built Campaign instance.
        *
        * The builder is not reusable.
        */
        public Campaign build() {
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
      public static Campaign.Builder builder() {
        return new Campaign.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Campaign.Builder toBuilder() {
        return new Campaign.Builder()
          .activeContactCount(getActiveContactCount())
          .completedContactCount(getCompletedContactCount())
          .createdByGlobalId(getCreatedByGlobalId())
          .dateCreated(getDateCreated())
          .errorMessage(getErrorMessage())
          .goals(getGoals())
          .id(getId())
          .locked(getLocked())
          .name(getName())
          .publishedDate(getPublishedDate())
          .publishedStatus(getPublishedStatus())
          .publishedTimeZone(getPublishedTimeZone())
          .sequences(getSequences())
          .timeZone(getTimeZone());
      }
}

