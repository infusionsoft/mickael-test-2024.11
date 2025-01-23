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
 * Link
 */
@JsonPropertyOrder({
  Link.JSON_PROPERTY_ID,
  Link.JSON_PROPERTY_LINK_TYPE_ID,
  Link.JSON_PROPERTY_LINK_TYPE_NAME,
  Link.JSON_PROPERTY_LINKED_CONTACT_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class Link implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_LINK_TYPE_ID = "link_type_id";
  @jakarta.annotation.Nullable  private String linkTypeId;

  public static final String JSON_PROPERTY_LINK_TYPE_NAME = "link_type_name";
  @jakarta.annotation.Nullable  private String linkTypeName;

  public static final String JSON_PROPERTY_LINKED_CONTACT_ID = "linked_contact_id";
  @jakarta.annotation.Nullable  private String linkedContactId;

  public Link() { 
  }

  public Link id(@jakarta.annotation.Nullable String id) {
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


  public Link linkTypeId(@jakarta.annotation.Nullable String linkTypeId) {
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


  public Link linkTypeName(@jakarta.annotation.Nullable String linkTypeName) {
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


  public Link linkedContactId(@jakarta.annotation.Nullable String linkedContactId) {
    this.linkedContactId = linkedContactId;
    return this;
  }

  /**
   * Get linkedContactId
   * @return linkedContactId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LINKED_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLinkedContactId() {
    return linkedContactId;
  }


  @JsonProperty(JSON_PROPERTY_LINKED_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLinkedContactId(@jakarta.annotation.Nullable String linkedContactId) {
    this.linkedContactId = linkedContactId;
  }

  /**
   * Return true if this Link object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Link link = (Link) o;
    return Objects.equals(this.id, link.id) &&
        Objects.equals(this.linkTypeId, link.linkTypeId) &&
        Objects.equals(this.linkTypeName, link.linkTypeName) &&
        Objects.equals(this.linkedContactId, link.linkedContactId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, linkTypeId, linkTypeName, linkedContactId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Link {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    linkTypeId: ").append(toIndentedString(linkTypeId)).append("\n");
    sb.append("    linkTypeName: ").append(toIndentedString(linkTypeName)).append("\n");
    sb.append("    linkedContactId: ").append(toIndentedString(linkedContactId)).append("\n");
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
    
        private Link instance;
    
        public Builder() {
          this(new Link());
        }
    
        protected Builder(Link instance) {
          this.instance = instance;
        }
    
        public Link.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public Link.Builder linkTypeId(String linkTypeId) {
              this.instance.linkTypeId = linkTypeId;
          return this;
        }
            public Link.Builder linkTypeName(String linkTypeName) {
              this.instance.linkTypeName = linkTypeName;
          return this;
        }
            public Link.Builder linkedContactId(String linkedContactId) {
              this.instance.linkedContactId = linkedContactId;
          return this;
        }
        
    
        /**
        * returns a built Link instance.
        *
        * The builder is not reusable.
        */
        public Link build() {
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
      public static Link.Builder builder() {
        return new Link.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Link.Builder toBuilder() {
        return new Link.Builder()
          .id(getId())
          .linkTypeId(getLinkTypeId())
          .linkTypeName(getLinkTypeName())
          .linkedContactId(getLinkedContactId());
      }
}

