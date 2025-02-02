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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ChecklistItem
 */
@JsonPropertyOrder({
  ChecklistItem.JSON_PROPERTY_DESCRIPTION,
  ChecklistItem.JSON_PROPERTY_ID,
  ChecklistItem.JSON_PROPERTY_ORDER,
  ChecklistItem.JSON_PROPERTY_REQUIRED
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ChecklistItem implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_ORDER = "order";
  @jakarta.annotation.Nullable  private Integer order;

  public static final String JSON_PROPERTY_REQUIRED = "required";
  @jakarta.annotation.Nullable  private Boolean required;

  public ChecklistItem() { 
  }

  public ChecklistItem description(@jakarta.annotation.Nullable String description) {
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


  public ChecklistItem id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public ChecklistItem order(@jakarta.annotation.Nullable Integer order) {
    this.order = order;
    return this;
  }

  /**
   * Get order
   * @return order
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getOrder() {
    return order;
  }


  @JsonProperty(JSON_PROPERTY_ORDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOrder(@jakarta.annotation.Nullable Integer order) {
    this.order = order;
  }


  public ChecklistItem required(@jakarta.annotation.Nullable Boolean required) {
    this.required = required;
    return this;
  }

  /**
   * Get required
   * @return required
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REQUIRED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getRequired() {
    return required;
  }


  @JsonProperty(JSON_PROPERTY_REQUIRED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRequired(@jakarta.annotation.Nullable Boolean required) {
    this.required = required;
  }

  /**
   * Return true if this ChecklistItem object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ChecklistItem checklistItem = (ChecklistItem) o;
    return Objects.equals(this.description, checklistItem.description) &&
        Objects.equals(this.id, checklistItem.id) &&
        Objects.equals(this.order, checklistItem.order) &&
        Objects.equals(this.required, checklistItem.required);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, id, order, required);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ChecklistItem {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    order: ").append(toIndentedString(order)).append("\n");
    sb.append("    required: ").append(toIndentedString(required)).append("\n");
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
    
        private ChecklistItem instance;
    
        public Builder() {
          this(new ChecklistItem());
        }
    
        protected Builder(ChecklistItem instance) {
          this.instance = instance;
        }
    
        public ChecklistItem.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public ChecklistItem.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public ChecklistItem.Builder order(Integer order) {
              this.instance.order = order;
          return this;
        }
            public ChecklistItem.Builder required(Boolean required) {
              this.instance.required = required;
          return this;
        }
        
    
        /**
        * returns a built ChecklistItem instance.
        *
        * The builder is not reusable.
        */
        public ChecklistItem build() {
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
      public static ChecklistItem.Builder builder() {
        return new ChecklistItem.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ChecklistItem.Builder toBuilder() {
        return new ChecklistItem.Builder()
          .description(getDescription())
          .id(getId())
          .order(getOrder())
          .required(getRequired());
      }
}

