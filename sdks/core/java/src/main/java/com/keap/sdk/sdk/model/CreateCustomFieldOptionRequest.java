/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
 * CreateCustomFieldOptionRequest
 */
@JsonPropertyOrder({
  CreateCustomFieldOptionRequest.JSON_PROPERTY_LABEL,
  CreateCustomFieldOptionRequest.JSON_PROPERTY_OPTIONS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateCustomFieldOptionRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_LABEL = "label";
  @jakarta.annotation.Nullable  private String label;

  public static final String JSON_PROPERTY_OPTIONS = "options";
  @jakarta.annotation.Nullable  private List<@Valid CreateCustomFieldOptionRequest> options = new ArrayList<>();

  public CreateCustomFieldOptionRequest() { 
  }

  public CreateCustomFieldOptionRequest label(@jakarta.annotation.Nullable String label) {
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


  public CreateCustomFieldOptionRequest options(@jakarta.annotation.Nullable List<@Valid CreateCustomFieldOptionRequest> options) {
    this.options = options;
    return this;
  }

  public CreateCustomFieldOptionRequest addOptionsItem(CreateCustomFieldOptionRequest optionsItem) {
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
  public List<@Valid CreateCustomFieldOptionRequest> getOptions() {
    return options;
  }


  @JsonProperty(JSON_PROPERTY_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptions(@jakarta.annotation.Nullable List<@Valid CreateCustomFieldOptionRequest> options) {
    this.options = options;
  }

  /**
   * Return true if this CreateCustomFieldOptionRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateCustomFieldOptionRequest createCustomFieldOptionRequest = (CreateCustomFieldOptionRequest) o;
    return Objects.equals(this.label, createCustomFieldOptionRequest.label) &&
        Objects.equals(this.options, createCustomFieldOptionRequest.options);
  }

  @Override
  public int hashCode() {
    return Objects.hash(label, options);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateCustomFieldOptionRequest {\n");
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
    
        private CreateCustomFieldOptionRequest instance;
    
        public Builder() {
          this(new CreateCustomFieldOptionRequest());
        }
    
        protected Builder(CreateCustomFieldOptionRequest instance) {
          this.instance = instance;
        }
    
        public CreateCustomFieldOptionRequest.Builder label(String label) {
              this.instance.label = label;
          return this;
        }
            public CreateCustomFieldOptionRequest.Builder options(List<@Valid CreateCustomFieldOptionRequest> options) {
              this.instance.options = options;
          return this;
        }
        
    
        /**
        * returns a built CreateCustomFieldOptionRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateCustomFieldOptionRequest build() {
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
      public static CreateCustomFieldOptionRequest.Builder builder() {
        return new CreateCustomFieldOptionRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateCustomFieldOptionRequest.Builder toBuilder() {
        return new CreateCustomFieldOptionRequest.Builder()
          .label(getLabel())
          .options(getOptions());
      }
}

