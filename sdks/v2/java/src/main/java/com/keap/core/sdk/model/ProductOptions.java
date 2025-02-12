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
import com.keap.core.sdk.model.ProductFixedOption;
import com.keap.core.sdk.model.ProductVariableSetting;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ProductOptions
 */
@JsonPropertyOrder({
  ProductOptions.JSON_PROPERTY_FIXED_OPTIONS,
  ProductOptions.JSON_PROPERTY_NAME,
  ProductOptions.JSON_PROPERTY_REQUIRED,
  ProductOptions.JSON_PROPERTY_TYPE,
  ProductOptions.JSON_PROPERTY_VARIABLE_SETTING
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ProductOptions implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FIXED_OPTIONS = "fixed_options";
  @jakarta.annotation.Nullable  private List<@Valid ProductFixedOption> fixedOptions = new ArrayList<>();

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_REQUIRED = "required";
  @jakarta.annotation.Nullable  private Boolean required;

  /**
   * Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned.
   */
  public enum TypeEnum {
    FIXED(String.valueOf("FIXED")),
    
    VARIABLE(String.valueOf("VARIABLE")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    TypeEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_TYPE = "type";
  @jakarta.annotation.Nullable  private TypeEnum type;

  public static final String JSON_PROPERTY_VARIABLE_SETTING = "variable_setting";
  @jakarta.annotation.Nullable  private ProductVariableSetting variableSetting;

  public ProductOptions() { 
  }

  public ProductOptions fixedOptions(@jakarta.annotation.Nullable List<@Valid ProductFixedOption> fixedOptions) {
    this.fixedOptions = fixedOptions;
    return this;
  }

  public ProductOptions addFixedOptionsItem(ProductFixedOption fixedOptionsItem) {
    if (this.fixedOptions == null) {
      this.fixedOptions = new ArrayList<>();
    }
    this.fixedOptions.add(fixedOptionsItem);
    return this;
  }

  /**
   * List of option values for the fixed option
   * @return fixedOptions
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "List of option values for the fixed option")
  @JsonProperty(JSON_PROPERTY_FIXED_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ProductFixedOption> getFixedOptions() {
    return fixedOptions;
  }


  @JsonProperty(JSON_PROPERTY_FIXED_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFixedOptions(@jakarta.annotation.Nullable List<@Valid ProductFixedOption> fixedOptions) {
    this.fixedOptions = fixedOptions;
  }


  public ProductOptions name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * The option name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The option name")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(@jakarta.annotation.Nullable String name) {
    this.name = name;
  }


  public ProductOptions required(@jakarta.annotation.Nullable Boolean required) {
    this.required = required;
    return this;
  }

  /**
   * If the user is required to select/fill in an option for the product
   * @return required
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If the user is required to select/fill in an option for the product")
  @JsonProperty(JSON_PROPERTY_REQUIRED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getRequired() {
    return required;
  }


  @JsonProperty(JSON_PROPERTY_REQUIRED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRequired(@jakarta.annotation.Nullable Boolean required) {
    this.required = required;
  }


  public ProductOptions type(@jakarta.annotation.Nullable TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned.
   * @return type
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned.")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public TypeEnum getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(@jakarta.annotation.Nullable TypeEnum type) {
    this.type = type;
  }


  public ProductOptions variableSetting(@jakarta.annotation.Nullable ProductVariableSetting variableSetting) {
    this.variableSetting = variableSetting;
    return this;
  }

  /**
   * Get variableSetting
   * @return variableSetting
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_VARIABLE_SETTING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ProductVariableSetting getVariableSetting() {
    return variableSetting;
  }


  @JsonProperty(JSON_PROPERTY_VARIABLE_SETTING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setVariableSetting(@jakarta.annotation.Nullable ProductVariableSetting variableSetting) {
    this.variableSetting = variableSetting;
  }

  /**
   * Return true if this ProductOptions object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductOptions productOptions = (ProductOptions) o;
    return Objects.equals(this.fixedOptions, productOptions.fixedOptions) &&
        Objects.equals(this.name, productOptions.name) &&
        Objects.equals(this.required, productOptions.required) &&
        Objects.equals(this.type, productOptions.type) &&
        Objects.equals(this.variableSetting, productOptions.variableSetting);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fixedOptions, name, required, type, variableSetting);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductOptions {\n");
    sb.append("    fixedOptions: ").append(toIndentedString(fixedOptions)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    required: ").append(toIndentedString(required)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    variableSetting: ").append(toIndentedString(variableSetting)).append("\n");
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
    
        private ProductOptions instance;
    
        public Builder() {
          this(new ProductOptions());
        }
    
        protected Builder(ProductOptions instance) {
          this.instance = instance;
        }
    
        public ProductOptions.Builder fixedOptions(List<@Valid ProductFixedOption> fixedOptions) {
              this.instance.fixedOptions = fixedOptions;
          return this;
        }
            public ProductOptions.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public ProductOptions.Builder required(Boolean required) {
              this.instance.required = required;
          return this;
        }
            public ProductOptions.Builder type(TypeEnum type) {
              this.instance.type = type;
          return this;
        }
            public ProductOptions.Builder variableSetting(ProductVariableSetting variableSetting) {
              this.instance.variableSetting = variableSetting;
          return this;
        }
        
    
        /**
        * returns a built ProductOptions instance.
        *
        * The builder is not reusable.
        */
        public ProductOptions build() {
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
      public static ProductOptions.Builder builder() {
        return new ProductOptions.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ProductOptions.Builder toBuilder() {
        return new ProductOptions.Builder()
          .fixedOptions(getFixedOptions())
          .name(getName())
          .required(getRequired())
          .type(getType())
          .variableSetting(getVariableSetting());
      }
}

