/*
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
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
 * CardInfo
 */
@JsonPropertyOrder({
  CardInfo.JSON_PROPERTY_BRAND,
  CardInfo.JSON_PROPERTY_CARD_TYPE,
  CardInfo.JSON_PROPERTY_EXPIRATION_MONTH,
  CardInfo.JSON_PROPERTY_EXPIRATION_YEAR,
  CardInfo.JSON_PROPERTY_LAST_FOUR
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.9.0")
public class CardInfo implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BRAND = "brand";
  private String brand;

  public static final String JSON_PROPERTY_CARD_TYPE = "cardType";
  private String cardType;

  public static final String JSON_PROPERTY_EXPIRATION_MONTH = "expirationMonth";
  private String expirationMonth;

  public static final String JSON_PROPERTY_EXPIRATION_YEAR = "expirationYear";
  private String expirationYear;

  public static final String JSON_PROPERTY_LAST_FOUR = "lastFour";
  private String lastFour;

  public CardInfo() { 
  }

  public CardInfo brand(String brand) {
    this.brand = brand;
    return this;
  }

  /**
   * Get brand
   * @return brand
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_BRAND)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getBrand() {
    return brand;
  }


  @JsonProperty(JSON_PROPERTY_BRAND)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBrand(String brand) {
    this.brand = brand;
  }


  public CardInfo cardType(String cardType) {
    this.cardType = cardType;
    return this;
  }

  /**
   * Get cardType
   * @return cardType
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CARD_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCardType() {
    return cardType;
  }


  @JsonProperty(JSON_PROPERTY_CARD_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCardType(String cardType) {
    this.cardType = cardType;
  }


  public CardInfo expirationMonth(String expirationMonth) {
    this.expirationMonth = expirationMonth;
    return this;
  }

  /**
   * Get expirationMonth
   * @return expirationMonth
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EXPIRATION_MONTH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getExpirationMonth() {
    return expirationMonth;
  }


  @JsonProperty(JSON_PROPERTY_EXPIRATION_MONTH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExpirationMonth(String expirationMonth) {
    this.expirationMonth = expirationMonth;
  }


  public CardInfo expirationYear(String expirationYear) {
    this.expirationYear = expirationYear;
    return this;
  }

  /**
   * Get expirationYear
   * @return expirationYear
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EXPIRATION_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getExpirationYear() {
    return expirationYear;
  }


  @JsonProperty(JSON_PROPERTY_EXPIRATION_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExpirationYear(String expirationYear) {
    this.expirationYear = expirationYear;
  }


  public CardInfo lastFour(String lastFour) {
    this.lastFour = lastFour;
    return this;
  }

  /**
   * Get lastFour
   * @return lastFour
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LAST_FOUR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLastFour() {
    return lastFour;
  }


  @JsonProperty(JSON_PROPERTY_LAST_FOUR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLastFour(String lastFour) {
    this.lastFour = lastFour;
  }

  /**
   * Return true if this CardInfo object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CardInfo cardInfo = (CardInfo) o;
    return Objects.equals(this.brand, cardInfo.brand) &&
        Objects.equals(this.cardType, cardInfo.cardType) &&
        Objects.equals(this.expirationMonth, cardInfo.expirationMonth) &&
        Objects.equals(this.expirationYear, cardInfo.expirationYear) &&
        Objects.equals(this.lastFour, cardInfo.lastFour);
  }

  @Override
  public int hashCode() {
    return Objects.hash(brand, cardType, expirationMonth, expirationYear, lastFour);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CardInfo {\n");
    sb.append("    brand: ").append(toIndentedString(brand)).append("\n");
    sb.append("    cardType: ").append(toIndentedString(cardType)).append("\n");
    sb.append("    expirationMonth: ").append(toIndentedString(expirationMonth)).append("\n");
    sb.append("    expirationYear: ").append(toIndentedString(expirationYear)).append("\n");
    sb.append("    lastFour: ").append(toIndentedString(lastFour)).append("\n");
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
    
        private CardInfo instance;
    
        public Builder() {
          this(new CardInfo());
        }
    
        protected Builder(CardInfo instance) {
          this.instance = instance;
        }
    
        public CardInfo.Builder brand(String brand) {
              this.instance.brand = brand;
          return this;
        }
            public CardInfo.Builder cardType(String cardType) {
              this.instance.cardType = cardType;
          return this;
        }
            public CardInfo.Builder expirationMonth(String expirationMonth) {
              this.instance.expirationMonth = expirationMonth;
          return this;
        }
            public CardInfo.Builder expirationYear(String expirationYear) {
              this.instance.expirationYear = expirationYear;
          return this;
        }
            public CardInfo.Builder lastFour(String lastFour) {
              this.instance.lastFour = lastFour;
          return this;
        }
        
    
        /**
        * returns a built CardInfo instance.
        *
        * The builder is not reusable.
        */
        public CardInfo build() {
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
      public static CardInfo.Builder builder() {
        return new CardInfo.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CardInfo.Builder toBuilder() {
        return new CardInfo.Builder()
          .brand(getBrand())
          .cardType(getCardType())
          .expirationMonth(getExpirationMonth())
          .expirationYear(getExpirationYear())
          .lastFour(getLastFour());
      }
}

