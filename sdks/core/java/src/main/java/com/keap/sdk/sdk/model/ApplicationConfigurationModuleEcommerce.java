/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
 * ApplicationConfigurationModuleEcommerce
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_CREDIT_CARD_TYPES,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_CURRENCY,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_DEFAULT_CHARGE_MAX_RETRY_ATTEMPTS,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_DEFAULT_COUNTRY,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_DEFAULT_MERCHANT,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_DEFAULT_NUMBER_OF_DAYS_BETWEEN_CHARGE_ATTEMPTS,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_DEFAULT_TAX,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_DEFAULT_TO_AUTO_CHARGE,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_MERCHANT_ACCOUNT_MAX_RETRY_ATTEMPTS,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_PAYMENT_TYPES,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_PROMO_CODES,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_TRACK_COST_PER_UNIT,
  ApplicationConfigurationModuleEcommerce.JSON_PROPERTY_TRACK_INVENTORY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleEcommerce implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CREDIT_CARD_TYPES = "credit_card_types";
  @jakarta.annotation.Nullable  private String creditCardTypes;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  @jakarta.annotation.Nullable  private String currency;

  public static final String JSON_PROPERTY_DEFAULT_CHARGE_MAX_RETRY_ATTEMPTS = "default_charge_max_retry_attempts";
  @jakarta.annotation.Nullable  private Integer defaultChargeMaxRetryAttempts;

  public static final String JSON_PROPERTY_DEFAULT_COUNTRY = "default_country";
  @jakarta.annotation.Nullable  private String defaultCountry;

  public static final String JSON_PROPERTY_DEFAULT_MERCHANT = "default_merchant";
  @jakarta.annotation.Nullable  private String defaultMerchant;

  public static final String JSON_PROPERTY_DEFAULT_NUMBER_OF_DAYS_BETWEEN_CHARGE_ATTEMPTS = "default_number_of_days_between_charge_attempts";
  @jakarta.annotation.Nullable  private Integer defaultNumberOfDaysBetweenChargeAttempts;

  public static final String JSON_PROPERTY_DEFAULT_TAX = "default_tax";
  @jakarta.annotation.Nullable  private String defaultTax;

  public static final String JSON_PROPERTY_DEFAULT_TO_AUTO_CHARGE = "default_to_auto_charge";
  @jakarta.annotation.Nullable  private Boolean defaultToAutoCharge;

  public static final String JSON_PROPERTY_MERCHANT_ACCOUNT_MAX_RETRY_ATTEMPTS = "merchant_account_max_retry_attempts";
  @jakarta.annotation.Nullable  private Integer merchantAccountMaxRetryAttempts;

  public static final String JSON_PROPERTY_PAYMENT_TYPES = "payment_types";
  @jakarta.annotation.Nullable  private String paymentTypes;

  public static final String JSON_PROPERTY_PROMO_CODES = "promo_codes";
  @jakarta.annotation.Nullable  private String promoCodes;

  public static final String JSON_PROPERTY_TRACK_COST_PER_UNIT = "track_cost_per_unit";
  @jakarta.annotation.Nullable  private Boolean trackCostPerUnit;

  public static final String JSON_PROPERTY_TRACK_INVENTORY = "track_inventory";
  @jakarta.annotation.Nullable  private Boolean trackInventory;

  public ApplicationConfigurationModuleEcommerce() { 
  }

  public ApplicationConfigurationModuleEcommerce creditCardTypes(@jakarta.annotation.Nullable String creditCardTypes) {
    this.creditCardTypes = creditCardTypes;
    return this;
  }

  /**
   * Get creditCardTypes
   * @return creditCardTypes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CREDIT_CARD_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreditCardTypes() {
    return creditCardTypes;
  }


  @JsonProperty(JSON_PROPERTY_CREDIT_CARD_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreditCardTypes(@jakarta.annotation.Nullable String creditCardTypes) {
    this.creditCardTypes = creditCardTypes;
  }


  public ApplicationConfigurationModuleEcommerce currency(@jakarta.annotation.Nullable String currency) {
    this.currency = currency;
    return this;
  }

  /**
   * Get currency
   * @return currency
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCurrency() {
    return currency;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrency(@jakarta.annotation.Nullable String currency) {
    this.currency = currency;
  }


  public ApplicationConfigurationModuleEcommerce defaultChargeMaxRetryAttempts(@jakarta.annotation.Nullable Integer defaultChargeMaxRetryAttempts) {
    this.defaultChargeMaxRetryAttempts = defaultChargeMaxRetryAttempts;
    return this;
  }

  /**
   * Get defaultChargeMaxRetryAttempts
   * @return defaultChargeMaxRetryAttempts
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_CHARGE_MAX_RETRY_ATTEMPTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getDefaultChargeMaxRetryAttempts() {
    return defaultChargeMaxRetryAttempts;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_CHARGE_MAX_RETRY_ATTEMPTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultChargeMaxRetryAttempts(@jakarta.annotation.Nullable Integer defaultChargeMaxRetryAttempts) {
    this.defaultChargeMaxRetryAttempts = defaultChargeMaxRetryAttempts;
  }


  public ApplicationConfigurationModuleEcommerce defaultCountry(@jakarta.annotation.Nullable String defaultCountry) {
    this.defaultCountry = defaultCountry;
    return this;
  }

  /**
   * Get defaultCountry
   * @return defaultCountry
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultCountry() {
    return defaultCountry;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultCountry(@jakarta.annotation.Nullable String defaultCountry) {
    this.defaultCountry = defaultCountry;
  }


  public ApplicationConfigurationModuleEcommerce defaultMerchant(@jakarta.annotation.Nullable String defaultMerchant) {
    this.defaultMerchant = defaultMerchant;
    return this;
  }

  /**
   * Get defaultMerchant
   * @return defaultMerchant
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_MERCHANT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultMerchant() {
    return defaultMerchant;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_MERCHANT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultMerchant(@jakarta.annotation.Nullable String defaultMerchant) {
    this.defaultMerchant = defaultMerchant;
  }


  public ApplicationConfigurationModuleEcommerce defaultNumberOfDaysBetweenChargeAttempts(@jakarta.annotation.Nullable Integer defaultNumberOfDaysBetweenChargeAttempts) {
    this.defaultNumberOfDaysBetweenChargeAttempts = defaultNumberOfDaysBetweenChargeAttempts;
    return this;
  }

  /**
   * Get defaultNumberOfDaysBetweenChargeAttempts
   * @return defaultNumberOfDaysBetweenChargeAttempts
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_NUMBER_OF_DAYS_BETWEEN_CHARGE_ATTEMPTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getDefaultNumberOfDaysBetweenChargeAttempts() {
    return defaultNumberOfDaysBetweenChargeAttempts;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_NUMBER_OF_DAYS_BETWEEN_CHARGE_ATTEMPTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultNumberOfDaysBetweenChargeAttempts(@jakarta.annotation.Nullable Integer defaultNumberOfDaysBetweenChargeAttempts) {
    this.defaultNumberOfDaysBetweenChargeAttempts = defaultNumberOfDaysBetweenChargeAttempts;
  }


  public ApplicationConfigurationModuleEcommerce defaultTax(@jakarta.annotation.Nullable String defaultTax) {
    this.defaultTax = defaultTax;
    return this;
  }

  /**
   * Get defaultTax
   * @return defaultTax
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_TAX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultTax() {
    return defaultTax;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_TAX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultTax(@jakarta.annotation.Nullable String defaultTax) {
    this.defaultTax = defaultTax;
  }


  public ApplicationConfigurationModuleEcommerce defaultToAutoCharge(@jakarta.annotation.Nullable Boolean defaultToAutoCharge) {
    this.defaultToAutoCharge = defaultToAutoCharge;
    return this;
  }

  /**
   * Get defaultToAutoCharge
   * @return defaultToAutoCharge
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_TO_AUTO_CHARGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getDefaultToAutoCharge() {
    return defaultToAutoCharge;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_TO_AUTO_CHARGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultToAutoCharge(@jakarta.annotation.Nullable Boolean defaultToAutoCharge) {
    this.defaultToAutoCharge = defaultToAutoCharge;
  }


  public ApplicationConfigurationModuleEcommerce merchantAccountMaxRetryAttempts(@jakarta.annotation.Nullable Integer merchantAccountMaxRetryAttempts) {
    this.merchantAccountMaxRetryAttempts = merchantAccountMaxRetryAttempts;
    return this;
  }

  /**
   * Get merchantAccountMaxRetryAttempts
   * @return merchantAccountMaxRetryAttempts
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MERCHANT_ACCOUNT_MAX_RETRY_ATTEMPTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getMerchantAccountMaxRetryAttempts() {
    return merchantAccountMaxRetryAttempts;
  }


  @JsonProperty(JSON_PROPERTY_MERCHANT_ACCOUNT_MAX_RETRY_ATTEMPTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMerchantAccountMaxRetryAttempts(@jakarta.annotation.Nullable Integer merchantAccountMaxRetryAttempts) {
    this.merchantAccountMaxRetryAttempts = merchantAccountMaxRetryAttempts;
  }


  public ApplicationConfigurationModuleEcommerce paymentTypes(@jakarta.annotation.Nullable String paymentTypes) {
    this.paymentTypes = paymentTypes;
    return this;
  }

  /**
   * Get paymentTypes
   * @return paymentTypes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPaymentTypes() {
    return paymentTypes;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentTypes(@jakarta.annotation.Nullable String paymentTypes) {
    this.paymentTypes = paymentTypes;
  }


  public ApplicationConfigurationModuleEcommerce promoCodes(@jakarta.annotation.Nullable String promoCodes) {
    this.promoCodes = promoCodes;
    return this;
  }

  /**
   * Get promoCodes
   * @return promoCodes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PROMO_CODES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPromoCodes() {
    return promoCodes;
  }


  @JsonProperty(JSON_PROPERTY_PROMO_CODES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPromoCodes(@jakarta.annotation.Nullable String promoCodes) {
    this.promoCodes = promoCodes;
  }


  public ApplicationConfigurationModuleEcommerce trackCostPerUnit(@jakarta.annotation.Nullable Boolean trackCostPerUnit) {
    this.trackCostPerUnit = trackCostPerUnit;
    return this;
  }

  /**
   * Get trackCostPerUnit
   * @return trackCostPerUnit
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TRACK_COST_PER_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getTrackCostPerUnit() {
    return trackCostPerUnit;
  }


  @JsonProperty(JSON_PROPERTY_TRACK_COST_PER_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTrackCostPerUnit(@jakarta.annotation.Nullable Boolean trackCostPerUnit) {
    this.trackCostPerUnit = trackCostPerUnit;
  }


  public ApplicationConfigurationModuleEcommerce trackInventory(@jakarta.annotation.Nullable Boolean trackInventory) {
    this.trackInventory = trackInventory;
    return this;
  }

  /**
   * Get trackInventory
   * @return trackInventory
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TRACK_INVENTORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getTrackInventory() {
    return trackInventory;
  }


  @JsonProperty(JSON_PROPERTY_TRACK_INVENTORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTrackInventory(@jakarta.annotation.Nullable Boolean trackInventory) {
    this.trackInventory = trackInventory;
  }

  /**
   * Return true if this ApplicationConfigurationModuleEcommerce object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleEcommerce applicationConfigurationModuleEcommerce = (ApplicationConfigurationModuleEcommerce) o;
    return Objects.equals(this.creditCardTypes, applicationConfigurationModuleEcommerce.creditCardTypes) &&
        Objects.equals(this.currency, applicationConfigurationModuleEcommerce.currency) &&
        Objects.equals(this.defaultChargeMaxRetryAttempts, applicationConfigurationModuleEcommerce.defaultChargeMaxRetryAttempts) &&
        Objects.equals(this.defaultCountry, applicationConfigurationModuleEcommerce.defaultCountry) &&
        Objects.equals(this.defaultMerchant, applicationConfigurationModuleEcommerce.defaultMerchant) &&
        Objects.equals(this.defaultNumberOfDaysBetweenChargeAttempts, applicationConfigurationModuleEcommerce.defaultNumberOfDaysBetweenChargeAttempts) &&
        Objects.equals(this.defaultTax, applicationConfigurationModuleEcommerce.defaultTax) &&
        Objects.equals(this.defaultToAutoCharge, applicationConfigurationModuleEcommerce.defaultToAutoCharge) &&
        Objects.equals(this.merchantAccountMaxRetryAttempts, applicationConfigurationModuleEcommerce.merchantAccountMaxRetryAttempts) &&
        Objects.equals(this.paymentTypes, applicationConfigurationModuleEcommerce.paymentTypes) &&
        Objects.equals(this.promoCodes, applicationConfigurationModuleEcommerce.promoCodes) &&
        Objects.equals(this.trackCostPerUnit, applicationConfigurationModuleEcommerce.trackCostPerUnit) &&
        Objects.equals(this.trackInventory, applicationConfigurationModuleEcommerce.trackInventory);
  }

  @Override
  public int hashCode() {
    return Objects.hash(creditCardTypes, currency, defaultChargeMaxRetryAttempts, defaultCountry, defaultMerchant, defaultNumberOfDaysBetweenChargeAttempts, defaultTax, defaultToAutoCharge, merchantAccountMaxRetryAttempts, paymentTypes, promoCodes, trackCostPerUnit, trackInventory);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleEcommerce {\n");
    sb.append("    creditCardTypes: ").append(toIndentedString(creditCardTypes)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    defaultChargeMaxRetryAttempts: ").append(toIndentedString(defaultChargeMaxRetryAttempts)).append("\n");
    sb.append("    defaultCountry: ").append(toIndentedString(defaultCountry)).append("\n");
    sb.append("    defaultMerchant: ").append(toIndentedString(defaultMerchant)).append("\n");
    sb.append("    defaultNumberOfDaysBetweenChargeAttempts: ").append(toIndentedString(defaultNumberOfDaysBetweenChargeAttempts)).append("\n");
    sb.append("    defaultTax: ").append(toIndentedString(defaultTax)).append("\n");
    sb.append("    defaultToAutoCharge: ").append(toIndentedString(defaultToAutoCharge)).append("\n");
    sb.append("    merchantAccountMaxRetryAttempts: ").append(toIndentedString(merchantAccountMaxRetryAttempts)).append("\n");
    sb.append("    paymentTypes: ").append(toIndentedString(paymentTypes)).append("\n");
    sb.append("    promoCodes: ").append(toIndentedString(promoCodes)).append("\n");
    sb.append("    trackCostPerUnit: ").append(toIndentedString(trackCostPerUnit)).append("\n");
    sb.append("    trackInventory: ").append(toIndentedString(trackInventory)).append("\n");
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
    
        private ApplicationConfigurationModuleEcommerce instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleEcommerce());
        }
    
        protected Builder(ApplicationConfigurationModuleEcommerce instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleEcommerce.Builder creditCardTypes(String creditCardTypes) {
              this.instance.creditCardTypes = creditCardTypes;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder currency(String currency) {
              this.instance.currency = currency;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder defaultChargeMaxRetryAttempts(Integer defaultChargeMaxRetryAttempts) {
              this.instance.defaultChargeMaxRetryAttempts = defaultChargeMaxRetryAttempts;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder defaultCountry(String defaultCountry) {
              this.instance.defaultCountry = defaultCountry;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder defaultMerchant(String defaultMerchant) {
              this.instance.defaultMerchant = defaultMerchant;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder defaultNumberOfDaysBetweenChargeAttempts(Integer defaultNumberOfDaysBetweenChargeAttempts) {
              this.instance.defaultNumberOfDaysBetweenChargeAttempts = defaultNumberOfDaysBetweenChargeAttempts;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder defaultTax(String defaultTax) {
              this.instance.defaultTax = defaultTax;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder defaultToAutoCharge(Boolean defaultToAutoCharge) {
              this.instance.defaultToAutoCharge = defaultToAutoCharge;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder merchantAccountMaxRetryAttempts(Integer merchantAccountMaxRetryAttempts) {
              this.instance.merchantAccountMaxRetryAttempts = merchantAccountMaxRetryAttempts;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder paymentTypes(String paymentTypes) {
              this.instance.paymentTypes = paymentTypes;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder promoCodes(String promoCodes) {
              this.instance.promoCodes = promoCodes;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder trackCostPerUnit(Boolean trackCostPerUnit) {
              this.instance.trackCostPerUnit = trackCostPerUnit;
          return this;
        }
            public ApplicationConfigurationModuleEcommerce.Builder trackInventory(Boolean trackInventory) {
              this.instance.trackInventory = trackInventory;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleEcommerce instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleEcommerce build() {
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
      public static ApplicationConfigurationModuleEcommerce.Builder builder() {
        return new ApplicationConfigurationModuleEcommerce.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleEcommerce.Builder toBuilder() {
        return new ApplicationConfigurationModuleEcommerce.Builder()
          .creditCardTypes(getCreditCardTypes())
          .currency(getCurrency())
          .defaultChargeMaxRetryAttempts(getDefaultChargeMaxRetryAttempts())
          .defaultCountry(getDefaultCountry())
          .defaultMerchant(getDefaultMerchant())
          .defaultNumberOfDaysBetweenChargeAttempts(getDefaultNumberOfDaysBetweenChargeAttempts())
          .defaultTax(getDefaultTax())
          .defaultToAutoCharge(getDefaultToAutoCharge())
          .merchantAccountMaxRetryAttempts(getMerchantAccountMaxRetryAttempts())
          .paymentTypes(getPaymentTypes())
          .promoCodes(getPromoCodes())
          .trackCostPerUnit(getTrackCostPerUnit())
          .trackInventory(getTrackInventory());
      }
}

