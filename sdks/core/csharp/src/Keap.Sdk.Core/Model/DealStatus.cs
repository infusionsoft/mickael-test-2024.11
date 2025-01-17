/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Keap.Sdk.Core.Client.OpenAPIDateConverter;

namespace Keap.Sdk.Core.Model
{
    /// <summary>
    /// Enum representing the status of a deal.
    /// </summary>
    /// <value>Enum representing the status of a deal.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum DealStatus
    {
        /// <summary>
        /// Enum ACTIVE for value: ACTIVE
        /// </summary>
        [EnumMember(Value = "ACTIVE")]
        ACTIVE = 1,

        /// <summary>
        /// Enum WON for value: WON
        /// </summary>
        [EnumMember(Value = "WON")]
        WON = 2,

        /// <summary>
        /// Enum LOST for value: LOST
        /// </summary>
        [EnumMember(Value = "LOST")]
        LOST = 3
    }

}
