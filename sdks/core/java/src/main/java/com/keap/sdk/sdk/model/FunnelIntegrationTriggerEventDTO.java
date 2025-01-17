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
 * FunnelIntegrationTriggerEventDTO
 */
@JsonPropertyOrder({
  FunnelIntegrationTriggerEventDTO.JSON_PROPERTY_CONTACT_ID,
  FunnelIntegrationTriggerEventDTO.JSON_PROPERTY_ORACLE_ID,
  FunnelIntegrationTriggerEventDTO.JSON_PROPERTY_SCHEMA_DATA
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class FunnelIntegrationTriggerEventDTO implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private Long contactId;

  public static final String JSON_PROPERTY_ORACLE_ID = "oracle_id";
  @jakarta.annotation.Nullable  private String oracleId;

  public static final String JSON_PROPERTY_SCHEMA_DATA = "schema_data";
  @jakarta.annotation.Nullable  private String schemaData;

  public FunnelIntegrationTriggerEventDTO() { 
  }

  public FunnelIntegrationTriggerEventDTO contactId(@jakarta.annotation.Nullable Long contactId) {
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
  public Long getContactId() {
    return contactId;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactId(@jakarta.annotation.Nullable Long contactId) {
    this.contactId = contactId;
  }


  public FunnelIntegrationTriggerEventDTO oracleId(@jakarta.annotation.Nullable String oracleId) {
    this.oracleId = oracleId;
    return this;
  }

  /**
   * Get oracleId
   * @return oracleId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ORACLE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getOracleId() {
    return oracleId;
  }


  @JsonProperty(JSON_PROPERTY_ORACLE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOracleId(@jakarta.annotation.Nullable String oracleId) {
    this.oracleId = oracleId;
  }


  public FunnelIntegrationTriggerEventDTO schemaData(@jakarta.annotation.Nullable String schemaData) {
    this.schemaData = schemaData;
    return this;
  }

  /**
   * Get schemaData
   * @return schemaData
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SCHEMA_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSchemaData() {
    return schemaData;
  }


  @JsonProperty(JSON_PROPERTY_SCHEMA_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSchemaData(@jakarta.annotation.Nullable String schemaData) {
    this.schemaData = schemaData;
  }

  /**
   * Return true if this FunnelIntegrationTriggerEventDTO object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FunnelIntegrationTriggerEventDTO funnelIntegrationTriggerEventDTO = (FunnelIntegrationTriggerEventDTO) o;
    return Objects.equals(this.contactId, funnelIntegrationTriggerEventDTO.contactId) &&
        Objects.equals(this.oracleId, funnelIntegrationTriggerEventDTO.oracleId) &&
        Objects.equals(this.schemaData, funnelIntegrationTriggerEventDTO.schemaData);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contactId, oracleId, schemaData);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FunnelIntegrationTriggerEventDTO {\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    oracleId: ").append(toIndentedString(oracleId)).append("\n");
    sb.append("    schemaData: ").append(toIndentedString(schemaData)).append("\n");
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
    
        private FunnelIntegrationTriggerEventDTO instance;
    
        public Builder() {
          this(new FunnelIntegrationTriggerEventDTO());
        }
    
        protected Builder(FunnelIntegrationTriggerEventDTO instance) {
          this.instance = instance;
        }
    
        public FunnelIntegrationTriggerEventDTO.Builder contactId(Long contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public FunnelIntegrationTriggerEventDTO.Builder oracleId(String oracleId) {
              this.instance.oracleId = oracleId;
          return this;
        }
            public FunnelIntegrationTriggerEventDTO.Builder schemaData(String schemaData) {
              this.instance.schemaData = schemaData;
          return this;
        }
        
    
        /**
        * returns a built FunnelIntegrationTriggerEventDTO instance.
        *
        * The builder is not reusable.
        */
        public FunnelIntegrationTriggerEventDTO build() {
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
      public static FunnelIntegrationTriggerEventDTO.Builder builder() {
        return new FunnelIntegrationTriggerEventDTO.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public FunnelIntegrationTriggerEventDTO.Builder toBuilder() {
        return new FunnelIntegrationTriggerEventDTO.Builder()
          .contactId(getContactId())
          .oracleId(getOracleId())
          .schemaData(getSchemaData());
      }
}

