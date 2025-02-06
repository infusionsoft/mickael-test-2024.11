<?php
/**
 * OrderItemProduct
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
 * The version of the OpenAPI document: 2.70.0.772488
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
 * OrderItemProduct Class Doc Comment
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OrderItemProduct implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'OrderItemProduct';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'created_time' => 'string',
        'description' => 'string',
        'id' => 'string',
        'last_updated_time' => 'string',
        'name' => 'string',
        'product_options' => '\Keap\Sdk\Core\Model\RestProductOption[]',
        'product_price' => 'float',
        'product_short_description' => 'string',
        'shippable' => 'bool',
        'sku' => 'string',
        'status' => 'string',
        'subscription_only' => 'bool',
        'subscription_plans' => '\Keap\Sdk\Core\Model\RestSubscriptionPlan[]',
        'taxable' => 'bool',
        'url' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'created_time' => null,
        'description' => null,
        'id' => null,
        'last_updated_time' => null,
        'name' => null,
        'product_options' => null,
        'product_price' => 'double',
        'product_short_description' => null,
        'shippable' => null,
        'sku' => null,
        'status' => null,
        'subscription_only' => null,
        'subscription_plans' => null,
        'taxable' => null,
        'url' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'created_time' => false,
        'description' => false,
        'id' => false,
        'last_updated_time' => false,
        'name' => false,
        'product_options' => false,
        'product_price' => false,
        'product_short_description' => false,
        'shippable' => false,
        'sku' => false,
        'status' => false,
        'subscription_only' => false,
        'subscription_plans' => false,
        'taxable' => false,
        'url' => false
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
        'created_time' => 'created_time',
        'description' => 'description',
        'id' => 'id',
        'last_updated_time' => 'last_updated_time',
        'name' => 'name',
        'product_options' => 'product_options',
        'product_price' => 'product_price',
        'product_short_description' => 'product_short_description',
        'shippable' => 'shippable',
        'sku' => 'sku',
        'status' => 'status',
        'subscription_only' => 'subscription_only',
        'subscription_plans' => 'subscription_plans',
        'taxable' => 'taxable',
        'url' => 'url'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'created_time' => 'setCreatedTime',
        'description' => 'setDescription',
        'id' => 'setId',
        'last_updated_time' => 'setLastUpdatedTime',
        'name' => 'setName',
        'product_options' => 'setProductOptions',
        'product_price' => 'setProductPrice',
        'product_short_description' => 'setProductShortDescription',
        'shippable' => 'setShippable',
        'sku' => 'setSku',
        'status' => 'setStatus',
        'subscription_only' => 'setSubscriptionOnly',
        'subscription_plans' => 'setSubscriptionPlans',
        'taxable' => 'setTaxable',
        'url' => 'setUrl'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'created_time' => 'getCreatedTime',
        'description' => 'getDescription',
        'id' => 'getId',
        'last_updated_time' => 'getLastUpdatedTime',
        'name' => 'getName',
        'product_options' => 'getProductOptions',
        'product_price' => 'getProductPrice',
        'product_short_description' => 'getProductShortDescription',
        'shippable' => 'getShippable',
        'sku' => 'getSku',
        'status' => 'getStatus',
        'subscription_only' => 'getSubscriptionOnly',
        'subscription_plans' => 'getSubscriptionPlans',
        'taxable' => 'getTaxable',
        'url' => 'getUrl'
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

    public const STATUS_INACTIVE = 'INACTIVE';
    public const STATUS_ACTIVE = 'ACTIVE';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getStatusAllowableValues()
    {
        return [
            self::STATUS_INACTIVE,
            self::STATUS_ACTIVE,
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
        $this->setIfExists('created_time', $data ?? [], null);
        $this->setIfExists('description', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('last_updated_time', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('product_options', $data ?? [], null);
        $this->setIfExists('product_price', $data ?? [], null);
        $this->setIfExists('product_short_description', $data ?? [], null);
        $this->setIfExists('shippable', $data ?? [], null);
        $this->setIfExists('sku', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('subscription_only', $data ?? [], null);
        $this->setIfExists('subscription_plans', $data ?? [], null);
        $this->setIfExists('taxable', $data ?? [], null);
        $this->setIfExists('url', $data ?? [], null);
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

        $allowedValues = $this->getStatusAllowableValues();
        if (!is_null($this->container['status']) && !in_array($this->container['status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'status', must be one of '%s'",
                $this->container['status'],
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
     * Gets created_time
     *
     * @return string|null
     */
    public function getCreatedTime()
    {
        return $this->container['created_time'];
    }

    /**
     * Sets created_time
     *
     * @param string|null $created_time created_time
     *
     * @return self
     */
    public function setCreatedTime($created_time)
    {
        if (is_null($created_time)) {
            throw new \InvalidArgumentException('non-nullable created_time cannot be null');
        }
        $this->container['created_time'] = $created_time;

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
     * Gets last_updated_time
     *
     * @return string|null
     */
    public function getLastUpdatedTime()
    {
        return $this->container['last_updated_time'];
    }

    /**
     * Sets last_updated_time
     *
     * @param string|null $last_updated_time last_updated_time
     *
     * @return self
     */
    public function setLastUpdatedTime($last_updated_time)
    {
        if (is_null($last_updated_time)) {
            throw new \InvalidArgumentException('non-nullable last_updated_time cannot be null');
        }
        $this->container['last_updated_time'] = $last_updated_time;

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
     * Gets product_options
     *
     * @return \Keap\Sdk\Core\Model\RestProductOption[]|null
     */
    public function getProductOptions()
    {
        return $this->container['product_options'];
    }

    /**
     * Sets product_options
     *
     * @param \Keap\Sdk\Core\Model\RestProductOption[]|null $product_options product_options
     *
     * @return self
     */
    public function setProductOptions($product_options)
    {
        if (is_null($product_options)) {
            throw new \InvalidArgumentException('non-nullable product_options cannot be null');
        }
        $this->container['product_options'] = $product_options;

        return $this;
    }

    /**
     * Gets product_price
     *
     * @return float|null
     */
    public function getProductPrice()
    {
        return $this->container['product_price'];
    }

    /**
     * Sets product_price
     *
     * @param float|null $product_price product_price
     *
     * @return self
     */
    public function setProductPrice($product_price)
    {
        if (is_null($product_price)) {
            throw new \InvalidArgumentException('non-nullable product_price cannot be null');
        }
        $this->container['product_price'] = $product_price;

        return $this;
    }

    /**
     * Gets product_short_description
     *
     * @return string|null
     */
    public function getProductShortDescription()
    {
        return $this->container['product_short_description'];
    }

    /**
     * Sets product_short_description
     *
     * @param string|null $product_short_description product_short_description
     *
     * @return self
     */
    public function setProductShortDescription($product_short_description)
    {
        if (is_null($product_short_description)) {
            throw new \InvalidArgumentException('non-nullable product_short_description cannot be null');
        }
        $this->container['product_short_description'] = $product_short_description;

        return $this;
    }

    /**
     * Gets shippable
     *
     * @return bool|null
     */
    public function getShippable()
    {
        return $this->container['shippable'];
    }

    /**
     * Sets shippable
     *
     * @param bool|null $shippable shippable
     *
     * @return self
     */
    public function setShippable($shippable)
    {
        if (is_null($shippable)) {
            throw new \InvalidArgumentException('non-nullable shippable cannot be null');
        }
        $this->container['shippable'] = $shippable;

        return $this;
    }

    /**
     * Gets sku
     *
     * @return string|null
     */
    public function getSku()
    {
        return $this->container['sku'];
    }

    /**
     * Sets sku
     *
     * @param string|null $sku sku
     *
     * @return self
     */
    public function setSku($sku)
    {
        if (is_null($sku)) {
            throw new \InvalidArgumentException('non-nullable sku cannot be null');
        }
        $this->container['sku'] = $sku;

        return $this;
    }

    /**
     * Gets status
     *
     * @return string|null
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string|null $status status
     *
     * @return self
     */
    public function setStatus($status)
    {
        if (is_null($status)) {
            throw new \InvalidArgumentException('non-nullable status cannot be null');
        }
        $allowedValues = $this->getStatusAllowableValues();
        if (!in_array($status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'status', must be one of '%s'",
                    $status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets subscription_only
     *
     * @return bool|null
     */
    public function getSubscriptionOnly()
    {
        return $this->container['subscription_only'];
    }

    /**
     * Sets subscription_only
     *
     * @param bool|null $subscription_only subscription_only
     *
     * @return self
     */
    public function setSubscriptionOnly($subscription_only)
    {
        if (is_null($subscription_only)) {
            throw new \InvalidArgumentException('non-nullable subscription_only cannot be null');
        }
        $this->container['subscription_only'] = $subscription_only;

        return $this;
    }

    /**
     * Gets subscription_plans
     *
     * @return \Keap\Sdk\Core\Model\RestSubscriptionPlan[]|null
     */
    public function getSubscriptionPlans()
    {
        return $this->container['subscription_plans'];
    }

    /**
     * Sets subscription_plans
     *
     * @param \Keap\Sdk\Core\Model\RestSubscriptionPlan[]|null $subscription_plans subscription_plans
     *
     * @return self
     */
    public function setSubscriptionPlans($subscription_plans)
    {
        if (is_null($subscription_plans)) {
            throw new \InvalidArgumentException('non-nullable subscription_plans cannot be null');
        }
        $this->container['subscription_plans'] = $subscription_plans;

        return $this;
    }

    /**
     * Gets taxable
     *
     * @return bool|null
     */
    public function getTaxable()
    {
        return $this->container['taxable'];
    }

    /**
     * Sets taxable
     *
     * @param bool|null $taxable taxable
     *
     * @return self
     */
    public function setTaxable($taxable)
    {
        if (is_null($taxable)) {
            throw new \InvalidArgumentException('non-nullable taxable cannot be null');
        }
        $this->container['taxable'] = $taxable;

        return $this;
    }

    /**
     * Gets url
     *
     * @return string|null
     */
    public function getUrl()
    {
        return $this->container['url'];
    }

    /**
     * Sets url
     *
     * @param string|null $url The url is the permalink to the resource
     *
     * @return self
     */
    public function setUrl($url)
    {
        if (is_null($url)) {
            throw new \InvalidArgumentException('non-nullable url cannot be null');
        }
        $this->container['url'] = $url;

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


