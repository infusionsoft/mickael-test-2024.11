/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
import com.keap.core.sdk.model.BasicUser;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Note
 */
@JsonPropertyOrder({
  Note.JSON_PROPERTY_ASSIGNED_TO_USER,
  Note.JSON_PROPERTY_CONTACT_ID,
  Note.JSON_PROPERTY_CREATE_TIME,
  Note.JSON_PROPERTY_CREATED_BY_USER_ID,
  Note.JSON_PROPERTY_ID,
  Note.JSON_PROPERTY_LAST_UPDATED_BY_USER_ID,
  Note.JSON_PROPERTY_PINNED_AT,
  Note.JSON_PROPERTY_TEXT,
  Note.JSON_PROPERTY_TITLE,
  Note.JSON_PROPERTY_TYPE,
  Note.JSON_PROPERTY_UPDATE_TIME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class Note implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ASSIGNED_TO_USER = "assigned_to_user";
  @jakarta.annotation.Nullable  private BasicUser assignedToUser;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_CREATE_TIME = "create_time";
  @jakarta.annotation.Nullable  private String createTime;

  public static final String JSON_PROPERTY_CREATED_BY_USER_ID = "created_by_user_id";
  @jakarta.annotation.Nullable  private String createdByUserId;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_LAST_UPDATED_BY_USER_ID = "last_updated_by_user_id";
  @jakarta.annotation.Nullable  private String lastUpdatedByUserId;

  public static final String JSON_PROPERTY_PINNED_AT = "pinned_at";
  @jakarta.annotation.Nullable  private String pinnedAt;

  public static final String JSON_PROPERTY_TEXT = "text";
  @jakarta.annotation.Nullable  private String text;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  public static final String JSON_PROPERTY_TYPE = "type";
  @jakarta.annotation.Nullable  private String type;

  public static final String JSON_PROPERTY_UPDATE_TIME = "update_time";
  @jakarta.annotation.Nullable  private String updateTime;

  public Note() { 
  }

  public Note assignedToUser(@jakarta.annotation.Nullable BasicUser assignedToUser) {
    this.assignedToUser = assignedToUser;
    return this;
  }

  /**
   * Get assignedToUser
   * @return assignedToUser
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ASSIGNED_TO_USER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public BasicUser getAssignedToUser() {
    return assignedToUser;
  }


  @JsonProperty(JSON_PROPERTY_ASSIGNED_TO_USER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAssignedToUser(@jakarta.annotation.Nullable BasicUser assignedToUser) {
    this.assignedToUser = assignedToUser;
  }


  public Note contactId(@jakarta.annotation.Nullable String contactId) {
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


  public Note createTime(@jakarta.annotation.Nullable String createTime) {
    this.createTime = createTime;
    return this;
  }

  /**
   * Get createTime
   * @return createTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public Note createdByUserId(@jakarta.annotation.Nullable String createdByUserId) {
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


  public Note id(@jakarta.annotation.Nullable String id) {
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


  public Note lastUpdatedByUserId(@jakarta.annotation.Nullable String lastUpdatedByUserId) {
    this.lastUpdatedByUserId = lastUpdatedByUserId;
    return this;
  }

  /**
   * Get lastUpdatedByUserId
   * @return lastUpdatedByUserId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LAST_UPDATED_BY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLastUpdatedByUserId() {
    return lastUpdatedByUserId;
  }


  @JsonProperty(JSON_PROPERTY_LAST_UPDATED_BY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLastUpdatedByUserId(@jakarta.annotation.Nullable String lastUpdatedByUserId) {
    this.lastUpdatedByUserId = lastUpdatedByUserId;
  }


  public Note pinnedAt(@jakarta.annotation.Nullable String pinnedAt) {
    this.pinnedAt = pinnedAt;
    return this;
  }

  /**
   * Get pinnedAt
   * @return pinnedAt
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PINNED_AT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPinnedAt() {
    return pinnedAt;
  }


  @JsonProperty(JSON_PROPERTY_PINNED_AT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPinnedAt(@jakarta.annotation.Nullable String pinnedAt) {
    this.pinnedAt = pinnedAt;
  }


  public Note text(@jakarta.annotation.Nullable String text) {
    this.text = text;
    return this;
  }

  /**
   * Get text
   * @return text
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getText() {
    return text;
  }


  @JsonProperty(JSON_PROPERTY_TEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setText(@jakarta.annotation.Nullable String text) {
    this.text = text;
  }


  public Note title(@jakarta.annotation.Nullable String title) {
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


  public Note type(@jakarta.annotation.Nullable String type) {
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
  public String getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(@jakarta.annotation.Nullable String type) {
    this.type = type;
  }


  public Note updateTime(@jakarta.annotation.Nullable String updateTime) {
    this.updateTime = updateTime;
    return this;
  }

  /**
   * Get updateTime
   * @return updateTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_UPDATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUpdateTime() {
    return updateTime;
  }


  @JsonProperty(JSON_PROPERTY_UPDATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUpdateTime(@jakarta.annotation.Nullable String updateTime) {
    this.updateTime = updateTime;
  }

  /**
   * Return true if this Note object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Note note = (Note) o;
    return Objects.equals(this.assignedToUser, note.assignedToUser) &&
        Objects.equals(this.contactId, note.contactId) &&
        Objects.equals(this.createTime, note.createTime) &&
        Objects.equals(this.createdByUserId, note.createdByUserId) &&
        Objects.equals(this.id, note.id) &&
        Objects.equals(this.lastUpdatedByUserId, note.lastUpdatedByUserId) &&
        Objects.equals(this.pinnedAt, note.pinnedAt) &&
        Objects.equals(this.text, note.text) &&
        Objects.equals(this.title, note.title) &&
        Objects.equals(this.type, note.type) &&
        Objects.equals(this.updateTime, note.updateTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assignedToUser, contactId, createTime, createdByUserId, id, lastUpdatedByUserId, pinnedAt, text, title, type, updateTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Note {\n");
    sb.append("    assignedToUser: ").append(toIndentedString(assignedToUser)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    createTime: ").append(toIndentedString(createTime)).append("\n");
    sb.append("    createdByUserId: ").append(toIndentedString(createdByUserId)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    lastUpdatedByUserId: ").append(toIndentedString(lastUpdatedByUserId)).append("\n");
    sb.append("    pinnedAt: ").append(toIndentedString(pinnedAt)).append("\n");
    sb.append("    text: ").append(toIndentedString(text)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    updateTime: ").append(toIndentedString(updateTime)).append("\n");
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
    
        private Note instance;
    
        public Builder() {
          this(new Note());
        }
    
        protected Builder(Note instance) {
          this.instance = instance;
        }
    
        public Note.Builder assignedToUser(BasicUser assignedToUser) {
              this.instance.assignedToUser = assignedToUser;
          return this;
        }
            public Note.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public Note.Builder createTime(String createTime) {
              this.instance.createTime = createTime;
          return this;
        }
            public Note.Builder createdByUserId(String createdByUserId) {
              this.instance.createdByUserId = createdByUserId;
          return this;
        }
            public Note.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public Note.Builder lastUpdatedByUserId(String lastUpdatedByUserId) {
              this.instance.lastUpdatedByUserId = lastUpdatedByUserId;
          return this;
        }
            public Note.Builder pinnedAt(String pinnedAt) {
              this.instance.pinnedAt = pinnedAt;
          return this;
        }
            public Note.Builder text(String text) {
              this.instance.text = text;
          return this;
        }
            public Note.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
            public Note.Builder type(String type) {
              this.instance.type = type;
          return this;
        }
            public Note.Builder updateTime(String updateTime) {
              this.instance.updateTime = updateTime;
          return this;
        }
        
    
        /**
        * returns a built Note instance.
        *
        * The builder is not reusable.
        */
        public Note build() {
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
      public static Note.Builder builder() {
        return new Note.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Note.Builder toBuilder() {
        return new Note.Builder()
          .assignedToUser(getAssignedToUser())
          .contactId(getContactId())
          .createTime(getCreateTime())
          .createdByUserId(getCreatedByUserId())
          .id(getId())
          .lastUpdatedByUserId(getLastUpdatedByUserId())
          .pinnedAt(getPinnedAt())
          .text(getText())
          .title(getTitle())
          .type(getType())
          .updateTime(getUpdateTime());
      }
}

