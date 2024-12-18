/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
    /// StackTraceElement
    /// </summary>
    [DataContract(Name = "StackTraceElement")]
    public partial class StackTraceElement : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="StackTraceElement" /> class.
        /// </summary>
        /// <param name="classLoaderName">classLoaderName.</param>
        /// <param name="className">className.</param>
        /// <param name="fileName">fileName.</param>
        /// <param name="lineNumber">lineNumber.</param>
        /// <param name="methodName">methodName.</param>
        /// <param name="moduleName">moduleName.</param>
        /// <param name="moduleVersion">moduleVersion.</param>
        /// <param name="nativeMethod">nativeMethod.</param>
        public StackTraceElement(string classLoaderName = default(string), string className = default(string), string fileName = default(string), int lineNumber = default(int), string methodName = default(string), string moduleName = default(string), string moduleVersion = default(string), bool nativeMethod = default(bool))
        {
            this.ClassLoaderName = classLoaderName;
            this.ClassName = className;
            this.FileName = fileName;
            this.LineNumber = lineNumber;
            this.MethodName = methodName;
            this.ModuleName = moduleName;
            this.ModuleVersion = moduleVersion;
            this.NativeMethod = nativeMethod;
        }

        /// <summary>
        /// Gets or Sets ClassLoaderName
        /// </summary>
        [DataMember(Name = "classLoaderName", EmitDefaultValue = false)]
        public string ClassLoaderName { get; set; }

        /// <summary>
        /// Gets or Sets ClassName
        /// </summary>
        [DataMember(Name = "className", EmitDefaultValue = false)]
        public string ClassName { get; set; }

        /// <summary>
        /// Gets or Sets FileName
        /// </summary>
        [DataMember(Name = "fileName", EmitDefaultValue = false)]
        public string FileName { get; set; }

        /// <summary>
        /// Gets or Sets LineNumber
        /// </summary>
        [DataMember(Name = "lineNumber", EmitDefaultValue = false)]
        public int LineNumber { get; set; }

        /// <summary>
        /// Gets or Sets MethodName
        /// </summary>
        [DataMember(Name = "methodName", EmitDefaultValue = false)]
        public string MethodName { get; set; }

        /// <summary>
        /// Gets or Sets ModuleName
        /// </summary>
        [DataMember(Name = "moduleName", EmitDefaultValue = false)]
        public string ModuleName { get; set; }

        /// <summary>
        /// Gets or Sets ModuleVersion
        /// </summary>
        [DataMember(Name = "moduleVersion", EmitDefaultValue = false)]
        public string ModuleVersion { get; set; }

        /// <summary>
        /// Gets or Sets NativeMethod
        /// </summary>
        [DataMember(Name = "nativeMethod", EmitDefaultValue = true)]
        public bool NativeMethod { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class StackTraceElement {\n");
            sb.Append("  ClassLoaderName: ").Append(ClassLoaderName).Append("\n");
            sb.Append("  ClassName: ").Append(ClassName).Append("\n");
            sb.Append("  FileName: ").Append(FileName).Append("\n");
            sb.Append("  LineNumber: ").Append(LineNumber).Append("\n");
            sb.Append("  MethodName: ").Append(MethodName).Append("\n");
            sb.Append("  ModuleName: ").Append(ModuleName).Append("\n");
            sb.Append("  ModuleVersion: ").Append(ModuleVersion).Append("\n");
            sb.Append("  NativeMethod: ").Append(NativeMethod).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }    }

}
