<?php
/**
 * PaymentPlan
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
 * The version of the OpenAPI document: 2.70.0.752995
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
 * PaymentPlan Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PaymentPlan implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PaymentPlan';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'auto_charge' => 'bool',
        'credit_card_id' => 'string',
        'days_between_payments' => 'int',
        'initial_payment_amount' => 'float',
        'initial_payment_date' => 'string',
        'initial_payment_percent' => 'float',
        'number_of_payments' => 'int',
        'payment_gateway' => '\Com\Keap\Sdk\Core\Model\RestPaymentGateway',
        'payment_method_id' => 'string',
        'plan_start_date' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'auto_charge' => null,
        'credit_card_id' => null,
        'days_between_payments' => 'int64',
        'initial_payment_amount' => 'double',
        'initial_payment_date' => null,
        'initial_payment_percent' => 'double',
        'number_of_payments' => 'int64',
        'payment_gateway' => null,
        'payment_method_id' => null,
        'plan_start_date' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'auto_charge' => false,
        'credit_card_id' => false,
        'days_between_payments' => false,
        'initial_payment_amount' => false,
        'initial_payment_date' => false,
        'initial_payment_percent' => false,
        'number_of_payments' => false,
        'payment_gateway' => false,
        'payment_method_id' => false,
        'plan_start_date' => false
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
        'auto_charge' => 'auto_charge',
        'credit_card_id' => 'credit_card_id',
        'days_between_payments' => 'days_between_payments',
        'initial_payment_amount' => 'initial_payment_amount',
        'initial_payment_date' => 'initial_payment_date',
        'initial_payment_percent' => 'initial_payment_percent',
        'number_of_payments' => 'number_of_payments',
        'payment_gateway' => 'payment_gateway',
        'payment_method_id' => 'payment_method_id',
        'plan_start_date' => 'plan_start_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'auto_charge' => 'setAutoCharge',
        'credit_card_id' => 'setCreditCardId',
        'days_between_payments' => 'setDaysBetweenPayments',
        'initial_payment_amount' => 'setInitialPaymentAmount',
        'initial_payment_date' => 'setInitialPaymentDate',
        'initial_payment_percent' => 'setInitialPaymentPercent',
        'number_of_payments' => 'setNumberOfPayments',
        'payment_gateway' => 'setPaymentGateway',
        'payment_method_id' => 'setPaymentMethodId',
        'plan_start_date' => 'setPlanStartDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'auto_charge' => 'getAutoCharge',
        'credit_card_id' => 'getCreditCardId',
        'days_between_payments' => 'getDaysBetweenPayments',
        'initial_payment_amount' => 'getInitialPaymentAmount',
        'initial_payment_date' => 'getInitialPaymentDate',
        'initial_payment_percent' => 'getInitialPaymentPercent',
        'number_of_payments' => 'getNumberOfPayments',
        'payment_gateway' => 'getPaymentGateway',
        'payment_method_id' => 'getPaymentMethodId',
        'plan_start_date' => 'getPlanStartDate'
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
        $this->setIfExists('auto_charge', $data ?? [], null);
        $this->setIfExists('credit_card_id', $data ?? [], null);
        $this->setIfExists('days_between_payments', $data ?? [], null);
        $this->setIfExists('initial_payment_amount', $data ?? [], null);
        $this->setIfExists('initial_payment_date', $data ?? [], null);
        $this->setIfExists('initial_payment_percent', $data ?? [], null);
        $this->setIfExists('number_of_payments', $data ?? [], null);
        $this->setIfExists('payment_gateway', $data ?? [], null);
        $this->setIfExists('payment_method_id', $data ?? [], null);
        $this->setIfExists('plan_start_date', $data ?? [], null);
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

        if ($this->container['days_between_payments'] === null) {
            $invalidProperties[] = "'days_between_payments' can't be null";
        }
        if ($this->container['number_of_payments'] === null) {
            $invalidProperties[] = "'number_of_payments' can't be null";
        }
        if ($this->container['plan_start_date'] === null) {
            $invalidProperties[] = "'plan_start_date' can't be null";
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
     * Gets credit_card_id
     *
     * @return string|null
     */
    public function getCreditCardId()
    {
        return $this->container['credit_card_id'];
    }

    /**
     * Sets credit_card_id
     *
     * @param string|null $credit_card_id credit_card_id
     *
     * @return self
     */
    public function setCreditCardId($credit_card_id)
    {
        if (is_null($credit_card_id)) {
            throw new \InvalidArgumentException('non-nullable credit_card_id cannot be null');
        }
        $this->container['credit_card_id'] = $credit_card_id;

        return $this;
    }

    /**
     * Gets days_between_payments
     *
     * @return int
     */
    public function getDaysBetweenPayments()
    {
        return $this->container['days_between_payments'];
    }

    /**
     * Sets days_between_payments
     *
     * @param int $days_between_payments days_between_payments
     *
     * @return self
     */
    public function setDaysBetweenPayments($days_between_payments)
    {
        if (is_null($days_between_payments)) {
            throw new \InvalidArgumentException('non-nullable days_between_payments cannot be null');
        }
        $this->container['days_between_payments'] = $days_between_payments;

        return $this;
    }

    /**
     * Gets initial_payment_amount
     *
     * @return float|null
     */
    public function getInitialPaymentAmount()
    {
        return $this->container['initial_payment_amount'];
    }

    /**
     * Sets initial_payment_amount
     *
     * @param float|null $initial_payment_amount initial_payment_amount
     *
     * @return self
     */
    public function setInitialPaymentAmount($initial_payment_amount)
    {
        if (is_null($initial_payment_amount)) {
            throw new \InvalidArgumentException('non-nullable initial_payment_amount cannot be null');
        }
        $this->container['initial_payment_amount'] = $initial_payment_amount;

        return $this;
    }

    /**
     * Gets initial_payment_date
     *
     * @return string|null
     */
    public function getInitialPaymentDate()
    {
        return $this->container['initial_payment_date'];
    }

    /**
     * Sets initial_payment_date
     *
     * @param string|null $initial_payment_date initial_payment_date
     *
     * @return self
     */
    public function setInitialPaymentDate($initial_payment_date)
    {
        if (is_null($initial_payment_date)) {
            throw new \InvalidArgumentException('non-nullable initial_payment_date cannot be null');
        }
        $this->container['initial_payment_date'] = $initial_payment_date;

        return $this;
    }

    /**
     * Gets initial_payment_percent
     *
     * @return float|null
     */
    public function getInitialPaymentPercent()
    {
        return $this->container['initial_payment_percent'];
    }

    /**
     * Sets initial_payment_percent
     *
     * @param float|null $initial_payment_percent initial_payment_percent
     *
     * @return self
     */
    public function setInitialPaymentPercent($initial_payment_percent)
    {
        if (is_null($initial_payment_percent)) {
            throw new \InvalidArgumentException('non-nullable initial_payment_percent cannot be null');
        }
        $this->container['initial_payment_percent'] = $initial_payment_percent;

        return $this;
    }

    /**
     * Gets number_of_payments
     *
     * @return int
     */
    public function getNumberOfPayments()
    {
        return $this->container['number_of_payments'];
    }

    /**
     * Sets number_of_payments
     *
     * @param int $number_of_payments number_of_payments
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
     * Gets payment_gateway
     *
     * @return \Com\Keap\Sdk\Core\Model\RestPaymentGateway|null
     */
    public function getPaymentGateway()
    {
        return $this->container['payment_gateway'];
    }

    /**
     * Sets payment_gateway
     *
     * @param \Com\Keap\Sdk\Core\Model\RestPaymentGateway|null $payment_gateway payment_gateway
     *
     * @return self
     */
    public function setPaymentGateway($payment_gateway)
    {
        if (is_null($payment_gateway)) {
            throw new \InvalidArgumentException('non-nullable payment_gateway cannot be null');
        }
        $this->container['payment_gateway'] = $payment_gateway;

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
     * Gets plan_start_date
     *
     * @return string
     */
    public function getPlanStartDate()
    {
        return $this->container['plan_start_date'];
    }

    /**
     * Sets plan_start_date
     *
     * @param string $plan_start_date plan_start_date
     *
     * @return self
     */
    public function setPlanStartDate($plan_start_date)
    {
        if (is_null($plan_start_date)) {
            throw new \InvalidArgumentException('non-nullable plan_start_date cannot be null');
        }
        $this->container['plan_start_date'] = $plan_start_date;

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


