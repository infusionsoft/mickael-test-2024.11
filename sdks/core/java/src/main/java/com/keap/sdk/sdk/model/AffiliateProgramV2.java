/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
import com.keap.sdk.sdk.model.DefaultCommission;
import com.keap.sdk.sdk.model.ProductCommission;
import com.keap.sdk.sdk.model.SubscriptionCommission;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * AffiliateProgramV2
 */
@JsonPropertyOrder({
  AffiliateProgramV2.JSON_PROPERTY_AFFILIATE_ID,
  AffiliateProgramV2.JSON_PROPERTY_CREATE_TIME,
  AffiliateProgramV2.JSON_PROPERTY_DEFAULT_COMMISSION,
  AffiliateProgramV2.JSON_PROPERTY_ID,
  AffiliateProgramV2.JSON_PROPERTY_NAME,
  AffiliateProgramV2.JSON_PROPERTY_NOTES,
  AffiliateProgramV2.JSON_PROPERTY_PRIORITY,
  AffiliateProgramV2.JSON_PROPERTY_PRODUCT_COMMISSIONS,
  AffiliateProgramV2.JSON_PROPERTY_SUBSCRIPTION_COMMISSIONS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class AffiliateProgramV2 implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFFILIATE_ID = "affiliate_id";
  @jakarta.annotation.Nullable  private String affiliateId;

  public static final String JSON_PROPERTY_CREATE_TIME = "create_time";
  @jakarta.annotation.Nullable  private String createTime;

  public static final String JSON_PROPERTY_DEFAULT_COMMISSION = "default_commission";
  @jakarta.annotation.Nullable  private DefaultCommission defaultCommission;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_NOTES = "notes";
  @jakarta.annotation.Nullable  private String notes;

  public static final String JSON_PROPERTY_PRIORITY = "priority";
  @jakarta.annotation.Nullable  private String priority;

  public static final String JSON_PROPERTY_PRODUCT_COMMISSIONS = "product_commissions";
  @jakarta.annotation.Nullable  private List<@Valid ProductCommission> productCommissions = new ArrayList<>();

  public static final String JSON_PROPERTY_SUBSCRIPTION_COMMISSIONS = "subscription_commissions";
  @jakarta.annotation.Nullable  private List<@Valid SubscriptionCommission> subscriptionCommissions = new ArrayList<>();

  public AffiliateProgramV2() { 
  }

  public AffiliateProgramV2 affiliateId(@jakarta.annotation.Nullable String affiliateId) {
    this.affiliateId = affiliateId;
    return this;
  }

  /**
   * The affiliate_Id for Affiliate commission program
   * @return affiliateId
   */
  @jakarta.annotation.Nullable  @Schema(example = "123", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The affiliate_Id for Affiliate commission program")
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


  public AffiliateProgramV2 createTime(@jakarta.annotation.Nullable String createTime) {
    this.createTime = createTime;
    return this;
  }

  /**
   * The created time of affiliate commission program
   * @return createTime
   */
  @jakarta.annotation.Nullable  @Schema(example = "2019-08-24T14:15:22Z", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The created time of affiliate commission program")
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


  public AffiliateProgramV2 defaultCommission(@jakarta.annotation.Nullable DefaultCommission defaultCommission) {
    this.defaultCommission = defaultCommission;
    return this;
  }

  /**
   * Get defaultCommission
   * @return defaultCommission
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_COMMISSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public DefaultCommission getDefaultCommission() {
    return defaultCommission;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_COMMISSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultCommission(@jakarta.annotation.Nullable DefaultCommission defaultCommission) {
    this.defaultCommission = defaultCommission;
  }


  public AffiliateProgramV2 id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * The affiliate commission program name
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(example = "1", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The affiliate commission program name")
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


  public AffiliateProgramV2 name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * The affiliate commission program name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(example = "commission program", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The affiliate commission program name")
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


  public AffiliateProgramV2 notes(@jakarta.annotation.Nullable String notes) {
    this.notes = notes;
    return this;
  }

  /**
   * The affiliate commission program notes
   * @return notes
   */
  @jakarta.annotation.Nullable  @Schema(example = "notes for the commission program", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The affiliate commission program notes")
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


  public AffiliateProgramV2 priority(@jakarta.annotation.Nullable String priority) {
    this.priority = priority;
    return this;
  }

  /**
   * The Affiliate commission program priority
   * @return priority
   */
  @jakarta.annotation.Nullable  @Schema(example = "0", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The Affiliate commission program priority")
  @JsonProperty(JSON_PROPERTY_PRIORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPriority() {
    return priority;
  }


  @JsonProperty(JSON_PROPERTY_PRIORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriority(@jakarta.annotation.Nullable String priority) {
    this.priority = priority;
  }


  public AffiliateProgramV2 productCommissions(@jakarta.annotation.Nullable List<@Valid ProductCommission> productCommissions) {
    this.productCommissions = productCommissions;
    return this;
  }

  public AffiliateProgramV2 addProductCommissionsItem(ProductCommission productCommissionsItem) {
    if (this.productCommissions == null) {
      this.productCommissions = new ArrayList<>();
    }
    this.productCommissions.add(productCommissionsItem);
    return this;
  }

  /**
   * Get productCommissions
   * @return productCommissions
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_COMMISSIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ProductCommission> getProductCommissions() {
    return productCommissions;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_COMMISSIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductCommissions(@jakarta.annotation.Nullable List<@Valid ProductCommission> productCommissions) {
    this.productCommissions = productCommissions;
  }


  public AffiliateProgramV2 subscriptionCommissions(@jakarta.annotation.Nullable List<@Valid SubscriptionCommission> subscriptionCommissions) {
    this.subscriptionCommissions = subscriptionCommissions;
    return this;
  }

  public AffiliateProgramV2 addSubscriptionCommissionsItem(SubscriptionCommission subscriptionCommissionsItem) {
    if (this.subscriptionCommissions == null) {
      this.subscriptionCommissions = new ArrayList<>();
    }
    this.subscriptionCommissions.add(subscriptionCommissionsItem);
    return this;
  }

  /**
   * Get subscriptionCommissions
   * @return subscriptionCommissions
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_COMMISSIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid SubscriptionCommission> getSubscriptionCommissions() {
    return subscriptionCommissions;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTION_COMMISSIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptionCommissions(@jakarta.annotation.Nullable List<@Valid SubscriptionCommission> subscriptionCommissions) {
    this.subscriptionCommissions = subscriptionCommissions;
  }

  /**
   * Return true if this AffiliateProgramV2 object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AffiliateProgramV2 affiliateProgramV2 = (AffiliateProgramV2) o;
    return Objects.equals(this.affiliateId, affiliateProgramV2.affiliateId) &&
        Objects.equals(this.createTime, affiliateProgramV2.createTime) &&
        Objects.equals(this.defaultCommission, affiliateProgramV2.defaultCommission) &&
        Objects.equals(this.id, affiliateProgramV2.id) &&
        Objects.equals(this.name, affiliateProgramV2.name) &&
        Objects.equals(this.notes, affiliateProgramV2.notes) &&
        Objects.equals(this.priority, affiliateProgramV2.priority) &&
        Objects.equals(this.productCommissions, affiliateProgramV2.productCommissions) &&
        Objects.equals(this.subscriptionCommissions, affiliateProgramV2.subscriptionCommissions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affiliateId, createTime, defaultCommission, id, name, notes, priority, productCommissions, subscriptionCommissions);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AffiliateProgramV2 {\n");
    sb.append("    affiliateId: ").append(toIndentedString(affiliateId)).append("\n");
    sb.append("    createTime: ").append(toIndentedString(createTime)).append("\n");
    sb.append("    defaultCommission: ").append(toIndentedString(defaultCommission)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
    sb.append("    priority: ").append(toIndentedString(priority)).append("\n");
    sb.append("    productCommissions: ").append(toIndentedString(productCommissions)).append("\n");
    sb.append("    subscriptionCommissions: ").append(toIndentedString(subscriptionCommissions)).append("\n");
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
    
        private AffiliateProgramV2 instance;
    
        public Builder() {
          this(new AffiliateProgramV2());
        }
    
        protected Builder(AffiliateProgramV2 instance) {
          this.instance = instance;
        }
    
        public AffiliateProgramV2.Builder affiliateId(String affiliateId) {
              this.instance.affiliateId = affiliateId;
          return this;
        }
            public AffiliateProgramV2.Builder createTime(String createTime) {
              this.instance.createTime = createTime;
          return this;
        }
            public AffiliateProgramV2.Builder defaultCommission(DefaultCommission defaultCommission) {
              this.instance.defaultCommission = defaultCommission;
          return this;
        }
            public AffiliateProgramV2.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public AffiliateProgramV2.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public AffiliateProgramV2.Builder notes(String notes) {
              this.instance.notes = notes;
          return this;
        }
            public AffiliateProgramV2.Builder priority(String priority) {
              this.instance.priority = priority;
          return this;
        }
            public AffiliateProgramV2.Builder productCommissions(List<@Valid ProductCommission> productCommissions) {
              this.instance.productCommissions = productCommissions;
          return this;
        }
            public AffiliateProgramV2.Builder subscriptionCommissions(List<@Valid SubscriptionCommission> subscriptionCommissions) {
              this.instance.subscriptionCommissions = subscriptionCommissions;
          return this;
        }
        
    
        /**
        * returns a built AffiliateProgramV2 instance.
        *
        * The builder is not reusable.
        */
        public AffiliateProgramV2 build() {
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
      public static AffiliateProgramV2.Builder builder() {
        return new AffiliateProgramV2.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AffiliateProgramV2.Builder toBuilder() {
        return new AffiliateProgramV2.Builder()
          .affiliateId(getAffiliateId())
          .createTime(getCreateTime())
          .defaultCommission(getDefaultCommission())
          .id(getId())
          .name(getName())
          .notes(getNotes())
          .priority(getPriority())
          .productCommissions(getProductCommissions())
          .subscriptionCommissions(getSubscriptionCommissions());
      }
}

