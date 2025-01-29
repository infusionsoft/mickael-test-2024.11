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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateEmailSentRequest
 */
@JsonPropertyOrder({
  CreateEmailSentRequest.JSON_PROPERTY_CLICKED_TIME,
  CreateEmailSentRequest.JSON_PROPERTY_CONTACT_ID,
  CreateEmailSentRequest.JSON_PROPERTY_HEADERS,
  CreateEmailSentRequest.JSON_PROPERTY_HTML_CONTENT,
  CreateEmailSentRequest.JSON_PROPERTY_OPENED_TIME,
  CreateEmailSentRequest.JSON_PROPERTY_ORIGINAL_PROVIDER,
  CreateEmailSentRequest.JSON_PROPERTY_ORIGINAL_PROVIDER_ID,
  CreateEmailSentRequest.JSON_PROPERTY_PLAIN_CONTENT,
  CreateEmailSentRequest.JSON_PROPERTY_PROVIDER_SOURCE_ID,
  CreateEmailSentRequest.JSON_PROPERTY_RECEIVED_TIME,
  CreateEmailSentRequest.JSON_PROPERTY_SENT_FROM_ADDRESS,
  CreateEmailSentRequest.JSON_PROPERTY_SENT_FROM_REPLY_ADDRESS,
  CreateEmailSentRequest.JSON_PROPERTY_SENT_TIME,
  CreateEmailSentRequest.JSON_PROPERTY_SENT_TO_ADDRESS,
  CreateEmailSentRequest.JSON_PROPERTY_SENT_TO_BCC_ADDRESS_LIST,
  CreateEmailSentRequest.JSON_PROPERTY_SENT_TO_CC_ADDRESS_LIST,
  CreateEmailSentRequest.JSON_PROPERTY_SUBJECT
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateEmailSentRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CLICKED_TIME = "clicked_time";
  @jakarta.annotation.Nullable  private String clickedTime;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_HEADERS = "headers";
  @jakarta.annotation.Nullable  private String headers;

  public static final String JSON_PROPERTY_HTML_CONTENT = "html_content";
  @jakarta.annotation.Nullable  private String htmlContent;

  public static final String JSON_PROPERTY_OPENED_TIME = "opened_time";
  @jakarta.annotation.Nullable  private String openedTime;

  /**
   * Provider that sent the email, defaults to UNKNOWN
   */
  public enum OriginalProviderEnum {
    UNKNOWN(String.valueOf("UNKNOWN")),
    
    INFUSIONSOFT(String.valueOf("INFUSIONSOFT")),
    
    MICROSOFT(String.valueOf("MICROSOFT")),
    
    GOOGLE(String.valueOf("GOOGLE")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    OriginalProviderEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static OriginalProviderEnum fromValue(String value) {
      for (OriginalProviderEnum b : OriginalProviderEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_ORIGINAL_PROVIDER = "original_provider";
  @jakarta.annotation.Nullable  private OriginalProviderEnum originalProvider;

  public static final String JSON_PROPERTY_ORIGINAL_PROVIDER_ID = "original_provider_id";
  @jakarta.annotation.Nullable  private String originalProviderId;

  public static final String JSON_PROPERTY_PLAIN_CONTENT = "plain_content";
  @jakarta.annotation.Nullable  private String plainContent;

  public static final String JSON_PROPERTY_PROVIDER_SOURCE_ID = "provider_source_id";
  @jakarta.annotation.Nullable  private String providerSourceId;

  public static final String JSON_PROPERTY_RECEIVED_TIME = "received_time";
  @jakarta.annotation.Nullable  private String receivedTime;

  public static final String JSON_PROPERTY_SENT_FROM_ADDRESS = "sent_from_address";
  @jakarta.annotation.Nullable  private String sentFromAddress;

  public static final String JSON_PROPERTY_SENT_FROM_REPLY_ADDRESS = "sent_from_reply_address";
  @jakarta.annotation.Nullable  private String sentFromReplyAddress;

  public static final String JSON_PROPERTY_SENT_TIME = "sent_time";
  @jakarta.annotation.Nullable  private String sentTime;

  public static final String JSON_PROPERTY_SENT_TO_ADDRESS = "sent_to_address";
  @jakarta.annotation.Nonnull  private String sentToAddress;

  public static final String JSON_PROPERTY_SENT_TO_BCC_ADDRESS_LIST = "sent_to_bcc_address_list";
  @jakarta.annotation.Nullable  private List<String> sentToBccAddressList = new ArrayList<>();

  public static final String JSON_PROPERTY_SENT_TO_CC_ADDRESS_LIST = "sent_to_cc_address_list";
  @jakarta.annotation.Nullable  private List<String> sentToCcAddressList = new ArrayList<>();

  public static final String JSON_PROPERTY_SUBJECT = "subject";
  @jakarta.annotation.Nullable  private String subject;

  public CreateEmailSentRequest() { 
  }

  public CreateEmailSentRequest clickedTime(@jakarta.annotation.Nullable String clickedTime) {
    this.clickedTime = clickedTime;
    return this;
  }

  /**
   * Get clickedTime
   * @return clickedTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CLICKED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getClickedTime() {
    return clickedTime;
  }


  @JsonProperty(JSON_PROPERTY_CLICKED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClickedTime(@jakarta.annotation.Nullable String clickedTime) {
    this.clickedTime = clickedTime;
  }


  public CreateEmailSentRequest contactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * Get contactId
   * @return contactId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContactId() {
    return contactId;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
  }


  public CreateEmailSentRequest headers(@jakarta.annotation.Nullable String headers) {
    this.headers = headers;
    return this;
  }

  /**
   * Get headers
   * @return headers
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_HEADERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getHeaders() {
    return headers;
  }


  @JsonProperty(JSON_PROPERTY_HEADERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHeaders(@jakarta.annotation.Nullable String headers) {
    this.headers = headers;
  }


  public CreateEmailSentRequest htmlContent(@jakarta.annotation.Nullable String htmlContent) {
    this.htmlContent = htmlContent;
    return this;
  }

  /**
   * Base64 encoded HTML
   * @return htmlContent
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Base64 encoded HTML")
  @JsonProperty(JSON_PROPERTY_HTML_CONTENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getHtmlContent() {
    return htmlContent;
  }


  @JsonProperty(JSON_PROPERTY_HTML_CONTENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHtmlContent(@jakarta.annotation.Nullable String htmlContent) {
    this.htmlContent = htmlContent;
  }


  public CreateEmailSentRequest openedTime(@jakarta.annotation.Nullable String openedTime) {
    this.openedTime = openedTime;
    return this;
  }

  /**
   * Get openedTime
   * @return openedTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPENED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getOpenedTime() {
    return openedTime;
  }


  @JsonProperty(JSON_PROPERTY_OPENED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOpenedTime(@jakarta.annotation.Nullable String openedTime) {
    this.openedTime = openedTime;
  }


  public CreateEmailSentRequest originalProvider(@jakarta.annotation.Nullable OriginalProviderEnum originalProvider) {
    this.originalProvider = originalProvider;
    return this;
  }

  /**
   * Provider that sent the email, defaults to UNKNOWN
   * @return originalProvider
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Provider that sent the email, defaults to UNKNOWN")
  @JsonProperty(JSON_PROPERTY_ORIGINAL_PROVIDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public OriginalProviderEnum getOriginalProvider() {
    return originalProvider;
  }


  @JsonProperty(JSON_PROPERTY_ORIGINAL_PROVIDER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOriginalProvider(@jakarta.annotation.Nullable OriginalProviderEnum originalProvider) {
    this.originalProvider = originalProvider;
  }


  public CreateEmailSentRequest originalProviderId(@jakarta.annotation.Nullable String originalProviderId) {
    this.originalProviderId = originalProviderId;
    return this;
  }

  /**
   * Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record.
   * @return originalProviderId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record.")
  @JsonProperty(JSON_PROPERTY_ORIGINAL_PROVIDER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getOriginalProviderId() {
    return originalProviderId;
  }


  @JsonProperty(JSON_PROPERTY_ORIGINAL_PROVIDER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOriginalProviderId(@jakarta.annotation.Nullable String originalProviderId) {
    this.originalProviderId = originalProviderId;
  }


  public CreateEmailSentRequest plainContent(@jakarta.annotation.Nullable String plainContent) {
    this.plainContent = plainContent;
    return this;
  }

  /**
   * Base64 encoded text
   * @return plainContent
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Base64 encoded text")
  @JsonProperty(JSON_PROPERTY_PLAIN_CONTENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPlainContent() {
    return plainContent;
  }


  @JsonProperty(JSON_PROPERTY_PLAIN_CONTENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPlainContent(@jakarta.annotation.Nullable String plainContent) {
    this.plainContent = plainContent;
  }


  public CreateEmailSentRequest providerSourceId(@jakarta.annotation.Nullable String providerSourceId) {
    this.providerSourceId = providerSourceId;
    return this;
  }

  /**
   * The email address of the synced email account that generated this message.
   * @return providerSourceId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The email address of the synced email account that generated this message.")
  @JsonProperty(JSON_PROPERTY_PROVIDER_SOURCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getProviderSourceId() {
    return providerSourceId;
  }


  @JsonProperty(JSON_PROPERTY_PROVIDER_SOURCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProviderSourceId(@jakarta.annotation.Nullable String providerSourceId) {
    this.providerSourceId = providerSourceId;
  }


  public CreateEmailSentRequest receivedTime(@jakarta.annotation.Nullable String receivedTime) {
    this.receivedTime = receivedTime;
    return this;
  }

  /**
   * Get receivedTime
   * @return receivedTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RECEIVED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getReceivedTime() {
    return receivedTime;
  }


  @JsonProperty(JSON_PROPERTY_RECEIVED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReceivedTime(@jakarta.annotation.Nullable String receivedTime) {
    this.receivedTime = receivedTime;
  }


  public CreateEmailSentRequest sentFromAddress(@jakarta.annotation.Nullable String sentFromAddress) {
    this.sentFromAddress = sentFromAddress;
    return this;
  }

  /**
   * Get sentFromAddress
   * @return sentFromAddress
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SENT_FROM_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSentFromAddress() {
    return sentFromAddress;
  }


  @JsonProperty(JSON_PROPERTY_SENT_FROM_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSentFromAddress(@jakarta.annotation.Nullable String sentFromAddress) {
    this.sentFromAddress = sentFromAddress;
  }


  public CreateEmailSentRequest sentFromReplyAddress(@jakarta.annotation.Nullable String sentFromReplyAddress) {
    this.sentFromReplyAddress = sentFromReplyAddress;
    return this;
  }

  /**
   * Get sentFromReplyAddress
   * @return sentFromReplyAddress
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SENT_FROM_REPLY_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSentFromReplyAddress() {
    return sentFromReplyAddress;
  }


  @JsonProperty(JSON_PROPERTY_SENT_FROM_REPLY_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSentFromReplyAddress(@jakarta.annotation.Nullable String sentFromReplyAddress) {
    this.sentFromReplyAddress = sentFromReplyAddress;
  }


  public CreateEmailSentRequest sentTime(@jakarta.annotation.Nullable String sentTime) {
    this.sentTime = sentTime;
    return this;
  }

  /**
   * Get sentTime
   * @return sentTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SENT_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSentTime() {
    return sentTime;
  }


  @JsonProperty(JSON_PROPERTY_SENT_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSentTime(@jakarta.annotation.Nullable String sentTime) {
    this.sentTime = sentTime;
  }


  public CreateEmailSentRequest sentToAddress(@jakarta.annotation.Nonnull String sentToAddress) {
    this.sentToAddress = sentToAddress;
    return this;
  }

  /**
   * Get sentToAddress
   * @return sentToAddress
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SENT_TO_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getSentToAddress() {
    return sentToAddress;
  }


  @JsonProperty(JSON_PROPERTY_SENT_TO_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSentToAddress(@jakarta.annotation.Nonnull String sentToAddress) {
    this.sentToAddress = sentToAddress;
  }


  public CreateEmailSentRequest sentToBccAddressList(@jakarta.annotation.Nullable List<String> sentToBccAddressList) {
    this.sentToBccAddressList = sentToBccAddressList;
    return this;
  }

  public CreateEmailSentRequest addSentToBccAddressListItem(String sentToBccAddressListItem) {
    if (this.sentToBccAddressList == null) {
      this.sentToBccAddressList = new ArrayList<>();
    }
    this.sentToBccAddressList.add(sentToBccAddressListItem);
    return this;
  }

  /**
   * Get sentToBccAddressList
   * @return sentToBccAddressList
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SENT_TO_BCC_ADDRESS_LIST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getSentToBccAddressList() {
    return sentToBccAddressList;
  }


  @JsonProperty(JSON_PROPERTY_SENT_TO_BCC_ADDRESS_LIST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSentToBccAddressList(@jakarta.annotation.Nullable List<String> sentToBccAddressList) {
    this.sentToBccAddressList = sentToBccAddressList;
  }


  public CreateEmailSentRequest sentToCcAddressList(@jakarta.annotation.Nullable List<String> sentToCcAddressList) {
    this.sentToCcAddressList = sentToCcAddressList;
    return this;
  }

  public CreateEmailSentRequest addSentToCcAddressListItem(String sentToCcAddressListItem) {
    if (this.sentToCcAddressList == null) {
      this.sentToCcAddressList = new ArrayList<>();
    }
    this.sentToCcAddressList.add(sentToCcAddressListItem);
    return this;
  }

  /**
   * Get sentToCcAddressList
   * @return sentToCcAddressList
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SENT_TO_CC_ADDRESS_LIST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getSentToCcAddressList() {
    return sentToCcAddressList;
  }


  @JsonProperty(JSON_PROPERTY_SENT_TO_CC_ADDRESS_LIST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSentToCcAddressList(@jakarta.annotation.Nullable List<String> sentToCcAddressList) {
    this.sentToCcAddressList = sentToCcAddressList;
  }


  public CreateEmailSentRequest subject(@jakarta.annotation.Nullable String subject) {
    this.subject = subject;
    return this;
  }

  /**
   * Get subject
   * @return subject
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SUBJECT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSubject() {
    return subject;
  }


  @JsonProperty(JSON_PROPERTY_SUBJECT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubject(@jakarta.annotation.Nullable String subject) {
    this.subject = subject;
  }

  /**
   * Return true if this CreateEmailSentRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateEmailSentRequest createEmailSentRequest = (CreateEmailSentRequest) o;
    return Objects.equals(this.clickedTime, createEmailSentRequest.clickedTime) &&
        Objects.equals(this.contactId, createEmailSentRequest.contactId) &&
        Objects.equals(this.headers, createEmailSentRequest.headers) &&
        Objects.equals(this.htmlContent, createEmailSentRequest.htmlContent) &&
        Objects.equals(this.openedTime, createEmailSentRequest.openedTime) &&
        Objects.equals(this.originalProvider, createEmailSentRequest.originalProvider) &&
        Objects.equals(this.originalProviderId, createEmailSentRequest.originalProviderId) &&
        Objects.equals(this.plainContent, createEmailSentRequest.plainContent) &&
        Objects.equals(this.providerSourceId, createEmailSentRequest.providerSourceId) &&
        Objects.equals(this.receivedTime, createEmailSentRequest.receivedTime) &&
        Objects.equals(this.sentFromAddress, createEmailSentRequest.sentFromAddress) &&
        Objects.equals(this.sentFromReplyAddress, createEmailSentRequest.sentFromReplyAddress) &&
        Objects.equals(this.sentTime, createEmailSentRequest.sentTime) &&
        Objects.equals(this.sentToAddress, createEmailSentRequest.sentToAddress) &&
        Objects.equals(this.sentToBccAddressList, createEmailSentRequest.sentToBccAddressList) &&
        Objects.equals(this.sentToCcAddressList, createEmailSentRequest.sentToCcAddressList) &&
        Objects.equals(this.subject, createEmailSentRequest.subject);
  }

  @Override
  public int hashCode() {
    return Objects.hash(clickedTime, contactId, headers, htmlContent, openedTime, originalProvider, originalProviderId, plainContent, providerSourceId, receivedTime, sentFromAddress, sentFromReplyAddress, sentTime, sentToAddress, sentToBccAddressList, sentToCcAddressList, subject);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateEmailSentRequest {\n");
    sb.append("    clickedTime: ").append(toIndentedString(clickedTime)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    headers: ").append(toIndentedString(headers)).append("\n");
    sb.append("    htmlContent: ").append(toIndentedString(htmlContent)).append("\n");
    sb.append("    openedTime: ").append(toIndentedString(openedTime)).append("\n");
    sb.append("    originalProvider: ").append(toIndentedString(originalProvider)).append("\n");
    sb.append("    originalProviderId: ").append(toIndentedString(originalProviderId)).append("\n");
    sb.append("    plainContent: ").append(toIndentedString(plainContent)).append("\n");
    sb.append("    providerSourceId: ").append(toIndentedString(providerSourceId)).append("\n");
    sb.append("    receivedTime: ").append(toIndentedString(receivedTime)).append("\n");
    sb.append("    sentFromAddress: ").append(toIndentedString(sentFromAddress)).append("\n");
    sb.append("    sentFromReplyAddress: ").append(toIndentedString(sentFromReplyAddress)).append("\n");
    sb.append("    sentTime: ").append(toIndentedString(sentTime)).append("\n");
    sb.append("    sentToAddress: ").append(toIndentedString(sentToAddress)).append("\n");
    sb.append("    sentToBccAddressList: ").append(toIndentedString(sentToBccAddressList)).append("\n");
    sb.append("    sentToCcAddressList: ").append(toIndentedString(sentToCcAddressList)).append("\n");
    sb.append("    subject: ").append(toIndentedString(subject)).append("\n");
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
    
        private CreateEmailSentRequest instance;
    
        public Builder() {
          this(new CreateEmailSentRequest());
        }
    
        protected Builder(CreateEmailSentRequest instance) {
          this.instance = instance;
        }
    
        public CreateEmailSentRequest.Builder clickedTime(String clickedTime) {
              this.instance.clickedTime = clickedTime;
          return this;
        }
            public CreateEmailSentRequest.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public CreateEmailSentRequest.Builder headers(String headers) {
              this.instance.headers = headers;
          return this;
        }
            public CreateEmailSentRequest.Builder htmlContent(String htmlContent) {
              this.instance.htmlContent = htmlContent;
          return this;
        }
            public CreateEmailSentRequest.Builder openedTime(String openedTime) {
              this.instance.openedTime = openedTime;
          return this;
        }
            public CreateEmailSentRequest.Builder originalProvider(OriginalProviderEnum originalProvider) {
              this.instance.originalProvider = originalProvider;
          return this;
        }
            public CreateEmailSentRequest.Builder originalProviderId(String originalProviderId) {
              this.instance.originalProviderId = originalProviderId;
          return this;
        }
            public CreateEmailSentRequest.Builder plainContent(String plainContent) {
              this.instance.plainContent = plainContent;
          return this;
        }
            public CreateEmailSentRequest.Builder providerSourceId(String providerSourceId) {
              this.instance.providerSourceId = providerSourceId;
          return this;
        }
            public CreateEmailSentRequest.Builder receivedTime(String receivedTime) {
              this.instance.receivedTime = receivedTime;
          return this;
        }
            public CreateEmailSentRequest.Builder sentFromAddress(String sentFromAddress) {
              this.instance.sentFromAddress = sentFromAddress;
          return this;
        }
            public CreateEmailSentRequest.Builder sentFromReplyAddress(String sentFromReplyAddress) {
              this.instance.sentFromReplyAddress = sentFromReplyAddress;
          return this;
        }
            public CreateEmailSentRequest.Builder sentTime(String sentTime) {
              this.instance.sentTime = sentTime;
          return this;
        }
            public CreateEmailSentRequest.Builder sentToAddress(String sentToAddress) {
              this.instance.sentToAddress = sentToAddress;
          return this;
        }
            public CreateEmailSentRequest.Builder sentToBccAddressList(List<String> sentToBccAddressList) {
              this.instance.sentToBccAddressList = sentToBccAddressList;
          return this;
        }
            public CreateEmailSentRequest.Builder sentToCcAddressList(List<String> sentToCcAddressList) {
              this.instance.sentToCcAddressList = sentToCcAddressList;
          return this;
        }
            public CreateEmailSentRequest.Builder subject(String subject) {
              this.instance.subject = subject;
          return this;
        }
        
    
        /**
        * returns a built CreateEmailSentRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateEmailSentRequest build() {
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
      public static CreateEmailSentRequest.Builder builder() {
        return new CreateEmailSentRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateEmailSentRequest.Builder toBuilder() {
        return new CreateEmailSentRequest.Builder()
          .clickedTime(getClickedTime())
          .contactId(getContactId())
          .headers(getHeaders())
          .htmlContent(getHtmlContent())
          .openedTime(getOpenedTime())
          .originalProvider(getOriginalProvider())
          .originalProviderId(getOriginalProviderId())
          .plainContent(getPlainContent())
          .providerSourceId(getProviderSourceId())
          .receivedTime(getReceivedTime())
          .sentFromAddress(getSentFromAddress())
          .sentFromReplyAddress(getSentFromReplyAddress())
          .sentTime(getSentTime())
          .sentToAddress(getSentToAddress())
          .sentToBccAddressList(getSentToBccAddressList())
          .sentToCcAddressList(getSentToCcAddressList())
          .subject(getSubject());
      }
}

