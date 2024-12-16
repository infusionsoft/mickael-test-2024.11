/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
import com.keap.sdk.sdk.model.Company;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * TaggedCompany
 */
@JsonPropertyOrder({
  TaggedCompany.JSON_PROPERTY_APPLIED_TIME,
  TaggedCompany.JSON_PROPERTY_COMPANY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class TaggedCompany implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_APPLIED_TIME = "applied_time";
  @jakarta.annotation.Nullable  private String appliedTime;

  public static final String JSON_PROPERTY_COMPANY = "company";
  @jakarta.annotation.Nullable  private Company company;

  public TaggedCompany() { 
  }

  public TaggedCompany appliedTime(@jakarta.annotation.Nullable String appliedTime) {
    this.appliedTime = appliedTime;
    return this;
  }

  /**
   * Get appliedTime
   * @return appliedTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_APPLIED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getAppliedTime() {
    return appliedTime;
  }


  @JsonProperty(JSON_PROPERTY_APPLIED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAppliedTime(@jakarta.annotation.Nullable String appliedTime) {
    this.appliedTime = appliedTime;
  }


  public TaggedCompany company(@jakarta.annotation.Nullable Company company) {
    this.company = company;
    return this;
  }

  /**
   * Get company
   * @return company
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Company getCompany() {
    return company;
  }


  @JsonProperty(JSON_PROPERTY_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompany(@jakarta.annotation.Nullable Company company) {
    this.company = company;
  }

  /**
   * Return true if this TaggedCompany object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TaggedCompany taggedCompany = (TaggedCompany) o;
    return Objects.equals(this.appliedTime, taggedCompany.appliedTime) &&
        Objects.equals(this.company, taggedCompany.company);
  }

  @Override
  public int hashCode() {
    return Objects.hash(appliedTime, company);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TaggedCompany {\n");
    sb.append("    appliedTime: ").append(toIndentedString(appliedTime)).append("\n");
    sb.append("    company: ").append(toIndentedString(company)).append("\n");
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
    
        private TaggedCompany instance;
    
        public Builder() {
          this(new TaggedCompany());
        }
    
        protected Builder(TaggedCompany instance) {
          this.instance = instance;
        }
    
        public TaggedCompany.Builder appliedTime(String appliedTime) {
              this.instance.appliedTime = appliedTime;
          return this;
        }
            public TaggedCompany.Builder company(Company company) {
              this.instance.company = company;
          return this;
        }
        
    
        /**
        * returns a built TaggedCompany instance.
        *
        * The builder is not reusable.
        */
        public TaggedCompany build() {
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
      public static TaggedCompany.Builder builder() {
        return new TaggedCompany.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public TaggedCompany.Builder toBuilder() {
        return new TaggedCompany.Builder()
          .appliedTime(getAppliedTime())
          .company(getCompany());
      }
}

