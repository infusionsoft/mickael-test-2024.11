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
 * CreateAffiliateRequest
 */
@JsonPropertyOrder({
  CreateAffiliateRequest.JSON_PROPERTY_CODE,
  CreateAffiliateRequest.JSON_PROPERTY_CONTACT_ID,
  CreateAffiliateRequest.JSON_PROPERTY_NAME,
  CreateAffiliateRequest.JSON_PROPERTY_STATUS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateAffiliateRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CODE = "code";
  @jakarta.annotation.Nonnull  private String code;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nonnull  private String contactId;

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

  public CreateAffiliateRequest() { 
  }

  public CreateAffiliateRequest code(@jakarta.annotation.Nonnull String code) {
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


  public CreateAffiliateRequest contactId(@jakarta.annotation.Nonnull String contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * The contactId identifier , Must be a positive number
   * @return contactId
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "1", requiredMode = Schema.RequiredMode.REQUIRED, description = "The contactId identifier , Must be a positive number")
  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getContactId() {
    return contactId;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setContactId(@jakarta.annotation.Nonnull String contactId) {
    this.contactId = contactId;
  }


  public CreateAffiliateRequest name(@jakarta.annotation.Nullable String name) {
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


  public CreateAffiliateRequest status(@jakarta.annotation.Nonnull StatusEnum status) {
    this.status = status;
    return this;
  }

  /**
   * The Affiliate Status
   * @return status
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "active", requiredMode = Schema.RequiredMode.REQUIRED, description = "The Affiliate Status")
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
   * Return true if this CreateAffiliateRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateAffiliateRequest createAffiliateRequest = (CreateAffiliateRequest) o;
    return Objects.equals(this.code, createAffiliateRequest.code) &&
        Objects.equals(this.contactId, createAffiliateRequest.contactId) &&
        Objects.equals(this.name, createAffiliateRequest.name) &&
        Objects.equals(this.status, createAffiliateRequest.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, contactId, name, status);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateAffiliateRequest {\n");
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
    
        private CreateAffiliateRequest instance;
    
        public Builder() {
          this(new CreateAffiliateRequest());
        }
    
        protected Builder(CreateAffiliateRequest instance) {
          this.instance = instance;
        }
    
        public CreateAffiliateRequest.Builder code(String code) {
              this.instance.code = code;
          return this;
        }
            public CreateAffiliateRequest.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public CreateAffiliateRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public CreateAffiliateRequest.Builder status(StatusEnum status) {
              this.instance.status = status;
          return this;
        }
        
    
        /**
        * returns a built CreateAffiliateRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateAffiliateRequest build() {
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
      public static CreateAffiliateRequest.Builder builder() {
        return new CreateAffiliateRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateAffiliateRequest.Builder toBuilder() {
        return new CreateAffiliateRequest.Builder()
          .code(getCode())
          .contactId(getContactId())
          .name(getName())
          .status(getStatus());
      }
}

