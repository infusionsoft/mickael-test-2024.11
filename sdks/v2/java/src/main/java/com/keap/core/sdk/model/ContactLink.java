/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.core.sdk.model;

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
 * ContactLink
 */
@JsonPropertyOrder({
  ContactLink.JSON_PROPERTY_CONTACT1_ID,
  ContactLink.JSON_PROPERTY_CONTACT2_ID,
  ContactLink.JSON_PROPERTY_LINK_TYPE_ID,
  ContactLink.JSON_PROPERTY_LINK_TYPE_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ContactLink implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTACT1_ID = "contact1_id";
  @jakarta.annotation.Nullable  private String contact1Id;

  public static final String JSON_PROPERTY_CONTACT2_ID = "contact2_id";
  @jakarta.annotation.Nullable  private String contact2Id;

  public static final String JSON_PROPERTY_LINK_TYPE_ID = "link_type_id";
  @jakarta.annotation.Nullable  private String linkTypeId;

  public static final String JSON_PROPERTY_LINK_TYPE_NAME = "link_type_name";
  @jakarta.annotation.Nullable  private String linkTypeName;

  public ContactLink() { 
  }

  public ContactLink contact1Id(@jakarta.annotation.Nullable String contact1Id) {
    this.contact1Id = contact1Id;
    return this;
  }

  /**
   * Get contact1Id
   * @return contact1Id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT1_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContact1Id() {
    return contact1Id;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT1_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContact1Id(@jakarta.annotation.Nullable String contact1Id) {
    this.contact1Id = contact1Id;
  }


  public ContactLink contact2Id(@jakarta.annotation.Nullable String contact2Id) {
    this.contact2Id = contact2Id;
    return this;
  }

  /**
   * Get contact2Id
   * @return contact2Id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT2_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContact2Id() {
    return contact2Id;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT2_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContact2Id(@jakarta.annotation.Nullable String contact2Id) {
    this.contact2Id = contact2Id;
  }


  public ContactLink linkTypeId(@jakarta.annotation.Nullable String linkTypeId) {
    this.linkTypeId = linkTypeId;
    return this;
  }

  /**
   * Get linkTypeId
   * @return linkTypeId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LINK_TYPE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLinkTypeId() {
    return linkTypeId;
  }


  @JsonProperty(JSON_PROPERTY_LINK_TYPE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLinkTypeId(@jakarta.annotation.Nullable String linkTypeId) {
    this.linkTypeId = linkTypeId;
  }


  public ContactLink linkTypeName(@jakarta.annotation.Nullable String linkTypeName) {
    this.linkTypeName = linkTypeName;
    return this;
  }

  /**
   * Get linkTypeName
   * @return linkTypeName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LINK_TYPE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLinkTypeName() {
    return linkTypeName;
  }


  @JsonProperty(JSON_PROPERTY_LINK_TYPE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLinkTypeName(@jakarta.annotation.Nullable String linkTypeName) {
    this.linkTypeName = linkTypeName;
  }

  /**
   * Return true if this ContactLink object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ContactLink contactLink = (ContactLink) o;
    return Objects.equals(this.contact1Id, contactLink.contact1Id) &&
        Objects.equals(this.contact2Id, contactLink.contact2Id) &&
        Objects.equals(this.linkTypeId, contactLink.linkTypeId) &&
        Objects.equals(this.linkTypeName, contactLink.linkTypeName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contact1Id, contact2Id, linkTypeId, linkTypeName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ContactLink {\n");
    sb.append("    contact1Id: ").append(toIndentedString(contact1Id)).append("\n");
    sb.append("    contact2Id: ").append(toIndentedString(contact2Id)).append("\n");
    sb.append("    linkTypeId: ").append(toIndentedString(linkTypeId)).append("\n");
    sb.append("    linkTypeName: ").append(toIndentedString(linkTypeName)).append("\n");
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
    
        private ContactLink instance;
    
        public Builder() {
          this(new ContactLink());
        }
    
        protected Builder(ContactLink instance) {
          this.instance = instance;
        }
    
        public ContactLink.Builder contact1Id(String contact1Id) {
              this.instance.contact1Id = contact1Id;
          return this;
        }
            public ContactLink.Builder contact2Id(String contact2Id) {
              this.instance.contact2Id = contact2Id;
          return this;
        }
            public ContactLink.Builder linkTypeId(String linkTypeId) {
              this.instance.linkTypeId = linkTypeId;
          return this;
        }
            public ContactLink.Builder linkTypeName(String linkTypeName) {
              this.instance.linkTypeName = linkTypeName;
          return this;
        }
        
    
        /**
        * returns a built ContactLink instance.
        *
        * The builder is not reusable.
        */
        public ContactLink build() {
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
      public static ContactLink.Builder builder() {
        return new ContactLink.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ContactLink.Builder toBuilder() {
        return new ContactLink.Builder()
          .contact1Id(getContact1Id())
          .contact2Id(getContact2Id())
          .linkTypeId(getLinkTypeId())
          .linkTypeName(getLinkTypeName());
      }
}

