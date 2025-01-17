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
import com.keap.sdk.sdk.model.CustomFieldMetaData;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ObjectModel
 */
@JsonPropertyOrder({
  ObjectModel.JSON_PROPERTY_CUSTOM_FIELDS,
  ObjectModel.JSON_PROPERTY_OPTIONAL_PROPERTIES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ObjectModel implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CUSTOM_FIELDS = "custom_fields";
  @jakarta.annotation.Nullable  private List<@Valid CustomFieldMetaData> customFields = new ArrayList<>();

  public static final String JSON_PROPERTY_OPTIONAL_PROPERTIES = "optional_properties";
  @jakarta.annotation.Nullable  private List<String> optionalProperties = new ArrayList<>();

  public ObjectModel() { 
  }

  public ObjectModel customFields(@jakarta.annotation.Nullable List<@Valid CustomFieldMetaData> customFields) {
    this.customFields = customFields;
    return this;
  }

  public ObjectModel addCustomFieldsItem(CustomFieldMetaData customFieldsItem) {
    if (this.customFields == null) {
      this.customFields = new ArrayList<>();
    }
    this.customFields.add(customFieldsItem);
    return this;
  }

  /**
   * Get customFields
   * @return customFields
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid CustomFieldMetaData> getCustomFields() {
    return customFields;
  }


  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCustomFields(@jakarta.annotation.Nullable List<@Valid CustomFieldMetaData> customFields) {
    this.customFields = customFields;
  }


  public ObjectModel optionalProperties(@jakarta.annotation.Nullable List<String> optionalProperties) {
    this.optionalProperties = optionalProperties;
    return this;
  }

  public ObjectModel addOptionalPropertiesItem(String optionalPropertiesItem) {
    if (this.optionalProperties == null) {
      this.optionalProperties = new ArrayList<>();
    }
    this.optionalProperties.add(optionalPropertiesItem);
    return this;
  }

  /**
   * These fields are not transmitted by default on this model, but can be requested by specifying them in a comma-separated list in the optional_properties query parameter.
   * @return optionalProperties
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "These fields are not transmitted by default on this model, but can be requested by specifying them in a comma-separated list in the optional_properties query parameter.")
  @JsonProperty(JSON_PROPERTY_OPTIONAL_PROPERTIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getOptionalProperties() {
    return optionalProperties;
  }


  @JsonProperty(JSON_PROPERTY_OPTIONAL_PROPERTIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptionalProperties(@jakarta.annotation.Nullable List<String> optionalProperties) {
    this.optionalProperties = optionalProperties;
  }

  /**
   * Return true if this ObjectModel object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ObjectModel objectModel = (ObjectModel) o;
    return Objects.equals(this.customFields, objectModel.customFields) &&
        Objects.equals(this.optionalProperties, objectModel.optionalProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(customFields, optionalProperties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ObjectModel {\n");
    sb.append("    customFields: ").append(toIndentedString(customFields)).append("\n");
    sb.append("    optionalProperties: ").append(toIndentedString(optionalProperties)).append("\n");
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
    
        private ObjectModel instance;
    
        public Builder() {
          this(new ObjectModel());
        }
    
        protected Builder(ObjectModel instance) {
          this.instance = instance;
        }
    
        public ObjectModel.Builder customFields(List<@Valid CustomFieldMetaData> customFields) {
              this.instance.customFields = customFields;
          return this;
        }
            public ObjectModel.Builder optionalProperties(List<String> optionalProperties) {
              this.instance.optionalProperties = optionalProperties;
          return this;
        }
        
    
        /**
        * returns a built ObjectModel instance.
        *
        * The builder is not reusable.
        */
        public ObjectModel build() {
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
      public static ObjectModel.Builder builder() {
        return new ObjectModel.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ObjectModel.Builder toBuilder() {
        return new ObjectModel.Builder()
          .customFields(getCustomFields())
          .optionalProperties(getOptionalProperties());
      }
}

