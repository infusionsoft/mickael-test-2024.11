/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
import com.keap.sdk.sdk.model.ChecklistItem;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * RestOpportunityStage
 */
@JsonPropertyOrder({
  RestOpportunityStage.JSON_PROPERTY_CHECKLIST_ITEMS,
  RestOpportunityStage.JSON_PROPERTY_CREATED_TIME,
  RestOpportunityStage.JSON_PROPERTY_ID,
  RestOpportunityStage.JSON_PROPERTY_NAME,
  RestOpportunityStage.JSON_PROPERTY_ORDER,
  RestOpportunityStage.JSON_PROPERTY_PROBABILITY,
  RestOpportunityStage.JSON_PROPERTY_TARGET_NUMBER_DAYS,
  RestOpportunityStage.JSON_PROPERTY_UPDATED_TIME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RestOpportunityStage implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CHECKLIST_ITEMS = "checklist_items";
  @jakarta.annotation.Nullable  private List<@Valid ChecklistItem> checklistItems = new ArrayList<>();

  public static final String JSON_PROPERTY_CREATED_TIME = "created_time";
  @jakarta.annotation.Nullable  private String createdTime;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_ORDER = "order";
  @jakarta.annotation.Nullable  private Integer order;

  public static final String JSON_PROPERTY_PROBABILITY = "probability";
  @jakarta.annotation.Nullable  private Integer probability;

  public static final String JSON_PROPERTY_TARGET_NUMBER_DAYS = "target_number_days";
  @jakarta.annotation.Nullable  private Integer targetNumberDays;

  public static final String JSON_PROPERTY_UPDATED_TIME = "updated_time";
  @jakarta.annotation.Nullable  private String updatedTime;

  public RestOpportunityStage() { 
  }

  public RestOpportunityStage checklistItems(@jakarta.annotation.Nullable List<@Valid ChecklistItem> checklistItems) {
    this.checklistItems = checklistItems;
    return this;
  }

  public RestOpportunityStage addChecklistItemsItem(ChecklistItem checklistItemsItem) {
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
  public List<@Valid ChecklistItem> getChecklistItems() {
    return checklistItems;
  }


  @JsonProperty(JSON_PROPERTY_CHECKLIST_ITEMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setChecklistItems(@jakarta.annotation.Nullable List<@Valid ChecklistItem> checklistItems) {
    this.checklistItems = checklistItems;
  }


  public RestOpportunityStage createdTime(@jakarta.annotation.Nullable String createdTime) {
    this.createdTime = createdTime;
    return this;
  }

  /**
   * Get createdTime
   * @return createdTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CREATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreatedTime() {
    return createdTime;
  }


  @JsonProperty(JSON_PROPERTY_CREATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreatedTime(@jakarta.annotation.Nullable String createdTime) {
    this.createdTime = createdTime;
  }


  public RestOpportunityStage id(@jakarta.annotation.Nullable String id) {
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


  public RestOpportunityStage name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public RestOpportunityStage order(@jakarta.annotation.Nullable Integer order) {
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


  public RestOpportunityStage probability(@jakarta.annotation.Nullable Integer probability) {
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


  public RestOpportunityStage targetNumberDays(@jakarta.annotation.Nullable Integer targetNumberDays) {
    this.targetNumberDays = targetNumberDays;
    return this;
  }

  /**
   * Get targetNumberDays
   * @return targetNumberDays
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TARGET_NUMBER_DAYS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getTargetNumberDays() {
    return targetNumberDays;
  }


  @JsonProperty(JSON_PROPERTY_TARGET_NUMBER_DAYS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTargetNumberDays(@jakarta.annotation.Nullable Integer targetNumberDays) {
    this.targetNumberDays = targetNumberDays;
  }


  public RestOpportunityStage updatedTime(@jakarta.annotation.Nullable String updatedTime) {
    this.updatedTime = updatedTime;
    return this;
  }

  /**
   * Get updatedTime
   * @return updatedTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_UPDATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUpdatedTime() {
    return updatedTime;
  }


  @JsonProperty(JSON_PROPERTY_UPDATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUpdatedTime(@jakarta.annotation.Nullable String updatedTime) {
    this.updatedTime = updatedTime;
  }

  /**
   * Return true if this RestOpportunityStage object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestOpportunityStage restOpportunityStage = (RestOpportunityStage) o;
    return Objects.equals(this.checklistItems, restOpportunityStage.checklistItems) &&
        Objects.equals(this.createdTime, restOpportunityStage.createdTime) &&
        Objects.equals(this.id, restOpportunityStage.id) &&
        Objects.equals(this.name, restOpportunityStage.name) &&
        Objects.equals(this.order, restOpportunityStage.order) &&
        Objects.equals(this.probability, restOpportunityStage.probability) &&
        Objects.equals(this.targetNumberDays, restOpportunityStage.targetNumberDays) &&
        Objects.equals(this.updatedTime, restOpportunityStage.updatedTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(checklistItems, createdTime, id, name, order, probability, targetNumberDays, updatedTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestOpportunityStage {\n");
    sb.append("    checklistItems: ").append(toIndentedString(checklistItems)).append("\n");
    sb.append("    createdTime: ").append(toIndentedString(createdTime)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    order: ").append(toIndentedString(order)).append("\n");
    sb.append("    probability: ").append(toIndentedString(probability)).append("\n");
    sb.append("    targetNumberDays: ").append(toIndentedString(targetNumberDays)).append("\n");
    sb.append("    updatedTime: ").append(toIndentedString(updatedTime)).append("\n");
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
    
        private RestOpportunityStage instance;
    
        public Builder() {
          this(new RestOpportunityStage());
        }
    
        protected Builder(RestOpportunityStage instance) {
          this.instance = instance;
        }
    
        public RestOpportunityStage.Builder checklistItems(List<@Valid ChecklistItem> checklistItems) {
              this.instance.checklistItems = checklistItems;
          return this;
        }
            public RestOpportunityStage.Builder createdTime(String createdTime) {
              this.instance.createdTime = createdTime;
          return this;
        }
            public RestOpportunityStage.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public RestOpportunityStage.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public RestOpportunityStage.Builder order(Integer order) {
              this.instance.order = order;
          return this;
        }
            public RestOpportunityStage.Builder probability(Integer probability) {
              this.instance.probability = probability;
          return this;
        }
            public RestOpportunityStage.Builder targetNumberDays(Integer targetNumberDays) {
              this.instance.targetNumberDays = targetNumberDays;
          return this;
        }
            public RestOpportunityStage.Builder updatedTime(String updatedTime) {
              this.instance.updatedTime = updatedTime;
          return this;
        }
        
    
        /**
        * returns a built RestOpportunityStage instance.
        *
        * The builder is not reusable.
        */
        public RestOpportunityStage build() {
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
      public static RestOpportunityStage.Builder builder() {
        return new RestOpportunityStage.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestOpportunityStage.Builder toBuilder() {
        return new RestOpportunityStage.Builder()
          .checklistItems(getChecklistItems())
          .createdTime(getCreatedTime())
          .id(getId())
          .name(getName())
          .order(getOrder())
          .probability(getProbability())
          .targetNumberDays(getTargetNumberDays())
          .updatedTime(getUpdatedTime());
      }
}

