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
import com.keap.sdk.sdk.model.LeadSourceCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * LeadSource
 */
@JsonPropertyOrder({
  LeadSource.JSON_PROPERTY_CATEGORY,
  LeadSource.JSON_PROPERTY_DESCRIPTION,
  LeadSource.JSON_PROPERTY_END_TIME,
  LeadSource.JSON_PROPERTY_ID,
  LeadSource.JSON_PROPERTY_MEDIUM,
  LeadSource.JSON_PROPERTY_MESSAGE,
  LeadSource.JSON_PROPERTY_NAME,
  LeadSource.JSON_PROPERTY_START_TIME,
  LeadSource.JSON_PROPERTY_STATUS_IS_ACTIVE,
  LeadSource.JSON_PROPERTY_VENDOR
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class LeadSource implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CATEGORY = "category";
  @jakarta.annotation.Nullable  private LeadSourceCategory category;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_END_TIME = "end_time";
  @jakarta.annotation.Nullable  private String endTime;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_MEDIUM = "medium";
  @jakarta.annotation.Nullable  private String medium;

  public static final String JSON_PROPERTY_MESSAGE = "message";
  @jakarta.annotation.Nullable  private String message;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_START_TIME = "start_time";
  @jakarta.annotation.Nullable  private String startTime;

  public static final String JSON_PROPERTY_STATUS_IS_ACTIVE = "status_is_active";
  @jakarta.annotation.Nullable  private Boolean statusIsActive;

  public static final String JSON_PROPERTY_VENDOR = "vendor";
  @jakarta.annotation.Nullable  private String vendor;

  public LeadSource() { 
  }

  public LeadSource category(@jakarta.annotation.Nullable LeadSourceCategory category) {
    this.category = category;
    return this;
  }

  /**
   * Get category
   * @return category
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CATEGORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public LeadSourceCategory getCategory() {
    return category;
  }


  @JsonProperty(JSON_PROPERTY_CATEGORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCategory(@jakarta.annotation.Nullable LeadSourceCategory category) {
    this.category = category;
  }


  public LeadSource description(@jakarta.annotation.Nullable String description) {
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


  public LeadSource endTime(@jakarta.annotation.Nullable String endTime) {
    this.endTime = endTime;
    return this;
  }

  /**
   * Get endTime
   * @return endTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_END_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getEndTime() {
    return endTime;
  }


  @JsonProperty(JSON_PROPERTY_END_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndTime(@jakarta.annotation.Nullable String endTime) {
    this.endTime = endTime;
  }


  public LeadSource id(@jakarta.annotation.Nullable String id) {
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


  public LeadSource medium(@jakarta.annotation.Nullable String medium) {
    this.medium = medium;
    return this;
  }

  /**
   * Get medium
   * @return medium
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MEDIUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMedium() {
    return medium;
  }


  @JsonProperty(JSON_PROPERTY_MEDIUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMedium(@jakarta.annotation.Nullable String medium) {
    this.medium = medium;
  }


  public LeadSource message(@jakarta.annotation.Nullable String message) {
    this.message = message;
    return this;
  }

  /**
   * Get message
   * @return message
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMessage() {
    return message;
  }


  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMessage(@jakarta.annotation.Nullable String message) {
    this.message = message;
  }


  public LeadSource name(@jakarta.annotation.Nullable String name) {
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


  public LeadSource startTime(@jakarta.annotation.Nullable String startTime) {
    this.startTime = startTime;
    return this;
  }

  /**
   * Get startTime
   * @return startTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_START_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStartTime() {
    return startTime;
  }


  @JsonProperty(JSON_PROPERTY_START_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStartTime(@jakarta.annotation.Nullable String startTime) {
    this.startTime = startTime;
  }


  public LeadSource statusIsActive(@jakarta.annotation.Nullable Boolean statusIsActive) {
    this.statusIsActive = statusIsActive;
    return this;
  }

  /**
   * Get statusIsActive
   * @return statusIsActive
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STATUS_IS_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getStatusIsActive() {
    return statusIsActive;
  }


  @JsonProperty(JSON_PROPERTY_STATUS_IS_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatusIsActive(@jakarta.annotation.Nullable Boolean statusIsActive) {
    this.statusIsActive = statusIsActive;
  }


  public LeadSource vendor(@jakarta.annotation.Nullable String vendor) {
    this.vendor = vendor;
    return this;
  }

  /**
   * Get vendor
   * @return vendor
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_VENDOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getVendor() {
    return vendor;
  }


  @JsonProperty(JSON_PROPERTY_VENDOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setVendor(@jakarta.annotation.Nullable String vendor) {
    this.vendor = vendor;
  }

  /**
   * Return true if this LeadSource object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LeadSource leadSource = (LeadSource) o;
    return Objects.equals(this.category, leadSource.category) &&
        Objects.equals(this.description, leadSource.description) &&
        Objects.equals(this.endTime, leadSource.endTime) &&
        Objects.equals(this.id, leadSource.id) &&
        Objects.equals(this.medium, leadSource.medium) &&
        Objects.equals(this.message, leadSource.message) &&
        Objects.equals(this.name, leadSource.name) &&
        Objects.equals(this.startTime, leadSource.startTime) &&
        Objects.equals(this.statusIsActive, leadSource.statusIsActive) &&
        Objects.equals(this.vendor, leadSource.vendor);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, description, endTime, id, medium, message, name, startTime, statusIsActive, vendor);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LeadSource {\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    medium: ").append(toIndentedString(medium)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    startTime: ").append(toIndentedString(startTime)).append("\n");
    sb.append("    statusIsActive: ").append(toIndentedString(statusIsActive)).append("\n");
    sb.append("    vendor: ").append(toIndentedString(vendor)).append("\n");
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
    
        private LeadSource instance;
    
        public Builder() {
          this(new LeadSource());
        }
    
        protected Builder(LeadSource instance) {
          this.instance = instance;
        }
    
        public LeadSource.Builder category(LeadSourceCategory category) {
              this.instance.category = category;
          return this;
        }
            public LeadSource.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public LeadSource.Builder endTime(String endTime) {
              this.instance.endTime = endTime;
          return this;
        }
            public LeadSource.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public LeadSource.Builder medium(String medium) {
              this.instance.medium = medium;
          return this;
        }
            public LeadSource.Builder message(String message) {
              this.instance.message = message;
          return this;
        }
            public LeadSource.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public LeadSource.Builder startTime(String startTime) {
              this.instance.startTime = startTime;
          return this;
        }
            public LeadSource.Builder statusIsActive(Boolean statusIsActive) {
              this.instance.statusIsActive = statusIsActive;
          return this;
        }
            public LeadSource.Builder vendor(String vendor) {
              this.instance.vendor = vendor;
          return this;
        }
        
    
        /**
        * returns a built LeadSource instance.
        *
        * The builder is not reusable.
        */
        public LeadSource build() {
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
      public static LeadSource.Builder builder() {
        return new LeadSource.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public LeadSource.Builder toBuilder() {
        return new LeadSource.Builder()
          .category(getCategory())
          .description(getDescription())
          .endTime(getEndTime())
          .id(getId())
          .medium(getMedium())
          .message(getMessage())
          .name(getName())
          .startTime(getStartTime())
          .statusIsActive(getStatusIsActive())
          .vendor(getVendor());
      }
}

