/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleOpportunityStatesActive;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleOpportunityStatesLoss;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleOpportunityStatesWin;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ApplicationConfigurationModuleOpportunityStates
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleOpportunityStates.JSON_PROPERTY_ACTIVE,
  ApplicationConfigurationModuleOpportunityStates.JSON_PROPERTY_LOSS,
  ApplicationConfigurationModuleOpportunityStates.JSON_PROPERTY_WIN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleOpportunityStates implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTIVE = "active";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleOpportunityStatesActive active;

  public static final String JSON_PROPERTY_LOSS = "loss";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleOpportunityStatesLoss loss;

  public static final String JSON_PROPERTY_WIN = "win";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleOpportunityStatesWin win;

  public ApplicationConfigurationModuleOpportunityStates() { 
  }

  public ApplicationConfigurationModuleOpportunityStates active(@jakarta.annotation.Nullable ApplicationConfigurationModuleOpportunityStatesActive active) {
    this.active = active;
    return this;
  }

  /**
   * Get active
   * @return active
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleOpportunityStatesActive getActive() {
    return active;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActive(@jakarta.annotation.Nullable ApplicationConfigurationModuleOpportunityStatesActive active) {
    this.active = active;
  }


  public ApplicationConfigurationModuleOpportunityStates loss(@jakarta.annotation.Nullable ApplicationConfigurationModuleOpportunityStatesLoss loss) {
    this.loss = loss;
    return this;
  }

  /**
   * Get loss
   * @return loss
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LOSS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleOpportunityStatesLoss getLoss() {
    return loss;
  }


  @JsonProperty(JSON_PROPERTY_LOSS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLoss(@jakarta.annotation.Nullable ApplicationConfigurationModuleOpportunityStatesLoss loss) {
    this.loss = loss;
  }


  public ApplicationConfigurationModuleOpportunityStates win(@jakarta.annotation.Nullable ApplicationConfigurationModuleOpportunityStatesWin win) {
    this.win = win;
    return this;
  }

  /**
   * Get win
   * @return win
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_WIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleOpportunityStatesWin getWin() {
    return win;
  }


  @JsonProperty(JSON_PROPERTY_WIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWin(@jakarta.annotation.Nullable ApplicationConfigurationModuleOpportunityStatesWin win) {
    this.win = win;
  }

  /**
   * Return true if this ApplicationConfigurationModuleOpportunityStates object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleOpportunityStates applicationConfigurationModuleOpportunityStates = (ApplicationConfigurationModuleOpportunityStates) o;
    return Objects.equals(this.active, applicationConfigurationModuleOpportunityStates.active) &&
        Objects.equals(this.loss, applicationConfigurationModuleOpportunityStates.loss) &&
        Objects.equals(this.win, applicationConfigurationModuleOpportunityStates.win);
  }

  @Override
  public int hashCode() {
    return Objects.hash(active, loss, win);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleOpportunityStates {\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
    sb.append("    loss: ").append(toIndentedString(loss)).append("\n");
    sb.append("    win: ").append(toIndentedString(win)).append("\n");
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
    
        private ApplicationConfigurationModuleOpportunityStates instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleOpportunityStates());
        }
    
        protected Builder(ApplicationConfigurationModuleOpportunityStates instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleOpportunityStates.Builder active(ApplicationConfigurationModuleOpportunityStatesActive active) {
              this.instance.active = active;
          return this;
        }
            public ApplicationConfigurationModuleOpportunityStates.Builder loss(ApplicationConfigurationModuleOpportunityStatesLoss loss) {
              this.instance.loss = loss;
          return this;
        }
            public ApplicationConfigurationModuleOpportunityStates.Builder win(ApplicationConfigurationModuleOpportunityStatesWin win) {
              this.instance.win = win;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleOpportunityStates instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleOpportunityStates build() {
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
      public static ApplicationConfigurationModuleOpportunityStates.Builder builder() {
        return new ApplicationConfigurationModuleOpportunityStates.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleOpportunityStates.Builder toBuilder() {
        return new ApplicationConfigurationModuleOpportunityStates.Builder()
          .active(getActive())
          .loss(getLoss())
          .win(getWin());
      }
}

