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
 * EmailSentWithContent
 */
@JsonPropertyOrder({
  EmailSentWithContent.JSON_PROPERTY_CLICKED_TIME,
  EmailSentWithContent.JSON_PROPERTY_CONTACT_ID,
  EmailSentWithContent.JSON_PROPERTY_HEADERS,
  EmailSentWithContent.JSON_PROPERTY_HTML_CONTENT,
  EmailSentWithContent.JSON_PROPERTY_ID,
  EmailSentWithContent.JSON_PROPERTY_OPENED_TIME,
  EmailSentWithContent.JSON_PROPERTY_ORIGINAL_PROVIDER,
  EmailSentWithContent.JSON_PROPERTY_ORIGINAL_PROVIDER_ID,
  EmailSentWithContent.JSON_PROPERTY_PLAIN_CONTENT,
  EmailSentWithContent.JSON_PROPERTY_PROVIDER_SOURCE_ID,
  EmailSentWithContent.JSON_PROPERTY_RECEIVED_TIME,
  EmailSentWithContent.JSON_PROPERTY_SENT_FROM_ADDRESS,
  EmailSentWithContent.JSON_PROPERTY_SENT_FROM_REPLY_ADDRESS,
  EmailSentWithContent.JSON_PROPERTY_SENT_TIME,
  EmailSentWithContent.JSON_PROPERTY_SENT_TO_ADDRESS,
  EmailSentWithContent.JSON_PROPERTY_SENT_TO_BCC_ADDRESS_LIST,
  EmailSentWithContent.JSON_PROPERTY_SENT_TO_CC_ADDRESS_LIST,
  EmailSentWithContent.JSON_PROPERTY_SUBJECT
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class EmailSentWithContent implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CLICKED_TIME = "clicked_time";
  @jakarta.annotation.Nullable  private String clickedTime;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_HEADERS = "headers";
  @jakarta.annotation.Nullable  private String headers;

  public static final String JSON_PROPERTY_HTML_CONTENT = "html_content";
  @jakarta.annotation.Nullable  private String htmlContent;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_OPENED_TIME = "opened_time";
  @jakarta.annotation.Nullable  private String openedTime;

  /**
   * Gets or Sets originalProvider
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
  @jakarta.annotation.Nullable  private String sentToAddress;

  public static final String JSON_PROPERTY_SENT_TO_BCC_ADDRESS_LIST = "sent_to_bcc_address_list";
  @jakarta.annotation.Nullable  private List<String> sentToBccAddressList = new ArrayList<>();

  public static final String JSON_PROPERTY_SENT_TO_CC_ADDRESS_LIST = "sent_to_cc_address_list";
  @jakarta.annotation.Nullable  private List<String> sentToCcAddressList = new ArrayList<>();

  public static final String JSON_PROPERTY_SUBJECT = "subject";
  @jakarta.annotation.Nullable  private String subject;

  public EmailSentWithContent() { 
  }

  public EmailSentWithContent clickedTime(@jakarta.annotation.Nullable String clickedTime) {
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


  public EmailSentWithContent contactId(@jakarta.annotation.Nullable String contactId) {
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


  public EmailSentWithContent headers(@jakarta.annotation.Nullable String headers) {
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


  public EmailSentWithContent htmlContent(@jakarta.annotation.Nullable String htmlContent) {
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


  public EmailSentWithContent id(@jakarta.annotation.Nullable String id) {
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


  public EmailSentWithContent openedTime(@jakarta.annotation.Nullable String openedTime) {
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


  public EmailSentWithContent originalProvider(@jakarta.annotation.Nullable OriginalProviderEnum originalProvider) {
    this.originalProvider = originalProvider;
    return this;
  }

  /**
   * Get originalProvider
   * @return originalProvider
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public EmailSentWithContent originalProviderId(@jakarta.annotation.Nullable String originalProviderId) {
    this.originalProviderId = originalProviderId;
    return this;
  }

  /**
   * Get originalProviderId
   * @return originalProviderId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public EmailSentWithContent plainContent(@jakarta.annotation.Nullable String plainContent) {
    this.plainContent = plainContent;
    return this;
  }

  /**
   * Base64 encoded plain text
   * @return plainContent
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Base64 encoded plain text")
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


  public EmailSentWithContent providerSourceId(@jakarta.annotation.Nullable String providerSourceId) {
    this.providerSourceId = providerSourceId;
    return this;
  }

  /**
   * Get providerSourceId
   * @return providerSourceId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public EmailSentWithContent receivedTime(@jakarta.annotation.Nullable String receivedTime) {
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


  public EmailSentWithContent sentFromAddress(@jakarta.annotation.Nullable String sentFromAddress) {
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


  public EmailSentWithContent sentFromReplyAddress(@jakarta.annotation.Nullable String sentFromReplyAddress) {
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


  public EmailSentWithContent sentTime(@jakarta.annotation.Nullable String sentTime) {
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


  public EmailSentWithContent sentToAddress(@jakarta.annotation.Nullable String sentToAddress) {
    this.sentToAddress = sentToAddress;
    return this;
  }

  /**
   * Get sentToAddress
   * @return sentToAddress
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SENT_TO_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSentToAddress() {
    return sentToAddress;
  }


  @JsonProperty(JSON_PROPERTY_SENT_TO_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSentToAddress(@jakarta.annotation.Nullable String sentToAddress) {
    this.sentToAddress = sentToAddress;
  }


  public EmailSentWithContent sentToBccAddressList(@jakarta.annotation.Nullable List<String> sentToBccAddressList) {
    this.sentToBccAddressList = sentToBccAddressList;
    return this;
  }

  public EmailSentWithContent addSentToBccAddressListItem(String sentToBccAddressListItem) {
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


  public EmailSentWithContent sentToCcAddressList(@jakarta.annotation.Nullable List<String> sentToCcAddressList) {
    this.sentToCcAddressList = sentToCcAddressList;
    return this;
  }

  public EmailSentWithContent addSentToCcAddressListItem(String sentToCcAddressListItem) {
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


  public EmailSentWithContent subject(@jakarta.annotation.Nullable String subject) {
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
   * Return true if this EmailSentWithContent object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EmailSentWithContent emailSentWithContent = (EmailSentWithContent) o;
    return Objects.equals(this.clickedTime, emailSentWithContent.clickedTime) &&
        Objects.equals(this.contactId, emailSentWithContent.contactId) &&
        Objects.equals(this.headers, emailSentWithContent.headers) &&
        Objects.equals(this.htmlContent, emailSentWithContent.htmlContent) &&
        Objects.equals(this.id, emailSentWithContent.id) &&
        Objects.equals(this.openedTime, emailSentWithContent.openedTime) &&
        Objects.equals(this.originalProvider, emailSentWithContent.originalProvider) &&
        Objects.equals(this.originalProviderId, emailSentWithContent.originalProviderId) &&
        Objects.equals(this.plainContent, emailSentWithContent.plainContent) &&
        Objects.equals(this.providerSourceId, emailSentWithContent.providerSourceId) &&
        Objects.equals(this.receivedTime, emailSentWithContent.receivedTime) &&
        Objects.equals(this.sentFromAddress, emailSentWithContent.sentFromAddress) &&
        Objects.equals(this.sentFromReplyAddress, emailSentWithContent.sentFromReplyAddress) &&
        Objects.equals(this.sentTime, emailSentWithContent.sentTime) &&
        Objects.equals(this.sentToAddress, emailSentWithContent.sentToAddress) &&
        Objects.equals(this.sentToBccAddressList, emailSentWithContent.sentToBccAddressList) &&
        Objects.equals(this.sentToCcAddressList, emailSentWithContent.sentToCcAddressList) &&
        Objects.equals(this.subject, emailSentWithContent.subject);
  }

  @Override
  public int hashCode() {
    return Objects.hash(clickedTime, contactId, headers, htmlContent, id, openedTime, originalProvider, originalProviderId, plainContent, providerSourceId, receivedTime, sentFromAddress, sentFromReplyAddress, sentTime, sentToAddress, sentToBccAddressList, sentToCcAddressList, subject);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EmailSentWithContent {\n");
    sb.append("    clickedTime: ").append(toIndentedString(clickedTime)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    headers: ").append(toIndentedString(headers)).append("\n");
    sb.append("    htmlContent: ").append(toIndentedString(htmlContent)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
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
    
        private EmailSentWithContent instance;
    
        public Builder() {
          this(new EmailSentWithContent());
        }
    
        protected Builder(EmailSentWithContent instance) {
          this.instance = instance;
        }
    
        public EmailSentWithContent.Builder clickedTime(String clickedTime) {
              this.instance.clickedTime = clickedTime;
          return this;
        }
            public EmailSentWithContent.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public EmailSentWithContent.Builder headers(String headers) {
              this.instance.headers = headers;
          return this;
        }
            public EmailSentWithContent.Builder htmlContent(String htmlContent) {
              this.instance.htmlContent = htmlContent;
          return this;
        }
            public EmailSentWithContent.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public EmailSentWithContent.Builder openedTime(String openedTime) {
              this.instance.openedTime = openedTime;
          return this;
        }
            public EmailSentWithContent.Builder originalProvider(OriginalProviderEnum originalProvider) {
              this.instance.originalProvider = originalProvider;
          return this;
        }
            public EmailSentWithContent.Builder originalProviderId(String originalProviderId) {
              this.instance.originalProviderId = originalProviderId;
          return this;
        }
            public EmailSentWithContent.Builder plainContent(String plainContent) {
              this.instance.plainContent = plainContent;
          return this;
        }
            public EmailSentWithContent.Builder providerSourceId(String providerSourceId) {
              this.instance.providerSourceId = providerSourceId;
          return this;
        }
            public EmailSentWithContent.Builder receivedTime(String receivedTime) {
              this.instance.receivedTime = receivedTime;
          return this;
        }
            public EmailSentWithContent.Builder sentFromAddress(String sentFromAddress) {
              this.instance.sentFromAddress = sentFromAddress;
          return this;
        }
            public EmailSentWithContent.Builder sentFromReplyAddress(String sentFromReplyAddress) {
              this.instance.sentFromReplyAddress = sentFromReplyAddress;
          return this;
        }
            public EmailSentWithContent.Builder sentTime(String sentTime) {
              this.instance.sentTime = sentTime;
          return this;
        }
            public EmailSentWithContent.Builder sentToAddress(String sentToAddress) {
              this.instance.sentToAddress = sentToAddress;
          return this;
        }
            public EmailSentWithContent.Builder sentToBccAddressList(List<String> sentToBccAddressList) {
              this.instance.sentToBccAddressList = sentToBccAddressList;
          return this;
        }
            public EmailSentWithContent.Builder sentToCcAddressList(List<String> sentToCcAddressList) {
              this.instance.sentToCcAddressList = sentToCcAddressList;
          return this;
        }
            public EmailSentWithContent.Builder subject(String subject) {
              this.instance.subject = subject;
          return this;
        }
        
    
        /**
        * returns a built EmailSentWithContent instance.
        *
        * The builder is not reusable.
        */
        public EmailSentWithContent build() {
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
      public static EmailSentWithContent.Builder builder() {
        return new EmailSentWithContent.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public EmailSentWithContent.Builder toBuilder() {
        return new EmailSentWithContent.Builder()
          .clickedTime(getClickedTime())
          .contactId(getContactId())
          .headers(getHeaders())
          .htmlContent(getHtmlContent())
          .id(getId())
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

