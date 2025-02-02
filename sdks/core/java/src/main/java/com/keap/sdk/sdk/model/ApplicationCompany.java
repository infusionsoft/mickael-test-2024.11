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
 * ApplicationCompany
 */
@JsonPropertyOrder({
  ApplicationCompany.JSON_PROPERTY_CALLER_ID_NUMBER,
  ApplicationCompany.JSON_PROPERTY_CITY,
  ApplicationCompany.JSON_PROPERTY_COUNTRY,
  ApplicationCompany.JSON_PROPERTY_EMAIL,
  ApplicationCompany.JSON_PROPERTY_NAME,
  ApplicationCompany.JSON_PROPERTY_PHONE,
  ApplicationCompany.JSON_PROPERTY_PHONE_EXT,
  ApplicationCompany.JSON_PROPERTY_STATE,
  ApplicationCompany.JSON_PROPERTY_STREET_ADDRESS1,
  ApplicationCompany.JSON_PROPERTY_STREET_ADDRESS2,
  ApplicationCompany.JSON_PROPERTY_WEB_LOGO_URL,
  ApplicationCompany.JSON_PROPERTY_WEBSITE,
  ApplicationCompany.JSON_PROPERTY_ZIP
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationCompany implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CALLER_ID_NUMBER = "caller_id_number";
  @jakarta.annotation.Nullable  private String callerIdNumber;

  public static final String JSON_PROPERTY_CITY = "city";
  @jakarta.annotation.Nullable  private String city;

  public static final String JSON_PROPERTY_COUNTRY = "country";
  @jakarta.annotation.Nullable  private String country;

  public static final String JSON_PROPERTY_EMAIL = "email";
  @jakarta.annotation.Nullable  private String email;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PHONE = "phone";
  @jakarta.annotation.Nullable  private String phone;

  public static final String JSON_PROPERTY_PHONE_EXT = "phone_ext";
  @jakarta.annotation.Nullable  private String phoneExt;

  public static final String JSON_PROPERTY_STATE = "state";
  @jakarta.annotation.Nullable  private String state;

  public static final String JSON_PROPERTY_STREET_ADDRESS1 = "street_address_1";
  @jakarta.annotation.Nullable  private String streetAddress1;

  public static final String JSON_PROPERTY_STREET_ADDRESS2 = "street_address_2";
  @jakarta.annotation.Nullable  private String streetAddress2;

  public static final String JSON_PROPERTY_WEB_LOGO_URL = "web_logo_url";
  @jakarta.annotation.Nullable  private String webLogoUrl;

  public static final String JSON_PROPERTY_WEBSITE = "website";
  @jakarta.annotation.Nullable  private String website;

  public static final String JSON_PROPERTY_ZIP = "zip";
  @jakarta.annotation.Nullable  private String zip;

  public ApplicationCompany() { 
  }

  public ApplicationCompany callerIdNumber(@jakarta.annotation.Nullable String callerIdNumber) {
    this.callerIdNumber = callerIdNumber;
    return this;
  }

  /**
   * Get callerIdNumber
   * @return callerIdNumber
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CALLER_ID_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCallerIdNumber() {
    return callerIdNumber;
  }


  @JsonProperty(JSON_PROPERTY_CALLER_ID_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCallerIdNumber(@jakarta.annotation.Nullable String callerIdNumber) {
    this.callerIdNumber = callerIdNumber;
  }


  public ApplicationCompany city(@jakarta.annotation.Nullable String city) {
    this.city = city;
    return this;
  }

  /**
   * Get city
   * @return city
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCity() {
    return city;
  }


  @JsonProperty(JSON_PROPERTY_CITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCity(@jakarta.annotation.Nullable String city) {
    this.city = city;
  }


  public ApplicationCompany country(@jakarta.annotation.Nullable String country) {
    this.country = country;
    return this;
  }

  /**
   * Get country
   * @return country
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCountry() {
    return country;
  }


  @JsonProperty(JSON_PROPERTY_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCountry(@jakarta.annotation.Nullable String country) {
    this.country = country;
  }


  public ApplicationCompany email(@jakarta.annotation.Nullable String email) {
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


  public ApplicationCompany name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public ApplicationCompany phone(@jakarta.annotation.Nullable String phone) {
    this.phone = phone;
    return this;
  }

  /**
   * Get phone
   * @return phone
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PHONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPhone() {
    return phone;
  }


  @JsonProperty(JSON_PROPERTY_PHONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPhone(@jakarta.annotation.Nullable String phone) {
    this.phone = phone;
  }


  public ApplicationCompany phoneExt(@jakarta.annotation.Nullable String phoneExt) {
    this.phoneExt = phoneExt;
    return this;
  }

  /**
   * Get phoneExt
   * @return phoneExt
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PHONE_EXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPhoneExt() {
    return phoneExt;
  }


  @JsonProperty(JSON_PROPERTY_PHONE_EXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPhoneExt(@jakarta.annotation.Nullable String phoneExt) {
    this.phoneExt = phoneExt;
  }


  public ApplicationCompany state(@jakarta.annotation.Nullable String state) {
    this.state = state;
    return this;
  }

  /**
   * Get state
   * @return state
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getState() {
    return state;
  }


  @JsonProperty(JSON_PROPERTY_STATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setState(@jakarta.annotation.Nullable String state) {
    this.state = state;
  }


  public ApplicationCompany streetAddress1(@jakarta.annotation.Nullable String streetAddress1) {
    this.streetAddress1 = streetAddress1;
    return this;
  }

  /**
   * Get streetAddress1
   * @return streetAddress1
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STREET_ADDRESS1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStreetAddress1() {
    return streetAddress1;
  }


  @JsonProperty(JSON_PROPERTY_STREET_ADDRESS1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStreetAddress1(@jakarta.annotation.Nullable String streetAddress1) {
    this.streetAddress1 = streetAddress1;
  }


  public ApplicationCompany streetAddress2(@jakarta.annotation.Nullable String streetAddress2) {
    this.streetAddress2 = streetAddress2;
    return this;
  }

  /**
   * Get streetAddress2
   * @return streetAddress2
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STREET_ADDRESS2)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStreetAddress2() {
    return streetAddress2;
  }


  @JsonProperty(JSON_PROPERTY_STREET_ADDRESS2)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStreetAddress2(@jakarta.annotation.Nullable String streetAddress2) {
    this.streetAddress2 = streetAddress2;
  }


  public ApplicationCompany webLogoUrl(@jakarta.annotation.Nullable String webLogoUrl) {
    this.webLogoUrl = webLogoUrl;
    return this;
  }

  /**
   * Get webLogoUrl
   * @return webLogoUrl
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_WEB_LOGO_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getWebLogoUrl() {
    return webLogoUrl;
  }


  @JsonProperty(JSON_PROPERTY_WEB_LOGO_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWebLogoUrl(@jakarta.annotation.Nullable String webLogoUrl) {
    this.webLogoUrl = webLogoUrl;
  }


  public ApplicationCompany website(@jakarta.annotation.Nullable String website) {
    this.website = website;
    return this;
  }

  /**
   * Get website
   * @return website
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_WEBSITE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getWebsite() {
    return website;
  }


  @JsonProperty(JSON_PROPERTY_WEBSITE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWebsite(@jakarta.annotation.Nullable String website) {
    this.website = website;
  }


  public ApplicationCompany zip(@jakarta.annotation.Nullable String zip) {
    this.zip = zip;
    return this;
  }

  /**
   * Get zip
   * @return zip
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ZIP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getZip() {
    return zip;
  }


  @JsonProperty(JSON_PROPERTY_ZIP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setZip(@jakarta.annotation.Nullable String zip) {
    this.zip = zip;
  }

  /**
   * Return true if this ApplicationCompany object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationCompany applicationCompany = (ApplicationCompany) o;
    return Objects.equals(this.callerIdNumber, applicationCompany.callerIdNumber) &&
        Objects.equals(this.city, applicationCompany.city) &&
        Objects.equals(this.country, applicationCompany.country) &&
        Objects.equals(this.email, applicationCompany.email) &&
        Objects.equals(this.name, applicationCompany.name) &&
        Objects.equals(this.phone, applicationCompany.phone) &&
        Objects.equals(this.phoneExt, applicationCompany.phoneExt) &&
        Objects.equals(this.state, applicationCompany.state) &&
        Objects.equals(this.streetAddress1, applicationCompany.streetAddress1) &&
        Objects.equals(this.streetAddress2, applicationCompany.streetAddress2) &&
        Objects.equals(this.webLogoUrl, applicationCompany.webLogoUrl) &&
        Objects.equals(this.website, applicationCompany.website) &&
        Objects.equals(this.zip, applicationCompany.zip);
  }

  @Override
  public int hashCode() {
    return Objects.hash(callerIdNumber, city, country, email, name, phone, phoneExt, state, streetAddress1, streetAddress2, webLogoUrl, website, zip);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationCompany {\n");
    sb.append("    callerIdNumber: ").append(toIndentedString(callerIdNumber)).append("\n");
    sb.append("    city: ").append(toIndentedString(city)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    phoneExt: ").append(toIndentedString(phoneExt)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    streetAddress1: ").append(toIndentedString(streetAddress1)).append("\n");
    sb.append("    streetAddress2: ").append(toIndentedString(streetAddress2)).append("\n");
    sb.append("    webLogoUrl: ").append(toIndentedString(webLogoUrl)).append("\n");
    sb.append("    website: ").append(toIndentedString(website)).append("\n");
    sb.append("    zip: ").append(toIndentedString(zip)).append("\n");
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
    
        private ApplicationCompany instance;
    
        public Builder() {
          this(new ApplicationCompany());
        }
    
        protected Builder(ApplicationCompany instance) {
          this.instance = instance;
        }
    
        public ApplicationCompany.Builder callerIdNumber(String callerIdNumber) {
              this.instance.callerIdNumber = callerIdNumber;
          return this;
        }
            public ApplicationCompany.Builder city(String city) {
              this.instance.city = city;
          return this;
        }
            public ApplicationCompany.Builder country(String country) {
              this.instance.country = country;
          return this;
        }
            public ApplicationCompany.Builder email(String email) {
              this.instance.email = email;
          return this;
        }
            public ApplicationCompany.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public ApplicationCompany.Builder phone(String phone) {
              this.instance.phone = phone;
          return this;
        }
            public ApplicationCompany.Builder phoneExt(String phoneExt) {
              this.instance.phoneExt = phoneExt;
          return this;
        }
            public ApplicationCompany.Builder state(String state) {
              this.instance.state = state;
          return this;
        }
            public ApplicationCompany.Builder streetAddress1(String streetAddress1) {
              this.instance.streetAddress1 = streetAddress1;
          return this;
        }
            public ApplicationCompany.Builder streetAddress2(String streetAddress2) {
              this.instance.streetAddress2 = streetAddress2;
          return this;
        }
            public ApplicationCompany.Builder webLogoUrl(String webLogoUrl) {
              this.instance.webLogoUrl = webLogoUrl;
          return this;
        }
            public ApplicationCompany.Builder website(String website) {
              this.instance.website = website;
          return this;
        }
            public ApplicationCompany.Builder zip(String zip) {
              this.instance.zip = zip;
          return this;
        }
        
    
        /**
        * returns a built ApplicationCompany instance.
        *
        * The builder is not reusable.
        */
        public ApplicationCompany build() {
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
      public static ApplicationCompany.Builder builder() {
        return new ApplicationCompany.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationCompany.Builder toBuilder() {
        return new ApplicationCompany.Builder()
          .callerIdNumber(getCallerIdNumber())
          .city(getCity())
          .country(getCountry())
          .email(getEmail())
          .name(getName())
          .phone(getPhone())
          .phoneExt(getPhoneExt())
          .state(getState())
          .streetAddress1(getStreetAddress1())
          .streetAddress2(getStreetAddress2())
          .webLogoUrl(getWebLogoUrl())
          .website(getWebsite())
          .zip(getZip());
      }
}

