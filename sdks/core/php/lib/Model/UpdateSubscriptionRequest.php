<?php
/**
 * UpdateSubscriptionRequest
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
 * UpdateSubscriptionRequest Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class UpdateSubscriptionRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'UpdateSubscriptionRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'active' => 'bool',
        'allow_tax' => 'bool',
        'auto_charge' => 'bool',
        'billing_amount' => 'float',
        'billing_cycle' => 'string',
        'billing_frequency' => 'int',
        'contact_id' => 'string',
        'days_between_retries' => 'int',
        'end_bill_date' => 'string',
        'lead_affiliate_id' => 'string',
        'max_charge_attempts' => 'int',
        'next_bill_date' => 'string',
        'payment_method_id' => 'string',
        'previous_bill_date' => 'string',
        'product_id' => 'string',
        'quantity' => 'int',
        'sale_affiliate_id' => 'string',
        'shipping_address' => '\Com\Keap\Sdk\Core\Model\Address',
        'start_date' => 'string',
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
        'active' => null,
        'allow_tax' => null,
        'auto_charge' => null,
        'billing_amount' => 'double',
        'billing_cycle' => null,
        'billing_frequency' => 'int32',
        'contact_id' => null,
        'days_between_retries' => 'int32',
        'end_bill_date' => null,
        'lead_affiliate_id' => null,
        'max_charge_attempts' => 'int32',
        'next_bill_date' => null,
        'payment_method_id' => null,
        'previous_bill_date' => null,
        'product_id' => null,
        'quantity' => 'int32',
        'sale_affiliate_id' => null,
        'shipping_address' => null,
        'start_date' => null,
        'subscription_plan_id' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'active' => false,
        'allow_tax' => false,
        'auto_charge' => false,
        'billing_amount' => false,
        'billing_cycle' => false,
        'billing_frequency' => false,
        'contact_id' => false,
        'days_between_retries' => false,
        'end_bill_date' => false,
        'lead_affiliate_id' => false,
        'max_charge_attempts' => false,
        'next_bill_date' => false,
        'payment_method_id' => false,
        'previous_bill_date' => false,
        'product_id' => false,
        'quantity' => false,
        'sale_affiliate_id' => false,
        'shipping_address' => false,
        'start_date' => false,
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
        'active' => 'active',
        'allow_tax' => 'allow_tax',
        'auto_charge' => 'auto_charge',
        'billing_amount' => 'billing_amount',
        'billing_cycle' => 'billing_cycle',
        'billing_frequency' => 'billing_frequency',
        'contact_id' => 'contact_id',
        'days_between_retries' => 'days_between_retries',
        'end_bill_date' => 'end_bill_date',
        'lead_affiliate_id' => 'lead_affiliate_id',
        'max_charge_attempts' => 'max_charge_attempts',
        'next_bill_date' => 'next_bill_date',
        'payment_method_id' => 'payment_method_id',
        'previous_bill_date' => 'previous_bill_date',
        'product_id' => 'product_id',
        'quantity' => 'quantity',
        'sale_affiliate_id' => 'sale_affiliate_id',
        'shipping_address' => 'shipping_address',
        'start_date' => 'start_date',
        'subscription_plan_id' => 'subscription_plan_id'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'active' => 'setActive',
        'allow_tax' => 'setAllowTax',
        'auto_charge' => 'setAutoCharge',
        'billing_amount' => 'setBillingAmount',
        'billing_cycle' => 'setBillingCycle',
        'billing_frequency' => 'setBillingFrequency',
        'contact_id' => 'setContactId',
        'days_between_retries' => 'setDaysBetweenRetries',
        'end_bill_date' => 'setEndBillDate',
        'lead_affiliate_id' => 'setLeadAffiliateId',
        'max_charge_attempts' => 'setMaxChargeAttempts',
        'next_bill_date' => 'setNextBillDate',
        'payment_method_id' => 'setPaymentMethodId',
        'previous_bill_date' => 'setPreviousBillDate',
        'product_id' => 'setProductId',
        'quantity' => 'setQuantity',
        'sale_affiliate_id' => 'setSaleAffiliateId',
        'shipping_address' => 'setShippingAddress',
        'start_date' => 'setStartDate',
        'subscription_plan_id' => 'setSubscriptionPlanId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'active' => 'getActive',
        'allow_tax' => 'getAllowTax',
        'auto_charge' => 'getAutoCharge',
        'billing_amount' => 'getBillingAmount',
        'billing_cycle' => 'getBillingCycle',
        'billing_frequency' => 'getBillingFrequency',
        'contact_id' => 'getContactId',
        'days_between_retries' => 'getDaysBetweenRetries',
        'end_bill_date' => 'getEndBillDate',
        'lead_affiliate_id' => 'getLeadAffiliateId',
        'max_charge_attempts' => 'getMaxChargeAttempts',
        'next_bill_date' => 'getNextBillDate',
        'payment_method_id' => 'getPaymentMethodId',
        'previous_bill_date' => 'getPreviousBillDate',
        'product_id' => 'getProductId',
        'quantity' => 'getQuantity',
        'sale_affiliate_id' => 'getSaleAffiliateId',
        'shipping_address' => 'getShippingAddress',
        'start_date' => 'getStartDate',
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

    public const BILLING_CYCLE_YEAR = 'YEAR';
    public const BILLING_CYCLE_MONTH = 'MONTH';
    public const BILLING_CYCLE_WEEK = 'WEEK';
    public const BILLING_CYCLE_DAY = 'DAY';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getBillingCycleAllowableValues()
    {
        return [
            self::BILLING_CYCLE_YEAR,
            self::BILLING_CYCLE_MONTH,
            self::BILLING_CYCLE_WEEK,
            self::BILLING_CYCLE_DAY,
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
        $this->setIfExists('allow_tax', $data ?? [], null);
        $this->setIfExists('auto_charge', $data ?? [], null);
        $this->setIfExists('billing_amount', $data ?? [], null);
        $this->setIfExists('billing_cycle', $data ?? [], null);
        $this->setIfExists('billing_frequency', $data ?? [], null);
        $this->setIfExists('contact_id', $data ?? [], null);
        $this->setIfExists('days_between_retries', $data ?? [], null);
        $this->setIfExists('end_bill_date', $data ?? [], null);
        $this->setIfExists('lead_affiliate_id', $data ?? [], null);
        $this->setIfExists('max_charge_attempts', $data ?? [], null);
        $this->setIfExists('next_bill_date', $data ?? [], null);
        $this->setIfExists('payment_method_id', $data ?? [], null);
        $this->setIfExists('previous_bill_date', $data ?? [], null);
        $this->setIfExists('product_id', $data ?? [], null);
        $this->setIfExists('quantity', $data ?? [], null);
        $this->setIfExists('sale_affiliate_id', $data ?? [], null);
        $this->setIfExists('shipping_address', $data ?? [], null);
        $this->setIfExists('start_date', $data ?? [], null);
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

        $allowedValues = $this->getBillingCycleAllowableValues();
        if (!is_null($this->container['billing_cycle']) && !in_array($this->container['billing_cycle'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'billing_cycle', must be one of '%s'",
                $this->container['billing_cycle'],
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
     * @param bool|null $active active
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
     * @param bool|null $allow_tax allow_tax
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
     * @param bool|null $auto_charge auto_charge
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
     * @param float|null $billing_amount billing_amount
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
     * @param string|null $billing_cycle billing_cycle
     *
     * @return self
     */
    public function setBillingCycle($billing_cycle)
    {
        if (is_null($billing_cycle)) {
            throw new \InvalidArgumentException('non-nullable billing_cycle cannot be null');
        }
        $allowedValues = $this->getBillingCycleAllowableValues();
        if (!in_array($billing_cycle, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'billing_cycle', must be one of '%s'",
                    $billing_cycle,
                    implode("', '", $allowedValues)
                )
            );
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
     * @param int|null $billing_frequency billing_frequency
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
     * Gets days_between_retries
     *
     * @return int|null
     */
    public function getDaysBetweenRetries()
    {
        return $this->container['days_between_retries'];
    }

    /**
     * Sets days_between_retries
     *
     * @param int|null $days_between_retries days_between_retries
     *
     * @return self
     */
    public function setDaysBetweenRetries($days_between_retries)
    {
        if (is_null($days_between_retries)) {
            throw new \InvalidArgumentException('non-nullable days_between_retries cannot be null');
        }
        $this->container['days_between_retries'] = $days_between_retries;

        return $this;
    }

    /**
     * Gets end_bill_date
     *
     * @return string|null
     */
    public function getEndBillDate()
    {
        return $this->container['end_bill_date'];
    }

    /**
     * Sets end_bill_date
     *
     * @param string|null $end_bill_date end_bill_date
     *
     * @return self
     */
    public function setEndBillDate($end_bill_date)
    {
        if (is_null($end_bill_date)) {
            throw new \InvalidArgumentException('non-nullable end_bill_date cannot be null');
        }
        $this->container['end_bill_date'] = $end_bill_date;

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
     * Gets max_charge_attempts
     *
     * @return int|null
     */
    public function getMaxChargeAttempts()
    {
        return $this->container['max_charge_attempts'];
    }

    /**
     * Sets max_charge_attempts
     *
     * @param int|null $max_charge_attempts max_charge_attempts
     *
     * @return self
     */
    public function setMaxChargeAttempts($max_charge_attempts)
    {
        if (is_null($max_charge_attempts)) {
            throw new \InvalidArgumentException('non-nullable max_charge_attempts cannot be null');
        }
        $this->container['max_charge_attempts'] = $max_charge_attempts;

        return $this;
    }

    /**
     * Gets next_bill_date
     *
     * @return string|null
     */
    public function getNextBillDate()
    {
        return $this->container['next_bill_date'];
    }

    /**
     * Sets next_bill_date
     *
     * @param string|null $next_bill_date next_bill_date
     *
     * @return self
     */
    public function setNextBillDate($next_bill_date)
    {
        if (is_null($next_bill_date)) {
            throw new \InvalidArgumentException('non-nullable next_bill_date cannot be null');
        }
        $this->container['next_bill_date'] = $next_bill_date;

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
     * @param string|null $payment_method_id payment_method_id
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
     * Gets previous_bill_date
     *
     * @return string|null
     */
    public function getPreviousBillDate()
    {
        return $this->container['previous_bill_date'];
    }

    /**
     * Sets previous_bill_date
     *
     * @param string|null $previous_bill_date previous_bill_date
     *
     * @return self
     */
    public function setPreviousBillDate($previous_bill_date)
    {
        if (is_null($previous_bill_date)) {
            throw new \InvalidArgumentException('non-nullable previous_bill_date cannot be null');
        }
        $this->container['previous_bill_date'] = $previous_bill_date;

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
     * Gets shipping_address
     *
     * @return \Com\Keap\Sdk\Core\Model\Address|null
     */
    public function getShippingAddress()
    {
        return $this->container['shipping_address'];
    }

    /**
     * Sets shipping_address
     *
     * @param \Com\Keap\Sdk\Core\Model\Address|null $shipping_address shipping_address
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
     * Gets start_date
     *
     * @return string|null
     */
    public function getStartDate()
    {
        return $this->container['start_date'];
    }

    /**
     * Sets start_date
     *
     * @param string|null $start_date start_date
     *
     * @return self
     */
    public function setStartDate($start_date)
    {
        if (is_null($start_date)) {
            throw new \InvalidArgumentException('non-nullable start_date cannot be null');
        }
        $this->container['start_date'] = $start_date;

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
     * @param string|null $subscription_plan_id subscription_plan_id
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


