/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
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
import com.keap.sdk.sdk.model.BasicContact;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListTaggedContactsResponse
 */
@JsonPropertyOrder({
  ListTaggedContactsResponse.JSON_PROPERTY_CONTACTS,
  ListTaggedContactsResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListTaggedContactsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACTS = "contacts";
  @jakarta.annotation.Nullable  private List<@Valid BasicContact> contacts = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListTaggedContactsResponse() { 
  }

  public ListTaggedContactsResponse contacts(@jakarta.annotation.Nullable List<@Valid BasicContact> contacts) {
    this.contacts = contacts;
    return this;
  }

  public ListTaggedContactsResponse addContactsItem(BasicContact contactsItem) {
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
  public List<@Valid BasicContact> getContacts() {
    return contacts;
  }


  @JsonProperty(JSON_PROPERTY_CONTACTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContacts(@jakarta.annotation.Nullable List<@Valid BasicContact> contacts) {
    this.contacts = contacts;
  }


  public ListTaggedContactsResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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
   * Return true if this ListTaggedContactsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListTaggedContactsResponse listTaggedContactsResponse = (ListTaggedContactsResponse) o;
    return Objects.equals(this.contacts, listTaggedContactsResponse.contacts) &&
        Objects.equals(this.nextPageToken, listTaggedContactsResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contacts, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListTaggedContactsResponse {\n");
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
    
        private ListTaggedContactsResponse instance;
    
        public Builder() {
          this(new ListTaggedContactsResponse());
        }
    
        protected Builder(ListTaggedContactsResponse instance) {
          this.instance = instance;
        }
    
        public ListTaggedContactsResponse.Builder contacts(List<@Valid BasicContact> contacts) {
              this.instance.contacts = contacts;
          return this;
        }
            public ListTaggedContactsResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListTaggedContactsResponse instance.
        *
        * The builder is not reusable.
        */
        public ListTaggedContactsResponse build() {
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
      public static ListTaggedContactsResponse.Builder builder() {
        return new ListTaggedContactsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListTaggedContactsResponse.Builder toBuilder() {
        return new ListTaggedContactsResponse.Builder()
          .contacts(getContacts())
          .nextPageToken(getNextPageToken());
      }
}

