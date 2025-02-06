<?php
/**
 * RestV2Order
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
 * RestV2Order Class Doc Comment
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class RestV2Order implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'RestV2Order';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'allow_payment' => 'bool',
        'allow_paypal' => 'bool',
        'contact' => '\Keap\Sdk\Core\Model\BasicContact',
        'creation_time' => 'string',
        'id' => 'string',
        'invoice_number' => 'string',
        'lead_affiliate_id' => 'string',
        'modification_time' => 'string',
        'notes' => 'string',
        'order_items' => '\Keap\Sdk\Core\Model\RestV2OrderItem[]',
        'order_time' => 'string',
        'order_type' => 'string',
        'payment_plan' => '\Keap\Sdk\Core\Model\PaymentPlan',
        'recurring' => 'bool',
        'refund_total' => 'float',
        'sales_affiliate_id' => 'string',
        'shipping_information' => '\Keap\Sdk\Core\Model\ShippingInformation',
        'source_type' => 'string',
        'status' => 'string',
        'terms' => 'string',
        'title' => 'string',
        'total' => 'float',
        'total_due' => 'float',
        'total_paid' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'allow_payment' => null,
        'allow_paypal' => null,
        'contact' => null,
        'creation_time' => null,
        'id' => null,
        'invoice_number' => null,
        'lead_affiliate_id' => null,
        'modification_time' => null,
        'notes' => null,
        'order_items' => null,
        'order_time' => null,
        'order_type' => null,
        'payment_plan' => null,
        'recurring' => null,
        'refund_total' => 'double',
        'sales_affiliate_id' => null,
        'shipping_information' => null,
        'source_type' => null,
        'status' => null,
        'terms' => null,
        'title' => null,
        'total' => 'double',
        'total_due' => 'double',
        'total_paid' => 'double'
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'allow_payment' => false,
        'allow_paypal' => false,
        'contact' => false,
        'creation_time' => false,
        'id' => false,
        'invoice_number' => false,
        'lead_affiliate_id' => false,
        'modification_time' => false,
        'notes' => false,
        'order_items' => false,
        'order_time' => false,
        'order_type' => false,
        'payment_plan' => false,
        'recurring' => false,
        'refund_total' => false,
        'sales_affiliate_id' => false,
        'shipping_information' => false,
        'source_type' => false,
        'status' => false,
        'terms' => false,
        'title' => false,
        'total' => false,
        'total_due' => false,
        'total_paid' => false
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
        'allow_payment' => 'allow_payment',
        'allow_paypal' => 'allow_paypal',
        'contact' => 'contact',
        'creation_time' => 'creation_time',
        'id' => 'id',
        'invoice_number' => 'invoice_number',
        'lead_affiliate_id' => 'lead_affiliate_id',
        'modification_time' => 'modification_time',
        'notes' => 'notes',
        'order_items' => 'order_items',
        'order_time' => 'order_time',
        'order_type' => 'order_type',
        'payment_plan' => 'payment_plan',
        'recurring' => 'recurring',
        'refund_total' => 'refund_total',
        'sales_affiliate_id' => 'sales_affiliate_id',
        'shipping_information' => 'shipping_information',
        'source_type' => 'source_type',
        'status' => 'status',
        'terms' => 'terms',
        'title' => 'title',
        'total' => 'total',
        'total_due' => 'total_due',
        'total_paid' => 'total_paid'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'allow_payment' => 'setAllowPayment',
        'allow_paypal' => 'setAllowPaypal',
        'contact' => 'setContact',
        'creation_time' => 'setCreationTime',
        'id' => 'setId',
        'invoice_number' => 'setInvoiceNumber',
        'lead_affiliate_id' => 'setLeadAffiliateId',
        'modification_time' => 'setModificationTime',
        'notes' => 'setNotes',
        'order_items' => 'setOrderItems',
        'order_time' => 'setOrderTime',
        'order_type' => 'setOrderType',
        'payment_plan' => 'setPaymentPlan',
        'recurring' => 'setRecurring',
        'refund_total' => 'setRefundTotal',
        'sales_affiliate_id' => 'setSalesAffiliateId',
        'shipping_information' => 'setShippingInformation',
        'source_type' => 'setSourceType',
        'status' => 'setStatus',
        'terms' => 'setTerms',
        'title' => 'setTitle',
        'total' => 'setTotal',
        'total_due' => 'setTotalDue',
        'total_paid' => 'setTotalPaid'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'allow_payment' => 'getAllowPayment',
        'allow_paypal' => 'getAllowPaypal',
        'contact' => 'getContact',
        'creation_time' => 'getCreationTime',
        'id' => 'getId',
        'invoice_number' => 'getInvoiceNumber',
        'lead_affiliate_id' => 'getLeadAffiliateId',
        'modification_time' => 'getModificationTime',
        'notes' => 'getNotes',
        'order_items' => 'getOrderItems',
        'order_time' => 'getOrderTime',
        'order_type' => 'getOrderType',
        'payment_plan' => 'getPaymentPlan',
        'recurring' => 'getRecurring',
        'refund_total' => 'getRefundTotal',
        'sales_affiliate_id' => 'getSalesAffiliateId',
        'shipping_information' => 'getShippingInformation',
        'source_type' => 'getSourceType',
        'status' => 'getStatus',
        'terms' => 'getTerms',
        'title' => 'getTitle',
        'total' => 'getTotal',
        'total_due' => 'getTotalDue',
        'total_paid' => 'getTotalPaid'
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

    public const SOURCE_TYPE_INVOICE = 'INVOICE';
    public const SOURCE_TYPE_API = 'API';
    public const SOURCE_TYPE_CHECKOUT_FORM = 'CHECKOUT_FORM';
    public const SOURCE_TYPE_MANUAL_PAYMENT = 'MANUAL_PAYMENT';
    public const SOURCE_TYPE_UNKNOWN = 'UNKNOWN';
    public const SOURCE_TYPE_QBO_SYNC = 'QBO_SYNC';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getSourceTypeAllowableValues()
    {
        return [
            self::SOURCE_TYPE_INVOICE,
            self::SOURCE_TYPE_API,
            self::SOURCE_TYPE_CHECKOUT_FORM,
            self::SOURCE_TYPE_MANUAL_PAYMENT,
            self::SOURCE_TYPE_UNKNOWN,
            self::SOURCE_TYPE_QBO_SYNC,
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
        $this->setIfExists('allow_payment', $data ?? [], null);
        $this->setIfExists('allow_paypal', $data ?? [], null);
        $this->setIfExists('contact', $data ?? [], null);
        $this->setIfExists('creation_time', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('invoice_number', $data ?? [], null);
        $this->setIfExists('lead_affiliate_id', $data ?? [], null);
        $this->setIfExists('modification_time', $data ?? [], null);
        $this->setIfExists('notes', $data ?? [], null);
        $this->setIfExists('order_items', $data ?? [], null);
        $this->setIfExists('order_time', $data ?? [], null);
        $this->setIfExists('order_type', $data ?? [], null);
        $this->setIfExists('payment_plan', $data ?? [], null);
        $this->setIfExists('recurring', $data ?? [], null);
        $this->setIfExists('refund_total', $data ?? [], null);
        $this->setIfExists('sales_affiliate_id', $data ?? [], null);
        $this->setIfExists('shipping_information', $data ?? [], null);
        $this->setIfExists('source_type', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('terms', $data ?? [], null);
        $this->setIfExists('title', $data ?? [], null);
        $this->setIfExists('total', $data ?? [], null);
        $this->setIfExists('total_due', $data ?? [], null);
        $this->setIfExists('total_paid', $data ?? [], null);
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

        $allowedValues = $this->getSourceTypeAllowableValues();
        if (!is_null($this->container['source_type']) && !in_array($this->container['source_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'source_type', must be one of '%s'",
                $this->container['source_type'],
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
     * Gets allow_payment
     *
     * @return bool|null
     */
    public function getAllowPayment()
    {
        return $this->container['allow_payment'];
    }

    /**
     * Sets allow_payment
     *
     * @param bool|null $allow_payment allow_payment
     *
     * @return self
     */
    public function setAllowPayment($allow_payment)
    {
        if (is_null($allow_payment)) {
            throw new \InvalidArgumentException('non-nullable allow_payment cannot be null');
        }
        $this->container['allow_payment'] = $allow_payment;

        return $this;
    }

    /**
     * Gets allow_paypal
     *
     * @return bool|null
     */
    public function getAllowPaypal()
    {
        return $this->container['allow_paypal'];
    }

    /**
     * Sets allow_paypal
     *
     * @param bool|null $allow_paypal allow_paypal
     *
     * @return self
     */
    public function setAllowPaypal($allow_paypal)
    {
        if (is_null($allow_paypal)) {
            throw new \InvalidArgumentException('non-nullable allow_paypal cannot be null');
        }
        $this->container['allow_paypal'] = $allow_paypal;

        return $this;
    }

    /**
     * Gets contact
     *
     * @return \Keap\Sdk\Core\Model\BasicContact|null
     */
    public function getContact()
    {
        return $this->container['contact'];
    }

    /**
     * Sets contact
     *
     * @param \Keap\Sdk\Core\Model\BasicContact|null $contact contact
     *
     * @return self
     */
    public function setContact($contact)
    {
        if (is_null($contact)) {
            throw new \InvalidArgumentException('non-nullable contact cannot be null');
        }
        $this->container['contact'] = $contact;

        return $this;
    }

    /**
     * Gets creation_time
     *
     * @return string|null
     */
    public function getCreationTime()
    {
        return $this->container['creation_time'];
    }

    /**
     * Sets creation_time
     *
     * @param string|null $creation_time creation_time
     *
     * @return self
     */
    public function setCreationTime($creation_time)
    {
        if (is_null($creation_time)) {
            throw new \InvalidArgumentException('non-nullable creation_time cannot be null');
        }
        $this->container['creation_time'] = $creation_time;

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
     * Gets invoice_number
     *
     * @return string|null
     */
    public function getInvoiceNumber()
    {
        return $this->container['invoice_number'];
    }

    /**
     * Sets invoice_number
     *
     * @param string|null $invoice_number invoice_number
     *
     * @return self
     */
    public function setInvoiceNumber($invoice_number)
    {
        if (is_null($invoice_number)) {
            throw new \InvalidArgumentException('non-nullable invoice_number cannot be null');
        }
        $this->container['invoice_number'] = $invoice_number;

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
     * Gets modification_time
     *
     * @return string|null
     */
    public function getModificationTime()
    {
        return $this->container['modification_time'];
    }

    /**
     * Sets modification_time
     *
     * @param string|null $modification_time modification_time
     *
     * @return self
     */
    public function setModificationTime($modification_time)
    {
        if (is_null($modification_time)) {
            throw new \InvalidArgumentException('non-nullable modification_time cannot be null');
        }
        $this->container['modification_time'] = $modification_time;

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
     * Gets order_items
     *
     * @return \Keap\Sdk\Core\Model\RestV2OrderItem[]|null
     */
    public function getOrderItems()
    {
        return $this->container['order_items'];
    }

    /**
     * Sets order_items
     *
     * @param \Keap\Sdk\Core\Model\RestV2OrderItem[]|null $order_items order_items
     *
     * @return self
     */
    public function setOrderItems($order_items)
    {
        if (is_null($order_items)) {
            throw new \InvalidArgumentException('non-nullable order_items cannot be null');
        }
        $this->container['order_items'] = $order_items;

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
        $this->container['order_type'] = $order_type;

        return $this;
    }

    /**
     * Gets payment_plan
     *
     * @return \Keap\Sdk\Core\Model\PaymentPlan|null
     */
    public function getPaymentPlan()
    {
        return $this->container['payment_plan'];
    }

    /**
     * Sets payment_plan
     *
     * @param \Keap\Sdk\Core\Model\PaymentPlan|null $payment_plan payment_plan
     *
     * @return self
     */
    public function setPaymentPlan($payment_plan)
    {
        if (is_null($payment_plan)) {
            throw new \InvalidArgumentException('non-nullable payment_plan cannot be null');
        }
        $this->container['payment_plan'] = $payment_plan;

        return $this;
    }

    /**
     * Gets recurring
     *
     * @return bool|null
     */
    public function getRecurring()
    {
        return $this->container['recurring'];
    }

    /**
     * Sets recurring
     *
     * @param bool|null $recurring recurring
     *
     * @return self
     */
    public function setRecurring($recurring)
    {
        if (is_null($recurring)) {
            throw new \InvalidArgumentException('non-nullable recurring cannot be null');
        }
        $this->container['recurring'] = $recurring;

        return $this;
    }

    /**
     * Gets refund_total
     *
     * @return float|null
     */
    public function getRefundTotal()
    {
        return $this->container['refund_total'];
    }

    /**
     * Sets refund_total
     *
     * @param float|null $refund_total refund_total
     *
     * @return self
     */
    public function setRefundTotal($refund_total)
    {
        if (is_null($refund_total)) {
            throw new \InvalidArgumentException('non-nullable refund_total cannot be null');
        }
        $this->container['refund_total'] = $refund_total;

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
     * Gets shipping_information
     *
     * @return \Keap\Sdk\Core\Model\ShippingInformation|null
     */
    public function getShippingInformation()
    {
        return $this->container['shipping_information'];
    }

    /**
     * Sets shipping_information
     *
     * @param \Keap\Sdk\Core\Model\ShippingInformation|null $shipping_information shipping_information
     *
     * @return self
     */
    public function setShippingInformation($shipping_information)
    {
        if (is_null($shipping_information)) {
            throw new \InvalidArgumentException('non-nullable shipping_information cannot be null');
        }
        $this->container['shipping_information'] = $shipping_information;

        return $this;
    }

    /**
     * Gets source_type
     *
     * @return string|null
     */
    public function getSourceType()
    {
        return $this->container['source_type'];
    }

    /**
     * Sets source_type
     *
     * @param string|null $source_type source_type
     *
     * @return self
     */
    public function setSourceType($source_type)
    {
        if (is_null($source_type)) {
            throw new \InvalidArgumentException('non-nullable source_type cannot be null');
        }
        $allowedValues = $this->getSourceTypeAllowableValues();
        if (!in_array($source_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'source_type', must be one of '%s'",
                    $source_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['source_type'] = $source_type;

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
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets terms
     *
     * @return string|null
     */
    public function getTerms()
    {
        return $this->container['terms'];
    }

    /**
     * Sets terms
     *
     * @param string|null $terms terms
     *
     * @return self
     */
    public function setTerms($terms)
    {
        if (is_null($terms)) {
            throw new \InvalidArgumentException('non-nullable terms cannot be null');
        }
        $this->container['terms'] = $terms;

        return $this;
    }

    /**
     * Gets title
     *
     * @return string|null
     */
    public function getTitle()
    {
        return $this->container['title'];
    }

    /**
     * Sets title
     *
     * @param string|null $title title
     *
     * @return self
     */
    public function setTitle($title)
    {
        if (is_null($title)) {
            throw new \InvalidArgumentException('non-nullable title cannot be null');
        }
        $this->container['title'] = $title;

        return $this;
    }

    /**
     * Gets total
     *
     * @return float|null
     */
    public function getTotal()
    {
        return $this->container['total'];
    }

    /**
     * Sets total
     *
     * @param float|null $total total
     *
     * @return self
     */
    public function setTotal($total)
    {
        if (is_null($total)) {
            throw new \InvalidArgumentException('non-nullable total cannot be null');
        }
        $this->container['total'] = $total;

        return $this;
    }

    /**
     * Gets total_due
     *
     * @return float|null
     */
    public function getTotalDue()
    {
        return $this->container['total_due'];
    }

    /**
     * Sets total_due
     *
     * @param float|null $total_due total_due
     *
     * @return self
     */
    public function setTotalDue($total_due)
    {
        if (is_null($total_due)) {
            throw new \InvalidArgumentException('non-nullable total_due cannot be null');
        }
        $this->container['total_due'] = $total_due;

        return $this;
    }

    /**
     * Gets total_paid
     *
     * @return float|null
     */
    public function getTotalPaid()
    {
        return $this->container['total_paid'];
    }

    /**
     * Sets total_paid
     *
     * @param float|null $total_paid total_paid
     *
     * @return self
     */
    public function setTotalPaid($total_paid)
    {
        if (is_null($total_paid)) {
            throw new \InvalidArgumentException('non-nullable total_paid cannot be null');
        }
        $this->container['total_paid'] = $total_paid;

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


