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
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateReferralRequest
 */
@JsonPropertyOrder({
  CreateReferralRequest.JSON_PROPERTY_CONTACT_ID,
  CreateReferralRequest.JSON_PROPERTY_DESCRIPTION,
  CreateReferralRequest.JSON_PROPERTY_EXPIRATION_TIME,
  CreateReferralRequest.JSON_PROPERTY_IP_ADDRESS,
  CreateReferralRequest.JSON_PROPERTY_REFERRAL_PARTNER_ID,
  CreateReferralRequest.JSON_PROPERTY_REFERRAL_TIME,
  CreateReferralRequest.JSON_PROPERTY_REFERRAL_TYPE,
  CreateReferralRequest.JSON_PROPERTY_SOURCE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateReferralRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_EXPIRATION_TIME = "expiration_time";
  @jakarta.annotation.Nullable  private String expirationTime;

  public static final String JSON_PROPERTY_IP_ADDRESS = "ip_address";
  @jakarta.annotation.Nullable  private String ipAddress;

  public static final String JSON_PROPERTY_REFERRAL_PARTNER_ID = "referral_partner_id";
  @jakarta.annotation.Nullable  private String referralPartnerId;

  public static final String JSON_PROPERTY_REFERRAL_TIME = "referral_time";
  @jakarta.annotation.Nullable  private String referralTime;

  /**
   * Gets or Sets referralType
   */
  public enum ReferralTypeEnum {
    COOKIE(String.valueOf("COOKIE")),
    
    PERMANENT(String.valueOf("PERMANENT")),
    
    MANUAL(String.valueOf("MANUAL")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    ReferralTypeEnum(String value) {
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
    public static ReferralTypeEnum fromValue(String value) {
      for (ReferralTypeEnum b : ReferralTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_REFERRAL_TYPE = "referral_type";
  @jakarta.annotation.Nullable  private ReferralTypeEnum referralType;

  public static final String JSON_PROPERTY_SOURCE = "source";
  @jakarta.annotation.Nullable  private String source;

  public CreateReferralRequest() { 
  }

  public CreateReferralRequest contactId(@jakarta.annotation.Nullable String contactId) {
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


  public CreateReferralRequest description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(@jakarta.annotation.Nullable String description) {
    this.description = description;
  }


  public CreateReferralRequest expirationTime(@jakarta.annotation.Nullable String expirationTime) {
    this.expirationTime = expirationTime;
    return this;
  }

  /**
   * Get expirationTime
   * @return expirationTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EXPIRATION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getExpirationTime() {
    return expirationTime;
  }


  @JsonProperty(JSON_PROPERTY_EXPIRATION_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExpirationTime(@jakarta.annotation.Nullable String expirationTime) {
    this.expirationTime = expirationTime;
  }


  public CreateReferralRequest ipAddress(@jakarta.annotation.Nullable String ipAddress) {
    this.ipAddress = ipAddress;
    return this;
  }

  /**
   * Get ipAddress
   * @return ipAddress
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_IP_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getIpAddress() {
    return ipAddress;
  }


  @JsonProperty(JSON_PROPERTY_IP_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIpAddress(@jakarta.annotation.Nullable String ipAddress) {
    this.ipAddress = ipAddress;
  }


  public CreateReferralRequest referralPartnerId(@jakarta.annotation.Nullable String referralPartnerId) {
    this.referralPartnerId = referralPartnerId;
    return this;
  }

  /**
   * Get referralPartnerId
   * @return referralPartnerId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REFERRAL_PARTNER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getReferralPartnerId() {
    return referralPartnerId;
  }


  @JsonProperty(JSON_PROPERTY_REFERRAL_PARTNER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReferralPartnerId(@jakarta.annotation.Nullable String referralPartnerId) {
    this.referralPartnerId = referralPartnerId;
  }


  public CreateReferralRequest referralTime(@jakarta.annotation.Nullable String referralTime) {
    this.referralTime = referralTime;
    return this;
  }

  /**
   * Get referralTime
   * @return referralTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REFERRAL_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getReferralTime() {
    return referralTime;
  }


  @JsonProperty(JSON_PROPERTY_REFERRAL_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReferralTime(@jakarta.annotation.Nullable String referralTime) {
    this.referralTime = referralTime;
  }


  public CreateReferralRequest referralType(@jakarta.annotation.Nullable ReferralTypeEnum referralType) {
    this.referralType = referralType;
    return this;
  }

  /**
   * Get referralType
   * @return referralType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REFERRAL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ReferralTypeEnum getReferralType() {
    return referralType;
  }


  @JsonProperty(JSON_PROPERTY_REFERRAL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReferralType(@jakarta.annotation.Nullable ReferralTypeEnum referralType) {
    this.referralType = referralType;
  }


  public CreateReferralRequest source(@jakarta.annotation.Nullable String source) {
    this.source = source;
    return this;
  }

  /**
   * Get source
   * @return source
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SOURCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSource() {
    return source;
  }


  @JsonProperty(JSON_PROPERTY_SOURCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSource(@jakarta.annotation.Nullable String source) {
    this.source = source;
  }

  /**
   * Return true if this CreateReferralRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateReferralRequest createReferralRequest = (CreateReferralRequest) o;
    return Objects.equals(this.contactId, createReferralRequest.contactId) &&
        Objects.equals(this.description, createReferralRequest.description) &&
        Objects.equals(this.expirationTime, createReferralRequest.expirationTime) &&
        Objects.equals(this.ipAddress, createReferralRequest.ipAddress) &&
        Objects.equals(this.referralPartnerId, createReferralRequest.referralPartnerId) &&
        Objects.equals(this.referralTime, createReferralRequest.referralTime) &&
        Objects.equals(this.referralType, createReferralRequest.referralType) &&
        Objects.equals(this.source, createReferralRequest.source);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contactId, description, expirationTime, ipAddress, referralPartnerId, referralTime, referralType, source);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateReferralRequest {\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    expirationTime: ").append(toIndentedString(expirationTime)).append("\n");
    sb.append("    ipAddress: ").append(toIndentedString(ipAddress)).append("\n");
    sb.append("    referralPartnerId: ").append(toIndentedString(referralPartnerId)).append("\n");
    sb.append("    referralTime: ").append(toIndentedString(referralTime)).append("\n");
    sb.append("    referralType: ").append(toIndentedString(referralType)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
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
    
        private CreateReferralRequest instance;
    
        public Builder() {
          this(new CreateReferralRequest());
        }
    
        protected Builder(CreateReferralRequest instance) {
          this.instance = instance;
        }
    
        public CreateReferralRequest.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public CreateReferralRequest.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CreateReferralRequest.Builder expirationTime(String expirationTime) {
              this.instance.expirationTime = expirationTime;
          return this;
        }
            public CreateReferralRequest.Builder ipAddress(String ipAddress) {
              this.instance.ipAddress = ipAddress;
          return this;
        }
            public CreateReferralRequest.Builder referralPartnerId(String referralPartnerId) {
              this.instance.referralPartnerId = referralPartnerId;
          return this;
        }
            public CreateReferralRequest.Builder referralTime(String referralTime) {
              this.instance.referralTime = referralTime;
          return this;
        }
            public CreateReferralRequest.Builder referralType(ReferralTypeEnum referralType) {
              this.instance.referralType = referralType;
          return this;
        }
            public CreateReferralRequest.Builder source(String source) {
              this.instance.source = source;
          return this;
        }
        
    
        /**
        * returns a built CreateReferralRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateReferralRequest build() {
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
      public static CreateReferralRequest.Builder builder() {
        return new CreateReferralRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateReferralRequest.Builder toBuilder() {
        return new CreateReferralRequest.Builder()
          .contactId(getContactId())
          .description(getDescription())
          .expirationTime(getExpirationTime())
          .ipAddress(getIpAddress())
          .referralPartnerId(getReferralPartnerId())
          .referralTime(getReferralTime())
          .referralType(getReferralType())
          .source(getSource());
      }
}

