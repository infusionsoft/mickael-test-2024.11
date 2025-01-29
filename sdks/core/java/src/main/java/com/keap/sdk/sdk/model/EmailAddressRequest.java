/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.770650
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
 * EmailAddressRequest
 */
@JsonPropertyOrder({
  EmailAddressRequest.JSON_PROPERTY_EMAIL,
  EmailAddressRequest.JSON_PROPERTY_FIELD,
  EmailAddressRequest.JSON_PROPERTY_OPT_IN_REASON
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class EmailAddressRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EMAIL = "email";
  @jakarta.annotation.Nullable  private String email;

  /**
   * Gets or Sets field
   */
  public enum FieldEnum {
    EMAIL_FIELD_UNSPECIFIED(String.valueOf("EMAIL_FIELD_UNSPECIFIED")),
    
    EMAIL1(String.valueOf("EMAIL1")),
    
    EMAIL2(String.valueOf("EMAIL2")),
    
    EMAIL3(String.valueOf("EMAIL3")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    FieldEnum(String value) {
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
    public static FieldEnum fromValue(String value) {
      for (FieldEnum b : FieldEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_FIELD = "field";
  @jakarta.annotation.Nullable  private FieldEnum field;

  public static final String JSON_PROPERTY_OPT_IN_REASON = "opt_in_reason";
  @jakarta.annotation.Nullable  private String optInReason;

  public EmailAddressRequest() { 
  }

  public EmailAddressRequest email(@jakarta.annotation.Nullable String email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getEmail() {
    return email;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmail(@jakarta.annotation.Nullable String email) {
    this.email = email;
  }


  public EmailAddressRequest field(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
    return this;
  }

  /**
   * Get field
   * @return field
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public FieldEnum getField() {
    return field;
  }


  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setField(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
  }


  public EmailAddressRequest optInReason(@jakarta.annotation.Nullable String optInReason) {
    this.optInReason = optInReason;
    return this;
  }

  /**
   * Get optInReason
   * @return optInReason
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPT_IN_REASON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getOptInReason() {
    return optInReason;
  }


  @JsonProperty(JSON_PROPERTY_OPT_IN_REASON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptInReason(@jakarta.annotation.Nullable String optInReason) {
    this.optInReason = optInReason;
  }

  /**
   * Return true if this EmailAddressRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EmailAddressRequest emailAddressRequest = (EmailAddressRequest) o;
    return Objects.equals(this.email, emailAddressRequest.email) &&
        Objects.equals(this.field, emailAddressRequest.field) &&
        Objects.equals(this.optInReason, emailAddressRequest.optInReason);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, field, optInReason);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EmailAddressRequest {\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    field: ").append(toIndentedString(field)).append("\n");
    sb.append("    optInReason: ").append(toIndentedString(optInReason)).append("\n");
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
    
        private EmailAddressRequest instance;
    
        public Builder() {
          this(new EmailAddressRequest());
        }
    
        protected Builder(EmailAddressRequest instance) {
          this.instance = instance;
        }
    
        public EmailAddressRequest.Builder email(String email) {
              this.instance.email = email;
          return this;
        }
            public EmailAddressRequest.Builder field(FieldEnum field) {
              this.instance.field = field;
          return this;
        }
            public EmailAddressRequest.Builder optInReason(String optInReason) {
              this.instance.optInReason = optInReason;
          return this;
        }
        
    
        /**
        * returns a built EmailAddressRequest instance.
        *
        * The builder is not reusable.
        */
        public EmailAddressRequest build() {
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
      public static EmailAddressRequest.Builder builder() {
        return new EmailAddressRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public EmailAddressRequest.Builder toBuilder() {
        return new EmailAddressRequest.Builder()
          .email(getEmail())
          .field(getField())
          .optInReason(getOptInReason());
      }
}

