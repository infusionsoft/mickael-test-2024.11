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
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleAffiliate;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleApplication;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleAppointment;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleContact;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleEcommerce;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleEmail;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleForms;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleFulfillment;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleInvoice;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleNote;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleOpportunity;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleTask;
import com.keap.sdk.sdk.model.ApplicationConfigurationModuleTemplate;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * GetSettingsResponse
 */
@JsonPropertyOrder({
  GetSettingsResponse.JSON_PROPERTY_AFFILIATE,
  GetSettingsResponse.JSON_PROPERTY_APPLICATION,
  GetSettingsResponse.JSON_PROPERTY_APPOINTMENT,
  GetSettingsResponse.JSON_PROPERTY_CONTACT,
  GetSettingsResponse.JSON_PROPERTY_ECOMMERCE,
  GetSettingsResponse.JSON_PROPERTY_EMAIL,
  GetSettingsResponse.JSON_PROPERTY_FORMS,
  GetSettingsResponse.JSON_PROPERTY_FULFILLMENT,
  GetSettingsResponse.JSON_PROPERTY_INVOICE,
  GetSettingsResponse.JSON_PROPERTY_NOTE,
  GetSettingsResponse.JSON_PROPERTY_OPPORTUNITY,
  GetSettingsResponse.JSON_PROPERTY_TASK,
  GetSettingsResponse.JSON_PROPERTY_TEMPLATE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class GetSettingsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFFILIATE = "affiliate";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleAffiliate affiliate;

  public static final String JSON_PROPERTY_APPLICATION = "application";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleApplication application;

  public static final String JSON_PROPERTY_APPOINTMENT = "appointment";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleAppointment appointment;

  public static final String JSON_PROPERTY_CONTACT = "contact";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleContact contact;

  public static final String JSON_PROPERTY_ECOMMERCE = "ecommerce";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleEcommerce ecommerce;

  public static final String JSON_PROPERTY_EMAIL = "email";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleEmail email;

  public static final String JSON_PROPERTY_FORMS = "forms";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleForms forms;

  public static final String JSON_PROPERTY_FULFILLMENT = "fulfillment";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleFulfillment fulfillment;

  public static final String JSON_PROPERTY_INVOICE = "invoice";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleInvoice invoice;

  public static final String JSON_PROPERTY_NOTE = "note";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleNote note;

  public static final String JSON_PROPERTY_OPPORTUNITY = "opportunity";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleOpportunity opportunity;

  public static final String JSON_PROPERTY_TASK = "task";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleTask task;

  public static final String JSON_PROPERTY_TEMPLATE = "template";
  @jakarta.annotation.Nullable  private ApplicationConfigurationModuleTemplate template;

  public GetSettingsResponse() { 
  }

  public GetSettingsResponse affiliate(@jakarta.annotation.Nullable ApplicationConfigurationModuleAffiliate affiliate) {
    this.affiliate = affiliate;
    return this;
  }

  /**
   * Get affiliate
   * @return affiliate
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AFFILIATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleAffiliate getAffiliate() {
    return affiliate;
  }


  @JsonProperty(JSON_PROPERTY_AFFILIATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAffiliate(@jakarta.annotation.Nullable ApplicationConfigurationModuleAffiliate affiliate) {
    this.affiliate = affiliate;
  }


  public GetSettingsResponse application(@jakarta.annotation.Nullable ApplicationConfigurationModuleApplication application) {
    this.application = application;
    return this;
  }

  /**
   * Get application
   * @return application
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_APPLICATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleApplication getApplication() {
    return application;
  }


  @JsonProperty(JSON_PROPERTY_APPLICATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setApplication(@jakarta.annotation.Nullable ApplicationConfigurationModuleApplication application) {
    this.application = application;
  }


  public GetSettingsResponse appointment(@jakarta.annotation.Nullable ApplicationConfigurationModuleAppointment appointment) {
    this.appointment = appointment;
    return this;
  }

  /**
   * Get appointment
   * @return appointment
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_APPOINTMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleAppointment getAppointment() {
    return appointment;
  }


  @JsonProperty(JSON_PROPERTY_APPOINTMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAppointment(@jakarta.annotation.Nullable ApplicationConfigurationModuleAppointment appointment) {
    this.appointment = appointment;
  }


  public GetSettingsResponse contact(@jakarta.annotation.Nullable ApplicationConfigurationModuleContact contact) {
    this.contact = contact;
    return this;
  }

  /**
   * Get contact
   * @return contact
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleContact getContact() {
    return contact;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContact(@jakarta.annotation.Nullable ApplicationConfigurationModuleContact contact) {
    this.contact = contact;
  }


  public GetSettingsResponse ecommerce(@jakarta.annotation.Nullable ApplicationConfigurationModuleEcommerce ecommerce) {
    this.ecommerce = ecommerce;
    return this;
  }

  /**
   * Get ecommerce
   * @return ecommerce
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ECOMMERCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleEcommerce getEcommerce() {
    return ecommerce;
  }


  @JsonProperty(JSON_PROPERTY_ECOMMERCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEcommerce(@jakarta.annotation.Nullable ApplicationConfigurationModuleEcommerce ecommerce) {
    this.ecommerce = ecommerce;
  }


  public GetSettingsResponse email(@jakarta.annotation.Nullable ApplicationConfigurationModuleEmail email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleEmail getEmail() {
    return email;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmail(@jakarta.annotation.Nullable ApplicationConfigurationModuleEmail email) {
    this.email = email;
  }


  public GetSettingsResponse forms(@jakarta.annotation.Nullable ApplicationConfigurationModuleForms forms) {
    this.forms = forms;
    return this;
  }

  /**
   * Get forms
   * @return forms
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FORMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleForms getForms() {
    return forms;
  }


  @JsonProperty(JSON_PROPERTY_FORMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setForms(@jakarta.annotation.Nullable ApplicationConfigurationModuleForms forms) {
    this.forms = forms;
  }


  public GetSettingsResponse fulfillment(@jakarta.annotation.Nullable ApplicationConfigurationModuleFulfillment fulfillment) {
    this.fulfillment = fulfillment;
    return this;
  }

  /**
   * Get fulfillment
   * @return fulfillment
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FULFILLMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleFulfillment getFulfillment() {
    return fulfillment;
  }


  @JsonProperty(JSON_PROPERTY_FULFILLMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFulfillment(@jakarta.annotation.Nullable ApplicationConfigurationModuleFulfillment fulfillment) {
    this.fulfillment = fulfillment;
  }


  public GetSettingsResponse invoice(@jakarta.annotation.Nullable ApplicationConfigurationModuleInvoice invoice) {
    this.invoice = invoice;
    return this;
  }

  /**
   * Get invoice
   * @return invoice
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_INVOICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleInvoice getInvoice() {
    return invoice;
  }


  @JsonProperty(JSON_PROPERTY_INVOICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInvoice(@jakarta.annotation.Nullable ApplicationConfigurationModuleInvoice invoice) {
    this.invoice = invoice;
  }


  public GetSettingsResponse note(@jakarta.annotation.Nullable ApplicationConfigurationModuleNote note) {
    this.note = note;
    return this;
  }

  /**
   * Get note
   * @return note
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NOTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleNote getNote() {
    return note;
  }


  @JsonProperty(JSON_PROPERTY_NOTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNote(@jakarta.annotation.Nullable ApplicationConfigurationModuleNote note) {
    this.note = note;
  }


  public GetSettingsResponse opportunity(@jakarta.annotation.Nullable ApplicationConfigurationModuleOpportunity opportunity) {
    this.opportunity = opportunity;
    return this;
  }

  /**
   * Get opportunity
   * @return opportunity
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPPORTUNITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleOpportunity getOpportunity() {
    return opportunity;
  }


  @JsonProperty(JSON_PROPERTY_OPPORTUNITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOpportunity(@jakarta.annotation.Nullable ApplicationConfigurationModuleOpportunity opportunity) {
    this.opportunity = opportunity;
  }


  public GetSettingsResponse task(@jakarta.annotation.Nullable ApplicationConfigurationModuleTask task) {
    this.task = task;
    return this;
  }

  /**
   * Get task
   * @return task
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TASK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleTask getTask() {
    return task;
  }


  @JsonProperty(JSON_PROPERTY_TASK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTask(@jakarta.annotation.Nullable ApplicationConfigurationModuleTask task) {
    this.task = task;
  }


  public GetSettingsResponse template(@jakarta.annotation.Nullable ApplicationConfigurationModuleTemplate template) {
    this.template = template;
    return this;
  }

  /**
   * Get template
   * @return template
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TEMPLATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ApplicationConfigurationModuleTemplate getTemplate() {
    return template;
  }


  @JsonProperty(JSON_PROPERTY_TEMPLATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTemplate(@jakarta.annotation.Nullable ApplicationConfigurationModuleTemplate template) {
    this.template = template;
  }

  /**
   * Return true if this GetSettingsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetSettingsResponse getSettingsResponse = (GetSettingsResponse) o;
    return Objects.equals(this.affiliate, getSettingsResponse.affiliate) &&
        Objects.equals(this.application, getSettingsResponse.application) &&
        Objects.equals(this.appointment, getSettingsResponse.appointment) &&
        Objects.equals(this.contact, getSettingsResponse.contact) &&
        Objects.equals(this.ecommerce, getSettingsResponse.ecommerce) &&
        Objects.equals(this.email, getSettingsResponse.email) &&
        Objects.equals(this.forms, getSettingsResponse.forms) &&
        Objects.equals(this.fulfillment, getSettingsResponse.fulfillment) &&
        Objects.equals(this.invoice, getSettingsResponse.invoice) &&
        Objects.equals(this.note, getSettingsResponse.note) &&
        Objects.equals(this.opportunity, getSettingsResponse.opportunity) &&
        Objects.equals(this.task, getSettingsResponse.task) &&
        Objects.equals(this.template, getSettingsResponse.template);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affiliate, application, appointment, contact, ecommerce, email, forms, fulfillment, invoice, note, opportunity, task, template);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetSettingsResponse {\n");
    sb.append("    affiliate: ").append(toIndentedString(affiliate)).append("\n");
    sb.append("    application: ").append(toIndentedString(application)).append("\n");
    sb.append("    appointment: ").append(toIndentedString(appointment)).append("\n");
    sb.append("    contact: ").append(toIndentedString(contact)).append("\n");
    sb.append("    ecommerce: ").append(toIndentedString(ecommerce)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    forms: ").append(toIndentedString(forms)).append("\n");
    sb.append("    fulfillment: ").append(toIndentedString(fulfillment)).append("\n");
    sb.append("    invoice: ").append(toIndentedString(invoice)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
    sb.append("    opportunity: ").append(toIndentedString(opportunity)).append("\n");
    sb.append("    task: ").append(toIndentedString(task)).append("\n");
    sb.append("    template: ").append(toIndentedString(template)).append("\n");
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
    
        private GetSettingsResponse instance;
    
        public Builder() {
          this(new GetSettingsResponse());
        }
    
        protected Builder(GetSettingsResponse instance) {
          this.instance = instance;
        }
    
        public GetSettingsResponse.Builder affiliate(ApplicationConfigurationModuleAffiliate affiliate) {
              this.instance.affiliate = affiliate;
          return this;
        }
            public GetSettingsResponse.Builder application(ApplicationConfigurationModuleApplication application) {
              this.instance.application = application;
          return this;
        }
            public GetSettingsResponse.Builder appointment(ApplicationConfigurationModuleAppointment appointment) {
              this.instance.appointment = appointment;
          return this;
        }
            public GetSettingsResponse.Builder contact(ApplicationConfigurationModuleContact contact) {
              this.instance.contact = contact;
          return this;
        }
            public GetSettingsResponse.Builder ecommerce(ApplicationConfigurationModuleEcommerce ecommerce) {
              this.instance.ecommerce = ecommerce;
          return this;
        }
            public GetSettingsResponse.Builder email(ApplicationConfigurationModuleEmail email) {
              this.instance.email = email;
          return this;
        }
            public GetSettingsResponse.Builder forms(ApplicationConfigurationModuleForms forms) {
              this.instance.forms = forms;
          return this;
        }
            public GetSettingsResponse.Builder fulfillment(ApplicationConfigurationModuleFulfillment fulfillment) {
              this.instance.fulfillment = fulfillment;
          return this;
        }
            public GetSettingsResponse.Builder invoice(ApplicationConfigurationModuleInvoice invoice) {
              this.instance.invoice = invoice;
          return this;
        }
            public GetSettingsResponse.Builder note(ApplicationConfigurationModuleNote note) {
              this.instance.note = note;
          return this;
        }
            public GetSettingsResponse.Builder opportunity(ApplicationConfigurationModuleOpportunity opportunity) {
              this.instance.opportunity = opportunity;
          return this;
        }
            public GetSettingsResponse.Builder task(ApplicationConfigurationModuleTask task) {
              this.instance.task = task;
          return this;
        }
            public GetSettingsResponse.Builder template(ApplicationConfigurationModuleTemplate template) {
              this.instance.template = template;
          return this;
        }
        
    
        /**
        * returns a built GetSettingsResponse instance.
        *
        * The builder is not reusable.
        */
        public GetSettingsResponse build() {
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
      public static GetSettingsResponse.Builder builder() {
        return new GetSettingsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public GetSettingsResponse.Builder toBuilder() {
        return new GetSettingsResponse.Builder()
          .affiliate(getAffiliate())
          .application(getApplication())
          .appointment(getAppointment())
          .contact(getContact())
          .ecommerce(getEcommerce())
          .email(getEmail())
          .forms(getForms())
          .fulfillment(getFulfillment())
          .invoice(getInvoice())
          .note(getNote())
          .opportunity(getOpportunity())
          .task(getTask())
          .template(getTemplate());
      }
}

