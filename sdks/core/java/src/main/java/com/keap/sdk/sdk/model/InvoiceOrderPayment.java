/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
import java.math.BigDecimal;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * InvoiceOrderPayment
 */
@JsonPropertyOrder({
  InvoiceOrderPayment.JSON_PROPERTY_AMOUNT,
  InvoiceOrderPayment.JSON_PROPERTY_ID,
  InvoiceOrderPayment.JSON_PROPERTY_INVOICE_ID,
  InvoiceOrderPayment.JSON_PROPERTY_LAST_UPDATED_TIME,
  InvoiceOrderPayment.JSON_PROPERTY_NOTE,
  InvoiceOrderPayment.JSON_PROPERTY_PAY_STATUS,
  InvoiceOrderPayment.JSON_PROPERTY_PAY_TIME,
  InvoiceOrderPayment.JSON_PROPERTY_PAYMENT_ID,
  InvoiceOrderPayment.JSON_PROPERTY_REFUND_INVOICE_PAYMENT_ID,
  InvoiceOrderPayment.JSON_PROPERTY_SKIP_COMMISSION
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class InvoiceOrderPayment implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AMOUNT = "amount";
  @jakarta.annotation.Nullable  private BigDecimal amount;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_INVOICE_ID = "invoice_id";
  @jakarta.annotation.Nullable  private String invoiceId;

  public static final String JSON_PROPERTY_LAST_UPDATED_TIME = "last_updated_time";
  @jakarta.annotation.Nullable  private String lastUpdatedTime;

  public static final String JSON_PROPERTY_NOTE = "note";
  @jakarta.annotation.Nullable  private String note;

  /**
   * Gets or Sets payStatus
   */
  public enum PayStatusEnum {
    MANUAL_PAID(String.valueOf("MANUAL_PAID")),
    
    REFUNDED(String.valueOf("REFUNDED")),
    
    VOIDED(String.valueOf("VOIDED")),
    
    PAYPAL_PAID(String.valueOf("PAYPAL_PAID")),
    
    APPROVED(String.valueOf("APPROVED")),
    
    FAILED(String.valueOf("FAILED")),
    
    ERROR(String.valueOf("ERROR")),
    
    PENDING(String.valueOf("PENDING")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    PayStatusEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static PayStatusEnum fromValue(String value) {
      for (PayStatusEnum b : PayStatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_PAY_STATUS = "pay_status";
  @jakarta.annotation.Nullable  private PayStatusEnum payStatus;

  public static final String JSON_PROPERTY_PAY_TIME = "pay_time";
  @jakarta.annotation.Nullable  private String payTime;

  public static final String JSON_PROPERTY_PAYMENT_ID = "payment_id";
  @jakarta.annotation.Nullable  private String paymentId;

  public static final String JSON_PROPERTY_REFUND_INVOICE_PAYMENT_ID = "refund_invoice_payment_id";
  @jakarta.annotation.Nullable  private String refundInvoicePaymentId;

  public static final String JSON_PROPERTY_SKIP_COMMISSION = "skip_commission";
  @jakarta.annotation.Nullable  private Boolean skipCommission;

  public InvoiceOrderPayment() { 
  }

  public InvoiceOrderPayment amount(@jakarta.annotation.Nullable BigDecimal amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Get amount
   * @return amount
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public BigDecimal getAmount() {
    return amount;
  }


  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAmount(@jakarta.annotation.Nullable BigDecimal amount) {
    this.amount = amount;
  }


  public InvoiceOrderPayment id(@jakarta.annotation.Nullable String id) {
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


  public InvoiceOrderPayment invoiceId(@jakarta.annotation.Nullable String invoiceId) {
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
  public String getInvoiceId() {
    return invoiceId;
  }


  @JsonProperty(JSON_PROPERTY_INVOICE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInvoiceId(@jakarta.annotation.Nullable String invoiceId) {
    this.invoiceId = invoiceId;
  }


  public InvoiceOrderPayment lastUpdatedTime(@jakarta.annotation.Nullable String lastUpdatedTime) {
    this.lastUpdatedTime = lastUpdatedTime;
    return this;
  }

  /**
   * Get lastUpdatedTime
   * @return lastUpdatedTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LAST_UPDATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLastUpdatedTime() {
    return lastUpdatedTime;
  }


  @JsonProperty(JSON_PROPERTY_LAST_UPDATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLastUpdatedTime(@jakarta.annotation.Nullable String lastUpdatedTime) {
    this.lastUpdatedTime = lastUpdatedTime;
  }


  public InvoiceOrderPayment note(@jakarta.annotation.Nullable String note) {
    this.note = note;
    return this;
  }

  /**
   * Get note
   * @return note
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NOTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNote() {
    return note;
  }


  @JsonProperty(JSON_PROPERTY_NOTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNote(@jakarta.annotation.Nullable String note) {
    this.note = note;
  }


  public InvoiceOrderPayment payStatus(@jakarta.annotation.Nullable PayStatusEnum payStatus) {
    this.payStatus = payStatus;
    return this;
  }

  /**
   * Get payStatus
   * @return payStatus
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public PayStatusEnum getPayStatus() {
    return payStatus;
  }


  @JsonProperty(JSON_PROPERTY_PAY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPayStatus(@jakarta.annotation.Nullable PayStatusEnum payStatus) {
    this.payStatus = payStatus;
  }


  public InvoiceOrderPayment payTime(@jakarta.annotation.Nullable String payTime) {
    this.payTime = payTime;
    return this;
  }

  /**
   * Get payTime
   * @return payTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAY_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPayTime() {
    return payTime;
  }


  @JsonProperty(JSON_PROPERTY_PAY_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPayTime(@jakarta.annotation.Nullable String payTime) {
    this.payTime = payTime;
  }


  public InvoiceOrderPayment paymentId(@jakarta.annotation.Nullable String paymentId) {
    this.paymentId = paymentId;
    return this;
  }

  /**
   * Get paymentId
   * @return paymentId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPaymentId() {
    return paymentId;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentId(@jakarta.annotation.Nullable String paymentId) {
    this.paymentId = paymentId;
  }


  public InvoiceOrderPayment refundInvoicePaymentId(@jakarta.annotation.Nullable String refundInvoicePaymentId) {
    this.refundInvoicePaymentId = refundInvoicePaymentId;
    return this;
  }

  /**
   * Get refundInvoicePaymentId
   * @return refundInvoicePaymentId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REFUND_INVOICE_PAYMENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRefundInvoicePaymentId() {
    return refundInvoicePaymentId;
  }


  @JsonProperty(JSON_PROPERTY_REFUND_INVOICE_PAYMENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRefundInvoicePaymentId(@jakarta.annotation.Nullable String refundInvoicePaymentId) {
    this.refundInvoicePaymentId = refundInvoicePaymentId;
  }


  public InvoiceOrderPayment skipCommission(@jakarta.annotation.Nullable Boolean skipCommission) {
    this.skipCommission = skipCommission;
    return this;
  }

  /**
   * Get skipCommission
   * @return skipCommission
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SKIP_COMMISSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getSkipCommission() {
    return skipCommission;
  }


  @JsonProperty(JSON_PROPERTY_SKIP_COMMISSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSkipCommission(@jakarta.annotation.Nullable Boolean skipCommission) {
    this.skipCommission = skipCommission;
  }

  /**
   * Return true if this InvoiceOrderPayment object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InvoiceOrderPayment invoiceOrderPayment = (InvoiceOrderPayment) o;
    return Objects.equals(this.amount, invoiceOrderPayment.amount) &&
        Objects.equals(this.id, invoiceOrderPayment.id) &&
        Objects.equals(this.invoiceId, invoiceOrderPayment.invoiceId) &&
        Objects.equals(this.lastUpdatedTime, invoiceOrderPayment.lastUpdatedTime) &&
        Objects.equals(this.note, invoiceOrderPayment.note) &&
        Objects.equals(this.payStatus, invoiceOrderPayment.payStatus) &&
        Objects.equals(this.payTime, invoiceOrderPayment.payTime) &&
        Objects.equals(this.paymentId, invoiceOrderPayment.paymentId) &&
        Objects.equals(this.refundInvoicePaymentId, invoiceOrderPayment.refundInvoicePaymentId) &&
        Objects.equals(this.skipCommission, invoiceOrderPayment.skipCommission);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, id, invoiceId, lastUpdatedTime, note, payStatus, payTime, paymentId, refundInvoicePaymentId, skipCommission);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InvoiceOrderPayment {\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    invoiceId: ").append(toIndentedString(invoiceId)).append("\n");
    sb.append("    lastUpdatedTime: ").append(toIndentedString(lastUpdatedTime)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
    sb.append("    payStatus: ").append(toIndentedString(payStatus)).append("\n");
    sb.append("    payTime: ").append(toIndentedString(payTime)).append("\n");
    sb.append("    paymentId: ").append(toIndentedString(paymentId)).append("\n");
    sb.append("    refundInvoicePaymentId: ").append(toIndentedString(refundInvoicePaymentId)).append("\n");
    sb.append("    skipCommission: ").append(toIndentedString(skipCommission)).append("\n");
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
    
        private InvoiceOrderPayment instance;
    
        public Builder() {
          this(new InvoiceOrderPayment());
        }
    
        protected Builder(InvoiceOrderPayment instance) {
          this.instance = instance;
        }
    
        public InvoiceOrderPayment.Builder amount(BigDecimal amount) {
              this.instance.amount = amount;
          return this;
        }
            public InvoiceOrderPayment.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public InvoiceOrderPayment.Builder invoiceId(String invoiceId) {
              this.instance.invoiceId = invoiceId;
          return this;
        }
            public InvoiceOrderPayment.Builder lastUpdatedTime(String lastUpdatedTime) {
              this.instance.lastUpdatedTime = lastUpdatedTime;
          return this;
        }
            public InvoiceOrderPayment.Builder note(String note) {
              this.instance.note = note;
          return this;
        }
            public InvoiceOrderPayment.Builder payStatus(PayStatusEnum payStatus) {
              this.instance.payStatus = payStatus;
          return this;
        }
            public InvoiceOrderPayment.Builder payTime(String payTime) {
              this.instance.payTime = payTime;
          return this;
        }
            public InvoiceOrderPayment.Builder paymentId(String paymentId) {
              this.instance.paymentId = paymentId;
          return this;
        }
            public InvoiceOrderPayment.Builder refundInvoicePaymentId(String refundInvoicePaymentId) {
              this.instance.refundInvoicePaymentId = refundInvoicePaymentId;
          return this;
        }
            public InvoiceOrderPayment.Builder skipCommission(Boolean skipCommission) {
              this.instance.skipCommission = skipCommission;
          return this;
        }
        
    
        /**
        * returns a built InvoiceOrderPayment instance.
        *
        * The builder is not reusable.
        */
        public InvoiceOrderPayment build() {
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
      public static InvoiceOrderPayment.Builder builder() {
        return new InvoiceOrderPayment.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public InvoiceOrderPayment.Builder toBuilder() {
        return new InvoiceOrderPayment.Builder()
          .amount(getAmount())
          .id(getId())
          .invoiceId(getInvoiceId())
          .lastUpdatedTime(getLastUpdatedTime())
          .note(getNote())
          .payStatus(getPayStatus())
          .payTime(getPayTime())
          .paymentId(getPaymentId())
          .refundInvoicePaymentId(getRefundInvoicePaymentId())
          .skipCommission(getSkipCommission());
      }
}

