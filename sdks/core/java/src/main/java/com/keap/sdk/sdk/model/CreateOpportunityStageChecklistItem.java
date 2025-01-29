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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateOpportunityStageChecklistItem
 */
@JsonPropertyOrder({
  CreateOpportunityStageChecklistItem.JSON_PROPERTY_DESCRIPTION,
  CreateOpportunityStageChecklistItem.JSON_PROPERTY_ORDER,
  CreateOpportunityStageChecklistItem.JSON_PROPERTY_REQUIRED
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateOpportunityStageChecklistItem implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nonnull  private String description;

  public static final String JSON_PROPERTY_ORDER = "order";
  @jakarta.annotation.Nonnull  private Integer order;

  public static final String JSON_PROPERTY_REQUIRED = "required";
  @jakarta.annotation.Nonnull  private Boolean required;

  public CreateOpportunityStageChecklistItem() { 
  }

  public CreateOpportunityStageChecklistItem description(@jakarta.annotation.Nonnull String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDescription(@jakarta.annotation.Nonnull String description) {
    this.description = description;
  }


  public CreateOpportunityStageChecklistItem order(@jakarta.annotation.Nonnull Integer order) {
    this.order = order;
    return this;
  }

  /**
   * Get order
   * @return order
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getOrder() {
    return order;
  }


  @JsonProperty(JSON_PROPERTY_ORDER)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOrder(@jakarta.annotation.Nonnull Integer order) {
    this.order = order;
  }


  public CreateOpportunityStageChecklistItem required(@jakarta.annotation.Nonnull Boolean required) {
    this.required = required;
    return this;
  }

  /**
   * Get required
   * @return required
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "false", requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REQUIRED)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Boolean getRequired() {
    return required;
  }


  @JsonProperty(JSON_PROPERTY_REQUIRED)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRequired(@jakarta.annotation.Nonnull Boolean required) {
    this.required = required;
  }

  /**
   * Return true if this CreateOpportunityStageChecklistItem object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateOpportunityStageChecklistItem createOpportunityStageChecklistItem = (CreateOpportunityStageChecklistItem) o;
    return Objects.equals(this.description, createOpportunityStageChecklistItem.description) &&
        Objects.equals(this.order, createOpportunityStageChecklistItem.order) &&
        Objects.equals(this.required, createOpportunityStageChecklistItem.required);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, order, required);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateOpportunityStageChecklistItem {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
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
    
        private CreateOpportunityStageChecklistItem instance;
    
        public Builder() {
          this(new CreateOpportunityStageChecklistItem());
        }
    
        protected Builder(CreateOpportunityStageChecklistItem instance) {
          this.instance = instance;
        }
    
        public CreateOpportunityStageChecklistItem.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CreateOpportunityStageChecklistItem.Builder order(Integer order) {
              this.instance.order = order;
          return this;
        }
            public CreateOpportunityStageChecklistItem.Builder required(Boolean required) {
              this.instance.required = required;
          return this;
        }
        
    
        /**
        * returns a built CreateOpportunityStageChecklistItem instance.
        *
        * The builder is not reusable.
        */
        public CreateOpportunityStageChecklistItem build() {
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
      public static CreateOpportunityStageChecklistItem.Builder builder() {
        return new CreateOpportunityStageChecklistItem.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateOpportunityStageChecklistItem.Builder toBuilder() {
        return new CreateOpportunityStageChecklistItem.Builder()
          .description(getDescription())
          .order(getOrder())
          .required(getRequired());
      }
}

