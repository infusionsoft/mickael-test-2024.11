<?php
/**
 * ApplicationConfigurationModuleAffiliate
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
 * ApplicationConfigurationModuleAffiliate Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ApplicationConfigurationModuleAffiliate implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ApplicationConfigurationModuleAffiliate';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'choose_affiliate' => 'bool',
        'commission' => '\Keap\Core\V2\Model\ApplicationConfigurationModuleAffiliateCommission',
        'custom_affiliate_url' => 'string',
        'display_affiliate_ip_address' => 'bool',
        'do_not_notify_affiliate' => 'bool',
        'skip_pay_if_unused' => 'bool',
        'use_referral_history_if_no_tracking_cookie' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'choose_affiliate' => null,
        'commission' => null,
        'custom_affiliate_url' => null,
        'display_affiliate_ip_address' => null,
        'do_not_notify_affiliate' => null,
        'skip_pay_if_unused' => null,
        'use_referral_history_if_no_tracking_cookie' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'choose_affiliate' => false,
        'commission' => false,
        'custom_affiliate_url' => false,
        'display_affiliate_ip_address' => false,
        'do_not_notify_affiliate' => false,
        'skip_pay_if_unused' => false,
        'use_referral_history_if_no_tracking_cookie' => false
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
        'choose_affiliate' => 'choose_affiliate',
        'commission' => 'commission',
        'custom_affiliate_url' => 'custom_affiliate_url',
        'display_affiliate_ip_address' => 'display_affiliate_ip_address',
        'do_not_notify_affiliate' => 'do_not_notify_affiliate',
        'skip_pay_if_unused' => 'skip_pay_if_unused',
        'use_referral_history_if_no_tracking_cookie' => 'use_referral_history_if_no_tracking_cookie'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'choose_affiliate' => 'setChooseAffiliate',
        'commission' => 'setCommission',
        'custom_affiliate_url' => 'setCustomAffiliateUrl',
        'display_affiliate_ip_address' => 'setDisplayAffiliateIpAddress',
        'do_not_notify_affiliate' => 'setDoNotNotifyAffiliate',
        'skip_pay_if_unused' => 'setSkipPayIfUnused',
        'use_referral_history_if_no_tracking_cookie' => 'setUseReferralHistoryIfNoTrackingCookie'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'choose_affiliate' => 'getChooseAffiliate',
        'commission' => 'getCommission',
        'custom_affiliate_url' => 'getCustomAffiliateUrl',
        'display_affiliate_ip_address' => 'getDisplayAffiliateIpAddress',
        'do_not_notify_affiliate' => 'getDoNotNotifyAffiliate',
        'skip_pay_if_unused' => 'getSkipPayIfUnused',
        'use_referral_history_if_no_tracking_cookie' => 'getUseReferralHistoryIfNoTrackingCookie'
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
        $this->setIfExists('choose_affiliate', $data ?? [], null);
        $this->setIfExists('commission', $data ?? [], null);
        $this->setIfExists('custom_affiliate_url', $data ?? [], null);
        $this->setIfExists('display_affiliate_ip_address', $data ?? [], null);
        $this->setIfExists('do_not_notify_affiliate', $data ?? [], null);
        $this->setIfExists('skip_pay_if_unused', $data ?? [], null);
        $this->setIfExists('use_referral_history_if_no_tracking_cookie', $data ?? [], null);
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
     * Gets choose_affiliate
     *
     * @return bool|null
     */
    public function getChooseAffiliate()
    {
        return $this->container['choose_affiliate'];
    }

    /**
     * Sets choose_affiliate
     *
     * @param bool|null $choose_affiliate choose_affiliate
     *
     * @return self
     */
    public function setChooseAffiliate($choose_affiliate)
    {
        if (is_null($choose_affiliate)) {
            throw new \InvalidArgumentException('non-nullable choose_affiliate cannot be null');
        }
        $this->container['choose_affiliate'] = $choose_affiliate;

        return $this;
    }

    /**
     * Gets commission
     *
     * @return \Keap\Core\V2\Model\ApplicationConfigurationModuleAffiliateCommission|null
     */
    public function getCommission()
    {
        return $this->container['commission'];
    }

    /**
     * Sets commission
     *
     * @param \Keap\Core\V2\Model\ApplicationConfigurationModuleAffiliateCommission|null $commission commission
     *
     * @return self
     */
    public function setCommission($commission)
    {
        if (is_null($commission)) {
            throw new \InvalidArgumentException('non-nullable commission cannot be null');
        }
        $this->container['commission'] = $commission;

        return $this;
    }

    /**
     * Gets custom_affiliate_url
     *
     * @return string|null
     */
    public function getCustomAffiliateUrl()
    {
        return $this->container['custom_affiliate_url'];
    }

    /**
     * Sets custom_affiliate_url
     *
     * @param string|null $custom_affiliate_url custom_affiliate_url
     *
     * @return self
     */
    public function setCustomAffiliateUrl($custom_affiliate_url)
    {
        if (is_null($custom_affiliate_url)) {
            throw new \InvalidArgumentException('non-nullable custom_affiliate_url cannot be null');
        }
        $this->container['custom_affiliate_url'] = $custom_affiliate_url;

        return $this;
    }

    /**
     * Gets display_affiliate_ip_address
     *
     * @return bool|null
     */
    public function getDisplayAffiliateIpAddress()
    {
        return $this->container['display_affiliate_ip_address'];
    }

    /**
     * Sets display_affiliate_ip_address
     *
     * @param bool|null $display_affiliate_ip_address display_affiliate_ip_address
     *
     * @return self
     */
    public function setDisplayAffiliateIpAddress($display_affiliate_ip_address)
    {
        if (is_null($display_affiliate_ip_address)) {
            throw new \InvalidArgumentException('non-nullable display_affiliate_ip_address cannot be null');
        }
        $this->container['display_affiliate_ip_address'] = $display_affiliate_ip_address;

        return $this;
    }

    /**
     * Gets do_not_notify_affiliate
     *
     * @return bool|null
     */
    public function getDoNotNotifyAffiliate()
    {
        return $this->container['do_not_notify_affiliate'];
    }

    /**
     * Sets do_not_notify_affiliate
     *
     * @param bool|null $do_not_notify_affiliate do_not_notify_affiliate
     *
     * @return self
     */
    public function setDoNotNotifyAffiliate($do_not_notify_affiliate)
    {
        if (is_null($do_not_notify_affiliate)) {
            throw new \InvalidArgumentException('non-nullable do_not_notify_affiliate cannot be null');
        }
        $this->container['do_not_notify_affiliate'] = $do_not_notify_affiliate;

        return $this;
    }

    /**
     * Gets skip_pay_if_unused
     *
     * @return bool|null
     */
    public function getSkipPayIfUnused()
    {
        return $this->container['skip_pay_if_unused'];
    }

    /**
     * Sets skip_pay_if_unused
     *
     * @param bool|null $skip_pay_if_unused skip_pay_if_unused
     *
     * @return self
     */
    public function setSkipPayIfUnused($skip_pay_if_unused)
    {
        if (is_null($skip_pay_if_unused)) {
            throw new \InvalidArgumentException('non-nullable skip_pay_if_unused cannot be null');
        }
        $this->container['skip_pay_if_unused'] = $skip_pay_if_unused;

        return $this;
    }

    /**
     * Gets use_referral_history_if_no_tracking_cookie
     *
     * @return bool|null
     */
    public function getUseReferralHistoryIfNoTrackingCookie()
    {
        return $this->container['use_referral_history_if_no_tracking_cookie'];
    }

    /**
     * Sets use_referral_history_if_no_tracking_cookie
     *
     * @param bool|null $use_referral_history_if_no_tracking_cookie use_referral_history_if_no_tracking_cookie
     *
     * @return self
     */
    public function setUseReferralHistoryIfNoTrackingCookie($use_referral_history_if_no_tracking_cookie)
    {
        if (is_null($use_referral_history_if_no_tracking_cookie)) {
            throw new \InvalidArgumentException('non-nullable use_referral_history_if_no_tracking_cookie cannot be null');
        }
        $this->container['use_referral_history_if_no_tracking_cookie'] = $use_referral_history_if_no_tracking_cookie;

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


