<?php
/**
 * AffiliateProgramV2
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
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
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
 * AffiliateProgramV2 Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class AffiliateProgramV2 implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'AffiliateProgramV2';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'affiliate_id' => 'string',
        'create_time' => '\DateTime',
        'default_commission' => '\Com\Keap\Sdk\Core\Model\DefaultCommission',
        'id' => 'string',
        'name' => 'string',
        'notes' => 'string',
        'priority' => 'string',
        'product_commissions' => '\Com\Keap\Sdk\Core\Model\ProductCommission[]',
        'subscription_commissions' => '\Com\Keap\Sdk\Core\Model\SubscriptionCommission[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'affiliate_id' => null,
        'create_time' => 'date-time',
        'default_commission' => null,
        'id' => null,
        'name' => null,
        'notes' => null,
        'priority' => null,
        'product_commissions' => null,
        'subscription_commissions' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'affiliate_id' => false,
        'create_time' => false,
        'default_commission' => false,
        'id' => false,
        'name' => false,
        'notes' => false,
        'priority' => false,
        'product_commissions' => false,
        'subscription_commissions' => false
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
        'affiliate_id' => 'affiliate_id',
        'create_time' => 'create_time',
        'default_commission' => 'default_commission',
        'id' => 'id',
        'name' => 'name',
        'notes' => 'notes',
        'priority' => 'priority',
        'product_commissions' => 'product_commissions',
        'subscription_commissions' => 'subscription_commissions'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'affiliate_id' => 'setAffiliateId',
        'create_time' => 'setCreateTime',
        'default_commission' => 'setDefaultCommission',
        'id' => 'setId',
        'name' => 'setName',
        'notes' => 'setNotes',
        'priority' => 'setPriority',
        'product_commissions' => 'setProductCommissions',
        'subscription_commissions' => 'setSubscriptionCommissions'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'affiliate_id' => 'getAffiliateId',
        'create_time' => 'getCreateTime',
        'default_commission' => 'getDefaultCommission',
        'id' => 'getId',
        'name' => 'getName',
        'notes' => 'getNotes',
        'priority' => 'getPriority',
        'product_commissions' => 'getProductCommissions',
        'subscription_commissions' => 'getSubscriptionCommissions'
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
        $this->setIfExists('affiliate_id', $data ?? [], null);
        $this->setIfExists('create_time', $data ?? [], null);
        $this->setIfExists('default_commission', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('notes', $data ?? [], null);
        $this->setIfExists('priority', $data ?? [], null);
        $this->setIfExists('product_commissions', $data ?? [], null);
        $this->setIfExists('subscription_commissions', $data ?? [], null);
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
     * Gets affiliate_id
     *
     * @return string|null
     */
    public function getAffiliateId()
    {
        return $this->container['affiliate_id'];
    }

    /**
     * Sets affiliate_id
     *
     * @param string|null $affiliate_id The affiliate_Id for Affiliate commission program
     *
     * @return self
     */
    public function setAffiliateId($affiliate_id)
    {
        if (is_null($affiliate_id)) {
            throw new \InvalidArgumentException('non-nullable affiliate_id cannot be null');
        }
        $this->container['affiliate_id'] = $affiliate_id;

        return $this;
    }

    /**
     * Gets create_time
     *
     * @return \DateTime|null
     */
    public function getCreateTime()
    {
        return $this->container['create_time'];
    }

    /**
     * Sets create_time
     *
     * @param \DateTime|null $create_time The created time of affiliate commission program
     *
     * @return self
     */
    public function setCreateTime($create_time)
    {
        if (is_null($create_time)) {
            throw new \InvalidArgumentException('non-nullable create_time cannot be null');
        }
        $this->container['create_time'] = $create_time;

        return $this;
    }

    /**
     * Gets default_commission
     *
     * @return \Com\Keap\Sdk\Core\Model\DefaultCommission|null
     */
    public function getDefaultCommission()
    {
        return $this->container['default_commission'];
    }

    /**
     * Sets default_commission
     *
     * @param \Com\Keap\Sdk\Core\Model\DefaultCommission|null $default_commission default_commission
     *
     * @return self
     */
    public function setDefaultCommission($default_commission)
    {
        if (is_null($default_commission)) {
            throw new \InvalidArgumentException('non-nullable default_commission cannot be null');
        }
        $this->container['default_commission'] = $default_commission;

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
     * @param string|null $id The affiliate commission program name
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
     * @param string|null $name The affiliate commission program name
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
     * Gets notes
     *
     * @return string|null
     */
    public function getNotes()
    {
        return $this->container['notes'];
    }

    /**
     * Sets notes
     *
     * @param string|null $notes The affiliate commission program notes
     *
     * @return self
     */
    public function setNotes($notes)
    {
        if (is_null($notes)) {
            throw new \InvalidArgumentException('non-nullable notes cannot be null');
        }
        $this->container['notes'] = $notes;

        return $this;
    }

    /**
     * Gets priority
     *
     * @return string|null
     */
    public function getPriority()
    {
        return $this->container['priority'];
    }

    /**
     * Sets priority
     *
     * @param string|null $priority The Affiliate commission program priority
     *
     * @return self
     */
    public function setPriority($priority)
    {
        if (is_null($priority)) {
            throw new \InvalidArgumentException('non-nullable priority cannot be null');
        }
        $this->container['priority'] = $priority;

        return $this;
    }

    /**
     * Gets product_commissions
     *
     * @return \Com\Keap\Sdk\Core\Model\ProductCommission[]|null
     */
    public function getProductCommissions()
    {
        return $this->container['product_commissions'];
    }

    /**
     * Sets product_commissions
     *
     * @param \Com\Keap\Sdk\Core\Model\ProductCommission[]|null $product_commissions product_commissions
     *
     * @return self
     */
    public function setProductCommissions($product_commissions)
    {
        if (is_null($product_commissions)) {
            throw new \InvalidArgumentException('non-nullable product_commissions cannot be null');
        }
        $this->container['product_commissions'] = $product_commissions;

        return $this;
    }

    /**
     * Gets subscription_commissions
     *
     * @return \Com\Keap\Sdk\Core\Model\SubscriptionCommission[]|null
     */
    public function getSubscriptionCommissions()
    {
        return $this->container['subscription_commissions'];
    }

    /**
     * Sets subscription_commissions
     *
     * @param \Com\Keap\Sdk\Core\Model\SubscriptionCommission[]|null $subscription_commissions subscription_commissions
     *
     * @return self
     */
    public function setSubscriptionCommissions($subscription_commissions)
    {
        if (is_null($subscription_commissions)) {
            throw new \InvalidArgumentException('non-nullable subscription_commissions cannot be null');
        }
        $this->container['subscription_commissions'] = $subscription_commissions;

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


