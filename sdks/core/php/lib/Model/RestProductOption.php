<?php
/**
 * RestProductOption
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
 * RestProductOption Class Doc Comment
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class RestProductOption implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'RestProductOption';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'allow_spaces' => 'bool',
        'can_contain_character' => 'bool',
        'can_contain_number' => 'bool',
        'can_end_with_character' => 'bool',
        'can_end_with_number' => 'bool',
        'can_start_with_character' => 'bool',
        'can_start_with_number' => 'bool',
        'display_index' => 'int',
        'id' => 'string',
        'label' => 'string',
        'max_chars' => 'int',
        'min_chars' => 'int',
        'name' => 'string',
        'required' => 'bool',
        'text_message' => 'string',
        'type' => 'string',
        'values' => '\Keap\Sdk\Core\Model\RestProductOptionValue[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'allow_spaces' => null,
        'can_contain_character' => null,
        'can_contain_number' => null,
        'can_end_with_character' => null,
        'can_end_with_number' => null,
        'can_start_with_character' => null,
        'can_start_with_number' => null,
        'display_index' => 'int32',
        'id' => null,
        'label' => null,
        'max_chars' => 'int32',
        'min_chars' => 'int32',
        'name' => null,
        'required' => null,
        'text_message' => null,
        'type' => null,
        'values' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'allow_spaces' => false,
        'can_contain_character' => false,
        'can_contain_number' => false,
        'can_end_with_character' => false,
        'can_end_with_number' => false,
        'can_start_with_character' => false,
        'can_start_with_number' => false,
        'display_index' => false,
        'id' => false,
        'label' => false,
        'max_chars' => false,
        'min_chars' => false,
        'name' => false,
        'required' => false,
        'text_message' => false,
        'type' => false,
        'values' => false
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
        'allow_spaces' => 'allow_spaces',
        'can_contain_character' => 'can_contain_character',
        'can_contain_number' => 'can_contain_number',
        'can_end_with_character' => 'can_end_with_character',
        'can_end_with_number' => 'can_end_with_number',
        'can_start_with_character' => 'can_start_with_character',
        'can_start_with_number' => 'can_start_with_number',
        'display_index' => 'display_index',
        'id' => 'id',
        'label' => 'label',
        'max_chars' => 'max_chars',
        'min_chars' => 'min_chars',
        'name' => 'name',
        'required' => 'required',
        'text_message' => 'text_message',
        'type' => 'type',
        'values' => 'values'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'allow_spaces' => 'setAllowSpaces',
        'can_contain_character' => 'setCanContainCharacter',
        'can_contain_number' => 'setCanContainNumber',
        'can_end_with_character' => 'setCanEndWithCharacter',
        'can_end_with_number' => 'setCanEndWithNumber',
        'can_start_with_character' => 'setCanStartWithCharacter',
        'can_start_with_number' => 'setCanStartWithNumber',
        'display_index' => 'setDisplayIndex',
        'id' => 'setId',
        'label' => 'setLabel',
        'max_chars' => 'setMaxChars',
        'min_chars' => 'setMinChars',
        'name' => 'setName',
        'required' => 'setRequired',
        'text_message' => 'setTextMessage',
        'type' => 'setType',
        'values' => 'setValues'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'allow_spaces' => 'getAllowSpaces',
        'can_contain_character' => 'getCanContainCharacter',
        'can_contain_number' => 'getCanContainNumber',
        'can_end_with_character' => 'getCanEndWithCharacter',
        'can_end_with_number' => 'getCanEndWithNumber',
        'can_start_with_character' => 'getCanStartWithCharacter',
        'can_start_with_number' => 'getCanStartWithNumber',
        'display_index' => 'getDisplayIndex',
        'id' => 'getId',
        'label' => 'getLabel',
        'max_chars' => 'getMaxChars',
        'min_chars' => 'getMinChars',
        'name' => 'getName',
        'required' => 'getRequired',
        'text_message' => 'getTextMessage',
        'type' => 'getType',
        'values' => 'getValues'
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

    public const TYPE_FIXED = 'FIXED';
    public const TYPE_VARIABLE = 'VARIABLE';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getTypeAllowableValues()
    {
        return [
            self::TYPE_FIXED,
            self::TYPE_VARIABLE,
        ];
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
        $this->setIfExists('allow_spaces', $data ?? [], null);
        $this->setIfExists('can_contain_character', $data ?? [], null);
        $this->setIfExists('can_contain_number', $data ?? [], null);
        $this->setIfExists('can_end_with_character', $data ?? [], null);
        $this->setIfExists('can_end_with_number', $data ?? [], null);
        $this->setIfExists('can_start_with_character', $data ?? [], null);
        $this->setIfExists('can_start_with_number', $data ?? [], null);
        $this->setIfExists('display_index', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('label', $data ?? [], null);
        $this->setIfExists('max_chars', $data ?? [], null);
        $this->setIfExists('min_chars', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('required', $data ?? [], null);
        $this->setIfExists('text_message', $data ?? [], null);
        $this->setIfExists('type', $data ?? [], null);
        $this->setIfExists('values', $data ?? [], null);
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

        $allowedValues = $this->getTypeAllowableValues();
        if (!is_null($this->container['type']) && !in_array($this->container['type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'type', must be one of '%s'",
                $this->container['type'],
                implode("', '", $allowedValues)
            );
        }

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
     * Gets allow_spaces
     *
     * @return bool|null
     */
    public function getAllowSpaces()
    {
        return $this->container['allow_spaces'];
    }

    /**
     * Sets allow_spaces
     *
     * @param bool|null $allow_spaces allow_spaces
     *
     * @return self
     */
    public function setAllowSpaces($allow_spaces)
    {
        if (is_null($allow_spaces)) {
            throw new \InvalidArgumentException('non-nullable allow_spaces cannot be null');
        }
        $this->container['allow_spaces'] = $allow_spaces;

        return $this;
    }

    /**
     * Gets can_contain_character
     *
     * @return bool|null
     */
    public function getCanContainCharacter()
    {
        return $this->container['can_contain_character'];
    }

    /**
     * Sets can_contain_character
     *
     * @param bool|null $can_contain_character can_contain_character
     *
     * @return self
     */
    public function setCanContainCharacter($can_contain_character)
    {
        if (is_null($can_contain_character)) {
            throw new \InvalidArgumentException('non-nullable can_contain_character cannot be null');
        }
        $this->container['can_contain_character'] = $can_contain_character;

        return $this;
    }

    /**
     * Gets can_contain_number
     *
     * @return bool|null
     */
    public function getCanContainNumber()
    {
        return $this->container['can_contain_number'];
    }

    /**
     * Sets can_contain_number
     *
     * @param bool|null $can_contain_number can_contain_number
     *
     * @return self
     */
    public function setCanContainNumber($can_contain_number)
    {
        if (is_null($can_contain_number)) {
            throw new \InvalidArgumentException('non-nullable can_contain_number cannot be null');
        }
        $this->container['can_contain_number'] = $can_contain_number;

        return $this;
    }

    /**
     * Gets can_end_with_character
     *
     * @return bool|null
     */
    public function getCanEndWithCharacter()
    {
        return $this->container['can_end_with_character'];
    }

    /**
     * Sets can_end_with_character
     *
     * @param bool|null $can_end_with_character can_end_with_character
     *
     * @return self
     */
    public function setCanEndWithCharacter($can_end_with_character)
    {
        if (is_null($can_end_with_character)) {
            throw new \InvalidArgumentException('non-nullable can_end_with_character cannot be null');
        }
        $this->container['can_end_with_character'] = $can_end_with_character;

        return $this;
    }

    /**
     * Gets can_end_with_number
     *
     * @return bool|null
     */
    public function getCanEndWithNumber()
    {
        return $this->container['can_end_with_number'];
    }

    /**
     * Sets can_end_with_number
     *
     * @param bool|null $can_end_with_number can_end_with_number
     *
     * @return self
     */
    public function setCanEndWithNumber($can_end_with_number)
    {
        if (is_null($can_end_with_number)) {
            throw new \InvalidArgumentException('non-nullable can_end_with_number cannot be null');
        }
        $this->container['can_end_with_number'] = $can_end_with_number;

        return $this;
    }

    /**
     * Gets can_start_with_character
     *
     * @return bool|null
     */
    public function getCanStartWithCharacter()
    {
        return $this->container['can_start_with_character'];
    }

    /**
     * Sets can_start_with_character
     *
     * @param bool|null $can_start_with_character can_start_with_character
     *
     * @return self
     */
    public function setCanStartWithCharacter($can_start_with_character)
    {
        if (is_null($can_start_with_character)) {
            throw new \InvalidArgumentException('non-nullable can_start_with_character cannot be null');
        }
        $this->container['can_start_with_character'] = $can_start_with_character;

        return $this;
    }

    /**
     * Gets can_start_with_number
     *
     * @return bool|null
     */
    public function getCanStartWithNumber()
    {
        return $this->container['can_start_with_number'];
    }

    /**
     * Sets can_start_with_number
     *
     * @param bool|null $can_start_with_number can_start_with_number
     *
     * @return self
     */
    public function setCanStartWithNumber($can_start_with_number)
    {
        if (is_null($can_start_with_number)) {
            throw new \InvalidArgumentException('non-nullable can_start_with_number cannot be null');
        }
        $this->container['can_start_with_number'] = $can_start_with_number;

        return $this;
    }

    /**
     * Gets display_index
     *
     * @return int|null
     */
    public function getDisplayIndex()
    {
        return $this->container['display_index'];
    }

    /**
     * Sets display_index
     *
     * @param int|null $display_index display_index
     *
     * @return self
     */
    public function setDisplayIndex($display_index)
    {
        if (is_null($display_index)) {
            throw new \InvalidArgumentException('non-nullable display_index cannot be null');
        }
        $this->container['display_index'] = $display_index;

        return $this;
    }

    /**
     * Gets id
     *
     * @return string|null
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param string|null $id id
     *
     * @return self
     */
    public function setId($id)
    {
        if (is_null($id)) {
            throw new \InvalidArgumentException('non-nullable id cannot be null');
        }
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets label
     *
     * @return string|null
     */
    public function getLabel()
    {
        return $this->container['label'];
    }

    /**
     * Sets label
     *
     * @param string|null $label label
     *
     * @return self
     */
    public function setLabel($label)
    {
        if (is_null($label)) {
            throw new \InvalidArgumentException('non-nullable label cannot be null');
        }
        $this->container['label'] = $label;

        return $this;
    }

    /**
     * Gets max_chars
     *
     * @return int|null
     */
    public function getMaxChars()
    {
        return $this->container['max_chars'];
    }

    /**
     * Sets max_chars
     *
     * @param int|null $max_chars max_chars
     *
     * @return self
     */
    public function setMaxChars($max_chars)
    {
        if (is_null($max_chars)) {
            throw new \InvalidArgumentException('non-nullable max_chars cannot be null');
        }
        $this->container['max_chars'] = $max_chars;

        return $this;
    }

    /**
     * Gets min_chars
     *
     * @return int|null
     */
    public function getMinChars()
    {
        return $this->container['min_chars'];
    }

    /**
     * Sets min_chars
     *
     * @param int|null $min_chars min_chars
     *
     * @return self
     */
    public function setMinChars($min_chars)
    {
        if (is_null($min_chars)) {
            throw new \InvalidArgumentException('non-nullable min_chars cannot be null');
        }
        $this->container['min_chars'] = $min_chars;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string|null $name name
     *
     * @return self
     */
    public function setName($name)
    {
        if (is_null($name)) {
            throw new \InvalidArgumentException('non-nullable name cannot be null');
        }
        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets required
     *
     * @return bool|null
     */
    public function getRequired()
    {
        return $this->container['required'];
    }

    /**
     * Sets required
     *
     * @param bool|null $required required
     *
     * @return self
     */
    public function setRequired($required)
    {
        if (is_null($required)) {
            throw new \InvalidArgumentException('non-nullable required cannot be null');
        }
        $this->container['required'] = $required;

        return $this;
    }

    /**
     * Gets text_message
     *
     * @return string|null
     */
    public function getTextMessage()
    {
        return $this->container['text_message'];
    }

    /**
     * Sets text_message
     *
     * @param string|null $text_message text_message
     *
     * @return self
     */
    public function setTextMessage($text_message)
    {
        if (is_null($text_message)) {
            throw new \InvalidArgumentException('non-nullable text_message cannot be null');
        }
        $this->container['text_message'] = $text_message;

        return $this;
    }

    /**
     * Gets type
     *
     * @return string|null
     */
    public function getType()
    {
        return $this->container['type'];
    }

    /**
     * Sets type
     *
     * @param string|null $type type
     *
     * @return self
     */
    public function setType($type)
    {
        if (is_null($type)) {
            throw new \InvalidArgumentException('non-nullable type cannot be null');
        }
        $allowedValues = $this->getTypeAllowableValues();
        if (!in_array($type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'type', must be one of '%s'",
                    $type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['type'] = $type;

        return $this;
    }

    /**
     * Gets values
     *
     * @return \Keap\Sdk\Core\Model\RestProductOptionValue[]|null
     */
    public function getValues()
    {
        return $this->container['values'];
    }

    /**
     * Sets values
     *
     * @param \Keap\Sdk\Core\Model\RestProductOptionValue[]|null $values values
     *
     * @return self
     */
    public function setValues($values)
    {
        if (is_null($values)) {
            throw new \InvalidArgumentException('non-nullable values cannot be null');
        }
        $this->container['values'] = $values;

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


