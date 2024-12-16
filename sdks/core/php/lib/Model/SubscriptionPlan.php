<?php
/**
 * SubscriptionPlan
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
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
 * SubscriptionPlan Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class SubscriptionPlan implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'SubscriptionPlan';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'active' => 'bool',
        'billing_cycle' => 'string',
        'billing_frequency' => 'int',
        'id' => 'string',
        'number_of_cycles' => 'int',
        'order_index' => 'int',
        'plan_price' => '\Com\Keap\Sdk\Core\Model\CurrencyValue',
        'prorate' => 'bool'
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
        'billing_cycle' => null,
        'billing_frequency' => 'int32',
        'id' => null,
        'number_of_cycles' => 'int32',
        'order_index' => 'int32',
        'plan_price' => null,
        'prorate' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'active' => false,
        'billing_cycle' => false,
        'billing_frequency' => false,
        'id' => false,
        'number_of_cycles' => false,
        'order_index' => false,
        'plan_price' => false,
        'prorate' => false
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
        'billing_cycle' => 'billing_cycle',
        'billing_frequency' => 'billing_frequency',
        'id' => 'id',
        'number_of_cycles' => 'number_of_cycles',
        'order_index' => 'order_index',
        'plan_price' => 'plan_price',
        'prorate' => 'prorate'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'active' => 'setActive',
        'billing_cycle' => 'setBillingCycle',
        'billing_frequency' => 'setBillingFrequency',
        'id' => 'setId',
        'number_of_cycles' => 'setNumberOfCycles',
        'order_index' => 'setOrderIndex',
        'plan_price' => 'setPlanPrice',
        'prorate' => 'setProrate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'active' => 'getActive',
        'billing_cycle' => 'getBillingCycle',
        'billing_frequency' => 'getBillingFrequency',
        'id' => 'getId',
        'number_of_cycles' => 'getNumberOfCycles',
        'order_index' => 'getOrderIndex',
        'plan_price' => 'getPlanPrice',
        'prorate' => 'getProrate'
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
        $this->setIfExists('active', $data ?? [], null);
        $this->setIfExists('billing_cycle', $data ?? [], null);
        $this->setIfExists('billing_frequency', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('number_of_cycles', $data ?? [], null);
        $this->setIfExists('order_index', $data ?? [], null);
        $this->setIfExists('plan_price', $data ?? [], null);
        $this->setIfExists('prorate', $data ?? [], null);
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
     * @param bool|null $active If the subscription plan should be active/available for purchase
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
     * Gets billing_cycle
     *
     * @return string|null
     */
    public function getBillingCycle()
    {
        return $this->container['billing_cycle'];
    }

    /**
     * Sets billing_cycle
     *
     * @param string|null $billing_cycle How frequent to bill. Can be: DAILY, WEEKLY, MONTHLY, or YEARLY
     *
     * @return self
     */
    public function setBillingCycle($billing_cycle)
    {
        if (is_null($billing_cycle)) {
            throw new \InvalidArgumentException('non-nullable billing_cycle cannot be null');
        }
        $this->container['billing_cycle'] = $billing_cycle;

        return $this;
    }

    /**
     * Gets billing_frequency
     *
     * @return int|null
     */
    public function getBillingFrequency()
    {
        return $this->container['billing_frequency'];
    }

    /**
     * Sets billing_frequency
     *
     * @param int|null $billing_frequency How many times per billing cycle to bill
     *
     * @return self
     */
    public function setBillingFrequency($billing_frequency)
    {
        if (is_null($billing_frequency)) {
            throw new \InvalidArgumentException('non-nullable billing_frequency cannot be null');
        }
        $this->container['billing_frequency'] = $billing_frequency;

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
     * @param string|null $id The subscription plan id
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
     * Gets number_of_cycles
     *
     * @return int|null
     */
    public function getNumberOfCycles()
    {
        return $this->container['number_of_cycles'];
    }

    /**
     * Sets number_of_cycles
     *
     * @param int|null $number_of_cycles How many billing cycles to bill. Optional field i.e. can be no value or 0.
     *
     * @return self
     */
    public function setNumberOfCycles($number_of_cycles)
    {
        if (is_null($number_of_cycles)) {
            throw new \InvalidArgumentException('non-nullable number_of_cycles cannot be null');
        }
        $this->container['number_of_cycles'] = $number_of_cycles;

        return $this;
    }

    /**
     * Gets order_index
     *
     * @return int|null
     */
    public function getOrderIndex()
    {
        return $this->container['order_index'];
    }

    /**
     * Sets order_index
     *
     * @param int|null $order_index Determines the order in which the plan will be displayed
     *
     * @return self
     */
    public function setOrderIndex($order_index)
    {
        if (is_null($order_index)) {
            throw new \InvalidArgumentException('non-nullable order_index cannot be null');
        }
        $this->container['order_index'] = $order_index;

        return $this;
    }

    /**
     * Gets plan_price
     *
     * @return \Com\Keap\Sdk\Core\Model\CurrencyValue|null
     */
    public function getPlanPrice()
    {
        return $this->container['plan_price'];
    }

    /**
     * Sets plan_price
     *
     * @param \Com\Keap\Sdk\Core\Model\CurrencyValue|null $plan_price plan_price
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
     * Gets prorate
     *
     * @return bool|null
     */
    public function getProrate()
    {
        return $this->container['prorate'];
    }

    /**
     * Sets prorate
     *
     * @param bool|null $prorate If the subscription plan should allow prorating
     *
     * @return self
     */
    public function setProrate($prorate)
    {
        if (is_null($prorate)) {
            throw new \InvalidArgumentException('non-nullable prorate cannot be null');
        }
        $this->container['prorate'] = $prorate;

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


