/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
import com.keap.sdk.sdk.model.CurrencyValue;
import com.keap.sdk.sdk.model.ProductOptions;
import com.keap.sdk.sdk.model.SubscriptionPlan;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * RestV2Product
 */
@JsonPropertyOrder({
  RestV2Product.JSON_PROPERTY_ACTIVE,
  RestV2Product.JSON_PROPERTY_CATEGORIES,
  RestV2Product.JSON_PROPERTY_CITY_TAXABLE,
  RestV2Product.JSON_PROPERTY_COUNTRY_TAXABLE,
  RestV2Product.JSON_PROPERTY_DESCRIPTION,
  RestV2Product.JSON_PROPERTY_ID,
  RestV2Product.JSON_PROPERTY_NAME,
  RestV2Product.JSON_PROPERTY_OPTIONS,
  RestV2Product.JSON_PROPERTY_PRICE,
  RestV2Product.JSON_PROPERTY_SHORT_DESCRIPTION,
  RestV2Product.JSON_PROPERTY_SKU,
  RestV2Product.JSON_PROPERTY_STATE_TAXABLE,
  RestV2Product.JSON_PROPERTY_STOREFRONT_HIDDEN,
  RestV2Product.JSON_PROPERTY_SUBSCRIPTION_ONLY,
  RestV2Product.JSON_PROPERTY_SUBSCRIPTION_PLANS,
  RestV2Product.JSON_PROPERTY_TAXABLE,
  RestV2Product.JSON_PROPERTY_WEIGHT
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RestV2Product implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTIVE = "active";
  @jakarta.annotation.Nullable  private Boolean active;

  public static final String JSON_PROPERTY_CATEGORIES = "categories";
  @jakarta.annotation.Nullable  private List<String> categories = new ArrayList<>();

  public static final String JSON_PROPERTY_CITY_TAXABLE = "city_taxable";
  @jakarta.annotation.Nullable  private Boolean cityTaxable;

  public static final String JSON_PROPERTY_COUNTRY_TAXABLE = "country_taxable";
  @jakarta.annotation.Nullable  private Boolean countryTaxable;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_OPTIONS = "options";
  @jakarta.annotation.Nullable  private List<@Valid ProductOptions> options = new ArrayList<>();

  public static final String JSON_PROPERTY_PRICE = "price";
  @jakarta.annotation.Nullable  private CurrencyValue price;

  public static final String JSON_PROPERTY_SHORT_DESCRIPTION = "short_description";
  @jakarta.annotation.Nullable  private String shortDescription;

  public static final String JSON_PROPERTY_SKU = "sku";
  @jakarta.annotation.Nullable  private String sku;

  public static final String JSON_PROPERTY_STATE_TAXABLE = "state_taxable";
  @jakarta.annotation.Nullable  private Boolean stateTaxable;

  public static final String JSON_PROPERTY_STOREFRONT_HIDDEN = "storefront_hidden";
  @jakarta.annotation.Nullable  private Boolean storefrontHidden;

  public static final String JSON_PROPERTY_SUBSCRIPTION_ONLY = "subscription_only";
  @jakarta.annotation.Nullable  private Boolean subscriptionOnly;

  public static final String JSON_PROPERTY_SUBSCRIPTION_PLANS = "subscription_plans";
  @jakarta.annotation.Nullable  private List<@Valid SubscriptionPlan> subscriptionPlans = new ArrayList<>();

  public static final String JSON_PROPERTY_TAXABLE = "taxable";
  @jakarta.annotation.Nullable  private Boolean taxable;

  public static final String JSON_PROPERTY_WEIGHT = "weight";
  @jakarta.annotation.Nullable  private Double weight;

  public RestV2Product() { 
  }

  public RestV2Product active(@jakarta.annotation.Nullable Boolean active) {
    this.active = active;
    return this;
  }

  /**
   * True means active, False means inactive
   * @return active
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "True means active, False means inactive")
  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getActive() {
    return active;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActive(@jakarta.annotation.Nullable Boolean active) {
    this.active = active;
  }


  public RestV2Product categories(@jakarta.annotation.Nullable List<String> categories) {
    this.categories = categories;
    return this;
  }

  public RestV2Product addCategoriesItem(String categoriesItem) {
    if (this.categories == null) {
      this.categories = new ArrayList<>();
    }
    this.categories.add(categoriesItem);
    return this;
  }

  /**
   * List of category ids to indicate which categories this product will belong to. Can be empty.
   * @return categories
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "List of category ids to indicate which categories this product will belong to. Can be empty.")
  @JsonProperty(JSON_PROPERTY_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getCategories() {
    return categories;
  }


  @JsonProperty(JSON_PROPERTY_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCategories(@jakarta.annotation.Nullable List<String> categories) {
    this.categories = categories;
  }


  public RestV2Product cityTaxable(@jakarta.annotation.Nullable Boolean cityTaxable) {
    this.cityTaxable = cityTaxable;
    return this;
  }

  /**
   * If city-based taxes should be applied to this product
   * @return cityTaxable
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If city-based taxes should be applied to this product")
  @JsonProperty(JSON_PROPERTY_CITY_TAXABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getCityTaxable() {
    return cityTaxable;
  }


  @JsonProperty(JSON_PROPERTY_CITY_TAXABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCityTaxable(@jakarta.annotation.Nullable Boolean cityTaxable) {
    this.cityTaxable = cityTaxable;
  }


  public RestV2Product countryTaxable(@jakarta.annotation.Nullable Boolean countryTaxable) {
    this.countryTaxable = countryTaxable;
    return this;
  }

  /**
   * If country-based taxes should be applied to this product
   * @return countryTaxable
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If country-based taxes should be applied to this product")
  @JsonProperty(JSON_PROPERTY_COUNTRY_TAXABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getCountryTaxable() {
    return countryTaxable;
  }


  @JsonProperty(JSON_PROPERTY_COUNTRY_TAXABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCountryTaxable(@jakarta.annotation.Nullable Boolean countryTaxable) {
    this.countryTaxable = countryTaxable;
  }


  public RestV2Product description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Product long description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product long description")
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


  public RestV2Product id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * The product ID
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The product ID")
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


  public RestV2Product name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Product name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product name")
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


  public RestV2Product options(@jakarta.annotation.Nullable List<@Valid ProductOptions> options) {
    this.options = options;
    return this;
  }

  public RestV2Product addOptionsItem(ProductOptions optionsItem) {
    if (this.options == null) {
      this.options = new ArrayList<>();
    }
    this.options.add(optionsItem);
    return this;
  }

  /**
   * List of product options. Can be empty.
   * @return options
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "List of product options. Can be empty.")
  @JsonProperty(JSON_PROPERTY_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ProductOptions> getOptions() {
    return options;
  }


  @JsonProperty(JSON_PROPERTY_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptions(@jakarta.annotation.Nullable List<@Valid ProductOptions> options) {
    this.options = options;
  }


  public RestV2Product price(@jakarta.annotation.Nullable CurrencyValue price) {
    this.price = price;
    return this;
  }

  /**
   * Get price
   * @return price
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CurrencyValue getPrice() {
    return price;
  }


  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrice(@jakarta.annotation.Nullable CurrencyValue price) {
    this.price = price;
  }


  public RestV2Product shortDescription(@jakarta.annotation.Nullable String shortDescription) {
    this.shortDescription = shortDescription;
    return this;
  }

  /**
   * Product short description
   * @return shortDescription
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product short description")
  @JsonProperty(JSON_PROPERTY_SHORT_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getShortDescription() {
    return shortDescription;
  }


  @JsonProperty(JSON_PROPERTY_SHORT_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShortDescription(@jakarta.annotation.Nullable String shortDescription) {
    this.shortDescription = shortDescription;
  }


  public RestV2Product sku(@jakarta.annotation.Nullable String sku) {
    this.sku = sku;
    return this;
  }

  /**
   * Product SKU
   * @return sku
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product SKU")
  @JsonProperty(JSON_PROPERTY_SKU)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSku() {
    return sku;
  }


  @JsonProperty(JSON_PROPERTY_SKU)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSku(@jakarta.annotation.Nullable String sku) {
    this.sku = sku;
  }


  public RestV2Product stateTaxable(@jakarta.annotation.Nullable Boolean stateTaxable) {
    this.stateTaxable = stateTaxable;
    return this;
  }

  /**
   * If state-based taxes should be applied to this product
   * @return stateTaxable
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If state-based taxes should be applied to this product")
  @JsonProperty(JSON_PROPERTY_STATE_TAXABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getStateTaxable() {
    return stateTaxable;
  }


  @JsonProperty(JSON_PROPERTY_STATE_TAXABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStateTaxable(@jakarta.annotation.Nullable Boolean stateTaxable) {
    this.stateTaxable = stateTaxable;
  }


  public RestV2Product storefrontHidden(@jakarta.annotation.Nullable Boolean storefrontHidden) {
    this.storefrontHidden = storefrontHidden;
    return this;
  }

  /**
   * If the product should not be shown in the storefront
   * @return storefrontHidden
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If the product should not be shown in the storefront")
  @JsonProperty(JSON_PROPERTY_STOREFRONT_HIDDEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getStorefrontHidden() {
    return storefrontHidden;
  }


  @JsonProperty(JSON_PROPERTY_STOREFRONT_HIDDEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStorefrontHidden(@jakarta.annotation.Nullable Boolean storefrontHidden) {
    this.storefrontHidden = storefrontHidden;
  }


  public RestV2Product subscriptionOnly(@jakarta.annotation.Nullable Boolean subscriptionOnly) {
    this.subscriptionOnly = subscriptionOnly;
    return this;
  }

  /**
   * If the product is a subscription-only product
   * @return subscriptionOnly
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If the product is a subscription-only product")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_ONLY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getSubscriptionOnly() {
    return subscriptionOnly;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_ONLY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionOnly(@jakarta.annotation.Nullable Boolean subscriptionOnly) {
    this.subscriptionOnly = subscriptionOnly;
  }


  public RestV2Product subscriptionPlans(@jakarta.annotation.Nullable List<@Valid SubscriptionPlan> subscriptionPlans) {
    this.subscriptionPlans = subscriptionPlans;
    return this;
  }

  public RestV2Product addSubscriptionPlansItem(SubscriptionPlan subscriptionPlansItem) {
    if (this.subscriptionPlans == null) {
      this.subscriptionPlans = new ArrayList<>();
    }
    this.subscriptionPlans.add(subscriptionPlansItem);
    return this;
  }

  /**
   * List of subscription plans associated with the product. Can be empty.
   * @return subscriptionPlans
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "List of subscription plans associated with the product. Can be empty.")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_PLANS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid SubscriptionPlan> getSubscriptionPlans() {
    return subscriptionPlans;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_PLANS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionPlans(@jakarta.annotation.Nullable List<@Valid SubscriptionPlan> subscriptionPlans) {
    this.subscriptionPlans = subscriptionPlans;
  }


  public RestV2Product taxable(@jakarta.annotation.Nullable Boolean taxable) {
    this.taxable = taxable;
    return this;
  }

  /**
   * Whether or not the product should be taxed
   * @return taxable
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Whether or not the product should be taxed")
  @JsonProperty(JSON_PROPERTY_TAXABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getTaxable() {
    return taxable;
  }


  @JsonProperty(JSON_PROPERTY_TAXABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTaxable(@jakarta.annotation.Nullable Boolean taxable) {
    this.taxable = taxable;
  }


  public RestV2Product weight(@jakarta.annotation.Nullable Double weight) {
    this.weight = weight;
    return this;
  }

  /**
   * Product weight
   * @return weight
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Product weight")
  @JsonProperty(JSON_PROPERTY_WEIGHT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getWeight() {
    return weight;
  }


  @JsonProperty(JSON_PROPERTY_WEIGHT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWeight(@jakarta.annotation.Nullable Double weight) {
    this.weight = weight;
  }

  /**
   * Return true if this RestV2Product object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestV2Product restV2Product = (RestV2Product) o;
    return Objects.equals(this.active, restV2Product.active) &&
        Objects.equals(this.categories, restV2Product.categories) &&
        Objects.equals(this.cityTaxable, restV2Product.cityTaxable) &&
        Objects.equals(this.countryTaxable, restV2Product.countryTaxable) &&
        Objects.equals(this.description, restV2Product.description) &&
        Objects.equals(this.id, restV2Product.id) &&
        Objects.equals(this.name, restV2Product.name) &&
        Objects.equals(this.options, restV2Product.options) &&
        Objects.equals(this.price, restV2Product.price) &&
        Objects.equals(this.shortDescription, restV2Product.shortDescription) &&
        Objects.equals(this.sku, restV2Product.sku) &&
        Objects.equals(this.stateTaxable, restV2Product.stateTaxable) &&
        Objects.equals(this.storefrontHidden, restV2Product.storefrontHidden) &&
        Objects.equals(this.subscriptionOnly, restV2Product.subscriptionOnly) &&
        Objects.equals(this.subscriptionPlans, restV2Product.subscriptionPlans) &&
        Objects.equals(this.taxable, restV2Product.taxable) &&
        Objects.equals(this.weight, restV2Product.weight);
  }

  @Override
  public int hashCode() {
    return Objects.hash(active, categories, cityTaxable, countryTaxable, description, id, name, options, price, shortDescription, sku, stateTaxable, storefrontHidden, subscriptionOnly, subscriptionPlans, taxable, weight);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestV2Product {\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
    sb.append("    categories: ").append(toIndentedString(categories)).append("\n");
    sb.append("    cityTaxable: ").append(toIndentedString(cityTaxable)).append("\n");
    sb.append("    countryTaxable: ").append(toIndentedString(countryTaxable)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    options: ").append(toIndentedString(options)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    shortDescription: ").append(toIndentedString(shortDescription)).append("\n");
    sb.append("    sku: ").append(toIndentedString(sku)).append("\n");
    sb.append("    stateTaxable: ").append(toIndentedString(stateTaxable)).append("\n");
    sb.append("    storefrontHidden: ").append(toIndentedString(storefrontHidden)).append("\n");
    sb.append("    subscriptionOnly: ").append(toIndentedString(subscriptionOnly)).append("\n");
    sb.append("    subscriptionPlans: ").append(toIndentedString(subscriptionPlans)).append("\n");
    sb.append("    taxable: ").append(toIndentedString(taxable)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
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
    
        private RestV2Product instance;
    
        public Builder() {
          this(new RestV2Product());
        }
    
        protected Builder(RestV2Product instance) {
          this.instance = instance;
        }
    
        public RestV2Product.Builder active(Boolean active) {
              this.instance.active = active;
          return this;
        }
            public RestV2Product.Builder categories(List<String> categories) {
              this.instance.categories = categories;
          return this;
        }
            public RestV2Product.Builder cityTaxable(Boolean cityTaxable) {
              this.instance.cityTaxable = cityTaxable;
          return this;
        }
            public RestV2Product.Builder countryTaxable(Boolean countryTaxable) {
              this.instance.countryTaxable = countryTaxable;
          return this;
        }
            public RestV2Product.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public RestV2Product.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public RestV2Product.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public RestV2Product.Builder options(List<@Valid ProductOptions> options) {
              this.instance.options = options;
          return this;
        }
            public RestV2Product.Builder price(CurrencyValue price) {
              this.instance.price = price;
          return this;
        }
            public RestV2Product.Builder shortDescription(String shortDescription) {
              this.instance.shortDescription = shortDescription;
          return this;
        }
            public RestV2Product.Builder sku(String sku) {
              this.instance.sku = sku;
          return this;
        }
            public RestV2Product.Builder stateTaxable(Boolean stateTaxable) {
              this.instance.stateTaxable = stateTaxable;
          return this;
        }
            public RestV2Product.Builder storefrontHidden(Boolean storefrontHidden) {
              this.instance.storefrontHidden = storefrontHidden;
          return this;
        }
            public RestV2Product.Builder subscriptionOnly(Boolean subscriptionOnly) {
              this.instance.subscriptionOnly = subscriptionOnly;
          return this;
        }
            public RestV2Product.Builder subscriptionPlans(List<@Valid SubscriptionPlan> subscriptionPlans) {
              this.instance.subscriptionPlans = subscriptionPlans;
          return this;
        }
            public RestV2Product.Builder taxable(Boolean taxable) {
              this.instance.taxable = taxable;
          return this;
        }
            public RestV2Product.Builder weight(Double weight) {
              this.instance.weight = weight;
          return this;
        }
        
    
        /**
        * returns a built RestV2Product instance.
        *
        * The builder is not reusable.
        */
        public RestV2Product build() {
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
      public static RestV2Product.Builder builder() {
        return new RestV2Product.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestV2Product.Builder toBuilder() {
        return new RestV2Product.Builder()
          .active(getActive())
          .categories(getCategories())
          .cityTaxable(getCityTaxable())
          .countryTaxable(getCountryTaxable())
          .description(getDescription())
          .id(getId())
          .name(getName())
          .options(getOptions())
          .price(getPrice())
          .shortDescription(getShortDescription())
          .sku(getSku())
          .stateTaxable(getStateTaxable())
          .storefrontHidden(getStorefrontHidden())
          .subscriptionOnly(getSubscriptionOnly())
          .subscriptionPlans(getSubscriptionPlans())
          .taxable(getTaxable())
          .weight(getWeight());
      }
}

