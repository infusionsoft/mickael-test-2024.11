<?php
/**
 * ApplicationConfigurationModuleEcommerce
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
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
 * ApplicationConfigurationModuleEcommerce Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ApplicationConfigurationModuleEcommerce implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ApplicationConfigurationModuleEcommerce';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'credit_card_types' => 'string',
        'currency' => 'string',
        'default_charge_max_retry_attempts' => 'int',
        'default_country' => 'string',
        'default_merchant' => 'string',
        'default_number_of_days_between_charge_attempts' => 'int',
        'default_tax' => 'string',
        'default_to_auto_charge' => 'bool',
        'merchant_account_max_retry_attempts' => 'int',
        'payment_types' => 'string',
        'promo_codes' => 'string',
        'track_cost_per_unit' => 'bool',
        'track_inventory' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'credit_card_types' => null,
        'currency' => null,
        'default_charge_max_retry_attempts' => 'int32',
        'default_country' => null,
        'default_merchant' => null,
        'default_number_of_days_between_charge_attempts' => 'int32',
        'default_tax' => null,
        'default_to_auto_charge' => null,
        'merchant_account_max_retry_attempts' => 'int32',
        'payment_types' => null,
        'promo_codes' => null,
        'track_cost_per_unit' => null,
        'track_inventory' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'credit_card_types' => false,
        'currency' => false,
        'default_charge_max_retry_attempts' => false,
        'default_country' => false,
        'default_merchant' => false,
        'default_number_of_days_between_charge_attempts' => false,
        'default_tax' => false,
        'default_to_auto_charge' => false,
        'merchant_account_max_retry_attempts' => false,
        'payment_types' => false,
        'promo_codes' => false,
        'track_cost_per_unit' => false,
        'track_inventory' => false
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
        'credit_card_types' => 'credit_card_types',
        'currency' => 'currency',
        'default_charge_max_retry_attempts' => 'default_charge_max_retry_attempts',
        'default_country' => 'default_country',
        'default_merchant' => 'default_merchant',
        'default_number_of_days_between_charge_attempts' => 'default_number_of_days_between_charge_attempts',
        'default_tax' => 'default_tax',
        'default_to_auto_charge' => 'default_to_auto_charge',
        'merchant_account_max_retry_attempts' => 'merchant_account_max_retry_attempts',
        'payment_types' => 'payment_types',
        'promo_codes' => 'promo_codes',
        'track_cost_per_unit' => 'track_cost_per_unit',
        'track_inventory' => 'track_inventory'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'credit_card_types' => 'setCreditCardTypes',
        'currency' => 'setCurrency',
        'default_charge_max_retry_attempts' => 'setDefaultChargeMaxRetryAttempts',
        'default_country' => 'setDefaultCountry',
        'default_merchant' => 'setDefaultMerchant',
        'default_number_of_days_between_charge_attempts' => 'setDefaultNumberOfDaysBetweenChargeAttempts',
        'default_tax' => 'setDefaultTax',
        'default_to_auto_charge' => 'setDefaultToAutoCharge',
        'merchant_account_max_retry_attempts' => 'setMerchantAccountMaxRetryAttempts',
        'payment_types' => 'setPaymentTypes',
        'promo_codes' => 'setPromoCodes',
        'track_cost_per_unit' => 'setTrackCostPerUnit',
        'track_inventory' => 'setTrackInventory'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'credit_card_types' => 'getCreditCardTypes',
        'currency' => 'getCurrency',
        'default_charge_max_retry_attempts' => 'getDefaultChargeMaxRetryAttempts',
        'default_country' => 'getDefaultCountry',
        'default_merchant' => 'getDefaultMerchant',
        'default_number_of_days_between_charge_attempts' => 'getDefaultNumberOfDaysBetweenChargeAttempts',
        'default_tax' => 'getDefaultTax',
        'default_to_auto_charge' => 'getDefaultToAutoCharge',
        'merchant_account_max_retry_attempts' => 'getMerchantAccountMaxRetryAttempts',
        'payment_types' => 'getPaymentTypes',
        'promo_codes' => 'getPromoCodes',
        'track_cost_per_unit' => 'getTrackCostPerUnit',
        'track_inventory' => 'getTrackInventory'
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
        $this->setIfExists('credit_card_types', $data ?? [], null);
        $this->setIfExists('currency', $data ?? [], null);
        $this->setIfExists('default_charge_max_retry_attempts', $data ?? [], null);
        $this->setIfExists('default_country', $data ?? [], null);
        $this->setIfExists('default_merchant', $data ?? [], null);
        $this->setIfExists('default_number_of_days_between_charge_attempts', $data ?? [], null);
        $this->setIfExists('default_tax', $data ?? [], null);
        $this->setIfExists('default_to_auto_charge', $data ?? [], null);
        $this->setIfExists('merchant_account_max_retry_attempts', $data ?? [], null);
        $this->setIfExists('payment_types', $data ?? [], null);
        $this->setIfExists('promo_codes', $data ?? [], null);
        $this->setIfExists('track_cost_per_unit', $data ?? [], null);
        $this->setIfExists('track_inventory', $data ?? [], null);
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
     * Gets credit_card_types
     *
     * @return string|null
     */
    public function getCreditCardTypes()
    {
        return $this->container['credit_card_types'];
    }

    /**
     * Sets credit_card_types
     *
     * @param string|null $credit_card_types credit_card_types
     *
     * @return self
     */
    public function setCreditCardTypes($credit_card_types)
    {
        if (is_null($credit_card_types)) {
            throw new \InvalidArgumentException('non-nullable credit_card_types cannot be null');
        }
        $this->container['credit_card_types'] = $credit_card_types;

        return $this;
    }

    /**
     * Gets currency
     *
     * @return string|null
     */
    public function getCurrency()
    {
        return $this->container['currency'];
    }

    /**
     * Sets currency
     *
     * @param string|null $currency currency
     *
     * @return self
     */
    public function setCurrency($currency)
    {
        if (is_null($currency)) {
            throw new \InvalidArgumentException('non-nullable currency cannot be null');
        }
        $this->container['currency'] = $currency;

        return $this;
    }

    /**
     * Gets default_charge_max_retry_attempts
     *
     * @return int|null
     */
    public function getDefaultChargeMaxRetryAttempts()
    {
        return $this->container['default_charge_max_retry_attempts'];
    }

    /**
     * Sets default_charge_max_retry_attempts
     *
     * @param int|null $default_charge_max_retry_attempts default_charge_max_retry_attempts
     *
     * @return self
     */
    public function setDefaultChargeMaxRetryAttempts($default_charge_max_retry_attempts)
    {
        if (is_null($default_charge_max_retry_attempts)) {
            throw new \InvalidArgumentException('non-nullable default_charge_max_retry_attempts cannot be null');
        }
        $this->container['default_charge_max_retry_attempts'] = $default_charge_max_retry_attempts;

        return $this;
    }

    /**
     * Gets default_country
     *
     * @return string|null
     */
    public function getDefaultCountry()
    {
        return $this->container['default_country'];
    }

    /**
     * Sets default_country
     *
     * @param string|null $default_country default_country
     *
     * @return self
     */
    public function setDefaultCountry($default_country)
    {
        if (is_null($default_country)) {
            throw new \InvalidArgumentException('non-nullable default_country cannot be null');
        }
        $this->container['default_country'] = $default_country;

        return $this;
    }

    /**
     * Gets default_merchant
     *
     * @return string|null
     */
    public function getDefaultMerchant()
    {
        return $this->container['default_merchant'];
    }

    /**
     * Sets default_merchant
     *
     * @param string|null $default_merchant default_merchant
     *
     * @return self
     */
    public function setDefaultMerchant($default_merchant)
    {
        if (is_null($default_merchant)) {
            throw new \InvalidArgumentException('non-nullable default_merchant cannot be null');
        }
        $this->container['default_merchant'] = $default_merchant;

        return $this;
    }

    /**
     * Gets default_number_of_days_between_charge_attempts
     *
     * @return int|null
     */
    public function getDefaultNumberOfDaysBetweenChargeAttempts()
    {
        return $this->container['default_number_of_days_between_charge_attempts'];
    }

    /**
     * Sets default_number_of_days_between_charge_attempts
     *
     * @param int|null $default_number_of_days_between_charge_attempts default_number_of_days_between_charge_attempts
     *
     * @return self
     */
    public function setDefaultNumberOfDaysBetweenChargeAttempts($default_number_of_days_between_charge_attempts)
    {
        if (is_null($default_number_of_days_between_charge_attempts)) {
            throw new \InvalidArgumentException('non-nullable default_number_of_days_between_charge_attempts cannot be null');
        }
        $this->container['default_number_of_days_between_charge_attempts'] = $default_number_of_days_between_charge_attempts;

        return $this;
    }

    /**
     * Gets default_tax
     *
     * @return string|null
     */
    public function getDefaultTax()
    {
        return $this->container['default_tax'];
    }

    /**
     * Sets default_tax
     *
     * @param string|null $default_tax default_tax
     *
     * @return self
     */
    public function setDefaultTax($default_tax)
    {
        if (is_null($default_tax)) {
            throw new \InvalidArgumentException('non-nullable default_tax cannot be null');
        }
        $this->container['default_tax'] = $default_tax;

        return $this;
    }

    /**
     * Gets default_to_auto_charge
     *
     * @return bool|null
     */
    public function getDefaultToAutoCharge()
    {
        return $this->container['default_to_auto_charge'];
    }

    /**
     * Sets default_to_auto_charge
     *
     * @param bool|null $default_to_auto_charge default_to_auto_charge
     *
     * @return self
     */
    public function setDefaultToAutoCharge($default_to_auto_charge)
    {
        if (is_null($default_to_auto_charge)) {
            throw new \InvalidArgumentException('non-nullable default_to_auto_charge cannot be null');
        }
        $this->container['default_to_auto_charge'] = $default_to_auto_charge;

        return $this;
    }

    /**
     * Gets merchant_account_max_retry_attempts
     *
     * @return int|null
     */
    public function getMerchantAccountMaxRetryAttempts()
    {
        return $this->container['merchant_account_max_retry_attempts'];
    }

    /**
     * Sets merchant_account_max_retry_attempts
     *
     * @param int|null $merchant_account_max_retry_attempts merchant_account_max_retry_attempts
     *
     * @return self
     */
    public function setMerchantAccountMaxRetryAttempts($merchant_account_max_retry_attempts)
    {
        if (is_null($merchant_account_max_retry_attempts)) {
            throw new \InvalidArgumentException('non-nullable merchant_account_max_retry_attempts cannot be null');
        }
        $this->container['merchant_account_max_retry_attempts'] = $merchant_account_max_retry_attempts;

        return $this;
    }

    /**
     * Gets payment_types
     *
     * @return string|null
     */
    public function getPaymentTypes()
    {
        return $this->container['payment_types'];
    }

    /**
     * Sets payment_types
     *
     * @param string|null $payment_types payment_types
     *
     * @return self
     */
    public function setPaymentTypes($payment_types)
    {
        if (is_null($payment_types)) {
            throw new \InvalidArgumentException('non-nullable payment_types cannot be null');
        }
        $this->container['payment_types'] = $payment_types;

        return $this;
    }

    /**
     * Gets promo_codes
     *
     * @return string|null
     */
    public function getPromoCodes()
    {
        return $this->container['promo_codes'];
    }

    /**
     * Sets promo_codes
     *
     * @param string|null $promo_codes promo_codes
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
     * Gets track_cost_per_unit
     *
     * @return bool|null
     */
    public function getTrackCostPerUnit()
    {
        return $this->container['track_cost_per_unit'];
    }

    /**
     * Sets track_cost_per_unit
     *
     * @param bool|null $track_cost_per_unit track_cost_per_unit
     *
     * @return self
     */
    public function setTrackCostPerUnit($track_cost_per_unit)
    {
        if (is_null($track_cost_per_unit)) {
            throw new \InvalidArgumentException('non-nullable track_cost_per_unit cannot be null');
        }
        $this->container['track_cost_per_unit'] = $track_cost_per_unit;

        return $this;
    }

    /**
     * Gets track_inventory
     *
     * @return bool|null
     */
    public function getTrackInventory()
    {
        return $this->container['track_inventory'];
    }

    /**
     * Sets track_inventory
     *
     * @param bool|null $track_inventory track_inventory
     *
     * @return self
     */
    public function setTrackInventory($track_inventory)
    {
        if (is_null($track_inventory)) {
            throw new \InvalidArgumentException('non-nullable track_inventory cannot be null');
        }
        $this->container['track_inventory'] = $track_inventory;

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


