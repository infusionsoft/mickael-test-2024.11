/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
 * UpdateTaskResponse
 */
@JsonPropertyOrder({
  UpdateTaskResponse.JSON_PROPERTY_ASSIGNED_TO_USER_ID,
  UpdateTaskResponse.JSON_PROPERTY_COMPLETED,
  UpdateTaskResponse.JSON_PROPERTY_COMPLETION_TIME,
  UpdateTaskResponse.JSON_PROPERTY_CONTACT_ID,
  UpdateTaskResponse.JSON_PROPERTY_CREATE_TIME,
  UpdateTaskResponse.JSON_PROPERTY_CREATED_BY_USER_ID,
  UpdateTaskResponse.JSON_PROPERTY_DESCRIPTION,
  UpdateTaskResponse.JSON_PROPERTY_DUE_TIME,
  UpdateTaskResponse.JSON_PROPERTY_ID,
  UpdateTaskResponse.JSON_PROPERTY_MODIFICATION_TIME,
  UpdateTaskResponse.JSON_PROPERTY_PRIORITY,
  UpdateTaskResponse.JSON_PROPERTY_REMIND_TIME_MINS,
  UpdateTaskResponse.JSON_PROPERTY_TITLE,
  UpdateTaskResponse.JSON_PROPERTY_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateTaskResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ASSIGNED_TO_USER_ID = "assigned_to_user_id";
  @jakarta.annotation.Nullable  private String assignedToUserId;

  public static final String JSON_PROPERTY_COMPLETED = "completed";
  @jakarta.annotation.Nullable  private Boolean completed;

  public static final String JSON_PROPERTY_COMPLETION_TIME = "completion_time";
  @jakarta.annotation.Nullable  private String completionTime;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_CREATE_TIME = "create_time";
  @jakarta.annotation.Nullable  private String createTime;

  public static final String JSON_PROPERTY_CREATED_BY_USER_ID = "created_by_user_id";
  @jakarta.annotation.Nullable  private String createdByUserId;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_DUE_TIME = "due_time";
  @jakarta.annotation.Nullable  private String dueTime;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_MODIFICATION_TIME = "modification_time";
  @jakarta.annotation.Nullable  private String modificationTime;

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

  public UpdateTaskResponse() { 
  }

  public UpdateTaskResponse assignedToUserId(@jakarta.annotation.Nullable String assignedToUserId) {
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


  public UpdateTaskResponse completed(@jakarta.annotation.Nullable Boolean completed) {
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


  public UpdateTaskResponse completionTime(@jakarta.annotation.Nullable String completionTime) {
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


  public UpdateTaskResponse contactId(@jakarta.annotation.Nullable String contactId) {
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


  public UpdateTaskResponse createTime(@jakarta.annotation.Nullable String createTime) {
    this.createTime = createTime;
    return this;
  }

  /**
   * On initial object the returned value for this property may not accurately represent the exact stored value.
   * @return createTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "On initial object the returned value for this property may not accurately represent the exact stored value.")
  @JsonProperty(JSON_PROPERTY_CREATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreateTime() {
    return createTime;
  }


  @JsonProperty(JSON_PROPERTY_CREATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreateTime(@jakarta.annotation.Nullable String createTime) {
    this.createTime = createTime;
  }


  public UpdateTaskResponse createdByUserId(@jakarta.annotation.Nullable String createdByUserId) {
    this.createdByUserId = createdByUserId;
    return this;
  }

  /**
   * Get createdByUserId
   * @return createdByUserId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CREATED_BY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreatedByUserId() {
    return createdByUserId;
  }


  @JsonProperty(JSON_PROPERTY_CREATED_BY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreatedByUserId(@jakarta.annotation.Nullable String createdByUserId) {
    this.createdByUserId = createdByUserId;
  }


  public UpdateTaskResponse description(@jakarta.annotation.Nullable String description) {
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


  public UpdateTaskResponse dueTime(@jakarta.annotation.Nullable String dueTime) {
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


  public UpdateTaskResponse id(@jakarta.annotation.Nullable String id) {
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


  public UpdateTaskResponse modificationTime(@jakarta.annotation.Nullable String modificationTime) {
    this.modificationTime = modificationTime;
    return this;
  }

  /**
   * Get modificationTime
   * @return modificationTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MODIFICATION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getModificationTime() {
    return modificationTime;
  }


  @JsonProperty(JSON_PROPERTY_MODIFICATION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setModificationTime(@jakarta.annotation.Nullable String modificationTime) {
    this.modificationTime = modificationTime;
  }


  public UpdateTaskResponse priority(@jakarta.annotation.Nullable PriorityEnum priority) {
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


  public UpdateTaskResponse remindTimeMins(@jakarta.annotation.Nullable Integer remindTimeMins) {
    this.remindTimeMins = remindTimeMins;
    return this;
  }

  /**
   * Get remindTimeMins
   * @return remindTimeMins
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public UpdateTaskResponse title(@jakarta.annotation.Nullable String title) {
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


  public UpdateTaskResponse type(@jakarta.annotation.Nullable TypeEnum type) {
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
   * Return true if this UpdateTaskResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateTaskResponse updateTaskResponse = (UpdateTaskResponse) o;
    return Objects.equals(this.assignedToUserId, updateTaskResponse.assignedToUserId) &&
        Objects.equals(this.completed, updateTaskResponse.completed) &&
        Objects.equals(this.completionTime, updateTaskResponse.completionTime) &&
        Objects.equals(this.contactId, updateTaskResponse.contactId) &&
        Objects.equals(this.createTime, updateTaskResponse.createTime) &&
        Objects.equals(this.createdByUserId, updateTaskResponse.createdByUserId) &&
        Objects.equals(this.description, updateTaskResponse.description) &&
        Objects.equals(this.dueTime, updateTaskResponse.dueTime) &&
        Objects.equals(this.id, updateTaskResponse.id) &&
        Objects.equals(this.modificationTime, updateTaskResponse.modificationTime) &&
        Objects.equals(this.priority, updateTaskResponse.priority) &&
        Objects.equals(this.remindTimeMins, updateTaskResponse.remindTimeMins) &&
        Objects.equals(this.title, updateTaskResponse.title) &&
        Objects.equals(this.type, updateTaskResponse.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assignedToUserId, completed, completionTime, contactId, createTime, createdByUserId, description, dueTime, id, modificationTime, priority, remindTimeMins, title, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateTaskResponse {\n");
    sb.append("    assignedToUserId: ").append(toIndentedString(assignedToUserId)).append("\n");
    sb.append("    completed: ").append(toIndentedString(completed)).append("\n");
    sb.append("    completionTime: ").append(toIndentedString(completionTime)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    createTime: ").append(toIndentedString(createTime)).append("\n");
    sb.append("    createdByUserId: ").append(toIndentedString(createdByUserId)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    dueTime: ").append(toIndentedString(dueTime)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    modificationTime: ").append(toIndentedString(modificationTime)).append("\n");
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
    
        private UpdateTaskResponse instance;
    
        public Builder() {
          this(new UpdateTaskResponse());
        }
    
        protected Builder(UpdateTaskResponse instance) {
          this.instance = instance;
        }
    
        public UpdateTaskResponse.Builder assignedToUserId(String assignedToUserId) {
              this.instance.assignedToUserId = assignedToUserId;
          return this;
        }
            public UpdateTaskResponse.Builder completed(Boolean completed) {
              this.instance.completed = completed;
          return this;
        }
            public UpdateTaskResponse.Builder completionTime(String completionTime) {
              this.instance.completionTime = completionTime;
          return this;
        }
            public UpdateTaskResponse.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public UpdateTaskResponse.Builder createTime(String createTime) {
              this.instance.createTime = createTime;
          return this;
        }
            public UpdateTaskResponse.Builder createdByUserId(String createdByUserId) {
              this.instance.createdByUserId = createdByUserId;
          return this;
        }
            public UpdateTaskResponse.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public UpdateTaskResponse.Builder dueTime(String dueTime) {
              this.instance.dueTime = dueTime;
          return this;
        }
            public UpdateTaskResponse.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public UpdateTaskResponse.Builder modificationTime(String modificationTime) {
              this.instance.modificationTime = modificationTime;
          return this;
        }
            public UpdateTaskResponse.Builder priority(PriorityEnum priority) {
              this.instance.priority = priority;
          return this;
        }
            public UpdateTaskResponse.Builder remindTimeMins(Integer remindTimeMins) {
              this.instance.remindTimeMins = remindTimeMins;
          return this;
        }
            public UpdateTaskResponse.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
            public UpdateTaskResponse.Builder type(TypeEnum type) {
              this.instance.type = type;
          return this;
        }
        
    
        /**
        * returns a built UpdateTaskResponse instance.
        *
        * The builder is not reusable.
        */
        public UpdateTaskResponse build() {
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
      public static UpdateTaskResponse.Builder builder() {
        return new UpdateTaskResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateTaskResponse.Builder toBuilder() {
        return new UpdateTaskResponse.Builder()
          .assignedToUserId(getAssignedToUserId())
          .completed(getCompleted())
          .completionTime(getCompletionTime())
          .contactId(getContactId())
          .createTime(getCreateTime())
          .createdByUserId(getCreatedByUserId())
          .description(getDescription())
          .dueTime(getDueTime())
          .id(getId())
          .modificationTime(getModificationTime())
          .priority(getPriority())
          .remindTimeMins(getRemindTimeMins())
          .title(getTitle())
          .type(getType());
      }
}

