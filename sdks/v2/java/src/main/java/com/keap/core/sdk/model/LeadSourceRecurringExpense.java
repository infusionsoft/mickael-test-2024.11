/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
import com.keap.core.sdk.model.CurrencyValue;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * LeadSourceRecurringExpense
 */
@JsonPropertyOrder({
  LeadSourceRecurringExpense.JSON_PROPERTY_AMOUNT,
  LeadSourceRecurringExpense.JSON_PROPERTY_CREATE_TIME,
  LeadSourceRecurringExpense.JSON_PROPERTY_END_TIME,
  LeadSourceRecurringExpense.JSON_PROPERTY_ID,
  LeadSourceRecurringExpense.JSON_PROPERTY_NEXT_EXPENSE_TIME,
  LeadSourceRecurringExpense.JSON_PROPERTY_NOTES,
  LeadSourceRecurringExpense.JSON_PROPERTY_START_TIME,
  LeadSourceRecurringExpense.JSON_PROPERTY_TITLE,
  LeadSourceRecurringExpense.JSON_PROPERTY_UPDATE_TIME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class LeadSourceRecurringExpense implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AMOUNT = "amount";
  @jakarta.annotation.Nullable  private CurrencyValue amount;

  public static final String JSON_PROPERTY_CREATE_TIME = "create_time";
  @jakarta.annotation.Nullable  private String createTime;

  public static final String JSON_PROPERTY_END_TIME = "end_time";
  @jakarta.annotation.Nullable  private String endTime;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NEXT_EXPENSE_TIME = "next_expense_time";
  @jakarta.annotation.Nullable  private String nextExpenseTime;

  public static final String JSON_PROPERTY_NOTES = "notes";
  @jakarta.annotation.Nullable  private String notes;

  public static final String JSON_PROPERTY_START_TIME = "start_time";
  @jakarta.annotation.Nullable  private String startTime;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  public static final String JSON_PROPERTY_UPDATE_TIME = "update_time";
  @jakarta.annotation.Nullable  private String updateTime;

  public LeadSourceRecurringExpense() { 
  }

  public LeadSourceRecurringExpense amount(@jakarta.annotation.Nullable CurrencyValue amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Get amount
   * @return amount
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CurrencyValue getAmount() {
    return amount;
  }


  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAmount(@jakarta.annotation.Nullable CurrencyValue amount) {
    this.amount = amount;
  }


  public LeadSourceRecurringExpense createTime(@jakarta.annotation.Nullable String createTime) {
    this.createTime = createTime;
    return this;
  }

  /**
   * The time this lead source recurring expense was created
   * @return createTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The time this lead source recurring expense was created")
  @JsonProperty(JSON_PROPERTY_CREATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreateTime() {
    return createTime;
  }


  @JsonProperty(JSON_PROPERTY_CREATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreateTime(@jakarta.annotation.Nullable String createTime) {
    this.createTime = createTime;
  }


  public LeadSourceRecurringExpense endTime(@jakarta.annotation.Nullable String endTime) {
    this.endTime = endTime;
    return this;
  }

  /**
   * The time this lead source recurring expense end
   * @return endTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The time this lead source recurring expense end")
  @JsonProperty(JSON_PROPERTY_END_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getEndTime() {
    return endTime;
  }


  @JsonProperty(JSON_PROPERTY_END_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndTime(@jakarta.annotation.Nullable String endTime) {
    this.endTime = endTime;
  }


  public LeadSourceRecurringExpense id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * ID of the lead source recurring expense
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "ID of the lead source recurring expense")
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


  public LeadSourceRecurringExpense nextExpenseTime(@jakarta.annotation.Nullable String nextExpenseTime) {
    this.nextExpenseTime = nextExpenseTime;
    return this;
  }

  /**
   * The time this lead source recurring expense will incur a new expense
   * @return nextExpenseTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The time this lead source recurring expense will incur a new expense")
  @JsonProperty(JSON_PROPERTY_NEXT_EXPENSE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextExpenseTime() {
    return nextExpenseTime;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_EXPENSE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextExpenseTime(@jakarta.annotation.Nullable String nextExpenseTime) {
    this.nextExpenseTime = nextExpenseTime;
  }


  public LeadSourceRecurringExpense notes(@jakarta.annotation.Nullable String notes) {
    this.notes = notes;
    return this;
  }

  /**
   * The notes for the lead source recurring expense
   * @return notes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The notes for the lead source recurring expense")
  @JsonProperty(JSON_PROPERTY_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNotes() {
    return notes;
  }


  @JsonProperty(JSON_PROPERTY_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNotes(@jakarta.annotation.Nullable String notes) {
    this.notes = notes;
  }


  public LeadSourceRecurringExpense startTime(@jakarta.annotation.Nullable String startTime) {
    this.startTime = startTime;
    return this;
  }

  /**
   * The time this lead source recurring expense starts
   * @return startTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The time this lead source recurring expense starts")
  @JsonProperty(JSON_PROPERTY_START_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStartTime() {
    return startTime;
  }


  @JsonProperty(JSON_PROPERTY_START_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStartTime(@jakarta.annotation.Nullable String startTime) {
    this.startTime = startTime;
  }


  public LeadSourceRecurringExpense title(@jakarta.annotation.Nullable String title) {
    this.title = title;
    return this;
  }

  /**
   * The title of the lead source recurring expense
   * @return title
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The title of the lead source recurring expense")
  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTitle() {
    return title;
  }


  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTitle(@jakarta.annotation.Nullable String title) {
    this.title = title;
  }


  public LeadSourceRecurringExpense updateTime(@jakarta.annotation.Nullable String updateTime) {
    this.updateTime = updateTime;
    return this;
  }

  /**
   * The time this lead source recurring expense was last updated
   * @return updateTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The time this lead source recurring expense was last updated")
  @JsonProperty(JSON_PROPERTY_UPDATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUpdateTime() {
    return updateTime;
  }


  @JsonProperty(JSON_PROPERTY_UPDATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUpdateTime(@jakarta.annotation.Nullable String updateTime) {
    this.updateTime = updateTime;
  }

  /**
   * Return true if this LeadSourceRecurringExpense object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LeadSourceRecurringExpense leadSourceRecurringExpense = (LeadSourceRecurringExpense) o;
    return Objects.equals(this.amount, leadSourceRecurringExpense.amount) &&
        Objects.equals(this.createTime, leadSourceRecurringExpense.createTime) &&
        Objects.equals(this.endTime, leadSourceRecurringExpense.endTime) &&
        Objects.equals(this.id, leadSourceRecurringExpense.id) &&
        Objects.equals(this.nextExpenseTime, leadSourceRecurringExpense.nextExpenseTime) &&
        Objects.equals(this.notes, leadSourceRecurringExpense.notes) &&
        Objects.equals(this.startTime, leadSourceRecurringExpense.startTime) &&
        Objects.equals(this.title, leadSourceRecurringExpense.title) &&
        Objects.equals(this.updateTime, leadSourceRecurringExpense.updateTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, createTime, endTime, id, nextExpenseTime, notes, startTime, title, updateTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LeadSourceRecurringExpense {\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    createTime: ").append(toIndentedString(createTime)).append("\n");
    sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    nextExpenseTime: ").append(toIndentedString(nextExpenseTime)).append("\n");
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
    sb.append("    startTime: ").append(toIndentedString(startTime)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    updateTime: ").append(toIndentedString(updateTime)).append("\n");
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
    
        private LeadSourceRecurringExpense instance;
    
        public Builder() {
          this(new LeadSourceRecurringExpense());
        }
    
        protected Builder(LeadSourceRecurringExpense instance) {
          this.instance = instance;
        }
    
        public LeadSourceRecurringExpense.Builder amount(CurrencyValue amount) {
              this.instance.amount = amount;
          return this;
        }
            public LeadSourceRecurringExpense.Builder createTime(String createTime) {
              this.instance.createTime = createTime;
          return this;
        }
            public LeadSourceRecurringExpense.Builder endTime(String endTime) {
              this.instance.endTime = endTime;
          return this;
        }
            public LeadSourceRecurringExpense.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public LeadSourceRecurringExpense.Builder nextExpenseTime(String nextExpenseTime) {
              this.instance.nextExpenseTime = nextExpenseTime;
          return this;
        }
            public LeadSourceRecurringExpense.Builder notes(String notes) {
              this.instance.notes = notes;
          return this;
        }
            public LeadSourceRecurringExpense.Builder startTime(String startTime) {
              this.instance.startTime = startTime;
          return this;
        }
            public LeadSourceRecurringExpense.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
            public LeadSourceRecurringExpense.Builder updateTime(String updateTime) {
              this.instance.updateTime = updateTime;
          return this;
        }
        
    
        /**
        * returns a built LeadSourceRecurringExpense instance.
        *
        * The builder is not reusable.
        */
        public LeadSourceRecurringExpense build() {
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
      public static LeadSourceRecurringExpense.Builder builder() {
        return new LeadSourceRecurringExpense.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public LeadSourceRecurringExpense.Builder toBuilder() {
        return new LeadSourceRecurringExpense.Builder()
          .amount(getAmount())
          .createTime(getCreateTime())
          .endTime(getEndTime())
          .id(getId())
          .nextExpenseTime(getNextExpenseTime())
          .notes(getNotes())
          .startTime(getStartTime())
          .title(getTitle())
          .updateTime(getUpdateTime());
      }
}

