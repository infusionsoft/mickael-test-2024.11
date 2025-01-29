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
import com.keap.sdk.sdk.model.CardInfo;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.UUID;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * RestPaymentMethod
 */
@JsonPropertyOrder({
  RestPaymentMethod.JSON_PROPERTY_CARD_INFO,
  RestPaymentMethod.JSON_PROPERTY_DATE_CREATED,
  RestPaymentMethod.JSON_PROPERTY_ID,
  RestPaymentMethod.JSON_PROPERTY_PAYMENT_METHOD_TYPE,
  RestPaymentMethod.JSON_PROPERTY_PROCESSOR_ID,
  RestPaymentMethod.JSON_PROPERTY_PROCESSOR_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RestPaymentMethod implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CARD_INFO = "cardInfo";
  @jakarta.annotation.Nullable  private CardInfo cardInfo;

  public static final String JSON_PROPERTY_DATE_CREATED = "dateCreated";
  @jakarta.annotation.Nullable  private ZonedDateTime dateCreated;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_PAYMENT_METHOD_TYPE = "paymentMethodType";
  @jakarta.annotation.Nullable  private String paymentMethodType;

  public static final String JSON_PROPERTY_PROCESSOR_ID = "processorId";
  @jakarta.annotation.Nullable  private UUID processorId;

  public static final String JSON_PROPERTY_PROCESSOR_TYPE = "processorType";
  @jakarta.annotation.Nullable  private String processorType;

  public RestPaymentMethod() { 
  }

  public RestPaymentMethod cardInfo(@jakarta.annotation.Nullable CardInfo cardInfo) {
    this.cardInfo = cardInfo;
    return this;
  }

  /**
   * Get cardInfo
   * @return cardInfo
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CARD_INFO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CardInfo getCardInfo() {
    return cardInfo;
  }


  @JsonProperty(JSON_PROPERTY_CARD_INFO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCardInfo(@jakarta.annotation.Nullable CardInfo cardInfo) {
    this.cardInfo = cardInfo;
  }


  public RestPaymentMethod dateCreated(@jakarta.annotation.Nullable ZonedDateTime dateCreated) {
    this.dateCreated = dateCreated;
    return this;
  }

  /**
   * Get dateCreated
   * @return dateCreated
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DATE_CREATED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ZonedDateTime getDateCreated() {
    return dateCreated;
  }


  @JsonProperty(JSON_PROPERTY_DATE_CREATED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDateCreated(@jakarta.annotation.Nullable ZonedDateTime dateCreated) {
    this.dateCreated = dateCreated;
  }


  public RestPaymentMethod id(@jakarta.annotation.Nullable String id) {
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


  public RestPaymentMethod paymentMethodType(@jakarta.annotation.Nullable String paymentMethodType) {
    this.paymentMethodType = paymentMethodType;
    return this;
  }

  /**
   * Get paymentMethodType
   * @return paymentMethodType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAYMENT_METHOD_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPaymentMethodType() {
    return paymentMethodType;
  }


  @JsonProperty(JSON_PROPERTY_PAYMENT_METHOD_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaymentMethodType(@jakarta.annotation.Nullable String paymentMethodType) {
    this.paymentMethodType = paymentMethodType;
  }


  public RestPaymentMethod processorId(@jakarta.annotation.Nullable UUID processorId) {
    this.processorId = processorId;
    return this;
  }

  /**
   * Get processorId
   * @return processorId
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PROCESSOR_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public UUID getProcessorId() {
    return processorId;
  }


  @JsonProperty(JSON_PROPERTY_PROCESSOR_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProcessorId(@jakarta.annotation.Nullable UUID processorId) {
    this.processorId = processorId;
  }


  public RestPaymentMethod processorType(@jakarta.annotation.Nullable String processorType) {
    this.processorType = processorType;
    return this;
  }

  /**
   * Get processorType
   * @return processorType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PROCESSOR_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getProcessorType() {
    return processorType;
  }


  @JsonProperty(JSON_PROPERTY_PROCESSOR_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProcessorType(@jakarta.annotation.Nullable String processorType) {
    this.processorType = processorType;
  }

  /**
   * Return true if this RestPaymentMethod object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestPaymentMethod restPaymentMethod = (RestPaymentMethod) o;
    return Objects.equals(this.cardInfo, restPaymentMethod.cardInfo) &&
        Objects.equals(this.dateCreated, restPaymentMethod.dateCreated) &&
        Objects.equals(this.id, restPaymentMethod.id) &&
        Objects.equals(this.paymentMethodType, restPaymentMethod.paymentMethodType) &&
        Objects.equals(this.processorId, restPaymentMethod.processorId) &&
        Objects.equals(this.processorType, restPaymentMethod.processorType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(cardInfo, dateCreated, id, paymentMethodType, processorId, processorType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestPaymentMethod {\n");
    sb.append("    cardInfo: ").append(toIndentedString(cardInfo)).append("\n");
    sb.append("    dateCreated: ").append(toIndentedString(dateCreated)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    paymentMethodType: ").append(toIndentedString(paymentMethodType)).append("\n");
    sb.append("    processorId: ").append(toIndentedString(processorId)).append("\n");
    sb.append("    processorType: ").append(toIndentedString(processorType)).append("\n");
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
    
        private RestPaymentMethod instance;
    
        public Builder() {
          this(new RestPaymentMethod());
        }
    
        protected Builder(RestPaymentMethod instance) {
          this.instance = instance;
        }
    
        public RestPaymentMethod.Builder cardInfo(CardInfo cardInfo) {
              this.instance.cardInfo = cardInfo;
          return this;
        }
            public RestPaymentMethod.Builder dateCreated(ZonedDateTime dateCreated) {
              this.instance.dateCreated = dateCreated;
          return this;
        }
            public RestPaymentMethod.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public RestPaymentMethod.Builder paymentMethodType(String paymentMethodType) {
              this.instance.paymentMethodType = paymentMethodType;
          return this;
        }
            public RestPaymentMethod.Builder processorId(UUID processorId) {
              this.instance.processorId = processorId;
          return this;
        }
            public RestPaymentMethod.Builder processorType(String processorType) {
              this.instance.processorType = processorType;
          return this;
        }
        
    
        /**
        * returns a built RestPaymentMethod instance.
        *
        * The builder is not reusable.
        */
        public RestPaymentMethod build() {
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
      public static RestPaymentMethod.Builder builder() {
        return new RestPaymentMethod.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestPaymentMethod.Builder toBuilder() {
        return new RestPaymentMethod.Builder()
          .cardInfo(getCardInfo())
          .dateCreated(getDateCreated())
          .id(getId())
          .paymentMethodType(getPaymentMethodType())
          .processorId(getProcessorId())
          .processorType(getProcessorType());
      }
}

