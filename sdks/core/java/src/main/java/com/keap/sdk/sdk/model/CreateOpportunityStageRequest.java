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
import com.keap.sdk.sdk.model.CreateOpportunityStageChecklistItem;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateOpportunityStageRequest
 */
@JsonPropertyOrder({
  CreateOpportunityStageRequest.JSON_PROPERTY_CHECKLIST_ITEMS,
  CreateOpportunityStageRequest.JSON_PROPERTY_NAME,
  CreateOpportunityStageRequest.JSON_PROPERTY_ORDER,
  CreateOpportunityStageRequest.JSON_PROPERTY_PROBABILITY,
  CreateOpportunityStageRequest.JSON_PROPERTY_TARGET_NUMBER_DAYS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateOpportunityStageRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CHECKLIST_ITEMS = "checklist_items";
  @jakarta.annotation.Nullable  private List<@Valid CreateOpportunityStageChecklistItem> checklistItems = new ArrayList<>();

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nonnull  private String name;

  public static final String JSON_PROPERTY_ORDER = "order";
  @jakarta.annotation.Nonnull  private Integer order;

  public static final String JSON_PROPERTY_PROBABILITY = "probability";
  @jakarta.annotation.Nonnull  private Integer probability;

  public static final String JSON_PROPERTY_TARGET_NUMBER_DAYS = "target_number_days";
  @jakarta.annotation.Nonnull  private Integer targetNumberDays;

  public CreateOpportunityStageRequest() { 
  }

  public CreateOpportunityStageRequest checklistItems(@jakarta.annotation.Nullable List<@Valid CreateOpportunityStageChecklistItem> checklistItems) {
    this.checklistItems = checklistItems;
    return this;
  }

  public CreateOpportunityStageRequest addChecklistItemsItem(CreateOpportunityStageChecklistItem checklistItemsItem) {
    if (this.checklistItems == null) {
      this.checklistItems = new ArrayList<>();
    }
    this.checklistItems.add(checklistItemsItem);
    return this;
  }

  /**
   * Get checklistItems
   * @return checklistItems
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CHECKLIST_ITEMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid CreateOpportunityStageChecklistItem> getChecklistItems() {
    return checklistItems;
  }


  @JsonProperty(JSON_PROPERTY_CHECKLIST_ITEMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setChecklistItems(@jakarta.annotation.Nullable List<@Valid CreateOpportunityStageChecklistItem> checklistItems) {
    this.checklistItems = checklistItems;
  }


  public CreateOpportunityStageRequest name(@jakarta.annotation.Nonnull String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(example = "Won", requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(@jakarta.annotation.Nonnull String name) {
    this.name = name;
  }


  public CreateOpportunityStageRequest order(@jakarta.annotation.Nonnull Integer order) {
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


  public CreateOpportunityStageRequest probability(@jakarta.annotation.Nonnull Integer probability) {
    this.probability = probability;
    return this;
  }

  /**
   * Get probability
   * @return probability
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PROBABILITY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getProbability() {
    return probability;
  }


  @JsonProperty(JSON_PROPERTY_PROBABILITY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setProbability(@jakarta.annotation.Nonnull Integer probability) {
    this.probability = probability;
  }


  public CreateOpportunityStageRequest targetNumberDays(@jakarta.annotation.Nonnull Integer targetNumberDays) {
    this.targetNumberDays = targetNumberDays;
    return this;
  }

  /**
   * Get targetNumberDays
   * @return targetNumberDays
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TARGET_NUMBER_DAYS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getTargetNumberDays() {
    return targetNumberDays;
  }


  @JsonProperty(JSON_PROPERTY_TARGET_NUMBER_DAYS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTargetNumberDays(@jakarta.annotation.Nonnull Integer targetNumberDays) {
    this.targetNumberDays = targetNumberDays;
  }

  /**
   * Return true if this CreateOpportunityStageRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateOpportunityStageRequest createOpportunityStageRequest = (CreateOpportunityStageRequest) o;
    return Objects.equals(this.checklistItems, createOpportunityStageRequest.checklistItems) &&
        Objects.equals(this.name, createOpportunityStageRequest.name) &&
        Objects.equals(this.order, createOpportunityStageRequest.order) &&
        Objects.equals(this.probability, createOpportunityStageRequest.probability) &&
        Objects.equals(this.targetNumberDays, createOpportunityStageRequest.targetNumberDays);
  }

  @Override
  public int hashCode() {
    return Objects.hash(checklistItems, name, order, probability, targetNumberDays);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateOpportunityStageRequest {\n");
    sb.append("    checklistItems: ").append(toIndentedString(checklistItems)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    order: ").append(toIndentedString(order)).append("\n");
    sb.append("    probability: ").append(toIndentedString(probability)).append("\n");
    sb.append("    targetNumberDays: ").append(toIndentedString(targetNumberDays)).append("\n");
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
    
        private CreateOpportunityStageRequest instance;
    
        public Builder() {
          this(new CreateOpportunityStageRequest());
        }
    
        protected Builder(CreateOpportunityStageRequest instance) {
          this.instance = instance;
        }
    
        public CreateOpportunityStageRequest.Builder checklistItems(List<@Valid CreateOpportunityStageChecklistItem> checklistItems) {
              this.instance.checklistItems = checklistItems;
          return this;
        }
            public CreateOpportunityStageRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public CreateOpportunityStageRequest.Builder order(Integer order) {
              this.instance.order = order;
          return this;
        }
            public CreateOpportunityStageRequest.Builder probability(Integer probability) {
              this.instance.probability = probability;
          return this;
        }
            public CreateOpportunityStageRequest.Builder targetNumberDays(Integer targetNumberDays) {
              this.instance.targetNumberDays = targetNumberDays;
          return this;
        }
        
    
        /**
        * returns a built CreateOpportunityStageRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateOpportunityStageRequest build() {
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
      public static CreateOpportunityStageRequest.Builder builder() {
        return new CreateOpportunityStageRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateOpportunityStageRequest.Builder toBuilder() {
        return new CreateOpportunityStageRequest.Builder()
          .checklistItems(getChecklistItems())
          .name(getName())
          .order(getOrder())
          .probability(getProbability())
          .targetNumberDays(getTargetNumberDays());
      }
}

