<?php
/**
 * ListRestMerchantAccountResponse
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
 * The version of the OpenAPI document: 2.70.0.752995
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
 * ListRestMerchantAccountResponse Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ListRestMerchantAccountResponse implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ListRestMerchantAccountResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'account_name' => 'string',
        'id' => 'string',
        'is_test' => 'bool',
        'type' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'account_name' => null,
        'id' => null,
        'is_test' => null,
        'type' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'account_name' => false,
        'id' => false,
        'is_test' => false,
        'type' => false
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
        'account_name' => 'account_name',
        'id' => 'id',
        'is_test' => 'is_test',
        'type' => 'type'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'account_name' => 'setAccountName',
        'id' => 'setId',
        'is_test' => 'setIsTest',
        'type' => 'setType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'account_name' => 'getAccountName',
        'id' => 'getId',
        'is_test' => 'getIsTest',
        'type' => 'getType'
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

    public const TYPE_USE_DEFAULT = 'USE_DEFAULT';
    public const TYPE_PAY_PAL = 'PAY_PAL';
    public const TYPE_PAY_PAL_PAYFLOW_PRO = 'PAY_PAL_PAYFLOW_PRO';
    public const TYPE_PAYPAL_COMMERCE = 'PAYPAL_COMMERCE';
    public const TYPE_PAYPAL_COMMERCE_UCC = 'PAYPAL_COMMERCE_UCC';
    public const TYPE_GATEWAY_PAYFLOW_PRO = 'GATEWAY_PAYFLOW_PRO';
    public const TYPE_AUTHORIZE = 'AUTHORIZE';
    public const TYPE_AUTHORIZE_CARD_PRESENT = 'AUTHORIZE_CARD_PRESENT';
    public const TYPE_POWER_PAY = 'POWER_PAY';
    public const TYPE_CART_CONNECT = 'CART_CONNECT';
    public const TYPE_SAGE_PAY = 'SAGE_PAY';
    public const TYPE_E_WAY = 'E_WAY';
    public const TYPE_USA_E_PAY = 'USA_E_PAY';
    public const TYPE_MONERIS = 'MONERIS';
    public const TYPE_DPS = 'DPS';
    public const TYPE_DUMMY = 'DUMMY';
    public const TYPE_INTERNET_SECURE = 'INTERNET_SECURE';
    public const TYPE_EASY_PAY_DIRECT = 'EASY_PAY_DIRECT';
    public const TYPE_NEXUS = 'NEXUS';
    public const TYPE_INF_PAY = 'INF_PAY';
    public const TYPE_FLEXPAY = 'FLEXPAY';
    public const TYPE_STRIPE = 'STRIPE';
    public const TYPE_STRIPE_ELEMENTS = 'STRIPE_ELEMENTS';
    public const TYPE_WORLD_PAY = 'WORLD_PAY';
    public const TYPE_RAINFOREST = 'RAINFOREST';
    public const TYPE_WEPAY = 'WEPAY';
    public const TYPE_KEAPPAY = 'KEAPPAY';
    public const TYPE_MANUAL = 'MANUAL';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getTypeAllowableValues()
    {
        return [
            self::TYPE_USE_DEFAULT,
            self::TYPE_PAY_PAL,
            self::TYPE_PAY_PAL_PAYFLOW_PRO,
            self::TYPE_PAYPAL_COMMERCE,
            self::TYPE_PAYPAL_COMMERCE_UCC,
            self::TYPE_GATEWAY_PAYFLOW_PRO,
            self::TYPE_AUTHORIZE,
            self::TYPE_AUTHORIZE_CARD_PRESENT,
            self::TYPE_POWER_PAY,
            self::TYPE_CART_CONNECT,
            self::TYPE_SAGE_PAY,
            self::TYPE_E_WAY,
            self::TYPE_USA_E_PAY,
            self::TYPE_MONERIS,
            self::TYPE_DPS,
            self::TYPE_DUMMY,
            self::TYPE_INTERNET_SECURE,
            self::TYPE_EASY_PAY_DIRECT,
            self::TYPE_NEXUS,
            self::TYPE_INF_PAY,
            self::TYPE_FLEXPAY,
            self::TYPE_STRIPE,
            self::TYPE_STRIPE_ELEMENTS,
            self::TYPE_WORLD_PAY,
            self::TYPE_RAINFOREST,
            self::TYPE_WEPAY,
            self::TYPE_KEAPPAY,
            self::TYPE_MANUAL,
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
        $this->setIfExists('account_name', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('is_test', $data ?? [], null);
        $this->setIfExists('type', $data ?? [], null);
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
     * Gets account_name
     *
     * @return string|null
     */
    public function getAccountName()
    {
        return $this->container['account_name'];
    }

    /**
     * Sets account_name
     *
     * @param string|null $account_name account_name
     *
     * @return self
     */
    public function setAccountName($account_name)
    {
        if (is_null($account_name)) {
            throw new \InvalidArgumentException('non-nullable account_name cannot be null');
        }
        $this->container['account_name'] = $account_name;

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
     * Gets is_test
     *
     * @return bool|null
     */
    public function getIsTest()
    {
        return $this->container['is_test'];
    }

    /**
     * Sets is_test
     *
     * @param bool|null $is_test is_test
     *
     * @return self
     */
    public function setIsTest($is_test)
    {
        if (is_null($is_test)) {
            throw new \InvalidArgumentException('non-nullable is_test cannot be null');
        }
        $this->container['is_test'] = $is_test;

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


