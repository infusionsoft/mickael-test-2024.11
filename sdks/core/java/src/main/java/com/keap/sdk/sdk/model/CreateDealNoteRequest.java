/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
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
 * Request model for creating a deal note.
 */
@Schema(description = "Request model for creating a deal note.")
@JsonPropertyOrder({
  CreateDealNoteRequest.JSON_PROPERTY_BODY,
  CreateDealNoteRequest.JSON_PROPERTY_CREATED_BY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateDealNoteRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BODY = "body";
  @jakarta.annotation.Nonnull  private String body;

  public static final String JSON_PROPERTY_CREATED_BY = "created_by";
  @jakarta.annotation.Nonnull  private String createdBy;

  public CreateDealNoteRequest() { 
  }

  public CreateDealNoteRequest body(@jakarta.annotation.Nonnull String body) {
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


  public CreateDealNoteRequest createdBy(@jakarta.annotation.Nonnull String createdBy) {
    this.createdBy = createdBy;
    return this;
  }

  /**
   * The creator of the note. Must not be blank and must be between 1 and 255 characters.
   * @return createdBy
   */
  @jakarta.annotation.Nonnull  @NotNull
 @Size(min=1,max=255)  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The creator of the note. Must not be blank and must be between 1 and 255 characters.")
  @JsonProperty(JSON_PROPERTY_CREATED_BY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getCreatedBy() {
    return createdBy;
  }


  @JsonProperty(JSON_PROPERTY_CREATED_BY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCreatedBy(@jakarta.annotation.Nonnull String createdBy) {
    this.createdBy = createdBy;
  }

  /**
   * Return true if this CreateDealNoteRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateDealNoteRequest createDealNoteRequest = (CreateDealNoteRequest) o;
    return Objects.equals(this.body, createDealNoteRequest.body) &&
        Objects.equals(this.createdBy, createDealNoteRequest.createdBy);
  }

  @Override
  public int hashCode() {
    return Objects.hash(body, createdBy);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateDealNoteRequest {\n");
    sb.append("    body: ").append(toIndentedString(body)).append("\n");
    sb.append("    createdBy: ").append(toIndentedString(createdBy)).append("\n");
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
    
        private CreateDealNoteRequest instance;
    
        public Builder() {
          this(new CreateDealNoteRequest());
        }
    
        protected Builder(CreateDealNoteRequest instance) {
          this.instance = instance;
        }
    
        public CreateDealNoteRequest.Builder body(String body) {
              this.instance.body = body;
          return this;
        }
            public CreateDealNoteRequest.Builder createdBy(String createdBy) {
              this.instance.createdBy = createdBy;
          return this;
        }
        
    
        /**
        * returns a built CreateDealNoteRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateDealNoteRequest build() {
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
      public static CreateDealNoteRequest.Builder builder() {
        return new CreateDealNoteRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateDealNoteRequest.Builder toBuilder() {
        return new CreateDealNoteRequest.Builder()
          .body(getBody())
          .createdBy(getCreatedBy());
      }
}

