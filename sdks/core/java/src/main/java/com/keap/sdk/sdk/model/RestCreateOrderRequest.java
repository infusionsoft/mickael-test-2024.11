/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
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
import com.keap.sdk.sdk.model.AddressInformation;
import com.keap.sdk.sdk.model.CreateRestOrderItemRequest;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * RestCreateOrderRequest
 */
@JsonPropertyOrder({
  RestCreateOrderRequest.JSON_PROPERTY_CONTACT_ID,
  RestCreateOrderRequest.JSON_PROPERTY_LEAD_AFFILIATE_ID,
  RestCreateOrderRequest.JSON_PROPERTY_ORDER_ITEMS,
  RestCreateOrderRequest.JSON_PROPERTY_ORDER_TIME,
  RestCreateOrderRequest.JSON_PROPERTY_ORDER_TITLE,
  RestCreateOrderRequest.JSON_PROPERTY_ORDER_TYPE,
  RestCreateOrderRequest.JSON_PROPERTY_PROMO_CODES,
  RestCreateOrderRequest.JSON_PROPERTY_SALES_AFFILIATE_ID,
  RestCreateOrderRequest.JSON_PROPERTY_SHIPPING_ADDRESS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RestCreateOrderRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nonnull  private String contactId;

  public static final String JSON_PROPERTY_LEAD_AFFILIATE_ID = "lead_affiliate_id";
  @jakarta.annotation.Nullable  private String leadAffiliateId;

  public static final String JSON_PROPERTY_ORDER_ITEMS = "order_items";
  @jakarta.annotation.Nonnull  private List<@Valid CreateRestOrderItemRequest> orderItems = new ArrayList<>();

  public static final String JSON_PROPERTY_ORDER_TIME = "order_time";
  @jakarta.annotation.Nonnull  private String orderTime;

  public static final String JSON_PROPERTY_ORDER_TITLE = "order_title";
  @jakarta.annotation.Nonnull  private String orderTitle;

  /**
   * Gets or Sets orderType
   */
  public enum OrderTypeEnum {
    OFFLINE(String.valueOf("OFFLINE")),
    
    ONLINE(String.valueOf("ONLINE")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    OrderTypeEnum(String value) {
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
    public static OrderTypeEnum fromValue(String value) {
      for (OrderTypeEnum b : OrderTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_ORDER_TYPE = "order_type";
  @jakarta.annotation.Nonnull  private OrderTypeEnum orderType;

  public static final String JSON_PROPERTY_PROMO_CODES = "promo_codes";
  @jakarta.annotation.Nullable  private List<String> promoCodes = new ArrayList<>();

  public static final String JSON_PROPERTY_SALES_AFFILIATE_ID = "sales_affiliate_id";
  @jakarta.annotation.Nullable  private String salesAffiliateId;

  public static final String JSON_PROPERTY_SHIPPING_ADDRESS = "shipping_address";
  @jakarta.annotation.Nullable  private AddressInformation shippingAddress;

  public RestCreateOrderRequest() { 
  }

  public RestCreateOrderRequest contactId(@jakarta.annotation.Nonnull String contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * Get contactId
   * @return contactId
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getContactId() {
    return contactId;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setContactId(@jakarta.annotation.Nonnull String contactId) {
    this.contactId = contactId;
  }


  public RestCreateOrderRequest leadAffiliateId(@jakarta.annotation.Nullable String leadAffiliateId) {
    this.leadAffiliateId = leadAffiliateId;
    return this;
  }

  /**
   * Get leadAffiliateId
   * @return leadAffiliateId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LEAD_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLeadAffiliateId() {
    return leadAffiliateId;
  }


  @JsonProperty(JSON_PROPERTY_LEAD_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLeadAffiliateId(@jakarta.annotation.Nullable String leadAffiliateId) {
    this.leadAffiliateId = leadAffiliateId;
  }


  public RestCreateOrderRequest orderItems(@jakarta.annotation.Nonnull List<@Valid CreateRestOrderItemRequest> orderItems) {
    this.orderItems = orderItems;
    return this;
  }

  public RestCreateOrderRequest addOrderItemsItem(CreateRestOrderItemRequest orderItemsItem) {
    if (this.orderItems == null) {
      this.orderItems = new ArrayList<>();
    }
    this.orderItems.add(orderItemsItem);
    return this;
  }

  /**
   * Get orderItems
   * @return orderItems
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER_ITEMS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public List<@Valid CreateRestOrderItemRequest> getOrderItems() {
    return orderItems;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_ITEMS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOrderItems(@jakarta.annotation.Nonnull List<@Valid CreateRestOrderItemRequest> orderItems) {
    this.orderItems = orderItems;
  }


  public RestCreateOrderRequest orderTime(@jakarta.annotation.Nonnull String orderTime) {
    this.orderTime = orderTime;
    return this;
  }

  /**
   * Get orderTime
   * @return orderTime
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER_TIME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getOrderTime() {
    return orderTime;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_TIME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOrderTime(@jakarta.annotation.Nonnull String orderTime) {
    this.orderTime = orderTime;
  }


  public RestCreateOrderRequest orderTitle(@jakarta.annotation.Nonnull String orderTitle) {
    this.orderTitle = orderTitle;
    return this;
  }

  /**
   * Get orderTitle
   * @return orderTitle
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getOrderTitle() {
    return orderTitle;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOrderTitle(@jakarta.annotation.Nonnull String orderTitle) {
    this.orderTitle = orderTitle;
  }


  public RestCreateOrderRequest orderType(@jakarta.annotation.Nonnull OrderTypeEnum orderType) {
    this.orderType = orderType;
    return this;
  }

  /**
   * Get orderType
   * @return orderType
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public OrderTypeEnum getOrderType() {
    return orderType;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOrderType(@jakarta.annotation.Nonnull OrderTypeEnum orderType) {
    this.orderType = orderType;
  }


  public RestCreateOrderRequest promoCodes(@jakarta.annotation.Nullable List<String> promoCodes) {
    this.promoCodes = promoCodes;
    return this;
  }

  public RestCreateOrderRequest addPromoCodesItem(String promoCodesItem) {
    if (this.promoCodes == null) {
      this.promoCodes = new ArrayList<>();
    }
    this.promoCodes.add(promoCodesItem);
    return this;
  }

  /**
   * Uses multiple strings as promo codes. The corresponding discount will be applied to the order.
   * @return promoCodes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Uses multiple strings as promo codes. The corresponding discount will be applied to the order.")
  @JsonProperty(JSON_PROPERTY_PROMO_CODES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getPromoCodes() {
    return promoCodes;
  }


  @JsonProperty(JSON_PROPERTY_PROMO_CODES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPromoCodes(@jakarta.annotation.Nullable List<String> promoCodes) {
    this.promoCodes = promoCodes;
  }


  public RestCreateOrderRequest salesAffiliateId(@jakarta.annotation.Nullable String salesAffiliateId) {
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
  public String getSalesAffiliateId() {
    return salesAffiliateId;
  }


  @JsonProperty(JSON_PROPERTY_SALES_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSalesAffiliateId(@jakarta.annotation.Nullable String salesAffiliateId) {
    this.salesAffiliateId = salesAffiliateId;
  }


  public RestCreateOrderRequest shippingAddress(@jakarta.annotation.Nullable AddressInformation shippingAddress) {
    this.shippingAddress = shippingAddress;
    return this;
  }

  /**
   * Get shippingAddress
   * @return shippingAddress
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SHIPPING_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public AddressInformation getShippingAddress() {
    return shippingAddress;
  }


  @JsonProperty(JSON_PROPERTY_SHIPPING_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShippingAddress(@jakarta.annotation.Nullable AddressInformation shippingAddress) {
    this.shippingAddress = shippingAddress;
  }

  /**
   * Return true if this RestCreateOrderRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestCreateOrderRequest restCreateOrderRequest = (RestCreateOrderRequest) o;
    return Objects.equals(this.contactId, restCreateOrderRequest.contactId) &&
        Objects.equals(this.leadAffiliateId, restCreateOrderRequest.leadAffiliateId) &&
        Objects.equals(this.orderItems, restCreateOrderRequest.orderItems) &&
        Objects.equals(this.orderTime, restCreateOrderRequest.orderTime) &&
        Objects.equals(this.orderTitle, restCreateOrderRequest.orderTitle) &&
        Objects.equals(this.orderType, restCreateOrderRequest.orderType) &&
        Objects.equals(this.promoCodes, restCreateOrderRequest.promoCodes) &&
        Objects.equals(this.salesAffiliateId, restCreateOrderRequest.salesAffiliateId) &&
        Objects.equals(this.shippingAddress, restCreateOrderRequest.shippingAddress);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contactId, leadAffiliateId, orderItems, orderTime, orderTitle, orderType, promoCodes, salesAffiliateId, shippingAddress);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestCreateOrderRequest {\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    leadAffiliateId: ").append(toIndentedString(leadAffiliateId)).append("\n");
    sb.append("    orderItems: ").append(toIndentedString(orderItems)).append("\n");
    sb.append("    orderTime: ").append(toIndentedString(orderTime)).append("\n");
    sb.append("    orderTitle: ").append(toIndentedString(orderTitle)).append("\n");
    sb.append("    orderType: ").append(toIndentedString(orderType)).append("\n");
    sb.append("    promoCodes: ").append(toIndentedString(promoCodes)).append("\n");
    sb.append("    salesAffiliateId: ").append(toIndentedString(salesAffiliateId)).append("\n");
    sb.append("    shippingAddress: ").append(toIndentedString(shippingAddress)).append("\n");
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
    
        private RestCreateOrderRequest instance;
    
        public Builder() {
          this(new RestCreateOrderRequest());
        }
    
        protected Builder(RestCreateOrderRequest instance) {
          this.instance = instance;
        }
    
        public RestCreateOrderRequest.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public RestCreateOrderRequest.Builder leadAffiliateId(String leadAffiliateId) {
              this.instance.leadAffiliateId = leadAffiliateId;
          return this;
        }
            public RestCreateOrderRequest.Builder orderItems(List<@Valid CreateRestOrderItemRequest> orderItems) {
              this.instance.orderItems = orderItems;
          return this;
        }
            public RestCreateOrderRequest.Builder orderTime(String orderTime) {
              this.instance.orderTime = orderTime;
          return this;
        }
            public RestCreateOrderRequest.Builder orderTitle(String orderTitle) {
              this.instance.orderTitle = orderTitle;
          return this;
        }
            public RestCreateOrderRequest.Builder orderType(OrderTypeEnum orderType) {
              this.instance.orderType = orderType;
          return this;
        }
            public RestCreateOrderRequest.Builder promoCodes(List<String> promoCodes) {
              this.instance.promoCodes = promoCodes;
          return this;
        }
            public RestCreateOrderRequest.Builder salesAffiliateId(String salesAffiliateId) {
              this.instance.salesAffiliateId = salesAffiliateId;
          return this;
        }
            public RestCreateOrderRequest.Builder shippingAddress(AddressInformation shippingAddress) {
              this.instance.shippingAddress = shippingAddress;
          return this;
        }
        
    
        /**
        * returns a built RestCreateOrderRequest instance.
        *
        * The builder is not reusable.
        */
        public RestCreateOrderRequest build() {
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
      public static RestCreateOrderRequest.Builder builder() {
        return new RestCreateOrderRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestCreateOrderRequest.Builder toBuilder() {
        return new RestCreateOrderRequest.Builder()
          .contactId(getContactId())
          .leadAffiliateId(getLeadAffiliateId())
          .orderItems(getOrderItems())
          .orderTime(getOrderTime())
          .orderTitle(getOrderTitle())
          .orderType(getOrderType())
          .promoCodes(getPromoCodes())
          .salesAffiliateId(getSalesAffiliateId())
          .shippingAddress(getShippingAddress());
      }
}

