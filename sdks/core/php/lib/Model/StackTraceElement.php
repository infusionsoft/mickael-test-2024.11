<?php
/**
 * StackTraceElement
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Keap REST API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Com\Keap\Sdk\Core\Model;

use \ArrayAccess;
use \Com\Keap\Sdk\Core\ObjectSerializer;

/**
 * StackTraceElement Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class StackTraceElement implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'StackTraceElement';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'class_loader_name' => 'string',
        'class_name' => 'string',
        'file_name' => 'string',
        'line_number' => 'int',
        'method_name' => 'string',
        'module_name' => 'string',
        'module_version' => 'string',
        'native_method' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'class_loader_name' => null,
        'class_name' => null,
        'file_name' => null,
        'line_number' => 'int32',
        'method_name' => null,
        'module_name' => null,
        'module_version' => null,
        'native_method' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'class_loader_name' => false,
        'class_name' => false,
        'file_name' => false,
        'line_number' => false,
        'method_name' => false,
        'module_name' => false,
        'module_version' => false,
        'native_method' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'class_loader_name' => 'classLoaderName',
        'class_name' => 'className',
        'file_name' => 'fileName',
        'line_number' => 'lineNumber',
        'method_name' => 'methodName',
        'module_name' => 'moduleName',
        'module_version' => 'moduleVersion',
        'native_method' => 'nativeMethod'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'class_loader_name' => 'setClassLoaderName',
        'class_name' => 'setClassName',
        'file_name' => 'setFileName',
        'line_number' => 'setLineNumber',
        'method_name' => 'setMethodName',
        'module_name' => 'setModuleName',
        'module_version' => 'setModuleVersion',
        'native_method' => 'setNativeMethod'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'class_loader_name' => 'getClassLoaderName',
        'class_name' => 'getClassName',
        'file_name' => 'getFileName',
        'line_number' => 'getLineNumber',
        'method_name' => 'getMethodName',
        'module_name' => 'getModuleName',
        'module_version' => 'getModuleVersion',
        'native_method' => 'getNativeMethod'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->setIfExists('class_loader_name', $data ?? [], null);
        $this->setIfExists('class_name', $data ?? [], null);
        $this->setIfExists('file_name', $data ?? [], null);
        $this->setIfExists('line_number', $data ?? [], null);
        $this->setIfExists('method_name', $data ?? [], null);
        $this->setIfExists('module_name', $data ?? [], null);
        $this->setIfExists('module_version', $data ?? [], null);
        $this->setIfExists('native_method', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets class_loader_name
     *
     * @return string|null
     */
    public function getClassLoaderName()
    {
        return $this->container['class_loader_name'];
    }

    /**
     * Sets class_loader_name
     *
     * @param string|null $class_loader_name class_loader_name
     *
     * @return self
     */
    public function setClassLoaderName($class_loader_name)
    {
        if (is_null($class_loader_name)) {
            throw new \InvalidArgumentException('non-nullable class_loader_name cannot be null');
        }
        $this->container['class_loader_name'] = $class_loader_name;

        return $this;
    }

    /**
     * Gets class_name
     *
     * @return string|null
     */
    public function getClassName()
    {
        return $this->container['class_name'];
    }

    /**
     * Sets class_name
     *
     * @param string|null $class_name class_name
     *
     * @return self
     */
    public function setClassName($class_name)
    {
        if (is_null($class_name)) {
            throw new \InvalidArgumentException('non-nullable class_name cannot be null');
        }
        $this->container['class_name'] = $class_name;

        return $this;
    }

    /**
     * Gets file_name
     *
     * @return string|null
     */
    public function getFileName()
    {
        return $this->container['file_name'];
    }

    /**
     * Sets file_name
     *
     * @param string|null $file_name file_name
     *
     * @return self
     */
    public function setFileName($file_name)
    {
        if (is_null($file_name)) {
            throw new \InvalidArgumentException('non-nullable file_name cannot be null');
        }
        $this->container['file_name'] = $file_name;

        return $this;
    }

    /**
     * Gets line_number
     *
     * @return int|null
     */
    public function getLineNumber()
    {
        return $this->container['line_number'];
    }

    /**
     * Sets line_number
     *
     * @param int|null $line_number line_number
     *
     * @return self
     */
    public function setLineNumber($line_number)
    {
        if (is_null($line_number)) {
            throw new \InvalidArgumentException('non-nullable line_number cannot be null');
        }
        $this->container['line_number'] = $line_number;

        return $this;
    }

    /**
     * Gets method_name
     *
     * @return string|null
     */
    public function getMethodName()
    {
        return $this->container['method_name'];
    }

    /**
     * Sets method_name
     *
     * @param string|null $method_name method_name
     *
     * @return self
     */
    public function setMethodName($method_name)
    {
        if (is_null($method_name)) {
            throw new \InvalidArgumentException('non-nullable method_name cannot be null');
        }
        $this->container['method_name'] = $method_name;

        return $this;
    }

    /**
     * Gets module_name
     *
     * @return string|null
     */
    public function getModuleName()
    {
        return $this->container['module_name'];
    }

    /**
     * Sets module_name
     *
     * @param string|null $module_name module_name
     *
     * @return self
     */
    public function setModuleName($module_name)
    {
        if (is_null($module_name)) {
            throw new \InvalidArgumentException('non-nullable module_name cannot be null');
        }
        $this->container['module_name'] = $module_name;

        return $this;
    }

    /**
     * Gets module_version
     *
     * @return string|null
     */
    public function getModuleVersion()
    {
        return $this->container['module_version'];
    }

    /**
     * Sets module_version
     *
     * @param string|null $module_version module_version
     *
     * @return self
     */
    public function setModuleVersion($module_version)
    {
        if (is_null($module_version)) {
            throw new \InvalidArgumentException('non-nullable module_version cannot be null');
        }
        $this->container['module_version'] = $module_version;

        return $this;
    }

    /**
     * Gets native_method
     *
     * @return bool|null
     */
    public function getNativeMethod()
    {
        return $this->container['native_method'];
    }

    /**
     * Sets native_method
     *
     * @param bool|null $native_method native_method
     *
     * @return self
     */
    public function setNativeMethod($native_method)
    {
        if (is_null($native_method)) {
            throw new \InvalidArgumentException('non-nullable native_method cannot be null');
        }
        $this->container['native_method'] = $native_method;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


