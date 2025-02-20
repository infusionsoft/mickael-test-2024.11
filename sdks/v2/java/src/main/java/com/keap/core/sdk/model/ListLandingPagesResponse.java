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
import com.keap.core.sdk.model.LandingPage;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListLandingPagesResponse
 */
@JsonPropertyOrder({
  ListLandingPagesResponse.JSON_PROPERTY_LANDINGPAGES,
  ListLandingPagesResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  ListLandingPagesResponse.JSON_PROPERTY_PAGE_SIZE,
  ListLandingPagesResponse.JSON_PROPERTY_PAGES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListLandingPagesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_LANDINGPAGES = "landingpages";
  @jakarta.annotation.Nullable  private List<@Valid LandingPage> landingpages = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_PAGE_SIZE = "page_size";
  @jakarta.annotation.Nullable  private String pageSize;

  public static final String JSON_PROPERTY_PAGES = "pages";
  @jakarta.annotation.Nullable  private String pages;

  public ListLandingPagesResponse() { 
  }

  public ListLandingPagesResponse landingpages(@jakarta.annotation.Nullable List<@Valid LandingPage> landingpages) {
    this.landingpages = landingpages;
    return this;
  }

  public ListLandingPagesResponse addLandingpagesItem(LandingPage landingpagesItem) {
    if (this.landingpages == null) {
      this.landingpages = new ArrayList<>();
    }
    this.landingpages.add(landingpagesItem);
    return this;
  }

  /**
   * Get landingpages
   * @return landingpages
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LANDINGPAGES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid LandingPage> getLandingpages() {
    return landingpages;
  }


  @JsonProperty(JSON_PROPERTY_LANDINGPAGES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLandingpages(@jakarta.annotation.Nullable List<@Valid LandingPage> landingpages) {
    this.landingpages = landingpages;
  }


  public ListLandingPagesResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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


  public ListLandingPagesResponse pageSize(@jakarta.annotation.Nullable String pageSize) {
    this.pageSize = pageSize;
    return this;
  }

  /**
   * Get pageSize
   * @return pageSize
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAGE_SIZE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPageSize() {
    return pageSize;
  }


  @JsonProperty(JSON_PROPERTY_PAGE_SIZE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPageSize(@jakarta.annotation.Nullable String pageSize) {
    this.pageSize = pageSize;
  }


  public ListLandingPagesResponse pages(@jakarta.annotation.Nullable String pages) {
    this.pages = pages;
    return this;
  }

  /**
   * Get pages
   * @return pages
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PAGES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPages() {
    return pages;
  }


  @JsonProperty(JSON_PROPERTY_PAGES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPages(@jakarta.annotation.Nullable String pages) {
    this.pages = pages;
  }

  /**
   * Return true if this ListLandingPagesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListLandingPagesResponse listLandingPagesResponse = (ListLandingPagesResponse) o;
    return Objects.equals(this.landingpages, listLandingPagesResponse.landingpages) &&
        Objects.equals(this.nextPageToken, listLandingPagesResponse.nextPageToken) &&
        Objects.equals(this.pageSize, listLandingPagesResponse.pageSize) &&
        Objects.equals(this.pages, listLandingPagesResponse.pages);
  }

  @Override
  public int hashCode() {
    return Objects.hash(landingpages, nextPageToken, pageSize, pages);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListLandingPagesResponse {\n");
    sb.append("    landingpages: ").append(toIndentedString(landingpages)).append("\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    pageSize: ").append(toIndentedString(pageSize)).append("\n");
    sb.append("    pages: ").append(toIndentedString(pages)).append("\n");
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
    
        private ListLandingPagesResponse instance;
    
        public Builder() {
          this(new ListLandingPagesResponse());
        }
    
        protected Builder(ListLandingPagesResponse instance) {
          this.instance = instance;
        }
    
        public ListLandingPagesResponse.Builder landingpages(List<@Valid LandingPage> landingpages) {
              this.instance.landingpages = landingpages;
          return this;
        }
            public ListLandingPagesResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public ListLandingPagesResponse.Builder pageSize(String pageSize) {
              this.instance.pageSize = pageSize;
          return this;
        }
            public ListLandingPagesResponse.Builder pages(String pages) {
              this.instance.pages = pages;
          return this;
        }
        
    
        /**
        * returns a built ListLandingPagesResponse instance.
        *
        * The builder is not reusable.
        */
        public ListLandingPagesResponse build() {
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
      public static ListLandingPagesResponse.Builder builder() {
        return new ListLandingPagesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListLandingPagesResponse.Builder toBuilder() {
        return new ListLandingPagesResponse.Builder()
          .landingpages(getLandingpages())
          .nextPageToken(getNextPageToken())
          .pageSize(getPageSize())
          .pages(getPages());
      }
}

