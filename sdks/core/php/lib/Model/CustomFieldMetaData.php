<?php
/**
 * CustomFieldMetaData
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
 * CustomFieldMetaData Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CustomFieldMetaData implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'CustomFieldMetaData';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'default_value' => 'string',
        'field_name' => 'string',
        'field_type' => 'string',
        'group_id' => 'string',
        'id' => 'string',
        'label' => 'string',
        'options' => '\Com\Keap\Sdk\Core\Model\CustomFieldOption[]',
        'record_type' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'default_value' => null,
        'field_name' => null,
        'field_type' => null,
        'group_id' => null,
        'id' => null,
        'label' => null,
        'options' => null,
        'record_type' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'default_value' => false,
        'field_name' => false,
        'field_type' => false,
        'group_id' => false,
        'id' => false,
        'label' => false,
        'options' => false,
        'record_type' => false
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
        'default_value' => 'default_value',
        'field_name' => 'field_name',
        'field_type' => 'field_type',
        'group_id' => 'group_id',
        'id' => 'id',
        'label' => 'label',
        'options' => 'options',
        'record_type' => 'record_type'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'default_value' => 'setDefaultValue',
        'field_name' => 'setFieldName',
        'field_type' => 'setFieldType',
        'group_id' => 'setGroupId',
        'id' => 'setId',
        'label' => 'setLabel',
        'options' => 'setOptions',
        'record_type' => 'setRecordType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'default_value' => 'getDefaultValue',
        'field_name' => 'getFieldName',
        'field_type' => 'getFieldType',
        'group_id' => 'getGroupId',
        'id' => 'getId',
        'label' => 'getLabel',
        'options' => 'getOptions',
        'record_type' => 'getRecordType'
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

    public const FIELD_TYPE_CURRENCY = 'CURRENCY';
    public const FIELD_TYPE_DATE = 'DATE';
    public const FIELD_TYPE_DATE_TIME = 'DATE_TIME';
    public const FIELD_TYPE_DAY_OF_WEEK = 'DAY_OF_WEEK';
    public const FIELD_TYPE_DECIMAL_NUMBER = 'DECIMAL_NUMBER';
    public const FIELD_TYPE_DRILLDOWN = 'DRILLDOWN';
    public const FIELD_TYPE_DROPDOWN = 'DROPDOWN';
    public const FIELD_TYPE_EMAIL = 'EMAIL';
    public const FIELD_TYPE_LIST_BOX = 'LIST_BOX';
    public const FIELD_TYPE_MONTH = 'MONTH';
    public const FIELD_TYPE_NAME = 'NAME';
    public const FIELD_TYPE_PERCENT = 'PERCENT';
    public const FIELD_TYPE_PHONE_NUMBER = 'PHONE_NUMBER';
    public const FIELD_TYPE_RADIO = 'RADIO';
    public const FIELD_TYPE_SOCIAL_SECURITY_NUMBER = 'SOCIAL_SECURITY_NUMBER';
    public const FIELD_TYPE_STATE = 'STATE';
    public const FIELD_TYPE_TEXT = 'TEXT';
    public const FIELD_TYPE_TEXT_AREA = 'TEXT_AREA';
    public const FIELD_TYPE_USER = 'USER';
    public const FIELD_TYPE_USER_LIST_BOX = 'USER_LIST_BOX';
    public const FIELD_TYPE_WEBSITE = 'WEBSITE';
    public const FIELD_TYPE_WHOLE_NUMBER = 'WHOLE_NUMBER';
    public const FIELD_TYPE_YEAR = 'YEAR';
    public const FIELD_TYPE_YES_NO = 'YES_NO';
    public const RECORD_TYPE_CONTACT = 'CONTACT';
    public const RECORD_TYPE_REFERRAL_PARTNER = 'REFERRAL_PARTNER';
    public const RECORD_TYPE_OPPORTUNITY = 'OPPORTUNITY';
    public const RECORD_TYPE_TASK_NOTE_APPOINTMENT = 'TASK_NOTE_APPOINTMENT';
    public const RECORD_TYPE_COMPANY = 'COMPANY';
    public const RECORD_TYPE_ORDER = 'ORDER';
    public const RECORD_TYPE_SUBSCRIPTION = 'SUBSCRIPTION';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getFieldTypeAllowableValues()
    {
        return [
            self::FIELD_TYPE_CURRENCY,
            self::FIELD_TYPE_DATE,
            self::FIELD_TYPE_DATE_TIME,
            self::FIELD_TYPE_DAY_OF_WEEK,
            self::FIELD_TYPE_DECIMAL_NUMBER,
            self::FIELD_TYPE_DRILLDOWN,
            self::FIELD_TYPE_DROPDOWN,
            self::FIELD_TYPE_EMAIL,
            self::FIELD_TYPE_LIST_BOX,
            self::FIELD_TYPE_MONTH,
            self::FIELD_TYPE_NAME,
            self::FIELD_TYPE_PERCENT,
            self::FIELD_TYPE_PHONE_NUMBER,
            self::FIELD_TYPE_RADIO,
            self::FIELD_TYPE_SOCIAL_SECURITY_NUMBER,
            self::FIELD_TYPE_STATE,
            self::FIELD_TYPE_TEXT,
            self::FIELD_TYPE_TEXT_AREA,
            self::FIELD_TYPE_USER,
            self::FIELD_TYPE_USER_LIST_BOX,
            self::FIELD_TYPE_WEBSITE,
            self::FIELD_TYPE_WHOLE_NUMBER,
            self::FIELD_TYPE_YEAR,
            self::FIELD_TYPE_YES_NO,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getRecordTypeAllowableValues()
    {
        return [
            self::RECORD_TYPE_CONTACT,
            self::RECORD_TYPE_REFERRAL_PARTNER,
            self::RECORD_TYPE_OPPORTUNITY,
            self::RECORD_TYPE_TASK_NOTE_APPOINTMENT,
            self::RECORD_TYPE_COMPANY,
            self::RECORD_TYPE_ORDER,
            self::RECORD_TYPE_SUBSCRIPTION,
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
        $this->setIfExists('default_value', $data ?? [], null);
        $this->setIfExists('field_name', $data ?? [], null);
        $this->setIfExists('field_type', $data ?? [], null);
        $this->setIfExists('group_id', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('label', $data ?? [], null);
        $this->setIfExists('options', $data ?? [], null);
        $this->setIfExists('record_type', $data ?? [], null);
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

        $allowedValues = $this->getFieldTypeAllowableValues();
        if (!is_null($this->container['field_type']) && !in_array($this->container['field_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'field_type', must be one of '%s'",
                $this->container['field_type'],
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getRecordTypeAllowableValues();
        if (!is_null($this->container['record_type']) && !in_array($this->container['record_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'record_type', must be one of '%s'",
                $this->container['record_type'],
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
     * Gets default_value
     *
     * @return string|null
     */
    public function getDefaultValue()
    {
        return $this->container['default_value'];
    }

    /**
     * Sets default_value
     *
     * @param string|null $default_value default_value
     *
     * @return self
     */
    public function setDefaultValue($default_value)
    {
        if (is_null($default_value)) {
            throw new \InvalidArgumentException('non-nullable default_value cannot be null');
        }
        $this->container['default_value'] = $default_value;

        return $this;
    }

    /**
     * Gets field_name
     *
     * @return string|null
     */
    public function getFieldName()
    {
        return $this->container['field_name'];
    }

    /**
     * Sets field_name
     *
     * @param string|null $field_name field_name
     *
     * @return self
     */
    public function setFieldName($field_name)
    {
        if (is_null($field_name)) {
            throw new \InvalidArgumentException('non-nullable field_name cannot be null');
        }
        $this->container['field_name'] = $field_name;

        return $this;
    }

    /**
     * Gets field_type
     *
     * @return string|null
     */
    public function getFieldType()
    {
        return $this->container['field_type'];
    }

    /**
     * Sets field_type
     *
     * @param string|null $field_type field_type
     *
     * @return self
     */
    public function setFieldType($field_type)
    {
        if (is_null($field_type)) {
            throw new \InvalidArgumentException('non-nullable field_type cannot be null');
        }
        $allowedValues = $this->getFieldTypeAllowableValues();
        if (!in_array($field_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'field_type', must be one of '%s'",
                    $field_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['field_type'] = $field_type;

        return $this;
    }

    /**
     * Gets group_id
     *
     * @return string|null
     */
    public function getGroupId()
    {
        return $this->container['group_id'];
    }

    /**
     * Sets group_id
     *
     * @param string|null $group_id group_id
     *
     * @return self
     */
    public function setGroupId($group_id)
    {
        if (is_null($group_id)) {
            throw new \InvalidArgumentException('non-nullable group_id cannot be null');
        }
        $this->container['group_id'] = $group_id;

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
     * Gets options
     *
     * @return \Com\Keap\Sdk\Core\Model\CustomFieldOption[]|null
     */
    public function getOptions()
    {
        return $this->container['options'];
    }

    /**
     * Sets options
     *
     * @param \Com\Keap\Sdk\Core\Model\CustomFieldOption[]|null $options options
     *
     * @return self
     */
    public function setOptions($options)
    {
        if (is_null($options)) {
            throw new \InvalidArgumentException('non-nullable options cannot be null');
        }
        $this->container['options'] = $options;

        return $this;
    }

    /**
     * Gets record_type
     *
     * @return string|null
     */
    public function getRecordType()
    {
        return $this->container['record_type'];
    }

    /**
     * Sets record_type
     *
     * @param string|null $record_type record_type
     *
     * @return self
     */
    public function setRecordType($record_type)
    {
        if (is_null($record_type)) {
            throw new \InvalidArgumentException('non-nullable record_type cannot be null');
        }
        $allowedValues = $this->getRecordTypeAllowableValues();
        if (!in_array($record_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'record_type', must be one of '%s'",
                    $record_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['record_type'] = $record_type;

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


