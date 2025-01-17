/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
 * SetDefaultCommissionProgramResponse
 */
@JsonPropertyOrder({
  SetDefaultCommissionProgramResponse.JSON_PROPERTY_ID,
  SetDefaultCommissionProgramResponse.JSON_PROPERTY_MESSAGE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class SetDefaultCommissionProgramResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_MESSAGE = "message";
  @jakarta.annotation.Nullable  private String message;

  public SetDefaultCommissionProgramResponse() { 
  }

  public SetDefaultCommissionProgramResponse id(@jakarta.annotation.Nullable String id) {
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


  public SetDefaultCommissionProgramResponse message(@jakarta.annotation.Nullable String message) {
    this.message = message;
    return this;
  }

  /**
   * Get message
   * @return message
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMessage() {
    return message;
  }


  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMessage(@jakarta.annotation.Nullable String message) {
    this.message = message;
  }

  /**
   * Return true if this SetDefaultCommissionProgramResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SetDefaultCommissionProgramResponse setDefaultCommissionProgramResponse = (SetDefaultCommissionProgramResponse) o;
    return Objects.equals(this.id, setDefaultCommissionProgramResponse.id) &&
        Objects.equals(this.message, setDefaultCommissionProgramResponse.message);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, message);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SetDefaultCommissionProgramResponse {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
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
    
        private SetDefaultCommissionProgramResponse instance;
    
        public Builder() {
          this(new SetDefaultCommissionProgramResponse());
        }
    
        protected Builder(SetDefaultCommissionProgramResponse instance) {
          this.instance = instance;
        }
    
        public SetDefaultCommissionProgramResponse.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public SetDefaultCommissionProgramResponse.Builder message(String message) {
              this.instance.message = message;
          return this;
        }
        
    
        /**
        * returns a built SetDefaultCommissionProgramResponse instance.
        *
        * The builder is not reusable.
        */
        public SetDefaultCommissionProgramResponse build() {
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
      public static SetDefaultCommissionProgramResponse.Builder builder() {
        return new SetDefaultCommissionProgramResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public SetDefaultCommissionProgramResponse.Builder toBuilder() {
        return new SetDefaultCommissionProgramResponse.Builder()
          .id(getId())
          .message(getMessage());
      }
}

