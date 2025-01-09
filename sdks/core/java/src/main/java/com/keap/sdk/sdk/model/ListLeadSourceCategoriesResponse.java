/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
import com.keap.sdk.sdk.model.LeadSourceCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListLeadSourceCategoriesResponse
 */
@JsonPropertyOrder({
  ListLeadSourceCategoriesResponse.JSON_PROPERTY_LEAD_SOURCE_CATEGORIES,
  ListLeadSourceCategoriesResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListLeadSourceCategoriesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_LEAD_SOURCE_CATEGORIES = "lead_source_categories";
  @jakarta.annotation.Nullable  private List<@Valid LeadSourceCategory> leadSourceCategories = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListLeadSourceCategoriesResponse() { 
  }

  public ListLeadSourceCategoriesResponse leadSourceCategories(@jakarta.annotation.Nullable List<@Valid LeadSourceCategory> leadSourceCategories) {
    this.leadSourceCategories = leadSourceCategories;
    return this;
  }

  public ListLeadSourceCategoriesResponse addLeadSourceCategoriesItem(LeadSourceCategory leadSourceCategoriesItem) {
    if (this.leadSourceCategories == null) {
      this.leadSourceCategories = new ArrayList<>();
    }
    this.leadSourceCategories.add(leadSourceCategoriesItem);
    return this;
  }

  /**
   * Get leadSourceCategories
   * @return leadSourceCategories
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LEAD_SOURCE_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid LeadSourceCategory> getLeadSourceCategories() {
    return leadSourceCategories;
  }


  @JsonProperty(JSON_PROPERTY_LEAD_SOURCE_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLeadSourceCategories(@jakarta.annotation.Nullable List<@Valid LeadSourceCategory> leadSourceCategories) {
    this.leadSourceCategories = leadSourceCategories;
  }


  public ListLeadSourceCategoriesResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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
   * Return true if this ListLeadSourceCategoriesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListLeadSourceCategoriesResponse listLeadSourceCategoriesResponse = (ListLeadSourceCategoriesResponse) o;
    return Objects.equals(this.leadSourceCategories, listLeadSourceCategoriesResponse.leadSourceCategories) &&
        Objects.equals(this.nextPageToken, listLeadSourceCategoriesResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(leadSourceCategories, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListLeadSourceCategoriesResponse {\n");
    sb.append("    leadSourceCategories: ").append(toIndentedString(leadSourceCategories)).append("\n");
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
    
        private ListLeadSourceCategoriesResponse instance;
    
        public Builder() {
          this(new ListLeadSourceCategoriesResponse());
        }
    
        protected Builder(ListLeadSourceCategoriesResponse instance) {
          this.instance = instance;
        }
    
        public ListLeadSourceCategoriesResponse.Builder leadSourceCategories(List<@Valid LeadSourceCategory> leadSourceCategories) {
              this.instance.leadSourceCategories = leadSourceCategories;
          return this;
        }
            public ListLeadSourceCategoriesResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListLeadSourceCategoriesResponse instance.
        *
        * The builder is not reusable.
        */
        public ListLeadSourceCategoriesResponse build() {
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
      public static ListLeadSourceCategoriesResponse.Builder builder() {
        return new ListLeadSourceCategoriesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListLeadSourceCategoriesResponse.Builder toBuilder() {
        return new ListLeadSourceCategoriesResponse.Builder()
          .leadSourceCategories(getLeadSourceCategories())
          .nextPageToken(getNextPageToken());
      }
}

