/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateRestOrderItemRequest
 */
@JsonPropertyOrder({
  CreateRestOrderItemRequest.JSON_PROPERTY_DESCRIPTION,
  CreateRestOrderItemRequest.JSON_PROPERTY_PRICE,
  CreateRestOrderItemRequest.JSON_PROPERTY_PRODUCT_ID,
  CreateRestOrderItemRequest.JSON_PROPERTY_PRODUCT_TYPE,
  CreateRestOrderItemRequest.JSON_PROPERTY_QUANTITY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateRestOrderItemRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_PRICE = "price";
  @jakarta.annotation.Nullable  private Double price;

  public static final String JSON_PROPERTY_PRODUCT_ID = "product_id";
  @jakarta.annotation.Nonnull  private String productId;

  /**
   * Gets or Sets productType
   */
  public enum ProductTypeEnum {
    PRODUCT(String.valueOf("PRODUCT")),
    
    DIGITAL(String.valueOf("DIGITAL")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    ProductTypeEnum(String value) {
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
    public static ProductTypeEnum fromValue(String value) {
      for (ProductTypeEnum b : ProductTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_PRODUCT_TYPE = "product_type";
  @jakarta.annotation.Nullable  private ProductTypeEnum productType;

  public static final String JSON_PROPERTY_QUANTITY = "quantity";
  @jakarta.annotation.Nonnull  private Integer quantity;

  public CreateRestOrderItemRequest() { 
  }

  public CreateRestOrderItemRequest description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public CreateRestOrderItemRequest price(@jakarta.annotation.Nullable Double price) {
    this.price = price;
    return this;
  }

  /**
   * Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0.
   * @return price
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0.")
  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPrice() {
    return price;
  }


  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrice(@jakarta.annotation.Nullable Double price) {
    this.price = price;
  }


  public CreateRestOrderItemRequest productId(@jakarta.annotation.Nonnull String productId) {
    this.productId = productId;
    return this;
  }

  /**
   * The id of the product to be added to the order.
   * @return productId
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The id of the product to be added to the order.")
  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getProductId() {
    return productId;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setProductId(@jakarta.annotation.Nonnull String productId) {
    this.productId = productId;
  }


  public CreateRestOrderItemRequest productType(@jakarta.annotation.Nullable ProductTypeEnum productType) {
    this.productType = productType;
    return this;
  }

  /**
   * Get productType
   * @return productType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ProductTypeEnum getProductType() {
    return productType;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductType(@jakarta.annotation.Nullable ProductTypeEnum productType) {
    this.productType = productType;
  }


  public CreateRestOrderItemRequest quantity(@jakarta.annotation.Nonnull Integer quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Quantity must be greater than or equal to 1
   * @return quantity
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "Quantity must be greater than or equal to 1")
  @JsonProperty(JSON_PROPERTY_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getQuantity() {
    return quantity;
  }


  @JsonProperty(JSON_PROPERTY_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setQuantity(@jakarta.annotation.Nonnull Integer quantity) {
    this.quantity = quantity;
  }

  /**
   * Return true if this CreateRestOrderItemRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateRestOrderItemRequest createRestOrderItemRequest = (CreateRestOrderItemRequest) o;
    return Objects.equals(this.description, createRestOrderItemRequest.description) &&
        Objects.equals(this.price, createRestOrderItemRequest.price) &&
        Objects.equals(this.productId, createRestOrderItemRequest.productId) &&
        Objects.equals(this.productType, createRestOrderItemRequest.productType) &&
        Objects.equals(this.quantity, createRestOrderItemRequest.quantity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, price, productId, productType, quantity);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateRestOrderItemRequest {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    productId: ").append(toIndentedString(productId)).append("\n");
    sb.append("    productType: ").append(toIndentedString(productType)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
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
    
        private CreateRestOrderItemRequest instance;
    
        public Builder() {
          this(new CreateRestOrderItemRequest());
        }
    
        protected Builder(CreateRestOrderItemRequest instance) {
          this.instance = instance;
        }
    
        public CreateRestOrderItemRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CreateRestOrderItemRequest.Builder price(Double price) {
              this.instance.price = price;
          return this;
        }
            public CreateRestOrderItemRequest.Builder productId(String productId) {
              this.instance.productId = productId;
          return this;
        }
            public CreateRestOrderItemRequest.Builder productType(ProductTypeEnum productType) {
              this.instance.productType = productType;
          return this;
        }
            public CreateRestOrderItemRequest.Builder quantity(Integer quantity) {
              this.instance.quantity = quantity;
          return this;
        }
        
    
        /**
        * returns a built CreateRestOrderItemRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateRestOrderItemRequest build() {
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
      public static CreateRestOrderItemRequest.Builder builder() {
        return new CreateRestOrderItemRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateRestOrderItemRequest.Builder toBuilder() {
        return new CreateRestOrderItemRequest.Builder()
          .description(getDescription())
          .price(getPrice())
          .productId(getProductId())
          .productType(getProductType())
          .quantity(getQuantity());
      }
}

