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
import com.keap.sdk.sdk.model.ReportEntryRecord;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ReportExecutionResult
 */
@JsonPropertyOrder({
  ReportExecutionResult.JSON_PROPERTY_PAGE_TOKEN,
  ReportExecutionResult.JSON_PROPERTY_RESULTS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ReportExecutionResult implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_PAGE_TOKEN = "page_token";
  @jakarta.annotation.Nullable  private String pageToken;

  public static final String JSON_PROPERTY_RESULTS = "results";
  @jakarta.annotation.Nullable  private List<@Valid ReportEntryRecord> results = new ArrayList<>();

  public ReportExecutionResult() { 
  }

  public ReportExecutionResult pageToken(@jakarta.annotation.Nullable String pageToken) {
    this.pageToken = pageToken;
    return this;
  }

  /**
   * Get pageToken
   * @return pageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPageToken() {
    return pageToken;
  }


  @JsonProperty(JSON_PROPERTY_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPageToken(@jakarta.annotation.Nullable String pageToken) {
    this.pageToken = pageToken;
  }


  public ReportExecutionResult results(@jakarta.annotation.Nullable List<@Valid ReportEntryRecord> results) {
    this.results = results;
    return this;
  }

  public ReportExecutionResult addResultsItem(ReportEntryRecord resultsItem) {
    if (this.results == null) {
      this.results = new ArrayList<>();
    }
    this.results.add(resultsItem);
    return this;
  }

  /**
   * Get results
   * @return results
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ReportEntryRecord> getResults() {
    return results;
  }


  @JsonProperty(JSON_PROPERTY_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setResults(@jakarta.annotation.Nullable List<@Valid ReportEntryRecord> results) {
    this.results = results;
  }

  /**
   * Return true if this ReportExecutionResult object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReportExecutionResult reportExecutionResult = (ReportExecutionResult) o;
    return Objects.equals(this.pageToken, reportExecutionResult.pageToken) &&
        Objects.equals(this.results, reportExecutionResult.results);
  }

  @Override
  public int hashCode() {
    return Objects.hash(pageToken, results);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReportExecutionResult {\n");
    sb.append("    pageToken: ").append(toIndentedString(pageToken)).append("\n");
    sb.append("    results: ").append(toIndentedString(results)).append("\n");
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
    
        private ReportExecutionResult instance;
    
        public Builder() {
          this(new ReportExecutionResult());
        }
    
        protected Builder(ReportExecutionResult instance) {
          this.instance = instance;
        }
    
        public ReportExecutionResult.Builder pageToken(String pageToken) {
              this.instance.pageToken = pageToken;
          return this;
        }
            public ReportExecutionResult.Builder results(List<@Valid ReportEntryRecord> results) {
              this.instance.results = results;
          return this;
        }
        
    
        /**
        * returns a built ReportExecutionResult instance.
        *
        * The builder is not reusable.
        */
        public ReportExecutionResult build() {
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
      public static ReportExecutionResult.Builder builder() {
        return new ReportExecutionResult.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ReportExecutionResult.Builder toBuilder() {
        return new ReportExecutionResult.Builder()
          .pageToken(getPageToken())
          .results(getResults());
      }
}

