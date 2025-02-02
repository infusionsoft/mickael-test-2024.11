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
import com.keap.sdk.sdk.model.FunnelIntegrationTriggerEventDTO;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateFunnelIntegrationTriggerEvents
 */
@JsonPropertyOrder({
  CreateFunnelIntegrationTriggerEvents.JSON_PROPERTY_FUNNEL_INTEGRATION_TRIGGER_EVENTS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateFunnelIntegrationTriggerEvents implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FUNNEL_INTEGRATION_TRIGGER_EVENTS = "funnel_integration_trigger_events";
  @jakarta.annotation.Nullable  private List<@Valid FunnelIntegrationTriggerEventDTO> funnelIntegrationTriggerEvents = new ArrayList<>();

  public CreateFunnelIntegrationTriggerEvents() { 
  }

  public CreateFunnelIntegrationTriggerEvents funnelIntegrationTriggerEvents(@jakarta.annotation.Nullable List<@Valid FunnelIntegrationTriggerEventDTO> funnelIntegrationTriggerEvents) {
    this.funnelIntegrationTriggerEvents = funnelIntegrationTriggerEvents;
    return this;
  }

  public CreateFunnelIntegrationTriggerEvents addFunnelIntegrationTriggerEventsItem(FunnelIntegrationTriggerEventDTO funnelIntegrationTriggerEventsItem) {
    if (this.funnelIntegrationTriggerEvents == null) {
      this.funnelIntegrationTriggerEvents = new ArrayList<>();
    }
    this.funnelIntegrationTriggerEvents.add(funnelIntegrationTriggerEventsItem);
    return this;
  }

  /**
   * A list of trigger events to be created.
   * @return funnelIntegrationTriggerEvents
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "A list of trigger events to be created.")
  @JsonProperty(JSON_PROPERTY_FUNNEL_INTEGRATION_TRIGGER_EVENTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid FunnelIntegrationTriggerEventDTO> getFunnelIntegrationTriggerEvents() {
    return funnelIntegrationTriggerEvents;
  }


  @JsonProperty(JSON_PROPERTY_FUNNEL_INTEGRATION_TRIGGER_EVENTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFunnelIntegrationTriggerEvents(@jakarta.annotation.Nullable List<@Valid FunnelIntegrationTriggerEventDTO> funnelIntegrationTriggerEvents) {
    this.funnelIntegrationTriggerEvents = funnelIntegrationTriggerEvents;
  }

  /**
   * Return true if this CreateFunnelIntegrationTriggerEvents object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents = (CreateFunnelIntegrationTriggerEvents) o;
    return Objects.equals(this.funnelIntegrationTriggerEvents, createFunnelIntegrationTriggerEvents.funnelIntegrationTriggerEvents);
  }

  @Override
  public int hashCode() {
    return Objects.hash(funnelIntegrationTriggerEvents);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateFunnelIntegrationTriggerEvents {\n");
    sb.append("    funnelIntegrationTriggerEvents: ").append(toIndentedString(funnelIntegrationTriggerEvents)).append("\n");
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
    
        private CreateFunnelIntegrationTriggerEvents instance;
    
        public Builder() {
          this(new CreateFunnelIntegrationTriggerEvents());
        }
    
        protected Builder(CreateFunnelIntegrationTriggerEvents instance) {
          this.instance = instance;
        }
    
        public CreateFunnelIntegrationTriggerEvents.Builder funnelIntegrationTriggerEvents(List<@Valid FunnelIntegrationTriggerEventDTO> funnelIntegrationTriggerEvents) {
              this.instance.funnelIntegrationTriggerEvents = funnelIntegrationTriggerEvents;
          return this;
        }
        
    
        /**
        * returns a built CreateFunnelIntegrationTriggerEvents instance.
        *
        * The builder is not reusable.
        */
        public CreateFunnelIntegrationTriggerEvents build() {
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
      public static CreateFunnelIntegrationTriggerEvents.Builder builder() {
        return new CreateFunnelIntegrationTriggerEvents.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateFunnelIntegrationTriggerEvents.Builder toBuilder() {
        return new CreateFunnelIntegrationTriggerEvents.Builder()
          .funnelIntegrationTriggerEvents(getFunnelIntegrationTriggerEvents());
      }
}

