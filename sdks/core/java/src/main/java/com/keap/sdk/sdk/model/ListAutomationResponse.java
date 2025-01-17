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
import com.keap.sdk.sdk.model.Automation;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListAutomationResponse
 */
@JsonPropertyOrder({
  ListAutomationResponse.JSON_PROPERTY_AUTOMATION_COUNT,
  ListAutomationResponse.JSON_PROPERTY_AUTOMATIONS,
  ListAutomationResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListAutomationResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AUTOMATION_COUNT = "automation_count";
  @jakarta.annotation.Nullable  private Integer automationCount;

  public static final String JSON_PROPERTY_AUTOMATIONS = "automations";
  @jakarta.annotation.Nullable  private List<@Valid Automation> automations = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListAutomationResponse() { 
  }

  public ListAutomationResponse automationCount(@jakarta.annotation.Nullable Integer automationCount) {
    this.automationCount = automationCount;
    return this;
  }

  /**
   * Get automationCount
   * @return automationCount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AUTOMATION_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getAutomationCount() {
    return automationCount;
  }


  @JsonProperty(JSON_PROPERTY_AUTOMATION_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAutomationCount(@jakarta.annotation.Nullable Integer automationCount) {
    this.automationCount = automationCount;
  }


  public ListAutomationResponse automations(@jakarta.annotation.Nullable List<@Valid Automation> automations) {
    this.automations = automations;
    return this;
  }

  public ListAutomationResponse addAutomationsItem(Automation automationsItem) {
    if (this.automations == null) {
      this.automations = new ArrayList<>();
    }
    this.automations.add(automationsItem);
    return this;
  }

  /**
   * Get automations
   * @return automations
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AUTOMATIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Automation> getAutomations() {
    return automations;
  }


  @JsonProperty(JSON_PROPERTY_AUTOMATIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAutomations(@jakarta.annotation.Nullable List<@Valid Automation> automations) {
    this.automations = automations;
  }


  public ListAutomationResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Get nextPageToken
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextPageToken() {
    return nextPageToken;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
  }

  /**
   * Return true if this ListAutomationResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListAutomationResponse listAutomationResponse = (ListAutomationResponse) o;
    return Objects.equals(this.automationCount, listAutomationResponse.automationCount) &&
        Objects.equals(this.automations, listAutomationResponse.automations) &&
        Objects.equals(this.nextPageToken, listAutomationResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(automationCount, automations, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListAutomationResponse {\n");
    sb.append("    automationCount: ").append(toIndentedString(automationCount)).append("\n");
    sb.append("    automations: ").append(toIndentedString(automations)).append("\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
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
    
        private ListAutomationResponse instance;
    
        public Builder() {
          this(new ListAutomationResponse());
        }
    
        protected Builder(ListAutomationResponse instance) {
          this.instance = instance;
        }
    
        public ListAutomationResponse.Builder automationCount(Integer automationCount) {
              this.instance.automationCount = automationCount;
          return this;
        }
            public ListAutomationResponse.Builder automations(List<@Valid Automation> automations) {
              this.instance.automations = automations;
          return this;
        }
            public ListAutomationResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListAutomationResponse instance.
        *
        * The builder is not reusable.
        */
        public ListAutomationResponse build() {
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
      public static ListAutomationResponse.Builder builder() {
        return new ListAutomationResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListAutomationResponse.Builder toBuilder() {
        return new ListAutomationResponse.Builder()
          .automationCount(getAutomationCount())
          .automations(getAutomations())
          .nextPageToken(getNextPageToken());
      }
}

