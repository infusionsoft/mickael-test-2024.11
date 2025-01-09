/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
import java.util.HashMap;
import java.util.Map;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * FunnelIntegrationHttpRequest
 */
@JsonPropertyOrder({
  FunnelIntegrationHttpRequest.JSON_PROPERTY_BODY,
  FunnelIntegrationHttpRequest.JSON_PROPERTY_CALL_TYPE,
  FunnelIntegrationHttpRequest.JSON_PROPERTY_HEADER_PARAMETERS,
  FunnelIntegrationHttpRequest.JSON_PROPERTY_QUERY_PARAMETERS,
  FunnelIntegrationHttpRequest.JSON_PROPERTY_URL
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class FunnelIntegrationHttpRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BODY = "body";
  @jakarta.annotation.Nullable  private String body;

  public static final String JSON_PROPERTY_CALL_TYPE = "call_type";
  @jakarta.annotation.Nullable  private String callType;

  public static final String JSON_PROPERTY_HEADER_PARAMETERS = "header_parameters";
  @jakarta.annotation.Nullable  private Map<String, String> headerParameters = new HashMap<>();

  public static final String JSON_PROPERTY_QUERY_PARAMETERS = "query_parameters";
  @jakarta.annotation.Nullable  private Map<String, String> queryParameters = new HashMap<>();

  public static final String JSON_PROPERTY_URL = "url";
  @jakarta.annotation.Nullable  private String url;

  public FunnelIntegrationHttpRequest() { 
  }

  public FunnelIntegrationHttpRequest body(@jakarta.annotation.Nullable String body) {
    this.body = body;
    return this;
  }

  /**
   * The body of the HTTP request that will be made when this action is processed in the builder(s).
   * @return body
   */
  @jakarta.annotation.Nullable  @Schema(example = "{\"contact_id\":\"123\"}", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The body of the HTTP request that will be made when this action is processed in the builder(s).")
  @JsonProperty(JSON_PROPERTY_BODY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getBody() {
    return body;
  }


  @JsonProperty(JSON_PROPERTY_BODY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBody(@jakarta.annotation.Nullable String body) {
    this.body = body;
  }


  public FunnelIntegrationHttpRequest callType(@jakarta.annotation.Nullable String callType) {
    this.callType = callType;
    return this;
  }

  /**
   * The type of HTTP request that will be made when this action is processed in the builder(s).
   * @return callType
   */
  @jakarta.annotation.Nullable  @Schema(example = "POST", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The type of HTTP request that will be made when this action is processed in the builder(s).")
  @JsonProperty(JSON_PROPERTY_CALL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCallType() {
    return callType;
  }


  @JsonProperty(JSON_PROPERTY_CALL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCallType(@jakarta.annotation.Nullable String callType) {
    this.callType = callType;
  }


  public FunnelIntegrationHttpRequest headerParameters(@jakarta.annotation.Nullable Map<String, String> headerParameters) {
    this.headerParameters = headerParameters;
    return this;
  }

  public FunnelIntegrationHttpRequest putHeaderParametersItem(String key, String headerParametersItem) {
    if (this.headerParameters == null) {
      this.headerParameters = new HashMap<>();
    }
    this.headerParameters.put(key, headerParametersItem);
    return this;
  }

  /**
   * A map of the header parameters of the HTTP request that will be made when this action is processed in the builder(s).
   * @return headerParameters
   */
  @jakarta.annotation.Nullable  @Schema(example = "{\"header1\":\"value1\",\"contact_name\":\"~Contact.FirstName~\"}", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "A map of the header parameters of the HTTP request that will be made when this action is processed in the builder(s).")
  @JsonProperty(JSON_PROPERTY_HEADER_PARAMETERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Map<String, String> getHeaderParameters() {
    return headerParameters;
  }


  @JsonProperty(JSON_PROPERTY_HEADER_PARAMETERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHeaderParameters(@jakarta.annotation.Nullable Map<String, String> headerParameters) {
    this.headerParameters = headerParameters;
  }


  public FunnelIntegrationHttpRequest queryParameters(@jakarta.annotation.Nullable Map<String, String> queryParameters) {
    this.queryParameters = queryParameters;
    return this;
  }

  public FunnelIntegrationHttpRequest putQueryParametersItem(String key, String queryParametersItem) {
    if (this.queryParameters == null) {
      this.queryParameters = new HashMap<>();
    }
    this.queryParameters.put(key, queryParametersItem);
    return this;
  }

  /**
   * A map of the query parameters of the HTTP request that will be made when this action is processed in the builder(s).
   * @return queryParameters
   */
  @jakarta.annotation.Nullable  @Schema(example = "{\"param1\":\"value1\",\"contact_name\":\"~Contact.FirstName~\"}", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "A map of the query parameters of the HTTP request that will be made when this action is processed in the builder(s).")
  @JsonProperty(JSON_PROPERTY_QUERY_PARAMETERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Map<String, String> getQueryParameters() {
    return queryParameters;
  }


  @JsonProperty(JSON_PROPERTY_QUERY_PARAMETERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setQueryParameters(@jakarta.annotation.Nullable Map<String, String> queryParameters) {
    this.queryParameters = queryParameters;
  }


  public FunnelIntegrationHttpRequest url(@jakarta.annotation.Nullable String url) {
    this.url = url;
    return this;
  }

  /**
   * The URL of the HTTP request that will be made when this action is processed in the builder(s).
   * @return url
   */
  @jakarta.annotation.Nullable  @Schema(example = "https://api.example.com", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The URL of the HTTP request that will be made when this action is processed in the builder(s).")
  @JsonProperty(JSON_PROPERTY_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUrl() {
    return url;
  }


  @JsonProperty(JSON_PROPERTY_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUrl(@jakarta.annotation.Nullable String url) {
    this.url = url;
  }

  /**
   * Return true if this FunnelIntegrationHttpRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FunnelIntegrationHttpRequest funnelIntegrationHttpRequest = (FunnelIntegrationHttpRequest) o;
    return Objects.equals(this.body, funnelIntegrationHttpRequest.body) &&
        Objects.equals(this.callType, funnelIntegrationHttpRequest.callType) &&
        Objects.equals(this.headerParameters, funnelIntegrationHttpRequest.headerParameters) &&
        Objects.equals(this.queryParameters, funnelIntegrationHttpRequest.queryParameters) &&
        Objects.equals(this.url, funnelIntegrationHttpRequest.url);
  }

  @Override
  public int hashCode() {
    return Objects.hash(body, callType, headerParameters, queryParameters, url);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FunnelIntegrationHttpRequest {\n");
    sb.append("    body: ").append(toIndentedString(body)).append("\n");
    sb.append("    callType: ").append(toIndentedString(callType)).append("\n");
    sb.append("    headerParameters: ").append(toIndentedString(headerParameters)).append("\n");
    sb.append("    queryParameters: ").append(toIndentedString(queryParameters)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
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
    
        private FunnelIntegrationHttpRequest instance;
    
        public Builder() {
          this(new FunnelIntegrationHttpRequest());
        }
    
        protected Builder(FunnelIntegrationHttpRequest instance) {
          this.instance = instance;
        }
    
        public FunnelIntegrationHttpRequest.Builder body(String body) {
              this.instance.body = body;
          return this;
        }
            public FunnelIntegrationHttpRequest.Builder callType(String callType) {
              this.instance.callType = callType;
          return this;
        }
            public FunnelIntegrationHttpRequest.Builder headerParameters(Map<String, String> headerParameters) {
              this.instance.headerParameters = headerParameters;
          return this;
        }
            public FunnelIntegrationHttpRequest.Builder queryParameters(Map<String, String> queryParameters) {
              this.instance.queryParameters = queryParameters;
          return this;
        }
            public FunnelIntegrationHttpRequest.Builder url(String url) {
              this.instance.url = url;
          return this;
        }
        
    
        /**
        * returns a built FunnelIntegrationHttpRequest instance.
        *
        * The builder is not reusable.
        */
        public FunnelIntegrationHttpRequest build() {
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
      public static FunnelIntegrationHttpRequest.Builder builder() {
        return new FunnelIntegrationHttpRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public FunnelIntegrationHttpRequest.Builder toBuilder() {
        return new FunnelIntegrationHttpRequest.Builder()
          .body(getBody())
          .callType(getCallType())
          .headerParameters(getHeaderParameters())
          .queryParameters(getQueryParameters())
          .url(getUrl());
      }
}

