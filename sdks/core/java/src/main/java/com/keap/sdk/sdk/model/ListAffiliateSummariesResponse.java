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
import com.keap.sdk.sdk.model.AffiliateSummaryRecord;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListAffiliateSummariesResponse
 */
@JsonPropertyOrder({
  ListAffiliateSummariesResponse.JSON_PROPERTY_AFFILIATE_SUMMARIES,
  ListAffiliateSummariesResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListAffiliateSummariesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFFILIATE_SUMMARIES = "affiliate_summaries";
  @jakarta.annotation.Nullable  private List<@Valid AffiliateSummaryRecord> affiliateSummaries = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListAffiliateSummariesResponse() { 
  }

  public ListAffiliateSummariesResponse affiliateSummaries(@jakarta.annotation.Nullable List<@Valid AffiliateSummaryRecord> affiliateSummaries) {
    this.affiliateSummaries = affiliateSummaries;
    return this;
  }

  public ListAffiliateSummariesResponse addAffiliateSummariesItem(AffiliateSummaryRecord affiliateSummariesItem) {
    if (this.affiliateSummaries == null) {
      this.affiliateSummaries = new ArrayList<>();
    }
    this.affiliateSummaries.add(affiliateSummariesItem);
    return this;
  }

  /**
   * Get affiliateSummaries
   * @return affiliateSummaries
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AFFILIATE_SUMMARIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid AffiliateSummaryRecord> getAffiliateSummaries() {
    return affiliateSummaries;
  }


  @JsonProperty(JSON_PROPERTY_AFFILIATE_SUMMARIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAffiliateSummaries(@jakarta.annotation.Nullable List<@Valid AffiliateSummaryRecord> affiliateSummaries) {
    this.affiliateSummaries = affiliateSummaries;
  }


  public ListAffiliateSummariesResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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
   * Return true if this ListAffiliateSummariesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListAffiliateSummariesResponse listAffiliateSummariesResponse = (ListAffiliateSummariesResponse) o;
    return Objects.equals(this.affiliateSummaries, listAffiliateSummariesResponse.affiliateSummaries) &&
        Objects.equals(this.nextPageToken, listAffiliateSummariesResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affiliateSummaries, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListAffiliateSummariesResponse {\n");
    sb.append("    affiliateSummaries: ").append(toIndentedString(affiliateSummaries)).append("\n");
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
    
        private ListAffiliateSummariesResponse instance;
    
        public Builder() {
          this(new ListAffiliateSummariesResponse());
        }
    
        protected Builder(ListAffiliateSummariesResponse instance) {
          this.instance = instance;
        }
    
        public ListAffiliateSummariesResponse.Builder affiliateSummaries(List<@Valid AffiliateSummaryRecord> affiliateSummaries) {
              this.instance.affiliateSummaries = affiliateSummaries;
          return this;
        }
            public ListAffiliateSummariesResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListAffiliateSummariesResponse instance.
        *
        * The builder is not reusable.
        */
        public ListAffiliateSummariesResponse build() {
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
      public static ListAffiliateSummariesResponse.Builder builder() {
        return new ListAffiliateSummariesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListAffiliateSummariesResponse.Builder toBuilder() {
        return new ListAffiliateSummariesResponse.Builder()
          .affiliateSummaries(getAffiliateSummaries())
          .nextPageToken(getNextPageToken());
      }
}

