/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
 * CreateUpdateTaskRequest
 */
@JsonPropertyOrder({
  CreateUpdateTaskRequest.JSON_PROPERTY_ASSIGNED_TO_USER_ID,
  CreateUpdateTaskRequest.JSON_PROPERTY_COMPLETED,
  CreateUpdateTaskRequest.JSON_PROPERTY_COMPLETION_TIME,
  CreateUpdateTaskRequest.JSON_PROPERTY_CONTACT_ID,
  CreateUpdateTaskRequest.JSON_PROPERTY_DESCRIPTION,
  CreateUpdateTaskRequest.JSON_PROPERTY_DUE_TIME,
  CreateUpdateTaskRequest.JSON_PROPERTY_PRIORITY,
  CreateUpdateTaskRequest.JSON_PROPERTY_REMIND_TIME_MINS,
  CreateUpdateTaskRequest.JSON_PROPERTY_TITLE,
  CreateUpdateTaskRequest.JSON_PROPERTY_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateUpdateTaskRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ASSIGNED_TO_USER_ID = "assigned_to_user_id";
  @jakarta.annotation.Nullable  private String assignedToUserId;

  public static final String JSON_PROPERTY_COMPLETED = "completed";
  @jakarta.annotation.Nullable  private Boolean completed;

  public static final String JSON_PROPERTY_COMPLETION_TIME = "completion_time";
  @jakarta.annotation.Nullable  private String completionTime;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_DUE_TIME = "due_time";
  @jakarta.annotation.Nullable  private String dueTime;

  /**
   * Gets or Sets priority
   */
  public enum PriorityEnum {
    CRITICAL(String.valueOf("CRITICAL")),
    
    ESSENTIAL(String.valueOf("ESSENTIAL")),
    
    NONESSENTIAL(String.valueOf("NONESSENTIAL")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    PriorityEnum(String value) {
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
    public static PriorityEnum fromValue(String value) {
      for (PriorityEnum b : PriorityEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_PRIORITY = "priority";
  @jakarta.annotation.Nullable  private PriorityEnum priority;

  public static final String JSON_PROPERTY_REMIND_TIME_MINS = "remind_time_mins";
  @jakarta.annotation.Nullable  private Integer remindTimeMins;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  /**
   * Gets or Sets type
   */
  public enum TypeEnum {
    EMAIL(String.valueOf("EMAIL")),
    
    CALL(String.valueOf("CALL")),
    
    APPOINTMENT(String.valueOf("APPOINTMENT")),
    
    FAX(String.valueOf("FAX")),
    
    LETTER(String.valueOf("LETTER")),
    
    OTHER(String.valueOf("OTHER")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

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
  @jakarta.annotation.Nullable  private TypeEnum type;

  public CreateUpdateTaskRequest() { 
  }

  public CreateUpdateTaskRequest assignedToUserId(@jakarta.annotation.Nullable String assignedToUserId) {
    this.assignedToUserId = assignedToUserId;
    return this;
  }

  /**
   * Get assignedToUserId
   * @return assignedToUserId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ASSIGNED_TO_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getAssignedToUserId() {
    return assignedToUserId;
  }


  @JsonProperty(JSON_PROPERTY_ASSIGNED_TO_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAssignedToUserId(@jakarta.annotation.Nullable String assignedToUserId) {
    this.assignedToUserId = assignedToUserId;
  }


  public CreateUpdateTaskRequest completed(@jakarta.annotation.Nullable Boolean completed) {
    this.completed = completed;
    return this;
  }

  /**
   * Get completed
   * @return completed
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMPLETED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getCompleted() {
    return completed;
  }


  @JsonProperty(JSON_PROPERTY_COMPLETED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompleted(@jakarta.annotation.Nullable Boolean completed) {
    this.completed = completed;
  }


  public CreateUpdateTaskRequest completionTime(@jakarta.annotation.Nullable String completionTime) {
    this.completionTime = completionTime;
    return this;
  }

  /**
   * Get completionTime
   * @return completionTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMPLETION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCompletionTime() {
    return completionTime;
  }


  @JsonProperty(JSON_PROPERTY_COMPLETION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompletionTime(@jakarta.annotation.Nullable String completionTime) {
    this.completionTime = completionTime;
  }


  public CreateUpdateTaskRequest contactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * Get contactId
   * @return contactId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContactId() {
    return contactId;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
  }


  public CreateUpdateTaskRequest description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(@jakarta.annotation.Nullable String description) {
    this.description = description;
  }


  public CreateUpdateTaskRequest dueTime(@jakarta.annotation.Nullable String dueTime) {
    this.dueTime = dueTime;
    return this;
  }

  /**
   * Get dueTime
   * @return dueTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DUE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDueTime() {
    return dueTime;
  }


  @JsonProperty(JSON_PROPERTY_DUE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDueTime(@jakarta.annotation.Nullable String dueTime) {
    this.dueTime = dueTime;
  }


  public CreateUpdateTaskRequest priority(@jakarta.annotation.Nullable PriorityEnum priority) {
    this.priority = priority;
    return this;
  }

  /**
   * Get priority
   * @return priority
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRIORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public PriorityEnum getPriority() {
    return priority;
  }


  @JsonProperty(JSON_PROPERTY_PRIORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriority(@jakarta.annotation.Nullable PriorityEnum priority) {
    this.priority = priority;
  }


  public CreateUpdateTaskRequest remindTimeMins(@jakarta.annotation.Nullable Integer remindTimeMins) {
    this.remindTimeMins = remindTimeMins;
    return this;
  }

  /**
   * Value in minutes before start_date to show pop-up reminder.  Acceptable values are [5,10,15,30,60,120,240,480,1440,2880]
   * @return remindTimeMins
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Value in minutes before start_date to show pop-up reminder.  Acceptable values are [5,10,15,30,60,120,240,480,1440,2880]")
  @JsonProperty(JSON_PROPERTY_REMIND_TIME_MINS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getRemindTimeMins() {
    return remindTimeMins;
  }


  @JsonProperty(JSON_PROPERTY_REMIND_TIME_MINS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRemindTimeMins(@jakarta.annotation.Nullable Integer remindTimeMins) {
    this.remindTimeMins = remindTimeMins;
  }


  public CreateUpdateTaskRequest title(@jakarta.annotation.Nullable String title) {
    this.title = title;
    return this;
  }

  /**
   * Get title
   * @return title
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTitle() {
    return title;
  }


  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTitle(@jakarta.annotation.Nullable String title) {
    this.title = title;
  }


  public CreateUpdateTaskRequest type(@jakarta.annotation.Nullable TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public TypeEnum getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(@jakarta.annotation.Nullable TypeEnum type) {
    this.type = type;
  }

  /**
   * Return true if this CreateUpdateTaskRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateUpdateTaskRequest createUpdateTaskRequest = (CreateUpdateTaskRequest) o;
    return Objects.equals(this.assignedToUserId, createUpdateTaskRequest.assignedToUserId) &&
        Objects.equals(this.completed, createUpdateTaskRequest.completed) &&
        Objects.equals(this.completionTime, createUpdateTaskRequest.completionTime) &&
        Objects.equals(this.contactId, createUpdateTaskRequest.contactId) &&
        Objects.equals(this.description, createUpdateTaskRequest.description) &&
        Objects.equals(this.dueTime, createUpdateTaskRequest.dueTime) &&
        Objects.equals(this.priority, createUpdateTaskRequest.priority) &&
        Objects.equals(this.remindTimeMins, createUpdateTaskRequest.remindTimeMins) &&
        Objects.equals(this.title, createUpdateTaskRequest.title) &&
        Objects.equals(this.type, createUpdateTaskRequest.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assignedToUserId, completed, completionTime, contactId, description, dueTime, priority, remindTimeMins, title, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateUpdateTaskRequest {\n");
    sb.append("    assignedToUserId: ").append(toIndentedString(assignedToUserId)).append("\n");
    sb.append("    completed: ").append(toIndentedString(completed)).append("\n");
    sb.append("    completionTime: ").append(toIndentedString(completionTime)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    dueTime: ").append(toIndentedString(dueTime)).append("\n");
    sb.append("    priority: ").append(toIndentedString(priority)).append("\n");
    sb.append("    remindTimeMins: ").append(toIndentedString(remindTimeMins)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
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
    
        private CreateUpdateTaskRequest instance;
    
        public Builder() {
          this(new CreateUpdateTaskRequest());
        }
    
        protected Builder(CreateUpdateTaskRequest instance) {
          this.instance = instance;
        }
    
        public CreateUpdateTaskRequest.Builder assignedToUserId(String assignedToUserId) {
              this.instance.assignedToUserId = assignedToUserId;
          return this;
        }
            public CreateUpdateTaskRequest.Builder completed(Boolean completed) {
              this.instance.completed = completed;
          return this;
        }
            public CreateUpdateTaskRequest.Builder completionTime(String completionTime) {
              this.instance.completionTime = completionTime;
          return this;
        }
            public CreateUpdateTaskRequest.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public CreateUpdateTaskRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CreateUpdateTaskRequest.Builder dueTime(String dueTime) {
              this.instance.dueTime = dueTime;
          return this;
        }
            public CreateUpdateTaskRequest.Builder priority(PriorityEnum priority) {
              this.instance.priority = priority;
          return this;
        }
            public CreateUpdateTaskRequest.Builder remindTimeMins(Integer remindTimeMins) {
              this.instance.remindTimeMins = remindTimeMins;
          return this;
        }
            public CreateUpdateTaskRequest.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
            public CreateUpdateTaskRequest.Builder type(TypeEnum type) {
              this.instance.type = type;
          return this;
        }
        
    
        /**
        * returns a built CreateUpdateTaskRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateUpdateTaskRequest build() {
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
      public static CreateUpdateTaskRequest.Builder builder() {
        return new CreateUpdateTaskRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateUpdateTaskRequest.Builder toBuilder() {
        return new CreateUpdateTaskRequest.Builder()
          .assignedToUserId(getAssignedToUserId())
          .completed(getCompleted())
          .completionTime(getCompletionTime())
          .contactId(getContactId())
          .description(getDescription())
          .dueTime(getDueTime())
          .priority(getPriority())
          .remindTimeMins(getRemindTimeMins())
          .title(getTitle())
          .type(getType());
      }
}

