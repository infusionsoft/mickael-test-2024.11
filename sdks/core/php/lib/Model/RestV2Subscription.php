<?php
/**
 * RestV2Subscription
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
 * RestV2Subscription Class Doc Comment
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class RestV2Subscription implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'RestV2Subscription';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'subscription_active' => 'bool',
        'subscription_cycles_completed' => 'int',
        'subscription_end_date' => 'string',
        'subscription_id' => 'string',
        'subscription_next_bill_date' => 'string',
        'subscription_start_date' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'subscription_active' => null,
        'subscription_cycles_completed' => 'int32',
        'subscription_end_date' => null,
        'subscription_id' => null,
        'subscription_next_bill_date' => null,
        'subscription_start_date' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'subscription_active' => false,
        'subscription_cycles_completed' => false,
        'subscription_end_date' => false,
        'subscription_id' => false,
        'subscription_next_bill_date' => false,
        'subscription_start_date' => false
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
        'subscription_active' => 'subscription_active',
        'subscription_cycles_completed' => 'subscription_cycles_completed',
        'subscription_end_date' => 'subscription_end_date',
        'subscription_id' => 'subscription_id',
        'subscription_next_bill_date' => 'subscription_next_bill_date',
        'subscription_start_date' => 'subscription_start_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'subscription_active' => 'setSubscriptionActive',
        'subscription_cycles_completed' => 'setSubscriptionCyclesCompleted',
        'subscription_end_date' => 'setSubscriptionEndDate',
        'subscription_id' => 'setSubscriptionId',
        'subscription_next_bill_date' => 'setSubscriptionNextBillDate',
        'subscription_start_date' => 'setSubscriptionStartDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'subscription_active' => 'getSubscriptionActive',
        'subscription_cycles_completed' => 'getSubscriptionCyclesCompleted',
        'subscription_end_date' => 'getSubscriptionEndDate',
        'subscription_id' => 'getSubscriptionId',
        'subscription_next_bill_date' => 'getSubscriptionNextBillDate',
        'subscription_start_date' => 'getSubscriptionStartDate'
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
        $this->setIfExists('subscription_active', $data ?? [], null);
        $this->setIfExists('subscription_cycles_completed', $data ?? [], null);
        $this->setIfExists('subscription_end_date', $data ?? [], null);
        $this->setIfExists('subscription_id', $data ?? [], null);
        $this->setIfExists('subscription_next_bill_date', $data ?? [], null);
        $this->setIfExists('subscription_start_date', $data ?? [], null);
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
     * Gets subscription_active
     *
     * @return bool|null
     */
    public function getSubscriptionActive()
    {
        return $this->container['subscription_active'];
    }

    /**
     * Sets subscription_active
     *
     * @param bool|null $subscription_active subscription_active
     *
     * @return self
     */
    public function setSubscriptionActive($subscription_active)
    {
        if (is_null($subscription_active)) {
            throw new \InvalidArgumentException('non-nullable subscription_active cannot be null');
        }
        $this->container['subscription_active'] = $subscription_active;

        return $this;
    }

    /**
     * Gets subscription_cycles_completed
     *
     * @return int|null
     */
    public function getSubscriptionCyclesCompleted()
    {
        return $this->container['subscription_cycles_completed'];
    }

    /**
     * Sets subscription_cycles_completed
     *
     * @param int|null $subscription_cycles_completed subscription_cycles_completed
     *
     * @return self
     */
    public function setSubscriptionCyclesCompleted($subscription_cycles_completed)
    {
        if (is_null($subscription_cycles_completed)) {
            throw new \InvalidArgumentException('non-nullable subscription_cycles_completed cannot be null');
        }
        $this->container['subscription_cycles_completed'] = $subscription_cycles_completed;

        return $this;
    }

    /**
     * Gets subscription_end_date
     *
     * @return string|null
     */
    public function getSubscriptionEndDate()
    {
        return $this->container['subscription_end_date'];
    }

    /**
     * Sets subscription_end_date
     *
     * @param string|null $subscription_end_date subscription_end_date
     *
     * @return self
     */
    public function setSubscriptionEndDate($subscription_end_date)
    {
        if (is_null($subscription_end_date)) {
            throw new \InvalidArgumentException('non-nullable subscription_end_date cannot be null');
        }
        $this->container['subscription_end_date'] = $subscription_end_date;

        return $this;
    }

    /**
     * Gets subscription_id
     *
     * @return string|null
     */
    public function getSubscriptionId()
    {
        return $this->container['subscription_id'];
    }

    /**
     * Sets subscription_id
     *
     * @param string|null $subscription_id subscription_id
     *
     * @return self
     */
    public function setSubscriptionId($subscription_id)
    {
        if (is_null($subscription_id)) {
            throw new \InvalidArgumentException('non-nullable subscription_id cannot be null');
        }
        $this->container['subscription_id'] = $subscription_id;

        return $this;
    }

    /**
     * Gets subscription_next_bill_date
     *
     * @return string|null
     */
    public function getSubscriptionNextBillDate()
    {
        return $this->container['subscription_next_bill_date'];
    }

    /**
     * Sets subscription_next_bill_date
     *
     * @param string|null $subscription_next_bill_date subscription_next_bill_date
     *
     * @return self
     */
    public function setSubscriptionNextBillDate($subscription_next_bill_date)
    {
        if (is_null($subscription_next_bill_date)) {
            throw new \InvalidArgumentException('non-nullable subscription_next_bill_date cannot be null');
        }
        $this->container['subscription_next_bill_date'] = $subscription_next_bill_date;

        return $this;
    }

    /**
     * Gets subscription_start_date
     *
     * @return string|null
     */
    public function getSubscriptionStartDate()
    {
        return $this->container['subscription_start_date'];
    }

    /**
     * Sets subscription_start_date
     *
     * @param string|null $subscription_start_date subscription_start_date
     *
     * @return self
     */
    public function setSubscriptionStartDate($subscription_start_date)
    {
        if (is_null($subscription_start_date)) {
            throw new \InvalidArgumentException('non-nullable subscription_start_date cannot be null');
        }
        $this->container['subscription_start_date'] = $subscription_start_date;

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


