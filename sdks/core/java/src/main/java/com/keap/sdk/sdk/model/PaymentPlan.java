/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.770650
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
import com.keap.sdk.sdk.model.RestPaymentGateway;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * PaymentPlan
 */
@JsonPropertyOrder({
  PaymentPlan.JSON_PROPERTY_AUTO_CHARGE,
  PaymentPlan.JSON_PROPERTY_CREDIT_CARD_ID,
  PaymentPlan.JSON_PROPERTY_DAYS_BETWEEN_PAYMENTS,
  PaymentPlan.JSON_PROPERTY_INITIAL_PAYMENT_AMOUNT,
  PaymentPlan.JSON_PROPERTY_INITIAL_PAYMENT_DATE,
  PaymentPlan.JSON_PROPERTY_INITIAL_PAYMENT_PERCENT,
  PaymentPlan.JSON_PROPERTY_NUMBER_OF_PAYMENTS,
  PaymentPlan.JSON_PROPERTY_PAYMENT_GATEWAY,
  PaymentPlan.JSON_PROPERTY_PAYMENT_METHOD_ID,
  PaymentPlan.JSON_PROPERTY_PLAN_START_DATE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class PaymentPlan implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AUTO_CHARGE = "auto_charge";
  @jakarta.annotation.Nullable  private Boolean autoCharge;

  public static final String JSON_PROPERTY_CREDIT_CARD_ID = "credit_card_id";
  @jakarta.annotation.Nullable  private String creditCardId;

  public static final String JSON_PROPERTY_DAYS_BETWEEN_PAYMENTS = "days_between_payments";
  @jakarta.annotation.Nonnull  private Long daysBetweenPayments;

  public static final String JSON_PROPERTY_INITIAL_PAYMENT_AMOUNT = "initial_payment_amount";
  @jakarta.annotation.Nullable  private Double initialPaymentAmount;

  public static final String JSON_PROPERTY_INITIAL_PAYMENT_DATE = "initial_payment_date";
  @jakarta.annotation.Nullable  private String initialPaymentDate;

  public static final String JSON_PROPERTY_INITIAL_PAYMENT_PERCENT = "initial_payment_percent";
  @jakarta.annotation.Nullable  private Double initialPaymentPercent;

  public static final String JSON_PROPERTY_NUMBER_OF_PAYMENTS = "number_of_payments";
  @jakarta.annotation.Nonnull  private Long numberOfPayments;

  public static final String JSON_PROPERTY_PAYMENT_GATEWAY = "payment_gateway";
  @jakarta.annotation.Nullable  private RestPaymentGateway paymentGateway;

  public static final String JSON_PROPERTY_PAYMENT_METHOD_ID = "payment_method_id";
  @jakarta.annotation.Nullable  private String paymentMethodId;

  public static final String JSON_PROPERTY_PLAN_START_DATE = "plan_start_date";
  @jakarta.annotation.Nonnull  private String planStartDate;

  public PaymentPlan() { 
  }

  public PaymentPlan autoCharge(@jakarta.annotation.Nullable Boolean autoCharge) {
    this.autoCharge = autoCharge;
    return this;
  }

  /**
   * Get autoCharge
   * @return autoCharge
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AUTO_CHARGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAutoCharge() {
    return autoCharge;
  }


  @JsonProperty(JSON_PROPERTY_AUTO_CHARGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAutoCharge(@jakarta.annotation.Nullable Boolean autoCharge) {
    this.autoCharge = autoCharge;
  }


  public PaymentPlan creditCardId(@jakarta.annotation.Nullable String creditCardId) {
    this.creditCardId = creditCardId;
    return this;
  }

  /**
   * Get creditCardId
   * @return creditCardId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CREDIT_CARD_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreditCardId() {
    return creditCardId;
  }


  @JsonProperty(JSON_PROPERTY_CREDIT_CARD_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreditCardId(@jakarta.annotation.Nullable String creditCardId) {
    this.creditCardId = creditCardId;
  }


  public PaymentPlan daysBetweenPayments(@jakarta.annotation.Nonnull Long daysBetweenPayments) {
    this.daysBetweenPayments = daysBetweenPayments;
    return this;
  }

  /**
   * Get daysBetweenPayments
   * @return daysBetweenPayments
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DAYS_BETWEEN_PAYMENTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Long getDaysBetweenPayments() {
    return daysBetweenPayments;
  }


  @JsonProperty(JSON_PROPERTY_DAYS_BETWEEN_PAYMENTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDaysBetweenPayments(@jakarta.annotation.Nonnull Long daysBetweenPayments) {
    this.daysBetweenPayments = daysBetweenPayments;
  }


  public PaymentPlan initialPaymentAmount(@jakarta.annotation.Nullable Double initialPaymentAmount) {
    this.initialPaymentAmount = initialPaymentAmount;
    return this;
  }

  /**
   * Get initialPaymentAmount
   * @return initialPaymentAmount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INITIAL_PAYMENT_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getInitialPaymentAmount() {
    return initialPaymentAmount;
  }


  @JsonProperty(JSON_PROPERTY_INITIAL_PAYMENT_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInitialPaymentAmount(@jakarta.annotation.Nullable Double initialPaymentAmount) {
    this.initialPaymentAmount = initialPaymentAmount;
  }


  public PaymentPlan initialPaymentDate(@jakarta.annotation.Nullable String initialPaymentDate) {
    this.initialPaymentDate = initialPaymentDate;
    return this;
  }

  /**
   * Get initialPaymentDate
   * @return initialPaymentDate
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INITIAL_PAYMENT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getInitialPaymentDate() {
    return initialPaymentDate;
  }


  @JsonProperty(JSON_PROPERTY_INITIAL_PAYMENT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInitialPaymentDate(@jakarta.annotation.Nullable String initialPaymentDate) {
    this.initialPaymentDate = initialPaymentDate;
  }


  public PaymentPlan initialPaymentPercent(@jakarta.annotation.Nullable Double initialPaymentPercent) {
    this.initialPaymentPercent = initialPaymentPercent;
    return this;
  }

  /**
   * Get initialPaymentPercent
   * @return initialPaymentPercent
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INITIAL_PAYMENT_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getInitialPaymentPercent() {
    return initialPaymentPercent;
  }


  @JsonProperty(JSON_PROPERTY_INITIAL_PAYMENT_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInitialPaymentPercent(@jakarta.annotation.Nullable Double initialPaymentPercent) {
    this.initialPaymentPercent = initialPaymentPercent;
  }


  public PaymentPlan numberOfPayments(@jakarta.annotation.Nonnull Long numberOfPayments) {
    this.numberOfPayments = numberOfPayments;
    return this;
  }

  /**
   * Get numberOfPayments
   * @return numberOfPayments
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NUMBER_OF_PAYMENTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Long getNumberOfPayments() {
    return numberOfPayments;
  }


  @JsonProperty(JSON_PROPERTY_NUMBER_OF_PAYMENTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setNumberOfPayments(@jakarta.annotation.Nonnull Long numberOfPayments) {
    this.numberOfPayments = numberOfPayments;
  }


  public PaymentPlan paymentGateway(@jakarta.annotation.Nullable RestPaymentGateway paymentGateway) {
    this.paymentGateway = paymentGateway;
    return this;
  }

  /**
   * Get paymentGateway
   * @return paymentGateway
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_GATEWAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public RestPaymentGateway getPaymentGateway() {
    return paymentGateway;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_GATEWAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentGateway(@jakarta.annotation.Nullable RestPaymentGateway paymentGateway) {
    this.paymentGateway = paymentGateway;
  }


  public PaymentPlan paymentMethodId(@jakarta.annotation.Nullable String paymentMethodId) {
    this.paymentMethodId = paymentMethodId;
    return this;
  }

  /**
   * Get paymentMethodId
   * @return paymentMethodId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_METHOD_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPaymentMethodId() {
    return paymentMethodId;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_METHOD_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentMethodId(@jakarta.annotation.Nullable String paymentMethodId) {
    this.paymentMethodId = paymentMethodId;
  }


  public PaymentPlan planStartDate(@jakarta.annotation.Nonnull String planStartDate) {
    this.planStartDate = planStartDate;
    return this;
  }

  /**
   * Get planStartDate
   * @return planStartDate
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PLAN_START_DATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getPlanStartDate() {
    return planStartDate;
  }


  @JsonProperty(JSON_PROPERTY_PLAN_START_DATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPlanStartDate(@jakarta.annotation.Nonnull String planStartDate) {
    this.planStartDate = planStartDate;
  }

  /**
   * Return true if this PaymentPlan object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentPlan paymentPlan = (PaymentPlan) o;
    return Objects.equals(this.autoCharge, paymentPlan.autoCharge) &&
        Objects.equals(this.creditCardId, paymentPlan.creditCardId) &&
        Objects.equals(this.daysBetweenPayments, paymentPlan.daysBetweenPayments) &&
        Objects.equals(this.initialPaymentAmount, paymentPlan.initialPaymentAmount) &&
        Objects.equals(this.initialPaymentDate, paymentPlan.initialPaymentDate) &&
        Objects.equals(this.initialPaymentPercent, paymentPlan.initialPaymentPercent) &&
        Objects.equals(this.numberOfPayments, paymentPlan.numberOfPayments) &&
        Objects.equals(this.paymentGateway, paymentPlan.paymentGateway) &&
        Objects.equals(this.paymentMethodId, paymentPlan.paymentMethodId) &&
        Objects.equals(this.planStartDate, paymentPlan.planStartDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(autoCharge, creditCardId, daysBetweenPayments, initialPaymentAmount, initialPaymentDate, initialPaymentPercent, numberOfPayments, paymentGateway, paymentMethodId, planStartDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentPlan {\n");
    sb.append("    autoCharge: ").append(toIndentedString(autoCharge)).append("\n");
    sb.append("    creditCardId: ").append(toIndentedString(creditCardId)).append("\n");
    sb.append("    daysBetweenPayments: ").append(toIndentedString(daysBetweenPayments)).append("\n");
    sb.append("    initialPaymentAmount: ").append(toIndentedString(initialPaymentAmount)).append("\n");
    sb.append("    initialPaymentDate: ").append(toIndentedString(initialPaymentDate)).append("\n");
    sb.append("    initialPaymentPercent: ").append(toIndentedString(initialPaymentPercent)).append("\n");
    sb.append("    numberOfPayments: ").append(toIndentedString(numberOfPayments)).append("\n");
    sb.append("    paymentGateway: ").append(toIndentedString(paymentGateway)).append("\n");
    sb.append("    paymentMethodId: ").append(toIndentedString(paymentMethodId)).append("\n");
    sb.append("    planStartDate: ").append(toIndentedString(planStartDate)).append("\n");
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
    
        private PaymentPlan instance;
    
        public Builder() {
          this(new PaymentPlan());
        }
    
        protected Builder(PaymentPlan instance) {
          this.instance = instance;
        }
    
        public PaymentPlan.Builder autoCharge(Boolean autoCharge) {
              this.instance.autoCharge = autoCharge;
          return this;
        }
            public PaymentPlan.Builder creditCardId(String creditCardId) {
              this.instance.creditCardId = creditCardId;
          return this;
        }
            public PaymentPlan.Builder daysBetweenPayments(Long daysBetweenPayments) {
              this.instance.daysBetweenPayments = daysBetweenPayments;
          return this;
        }
            public PaymentPlan.Builder initialPaymentAmount(Double initialPaymentAmount) {
              this.instance.initialPaymentAmount = initialPaymentAmount;
          return this;
        }
            public PaymentPlan.Builder initialPaymentDate(String initialPaymentDate) {
              this.instance.initialPaymentDate = initialPaymentDate;
          return this;
        }
            public PaymentPlan.Builder initialPaymentPercent(Double initialPaymentPercent) {
              this.instance.initialPaymentPercent = initialPaymentPercent;
          return this;
        }
            public PaymentPlan.Builder numberOfPayments(Long numberOfPayments) {
              this.instance.numberOfPayments = numberOfPayments;
          return this;
        }
            public PaymentPlan.Builder paymentGateway(RestPaymentGateway paymentGateway) {
              this.instance.paymentGateway = paymentGateway;
          return this;
        }
            public PaymentPlan.Builder paymentMethodId(String paymentMethodId) {
              this.instance.paymentMethodId = paymentMethodId;
          return this;
        }
            public PaymentPlan.Builder planStartDate(String planStartDate) {
              this.instance.planStartDate = planStartDate;
          return this;
        }
        
    
        /**
        * returns a built PaymentPlan instance.
        *
        * The builder is not reusable.
        */
        public PaymentPlan build() {
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
      public static PaymentPlan.Builder builder() {
        return new PaymentPlan.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PaymentPlan.Builder toBuilder() {
        return new PaymentPlan.Builder()
          .autoCharge(getAutoCharge())
          .creditCardId(getCreditCardId())
          .daysBetweenPayments(getDaysBetweenPayments())
          .initialPaymentAmount(getInitialPaymentAmount())
          .initialPaymentDate(getInitialPaymentDate())
          .initialPaymentPercent(getInitialPaymentPercent())
          .numberOfPayments(getNumberOfPayments())
          .paymentGateway(getPaymentGateway())
          .paymentMethodId(getPaymentMethodId())
          .planStartDate(getPlanStartDate());
      }
}

