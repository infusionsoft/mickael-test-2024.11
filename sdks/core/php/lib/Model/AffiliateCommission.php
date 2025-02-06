<?php
/**
 * AffiliateCommission
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
 * AffiliateCommission Class Doc Comment
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class AffiliateCommission implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'AffiliateCommission';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'aff_owed_id' => 'int',
        'amount_earned' => 'float',
        'contact_first_name' => 'string',
        'contact_id' => 'int',
        'contact_last_name' => 'string',
        'date_earned' => '\DateTime',
        'description' => 'string',
        'invoice_id' => 'int',
        'product_name' => 'string',
        'sales_affiliate_id' => 'int',
        'sold_by_first_name' => 'string',
        'sold_by_last_name' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'aff_owed_id' => 'int64',
        'amount_earned' => 'float',
        'contact_first_name' => null,
        'contact_id' => 'int64',
        'contact_last_name' => null,
        'date_earned' => 'date-time',
        'description' => null,
        'invoice_id' => 'int64',
        'product_name' => null,
        'sales_affiliate_id' => 'int64',
        'sold_by_first_name' => null,
        'sold_by_last_name' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'aff_owed_id' => false,
        'amount_earned' => false,
        'contact_first_name' => false,
        'contact_id' => false,
        'contact_last_name' => false,
        'date_earned' => false,
        'description' => false,
        'invoice_id' => false,
        'product_name' => false,
        'sales_affiliate_id' => false,
        'sold_by_first_name' => false,
        'sold_by_last_name' => false
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
        'aff_owed_id' => 'aff_owed_id',
        'amount_earned' => 'amount_earned',
        'contact_first_name' => 'contact_first_name',
        'contact_id' => 'contact_id',
        'contact_last_name' => 'contact_last_name',
        'date_earned' => 'date_earned',
        'description' => 'description',
        'invoice_id' => 'invoice_id',
        'product_name' => 'product_name',
        'sales_affiliate_id' => 'sales_affiliate_id',
        'sold_by_first_name' => 'sold_by_first_name',
        'sold_by_last_name' => 'sold_by_last_name'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'aff_owed_id' => 'setAffOwedId',
        'amount_earned' => 'setAmountEarned',
        'contact_first_name' => 'setContactFirstName',
        'contact_id' => 'setContactId',
        'contact_last_name' => 'setContactLastName',
        'date_earned' => 'setDateEarned',
        'description' => 'setDescription',
        'invoice_id' => 'setInvoiceId',
        'product_name' => 'setProductName',
        'sales_affiliate_id' => 'setSalesAffiliateId',
        'sold_by_first_name' => 'setSoldByFirstName',
        'sold_by_last_name' => 'setSoldByLastName'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'aff_owed_id' => 'getAffOwedId',
        'amount_earned' => 'getAmountEarned',
        'contact_first_name' => 'getContactFirstName',
        'contact_id' => 'getContactId',
        'contact_last_name' => 'getContactLastName',
        'date_earned' => 'getDateEarned',
        'description' => 'getDescription',
        'invoice_id' => 'getInvoiceId',
        'product_name' => 'getProductName',
        'sales_affiliate_id' => 'getSalesAffiliateId',
        'sold_by_first_name' => 'getSoldByFirstName',
        'sold_by_last_name' => 'getSoldByLastName'
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
        $this->setIfExists('aff_owed_id', $data ?? [], null);
        $this->setIfExists('amount_earned', $data ?? [], null);
        $this->setIfExists('contact_first_name', $data ?? [], null);
        $this->setIfExists('contact_id', $data ?? [], null);
        $this->setIfExists('contact_last_name', $data ?? [], null);
        $this->setIfExists('date_earned', $data ?? [], null);
        $this->setIfExists('description', $data ?? [], null);
        $this->setIfExists('invoice_id', $data ?? [], null);
        $this->setIfExists('product_name', $data ?? [], null);
        $this->setIfExists('sales_affiliate_id', $data ?? [], null);
        $this->setIfExists('sold_by_first_name', $data ?? [], null);
        $this->setIfExists('sold_by_last_name', $data ?? [], null);
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
     * Gets aff_owed_id
     *
     * @return int|null
     */
    public function getAffOwedId()
    {
        return $this->container['aff_owed_id'];
    }

    /**
     * Sets aff_owed_id
     *
     * @param int|null $aff_owed_id aff_owed_id
     *
     * @return self
     */
    public function setAffOwedId($aff_owed_id)
    {
        if (is_null($aff_owed_id)) {
            throw new \InvalidArgumentException('non-nullable aff_owed_id cannot be null');
        }
        $this->container['aff_owed_id'] = $aff_owed_id;

        return $this;
    }

    /**
     * Gets amount_earned
     *
     * @return float|null
     */
    public function getAmountEarned()
    {
        return $this->container['amount_earned'];
    }

    /**
     * Sets amount_earned
     *
     * @param float|null $amount_earned amount_earned
     *
     * @return self
     */
    public function setAmountEarned($amount_earned)
    {
        if (is_null($amount_earned)) {
            throw new \InvalidArgumentException('non-nullable amount_earned cannot be null');
        }
        $this->container['amount_earned'] = $amount_earned;

        return $this;
    }

    /**
     * Gets contact_first_name
     *
     * @return string|null
     */
    public function getContactFirstName()
    {
        return $this->container['contact_first_name'];
    }

    /**
     * Sets contact_first_name
     *
     * @param string|null $contact_first_name contact_first_name
     *
     * @return self
     */
    public function setContactFirstName($contact_first_name)
    {
        if (is_null($contact_first_name)) {
            throw new \InvalidArgumentException('non-nullable contact_first_name cannot be null');
        }
        $this->container['contact_first_name'] = $contact_first_name;

        return $this;
    }

    /**
     * Gets contact_id
     *
     * @return int|null
     */
    public function getContactId()
    {
        return $this->container['contact_id'];
    }

    /**
     * Sets contact_id
     *
     * @param int|null $contact_id contact_id
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
     * Gets contact_last_name
     *
     * @return string|null
     */
    public function getContactLastName()
    {
        return $this->container['contact_last_name'];
    }

    /**
     * Sets contact_last_name
     *
     * @param string|null $contact_last_name contact_last_name
     *
     * @return self
     */
    public function setContactLastName($contact_last_name)
    {
        if (is_null($contact_last_name)) {
            throw new \InvalidArgumentException('non-nullable contact_last_name cannot be null');
        }
        $this->container['contact_last_name'] = $contact_last_name;

        return $this;
    }

    /**
     * Gets date_earned
     *
     * @return \DateTime|null
     */
    public function getDateEarned()
    {
        return $this->container['date_earned'];
    }

    /**
     * Sets date_earned
     *
     * @param \DateTime|null $date_earned date_earned
     *
     * @return self
     */
    public function setDateEarned($date_earned)
    {
        if (is_null($date_earned)) {
            throw new \InvalidArgumentException('non-nullable date_earned cannot be null');
        }
        $this->container['date_earned'] = $date_earned;

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
     * Gets invoice_id
     *
     * @return int|null
     */
    public function getInvoiceId()
    {
        return $this->container['invoice_id'];
    }

    /**
     * Sets invoice_id
     *
     * @param int|null $invoice_id invoice_id
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
     * Gets product_name
     *
     * @return string|null
     */
    public function getProductName()
    {
        return $this->container['product_name'];
    }

    /**
     * Sets product_name
     *
     * @param string|null $product_name product_name
     *
     * @return self
     */
    public function setProductName($product_name)
    {
        if (is_null($product_name)) {
            throw new \InvalidArgumentException('non-nullable product_name cannot be null');
        }
        $this->container['product_name'] = $product_name;

        return $this;
    }

    /**
     * Gets sales_affiliate_id
     *
     * @return int|null
     */
    public function getSalesAffiliateId()
    {
        return $this->container['sales_affiliate_id'];
    }

    /**
     * Sets sales_affiliate_id
     *
     * @param int|null $sales_affiliate_id sales_affiliate_id
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
     * Gets sold_by_first_name
     *
     * @return string|null
     */
    public function getSoldByFirstName()
    {
        return $this->container['sold_by_first_name'];
    }

    /**
     * Sets sold_by_first_name
     *
     * @param string|null $sold_by_first_name sold_by_first_name
     *
     * @return self
     */
    public function setSoldByFirstName($sold_by_first_name)
    {
        if (is_null($sold_by_first_name)) {
            throw new \InvalidArgumentException('non-nullable sold_by_first_name cannot be null');
        }
        $this->container['sold_by_first_name'] = $sold_by_first_name;

        return $this;
    }

    /**
     * Gets sold_by_last_name
     *
     * @return string|null
     */
    public function getSoldByLastName()
    {
        return $this->container['sold_by_last_name'];
    }

    /**
     * Sets sold_by_last_name
     *
     * @param string|null $sold_by_last_name sold_by_last_name
     *
     * @return self
     */
    public function setSoldByLastName($sold_by_last_name)
    {
        if (is_null($sold_by_last_name)) {
            throw new \InvalidArgumentException('non-nullable sold_by_last_name cannot be null');
        }
        $this->container['sold_by_last_name'] = $sold_by_last_name;

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


