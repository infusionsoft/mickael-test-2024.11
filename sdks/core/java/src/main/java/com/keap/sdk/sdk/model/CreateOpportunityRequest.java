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
import com.keap.sdk.sdk.model.CustomField;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateOpportunityRequest
 */
@JsonPropertyOrder({
  CreateOpportunityRequest.JSON_PROPERTY_AFFILIATE_ID,
  CreateOpportunityRequest.JSON_PROPERTY_CONTACT_ID,
  CreateOpportunityRequest.JSON_PROPERTY_CUSTOM_FIELDS,
  CreateOpportunityRequest.JSON_PROPERTY_ESTIMATED_CLOSE_TIME,
  CreateOpportunityRequest.JSON_PROPERTY_INCLUDE_IN_FORECAST,
  CreateOpportunityRequest.JSON_PROPERTY_NEXT_ACTION_NOTES,
  CreateOpportunityRequest.JSON_PROPERTY_NEXT_ACTION_TIME,
  CreateOpportunityRequest.JSON_PROPERTY_OPPORTUNITY_NOTES,
  CreateOpportunityRequest.JSON_PROPERTY_OPPORTUNITY_TITLE,
  CreateOpportunityRequest.JSON_PROPERTY_PROJECTED_REVENUE_HIGH,
  CreateOpportunityRequest.JSON_PROPERTY_PROJECTED_REVENUE_LOW,
  CreateOpportunityRequest.JSON_PROPERTY_STAGE_ID,
  CreateOpportunityRequest.JSON_PROPERTY_USER_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateOpportunityRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFFILIATE_ID = "affiliate_id";
  @jakarta.annotation.Nullable  private String affiliateId;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_CUSTOM_FIELDS = "custom_fields";
  @jakarta.annotation.Nullable  private List<@Valid CustomField> customFields = new ArrayList<>();

  public static final String JSON_PROPERTY_ESTIMATED_CLOSE_TIME = "estimated_close_time";
  @jakarta.annotation.Nullable  private String estimatedCloseTime;

  public static final String JSON_PROPERTY_INCLUDE_IN_FORECAST = "include_in_forecast";
  @jakarta.annotation.Nullable  private Boolean includeInForecast;

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

  public static final String JSON_PROPERTY_STAGE_ID = "stage_id";
  @jakarta.annotation.Nullable  private String stageId;

  public static final String JSON_PROPERTY_USER_ID = "user_id";
  @jakarta.annotation.Nullable  private String userId;

  public CreateOpportunityRequest() { 
  }

  public CreateOpportunityRequest affiliateId(@jakarta.annotation.Nullable String affiliateId) {
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


  public CreateOpportunityRequest contactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * Get contactId
   * @return contactId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContactId() {
    return contactId;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
  }


  public CreateOpportunityRequest customFields(@jakarta.annotation.Nullable List<@Valid CustomField> customFields) {
    this.customFields = customFields;
    return this;
  }

  public CreateOpportunityRequest addCustomFieldsItem(CustomField customFieldsItem) {
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


  public CreateOpportunityRequest estimatedCloseTime(@jakarta.annotation.Nullable String estimatedCloseTime) {
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


  public CreateOpportunityRequest includeInForecast(@jakarta.annotation.Nullable Boolean includeInForecast) {
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


  public CreateOpportunityRequest nextActionNotes(@jakarta.annotation.Nullable String nextActionNotes) {
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


  public CreateOpportunityRequest nextActionTime(@jakarta.annotation.Nullable String nextActionTime) {
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


  public CreateOpportunityRequest opportunityNotes(@jakarta.annotation.Nullable String opportunityNotes) {
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


  public CreateOpportunityRequest opportunityTitle(@jakarta.annotation.Nonnull String opportunityTitle) {
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


  public CreateOpportunityRequest projectedRevenueHigh(@jakarta.annotation.Nullable Double projectedRevenueHigh) {
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


  public CreateOpportunityRequest projectedRevenueLow(@jakarta.annotation.Nullable Double projectedRevenueLow) {
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


  public CreateOpportunityRequest stageId(@jakarta.annotation.Nullable String stageId) {
    this.stageId = stageId;
    return this;
  }

  /**
   * Get stageId
   * @return stageId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_STAGE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStageId() {
    return stageId;
  }


  @JsonProperty(JSON_PROPERTY_STAGE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStageId(@jakarta.annotation.Nullable String stageId) {
    this.stageId = stageId;
  }


  public CreateOpportunityRequest userId(@jakarta.annotation.Nullable String userId) {
    this.userId = userId;
    return this;
  }

  /**
   * Get userId
   * @return userId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUserId() {
    return userId;
  }


  @JsonProperty(JSON_PROPERTY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUserId(@jakarta.annotation.Nullable String userId) {
    this.userId = userId;
  }

  /**
   * Return true if this CreateOpportunityRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateOpportunityRequest createOpportunityRequest = (CreateOpportunityRequest) o;
    return Objects.equals(this.affiliateId, createOpportunityRequest.affiliateId) &&
        Objects.equals(this.contactId, createOpportunityRequest.contactId) &&
        Objects.equals(this.customFields, createOpportunityRequest.customFields) &&
        Objects.equals(this.estimatedCloseTime, createOpportunityRequest.estimatedCloseTime) &&
        Objects.equals(this.includeInForecast, createOpportunityRequest.includeInForecast) &&
        Objects.equals(this.nextActionNotes, createOpportunityRequest.nextActionNotes) &&
        Objects.equals(this.nextActionTime, createOpportunityRequest.nextActionTime) &&
        Objects.equals(this.opportunityNotes, createOpportunityRequest.opportunityNotes) &&
        Objects.equals(this.opportunityTitle, createOpportunityRequest.opportunityTitle) &&
        Objects.equals(this.projectedRevenueHigh, createOpportunityRequest.projectedRevenueHigh) &&
        Objects.equals(this.projectedRevenueLow, createOpportunityRequest.projectedRevenueLow) &&
        Objects.equals(this.stageId, createOpportunityRequest.stageId) &&
        Objects.equals(this.userId, createOpportunityRequest.userId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affiliateId, contactId, customFields, estimatedCloseTime, includeInForecast, nextActionNotes, nextActionTime, opportunityNotes, opportunityTitle, projectedRevenueHigh, projectedRevenueLow, stageId, userId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateOpportunityRequest {\n");
    sb.append("    affiliateId: ").append(toIndentedString(affiliateId)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    customFields: ").append(toIndentedString(customFields)).append("\n");
    sb.append("    estimatedCloseTime: ").append(toIndentedString(estimatedCloseTime)).append("\n");
    sb.append("    includeInForecast: ").append(toIndentedString(includeInForecast)).append("\n");
    sb.append("    nextActionNotes: ").append(toIndentedString(nextActionNotes)).append("\n");
    sb.append("    nextActionTime: ").append(toIndentedString(nextActionTime)).append("\n");
    sb.append("    opportunityNotes: ").append(toIndentedString(opportunityNotes)).append("\n");
    sb.append("    opportunityTitle: ").append(toIndentedString(opportunityTitle)).append("\n");
    sb.append("    projectedRevenueHigh: ").append(toIndentedString(projectedRevenueHigh)).append("\n");
    sb.append("    projectedRevenueLow: ").append(toIndentedString(projectedRevenueLow)).append("\n");
    sb.append("    stageId: ").append(toIndentedString(stageId)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
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
    
        private CreateOpportunityRequest instance;
    
        public Builder() {
          this(new CreateOpportunityRequest());
        }
    
        protected Builder(CreateOpportunityRequest instance) {
          this.instance = instance;
        }
    
        public CreateOpportunityRequest.Builder affiliateId(String affiliateId) {
              this.instance.affiliateId = affiliateId;
          return this;
        }
            public CreateOpportunityRequest.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public CreateOpportunityRequest.Builder customFields(List<@Valid CustomField> customFields) {
              this.instance.customFields = customFields;
          return this;
        }
            public CreateOpportunityRequest.Builder estimatedCloseTime(String estimatedCloseTime) {
              this.instance.estimatedCloseTime = estimatedCloseTime;
          return this;
        }
            public CreateOpportunityRequest.Builder includeInForecast(Boolean includeInForecast) {
              this.instance.includeInForecast = includeInForecast;
          return this;
        }
            public CreateOpportunityRequest.Builder nextActionNotes(String nextActionNotes) {
              this.instance.nextActionNotes = nextActionNotes;
          return this;
        }
            public CreateOpportunityRequest.Builder nextActionTime(String nextActionTime) {
              this.instance.nextActionTime = nextActionTime;
          return this;
        }
            public CreateOpportunityRequest.Builder opportunityNotes(String opportunityNotes) {
              this.instance.opportunityNotes = opportunityNotes;
          return this;
        }
            public CreateOpportunityRequest.Builder opportunityTitle(String opportunityTitle) {
              this.instance.opportunityTitle = opportunityTitle;
          return this;
        }
            public CreateOpportunityRequest.Builder projectedRevenueHigh(Double projectedRevenueHigh) {
              this.instance.projectedRevenueHigh = projectedRevenueHigh;
          return this;
        }
            public CreateOpportunityRequest.Builder projectedRevenueLow(Double projectedRevenueLow) {
              this.instance.projectedRevenueLow = projectedRevenueLow;
          return this;
        }
            public CreateOpportunityRequest.Builder stageId(String stageId) {
              this.instance.stageId = stageId;
          return this;
        }
            public CreateOpportunityRequest.Builder userId(String userId) {
              this.instance.userId = userId;
          return this;
        }
        
    
        /**
        * returns a built CreateOpportunityRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateOpportunityRequest build() {
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
      public static CreateOpportunityRequest.Builder builder() {
        return new CreateOpportunityRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateOpportunityRequest.Builder toBuilder() {
        return new CreateOpportunityRequest.Builder()
          .affiliateId(getAffiliateId())
          .contactId(getContactId())
          .customFields(getCustomFields())
          .estimatedCloseTime(getEstimatedCloseTime())
          .includeInForecast(getIncludeInForecast())
          .nextActionNotes(getNextActionNotes())
          .nextActionTime(getNextActionTime())
          .opportunityNotes(getOpportunityNotes())
          .opportunityTitle(getOpportunityTitle())
          .projectedRevenueHigh(getProjectedRevenueHigh())
          .projectedRevenueLow(getProjectedRevenueLow())
          .stageId(getStageId())
          .userId(getUserId());
      }
}

