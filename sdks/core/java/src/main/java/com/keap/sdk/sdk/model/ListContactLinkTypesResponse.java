/*
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
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
import com.keap.sdk.sdk.model.ContactLinkType;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListContactLinkTypesResponse
 */
@JsonPropertyOrder({
  ListContactLinkTypesResponse.JSON_PROPERTY_CONTACT_LINK_TYPES,
  ListContactLinkTypesResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.9.0")
public class ListContactLinkTypesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACT_LINK_TYPES = "contact_link_types";
  private List<@Valid ContactLinkType> contactLinkTypes = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  private String nextPageToken;

  public ListContactLinkTypesResponse() { 
  }

  public ListContactLinkTypesResponse contactLinkTypes(List<@Valid ContactLinkType> contactLinkTypes) {
    this.contactLinkTypes = contactLinkTypes;
    return this;
  }

  public ListContactLinkTypesResponse addContactLinkTypesItem(ContactLinkType contactLinkTypesItem) {
    if (this.contactLinkTypes == null) {
      this.contactLinkTypes = new ArrayList<>();
    }
    this.contactLinkTypes.add(contactLinkTypesItem);
    return this;
  }

  /**
   * Get contactLinkTypes
   * @return contactLinkTypes
   */
  @jakarta.annotation.Nullable
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_LINK_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ContactLinkType> getContactLinkTypes() {
    return contactLinkTypes;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_LINK_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactLinkTypes(List<@Valid ContactLinkType> contactLinkTypes) {
    this.contactLinkTypes = contactLinkTypes;
  }


  public ListContactLinkTypesResponse nextPageToken(String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Get nextPageToken
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextPageToken() {
    return nextPageToken;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextPageToken(String nextPageToken) {
    this.nextPageToken = nextPageToken;
  }

  /**
   * Return true if this ListContactLinkTypesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListContactLinkTypesResponse listContactLinkTypesResponse = (ListContactLinkTypesResponse) o;
    return Objects.equals(this.contactLinkTypes, listContactLinkTypesResponse.contactLinkTypes) &&
        Objects.equals(this.nextPageToken, listContactLinkTypesResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contactLinkTypes, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListContactLinkTypesResponse {\n");
    sb.append("    contactLinkTypes: ").append(toIndentedString(contactLinkTypes)).append("\n");
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
    
        private ListContactLinkTypesResponse instance;
    
        public Builder() {
          this(new ListContactLinkTypesResponse());
        }
    
        protected Builder(ListContactLinkTypesResponse instance) {
          this.instance = instance;
        }
    
        public ListContactLinkTypesResponse.Builder contactLinkTypes(List<@Valid ContactLinkType> contactLinkTypes) {
              this.instance.contactLinkTypes = contactLinkTypes;
          return this;
        }
            public ListContactLinkTypesResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListContactLinkTypesResponse instance.
        *
        * The builder is not reusable.
        */
        public ListContactLinkTypesResponse build() {
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
      public static ListContactLinkTypesResponse.Builder builder() {
        return new ListContactLinkTypesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListContactLinkTypesResponse.Builder toBuilder() {
        return new ListContactLinkTypesResponse.Builder()
          .contactLinkTypes(getContactLinkTypes())
          .nextPageToken(getNextPageToken());
      }
}

