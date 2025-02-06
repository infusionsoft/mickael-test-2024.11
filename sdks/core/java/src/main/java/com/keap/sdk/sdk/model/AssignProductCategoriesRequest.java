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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * AssignProductCategoriesRequest
 */
@JsonPropertyOrder({
  AssignProductCategoriesRequest.JSON_PROPERTY_PRODUCT_CATEGORY_IDS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class AssignProductCategoriesRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_PRODUCT_CATEGORY_IDS = "product_category_ids";
  @jakarta.annotation.Nonnull  private List<String> productCategoryIds = new ArrayList<>();

  public AssignProductCategoriesRequest() { 
  }

  public AssignProductCategoriesRequest productCategoryIds(@jakarta.annotation.Nonnull List<String> productCategoryIds) {
    this.productCategoryIds = productCategoryIds;
    return this;
  }

  public AssignProductCategoriesRequest addProductCategoryIdsItem(String productCategoryIdsItem) {
    if (this.productCategoryIds == null) {
      this.productCategoryIds = new ArrayList<>();
    }
    this.productCategoryIds.add(productCategoryIdsItem);
    return this;
  }

  /**
   * Get productCategoryIds
   * @return productCategoryIds
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_CATEGORY_IDS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public List<String> getProductCategoryIds() {
    return productCategoryIds;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_CATEGORY_IDS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setProductCategoryIds(@jakarta.annotation.Nonnull List<String> productCategoryIds) {
    this.productCategoryIds = productCategoryIds;
  }

  /**
   * Return true if this AssignProductCategoriesRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AssignProductCategoriesRequest assignProductCategoriesRequest = (AssignProductCategoriesRequest) o;
    return Objects.equals(this.productCategoryIds, assignProductCategoriesRequest.productCategoryIds);
  }

  @Override
  public int hashCode() {
    return Objects.hash(productCategoryIds);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AssignProductCategoriesRequest {\n");
    sb.append("    productCategoryIds: ").append(toIndentedString(productCategoryIds)).append("\n");
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
    
        private AssignProductCategoriesRequest instance;
    
        public Builder() {
          this(new AssignProductCategoriesRequest());
        }
    
        protected Builder(AssignProductCategoriesRequest instance) {
          this.instance = instance;
        }
    
        public AssignProductCategoriesRequest.Builder productCategoryIds(List<String> productCategoryIds) {
              this.instance.productCategoryIds = productCategoryIds;
          return this;
        }
        
    
        /**
        * returns a built AssignProductCategoriesRequest instance.
        *
        * The builder is not reusable.
        */
        public AssignProductCategoriesRequest build() {
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
      public static AssignProductCategoriesRequest.Builder builder() {
        return new AssignProductCategoriesRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AssignProductCategoriesRequest.Builder toBuilder() {
        return new AssignProductCategoriesRequest.Builder()
          .productCategoryIds(getProductCategoryIds());
      }
}

