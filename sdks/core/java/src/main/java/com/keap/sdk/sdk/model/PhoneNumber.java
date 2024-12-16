/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * PhoneNumber
 */
@JsonPropertyOrder({
  PhoneNumber.JSON_PROPERTY_EXTENSION,
  PhoneNumber.JSON_PROPERTY_FIELD,
  PhoneNumber.JSON_PROPERTY_NUMBER,
  PhoneNumber.JSON_PROPERTY_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class PhoneNumber implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EXTENSION = "extension";
  @jakarta.annotation.Nullable  private String extension;

  /**
   * Gets or Sets field
   */
  public enum FieldEnum {
    PHONE_NUMBER_FIELD_UNSPECIFIED(String.valueOf("PHONE_NUMBER_FIELD_UNSPECIFIED")),
    
    PHONE1(String.valueOf("PHONE1")),
    
    PHONE2(String.valueOf("PHONE2")),
    
    PHONE3(String.valueOf("PHONE3")),
    
    PHONE4(String.valueOf("PHONE4")),
    
    PHONE5(String.valueOf("PHONE5")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    FieldEnum(String value) {
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
    public static FieldEnum fromValue(String value) {
      for (FieldEnum b : FieldEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_FIELD = "field";
  @jakarta.annotation.Nullable  private FieldEnum field;

  public static final String JSON_PROPERTY_NUMBER = "number";
  @jakarta.annotation.Nullable  private String number;

  public static final String JSON_PROPERTY_TYPE = "type";
  @jakarta.annotation.Nullable  private String type;

  public PhoneNumber() { 
  }

  public PhoneNumber extension(@jakarta.annotation.Nullable String extension) {
    this.extension = extension;
    return this;
  }

  /**
   * Get extension
   * @return extension
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EXTENSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getExtension() {
    return extension;
  }


  @JsonProperty(JSON_PROPERTY_EXTENSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExtension(@jakarta.annotation.Nullable String extension) {
    this.extension = extension;
  }


  public PhoneNumber field(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
    return this;
  }

  /**
   * Get field
   * @return field
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public FieldEnum getField() {
    return field;
  }


  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setField(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
  }


  public PhoneNumber number(@jakarta.annotation.Nullable String number) {
    this.number = number;
    return this;
  }

  /**
   * Get number
   * @return number
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNumber() {
    return number;
  }


  @JsonProperty(JSON_PROPERTY_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNumber(@jakarta.annotation.Nullable String number) {
    this.number = number;
  }


  public PhoneNumber type(@jakarta.annotation.Nullable String type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(@jakarta.annotation.Nullable String type) {
    this.type = type;
  }

  /**
   * Return true if this PhoneNumber object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PhoneNumber phoneNumber = (PhoneNumber) o;
    return Objects.equals(this.extension, phoneNumber.extension) &&
        Objects.equals(this.field, phoneNumber.field) &&
        Objects.equals(this.number, phoneNumber.number) &&
        Objects.equals(this.type, phoneNumber.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(extension, field, number, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PhoneNumber {\n");
    sb.append("    extension: ").append(toIndentedString(extension)).append("\n");
    sb.append("    field: ").append(toIndentedString(field)).append("\n");
    sb.append("    number: ").append(toIndentedString(number)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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
    
        private PhoneNumber instance;
    
        public Builder() {
          this(new PhoneNumber());
        }
    
        protected Builder(PhoneNumber instance) {
          this.instance = instance;
        }
    
        public PhoneNumber.Builder extension(String extension) {
              this.instance.extension = extension;
          return this;
        }
            public PhoneNumber.Builder field(FieldEnum field) {
              this.instance.field = field;
          return this;
        }
            public PhoneNumber.Builder number(String number) {
              this.instance.number = number;
          return this;
        }
            public PhoneNumber.Builder type(String type) {
              this.instance.type = type;
          return this;
        }
        
    
        /**
        * returns a built PhoneNumber instance.
        *
        * The builder is not reusable.
        */
        public PhoneNumber build() {
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
      public static PhoneNumber.Builder builder() {
        return new PhoneNumber.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PhoneNumber.Builder toBuilder() {
        return new PhoneNumber.Builder()
          .extension(getExtension())
          .field(getField())
          .number(getNumber())
          .type(getType());
      }
}

