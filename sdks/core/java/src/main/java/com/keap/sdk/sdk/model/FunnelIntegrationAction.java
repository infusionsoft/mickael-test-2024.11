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
import com.keap.sdk.sdk.model.FunnelIntegrationSchemaField;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * FunnelIntegrationAction
 */
@JsonPropertyOrder({
  FunnelIntegrationAction.JSON_PROPERTY_BASE_URL,
  FunnelIntegrationAction.JSON_PROPERTY_CONTEXT,
  FunnelIntegrationAction.JSON_PROPERTY_ENABLED,
  FunnelIntegrationAction.JSON_PROPERTY_ICON_URL,
  FunnelIntegrationAction.JSON_PROPERTY_NAME,
  FunnelIntegrationAction.JSON_PROPERTY_SCHEMA_FIELDS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class FunnelIntegrationAction implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BASE_URL = "base_url";
  @jakarta.annotation.Nullable  private String baseUrl;

  public static final String JSON_PROPERTY_CONTEXT = "context";
  @jakarta.annotation.Nullable  private String context;

  public static final String JSON_PROPERTY_ENABLED = "enabled";
  @jakarta.annotation.Nullable  private Boolean enabled;

  public static final String JSON_PROPERTY_ICON_URL = "icon_url";
  @jakarta.annotation.Nullable  private String iconUrl;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_SCHEMA_FIELDS = "schema_fields";
  @jakarta.annotation.Nullable  private List<@Valid FunnelIntegrationSchemaField> schemaFields = new ArrayList<>();

  public FunnelIntegrationAction() { 
  }

  public FunnelIntegrationAction baseUrl(@jakarta.annotation.Nullable String baseUrl) {
    this.baseUrl = baseUrl;
    return this;
  }

  /**
   * The base URL of the trigger, that will be used to call the integration related REST endpoints.
   * @return baseUrl
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The base URL of the trigger, that will be used to call the integration related REST endpoints.")
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


  public FunnelIntegrationAction context(@jakarta.annotation.Nullable String context) {
    this.context = context;
    return this;
  }

  /**
   * The context of the trigger, that will be used internally to identify the integration.
   * @return context
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The context of the trigger, that will be used internally to identify the integration.")
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


  public FunnelIntegrationAction enabled(@jakarta.annotation.Nullable Boolean enabled) {
    this.enabled = enabled;
    return this;
  }

  /**
   * The flag to enable or disable the integration trigger.
   * @return enabled
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The flag to enable or disable the integration trigger.")
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


  public FunnelIntegrationAction iconUrl(@jakarta.annotation.Nullable String iconUrl) {
    this.iconUrl = iconUrl;
    return this;
  }

  /**
   * The icon URL of the trigger, that will be used to display the icon of this specific integration trigger.
   * @return iconUrl
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The icon URL of the trigger, that will be used to display the icon of this specific integration trigger.")
  @JsonProperty(JSON_PROPERTY_ICON_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getIconUrl() {
    return iconUrl;
  }


  @JsonProperty(JSON_PROPERTY_ICON_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIconUrl(@jakarta.annotation.Nullable String iconUrl) {
    this.iconUrl = iconUrl;
  }


  public FunnelIntegrationAction name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * The name of the trigger, that will be used internally to identify and initiate the trigger.
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(example = "My Trigger, MyTrigger, My 1 New Very Exciting Trigger", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The name of the trigger, that will be used internally to identify and initiate the trigger.")
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


  public FunnelIntegrationAction schemaFields(@jakarta.annotation.Nullable List<@Valid FunnelIntegrationSchemaField> schemaFields) {
    this.schemaFields = schemaFields;
    return this;
  }

  public FunnelIntegrationAction addSchemaFieldsItem(FunnelIntegrationSchemaField schemaFieldsItem) {
    if (this.schemaFields == null) {
      this.schemaFields = new ArrayList<>();
    }
    this.schemaFields.add(schemaFieldsItem);
    return this;
  }

  /**
   * The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated.
   * @return schemaFields
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(example = "\"schema_fields\": [                 {                     \"name\": \"my_schema_field\",                     \"type\": \"String\",                     \"label\": \"My Schema Field\"                 },                 {                     \"name\": \"num_sales\",                     \"type\": \"Integer\",                     \"label\": \"Number of Sales\"                 }              ],", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated.")
  @JsonProperty(JSON_PROPERTY_SCHEMA_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid FunnelIntegrationSchemaField> getSchemaFields() {
    return schemaFields;
  }


  @JsonProperty(JSON_PROPERTY_SCHEMA_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSchemaFields(@jakarta.annotation.Nullable List<@Valid FunnelIntegrationSchemaField> schemaFields) {
    this.schemaFields = schemaFields;
  }

  /**
   * Return true if this FunnelIntegrationAction object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FunnelIntegrationAction funnelIntegrationAction = (FunnelIntegrationAction) o;
    return Objects.equals(this.baseUrl, funnelIntegrationAction.baseUrl) &&
        Objects.equals(this.context, funnelIntegrationAction.context) &&
        Objects.equals(this.enabled, funnelIntegrationAction.enabled) &&
        Objects.equals(this.iconUrl, funnelIntegrationAction.iconUrl) &&
        Objects.equals(this.name, funnelIntegrationAction.name) &&
        Objects.equals(this.schemaFields, funnelIntegrationAction.schemaFields);
  }

  @Override
  public int hashCode() {
    return Objects.hash(baseUrl, context, enabled, iconUrl, name, schemaFields);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FunnelIntegrationAction {\n");
    sb.append("    baseUrl: ").append(toIndentedString(baseUrl)).append("\n");
    sb.append("    context: ").append(toIndentedString(context)).append("\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
    sb.append("    iconUrl: ").append(toIndentedString(iconUrl)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    schemaFields: ").append(toIndentedString(schemaFields)).append("\n");
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
    
        private FunnelIntegrationAction instance;
    
        public Builder() {
          this(new FunnelIntegrationAction());
        }
    
        protected Builder(FunnelIntegrationAction instance) {
          this.instance = instance;
        }
    
        public FunnelIntegrationAction.Builder baseUrl(String baseUrl) {
              this.instance.baseUrl = baseUrl;
          return this;
        }
            public FunnelIntegrationAction.Builder context(String context) {
              this.instance.context = context;
          return this;
        }
            public FunnelIntegrationAction.Builder enabled(Boolean enabled) {
              this.instance.enabled = enabled;
          return this;
        }
            public FunnelIntegrationAction.Builder iconUrl(String iconUrl) {
              this.instance.iconUrl = iconUrl;
          return this;
        }
            public FunnelIntegrationAction.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public FunnelIntegrationAction.Builder schemaFields(List<@Valid FunnelIntegrationSchemaField> schemaFields) {
              this.instance.schemaFields = schemaFields;
          return this;
        }
        
    
        /**
        * returns a built FunnelIntegrationAction instance.
        *
        * The builder is not reusable.
        */
        public FunnelIntegrationAction build() {
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
      public static FunnelIntegrationAction.Builder builder() {
        return new FunnelIntegrationAction.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public FunnelIntegrationAction.Builder toBuilder() {
        return new FunnelIntegrationAction.Builder()
          .baseUrl(getBaseUrl())
          .context(getContext())
          .enabled(getEnabled())
          .iconUrl(getIconUrl())
          .name(getName())
          .schemaFields(getSchemaFields());
      }
}

