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
 * BasicUser
 */
@JsonPropertyOrder({
  BasicUser.JSON_PROPERTY_EMAIL_ADDRESS,
  BasicUser.JSON_PROPERTY_FAMILY_NAME,
  BasicUser.JSON_PROPERTY_GIVEN_NAME,
  BasicUser.JSON_PROPERTY_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class BasicUser implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EMAIL_ADDRESS = "email_address";
  @jakarta.annotation.Nullable  private String emailAddress;

  public static final String JSON_PROPERTY_FAMILY_NAME = "family_name";
  @jakarta.annotation.Nullable  private String familyName;

  public static final String JSON_PROPERTY_GIVEN_NAME = "given_name";
  @jakarta.annotation.Nullable  private String givenName;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public BasicUser() { 
  }

  public BasicUser emailAddress(@jakarta.annotation.Nullable String emailAddress) {
    this.emailAddress = emailAddress;
    return this;
  }

  /**
   * Get emailAddress
   * @return emailAddress
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getEmailAddress() {
    return emailAddress;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmailAddress(@jakarta.annotation.Nullable String emailAddress) {
    this.emailAddress = emailAddress;
  }


  public BasicUser familyName(@jakarta.annotation.Nullable String familyName) {
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


  public BasicUser givenName(@jakarta.annotation.Nullable String givenName) {
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


  public BasicUser id(@jakarta.annotation.Nullable String id) {
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
   * Return true if this BasicUser object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BasicUser basicUser = (BasicUser) o;
    return Objects.equals(this.emailAddress, basicUser.emailAddress) &&
        Objects.equals(this.familyName, basicUser.familyName) &&
        Objects.equals(this.givenName, basicUser.givenName) &&
        Objects.equals(this.id, basicUser.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(emailAddress, familyName, givenName, id);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BasicUser {\n");
    sb.append("    emailAddress: ").append(toIndentedString(emailAddress)).append("\n");
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
    
        private BasicUser instance;
    
        public Builder() {
          this(new BasicUser());
        }
    
        protected Builder(BasicUser instance) {
          this.instance = instance;
        }
    
        public BasicUser.Builder emailAddress(String emailAddress) {
              this.instance.emailAddress = emailAddress;
          return this;
        }
            public BasicUser.Builder familyName(String familyName) {
              this.instance.familyName = familyName;
          return this;
        }
            public BasicUser.Builder givenName(String givenName) {
              this.instance.givenName = givenName;
          return this;
        }
            public BasicUser.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
        
    
        /**
        * returns a built BasicUser instance.
        *
        * The builder is not reusable.
        */
        public BasicUser build() {
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
      public static BasicUser.Builder builder() {
        return new BasicUser.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public BasicUser.Builder toBuilder() {
        return new BasicUser.Builder()
          .emailAddress(getEmailAddress())
          .familyName(getFamilyName())
          .givenName(getGivenName())
          .id(getId());
      }
}

