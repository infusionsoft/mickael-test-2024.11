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
 * AddContactsToSequenceResponse
 */
@JsonPropertyOrder({
  AddContactsToSequenceResponse.JSON_PROPERTY_ADD_TO_SEQUENCE_RESULTS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class AddContactsToSequenceResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADD_TO_SEQUENCE_RESULTS = "add_to_sequence_results";
  @jakarta.annotation.Nullable  private Map<String, String> addToSequenceResults = new HashMap<>();

  public AddContactsToSequenceResponse() { 
  }

  public AddContactsToSequenceResponse addToSequenceResults(@jakarta.annotation.Nullable Map<String, String> addToSequenceResults) {
    this.addToSequenceResults = addToSequenceResults;
    return this;
  }

  public AddContactsToSequenceResponse putAddToSequenceResultsItem(String key, String addToSequenceResultsItem) {
    if (this.addToSequenceResults == null) {
      this.addToSequenceResults = new HashMap<>();
    }
    this.addToSequenceResults.put(key, addToSequenceResultsItem);
    return this;
  }

  /**
   * Get addToSequenceResults
   * @return addToSequenceResults
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ADD_TO_SEQUENCE_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Map<String, String> getAddToSequenceResults() {
    return addToSequenceResults;
  }


  @JsonProperty(JSON_PROPERTY_ADD_TO_SEQUENCE_RESULTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAddToSequenceResults(@jakarta.annotation.Nullable Map<String, String> addToSequenceResults) {
    this.addToSequenceResults = addToSequenceResults;
  }

  /**
   * Return true if this AddContactsToSequenceResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AddContactsToSequenceResponse addContactsToSequenceResponse = (AddContactsToSequenceResponse) o;
    return Objects.equals(this.addToSequenceResults, addContactsToSequenceResponse.addToSequenceResults);
  }

  @Override
  public int hashCode() {
    return Objects.hash(addToSequenceResults);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AddContactsToSequenceResponse {\n");
    sb.append("    addToSequenceResults: ").append(toIndentedString(addToSequenceResults)).append("\n");
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
    
        private AddContactsToSequenceResponse instance;
    
        public Builder() {
          this(new AddContactsToSequenceResponse());
        }
    
        protected Builder(AddContactsToSequenceResponse instance) {
          this.instance = instance;
        }
    
        public AddContactsToSequenceResponse.Builder addToSequenceResults(Map<String, String> addToSequenceResults) {
              this.instance.addToSequenceResults = addToSequenceResults;
          return this;
        }
        
    
        /**
        * returns a built AddContactsToSequenceResponse instance.
        *
        * The builder is not reusable.
        */
        public AddContactsToSequenceResponse build() {
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
      public static AddContactsToSequenceResponse.Builder builder() {
        return new AddContactsToSequenceResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AddContactsToSequenceResponse.Builder toBuilder() {
        return new AddContactsToSequenceResponse.Builder()
          .addToSequenceResults(getAddToSequenceResults());
      }
}

