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
import com.keap.sdk.sdk.model.ProductInterest;
import com.keap.sdk.sdk.model.SubscriptionPlanInterest;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ProductInterestBundle
 */
@JsonPropertyOrder({
  ProductInterestBundle.JSON_PROPERTY_DESCRIPTION,
  ProductInterestBundle.JSON_PROPERTY_ID,
  ProductInterestBundle.JSON_PROPERTY_NAME,
  ProductInterestBundle.JSON_PROPERTY_PRODUCT_INTERESTS,
  ProductInterestBundle.JSON_PROPERTY_SUBSCRIPTION_PLAN_INTERESTS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ProductInterestBundle implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PRODUCT_INTERESTS = "product_interests";
  @jakarta.annotation.Nullable  private List<@Valid ProductInterest> productInterests = new ArrayList<>();

  public static final String JSON_PROPERTY_SUBSCRIPTION_PLAN_INTERESTS = "subscription_plan_interests";
  @jakarta.annotation.Nullable  private List<@Valid SubscriptionPlanInterest> subscriptionPlanInterests = new ArrayList<>();

  public ProductInterestBundle() { 
  }

  public ProductInterestBundle description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Product interest bundle description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product interest bundle description")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(@jakarta.annotation.Nullable String description) {
    this.description = description;
  }


  public ProductInterestBundle id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * The product interest bundle ID
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The product interest bundle ID")
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


  public ProductInterestBundle name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Product interest bundle name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product interest bundle name")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(@jakarta.annotation.Nullable String name) {
    this.name = name;
  }


  public ProductInterestBundle productInterests(@jakarta.annotation.Nullable List<@Valid ProductInterest> productInterests) {
    this.productInterests = productInterests;
    return this;
  }

  public ProductInterestBundle addProductInterestsItem(ProductInterest productInterestsItem) {
    if (this.productInterests == null) {
      this.productInterests = new ArrayList<>();
    }
    this.productInterests.add(productInterestsItem);
    return this;
  }

  /**
   * Product interests
   * @return productInterests
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product interests")
  @JsonProperty(JSON_PROPERTY_PRODUCT_INTERESTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ProductInterest> getProductInterests() {
    return productInterests;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_INTERESTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductInterests(@jakarta.annotation.Nullable List<@Valid ProductInterest> productInterests) {
    this.productInterests = productInterests;
  }


  public ProductInterestBundle subscriptionPlanInterests(@jakarta.annotation.Nullable List<@Valid SubscriptionPlanInterest> subscriptionPlanInterests) {
    this.subscriptionPlanInterests = subscriptionPlanInterests;
    return this;
  }

  public ProductInterestBundle addSubscriptionPlanInterestsItem(SubscriptionPlanInterest subscriptionPlanInterestsItem) {
    if (this.subscriptionPlanInterests == null) {
      this.subscriptionPlanInterests = new ArrayList<>();
    }
    this.subscriptionPlanInterests.add(subscriptionPlanInterestsItem);
    return this;
  }

  /**
   * Subscription plan interests
   * @return subscriptionPlanInterests
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Subscription plan interests")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_PLAN_INTERESTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid SubscriptionPlanInterest> getSubscriptionPlanInterests() {
    return subscriptionPlanInterests;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_PLAN_INTERESTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionPlanInterests(@jakarta.annotation.Nullable List<@Valid SubscriptionPlanInterest> subscriptionPlanInterests) {
    this.subscriptionPlanInterests = subscriptionPlanInterests;
  }

  /**
   * Return true if this ProductInterestBundle object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductInterestBundle productInterestBundle = (ProductInterestBundle) o;
    return Objects.equals(this.description, productInterestBundle.description) &&
        Objects.equals(this.id, productInterestBundle.id) &&
        Objects.equals(this.name, productInterestBundle.name) &&
        Objects.equals(this.productInterests, productInterestBundle.productInterests) &&
        Objects.equals(this.subscriptionPlanInterests, productInterestBundle.subscriptionPlanInterests);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, id, name, productInterests, subscriptionPlanInterests);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductInterestBundle {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    productInterests: ").append(toIndentedString(productInterests)).append("\n");
    sb.append("    subscriptionPlanInterests: ").append(toIndentedString(subscriptionPlanInterests)).append("\n");
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
    
        private ProductInterestBundle instance;
    
        public Builder() {
          this(new ProductInterestBundle());
        }
    
        protected Builder(ProductInterestBundle instance) {
          this.instance = instance;
        }
    
        public ProductInterestBundle.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public ProductInterestBundle.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public ProductInterestBundle.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public ProductInterestBundle.Builder productInterests(List<@Valid ProductInterest> productInterests) {
              this.instance.productInterests = productInterests;
          return this;
        }
            public ProductInterestBundle.Builder subscriptionPlanInterests(List<@Valid SubscriptionPlanInterest> subscriptionPlanInterests) {
              this.instance.subscriptionPlanInterests = subscriptionPlanInterests;
          return this;
        }
        
    
        /**
        * returns a built ProductInterestBundle instance.
        *
        * The builder is not reusable.
        */
        public ProductInterestBundle build() {
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
      public static ProductInterestBundle.Builder builder() {
        return new ProductInterestBundle.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ProductInterestBundle.Builder toBuilder() {
        return new ProductInterestBundle.Builder()
          .description(getDescription())
          .id(getId())
          .name(getName())
          .productInterests(getProductInterests())
          .subscriptionPlanInterests(getSubscriptionPlanInterests());
      }
}

