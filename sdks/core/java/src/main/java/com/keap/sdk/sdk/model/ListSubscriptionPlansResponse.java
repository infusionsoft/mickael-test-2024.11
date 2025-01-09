/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
import com.keap.sdk.sdk.model.RestSubscriptionPlan;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListSubscriptionPlansResponse
 */
@JsonPropertyOrder({
  ListSubscriptionPlansResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  ListSubscriptionPlansResponse.JSON_PROPERTY_SUBSCRIPTIONS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListSubscriptionPlansResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_SUBSCRIPTIONS = "subscriptions";
  @jakarta.annotation.Nullable  private List<@Valid RestSubscriptionPlan> subscriptions = new ArrayList<>();

  public ListSubscriptionPlansResponse() { 
  }

  public ListSubscriptionPlansResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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


  public ListSubscriptionPlansResponse subscriptions(@jakarta.annotation.Nullable List<@Valid RestSubscriptionPlan> subscriptions) {
    this.subscriptions = subscriptions;
    return this;
  }

  public ListSubscriptionPlansResponse addSubscriptionsItem(RestSubscriptionPlan subscriptionsItem) {
    if (this.subscriptions == null) {
      this.subscriptions = new ArrayList<>();
    }
    this.subscriptions.add(subscriptionsItem);
    return this;
  }

  /**
   * Get subscriptions
   * @return subscriptions
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBSCRIPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid RestSubscriptionPlan> getSubscriptions() {
    return subscriptions;
  }


  @JsonProperty(JSON_PROPERTY_SUBSCRIPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubscriptions(@jakarta.annotation.Nullable List<@Valid RestSubscriptionPlan> subscriptions) {
    this.subscriptions = subscriptions;
  }

  /**
   * Return true if this ListSubscriptionPlansResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListSubscriptionPlansResponse listSubscriptionPlansResponse = (ListSubscriptionPlansResponse) o;
    return Objects.equals(this.nextPageToken, listSubscriptionPlansResponse.nextPageToken) &&
        Objects.equals(this.subscriptions, listSubscriptionPlansResponse.subscriptions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, subscriptions);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListSubscriptionPlansResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    subscriptions: ").append(toIndentedString(subscriptions)).append("\n");
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
    
        private ListSubscriptionPlansResponse instance;
    
        public Builder() {
          this(new ListSubscriptionPlansResponse());
        }
    
        protected Builder(ListSubscriptionPlansResponse instance) {
          this.instance = instance;
        }
    
        public ListSubscriptionPlansResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public ListSubscriptionPlansResponse.Builder subscriptions(List<@Valid RestSubscriptionPlan> subscriptions) {
              this.instance.subscriptions = subscriptions;
          return this;
        }
        
    
        /**
        * returns a built ListSubscriptionPlansResponse instance.
        *
        * The builder is not reusable.
        */
        public ListSubscriptionPlansResponse build() {
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
      public static ListSubscriptionPlansResponse.Builder builder() {
        return new ListSubscriptionPlansResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListSubscriptionPlansResponse.Builder toBuilder() {
        return new ListSubscriptionPlansResponse.Builder()
          .nextPageToken(getNextPageToken())
          .subscriptions(getSubscriptions());
      }
}

