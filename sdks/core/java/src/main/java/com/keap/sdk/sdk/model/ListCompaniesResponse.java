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
import com.keap.sdk.sdk.model.Company;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListCompaniesResponse
 */
@JsonPropertyOrder({
  ListCompaniesResponse.JSON_PROPERTY_COMPANIES,
  ListCompaniesResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListCompaniesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_COMPANIES = "companies";
  @jakarta.annotation.Nullable  private List<@Valid Company> companies = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListCompaniesResponse() { 
  }

  public ListCompaniesResponse companies(@jakarta.annotation.Nullable List<@Valid Company> companies) {
    this.companies = companies;
    return this;
  }

  public ListCompaniesResponse addCompaniesItem(Company companiesItem) {
    if (this.companies == null) {
      this.companies = new ArrayList<>();
    }
    this.companies.add(companiesItem);
    return this;
  }

  /**
   * Get companies
   * @return companies
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMPANIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Company> getCompanies() {
    return companies;
  }


  @JsonProperty(JSON_PROPERTY_COMPANIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompanies(@jakarta.annotation.Nullable List<@Valid Company> companies) {
    this.companies = companies;
  }


  public ListCompaniesResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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
   * Return true if this ListCompaniesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListCompaniesResponse listCompaniesResponse = (ListCompaniesResponse) o;
    return Objects.equals(this.companies, listCompaniesResponse.companies) &&
        Objects.equals(this.nextPageToken, listCompaniesResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(companies, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListCompaniesResponse {\n");
    sb.append("    companies: ").append(toIndentedString(companies)).append("\n");
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
    
        private ListCompaniesResponse instance;
    
        public Builder() {
          this(new ListCompaniesResponse());
        }
    
        protected Builder(ListCompaniesResponse instance) {
          this.instance = instance;
        }
    
        public ListCompaniesResponse.Builder companies(List<@Valid Company> companies) {
              this.instance.companies = companies;
          return this;
        }
            public ListCompaniesResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListCompaniesResponse instance.
        *
        * The builder is not reusable.
        */
        public ListCompaniesResponse build() {
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
      public static ListCompaniesResponse.Builder builder() {
        return new ListCompaniesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListCompaniesResponse.Builder toBuilder() {
        return new ListCompaniesResponse.Builder()
          .companies(getCompanies())
          .nextPageToken(getNextPageToken());
      }
}

