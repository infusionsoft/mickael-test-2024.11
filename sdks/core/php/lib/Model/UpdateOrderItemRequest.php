<?php
/**
 * UpdateOrderItemRequest
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
 * The version of the OpenAPI document: 2.70.0.764128
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
 * UpdateOrderItemRequest Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class UpdateOrderItemRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'UpdateOrderItemRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'charge_inventory' => 'bool',
        'cost_per_unit' => 'float',
        'description' => 'string',
        'name' => 'string',
        'note' => 'string',
        'price_per_unit' => 'float',
        'quantity' => 'int',
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
        'charge_inventory' => null,
        'cost_per_unit' => 'double',
        'description' => null,
        'name' => null,
        'note' => null,
        'price_per_unit' => 'double',
        'quantity' => 'int32',
        'type' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'charge_inventory' => false,
        'cost_per_unit' => false,
        'description' => false,
        'name' => false,
        'note' => false,
        'price_per_unit' => false,
        'quantity' => false,
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
        'charge_inventory' => 'charge_inventory',
        'cost_per_unit' => 'cost_per_unit',
        'description' => 'description',
        'name' => 'name',
        'note' => 'note',
        'price_per_unit' => 'price_per_unit',
        'quantity' => 'quantity',
        'type' => 'type'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'charge_inventory' => 'setChargeInventory',
        'cost_per_unit' => 'setCostPerUnit',
        'description' => 'setDescription',
        'name' => 'setName',
        'note' => 'setNote',
        'price_per_unit' => 'setPricePerUnit',
        'quantity' => 'setQuantity',
        'type' => 'setType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'charge_inventory' => 'getChargeInventory',
        'cost_per_unit' => 'getCostPerUnit',
        'description' => 'getDescription',
        'name' => 'getName',
        'note' => 'getNote',
        'price_per_unit' => 'getPricePerUnit',
        'quantity' => 'getQuantity',
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

    public const TYPE_UNKNOWN = 'UNKNOWN';
    public const TYPE_SHIPPING = 'SHIPPING';
    public const TYPE_TAX = 'TAX';
    public const TYPE_SERVICE = 'SERVICE';
    public const TYPE_PRODUCT = 'PRODUCT';
    public const TYPE_UPSELL = 'UPSELL';
    public const TYPE_FINANCE_CHARGE = 'FINANCE_CHARGE';
    public const TYPE_SPECIAL = 'SPECIAL';
    public const TYPE_PROGRAM = 'PROGRAM';
    public const TYPE_SUBSCRIPTION = 'SUBSCRIPTION';
    public const TYPE_SPECIAL_FREE_TRIAL_DAYS = 'SPECIAL_FREE_TRIAL_DAYS';
    public const TYPE_SPECIAL_ORDER_TOTAL = 'SPECIAL_ORDER_TOTAL';
    public const TYPE_SPECIAL_PRODUCT = 'SPECIAL_PRODUCT';
    public const TYPE_SPECIAL_CATEGORY = 'SPECIAL_CATEGORY';
    public const TYPE_SPECIAL_SHIPPING = 'SPECIAL_SHIPPING';
    public const TYPE_TIP = 'TIP';
    public const TYPE_OTHER = 'OTHER';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getTypeAllowableValues()
    {
        return [
            self::TYPE_UNKNOWN,
            self::TYPE_SHIPPING,
            self::TYPE_TAX,
            self::TYPE_SERVICE,
            self::TYPE_PRODUCT,
            self::TYPE_UPSELL,
            self::TYPE_FINANCE_CHARGE,
            self::TYPE_SPECIAL,
            self::TYPE_PROGRAM,
            self::TYPE_SUBSCRIPTION,
            self::TYPE_SPECIAL_FREE_TRIAL_DAYS,
            self::TYPE_SPECIAL_ORDER_TOTAL,
            self::TYPE_SPECIAL_PRODUCT,
            self::TYPE_SPECIAL_CATEGORY,
            self::TYPE_SPECIAL_SHIPPING,
            self::TYPE_TIP,
            self::TYPE_OTHER,
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
        $this->setIfExists('charge_inventory', $data ?? [], null);
        $this->setIfExists('cost_per_unit', $data ?? [], null);
        $this->setIfExists('description', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('note', $data ?? [], null);
        $this->setIfExists('price_per_unit', $data ?? [], null);
        $this->setIfExists('quantity', $data ?? [], null);
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
     * Gets charge_inventory
     *
     * @return bool|null
     */
    public function getChargeInventory()
    {
        return $this->container['charge_inventory'];
    }

    /**
     * Sets charge_inventory
     *
     * @param bool|null $charge_inventory Determine if the order item has an impact on inventory.
     *
     * @return self
     */
    public function setChargeInventory($charge_inventory)
    {
        if (is_null($charge_inventory)) {
            throw new \InvalidArgumentException('non-nullable charge_inventory cannot be null');
        }
        $this->container['charge_inventory'] = $charge_inventory;

        return $this;
    }

    /**
     * Gets cost_per_unit
     *
     * @return float|null
     */
    public function getCostPerUnit()
    {
        return $this->container['cost_per_unit'];
    }

    /**
     * Sets cost_per_unit
     *
     * @param float|null $cost_per_unit cost_per_unit
     *
     * @return self
     */
    public function setCostPerUnit($cost_per_unit)
    {
        if (is_null($cost_per_unit)) {
            throw new \InvalidArgumentException('non-nullable cost_per_unit cannot be null');
        }
        $this->container['cost_per_unit'] = $cost_per_unit;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string|null $description description
     *
     * @return self
     */
    public function setDescription($description)
    {
        if (is_null($description)) {
            throw new \InvalidArgumentException('non-nullable description cannot be null');
        }
        $this->container['description'] = $description;

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
     * Gets note
     *
     * @return string|null
     */
    public function getNote()
    {
        return $this->container['note'];
    }

    /**
     * Sets note
     *
     * @param string|null $note note
     *
     * @return self
     */
    public function setNote($note)
    {
        if (is_null($note)) {
            throw new \InvalidArgumentException('non-nullable note cannot be null');
        }
        $this->container['note'] = $note;

        return $this;
    }

    /**
     * Gets price_per_unit
     *
     * @return float|null
     */
    public function getPricePerUnit()
    {
        return $this->container['price_per_unit'];
    }

    /**
     * Sets price_per_unit
     *
     * @param float|null $price_per_unit price_per_unit
     *
     * @return self
     */
    public function setPricePerUnit($price_per_unit)
    {
        if (is_null($price_per_unit)) {
            throw new \InvalidArgumentException('non-nullable price_per_unit cannot be null');
        }
        $this->container['price_per_unit'] = $price_per_unit;

        return $this;
    }

    /**
     * Gets quantity
     *
     * @return int|null
     */
    public function getQuantity()
    {
        return $this->container['quantity'];
    }

    /**
     * Sets quantity
     *
     * @param int|null $quantity quantity
     *
     * @return self
     */
    public function setQuantity($quantity)
    {
        if (is_null($quantity)) {
            throw new \InvalidArgumentException('non-nullable quantity cannot be null');
        }
        $this->container['quantity'] = $quantity;

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


