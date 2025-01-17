<?php
/**
 * OrderTotalDiscount
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
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
 * OrderTotalDiscount Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OrderTotalDiscount implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'OrderTotalDiscount';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'apply_to_commissions' => 'bool',
        'criteria' => '\Com\Keap\Sdk\Core\Model\DiscountCriteria[]',
        'description' => 'string',
        'discount_id' => 'string',
        'discount_strategy' => 'string',
        'discount_type' => 'string',
        'discount_value' => 'float',
        'name' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'apply_to_commissions' => null,
        'criteria' => null,
        'description' => null,
        'discount_id' => null,
        'discount_strategy' => null,
        'discount_type' => null,
        'discount_value' => 'double',
        'name' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'apply_to_commissions' => false,
        'criteria' => false,
        'description' => false,
        'discount_id' => false,
        'discount_strategy' => false,
        'discount_type' => false,
        'discount_value' => false,
        'name' => false
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
        'apply_to_commissions' => 'apply_to_commissions',
        'criteria' => 'criteria',
        'description' => 'description',
        'discount_id' => 'discount_id',
        'discount_strategy' => 'discount_strategy',
        'discount_type' => 'discount_type',
        'discount_value' => 'discount_value',
        'name' => 'name'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'apply_to_commissions' => 'setApplyToCommissions',
        'criteria' => 'setCriteria',
        'description' => 'setDescription',
        'discount_id' => 'setDiscountId',
        'discount_strategy' => 'setDiscountStrategy',
        'discount_type' => 'setDiscountType',
        'discount_value' => 'setDiscountValue',
        'name' => 'setName'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'apply_to_commissions' => 'getApplyToCommissions',
        'criteria' => 'getCriteria',
        'description' => 'getDescription',
        'discount_id' => 'getDiscountId',
        'discount_strategy' => 'getDiscountStrategy',
        'discount_type' => 'getDiscountType',
        'discount_value' => 'getDiscountValue',
        'name' => 'getName'
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

    public const DISCOUNT_STRATEGY_GROSS = 'GROSS';
    public const DISCOUNT_STRATEGY_NET = 'NET';
    public const DISCOUNT_TYPE_AMOUNT = 'AMOUNT';
    public const DISCOUNT_TYPE_PERCENT = 'PERCENT';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getDiscountStrategyAllowableValues()
    {
        return [
            self::DISCOUNT_STRATEGY_GROSS,
            self::DISCOUNT_STRATEGY_NET,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getDiscountTypeAllowableValues()
    {
        return [
            self::DISCOUNT_TYPE_AMOUNT,
            self::DISCOUNT_TYPE_PERCENT,
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
        $this->setIfExists('apply_to_commissions', $data ?? [], null);
        $this->setIfExists('criteria', $data ?? [], null);
        $this->setIfExists('description', $data ?? [], null);
        $this->setIfExists('discount_id', $data ?? [], null);
        $this->setIfExists('discount_strategy', $data ?? [], null);
        $this->setIfExists('discount_type', $data ?? [], null);
        $this->setIfExists('discount_value', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
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

        $allowedValues = $this->getDiscountStrategyAllowableValues();
        if (!is_null($this->container['discount_strategy']) && !in_array($this->container['discount_strategy'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'discount_strategy', must be one of '%s'",
                $this->container['discount_strategy'],
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getDiscountTypeAllowableValues();
        if (!is_null($this->container['discount_type']) && !in_array($this->container['discount_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'discount_type', must be one of '%s'",
                $this->container['discount_type'],
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
     * Gets apply_to_commissions
     *
     * @return bool|null
     */
    public function getApplyToCommissions()
    {
        return $this->container['apply_to_commissions'];
    }

    /**
     * Sets apply_to_commissions
     *
     * @param bool|null $apply_to_commissions apply_to_commissions
     *
     * @return self
     */
    public function setApplyToCommissions($apply_to_commissions)
    {
        if (is_null($apply_to_commissions)) {
            throw new \InvalidArgumentException('non-nullable apply_to_commissions cannot be null');
        }
        $this->container['apply_to_commissions'] = $apply_to_commissions;

        return $this;
    }

    /**
     * Gets criteria
     *
     * @return \Com\Keap\Sdk\Core\Model\DiscountCriteria[]|null
     */
    public function getCriteria()
    {
        return $this->container['criteria'];
    }

    /**
     * Sets criteria
     *
     * @param \Com\Keap\Sdk\Core\Model\DiscountCriteria[]|null $criteria criteria
     *
     * @return self
     */
    public function setCriteria($criteria)
    {
        if (is_null($criteria)) {
            throw new \InvalidArgumentException('non-nullable criteria cannot be null');
        }
        $this->container['criteria'] = $criteria;

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
     * Gets discount_id
     *
     * @return string|null
     */
    public function getDiscountId()
    {
        return $this->container['discount_id'];
    }

    /**
     * Sets discount_id
     *
     * @param string|null $discount_id discount_id
     *
     * @return self
     */
    public function setDiscountId($discount_id)
    {
        if (is_null($discount_id)) {
            throw new \InvalidArgumentException('non-nullable discount_id cannot be null');
        }
        $this->container['discount_id'] = $discount_id;

        return $this;
    }

    /**
     * Gets discount_strategy
     *
     * @return string|null
     */
    public function getDiscountStrategy()
    {
        return $this->container['discount_strategy'];
    }

    /**
     * Sets discount_strategy
     *
     * @param string|null $discount_strategy discount_strategy
     *
     * @return self
     */
    public function setDiscountStrategy($discount_strategy)
    {
        if (is_null($discount_strategy)) {
            throw new \InvalidArgumentException('non-nullable discount_strategy cannot be null');
        }
        $allowedValues = $this->getDiscountStrategyAllowableValues();
        if (!in_array($discount_strategy, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'discount_strategy', must be one of '%s'",
                    $discount_strategy,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['discount_strategy'] = $discount_strategy;

        return $this;
    }

    /**
     * Gets discount_type
     *
     * @return string|null
     */
    public function getDiscountType()
    {
        return $this->container['discount_type'];
    }

    /**
     * Sets discount_type
     *
     * @param string|null $discount_type discount_type
     *
     * @return self
     */
    public function setDiscountType($discount_type)
    {
        if (is_null($discount_type)) {
            throw new \InvalidArgumentException('non-nullable discount_type cannot be null');
        }
        $allowedValues = $this->getDiscountTypeAllowableValues();
        if (!in_array($discount_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'discount_type', must be one of '%s'",
                    $discount_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['discount_type'] = $discount_type;

        return $this;
    }

    /**
     * Gets discount_value
     *
     * @return float|null
     */
    public function getDiscountValue()
    {
        return $this->container['discount_value'];
    }

    /**
     * Sets discount_value
     *
     * @param float|null $discount_value discount_value
     *
     * @return self
     */
    public function setDiscountValue($discount_value)
    {
        if (is_null($discount_value)) {
            throw new \InvalidArgumentException('non-nullable discount_value cannot be null');
        }
        $this->container['discount_value'] = $discount_value;

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


