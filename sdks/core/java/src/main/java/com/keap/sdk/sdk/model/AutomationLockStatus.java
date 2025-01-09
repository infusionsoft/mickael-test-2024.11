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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * AutomationLockStatus
 */
@JsonPropertyOrder({
  AutomationLockStatus.JSON_PROPERTY_LOCKED,
  AutomationLockStatus.JSON_PROPERTY_USER_FIRSTNAME,
  AutomationLockStatus.JSON_PROPERTY_USER_ID,
  AutomationLockStatus.JSON_PROPERTY_USER_NAME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class AutomationLockStatus implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_LOCKED = "locked";
  @jakarta.annotation.Nullable  private Boolean locked;

  public static final String JSON_PROPERTY_USER_FIRSTNAME = "user_firstname";
  @jakarta.annotation.Nullable  private String userFirstname;

  public static final String JSON_PROPERTY_USER_ID = "user_id";
  @jakarta.annotation.Nullable  private String userId;

  public static final String JSON_PROPERTY_USER_NAME = "user_name";
  @jakarta.annotation.Nullable  private String userName;

  public AutomationLockStatus() { 
  }

  public AutomationLockStatus locked(@jakarta.annotation.Nullable Boolean locked) {
    this.locked = locked;
    return this;
  }

  /**
   * Get locked
   * @return locked
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LOCKED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getLocked() {
    return locked;
  }


  @JsonProperty(JSON_PROPERTY_LOCKED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLocked(@jakarta.annotation.Nullable Boolean locked) {
    this.locked = locked;
  }


  public AutomationLockStatus userFirstname(@jakarta.annotation.Nullable String userFirstname) {
    this.userFirstname = userFirstname;
    return this;
  }

  /**
   * Get userFirstname
   * @return userFirstname
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USER_FIRSTNAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUserFirstname() {
    return userFirstname;
  }


  @JsonProperty(JSON_PROPERTY_USER_FIRSTNAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUserFirstname(@jakarta.annotation.Nullable String userFirstname) {
    this.userFirstname = userFirstname;
  }


  public AutomationLockStatus userId(@jakarta.annotation.Nullable String userId) {
    this.userId = userId;
    return this;
  }

  /**
   * Get userId
   * @return userId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUserId() {
    return userId;
  }


  @JsonProperty(JSON_PROPERTY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUserId(@jakarta.annotation.Nullable String userId) {
    this.userId = userId;
  }


  public AutomationLockStatus userName(@jakarta.annotation.Nullable String userName) {
    this.userName = userName;
    return this;
  }

  /**
   * Get userName
   * @return userName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUserName() {
    return userName;
  }


  @JsonProperty(JSON_PROPERTY_USER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUserName(@jakarta.annotation.Nullable String userName) {
    this.userName = userName;
  }

  /**
   * Return true if this AutomationLockStatus object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AutomationLockStatus automationLockStatus = (AutomationLockStatus) o;
    return Objects.equals(this.locked, automationLockStatus.locked) &&
        Objects.equals(this.userFirstname, automationLockStatus.userFirstname) &&
        Objects.equals(this.userId, automationLockStatus.userId) &&
        Objects.equals(this.userName, automationLockStatus.userName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(locked, userFirstname, userId, userName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AutomationLockStatus {\n");
    sb.append("    locked: ").append(toIndentedString(locked)).append("\n");
    sb.append("    userFirstname: ").append(toIndentedString(userFirstname)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
    sb.append("    userName: ").append(toIndentedString(userName)).append("\n");
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
    
        private AutomationLockStatus instance;
    
        public Builder() {
          this(new AutomationLockStatus());
        }
    
        protected Builder(AutomationLockStatus instance) {
          this.instance = instance;
        }
    
        public AutomationLockStatus.Builder locked(Boolean locked) {
              this.instance.locked = locked;
          return this;
        }
            public AutomationLockStatus.Builder userFirstname(String userFirstname) {
              this.instance.userFirstname = userFirstname;
          return this;
        }
            public AutomationLockStatus.Builder userId(String userId) {
              this.instance.userId = userId;
          return this;
        }
            public AutomationLockStatus.Builder userName(String userName) {
              this.instance.userName = userName;
          return this;
        }
        
    
        /**
        * returns a built AutomationLockStatus instance.
        *
        * The builder is not reusable.
        */
        public AutomationLockStatus build() {
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
      public static AutomationLockStatus.Builder builder() {
        return new AutomationLockStatus.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AutomationLockStatus.Builder toBuilder() {
        return new AutomationLockStatus.Builder()
          .locked(getLocked())
          .userFirstname(getUserFirstname())
          .userId(getUserId())
          .userName(getUserName());
      }
}

