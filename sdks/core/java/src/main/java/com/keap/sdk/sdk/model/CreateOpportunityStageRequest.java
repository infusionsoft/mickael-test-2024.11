/*
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
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
import com.keap.sdk.sdk.model.CreateOpportunityStageCheckListItem;
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
  CreateOpportunityStageRequest.JSON_PROPERTY_CHECK_LIST_ITEMS,
  CreateOpportunityStageRequest.JSON_PROPERTY_NAME,
  CreateOpportunityStageRequest.JSON_PROPERTY_ORDER,
  CreateOpportunityStageRequest.JSON_PROPERTY_PROBABILITY,
  CreateOpportunityStageRequest.JSON_PROPERTY_TARGET_NUMBER_DAYS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.9.0")
public class CreateOpportunityStageRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CHECK_LIST_ITEMS = "check_list_items";
  private List<@Valid CreateOpportunityStageCheckListItem> checkListItems = new ArrayList<>();

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_ORDER = "order";
  private Integer order;

  public static final String JSON_PROPERTY_PROBABILITY = "probability";
  private Integer probability;

  public static final String JSON_PROPERTY_TARGET_NUMBER_DAYS = "target_number_days";
  private Integer targetNumberDays;

  public CreateOpportunityStageRequest() { 
  }

  public CreateOpportunityStageRequest checkListItems(List<@Valid CreateOpportunityStageCheckListItem> checkListItems) {
    this.checkListItems = checkListItems;
    return this;
  }

  public CreateOpportunityStageRequest addCheckListItemsItem(CreateOpportunityStageCheckListItem checkListItemsItem) {
    if (this.checkListItems == null) {
      this.checkListItems = new ArrayList<>();
    }
    this.checkListItems.add(checkListItemsItem);
    return this;
  }

  /**
   * Get checkListItems
   * @return checkListItems
   */
  @jakarta.annotation.Nullable
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CHECK_LIST_ITEMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid CreateOpportunityStageCheckListItem> getCheckListItems() {
    return checkListItems;
  }


  @JsonProperty(JSON_PROPERTY_CHECK_LIST_ITEMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCheckListItems(List<@Valid CreateOpportunityStageCheckListItem> checkListItems) {
    this.checkListItems = checkListItems;
  }


  public CreateOpportunityStageRequest name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nonnull
  @NotNull
  @Schema(example = "Won", requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(String name) {
    this.name = name;
  }


  public CreateOpportunityStageRequest order(Integer order) {
    this.order = order;
    return this;
  }

  /**
   * Get order
   * @return order
   */
  @jakarta.annotation.Nonnull
  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORDER)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getOrder() {
    return order;
  }


  @JsonProperty(JSON_PROPERTY_ORDER)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOrder(Integer order) {
    this.order = order;
  }


  public CreateOpportunityStageRequest probability(Integer probability) {
    this.probability = probability;
    return this;
  }

  /**
   * Get probability
   * @return probability
   */
  @jakarta.annotation.Nonnull
  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PROBABILITY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getProbability() {
    return probability;
  }


  @JsonProperty(JSON_PROPERTY_PROBABILITY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setProbability(Integer probability) {
    this.probability = probability;
  }


  public CreateOpportunityStageRequest targetNumberDays(Integer targetNumberDays) {
    this.targetNumberDays = targetNumberDays;
    return this;
  }

  /**
   * Get targetNumberDays
   * @return targetNumberDays
   */
  @jakarta.annotation.Nonnull
  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TARGET_NUMBER_DAYS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getTargetNumberDays() {
    return targetNumberDays;
  }


  @JsonProperty(JSON_PROPERTY_TARGET_NUMBER_DAYS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTargetNumberDays(Integer targetNumberDays) {
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
    return Objects.equals(this.checkListItems, createOpportunityStageRequest.checkListItems) &&
        Objects.equals(this.name, createOpportunityStageRequest.name) &&
        Objects.equals(this.order, createOpportunityStageRequest.order) &&
        Objects.equals(this.probability, createOpportunityStageRequest.probability) &&
        Objects.equals(this.targetNumberDays, createOpportunityStageRequest.targetNumberDays);
  }

  @Override
  public int hashCode() {
    return Objects.hash(checkListItems, name, order, probability, targetNumberDays);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateOpportunityStageRequest {\n");
    sb.append("    checkListItems: ").append(toIndentedString(checkListItems)).append("\n");
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
    
        public CreateOpportunityStageRequest.Builder checkListItems(List<@Valid CreateOpportunityStageCheckListItem> checkListItems) {
              this.instance.checkListItems = checkListItems;
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
          .checkListItems(getCheckListItems())
          .name(getName())
          .order(getOrder())
          .probability(getProbability())
          .targetNumberDays(getTargetNumberDays());
      }
}

