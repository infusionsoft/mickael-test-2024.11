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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * AffiliateCommissionEarned
 */
@JsonPropertyOrder({
  AffiliateCommissionEarned.JSON_PROPERTY_AFFILIATE_COMMISSION_TOTAL,
  AffiliateCommissionEarned.JSON_PROPERTY_VIEW_LEDGER_URL
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class AffiliateCommissionEarned implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFFILIATE_COMMISSION_TOTAL = "affiliate_commission_total";
  @jakarta.annotation.Nullable  private Double affiliateCommissionTotal;

  public static final String JSON_PROPERTY_VIEW_LEDGER_URL = "view_ledger_url";
  @jakarta.annotation.Nullable  private String viewLedgerUrl;

  public AffiliateCommissionEarned() { 
  }

  public AffiliateCommissionEarned affiliateCommissionTotal(@jakarta.annotation.Nullable Double affiliateCommissionTotal) {
    this.affiliateCommissionTotal = affiliateCommissionTotal;
    return this;
  }

  /**
   * Get affiliateCommissionTotal
   * @return affiliateCommissionTotal
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AFFILIATE_COMMISSION_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getAffiliateCommissionTotal() {
    return affiliateCommissionTotal;
  }


  @JsonProperty(JSON_PROPERTY_AFFILIATE_COMMISSION_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAffiliateCommissionTotal(@jakarta.annotation.Nullable Double affiliateCommissionTotal) {
    this.affiliateCommissionTotal = affiliateCommissionTotal;
  }


  public AffiliateCommissionEarned viewLedgerUrl(@jakarta.annotation.Nullable String viewLedgerUrl) {
    this.viewLedgerUrl = viewLedgerUrl;
    return this;
  }

  /**
   * Get viewLedgerUrl
   * @return viewLedgerUrl
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_VIEW_LEDGER_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getViewLedgerUrl() {
    return viewLedgerUrl;
  }


  @JsonProperty(JSON_PROPERTY_VIEW_LEDGER_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setViewLedgerUrl(@jakarta.annotation.Nullable String viewLedgerUrl) {
    this.viewLedgerUrl = viewLedgerUrl;
  }

  /**
   * Return true if this AffiliateCommissionEarned object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AffiliateCommissionEarned affiliateCommissionEarned = (AffiliateCommissionEarned) o;
    return Objects.equals(this.affiliateCommissionTotal, affiliateCommissionEarned.affiliateCommissionTotal) &&
        Objects.equals(this.viewLedgerUrl, affiliateCommissionEarned.viewLedgerUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affiliateCommissionTotal, viewLedgerUrl);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AffiliateCommissionEarned {\n");
    sb.append("    affiliateCommissionTotal: ").append(toIndentedString(affiliateCommissionTotal)).append("\n");
    sb.append("    viewLedgerUrl: ").append(toIndentedString(viewLedgerUrl)).append("\n");
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
    
        private AffiliateCommissionEarned instance;
    
        public Builder() {
          this(new AffiliateCommissionEarned());
        }
    
        protected Builder(AffiliateCommissionEarned instance) {
          this.instance = instance;
        }
    
        public AffiliateCommissionEarned.Builder affiliateCommissionTotal(Double affiliateCommissionTotal) {
              this.instance.affiliateCommissionTotal = affiliateCommissionTotal;
          return this;
        }
            public AffiliateCommissionEarned.Builder viewLedgerUrl(String viewLedgerUrl) {
              this.instance.viewLedgerUrl = viewLedgerUrl;
          return this;
        }
        
    
        /**
        * returns a built AffiliateCommissionEarned instance.
        *
        * The builder is not reusable.
        */
        public AffiliateCommissionEarned build() {
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
      public static AffiliateCommissionEarned.Builder builder() {
        return new AffiliateCommissionEarned.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AffiliateCommissionEarned.Builder toBuilder() {
        return new AffiliateCommissionEarned.Builder()
          .affiliateCommissionTotal(getAffiliateCommissionTotal())
          .viewLedgerUrl(getViewLedgerUrl());
      }
}

