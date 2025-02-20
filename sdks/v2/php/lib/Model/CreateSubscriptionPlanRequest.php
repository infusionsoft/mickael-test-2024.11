<?php
/**
 * CreateSubscriptionPlanRequest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.10.0
 */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Keap\Core\V2\Model;

use \ArrayAccess;
use \Keap\Core\V2\ObjectSerializer;

/**
 * CreateSubscriptionPlanRequest Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateSubscriptionPlanRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'CreateSubscriptionPlanRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'active' => 'bool',
        'allow_prorating' => 'bool',
        'cycle_type' => 'string',
        'display_order_index' => 'int',
        'frequency' => 'int',
        'plan_price' => 'float',
        'total_cycles' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'active' => null,
        'allow_prorating' => null,
        'cycle_type' => null,
        'display_order_index' => 'int32',
        'frequency' => 'int32',
        'plan_price' => 'double',
        'total_cycles' => 'int32'
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'active' => false,
        'allow_prorating' => false,
        'cycle_type' => false,
        'display_order_index' => false,
        'frequency' => false,
        'plan_price' => false,
        'total_cycles' => false
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
        'active' => 'active',
        'allow_prorating' => 'allow_prorating',
        'cycle_type' => 'cycle_type',
        'display_order_index' => 'display_order_index',
        'frequency' => 'frequency',
        'plan_price' => 'plan_price',
        'total_cycles' => 'total_cycles'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'active' => 'setActive',
        'allow_prorating' => 'setAllowProrating',
        'cycle_type' => 'setCycleType',
        'display_order_index' => 'setDisplayOrderIndex',
        'frequency' => 'setFrequency',
        'plan_price' => 'setPlanPrice',
        'total_cycles' => 'setTotalCycles'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'active' => 'getActive',
        'allow_prorating' => 'getAllowProrating',
        'cycle_type' => 'getCycleType',
        'display_order_index' => 'getDisplayOrderIndex',
        'frequency' => 'getFrequency',
        'plan_price' => 'getPlanPrice',
        'total_cycles' => 'getTotalCycles'
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

    public const CYCLE_TYPE_DAILY = 'DAILY';
    public const CYCLE_TYPE_WEEKLY = 'WEEKLY';
    public const CYCLE_TYPE_MONTHLY = 'MONTHLY';
    public const CYCLE_TYPE_YEARLY = 'YEARLY';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getCycleTypeAllowableValues()
    {
        return [
            self::CYCLE_TYPE_DAILY,
            self::CYCLE_TYPE_WEEKLY,
            self::CYCLE_TYPE_MONTHLY,
            self::CYCLE_TYPE_YEARLY,
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
        $this->setIfExists('active', $data ?? [], null);
        $this->setIfExists('allow_prorating', $data ?? [], null);
        $this->setIfExists('cycle_type', $data ?? [], null);
        $this->setIfExists('display_order_index', $data ?? [], null);
        $this->setIfExists('frequency', $data ?? [], null);
        $this->setIfExists('plan_price', $data ?? [], null);
        $this->setIfExists('total_cycles', $data ?? [], null);
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

        if ($this->container['cycle_type'] === null) {
            $invalidProperties[] = "'cycle_type' can't be null";
        }
        $allowedValues = $this->getCycleTypeAllowableValues();
        if (!is_null($this->container['cycle_type']) && !in_array($this->container['cycle_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'cycle_type', must be one of '%s'",
                $this->container['cycle_type'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['plan_price'] === null) {
            $invalidProperties[] = "'plan_price' can't be null";
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
     * Gets active
     *
     * @return bool|null
     */
    public function getActive()
    {
        return $this->container['active'];
    }

    /**
     * Sets active
     *
     * @param bool|null $active Whether the subscription plan is active.
     *
     * @return self
     */
    public function setActive($active)
    {
        if (is_null($active)) {
            throw new \InvalidArgumentException('non-nullable active cannot be null');
        }
        $this->container['active'] = $active;

        return $this;
    }

    /**
     * Gets allow_prorating
     *
     * @return bool|null
     */
    public function getAllowProrating()
    {
        return $this->container['allow_prorating'];
    }

    /**
     * Sets allow_prorating
     *
     * @param bool|null $allow_prorating Allow prorating of the subscription plan.
     *
     * @return self
     */
    public function setAllowProrating($allow_prorating)
    {
        if (is_null($allow_prorating)) {
            throw new \InvalidArgumentException('non-nullable allow_prorating cannot be null');
        }
        $this->container['allow_prorating'] = $allow_prorating;

        return $this;
    }

    /**
     * Gets cycle_type
     *
     * @return string
     */
    public function getCycleType()
    {
        return $this->container['cycle_type'];
    }

    /**
     * Sets cycle_type
     *
     * @param string $cycle_type The cycle type of the subscription plan.
     *
     * @return self
     */
    public function setCycleType($cycle_type)
    {
        if (is_null($cycle_type)) {
            throw new \InvalidArgumentException('non-nullable cycle_type cannot be null');
        }
        $allowedValues = $this->getCycleTypeAllowableValues();
        if (!in_array($cycle_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'cycle_type', must be one of '%s'",
                    $cycle_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['cycle_type'] = $cycle_type;

        return $this;
    }

    /**
     * Gets display_order_index
     *
     * @return int|null
     */
    public function getDisplayOrderIndex()
    {
        return $this->container['display_order_index'];
    }

    /**
     * Sets display_order_index
     *
     * @param int|null $display_order_index The order that this plan will be displayed to the user.
     *
     * @return self
     */
    public function setDisplayOrderIndex($display_order_index)
    {
        if (is_null($display_order_index)) {
            throw new \InvalidArgumentException('non-nullable display_order_index cannot be null');
        }
        $this->container['display_order_index'] = $display_order_index;

        return $this;
    }

    /**
     * Gets frequency
     *
     * @return int|null
     */
    public function getFrequency()
    {
        return $this->container['frequency'];
    }

    /**
     * Sets frequency
     *
     * @param int|null $frequency The frequency of the subscription plan.
     *
     * @return self
     */
    public function setFrequency($frequency)
    {
        if (is_null($frequency)) {
            throw new \InvalidArgumentException('non-nullable frequency cannot be null');
        }
        $this->container['frequency'] = $frequency;

        return $this;
    }

    /**
     * Gets plan_price
     *
     * @return float
     */
    public function getPlanPrice()
    {
        return $this->container['plan_price'];
    }

    /**
     * Sets plan_price
     *
     * @param float $plan_price The price of the subscription plan in the smallest currency unit.
     *
     * @return self
     */
    public function setPlanPrice($plan_price)
    {
        if (is_null($plan_price)) {
            throw new \InvalidArgumentException('non-nullable plan_price cannot be null');
        }
        $this->container['plan_price'] = $plan_price;

        return $this;
    }

    /**
     * Gets total_cycles
     *
     * @return int|null
     */
    public function getTotalCycles()
    {
        return $this->container['total_cycles'];
    }

    /**
     * Sets total_cycles
     *
     * @param int|null $total_cycles How many cycles the subscription plan will have.  0 means infinite.
     *
     * @return self
     */
    public function setTotalCycles($total_cycles)
    {
        if (is_null($total_cycles)) {
            throw new \InvalidArgumentException('non-nullable total_cycles cannot be null');
        }
        $this->container['total_cycles'] = $total_cycles;

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


