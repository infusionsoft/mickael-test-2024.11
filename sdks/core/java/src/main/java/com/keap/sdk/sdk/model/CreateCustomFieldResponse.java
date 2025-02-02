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
import com.keap.sdk.sdk.model.CustomFieldMetaData;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateCustomFieldResponse
 */
@JsonPropertyOrder({
  CreateCustomFieldResponse.JSON_PROPERTY_CUSTOM_FIELD
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateCustomFieldResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CUSTOM_FIELD = "custom_field";
  @jakarta.annotation.Nullable  private CustomFieldMetaData customField;

  public CreateCustomFieldResponse() { 
  }

  public CreateCustomFieldResponse customField(@jakarta.annotation.Nullable CustomFieldMetaData customField) {
    this.customField = customField;
    return this;
  }

  /**
   * Get customField
   * @return customField
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CustomFieldMetaData getCustomField() {
    return customField;
  }


  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCustomField(@jakarta.annotation.Nullable CustomFieldMetaData customField) {
    this.customField = customField;
  }

  /**
   * Return true if this CreateCustomFieldResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateCustomFieldResponse createCustomFieldResponse = (CreateCustomFieldResponse) o;
    return Objects.equals(this.customField, createCustomFieldResponse.customField);
  }

  @Override
  public int hashCode() {
    return Objects.hash(customField);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateCustomFieldResponse {\n");
    sb.append("    customField: ").append(toIndentedString(customField)).append("\n");
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
    
        private CreateCustomFieldResponse instance;
    
        public Builder() {
          this(new CreateCustomFieldResponse());
        }
    
        protected Builder(CreateCustomFieldResponse instance) {
          this.instance = instance;
        }
    
        public CreateCustomFieldResponse.Builder customField(CustomFieldMetaData customField) {
              this.instance.customField = customField;
          return this;
        }
        
    
        /**
        * returns a built CreateCustomFieldResponse instance.
        *
        * The builder is not reusable.
        */
        public CreateCustomFieldResponse build() {
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
      public static CreateCustomFieldResponse.Builder builder() {
        return new CreateCustomFieldResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateCustomFieldResponse.Builder toBuilder() {
        return new CreateCustomFieldResponse.Builder()
          .customField(getCustomField());
      }
}

