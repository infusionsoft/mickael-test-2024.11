/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
 * AffiliateRemoveFromProgramRequest
 */
@JsonPropertyOrder({
  AffiliateRemoveFromProgramRequest.JSON_PROPERTY_AFFILIATE_PROGRAM_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class AffiliateRemoveFromProgramRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AFFILIATE_PROGRAM_ID = "affiliate_program_id";
  @jakarta.annotation.Nullable  private String affiliateProgramId;

  public AffiliateRemoveFromProgramRequest() { 
  }

  public AffiliateRemoveFromProgramRequest affiliateProgramId(@jakarta.annotation.Nullable String affiliateProgramId) {
    this.affiliateProgramId = affiliateProgramId;
    return this;
  }

  /**
   * Get affiliateProgramId
   * @return affiliateProgramId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AFFILIATE_PROGRAM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getAffiliateProgramId() {
    return affiliateProgramId;
  }


  @JsonProperty(JSON_PROPERTY_AFFILIATE_PROGRAM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAffiliateProgramId(@jakarta.annotation.Nullable String affiliateProgramId) {
    this.affiliateProgramId = affiliateProgramId;
  }

  /**
   * Return true if this AffiliateRemoveFromProgramRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AffiliateRemoveFromProgramRequest affiliateRemoveFromProgramRequest = (AffiliateRemoveFromProgramRequest) o;
    return Objects.equals(this.affiliateProgramId, affiliateRemoveFromProgramRequest.affiliateProgramId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(affiliateProgramId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AffiliateRemoveFromProgramRequest {\n");
    sb.append("    affiliateProgramId: ").append(toIndentedString(affiliateProgramId)).append("\n");
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
    
        private AffiliateRemoveFromProgramRequest instance;
    
        public Builder() {
          this(new AffiliateRemoveFromProgramRequest());
        }
    
        protected Builder(AffiliateRemoveFromProgramRequest instance) {
          this.instance = instance;
        }
    
        public AffiliateRemoveFromProgramRequest.Builder affiliateProgramId(String affiliateProgramId) {
              this.instance.affiliateProgramId = affiliateProgramId;
          return this;
        }
        
    
        /**
        * returns a built AffiliateRemoveFromProgramRequest instance.
        *
        * The builder is not reusable.
        */
        public AffiliateRemoveFromProgramRequest build() {
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
      public static AffiliateRemoveFromProgramRequest.Builder builder() {
        return new AffiliateRemoveFromProgramRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AffiliateRemoveFromProgramRequest.Builder toBuilder() {
        return new AffiliateRemoveFromProgramRequest.Builder()
          .affiliateProgramId(getAffiliateProgramId());
      }
}

