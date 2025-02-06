/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
 * ApplicationConfigurationModuleEmail
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleEmail.JSON_PROPERTY_APPEND_CONTACT_KEY_TO_LINKS,
  ApplicationConfigurationModuleEmail.JSON_PROPERTY_DEFAULT_OPT_IN_LINK,
  ApplicationConfigurationModuleEmail.JSON_PROPERTY_DEFAULT_OPT_OUT_LINK,
  ApplicationConfigurationModuleEmail.JSON_PROPERTY_HIDE_EMAILS_TO_AND_FROM_DOMAINS,
  ApplicationConfigurationModuleEmail.JSON_PROPERTY_WHITELISTED_DOMAINS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleEmail implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_APPEND_CONTACT_KEY_TO_LINKS = "append_contact_key_to_links";
  @jakarta.annotation.Nullable  private Boolean appendContactKeyToLinks;

  public static final String JSON_PROPERTY_DEFAULT_OPT_IN_LINK = "default_opt_in_link";
  @jakarta.annotation.Nullable  private String defaultOptInLink;

  public static final String JSON_PROPERTY_DEFAULT_OPT_OUT_LINK = "default_opt_out_link";
  @jakarta.annotation.Nullable  private String defaultOptOutLink;

  public static final String JSON_PROPERTY_HIDE_EMAILS_TO_AND_FROM_DOMAINS = "hide_emails_to_and_from_domains";
  @jakarta.annotation.Nullable  private String hideEmailsToAndFromDomains;

  public static final String JSON_PROPERTY_WHITELISTED_DOMAINS = "whitelisted_domains";
  @jakarta.annotation.Nullable  private String whitelistedDomains;

  public ApplicationConfigurationModuleEmail() { 
  }

  public ApplicationConfigurationModuleEmail appendContactKeyToLinks(@jakarta.annotation.Nullable Boolean appendContactKeyToLinks) {
    this.appendContactKeyToLinks = appendContactKeyToLinks;
    return this;
  }

  /**
   * Get appendContactKeyToLinks
   * @return appendContactKeyToLinks
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_APPEND_CONTACT_KEY_TO_LINKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAppendContactKeyToLinks() {
    return appendContactKeyToLinks;
  }


  @JsonProperty(JSON_PROPERTY_APPEND_CONTACT_KEY_TO_LINKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAppendContactKeyToLinks(@jakarta.annotation.Nullable Boolean appendContactKeyToLinks) {
    this.appendContactKeyToLinks = appendContactKeyToLinks;
  }


  public ApplicationConfigurationModuleEmail defaultOptInLink(@jakarta.annotation.Nullable String defaultOptInLink) {
    this.defaultOptInLink = defaultOptInLink;
    return this;
  }

  /**
   * Get defaultOptInLink
   * @return defaultOptInLink
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_OPT_IN_LINK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultOptInLink() {
    return defaultOptInLink;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_OPT_IN_LINK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultOptInLink(@jakarta.annotation.Nullable String defaultOptInLink) {
    this.defaultOptInLink = defaultOptInLink;
  }


  public ApplicationConfigurationModuleEmail defaultOptOutLink(@jakarta.annotation.Nullable String defaultOptOutLink) {
    this.defaultOptOutLink = defaultOptOutLink;
    return this;
  }

  /**
   * Get defaultOptOutLink
   * @return defaultOptOutLink
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_OPT_OUT_LINK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultOptOutLink() {
    return defaultOptOutLink;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_OPT_OUT_LINK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultOptOutLink(@jakarta.annotation.Nullable String defaultOptOutLink) {
    this.defaultOptOutLink = defaultOptOutLink;
  }


  public ApplicationConfigurationModuleEmail hideEmailsToAndFromDomains(@jakarta.annotation.Nullable String hideEmailsToAndFromDomains) {
    this.hideEmailsToAndFromDomains = hideEmailsToAndFromDomains;
    return this;
  }

  /**
   * Get hideEmailsToAndFromDomains
   * @return hideEmailsToAndFromDomains
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_HIDE_EMAILS_TO_AND_FROM_DOMAINS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getHideEmailsToAndFromDomains() {
    return hideEmailsToAndFromDomains;
  }


  @JsonProperty(JSON_PROPERTY_HIDE_EMAILS_TO_AND_FROM_DOMAINS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHideEmailsToAndFromDomains(@jakarta.annotation.Nullable String hideEmailsToAndFromDomains) {
    this.hideEmailsToAndFromDomains = hideEmailsToAndFromDomains;
  }


  public ApplicationConfigurationModuleEmail whitelistedDomains(@jakarta.annotation.Nullable String whitelistedDomains) {
    this.whitelistedDomains = whitelistedDomains;
    return this;
  }

  /**
   * Get whitelistedDomains
   * @return whitelistedDomains
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_WHITELISTED_DOMAINS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getWhitelistedDomains() {
    return whitelistedDomains;
  }


  @JsonProperty(JSON_PROPERTY_WHITELISTED_DOMAINS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWhitelistedDomains(@jakarta.annotation.Nullable String whitelistedDomains) {
    this.whitelistedDomains = whitelistedDomains;
  }

  /**
   * Return true if this ApplicationConfigurationModuleEmail object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleEmail applicationConfigurationModuleEmail = (ApplicationConfigurationModuleEmail) o;
    return Objects.equals(this.appendContactKeyToLinks, applicationConfigurationModuleEmail.appendContactKeyToLinks) &&
        Objects.equals(this.defaultOptInLink, applicationConfigurationModuleEmail.defaultOptInLink) &&
        Objects.equals(this.defaultOptOutLink, applicationConfigurationModuleEmail.defaultOptOutLink) &&
        Objects.equals(this.hideEmailsToAndFromDomains, applicationConfigurationModuleEmail.hideEmailsToAndFromDomains) &&
        Objects.equals(this.whitelistedDomains, applicationConfigurationModuleEmail.whitelistedDomains);
  }

  @Override
  public int hashCode() {
    return Objects.hash(appendContactKeyToLinks, defaultOptInLink, defaultOptOutLink, hideEmailsToAndFromDomains, whitelistedDomains);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleEmail {\n");
    sb.append("    appendContactKeyToLinks: ").append(toIndentedString(appendContactKeyToLinks)).append("\n");
    sb.append("    defaultOptInLink: ").append(toIndentedString(defaultOptInLink)).append("\n");
    sb.append("    defaultOptOutLink: ").append(toIndentedString(defaultOptOutLink)).append("\n");
    sb.append("    hideEmailsToAndFromDomains: ").append(toIndentedString(hideEmailsToAndFromDomains)).append("\n");
    sb.append("    whitelistedDomains: ").append(toIndentedString(whitelistedDomains)).append("\n");
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
    
        private ApplicationConfigurationModuleEmail instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleEmail());
        }
    
        protected Builder(ApplicationConfigurationModuleEmail instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleEmail.Builder appendContactKeyToLinks(Boolean appendContactKeyToLinks) {
              this.instance.appendContactKeyToLinks = appendContactKeyToLinks;
          return this;
        }
            public ApplicationConfigurationModuleEmail.Builder defaultOptInLink(String defaultOptInLink) {
              this.instance.defaultOptInLink = defaultOptInLink;
          return this;
        }
            public ApplicationConfigurationModuleEmail.Builder defaultOptOutLink(String defaultOptOutLink) {
              this.instance.defaultOptOutLink = defaultOptOutLink;
          return this;
        }
            public ApplicationConfigurationModuleEmail.Builder hideEmailsToAndFromDomains(String hideEmailsToAndFromDomains) {
              this.instance.hideEmailsToAndFromDomains = hideEmailsToAndFromDomains;
          return this;
        }
            public ApplicationConfigurationModuleEmail.Builder whitelistedDomains(String whitelistedDomains) {
              this.instance.whitelistedDomains = whitelistedDomains;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleEmail instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleEmail build() {
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
      public static ApplicationConfigurationModuleEmail.Builder builder() {
        return new ApplicationConfigurationModuleEmail.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleEmail.Builder toBuilder() {
        return new ApplicationConfigurationModuleEmail.Builder()
          .appendContactKeyToLinks(getAppendContactKeyToLinks())
          .defaultOptInLink(getDefaultOptInLink())
          .defaultOptOutLink(getDefaultOptOutLink())
          .hideEmailsToAndFromDomains(getHideEmailsToAndFromDomains())
          .whitelistedDomains(getWhitelistedDomains());
      }
}

