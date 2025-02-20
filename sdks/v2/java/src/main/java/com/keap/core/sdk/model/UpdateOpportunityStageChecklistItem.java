/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * UpdateOpportunityStageChecklistItem
 */
@JsonPropertyOrder({
  UpdateOpportunityStageChecklistItem.JSON_PROPERTY_DESCRIPTION,
  UpdateOpportunityStageChecklistItem.JSON_PROPERTY_ID,
  UpdateOpportunityStageChecklistItem.JSON_PROPERTY_ORDER,
  UpdateOpportunityStageChecklistItem.JSON_PROPERTY_REQUIRED
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateOpportunityStageChecklistItem implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_ORDER = "order";
  @jakarta.annotation.Nullable  private Integer order;

  public static final String JSON_PROPERTY_REQUIRED = "required";
  @jakarta.annotation.Nullable  private Boolean required;

  public UpdateOpportunityStageChecklistItem() { 
  }

  public UpdateOpportunityStageChecklistItem description(@jakarta.annotation.Nullable String description) {
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


  public UpdateOpportunityStageChecklistItem id(@jakarta.annotation.Nullable String id) {
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


  public UpdateOpportunityStageChecklistItem order(@jakarta.annotation.Nullable Integer order) {
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


  public UpdateOpportunityStageChecklistItem required(@jakarta.annotation.Nullable Boolean required) {
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
   * Return true if this UpdateOpportunityStageChecklistItem object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateOpportunityStageChecklistItem updateOpportunityStageChecklistItem = (UpdateOpportunityStageChecklistItem) o;
    return Objects.equals(this.description, updateOpportunityStageChecklistItem.description) &&
        Objects.equals(this.id, updateOpportunityStageChecklistItem.id) &&
        Objects.equals(this.order, updateOpportunityStageChecklistItem.order) &&
        Objects.equals(this.required, updateOpportunityStageChecklistItem.required);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, id, order, required);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateOpportunityStageChecklistItem {\n");
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
    
        private UpdateOpportunityStageChecklistItem instance;
    
        public Builder() {
          this(new UpdateOpportunityStageChecklistItem());
        }
    
        protected Builder(UpdateOpportunityStageChecklistItem instance) {
          this.instance = instance;
        }
    
        public UpdateOpportunityStageChecklistItem.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public UpdateOpportunityStageChecklistItem.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public UpdateOpportunityStageChecklistItem.Builder order(Integer order) {
              this.instance.order = order;
          return this;
        }
            public UpdateOpportunityStageChecklistItem.Builder required(Boolean required) {
              this.instance.required = required;
          return this;
        }
        
    
        /**
        * returns a built UpdateOpportunityStageChecklistItem instance.
        *
        * The builder is not reusable.
        */
        public UpdateOpportunityStageChecklistItem build() {
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
      public static UpdateOpportunityStageChecklistItem.Builder builder() {
        return new UpdateOpportunityStageChecklistItem.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateOpportunityStageChecklistItem.Builder toBuilder() {
        return new UpdateOpportunityStageChecklistItem.Builder()
          .description(getDescription())
          .id(getId())
          .order(getOrder())
          .required(getRequired());
      }
}

