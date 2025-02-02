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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CustomFieldOption
 */
@JsonPropertyOrder({
  CustomFieldOption.JSON_PROPERTY_ID,
  CustomFieldOption.JSON_PROPERTY_LABEL,
  CustomFieldOption.JSON_PROPERTY_OPTIONS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CustomFieldOption implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_LABEL = "label";
  @jakarta.annotation.Nullable  private String label;

  public static final String JSON_PROPERTY_OPTIONS = "options";
  @jakarta.annotation.Nullable  private List<@Valid CustomFieldOption> options = new ArrayList<>();

  public CustomFieldOption() { 
  }

  public CustomFieldOption id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable String id) {
    this.id = id;
  }


  public CustomFieldOption label(@jakarta.annotation.Nullable String label) {
    this.label = label;
    return this;
  }

  /**
   * Get label
   * @return label
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLabel() {
    return label;
  }


  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLabel(@jakarta.annotation.Nullable String label) {
    this.label = label;
  }


  public CustomFieldOption options(@jakarta.annotation.Nullable List<@Valid CustomFieldOption> options) {
    this.options = options;
    return this;
  }

  public CustomFieldOption addOptionsItem(CustomFieldOption optionsItem) {
    if (this.options == null) {
      this.options = new ArrayList<>();
    }
    this.options.add(optionsItem);
    return this;
  }

  /**
   * Get options
   * @return options
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid CustomFieldOption> getOptions() {
    return options;
  }


  @JsonProperty(JSON_PROPERTY_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptions(@jakarta.annotation.Nullable List<@Valid CustomFieldOption> options) {
    this.options = options;
  }

  /**
   * Return true if this CustomFieldOption object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CustomFieldOption customFieldOption = (CustomFieldOption) o;
    return Objects.equals(this.id, customFieldOption.id) &&
        Objects.equals(this.label, customFieldOption.label) &&
        Objects.equals(this.options, customFieldOption.options);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, label, options);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CustomFieldOption {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    options: ").append(toIndentedString(options)).append("\n");
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
    
        private CustomFieldOption instance;
    
        public Builder() {
          this(new CustomFieldOption());
        }
    
        protected Builder(CustomFieldOption instance) {
          this.instance = instance;
        }
    
        public CustomFieldOption.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public CustomFieldOption.Builder label(String label) {
              this.instance.label = label;
          return this;
        }
            public CustomFieldOption.Builder options(List<@Valid CustomFieldOption> options) {
              this.instance.options = options;
          return this;
        }
        
    
        /**
        * returns a built CustomFieldOption instance.
        *
        * The builder is not reusable.
        */
        public CustomFieldOption build() {
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
      public static CustomFieldOption.Builder builder() {
        return new CustomFieldOption.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CustomFieldOption.Builder toBuilder() {
        return new CustomFieldOption.Builder()
          .id(getId())
          .label(getLabel())
          .options(getOptions());
      }
}

