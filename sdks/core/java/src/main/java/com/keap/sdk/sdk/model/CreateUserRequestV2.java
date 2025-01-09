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
import com.keap.sdk.sdk.model.EmailAddressRequest;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateUserRequestV2
 */
@JsonPropertyOrder({
  CreateUserRequestV2.JSON_PROPERTY_ADMIN,
  CreateUserRequestV2.JSON_PROPERTY_EMAIL_ADDRESS,
  CreateUserRequestV2.JSON_PROPERTY_GIVEN_NAME,
  CreateUserRequestV2.JSON_PROPERTY_PARTNER
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateUserRequestV2 implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADMIN = "admin";
  @jakarta.annotation.Nullable  private Boolean admin;

  public static final String JSON_PROPERTY_EMAIL_ADDRESS = "email_address";
  @jakarta.annotation.Nonnull  private EmailAddressRequest emailAddress;

  public static final String JSON_PROPERTY_GIVEN_NAME = "given_name";
  @jakarta.annotation.Nonnull  private String givenName;

  public static final String JSON_PROPERTY_PARTNER = "partner";
  @jakarta.annotation.Nullable  private Boolean partner;

  public CreateUserRequestV2() { 
  }

  public CreateUserRequestV2 admin(@jakarta.annotation.Nullable Boolean admin) {
    this.admin = admin;
    return this;
  }

  /**
   * Get admin
   * @return admin
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ADMIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAdmin() {
    return admin;
  }


  @JsonProperty(JSON_PROPERTY_ADMIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAdmin(@jakarta.annotation.Nullable Boolean admin) {
    this.admin = admin;
  }


  public CreateUserRequestV2 emailAddress(@jakarta.annotation.Nonnull EmailAddressRequest emailAddress) {
    this.emailAddress = emailAddress;
    return this;
  }

  /**
   * Get emailAddress
   * @return emailAddress
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public EmailAddressRequest getEmailAddress() {
    return emailAddress;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setEmailAddress(@jakarta.annotation.Nonnull EmailAddressRequest emailAddress) {
    this.emailAddress = emailAddress;
  }


  public CreateUserRequestV2 givenName(@jakarta.annotation.Nonnull String givenName) {
    this.givenName = givenName;
    return this;
  }

  /**
   * Get givenName
   * @return givenName
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_GIVEN_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getGivenName() {
    return givenName;
  }


  @JsonProperty(JSON_PROPERTY_GIVEN_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setGivenName(@jakarta.annotation.Nonnull String givenName) {
    this.givenName = givenName;
  }


  public CreateUserRequestV2 partner(@jakarta.annotation.Nullable Boolean partner) {
    this.partner = partner;
    return this;
  }

  /**
   * Get partner
   * @return partner
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PARTNER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getPartner() {
    return partner;
  }


  @JsonProperty(JSON_PROPERTY_PARTNER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPartner(@jakarta.annotation.Nullable Boolean partner) {
    this.partner = partner;
  }

  /**
   * Return true if this CreateUserRequestV2 object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateUserRequestV2 createUserRequestV2 = (CreateUserRequestV2) o;
    return Objects.equals(this.admin, createUserRequestV2.admin) &&
        Objects.equals(this.emailAddress, createUserRequestV2.emailAddress) &&
        Objects.equals(this.givenName, createUserRequestV2.givenName) &&
        Objects.equals(this.partner, createUserRequestV2.partner);
  }

  @Override
  public int hashCode() {
    return Objects.hash(admin, emailAddress, givenName, partner);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateUserRequestV2 {\n");
    sb.append("    admin: ").append(toIndentedString(admin)).append("\n");
    sb.append("    emailAddress: ").append(toIndentedString(emailAddress)).append("\n");
    sb.append("    givenName: ").append(toIndentedString(givenName)).append("\n");
    sb.append("    partner: ").append(toIndentedString(partner)).append("\n");
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
    
        private CreateUserRequestV2 instance;
    
        public Builder() {
          this(new CreateUserRequestV2());
        }
    
        protected Builder(CreateUserRequestV2 instance) {
          this.instance = instance;
        }
    
        public CreateUserRequestV2.Builder admin(Boolean admin) {
              this.instance.admin = admin;
          return this;
        }
            public CreateUserRequestV2.Builder emailAddress(EmailAddressRequest emailAddress) {
              this.instance.emailAddress = emailAddress;
          return this;
        }
            public CreateUserRequestV2.Builder givenName(String givenName) {
              this.instance.givenName = givenName;
          return this;
        }
            public CreateUserRequestV2.Builder partner(Boolean partner) {
              this.instance.partner = partner;
          return this;
        }
        
    
        /**
        * returns a built CreateUserRequestV2 instance.
        *
        * The builder is not reusable.
        */
        public CreateUserRequestV2 build() {
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
      public static CreateUserRequestV2.Builder builder() {
        return new CreateUserRequestV2.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateUserRequestV2.Builder toBuilder() {
        return new CreateUserRequestV2.Builder()
          .admin(getAdmin())
          .emailAddress(getEmailAddress())
          .givenName(getGivenName())
          .partner(getPartner());
      }
}

