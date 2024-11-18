/*
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
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
 * ListRestMerchantAccountResponse
 */
@JsonPropertyOrder({
  ListRestMerchantAccountResponse.JSON_PROPERTY_ACCOUNT_NAME,
  ListRestMerchantAccountResponse.JSON_PROPERTY_ID,
  ListRestMerchantAccountResponse.JSON_PROPERTY_IS_TEST,
  ListRestMerchantAccountResponse.JSON_PROPERTY_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.9.0")
public class ListRestMerchantAccountResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACCOUNT_NAME = "account_name";
  private String accountName;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_IS_TEST = "is_test";
  private Boolean isTest;

  /**
   * Gets or Sets type
   */
  public enum TypeEnum {
    USE_DEFAULT("USE_DEFAULT"),
    
    PAY_PAL("PAY_PAL"),
    
    PAY_PAL_PAYFLOW_PRO("PAY_PAL_PAYFLOW_PRO"),
    
    PAYPAL_COMMERCE("PAYPAL_COMMERCE"),
    
    PAYPAL_COMMERCE_UCC("PAYPAL_COMMERCE_UCC"),
    
    GATEWAY_PAYFLOW_PRO("GATEWAY_PAYFLOW_PRO"),
    
    AUTHORIZE("AUTHORIZE"),
    
    AUTHORIZE_CARD_PRESENT("AUTHORIZE_CARD_PRESENT"),
    
    POWER_PAY("POWER_PAY"),
    
    CART_CONNECT("CART_CONNECT"),
    
    SAGE_PAY("SAGE_PAY"),
    
    E_WAY("E_WAY"),
    
    USA_E_PAY("USA_E_PAY"),
    
    MONERIS("MONERIS"),
    
    DPS("DPS"),
    
    DUMMY("DUMMY"),
    
    INTERNET_SECURE("INTERNET_SECURE"),
    
    EASY_PAY_DIRECT("EASY_PAY_DIRECT"),
    
    NEXUS("NEXUS"),
    
    INF_PAY("INF_PAY"),
    
    FLEXPAY("FLEXPAY"),
    
    STRIPE("STRIPE"),
    
    STRIPE_ELEMENTS("STRIPE_ELEMENTS"),
    
    WORLD_PAY("WORLD_PAY"),
    
    RAINFOREST("RAINFOREST"),
    
    WEPAY("WEPAY"),
    
    KEAPPAY("KEAPPAY"),
    
    MANUAL("MANUAL"),
    
    UNKNOWN_COULD_NOT_DESERIALIZE("unknown_default_open_api");

    private String value;

    TypeEnum(String value) {
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
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_TYPE = "type";
  private TypeEnum type;

  public ListRestMerchantAccountResponse() { 
  }

  public ListRestMerchantAccountResponse accountName(String accountName) {
    this.accountName = accountName;
    return this;
  }

  /**
   * Get accountName
   * @return accountName
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ACCOUNT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getAccountName() {
    return accountName;
  }


  @JsonProperty(JSON_PROPERTY_ACCOUNT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAccountName(String accountName) {
    this.accountName = accountName;
  }


  public ListRestMerchantAccountResponse id(String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(String id) {
    this.id = id;
  }


  public ListRestMerchantAccountResponse isTest(Boolean isTest) {
    this.isTest = isTest;
    return this;
  }

  /**
   * Get isTest
   * @return isTest
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_IS_TEST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getIsTest() {
    return isTest;
  }


  @JsonProperty(JSON_PROPERTY_IS_TEST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsTest(Boolean isTest) {
    this.isTest = isTest;
  }


  public ListRestMerchantAccountResponse type(TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   */
  @jakarta.annotation.Nullable
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public TypeEnum getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(TypeEnum type) {
    this.type = type;
  }

  /**
   * Return true if this ListRestMerchantAccountResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListRestMerchantAccountResponse listRestMerchantAccountResponse = (ListRestMerchantAccountResponse) o;
    return Objects.equals(this.accountName, listRestMerchantAccountResponse.accountName) &&
        Objects.equals(this.id, listRestMerchantAccountResponse.id) &&
        Objects.equals(this.isTest, listRestMerchantAccountResponse.isTest) &&
        Objects.equals(this.type, listRestMerchantAccountResponse.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountName, id, isTest, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListRestMerchantAccountResponse {\n");
    sb.append("    accountName: ").append(toIndentedString(accountName)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isTest: ").append(toIndentedString(isTest)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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
    
        private ListRestMerchantAccountResponse instance;
    
        public Builder() {
          this(new ListRestMerchantAccountResponse());
        }
    
        protected Builder(ListRestMerchantAccountResponse instance) {
          this.instance = instance;
        }
    
        public ListRestMerchantAccountResponse.Builder accountName(String accountName) {
              this.instance.accountName = accountName;
          return this;
        }
            public ListRestMerchantAccountResponse.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public ListRestMerchantAccountResponse.Builder isTest(Boolean isTest) {
              this.instance.isTest = isTest;
          return this;
        }
            public ListRestMerchantAccountResponse.Builder type(TypeEnum type) {
              this.instance.type = type;
          return this;
        }
        
    
        /**
        * returns a built ListRestMerchantAccountResponse instance.
        *
        * The builder is not reusable.
        */
        public ListRestMerchantAccountResponse build() {
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
      public static ListRestMerchantAccountResponse.Builder builder() {
        return new ListRestMerchantAccountResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListRestMerchantAccountResponse.Builder toBuilder() {
        return new ListRestMerchantAccountResponse.Builder()
          .accountName(getAccountName())
          .id(getId())
          .isTest(getIsTest())
          .type(getType());
      }
}

