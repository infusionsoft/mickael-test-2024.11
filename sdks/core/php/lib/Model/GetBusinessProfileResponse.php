<?php
/**
 * GetBusinessProfileResponse
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
 * The version of the OpenAPI document: 2.70.0.770650
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
 * GetBusinessProfileResponse Class Doc Comment
 *
 * @category Class
 * @description Profile information about the business that owns/uses this account
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class GetBusinessProfileResponse implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'GetBusinessProfileResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'address' => '\Keap\Sdk\Core\Model\BusinessProfileAddressResponse',
        'business_goals' => 'string[]',
        'business_primary_color' => 'string',
        'business_secondary_color' => 'string',
        'business_type' => 'string',
        'currency_code' => 'string',
        'email' => 'string',
        'language_tag' => 'string',
        'logo_url' => 'string',
        'name' => 'string',
        'phone' => 'string',
        'time_zone' => 'string',
        'website' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'address' => null,
        'business_goals' => null,
        'business_primary_color' => null,
        'business_secondary_color' => null,
        'business_type' => null,
        'currency_code' => null,
        'email' => null,
        'language_tag' => null,
        'logo_url' => null,
        'name' => null,
        'phone' => null,
        'time_zone' => null,
        'website' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'address' => false,
        'business_goals' => false,
        'business_primary_color' => false,
        'business_secondary_color' => false,
        'business_type' => false,
        'currency_code' => false,
        'email' => false,
        'language_tag' => false,
        'logo_url' => false,
        'name' => false,
        'phone' => false,
        'time_zone' => false,
        'website' => false
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
        'address' => 'address',
        'business_goals' => 'business_goals',
        'business_primary_color' => 'business_primary_color',
        'business_secondary_color' => 'business_secondary_color',
        'business_type' => 'business_type',
        'currency_code' => 'currency_code',
        'email' => 'email',
        'language_tag' => 'language_tag',
        'logo_url' => 'logo_url',
        'name' => 'name',
        'phone' => 'phone',
        'time_zone' => 'time_zone',
        'website' => 'website'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'address' => 'setAddress',
        'business_goals' => 'setBusinessGoals',
        'business_primary_color' => 'setBusinessPrimaryColor',
        'business_secondary_color' => 'setBusinessSecondaryColor',
        'business_type' => 'setBusinessType',
        'currency_code' => 'setCurrencyCode',
        'email' => 'setEmail',
        'language_tag' => 'setLanguageTag',
        'logo_url' => 'setLogoUrl',
        'name' => 'setName',
        'phone' => 'setPhone',
        'time_zone' => 'setTimeZone',
        'website' => 'setWebsite'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'address' => 'getAddress',
        'business_goals' => 'getBusinessGoals',
        'business_primary_color' => 'getBusinessPrimaryColor',
        'business_secondary_color' => 'getBusinessSecondaryColor',
        'business_type' => 'getBusinessType',
        'currency_code' => 'getCurrencyCode',
        'email' => 'getEmail',
        'language_tag' => 'getLanguageTag',
        'logo_url' => 'getLogoUrl',
        'name' => 'getName',
        'phone' => 'getPhone',
        'time_zone' => 'getTimeZone',
        'website' => 'getWebsite'
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
        $this->setIfExists('address', $data ?? [], null);
        $this->setIfExists('business_goals', $data ?? [], null);
        $this->setIfExists('business_primary_color', $data ?? [], null);
        $this->setIfExists('business_secondary_color', $data ?? [], null);
        $this->setIfExists('business_type', $data ?? [], null);
        $this->setIfExists('currency_code', $data ?? [], null);
        $this->setIfExists('email', $data ?? [], null);
        $this->setIfExists('language_tag', $data ?? [], null);
        $this->setIfExists('logo_url', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('phone', $data ?? [], null);
        $this->setIfExists('time_zone', $data ?? [], null);
        $this->setIfExists('website', $data ?? [], null);
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
     * Gets address
     *
     * @return \Keap\Sdk\Core\Model\BusinessProfileAddressResponse|null
     */
    public function getAddress()
    {
        return $this->container['address'];
    }

    /**
     * Sets address
     *
     * @param \Keap\Sdk\Core\Model\BusinessProfileAddressResponse|null $address address
     *
     * @return self
     */
    public function setAddress($address)
    {
        if (is_null($address)) {
            throw new \InvalidArgumentException('non-nullable address cannot be null');
        }
        $this->container['address'] = $address;

        return $this;
    }

    /**
     * Gets business_goals
     *
     * @return string[]|null
     */
    public function getBusinessGoals()
    {
        return $this->container['business_goals'];
    }

    /**
     * Sets business_goals
     *
     * @param string[]|null $business_goals The goals of this business, ie. Grow Business, Convert more leads
     *
     * @return self
     */
    public function setBusinessGoals($business_goals)
    {
        if (is_null($business_goals)) {
            throw new \InvalidArgumentException('non-nullable business_goals cannot be null');
        }
        $this->container['business_goals'] = $business_goals;

        return $this;
    }

    /**
     * Gets business_primary_color
     *
     * @return string|null
     */
    public function getBusinessPrimaryColor()
    {
        return $this->container['business_primary_color'];
    }

    /**
     * Sets business_primary_color
     *
     * @param string|null $business_primary_color business_primary_color
     *
     * @return self
     */
    public function setBusinessPrimaryColor($business_primary_color)
    {
        if (is_null($business_primary_color)) {
            throw new \InvalidArgumentException('non-nullable business_primary_color cannot be null');
        }
        $this->container['business_primary_color'] = $business_primary_color;

        return $this;
    }

    /**
     * Gets business_secondary_color
     *
     * @return string|null
     */
    public function getBusinessSecondaryColor()
    {
        return $this->container['business_secondary_color'];
    }

    /**
     * Sets business_secondary_color
     *
     * @param string|null $business_secondary_color business_secondary_color
     *
     * @return self
     */
    public function setBusinessSecondaryColor($business_secondary_color)
    {
        if (is_null($business_secondary_color)) {
            throw new \InvalidArgumentException('non-nullable business_secondary_color cannot be null');
        }
        $this->container['business_secondary_color'] = $business_secondary_color;

        return $this;
    }

    /**
     * Gets business_type
     *
     * @return string|null
     */
    public function getBusinessType()
    {
        return $this->container['business_type'];
    }

    /**
     * Sets business_type
     *
     * @param string|null $business_type The type of business
     *
     * @return self
     */
    public function setBusinessType($business_type)
    {
        if (is_null($business_type)) {
            throw new \InvalidArgumentException('non-nullable business_type cannot be null');
        }
        $this->container['business_type'] = $business_type;

        return $this;
    }

    /**
     * Gets currency_code
     *
     * @return string|null
     */
    public function getCurrencyCode()
    {
        return $this->container['currency_code'];
    }

    /**
     * Sets currency_code
     *
     * @param string|null $currency_code ISO 4217 Currency Code
     *
     * @return self
     */
    public function setCurrencyCode($currency_code)
    {
        if (is_null($currency_code)) {
            throw new \InvalidArgumentException('non-nullable currency_code cannot be null');
        }
        $this->container['currency_code'] = $currency_code;

        return $this;
    }

    /**
     * Gets email
     *
     * @return string|null
     */
    public function getEmail()
    {
        return $this->container['email'];
    }

    /**
     * Sets email
     *
     * @param string|null $email email
     *
     * @return self
     */
    public function setEmail($email)
    {
        if (is_null($email)) {
            throw new \InvalidArgumentException('non-nullable email cannot be null');
        }
        $this->container['email'] = $email;

        return $this;
    }

    /**
     * Gets language_tag
     *
     * @return string|null
     */
    public function getLanguageTag()
    {
        return $this->container['language_tag'];
    }

    /**
     * Sets language_tag
     *
     * @param string|null $language_tag language_tag
     *
     * @return self
     */
    public function setLanguageTag($language_tag)
    {
        if (is_null($language_tag)) {
            throw new \InvalidArgumentException('non-nullable language_tag cannot be null');
        }
        $this->container['language_tag'] = $language_tag;

        return $this;
    }

    /**
     * Gets logo_url
     *
     * @return string|null
     */
    public function getLogoUrl()
    {
        return $this->container['logo_url'];
    }

    /**
     * Sets logo_url
     *
     * @param string|null $logo_url logo_url
     *
     * @return self
     */
    public function setLogoUrl($logo_url)
    {
        if (is_null($logo_url)) {
            throw new \InvalidArgumentException('non-nullable logo_url cannot be null');
        }
        $this->container['logo_url'] = $logo_url;

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
     * Gets phone
     *
     * @return string|null
     */
    public function getPhone()
    {
        return $this->container['phone'];
    }

    /**
     * Sets phone
     *
     * @param string|null $phone phone
     *
     * @return self
     */
    public function setPhone($phone)
    {
        if (is_null($phone)) {
            throw new \InvalidArgumentException('non-nullable phone cannot be null');
        }
        $this->container['phone'] = $phone;

        return $this;
    }

    /**
     * Gets time_zone
     *
     * @return string|null
     */
    public function getTimeZone()
    {
        return $this->container['time_zone'];
    }

    /**
     * Sets time_zone
     *
     * @param string|null $time_zone time_zone
     *
     * @return self
     */
    public function setTimeZone($time_zone)
    {
        if (is_null($time_zone)) {
            throw new \InvalidArgumentException('non-nullable time_zone cannot be null');
        }
        $this->container['time_zone'] = $time_zone;

        return $this;
    }

    /**
     * Gets website
     *
     * @return string|null
     */
    public function getWebsite()
    {
        return $this->container['website'];
    }

    /**
     * Sets website
     *
     * @param string|null $website website
     *
     * @return self
     */
    public function setWebsite($website)
    {
        if (is_null($website)) {
            throw new \InvalidArgumentException('non-nullable website cannot be null');
        }
        $this->container['website'] = $website;

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


