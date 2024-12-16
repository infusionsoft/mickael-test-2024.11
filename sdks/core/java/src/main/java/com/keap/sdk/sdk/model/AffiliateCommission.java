/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * AffiliateCommission
 */
@JsonPropertyOrder({
  AffiliateCommission.JSON_PROPERTY_AFF_OWED_ID,
  AffiliateCommission.JSON_PROPERTY_AMOUNT_EARNED,
  AffiliateCommission.JSON_PROPERTY_CONTACT_FIRST_NAME,
  AffiliateCommission.JSON_PROPERTY_CONTACT_ID,
  AffiliateCommission.JSON_PROPERTY_CONTACT_LAST_NAME,
  AffiliateCommission.JSON_PROPERTY_DATE_EARNED,
  AffiliateCommission.JSON_PROPERTY_DESCRIPTION,
  AffiliateCommission.JSON_PROPERTY_INVOICE_ID,
  AffiliateCommission.JSON_PROPERTY_PRODUCT_NAME,
  AffiliateCommission.JSON_PROPERTY_SALES_AFFILIATE_ID,
  AffiliateCommission.JSON_PROPERTY_SOLD_BY_FIRST_NAME,
  AffiliateCommission.JSON_PROPERTY_SOLD_BY_LAST_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class AffiliateCommission implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFF_OWED_ID = "aff_owed_id";
  @jakarta.annotation.Nullable  private Long affOwedId;

  public static final String JSON_PROPERTY_AMOUNT_EARNED = "amount_earned";
  @jakarta.annotation.Nullable  private Float amountEarned;

  public static final String JSON_PROPERTY_CONTACT_FIRST_NAME = "contact_first_name";
  @jakarta.annotation.Nullable  private String contactFirstName;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private Long contactId;

  public static final String JSON_PROPERTY_CONTACT_LAST_NAME = "contact_last_name";
  @jakarta.annotation.Nullable  private String contactLastName;

  public static final String JSON_PROPERTY_DATE_EARNED = "date_earned";
  @jakarta.annotation.Nullable  private ZonedDateTime dateEarned;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_INVOICE_ID = "invoice_id";
  @jakarta.annotation.Nullable  private Long invoiceId;

  public static final String JSON_PROPERTY_PRODUCT_NAME = "product_name";
  @jakarta.annotation.Nullable  private String productName;

  public static final String JSON_PROPERTY_SALES_AFFILIATE_ID = "sales_affiliate_id";
  @jakarta.annotation.Nullable  private Long salesAffiliateId;

  public static final String JSON_PROPERTY_SOLD_BY_FIRST_NAME = "sold_by_first_name";
  @jakarta.annotation.Nullable  private String soldByFirstName;

  public static final String JSON_PROPERTY_SOLD_BY_LAST_NAME = "sold_by_last_name";
  @jakarta.annotation.Nullable  private String soldByLastName;

  public AffiliateCommission() { 
  }

  public AffiliateCommission affOwedId(@jakarta.annotation.Nullable Long affOwedId) {
    this.affOwedId = affOwedId;
    return this;
  }

  /**
   * Get affOwedId
   * @return affOwedId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AFF_OWED_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getAffOwedId() {
    return affOwedId;
  }


  @JsonProperty(JSON_PROPERTY_AFF_OWED_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAffOwedId(@jakarta.annotation.Nullable Long affOwedId) {
    this.affOwedId = affOwedId;
  }


  public AffiliateCommission amountEarned(@jakarta.annotation.Nullable Float amountEarned) {
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
  public Float getAmountEarned() {
    return amountEarned;
  }


  @JsonProperty(JSON_PROPERTY_AMOUNT_EARNED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAmountEarned(@jakarta.annotation.Nullable Float amountEarned) {
    this.amountEarned = amountEarned;
  }


  public AffiliateCommission contactFirstName(@jakarta.annotation.Nullable String contactFirstName) {
    this.contactFirstName = contactFirstName;
    return this;
  }

  /**
   * Get contactFirstName
   * @return contactFirstName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_FIRST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContactFirstName() {
    return contactFirstName;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_FIRST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactFirstName(@jakarta.annotation.Nullable String contactFirstName) {
    this.contactFirstName = contactFirstName;
  }


  public AffiliateCommission contactId(@jakarta.annotation.Nullable Long contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * Get contactId
   * @return contactId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getContactId() {
    return contactId;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactId(@jakarta.annotation.Nullable Long contactId) {
    this.contactId = contactId;
  }


  public AffiliateCommission contactLastName(@jakarta.annotation.Nullable String contactLastName) {
    this.contactLastName = contactLastName;
    return this;
  }

  /**
   * Get contactLastName
   * @return contactLastName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_LAST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContactLastName() {
    return contactLastName;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_LAST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactLastName(@jakarta.annotation.Nullable String contactLastName) {
    this.contactLastName = contactLastName;
  }


  public AffiliateCommission dateEarned(@jakarta.annotation.Nullable ZonedDateTime dateEarned) {
    this.dateEarned = dateEarned;
    return this;
  }

  /**
   * Get dateEarned
   * @return dateEarned
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DATE_EARNED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ZonedDateTime getDateEarned() {
    return dateEarned;
  }


  @JsonProperty(JSON_PROPERTY_DATE_EARNED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDateEarned(@jakarta.annotation.Nullable ZonedDateTime dateEarned) {
    this.dateEarned = dateEarned;
  }


  public AffiliateCommission description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(@jakarta.annotation.Nullable String description) {
    this.description = description;
  }


  public AffiliateCommission invoiceId(@jakarta.annotation.Nullable Long invoiceId) {
    this.invoiceId = invoiceId;
    return this;
  }

  /**
   * Get invoiceId
   * @return invoiceId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INVOICE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getInvoiceId() {
    return invoiceId;
  }


  @JsonProperty(JSON_PROPERTY_INVOICE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInvoiceId(@jakarta.annotation.Nullable Long invoiceId) {
    this.invoiceId = invoiceId;
  }


  public AffiliateCommission productName(@jakarta.annotation.Nullable String productName) {
    this.productName = productName;
    return this;
  }

  /**
   * Get productName
   * @return productName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getProductName() {
    return productName;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductName(@jakarta.annotation.Nullable String productName) {
    this.productName = productName;
  }


  public AffiliateCommission salesAffiliateId(@jakarta.annotation.Nullable Long salesAffiliateId) {
    this.salesAffiliateId = salesAffiliateId;
    return this;
  }

  /**
   * Get salesAffiliateId
   * @return salesAffiliateId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SALES_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getSalesAffiliateId() {
    return salesAffiliateId;
  }


  @JsonProperty(JSON_PROPERTY_SALES_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSalesAffiliateId(@jakarta.annotation.Nullable Long salesAffiliateId) {
    this.salesAffiliateId = salesAffiliateId;
  }


  public AffiliateCommission soldByFirstName(@jakarta.annotation.Nullable String soldByFirstName) {
    this.soldByFirstName = soldByFirstName;
    return this;
  }

  /**
   * Get soldByFirstName
   * @return soldByFirstName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SOLD_BY_FIRST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSoldByFirstName() {
    return soldByFirstName;
  }


  @JsonProperty(JSON_PROPERTY_SOLD_BY_FIRST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSoldByFirstName(@jakarta.annotation.Nullable String soldByFirstName) {
    this.soldByFirstName = soldByFirstName;
  }


  public AffiliateCommission soldByLastName(@jakarta.annotation.Nullable String soldByLastName) {
    this.soldByLastName = soldByLastName;
    return this;
  }

  /**
   * Get soldByLastName
   * @return soldByLastName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SOLD_BY_LAST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSoldByLastName() {
    return soldByLastName;
  }


  @JsonProperty(JSON_PROPERTY_SOLD_BY_LAST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSoldByLastName(@jakarta.annotation.Nullable String soldByLastName) {
    this.soldByLastName = soldByLastName;
  }

  /**
   * Return true if this AffiliateCommission object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AffiliateCommission affiliateCommission = (AffiliateCommission) o;
    return Objects.equals(this.affOwedId, affiliateCommission.affOwedId) &&
        Objects.equals(this.amountEarned, affiliateCommission.amountEarned) &&
        Objects.equals(this.contactFirstName, affiliateCommission.contactFirstName) &&
        Objects.equals(this.contactId, affiliateCommission.contactId) &&
        Objects.equals(this.contactLastName, affiliateCommission.contactLastName) &&
        Objects.equals(this.dateEarned, affiliateCommission.dateEarned) &&
        Objects.equals(this.description, affiliateCommission.description) &&
        Objects.equals(this.invoiceId, affiliateCommission.invoiceId) &&
        Objects.equals(this.productName, affiliateCommission.productName) &&
        Objects.equals(this.salesAffiliateId, affiliateCommission.salesAffiliateId) &&
        Objects.equals(this.soldByFirstName, affiliateCommission.soldByFirstName) &&
        Objects.equals(this.soldByLastName, affiliateCommission.soldByLastName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affOwedId, amountEarned, contactFirstName, contactId, contactLastName, dateEarned, description, invoiceId, productName, salesAffiliateId, soldByFirstName, soldByLastName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AffiliateCommission {\n");
    sb.append("    affOwedId: ").append(toIndentedString(affOwedId)).append("\n");
    sb.append("    amountEarned: ").append(toIndentedString(amountEarned)).append("\n");
    sb.append("    contactFirstName: ").append(toIndentedString(contactFirstName)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    contactLastName: ").append(toIndentedString(contactLastName)).append("\n");
    sb.append("    dateEarned: ").append(toIndentedString(dateEarned)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    invoiceId: ").append(toIndentedString(invoiceId)).append("\n");
    sb.append("    productName: ").append(toIndentedString(productName)).append("\n");
    sb.append("    salesAffiliateId: ").append(toIndentedString(salesAffiliateId)).append("\n");
    sb.append("    soldByFirstName: ").append(toIndentedString(soldByFirstName)).append("\n");
    sb.append("    soldByLastName: ").append(toIndentedString(soldByLastName)).append("\n");
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
    
        private AffiliateCommission instance;
    
        public Builder() {
          this(new AffiliateCommission());
        }
    
        protected Builder(AffiliateCommission instance) {
          this.instance = instance;
        }
    
        public AffiliateCommission.Builder affOwedId(Long affOwedId) {
              this.instance.affOwedId = affOwedId;
          return this;
        }
            public AffiliateCommission.Builder amountEarned(Float amountEarned) {
              this.instance.amountEarned = amountEarned;
          return this;
        }
            public AffiliateCommission.Builder contactFirstName(String contactFirstName) {
              this.instance.contactFirstName = contactFirstName;
          return this;
        }
            public AffiliateCommission.Builder contactId(Long contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public AffiliateCommission.Builder contactLastName(String contactLastName) {
              this.instance.contactLastName = contactLastName;
          return this;
        }
            public AffiliateCommission.Builder dateEarned(ZonedDateTime dateEarned) {
              this.instance.dateEarned = dateEarned;
          return this;
        }
            public AffiliateCommission.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public AffiliateCommission.Builder invoiceId(Long invoiceId) {
              this.instance.invoiceId = invoiceId;
          return this;
        }
            public AffiliateCommission.Builder productName(String productName) {
              this.instance.productName = productName;
          return this;
        }
            public AffiliateCommission.Builder salesAffiliateId(Long salesAffiliateId) {
              this.instance.salesAffiliateId = salesAffiliateId;
          return this;
        }
            public AffiliateCommission.Builder soldByFirstName(String soldByFirstName) {
              this.instance.soldByFirstName = soldByFirstName;
          return this;
        }
            public AffiliateCommission.Builder soldByLastName(String soldByLastName) {
              this.instance.soldByLastName = soldByLastName;
          return this;
        }
        
    
        /**
        * returns a built AffiliateCommission instance.
        *
        * The builder is not reusable.
        */
        public AffiliateCommission build() {
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
      public static AffiliateCommission.Builder builder() {
        return new AffiliateCommission.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AffiliateCommission.Builder toBuilder() {
        return new AffiliateCommission.Builder()
          .affOwedId(getAffOwedId())
          .amountEarned(getAmountEarned())
          .contactFirstName(getContactFirstName())
          .contactId(getContactId())
          .contactLastName(getContactLastName())
          .dateEarned(getDateEarned())
          .description(getDescription())
          .invoiceId(getInvoiceId())
          .productName(getProductName())
          .salesAffiliateId(getSalesAffiliateId())
          .soldByFirstName(getSoldByFirstName())
          .soldByLastName(getSoldByLastName());
      }
}

