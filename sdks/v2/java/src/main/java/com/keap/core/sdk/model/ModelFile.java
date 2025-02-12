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
 * ModelFile
 */
@JsonPropertyOrder({
  ModelFile.JSON_PROPERTY_ABSOLUTE,
  ModelFile.JSON_PROPERTY_ABSOLUTE_FILE,
  ModelFile.JSON_PROPERTY_ABSOLUTE_PATH,
  ModelFile.JSON_PROPERTY_CANONICAL_FILE,
  ModelFile.JSON_PROPERTY_CANONICAL_PATH,
  ModelFile.JSON_PROPERTY_DIRECTORY,
  ModelFile.JSON_PROPERTY_EXECUTABLE,
  ModelFile.JSON_PROPERTY_FILE,
  ModelFile.JSON_PROPERTY_FREE_SPACE,
  ModelFile.JSON_PROPERTY_HIDDEN,
  ModelFile.JSON_PROPERTY_LAST_MODIFIED,
  ModelFile.JSON_PROPERTY_NAME,
  ModelFile.JSON_PROPERTY_PARENT,
  ModelFile.JSON_PROPERTY_PARENT_FILE,
  ModelFile.JSON_PROPERTY_PATH,
  ModelFile.JSON_PROPERTY_READABLE,
  ModelFile.JSON_PROPERTY_TOTAL_SPACE,
  ModelFile.JSON_PROPERTY_USABLE_SPACE,
  ModelFile.JSON_PROPERTY_WRITABLE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ModelFile implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ABSOLUTE = "absolute";
  @jakarta.annotation.Nullable  private Boolean absolute;

  public static final String JSON_PROPERTY_ABSOLUTE_FILE = "absoluteFile";
  @jakarta.annotation.Nullable  private ModelFile absoluteFile;

  public static final String JSON_PROPERTY_ABSOLUTE_PATH = "absolutePath";
  @jakarta.annotation.Nullable  private String absolutePath;

  public static final String JSON_PROPERTY_CANONICAL_FILE = "canonicalFile";
  @jakarta.annotation.Nullable  private ModelFile canonicalFile;

  public static final String JSON_PROPERTY_CANONICAL_PATH = "canonicalPath";
  @jakarta.annotation.Nullable  private String canonicalPath;

  public static final String JSON_PROPERTY_DIRECTORY = "directory";
  @jakarta.annotation.Nullable  private Boolean directory;

  public static final String JSON_PROPERTY_EXECUTABLE = "executable";
  @jakarta.annotation.Nullable  private Boolean executable;

  public static final String JSON_PROPERTY_FILE = "file";
  @jakarta.annotation.Nullable  private Boolean _file;

  public static final String JSON_PROPERTY_FREE_SPACE = "freeSpace";
  @jakarta.annotation.Nullable  private Long freeSpace;

  public static final String JSON_PROPERTY_HIDDEN = "hidden";
  @jakarta.annotation.Nullable  private Boolean hidden;

  public static final String JSON_PROPERTY_LAST_MODIFIED = "lastModified";
  @jakarta.annotation.Nullable  private Long lastModified;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PARENT = "parent";
  @jakarta.annotation.Nullable  private String parent;

  public static final String JSON_PROPERTY_PARENT_FILE = "parentFile";
  @jakarta.annotation.Nullable  private ModelFile parentFile;

  public static final String JSON_PROPERTY_PATH = "path";
  @jakarta.annotation.Nullable  private String path;

  public static final String JSON_PROPERTY_READABLE = "readable";
  @jakarta.annotation.Nullable  private Boolean readable;

  public static final String JSON_PROPERTY_TOTAL_SPACE = "totalSpace";
  @jakarta.annotation.Nullable  private Long totalSpace;

  public static final String JSON_PROPERTY_USABLE_SPACE = "usableSpace";
  @jakarta.annotation.Nullable  private Long usableSpace;

  public static final String JSON_PROPERTY_WRITABLE = "writable";
  @jakarta.annotation.Nullable  private Boolean writable;

  public ModelFile() { 
  }

  public ModelFile absolute(@jakarta.annotation.Nullable Boolean absolute) {
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


  public ModelFile absoluteFile(@jakarta.annotation.Nullable ModelFile absoluteFile) {
    this.absoluteFile = absoluteFile;
    return this;
  }

  /**
   * Get absoluteFile
   * @return absoluteFile
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ABSOLUTE_FILE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ModelFile getAbsoluteFile() {
    return absoluteFile;
  }


  @JsonProperty(JSON_PROPERTY_ABSOLUTE_FILE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAbsoluteFile(@jakarta.annotation.Nullable ModelFile absoluteFile) {
    this.absoluteFile = absoluteFile;
  }


  public ModelFile absolutePath(@jakarta.annotation.Nullable String absolutePath) {
    this.absolutePath = absolutePath;
    return this;
  }

  /**
   * Get absolutePath
   * @return absolutePath
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ABSOLUTE_PATH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getAbsolutePath() {
    return absolutePath;
  }


  @JsonProperty(JSON_PROPERTY_ABSOLUTE_PATH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAbsolutePath(@jakarta.annotation.Nullable String absolutePath) {
    this.absolutePath = absolutePath;
  }


  public ModelFile canonicalFile(@jakarta.annotation.Nullable ModelFile canonicalFile) {
    this.canonicalFile = canonicalFile;
    return this;
  }

  /**
   * Get canonicalFile
   * @return canonicalFile
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CANONICAL_FILE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ModelFile getCanonicalFile() {
    return canonicalFile;
  }


  @JsonProperty(JSON_PROPERTY_CANONICAL_FILE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCanonicalFile(@jakarta.annotation.Nullable ModelFile canonicalFile) {
    this.canonicalFile = canonicalFile;
  }


  public ModelFile canonicalPath(@jakarta.annotation.Nullable String canonicalPath) {
    this.canonicalPath = canonicalPath;
    return this;
  }

  /**
   * Get canonicalPath
   * @return canonicalPath
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CANONICAL_PATH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCanonicalPath() {
    return canonicalPath;
  }


  @JsonProperty(JSON_PROPERTY_CANONICAL_PATH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCanonicalPath(@jakarta.annotation.Nullable String canonicalPath) {
    this.canonicalPath = canonicalPath;
  }


  public ModelFile directory(@jakarta.annotation.Nullable Boolean directory) {
    this.directory = directory;
    return this;
  }

  /**
   * Get directory
   * @return directory
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DIRECTORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getDirectory() {
    return directory;
  }


  @JsonProperty(JSON_PROPERTY_DIRECTORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDirectory(@jakarta.annotation.Nullable Boolean directory) {
    this.directory = directory;
  }


  public ModelFile executable(@jakarta.annotation.Nullable Boolean executable) {
    this.executable = executable;
    return this;
  }

  /**
   * Get executable
   * @return executable
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EXECUTABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getExecutable() {
    return executable;
  }


  @JsonProperty(JSON_PROPERTY_EXECUTABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExecutable(@jakarta.annotation.Nullable Boolean executable) {
    this.executable = executable;
  }


  public ModelFile _file(@jakarta.annotation.Nullable Boolean _file) {
    this._file = _file;
    return this;
  }

  /**
   * Get _file
   * @return _file
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FILE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getFile() {
    return _file;
  }


  @JsonProperty(JSON_PROPERTY_FILE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFile(@jakarta.annotation.Nullable Boolean _file) {
    this._file = _file;
  }


  public ModelFile freeSpace(@jakarta.annotation.Nullable Long freeSpace) {
    this.freeSpace = freeSpace;
    return this;
  }

  /**
   * Get freeSpace
   * @return freeSpace
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FREE_SPACE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getFreeSpace() {
    return freeSpace;
  }


  @JsonProperty(JSON_PROPERTY_FREE_SPACE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFreeSpace(@jakarta.annotation.Nullable Long freeSpace) {
    this.freeSpace = freeSpace;
  }


  public ModelFile hidden(@jakarta.annotation.Nullable Boolean hidden) {
    this.hidden = hidden;
    return this;
  }

  /**
   * Get hidden
   * @return hidden
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_HIDDEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getHidden() {
    return hidden;
  }


  @JsonProperty(JSON_PROPERTY_HIDDEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHidden(@jakarta.annotation.Nullable Boolean hidden) {
    this.hidden = hidden;
  }


  public ModelFile lastModified(@jakarta.annotation.Nullable Long lastModified) {
    this.lastModified = lastModified;
    return this;
  }

  /**
   * Get lastModified
   * @return lastModified
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LAST_MODIFIED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getLastModified() {
    return lastModified;
  }


  @JsonProperty(JSON_PROPERTY_LAST_MODIFIED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLastModified(@jakarta.annotation.Nullable Long lastModified) {
    this.lastModified = lastModified;
  }


  public ModelFile name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(@jakarta.annotation.Nullable String name) {
    this.name = name;
  }


  public ModelFile parent(@jakarta.annotation.Nullable String parent) {
    this.parent = parent;
    return this;
  }

  /**
   * Get parent
   * @return parent
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PARENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getParent() {
    return parent;
  }


  @JsonProperty(JSON_PROPERTY_PARENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setParent(@jakarta.annotation.Nullable String parent) {
    this.parent = parent;
  }


  public ModelFile parentFile(@jakarta.annotation.Nullable ModelFile parentFile) {
    this.parentFile = parentFile;
    return this;
  }

  /**
   * Get parentFile
   * @return parentFile
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PARENT_FILE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public ModelFile getParentFile() {
    return parentFile;
  }


  @JsonProperty(JSON_PROPERTY_PARENT_FILE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setParentFile(@jakarta.annotation.Nullable ModelFile parentFile) {
    this.parentFile = parentFile;
  }


  public ModelFile path(@jakarta.annotation.Nullable String path) {
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


  public ModelFile readable(@jakarta.annotation.Nullable Boolean readable) {
    this.readable = readable;
    return this;
  }

  /**
   * Get readable
   * @return readable
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_READABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getReadable() {
    return readable;
  }


  @JsonProperty(JSON_PROPERTY_READABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReadable(@jakarta.annotation.Nullable Boolean readable) {
    this.readable = readable;
  }


  public ModelFile totalSpace(@jakarta.annotation.Nullable Long totalSpace) {
    this.totalSpace = totalSpace;
    return this;
  }

  /**
   * Get totalSpace
   * @return totalSpace
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TOTAL_SPACE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getTotalSpace() {
    return totalSpace;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_SPACE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalSpace(@jakarta.annotation.Nullable Long totalSpace) {
    this.totalSpace = totalSpace;
  }


  public ModelFile usableSpace(@jakarta.annotation.Nullable Long usableSpace) {
    this.usableSpace = usableSpace;
    return this;
  }

  /**
   * Get usableSpace
   * @return usableSpace
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_USABLE_SPACE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getUsableSpace() {
    return usableSpace;
  }


  @JsonProperty(JSON_PROPERTY_USABLE_SPACE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUsableSpace(@jakarta.annotation.Nullable Long usableSpace) {
    this.usableSpace = usableSpace;
  }


  public ModelFile writable(@jakarta.annotation.Nullable Boolean writable) {
    this.writable = writable;
    return this;
  }

  /**
   * Get writable
   * @return writable
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_WRITABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getWritable() {
    return writable;
  }


  @JsonProperty(JSON_PROPERTY_WRITABLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWritable(@jakarta.annotation.Nullable Boolean writable) {
    this.writable = writable;
  }

  /**
   * Return true if this File object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModelFile _file = (ModelFile) o;
    return Objects.equals(this.absolute, _file.absolute) &&
        Objects.equals(this.absoluteFile, _file.absoluteFile) &&
        Objects.equals(this.absolutePath, _file.absolutePath) &&
        Objects.equals(this.canonicalFile, _file.canonicalFile) &&
        Objects.equals(this.canonicalPath, _file.canonicalPath) &&
        Objects.equals(this.directory, _file.directory) &&
        Objects.equals(this.executable, _file.executable) &&
        Objects.equals(this._file, _file._file) &&
        Objects.equals(this.freeSpace, _file.freeSpace) &&
        Objects.equals(this.hidden, _file.hidden) &&
        Objects.equals(this.lastModified, _file.lastModified) &&
        Objects.equals(this.name, _file.name) &&
        Objects.equals(this.parent, _file.parent) &&
        Objects.equals(this.parentFile, _file.parentFile) &&
        Objects.equals(this.path, _file.path) &&
        Objects.equals(this.readable, _file.readable) &&
        Objects.equals(this.totalSpace, _file.totalSpace) &&
        Objects.equals(this.usableSpace, _file.usableSpace) &&
        Objects.equals(this.writable, _file.writable);
  }

  @Override
  public int hashCode() {
    return Objects.hash(absolute, absoluteFile, absolutePath, canonicalFile, canonicalPath, directory, executable, _file, freeSpace, hidden, lastModified, name, parent, parentFile, path, readable, totalSpace, usableSpace, writable);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelFile {\n");
    sb.append("    absolute: ").append(toIndentedString(absolute)).append("\n");
    sb.append("    absoluteFile: ").append(toIndentedString(absoluteFile)).append("\n");
    sb.append("    absolutePath: ").append(toIndentedString(absolutePath)).append("\n");
    sb.append("    canonicalFile: ").append(toIndentedString(canonicalFile)).append("\n");
    sb.append("    canonicalPath: ").append(toIndentedString(canonicalPath)).append("\n");
    sb.append("    directory: ").append(toIndentedString(directory)).append("\n");
    sb.append("    executable: ").append(toIndentedString(executable)).append("\n");
    sb.append("    _file: ").append(toIndentedString(_file)).append("\n");
    sb.append("    freeSpace: ").append(toIndentedString(freeSpace)).append("\n");
    sb.append("    hidden: ").append(toIndentedString(hidden)).append("\n");
    sb.append("    lastModified: ").append(toIndentedString(lastModified)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    parent: ").append(toIndentedString(parent)).append("\n");
    sb.append("    parentFile: ").append(toIndentedString(parentFile)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
    sb.append("    readable: ").append(toIndentedString(readable)).append("\n");
    sb.append("    totalSpace: ").append(toIndentedString(totalSpace)).append("\n");
    sb.append("    usableSpace: ").append(toIndentedString(usableSpace)).append("\n");
    sb.append("    writable: ").append(toIndentedString(writable)).append("\n");
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
    
        private ModelFile instance;
    
        public Builder() {
          this(new ModelFile());
        }
    
        protected Builder(ModelFile instance) {
          this.instance = instance;
        }
    
        public ModelFile.Builder absolute(Boolean absolute) {
              this.instance.absolute = absolute;
          return this;
        }
            public ModelFile.Builder absoluteFile(ModelFile absoluteFile) {
              this.instance.absoluteFile = absoluteFile;
          return this;
        }
            public ModelFile.Builder absolutePath(String absolutePath) {
              this.instance.absolutePath = absolutePath;
          return this;
        }
            public ModelFile.Builder canonicalFile(ModelFile canonicalFile) {
              this.instance.canonicalFile = canonicalFile;
          return this;
        }
            public ModelFile.Builder canonicalPath(String canonicalPath) {
              this.instance.canonicalPath = canonicalPath;
          return this;
        }
            public ModelFile.Builder directory(Boolean directory) {
              this.instance.directory = directory;
          return this;
        }
            public ModelFile.Builder executable(Boolean executable) {
              this.instance.executable = executable;
          return this;
        }
            public ModelFile.Builder _file(Boolean _file) {
              this.instance._file = _file;
          return this;
        }
            public ModelFile.Builder freeSpace(Long freeSpace) {
              this.instance.freeSpace = freeSpace;
          return this;
        }
            public ModelFile.Builder hidden(Boolean hidden) {
              this.instance.hidden = hidden;
          return this;
        }
            public ModelFile.Builder lastModified(Long lastModified) {
              this.instance.lastModified = lastModified;
          return this;
        }
            public ModelFile.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public ModelFile.Builder parent(String parent) {
              this.instance.parent = parent;
          return this;
        }
            public ModelFile.Builder parentFile(ModelFile parentFile) {
              this.instance.parentFile = parentFile;
          return this;
        }
            public ModelFile.Builder path(String path) {
              this.instance.path = path;
          return this;
        }
            public ModelFile.Builder readable(Boolean readable) {
              this.instance.readable = readable;
          return this;
        }
            public ModelFile.Builder totalSpace(Long totalSpace) {
              this.instance.totalSpace = totalSpace;
          return this;
        }
            public ModelFile.Builder usableSpace(Long usableSpace) {
              this.instance.usableSpace = usableSpace;
          return this;
        }
            public ModelFile.Builder writable(Boolean writable) {
              this.instance.writable = writable;
          return this;
        }
        
    
        /**
        * returns a built ModelFile instance.
        *
        * The builder is not reusable.
        */
        public ModelFile build() {
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
      public static ModelFile.Builder builder() {
        return new ModelFile.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ModelFile.Builder toBuilder() {
        return new ModelFile.Builder()
          .absolute(getAbsolute())
          .absoluteFile(getAbsoluteFile())
          .absolutePath(getAbsolutePath())
          .canonicalFile(getCanonicalFile())
          .canonicalPath(getCanonicalPath())
          .directory(getDirectory())
          .executable(getExecutable())
          ._file(getFile())
          .freeSpace(getFreeSpace())
          .hidden(getHidden())
          .lastModified(getLastModified())
          .name(getName())
          .parent(getParent())
          .parentFile(getParentFile())
          .path(getPath())
          .readable(getReadable())
          .totalSpace(getTotalSpace())
          .usableSpace(getUsableSpace())
          .writable(getWritable());
      }
}

