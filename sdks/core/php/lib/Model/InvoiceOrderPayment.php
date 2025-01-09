<?php
/**
 * InvoiceOrderPayment
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
 * InvoiceOrderPayment Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class InvoiceOrderPayment implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'InvoiceOrderPayment';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'amount' => 'float',
        'id' => 'string',
        'invoice_id' => 'string',
        'last_updated_time' => 'string',
        'note' => 'string',
        'pay_status' => 'string',
        'pay_time' => 'string',
        'payment_id' => 'string',
        'refund_invoice_payment_id' => 'string',
        'skip_commission' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'amount' => null,
        'id' => null,
        'invoice_id' => null,
        'last_updated_time' => null,
        'note' => null,
        'pay_status' => null,
        'pay_time' => null,
        'payment_id' => null,
        'refund_invoice_payment_id' => null,
        'skip_commission' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'amount' => false,
        'id' => false,
        'invoice_id' => false,
        'last_updated_time' => false,
        'note' => false,
        'pay_status' => false,
        'pay_time' => false,
        'payment_id' => false,
        'refund_invoice_payment_id' => false,
        'skip_commission' => false
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
        'amount' => 'amount',
        'id' => 'id',
        'invoice_id' => 'invoice_id',
        'last_updated_time' => 'last_updated_time',
        'note' => 'note',
        'pay_status' => 'pay_status',
        'pay_time' => 'pay_time',
        'payment_id' => 'payment_id',
        'refund_invoice_payment_id' => 'refund_invoice_payment_id',
        'skip_commission' => 'skip_commission'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'amount' => 'setAmount',
        'id' => 'setId',
        'invoice_id' => 'setInvoiceId',
        'last_updated_time' => 'setLastUpdatedTime',
        'note' => 'setNote',
        'pay_status' => 'setPayStatus',
        'pay_time' => 'setPayTime',
        'payment_id' => 'setPaymentId',
        'refund_invoice_payment_id' => 'setRefundInvoicePaymentId',
        'skip_commission' => 'setSkipCommission'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'amount' => 'getAmount',
        'id' => 'getId',
        'invoice_id' => 'getInvoiceId',
        'last_updated_time' => 'getLastUpdatedTime',
        'note' => 'getNote',
        'pay_status' => 'getPayStatus',
        'pay_time' => 'getPayTime',
        'payment_id' => 'getPaymentId',
        'refund_invoice_payment_id' => 'getRefundInvoicePaymentId',
        'skip_commission' => 'getSkipCommission'
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

    public const PAY_STATUS_MANUAL_PAID = 'MANUAL_PAID';
    public const PAY_STATUS_REFUNDED = 'REFUNDED';
    public const PAY_STATUS_VOIDED = 'VOIDED';
    public const PAY_STATUS_PAYPAL_PAID = 'PAYPAL_PAID';
    public const PAY_STATUS_APPROVED = 'APPROVED';
    public const PAY_STATUS_FAILED = 'FAILED';
    public const PAY_STATUS_ERROR = 'ERROR';
    public const PAY_STATUS_PENDING = 'PENDING';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getPayStatusAllowableValues()
    {
        return [
            self::PAY_STATUS_MANUAL_PAID,
            self::PAY_STATUS_REFUNDED,
            self::PAY_STATUS_VOIDED,
            self::PAY_STATUS_PAYPAL_PAID,
            self::PAY_STATUS_APPROVED,
            self::PAY_STATUS_FAILED,
            self::PAY_STATUS_ERROR,
            self::PAY_STATUS_PENDING,
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
        $this->setIfExists('amount', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('invoice_id', $data ?? [], null);
        $this->setIfExists('last_updated_time', $data ?? [], null);
        $this->setIfExists('note', $data ?? [], null);
        $this->setIfExists('pay_status', $data ?? [], null);
        $this->setIfExists('pay_time', $data ?? [], null);
        $this->setIfExists('payment_id', $data ?? [], null);
        $this->setIfExists('refund_invoice_payment_id', $data ?? [], null);
        $this->setIfExists('skip_commission', $data ?? [], null);
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

        $allowedValues = $this->getPayStatusAllowableValues();
        if (!is_null($this->container['pay_status']) && !in_array($this->container['pay_status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'pay_status', must be one of '%s'",
                $this->container['pay_status'],
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
     * Gets amount
     *
     * @return float|null
     */
    public function getAmount()
    {
        return $this->container['amount'];
    }

    /**
     * Sets amount
     *
     * @param float|null $amount amount
     *
     * @return self
     */
    public function setAmount($amount)
    {
        if (is_null($amount)) {
            throw new \InvalidArgumentException('non-nullable amount cannot be null');
        }
        $this->container['amount'] = $amount;

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
     * Gets invoice_id
     *
     * @return string|null
     */
    public function getInvoiceId()
    {
        return $this->container['invoice_id'];
    }

    /**
     * Sets invoice_id
     *
     * @param string|null $invoice_id invoice_id
     *
     * @return self
     */
    public function setInvoiceId($invoice_id)
    {
        if (is_null($invoice_id)) {
            throw new \InvalidArgumentException('non-nullable invoice_id cannot be null');
        }
        $this->container['invoice_id'] = $invoice_id;

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
     * Gets note
     *
     * @return string|null
     */
    public function getNote()
    {
        return $this->container['note'];
    }

    /**
     * Sets note
     *
     * @param string|null $note note
     *
     * @return self
     */
    public function setNote($note)
    {
        if (is_null($note)) {
            throw new \InvalidArgumentException('non-nullable note cannot be null');
        }
        $this->container['note'] = $note;

        return $this;
    }

    /**
     * Gets pay_status
     *
     * @return string|null
     */
    public function getPayStatus()
    {
        return $this->container['pay_status'];
    }

    /**
     * Sets pay_status
     *
     * @param string|null $pay_status pay_status
     *
     * @return self
     */
    public function setPayStatus($pay_status)
    {
        if (is_null($pay_status)) {
            throw new \InvalidArgumentException('non-nullable pay_status cannot be null');
        }
        $allowedValues = $this->getPayStatusAllowableValues();
        if (!in_array($pay_status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'pay_status', must be one of '%s'",
                    $pay_status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['pay_status'] = $pay_status;

        return $this;
    }

    /**
     * Gets pay_time
     *
     * @return string|null
     */
    public function getPayTime()
    {
        return $this->container['pay_time'];
    }

    /**
     * Sets pay_time
     *
     * @param string|null $pay_time pay_time
     *
     * @return self
     */
    public function setPayTime($pay_time)
    {
        if (is_null($pay_time)) {
            throw new \InvalidArgumentException('non-nullable pay_time cannot be null');
        }
        $this->container['pay_time'] = $pay_time;

        return $this;
    }

    /**
     * Gets payment_id
     *
     * @return string|null
     */
    public function getPaymentId()
    {
        return $this->container['payment_id'];
    }

    /**
     * Sets payment_id
     *
     * @param string|null $payment_id payment_id
     *
     * @return self
     */
    public function setPaymentId($payment_id)
    {
        if (is_null($payment_id)) {
            throw new \InvalidArgumentException('non-nullable payment_id cannot be null');
        }
        $this->container['payment_id'] = $payment_id;

        return $this;
    }

    /**
     * Gets refund_invoice_payment_id
     *
     * @return string|null
     */
    public function getRefundInvoicePaymentId()
    {
        return $this->container['refund_invoice_payment_id'];
    }

    /**
     * Sets refund_invoice_payment_id
     *
     * @param string|null $refund_invoice_payment_id refund_invoice_payment_id
     *
     * @return self
     */
    public function setRefundInvoicePaymentId($refund_invoice_payment_id)
    {
        if (is_null($refund_invoice_payment_id)) {
            throw new \InvalidArgumentException('non-nullable refund_invoice_payment_id cannot be null');
        }
        $this->container['refund_invoice_payment_id'] = $refund_invoice_payment_id;

        return $this;
    }

    /**
     * Gets skip_commission
     *
     * @return bool|null
     */
    public function getSkipCommission()
    {
        return $this->container['skip_commission'];
    }

    /**
     * Sets skip_commission
     *
     * @param bool|null $skip_commission skip_commission
     *
     * @return self
     */
    public function setSkipCommission($skip_commission)
    {
        if (is_null($skip_commission)) {
            throw new \InvalidArgumentException('non-nullable skip_commission cannot be null');
        }
        $this->container['skip_commission'] = $skip_commission;

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


