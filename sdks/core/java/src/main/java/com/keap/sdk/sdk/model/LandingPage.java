/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * LandingPage
 */
@JsonPropertyOrder({
  LandingPage.JSON_PROPERTY_HTML_PREVIEW_URL,
  LandingPage.JSON_PROPERTY_HTML_URL,
  LandingPage.JSON_PROPERTY_ID,
  LandingPage.JSON_PROPERTY_TEMPLATE_GROUP_STATUS,
  LandingPage.JSON_PROPERTY_TITLE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class LandingPage implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_HTML_PREVIEW_URL = "html_preview_url";
  @jakarta.annotation.Nullable  private String htmlPreviewUrl;

  public static final String JSON_PROPERTY_HTML_URL = "html_url";
  @jakarta.annotation.Nullable  private String htmlUrl;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_TEMPLATE_GROUP_STATUS = "template_group_status";
  @jakarta.annotation.Nullable  private String templateGroupStatus;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  public LandingPage() { 
  }

  public LandingPage htmlPreviewUrl(@jakarta.annotation.Nullable String htmlPreviewUrl) {
    this.htmlPreviewUrl = htmlPreviewUrl;
    return this;
  }

  /**
   * Get htmlPreviewUrl
   * @return htmlPreviewUrl
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_HTML_PREVIEW_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getHtmlPreviewUrl() {
    return htmlPreviewUrl;
  }


  @JsonProperty(JSON_PROPERTY_HTML_PREVIEW_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHtmlPreviewUrl(@jakarta.annotation.Nullable String htmlPreviewUrl) {
    this.htmlPreviewUrl = htmlPreviewUrl;
  }


  public LandingPage htmlUrl(@jakarta.annotation.Nullable String htmlUrl) {
    this.htmlUrl = htmlUrl;
    return this;
  }

  /**
   * Get htmlUrl
   * @return htmlUrl
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_HTML_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getHtmlUrl() {
    return htmlUrl;
  }


  @JsonProperty(JSON_PROPERTY_HTML_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHtmlUrl(@jakarta.annotation.Nullable String htmlUrl) {
    this.htmlUrl = htmlUrl;
  }


  public LandingPage id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable String id) {
    this.id = id;
  }


  public LandingPage templateGroupStatus(@jakarta.annotation.Nullable String templateGroupStatus) {
    this.templateGroupStatus = templateGroupStatus;
    return this;
  }

  /**
   * Get templateGroupStatus
   * @return templateGroupStatus
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TEMPLATE_GROUP_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTemplateGroupStatus() {
    return templateGroupStatus;
  }


  @JsonProperty(JSON_PROPERTY_TEMPLATE_GROUP_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTemplateGroupStatus(@jakarta.annotation.Nullable String templateGroupStatus) {
    this.templateGroupStatus = templateGroupStatus;
  }


  public LandingPage title(@jakarta.annotation.Nullable String title) {
    this.title = title;
    return this;
  }

  /**
   * Get title
   * @return title
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTitle() {
    return title;
  }


  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTitle(@jakarta.annotation.Nullable String title) {
    this.title = title;
  }

  /**
   * Return true if this LandingPage object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LandingPage landingPage = (LandingPage) o;
    return Objects.equals(this.htmlPreviewUrl, landingPage.htmlPreviewUrl) &&
        Objects.equals(this.htmlUrl, landingPage.htmlUrl) &&
        Objects.equals(this.id, landingPage.id) &&
        Objects.equals(this.templateGroupStatus, landingPage.templateGroupStatus) &&
        Objects.equals(this.title, landingPage.title);
  }

  @Override
  public int hashCode() {
    return Objects.hash(htmlPreviewUrl, htmlUrl, id, templateGroupStatus, title);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LandingPage {\n");
    sb.append("    htmlPreviewUrl: ").append(toIndentedString(htmlPreviewUrl)).append("\n");
    sb.append("    htmlUrl: ").append(toIndentedString(htmlUrl)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    templateGroupStatus: ").append(toIndentedString(templateGroupStatus)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
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
    
        private LandingPage instance;
    
        public Builder() {
          this(new LandingPage());
        }
    
        protected Builder(LandingPage instance) {
          this.instance = instance;
        }
    
        public LandingPage.Builder htmlPreviewUrl(String htmlPreviewUrl) {
              this.instance.htmlPreviewUrl = htmlPreviewUrl;
          return this;
        }
            public LandingPage.Builder htmlUrl(String htmlUrl) {
              this.instance.htmlUrl = htmlUrl;
          return this;
        }
            public LandingPage.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public LandingPage.Builder templateGroupStatus(String templateGroupStatus) {
              this.instance.templateGroupStatus = templateGroupStatus;
          return this;
        }
            public LandingPage.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
        
    
        /**
        * returns a built LandingPage instance.
        *
        * The builder is not reusable.
        */
        public LandingPage build() {
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
      public static LandingPage.Builder builder() {
        return new LandingPage.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public LandingPage.Builder toBuilder() {
        return new LandingPage.Builder()
          .htmlPreviewUrl(getHtmlPreviewUrl())
          .htmlUrl(getHtmlUrl())
          .id(getId())
          .templateGroupStatus(getTemplateGroupStatus())
          .title(getTitle());
      }
}

