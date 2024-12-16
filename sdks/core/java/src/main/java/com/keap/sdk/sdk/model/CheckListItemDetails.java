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
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CheckListItemDetails
 */
@JsonPropertyOrder({
  CheckListItemDetails.JSON_PROPERTY_DESCRIPTION,
  CheckListItemDetails.JSON_PROPERTY_DONE_DATE,
  CheckListItemDetails.JSON_PROPERTY_ID,
  CheckListItemDetails.JSON_PROPERTY_INSTANCE_ID,
  CheckListItemDetails.JSON_PROPERTY_ITEM_ORDER,
  CheckListItemDetails.JSON_PROPERTY_REQUIRED
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CheckListItemDetails implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_DONE_DATE = "done_date";
  @jakarta.annotation.Nullable  private ZonedDateTime doneDate;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private Long id;

  public static final String JSON_PROPERTY_INSTANCE_ID = "instance_id";
  @jakarta.annotation.Nullable  private Long instanceId;

  public static final String JSON_PROPERTY_ITEM_ORDER = "item_order";
  @jakarta.annotation.Nullable  private Integer itemOrder;

  public static final String JSON_PROPERTY_REQUIRED = "required";
  @jakarta.annotation.Nullable  private Boolean required;

  public CheckListItemDetails() { 
  }

  public CheckListItemDetails description(@jakarta.annotation.Nullable String description) {
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


  public CheckListItemDetails doneDate(@jakarta.annotation.Nullable ZonedDateTime doneDate) {
    this.doneDate = doneDate;
    return this;
  }

  /**
   * Get doneDate
   * @return doneDate
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DONE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ZonedDateTime getDoneDate() {
    return doneDate;
  }


  @JsonProperty(JSON_PROPERTY_DONE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDoneDate(@jakarta.annotation.Nullable ZonedDateTime doneDate) {
    this.doneDate = doneDate;
  }


  public CheckListItemDetails id(@jakarta.annotation.Nullable Long id) {
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
  public Long getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable Long id) {
    this.id = id;
  }


  public CheckListItemDetails instanceId(@jakarta.annotation.Nullable Long instanceId) {
    this.instanceId = instanceId;
    return this;
  }

  /**
   * Get instanceId
   * @return instanceId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INSTANCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getInstanceId() {
    return instanceId;
  }


  @JsonProperty(JSON_PROPERTY_INSTANCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInstanceId(@jakarta.annotation.Nullable Long instanceId) {
    this.instanceId = instanceId;
  }


  public CheckListItemDetails itemOrder(@jakarta.annotation.Nullable Integer itemOrder) {
    this.itemOrder = itemOrder;
    return this;
  }

  /**
   * Get itemOrder
   * @return itemOrder
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ITEM_ORDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getItemOrder() {
    return itemOrder;
  }


  @JsonProperty(JSON_PROPERTY_ITEM_ORDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setItemOrder(@jakarta.annotation.Nullable Integer itemOrder) {
    this.itemOrder = itemOrder;
  }


  public CheckListItemDetails required(@jakarta.annotation.Nullable Boolean required) {
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
   * Return true if this CheckListItemDetails object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CheckListItemDetails checkListItemDetails = (CheckListItemDetails) o;
    return Objects.equals(this.description, checkListItemDetails.description) &&
        Objects.equals(this.doneDate, checkListItemDetails.doneDate) &&
        Objects.equals(this.id, checkListItemDetails.id) &&
        Objects.equals(this.instanceId, checkListItemDetails.instanceId) &&
        Objects.equals(this.itemOrder, checkListItemDetails.itemOrder) &&
        Objects.equals(this.required, checkListItemDetails.required);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, doneDate, id, instanceId, itemOrder, required);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CheckListItemDetails {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    doneDate: ").append(toIndentedString(doneDate)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    instanceId: ").append(toIndentedString(instanceId)).append("\n");
    sb.append("    itemOrder: ").append(toIndentedString(itemOrder)).append("\n");
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
    
        private CheckListItemDetails instance;
    
        public Builder() {
          this(new CheckListItemDetails());
        }
    
        protected Builder(CheckListItemDetails instance) {
          this.instance = instance;
        }
    
        public CheckListItemDetails.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CheckListItemDetails.Builder doneDate(ZonedDateTime doneDate) {
              this.instance.doneDate = doneDate;
          return this;
        }
            public CheckListItemDetails.Builder id(Long id) {
              this.instance.id = id;
          return this;
        }
            public CheckListItemDetails.Builder instanceId(Long instanceId) {
              this.instance.instanceId = instanceId;
          return this;
        }
            public CheckListItemDetails.Builder itemOrder(Integer itemOrder) {
              this.instance.itemOrder = itemOrder;
          return this;
        }
            public CheckListItemDetails.Builder required(Boolean required) {
              this.instance.required = required;
          return this;
        }
        
    
        /**
        * returns a built CheckListItemDetails instance.
        *
        * The builder is not reusable.
        */
        public CheckListItemDetails build() {
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
      public static CheckListItemDetails.Builder builder() {
        return new CheckListItemDetails.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CheckListItemDetails.Builder toBuilder() {
        return new CheckListItemDetails.Builder()
          .description(getDescription())
          .doneDate(getDoneDate())
          .id(getId())
          .instanceId(getInstanceId())
          .itemOrder(getItemOrder())
          .required(getRequired());
      }
}

