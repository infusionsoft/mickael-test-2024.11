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
import com.keap.sdk.sdk.model.Campaign;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListCampaignsResponse
 */
@JsonPropertyOrder({
  ListCampaignsResponse.JSON_PROPERTY_CAMPAIGNS,
  ListCampaignsResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListCampaignsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CAMPAIGNS = "campaigns";
  @jakarta.annotation.Nullable  private List<@Valid Campaign> campaigns = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListCampaignsResponse() { 
  }

  public ListCampaignsResponse campaigns(@jakarta.annotation.Nullable List<@Valid Campaign> campaigns) {
    this.campaigns = campaigns;
    return this;
  }

  public ListCampaignsResponse addCampaignsItem(Campaign campaignsItem) {
    if (this.campaigns == null) {
      this.campaigns = new ArrayList<>();
    }
    this.campaigns.add(campaignsItem);
    return this;
  }

  /**
   * Get campaigns
   * @return campaigns
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CAMPAIGNS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid Campaign> getCampaigns() {
    return campaigns;
  }


  @JsonProperty(JSON_PROPERTY_CAMPAIGNS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCampaigns(@jakarta.annotation.Nullable List<@Valid Campaign> campaigns) {
    this.campaigns = campaigns;
  }


  public ListCampaignsResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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
   * Return true if this ListCampaignsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListCampaignsResponse listCampaignsResponse = (ListCampaignsResponse) o;
    return Objects.equals(this.campaigns, listCampaignsResponse.campaigns) &&
        Objects.equals(this.nextPageToken, listCampaignsResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(campaigns, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListCampaignsResponse {\n");
    sb.append("    campaigns: ").append(toIndentedString(campaigns)).append("\n");
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
    
        private ListCampaignsResponse instance;
    
        public Builder() {
          this(new ListCampaignsResponse());
        }
    
        protected Builder(ListCampaignsResponse instance) {
          this.instance = instance;
        }
    
        public ListCampaignsResponse.Builder campaigns(List<@Valid Campaign> campaigns) {
              this.instance.campaigns = campaigns;
          return this;
        }
            public ListCampaignsResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListCampaignsResponse instance.
        *
        * The builder is not reusable.
        */
        public ListCampaignsResponse build() {
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
      public static ListCampaignsResponse.Builder builder() {
        return new ListCampaignsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListCampaignsResponse.Builder toBuilder() {
        return new ListCampaignsResponse.Builder()
          .campaigns(getCampaigns())
          .nextPageToken(getNextPageToken());
      }
}

