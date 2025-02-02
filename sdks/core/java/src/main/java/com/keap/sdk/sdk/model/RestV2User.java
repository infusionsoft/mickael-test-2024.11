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
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * RestV2User
 */
@JsonPropertyOrder({
  RestV2User.JSON_PROPERTY_FIRST_NAME,
  RestV2User.JSON_PROPERTY_ID,
  RestV2User.JSON_PROPERTY_LAST_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RestV2User implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FIRST_NAME = "first_name";
  @jakarta.annotation.Nullable  private String firstName;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_LAST_NAME = "last_name";
  @jakarta.annotation.Nullable  private String lastName;

  public RestV2User() { 
  }

  public RestV2User firstName(@jakarta.annotation.Nullable String firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Get firstName
   * @return firstName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIRST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFirstName() {
    return firstName;
  }


  @JsonProperty(JSON_PROPERTY_FIRST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFirstName(@jakarta.annotation.Nullable String firstName) {
    this.firstName = firstName;
  }


  public RestV2User id(@jakarta.annotation.Nullable String id) {
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


  public RestV2User lastName(@jakarta.annotation.Nullable String lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * Get lastName
   * @return lastName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LAST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLastName() {
    return lastName;
  }


  @JsonProperty(JSON_PROPERTY_LAST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLastName(@jakarta.annotation.Nullable String lastName) {
    this.lastName = lastName;
  }

  /**
   * Return true if this RestV2User object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestV2User restV2User = (RestV2User) o;
    return Objects.equals(this.firstName, restV2User.firstName) &&
        Objects.equals(this.id, restV2User.id) &&
        Objects.equals(this.lastName, restV2User.lastName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(firstName, id, lastName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestV2User {\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
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
    
        private RestV2User instance;
    
        public Builder() {
          this(new RestV2User());
        }
    
        protected Builder(RestV2User instance) {
          this.instance = instance;
        }
    
        public RestV2User.Builder firstName(String firstName) {
              this.instance.firstName = firstName;
          return this;
        }
            public RestV2User.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public RestV2User.Builder lastName(String lastName) {
              this.instance.lastName = lastName;
          return this;
        }
        
    
        /**
        * returns a built RestV2User instance.
        *
        * The builder is not reusable.
        */
        public RestV2User build() {
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
      public static RestV2User.Builder builder() {
        return new RestV2User.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestV2User.Builder toBuilder() {
        return new RestV2User.Builder()
          .firstName(getFirstName())
          .id(getId())
          .lastName(getLastName());
      }
}

