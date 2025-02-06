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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * UpdateNoteRequest
 */
@JsonPropertyOrder({
  UpdateNoteRequest.JSON_PROPERTY_CONTACT_ID,
  UpdateNoteRequest.JSON_PROPERTY_IS_PINNED,
  UpdateNoteRequest.JSON_PROPERTY_TEXT,
  UpdateNoteRequest.JSON_PROPERTY_TITLE,
  UpdateNoteRequest.JSON_PROPERTY_TYPE,
  UpdateNoteRequest.JSON_PROPERTY_USER_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateNoteRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_IS_PINNED = "is_pinned";
  @jakarta.annotation.Nullable  private Boolean isPinned;

  public static final String JSON_PROPERTY_TEXT = "text";
  @jakarta.annotation.Nullable  private String text;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  public static final String JSON_PROPERTY_TYPE = "type";
  @jakarta.annotation.Nullable  private String type;

  public static final String JSON_PROPERTY_USER_ID = "user_id";
  @jakarta.annotation.Nonnull  private String userId;

  public UpdateNoteRequest() { 
  }

  public UpdateNoteRequest contactId(@jakarta.annotation.Nullable String contactId) {
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


  public UpdateNoteRequest isPinned(@jakarta.annotation.Nullable Boolean isPinned) {
    this.isPinned = isPinned;
    return this;
  }

  /**
   * Get isPinned
   * @return isPinned
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_IS_PINNED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getIsPinned() {
    return isPinned;
  }


  @JsonProperty(JSON_PROPERTY_IS_PINNED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsPinned(@jakarta.annotation.Nullable Boolean isPinned) {
    this.isPinned = isPinned;
  }


  public UpdateNoteRequest text(@jakarta.annotation.Nullable String text) {
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


  public UpdateNoteRequest title(@jakarta.annotation.Nullable String title) {
    this.title = title;
    return this;
  }

  /**
   * A value for either &#x60;title&#x60; or &#x60;type&#x60; is required.
   * @return title
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "A value for either `title` or `type` is required.")
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


  public UpdateNoteRequest type(@jakarta.annotation.Nullable String type) {
    this.type = type;
    return this;
  }

  /**
   * A value for either &#x60;title&#x60; or &#x60;type&#x60; is required. The value may be one of &#x60;Appointment&#x60;, &#x60;Call&#x60;, &#x60;Email&#x60;, &#x60;Fax&#x60;, &#x60;Letter&#x60; or &#x60;Other&#x60; in Keap Max/Pro, or an admin-configured value in Classic.
   * @return type
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "A value for either `title` or `type` is required. The value may be one of `Appointment`, `Call`, `Email`, `Fax`, `Letter` or `Other` in Keap Max/Pro, or an admin-configured value in Classic.")
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


  public UpdateNoteRequest userId(@jakarta.annotation.Nonnull String userId) {
    this.userId = userId;
    return this;
  }

  /**
   * Get userId
   * @return userId
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getUserId() {
    return userId;
  }


  @JsonProperty(JSON_PROPERTY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setUserId(@jakarta.annotation.Nonnull String userId) {
    this.userId = userId;
  }

  /**
   * Return true if this UpdateNoteRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateNoteRequest updateNoteRequest = (UpdateNoteRequest) o;
    return Objects.equals(this.contactId, updateNoteRequest.contactId) &&
        Objects.equals(this.isPinned, updateNoteRequest.isPinned) &&
        Objects.equals(this.text, updateNoteRequest.text) &&
        Objects.equals(this.title, updateNoteRequest.title) &&
        Objects.equals(this.type, updateNoteRequest.type) &&
        Objects.equals(this.userId, updateNoteRequest.userId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contactId, isPinned, text, title, type, userId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateNoteRequest {\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    isPinned: ").append(toIndentedString(isPinned)).append("\n");
    sb.append("    text: ").append(toIndentedString(text)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
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
    
        private UpdateNoteRequest instance;
    
        public Builder() {
          this(new UpdateNoteRequest());
        }
    
        protected Builder(UpdateNoteRequest instance) {
          this.instance = instance;
        }
    
        public UpdateNoteRequest.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public UpdateNoteRequest.Builder isPinned(Boolean isPinned) {
              this.instance.isPinned = isPinned;
          return this;
        }
            public UpdateNoteRequest.Builder text(String text) {
              this.instance.text = text;
          return this;
        }
            public UpdateNoteRequest.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
            public UpdateNoteRequest.Builder type(String type) {
              this.instance.type = type;
          return this;
        }
            public UpdateNoteRequest.Builder userId(String userId) {
              this.instance.userId = userId;
          return this;
        }
        
    
        /**
        * returns a built UpdateNoteRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateNoteRequest build() {
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
      public static UpdateNoteRequest.Builder builder() {
        return new UpdateNoteRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateNoteRequest.Builder toBuilder() {
        return new UpdateNoteRequest.Builder()
          .contactId(getContactId())
          .isPinned(getIsPinned())
          .text(getText())
          .title(getTitle())
          .type(getType())
          .userId(getUserId());
      }
}

