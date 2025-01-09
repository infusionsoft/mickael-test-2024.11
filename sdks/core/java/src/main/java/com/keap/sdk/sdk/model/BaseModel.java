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
 * Base class for all models. Provides a unique identifier.
 */
@Schema(description = "Base class for all models. Provides a unique identifier.")
@JsonPropertyOrder({
  BaseModel.JSON_PROPERTY_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class BaseModel implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public BaseModel() { 
  }

  public BaseModel id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Unique identifier for the model.
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Unique identifier for the model.")
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

  /**
   * Return true if this BaseModel object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BaseModel baseModel = (BaseModel) o;
    return Objects.equals(this.id, baseModel.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BaseModel {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
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
    
        private BaseModel instance;
    
        public Builder() {
          this(new BaseModel());
        }
    
        protected Builder(BaseModel instance) {
          this.instance = instance;
        }
    
        public BaseModel.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
        
    
        /**
        * returns a built BaseModel instance.
        *
        * The builder is not reusable.
        */
        public BaseModel build() {
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
      public static BaseModel.Builder builder() {
        return new BaseModel.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public BaseModel.Builder toBuilder() {
        return new BaseModel.Builder()
          .id(getId());
      }
}

