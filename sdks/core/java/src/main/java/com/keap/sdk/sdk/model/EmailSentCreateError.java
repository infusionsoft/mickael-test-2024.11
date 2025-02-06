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
import com.keap.sdk.sdk.model.CreateEmailSentRequest;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * EmailSentCreateError
 */
@JsonPropertyOrder({
  EmailSentCreateError.JSON_PROPERTY_EMAIL,
  EmailSentCreateError.JSON_PROPERTY_ERROR_MESSAGE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class EmailSentCreateError implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EMAIL = "email";
  @jakarta.annotation.Nullable  private CreateEmailSentRequest email;

  public static final String JSON_PROPERTY_ERROR_MESSAGE = "error_message";
  @jakarta.annotation.Nullable  private String errorMessage;

  public EmailSentCreateError() { 
  }

  public EmailSentCreateError email(@jakarta.annotation.Nullable CreateEmailSentRequest email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CreateEmailSentRequest getEmail() {
    return email;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmail(@jakarta.annotation.Nullable CreateEmailSentRequest email) {
    this.email = email;
  }


  public EmailSentCreateError errorMessage(@jakarta.annotation.Nullable String errorMessage) {
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

  /**
   * Return true if this EmailSentCreateError object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EmailSentCreateError emailSentCreateError = (EmailSentCreateError) o;
    return Objects.equals(this.email, emailSentCreateError.email) &&
        Objects.equals(this.errorMessage, emailSentCreateError.errorMessage);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, errorMessage);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EmailSentCreateError {\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    errorMessage: ").append(toIndentedString(errorMessage)).append("\n");
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
    
        private EmailSentCreateError instance;
    
        public Builder() {
          this(new EmailSentCreateError());
        }
    
        protected Builder(EmailSentCreateError instance) {
          this.instance = instance;
        }
    
        public EmailSentCreateError.Builder email(CreateEmailSentRequest email) {
              this.instance.email = email;
          return this;
        }
            public EmailSentCreateError.Builder errorMessage(String errorMessage) {
              this.instance.errorMessage = errorMessage;
          return this;
        }
        
    
        /**
        * returns a built EmailSentCreateError instance.
        *
        * The builder is not reusable.
        */
        public EmailSentCreateError build() {
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
      public static EmailSentCreateError.Builder builder() {
        return new EmailSentCreateError.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public EmailSentCreateError.Builder toBuilder() {
        return new EmailSentCreateError.Builder()
          .email(getEmail())
          .errorMessage(getErrorMessage());
      }
}

