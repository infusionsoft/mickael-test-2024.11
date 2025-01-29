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
import com.keap.sdk.sdk.model.CheckListItemDetails;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * StageDetails
 */
@JsonPropertyOrder({
  StageDetails.JSON_PROPERTY_CHECKLIST_ITEMS,
  StageDetails.JSON_PROPERTY_PROBABILITY,
  StageDetails.JSON_PROPERTY_STAGE_ORDER,
  StageDetails.JSON_PROPERTY_TARGET_NUM_DAYS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class StageDetails implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CHECKLIST_ITEMS = "checklist_items";
  @jakarta.annotation.Nullable  private List<@Valid CheckListItemDetails> checklistItems = new ArrayList<>();

  public static final String JSON_PROPERTY_PROBABILITY = "probability";
  @jakarta.annotation.Nullable  private Integer probability;

  public static final String JSON_PROPERTY_STAGE_ORDER = "stage_order";
  @jakarta.annotation.Nullable  private Integer stageOrder;

  public static final String JSON_PROPERTY_TARGET_NUM_DAYS = "target_num_days";
  @jakarta.annotation.Nullable  private Integer targetNumDays;

  public StageDetails() { 
  }

  public StageDetails checklistItems(@jakarta.annotation.Nullable List<@Valid CheckListItemDetails> checklistItems) {
    this.checklistItems = checklistItems;
    return this;
  }

  public StageDetails addChecklistItemsItem(CheckListItemDetails checklistItemsItem) {
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
  public List<@Valid CheckListItemDetails> getChecklistItems() {
    return checklistItems;
  }


  @JsonProperty(JSON_PROPERTY_CHECKLIST_ITEMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setChecklistItems(@jakarta.annotation.Nullable List<@Valid CheckListItemDetails> checklistItems) {
    this.checklistItems = checklistItems;
  }


  public StageDetails probability(@jakarta.annotation.Nullable Integer probability) {
    this.probability = probability;
    return this;
  }

  /**
   * Get probability
   * @return probability
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PROBABILITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getProbability() {
    return probability;
  }


  @JsonProperty(JSON_PROPERTY_PROBABILITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProbability(@jakarta.annotation.Nullable Integer probability) {
    this.probability = probability;
  }


  public StageDetails stageOrder(@jakarta.annotation.Nullable Integer stageOrder) {
    this.stageOrder = stageOrder;
    return this;
  }

  /**
   * Get stageOrder
   * @return stageOrder
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STAGE_ORDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getStageOrder() {
    return stageOrder;
  }


  @JsonProperty(JSON_PROPERTY_STAGE_ORDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStageOrder(@jakarta.annotation.Nullable Integer stageOrder) {
    this.stageOrder = stageOrder;
  }


  public StageDetails targetNumDays(@jakarta.annotation.Nullable Integer targetNumDays) {
    this.targetNumDays = targetNumDays;
    return this;
  }

  /**
   * Get targetNumDays
   * @return targetNumDays
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TARGET_NUM_DAYS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getTargetNumDays() {
    return targetNumDays;
  }


  @JsonProperty(JSON_PROPERTY_TARGET_NUM_DAYS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTargetNumDays(@jakarta.annotation.Nullable Integer targetNumDays) {
    this.targetNumDays = targetNumDays;
  }

  /**
   * Return true if this StageDetails object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StageDetails stageDetails = (StageDetails) o;
    return Objects.equals(this.checklistItems, stageDetails.checklistItems) &&
        Objects.equals(this.probability, stageDetails.probability) &&
        Objects.equals(this.stageOrder, stageDetails.stageOrder) &&
        Objects.equals(this.targetNumDays, stageDetails.targetNumDays);
  }

  @Override
  public int hashCode() {
    return Objects.hash(checklistItems, probability, stageOrder, targetNumDays);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StageDetails {\n");
    sb.append("    checklistItems: ").append(toIndentedString(checklistItems)).append("\n");
    sb.append("    probability: ").append(toIndentedString(probability)).append("\n");
    sb.append("    stageOrder: ").append(toIndentedString(stageOrder)).append("\n");
    sb.append("    targetNumDays: ").append(toIndentedString(targetNumDays)).append("\n");
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
    
        private StageDetails instance;
    
        public Builder() {
          this(new StageDetails());
        }
    
        protected Builder(StageDetails instance) {
          this.instance = instance;
        }
    
        public StageDetails.Builder checklistItems(List<@Valid CheckListItemDetails> checklistItems) {
              this.instance.checklistItems = checklistItems;
          return this;
        }
            public StageDetails.Builder probability(Integer probability) {
              this.instance.probability = probability;
          return this;
        }
            public StageDetails.Builder stageOrder(Integer stageOrder) {
              this.instance.stageOrder = stageOrder;
          return this;
        }
            public StageDetails.Builder targetNumDays(Integer targetNumDays) {
              this.instance.targetNumDays = targetNumDays;
          return this;
        }
        
    
        /**
        * returns a built StageDetails instance.
        *
        * The builder is not reusable.
        */
        public StageDetails build() {
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
      public static StageDetails.Builder builder() {
        return new StageDetails.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public StageDetails.Builder toBuilder() {
        return new StageDetails.Builder()
          .checklistItems(getChecklistItems())
          .probability(getProbability())
          .stageOrder(getStageOrder())
          .targetNumDays(getTargetNumDays());
      }
}

