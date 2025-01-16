/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
 * CreatePaymentMethodConfigRequest
 */
@JsonPropertyOrder({
  CreatePaymentMethodConfigRequest.JSON_PROPERTY_CONTACT_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreatePaymentMethodConfigRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public CreatePaymentMethodConfigRequest() { 
  }

  public CreatePaymentMethodConfigRequest contactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * Get contactId
   * @return contactId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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

  /**
   * Return true if this CreatePaymentMethodConfigRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreatePaymentMethodConfigRequest createPaymentMethodConfigRequest = (CreatePaymentMethodConfigRequest) o;
    return Objects.equals(this.contactId, createPaymentMethodConfigRequest.contactId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contactId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreatePaymentMethodConfigRequest {\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
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
    
        private CreatePaymentMethodConfigRequest instance;
    
        public Builder() {
          this(new CreatePaymentMethodConfigRequest());
        }
    
        protected Builder(CreatePaymentMethodConfigRequest instance) {
          this.instance = instance;
        }
    
        public CreatePaymentMethodConfigRequest.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
        
    
        /**
        * returns a built CreatePaymentMethodConfigRequest instance.
        *
        * The builder is not reusable.
        */
        public CreatePaymentMethodConfigRequest build() {
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
      public static CreatePaymentMethodConfigRequest.Builder builder() {
        return new CreatePaymentMethodConfigRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreatePaymentMethodConfigRequest.Builder toBuilder() {
        return new CreatePaymentMethodConfigRequest.Builder()
          .contactId(getContactId());
      }
}

