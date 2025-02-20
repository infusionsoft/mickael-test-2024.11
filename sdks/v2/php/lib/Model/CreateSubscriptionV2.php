<?php
/**
 * CreateSubscriptionV2
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
 * CreateSubscriptionV2 Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateSubscriptionV2 implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'CreateSubscriptionV2';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'allow_duplicate' => 'bool',
        'allow_tax' => 'bool',
        'auto_charge' => 'bool',
        'billing_amount' => 'float',
        'contact_id' => 'string',
        'first_bill_date' => '\DateTime',
        'payment_method_id' => 'string',
        'quantity' => 'int',
        'sale_affiliate_id' => 'string',
        'subscription_plan_id' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'allow_duplicate' => null,
        'allow_tax' => null,
        'auto_charge' => null,
        'billing_amount' => 'double',
        'contact_id' => null,
        'first_bill_date' => 'date',
        'payment_method_id' => null,
        'quantity' => 'int32',
        'sale_affiliate_id' => null,
        'subscription_plan_id' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'allow_duplicate' => false,
        'allow_tax' => false,
        'auto_charge' => false,
        'billing_amount' => false,
        'contact_id' => false,
        'first_bill_date' => false,
        'payment_method_id' => false,
        'quantity' => false,
        'sale_affiliate_id' => false,
        'subscription_plan_id' => false
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
        'allow_duplicate' => 'allow_duplicate',
        'allow_tax' => 'allow_tax',
        'auto_charge' => 'auto_charge',
        'billing_amount' => 'billing_amount',
        'contact_id' => 'contact_id',
        'first_bill_date' => 'first_bill_date',
        'payment_method_id' => 'payment_method_id',
        'quantity' => 'quantity',
        'sale_affiliate_id' => 'sale_affiliate_id',
        'subscription_plan_id' => 'subscription_plan_id'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'allow_duplicate' => 'setAllowDuplicate',
        'allow_tax' => 'setAllowTax',
        'auto_charge' => 'setAutoCharge',
        'billing_amount' => 'setBillingAmount',
        'contact_id' => 'setContactId',
        'first_bill_date' => 'setFirstBillDate',
        'payment_method_id' => 'setPaymentMethodId',
        'quantity' => 'setQuantity',
        'sale_affiliate_id' => 'setSaleAffiliateId',
        'subscription_plan_id' => 'setSubscriptionPlanId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'allow_duplicate' => 'getAllowDuplicate',
        'allow_tax' => 'getAllowTax',
        'auto_charge' => 'getAutoCharge',
        'billing_amount' => 'getBillingAmount',
        'contact_id' => 'getContactId',
        'first_bill_date' => 'getFirstBillDate',
        'payment_method_id' => 'getPaymentMethodId',
        'quantity' => 'getQuantity',
        'sale_affiliate_id' => 'getSaleAffiliateId',
        'subscription_plan_id' => 'getSubscriptionPlanId'
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
        $this->setIfExists('allow_duplicate', $data ?? [], null);
        $this->setIfExists('allow_tax', $data ?? [], null);
        $this->setIfExists('auto_charge', $data ?? [], null);
        $this->setIfExists('billing_amount', $data ?? [], null);
        $this->setIfExists('contact_id', $data ?? [], null);
        $this->setIfExists('first_bill_date', $data ?? [], null);
        $this->setIfExists('payment_method_id', $data ?? [], null);
        $this->setIfExists('quantity', $data ?? [], null);
        $this->setIfExists('sale_affiliate_id', $data ?? [], null);
        $this->setIfExists('subscription_plan_id', $data ?? [], null);
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

        if ($this->container['contact_id'] === null) {
            $invalidProperties[] = "'contact_id' can't be null";
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
     * Gets allow_duplicate
     *
     * @return bool|null
     */
    public function getAllowDuplicate()
    {
        return $this->container['allow_duplicate'];
    }

    /**
     * Sets allow_duplicate
     *
     * @param bool|null $allow_duplicate If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false.
     *
     * @return self
     */
    public function setAllowDuplicate($allow_duplicate)
    {
        if (is_null($allow_duplicate)) {
            throw new \InvalidArgumentException('non-nullable allow_duplicate cannot be null');
        }
        $this->container['allow_duplicate'] = $allow_duplicate;

        return $this;
    }

    /**
     * Gets allow_tax
     *
     * @return bool|null
     */
    public function getAllowTax()
    {
        return $this->container['allow_tax'];
    }

    /**
     * Sets allow_tax
     *
     * @param bool|null $allow_tax Only works if the product the product subscription is for is taxable. Default is false.
     *
     * @return self
     */
    public function setAllowTax($allow_tax)
    {
        if (is_null($allow_tax)) {
            throw new \InvalidArgumentException('non-nullable allow_tax cannot be null');
        }
        $this->container['allow_tax'] = $allow_tax;

        return $this;
    }

    /**
     * Gets auto_charge
     *
     * @return bool|null
     */
    public function getAutoCharge()
    {
        return $this->container['auto_charge'];
    }

    /**
     * Sets auto_charge
     *
     * @param bool|null $auto_charge Defaults to true.
     *
     * @return self
     */
    public function setAutoCharge($auto_charge)
    {
        if (is_null($auto_charge)) {
            throw new \InvalidArgumentException('non-nullable auto_charge cannot be null');
        }
        $this->container['auto_charge'] = $auto_charge;

        return $this;
    }

    /**
     * Gets billing_amount
     *
     * @return float|null
     */
    public function getBillingAmount()
    {
        return $this->container['billing_amount'];
    }

    /**
     * Sets billing_amount
     *
     * @param float|null $billing_amount Must be 0 or greater. Default is the price in the product subscription.
     *
     * @return self
     */
    public function setBillingAmount($billing_amount)
    {
        if (is_null($billing_amount)) {
            throw new \InvalidArgumentException('non-nullable billing_amount cannot be null');
        }
        $this->container['billing_amount'] = $billing_amount;

        return $this;
    }

    /**
     * Gets contact_id
     *
     * @return string
     */
    public function getContactId()
    {
        return $this->container['contact_id'];
    }

    /**
     * Sets contact_id
     *
     * @param string $contact_id contact_id
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
     * Gets first_bill_date
     *
     * @return \DateTime|null
     */
    public function getFirstBillDate()
    {
        return $this->container['first_bill_date'];
    }

    /**
     * Sets first_bill_date
     *
     * @param \DateTime|null $first_bill_date The first day the subscription will bill, in EST. Must not be in the past. Default is today.
     *
     * @return self
     */
    public function setFirstBillDate($first_bill_date)
    {
        if (is_null($first_bill_date)) {
            throw new \InvalidArgumentException('non-nullable first_bill_date cannot be null');
        }
        $this->container['first_bill_date'] = $first_bill_date;

        return $this;
    }

    /**
     * Gets payment_method_id
     *
     * @return string|null
     */
    public function getPaymentMethodId()
    {
        return $this->container['payment_method_id'];
    }

    /**
     * Sets payment_method_id
     *
     * @param string|null $payment_method_id Default is the contact's most recently used card, if auto charge is true. Default is 0 otherwise.
     *
     * @return self
     */
    public function setPaymentMethodId($payment_method_id)
    {
        if (is_null($payment_method_id)) {
            throw new \InvalidArgumentException('non-nullable payment_method_id cannot be null');
        }
        $this->container['payment_method_id'] = $payment_method_id;

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
     * @param int|null $quantity Must be greater than 0. Default is 1.
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
     * Gets sale_affiliate_id
     *
     * @return string|null
     */
    public function getSaleAffiliateId()
    {
        return $this->container['sale_affiliate_id'];
    }

    /**
     * Sets sale_affiliate_id
     *
     * @param string|null $sale_affiliate_id sale_affiliate_id
     *
     * @return self
     */
    public function setSaleAffiliateId($sale_affiliate_id)
    {
        if (is_null($sale_affiliate_id)) {
            throw new \InvalidArgumentException('non-nullable sale_affiliate_id cannot be null');
        }
        $this->container['sale_affiliate_id'] = $sale_affiliate_id;

        return $this;
    }

    /**
     * Gets subscription_plan_id
     *
     * @return string|null
     */
    public function getSubscriptionPlanId()
    {
        return $this->container['subscription_plan_id'];
    }

    /**
     * Sets subscription_plan_id
     *
     * @param string|null $subscription_plan_id Id of the product subscription.
     *
     * @return self
     */
    public function setSubscriptionPlanId($subscription_plan_id)
    {
        if (is_null($subscription_plan_id)) {
            throw new \InvalidArgumentException('non-nullable subscription_plan_id cannot be null');
        }
        $this->container['subscription_plan_id'] = $subscription_plan_id;

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


