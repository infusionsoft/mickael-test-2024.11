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
import com.keap.sdk.sdk.model.AffiliateProgramV2;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListAffiliateCommissionProgramsResponse
 */
@JsonPropertyOrder({
  ListAffiliateCommissionProgramsResponse.JSON_PROPERTY_COMMISSION_PROGRAMS,
  ListAffiliateCommissionProgramsResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListAffiliateCommissionProgramsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_COMMISSION_PROGRAMS = "commission_programs";
  @jakarta.annotation.Nullable  private List<@Valid AffiliateProgramV2> commissionPrograms = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListAffiliateCommissionProgramsResponse() { 
  }

  public ListAffiliateCommissionProgramsResponse commissionPrograms(@jakarta.annotation.Nullable List<@Valid AffiliateProgramV2> commissionPrograms) {
    this.commissionPrograms = commissionPrograms;
    return this;
  }

  public ListAffiliateCommissionProgramsResponse addCommissionProgramsItem(AffiliateProgramV2 commissionProgramsItem) {
    if (this.commissionPrograms == null) {
      this.commissionPrograms = new ArrayList<>();
    }
    this.commissionPrograms.add(commissionProgramsItem);
    return this;
  }

  /**
   * Get commissionPrograms
   * @return commissionPrograms
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMMISSION_PROGRAMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid AffiliateProgramV2> getCommissionPrograms() {
    return commissionPrograms;
  }


  @JsonProperty(JSON_PROPERTY_COMMISSION_PROGRAMS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCommissionPrograms(@jakarta.annotation.Nullable List<@Valid AffiliateProgramV2> commissionPrograms) {
    this.commissionPrograms = commissionPrograms;
  }


  public ListAffiliateCommissionProgramsResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Get nextPageToken
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextPageToken() {
    return nextPageToken;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
  }

  /**
   * Return true if this ListAffiliateCommissionProgramsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListAffiliateCommissionProgramsResponse listAffiliateCommissionProgramsResponse = (ListAffiliateCommissionProgramsResponse) o;
    return Objects.equals(this.commissionPrograms, listAffiliateCommissionProgramsResponse.commissionPrograms) &&
        Objects.equals(this.nextPageToken, listAffiliateCommissionProgramsResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(commissionPrograms, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListAffiliateCommissionProgramsResponse {\n");
    sb.append("    commissionPrograms: ").append(toIndentedString(commissionPrograms)).append("\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
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
    
        private ListAffiliateCommissionProgramsResponse instance;
    
        public Builder() {
          this(new ListAffiliateCommissionProgramsResponse());
        }
    
        protected Builder(ListAffiliateCommissionProgramsResponse instance) {
          this.instance = instance;
        }
    
        public ListAffiliateCommissionProgramsResponse.Builder commissionPrograms(List<@Valid AffiliateProgramV2> commissionPrograms) {
              this.instance.commissionPrograms = commissionPrograms;
          return this;
        }
            public ListAffiliateCommissionProgramsResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListAffiliateCommissionProgramsResponse instance.
        *
        * The builder is not reusable.
        */
        public ListAffiliateCommissionProgramsResponse build() {
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
      public static ListAffiliateCommissionProgramsResponse.Builder builder() {
        return new ListAffiliateCommissionProgramsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListAffiliateCommissionProgramsResponse.Builder toBuilder() {
        return new ListAffiliateCommissionProgramsResponse.Builder()
          .commissionPrograms(getCommissionPrograms())
          .nextPageToken(getNextPageToken());
      }
}

