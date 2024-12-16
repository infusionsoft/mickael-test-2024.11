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
import com.keap.sdk.sdk.model.CustomField;
import com.keap.sdk.sdk.model.OpportunityContact;
import com.keap.sdk.sdk.model.OpportunityStage;
import com.keap.sdk.sdk.model.RestV2User;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * RestV2Opportunity
 */
@JsonPropertyOrder({
  RestV2Opportunity.JSON_PROPERTY_AFFILIATE_ID,
  RestV2Opportunity.JSON_PROPERTY_CONTACT,
  RestV2Opportunity.JSON_PROPERTY_CREATED_TIME,
  RestV2Opportunity.JSON_PROPERTY_CUSTOM_FIELDS,
  RestV2Opportunity.JSON_PROPERTY_ESTIMATED_CLOSE_TIME,
  RestV2Opportunity.JSON_PROPERTY_ID,
  RestV2Opportunity.JSON_PROPERTY_INCLUDE_IN_FORECAST,
  RestV2Opportunity.JSON_PROPERTY_LAST_UPDATED_TIME,
  RestV2Opportunity.JSON_PROPERTY_NEXT_ACTION_NOTES,
  RestV2Opportunity.JSON_PROPERTY_NEXT_ACTION_TIME,
  RestV2Opportunity.JSON_PROPERTY_OPPORTUNITY_NOTES,
  RestV2Opportunity.JSON_PROPERTY_OPPORTUNITY_TITLE,
  RestV2Opportunity.JSON_PROPERTY_PROJECTED_REVENUE_HIGH,
  RestV2Opportunity.JSON_PROPERTY_PROJECTED_REVENUE_LOW,
  RestV2Opportunity.JSON_PROPERTY_STAGE,
  RestV2Opportunity.JSON_PROPERTY_USER
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class RestV2Opportunity implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFFILIATE_ID = "affiliate_id";
  @jakarta.annotation.Nullable  private String affiliateId;

  public static final String JSON_PROPERTY_CONTACT = "contact";
  @jakarta.annotation.Nonnull  private OpportunityContact contact;

  public static final String JSON_PROPERTY_CREATED_TIME = "created_time";
  @jakarta.annotation.Nullable  private String createdTime;

  public static final String JSON_PROPERTY_CUSTOM_FIELDS = "custom_fields";
  @jakarta.annotation.Nullable  private List<@Valid CustomField> customFields = new ArrayList<>();

  public static final String JSON_PROPERTY_ESTIMATED_CLOSE_TIME = "estimated_close_time";
  @jakarta.annotation.Nullable  private String estimatedCloseTime;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_INCLUDE_IN_FORECAST = "include_in_forecast";
  @jakarta.annotation.Nullable  private Boolean includeInForecast;

  public static final String JSON_PROPERTY_LAST_UPDATED_TIME = "last_updated_time";
  @jakarta.annotation.Nullable  private String lastUpdatedTime;

  public static final String JSON_PROPERTY_NEXT_ACTION_NOTES = "next_action_notes";
  @jakarta.annotation.Nullable  private String nextActionNotes;

  public static final String JSON_PROPERTY_NEXT_ACTION_TIME = "next_action_time";
  @jakarta.annotation.Nullable  private String nextActionTime;

  public static final String JSON_PROPERTY_OPPORTUNITY_NOTES = "opportunity_notes";
  @jakarta.annotation.Nullable  private String opportunityNotes;

  public static final String JSON_PROPERTY_OPPORTUNITY_TITLE = "opportunity_title";
  @jakarta.annotation.Nonnull  private String opportunityTitle;

  public static final String JSON_PROPERTY_PROJECTED_REVENUE_HIGH = "projected_revenue_high";
  @jakarta.annotation.Nullable  private Double projectedRevenueHigh;

  public static final String JSON_PROPERTY_PROJECTED_REVENUE_LOW = "projected_revenue_low";
  @jakarta.annotation.Nullable  private Double projectedRevenueLow;

  public static final String JSON_PROPERTY_STAGE = "stage";
  @jakarta.annotation.Nonnull  private OpportunityStage stage;

  public static final String JSON_PROPERTY_USER = "user";
  @jakarta.annotation.Nullable  private RestV2User user;

  public RestV2Opportunity() { 
  }

  public RestV2Opportunity affiliateId(@jakarta.annotation.Nullable String affiliateId) {
    this.affiliateId = affiliateId;
    return this;
  }

  /**
   * Get affiliateId
   * @return affiliateId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getAffiliateId() {
    return affiliateId;
  }


  @JsonProperty(JSON_PROPERTY_AFFILIATE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAffiliateId(@jakarta.annotation.Nullable String affiliateId) {
    this.affiliateId = affiliateId;
  }


  public RestV2Opportunity contact(@jakarta.annotation.Nonnull OpportunityContact contact) {
    this.contact = contact;
    return this;
  }

  /**
   * Get contact
   * @return contact
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public OpportunityContact getContact() {
    return contact;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setContact(@jakarta.annotation.Nonnull OpportunityContact contact) {
    this.contact = contact;
  }


  public RestV2Opportunity createdTime(@jakarta.annotation.Nullable String createdTime) {
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


  public RestV2Opportunity customFields(@jakarta.annotation.Nullable List<@Valid CustomField> customFields) {
    this.customFields = customFields;
    return this;
  }

  public RestV2Opportunity addCustomFieldsItem(CustomField customFieldsItem) {
    if (this.customFields == null) {
      this.customFields = new ArrayList<>();
    }
    this.customFields.add(customFieldsItem);
    return this;
  }

  /**
   * Get customFields
   * @return customFields
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid CustomField> getCustomFields() {
    return customFields;
  }


  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCustomFields(@jakarta.annotation.Nullable List<@Valid CustomField> customFields) {
    this.customFields = customFields;
  }


  public RestV2Opportunity estimatedCloseTime(@jakarta.annotation.Nullable String estimatedCloseTime) {
    this.estimatedCloseTime = estimatedCloseTime;
    return this;
  }

  /**
   * Get estimatedCloseTime
   * @return estimatedCloseTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ESTIMATED_CLOSE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getEstimatedCloseTime() {
    return estimatedCloseTime;
  }


  @JsonProperty(JSON_PROPERTY_ESTIMATED_CLOSE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEstimatedCloseTime(@jakarta.annotation.Nullable String estimatedCloseTime) {
    this.estimatedCloseTime = estimatedCloseTime;
  }


  public RestV2Opportunity id(@jakarta.annotation.Nullable String id) {
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


  public RestV2Opportunity includeInForecast(@jakarta.annotation.Nullable Boolean includeInForecast) {
    this.includeInForecast = includeInForecast;
    return this;
  }

  /**
   * Get includeInForecast
   * @return includeInForecast
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INCLUDE_IN_FORECAST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getIncludeInForecast() {
    return includeInForecast;
  }


  @JsonProperty(JSON_PROPERTY_INCLUDE_IN_FORECAST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIncludeInForecast(@jakarta.annotation.Nullable Boolean includeInForecast) {
    this.includeInForecast = includeInForecast;
  }


  public RestV2Opportunity lastUpdatedTime(@jakarta.annotation.Nullable String lastUpdatedTime) {
    this.lastUpdatedTime = lastUpdatedTime;
    return this;
  }

  /**
   * Get lastUpdatedTime
   * @return lastUpdatedTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LAST_UPDATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLastUpdatedTime() {
    return lastUpdatedTime;
  }


  @JsonProperty(JSON_PROPERTY_LAST_UPDATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLastUpdatedTime(@jakarta.annotation.Nullable String lastUpdatedTime) {
    this.lastUpdatedTime = lastUpdatedTime;
  }


  public RestV2Opportunity nextActionNotes(@jakarta.annotation.Nullable String nextActionNotes) {
    this.nextActionNotes = nextActionNotes;
    return this;
  }

  /**
   * Get nextActionNotes
   * @return nextActionNotes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_ACTION_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextActionNotes() {
    return nextActionNotes;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_ACTION_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextActionNotes(@jakarta.annotation.Nullable String nextActionNotes) {
    this.nextActionNotes = nextActionNotes;
  }


  public RestV2Opportunity nextActionTime(@jakarta.annotation.Nullable String nextActionTime) {
    this.nextActionTime = nextActionTime;
    return this;
  }

  /**
   * Get nextActionTime
   * @return nextActionTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_ACTION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextActionTime() {
    return nextActionTime;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_ACTION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextActionTime(@jakarta.annotation.Nullable String nextActionTime) {
    this.nextActionTime = nextActionTime;
  }


  public RestV2Opportunity opportunityNotes(@jakarta.annotation.Nullable String opportunityNotes) {
    this.opportunityNotes = opportunityNotes;
    return this;
  }

  /**
   * Get opportunityNotes
   * @return opportunityNotes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPPORTUNITY_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getOpportunityNotes() {
    return opportunityNotes;
  }


  @JsonProperty(JSON_PROPERTY_OPPORTUNITY_NOTES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOpportunityNotes(@jakarta.annotation.Nullable String opportunityNotes) {
    this.opportunityNotes = opportunityNotes;
  }


  public RestV2Opportunity opportunityTitle(@jakarta.annotation.Nonnull String opportunityTitle) {
    this.opportunityTitle = opportunityTitle;
    return this;
  }

  /**
   * Get opportunityTitle
   * @return opportunityTitle
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPPORTUNITY_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getOpportunityTitle() {
    return opportunityTitle;
  }


  @JsonProperty(JSON_PROPERTY_OPPORTUNITY_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOpportunityTitle(@jakarta.annotation.Nonnull String opportunityTitle) {
    this.opportunityTitle = opportunityTitle;
  }


  public RestV2Opportunity projectedRevenueHigh(@jakarta.annotation.Nullable Double projectedRevenueHigh) {
    this.projectedRevenueHigh = projectedRevenueHigh;
    return this;
  }

  /**
   * Get projectedRevenueHigh
   * @return projectedRevenueHigh
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PROJECTED_REVENUE_HIGH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getProjectedRevenueHigh() {
    return projectedRevenueHigh;
  }


  @JsonProperty(JSON_PROPERTY_PROJECTED_REVENUE_HIGH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProjectedRevenueHigh(@jakarta.annotation.Nullable Double projectedRevenueHigh) {
    this.projectedRevenueHigh = projectedRevenueHigh;
  }


  public RestV2Opportunity projectedRevenueLow(@jakarta.annotation.Nullable Double projectedRevenueLow) {
    this.projectedRevenueLow = projectedRevenueLow;
    return this;
  }

  /**
   * Get projectedRevenueLow
   * @return projectedRevenueLow
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PROJECTED_REVENUE_LOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getProjectedRevenueLow() {
    return projectedRevenueLow;
  }


  @JsonProperty(JSON_PROPERTY_PROJECTED_REVENUE_LOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProjectedRevenueLow(@jakarta.annotation.Nullable Double projectedRevenueLow) {
    this.projectedRevenueLow = projectedRevenueLow;
  }


  public RestV2Opportunity stage(@jakarta.annotation.Nonnull OpportunityStage stage) {
    this.stage = stage;
    return this;
  }

  /**
   * Get stage
   * @return stage
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STAGE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public OpportunityStage getStage() {
    return stage;
  }


  @JsonProperty(JSON_PROPERTY_STAGE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setStage(@jakarta.annotation.Nonnull OpportunityStage stage) {
    this.stage = stage;
  }


  public RestV2Opportunity user(@jakarta.annotation.Nullable RestV2User user) {
    this.user = user;
    return this;
  }

  /**
   * Get user
   * @return user
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public RestV2User getUser() {
    return user;
  }


  @JsonProperty(JSON_PROPERTY_USER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUser(@jakarta.annotation.Nullable RestV2User user) {
    this.user = user;
  }

  /**
   * Return true if this RestV2Opportunity object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RestV2Opportunity restV2Opportunity = (RestV2Opportunity) o;
    return Objects.equals(this.affiliateId, restV2Opportunity.affiliateId) &&
        Objects.equals(this.contact, restV2Opportunity.contact) &&
        Objects.equals(this.createdTime, restV2Opportunity.createdTime) &&
        Objects.equals(this.customFields, restV2Opportunity.customFields) &&
        Objects.equals(this.estimatedCloseTime, restV2Opportunity.estimatedCloseTime) &&
        Objects.equals(this.id, restV2Opportunity.id) &&
        Objects.equals(this.includeInForecast, restV2Opportunity.includeInForecast) &&
        Objects.equals(this.lastUpdatedTime, restV2Opportunity.lastUpdatedTime) &&
        Objects.equals(this.nextActionNotes, restV2Opportunity.nextActionNotes) &&
        Objects.equals(this.nextActionTime, restV2Opportunity.nextActionTime) &&
        Objects.equals(this.opportunityNotes, restV2Opportunity.opportunityNotes) &&
        Objects.equals(this.opportunityTitle, restV2Opportunity.opportunityTitle) &&
        Objects.equals(this.projectedRevenueHigh, restV2Opportunity.projectedRevenueHigh) &&
        Objects.equals(this.projectedRevenueLow, restV2Opportunity.projectedRevenueLow) &&
        Objects.equals(this.stage, restV2Opportunity.stage) &&
        Objects.equals(this.user, restV2Opportunity.user);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affiliateId, contact, createdTime, customFields, estimatedCloseTime, id, includeInForecast, lastUpdatedTime, nextActionNotes, nextActionTime, opportunityNotes, opportunityTitle, projectedRevenueHigh, projectedRevenueLow, stage, user);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RestV2Opportunity {\n");
    sb.append("    affiliateId: ").append(toIndentedString(affiliateId)).append("\n");
    sb.append("    contact: ").append(toIndentedString(contact)).append("\n");
    sb.append("    createdTime: ").append(toIndentedString(createdTime)).append("\n");
    sb.append("    customFields: ").append(toIndentedString(customFields)).append("\n");
    sb.append("    estimatedCloseTime: ").append(toIndentedString(estimatedCloseTime)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    includeInForecast: ").append(toIndentedString(includeInForecast)).append("\n");
    sb.append("    lastUpdatedTime: ").append(toIndentedString(lastUpdatedTime)).append("\n");
    sb.append("    nextActionNotes: ").append(toIndentedString(nextActionNotes)).append("\n");
    sb.append("    nextActionTime: ").append(toIndentedString(nextActionTime)).append("\n");
    sb.append("    opportunityNotes: ").append(toIndentedString(opportunityNotes)).append("\n");
    sb.append("    opportunityTitle: ").append(toIndentedString(opportunityTitle)).append("\n");
    sb.append("    projectedRevenueHigh: ").append(toIndentedString(projectedRevenueHigh)).append("\n");
    sb.append("    projectedRevenueLow: ").append(toIndentedString(projectedRevenueLow)).append("\n");
    sb.append("    stage: ").append(toIndentedString(stage)).append("\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
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
    
        private RestV2Opportunity instance;
    
        public Builder() {
          this(new RestV2Opportunity());
        }
    
        protected Builder(RestV2Opportunity instance) {
          this.instance = instance;
        }
    
        public RestV2Opportunity.Builder affiliateId(String affiliateId) {
              this.instance.affiliateId = affiliateId;
          return this;
        }
            public RestV2Opportunity.Builder contact(OpportunityContact contact) {
              this.instance.contact = contact;
          return this;
        }
            public RestV2Opportunity.Builder createdTime(String createdTime) {
              this.instance.createdTime = createdTime;
          return this;
        }
            public RestV2Opportunity.Builder customFields(List<@Valid CustomField> customFields) {
              this.instance.customFields = customFields;
          return this;
        }
            public RestV2Opportunity.Builder estimatedCloseTime(String estimatedCloseTime) {
              this.instance.estimatedCloseTime = estimatedCloseTime;
          return this;
        }
            public RestV2Opportunity.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public RestV2Opportunity.Builder includeInForecast(Boolean includeInForecast) {
              this.instance.includeInForecast = includeInForecast;
          return this;
        }
            public RestV2Opportunity.Builder lastUpdatedTime(String lastUpdatedTime) {
              this.instance.lastUpdatedTime = lastUpdatedTime;
          return this;
        }
            public RestV2Opportunity.Builder nextActionNotes(String nextActionNotes) {
              this.instance.nextActionNotes = nextActionNotes;
          return this;
        }
            public RestV2Opportunity.Builder nextActionTime(String nextActionTime) {
              this.instance.nextActionTime = nextActionTime;
          return this;
        }
            public RestV2Opportunity.Builder opportunityNotes(String opportunityNotes) {
              this.instance.opportunityNotes = opportunityNotes;
          return this;
        }
            public RestV2Opportunity.Builder opportunityTitle(String opportunityTitle) {
              this.instance.opportunityTitle = opportunityTitle;
          return this;
        }
            public RestV2Opportunity.Builder projectedRevenueHigh(Double projectedRevenueHigh) {
              this.instance.projectedRevenueHigh = projectedRevenueHigh;
          return this;
        }
            public RestV2Opportunity.Builder projectedRevenueLow(Double projectedRevenueLow) {
              this.instance.projectedRevenueLow = projectedRevenueLow;
          return this;
        }
            public RestV2Opportunity.Builder stage(OpportunityStage stage) {
              this.instance.stage = stage;
          return this;
        }
            public RestV2Opportunity.Builder user(RestV2User user) {
              this.instance.user = user;
          return this;
        }
        
    
        /**
        * returns a built RestV2Opportunity instance.
        *
        * The builder is not reusable.
        */
        public RestV2Opportunity build() {
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
      public static RestV2Opportunity.Builder builder() {
        return new RestV2Opportunity.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public RestV2Opportunity.Builder toBuilder() {
        return new RestV2Opportunity.Builder()
          .affiliateId(getAffiliateId())
          .contact(getContact())
          .createdTime(getCreatedTime())
          .customFields(getCustomFields())
          .estimatedCloseTime(getEstimatedCloseTime())
          .id(getId())
          .includeInForecast(getIncludeInForecast())
          .lastUpdatedTime(getLastUpdatedTime())
          .nextActionNotes(getNextActionNotes())
          .nextActionTime(getNextActionTime())
          .opportunityNotes(getOpportunityNotes())
          .opportunityTitle(getOpportunityTitle())
          .projectedRevenueHigh(getProjectedRevenueHigh())
          .projectedRevenueLow(getProjectedRevenueLow())
          .stage(getStage())
          .user(getUser());
      }
}

