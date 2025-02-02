/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
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
import com.keap.sdk.sdk.model.CustomFieldOption;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CustomFieldMetaData
 */
@JsonPropertyOrder({
  CustomFieldMetaData.JSON_PROPERTY_DEFAULT_VALUE,
  CustomFieldMetaData.JSON_PROPERTY_FIELD_NAME,
  CustomFieldMetaData.JSON_PROPERTY_FIELD_TYPE,
  CustomFieldMetaData.JSON_PROPERTY_GROUP_ID,
  CustomFieldMetaData.JSON_PROPERTY_ID,
  CustomFieldMetaData.JSON_PROPERTY_LABEL,
  CustomFieldMetaData.JSON_PROPERTY_OPTIONS,
  CustomFieldMetaData.JSON_PROPERTY_RECORD_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class CustomFieldMetaData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DEFAULT_VALUE = "default_value";
  @jakarta.annotation.Nullable  private String defaultValue;

  public static final String JSON_PROPERTY_FIELD_NAME = "field_name";
  @jakarta.annotation.Nullable  private String fieldName;

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
  @jakarta.annotation.Nullable  private FieldTypeEnum fieldType;

  public static final String JSON_PROPERTY_GROUP_ID = "group_id";
  @jakarta.annotation.Nullable  private String groupId;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_LABEL = "label";
  @jakarta.annotation.Nullable  private String label;

  public static final String JSON_PROPERTY_OPTIONS = "options";
  @jakarta.annotation.Nullable  private List<@Valid CustomFieldOption> options = new ArrayList<>();

  /**
   * Gets or Sets recordType
   */
  public enum RecordTypeEnum {
    CONTACT(String.valueOf("CONTACT")),
    
    REFERRAL_PARTNER(String.valueOf("REFERRAL_PARTNER")),
    
    OPPORTUNITY(String.valueOf("OPPORTUNITY")),
    
    TASK_NOTE_APPOINTMENT(String.valueOf("TASK_NOTE_APPOINTMENT")),
    
    COMPANY(String.valueOf("COMPANY")),
    
    ORDER(String.valueOf("ORDER")),
    
    SUBSCRIPTION(String.valueOf("SUBSCRIPTION")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    RecordTypeEnum(String value) {
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
    public static RecordTypeEnum fromValue(String value) {
      for (RecordTypeEnum b : RecordTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_RECORD_TYPE = "record_type";
  @jakarta.annotation.Nullable  private RecordTypeEnum recordType;

  public CustomFieldMetaData() { 
  }

  public CustomFieldMetaData defaultValue(@jakarta.annotation.Nullable String defaultValue) {
    this.defaultValue = defaultValue;
    return this;
  }

  /**
   * Get defaultValue
   * @return defaultValue
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DEFAULT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDefaultValue() {
    return defaultValue;
  }


  @JsonProperty(JSON_PROPERTY_DEFAULT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDefaultValue(@jakarta.annotation.Nullable String defaultValue) {
    this.defaultValue = defaultValue;
  }


  public CustomFieldMetaData fieldName(@jakarta.annotation.Nullable String fieldName) {
    this.fieldName = fieldName;
    return this;
  }

  /**
   * Get fieldName
   * @return fieldName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIELD_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFieldName() {
    return fieldName;
  }


  @JsonProperty(JSON_PROPERTY_FIELD_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFieldName(@jakarta.annotation.Nullable String fieldName) {
    this.fieldName = fieldName;
  }


  public CustomFieldMetaData fieldType(@jakarta.annotation.Nullable FieldTypeEnum fieldType) {
    this.fieldType = fieldType;
    return this;
  }

  /**
   * Get fieldType
   * @return fieldType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIELD_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public FieldTypeEnum getFieldType() {
    return fieldType;
  }


  @JsonProperty(JSON_PROPERTY_FIELD_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFieldType(@jakarta.annotation.Nullable FieldTypeEnum fieldType) {
    this.fieldType = fieldType;
  }


  public CustomFieldMetaData groupId(@jakarta.annotation.Nullable String groupId) {
    this.groupId = groupId;
    return this;
  }

  /**
   * Get groupId
   * @return groupId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public CustomFieldMetaData id(@jakarta.annotation.Nullable String id) {
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


  public CustomFieldMetaData label(@jakarta.annotation.Nullable String label) {
    this.label = label;
    return this;
  }

  /**
   * Get label
   * @return label
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLabel() {
    return label;
  }


  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLabel(@jakarta.annotation.Nullable String label) {
    this.label = label;
  }


  public CustomFieldMetaData options(@jakarta.annotation.Nullable List<@Valid CustomFieldOption> options) {
    this.options = options;
    return this;
  }

  public CustomFieldMetaData addOptionsItem(CustomFieldOption optionsItem) {
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
  public List<@Valid CustomFieldOption> getOptions() {
    return options;
  }


  @JsonProperty(JSON_PROPERTY_OPTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOptions(@jakarta.annotation.Nullable List<@Valid CustomFieldOption> options) {
    this.options = options;
  }


  public CustomFieldMetaData recordType(@jakarta.annotation.Nullable RecordTypeEnum recordType) {
    this.recordType = recordType;
    return this;
  }

  /**
   * Get recordType
   * @return recordType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RECORD_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public RecordTypeEnum getRecordType() {
    return recordType;
  }


  @JsonProperty(JSON_PROPERTY_RECORD_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRecordType(@jakarta.annotation.Nullable RecordTypeEnum recordType) {
    this.recordType = recordType;
  }

  /**
   * Return true if this CustomFieldMetaData object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CustomFieldMetaData customFieldMetaData = (CustomFieldMetaData) o;
    return Objects.equals(this.defaultValue, customFieldMetaData.defaultValue) &&
        Objects.equals(this.fieldName, customFieldMetaData.fieldName) &&
        Objects.equals(this.fieldType, customFieldMetaData.fieldType) &&
        Objects.equals(this.groupId, customFieldMetaData.groupId) &&
        Objects.equals(this.id, customFieldMetaData.id) &&
        Objects.equals(this.label, customFieldMetaData.label) &&
        Objects.equals(this.options, customFieldMetaData.options) &&
        Objects.equals(this.recordType, customFieldMetaData.recordType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(defaultValue, fieldName, fieldType, groupId, id, label, options, recordType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CustomFieldMetaData {\n");
    sb.append("    defaultValue: ").append(toIndentedString(defaultValue)).append("\n");
    sb.append("    fieldName: ").append(toIndentedString(fieldName)).append("\n");
    sb.append("    fieldType: ").append(toIndentedString(fieldType)).append("\n");
    sb.append("    groupId: ").append(toIndentedString(groupId)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    options: ").append(toIndentedString(options)).append("\n");
    sb.append("    recordType: ").append(toIndentedString(recordType)).append("\n");
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
    
        private CustomFieldMetaData instance;
    
        public Builder() {
          this(new CustomFieldMetaData());
        }
    
        protected Builder(CustomFieldMetaData instance) {
          this.instance = instance;
        }
    
        public CustomFieldMetaData.Builder defaultValue(String defaultValue) {
              this.instance.defaultValue = defaultValue;
          return this;
        }
            public CustomFieldMetaData.Builder fieldName(String fieldName) {
              this.instance.fieldName = fieldName;
          return this;
        }
            public CustomFieldMetaData.Builder fieldType(FieldTypeEnum fieldType) {
              this.instance.fieldType = fieldType;
          return this;
        }
            public CustomFieldMetaData.Builder groupId(String groupId) {
              this.instance.groupId = groupId;
          return this;
        }
            public CustomFieldMetaData.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public CustomFieldMetaData.Builder label(String label) {
              this.instance.label = label;
          return this;
        }
            public CustomFieldMetaData.Builder options(List<@Valid CustomFieldOption> options) {
              this.instance.options = options;
          return this;
        }
            public CustomFieldMetaData.Builder recordType(RecordTypeEnum recordType) {
              this.instance.recordType = recordType;
          return this;
        }
        
    
        /**
        * returns a built CustomFieldMetaData instance.
        *
        * The builder is not reusable.
        */
        public CustomFieldMetaData build() {
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
      public static CustomFieldMetaData.Builder builder() {
        return new CustomFieldMetaData.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CustomFieldMetaData.Builder toBuilder() {
        return new CustomFieldMetaData.Builder()
          .defaultValue(getDefaultValue())
          .fieldName(getFieldName())
          .fieldType(getFieldType())
          .groupId(getGroupId())
          .id(getId())
          .label(getLabel())
          .options(getOptions())
          .recordType(getRecordType());
      }
}

