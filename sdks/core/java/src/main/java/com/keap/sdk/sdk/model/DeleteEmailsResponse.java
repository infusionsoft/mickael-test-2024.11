/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * DeleteEmailsResponse
 */
@JsonPropertyOrder({
  DeleteEmailsResponse.JSON_PROPERTY_RESULTS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class DeleteEmailsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_RESULTS = "results";
  @jakarta.annotation.Nullable  private Map<String, String> results = new HashMap<>();

  public DeleteEmailsResponse() { 
  }

  public DeleteEmailsResponse results(@jakarta.annotation.Nullable Map<String, String> results) {
    this.results = results;
    return this;
  }

  public DeleteEmailsResponse putResultsItem(String key, String resultsItem) {
    if (this.results == null) {
      this.results = new HashMap<>();
    }
    this.results.put(key, resultsItem);
    return this;
  }

  /**
   * Get results
   * @return results
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Map<String, String> getResults() {
    return results;
  }


  @JsonProperty(JSON_PROPERTY_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setResults(@jakarta.annotation.Nullable Map<String, String> results) {
    this.results = results;
  }

  /**
   * Return true if this DeleteEmailsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DeleteEmailsResponse deleteEmailsResponse = (DeleteEmailsResponse) o;
    return Objects.equals(this.results, deleteEmailsResponse.results);
  }

  @Override
  public int hashCode() {
    return Objects.hash(results);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DeleteEmailsResponse {\n");
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
    
        private DeleteEmailsResponse instance;
    
        public Builder() {
          this(new DeleteEmailsResponse());
        }
    
        protected Builder(DeleteEmailsResponse instance) {
          this.instance = instance;
        }
    
        public DeleteEmailsResponse.Builder results(Map<String, String> results) {
              this.instance.results = results;
          return this;
        }
        
    
        /**
        * returns a built DeleteEmailsResponse instance.
        *
        * The builder is not reusable.
        */
        public DeleteEmailsResponse build() {
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
      public static DeleteEmailsResponse.Builder builder() {
        return new DeleteEmailsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public DeleteEmailsResponse.Builder toBuilder() {
        return new DeleteEmailsResponse.Builder()
          .results(getResults());
      }
}

