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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * GetContactOptionTypesResponse
 */
@JsonPropertyOrder({
  GetContactOptionTypesResponse.JSON_PROPERTY_OPTION_TYPES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class GetContactOptionTypesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_OPTION_TYPES = "option_types";
  @jakarta.annotation.Nullable  private List<String> optionTypes = new ArrayList<>();

  public GetContactOptionTypesResponse() { 
  }

  public GetContactOptionTypesResponse optionTypes(@jakarta.annotation.Nullable List<String> optionTypes) {
    this.optionTypes = optionTypes;
    return this;
  }

  public GetContactOptionTypesResponse addOptionTypesItem(String optionTypesItem) {
    if (this.optionTypes == null) {
      this.optionTypes = new ArrayList<>();
    }
    this.optionTypes.add(optionTypesItem);
    return this;
  }

  /**
   * Get optionTypes
   * @return optionTypes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPTION_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getOptionTypes() {
    return optionTypes;
  }


  @JsonProperty(JSON_PROPERTY_OPTION_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptionTypes(@jakarta.annotation.Nullable List<String> optionTypes) {
    this.optionTypes = optionTypes;
  }

  /**
   * Return true if this GetContactOptionTypesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetContactOptionTypesResponse getContactOptionTypesResponse = (GetContactOptionTypesResponse) o;
    return Objects.equals(this.optionTypes, getContactOptionTypesResponse.optionTypes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(optionTypes);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetContactOptionTypesResponse {\n");
    sb.append("    optionTypes: ").append(toIndentedString(optionTypes)).append("\n");
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
    
        private GetContactOptionTypesResponse instance;
    
        public Builder() {
          this(new GetContactOptionTypesResponse());
        }
    
        protected Builder(GetContactOptionTypesResponse instance) {
          this.instance = instance;
        }
    
        public GetContactOptionTypesResponse.Builder optionTypes(List<String> optionTypes) {
              this.instance.optionTypes = optionTypes;
          return this;
        }
        
    
        /**
        * returns a built GetContactOptionTypesResponse instance.
        *
        * The builder is not reusable.
        */
        public GetContactOptionTypesResponse build() {
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
      public static GetContactOptionTypesResponse.Builder builder() {
        return new GetContactOptionTypesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public GetContactOptionTypesResponse.Builder toBuilder() {
        return new GetContactOptionTypesResponse.Builder()
          .optionTypes(getOptionTypes());
      }
}

