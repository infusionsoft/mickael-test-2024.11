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
import com.keap.sdk.sdk.model.Address;
import com.keap.sdk.sdk.model.BasicCompany;
import com.keap.sdk.sdk.model.PhoneNumber;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ShippingInformation
 */
@JsonPropertyOrder({
  ShippingInformation.JSON_PROPERTY_ADDRESSES,
  ShippingInformation.JSON_PROPERTY_COMPANY,
  ShippingInformation.JSON_PROPERTY_FAMILY_NAME,
  ShippingInformation.JSON_PROPERTY_GIVEN_NAME,
  ShippingInformation.JSON_PROPERTY_ID,
  ShippingInformation.JSON_PROPERTY_INVOICE_TO_COMPANY,
  ShippingInformation.JSON_PROPERTY_PHONE_NUMBERS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ShippingInformation implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADDRESSES = "addresses";
  @jakarta.annotation.Nullable  private List<@Valid Address> addresses = new ArrayList<>();

  public static final String JSON_PROPERTY_COMPANY = "company";
  @jakarta.annotation.Nullable  private BasicCompany company;

  public static final String JSON_PROPERTY_FAMILY_NAME = "family_name";
  @jakarta.annotation.Nullable  private String familyName;

  public static final String JSON_PROPERTY_GIVEN_NAME = "given_name";
  @jakarta.annotation.Nullable  private String givenName;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_INVOICE_TO_COMPANY = "invoice_to_company";
  @jakarta.annotation.Nullable  private Boolean invoiceToCompany;

  public static final String JSON_PROPERTY_PHONE_NUMBERS = "phone_numbers";
  @jakarta.annotation.Nullable  private List<@Valid PhoneNumber> phoneNumbers = new ArrayList<>();

  public ShippingInformation() { 
  }

  public ShippingInformation addresses(@jakarta.annotation.Nullable List<@Valid Address> addresses) {
    this.addresses = addresses;
    return this;
  }

  public ShippingInformation addAddressesItem(Address addressesItem) {
    if (this.addresses == null) {
      this.addresses = new ArrayList<>();
    }
    this.addresses.add(addressesItem);
    return this;
  }

  /**
   * Get addresses
   * @return addresses
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ADDRESSES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Address> getAddresses() {
    return addresses;
  }


  @JsonProperty(JSON_PROPERTY_ADDRESSES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAddresses(@jakarta.annotation.Nullable List<@Valid Address> addresses) {
    this.addresses = addresses;
  }


  public ShippingInformation company(@jakarta.annotation.Nullable BasicCompany company) {
    this.company = company;
    return this;
  }

  /**
   * Get company
   * @return company
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public BasicCompany getCompany() {
    return company;
  }


  @JsonProperty(JSON_PROPERTY_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompany(@jakarta.annotation.Nullable BasicCompany company) {
    this.company = company;
  }


  public ShippingInformation familyName(@jakarta.annotation.Nullable String familyName) {
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


  public ShippingInformation givenName(@jakarta.annotation.Nullable String givenName) {
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


  public ShippingInformation id(@jakarta.annotation.Nullable String id) {
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


  public ShippingInformation invoiceToCompany(@jakarta.annotation.Nullable Boolean invoiceToCompany) {
    this.invoiceToCompany = invoiceToCompany;
    return this;
  }

  /**
   * Get invoiceToCompany
   * @return invoiceToCompany
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INVOICE_TO_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getInvoiceToCompany() {
    return invoiceToCompany;
  }


  @JsonProperty(JSON_PROPERTY_INVOICE_TO_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInvoiceToCompany(@jakarta.annotation.Nullable Boolean invoiceToCompany) {
    this.invoiceToCompany = invoiceToCompany;
  }


  public ShippingInformation phoneNumbers(@jakarta.annotation.Nullable List<@Valid PhoneNumber> phoneNumbers) {
    this.phoneNumbers = phoneNumbers;
    return this;
  }

  public ShippingInformation addPhoneNumbersItem(PhoneNumber phoneNumbersItem) {
    if (this.phoneNumbers == null) {
      this.phoneNumbers = new ArrayList<>();
    }
    this.phoneNumbers.add(phoneNumbersItem);
    return this;
  }

  /**
   * Get phoneNumbers
   * @return phoneNumbers
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PHONE_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid PhoneNumber> getPhoneNumbers() {
    return phoneNumbers;
  }


  @JsonProperty(JSON_PROPERTY_PHONE_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPhoneNumbers(@jakarta.annotation.Nullable List<@Valid PhoneNumber> phoneNumbers) {
    this.phoneNumbers = phoneNumbers;
  }

  /**
   * Return true if this ShippingInformation object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ShippingInformation shippingInformation = (ShippingInformation) o;
    return Objects.equals(this.addresses, shippingInformation.addresses) &&
        Objects.equals(this.company, shippingInformation.company) &&
        Objects.equals(this.familyName, shippingInformation.familyName) &&
        Objects.equals(this.givenName, shippingInformation.givenName) &&
        Objects.equals(this.id, shippingInformation.id) &&
        Objects.equals(this.invoiceToCompany, shippingInformation.invoiceToCompany) &&
        Objects.equals(this.phoneNumbers, shippingInformation.phoneNumbers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(addresses, company, familyName, givenName, id, invoiceToCompany, phoneNumbers);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ShippingInformation {\n");
    sb.append("    addresses: ").append(toIndentedString(addresses)).append("\n");
    sb.append("    company: ").append(toIndentedString(company)).append("\n");
    sb.append("    familyName: ").append(toIndentedString(familyName)).append("\n");
    sb.append("    givenName: ").append(toIndentedString(givenName)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    invoiceToCompany: ").append(toIndentedString(invoiceToCompany)).append("\n");
    sb.append("    phoneNumbers: ").append(toIndentedString(phoneNumbers)).append("\n");
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
    
        private ShippingInformation instance;
    
        public Builder() {
          this(new ShippingInformation());
        }
    
        protected Builder(ShippingInformation instance) {
          this.instance = instance;
        }
    
        public ShippingInformation.Builder addresses(List<@Valid Address> addresses) {
              this.instance.addresses = addresses;
          return this;
        }
            public ShippingInformation.Builder company(BasicCompany company) {
              this.instance.company = company;
          return this;
        }
            public ShippingInformation.Builder familyName(String familyName) {
              this.instance.familyName = familyName;
          return this;
        }
            public ShippingInformation.Builder givenName(String givenName) {
              this.instance.givenName = givenName;
          return this;
        }
            public ShippingInformation.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public ShippingInformation.Builder invoiceToCompany(Boolean invoiceToCompany) {
              this.instance.invoiceToCompany = invoiceToCompany;
          return this;
        }
            public ShippingInformation.Builder phoneNumbers(List<@Valid PhoneNumber> phoneNumbers) {
              this.instance.phoneNumbers = phoneNumbers;
          return this;
        }
        
    
        /**
        * returns a built ShippingInformation instance.
        *
        * The builder is not reusable.
        */
        public ShippingInformation build() {
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
      public static ShippingInformation.Builder builder() {
        return new ShippingInformation.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ShippingInformation.Builder toBuilder() {
        return new ShippingInformation.Builder()
          .addresses(getAddresses())
          .company(getCompany())
          .familyName(getFamilyName())
          .givenName(getGivenName())
          .id(getId())
          .invoiceToCompany(getInvoiceToCompany())
          .phoneNumbers(getPhoneNumbers());
      }
}

