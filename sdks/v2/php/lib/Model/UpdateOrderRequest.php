<?php
/**
 * UpdateOrderRequest
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
 * UpdateOrderRequest Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class UpdateOrderRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'UpdateOrderRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'contact_id' => 'string',
        'lead_affiliate_id' => 'string',
        'order_time' => 'string',
        'order_title' => 'string',
        'order_type' => 'string',
        'promo_codes' => 'string[]',
        'sales_affiliate_id' => 'string',
        'shipping_address' => '\Keap\Core\V2\Model\AddressInformation'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'contact_id' => null,
        'lead_affiliate_id' => null,
        'order_time' => null,
        'order_title' => null,
        'order_type' => null,
        'promo_codes' => null,
        'sales_affiliate_id' => null,
        'shipping_address' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'contact_id' => false,
        'lead_affiliate_id' => false,
        'order_time' => false,
        'order_title' => false,
        'order_type' => false,
        'promo_codes' => false,
        'sales_affiliate_id' => false,
        'shipping_address' => false
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
        'contact_id' => 'contact_id',
        'lead_affiliate_id' => 'lead_affiliate_id',
        'order_time' => 'order_time',
        'order_title' => 'order_title',
        'order_type' => 'order_type',
        'promo_codes' => 'promo_codes',
        'sales_affiliate_id' => 'sales_affiliate_id',
        'shipping_address' => 'shipping_address'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'contact_id' => 'setContactId',
        'lead_affiliate_id' => 'setLeadAffiliateId',
        'order_time' => 'setOrderTime',
        'order_title' => 'setOrderTitle',
        'order_type' => 'setOrderType',
        'promo_codes' => 'setPromoCodes',
        'sales_affiliate_id' => 'setSalesAffiliateId',
        'shipping_address' => 'setShippingAddress'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'contact_id' => 'getContactId',
        'lead_affiliate_id' => 'getLeadAffiliateId',
        'order_time' => 'getOrderTime',
        'order_title' => 'getOrderTitle',
        'order_type' => 'getOrderType',
        'promo_codes' => 'getPromoCodes',
        'sales_affiliate_id' => 'getSalesAffiliateId',
        'shipping_address' => 'getShippingAddress'
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

    public const ORDER_TYPE_OFFLINE = 'OFFLINE';
    public const ORDER_TYPE_ONLINE = 'ONLINE';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getOrderTypeAllowableValues()
    {
        return [
            self::ORDER_TYPE_OFFLINE,
            self::ORDER_TYPE_ONLINE,
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
        $this->setIfExists('contact_id', $data ?? [], null);
        $this->setIfExists('lead_affiliate_id', $data ?? [], null);
        $this->setIfExists('order_time', $data ?? [], null);
        $this->setIfExists('order_title', $data ?? [], null);
        $this->setIfExists('order_type', $data ?? [], null);
        $this->setIfExists('promo_codes', $data ?? [], null);
        $this->setIfExists('sales_affiliate_id', $data ?? [], null);
        $this->setIfExists('shipping_address', $data ?? [], null);
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

        $allowedValues = $this->getOrderTypeAllowableValues();
        if (!is_null($this->container['order_type']) && !in_array($this->container['order_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'order_type', must be one of '%s'",
                $this->container['order_type'],
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
     * Gets contact_id
     *
     * @return string|null
     */
    public function getContactId()
    {
        return $this->container['contact_id'];
    }

    /**
     * Sets contact_id
     *
     * @param string|null $contact_id contact_id
     *
     * @return self
     */
    public function setContactId($contact_id)
    {
        if (is_null($contact_id)) {
            throw new \InvalidArgumentException('non-nullable contact_id cannot be null');
        }
        $this->container['contact_id'] = $contact_id;

        return $this;
    }

    /**
     * Gets lead_affiliate_id
     *
     * @return string|null
     */
    public function getLeadAffiliateId()
    {
        return $this->container['lead_affiliate_id'];
    }

    /**
     * Sets lead_affiliate_id
     *
     * @param string|null $lead_affiliate_id lead_affiliate_id
     *
     * @return self
     */
    public function setLeadAffiliateId($lead_affiliate_id)
    {
        if (is_null($lead_affiliate_id)) {
            throw new \InvalidArgumentException('non-nullable lead_affiliate_id cannot be null');
        }
        $this->container['lead_affiliate_id'] = $lead_affiliate_id;

        return $this;
    }

    /**
     * Gets order_time
     *
     * @return string|null
     */
    public function getOrderTime()
    {
        return $this->container['order_time'];
    }

    /**
     * Sets order_time
     *
     * @param string|null $order_time order_time
     *
     * @return self
     */
    public function setOrderTime($order_time)
    {
        if (is_null($order_time)) {
            throw new \InvalidArgumentException('non-nullable order_time cannot be null');
        }
        $this->container['order_time'] = $order_time;

        return $this;
    }

    /**
     * Gets order_title
     *
     * @return string|null
     */
    public function getOrderTitle()
    {
        return $this->container['order_title'];
    }

    /**
     * Sets order_title
     *
     * @param string|null $order_title order_title
     *
     * @return self
     */
    public function setOrderTitle($order_title)
    {
        if (is_null($order_title)) {
            throw new \InvalidArgumentException('non-nullable order_title cannot be null');
        }
        $this->container['order_title'] = $order_title;

        return $this;
    }

    /**
     * Gets order_type
     *
     * @return string|null
     */
    public function getOrderType()
    {
        return $this->container['order_type'];
    }

    /**
     * Sets order_type
     *
     * @param string|null $order_type order_type
     *
     * @return self
     */
    public function setOrderType($order_type)
    {
        if (is_null($order_type)) {
            throw new \InvalidArgumentException('non-nullable order_type cannot be null');
        }
        $allowedValues = $this->getOrderTypeAllowableValues();
        if (!in_array($order_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'order_type', must be one of '%s'",
                    $order_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['order_type'] = $order_type;

        return $this;
    }

    /**
     * Gets promo_codes
     *
     * @return string[]|null
     */
    public function getPromoCodes()
    {
        return $this->container['promo_codes'];
    }

    /**
     * Sets promo_codes
     *
     * @param string[]|null $promo_codes Uses multiple strings as promo codes. The corresponding discount will be applied to the order.
     *
     * @return self
     */
    public function setPromoCodes($promo_codes)
    {
        if (is_null($promo_codes)) {
            throw new \InvalidArgumentException('non-nullable promo_codes cannot be null');
        }
        $this->container['promo_codes'] = $promo_codes;

        return $this;
    }

    /**
     * Gets sales_affiliate_id
     *
     * @return string|null
     */
    public function getSalesAffiliateId()
    {
        return $this->container['sales_affiliate_id'];
    }

    /**
     * Sets sales_affiliate_id
     *
     * @param string|null $sales_affiliate_id sales_affiliate_id
     *
     * @return self
     */
    public function setSalesAffiliateId($sales_affiliate_id)
    {
        if (is_null($sales_affiliate_id)) {
            throw new \InvalidArgumentException('non-nullable sales_affiliate_id cannot be null');
        }
        $this->container['sales_affiliate_id'] = $sales_affiliate_id;

        return $this;
    }

    /**
     * Gets shipping_address
     *
     * @return \Keap\Core\V2\Model\AddressInformation|null
     */
    public function getShippingAddress()
    {
        return $this->container['shipping_address'];
    }

    /**
     * Sets shipping_address
     *
     * @param \Keap\Core\V2\Model\AddressInformation|null $shipping_address shipping_address
     *
     * @return self
     */
    public function setShippingAddress($shipping_address)
    {
        if (is_null($shipping_address)) {
            throw new \InvalidArgumentException('non-nullable shipping_address cannot be null');
        }
        $this->container['shipping_address'] = $shipping_address;

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


