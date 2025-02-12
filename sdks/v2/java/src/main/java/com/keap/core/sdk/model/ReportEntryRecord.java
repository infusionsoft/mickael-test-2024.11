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
import com.keap.core.sdk.model.ReportEntryValue;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ReportEntryRecord
 */
@JsonPropertyOrder({
  ReportEntryRecord.JSON_PROPERTY_COLUMNS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ReportEntryRecord implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_COLUMNS = "columns";
  @jakarta.annotation.Nullable  private List<@Valid ReportEntryValue> columns = new ArrayList<>();

  public ReportEntryRecord() { 
  }

  public ReportEntryRecord columns(@jakarta.annotation.Nullable List<@Valid ReportEntryValue> columns) {
    this.columns = columns;
    return this;
  }

  public ReportEntryRecord addColumnsItem(ReportEntryValue columnsItem) {
    if (this.columns == null) {
      this.columns = new ArrayList<>();
    }
    this.columns.add(columnsItem);
    return this;
  }

  /**
   * Get columns
   * @return columns
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COLUMNS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ReportEntryValue> getColumns() {
    return columns;
  }


  @JsonProperty(JSON_PROPERTY_COLUMNS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setColumns(@jakarta.annotation.Nullable List<@Valid ReportEntryValue> columns) {
    this.columns = columns;
  }

  /**
   * Return true if this ReportEntryRecord object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReportEntryRecord reportEntryRecord = (ReportEntryRecord) o;
    return Objects.equals(this.columns, reportEntryRecord.columns);
  }

  @Override
  public int hashCode() {
    return Objects.hash(columns);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReportEntryRecord {\n");
    sb.append("    columns: ").append(toIndentedString(columns)).append("\n");
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
    
        private ReportEntryRecord instance;
    
        public Builder() {
          this(new ReportEntryRecord());
        }
    
        protected Builder(ReportEntryRecord instance) {
          this.instance = instance;
        }
    
        public ReportEntryRecord.Builder columns(List<@Valid ReportEntryValue> columns) {
              this.instance.columns = columns;
          return this;
        }
        
    
        /**
        * returns a built ReportEntryRecord instance.
        *
        * The builder is not reusable.
        */
        public ReportEntryRecord build() {
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
      public static ReportEntryRecord.Builder builder() {
        return new ReportEntryRecord.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ReportEntryRecord.Builder toBuilder() {
        return new ReportEntryRecord.Builder()
          .columns(getColumns());
      }
}

