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
import com.keap.core.sdk.model.ApplicationConfigurationModuleAffiliateCommission;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ApplicationConfigurationModuleAffiliate
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleAffiliate.JSON_PROPERTY_CHOOSE_AFFILIATE,
  ApplicationConfigurationModuleAffiliate.JSON_PROPERTY_COMMISSION,
  ApplicationConfigurationModuleAffiliate.JSON_PROPERTY_CUSTOM_AFFILIATE_URL,
  ApplicationConfigurationModuleAffiliate.JSON_PROPERTY_DISPLAY_AFFILIATE_IP_ADDRESS,
  ApplicationConfigurationModuleAffiliate.JSON_PROPERTY_DO_NOT_NOTIFY_AFFILIATE,
  ApplicationConfigurationModuleAffiliate.JSON_PROPERTY_SKIP_PAY_IF_UNUSED,
  ApplicationConfigurationModuleAffiliate.JSON_PROPERTY_USE_REFERRAL_HISTORY_IF_NO_TRACKING_COOKIE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleAffiliate implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CHOOSE_AFFILIATE = "choose_affiliate";
  @jakarta.annotation.Nullable  private Boolean chooseAffiliate;

  public static final String JSON_PROPERTY_COMMISSION = "commission";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleAffiliateCommission commission;

  public static final String JSON_PROPERTY_CUSTOM_AFFILIATE_URL = "custom_affiliate_url";
  @jakarta.annotation.Nullable  private String customAffiliateUrl;

  public static final String JSON_PROPERTY_DISPLAY_AFFILIATE_IP_ADDRESS = "display_affiliate_ip_address";
  @jakarta.annotation.Nullable  private Boolean displayAffiliateIpAddress;

  public static final String JSON_PROPERTY_DO_NOT_NOTIFY_AFFILIATE = "do_not_notify_affiliate";
  @jakarta.annotation.Nullable  private Boolean doNotNotifyAffiliate;

  public static final String JSON_PROPERTY_SKIP_PAY_IF_UNUSED = "skip_pay_if_unused";
  @jakarta.annotation.Nullable  private Boolean skipPayIfUnused;

  public static final String JSON_PROPERTY_USE_REFERRAL_HISTORY_IF_NO_TRACKING_COOKIE = "use_referral_history_if_no_tracking_cookie";
  @jakarta.annotation.Nullable  private Boolean useReferralHistoryIfNoTrackingCookie;

  public ApplicationConfigurationModuleAffiliate() { 
  }

  public ApplicationConfigurationModuleAffiliate chooseAffiliate(@jakarta.annotation.Nullable Boolean chooseAffiliate) {
    this.chooseAffiliate = chooseAffiliate;
    return this;
  }

  /**
   * Get chooseAffiliate
   * @return chooseAffiliate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CHOOSE_AFFILIATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getChooseAffiliate() {
    return chooseAffiliate;
  }


  @JsonProperty(JSON_PROPERTY_CHOOSE_AFFILIATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setChooseAffiliate(@jakarta.annotation.Nullable Boolean chooseAffiliate) {
    this.chooseAffiliate = chooseAffiliate;
  }


  public ApplicationConfigurationModuleAffiliate commission(@jakarta.annotation.Nullable ApplicationConfigurationModuleAffiliateCommission commission) {
    this.commission = commission;
    return this;
  }

  /**
   * Get commission
   * @return commission
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMMISSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleAffiliateCommission getCommission() {
    return commission;
  }


  @JsonProperty(JSON_PROPERTY_COMMISSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCommission(@jakarta.annotation.Nullable ApplicationConfigurationModuleAffiliateCommission commission) {
    this.commission = commission;
  }


  public ApplicationConfigurationModuleAffiliate customAffiliateUrl(@jakarta.annotation.Nullable String customAffiliateUrl) {
    this.customAffiliateUrl = customAffiliateUrl;
    return this;
  }

  /**
   * Get customAffiliateUrl
   * @return customAffiliateUrl
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CUSTOM_AFFILIATE_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCustomAffiliateUrl() {
    return customAffiliateUrl;
  }


  @JsonProperty(JSON_PROPERTY_CUSTOM_AFFILIATE_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCustomAffiliateUrl(@jakarta.annotation.Nullable String customAffiliateUrl) {
    this.customAffiliateUrl = customAffiliateUrl;
  }


  public ApplicationConfigurationModuleAffiliate displayAffiliateIpAddress(@jakarta.annotation.Nullable Boolean displayAffiliateIpAddress) {
    this.displayAffiliateIpAddress = displayAffiliateIpAddress;
    return this;
  }

  /**
   * Get displayAffiliateIpAddress
   * @return displayAffiliateIpAddress
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISPLAY_AFFILIATE_IP_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getDisplayAffiliateIpAddress() {
    return displayAffiliateIpAddress;
  }


  @JsonProperty(JSON_PROPERTY_DISPLAY_AFFILIATE_IP_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDisplayAffiliateIpAddress(@jakarta.annotation.Nullable Boolean displayAffiliateIpAddress) {
    this.displayAffiliateIpAddress = displayAffiliateIpAddress;
  }


  public ApplicationConfigurationModuleAffiliate doNotNotifyAffiliate(@jakarta.annotation.Nullable Boolean doNotNotifyAffiliate) {
    this.doNotNotifyAffiliate = doNotNotifyAffiliate;
    return this;
  }

  /**
   * Get doNotNotifyAffiliate
   * @return doNotNotifyAffiliate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DO_NOT_NOTIFY_AFFILIATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getDoNotNotifyAffiliate() {
    return doNotNotifyAffiliate;
  }


  @JsonProperty(JSON_PROPERTY_DO_NOT_NOTIFY_AFFILIATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDoNotNotifyAffiliate(@jakarta.annotation.Nullable Boolean doNotNotifyAffiliate) {
    this.doNotNotifyAffiliate = doNotNotifyAffiliate;
  }


  public ApplicationConfigurationModuleAffiliate skipPayIfUnused(@jakarta.annotation.Nullable Boolean skipPayIfUnused) {
    this.skipPayIfUnused = skipPayIfUnused;
    return this;
  }

  /**
   * Get skipPayIfUnused
   * @return skipPayIfUnused
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SKIP_PAY_IF_UNUSED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getSkipPayIfUnused() {
    return skipPayIfUnused;
  }


  @JsonProperty(JSON_PROPERTY_SKIP_PAY_IF_UNUSED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSkipPayIfUnused(@jakarta.annotation.Nullable Boolean skipPayIfUnused) {
    this.skipPayIfUnused = skipPayIfUnused;
  }


  public ApplicationConfigurationModuleAffiliate useReferralHistoryIfNoTrackingCookie(@jakarta.annotation.Nullable Boolean useReferralHistoryIfNoTrackingCookie) {
    this.useReferralHistoryIfNoTrackingCookie = useReferralHistoryIfNoTrackingCookie;
    return this;
  }

  /**
   * Get useReferralHistoryIfNoTrackingCookie
   * @return useReferralHistoryIfNoTrackingCookie
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USE_REFERRAL_HISTORY_IF_NO_TRACKING_COOKIE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getUseReferralHistoryIfNoTrackingCookie() {
    return useReferralHistoryIfNoTrackingCookie;
  }


  @JsonProperty(JSON_PROPERTY_USE_REFERRAL_HISTORY_IF_NO_TRACKING_COOKIE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUseReferralHistoryIfNoTrackingCookie(@jakarta.annotation.Nullable Boolean useReferralHistoryIfNoTrackingCookie) {
    this.useReferralHistoryIfNoTrackingCookie = useReferralHistoryIfNoTrackingCookie;
  }

  /**
   * Return true if this ApplicationConfigurationModuleAffiliate object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleAffiliate applicationConfigurationModuleAffiliate = (ApplicationConfigurationModuleAffiliate) o;
    return Objects.equals(this.chooseAffiliate, applicationConfigurationModuleAffiliate.chooseAffiliate) &&
        Objects.equals(this.commission, applicationConfigurationModuleAffiliate.commission) &&
        Objects.equals(this.customAffiliateUrl, applicationConfigurationModuleAffiliate.customAffiliateUrl) &&
        Objects.equals(this.displayAffiliateIpAddress, applicationConfigurationModuleAffiliate.displayAffiliateIpAddress) &&
        Objects.equals(this.doNotNotifyAffiliate, applicationConfigurationModuleAffiliate.doNotNotifyAffiliate) &&
        Objects.equals(this.skipPayIfUnused, applicationConfigurationModuleAffiliate.skipPayIfUnused) &&
        Objects.equals(this.useReferralHistoryIfNoTrackingCookie, applicationConfigurationModuleAffiliate.useReferralHistoryIfNoTrackingCookie);
  }

  @Override
  public int hashCode() {
    return Objects.hash(chooseAffiliate, commission, customAffiliateUrl, displayAffiliateIpAddress, doNotNotifyAffiliate, skipPayIfUnused, useReferralHistoryIfNoTrackingCookie);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleAffiliate {\n");
    sb.append("    chooseAffiliate: ").append(toIndentedString(chooseAffiliate)).append("\n");
    sb.append("    commission: ").append(toIndentedString(commission)).append("\n");
    sb.append("    customAffiliateUrl: ").append(toIndentedString(customAffiliateUrl)).append("\n");
    sb.append("    displayAffiliateIpAddress: ").append(toIndentedString(displayAffiliateIpAddress)).append("\n");
    sb.append("    doNotNotifyAffiliate: ").append(toIndentedString(doNotNotifyAffiliate)).append("\n");
    sb.append("    skipPayIfUnused: ").append(toIndentedString(skipPayIfUnused)).append("\n");
    sb.append("    useReferralHistoryIfNoTrackingCookie: ").append(toIndentedString(useReferralHistoryIfNoTrackingCookie)).append("\n");
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
    
        private ApplicationConfigurationModuleAffiliate instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleAffiliate());
        }
    
        protected Builder(ApplicationConfigurationModuleAffiliate instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleAffiliate.Builder chooseAffiliate(Boolean chooseAffiliate) {
              this.instance.chooseAffiliate = chooseAffiliate;
          return this;
        }
            public ApplicationConfigurationModuleAffiliate.Builder commission(ApplicationConfigurationModuleAffiliateCommission commission) {
              this.instance.commission = commission;
          return this;
        }
            public ApplicationConfigurationModuleAffiliate.Builder customAffiliateUrl(String customAffiliateUrl) {
              this.instance.customAffiliateUrl = customAffiliateUrl;
          return this;
        }
            public ApplicationConfigurationModuleAffiliate.Builder displayAffiliateIpAddress(Boolean displayAffiliateIpAddress) {
              this.instance.displayAffiliateIpAddress = displayAffiliateIpAddress;
          return this;
        }
            public ApplicationConfigurationModuleAffiliate.Builder doNotNotifyAffiliate(Boolean doNotNotifyAffiliate) {
              this.instance.doNotNotifyAffiliate = doNotNotifyAffiliate;
          return this;
        }
            public ApplicationConfigurationModuleAffiliate.Builder skipPayIfUnused(Boolean skipPayIfUnused) {
              this.instance.skipPayIfUnused = skipPayIfUnused;
          return this;
        }
            public ApplicationConfigurationModuleAffiliate.Builder useReferralHistoryIfNoTrackingCookie(Boolean useReferralHistoryIfNoTrackingCookie) {
              this.instance.useReferralHistoryIfNoTrackingCookie = useReferralHistoryIfNoTrackingCookie;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleAffiliate instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleAffiliate build() {
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
      public static ApplicationConfigurationModuleAffiliate.Builder builder() {
        return new ApplicationConfigurationModuleAffiliate.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleAffiliate.Builder toBuilder() {
        return new ApplicationConfigurationModuleAffiliate.Builder()
          .chooseAffiliate(getChooseAffiliate())
          .commission(getCommission())
          .customAffiliateUrl(getCustomAffiliateUrl())
          .displayAffiliateIpAddress(getDisplayAffiliateIpAddress())
          .doNotNotifyAffiliate(getDoNotNotifyAffiliate())
          .skipPayIfUnused(getSkipPayIfUnused())
          .useReferralHistoryIfNoTrackingCookie(getUseReferralHistoryIfNoTrackingCookie());
      }
}

