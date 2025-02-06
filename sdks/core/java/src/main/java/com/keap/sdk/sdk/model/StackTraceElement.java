/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
 * StackTraceElement
 */
@JsonPropertyOrder({
  StackTraceElement.JSON_PROPERTY_CLASS_LOADER_NAME,
  StackTraceElement.JSON_PROPERTY_CLASS_NAME,
  StackTraceElement.JSON_PROPERTY_FILE_NAME,
  StackTraceElement.JSON_PROPERTY_LINE_NUMBER,
  StackTraceElement.JSON_PROPERTY_METHOD_NAME,
  StackTraceElement.JSON_PROPERTY_MODULE_NAME,
  StackTraceElement.JSON_PROPERTY_MODULE_VERSION,
  StackTraceElement.JSON_PROPERTY_NATIVE_METHOD
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class StackTraceElement implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CLASS_LOADER_NAME = "classLoaderName";
  @jakarta.annotation.Nullable  private String classLoaderName;

  public static final String JSON_PROPERTY_CLASS_NAME = "className";
  @jakarta.annotation.Nullable  private String className;

  public static final String JSON_PROPERTY_FILE_NAME = "fileName";
  @jakarta.annotation.Nullable  private String fileName;

  public static final String JSON_PROPERTY_LINE_NUMBER = "lineNumber";
  @jakarta.annotation.Nullable  private Integer lineNumber;

  public static final String JSON_PROPERTY_METHOD_NAME = "methodName";
  @jakarta.annotation.Nullable  private String methodName;

  public static final String JSON_PROPERTY_MODULE_NAME = "moduleName";
  @jakarta.annotation.Nullable  private String moduleName;

  public static final String JSON_PROPERTY_MODULE_VERSION = "moduleVersion";
  @jakarta.annotation.Nullable  private String moduleVersion;

  public static final String JSON_PROPERTY_NATIVE_METHOD = "nativeMethod";
  @jakarta.annotation.Nullable  private Boolean nativeMethod;

  public StackTraceElement() { 
  }

  public StackTraceElement classLoaderName(@jakarta.annotation.Nullable String classLoaderName) {
    this.classLoaderName = classLoaderName;
    return this;
  }

  /**
   * Get classLoaderName
   * @return classLoaderName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CLASS_LOADER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getClassLoaderName() {
    return classLoaderName;
  }


  @JsonProperty(JSON_PROPERTY_CLASS_LOADER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClassLoaderName(@jakarta.annotation.Nullable String classLoaderName) {
    this.classLoaderName = classLoaderName;
  }


  public StackTraceElement className(@jakarta.annotation.Nullable String className) {
    this.className = className;
    return this;
  }

  /**
   * Get className
   * @return className
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CLASS_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getClassName() {
    return className;
  }


  @JsonProperty(JSON_PROPERTY_CLASS_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClassName(@jakarta.annotation.Nullable String className) {
    this.className = className;
  }


  public StackTraceElement fileName(@jakarta.annotation.Nullable String fileName) {
    this.fileName = fileName;
    return this;
  }

  /**
   * Get fileName
   * @return fileName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFileName() {
    return fileName;
  }


  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFileName(@jakarta.annotation.Nullable String fileName) {
    this.fileName = fileName;
  }


  public StackTraceElement lineNumber(@jakarta.annotation.Nullable Integer lineNumber) {
    this.lineNumber = lineNumber;
    return this;
  }

  /**
   * Get lineNumber
   * @return lineNumber
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LINE_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getLineNumber() {
    return lineNumber;
  }


  @JsonProperty(JSON_PROPERTY_LINE_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLineNumber(@jakarta.annotation.Nullable Integer lineNumber) {
    this.lineNumber = lineNumber;
  }


  public StackTraceElement methodName(@jakarta.annotation.Nullable String methodName) {
    this.methodName = methodName;
    return this;
  }

  /**
   * Get methodName
   * @return methodName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_METHOD_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMethodName() {
    return methodName;
  }


  @JsonProperty(JSON_PROPERTY_METHOD_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMethodName(@jakarta.annotation.Nullable String methodName) {
    this.methodName = methodName;
  }


  public StackTraceElement moduleName(@jakarta.annotation.Nullable String moduleName) {
    this.moduleName = moduleName;
    return this;
  }

  /**
   * Get moduleName
   * @return moduleName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MODULE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getModuleName() {
    return moduleName;
  }


  @JsonProperty(JSON_PROPERTY_MODULE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setModuleName(@jakarta.annotation.Nullable String moduleName) {
    this.moduleName = moduleName;
  }


  public StackTraceElement moduleVersion(@jakarta.annotation.Nullable String moduleVersion) {
    this.moduleVersion = moduleVersion;
    return this;
  }

  /**
   * Get moduleVersion
   * @return moduleVersion
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MODULE_VERSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getModuleVersion() {
    return moduleVersion;
  }


  @JsonProperty(JSON_PROPERTY_MODULE_VERSION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setModuleVersion(@jakarta.annotation.Nullable String moduleVersion) {
    this.moduleVersion = moduleVersion;
  }


  public StackTraceElement nativeMethod(@jakarta.annotation.Nullable Boolean nativeMethod) {
    this.nativeMethod = nativeMethod;
    return this;
  }

  /**
   * Get nativeMethod
   * @return nativeMethod
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NATIVE_METHOD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getNativeMethod() {
    return nativeMethod;
  }


  @JsonProperty(JSON_PROPERTY_NATIVE_METHOD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNativeMethod(@jakarta.annotation.Nullable Boolean nativeMethod) {
    this.nativeMethod = nativeMethod;
  }

  /**
   * Return true if this StackTraceElement object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StackTraceElement stackTraceElement = (StackTraceElement) o;
    return Objects.equals(this.classLoaderName, stackTraceElement.classLoaderName) &&
        Objects.equals(this.className, stackTraceElement.className) &&
        Objects.equals(this.fileName, stackTraceElement.fileName) &&
        Objects.equals(this.lineNumber, stackTraceElement.lineNumber) &&
        Objects.equals(this.methodName, stackTraceElement.methodName) &&
        Objects.equals(this.moduleName, stackTraceElement.moduleName) &&
        Objects.equals(this.moduleVersion, stackTraceElement.moduleVersion) &&
        Objects.equals(this.nativeMethod, stackTraceElement.nativeMethod);
  }

  @Override
  public int hashCode() {
    return Objects.hash(classLoaderName, className, fileName, lineNumber, methodName, moduleName, moduleVersion, nativeMethod);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StackTraceElement {\n");
    sb.append("    classLoaderName: ").append(toIndentedString(classLoaderName)).append("\n");
    sb.append("    className: ").append(toIndentedString(className)).append("\n");
    sb.append("    fileName: ").append(toIndentedString(fileName)).append("\n");
    sb.append("    lineNumber: ").append(toIndentedString(lineNumber)).append("\n");
    sb.append("    methodName: ").append(toIndentedString(methodName)).append("\n");
    sb.append("    moduleName: ").append(toIndentedString(moduleName)).append("\n");
    sb.append("    moduleVersion: ").append(toIndentedString(moduleVersion)).append("\n");
    sb.append("    nativeMethod: ").append(toIndentedString(nativeMethod)).append("\n");
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
    
        private StackTraceElement instance;
    
        public Builder() {
          this(new StackTraceElement());
        }
    
        protected Builder(StackTraceElement instance) {
          this.instance = instance;
        }
    
        public StackTraceElement.Builder classLoaderName(String classLoaderName) {
              this.instance.classLoaderName = classLoaderName;
          return this;
        }
            public StackTraceElement.Builder className(String className) {
              this.instance.className = className;
          return this;
        }
            public StackTraceElement.Builder fileName(String fileName) {
              this.instance.fileName = fileName;
          return this;
        }
            public StackTraceElement.Builder lineNumber(Integer lineNumber) {
              this.instance.lineNumber = lineNumber;
          return this;
        }
            public StackTraceElement.Builder methodName(String methodName) {
              this.instance.methodName = methodName;
          return this;
        }
            public StackTraceElement.Builder moduleName(String moduleName) {
              this.instance.moduleName = moduleName;
          return this;
        }
            public StackTraceElement.Builder moduleVersion(String moduleVersion) {
              this.instance.moduleVersion = moduleVersion;
          return this;
        }
            public StackTraceElement.Builder nativeMethod(Boolean nativeMethod) {
              this.instance.nativeMethod = nativeMethod;
          return this;
        }
        
    
        /**
        * returns a built StackTraceElement instance.
        *
        * The builder is not reusable.
        */
        public StackTraceElement build() {
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
      public static StackTraceElement.Builder builder() {
        return new StackTraceElement.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public StackTraceElement.Builder toBuilder() {
        return new StackTraceElement.Builder()
          .classLoaderName(getClassLoaderName())
          .className(getClassName())
          .fileName(getFileName())
          .lineNumber(getLineNumber())
          .methodName(getMethodName())
          .moduleName(getModuleName())
          .moduleVersion(getModuleVersion())
          .nativeMethod(getNativeMethod());
      }
}

