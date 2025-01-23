<?php
/**
 * Deal
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
 * The version of the OpenAPI document: 2.70.0.768375
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
 * Deal Class Doc Comment
 *
 * @category Class
 * @description Represents a deal.
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Deal implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'Deal';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'string',
        'name' => 'string',
        'value' => '\Com\Keap\Sdk\Core\Model\DealAllOfValue',
        'contacts' => '\Com\Keap\Sdk\Core\Model\DealContact[]',
        'stage' => '\Com\Keap\Sdk\Core\Model\DealAllOfStage',
        'stage_assignment_time' => '\DateTime',
        'owners' => '\Com\Keap\Sdk\Core\Model\Owner[]',
        'owner_id' => 'string',
        'task_ids' => 'string[]',
        'order_id' => 'string',
        'status' => 'string',
        'estimated_close_time' => '\DateTime',
        'closed_time' => '\DateTime',
        'custom_fields' => '\Com\Keap\Sdk\Core\Model\DealAllOfCustomFields'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'id' => null,
        'name' => null,
        'value' => null,
        'contacts' => null,
        'stage' => null,
        'stage_assignment_time' => 'date-time',
        'owners' => null,
        'owner_id' => null,
        'task_ids' => null,
        'order_id' => null,
        'status' => null,
        'estimated_close_time' => 'date-time',
        'closed_time' => 'date-time',
        'custom_fields' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'id' => false,
        'name' => false,
        'value' => false,
        'contacts' => false,
        'stage' => false,
        'stage_assignment_time' => false,
        'owners' => false,
        'owner_id' => true,
        'task_ids' => false,
        'order_id' => true,
        'status' => false,
        'estimated_close_time' => true,
        'closed_time' => true,
        'custom_fields' => true
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
        'id' => 'id',
        'name' => 'name',
        'value' => 'value',
        'contacts' => 'contacts',
        'stage' => 'stage',
        'stage_assignment_time' => 'stage_assignment_time',
        'owners' => 'owners',
        'owner_id' => 'owner_id',
        'task_ids' => 'task_ids',
        'order_id' => 'order_id',
        'status' => 'status',
        'estimated_close_time' => 'estimated_close_time',
        'closed_time' => 'closed_time',
        'custom_fields' => 'custom_fields'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'name' => 'setName',
        'value' => 'setValue',
        'contacts' => 'setContacts',
        'stage' => 'setStage',
        'stage_assignment_time' => 'setStageAssignmentTime',
        'owners' => 'setOwners',
        'owner_id' => 'setOwnerId',
        'task_ids' => 'setTaskIds',
        'order_id' => 'setOrderId',
        'status' => 'setStatus',
        'estimated_close_time' => 'setEstimatedCloseTime',
        'closed_time' => 'setClosedTime',
        'custom_fields' => 'setCustomFields'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'name' => 'getName',
        'value' => 'getValue',
        'contacts' => 'getContacts',
        'stage' => 'getStage',
        'stage_assignment_time' => 'getStageAssignmentTime',
        'owners' => 'getOwners',
        'owner_id' => 'getOwnerId',
        'task_ids' => 'getTaskIds',
        'order_id' => 'getOrderId',
        'status' => 'getStatus',
        'estimated_close_time' => 'getEstimatedCloseTime',
        'closed_time' => 'getClosedTime',
        'custom_fields' => 'getCustomFields'
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
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('value', $data ?? [], null);
        $this->setIfExists('contacts', $data ?? [], null);
        $this->setIfExists('stage', $data ?? [], null);
        $this->setIfExists('stage_assignment_time', $data ?? [], null);
        $this->setIfExists('owners', $data ?? [], null);
        $this->setIfExists('owner_id', $data ?? [], null);
        $this->setIfExists('task_ids', $data ?? [], null);
        $this->setIfExists('order_id', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('estimated_close_time', $data ?? [], null);
        $this->setIfExists('closed_time', $data ?? [], null);
        $this->setIfExists('custom_fields', $data ?? [], null);
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

        if ($this->container['name'] === null) {
            $invalidProperties[] = "'name' can't be null";
        }
        if ((mb_strlen($this->container['name']) < 1)) {
            $invalidProperties[] = "invalid value for 'name', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['value'] === null) {
            $invalidProperties[] = "'value' can't be null";
        }
        if ($this->container['contacts'] === null) {
            $invalidProperties[] = "'contacts' can't be null";
        }
        if ($this->container['stage'] === null) {
            $invalidProperties[] = "'stage' can't be null";
        }
        if ($this->container['stage_assignment_time'] === null) {
            $invalidProperties[] = "'stage_assignment_time' can't be null";
        }
        if ($this->container['owners'] === null) {
            $invalidProperties[] = "'owners' can't be null";
        }
        if ($this->container['task_ids'] === null) {
            $invalidProperties[] = "'task_ids' can't be null";
        }
        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
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
     * @param string|null $id Unique identifier for the model.
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
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name The name of the deal. This field is required and must have at least one character.
     *
     * @return self
     */
    public function setName($name)
    {
        if (is_null($name)) {
            throw new \InvalidArgumentException('non-nullable name cannot be null');
        }

        if ((mb_strlen($name) < 1)) {
            throw new \InvalidArgumentException('invalid length for $name when calling Deal., must be bigger than or equal to 1.');
        }

        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets value
     *
     * @return \Com\Keap\Sdk\Core\Model\DealAllOfValue
     */
    public function getValue()
    {
        return $this->container['value'];
    }

    /**
     * Sets value
     *
     * @param \Com\Keap\Sdk\Core\Model\DealAllOfValue $value value
     *
     * @return self
     */
    public function setValue($value)
    {
        if (is_null($value)) {
            throw new \InvalidArgumentException('non-nullable value cannot be null');
        }
        $this->container['value'] = $value;

        return $this;
    }

    /**
     * Gets contacts
     *
     * @return \Com\Keap\Sdk\Core\Model\DealContact[]
     */
    public function getContacts()
    {
        return $this->container['contacts'];
    }

    /**
     * Sets contacts
     *
     * @param \Com\Keap\Sdk\Core\Model\DealContact[] $contacts The list of contacts associated with the deal. This field is required.
     *
     * @return self
     */
    public function setContacts($contacts)
    {
        if (is_null($contacts)) {
            throw new \InvalidArgumentException('non-nullable contacts cannot be null');
        }
        $this->container['contacts'] = $contacts;

        return $this;
    }

    /**
     * Gets stage
     *
     * @return \Com\Keap\Sdk\Core\Model\DealAllOfStage
     */
    public function getStage()
    {
        return $this->container['stage'];
    }

    /**
     * Sets stage
     *
     * @param \Com\Keap\Sdk\Core\Model\DealAllOfStage $stage stage
     *
     * @return self
     */
    public function setStage($stage)
    {
        if (is_null($stage)) {
            throw new \InvalidArgumentException('non-nullable stage cannot be null');
        }
        $this->container['stage'] = $stage;

        return $this;
    }

    /**
     * Gets stage_assignment_time
     *
     * @return \DateTime
     */
    public function getStageAssignmentTime()
    {
        return $this->container['stage_assignment_time'];
    }

    /**
     * Sets stage_assignment_time
     *
     * @param \DateTime $stage_assignment_time The time when the deal was assigned to the current stage. This field is required.
     *
     * @return self
     */
    public function setStageAssignmentTime($stage_assignment_time)
    {
        if (is_null($stage_assignment_time)) {
            throw new \InvalidArgumentException('non-nullable stage_assignment_time cannot be null');
        }
        $this->container['stage_assignment_time'] = $stage_assignment_time;

        return $this;
    }

    /**
     * Gets owners
     *
     * @return \Com\Keap\Sdk\Core\Model\Owner[]
     */
    public function getOwners()
    {
        return $this->container['owners'];
    }

    /**
     * Sets owners
     *
     * @param \Com\Keap\Sdk\Core\Model\Owner[] $owners The list of owners of the deal. This field is required.
     *
     * @return self
     */
    public function setOwners($owners)
    {
        if (is_null($owners)) {
            throw new \InvalidArgumentException('non-nullable owners cannot be null');
        }
        $this->container['owners'] = $owners;

        return $this;
    }

    /**
     * Gets owner_id
     *
     * @return string|null
     */
    public function getOwnerId()
    {
        return $this->container['owner_id'];
    }

    /**
     * Sets owner_id
     *
     * @param string|null $owner_id The ID of the owner of the deal. This field is optional.
     *
     * @return self
     */
    public function setOwnerId($owner_id)
    {
        if (is_null($owner_id)) {
            array_push($this->openAPINullablesSetToNull, 'owner_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('owner_id', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['owner_id'] = $owner_id;

        return $this;
    }

    /**
     * Gets task_ids
     *
     * @return string[]
     */
    public function getTaskIds()
    {
        return $this->container['task_ids'];
    }

    /**
     * Sets task_ids
     *
     * @param string[] $task_ids The list of task IDs associated with the deal. This field is required.
     *
     * @return self
     */
    public function setTaskIds($task_ids)
    {
        if (is_null($task_ids)) {
            throw new \InvalidArgumentException('non-nullable task_ids cannot be null');
        }
        $this->container['task_ids'] = $task_ids;

        return $this;
    }

    /**
     * Gets order_id
     *
     * @return string|null
     */
    public function getOrderId()
    {
        return $this->container['order_id'];
    }

    /**
     * Sets order_id
     *
     * @param string|null $order_id The order of the deal. This field is optional.
     *
     * @return self
     */
    public function setOrderId($order_id)
    {
        if (is_null($order_id)) {
            array_push($this->openAPINullablesSetToNull, 'order_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('order_id', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['order_id'] = $order_id;

        return $this;
    }

    /**
     * Gets status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string $status The status of the deal. This field is required.
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
     * Gets estimated_close_time
     *
     * @return \DateTime|null
     */
    public function getEstimatedCloseTime()
    {
        return $this->container['estimated_close_time'];
    }

    /**
     * Sets estimated_close_time
     *
     * @param \DateTime|null $estimated_close_time The estimated close time of the deal. This field is optional.
     *
     * @return self
     */
    public function setEstimatedCloseTime($estimated_close_time)
    {
        if (is_null($estimated_close_time)) {
            array_push($this->openAPINullablesSetToNull, 'estimated_close_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('estimated_close_time', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['estimated_close_time'] = $estimated_close_time;

        return $this;
    }

    /**
     * Gets closed_time
     *
     * @return \DateTime|null
     */
    public function getClosedTime()
    {
        return $this->container['closed_time'];
    }

    /**
     * Sets closed_time
     *
     * @param \DateTime|null $closed_time The actual close time of the deal. This field is optional.
     *
     * @return self
     */
    public function setClosedTime($closed_time)
    {
        if (is_null($closed_time)) {
            array_push($this->openAPINullablesSetToNull, 'closed_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('closed_time', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['closed_time'] = $closed_time;

        return $this;
    }

    /**
     * Gets custom_fields
     *
     * @return \Com\Keap\Sdk\Core\Model\DealAllOfCustomFields|null
     */
    public function getCustomFields()
    {
        return $this->container['custom_fields'];
    }

    /**
     * Sets custom_fields
     *
     * @param \Com\Keap\Sdk\Core\Model\DealAllOfCustomFields|null $custom_fields custom_fields
     *
     * @return self
     */
    public function setCustomFields($custom_fields)
    {
        if (is_null($custom_fields)) {
            array_push($this->openAPINullablesSetToNull, 'custom_fields');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('custom_fields', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['custom_fields'] = $custom_fields;

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


