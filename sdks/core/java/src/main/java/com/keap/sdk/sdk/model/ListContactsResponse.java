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
import com.keap.sdk.sdk.model.Contact;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListContactsResponse
 */
@JsonPropertyOrder({
  ListContactsResponse.JSON_PROPERTY_CONTACTS,
  ListContactsResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListContactsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACTS = "contacts";
  @jakarta.annotation.Nullable  private List<@Valid Contact> contacts = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListContactsResponse() { 
  }

  public ListContactsResponse contacts(@jakarta.annotation.Nullable List<@Valid Contact> contacts) {
    this.contacts = contacts;
    return this;
  }

  public ListContactsResponse addContactsItem(Contact contactsItem) {
    if (this.contacts == null) {
      this.contacts = new ArrayList<>();
    }
    this.contacts.add(contactsItem);
    return this;
  }

  /**
   * Get contacts
   * @return contacts
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Contact> getContacts() {
    return contacts;
  }


  @JsonProperty(JSON_PROPERTY_CONTACTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContacts(@jakarta.annotation.Nullable List<@Valid Contact> contacts) {
    this.contacts = contacts;
  }


  public ListContactsResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Get nextPageToken
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextPageToken() {
    return nextPageToken;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
  }

  /**
   * Return true if this ListContactsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListContactsResponse listContactsResponse = (ListContactsResponse) o;
    return Objects.equals(this.contacts, listContactsResponse.contacts) &&
        Objects.equals(this.nextPageToken, listContactsResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contacts, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListContactsResponse {\n");
    sb.append("    contacts: ").append(toIndentedString(contacts)).append("\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
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
    
        private ListContactsResponse instance;
    
        public Builder() {
          this(new ListContactsResponse());
        }
    
        protected Builder(ListContactsResponse instance) {
          this.instance = instance;
        }
    
        public ListContactsResponse.Builder contacts(List<@Valid Contact> contacts) {
              this.instance.contacts = contacts;
          return this;
        }
            public ListContactsResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListContactsResponse instance.
        *
        * The builder is not reusable.
        */
        public ListContactsResponse build() {
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
      public static ListContactsResponse.Builder builder() {
        return new ListContactsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListContactsResponse.Builder toBuilder() {
        return new ListContactsResponse.Builder()
          .contacts(getContacts())
          .nextPageToken(getNextPageToken());
      }
}

