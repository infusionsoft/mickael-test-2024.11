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
import com.keap.core.sdk.model.RestPaymentMethod;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * PaymentMethodList
 */
@JsonPropertyOrder({
  PaymentMethodList.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  PaymentMethodList.JSON_PROPERTY_RECORDS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class PaymentMethodList implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_RECORDS = "records";
  @jakarta.annotation.Nullable  private List<@Valid RestPaymentMethod> records = new ArrayList<>();

  public PaymentMethodList() { 
  }

  public PaymentMethodList nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Get nextPageToken
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextPageToken() {
    return nextPageToken;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
  }


  public PaymentMethodList records(@jakarta.annotation.Nullable List<@Valid RestPaymentMethod> records) {
    this.records = records;
    return this;
  }

  public PaymentMethodList addRecordsItem(RestPaymentMethod recordsItem) {
    if (this.records == null) {
      this.records = new ArrayList<>();
    }
    this.records.add(recordsItem);
    return this;
  }

  /**
   * Get records
   * @return records
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RECORDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid RestPaymentMethod> getRecords() {
    return records;
  }


  @JsonProperty(JSON_PROPERTY_RECORDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRecords(@jakarta.annotation.Nullable List<@Valid RestPaymentMethod> records) {
    this.records = records;
  }

  /**
   * Return true if this PaymentMethodList object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentMethodList paymentMethodList = (PaymentMethodList) o;
    return Objects.equals(this.nextPageToken, paymentMethodList.nextPageToken) &&
        Objects.equals(this.records, paymentMethodList.records);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, records);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentMethodList {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    records: ").append(toIndentedString(records)).append("\n");
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
    
        private PaymentMethodList instance;
    
        public Builder() {
          this(new PaymentMethodList());
        }
    
        protected Builder(PaymentMethodList instance) {
          this.instance = instance;
        }
    
        public PaymentMethodList.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public PaymentMethodList.Builder records(List<@Valid RestPaymentMethod> records) {
              this.instance.records = records;
          return this;
        }
        
    
        /**
        * returns a built PaymentMethodList instance.
        *
        * The builder is not reusable.
        */
        public PaymentMethodList build() {
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
      public static PaymentMethodList.Builder builder() {
        return new PaymentMethodList.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PaymentMethodList.Builder toBuilder() {
        return new PaymentMethodList.Builder()
          .nextPageToken(getNextPageToken())
          .records(getRecords());
      }
}

