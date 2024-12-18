/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
 * CreateLeadSourceRequest
 */
@JsonPropertyOrder({
  CreateLeadSourceRequest.JSON_PROPERTY_CATEGORY,
  CreateLeadSourceRequest.JSON_PROPERTY_DESCRIPTION,
  CreateLeadSourceRequest.JSON_PROPERTY_END_TIME,
  CreateLeadSourceRequest.JSON_PROPERTY_MEDIUM,
  CreateLeadSourceRequest.JSON_PROPERTY_MESSAGE,
  CreateLeadSourceRequest.JSON_PROPERTY_NAME,
  CreateLeadSourceRequest.JSON_PROPERTY_START_TIME,
  CreateLeadSourceRequest.JSON_PROPERTY_STATUS_IS_ACTIVE,
  CreateLeadSourceRequest.JSON_PROPERTY_VENDOR
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateLeadSourceRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CATEGORY = "category";
  @jakarta.annotation.Nullable  private LeadSourceCategory category;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_END_TIME = "end_time";
  @jakarta.annotation.Nullable  private String endTime;

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

  public CreateLeadSourceRequest() { 
  }

  public CreateLeadSourceRequest category(@jakarta.annotation.Nullable LeadSourceCategory category) {
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


  public CreateLeadSourceRequest description(@jakarta.annotation.Nullable String description) {
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


  public CreateLeadSourceRequest endTime(@jakarta.annotation.Nullable String endTime) {
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


  public CreateLeadSourceRequest medium(@jakarta.annotation.Nullable String medium) {
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


  public CreateLeadSourceRequest message(@jakarta.annotation.Nullable String message) {
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


  public CreateLeadSourceRequest name(@jakarta.annotation.Nullable String name) {
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


  public CreateLeadSourceRequest startTime(@jakarta.annotation.Nullable String startTime) {
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


  public CreateLeadSourceRequest statusIsActive(@jakarta.annotation.Nullable Boolean statusIsActive) {
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


  public CreateLeadSourceRequest vendor(@jakarta.annotation.Nullable String vendor) {
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
   * Return true if this CreateLeadSourceRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateLeadSourceRequest createLeadSourceRequest = (CreateLeadSourceRequest) o;
    return Objects.equals(this.category, createLeadSourceRequest.category) &&
        Objects.equals(this.description, createLeadSourceRequest.description) &&
        Objects.equals(this.endTime, createLeadSourceRequest.endTime) &&
        Objects.equals(this.medium, createLeadSourceRequest.medium) &&
        Objects.equals(this.message, createLeadSourceRequest.message) &&
        Objects.equals(this.name, createLeadSourceRequest.name) &&
        Objects.equals(this.startTime, createLeadSourceRequest.startTime) &&
        Objects.equals(this.statusIsActive, createLeadSourceRequest.statusIsActive) &&
        Objects.equals(this.vendor, createLeadSourceRequest.vendor);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, description, endTime, medium, message, name, startTime, statusIsActive, vendor);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateLeadSourceRequest {\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
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
    
        private CreateLeadSourceRequest instance;
    
        public Builder() {
          this(new CreateLeadSourceRequest());
        }
    
        protected Builder(CreateLeadSourceRequest instance) {
          this.instance = instance;
        }
    
        public CreateLeadSourceRequest.Builder category(LeadSourceCategory category) {
              this.instance.category = category;
          return this;
        }
            public CreateLeadSourceRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CreateLeadSourceRequest.Builder endTime(String endTime) {
              this.instance.endTime = endTime;
          return this;
        }
            public CreateLeadSourceRequest.Builder medium(String medium) {
              this.instance.medium = medium;
          return this;
        }
            public CreateLeadSourceRequest.Builder message(String message) {
              this.instance.message = message;
          return this;
        }
            public CreateLeadSourceRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public CreateLeadSourceRequest.Builder startTime(String startTime) {
              this.instance.startTime = startTime;
          return this;
        }
            public CreateLeadSourceRequest.Builder statusIsActive(Boolean statusIsActive) {
              this.instance.statusIsActive = statusIsActive;
          return this;
        }
            public CreateLeadSourceRequest.Builder vendor(String vendor) {
              this.instance.vendor = vendor;
          return this;
        }
        
    
        /**
        * returns a built CreateLeadSourceRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateLeadSourceRequest build() {
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
      public static CreateLeadSourceRequest.Builder builder() {
        return new CreateLeadSourceRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateLeadSourceRequest.Builder toBuilder() {
        return new CreateLeadSourceRequest.Builder()
          .category(getCategory())
          .description(getDescription())
          .endTime(getEndTime())
          .medium(getMedium())
          .message(getMessage())
          .name(getName())
          .startTime(getStartTime())
          .statusIsActive(getStatusIsActive())
          .vendor(getVendor());
      }
}

