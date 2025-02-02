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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * NoteTemplate
 */
@JsonPropertyOrder({
  NoteTemplate.JSON_PROPERTY_ACTION_TYPE,
  NoteTemplate.JSON_PROPERTY_ASSIGNMENT_USER_ID,
  NoteTemplate.JSON_PROPERTY_DESCRIPTION,
  NoteTemplate.JSON_PROPERTY_ID,
  NoteTemplate.JSON_PROPERTY_NOTIFY_USERS,
  NoteTemplate.JSON_PROPERTY_TITLE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class NoteTemplate implements Serializable {
  private static final long serialVersionUID = 1L;

  /**
   * Gets or Sets actionType
   */
  public enum ActionTypeEnum {
    APPOINTMENT(String.valueOf("APPOINTMENT")),
    
    CALL(String.valueOf("CALL")),
    
    EMAIL(String.valueOf("EMAIL")),
    
    FAX(String.valueOf("FAX")),
    
    LETTER(String.valueOf("LETTER")),
    
    OTHER(String.valueOf("OTHER")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    ActionTypeEnum(String value) {
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
    public static ActionTypeEnum fromValue(String value) {
      for (ActionTypeEnum b : ActionTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_ACTION_TYPE = "action_type";
  @jakarta.annotation.Nullable  private ActionTypeEnum actionType;

  public static final String JSON_PROPERTY_ASSIGNMENT_USER_ID = "assignment_user_id";
  @jakarta.annotation.Nullable  private Long assignmentUserId;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NOTIFY_USERS = "notify_users";
  @jakarta.annotation.Nullable  private List<String> notifyUsers = new ArrayList<>();

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  public NoteTemplate() { 
  }

  public NoteTemplate actionType(@jakarta.annotation.Nullable ActionTypeEnum actionType) {
    this.actionType = actionType;
    return this;
  }

  /**
   * Get actionType
   * @return actionType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ACTION_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ActionTypeEnum getActionType() {
    return actionType;
  }


  @JsonProperty(JSON_PROPERTY_ACTION_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActionType(@jakarta.annotation.Nullable ActionTypeEnum actionType) {
    this.actionType = actionType;
  }


  public NoteTemplate assignmentUserId(@jakarta.annotation.Nullable Long assignmentUserId) {
    this.assignmentUserId = assignmentUserId;
    return this;
  }

  /**
   * Get assignmentUserId
   * @return assignmentUserId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ASSIGNMENT_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getAssignmentUserId() {
    return assignmentUserId;
  }


  @JsonProperty(JSON_PROPERTY_ASSIGNMENT_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAssignmentUserId(@jakarta.annotation.Nullable Long assignmentUserId) {
    this.assignmentUserId = assignmentUserId;
  }


  public NoteTemplate description(@jakarta.annotation.Nullable String description) {
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


  public NoteTemplate id(@jakarta.annotation.Nullable String id) {
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


  public NoteTemplate notifyUsers(@jakarta.annotation.Nullable List<String> notifyUsers) {
    this.notifyUsers = notifyUsers;
    return this;
  }

  public NoteTemplate addNotifyUsersItem(String notifyUsersItem) {
    if (this.notifyUsers == null) {
      this.notifyUsers = new ArrayList<>();
    }
    this.notifyUsers.add(notifyUsersItem);
    return this;
  }

  /**
   * Get notifyUsers
   * @return notifyUsers
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NOTIFY_USERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getNotifyUsers() {
    return notifyUsers;
  }


  @JsonProperty(JSON_PROPERTY_NOTIFY_USERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNotifyUsers(@jakarta.annotation.Nullable List<String> notifyUsers) {
    this.notifyUsers = notifyUsers;
  }


  public NoteTemplate title(@jakarta.annotation.Nullable String title) {
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

  /**
   * Return true if this NoteTemplate object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NoteTemplate noteTemplate = (NoteTemplate) o;
    return Objects.equals(this.actionType, noteTemplate.actionType) &&
        Objects.equals(this.assignmentUserId, noteTemplate.assignmentUserId) &&
        Objects.equals(this.description, noteTemplate.description) &&
        Objects.equals(this.id, noteTemplate.id) &&
        Objects.equals(this.notifyUsers, noteTemplate.notifyUsers) &&
        Objects.equals(this.title, noteTemplate.title);
  }

  @Override
  public int hashCode() {
    return Objects.hash(actionType, assignmentUserId, description, id, notifyUsers, title);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NoteTemplate {\n");
    sb.append("    actionType: ").append(toIndentedString(actionType)).append("\n");
    sb.append("    assignmentUserId: ").append(toIndentedString(assignmentUserId)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    notifyUsers: ").append(toIndentedString(notifyUsers)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
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
    
        private NoteTemplate instance;
    
        public Builder() {
          this(new NoteTemplate());
        }
    
        protected Builder(NoteTemplate instance) {
          this.instance = instance;
        }
    
        public NoteTemplate.Builder actionType(ActionTypeEnum actionType) {
              this.instance.actionType = actionType;
          return this;
        }
            public NoteTemplate.Builder assignmentUserId(Long assignmentUserId) {
              this.instance.assignmentUserId = assignmentUserId;
          return this;
        }
            public NoteTemplate.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public NoteTemplate.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public NoteTemplate.Builder notifyUsers(List<String> notifyUsers) {
              this.instance.notifyUsers = notifyUsers;
          return this;
        }
            public NoteTemplate.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
        
    
        /**
        * returns a built NoteTemplate instance.
        *
        * The builder is not reusable.
        */
        public NoteTemplate build() {
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
      public static NoteTemplate.Builder builder() {
        return new NoteTemplate.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public NoteTemplate.Builder toBuilder() {
        return new NoteTemplate.Builder()
          .actionType(getActionType())
          .assignmentUserId(getAssignmentUserId())
          .description(getDescription())
          .id(getId())
          .notifyUsers(getNotifyUsers())
          .title(getTitle());
      }
}

