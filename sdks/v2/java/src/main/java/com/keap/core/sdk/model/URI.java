/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
 * URI
 */
@JsonPropertyOrder({
  URI.JSON_PROPERTY_ABSOLUTE,
  URI.JSON_PROPERTY_AUTHORITY,
  URI.JSON_PROPERTY_FRAGMENT,
  URI.JSON_PROPERTY_HOST,
  URI.JSON_PROPERTY_OPAQUE,
  URI.JSON_PROPERTY_PATH,
  URI.JSON_PROPERTY_PORT,
  URI.JSON_PROPERTY_QUERY,
  URI.JSON_PROPERTY_RAW_AUTHORITY,
  URI.JSON_PROPERTY_RAW_FRAGMENT,
  URI.JSON_PROPERTY_RAW_PATH,
  URI.JSON_PROPERTY_RAW_QUERY,
  URI.JSON_PROPERTY_RAW_SCHEME_SPECIFIC_PART,
  URI.JSON_PROPERTY_RAW_USER_INFO,
  URI.JSON_PROPERTY_SCHEME,
  URI.JSON_PROPERTY_SCHEME_SPECIFIC_PART,
  URI.JSON_PROPERTY_USER_INFO
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class URI implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ABSOLUTE = "absolute";
  @jakarta.annotation.Nullable  private Boolean absolute;

  public static final String JSON_PROPERTY_AUTHORITY = "authority";
  @jakarta.annotation.Nullable  private String authority;

  public static final String JSON_PROPERTY_FRAGMENT = "fragment";
  @jakarta.annotation.Nullable  private String fragment;

  public static final String JSON_PROPERTY_HOST = "host";
  @jakarta.annotation.Nullable  private String host;

  public static final String JSON_PROPERTY_OPAQUE = "opaque";
  @jakarta.annotation.Nullable  private Boolean opaque;

  public static final String JSON_PROPERTY_PATH = "path";
  @jakarta.annotation.Nullable  private String path;

  public static final String JSON_PROPERTY_PORT = "port";
  @jakarta.annotation.Nullable  private Integer port;

  public static final String JSON_PROPERTY_QUERY = "query";
  @jakarta.annotation.Nullable  private String query;

  public static final String JSON_PROPERTY_RAW_AUTHORITY = "rawAuthority";
  @jakarta.annotation.Nullable  private String rawAuthority;

  public static final String JSON_PROPERTY_RAW_FRAGMENT = "rawFragment";
  @jakarta.annotation.Nullable  private String rawFragment;

  public static final String JSON_PROPERTY_RAW_PATH = "rawPath";
  @jakarta.annotation.Nullable  private String rawPath;

  public static final String JSON_PROPERTY_RAW_QUERY = "rawQuery";
  @jakarta.annotation.Nullable  private String rawQuery;

  public static final String JSON_PROPERTY_RAW_SCHEME_SPECIFIC_PART = "rawSchemeSpecificPart";
  @jakarta.annotation.Nullable  private String rawSchemeSpecificPart;

  public static final String JSON_PROPERTY_RAW_USER_INFO = "rawUserInfo";
  @jakarta.annotation.Nullable  private String rawUserInfo;

  public static final String JSON_PROPERTY_SCHEME = "scheme";
  @jakarta.annotation.Nullable  private String scheme;

  public static final String JSON_PROPERTY_SCHEME_SPECIFIC_PART = "schemeSpecificPart";
  @jakarta.annotation.Nullable  private String schemeSpecificPart;

  public static final String JSON_PROPERTY_USER_INFO = "userInfo";
  @jakarta.annotation.Nullable  private String userInfo;

  public URI() { 
  }

  public URI absolute(@jakarta.annotation.Nullable Boolean absolute) {
    this.absolute = absolute;
    return this;
  }

  /**
   * Get absolute
   * @return absolute
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getAbsolute() {
    return absolute;
  }


  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAbsolute(@jakarta.annotation.Nullable Boolean absolute) {
    this.absolute = absolute;
  }


  public URI authority(@jakarta.annotation.Nullable String authority) {
    this.authority = authority;
    return this;
  }

  /**
   * Get authority
   * @return authority
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AUTHORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getAuthority() {
    return authority;
  }


  @JsonProperty(JSON_PROPERTY_AUTHORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAuthority(@jakarta.annotation.Nullable String authority) {
    this.authority = authority;
  }


  public URI fragment(@jakarta.annotation.Nullable String fragment) {
    this.fragment = fragment;
    return this;
  }

  /**
   * Get fragment
   * @return fragment
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FRAGMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFragment() {
    return fragment;
  }


  @JsonProperty(JSON_PROPERTY_FRAGMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFragment(@jakarta.annotation.Nullable String fragment) {
    this.fragment = fragment;
  }


  public URI host(@jakarta.annotation.Nullable String host) {
    this.host = host;
    return this;
  }

  /**
   * Get host
   * @return host
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_HOST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getHost() {
    return host;
  }


  @JsonProperty(JSON_PROPERTY_HOST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHost(@jakarta.annotation.Nullable String host) {
    this.host = host;
  }


  public URI opaque(@jakarta.annotation.Nullable Boolean opaque) {
    this.opaque = opaque;
    return this;
  }

  /**
   * Get opaque
   * @return opaque
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPAQUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getOpaque() {
    return opaque;
  }


  @JsonProperty(JSON_PROPERTY_OPAQUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOpaque(@jakarta.annotation.Nullable Boolean opaque) {
    this.opaque = opaque;
  }


  public URI path(@jakarta.annotation.Nullable String path) {
    this.path = path;
    return this;
  }

  /**
   * Get path
   * @return path
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PATH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPath() {
    return path;
  }


  @JsonProperty(JSON_PROPERTY_PATH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPath(@jakarta.annotation.Nullable String path) {
    this.path = path;
  }


  public URI port(@jakarta.annotation.Nullable Integer port) {
    this.port = port;
    return this;
  }

  /**
   * Get port
   * @return port
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PORT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getPort() {
    return port;
  }


  @JsonProperty(JSON_PROPERTY_PORT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPort(@jakarta.annotation.Nullable Integer port) {
    this.port = port;
  }


  public URI query(@jakarta.annotation.Nullable String query) {
    this.query = query;
    return this;
  }

  /**
   * Get query
   * @return query
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_QUERY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getQuery() {
    return query;
  }


  @JsonProperty(JSON_PROPERTY_QUERY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setQuery(@jakarta.annotation.Nullable String query) {
    this.query = query;
  }


  public URI rawAuthority(@jakarta.annotation.Nullable String rawAuthority) {
    this.rawAuthority = rawAuthority;
    return this;
  }

  /**
   * Get rawAuthority
   * @return rawAuthority
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RAW_AUTHORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRawAuthority() {
    return rawAuthority;
  }


  @JsonProperty(JSON_PROPERTY_RAW_AUTHORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRawAuthority(@jakarta.annotation.Nullable String rawAuthority) {
    this.rawAuthority = rawAuthority;
  }


  public URI rawFragment(@jakarta.annotation.Nullable String rawFragment) {
    this.rawFragment = rawFragment;
    return this;
  }

  /**
   * Get rawFragment
   * @return rawFragment
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RAW_FRAGMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRawFragment() {
    return rawFragment;
  }


  @JsonProperty(JSON_PROPERTY_RAW_FRAGMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRawFragment(@jakarta.annotation.Nullable String rawFragment) {
    this.rawFragment = rawFragment;
  }


  public URI rawPath(@jakarta.annotation.Nullable String rawPath) {
    this.rawPath = rawPath;
    return this;
  }

  /**
   * Get rawPath
   * @return rawPath
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RAW_PATH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRawPath() {
    return rawPath;
  }


  @JsonProperty(JSON_PROPERTY_RAW_PATH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRawPath(@jakarta.annotation.Nullable String rawPath) {
    this.rawPath = rawPath;
  }


  public URI rawQuery(@jakarta.annotation.Nullable String rawQuery) {
    this.rawQuery = rawQuery;
    return this;
  }

  /**
   * Get rawQuery
   * @return rawQuery
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RAW_QUERY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRawQuery() {
    return rawQuery;
  }


  @JsonProperty(JSON_PROPERTY_RAW_QUERY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRawQuery(@jakarta.annotation.Nullable String rawQuery) {
    this.rawQuery = rawQuery;
  }


  public URI rawSchemeSpecificPart(@jakarta.annotation.Nullable String rawSchemeSpecificPart) {
    this.rawSchemeSpecificPart = rawSchemeSpecificPart;
    return this;
  }

  /**
   * Get rawSchemeSpecificPart
   * @return rawSchemeSpecificPart
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RAW_SCHEME_SPECIFIC_PART)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRawSchemeSpecificPart() {
    return rawSchemeSpecificPart;
  }


  @JsonProperty(JSON_PROPERTY_RAW_SCHEME_SPECIFIC_PART)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRawSchemeSpecificPart(@jakarta.annotation.Nullable String rawSchemeSpecificPart) {
    this.rawSchemeSpecificPart = rawSchemeSpecificPart;
  }


  public URI rawUserInfo(@jakarta.annotation.Nullable String rawUserInfo) {
    this.rawUserInfo = rawUserInfo;
    return this;
  }

  /**
   * Get rawUserInfo
   * @return rawUserInfo
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RAW_USER_INFO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRawUserInfo() {
    return rawUserInfo;
  }


  @JsonProperty(JSON_PROPERTY_RAW_USER_INFO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRawUserInfo(@jakarta.annotation.Nullable String rawUserInfo) {
    this.rawUserInfo = rawUserInfo;
  }


  public URI scheme(@jakarta.annotation.Nullable String scheme) {
    this.scheme = scheme;
    return this;
  }

  /**
   * Get scheme
   * @return scheme
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SCHEME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getScheme() {
    return scheme;
  }


  @JsonProperty(JSON_PROPERTY_SCHEME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setScheme(@jakarta.annotation.Nullable String scheme) {
    this.scheme = scheme;
  }


  public URI schemeSpecificPart(@jakarta.annotation.Nullable String schemeSpecificPart) {
    this.schemeSpecificPart = schemeSpecificPart;
    return this;
  }

  /**
   * Get schemeSpecificPart
   * @return schemeSpecificPart
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SCHEME_SPECIFIC_PART)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getSchemeSpecificPart() {
    return schemeSpecificPart;
  }


  @JsonProperty(JSON_PROPERTY_SCHEME_SPECIFIC_PART)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSchemeSpecificPart(@jakarta.annotation.Nullable String schemeSpecificPart) {
    this.schemeSpecificPart = schemeSpecificPart;
  }


  public URI userInfo(@jakarta.annotation.Nullable String userInfo) {
    this.userInfo = userInfo;
    return this;
  }

  /**
   * Get userInfo
   * @return userInfo
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USER_INFO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUserInfo() {
    return userInfo;
  }


  @JsonProperty(JSON_PROPERTY_USER_INFO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUserInfo(@jakarta.annotation.Nullable String userInfo) {
    this.userInfo = userInfo;
  }

  /**
   * Return true if this URI object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    URI URI = (URI) o;
    return Objects.equals(this.absolute, URI.absolute) &&
        Objects.equals(this.authority, URI.authority) &&
        Objects.equals(this.fragment, URI.fragment) &&
        Objects.equals(this.host, URI.host) &&
        Objects.equals(this.opaque, URI.opaque) &&
        Objects.equals(this.path, URI.path) &&
        Objects.equals(this.port, URI.port) &&
        Objects.equals(this.query, URI.query) &&
        Objects.equals(this.rawAuthority, URI.rawAuthority) &&
        Objects.equals(this.rawFragment, URI.rawFragment) &&
        Objects.equals(this.rawPath, URI.rawPath) &&
        Objects.equals(this.rawQuery, URI.rawQuery) &&
        Objects.equals(this.rawSchemeSpecificPart, URI.rawSchemeSpecificPart) &&
        Objects.equals(this.rawUserInfo, URI.rawUserInfo) &&
        Objects.equals(this.scheme, URI.scheme) &&
        Objects.equals(this.schemeSpecificPart, URI.schemeSpecificPart) &&
        Objects.equals(this.userInfo, URI.userInfo);
  }

  @Override
  public int hashCode() {
    return Objects.hash(absolute, authority, fragment, host, opaque, path, port, query, rawAuthority, rawFragment, rawPath, rawQuery, rawSchemeSpecificPart, rawUserInfo, scheme, schemeSpecificPart, userInfo);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class URI {\n");
    sb.append("    absolute: ").append(toIndentedString(absolute)).append("\n");
    sb.append("    authority: ").append(toIndentedString(authority)).append("\n");
    sb.append("    fragment: ").append(toIndentedString(fragment)).append("\n");
    sb.append("    host: ").append(toIndentedString(host)).append("\n");
    sb.append("    opaque: ").append(toIndentedString(opaque)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
    sb.append("    port: ").append(toIndentedString(port)).append("\n");
    sb.append("    query: ").append(toIndentedString(query)).append("\n");
    sb.append("    rawAuthority: ").append(toIndentedString(rawAuthority)).append("\n");
    sb.append("    rawFragment: ").append(toIndentedString(rawFragment)).append("\n");
    sb.append("    rawPath: ").append(toIndentedString(rawPath)).append("\n");
    sb.append("    rawQuery: ").append(toIndentedString(rawQuery)).append("\n");
    sb.append("    rawSchemeSpecificPart: ").append(toIndentedString(rawSchemeSpecificPart)).append("\n");
    sb.append("    rawUserInfo: ").append(toIndentedString(rawUserInfo)).append("\n");
    sb.append("    scheme: ").append(toIndentedString(scheme)).append("\n");
    sb.append("    schemeSpecificPart: ").append(toIndentedString(schemeSpecificPart)).append("\n");
    sb.append("    userInfo: ").append(toIndentedString(userInfo)).append("\n");
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
    
        private URI instance;
    
        public Builder() {
          this(new URI());
        }
    
        protected Builder(URI instance) {
          this.instance = instance;
        }
    
        public URI.Builder absolute(Boolean absolute) {
              this.instance.absolute = absolute;
          return this;
        }
            public URI.Builder authority(String authority) {
              this.instance.authority = authority;
          return this;
        }
            public URI.Builder fragment(String fragment) {
              this.instance.fragment = fragment;
          return this;
        }
            public URI.Builder host(String host) {
              this.instance.host = host;
          return this;
        }
            public URI.Builder opaque(Boolean opaque) {
              this.instance.opaque = opaque;
          return this;
        }
            public URI.Builder path(String path) {
              this.instance.path = path;
          return this;
        }
            public URI.Builder port(Integer port) {
              this.instance.port = port;
          return this;
        }
            public URI.Builder query(String query) {
              this.instance.query = query;
          return this;
        }
            public URI.Builder rawAuthority(String rawAuthority) {
              this.instance.rawAuthority = rawAuthority;
          return this;
        }
            public URI.Builder rawFragment(String rawFragment) {
              this.instance.rawFragment = rawFragment;
          return this;
        }
            public URI.Builder rawPath(String rawPath) {
              this.instance.rawPath = rawPath;
          return this;
        }
            public URI.Builder rawQuery(String rawQuery) {
              this.instance.rawQuery = rawQuery;
          return this;
        }
            public URI.Builder rawSchemeSpecificPart(String rawSchemeSpecificPart) {
              this.instance.rawSchemeSpecificPart = rawSchemeSpecificPart;
          return this;
        }
            public URI.Builder rawUserInfo(String rawUserInfo) {
              this.instance.rawUserInfo = rawUserInfo;
          return this;
        }
            public URI.Builder scheme(String scheme) {
              this.instance.scheme = scheme;
          return this;
        }
            public URI.Builder schemeSpecificPart(String schemeSpecificPart) {
              this.instance.schemeSpecificPart = schemeSpecificPart;
          return this;
        }
            public URI.Builder userInfo(String userInfo) {
              this.instance.userInfo = userInfo;
          return this;
        }
        
    
        /**
        * returns a built URI instance.
        *
        * The builder is not reusable.
        */
        public URI build() {
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
      public static URI.Builder builder() {
        return new URI.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public URI.Builder toBuilder() {
        return new URI.Builder()
          .absolute(getAbsolute())
          .authority(getAuthority())
          .fragment(getFragment())
          .host(getHost())
          .opaque(getOpaque())
          .path(getPath())
          .port(getPort())
          .query(getQuery())
          .rawAuthority(getRawAuthority())
          .rawFragment(getRawFragment())
          .rawPath(getRawPath())
          .rawQuery(getRawQuery())
          .rawSchemeSpecificPart(getRawSchemeSpecificPart())
          .rawUserInfo(getRawUserInfo())
          .scheme(getScheme())
          .schemeSpecificPart(getSchemeSpecificPart())
          .userInfo(getUserInfo());
      }
}

