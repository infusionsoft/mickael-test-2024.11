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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateEmailsSentRequest
 */
@JsonPropertyOrder({
  CreateEmailsSentRequest.JSON_PROPERTY_EMAILS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateEmailsSentRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EMAILS = "emails";
  @jakarta.annotation.Nullable  private List<@Valid CreateEmailSentRequest> emails = new ArrayList<>();

  public CreateEmailsSentRequest() { 
  }

  public CreateEmailsSentRequest emails(@jakarta.annotation.Nullable List<@Valid CreateEmailSentRequest> emails) {
    this.emails = emails;
    return this;
  }

  public CreateEmailsSentRequest addEmailsItem(CreateEmailSentRequest emailsItem) {
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
  public List<@Valid CreateEmailSentRequest> getEmails() {
    return emails;
  }


  @JsonProperty(JSON_PROPERTY_EMAILS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmails(@jakarta.annotation.Nullable List<@Valid CreateEmailSentRequest> emails) {
    this.emails = emails;
  }

  /**
   * Return true if this CreateEmailsSentRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateEmailsSentRequest createEmailsSentRequest = (CreateEmailsSentRequest) o;
    return Objects.equals(this.emails, createEmailsSentRequest.emails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(emails);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateEmailsSentRequest {\n");
    sb.append("    emails: ").append(toIndentedString(emails)).append("\n");
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
    
        private CreateEmailsSentRequest instance;
    
        public Builder() {
          this(new CreateEmailsSentRequest());
        }
    
        protected Builder(CreateEmailsSentRequest instance) {
          this.instance = instance;
        }
    
        public CreateEmailsSentRequest.Builder emails(List<@Valid CreateEmailSentRequest> emails) {
              this.instance.emails = emails;
          return this;
        }
        
    
        /**
        * returns a built CreateEmailsSentRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateEmailsSentRequest build() {
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
      public static CreateEmailsSentRequest.Builder builder() {
        return new CreateEmailsSentRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateEmailsSentRequest.Builder toBuilder() {
        return new CreateEmailsSentRequest.Builder()
          .emails(getEmails());
      }
}

