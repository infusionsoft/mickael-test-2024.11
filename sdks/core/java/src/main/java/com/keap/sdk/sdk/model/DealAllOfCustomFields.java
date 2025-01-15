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
import com.fasterxml.jackson.annotation.JsonTypeName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Map;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * The custom fields associated with the deal. This field is optional.
 */
@Schema(description = "The custom fields associated with the deal. This field is optional.")
@JsonPropertyOrder({
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class DealAllOfCustomFields implements Serializable {
  private static final long serialVersionUID = 1L;

  public DealAllOfCustomFields() { 
  }
  /**
   * Return true if this Deal_allOf_custom_fields object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    return true;
  }

  @Override
  public int hashCode() {
    return Objects.hash();
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DealAllOfCustomFields {\n");
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
    
        private DealAllOfCustomFields instance;
    
        public Builder() {
          this(new DealAllOfCustomFields());
        }
    
        protected Builder(DealAllOfCustomFields instance) {
          this.instance = instance;
        }
    
    
    
        /**
        * returns a built DealAllOfCustomFields instance.
        *
        * The builder is not reusable.
        */
        public DealAllOfCustomFields build() {
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
      public static DealAllOfCustomFields.Builder builder() {
        return new DealAllOfCustomFields.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public DealAllOfCustomFields.Builder toBuilder() {
        return new DealAllOfCustomFields.Builder();
      }
}

