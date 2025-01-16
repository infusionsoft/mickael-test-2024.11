/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
import com.keap.sdk.sdk.model.BusinessProfileAddressResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Profile information about the business that owns/uses this account
 */
@Schema(description = "Profile information about the business that owns/uses this account")
@JsonPropertyOrder({
  GetBusinessProfileResponse.JSON_PROPERTY_ADDRESS,
  GetBusinessProfileResponse.JSON_PROPERTY_BUSINESS_GOALS,
  GetBusinessProfileResponse.JSON_PROPERTY_BUSINESS_PRIMARY_COLOR,
  GetBusinessProfileResponse.JSON_PROPERTY_BUSINESS_SECONDARY_COLOR,
  GetBusinessProfileResponse.JSON_PROPERTY_BUSINESS_TYPE,
  GetBusinessProfileResponse.JSON_PROPERTY_CURRENCY_CODE,
  GetBusinessProfileResponse.JSON_PROPERTY_EMAIL,
  GetBusinessProfileResponse.JSON_PROPERTY_LANGUAGE_TAG,
  GetBusinessProfileResponse.JSON_PROPERTY_LOGO_URL,
  GetBusinessProfileResponse.JSON_PROPERTY_NAME,
  GetBusinessProfileResponse.JSON_PROPERTY_PHONE,
  GetBusinessProfileResponse.JSON_PROPERTY_TIME_ZONE,
  GetBusinessProfileResponse.JSON_PROPERTY_WEBSITE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class GetBusinessProfileResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADDRESS = "address";
  @jakarta.annotation.Nullable  private BusinessProfileAddressResponse address;

  public static final String JSON_PROPERTY_BUSINESS_GOALS = "business_goals";
  @jakarta.annotation.Nullable  private List<String> businessGoals = new ArrayList<>();

  public static final String JSON_PROPERTY_BUSINESS_PRIMARY_COLOR = "business_primary_color";
  @jakarta.annotation.Nullable  private String businessPrimaryColor;

  public static final String JSON_PROPERTY_BUSINESS_SECONDARY_COLOR = "business_secondary_color";
  @jakarta.annotation.Nullable  private String businessSecondaryColor;

  public static final String JSON_PROPERTY_BUSINESS_TYPE = "business_type";
  @jakarta.annotation.Nullable  private String businessType;

  public static final String JSON_PROPERTY_CURRENCY_CODE = "currency_code";
  @jakarta.annotation.Nullable  private String currencyCode;

  public static final String JSON_PROPERTY_EMAIL = "email";
  @jakarta.annotation.Nullable  private String email;

  public static final String JSON_PROPERTY_LANGUAGE_TAG = "language_tag";
  @jakarta.annotation.Nullable  private String languageTag;

  public static final String JSON_PROPERTY_LOGO_URL = "logo_url";
  @jakarta.annotation.Nullable  private String logoUrl;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PHONE = "phone";
  @jakarta.annotation.Nullable  private String phone;

  public static final String JSON_PROPERTY_TIME_ZONE = "time_zone";
  @jakarta.annotation.Nullable  private String timeZone;

  public static final String JSON_PROPERTY_WEBSITE = "website";
  @jakarta.annotation.Nullable  private String website;

  public GetBusinessProfileResponse() { 
  }

  public GetBusinessProfileResponse address(@jakarta.annotation.Nullable BusinessProfileAddressResponse address) {
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
  public BusinessProfileAddressResponse getAddress() {
    return address;
  }


  @JsonProperty(JSON_PROPERTY_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAddress(@jakarta.annotation.Nullable BusinessProfileAddressResponse address) {
    this.address = address;
  }


  public GetBusinessProfileResponse businessGoals(@jakarta.annotation.Nullable List<String> businessGoals) {
    this.businessGoals = businessGoals;
    return this;
  }

  public GetBusinessProfileResponse addBusinessGoalsItem(String businessGoalsItem) {
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


  public GetBusinessProfileResponse businessPrimaryColor(@jakarta.annotation.Nullable String businessPrimaryColor) {
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


  public GetBusinessProfileResponse businessSecondaryColor(@jakarta.annotation.Nullable String businessSecondaryColor) {
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


  public GetBusinessProfileResponse businessType(@jakarta.annotation.Nullable String businessType) {
    this.businessType = businessType;
    return this;
  }

  /**
   * The type of business
   * @return businessType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The type of business")
  @JsonProperty(JSON_PROPERTY_BUSINESS_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getBusinessType() {
    return businessType;
  }


  @JsonProperty(JSON_PROPERTY_BUSINESS_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBusinessType(@jakarta.annotation.Nullable String businessType) {
    this.businessType = businessType;
  }


  public GetBusinessProfileResponse currencyCode(@jakarta.annotation.Nullable String currencyCode) {
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


  public GetBusinessProfileResponse email(@jakarta.annotation.Nullable String email) {
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


  public GetBusinessProfileResponse languageTag(@jakarta.annotation.Nullable String languageTag) {
    this.languageTag = languageTag;
    return this;
  }

  /**
   * Get languageTag
   * @return languageTag
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LANGUAGE_TAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLanguageTag() {
    return languageTag;
  }


  @JsonProperty(JSON_PROPERTY_LANGUAGE_TAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLanguageTag(@jakarta.annotation.Nullable String languageTag) {
    this.languageTag = languageTag;
  }


  public GetBusinessProfileResponse logoUrl(@jakarta.annotation.Nullable String logoUrl) {
    this.logoUrl = logoUrl;
    return this;
  }

  /**
   * Get logoUrl
   * @return logoUrl
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LOGO_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLogoUrl() {
    return logoUrl;
  }


  @JsonProperty(JSON_PROPERTY_LOGO_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLogoUrl(@jakarta.annotation.Nullable String logoUrl) {
    this.logoUrl = logoUrl;
  }


  public GetBusinessProfileResponse name(@jakarta.annotation.Nullable String name) {
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


  public GetBusinessProfileResponse phone(@jakarta.annotation.Nullable String phone) {
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


  public GetBusinessProfileResponse timeZone(@jakarta.annotation.Nullable String timeZone) {
    this.timeZone = timeZone;
    return this;
  }

  /**
   * Get timeZone
   * @return timeZone
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTimeZone() {
    return timeZone;
  }


  @JsonProperty(JSON_PROPERTY_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTimeZone(@jakarta.annotation.Nullable String timeZone) {
    this.timeZone = timeZone;
  }


  public GetBusinessProfileResponse website(@jakarta.annotation.Nullable String website) {
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
   * Return true if this GetBusinessProfileResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetBusinessProfileResponse getBusinessProfileResponse = (GetBusinessProfileResponse) o;
    return Objects.equals(this.address, getBusinessProfileResponse.address) &&
        Objects.equals(this.businessGoals, getBusinessProfileResponse.businessGoals) &&
        Objects.equals(this.businessPrimaryColor, getBusinessProfileResponse.businessPrimaryColor) &&
        Objects.equals(this.businessSecondaryColor, getBusinessProfileResponse.businessSecondaryColor) &&
        Objects.equals(this.businessType, getBusinessProfileResponse.businessType) &&
        Objects.equals(this.currencyCode, getBusinessProfileResponse.currencyCode) &&
        Objects.equals(this.email, getBusinessProfileResponse.email) &&
        Objects.equals(this.languageTag, getBusinessProfileResponse.languageTag) &&
        Objects.equals(this.logoUrl, getBusinessProfileResponse.logoUrl) &&
        Objects.equals(this.name, getBusinessProfileResponse.name) &&
        Objects.equals(this.phone, getBusinessProfileResponse.phone) &&
        Objects.equals(this.timeZone, getBusinessProfileResponse.timeZone) &&
        Objects.equals(this.website, getBusinessProfileResponse.website);
  }

  @Override
  public int hashCode() {
    return Objects.hash(address, businessGoals, businessPrimaryColor, businessSecondaryColor, businessType, currencyCode, email, languageTag, logoUrl, name, phone, timeZone, website);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetBusinessProfileResponse {\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    businessGoals: ").append(toIndentedString(businessGoals)).append("\n");
    sb.append("    businessPrimaryColor: ").append(toIndentedString(businessPrimaryColor)).append("\n");
    sb.append("    businessSecondaryColor: ").append(toIndentedString(businessSecondaryColor)).append("\n");
    sb.append("    businessType: ").append(toIndentedString(businessType)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    languageTag: ").append(toIndentedString(languageTag)).append("\n");
    sb.append("    logoUrl: ").append(toIndentedString(logoUrl)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    timeZone: ").append(toIndentedString(timeZone)).append("\n");
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
    
        private GetBusinessProfileResponse instance;
    
        public Builder() {
          this(new GetBusinessProfileResponse());
        }
    
        protected Builder(GetBusinessProfileResponse instance) {
          this.instance = instance;
        }
    
        public GetBusinessProfileResponse.Builder address(BusinessProfileAddressResponse address) {
              this.instance.address = address;
          return this;
        }
            public GetBusinessProfileResponse.Builder businessGoals(List<String> businessGoals) {
              this.instance.businessGoals = businessGoals;
          return this;
        }
            public GetBusinessProfileResponse.Builder businessPrimaryColor(String businessPrimaryColor) {
              this.instance.businessPrimaryColor = businessPrimaryColor;
          return this;
        }
            public GetBusinessProfileResponse.Builder businessSecondaryColor(String businessSecondaryColor) {
              this.instance.businessSecondaryColor = businessSecondaryColor;
          return this;
        }
            public GetBusinessProfileResponse.Builder businessType(String businessType) {
              this.instance.businessType = businessType;
          return this;
        }
            public GetBusinessProfileResponse.Builder currencyCode(String currencyCode) {
              this.instance.currencyCode = currencyCode;
          return this;
        }
            public GetBusinessProfileResponse.Builder email(String email) {
              this.instance.email = email;
          return this;
        }
            public GetBusinessProfileResponse.Builder languageTag(String languageTag) {
              this.instance.languageTag = languageTag;
          return this;
        }
            public GetBusinessProfileResponse.Builder logoUrl(String logoUrl) {
              this.instance.logoUrl = logoUrl;
          return this;
        }
            public GetBusinessProfileResponse.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public GetBusinessProfileResponse.Builder phone(String phone) {
              this.instance.phone = phone;
          return this;
        }
            public GetBusinessProfileResponse.Builder timeZone(String timeZone) {
              this.instance.timeZone = timeZone;
          return this;
        }
            public GetBusinessProfileResponse.Builder website(String website) {
              this.instance.website = website;
          return this;
        }
        
    
        /**
        * returns a built GetBusinessProfileResponse instance.
        *
        * The builder is not reusable.
        */
        public GetBusinessProfileResponse build() {
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
      public static GetBusinessProfileResponse.Builder builder() {
        return new GetBusinessProfileResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public GetBusinessProfileResponse.Builder toBuilder() {
        return new GetBusinessProfileResponse.Builder()
          .address(getAddress())
          .businessGoals(getBusinessGoals())
          .businessPrimaryColor(getBusinessPrimaryColor())
          .businessSecondaryColor(getBusinessSecondaryColor())
          .businessType(getBusinessType())
          .currencyCode(getCurrencyCode())
          .email(getEmail())
          .languageTag(getLanguageTag())
          .logoUrl(getLogoUrl())
          .name(getName())
          .phone(getPhone())
          .timeZone(getTimeZone())
          .website(getWebsite());
      }
}

