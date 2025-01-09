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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * UpdateFileRequest
 */
@JsonPropertyOrder({
  UpdateFileRequest.JSON_PROPERTY_FILE_NAME,
  UpdateFileRequest.JSON_PROPERTY_IS_PUBLIC
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateFileRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FILE_NAME = "file_name";
  @jakarta.annotation.Nullable  private String fileName;

  public static final String JSON_PROPERTY_IS_PUBLIC = "is_public";
  @jakarta.annotation.Nullable  private Boolean isPublic;

  public UpdateFileRequest() { 
  }

  public UpdateFileRequest fileName(@jakarta.annotation.Nullable String fileName) {
    this.fileName = fileName;
    return this;
  }

  /**
   * Get fileName
   * @return fileName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public UpdateFileRequest isPublic(@jakarta.annotation.Nullable Boolean isPublic) {
    this.isPublic = isPublic;
    return this;
  }

  /**
   * Get isPublic
   * @return isPublic
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_IS_PUBLIC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getIsPublic() {
    return isPublic;
  }


  @JsonProperty(JSON_PROPERTY_IS_PUBLIC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsPublic(@jakarta.annotation.Nullable Boolean isPublic) {
    this.isPublic = isPublic;
  }

  /**
   * Return true if this UpdateFileRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateFileRequest updateFileRequest = (UpdateFileRequest) o;
    return Objects.equals(this.fileName, updateFileRequest.fileName) &&
        Objects.equals(this.isPublic, updateFileRequest.isPublic);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fileName, isPublic);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateFileRequest {\n");
    sb.append("    fileName: ").append(toIndentedString(fileName)).append("\n");
    sb.append("    isPublic: ").append(toIndentedString(isPublic)).append("\n");
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
    
        private UpdateFileRequest instance;
    
        public Builder() {
          this(new UpdateFileRequest());
        }
    
        protected Builder(UpdateFileRequest instance) {
          this.instance = instance;
        }
    
        public UpdateFileRequest.Builder fileName(String fileName) {
              this.instance.fileName = fileName;
          return this;
        }
            public UpdateFileRequest.Builder isPublic(Boolean isPublic) {
              this.instance.isPublic = isPublic;
          return this;
        }
        
    
        /**
        * returns a built UpdateFileRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateFileRequest build() {
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
      public static UpdateFileRequest.Builder builder() {
        return new UpdateFileRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateFileRequest.Builder toBuilder() {
        return new UpdateFileRequest.Builder()
          .fileName(getFileName())
          .isPublic(getIsPublic());
      }
}

