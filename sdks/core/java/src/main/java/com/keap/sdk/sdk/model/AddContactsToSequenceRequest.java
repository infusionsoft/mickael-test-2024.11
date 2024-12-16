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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * AddContactsToSequenceRequest
 */
@JsonPropertyOrder({
  AddContactsToSequenceRequest.JSON_PROPERTY_CONTACT_IDS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class AddContactsToSequenceRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACT_IDS = "contact_ids";
  @jakarta.annotation.Nullable  private List<String> contactIds = new ArrayList<>();

  public AddContactsToSequenceRequest() { 
  }

  public AddContactsToSequenceRequest contactIds(@jakarta.annotation.Nullable List<String> contactIds) {
    this.contactIds = contactIds;
    return this;
  }

  public AddContactsToSequenceRequest addContactIdsItem(String contactIdsItem) {
    if (this.contactIds == null) {
      this.contactIds = new ArrayList<>();
    }
    this.contactIds.add(contactIdsItem);
    return this;
  }

  /**
   * Get contactIds
   * @return contactIds
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getContactIds() {
    return contactIds;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactIds(@jakarta.annotation.Nullable List<String> contactIds) {
    this.contactIds = contactIds;
  }

  /**
   * Return true if this AddContactsToSequenceRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AddContactsToSequenceRequest addContactsToSequenceRequest = (AddContactsToSequenceRequest) o;
    return Objects.equals(this.contactIds, addContactsToSequenceRequest.contactIds);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contactIds);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AddContactsToSequenceRequest {\n");
    sb.append("    contactIds: ").append(toIndentedString(contactIds)).append("\n");
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
    
        private AddContactsToSequenceRequest instance;
    
        public Builder() {
          this(new AddContactsToSequenceRequest());
        }
    
        protected Builder(AddContactsToSequenceRequest instance) {
          this.instance = instance;
        }
    
        public AddContactsToSequenceRequest.Builder contactIds(List<String> contactIds) {
              this.instance.contactIds = contactIds;
          return this;
        }
        
    
        /**
        * returns a built AddContactsToSequenceRequest instance.
        *
        * The builder is not reusable.
        */
        public AddContactsToSequenceRequest build() {
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
      public static AddContactsToSequenceRequest.Builder builder() {
        return new AddContactsToSequenceRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AddContactsToSequenceRequest.Builder toBuilder() {
        return new AddContactsToSequenceRequest.Builder()
          .contactIds(getContactIds());
      }
}

