/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
  CreateLeadSourceRequest.JSON_PROPERTY_DESCRIPTION,
  CreateLeadSourceRequest.JSON_PROPERTY_END_TIME,
  CreateLeadSourceRequest.JSON_PROPERTY_LEAD_SOURCE_CATEGORY_ID,
  CreateLeadSourceRequest.JSON_PROPERTY_MEDIUM,
  CreateLeadSourceRequest.JSON_PROPERTY_MESSAGE,
  CreateLeadSourceRequest.JSON_PROPERTY_NAME,
  CreateLeadSourceRequest.JSON_PROPERTY_START_TIME,
  CreateLeadSourceRequest.JSON_PROPERTY_STATUS,
  CreateLeadSourceRequest.JSON_PROPERTY_VENDOR
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateLeadSourceRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_END_TIME = "end_time";
  @jakarta.annotation.Nullable  private String endTime;

  public static final String JSON_PROPERTY_LEAD_SOURCE_CATEGORY_ID = "lead_source_category_id";
  @jakarta.annotation.Nullable  private String leadSourceCategoryId;

  public static final String JSON_PROPERTY_MEDIUM = "medium";
  @jakarta.annotation.Nullable  private String medium;

  public static final String JSON_PROPERTY_MESSAGE = "message";
  @jakarta.annotation.Nullable  private String message;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_START_TIME = "start_time";
  @jakarta.annotation.Nullable  private String startTime;

  /**
   * Gets or Sets status
   */
  public enum StatusEnum {
    ACTIVE(String.valueOf("ACTIVE")),
    
    INACTIVE(String.valueOf("INACTIVE")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    StatusEnum(String value) {
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
    public static StatusEnum fromValue(String value) {
      for (StatusEnum b : StatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_STATUS = "status";
  @jakarta.annotation.Nullable  private StatusEnum status;

  public static final String JSON_PROPERTY_VENDOR = "vendor";
  @jakarta.annotation.Nullable  private String vendor;

  public CreateLeadSourceRequest() { 
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


  public CreateLeadSourceRequest leadSourceCategoryId(@jakarta.annotation.Nullable String leadSourceCategoryId) {
    this.leadSourceCategoryId = leadSourceCategoryId;
    return this;
  }

  /**
   * Get leadSourceCategoryId
   * @return leadSourceCategoryId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LEAD_SOURCE_CATEGORY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLeadSourceCategoryId() {
    return leadSourceCategoryId;
  }


  @JsonProperty(JSON_PROPERTY_LEAD_SOURCE_CATEGORY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLeadSourceCategoryId(@jakarta.annotation.Nullable String leadSourceCategoryId) {
    this.leadSourceCategoryId = leadSourceCategoryId;
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


  public CreateLeadSourceRequest status(@jakarta.annotation.Nullable StatusEnum status) {
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
  public StatusEnum getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatus(@jakarta.annotation.Nullable StatusEnum status) {
    this.status = status;
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
    return Objects.equals(this.description, createLeadSourceRequest.description) &&
        Objects.equals(this.endTime, createLeadSourceRequest.endTime) &&
        Objects.equals(this.leadSourceCategoryId, createLeadSourceRequest.leadSourceCategoryId) &&
        Objects.equals(this.medium, createLeadSourceRequest.medium) &&
        Objects.equals(this.message, createLeadSourceRequest.message) &&
        Objects.equals(this.name, createLeadSourceRequest.name) &&
        Objects.equals(this.startTime, createLeadSourceRequest.startTime) &&
        Objects.equals(this.status, createLeadSourceRequest.status) &&
        Objects.equals(this.vendor, createLeadSourceRequest.vendor);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, endTime, leadSourceCategoryId, medium, message, name, startTime, status, vendor);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateLeadSourceRequest {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
    sb.append("    leadSourceCategoryId: ").append(toIndentedString(leadSourceCategoryId)).append("\n");
    sb.append("    medium: ").append(toIndentedString(medium)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    startTime: ").append(toIndentedString(startTime)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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
    
        public CreateLeadSourceRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CreateLeadSourceRequest.Builder endTime(String endTime) {
              this.instance.endTime = endTime;
          return this;
        }
            public CreateLeadSourceRequest.Builder leadSourceCategoryId(String leadSourceCategoryId) {
              this.instance.leadSourceCategoryId = leadSourceCategoryId;
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
            public CreateLeadSourceRequest.Builder status(StatusEnum status) {
              this.instance.status = status;
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
          .description(getDescription())
          .endTime(getEndTime())
          .leadSourceCategoryId(getLeadSourceCategoryId())
          .medium(getMedium())
          .message(getMessage())
          .name(getName())
          .startTime(getStartTime())
          .status(getStatus())
          .vendor(getVendor());
      }
}

