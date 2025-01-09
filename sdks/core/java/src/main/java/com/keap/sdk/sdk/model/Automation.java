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
import com.keap.sdk.sdk.model.AutomationLockStatus;
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
 * Automation
 */
@JsonPropertyOrder({
  Automation.JSON_PROPERTY_ACTIVE_CONTACTS,
  Automation.JSON_PROPERTY_CATEGORIES,
  Automation.JSON_PROPERTY_CURRENT_EDIT_LOCK_STATUS,
  Automation.JSON_PROPERTY_ERROR_MESSAGE,
  Automation.JSON_PROPERTY_ID,
  Automation.JSON_PROPERTY_LOCKED,
  Automation.JSON_PROPERTY_PUBLISHED_BY,
  Automation.JSON_PROPERTY_PUBLISHED_DATE,
  Automation.JSON_PROPERTY_PUBLISHED_TIMEZONE,
  Automation.JSON_PROPERTY_STATUS,
  Automation.JSON_PROPERTY_TITLE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class Automation implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTIVE_CONTACTS = "active_contacts";
  @jakarta.annotation.Nullable  private Integer activeContacts;

  public static final String JSON_PROPERTY_CATEGORIES = "categories";
  @jakarta.annotation.Nullable  private List<String> categories = new ArrayList<>();

  public static final String JSON_PROPERTY_CURRENT_EDIT_LOCK_STATUS = "current_edit_lock_status";
  @jakarta.annotation.Nullable  private AutomationLockStatus currentEditLockStatus;

  public static final String JSON_PROPERTY_ERROR_MESSAGE = "error_message";
  @jakarta.annotation.Nullable  private String errorMessage;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_LOCKED = "locked";
  @jakarta.annotation.Nullable  private Boolean locked;

  public static final String JSON_PROPERTY_PUBLISHED_BY = "published_by";
  @jakarta.annotation.Nullable  private String publishedBy;

  public static final String JSON_PROPERTY_PUBLISHED_DATE = "published_date";
  @jakarta.annotation.Nullable  private ZonedDateTime publishedDate;

  public static final String JSON_PROPERTY_PUBLISHED_TIMEZONE = "published_timezone";
  @jakarta.annotation.Nullable  private String publishedTimezone;

  public static final String JSON_PROPERTY_STATUS = "status";
  @jakarta.annotation.Nullable  private String status;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  public Automation() { 
  }

  public Automation activeContacts(@jakarta.annotation.Nullable Integer activeContacts) {
    this.activeContacts = activeContacts;
    return this;
  }

  /**
   * Get activeContacts
   * @return activeContacts
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ACTIVE_CONTACTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getActiveContacts() {
    return activeContacts;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE_CONTACTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActiveContacts(@jakarta.annotation.Nullable Integer activeContacts) {
    this.activeContacts = activeContacts;
  }


  public Automation categories(@jakarta.annotation.Nullable List<String> categories) {
    this.categories = categories;
    return this;
  }

  public Automation addCategoriesItem(String categoriesItem) {
    if (this.categories == null) {
      this.categories = new ArrayList<>();
    }
    this.categories.add(categoriesItem);
    return this;
  }

  /**
   * Get categories
   * @return categories
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getCategories() {
    return categories;
  }


  @JsonProperty(JSON_PROPERTY_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCategories(@jakarta.annotation.Nullable List<String> categories) {
    this.categories = categories;
  }


  public Automation currentEditLockStatus(@jakarta.annotation.Nullable AutomationLockStatus currentEditLockStatus) {
    this.currentEditLockStatus = currentEditLockStatus;
    return this;
  }

  /**
   * Get currentEditLockStatus
   * @return currentEditLockStatus
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CURRENT_EDIT_LOCK_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public AutomationLockStatus getCurrentEditLockStatus() {
    return currentEditLockStatus;
  }


  @JsonProperty(JSON_PROPERTY_CURRENT_EDIT_LOCK_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrentEditLockStatus(@jakarta.annotation.Nullable AutomationLockStatus currentEditLockStatus) {
    this.currentEditLockStatus = currentEditLockStatus;
  }


  public Automation errorMessage(@jakarta.annotation.Nullable String errorMessage) {
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


  public Automation id(@jakarta.annotation.Nullable String id) {
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


  public Automation locked(@jakarta.annotation.Nullable Boolean locked) {
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


  public Automation publishedBy(@jakarta.annotation.Nullable String publishedBy) {
    this.publishedBy = publishedBy;
    return this;
  }

  /**
   * Get publishedBy
   * @return publishedBy
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PUBLISHED_BY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPublishedBy() {
    return publishedBy;
  }


  @JsonProperty(JSON_PROPERTY_PUBLISHED_BY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPublishedBy(@jakarta.annotation.Nullable String publishedBy) {
    this.publishedBy = publishedBy;
  }


  public Automation publishedDate(@jakarta.annotation.Nullable ZonedDateTime publishedDate) {
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


  public Automation publishedTimezone(@jakarta.annotation.Nullable String publishedTimezone) {
    this.publishedTimezone = publishedTimezone;
    return this;
  }

  /**
   * Get publishedTimezone
   * @return publishedTimezone
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PUBLISHED_TIMEZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPublishedTimezone() {
    return publishedTimezone;
  }


  @JsonProperty(JSON_PROPERTY_PUBLISHED_TIMEZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPublishedTimezone(@jakarta.annotation.Nullable String publishedTimezone) {
    this.publishedTimezone = publishedTimezone;
  }


  public Automation status(@jakarta.annotation.Nullable String status) {
    this.status = status;
    return this;
  }

  /**
   * Get status
   * @return status
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatus(@jakarta.annotation.Nullable String status) {
    this.status = status;
  }


  public Automation title(@jakarta.annotation.Nullable String title) {
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
   * Return true if this Automation object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Automation automation = (Automation) o;
    return Objects.equals(this.activeContacts, automation.activeContacts) &&
        Objects.equals(this.categories, automation.categories) &&
        Objects.equals(this.currentEditLockStatus, automation.currentEditLockStatus) &&
        Objects.equals(this.errorMessage, automation.errorMessage) &&
        Objects.equals(this.id, automation.id) &&
        Objects.equals(this.locked, automation.locked) &&
        Objects.equals(this.publishedBy, automation.publishedBy) &&
        Objects.equals(this.publishedDate, automation.publishedDate) &&
        Objects.equals(this.publishedTimezone, automation.publishedTimezone) &&
        Objects.equals(this.status, automation.status) &&
        Objects.equals(this.title, automation.title);
  }

  @Override
  public int hashCode() {
    return Objects.hash(activeContacts, categories, currentEditLockStatus, errorMessage, id, locked, publishedBy, publishedDate, publishedTimezone, status, title);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Automation {\n");
    sb.append("    activeContacts: ").append(toIndentedString(activeContacts)).append("\n");
    sb.append("    categories: ").append(toIndentedString(categories)).append("\n");
    sb.append("    currentEditLockStatus: ").append(toIndentedString(currentEditLockStatus)).append("\n");
    sb.append("    errorMessage: ").append(toIndentedString(errorMessage)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    locked: ").append(toIndentedString(locked)).append("\n");
    sb.append("    publishedBy: ").append(toIndentedString(publishedBy)).append("\n");
    sb.append("    publishedDate: ").append(toIndentedString(publishedDate)).append("\n");
    sb.append("    publishedTimezone: ").append(toIndentedString(publishedTimezone)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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
    
        private Automation instance;
    
        public Builder() {
          this(new Automation());
        }
    
        protected Builder(Automation instance) {
          this.instance = instance;
        }
    
        public Automation.Builder activeContacts(Integer activeContacts) {
              this.instance.activeContacts = activeContacts;
          return this;
        }
            public Automation.Builder categories(List<String> categories) {
              this.instance.categories = categories;
          return this;
        }
            public Automation.Builder currentEditLockStatus(AutomationLockStatus currentEditLockStatus) {
              this.instance.currentEditLockStatus = currentEditLockStatus;
          return this;
        }
            public Automation.Builder errorMessage(String errorMessage) {
              this.instance.errorMessage = errorMessage;
          return this;
        }
            public Automation.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public Automation.Builder locked(Boolean locked) {
              this.instance.locked = locked;
          return this;
        }
            public Automation.Builder publishedBy(String publishedBy) {
              this.instance.publishedBy = publishedBy;
          return this;
        }
            public Automation.Builder publishedDate(ZonedDateTime publishedDate) {
              this.instance.publishedDate = publishedDate;
          return this;
        }
            public Automation.Builder publishedTimezone(String publishedTimezone) {
              this.instance.publishedTimezone = publishedTimezone;
          return this;
        }
            public Automation.Builder status(String status) {
              this.instance.status = status;
          return this;
        }
            public Automation.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
        
    
        /**
        * returns a built Automation instance.
        *
        * The builder is not reusable.
        */
        public Automation build() {
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
      public static Automation.Builder builder() {
        return new Automation.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Automation.Builder toBuilder() {
        return new Automation.Builder()
          .activeContacts(getActiveContacts())
          .categories(getCategories())
          .currentEditLockStatus(getCurrentEditLockStatus())
          .errorMessage(getErrorMessage())
          .id(getId())
          .locked(getLocked())
          .publishedBy(getPublishedBy())
          .publishedDate(getPublishedDate())
          .publishedTimezone(getPublishedTimezone())
          .status(getStatus())
          .title(getTitle());
      }
}

