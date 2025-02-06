/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
import com.keap.sdk.sdk.model.ListRestMerchantAccountResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListRestMerchantResponse
 */
@JsonPropertyOrder({
  ListRestMerchantResponse.JSON_PROPERTY_DEFAULT_MERCHANT_ACCOUNT_ID,
  ListRestMerchantResponse.JSON_PROPERTY_MERCHANT_ACCOUNTS,
  ListRestMerchantResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListRestMerchantResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DEFAULT_MERCHANT_ACCOUNT_ID = "default_merchant_account_id";
  @jakarta.annotation.Nullable  private String defaultMerchantAccountId;

  public static final String JSON_PROPERTY_MERCHANT_ACCOUNTS = "merchant_accounts";
  @jakarta.annotation.Nullable  private List<@Valid ListRestMerchantAccountResponse> merchantAccounts = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListRestMerchantResponse() { 
  }

  public ListRestMerchantResponse defaultMerchantAccountId(@jakarta.annotation.Nullable String defaultMerchantAccountId) {
    this.defaultMerchantAccountId = defaultMerchantAccountId;
    return this;
  }

  /**
   * Get defaultMerchantAccountId
   * @return defaultMerchantAccountId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_MERCHANT_ACCOUNT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultMerchantAccountId() {
    return defaultMerchantAccountId;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_MERCHANT_ACCOUNT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultMerchantAccountId(@jakarta.annotation.Nullable String defaultMerchantAccountId) {
    this.defaultMerchantAccountId = defaultMerchantAccountId;
  }


  public ListRestMerchantResponse merchantAccounts(@jakarta.annotation.Nullable List<@Valid ListRestMerchantAccountResponse> merchantAccounts) {
    this.merchantAccounts = merchantAccounts;
    return this;
  }

  public ListRestMerchantResponse addMerchantAccountsItem(ListRestMerchantAccountResponse merchantAccountsItem) {
    if (this.merchantAccounts == null) {
      this.merchantAccounts = new ArrayList<>();
    }
    this.merchantAccounts.add(merchantAccountsItem);
    return this;
  }

  /**
   * Get merchantAccounts
   * @return merchantAccounts
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MERCHANT_ACCOUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ListRestMerchantAccountResponse> getMerchantAccounts() {
    return merchantAccounts;
  }


  @JsonProperty(JSON_PROPERTY_MERCHANT_ACCOUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMerchantAccounts(@jakarta.annotation.Nullable List<@Valid ListRestMerchantAccountResponse> merchantAccounts) {
    this.merchantAccounts = merchantAccounts;
  }


  public ListRestMerchantResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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

  /**
   * Return true if this ListRestMerchantResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListRestMerchantResponse listRestMerchantResponse = (ListRestMerchantResponse) o;
    return Objects.equals(this.defaultMerchantAccountId, listRestMerchantResponse.defaultMerchantAccountId) &&
        Objects.equals(this.merchantAccounts, listRestMerchantResponse.merchantAccounts) &&
        Objects.equals(this.nextPageToken, listRestMerchantResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(defaultMerchantAccountId, merchantAccounts, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListRestMerchantResponse {\n");
    sb.append("    defaultMerchantAccountId: ").append(toIndentedString(defaultMerchantAccountId)).append("\n");
    sb.append("    merchantAccounts: ").append(toIndentedString(merchantAccounts)).append("\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
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
    
        private ListRestMerchantResponse instance;
    
        public Builder() {
          this(new ListRestMerchantResponse());
        }
    
        protected Builder(ListRestMerchantResponse instance) {
          this.instance = instance;
        }
    
        public ListRestMerchantResponse.Builder defaultMerchantAccountId(String defaultMerchantAccountId) {
              this.instance.defaultMerchantAccountId = defaultMerchantAccountId;
          return this;
        }
            public ListRestMerchantResponse.Builder merchantAccounts(List<@Valid ListRestMerchantAccountResponse> merchantAccounts) {
              this.instance.merchantAccounts = merchantAccounts;
          return this;
        }
            public ListRestMerchantResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListRestMerchantResponse instance.
        *
        * The builder is not reusable.
        */
        public ListRestMerchantResponse build() {
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
      public static ListRestMerchantResponse.Builder builder() {
        return new ListRestMerchantResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListRestMerchantResponse.Builder toBuilder() {
        return new ListRestMerchantResponse.Builder()
          .defaultMerchantAccountId(getDefaultMerchantAccountId())
          .merchantAccounts(getMerchantAccounts())
          .nextPageToken(getNextPageToken());
      }
}

