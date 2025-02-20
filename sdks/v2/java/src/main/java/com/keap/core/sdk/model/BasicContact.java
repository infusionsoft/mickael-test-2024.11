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
 * BasicContact
 */
@JsonPropertyOrder({
  BasicContact.JSON_PROPERTY_EMAIL,
  BasicContact.JSON_PROPERTY_FAMILY_NAME,
  BasicContact.JSON_PROPERTY_GIVEN_NAME,
  BasicContact.JSON_PROPERTY_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class BasicContact implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EMAIL = "email";
  @jakarta.annotation.Nullable  private String email;

  public static final String JSON_PROPERTY_FAMILY_NAME = "family_name";
  @jakarta.annotation.Nullable  private String familyName;

  public static final String JSON_PROPERTY_GIVEN_NAME = "given_name";
  @jakarta.annotation.Nullable  private String givenName;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public BasicContact() { 
  }

  public BasicContact email(@jakarta.annotation.Nullable String email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getEmail() {
    return email;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmail(@jakarta.annotation.Nullable String email) {
    this.email = email;
  }


  public BasicContact familyName(@jakarta.annotation.Nullable String familyName) {
    this.familyName = familyName;
    return this;
  }

  /**
   * Get familyName
   * @return familyName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FAMILY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFamilyName() {
    return familyName;
  }


  @JsonProperty(JSON_PROPERTY_FAMILY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFamilyName(@jakarta.annotation.Nullable String familyName) {
    this.familyName = familyName;
  }


  public BasicContact givenName(@jakarta.annotation.Nullable String givenName) {
    this.givenName = givenName;
    return this;
  }

  /**
   * Get givenName
   * @return givenName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_GIVEN_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getGivenName() {
    return givenName;
  }


  @JsonProperty(JSON_PROPERTY_GIVEN_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGivenName(@jakarta.annotation.Nullable String givenName) {
    this.givenName = givenName;
  }


  public BasicContact id(@jakarta.annotation.Nullable String id) {
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

  /**
   * Return true if this BasicContact object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BasicContact basicContact = (BasicContact) o;
    return Objects.equals(this.email, basicContact.email) &&
        Objects.equals(this.familyName, basicContact.familyName) &&
        Objects.equals(this.givenName, basicContact.givenName) &&
        Objects.equals(this.id, basicContact.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, familyName, givenName, id);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BasicContact {\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    familyName: ").append(toIndentedString(familyName)).append("\n");
    sb.append("    givenName: ").append(toIndentedString(givenName)).append("\n");
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
    
        private BasicContact instance;
    
        public Builder() {
          this(new BasicContact());
        }
    
        protected Builder(BasicContact instance) {
          this.instance = instance;
        }
    
        public BasicContact.Builder email(String email) {
              this.instance.email = email;
          return this;
        }
            public BasicContact.Builder familyName(String familyName) {
              this.instance.familyName = familyName;
          return this;
        }
            public BasicContact.Builder givenName(String givenName) {
              this.instance.givenName = givenName;
          return this;
        }
            public BasicContact.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
        
    
        /**
        * returns a built BasicContact instance.
        *
        * The builder is not reusable.
        */
        public BasicContact build() {
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
      public static BasicContact.Builder builder() {
        return new BasicContact.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public BasicContact.Builder toBuilder() {
        return new BasicContact.Builder()
          .email(getEmail())
          .familyName(getFamilyName())
          .givenName(getGivenName())
          .id(getId());
      }
}

