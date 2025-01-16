/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
import com.keap.sdk.sdk.model.OrderTotalDiscount;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListOrderTotalDiscountsResponse
 */
@JsonPropertyOrder({
  ListOrderTotalDiscountsResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  ListOrderTotalDiscountsResponse.JSON_PROPERTY_ORDER_TOTAL_DISCOUNTS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListOrderTotalDiscountsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_ORDER_TOTAL_DISCOUNTS = "order_total_discounts";
  @jakarta.annotation.Nullable  private List<@Valid OrderTotalDiscount> orderTotalDiscounts = new ArrayList<>();

  public ListOrderTotalDiscountsResponse() { 
  }

  public ListOrderTotalDiscountsResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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


  public ListOrderTotalDiscountsResponse orderTotalDiscounts(@jakarta.annotation.Nullable List<@Valid OrderTotalDiscount> orderTotalDiscounts) {
    this.orderTotalDiscounts = orderTotalDiscounts;
    return this;
  }

  public ListOrderTotalDiscountsResponse addOrderTotalDiscountsItem(OrderTotalDiscount orderTotalDiscountsItem) {
    if (this.orderTotalDiscounts == null) {
      this.orderTotalDiscounts = new ArrayList<>();
    }
    this.orderTotalDiscounts.add(orderTotalDiscountsItem);
    return this;
  }

  /**
   * Get orderTotalDiscounts
   * @return orderTotalDiscounts
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER_TOTAL_DISCOUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid OrderTotalDiscount> getOrderTotalDiscounts() {
    return orderTotalDiscounts;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_TOTAL_DISCOUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOrderTotalDiscounts(@jakarta.annotation.Nullable List<@Valid OrderTotalDiscount> orderTotalDiscounts) {
    this.orderTotalDiscounts = orderTotalDiscounts;
  }

  /**
   * Return true if this ListOrderTotalDiscountsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListOrderTotalDiscountsResponse listOrderTotalDiscountsResponse = (ListOrderTotalDiscountsResponse) o;
    return Objects.equals(this.nextPageToken, listOrderTotalDiscountsResponse.nextPageToken) &&
        Objects.equals(this.orderTotalDiscounts, listOrderTotalDiscountsResponse.orderTotalDiscounts);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, orderTotalDiscounts);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListOrderTotalDiscountsResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    orderTotalDiscounts: ").append(toIndentedString(orderTotalDiscounts)).append("\n");
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
    
        private ListOrderTotalDiscountsResponse instance;
    
        public Builder() {
          this(new ListOrderTotalDiscountsResponse());
        }
    
        protected Builder(ListOrderTotalDiscountsResponse instance) {
          this.instance = instance;
        }
    
        public ListOrderTotalDiscountsResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public ListOrderTotalDiscountsResponse.Builder orderTotalDiscounts(List<@Valid OrderTotalDiscount> orderTotalDiscounts) {
              this.instance.orderTotalDiscounts = orderTotalDiscounts;
          return this;
        }
        
    
        /**
        * returns a built ListOrderTotalDiscountsResponse instance.
        *
        * The builder is not reusable.
        */
        public ListOrderTotalDiscountsResponse build() {
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
      public static ListOrderTotalDiscountsResponse.Builder builder() {
        return new ListOrderTotalDiscountsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListOrderTotalDiscountsResponse.Builder toBuilder() {
        return new ListOrderTotalDiscountsResponse.Builder()
          .nextPageToken(getNextPageToken())
          .orderTotalDiscounts(getOrderTotalDiscounts());
      }
}

