<?php
/**
 * ProductInventory
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

namespace Com\Keap\Sdk\Core\Model;

use \ArrayAccess;
use \Com\Keap\Sdk\Core\ObjectSerializer;

/**
 * ProductInventory Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ProductInventory implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ProductInventory';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'email_for_inventory_notifications' => 'string',
        'inventory_count' => 'int',
        'inventory_limit' => 'int',
        'out_of_stock_enabled' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'email_for_inventory_notifications' => null,
        'inventory_count' => 'int32',
        'inventory_limit' => 'int32',
        'out_of_stock_enabled' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'email_for_inventory_notifications' => false,
        'inventory_count' => false,
        'inventory_limit' => false,
        'out_of_stock_enabled' => false
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
        'email_for_inventory_notifications' => 'email_for_inventory_notifications',
        'inventory_count' => 'inventory_count',
        'inventory_limit' => 'inventory_limit',
        'out_of_stock_enabled' => 'out_of_stock_enabled'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'email_for_inventory_notifications' => 'setEmailForInventoryNotifications',
        'inventory_count' => 'setInventoryCount',
        'inventory_limit' => 'setInventoryLimit',
        'out_of_stock_enabled' => 'setOutOfStockEnabled'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'email_for_inventory_notifications' => 'getEmailForInventoryNotifications',
        'inventory_count' => 'getInventoryCount',
        'inventory_limit' => 'getInventoryLimit',
        'out_of_stock_enabled' => 'getOutOfStockEnabled'
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
        $this->setIfExists('email_for_inventory_notifications', $data ?? [], null);
        $this->setIfExists('inventory_count', $data ?? [], null);
        $this->setIfExists('inventory_limit', $data ?? [], null);
        $this->setIfExists('out_of_stock_enabled', $data ?? [], null);
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
     * Gets email_for_inventory_notifications
     *
     * @return string|null
     */
    public function getEmailForInventoryNotifications()
    {
        return $this->container['email_for_inventory_notifications'];
    }

    /**
     * Sets email_for_inventory_notifications
     *
     * @param string|null $email_for_inventory_notifications The email address for notifications about inventory
     *
     * @return self
     */
    public function setEmailForInventoryNotifications($email_for_inventory_notifications)
    {
        if (is_null($email_for_inventory_notifications)) {
            throw new \InvalidArgumentException('non-nullable email_for_inventory_notifications cannot be null');
        }
        $this->container['email_for_inventory_notifications'] = $email_for_inventory_notifications;

        return $this;
    }

    /**
     * Gets inventory_count
     *
     * @return int|null
     */
    public function getInventoryCount()
    {
        return $this->container['inventory_count'];
    }

    /**
     * Sets inventory_count
     *
     * @param int|null $inventory_count The current inventory count for this product
     *
     * @return self
     */
    public function setInventoryCount($inventory_count)
    {
        if (is_null($inventory_count)) {
            throw new \InvalidArgumentException('non-nullable inventory_count cannot be null');
        }
        $this->container['inventory_count'] = $inventory_count;

        return $this;
    }

    /**
     * Gets inventory_limit
     *
     * @return int|null
     */
    public function getInventoryLimit()
    {
        return $this->container['inventory_limit'];
    }

    /**
     * Sets inventory_limit
     *
     * @param int|null $inventory_limit The inventory limit for this product
     *
     * @return self
     */
    public function setInventoryLimit($inventory_limit)
    {
        if (is_null($inventory_limit)) {
            throw new \InvalidArgumentException('non-nullable inventory_limit cannot be null');
        }
        $this->container['inventory_limit'] = $inventory_limit;

        return $this;
    }

    /**
     * Gets out_of_stock_enabled
     *
     * @return bool|null
     */
    public function getOutOfStockEnabled()
    {
        return $this->container['out_of_stock_enabled'];
    }

    /**
     * Sets out_of_stock_enabled
     *
     * @param bool|null $out_of_stock_enabled The flag to enable out of stock inventory
     *
     * @return self
     */
    public function setOutOfStockEnabled($out_of_stock_enabled)
    {
        if (is_null($out_of_stock_enabled)) {
            throw new \InvalidArgumentException('non-nullable out_of_stock_enabled cannot be null');
        }
        $this->container['out_of_stock_enabled'] = $out_of_stock_enabled;

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


