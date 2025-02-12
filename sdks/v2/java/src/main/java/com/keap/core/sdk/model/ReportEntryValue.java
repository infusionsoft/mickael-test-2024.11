/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.core.sdk.model;

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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ReportEntryValue
 */
@JsonPropertyOrder({
  ReportEntryValue.JSON_PROPERTY_FIELD_NAME,
  ReportEntryValue.JSON_PROPERTY_VALUE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ReportEntryValue implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FIELD_NAME = "field_name";
  @jakarta.annotation.Nullable  private String fieldName;

  public static final String JSON_PROPERTY_VALUE = "value";
  @jakarta.annotation.Nullable  private String value;

  public ReportEntryValue() { 
  }

  public ReportEntryValue fieldName(@jakarta.annotation.Nullable String fieldName) {
    this.fieldName = fieldName;
    return this;
  }

  /**
   * Get fieldName
   * @return fieldName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIELD_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFieldName() {
    return fieldName;
  }


  @JsonProperty(JSON_PROPERTY_FIELD_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFieldName(@jakarta.annotation.Nullable String fieldName) {
    this.fieldName = fieldName;
  }


  public ReportEntryValue value(@jakarta.annotation.Nullable String value) {
    this.value = value;
    return this;
  }

  /**
   * Get value
   * @return value
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValue(@jakarta.annotation.Nullable String value) {
    this.value = value;
  }

  /**
   * Return true if this ReportEntryValue object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReportEntryValue reportEntryValue = (ReportEntryValue) o;
    return Objects.equals(this.fieldName, reportEntryValue.fieldName) &&
        Objects.equals(this.value, reportEntryValue.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fieldName, value);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReportEntryValue {\n");
    sb.append("    fieldName: ").append(toIndentedString(fieldName)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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
    
        private ReportEntryValue instance;
    
        public Builder() {
          this(new ReportEntryValue());
        }
    
        protected Builder(ReportEntryValue instance) {
          this.instance = instance;
        }
    
        public ReportEntryValue.Builder fieldName(String fieldName) {
              this.instance.fieldName = fieldName;
          return this;
        }
            public ReportEntryValue.Builder value(String value) {
              this.instance.value = value;
          return this;
        }
        
    
        /**
        * returns a built ReportEntryValue instance.
        *
        * The builder is not reusable.
        */
        public ReportEntryValue build() {
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
      public static ReportEntryValue.Builder builder() {
        return new ReportEntryValue.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ReportEntryValue.Builder toBuilder() {
        return new ReportEntryValue.Builder()
          .fieldName(getFieldName())
          .value(getValue());
      }
}

