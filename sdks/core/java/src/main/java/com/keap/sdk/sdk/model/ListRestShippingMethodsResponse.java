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
import com.keap.sdk.sdk.model.ShippingMethod;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListRestShippingMethodsResponse
 */
@JsonPropertyOrder({
  ListRestShippingMethodsResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  ListRestShippingMethodsResponse.JSON_PROPERTY_SHIPPING_METHODS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListRestShippingMethodsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_SHIPPING_METHODS = "shipping_methods";
  @jakarta.annotation.Nullable  private List<@Valid ShippingMethod> shippingMethods = new ArrayList<>();

  public ListRestShippingMethodsResponse() { 
  }

  public ListRestShippingMethodsResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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


  public ListRestShippingMethodsResponse shippingMethods(@jakarta.annotation.Nullable List<@Valid ShippingMethod> shippingMethods) {
    this.shippingMethods = shippingMethods;
    return this;
  }

  public ListRestShippingMethodsResponse addShippingMethodsItem(ShippingMethod shippingMethodsItem) {
    if (this.shippingMethods == null) {
      this.shippingMethods = new ArrayList<>();
    }
    this.shippingMethods.add(shippingMethodsItem);
    return this;
  }

  /**
   * Get shippingMethods
   * @return shippingMethods
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SHIPPING_METHODS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ShippingMethod> getShippingMethods() {
    return shippingMethods;
  }


  @JsonProperty(JSON_PROPERTY_SHIPPING_METHODS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShippingMethods(@jakarta.annotation.Nullable List<@Valid ShippingMethod> shippingMethods) {
    this.shippingMethods = shippingMethods;
  }

  /**
   * Return true if this ListRestShippingMethodsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListRestShippingMethodsResponse listRestShippingMethodsResponse = (ListRestShippingMethodsResponse) o;
    return Objects.equals(this.nextPageToken, listRestShippingMethodsResponse.nextPageToken) &&
        Objects.equals(this.shippingMethods, listRestShippingMethodsResponse.shippingMethods);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, shippingMethods);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListRestShippingMethodsResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    shippingMethods: ").append(toIndentedString(shippingMethods)).append("\n");
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
    
        private ListRestShippingMethodsResponse instance;
    
        public Builder() {
          this(new ListRestShippingMethodsResponse());
        }
    
        protected Builder(ListRestShippingMethodsResponse instance) {
          this.instance = instance;
        }
    
        public ListRestShippingMethodsResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public ListRestShippingMethodsResponse.Builder shippingMethods(List<@Valid ShippingMethod> shippingMethods) {
              this.instance.shippingMethods = shippingMethods;
          return this;
        }
        
    
        /**
        * returns a built ListRestShippingMethodsResponse instance.
        *
        * The builder is not reusable.
        */
        public ListRestShippingMethodsResponse build() {
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
      public static ListRestShippingMethodsResponse.Builder builder() {
        return new ListRestShippingMethodsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListRestShippingMethodsResponse.Builder toBuilder() {
        return new ListRestShippingMethodsResponse.Builder()
          .nextPageToken(getNextPageToken())
          .shippingMethods(getShippingMethods());
      }
}

