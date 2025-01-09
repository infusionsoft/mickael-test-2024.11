<?php
/**
 * EmailAddress
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
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.10.0
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
 * EmailAddress Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class EmailAddress implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'EmailAddress';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'email' => 'string',
        'email_opt_status' => 'string',
        'field' => 'string',
        'is_opt_in' => 'bool',
        'opt_in_reason' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'email' => null,
        'email_opt_status' => null,
        'field' => null,
        'is_opt_in' => null,
        'opt_in_reason' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'email' => false,
        'email_opt_status' => false,
        'field' => false,
        'is_opt_in' => false,
        'opt_in_reason' => false
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
        'email' => 'email',
        'email_opt_status' => 'email_opt_status',
        'field' => 'field',
        'is_opt_in' => 'is_opt_in',
        'opt_in_reason' => 'opt_in_reason'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'email' => 'setEmail',
        'email_opt_status' => 'setEmailOptStatus',
        'field' => 'setField',
        'is_opt_in' => 'setIsOptIn',
        'opt_in_reason' => 'setOptInReason'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'email' => 'getEmail',
        'email_opt_status' => 'getEmailOptStatus',
        'field' => 'getField',
        'is_opt_in' => 'getIsOptIn',
        'opt_in_reason' => 'getOptInReason'
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

    public const EMAIL_OPT_STATUS_UNENGAGED_MARKETABLE = 'UNENGAGED_MARKETABLE';
    public const EMAIL_OPT_STATUS_SINGLE_OPT_IN = 'SINGLE_OPT_IN';
    public const EMAIL_OPT_STATUS_DOUBLE_OPT_IN = 'DOUBLE_OPT_IN';
    public const EMAIL_OPT_STATUS_CONFIRMED = 'CONFIRMED';
    public const EMAIL_OPT_STATUS_UNENGAGED_NON_MARKETABLE = 'UNENGAGED_NON_MARKETABLE';
    public const EMAIL_OPT_STATUS_NON_MARKETABLE = 'NON_MARKETABLE';
    public const EMAIL_OPT_STATUS_LOCKDOWN = 'LOCKDOWN';
    public const EMAIL_OPT_STATUS_BOUNCE = 'BOUNCE';
    public const EMAIL_OPT_STATUS_HARD_BOUNCE = 'HARD_BOUNCE';
    public const EMAIL_OPT_STATUS_MANUAL = 'MANUAL';
    public const EMAIL_OPT_STATUS_ADMIN = 'ADMIN';
    public const EMAIL_OPT_STATUS_SYSTEM = 'SYSTEM';
    public const EMAIL_OPT_STATUS_LIST_UNSUBSCRIBE = 'LIST_UNSUBSCRIBE';
    public const EMAIL_OPT_STATUS_FEEDBACK = 'FEEDBACK';
    public const EMAIL_OPT_STATUS_SPAM = 'SPAM';
    public const EMAIL_OPT_STATUS_INVALID = 'INVALID';
    public const EMAIL_OPT_STATUS_DEACTIVATED = 'DEACTIVATED';
    public const FIELD_EMAIL_FIELD_UNSPECIFIED = 'EMAIL_FIELD_UNSPECIFIED';
    public const FIELD_EMAIL1 = 'EMAIL1';
    public const FIELD_EMAIL2 = 'EMAIL2';
    public const FIELD_EMAIL3 = 'EMAIL3';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getEmailOptStatusAllowableValues()
    {
        return [
            self::EMAIL_OPT_STATUS_UNENGAGED_MARKETABLE,
            self::EMAIL_OPT_STATUS_SINGLE_OPT_IN,
            self::EMAIL_OPT_STATUS_DOUBLE_OPT_IN,
            self::EMAIL_OPT_STATUS_CONFIRMED,
            self::EMAIL_OPT_STATUS_UNENGAGED_NON_MARKETABLE,
            self::EMAIL_OPT_STATUS_NON_MARKETABLE,
            self::EMAIL_OPT_STATUS_LOCKDOWN,
            self::EMAIL_OPT_STATUS_BOUNCE,
            self::EMAIL_OPT_STATUS_HARD_BOUNCE,
            self::EMAIL_OPT_STATUS_MANUAL,
            self::EMAIL_OPT_STATUS_ADMIN,
            self::EMAIL_OPT_STATUS_SYSTEM,
            self::EMAIL_OPT_STATUS_LIST_UNSUBSCRIBE,
            self::EMAIL_OPT_STATUS_FEEDBACK,
            self::EMAIL_OPT_STATUS_SPAM,
            self::EMAIL_OPT_STATUS_INVALID,
            self::EMAIL_OPT_STATUS_DEACTIVATED,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getFieldAllowableValues()
    {
        return [
            self::FIELD_EMAIL_FIELD_UNSPECIFIED,
            self::FIELD_EMAIL1,
            self::FIELD_EMAIL2,
            self::FIELD_EMAIL3,
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
        $this->setIfExists('email', $data ?? [], null);
        $this->setIfExists('email_opt_status', $data ?? [], null);
        $this->setIfExists('field', $data ?? [], null);
        $this->setIfExists('is_opt_in', $data ?? [], null);
        $this->setIfExists('opt_in_reason', $data ?? [], null);
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

        $allowedValues = $this->getEmailOptStatusAllowableValues();
        if (!is_null($this->container['email_opt_status']) && !in_array($this->container['email_opt_status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'email_opt_status', must be one of '%s'",
                $this->container['email_opt_status'],
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getFieldAllowableValues();
        if (!is_null($this->container['field']) && !in_array($this->container['field'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'field', must be one of '%s'",
                $this->container['field'],
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
     * Gets email
     *
     * @return string|null
     */
    public function getEmail()
    {
        return $this->container['email'];
    }

    /**
     * Sets email
     *
     * @param string|null $email email
     *
     * @return self
     */
    public function setEmail($email)
    {
        if (is_null($email)) {
            throw new \InvalidArgumentException('non-nullable email cannot be null');
        }
        $this->container['email'] = $email;

        return $this;
    }

    /**
     * Gets email_opt_status
     *
     * @return string|null
     */
    public function getEmailOptStatus()
    {
        return $this->container['email_opt_status'];
    }

    /**
     * Sets email_opt_status
     *
     * @param string|null $email_opt_status email_opt_status
     *
     * @return self
     */
    public function setEmailOptStatus($email_opt_status)
    {
        if (is_null($email_opt_status)) {
            throw new \InvalidArgumentException('non-nullable email_opt_status cannot be null');
        }
        $allowedValues = $this->getEmailOptStatusAllowableValues();
        if (!in_array($email_opt_status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'email_opt_status', must be one of '%s'",
                    $email_opt_status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['email_opt_status'] = $email_opt_status;

        return $this;
    }

    /**
     * Gets field
     *
     * @return string|null
     */
    public function getField()
    {
        return $this->container['field'];
    }

    /**
     * Sets field
     *
     * @param string|null $field field
     *
     * @return self
     */
    public function setField($field)
    {
        if (is_null($field)) {
            throw new \InvalidArgumentException('non-nullable field cannot be null');
        }
        $allowedValues = $this->getFieldAllowableValues();
        if (!in_array($field, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'field', must be one of '%s'",
                    $field,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['field'] = $field;

        return $this;
    }

    /**
     * Gets is_opt_in
     *
     * @return bool|null
     */
    public function getIsOptIn()
    {
        return $this->container['is_opt_in'];
    }

    /**
     * Sets is_opt_in
     *
     * @param bool|null $is_opt_in is_opt_in
     *
     * @return self
     */
    public function setIsOptIn($is_opt_in)
    {
        if (is_null($is_opt_in)) {
            throw new \InvalidArgumentException('non-nullable is_opt_in cannot be null');
        }
        $this->container['is_opt_in'] = $is_opt_in;

        return $this;
    }

    /**
     * Gets opt_in_reason
     *
     * @return string|null
     */
    public function getOptInReason()
    {
        return $this->container['opt_in_reason'];
    }

    /**
     * Sets opt_in_reason
     *
     * @param string|null $opt_in_reason opt_in_reason
     *
     * @return self
     */
    public function setOptInReason($opt_in_reason)
    {
        if (is_null($opt_in_reason)) {
            throw new \InvalidArgumentException('non-nullable opt_in_reason cannot be null');
        }
        $this->container['opt_in_reason'] = $opt_in_reason;

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


