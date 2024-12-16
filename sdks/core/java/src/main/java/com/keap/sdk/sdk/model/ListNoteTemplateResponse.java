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
import com.keap.sdk.sdk.model.NoteTemplate;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListNoteTemplateResponse
 */
@JsonPropertyOrder({
  ListNoteTemplateResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  ListNoteTemplateResponse.JSON_PROPERTY_NOTE_TEMPLATES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")
public class ListNoteTemplateResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_NOTE_TEMPLATES = "note_templates";
  @jakarta.annotation.Nullable  private List<@Valid NoteTemplate> noteTemplates = new ArrayList<>();

  public ListNoteTemplateResponse() { 
  }

  public ListNoteTemplateResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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


  public ListNoteTemplateResponse noteTemplates(@jakarta.annotation.Nullable List<@Valid NoteTemplate> noteTemplates) {
    this.noteTemplates = noteTemplates;
    return this;
  }

  public ListNoteTemplateResponse addNoteTemplatesItem(NoteTemplate noteTemplatesItem) {
    if (this.noteTemplates == null) {
      this.noteTemplates = new ArrayList<>();
    }
    this.noteTemplates.add(noteTemplatesItem);
    return this;
  }

  /**
   * Get noteTemplates
   * @return noteTemplates
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NOTE_TEMPLATES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid NoteTemplate> getNoteTemplates() {
    return noteTemplates;
  }


  @JsonProperty(JSON_PROPERTY_NOTE_TEMPLATES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNoteTemplates(@jakarta.annotation.Nullable List<@Valid NoteTemplate> noteTemplates) {
    this.noteTemplates = noteTemplates;
  }

  /**
   * Return true if this ListNoteTemplateResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListNoteTemplateResponse listNoteTemplateResponse = (ListNoteTemplateResponse) o;
    return Objects.equals(this.nextPageToken, listNoteTemplateResponse.nextPageToken) &&
        Objects.equals(this.noteTemplates, listNoteTemplateResponse.noteTemplates);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, noteTemplates);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListNoteTemplateResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    noteTemplates: ").append(toIndentedString(noteTemplates)).append("\n");
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
    
        private ListNoteTemplateResponse instance;
    
        public Builder() {
          this(new ListNoteTemplateResponse());
        }
    
        protected Builder(ListNoteTemplateResponse instance) {
          this.instance = instance;
        }
    
        public ListNoteTemplateResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public ListNoteTemplateResponse.Builder noteTemplates(List<@Valid NoteTemplate> noteTemplates) {
              this.instance.noteTemplates = noteTemplates;
          return this;
        }
        
    
        /**
        * returns a built ListNoteTemplateResponse instance.
        *
        * The builder is not reusable.
        */
        public ListNoteTemplateResponse build() {
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
      public static ListNoteTemplateResponse.Builder builder() {
        return new ListNoteTemplateResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListNoteTemplateResponse.Builder toBuilder() {
        return new ListNoteTemplateResponse.Builder()
          .nextPageToken(getNextPageToken())
          .noteTemplates(getNoteTemplates());
      }
}

