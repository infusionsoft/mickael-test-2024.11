/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
import com.keap.sdk.sdk.model.EmailSentCreateError;
import com.keap.sdk.sdk.model.EmailSentWithContent;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * EmailsSentList
 */
@JsonPropertyOrder({
  EmailsSentList.JSON_PROPERTY_EMAILS,
  EmailsSentList.JSON_PROPERTY_ERRORS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class EmailsSentList implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EMAILS = "emails";
  @jakarta.annotation.Nullable  private List<@Valid EmailSentWithContent> emails = new ArrayList<>();

  public static final String JSON_PROPERTY_ERRORS = "errors";
  @jakarta.annotation.Nullable  private List<@Valid EmailSentCreateError> errors = new ArrayList<>();

  public EmailsSentList() { 
  }

  public EmailsSentList emails(@jakarta.annotation.Nullable List<@Valid EmailSentWithContent> emails) {
    this.emails = emails;
    return this;
  }

  public EmailsSentList addEmailsItem(EmailSentWithContent emailsItem) {
    if (this.emails == null) {
      this.emails = new ArrayList<>();
    }
    this.emails.add(emailsItem);
    return this;
  }

  /**
   * Get emails
   * @return emails
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAILS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid EmailSentWithContent> getEmails() {
    return emails;
  }


  @JsonProperty(JSON_PROPERTY_EMAILS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmails(@jakarta.annotation.Nullable List<@Valid EmailSentWithContent> emails) {
    this.emails = emails;
  }


  public EmailsSentList errors(@jakarta.annotation.Nullable List<@Valid EmailSentCreateError> errors) {
    this.errors = errors;
    return this;
  }

  public EmailsSentList addErrorsItem(EmailSentCreateError errorsItem) {
    if (this.errors == null) {
      this.errors = new ArrayList<>();
    }
    this.errors.add(errorsItem);
    return this;
  }

  /**
   * Get errors
   * @return errors
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ERRORS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid EmailSentCreateError> getErrors() {
    return errors;
  }


  @JsonProperty(JSON_PROPERTY_ERRORS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setErrors(@jakarta.annotation.Nullable List<@Valid EmailSentCreateError> errors) {
    this.errors = errors;
  }

  /**
   * Return true if this EmailsSentList object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EmailsSentList emailsSentList = (EmailsSentList) o;
    return Objects.equals(this.emails, emailsSentList.emails) &&
        Objects.equals(this.errors, emailsSentList.errors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(emails, errors);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EmailsSentList {\n");
    sb.append("    emails: ").append(toIndentedString(emails)).append("\n");
    sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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
    
        private EmailsSentList instance;
    
        public Builder() {
          this(new EmailsSentList());
        }
    
        protected Builder(EmailsSentList instance) {
          this.instance = instance;
        }
    
        public EmailsSentList.Builder emails(List<@Valid EmailSentWithContent> emails) {
              this.instance.emails = emails;
          return this;
        }
            public EmailsSentList.Builder errors(List<@Valid EmailSentCreateError> errors) {
              this.instance.errors = errors;
          return this;
        }
        
    
        /**
        * returns a built EmailsSentList instance.
        *
        * The builder is not reusable.
        */
        public EmailsSentList build() {
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
      public static EmailsSentList.Builder builder() {
        return new EmailsSentList.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public EmailsSentList.Builder toBuilder() {
        return new EmailsSentList.Builder()
          .emails(getEmails())
          .errors(getErrors());
      }
}

