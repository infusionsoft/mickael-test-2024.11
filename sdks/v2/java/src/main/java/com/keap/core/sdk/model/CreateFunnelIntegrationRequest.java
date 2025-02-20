/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
import com.keap.core.sdk.model.FunnelIntegrationAction;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateFunnelIntegrationRequest
 */
@JsonPropertyOrder({
  CreateFunnelIntegrationRequest.JSON_PROPERTY_BASE_URL,
  CreateFunnelIntegrationRequest.JSON_PROPERTY_CONTEXT,
  CreateFunnelIntegrationRequest.JSON_PROPERTY_ENABLED,
  CreateFunnelIntegrationRequest.JSON_PROPERTY_FUNNEL_INTEGRATION_ACTIONS,
  CreateFunnelIntegrationRequest.JSON_PROPERTY_FUNNEL_INTEGRATION_TRIGGERS,
  CreateFunnelIntegrationRequest.JSON_PROPERTY_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateFunnelIntegrationRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BASE_URL = "base_url";
  @jakarta.annotation.Nullable  private String baseUrl;

  public static final String JSON_PROPERTY_CONTEXT = "context";
  @jakarta.annotation.Nullable  private String context;

  public static final String JSON_PROPERTY_ENABLED = "enabled";
  @jakarta.annotation.Nullable  private Boolean enabled;

  public static final String JSON_PROPERTY_FUNNEL_INTEGRATION_ACTIONS = "funnel_integration_actions";
  @jakarta.annotation.Nullable  private List<@Valid FunnelIntegrationAction> funnelIntegrationActions = new ArrayList<>();

  public static final String JSON_PROPERTY_FUNNEL_INTEGRATION_TRIGGERS = "funnel_integration_triggers";
  @jakarta.annotation.Nullable  private List<@Valid FunnelIntegrationAction> funnelIntegrationTriggers = new ArrayList<>();

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public CreateFunnelIntegrationRequest() { 
  }

  public CreateFunnelIntegrationRequest baseUrl(@jakarta.annotation.Nullable String baseUrl) {
    this.baseUrl = baseUrl;
    return this;
  }

  /**
   * The base URL of the integration, that will be used to call the integration related REST endpoints.
   * @return baseUrl
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The base URL of the integration, that will be used to call the integration related REST endpoints.")
  @JsonProperty(JSON_PROPERTY_BASE_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getBaseUrl() {
    return baseUrl;
  }


  @JsonProperty(JSON_PROPERTY_BASE_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBaseUrl(@jakarta.annotation.Nullable String baseUrl) {
    this.baseUrl = baseUrl;
  }


  public CreateFunnelIntegrationRequest context(@jakarta.annotation.Nullable String context) {
    this.context = context;
    return this;
  }

  /**
   * The context of the integration, that will be used internally to identify the integration.
   * @return context
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The context of the integration, that will be used internally to identify the integration.")
  @JsonProperty(JSON_PROPERTY_CONTEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContext() {
    return context;
  }


  @JsonProperty(JSON_PROPERTY_CONTEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContext(@jakarta.annotation.Nullable String context) {
    this.context = context;
  }


  public CreateFunnelIntegrationRequest enabled(@jakarta.annotation.Nullable Boolean enabled) {
    this.enabled = enabled;
    return this;
  }

  /**
   * The flag to enable or disable the integration.
   * @return enabled
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The flag to enable or disable the integration.")
  @JsonProperty(JSON_PROPERTY_ENABLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getEnabled() {
    return enabled;
  }


  @JsonProperty(JSON_PROPERTY_ENABLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnabled(@jakarta.annotation.Nullable Boolean enabled) {
    this.enabled = enabled;
  }


  public CreateFunnelIntegrationRequest funnelIntegrationActions(@jakarta.annotation.Nullable List<@Valid FunnelIntegrationAction> funnelIntegrationActions) {
    this.funnelIntegrationActions = funnelIntegrationActions;
    return this;
  }

  public CreateFunnelIntegrationRequest addFunnelIntegrationActionsItem(FunnelIntegrationAction funnelIntegrationActionsItem) {
    if (this.funnelIntegrationActions == null) {
      this.funnelIntegrationActions = new ArrayList<>();
    }
    this.funnelIntegrationActions.add(funnelIntegrationActionsItem);
    return this;
  }

  /**
   * The list of actions that will be installed with the integration.
   * @return funnelIntegrationActions
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The list of actions that will be installed with the integration.")
  @JsonProperty(JSON_PROPERTY_FUNNEL_INTEGRATION_ACTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid FunnelIntegrationAction> getFunnelIntegrationActions() {
    return funnelIntegrationActions;
  }


  @JsonProperty(JSON_PROPERTY_FUNNEL_INTEGRATION_ACTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFunnelIntegrationActions(@jakarta.annotation.Nullable List<@Valid FunnelIntegrationAction> funnelIntegrationActions) {
    this.funnelIntegrationActions = funnelIntegrationActions;
  }


  public CreateFunnelIntegrationRequest funnelIntegrationTriggers(@jakarta.annotation.Nullable List<@Valid FunnelIntegrationAction> funnelIntegrationTriggers) {
    this.funnelIntegrationTriggers = funnelIntegrationTriggers;
    return this;
  }

  public CreateFunnelIntegrationRequest addFunnelIntegrationTriggersItem(FunnelIntegrationAction funnelIntegrationTriggersItem) {
    if (this.funnelIntegrationTriggers == null) {
      this.funnelIntegrationTriggers = new ArrayList<>();
    }
    this.funnelIntegrationTriggers.add(funnelIntegrationTriggersItem);
    return this;
  }

  /**
   * The list of triggers that will be installed with the integration.
   * @return funnelIntegrationTriggers
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The list of triggers that will be installed with the integration.")
  @JsonProperty(JSON_PROPERTY_FUNNEL_INTEGRATION_TRIGGERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid FunnelIntegrationAction> getFunnelIntegrationTriggers() {
    return funnelIntegrationTriggers;
  }


  @JsonProperty(JSON_PROPERTY_FUNNEL_INTEGRATION_TRIGGERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFunnelIntegrationTriggers(@jakarta.annotation.Nullable List<@Valid FunnelIntegrationAction> funnelIntegrationTriggers) {
    this.funnelIntegrationTriggers = funnelIntegrationTriggers;
  }


  public CreateFunnelIntegrationRequest name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * The name of the integration, that will be used internally to identify the integration.
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(example = "My Integration, MyIntegration, My 1 New Very Exciting Integration", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The name of the integration, that will be used internally to identify the integration.")
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

  /**
   * Return true if this CreateFunnelIntegrationRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateFunnelIntegrationRequest createFunnelIntegrationRequest = (CreateFunnelIntegrationRequest) o;
    return Objects.equals(this.baseUrl, createFunnelIntegrationRequest.baseUrl) &&
        Objects.equals(this.context, createFunnelIntegrationRequest.context) &&
        Objects.equals(this.enabled, createFunnelIntegrationRequest.enabled) &&
        Objects.equals(this.funnelIntegrationActions, createFunnelIntegrationRequest.funnelIntegrationActions) &&
        Objects.equals(this.funnelIntegrationTriggers, createFunnelIntegrationRequest.funnelIntegrationTriggers) &&
        Objects.equals(this.name, createFunnelIntegrationRequest.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(baseUrl, context, enabled, funnelIntegrationActions, funnelIntegrationTriggers, name);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateFunnelIntegrationRequest {\n");
    sb.append("    baseUrl: ").append(toIndentedString(baseUrl)).append("\n");
    sb.append("    context: ").append(toIndentedString(context)).append("\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
    sb.append("    funnelIntegrationActions: ").append(toIndentedString(funnelIntegrationActions)).append("\n");
    sb.append("    funnelIntegrationTriggers: ").append(toIndentedString(funnelIntegrationTriggers)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
    
        private CreateFunnelIntegrationRequest instance;
    
        public Builder() {
          this(new CreateFunnelIntegrationRequest());
        }
    
        protected Builder(CreateFunnelIntegrationRequest instance) {
          this.instance = instance;
        }
    
        public CreateFunnelIntegrationRequest.Builder baseUrl(String baseUrl) {
              this.instance.baseUrl = baseUrl;
          return this;
        }
            public CreateFunnelIntegrationRequest.Builder context(String context) {
              this.instance.context = context;
          return this;
        }
            public CreateFunnelIntegrationRequest.Builder enabled(Boolean enabled) {
              this.instance.enabled = enabled;
          return this;
        }
            public CreateFunnelIntegrationRequest.Builder funnelIntegrationActions(List<@Valid FunnelIntegrationAction> funnelIntegrationActions) {
              this.instance.funnelIntegrationActions = funnelIntegrationActions;
          return this;
        }
            public CreateFunnelIntegrationRequest.Builder funnelIntegrationTriggers(List<@Valid FunnelIntegrationAction> funnelIntegrationTriggers) {
              this.instance.funnelIntegrationTriggers = funnelIntegrationTriggers;
          return this;
        }
            public CreateFunnelIntegrationRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
        
    
        /**
        * returns a built CreateFunnelIntegrationRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateFunnelIntegrationRequest build() {
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
      public static CreateFunnelIntegrationRequest.Builder builder() {
        return new CreateFunnelIntegrationRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateFunnelIntegrationRequest.Builder toBuilder() {
        return new CreateFunnelIntegrationRequest.Builder()
          .baseUrl(getBaseUrl())
          .context(getContext())
          .enabled(getEnabled())
          .funnelIntegrationActions(getFunnelIntegrationActions())
          .funnelIntegrationTriggers(getFunnelIntegrationTriggers())
          .name(getName());
      }
}

