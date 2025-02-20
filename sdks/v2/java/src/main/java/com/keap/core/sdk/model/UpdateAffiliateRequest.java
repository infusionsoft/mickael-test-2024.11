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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * UpdateAffiliateRequest
 */
@JsonPropertyOrder({
  UpdateAffiliateRequest.JSON_PROPERTY_CODE,
  UpdateAffiliateRequest.JSON_PROPERTY_CONTACT_ID,
  UpdateAffiliateRequest.JSON_PROPERTY_NAME,
  UpdateAffiliateRequest.JSON_PROPERTY_STATUS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateAffiliateRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CODE = "code";
  @jakarta.annotation.Nonnull  private String code;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  /**
   * The Affiliate Status
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
  @jakarta.annotation.Nonnull  private StatusEnum status;

  public UpdateAffiliateRequest() { 
  }

  public UpdateAffiliateRequest code(@jakarta.annotation.Nonnull String code) {
    this.code = code;
    return this;
  }

  /**
   * The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length
   * @return code
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "M123", requiredMode = Schema.RequiredMode.REQUIRED, description = "The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length")
  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getCode() {
    return code;
  }


  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCode(@jakarta.annotation.Nonnull String code) {
    this.code = code;
  }


  public UpdateAffiliateRequest contactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * The contactId identifier , Must be a positive number
   * @return contactId
   */
  @jakarta.annotation.Nullable  @Schema(example = "1", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The contactId identifier , Must be a positive number")
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


  public UpdateAffiliateRequest name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * The Affiliate name will be derived from the Contact, when not explicitly provided
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(example = "Affiliate Name", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The Affiliate name will be derived from the Contact, when not explicitly provided")
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


  public UpdateAffiliateRequest status(@jakarta.annotation.Nonnull StatusEnum status) {
    this.status = status;
    return this;
  }

  /**
   * The Affiliate Status
   * @return status
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "ACTIVE", requiredMode = Schema.RequiredMode.REQUIRED, description = "The Affiliate Status")
  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public StatusEnum getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setStatus(@jakarta.annotation.Nonnull StatusEnum status) {
    this.status = status;
  }

  /**
   * Return true if this UpdateAffiliateRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateAffiliateRequest updateAffiliateRequest = (UpdateAffiliateRequest) o;
    return Objects.equals(this.code, updateAffiliateRequest.code) &&
        Objects.equals(this.contactId, updateAffiliateRequest.contactId) &&
        Objects.equals(this.name, updateAffiliateRequest.name) &&
        Objects.equals(this.status, updateAffiliateRequest.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, contactId, name, status);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateAffiliateRequest {\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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
    
        private UpdateAffiliateRequest instance;
    
        public Builder() {
          this(new UpdateAffiliateRequest());
        }
    
        protected Builder(UpdateAffiliateRequest instance) {
          this.instance = instance;
        }
    
        public UpdateAffiliateRequest.Builder code(String code) {
              this.instance.code = code;
          return this;
        }
            public UpdateAffiliateRequest.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public UpdateAffiliateRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public UpdateAffiliateRequest.Builder status(StatusEnum status) {
              this.instance.status = status;
          return this;
        }
        
    
        /**
        * returns a built UpdateAffiliateRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateAffiliateRequest build() {
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
      public static UpdateAffiliateRequest.Builder builder() {
        return new UpdateAffiliateRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateAffiliateRequest.Builder toBuilder() {
        return new UpdateAffiliateRequest.Builder()
          .code(getCode())
          .contactId(getContactId())
          .name(getName())
          .status(getStatus());
      }
}

