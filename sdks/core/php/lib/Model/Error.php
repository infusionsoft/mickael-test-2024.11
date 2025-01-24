<?php
/**
 * Error
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.10.0
 */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Keap\Sdk\Core\Model;

use \ArrayAccess;
use \Keap\Sdk\Core\ObjectSerializer;

/**
 * Error Class Doc Comment
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Error implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'Error';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'cause' => '\Keap\Sdk\Core\Model\Throwable',
        'localized_message' => 'string',
        'message' => 'string',
        'stack_trace' => '\Keap\Sdk\Core\Model\StackTraceElement[]',
        'suppressed' => '\Keap\Sdk\Core\Model\Throwable[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'cause' => null,
        'localized_message' => null,
        'message' => null,
        'stack_trace' => null,
        'suppressed' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'cause' => false,
        'localized_message' => false,
        'message' => false,
        'stack_trace' => false,
        'suppressed' => false
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
        'cause' => 'cause',
        'localized_message' => 'localizedMessage',
        'message' => 'message',
        'stack_trace' => 'stackTrace',
        'suppressed' => 'suppressed'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'cause' => 'setCause',
        'localized_message' => 'setLocalizedMessage',
        'message' => 'setMessage',
        'stack_trace' => 'setStackTrace',
        'suppressed' => 'setSuppressed'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'cause' => 'getCause',
        'localized_message' => 'getLocalizedMessage',
        'message' => 'getMessage',
        'stack_trace' => 'getStackTrace',
        'suppressed' => 'getSuppressed'
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
        $this->setIfExists('cause', $data ?? [], null);
        $this->setIfExists('localized_message', $data ?? [], null);
        $this->setIfExists('message', $data ?? [], null);
        $this->setIfExists('stack_trace', $data ?? [], null);
        $this->setIfExists('suppressed', $data ?? [], null);
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
     * Gets cause
     *
     * @return \Keap\Sdk\Core\Model\Throwable|null
     */
    public function getCause()
    {
        return $this->container['cause'];
    }

    /**
     * Sets cause
     *
     * @param \Keap\Sdk\Core\Model\Throwable|null $cause cause
     *
     * @return self
     */
    public function setCause($cause)
    {
        if (is_null($cause)) {
            throw new \InvalidArgumentException('non-nullable cause cannot be null');
        }
        $this->container['cause'] = $cause;

        return $this;
    }

    /**
     * Gets localized_message
     *
     * @return string|null
     */
    public function getLocalizedMessage()
    {
        return $this->container['localized_message'];
    }

    /**
     * Sets localized_message
     *
     * @param string|null $localized_message localized_message
     *
     * @return self
     */
    public function setLocalizedMessage($localized_message)
    {
        if (is_null($localized_message)) {
            throw new \InvalidArgumentException('non-nullable localized_message cannot be null');
        }
        $this->container['localized_message'] = $localized_message;

        return $this;
    }

    /**
     * Gets message
     *
     * @return string|null
     */
    public function getMessage()
    {
        return $this->container['message'];
    }

    /**
     * Sets message
     *
     * @param string|null $message message
     *
     * @return self
     */
    public function setMessage($message)
    {
        if (is_null($message)) {
            throw new \InvalidArgumentException('non-nullable message cannot be null');
        }
        $this->container['message'] = $message;

        return $this;
    }

    /**
     * Gets stack_trace
     *
     * @return \Keap\Sdk\Core\Model\StackTraceElement[]|null
     */
    public function getStackTrace()
    {
        return $this->container['stack_trace'];
    }

    /**
     * Sets stack_trace
     *
     * @param \Keap\Sdk\Core\Model\StackTraceElement[]|null $stack_trace stack_trace
     *
     * @return self
     */
    public function setStackTrace($stack_trace)
    {
        if (is_null($stack_trace)) {
            throw new \InvalidArgumentException('non-nullable stack_trace cannot be null');
        }
        $this->container['stack_trace'] = $stack_trace;

        return $this;
    }

    /**
     * Gets suppressed
     *
     * @return \Keap\Sdk\Core\Model\Throwable[]|null
     */
    public function getSuppressed()
    {
        return $this->container['suppressed'];
    }

    /**
     * Sets suppressed
     *
     * @param \Keap\Sdk\Core\Model\Throwable[]|null $suppressed suppressed
     *
     * @return self
     */
    public function setSuppressed($suppressed)
    {
        if (is_null($suppressed)) {
            throw new \InvalidArgumentException('non-nullable suppressed cannot be null');
        }
        $this->container['suppressed'] = $suppressed;

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


