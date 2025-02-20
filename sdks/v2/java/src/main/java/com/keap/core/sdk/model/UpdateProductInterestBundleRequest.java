/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
 * UpdateProductInterestBundleRequest
 */
@JsonPropertyOrder({
  UpdateProductInterestBundleRequest.JSON_PROPERTY_DESCRIPTION,
  UpdateProductInterestBundleRequest.JSON_PROPERTY_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateProductInterestBundleRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public UpdateProductInterestBundleRequest() { 
  }

  public UpdateProductInterestBundleRequest description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Product interest bundle description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product interest bundle description")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(@jakarta.annotation.Nullable String description) {
    this.description = description;
  }


  public UpdateProductInterestBundleRequest name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Product interest bundle name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product interest bundle name")
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

  /**
   * Return true if this UpdateProductInterestBundleRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateProductInterestBundleRequest updateProductInterestBundleRequest = (UpdateProductInterestBundleRequest) o;
    return Objects.equals(this.description, updateProductInterestBundleRequest.description) &&
        Objects.equals(this.name, updateProductInterestBundleRequest.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, name);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateProductInterestBundleRequest {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
    
        private UpdateProductInterestBundleRequest instance;
    
        public Builder() {
          this(new UpdateProductInterestBundleRequest());
        }
    
        protected Builder(UpdateProductInterestBundleRequest instance) {
          this.instance = instance;
        }
    
        public UpdateProductInterestBundleRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public UpdateProductInterestBundleRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
        
    
        /**
        * returns a built UpdateProductInterestBundleRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateProductInterestBundleRequest build() {
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
      public static UpdateProductInterestBundleRequest.Builder builder() {
        return new UpdateProductInterestBundleRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateProductInterestBundleRequest.Builder toBuilder() {
        return new UpdateProductInterestBundleRequest.Builder()
          .description(getDescription())
          .name(getName());
      }
}

