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
import com.keap.sdk.sdk.model.LeadSource;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListLeadSourcesResponse
 */
@JsonPropertyOrder({
  ListLeadSourcesResponse.JSON_PROPERTY_LEADSOURCES,
  ListLeadSourcesResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListLeadSourcesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_LEADSOURCES = "leadsources";
  @jakarta.annotation.Nullable  private List<@Valid LeadSource> leadsources = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListLeadSourcesResponse() { 
  }

  public ListLeadSourcesResponse leadsources(@jakarta.annotation.Nullable List<@Valid LeadSource> leadsources) {
    this.leadsources = leadsources;
    return this;
  }

  public ListLeadSourcesResponse addLeadsourcesItem(LeadSource leadsourcesItem) {
    if (this.leadsources == null) {
      this.leadsources = new ArrayList<>();
    }
    this.leadsources.add(leadsourcesItem);
    return this;
  }

  /**
   * Get leadsources
   * @return leadsources
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LEADSOURCES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid LeadSource> getLeadsources() {
    return leadsources;
  }


  @JsonProperty(JSON_PROPERTY_LEADSOURCES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLeadsources(@jakarta.annotation.Nullable List<@Valid LeadSource> leadsources) {
    this.leadsources = leadsources;
  }


  public ListLeadSourcesResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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
   * Return true if this ListLeadSourcesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListLeadSourcesResponse listLeadSourcesResponse = (ListLeadSourcesResponse) o;
    return Objects.equals(this.leadsources, listLeadSourcesResponse.leadsources) &&
        Objects.equals(this.nextPageToken, listLeadSourcesResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(leadsources, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListLeadSourcesResponse {\n");
    sb.append("    leadsources: ").append(toIndentedString(leadsources)).append("\n");
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
    
        private ListLeadSourcesResponse instance;
    
        public Builder() {
          this(new ListLeadSourcesResponse());
        }
    
        protected Builder(ListLeadSourcesResponse instance) {
          this.instance = instance;
        }
    
        public ListLeadSourcesResponse.Builder leadsources(List<@Valid LeadSource> leadsources) {
              this.instance.leadsources = leadsources;
          return this;
        }
            public ListLeadSourcesResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListLeadSourcesResponse instance.
        *
        * The builder is not reusable.
        */
        public ListLeadSourcesResponse build() {
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
      public static ListLeadSourcesResponse.Builder builder() {
        return new ListLeadSourcesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListLeadSourcesResponse.Builder toBuilder() {
        return new ListLeadSourcesResponse.Builder()
          .leadsources(getLeadsources())
          .nextPageToken(getNextPageToken());
      }
}

