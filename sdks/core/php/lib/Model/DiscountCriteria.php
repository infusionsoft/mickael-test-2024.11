<?php
/**
 * DiscountCriteria
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
 * DiscountCriteria Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class DiscountCriteria implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'DiscountCriteria';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'code' => 'string',
        'criteria_id' => 'string',
        'operator' => 'string',
        'plan_id' => 'string',
        'product_id' => 'string',
        'product_quantity_max' => 'int',
        'product_quantity_min' => 'int',
        'range_end_time' => 'string',
        'range_start_time' => 'string',
        'subscription_quantity' => 'int',
        'total_amount' => 'float',
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
        'code' => null,
        'criteria_id' => null,
        'operator' => null,
        'plan_id' => null,
        'product_id' => null,
        'product_quantity_max' => 'int32',
        'product_quantity_min' => 'int32',
        'range_end_time' => null,
        'range_start_time' => null,
        'subscription_quantity' => 'int32',
        'total_amount' => 'double',
        'type' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'code' => false,
        'criteria_id' => false,
        'operator' => false,
        'plan_id' => false,
        'product_id' => false,
        'product_quantity_max' => false,
        'product_quantity_min' => false,
        'range_end_time' => false,
        'range_start_time' => false,
        'subscription_quantity' => false,
        'total_amount' => false,
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
        'code' => 'code',
        'criteria_id' => 'criteria_id',
        'operator' => 'operator',
        'plan_id' => 'plan_id',
        'product_id' => 'product_id',
        'product_quantity_max' => 'product_quantity_max',
        'product_quantity_min' => 'product_quantity_min',
        'range_end_time' => 'range_end_time',
        'range_start_time' => 'range_start_time',
        'subscription_quantity' => 'subscription_quantity',
        'total_amount' => 'total_amount',
        'type' => 'type'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'code' => 'setCode',
        'criteria_id' => 'setCriteriaId',
        'operator' => 'setOperator',
        'plan_id' => 'setPlanId',
        'product_id' => 'setProductId',
        'product_quantity_max' => 'setProductQuantityMax',
        'product_quantity_min' => 'setProductQuantityMin',
        'range_end_time' => 'setRangeEndTime',
        'range_start_time' => 'setRangeStartTime',
        'subscription_quantity' => 'setSubscriptionQuantity',
        'total_amount' => 'setTotalAmount',
        'type' => 'setType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'code' => 'getCode',
        'criteria_id' => 'getCriteriaId',
        'operator' => 'getOperator',
        'plan_id' => 'getPlanId',
        'product_id' => 'getProductId',
        'product_quantity_max' => 'getProductQuantityMax',
        'product_quantity_min' => 'getProductQuantityMin',
        'range_end_time' => 'getRangeEndTime',
        'range_start_time' => 'getRangeStartTime',
        'subscription_quantity' => 'getSubscriptionQuantity',
        'total_amount' => 'getTotalAmount',
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

    public const OPERATOR_LESS_THAN = 'LESS_THAN';
    public const OPERATOR_GREATER_THAN = 'GREATER_THAN';
    public const TYPE_DATE_RANGE = 'DATE_RANGE';
    public const TYPE_PROMO_CODE = 'PROMO_CODE';
    public const TYPE_PRODUCT = 'PRODUCT';
    public const TYPE_SUBSCRIPTION_PLAN = 'SUBSCRIPTION_PLAN';
    public const TYPE_ORDER_TOTAL = 'ORDER_TOTAL';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getOperatorAllowableValues()
    {
        return [
            self::OPERATOR_LESS_THAN,
            self::OPERATOR_GREATER_THAN,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getTypeAllowableValues()
    {
        return [
            self::TYPE_DATE_RANGE,
            self::TYPE_PROMO_CODE,
            self::TYPE_PRODUCT,
            self::TYPE_SUBSCRIPTION_PLAN,
            self::TYPE_ORDER_TOTAL,
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
        $this->setIfExists('code', $data ?? [], null);
        $this->setIfExists('criteria_id', $data ?? [], null);
        $this->setIfExists('operator', $data ?? [], null);
        $this->setIfExists('plan_id', $data ?? [], null);
        $this->setIfExists('product_id', $data ?? [], null);
        $this->setIfExists('product_quantity_max', $data ?? [], null);
        $this->setIfExists('product_quantity_min', $data ?? [], null);
        $this->setIfExists('range_end_time', $data ?? [], null);
        $this->setIfExists('range_start_time', $data ?? [], null);
        $this->setIfExists('subscription_quantity', $data ?? [], null);
        $this->setIfExists('total_amount', $data ?? [], null);
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

        $allowedValues = $this->getOperatorAllowableValues();
        if (!is_null($this->container['operator']) && !in_array($this->container['operator'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'operator', must be one of '%s'",
                $this->container['operator'],
                implode("', '", $allowedValues)
            );
        }

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
     * Gets code
     *
     * @return string|null
     */
    public function getCode()
    {
        return $this->container['code'];
    }

    /**
     * Sets code
     *
     * @param string|null $code code
     *
     * @return self
     */
    public function setCode($code)
    {
        if (is_null($code)) {
            throw new \InvalidArgumentException('non-nullable code cannot be null');
        }
        $this->container['code'] = $code;

        return $this;
    }

    /**
     * Gets criteria_id
     *
     * @return string|null
     */
    public function getCriteriaId()
    {
        return $this->container['criteria_id'];
    }

    /**
     * Sets criteria_id
     *
     * @param string|null $criteria_id criteria_id
     *
     * @return self
     */
    public function setCriteriaId($criteria_id)
    {
        if (is_null($criteria_id)) {
            throw new \InvalidArgumentException('non-nullable criteria_id cannot be null');
        }
        $this->container['criteria_id'] = $criteria_id;

        return $this;
    }

    /**
     * Gets operator
     *
     * @return string|null
     */
    public function getOperator()
    {
        return $this->container['operator'];
    }

    /**
     * Sets operator
     *
     * @param string|null $operator operator
     *
     * @return self
     */
    public function setOperator($operator)
    {
        if (is_null($operator)) {
            throw new \InvalidArgumentException('non-nullable operator cannot be null');
        }
        $allowedValues = $this->getOperatorAllowableValues();
        if (!in_array($operator, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'operator', must be one of '%s'",
                    $operator,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['operator'] = $operator;

        return $this;
    }

    /**
     * Gets plan_id
     *
     * @return string|null
     */
    public function getPlanId()
    {
        return $this->container['plan_id'];
    }

    /**
     * Sets plan_id
     *
     * @param string|null $plan_id plan_id
     *
     * @return self
     */
    public function setPlanId($plan_id)
    {
        if (is_null($plan_id)) {
            throw new \InvalidArgumentException('non-nullable plan_id cannot be null');
        }
        $this->container['plan_id'] = $plan_id;

        return $this;
    }

    /**
     * Gets product_id
     *
     * @return string|null
     */
    public function getProductId()
    {
        return $this->container['product_id'];
    }

    /**
     * Sets product_id
     *
     * @param string|null $product_id product_id
     *
     * @return self
     */
    public function setProductId($product_id)
    {
        if (is_null($product_id)) {
            throw new \InvalidArgumentException('non-nullable product_id cannot be null');
        }
        $this->container['product_id'] = $product_id;

        return $this;
    }

    /**
     * Gets product_quantity_max
     *
     * @return int|null
     */
    public function getProductQuantityMax()
    {
        return $this->container['product_quantity_max'];
    }

    /**
     * Sets product_quantity_max
     *
     * @param int|null $product_quantity_max product_quantity_max
     *
     * @return self
     */
    public function setProductQuantityMax($product_quantity_max)
    {
        if (is_null($product_quantity_max)) {
            throw new \InvalidArgumentException('non-nullable product_quantity_max cannot be null');
        }
        $this->container['product_quantity_max'] = $product_quantity_max;

        return $this;
    }

    /**
     * Gets product_quantity_min
     *
     * @return int|null
     */
    public function getProductQuantityMin()
    {
        return $this->container['product_quantity_min'];
    }

    /**
     * Sets product_quantity_min
     *
     * @param int|null $product_quantity_min product_quantity_min
     *
     * @return self
     */
    public function setProductQuantityMin($product_quantity_min)
    {
        if (is_null($product_quantity_min)) {
            throw new \InvalidArgumentException('non-nullable product_quantity_min cannot be null');
        }
        $this->container['product_quantity_min'] = $product_quantity_min;

        return $this;
    }

    /**
     * Gets range_end_time
     *
     * @return string|null
     */
    public function getRangeEndTime()
    {
        return $this->container['range_end_time'];
    }

    /**
     * Sets range_end_time
     *
     * @param string|null $range_end_time range_end_time
     *
     * @return self
     */
    public function setRangeEndTime($range_end_time)
    {
        if (is_null($range_end_time)) {
            throw new \InvalidArgumentException('non-nullable range_end_time cannot be null');
        }
        $this->container['range_end_time'] = $range_end_time;

        return $this;
    }

    /**
     * Gets range_start_time
     *
     * @return string|null
     */
    public function getRangeStartTime()
    {
        return $this->container['range_start_time'];
    }

    /**
     * Sets range_start_time
     *
     * @param string|null $range_start_time range_start_time
     *
     * @return self
     */
    public function setRangeStartTime($range_start_time)
    {
        if (is_null($range_start_time)) {
            throw new \InvalidArgumentException('non-nullable range_start_time cannot be null');
        }
        $this->container['range_start_time'] = $range_start_time;

        return $this;
    }

    /**
     * Gets subscription_quantity
     *
     * @return int|null
     */
    public function getSubscriptionQuantity()
    {
        return $this->container['subscription_quantity'];
    }

    /**
     * Sets subscription_quantity
     *
     * @param int|null $subscription_quantity subscription_quantity
     *
     * @return self
     */
    public function setSubscriptionQuantity($subscription_quantity)
    {
        if (is_null($subscription_quantity)) {
            throw new \InvalidArgumentException('non-nullable subscription_quantity cannot be null');
        }
        $this->container['subscription_quantity'] = $subscription_quantity;

        return $this;
    }

    /**
     * Gets total_amount
     *
     * @return float|null
     */
    public function getTotalAmount()
    {
        return $this->container['total_amount'];
    }

    /**
     * Sets total_amount
     *
     * @param float|null $total_amount total_amount
     *
     * @return self
     */
    public function setTotalAmount($total_amount)
    {
        if (is_null($total_amount)) {
            throw new \InvalidArgumentException('non-nullable total_amount cannot be null');
        }
        $this->container['total_amount'] = $total_amount;

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


