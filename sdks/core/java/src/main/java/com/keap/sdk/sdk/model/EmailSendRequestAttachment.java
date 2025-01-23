/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
 * EmailSendRequestAttachment
 */
@JsonPropertyOrder({
  EmailSendRequestAttachment.JSON_PROPERTY_FILE_DATA,
  EmailSendRequestAttachment.JSON_PROPERTY_FILE_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class EmailSendRequestAttachment implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FILE_DATA = "file_data";
  @jakarta.annotation.Nullable  private String fileData;

  public static final String JSON_PROPERTY_FILE_NAME = "file_name";
  @jakarta.annotation.Nullable  private String fileName;

  public EmailSendRequestAttachment() { 
  }

  public EmailSendRequestAttachment fileData(@jakarta.annotation.Nullable String fileData) {
    this.fileData = fileData;
    return this;
  }

  /**
   * The content of the attachment, encoded in Base64
   * @return fileData
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The content of the attachment, encoded in Base64")
  @JsonProperty(JSON_PROPERTY_FILE_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFileData() {
    return fileData;
  }


  @JsonProperty(JSON_PROPERTY_FILE_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFileData(@jakarta.annotation.Nullable String fileData) {
    this.fileData = fileData;
  }


  public EmailSendRequestAttachment fileName(@jakarta.annotation.Nullable String fileName) {
    this.fileName = fileName;
    return this;
  }

  /**
   * The filename of the attached file, including extension
   * @return fileName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The filename of the attached file, including extension")
  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFileName() {
    return fileName;
  }


  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFileName(@jakarta.annotation.Nullable String fileName) {
    this.fileName = fileName;
  }

  /**
   * Return true if this EmailSendRequestAttachment object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EmailSendRequestAttachment emailSendRequestAttachment = (EmailSendRequestAttachment) o;
    return Objects.equals(this.fileData, emailSendRequestAttachment.fileData) &&
        Objects.equals(this.fileName, emailSendRequestAttachment.fileName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fileData, fileName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EmailSendRequestAttachment {\n");
    sb.append("    fileData: ").append(toIndentedString(fileData)).append("\n");
    sb.append("    fileName: ").append(toIndentedString(fileName)).append("\n");
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
    
        private EmailSendRequestAttachment instance;
    
        public Builder() {
          this(new EmailSendRequestAttachment());
        }
    
        protected Builder(EmailSendRequestAttachment instance) {
          this.instance = instance;
        }
    
        public EmailSendRequestAttachment.Builder fileData(String fileData) {
              this.instance.fileData = fileData;
          return this;
        }
            public EmailSendRequestAttachment.Builder fileName(String fileName) {
              this.instance.fileName = fileName;
          return this;
        }
        
    
        /**
        * returns a built EmailSendRequestAttachment instance.
        *
        * The builder is not reusable.
        */
        public EmailSendRequestAttachment build() {
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
      public static EmailSendRequestAttachment.Builder builder() {
        return new EmailSendRequestAttachment.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public EmailSendRequestAttachment.Builder toBuilder() {
        return new EmailSendRequestAttachment.Builder()
          .fileData(getFileData())
          .fileName(getFileName());
      }
}

