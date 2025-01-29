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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ApplicationConfigurationModuleNote
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleNote.JSON_PROPERTY_APPOINTMENT_TYPES,
  ApplicationConfigurationModuleNote.JSON_PROPERTY_SHARE_OPPORTUNITY_WITH_RELATED_USER
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleNote implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_APPOINTMENT_TYPES = "appointment_types";
  @jakarta.annotation.Nullable  private String appointmentTypes;

  public static final String JSON_PROPERTY_SHARE_OPPORTUNITY_WITH_RELATED_USER = "share_opportunity_with_related_user";
  @jakarta.annotation.Nullable  private Boolean shareOpportunityWithRelatedUser;

  public ApplicationConfigurationModuleNote() { 
  }

  public ApplicationConfigurationModuleNote appointmentTypes(@jakarta.annotation.Nullable String appointmentTypes) {
    this.appointmentTypes = appointmentTypes;
    return this;
  }

  /**
   * Get appointmentTypes
   * @return appointmentTypes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_APPOINTMENT_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getAppointmentTypes() {
    return appointmentTypes;
  }


  @JsonProperty(JSON_PROPERTY_APPOINTMENT_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAppointmentTypes(@jakarta.annotation.Nullable String appointmentTypes) {
    this.appointmentTypes = appointmentTypes;
  }


  public ApplicationConfigurationModuleNote shareOpportunityWithRelatedUser(@jakarta.annotation.Nullable Boolean shareOpportunityWithRelatedUser) {
    this.shareOpportunityWithRelatedUser = shareOpportunityWithRelatedUser;
    return this;
  }

  /**
   * Get shareOpportunityWithRelatedUser
   * @return shareOpportunityWithRelatedUser
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SHARE_OPPORTUNITY_WITH_RELATED_USER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getShareOpportunityWithRelatedUser() {
    return shareOpportunityWithRelatedUser;
  }


  @JsonProperty(JSON_PROPERTY_SHARE_OPPORTUNITY_WITH_RELATED_USER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShareOpportunityWithRelatedUser(@jakarta.annotation.Nullable Boolean shareOpportunityWithRelatedUser) {
    this.shareOpportunityWithRelatedUser = shareOpportunityWithRelatedUser;
  }

  /**
   * Return true if this ApplicationConfigurationModuleNote object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleNote applicationConfigurationModuleNote = (ApplicationConfigurationModuleNote) o;
    return Objects.equals(this.appointmentTypes, applicationConfigurationModuleNote.appointmentTypes) &&
        Objects.equals(this.shareOpportunityWithRelatedUser, applicationConfigurationModuleNote.shareOpportunityWithRelatedUser);
  }

  @Override
  public int hashCode() {
    return Objects.hash(appointmentTypes, shareOpportunityWithRelatedUser);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleNote {\n");
    sb.append("    appointmentTypes: ").append(toIndentedString(appointmentTypes)).append("\n");
    sb.append("    shareOpportunityWithRelatedUser: ").append(toIndentedString(shareOpportunityWithRelatedUser)).append("\n");
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
    
        private ApplicationConfigurationModuleNote instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleNote());
        }
    
        protected Builder(ApplicationConfigurationModuleNote instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleNote.Builder appointmentTypes(String appointmentTypes) {
              this.instance.appointmentTypes = appointmentTypes;
          return this;
        }
            public ApplicationConfigurationModuleNote.Builder shareOpportunityWithRelatedUser(Boolean shareOpportunityWithRelatedUser) {
              this.instance.shareOpportunityWithRelatedUser = shareOpportunityWithRelatedUser;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleNote instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleNote build() {
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
      public static ApplicationConfigurationModuleNote.Builder builder() {
        return new ApplicationConfigurationModuleNote.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleNote.Builder toBuilder() {
        return new ApplicationConfigurationModuleNote.Builder()
          .appointmentTypes(getAppointmentTypes())
          .shareOpportunityWithRelatedUser(getShareOpportunityWithRelatedUser());
      }
}

