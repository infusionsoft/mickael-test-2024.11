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
import com.keap.sdk.sdk.model.BusinessProfileAddressRequest;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Update profile information about the business that owns/uses this account
 */
@Schema(description = "Update profile information about the business that owns/uses this account")
@JsonPropertyOrder({
  UpdateBusinessProfileRequest.JSON_PROPERTY_ADDRESS,
  UpdateBusinessProfileRequest.JSON_PROPERTY_BUSINESS_GOALS,
  UpdateBusinessProfileRequest.JSON_PROPERTY_BUSINESS_PRIMARY_COLOR,
  UpdateBusinessProfileRequest.JSON_PROPERTY_BUSINESS_SECONDARY_COLOR,
  UpdateBusinessProfileRequest.JSON_PROPERTY_CURRENCY_CODE,
  UpdateBusinessProfileRequest.JSON_PROPERTY_EMAIL,
  UpdateBusinessProfileRequest.JSON_PROPERTY_NAME,
  UpdateBusinessProfileRequest.JSON_PROPERTY_PHONE,
  UpdateBusinessProfileRequest.JSON_PROPERTY_WEBSITE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateBusinessProfileRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADDRESS = "address";
  @jakarta.annotation.Nullable  private BusinessProfileAddressRequest address;

  public static final String JSON_PROPERTY_BUSINESS_GOALS = "business_goals";
  @jakarta.annotation.Nullable  private List<String> businessGoals = new ArrayList<>();

  public static final String JSON_PROPERTY_BUSINESS_PRIMARY_COLOR = "business_primary_color";
  @jakarta.annotation.Nullable  private String businessPrimaryColor;

  public static final String JSON_PROPERTY_BUSINESS_SECONDARY_COLOR = "business_secondary_color";
  @jakarta.annotation.Nullable  private String businessSecondaryColor;

  public static final String JSON_PROPERTY_CURRENCY_CODE = "currency_code";
  @jakarta.annotation.Nullable  private String currencyCode;

  public static final String JSON_PROPERTY_EMAIL = "email";
  @jakarta.annotation.Nullable  private String email;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PHONE = "phone";
  @jakarta.annotation.Nullable  private String phone;

  public static final String JSON_PROPERTY_WEBSITE = "website";
  @jakarta.annotation.Nullable  private String website;

  public UpdateBusinessProfileRequest() { 
  }

  public UpdateBusinessProfileRequest address(@jakarta.annotation.Nullable BusinessProfileAddressRequest address) {
    this.address = address;
    return this;
  }

  /**
   * Get address
   * @return address
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public BusinessProfileAddressRequest getAddress() {
    return address;
  }


  @JsonProperty(JSON_PROPERTY_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAddress(@jakarta.annotation.Nullable BusinessProfileAddressRequest address) {
    this.address = address;
  }


  public UpdateBusinessProfileRequest businessGoals(@jakarta.annotation.Nullable List<String> businessGoals) {
    this.businessGoals = businessGoals;
    return this;
  }

  public UpdateBusinessProfileRequest addBusinessGoalsItem(String businessGoalsItem) {
    if (this.businessGoals == null) {
      this.businessGoals = new ArrayList<>();
    }
    this.businessGoals.add(businessGoalsItem);
    return this;
  }

  /**
   * The goals of this business, ie. Grow Business, Convert more leads
   * @return businessGoals
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The goals of this business, ie. Grow Business, Convert more leads")
  @JsonProperty(JSON_PROPERTY_BUSINESS_GOALS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getBusinessGoals() {
    return businessGoals;
  }


  @JsonProperty(JSON_PROPERTY_BUSINESS_GOALS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBusinessGoals(@jakarta.annotation.Nullable List<String> businessGoals) {
    this.businessGoals = businessGoals;
  }


  public UpdateBusinessProfileRequest businessPrimaryColor(@jakarta.annotation.Nullable String businessPrimaryColor) {
    this.businessPrimaryColor = businessPrimaryColor;
    return this;
  }

  /**
   * Get businessPrimaryColor
   * @return businessPrimaryColor
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_BUSINESS_PRIMARY_COLOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getBusinessPrimaryColor() {
    return businessPrimaryColor;
  }


  @JsonProperty(JSON_PROPERTY_BUSINESS_PRIMARY_COLOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBusinessPrimaryColor(@jakarta.annotation.Nullable String businessPrimaryColor) {
    this.businessPrimaryColor = businessPrimaryColor;
  }


  public UpdateBusinessProfileRequest businessSecondaryColor(@jakarta.annotation.Nullable String businessSecondaryColor) {
    this.businessSecondaryColor = businessSecondaryColor;
    return this;
  }

  /**
   * Get businessSecondaryColor
   * @return businessSecondaryColor
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_BUSINESS_SECONDARY_COLOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getBusinessSecondaryColor() {
    return businessSecondaryColor;
  }


  @JsonProperty(JSON_PROPERTY_BUSINESS_SECONDARY_COLOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBusinessSecondaryColor(@jakarta.annotation.Nullable String businessSecondaryColor) {
    this.businessSecondaryColor = businessSecondaryColor;
  }


  public UpdateBusinessProfileRequest currencyCode(@jakarta.annotation.Nullable String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

  /**
   * ISO 4217 Currency Code
   * @return currencyCode
   */
  @jakarta.annotation.Nullable  @Schema(example = "USD", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "ISO 4217 Currency Code")
  @JsonProperty(JSON_PROPERTY_CURRENCY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCurrencyCode() {
    return currencyCode;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrencyCode(@jakarta.annotation.Nullable String currencyCode) {
    this.currencyCode = currencyCode;
  }


  public UpdateBusinessProfileRequest email(@jakarta.annotation.Nullable String email) {
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


  public UpdateBusinessProfileRequest name(@jakarta.annotation.Nullable String name) {
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


  public UpdateBusinessProfileRequest phone(@jakarta.annotation.Nullable String phone) {
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


  public UpdateBusinessProfileRequest website(@jakarta.annotation.Nullable String website) {
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

  /**
   * Return true if this UpdateBusinessProfileRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateBusinessProfileRequest updateBusinessProfileRequest = (UpdateBusinessProfileRequest) o;
    return Objects.equals(this.address, updateBusinessProfileRequest.address) &&
        Objects.equals(this.businessGoals, updateBusinessProfileRequest.businessGoals) &&
        Objects.equals(this.businessPrimaryColor, updateBusinessProfileRequest.businessPrimaryColor) &&
        Objects.equals(this.businessSecondaryColor, updateBusinessProfileRequest.businessSecondaryColor) &&
        Objects.equals(this.currencyCode, updateBusinessProfileRequest.currencyCode) &&
        Objects.equals(this.email, updateBusinessProfileRequest.email) &&
        Objects.equals(this.name, updateBusinessProfileRequest.name) &&
        Objects.equals(this.phone, updateBusinessProfileRequest.phone) &&
        Objects.equals(this.website, updateBusinessProfileRequest.website);
  }

  @Override
  public int hashCode() {
    return Objects.hash(address, businessGoals, businessPrimaryColor, businessSecondaryColor, currencyCode, email, name, phone, website);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateBusinessProfileRequest {\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    businessGoals: ").append(toIndentedString(businessGoals)).append("\n");
    sb.append("    businessPrimaryColor: ").append(toIndentedString(businessPrimaryColor)).append("\n");
    sb.append("    businessSecondaryColor: ").append(toIndentedString(businessSecondaryColor)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    website: ").append(toIndentedString(website)).append("\n");
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
    
        private UpdateBusinessProfileRequest instance;
    
        public Builder() {
          this(new UpdateBusinessProfileRequest());
        }
    
        protected Builder(UpdateBusinessProfileRequest instance) {
          this.instance = instance;
        }
    
        public UpdateBusinessProfileRequest.Builder address(BusinessProfileAddressRequest address) {
              this.instance.address = address;
          return this;
        }
            public UpdateBusinessProfileRequest.Builder businessGoals(List<String> businessGoals) {
              this.instance.businessGoals = businessGoals;
          return this;
        }
            public UpdateBusinessProfileRequest.Builder businessPrimaryColor(String businessPrimaryColor) {
              this.instance.businessPrimaryColor = businessPrimaryColor;
          return this;
        }
            public UpdateBusinessProfileRequest.Builder businessSecondaryColor(String businessSecondaryColor) {
              this.instance.businessSecondaryColor = businessSecondaryColor;
          return this;
        }
            public UpdateBusinessProfileRequest.Builder currencyCode(String currencyCode) {
              this.instance.currencyCode = currencyCode;
          return this;
        }
            public UpdateBusinessProfileRequest.Builder email(String email) {
              this.instance.email = email;
          return this;
        }
            public UpdateBusinessProfileRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public UpdateBusinessProfileRequest.Builder phone(String phone) {
              this.instance.phone = phone;
          return this;
        }
            public UpdateBusinessProfileRequest.Builder website(String website) {
              this.instance.website = website;
          return this;
        }
        
    
        /**
        * returns a built UpdateBusinessProfileRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateBusinessProfileRequest build() {
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
      public static UpdateBusinessProfileRequest.Builder builder() {
        return new UpdateBusinessProfileRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateBusinessProfileRequest.Builder toBuilder() {
        return new UpdateBusinessProfileRequest.Builder()
          .address(getAddress())
          .businessGoals(getBusinessGoals())
          .businessPrimaryColor(getBusinessPrimaryColor())
          .businessSecondaryColor(getBusinessSecondaryColor())
          .currencyCode(getCurrencyCode())
          .email(getEmail())
          .name(getName())
          .phone(getPhone())
          .website(getWebsite());
      }
}

