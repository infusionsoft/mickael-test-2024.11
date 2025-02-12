/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
import com.keap.core.sdk.model.ProductCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListProductCategoriesResponse
 */
@JsonPropertyOrder({
  ListProductCategoriesResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  ListProductCategoriesResponse.JSON_PROPERTY_PRODUCT_CATEGORIES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListProductCategoriesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_PRODUCT_CATEGORIES = "product_categories";
  @jakarta.annotation.Nullable  private List<@Valid ProductCategory> productCategories = new ArrayList<>();

  public ListProductCategoriesResponse() { 
  }

  public ListProductCategoriesResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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


  public ListProductCategoriesResponse productCategories(@jakarta.annotation.Nullable List<@Valid ProductCategory> productCategories) {
    this.productCategories = productCategories;
    return this;
  }

  public ListProductCategoriesResponse addProductCategoriesItem(ProductCategory productCategoriesItem) {
    if (this.productCategories == null) {
      this.productCategories = new ArrayList<>();
    }
    this.productCategories.add(productCategoriesItem);
    return this;
  }

  /**
   * Get productCategories
   * @return productCategories
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ProductCategory> getProductCategories() {
    return productCategories;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductCategories(@jakarta.annotation.Nullable List<@Valid ProductCategory> productCategories) {
    this.productCategories = productCategories;
  }

  /**
   * Return true if this ListProductCategoriesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListProductCategoriesResponse listProductCategoriesResponse = (ListProductCategoriesResponse) o;
    return Objects.equals(this.nextPageToken, listProductCategoriesResponse.nextPageToken) &&
        Objects.equals(this.productCategories, listProductCategoriesResponse.productCategories);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, productCategories);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListProductCategoriesResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    productCategories: ").append(toIndentedString(productCategories)).append("\n");
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
    
        private ListProductCategoriesResponse instance;
    
        public Builder() {
          this(new ListProductCategoriesResponse());
        }
    
        protected Builder(ListProductCategoriesResponse instance) {
          this.instance = instance;
        }
    
        public ListProductCategoriesResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public ListProductCategoriesResponse.Builder productCategories(List<@Valid ProductCategory> productCategories) {
              this.instance.productCategories = productCategories;
          return this;
        }
        
    
        /**
        * returns a built ListProductCategoriesResponse instance.
        *
        * The builder is not reusable.
        */
        public ListProductCategoriesResponse build() {
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
      public static ListProductCategoriesResponse.Builder builder() {
        return new ListProductCategoriesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListProductCategoriesResponse.Builder toBuilder() {
        return new ListProductCategoriesResponse.Builder()
          .nextPageToken(getNextPageToken())
          .productCategories(getProductCategories());
      }
}

