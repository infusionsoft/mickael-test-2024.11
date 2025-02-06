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
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleContactAddressLabels;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ApplicationConfigurationModuleContact
 */
@JsonPropertyOrder({
  ApplicationConfigurationModuleContact.JSON_PROPERTY_ADDRESS_LABELS,
  ApplicationConfigurationModuleContact.JSON_PROPERTY_CONTACT_TYPES,
  ApplicationConfigurationModuleContact.JSON_PROPERTY_DEFAULT_NEW_CONTACT_FORM,
  ApplicationConfigurationModuleContact.JSON_PROPERTY_DISABLE_CONTACT_EDIT_IN_CLIENT_LOGIN,
  ApplicationConfigurationModuleContact.JSON_PROPERTY_FAX_TYPES,
  ApplicationConfigurationModuleContact.JSON_PROPERTY_PHONE_TYPES,
  ApplicationConfigurationModuleContact.JSON_PROPERTY_SUFFIX_TYPES,
  ApplicationConfigurationModuleContact.JSON_PROPERTY_TITLE_TYPES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ApplicationConfigurationModuleContact implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADDRESS_LABELS = "address_labels";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleContactAddressLabels addressLabels;

  public static final String JSON_PROPERTY_CONTACT_TYPES = "contact_types";
  @jakarta.annotation.Nullable  private String contactTypes;

  public static final String JSON_PROPERTY_DEFAULT_NEW_CONTACT_FORM = "default_new_contact_form";
  @jakarta.annotation.Nullable  private String defaultNewContactForm;

  public static final String JSON_PROPERTY_DISABLE_CONTACT_EDIT_IN_CLIENT_LOGIN = "disable_contact_edit_in_client_login";
  @jakarta.annotation.Nullable  private Boolean disableContactEditInClientLogin;

  public static final String JSON_PROPERTY_FAX_TYPES = "fax_types";
  @jakarta.annotation.Nullable  private String faxTypes;

  public static final String JSON_PROPERTY_PHONE_TYPES = "phone_types";
  @jakarta.annotation.Nullable  private String phoneTypes;

  public static final String JSON_PROPERTY_SUFFIX_TYPES = "suffix_types";
  @jakarta.annotation.Nullable  private String suffixTypes;

  public static final String JSON_PROPERTY_TITLE_TYPES = "title_types";
  @jakarta.annotation.Nullable  private String titleTypes;

  public ApplicationConfigurationModuleContact() { 
  }

  public ApplicationConfigurationModuleContact addressLabels(@jakarta.annotation.Nullable ApplicationConfigurationModuleContactAddressLabels addressLabels) {
    this.addressLabels = addressLabels;
    return this;
  }

  /**
   * Get addressLabels
   * @return addressLabels
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ADDRESS_LABELS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleContactAddressLabels getAddressLabels() {
    return addressLabels;
  }


  @JsonProperty(JSON_PROPERTY_ADDRESS_LABELS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAddressLabels(@jakarta.annotation.Nullable ApplicationConfigurationModuleContactAddressLabels addressLabels) {
    this.addressLabels = addressLabels;
  }


  public ApplicationConfigurationModuleContact contactTypes(@jakarta.annotation.Nullable String contactTypes) {
    this.contactTypes = contactTypes;
    return this;
  }

  /**
   * Get contactTypes
   * @return contactTypes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContactTypes() {
    return contactTypes;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactTypes(@jakarta.annotation.Nullable String contactTypes) {
    this.contactTypes = contactTypes;
  }


  public ApplicationConfigurationModuleContact defaultNewContactForm(@jakarta.annotation.Nullable String defaultNewContactForm) {
    this.defaultNewContactForm = defaultNewContactForm;
    return this;
  }

  /**
   * Get defaultNewContactForm
   * @return defaultNewContactForm
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_NEW_CONTACT_FORM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultNewContactForm() {
    return defaultNewContactForm;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_NEW_CONTACT_FORM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultNewContactForm(@jakarta.annotation.Nullable String defaultNewContactForm) {
    this.defaultNewContactForm = defaultNewContactForm;
  }


  public ApplicationConfigurationModuleContact disableContactEditInClientLogin(@jakarta.annotation.Nullable Boolean disableContactEditInClientLogin) {
    this.disableContactEditInClientLogin = disableContactEditInClientLogin;
    return this;
  }

  /**
   * Get disableContactEditInClientLogin
   * @return disableContactEditInClientLogin
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISABLE_CONTACT_EDIT_IN_CLIENT_LOGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getDisableContactEditInClientLogin() {
    return disableContactEditInClientLogin;
  }


  @JsonProperty(JSON_PROPERTY_DISABLE_CONTACT_EDIT_IN_CLIENT_LOGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDisableContactEditInClientLogin(@jakarta.annotation.Nullable Boolean disableContactEditInClientLogin) {
    this.disableContactEditInClientLogin = disableContactEditInClientLogin;
  }


  public ApplicationConfigurationModuleContact faxTypes(@jakarta.annotation.Nullable String faxTypes) {
    this.faxTypes = faxTypes;
    return this;
  }

  /**
   * Get faxTypes
   * @return faxTypes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FAX_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFaxTypes() {
    return faxTypes;
  }


  @JsonProperty(JSON_PROPERTY_FAX_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFaxTypes(@jakarta.annotation.Nullable String faxTypes) {
    this.faxTypes = faxTypes;
  }


  public ApplicationConfigurationModuleContact phoneTypes(@jakarta.annotation.Nullable String phoneTypes) {
    this.phoneTypes = phoneTypes;
    return this;
  }

  /**
   * Get phoneTypes
   * @return phoneTypes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PHONE_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPhoneTypes() {
    return phoneTypes;
  }


  @JsonProperty(JSON_PROPERTY_PHONE_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPhoneTypes(@jakarta.annotation.Nullable String phoneTypes) {
    this.phoneTypes = phoneTypes;
  }


  public ApplicationConfigurationModuleContact suffixTypes(@jakarta.annotation.Nullable String suffixTypes) {
    this.suffixTypes = suffixTypes;
    return this;
  }

  /**
   * Get suffixTypes
   * @return suffixTypes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUFFIX_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSuffixTypes() {
    return suffixTypes;
  }


  @JsonProperty(JSON_PROPERTY_SUFFIX_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSuffixTypes(@jakarta.annotation.Nullable String suffixTypes) {
    this.suffixTypes = suffixTypes;
  }


  public ApplicationConfigurationModuleContact titleTypes(@jakarta.annotation.Nullable String titleTypes) {
    this.titleTypes = titleTypes;
    return this;
  }

  /**
   * Get titleTypes
   * @return titleTypes
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TITLE_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTitleTypes() {
    return titleTypes;
  }


  @JsonProperty(JSON_PROPERTY_TITLE_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTitleTypes(@jakarta.annotation.Nullable String titleTypes) {
    this.titleTypes = titleTypes;
  }

  /**
   * Return true if this ApplicationConfigurationModuleContact object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplicationConfigurationModuleContact applicationConfigurationModuleContact = (ApplicationConfigurationModuleContact) o;
    return Objects.equals(this.addressLabels, applicationConfigurationModuleContact.addressLabels) &&
        Objects.equals(this.contactTypes, applicationConfigurationModuleContact.contactTypes) &&
        Objects.equals(this.defaultNewContactForm, applicationConfigurationModuleContact.defaultNewContactForm) &&
        Objects.equals(this.disableContactEditInClientLogin, applicationConfigurationModuleContact.disableContactEditInClientLogin) &&
        Objects.equals(this.faxTypes, applicationConfigurationModuleContact.faxTypes) &&
        Objects.equals(this.phoneTypes, applicationConfigurationModuleContact.phoneTypes) &&
        Objects.equals(this.suffixTypes, applicationConfigurationModuleContact.suffixTypes) &&
        Objects.equals(this.titleTypes, applicationConfigurationModuleContact.titleTypes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(addressLabels, contactTypes, defaultNewContactForm, disableContactEditInClientLogin, faxTypes, phoneTypes, suffixTypes, titleTypes);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplicationConfigurationModuleContact {\n");
    sb.append("    addressLabels: ").append(toIndentedString(addressLabels)).append("\n");
    sb.append("    contactTypes: ").append(toIndentedString(contactTypes)).append("\n");
    sb.append("    defaultNewContactForm: ").append(toIndentedString(defaultNewContactForm)).append("\n");
    sb.append("    disableContactEditInClientLogin: ").append(toIndentedString(disableContactEditInClientLogin)).append("\n");
    sb.append("    faxTypes: ").append(toIndentedString(faxTypes)).append("\n");
    sb.append("    phoneTypes: ").append(toIndentedString(phoneTypes)).append("\n");
    sb.append("    suffixTypes: ").append(toIndentedString(suffixTypes)).append("\n");
    sb.append("    titleTypes: ").append(toIndentedString(titleTypes)).append("\n");
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
    
        private ApplicationConfigurationModuleContact instance;
    
        public Builder() {
          this(new ApplicationConfigurationModuleContact());
        }
    
        protected Builder(ApplicationConfigurationModuleContact instance) {
          this.instance = instance;
        }
    
        public ApplicationConfigurationModuleContact.Builder addressLabels(ApplicationConfigurationModuleContactAddressLabels addressLabels) {
              this.instance.addressLabels = addressLabels;
          return this;
        }
            public ApplicationConfigurationModuleContact.Builder contactTypes(String contactTypes) {
              this.instance.contactTypes = contactTypes;
          return this;
        }
            public ApplicationConfigurationModuleContact.Builder defaultNewContactForm(String defaultNewContactForm) {
              this.instance.defaultNewContactForm = defaultNewContactForm;
          return this;
        }
            public ApplicationConfigurationModuleContact.Builder disableContactEditInClientLogin(Boolean disableContactEditInClientLogin) {
              this.instance.disableContactEditInClientLogin = disableContactEditInClientLogin;
          return this;
        }
            public ApplicationConfigurationModuleContact.Builder faxTypes(String faxTypes) {
              this.instance.faxTypes = faxTypes;
          return this;
        }
            public ApplicationConfigurationModuleContact.Builder phoneTypes(String phoneTypes) {
              this.instance.phoneTypes = phoneTypes;
          return this;
        }
            public ApplicationConfigurationModuleContact.Builder suffixTypes(String suffixTypes) {
              this.instance.suffixTypes = suffixTypes;
          return this;
        }
            public ApplicationConfigurationModuleContact.Builder titleTypes(String titleTypes) {
              this.instance.titleTypes = titleTypes;
          return this;
        }
        
    
        /**
        * returns a built ApplicationConfigurationModuleContact instance.
        *
        * The builder is not reusable.
        */
        public ApplicationConfigurationModuleContact build() {
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
      public static ApplicationConfigurationModuleContact.Builder builder() {
        return new ApplicationConfigurationModuleContact.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ApplicationConfigurationModuleContact.Builder toBuilder() {
        return new ApplicationConfigurationModuleContact.Builder()
          .addressLabels(getAddressLabels())
          .contactTypes(getContactTypes())
          .defaultNewContactForm(getDefaultNewContactForm())
          .disableContactEditInClientLogin(getDisableContactEditInClientLogin())
          .faxTypes(getFaxTypes())
          .phoneTypes(getPhoneTypes())
          .suffixTypes(getSuffixTypes())
          .titleTypes(getTitleTypes());
      }
}

