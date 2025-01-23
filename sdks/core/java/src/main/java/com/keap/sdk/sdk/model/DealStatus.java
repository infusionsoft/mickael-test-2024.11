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
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Enum representing the status of a deal.
 */
public enum DealStatus {
  
  ACTIVE("ACTIVE"),
  
  WON("WON"),
  
  LOST("LOST"),
  
  UNKNOWN_COULD_NOT_DESERIALIZE("unknown_default_open_api");

  private String value;

  DealStatus(String value) {
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
  public static DealStatus fromValue(String value) {
    for (DealStatus b : DealStatus.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    return UNKNOWN_COULD_NOT_DESERIALIZE;
  }

}

