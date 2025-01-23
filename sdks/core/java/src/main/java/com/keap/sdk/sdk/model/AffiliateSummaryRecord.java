/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
 * AffiliateSummaryRecord
 */
@JsonPropertyOrder({
  AffiliateSummaryRecord.JSON_PROPERTY_AFFILIATE_ID,
  AffiliateSummaryRecord.JSON_PROPERTY_AMOUNT_EARNED,
  AffiliateSummaryRecord.JSON_PROPERTY_BALANCE,
  AffiliateSummaryRecord.JSON_PROPERTY_CLAWBACKS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class AffiliateSummaryRecord implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFFILIATE_ID = "affiliateId";
  @jakarta.annotation.Nullable  private Long affiliateId;

  public static final String JSON_PROPERTY_AMOUNT_EARNED = "amountEarned";
  @jakarta.annotation.Nullable  private Double amountEarned;

  public static final String JSON_PROPERTY_BALANCE = "balance";
  @jakarta.annotation.Nullable  private Double balance;

  public static final String JSON_PROPERTY_CLAWBACKS = "clawbacks";
  @jakarta.annotation.Nullable  private Double clawbacks;

  public AffiliateSummaryRecord() { 
  }

  public AffiliateSummaryRecord affiliateId(@jakarta.annotation.Nullable Long affiliateId) {
    this.affiliateId = affiliateId;
    return this;
  }

  /**
   * Get affiliateId
   * @return affiliateId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getAffiliateId() {
    return affiliateId;
  }


  @JsonProperty(JSON_PROPERTY_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAffiliateId(@jakarta.annotation.Nullable Long affiliateId) {
    this.affiliateId = affiliateId;
  }


  public AffiliateSummaryRecord amountEarned(@jakarta.annotation.Nullable Double amountEarned) {
    this.amountEarned = amountEarned;
    return this;
  }

  /**
   * Get amountEarned
   * @return amountEarned
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AMOUNT_EARNED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getAmountEarned() {
    return amountEarned;
  }


  @JsonProperty(JSON_PROPERTY_AMOUNT_EARNED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAmountEarned(@jakarta.annotation.Nullable Double amountEarned) {
    this.amountEarned = amountEarned;
  }


  public AffiliateSummaryRecord balance(@jakarta.annotation.Nullable Double balance) {
    this.balance = balance;
    return this;
  }

  /**
   * Get balance
   * @return balance
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_BALANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getBalance() {
    return balance;
  }


  @JsonProperty(JSON_PROPERTY_BALANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBalance(@jakarta.annotation.Nullable Double balance) {
    this.balance = balance;
  }


  public AffiliateSummaryRecord clawbacks(@jakarta.annotation.Nullable Double clawbacks) {
    this.clawbacks = clawbacks;
    return this;
  }

  /**
   * Get clawbacks
   * @return clawbacks
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CLAWBACKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getClawbacks() {
    return clawbacks;
  }


  @JsonProperty(JSON_PROPERTY_CLAWBACKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClawbacks(@jakarta.annotation.Nullable Double clawbacks) {
    this.clawbacks = clawbacks;
  }

  /**
   * Return true if this AffiliateSummaryRecord object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AffiliateSummaryRecord affiliateSummaryRecord = (AffiliateSummaryRecord) o;
    return Objects.equals(this.affiliateId, affiliateSummaryRecord.affiliateId) &&
        Objects.equals(this.amountEarned, affiliateSummaryRecord.amountEarned) &&
        Objects.equals(this.balance, affiliateSummaryRecord.balance) &&
        Objects.equals(this.clawbacks, affiliateSummaryRecord.clawbacks);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affiliateId, amountEarned, balance, clawbacks);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AffiliateSummaryRecord {\n");
    sb.append("    affiliateId: ").append(toIndentedString(affiliateId)).append("\n");
    sb.append("    amountEarned: ").append(toIndentedString(amountEarned)).append("\n");
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
    sb.append("    clawbacks: ").append(toIndentedString(clawbacks)).append("\n");
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
    
        private AffiliateSummaryRecord instance;
    
        public Builder() {
          this(new AffiliateSummaryRecord());
        }
    
        protected Builder(AffiliateSummaryRecord instance) {
          this.instance = instance;
        }
    
        public AffiliateSummaryRecord.Builder affiliateId(Long affiliateId) {
              this.instance.affiliateId = affiliateId;
          return this;
        }
            public AffiliateSummaryRecord.Builder amountEarned(Double amountEarned) {
              this.instance.amountEarned = amountEarned;
          return this;
        }
            public AffiliateSummaryRecord.Builder balance(Double balance) {
              this.instance.balance = balance;
          return this;
        }
            public AffiliateSummaryRecord.Builder clawbacks(Double clawbacks) {
              this.instance.clawbacks = clawbacks;
          return this;
        }
        
    
        /**
        * returns a built AffiliateSummaryRecord instance.
        *
        * The builder is not reusable.
        */
        public AffiliateSummaryRecord build() {
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
      public static AffiliateSummaryRecord.Builder builder() {
        return new AffiliateSummaryRecord.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AffiliateSummaryRecord.Builder toBuilder() {
        return new AffiliateSummaryRecord.Builder()
          .affiliateId(getAffiliateId())
          .amountEarned(getAmountEarned())
          .balance(getBalance())
          .clawbacks(getClawbacks());
      }
}

