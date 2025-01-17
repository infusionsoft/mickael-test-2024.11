/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
import com.keap.sdk.sdk.model.Deal;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Response for a list of deals in a stage.
 */
@Schema(description = "Response for a list of deals in a stage.")
@JsonPropertyOrder({
  StageDealListResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  StageDealListResponse.JSON_PROPERTY_DEALS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class StageDealListResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_DEALS = "deals";
  @jakarta.annotation.Nullable  private List<@Valid Deal> deals = new ArrayList<>();

  public StageDealListResponse() { 
  }

  public StageDealListResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Token for the next page of results.
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Token for the next page of results.")
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


  public StageDealListResponse deals(@jakarta.annotation.Nullable List<@Valid Deal> deals) {
    this.deals = deals;
    return this;
  }

  public StageDealListResponse addDealsItem(Deal dealsItem) {
    if (this.deals == null) {
      this.deals = new ArrayList<>();
    }
    this.deals.add(dealsItem);
    return this;
  }

  /**
   * The list of deals in a stage.
   * @return deals
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The list of deals in a stage.")
  @JsonProperty(JSON_PROPERTY_DEALS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Deal> getDeals() {
    return deals;
  }


  @JsonProperty(JSON_PROPERTY_DEALS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDeals(@jakarta.annotation.Nullable List<@Valid Deal> deals) {
    this.deals = deals;
  }

  /**
   * Return true if this StageDealListResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StageDealListResponse stageDealListResponse = (StageDealListResponse) o;
    return Objects.equals(this.nextPageToken, stageDealListResponse.nextPageToken) &&
        Objects.equals(this.deals, stageDealListResponse.deals);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, deals);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StageDealListResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    deals: ").append(toIndentedString(deals)).append("\n");
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
    
        private StageDealListResponse instance;
    
        public Builder() {
          this(new StageDealListResponse());
        }
    
        protected Builder(StageDealListResponse instance) {
          this.instance = instance;
        }
    
        public StageDealListResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public StageDealListResponse.Builder deals(List<@Valid Deal> deals) {
              this.instance.deals = deals;
          return this;
        }
        
    
        /**
        * returns a built StageDealListResponse instance.
        *
        * The builder is not reusable.
        */
        public StageDealListResponse build() {
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
      public static StageDealListResponse.Builder builder() {
        return new StageDealListResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public StageDealListResponse.Builder toBuilder() {
        return new StageDealListResponse.Builder()
          .nextPageToken(getNextPageToken())
          .deals(getDeals());
      }
}

