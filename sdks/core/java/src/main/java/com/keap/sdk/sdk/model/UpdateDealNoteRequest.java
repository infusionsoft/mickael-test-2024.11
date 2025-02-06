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
 * Request model for updating a deal note.
 */
@Schema(description = "Request model for updating a deal note.")
@JsonPropertyOrder({
  UpdateDealNoteRequest.JSON_PROPERTY_BODY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class UpdateDealNoteRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BODY = "body";
  @jakarta.annotation.Nonnull  private String body;

  public UpdateDealNoteRequest() { 
  }

  public UpdateDealNoteRequest body(@jakarta.annotation.Nonnull String body) {
    this.body = body;
    return this;
  }

  /**
   * The body of the note. Must not be blank and must be between 1 and 5000 characters.
   * @return body
   */
  @jakarta.annotation.Nonnull  @NotNull
 @Size(min=1,max=5000)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The body of the note. Must not be blank and must be between 1 and 5000 characters.")
  @JsonProperty(JSON_PROPERTY_BODY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getBody() {
    return body;
  }


  @JsonProperty(JSON_PROPERTY_BODY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setBody(@jakarta.annotation.Nonnull String body) {
    this.body = body;
  }

  /**
   * Return true if this UpdateDealNoteRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateDealNoteRequest updateDealNoteRequest = (UpdateDealNoteRequest) o;
    return Objects.equals(this.body, updateDealNoteRequest.body);
  }

  @Override
  public int hashCode() {
    return Objects.hash(body);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateDealNoteRequest {\n");
    sb.append("    body: ").append(toIndentedString(body)).append("\n");
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
    
        private UpdateDealNoteRequest instance;
    
        public Builder() {
          this(new UpdateDealNoteRequest());
        }
    
        protected Builder(UpdateDealNoteRequest instance) {
          this.instance = instance;
        }
    
        public UpdateDealNoteRequest.Builder body(String body) {
              this.instance.body = body;
          return this;
        }
        
    
        /**
        * returns a built UpdateDealNoteRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateDealNoteRequest build() {
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
      public static UpdateDealNoteRequest.Builder builder() {
        return new UpdateDealNoteRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateDealNoteRequest.Builder toBuilder() {
        return new UpdateDealNoteRequest.Builder()
          .body(getBody());
      }
}

