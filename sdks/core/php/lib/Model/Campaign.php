<?php
/**
 * Campaign
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
 * Campaign Class Doc Comment
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Campaign implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'Campaign';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'active_contact_count' => 'int',
        'completed_contact_count' => 'int',
        'created_by_global_id' => 'string',
        'date_created' => 'string',
        'error_message' => 'string',
        'goals' => '\Keap\Sdk\Core\Model\Goal[]',
        'id' => 'string',
        'locked' => 'bool',
        'name' => 'string',
        'published_date' => '\DateTime',
        'published_status' => 'bool',
        'published_time_zone' => 'string',
        'sequences' => '\Keap\Sdk\Core\Model\Sequence[]',
        'time_zone' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'active_contact_count' => 'int32',
        'completed_contact_count' => 'int32',
        'created_by_global_id' => null,
        'date_created' => null,
        'error_message' => null,
        'goals' => null,
        'id' => null,
        'locked' => null,
        'name' => null,
        'published_date' => 'date-time',
        'published_status' => null,
        'published_time_zone' => null,
        'sequences' => null,
        'time_zone' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'active_contact_count' => false,
        'completed_contact_count' => false,
        'created_by_global_id' => false,
        'date_created' => false,
        'error_message' => false,
        'goals' => false,
        'id' => false,
        'locked' => false,
        'name' => false,
        'published_date' => false,
        'published_status' => false,
        'published_time_zone' => false,
        'sequences' => false,
        'time_zone' => false
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
        'active_contact_count' => 'active_contact_count',
        'completed_contact_count' => 'completed_contact_count',
        'created_by_global_id' => 'created_by_global_id',
        'date_created' => 'date_created',
        'error_message' => 'error_message',
        'goals' => 'goals',
        'id' => 'id',
        'locked' => 'locked',
        'name' => 'name',
        'published_date' => 'published_date',
        'published_status' => 'published_status',
        'published_time_zone' => 'published_time_zone',
        'sequences' => 'sequences',
        'time_zone' => 'time_zone'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'active_contact_count' => 'setActiveContactCount',
        'completed_contact_count' => 'setCompletedContactCount',
        'created_by_global_id' => 'setCreatedByGlobalId',
        'date_created' => 'setDateCreated',
        'error_message' => 'setErrorMessage',
        'goals' => 'setGoals',
        'id' => 'setId',
        'locked' => 'setLocked',
        'name' => 'setName',
        'published_date' => 'setPublishedDate',
        'published_status' => 'setPublishedStatus',
        'published_time_zone' => 'setPublishedTimeZone',
        'sequences' => 'setSequences',
        'time_zone' => 'setTimeZone'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'active_contact_count' => 'getActiveContactCount',
        'completed_contact_count' => 'getCompletedContactCount',
        'created_by_global_id' => 'getCreatedByGlobalId',
        'date_created' => 'getDateCreated',
        'error_message' => 'getErrorMessage',
        'goals' => 'getGoals',
        'id' => 'getId',
        'locked' => 'getLocked',
        'name' => 'getName',
        'published_date' => 'getPublishedDate',
        'published_status' => 'getPublishedStatus',
        'published_time_zone' => 'getPublishedTimeZone',
        'sequences' => 'getSequences',
        'time_zone' => 'getTimeZone'
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
        $this->setIfExists('active_contact_count', $data ?? [], null);
        $this->setIfExists('completed_contact_count', $data ?? [], null);
        $this->setIfExists('created_by_global_id', $data ?? [], null);
        $this->setIfExists('date_created', $data ?? [], null);
        $this->setIfExists('error_message', $data ?? [], null);
        $this->setIfExists('goals', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('locked', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('published_date', $data ?? [], null);
        $this->setIfExists('published_status', $data ?? [], null);
        $this->setIfExists('published_time_zone', $data ?? [], null);
        $this->setIfExists('sequences', $data ?? [], null);
        $this->setIfExists('time_zone', $data ?? [], null);
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
     * Gets active_contact_count
     *
     * @return int|null
     */
    public function getActiveContactCount()
    {
        return $this->container['active_contact_count'];
    }

    /**
     * Sets active_contact_count
     *
     * @param int|null $active_contact_count active_contact_count
     *
     * @return self
     */
    public function setActiveContactCount($active_contact_count)
    {
        if (is_null($active_contact_count)) {
            throw new \InvalidArgumentException('non-nullable active_contact_count cannot be null');
        }
        $this->container['active_contact_count'] = $active_contact_count;

        return $this;
    }

    /**
     * Gets completed_contact_count
     *
     * @return int|null
     */
    public function getCompletedContactCount()
    {
        return $this->container['completed_contact_count'];
    }

    /**
     * Sets completed_contact_count
     *
     * @param int|null $completed_contact_count completed_contact_count
     *
     * @return self
     */
    public function setCompletedContactCount($completed_contact_count)
    {
        if (is_null($completed_contact_count)) {
            throw new \InvalidArgumentException('non-nullable completed_contact_count cannot be null');
        }
        $this->container['completed_contact_count'] = $completed_contact_count;

        return $this;
    }

    /**
     * Gets created_by_global_id
     *
     * @return string|null
     */
    public function getCreatedByGlobalId()
    {
        return $this->container['created_by_global_id'];
    }

    /**
     * Sets created_by_global_id
     *
     * @param string|null $created_by_global_id created_by_global_id
     *
     * @return self
     */
    public function setCreatedByGlobalId($created_by_global_id)
    {
        if (is_null($created_by_global_id)) {
            throw new \InvalidArgumentException('non-nullable created_by_global_id cannot be null');
        }
        $this->container['created_by_global_id'] = $created_by_global_id;

        return $this;
    }

    /**
     * Gets date_created
     *
     * @return string|null
     */
    public function getDateCreated()
    {
        return $this->container['date_created'];
    }

    /**
     * Sets date_created
     *
     * @param string|null $date_created date_created
     *
     * @return self
     */
    public function setDateCreated($date_created)
    {
        if (is_null($date_created)) {
            throw new \InvalidArgumentException('non-nullable date_created cannot be null');
        }
        $this->container['date_created'] = $date_created;

        return $this;
    }

    /**
     * Gets error_message
     *
     * @return string|null
     */
    public function getErrorMessage()
    {
        return $this->container['error_message'];
    }

    /**
     * Sets error_message
     *
     * @param string|null $error_message error_message
     *
     * @return self
     */
    public function setErrorMessage($error_message)
    {
        if (is_null($error_message)) {
            throw new \InvalidArgumentException('non-nullable error_message cannot be null');
        }
        $this->container['error_message'] = $error_message;

        return $this;
    }

    /**
     * Gets goals
     *
     * @return \Keap\Sdk\Core\Model\Goal[]|null
     */
    public function getGoals()
    {
        return $this->container['goals'];
    }

    /**
     * Sets goals
     *
     * @param \Keap\Sdk\Core\Model\Goal[]|null $goals goals
     *
     * @return self
     */
    public function setGoals($goals)
    {
        if (is_null($goals)) {
            throw new \InvalidArgumentException('non-nullable goals cannot be null');
        }
        $this->container['goals'] = $goals;

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
     * Gets locked
     *
     * @return bool|null
     */
    public function getLocked()
    {
        return $this->container['locked'];
    }

    /**
     * Sets locked
     *
     * @param bool|null $locked locked
     *
     * @return self
     */
    public function setLocked($locked)
    {
        if (is_null($locked)) {
            throw new \InvalidArgumentException('non-nullable locked cannot be null');
        }
        $this->container['locked'] = $locked;

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
     * Gets published_date
     *
     * @return \DateTime|null
     */
    public function getPublishedDate()
    {
        return $this->container['published_date'];
    }

    /**
     * Sets published_date
     *
     * @param \DateTime|null $published_date published_date
     *
     * @return self
     */
    public function setPublishedDate($published_date)
    {
        if (is_null($published_date)) {
            throw new \InvalidArgumentException('non-nullable published_date cannot be null');
        }
        $this->container['published_date'] = $published_date;

        return $this;
    }

    /**
     * Gets published_status
     *
     * @return bool|null
     */
    public function getPublishedStatus()
    {
        return $this->container['published_status'];
    }

    /**
     * Sets published_status
     *
     * @param bool|null $published_status published_status
     *
     * @return self
     */
    public function setPublishedStatus($published_status)
    {
        if (is_null($published_status)) {
            throw new \InvalidArgumentException('non-nullable published_status cannot be null');
        }
        $this->container['published_status'] = $published_status;

        return $this;
    }

    /**
     * Gets published_time_zone
     *
     * @return string|null
     */
    public function getPublishedTimeZone()
    {
        return $this->container['published_time_zone'];
    }

    /**
     * Sets published_time_zone
     *
     * @param string|null $published_time_zone published_time_zone
     *
     * @return self
     */
    public function setPublishedTimeZone($published_time_zone)
    {
        if (is_null($published_time_zone)) {
            throw new \InvalidArgumentException('non-nullable published_time_zone cannot be null');
        }
        $this->container['published_time_zone'] = $published_time_zone;

        return $this;
    }

    /**
     * Gets sequences
     *
     * @return \Keap\Sdk\Core\Model\Sequence[]|null
     */
    public function getSequences()
    {
        return $this->container['sequences'];
    }

    /**
     * Sets sequences
     *
     * @param \Keap\Sdk\Core\Model\Sequence[]|null $sequences sequences
     *
     * @return self
     */
    public function setSequences($sequences)
    {
        if (is_null($sequences)) {
            throw new \InvalidArgumentException('non-nullable sequences cannot be null');
        }
        $this->container['sequences'] = $sequences;

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


