<?php
/**
 * CreateOpportunityRequest
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
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
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
 * CreateOpportunityRequest Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateOpportunityRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'CreateOpportunityRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'affiliate_id' => 'string',
        'contact_id' => 'string',
        'custom_fields' => '\Com\Keap\Sdk\Core\Model\CustomField[]',
        'estimated_close_time' => 'string',
        'include_in_forecast' => 'bool',
        'next_action_notes' => 'string',
        'next_action_time' => 'string',
        'opportunity_notes' => 'string',
        'opportunity_title' => 'string',
        'projected_revenue_high' => 'float',
        'projected_revenue_low' => 'float',
        'stage_id' => 'string',
        'user_id' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'affiliate_id' => null,
        'contact_id' => null,
        'custom_fields' => null,
        'estimated_close_time' => null,
        'include_in_forecast' => null,
        'next_action_notes' => null,
        'next_action_time' => null,
        'opportunity_notes' => null,
        'opportunity_title' => null,
        'projected_revenue_high' => 'double',
        'projected_revenue_low' => 'double',
        'stage_id' => null,
        'user_id' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'affiliate_id' => false,
        'contact_id' => false,
        'custom_fields' => false,
        'estimated_close_time' => false,
        'include_in_forecast' => false,
        'next_action_notes' => false,
        'next_action_time' => false,
        'opportunity_notes' => false,
        'opportunity_title' => false,
        'projected_revenue_high' => false,
        'projected_revenue_low' => false,
        'stage_id' => false,
        'user_id' => false
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
        'affiliate_id' => 'affiliate_id',
        'contact_id' => 'contact_id',
        'custom_fields' => 'custom_fields',
        'estimated_close_time' => 'estimated_close_time',
        'include_in_forecast' => 'include_in_forecast',
        'next_action_notes' => 'next_action_notes',
        'next_action_time' => 'next_action_time',
        'opportunity_notes' => 'opportunity_notes',
        'opportunity_title' => 'opportunity_title',
        'projected_revenue_high' => 'projected_revenue_high',
        'projected_revenue_low' => 'projected_revenue_low',
        'stage_id' => 'stage_id',
        'user_id' => 'user_id'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'affiliate_id' => 'setAffiliateId',
        'contact_id' => 'setContactId',
        'custom_fields' => 'setCustomFields',
        'estimated_close_time' => 'setEstimatedCloseTime',
        'include_in_forecast' => 'setIncludeInForecast',
        'next_action_notes' => 'setNextActionNotes',
        'next_action_time' => 'setNextActionTime',
        'opportunity_notes' => 'setOpportunityNotes',
        'opportunity_title' => 'setOpportunityTitle',
        'projected_revenue_high' => 'setProjectedRevenueHigh',
        'projected_revenue_low' => 'setProjectedRevenueLow',
        'stage_id' => 'setStageId',
        'user_id' => 'setUserId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'affiliate_id' => 'getAffiliateId',
        'contact_id' => 'getContactId',
        'custom_fields' => 'getCustomFields',
        'estimated_close_time' => 'getEstimatedCloseTime',
        'include_in_forecast' => 'getIncludeInForecast',
        'next_action_notes' => 'getNextActionNotes',
        'next_action_time' => 'getNextActionTime',
        'opportunity_notes' => 'getOpportunityNotes',
        'opportunity_title' => 'getOpportunityTitle',
        'projected_revenue_high' => 'getProjectedRevenueHigh',
        'projected_revenue_low' => 'getProjectedRevenueLow',
        'stage_id' => 'getStageId',
        'user_id' => 'getUserId'
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
        $this->setIfExists('affiliate_id', $data ?? [], null);
        $this->setIfExists('contact_id', $data ?? [], null);
        $this->setIfExists('custom_fields', $data ?? [], null);
        $this->setIfExists('estimated_close_time', $data ?? [], null);
        $this->setIfExists('include_in_forecast', $data ?? [], null);
        $this->setIfExists('next_action_notes', $data ?? [], null);
        $this->setIfExists('next_action_time', $data ?? [], null);
        $this->setIfExists('opportunity_notes', $data ?? [], null);
        $this->setIfExists('opportunity_title', $data ?? [], null);
        $this->setIfExists('projected_revenue_high', $data ?? [], null);
        $this->setIfExists('projected_revenue_low', $data ?? [], null);
        $this->setIfExists('stage_id', $data ?? [], null);
        $this->setIfExists('user_id', $data ?? [], null);
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

        if ($this->container['opportunity_title'] === null) {
            $invalidProperties[] = "'opportunity_title' can't be null";
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
     * Gets affiliate_id
     *
     * @return string|null
     */
    public function getAffiliateId()
    {
        return $this->container['affiliate_id'];
    }

    /**
     * Sets affiliate_id
     *
     * @param string|null $affiliate_id affiliate_id
     *
     * @return self
     */
    public function setAffiliateId($affiliate_id)
    {
        if (is_null($affiliate_id)) {
            throw new \InvalidArgumentException('non-nullable affiliate_id cannot be null');
        }
        $this->container['affiliate_id'] = $affiliate_id;

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
     * Gets custom_fields
     *
     * @return \Com\Keap\Sdk\Core\Model\CustomField[]|null
     */
    public function getCustomFields()
    {
        return $this->container['custom_fields'];
    }

    /**
     * Sets custom_fields
     *
     * @param \Com\Keap\Sdk\Core\Model\CustomField[]|null $custom_fields custom_fields
     *
     * @return self
     */
    public function setCustomFields($custom_fields)
    {
        if (is_null($custom_fields)) {
            throw new \InvalidArgumentException('non-nullable custom_fields cannot be null');
        }
        $this->container['custom_fields'] = $custom_fields;

        return $this;
    }

    /**
     * Gets estimated_close_time
     *
     * @return string|null
     */
    public function getEstimatedCloseTime()
    {
        return $this->container['estimated_close_time'];
    }

    /**
     * Sets estimated_close_time
     *
     * @param string|null $estimated_close_time estimated_close_time
     *
     * @return self
     */
    public function setEstimatedCloseTime($estimated_close_time)
    {
        if (is_null($estimated_close_time)) {
            throw new \InvalidArgumentException('non-nullable estimated_close_time cannot be null');
        }
        $this->container['estimated_close_time'] = $estimated_close_time;

        return $this;
    }

    /**
     * Gets include_in_forecast
     *
     * @return bool|null
     */
    public function getIncludeInForecast()
    {
        return $this->container['include_in_forecast'];
    }

    /**
     * Sets include_in_forecast
     *
     * @param bool|null $include_in_forecast include_in_forecast
     *
     * @return self
     */
    public function setIncludeInForecast($include_in_forecast)
    {
        if (is_null($include_in_forecast)) {
            throw new \InvalidArgumentException('non-nullable include_in_forecast cannot be null');
        }
        $this->container['include_in_forecast'] = $include_in_forecast;

        return $this;
    }

    /**
     * Gets next_action_notes
     *
     * @return string|null
     */
    public function getNextActionNotes()
    {
        return $this->container['next_action_notes'];
    }

    /**
     * Sets next_action_notes
     *
     * @param string|null $next_action_notes next_action_notes
     *
     * @return self
     */
    public function setNextActionNotes($next_action_notes)
    {
        if (is_null($next_action_notes)) {
            throw new \InvalidArgumentException('non-nullable next_action_notes cannot be null');
        }
        $this->container['next_action_notes'] = $next_action_notes;

        return $this;
    }

    /**
     * Gets next_action_time
     *
     * @return string|null
     */
    public function getNextActionTime()
    {
        return $this->container['next_action_time'];
    }

    /**
     * Sets next_action_time
     *
     * @param string|null $next_action_time next_action_time
     *
     * @return self
     */
    public function setNextActionTime($next_action_time)
    {
        if (is_null($next_action_time)) {
            throw new \InvalidArgumentException('non-nullable next_action_time cannot be null');
        }
        $this->container['next_action_time'] = $next_action_time;

        return $this;
    }

    /**
     * Gets opportunity_notes
     *
     * @return string|null
     */
    public function getOpportunityNotes()
    {
        return $this->container['opportunity_notes'];
    }

    /**
     * Sets opportunity_notes
     *
     * @param string|null $opportunity_notes opportunity_notes
     *
     * @return self
     */
    public function setOpportunityNotes($opportunity_notes)
    {
        if (is_null($opportunity_notes)) {
            throw new \InvalidArgumentException('non-nullable opportunity_notes cannot be null');
        }
        $this->container['opportunity_notes'] = $opportunity_notes;

        return $this;
    }

    /**
     * Gets opportunity_title
     *
     * @return string
     */
    public function getOpportunityTitle()
    {
        return $this->container['opportunity_title'];
    }

    /**
     * Sets opportunity_title
     *
     * @param string $opportunity_title opportunity_title
     *
     * @return self
     */
    public function setOpportunityTitle($opportunity_title)
    {
        if (is_null($opportunity_title)) {
            throw new \InvalidArgumentException('non-nullable opportunity_title cannot be null');
        }
        $this->container['opportunity_title'] = $opportunity_title;

        return $this;
    }

    /**
     * Gets projected_revenue_high
     *
     * @return float|null
     */
    public function getProjectedRevenueHigh()
    {
        return $this->container['projected_revenue_high'];
    }

    /**
     * Sets projected_revenue_high
     *
     * @param float|null $projected_revenue_high projected_revenue_high
     *
     * @return self
     */
    public function setProjectedRevenueHigh($projected_revenue_high)
    {
        if (is_null($projected_revenue_high)) {
            throw new \InvalidArgumentException('non-nullable projected_revenue_high cannot be null');
        }
        $this->container['projected_revenue_high'] = $projected_revenue_high;

        return $this;
    }

    /**
     * Gets projected_revenue_low
     *
     * @return float|null
     */
    public function getProjectedRevenueLow()
    {
        return $this->container['projected_revenue_low'];
    }

    /**
     * Sets projected_revenue_low
     *
     * @param float|null $projected_revenue_low projected_revenue_low
     *
     * @return self
     */
    public function setProjectedRevenueLow($projected_revenue_low)
    {
        if (is_null($projected_revenue_low)) {
            throw new \InvalidArgumentException('non-nullable projected_revenue_low cannot be null');
        }
        $this->container['projected_revenue_low'] = $projected_revenue_low;

        return $this;
    }

    /**
     * Gets stage_id
     *
     * @return string|null
     */
    public function getStageId()
    {
        return $this->container['stage_id'];
    }

    /**
     * Sets stage_id
     *
     * @param string|null $stage_id stage_id
     *
     * @return self
     */
    public function setStageId($stage_id)
    {
        if (is_null($stage_id)) {
            throw new \InvalidArgumentException('non-nullable stage_id cannot be null');
        }
        $this->container['stage_id'] = $stage_id;

        return $this;
    }

    /**
     * Gets user_id
     *
     * @return string|null
     */
    public function getUserId()
    {
        return $this->container['user_id'];
    }

    /**
     * Sets user_id
     *
     * @param string|null $user_id user_id
     *
     * @return self
     */
    public function setUserId($user_id)
    {
        if (is_null($user_id)) {
            throw new \InvalidArgumentException('non-nullable user_id cannot be null');
        }
        $this->container['user_id'] = $user_id;

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


