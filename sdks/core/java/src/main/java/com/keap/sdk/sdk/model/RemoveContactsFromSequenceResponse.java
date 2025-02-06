/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
 * RemoveContactsFromSequenceResponse
 */
@JsonPropertyOrder({
  RemoveContactsFromSequenceResponse.JSON_PROPERTY_REMOVE_FROM_SEQUENCE_RESULTS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RemoveContactsFromSequenceResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REMOVE_FROM_SEQUENCE_RESULTS = "remove_from_sequence_results";
  @jakarta.annotation.Nullable  private Map<String, String> removeFromSequenceResults = new HashMap<>();

  public RemoveContactsFromSequenceResponse() { 
  }

  public RemoveContactsFromSequenceResponse removeFromSequenceResults(@jakarta.annotation.Nullable Map<String, String> removeFromSequenceResults) {
    this.removeFromSequenceResults = removeFromSequenceResults;
    return this;
  }

  public RemoveContactsFromSequenceResponse putRemoveFromSequenceResultsItem(String key, String removeFromSequenceResultsItem) {
    if (this.removeFromSequenceResults == null) {
      this.removeFromSequenceResults = new HashMap<>();
    }
    this.removeFromSequenceResults.put(key, removeFromSequenceResultsItem);
    return this;
  }

  /**
   * Get removeFromSequenceResults
   * @return removeFromSequenceResults
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REMOVE_FROM_SEQUENCE_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Map<String, String> getRemoveFromSequenceResults() {
    return removeFromSequenceResults;
  }


  @JsonProperty(JSON_PROPERTY_REMOVE_FROM_SEQUENCE_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRemoveFromSequenceResults(@jakarta.annotation.Nullable Map<String, String> removeFromSequenceResults) {
    this.removeFromSequenceResults = removeFromSequenceResults;
  }

  /**
   * Return true if this RemoveContactsFromSequenceResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RemoveContactsFromSequenceResponse removeContactsFromSequenceResponse = (RemoveContactsFromSequenceResponse) o;
    return Objects.equals(this.removeFromSequenceResults, removeContactsFromSequenceResponse.removeFromSequenceResults);
  }

  @Override
  public int hashCode() {
    return Objects.hash(removeFromSequenceResults);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RemoveContactsFromSequenceResponse {\n");
    sb.append("    removeFromSequenceResults: ").append(toIndentedString(removeFromSequenceResults)).append("\n");
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
    
        private RemoveContactsFromSequenceResponse instance;
    
        public Builder() {
          this(new RemoveContactsFromSequenceResponse());
        }
    
        protected Builder(RemoveContactsFromSequenceResponse instance) {
          this.instance = instance;
        }
    
        public RemoveContactsFromSequenceResponse.Builder removeFromSequenceResults(Map<String, String> removeFromSequenceResults) {
              this.instance.removeFromSequenceResults = removeFromSequenceResults;
          return this;
        }
        
    
        /**
        * returns a built RemoveContactsFromSequenceResponse instance.
        *
        * The builder is not reusable.
        */
        public RemoveContactsFromSequenceResponse build() {
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
      public static RemoveContactsFromSequenceResponse.Builder builder() {
        return new RemoveContactsFromSequenceResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RemoveContactsFromSequenceResponse.Builder toBuilder() {
        return new RemoveContactsFromSequenceResponse.Builder()
          .removeFromSequenceResults(getRemoveFromSequenceResults());
      }
}

