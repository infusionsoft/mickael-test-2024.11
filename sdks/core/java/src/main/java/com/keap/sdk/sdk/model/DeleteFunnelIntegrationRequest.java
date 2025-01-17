/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * DeleteFunnelIntegrationRequest
 */
@JsonPropertyOrder({
  DeleteFunnelIntegrationRequest.JSON_PROPERTY_ACTION_NAMES,
  DeleteFunnelIntegrationRequest.JSON_PROPERTY_INTEGRATION_NAMES,
  DeleteFunnelIntegrationRequest.JSON_PROPERTY_TRIGGER_NAMES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class DeleteFunnelIntegrationRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ACTION_NAMES = "action_names";
  @jakarta.annotation.Nullable  private List<String> actionNames = new ArrayList<>();

  public static final String JSON_PROPERTY_INTEGRATION_NAMES = "integration_names";
  @jakarta.annotation.Nullable  private List<String> integrationNames = new ArrayList<>();

  public static final String JSON_PROPERTY_TRIGGER_NAMES = "trigger_names";
  @jakarta.annotation.Nullable  private List<String> triggerNames = new ArrayList<>();

  public DeleteFunnelIntegrationRequest() { 
  }

  public DeleteFunnelIntegrationRequest actionNames(@jakarta.annotation.Nullable List<String> actionNames) {
    this.actionNames = actionNames;
    return this;
  }

  public DeleteFunnelIntegrationRequest addActionNamesItem(String actionNamesItem) {
    if (this.actionNames == null) {
      this.actionNames = new ArrayList<>();
    }
    this.actionNames.add(actionNamesItem);
    return this;
  }

  /**
   * The name of the actions, that will be looked for and uninstalled.
   * @return actionNames
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The name of the actions, that will be looked for and uninstalled.")
  @JsonProperty(JSON_PROPERTY_ACTION_NAMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getActionNames() {
    return actionNames;
  }


  @JsonProperty(JSON_PROPERTY_ACTION_NAMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActionNames(@jakarta.annotation.Nullable List<String> actionNames) {
    this.actionNames = actionNames;
  }


  public DeleteFunnelIntegrationRequest integrationNames(@jakarta.annotation.Nullable List<String> integrationNames) {
    this.integrationNames = integrationNames;
    return this;
  }

  public DeleteFunnelIntegrationRequest addIntegrationNamesItem(String integrationNamesItem) {
    if (this.integrationNames == null) {
      this.integrationNames = new ArrayList<>();
    }
    this.integrationNames.add(integrationNamesItem);
    return this;
  }

  /**
   * The name of the integrations, that will be looked for and uninstalled. This will uninstall all triggers and actions related to this automation.
   * @return integrationNames
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The name of the integrations, that will be looked for and uninstalled. This will uninstall all triggers and actions related to this automation.")
  @JsonProperty(JSON_PROPERTY_INTEGRATION_NAMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getIntegrationNames() {
    return integrationNames;
  }


  @JsonProperty(JSON_PROPERTY_INTEGRATION_NAMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIntegrationNames(@jakarta.annotation.Nullable List<String> integrationNames) {
    this.integrationNames = integrationNames;
  }


  public DeleteFunnelIntegrationRequest triggerNames(@jakarta.annotation.Nullable List<String> triggerNames) {
    this.triggerNames = triggerNames;
    return this;
  }

  public DeleteFunnelIntegrationRequest addTriggerNamesItem(String triggerNamesItem) {
    if (this.triggerNames == null) {
      this.triggerNames = new ArrayList<>();
    }
    this.triggerNames.add(triggerNamesItem);
    return this;
  }

  /**
   * The name of the triggers, that will be looked for and uninstalled.
   * @return triggerNames
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The name of the triggers, that will be looked for and uninstalled.")
  @JsonProperty(JSON_PROPERTY_TRIGGER_NAMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getTriggerNames() {
    return triggerNames;
  }


  @JsonProperty(JSON_PROPERTY_TRIGGER_NAMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTriggerNames(@jakarta.annotation.Nullable List<String> triggerNames) {
    this.triggerNames = triggerNames;
  }

  /**
   * Return true if this DeleteFunnelIntegrationRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DeleteFunnelIntegrationRequest deleteFunnelIntegrationRequest = (DeleteFunnelIntegrationRequest) o;
    return Objects.equals(this.actionNames, deleteFunnelIntegrationRequest.actionNames) &&
        Objects.equals(this.integrationNames, deleteFunnelIntegrationRequest.integrationNames) &&
        Objects.equals(this.triggerNames, deleteFunnelIntegrationRequest.triggerNames);
  }

  @Override
  public int hashCode() {
    return Objects.hash(actionNames, integrationNames, triggerNames);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DeleteFunnelIntegrationRequest {\n");
    sb.append("    actionNames: ").append(toIndentedString(actionNames)).append("\n");
    sb.append("    integrationNames: ").append(toIndentedString(integrationNames)).append("\n");
    sb.append("    triggerNames: ").append(toIndentedString(triggerNames)).append("\n");
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
    
        private DeleteFunnelIntegrationRequest instance;
    
        public Builder() {
          this(new DeleteFunnelIntegrationRequest());
        }
    
        protected Builder(DeleteFunnelIntegrationRequest instance) {
          this.instance = instance;
        }
    
        public DeleteFunnelIntegrationRequest.Builder actionNames(List<String> actionNames) {
              this.instance.actionNames = actionNames;
          return this;
        }
            public DeleteFunnelIntegrationRequest.Builder integrationNames(List<String> integrationNames) {
              this.instance.integrationNames = integrationNames;
          return this;
        }
            public DeleteFunnelIntegrationRequest.Builder triggerNames(List<String> triggerNames) {
              this.instance.triggerNames = triggerNames;
          return this;
        }
        
    
        /**
        * returns a built DeleteFunnelIntegrationRequest instance.
        *
        * The builder is not reusable.
        */
        public DeleteFunnelIntegrationRequest build() {
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
      public static DeleteFunnelIntegrationRequest.Builder builder() {
        return new DeleteFunnelIntegrationRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public DeleteFunnelIntegrationRequest.Builder toBuilder() {
        return new DeleteFunnelIntegrationRequest.Builder()
          .actionNames(getActionNames())
          .integrationNames(getIntegrationNames())
          .triggerNames(getTriggerNames());
      }
}

