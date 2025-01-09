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
 * BusinessProfileAddressRequest
 */
@JsonPropertyOrder({
  BusinessProfileAddressRequest.JSON_PROPERTY_COUNTRY_CODE,
  BusinessProfileAddressRequest.JSON_PROPERTY_LINE1,
  BusinessProfileAddressRequest.JSON_PROPERTY_LINE2,
  BusinessProfileAddressRequest.JSON_PROPERTY_LOCALITY,
  BusinessProfileAddressRequest.JSON_PROPERTY_POSTAL_CODE,
  BusinessProfileAddressRequest.JSON_PROPERTY_REGION
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class BusinessProfileAddressRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_COUNTRY_CODE = "country_code";
  @jakarta.annotation.Nonnull  private String countryCode;

  public static final String JSON_PROPERTY_LINE1 = "line1";
  @jakarta.annotation.Nonnull  private String line1;

  public static final String JSON_PROPERTY_LINE2 = "line2";
  @jakarta.annotation.Nonnull  private String line2;

  public static final String JSON_PROPERTY_LOCALITY = "locality";
  @jakarta.annotation.Nonnull  private String locality;

  public static final String JSON_PROPERTY_POSTAL_CODE = "postal_code";
  @jakarta.annotation.Nonnull  private String postalCode;

  public static final String JSON_PROPERTY_REGION = "region";
  @jakarta.annotation.Nonnull  private String region;

  public BusinessProfileAddressRequest() { 
  }

  public BusinessProfileAddressRequest countryCode(@jakarta.annotation.Nonnull String countryCode) {
    this.countryCode = countryCode;
    return this;
  }

  /**
   * An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
   * @return countryCode
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "USA", requiredMode = Schema.RequiredMode.REQUIRED, description = "An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)")
  @JsonProperty(JSON_PROPERTY_COUNTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getCountryCode() {
    return countryCode;
  }


  @JsonProperty(JSON_PROPERTY_COUNTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCountryCode(@jakarta.annotation.Nonnull String countryCode) {
    this.countryCode = countryCode;
  }


  public BusinessProfileAddressRequest line1(@jakarta.annotation.Nonnull String line1) {
    this.line1 = line1;
    return this;
  }

  /**
   * Get line1
   * @return line1
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LINE1)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getLine1() {
    return line1;
  }


  @JsonProperty(JSON_PROPERTY_LINE1)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setLine1(@jakarta.annotation.Nonnull String line1) {
    this.line1 = line1;
  }


  public BusinessProfileAddressRequest line2(@jakarta.annotation.Nonnull String line2) {
    this.line2 = line2;
    return this;
  }

  /**
   * Get line2
   * @return line2
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LINE2)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getLine2() {
    return line2;
  }


  @JsonProperty(JSON_PROPERTY_LINE2)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setLine2(@jakarta.annotation.Nonnull String line2) {
    this.line2 = line2;
  }


  public BusinessProfileAddressRequest locality(@jakarta.annotation.Nonnull String locality) {
    this.locality = locality;
    return this;
  }

  /**
   * The municipality to which the address belongs
   * @return locality
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "Phoenix", requiredMode = Schema.RequiredMode.REQUIRED, description = "The municipality to which the address belongs")
  @JsonProperty(JSON_PROPERTY_LOCALITY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getLocality() {
    return locality;
  }


  @JsonProperty(JSON_PROPERTY_LOCALITY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setLocality(@jakarta.annotation.Nonnull String locality) {
    this.locality = locality;
  }


  public BusinessProfileAddressRequest postalCode(@jakarta.annotation.Nonnull String postalCode) {
    this.postalCode = postalCode;
    return this;
  }

  /**
   * Get postalCode
   * @return postalCode
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_POSTAL_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getPostalCode() {
    return postalCode;
  }


  @JsonProperty(JSON_PROPERTY_POSTAL_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPostalCode(@jakarta.annotation.Nonnull String postalCode) {
    this.postalCode = postalCode;
  }


  public BusinessProfileAddressRequest region(@jakarta.annotation.Nonnull String region) {
    this.region = region;
    return this;
  }

  /**
   * The long-name descriptive version of the Region Code
   * @return region
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "Arizona", requiredMode = Schema.RequiredMode.REQUIRED, description = "The long-name descriptive version of the Region Code")
  @JsonProperty(JSON_PROPERTY_REGION)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getRegion() {
    return region;
  }


  @JsonProperty(JSON_PROPERTY_REGION)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRegion(@jakarta.annotation.Nonnull String region) {
    this.region = region;
  }

  /**
   * Return true if this BusinessProfileAddressRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BusinessProfileAddressRequest businessProfileAddressRequest = (BusinessProfileAddressRequest) o;
    return Objects.equals(this.countryCode, businessProfileAddressRequest.countryCode) &&
        Objects.equals(this.line1, businessProfileAddressRequest.line1) &&
        Objects.equals(this.line2, businessProfileAddressRequest.line2) &&
        Objects.equals(this.locality, businessProfileAddressRequest.locality) &&
        Objects.equals(this.postalCode, businessProfileAddressRequest.postalCode) &&
        Objects.equals(this.region, businessProfileAddressRequest.region);
  }

  @Override
  public int hashCode() {
    return Objects.hash(countryCode, line1, line2, locality, postalCode, region);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BusinessProfileAddressRequest {\n");
    sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
    sb.append("    line1: ").append(toIndentedString(line1)).append("\n");
    sb.append("    line2: ").append(toIndentedString(line2)).append("\n");
    sb.append("    locality: ").append(toIndentedString(locality)).append("\n");
    sb.append("    postalCode: ").append(toIndentedString(postalCode)).append("\n");
    sb.append("    region: ").append(toIndentedString(region)).append("\n");
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
    
        private BusinessProfileAddressRequest instance;
    
        public Builder() {
          this(new BusinessProfileAddressRequest());
        }
    
        protected Builder(BusinessProfileAddressRequest instance) {
          this.instance = instance;
        }
    
        public BusinessProfileAddressRequest.Builder countryCode(String countryCode) {
              this.instance.countryCode = countryCode;
          return this;
        }
            public BusinessProfileAddressRequest.Builder line1(String line1) {
              this.instance.line1 = line1;
          return this;
        }
            public BusinessProfileAddressRequest.Builder line2(String line2) {
              this.instance.line2 = line2;
          return this;
        }
            public BusinessProfileAddressRequest.Builder locality(String locality) {
              this.instance.locality = locality;
          return this;
        }
            public BusinessProfileAddressRequest.Builder postalCode(String postalCode) {
              this.instance.postalCode = postalCode;
          return this;
        }
            public BusinessProfileAddressRequest.Builder region(String region) {
              this.instance.region = region;
          return this;
        }
        
    
        /**
        * returns a built BusinessProfileAddressRequest instance.
        *
        * The builder is not reusable.
        */
        public BusinessProfileAddressRequest build() {
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
      public static BusinessProfileAddressRequest.Builder builder() {
        return new BusinessProfileAddressRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public BusinessProfileAddressRequest.Builder toBuilder() {
        return new BusinessProfileAddressRequest.Builder()
          .countryCode(getCountryCode())
          .line1(getLine1())
          .line2(getLine2())
          .locality(getLocality())
          .postalCode(getPostalCode())
          .region(getRegion());
      }
}

