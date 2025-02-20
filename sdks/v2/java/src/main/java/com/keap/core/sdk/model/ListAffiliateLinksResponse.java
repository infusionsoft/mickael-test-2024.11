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
import com.keap.core.sdk.model.AffiliateLink;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListAffiliateLinksResponse
 */
@JsonPropertyOrder({
  ListAffiliateLinksResponse.JSON_PROPERTY_AFFILIATE_LINKS,
  ListAffiliateLinksResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListAffiliateLinksResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFFILIATE_LINKS = "affiliate_links";
  @jakarta.annotation.Nullable  private List<@Valid AffiliateLink> affiliateLinks = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListAffiliateLinksResponse() { 
  }

  public ListAffiliateLinksResponse affiliateLinks(@jakarta.annotation.Nullable List<@Valid AffiliateLink> affiliateLinks) {
    this.affiliateLinks = affiliateLinks;
    return this;
  }

  public ListAffiliateLinksResponse addAffiliateLinksItem(AffiliateLink affiliateLinksItem) {
    if (this.affiliateLinks == null) {
      this.affiliateLinks = new ArrayList<>();
    }
    this.affiliateLinks.add(affiliateLinksItem);
    return this;
  }

  /**
   * Get affiliateLinks
   * @return affiliateLinks
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AFFILIATE_LINKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid AffiliateLink> getAffiliateLinks() {
    return affiliateLinks;
  }


  @JsonProperty(JSON_PROPERTY_AFFILIATE_LINKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAffiliateLinks(@jakarta.annotation.Nullable List<@Valid AffiliateLink> affiliateLinks) {
    this.affiliateLinks = affiliateLinks;
  }


  public ListAffiliateLinksResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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
   * Return true if this ListAffiliateLinksResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListAffiliateLinksResponse listAffiliateLinksResponse = (ListAffiliateLinksResponse) o;
    return Objects.equals(this.affiliateLinks, listAffiliateLinksResponse.affiliateLinks) &&
        Objects.equals(this.nextPageToken, listAffiliateLinksResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affiliateLinks, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListAffiliateLinksResponse {\n");
    sb.append("    affiliateLinks: ").append(toIndentedString(affiliateLinks)).append("\n");
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
    
        private ListAffiliateLinksResponse instance;
    
        public Builder() {
          this(new ListAffiliateLinksResponse());
        }
    
        protected Builder(ListAffiliateLinksResponse instance) {
          this.instance = instance;
        }
    
        public ListAffiliateLinksResponse.Builder affiliateLinks(List<@Valid AffiliateLink> affiliateLinks) {
              this.instance.affiliateLinks = affiliateLinks;
          return this;
        }
            public ListAffiliateLinksResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListAffiliateLinksResponse instance.
        *
        * The builder is not reusable.
        */
        public ListAffiliateLinksResponse build() {
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
      public static ListAffiliateLinksResponse.Builder builder() {
        return new ListAffiliateLinksResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListAffiliateLinksResponse.Builder toBuilder() {
        return new ListAffiliateLinksResponse.Builder()
          .affiliateLinks(getAffiliateLinks())
          .nextPageToken(getNextPageToken());
      }
}

