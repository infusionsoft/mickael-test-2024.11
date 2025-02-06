<?php
/**
 * RestV2OrderItem
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
 * RestV2OrderItem Class Doc Comment
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class RestV2OrderItem implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'RestV2OrderItem';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'billing_cycle' => 'int',
        'cost' => 'float',
        'cycle' => 'string',
        'description' => 'string',
        'discount' => 'float',
        'frequency' => 'int',
        'id' => 'string',
        'name' => 'string',
        'notes' => 'string',
        'number_of_payments' => 'int',
        'order_item_taxes' => '\Keap\Sdk\Core\Model\OrderItemTax[]',
        'price' => 'float',
        'product' => '\Keap\Sdk\Core\Model\OrderItemProduct',
        'quantity' => 'int',
        'special' => '\Keap\Sdk\Core\Model\Discount',
        'subscription' => '\Keap\Sdk\Core\Model\RestV2Subscription',
        'subscription_based' => 'bool',
        'subscription_id' => 'string',
        'subscription_plan' => '\Keap\Sdk\Core\Model\RestSubscriptionPlan',
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
        'billing_cycle' => 'int32',
        'cost' => 'double',
        'cycle' => null,
        'description' => null,
        'discount' => 'double',
        'frequency' => 'int32',
        'id' => null,
        'name' => null,
        'notes' => null,
        'number_of_payments' => 'int32',
        'order_item_taxes' => null,
        'price' => 'double',
        'product' => null,
        'quantity' => 'int32',
        'special' => null,
        'subscription' => null,
        'subscription_based' => null,
        'subscription_id' => null,
        'subscription_plan' => null,
        'type' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'billing_cycle' => false,
        'cost' => false,
        'cycle' => false,
        'description' => false,
        'discount' => false,
        'frequency' => false,
        'id' => false,
        'name' => false,
        'notes' => false,
        'number_of_payments' => false,
        'order_item_taxes' => false,
        'price' => false,
        'product' => false,
        'quantity' => false,
        'special' => false,
        'subscription' => false,
        'subscription_based' => false,
        'subscription_id' => false,
        'subscription_plan' => false,
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
        'billing_cycle' => 'billing_cycle',
        'cost' => 'cost',
        'cycle' => 'cycle',
        'description' => 'description',
        'discount' => 'discount',
        'frequency' => 'frequency',
        'id' => 'id',
        'name' => 'name',
        'notes' => 'notes',
        'number_of_payments' => 'number_of_payments',
        'order_item_taxes' => 'order_item_taxes',
        'price' => 'price',
        'product' => 'product',
        'quantity' => 'quantity',
        'special' => 'special',
        'subscription' => 'subscription',
        'subscription_based' => 'subscription_based',
        'subscription_id' => 'subscription_id',
        'subscription_plan' => 'subscription_plan',
        'type' => 'type'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'billing_cycle' => 'setBillingCycle',
        'cost' => 'setCost',
        'cycle' => 'setCycle',
        'description' => 'setDescription',
        'discount' => 'setDiscount',
        'frequency' => 'setFrequency',
        'id' => 'setId',
        'name' => 'setName',
        'notes' => 'setNotes',
        'number_of_payments' => 'setNumberOfPayments',
        'order_item_taxes' => 'setOrderItemTaxes',
        'price' => 'setPrice',
        'product' => 'setProduct',
        'quantity' => 'setQuantity',
        'special' => 'setSpecial',
        'subscription' => 'setSubscription',
        'subscription_based' => 'setSubscriptionBased',
        'subscription_id' => 'setSubscriptionId',
        'subscription_plan' => 'setSubscriptionPlan',
        'type' => 'setType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'billing_cycle' => 'getBillingCycle',
        'cost' => 'getCost',
        'cycle' => 'getCycle',
        'description' => 'getDescription',
        'discount' => 'getDiscount',
        'frequency' => 'getFrequency',
        'id' => 'getId',
        'name' => 'getName',
        'notes' => 'getNotes',
        'number_of_payments' => 'getNumberOfPayments',
        'order_item_taxes' => 'getOrderItemTaxes',
        'price' => 'getPrice',
        'product' => 'getProduct',
        'quantity' => 'getQuantity',
        'special' => 'getSpecial',
        'subscription' => 'getSubscription',
        'subscription_based' => 'getSubscriptionBased',
        'subscription_id' => 'getSubscriptionId',
        'subscription_plan' => 'getSubscriptionPlan',
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

    public const CYCLE_DAILY = 'DAILY';
    public const CYCLE_WEEKLY = 'WEEKLY';
    public const CYCLE_MONTHLY = 'MONTHLY';
    public const CYCLE_YEARLY = 'YEARLY';
    public const TYPE_UNKNOWN = 'UNKNOWN';
    public const TYPE_SHIPPING = 'SHIPPING';
    public const TYPE_TAX = 'TAX';
    public const TYPE_SERVICE = 'SERVICE';
    public const TYPE_PRODUCT = 'PRODUCT';
    public const TYPE_UPSELL = 'UPSELL';
    public const TYPE_FINANCE_CHARGE = 'FINANCE_CHARGE';
    public const TYPE_SPECIAL = 'SPECIAL';
    public const TYPE_PROGRAM = 'PROGRAM';
    public const TYPE_SUBSCRIPTION = 'SUBSCRIPTION';
    public const TYPE_SPECIAL_FREE_TRIAL_DAYS = 'SPECIAL_FREE_TRIAL_DAYS';
    public const TYPE_SPECIAL_ORDER_TOTAL = 'SPECIAL_ORDER_TOTAL';
    public const TYPE_SPECIAL_PRODUCT = 'SPECIAL_PRODUCT';
    public const TYPE_SPECIAL_CATEGORY = 'SPECIAL_CATEGORY';
    public const TYPE_SPECIAL_SHIPPING = 'SPECIAL_SHIPPING';
    public const TYPE_TIP = 'TIP';
    public const TYPE_OTHER = 'OTHER';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getCycleAllowableValues()
    {
        return [
            self::CYCLE_DAILY,
            self::CYCLE_WEEKLY,
            self::CYCLE_MONTHLY,
            self::CYCLE_YEARLY,
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
            self::TYPE_UNKNOWN,
            self::TYPE_SHIPPING,
            self::TYPE_TAX,
            self::TYPE_SERVICE,
            self::TYPE_PRODUCT,
            self::TYPE_UPSELL,
            self::TYPE_FINANCE_CHARGE,
            self::TYPE_SPECIAL,
            self::TYPE_PROGRAM,
            self::TYPE_SUBSCRIPTION,
            self::TYPE_SPECIAL_FREE_TRIAL_DAYS,
            self::TYPE_SPECIAL_ORDER_TOTAL,
            self::TYPE_SPECIAL_PRODUCT,
            self::TYPE_SPECIAL_CATEGORY,
            self::TYPE_SPECIAL_SHIPPING,
            self::TYPE_TIP,
            self::TYPE_OTHER,
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
        $this->setIfExists('billing_cycle', $data ?? [], null);
        $this->setIfExists('cost', $data ?? [], null);
        $this->setIfExists('cycle', $data ?? [], null);
        $this->setIfExists('description', $data ?? [], null);
        $this->setIfExists('discount', $data ?? [], null);
        $this->setIfExists('frequency', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('notes', $data ?? [], null);
        $this->setIfExists('number_of_payments', $data ?? [], null);
        $this->setIfExists('order_item_taxes', $data ?? [], null);
        $this->setIfExists('price', $data ?? [], null);
        $this->setIfExists('product', $data ?? [], null);
        $this->setIfExists('quantity', $data ?? [], null);
        $this->setIfExists('special', $data ?? [], null);
        $this->setIfExists('subscription', $data ?? [], null);
        $this->setIfExists('subscription_based', $data ?? [], null);
        $this->setIfExists('subscription_id', $data ?? [], null);
        $this->setIfExists('subscription_plan', $data ?? [], null);
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

        $allowedValues = $this->getCycleAllowableValues();
        if (!is_null($this->container['cycle']) && !in_array($this->container['cycle'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'cycle', must be one of '%s'",
                $this->container['cycle'],
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
     * Gets billing_cycle
     *
     * @return int|null
     */
    public function getBillingCycle()
    {
        return $this->container['billing_cycle'];
    }

    /**
     * Sets billing_cycle
     *
     * @param int|null $billing_cycle billing_cycle
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
     * Gets cost
     *
     * @return float|null
     */
    public function getCost()
    {
        return $this->container['cost'];
    }

    /**
     * Sets cost
     *
     * @param float|null $cost cost
     *
     * @return self
     */
    public function setCost($cost)
    {
        if (is_null($cost)) {
            throw new \InvalidArgumentException('non-nullable cost cannot be null');
        }
        $this->container['cost'] = $cost;

        return $this;
    }

    /**
     * Gets cycle
     *
     * @return string|null
     */
    public function getCycle()
    {
        return $this->container['cycle'];
    }

    /**
     * Sets cycle
     *
     * @param string|null $cycle The interval at which the customer is charged for the subscription.
     *
     * @return self
     */
    public function setCycle($cycle)
    {
        if (is_null($cycle)) {
            throw new \InvalidArgumentException('non-nullable cycle cannot be null');
        }
        $allowedValues = $this->getCycleAllowableValues();
        if (!in_array($cycle, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'cycle', must be one of '%s'",
                    $cycle,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['cycle'] = $cycle;

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
     * Gets discount
     *
     * @return float|null
     */
    public function getDiscount()
    {
        return $this->container['discount'];
    }

    /**
     * Sets discount
     *
     * @param float|null $discount discount
     *
     * @return self
     */
    public function setDiscount($discount)
    {
        if (is_null($discount)) {
            throw new \InvalidArgumentException('non-nullable discount cannot be null');
        }
        $this->container['discount'] = $discount;

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
     * @param int|null $frequency Interval at which a customer receives a product or service as part of a subscription plan.
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
     * @param string|null $notes notes
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
     * Gets number_of_payments
     *
     * @return int|null
     */
    public function getNumberOfPayments()
    {
        return $this->container['number_of_payments'];
    }

    /**
     * Sets number_of_payments
     *
     * @param int|null $number_of_payments number_of_payments
     *
     * @return self
     */
    public function setNumberOfPayments($number_of_payments)
    {
        if (is_null($number_of_payments)) {
            throw new \InvalidArgumentException('non-nullable number_of_payments cannot be null');
        }
        $this->container['number_of_payments'] = $number_of_payments;

        return $this;
    }

    /**
     * Gets order_item_taxes
     *
     * @return \Keap\Sdk\Core\Model\OrderItemTax[]|null
     */
    public function getOrderItemTaxes()
    {
        return $this->container['order_item_taxes'];
    }

    /**
     * Sets order_item_taxes
     *
     * @param \Keap\Sdk\Core\Model\OrderItemTax[]|null $order_item_taxes order_item_taxes
     *
     * @return self
     */
    public function setOrderItemTaxes($order_item_taxes)
    {
        if (is_null($order_item_taxes)) {
            throw new \InvalidArgumentException('non-nullable order_item_taxes cannot be null');
        }
        $this->container['order_item_taxes'] = $order_item_taxes;

        return $this;
    }

    /**
     * Gets price
     *
     * @return float|null
     */
    public function getPrice()
    {
        return $this->container['price'];
    }

    /**
     * Sets price
     *
     * @param float|null $price price
     *
     * @return self
     */
    public function setPrice($price)
    {
        if (is_null($price)) {
            throw new \InvalidArgumentException('non-nullable price cannot be null');
        }
        $this->container['price'] = $price;

        return $this;
    }

    /**
     * Gets product
     *
     * @return \Keap\Sdk\Core\Model\OrderItemProduct|null
     */
    public function getProduct()
    {
        return $this->container['product'];
    }

    /**
     * Sets product
     *
     * @param \Keap\Sdk\Core\Model\OrderItemProduct|null $product product
     *
     * @return self
     */
    public function setProduct($product)
    {
        if (is_null($product)) {
            throw new \InvalidArgumentException('non-nullable product cannot be null');
        }
        $this->container['product'] = $product;

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
     * Gets special
     *
     * @return \Keap\Sdk\Core\Model\Discount|null
     */
    public function getSpecial()
    {
        return $this->container['special'];
    }

    /**
     * Sets special
     *
     * @param \Keap\Sdk\Core\Model\Discount|null $special special
     *
     * @return self
     */
    public function setSpecial($special)
    {
        if (is_null($special)) {
            throw new \InvalidArgumentException('non-nullable special cannot be null');
        }
        $this->container['special'] = $special;

        return $this;
    }

    /**
     * Gets subscription
     *
     * @return \Keap\Sdk\Core\Model\RestV2Subscription|null
     */
    public function getSubscription()
    {
        return $this->container['subscription'];
    }

    /**
     * Sets subscription
     *
     * @param \Keap\Sdk\Core\Model\RestV2Subscription|null $subscription subscription
     *
     * @return self
     */
    public function setSubscription($subscription)
    {
        if (is_null($subscription)) {
            throw new \InvalidArgumentException('non-nullable subscription cannot be null');
        }
        $this->container['subscription'] = $subscription;

        return $this;
    }

    /**
     * Gets subscription_based
     *
     * @return bool|null
     */
    public function getSubscriptionBased()
    {
        return $this->container['subscription_based'];
    }

    /**
     * Sets subscription_based
     *
     * @param bool|null $subscription_based subscription_based
     *
     * @return self
     */
    public function setSubscriptionBased($subscription_based)
    {
        if (is_null($subscription_based)) {
            throw new \InvalidArgumentException('non-nullable subscription_based cannot be null');
        }
        $this->container['subscription_based'] = $subscription_based;

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
     * Gets subscription_plan
     *
     * @return \Keap\Sdk\Core\Model\RestSubscriptionPlan|null
     */
    public function getSubscriptionPlan()
    {
        return $this->container['subscription_plan'];
    }

    /**
     * Sets subscription_plan
     *
     * @param \Keap\Sdk\Core\Model\RestSubscriptionPlan|null $subscription_plan subscription_plan
     *
     * @return self
     */
    public function setSubscriptionPlan($subscription_plan)
    {
        if (is_null($subscription_plan)) {
            throw new \InvalidArgumentException('non-nullable subscription_plan cannot be null');
        }
        $this->container['subscription_plan'] = $subscription_plan;

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


