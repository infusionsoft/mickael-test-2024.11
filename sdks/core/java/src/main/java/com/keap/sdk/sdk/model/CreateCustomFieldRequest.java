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
import com.keap.sdk.sdk.model.CreateCustomFieldOptionRequest;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CreateCustomFieldRequest
 */
@JsonPropertyOrder({
  CreateCustomFieldRequest.JSON_PROPERTY_FIELD_TYPE,
  CreateCustomFieldRequest.JSON_PROPERTY_GROUP_ID,
  CreateCustomFieldRequest.JSON_PROPERTY_LABEL,
  CreateCustomFieldRequest.JSON_PROPERTY_OPTIONS,
  CreateCustomFieldRequest.JSON_PROPERTY_USER_GROUP_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CreateCustomFieldRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  /**
   * Gets or Sets fieldType
   */
  public enum FieldTypeEnum {
    CURRENCY(String.valueOf("CURRENCY")),
    
    DATE(String.valueOf("DATE")),
    
    DATE_TIME(String.valueOf("DATE_TIME")),
    
    DAY_OF_WEEK(String.valueOf("DAY_OF_WEEK")),
    
    DECIMAL_NUMBER(String.valueOf("DECIMAL_NUMBER")),
    
    DRILLDOWN(String.valueOf("DRILLDOWN")),
    
    DROPDOWN(String.valueOf("DROPDOWN")),
    
    EMAIL(String.valueOf("EMAIL")),
    
    LIST_BOX(String.valueOf("LIST_BOX")),
    
    MONTH(String.valueOf("MONTH")),
    
    NAME(String.valueOf("NAME")),
    
    PERCENT(String.valueOf("PERCENT")),
    
    PHONE_NUMBER(String.valueOf("PHONE_NUMBER")),
    
    RADIO(String.valueOf("RADIO")),
    
    SOCIAL_SECURITY_NUMBER(String.valueOf("SOCIAL_SECURITY_NUMBER")),
    
    STATE(String.valueOf("STATE")),
    
    TEXT(String.valueOf("TEXT")),
    
    TEXT_AREA(String.valueOf("TEXT_AREA")),
    
    USER(String.valueOf("USER")),
    
    USER_LIST_BOX(String.valueOf("USER_LIST_BOX")),
    
    WEBSITE(String.valueOf("WEBSITE")),
    
    WHOLE_NUMBER(String.valueOf("WHOLE_NUMBER")),
    
    YEAR(String.valueOf("YEAR")),
    
    YES_NO(String.valueOf("YES_NO")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    FieldTypeEnum(String value) {
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
    public static FieldTypeEnum fromValue(String value) {
      for (FieldTypeEnum b : FieldTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_FIELD_TYPE = "field_type";
  @jakarta.annotation.Nonnull  private FieldTypeEnum fieldType;

  public static final String JSON_PROPERTY_GROUP_ID = "group_id";
  @jakarta.annotation.Nullable  private String groupId;

  public static final String JSON_PROPERTY_LABEL = "label";
  @jakarta.annotation.Nonnull  private String label;

  public static final String JSON_PROPERTY_OPTIONS = "options";
  @jakarta.annotation.Nullable  private List<@Valid CreateCustomFieldOptionRequest> options = new ArrayList<>();

  public static final String JSON_PROPERTY_USER_GROUP_ID = "user_group_id";
  @jakarta.annotation.Nullable  private String userGroupId;

  public CreateCustomFieldRequest() { 
  }

  public CreateCustomFieldRequest fieldType(@jakarta.annotation.Nonnull FieldTypeEnum fieldType) {
    this.fieldType = fieldType;
    return this;
  }

  /**
   * Get fieldType
   * @return fieldType
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIELD_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public FieldTypeEnum getFieldType() {
    return fieldType;
  }


  @JsonProperty(JSON_PROPERTY_FIELD_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setFieldType(@jakarta.annotation.Nonnull FieldTypeEnum fieldType) {
    this.fieldType = fieldType;
  }


  public CreateCustomFieldRequest groupId(@jakarta.annotation.Nullable String groupId) {
    this.groupId = groupId;
    return this;
  }

  /**
   * An optional tab group to place the field under in the interface.  If not specified, will default to the &#39;Custom Fields&#39; tab.
   * @return groupId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "An optional tab group to place the field under in the interface.  If not specified, will default to the 'Custom Fields' tab.")
  @JsonProperty(JSON_PROPERTY_GROUP_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getGroupId() {
    return groupId;
  }


  @JsonProperty(JSON_PROPERTY_GROUP_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGroupId(@jakarta.annotation.Nullable String groupId) {
    this.groupId = groupId;
  }


  public CreateCustomFieldRequest label(@jakarta.annotation.Nonnull String label) {
    this.label = label;
    return this;
  }

  /**
   * Get label
   * @return label
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getLabel() {
    return label;
  }


  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setLabel(@jakarta.annotation.Nonnull String label) {
    this.label = label;
  }


  public CreateCustomFieldRequest options(@jakarta.annotation.Nullable List<@Valid CreateCustomFieldOptionRequest> options) {
    this.options = options;
    return this;
  }

  public CreateCustomFieldRequest addOptionsItem(CreateCustomFieldOptionRequest optionsItem) {
    if (this.options == null) {
      this.options = new ArrayList<>();
    }
    this.options.add(optionsItem);
    return this;
  }

  /**
   * Get options
   * @return options
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid CreateCustomFieldOptionRequest> getOptions() {
    return options;
  }


  @JsonProperty(JSON_PROPERTY_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptions(@jakarta.annotation.Nullable List<@Valid CreateCustomFieldOptionRequest> options) {
    this.options = options;
  }


  public CreateCustomFieldRequest userGroupId(@jakarta.annotation.Nullable String userGroupId) {
    this.userGroupId = userGroupId;
    return this;
  }

  /**
   * An optional user group to choose from when selecting values for User or UserListBox fields.
   * @return userGroupId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "An optional user group to choose from when selecting values for User or UserListBox fields.")
  @JsonProperty(JSON_PROPERTY_USER_GROUP_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUserGroupId() {
    return userGroupId;
  }


  @JsonProperty(JSON_PROPERTY_USER_GROUP_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUserGroupId(@jakarta.annotation.Nullable String userGroupId) {
    this.userGroupId = userGroupId;
  }

  /**
   * Return true if this CreateCustomFieldRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateCustomFieldRequest createCustomFieldRequest = (CreateCustomFieldRequest) o;
    return Objects.equals(this.fieldType, createCustomFieldRequest.fieldType) &&
        Objects.equals(this.groupId, createCustomFieldRequest.groupId) &&
        Objects.equals(this.label, createCustomFieldRequest.label) &&
        Objects.equals(this.options, createCustomFieldRequest.options) &&
        Objects.equals(this.userGroupId, createCustomFieldRequest.userGroupId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fieldType, groupId, label, options, userGroupId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateCustomFieldRequest {\n");
    sb.append("    fieldType: ").append(toIndentedString(fieldType)).append("\n");
    sb.append("    groupId: ").append(toIndentedString(groupId)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    options: ").append(toIndentedString(options)).append("\n");
    sb.append("    userGroupId: ").append(toIndentedString(userGroupId)).append("\n");
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
    
        private CreateCustomFieldRequest instance;
    
        public Builder() {
          this(new CreateCustomFieldRequest());
        }
    
        protected Builder(CreateCustomFieldRequest instance) {
          this.instance = instance;
        }
    
        public CreateCustomFieldRequest.Builder fieldType(FieldTypeEnum fieldType) {
              this.instance.fieldType = fieldType;
          return this;
        }
            public CreateCustomFieldRequest.Builder groupId(String groupId) {
              this.instance.groupId = groupId;
          return this;
        }
            public CreateCustomFieldRequest.Builder label(String label) {
              this.instance.label = label;
          return this;
        }
            public CreateCustomFieldRequest.Builder options(List<@Valid CreateCustomFieldOptionRequest> options) {
              this.instance.options = options;
          return this;
        }
            public CreateCustomFieldRequest.Builder userGroupId(String userGroupId) {
              this.instance.userGroupId = userGroupId;
          return this;
        }
        
    
        /**
        * returns a built CreateCustomFieldRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateCustomFieldRequest build() {
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
      public static CreateCustomFieldRequest.Builder builder() {
        return new CreateCustomFieldRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateCustomFieldRequest.Builder toBuilder() {
        return new CreateCustomFieldRequest.Builder()
          .fieldType(getFieldType())
          .groupId(getGroupId())
          .label(getLabel())
          .options(getOptions())
          .userGroupId(getUserGroupId());
      }
}

