<?php
/**
 * UpdateTaskResponse
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
 * UpdateTaskResponse Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class UpdateTaskResponse implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'UpdateTaskResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'assigned_to_user_id' => 'string',
        'completed' => 'bool',
        'completion_time' => 'string',
        'contact_id' => 'string',
        'create_time' => 'string',
        'created_by_user_id' => 'string',
        'description' => 'string',
        'due_time' => 'string',
        'id' => 'string',
        'modification_time' => 'string',
        'priority' => 'string',
        'remind_time_mins' => 'int',
        'title' => 'string',
        'type' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'assigned_to_user_id' => null,
        'completed' => null,
        'completion_time' => null,
        'contact_id' => null,
        'create_time' => null,
        'created_by_user_id' => null,
        'description' => null,
        'due_time' => null,
        'id' => null,
        'modification_time' => null,
        'priority' => null,
        'remind_time_mins' => 'int32',
        'title' => null,
        'type' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'assigned_to_user_id' => false,
        'completed' => false,
        'completion_time' => false,
        'contact_id' => false,
        'create_time' => false,
        'created_by_user_id' => false,
        'description' => false,
        'due_time' => false,
        'id' => false,
        'modification_time' => false,
        'priority' => false,
        'remind_time_mins' => false,
        'title' => false,
        'type' => false
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
        'assigned_to_user_id' => 'assigned_to_user_id',
        'completed' => 'completed',
        'completion_time' => 'completion_time',
        'contact_id' => 'contact_id',
        'create_time' => 'create_time',
        'created_by_user_id' => 'created_by_user_id',
        'description' => 'description',
        'due_time' => 'due_time',
        'id' => 'id',
        'modification_time' => 'modification_time',
        'priority' => 'priority',
        'remind_time_mins' => 'remind_time_mins',
        'title' => 'title',
        'type' => 'type'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'assigned_to_user_id' => 'setAssignedToUserId',
        'completed' => 'setCompleted',
        'completion_time' => 'setCompletionTime',
        'contact_id' => 'setContactId',
        'create_time' => 'setCreateTime',
        'created_by_user_id' => 'setCreatedByUserId',
        'description' => 'setDescription',
        'due_time' => 'setDueTime',
        'id' => 'setId',
        'modification_time' => 'setModificationTime',
        'priority' => 'setPriority',
        'remind_time_mins' => 'setRemindTimeMins',
        'title' => 'setTitle',
        'type' => 'setType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'assigned_to_user_id' => 'getAssignedToUserId',
        'completed' => 'getCompleted',
        'completion_time' => 'getCompletionTime',
        'contact_id' => 'getContactId',
        'create_time' => 'getCreateTime',
        'created_by_user_id' => 'getCreatedByUserId',
        'description' => 'getDescription',
        'due_time' => 'getDueTime',
        'id' => 'getId',
        'modification_time' => 'getModificationTime',
        'priority' => 'getPriority',
        'remind_time_mins' => 'getRemindTimeMins',
        'title' => 'getTitle',
        'type' => 'getType'
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

    public const PRIORITY_CRITICAL = 'CRITICAL';
    public const PRIORITY_ESSENTIAL = 'ESSENTIAL';
    public const PRIORITY_NONESSENTIAL = 'NONESSENTIAL';
    public const TYPE_EMAIL = 'EMAIL';
    public const TYPE_CALL = 'CALL';
    public const TYPE_APPOINTMENT = 'APPOINTMENT';
    public const TYPE_FAX = 'FAX';
    public const TYPE_LETTER = 'LETTER';
    public const TYPE_OTHER = 'OTHER';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getPriorityAllowableValues()
    {
        return [
            self::PRIORITY_CRITICAL,
            self::PRIORITY_ESSENTIAL,
            self::PRIORITY_NONESSENTIAL,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getTypeAllowableValues()
    {
        return [
            self::TYPE_EMAIL,
            self::TYPE_CALL,
            self::TYPE_APPOINTMENT,
            self::TYPE_FAX,
            self::TYPE_LETTER,
            self::TYPE_OTHER,
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
        $this->setIfExists('assigned_to_user_id', $data ?? [], null);
        $this->setIfExists('completed', $data ?? [], null);
        $this->setIfExists('completion_time', $data ?? [], null);
        $this->setIfExists('contact_id', $data ?? [], null);
        $this->setIfExists('create_time', $data ?? [], null);
        $this->setIfExists('created_by_user_id', $data ?? [], null);
        $this->setIfExists('description', $data ?? [], null);
        $this->setIfExists('due_time', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('modification_time', $data ?? [], null);
        $this->setIfExists('priority', $data ?? [], null);
        $this->setIfExists('remind_time_mins', $data ?? [], null);
        $this->setIfExists('title', $data ?? [], null);
        $this->setIfExists('type', $data ?? [], null);
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

        $allowedValues = $this->getPriorityAllowableValues();
        if (!is_null($this->container['priority']) && !in_array($this->container['priority'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'priority', must be one of '%s'",
                $this->container['priority'],
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getTypeAllowableValues();
        if (!is_null($this->container['type']) && !in_array($this->container['type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'type', must be one of '%s'",
                $this->container['type'],
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
     * Gets assigned_to_user_id
     *
     * @return string|null
     */
    public function getAssignedToUserId()
    {
        return $this->container['assigned_to_user_id'];
    }

    /**
     * Sets assigned_to_user_id
     *
     * @param string|null $assigned_to_user_id assigned_to_user_id
     *
     * @return self
     */
    public function setAssignedToUserId($assigned_to_user_id)
    {
        if (is_null($assigned_to_user_id)) {
            throw new \InvalidArgumentException('non-nullable assigned_to_user_id cannot be null');
        }
        $this->container['assigned_to_user_id'] = $assigned_to_user_id;

        return $this;
    }

    /**
     * Gets completed
     *
     * @return bool|null
     */
    public function getCompleted()
    {
        return $this->container['completed'];
    }

    /**
     * Sets completed
     *
     * @param bool|null $completed completed
     *
     * @return self
     */
    public function setCompleted($completed)
    {
        if (is_null($completed)) {
            throw new \InvalidArgumentException('non-nullable completed cannot be null');
        }
        $this->container['completed'] = $completed;

        return $this;
    }

    /**
     * Gets completion_time
     *
     * @return string|null
     */
    public function getCompletionTime()
    {
        return $this->container['completion_time'];
    }

    /**
     * Sets completion_time
     *
     * @param string|null $completion_time completion_time
     *
     * @return self
     */
    public function setCompletionTime($completion_time)
    {
        if (is_null($completion_time)) {
            throw new \InvalidArgumentException('non-nullable completion_time cannot be null');
        }
        $this->container['completion_time'] = $completion_time;

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
     * Gets create_time
     *
     * @return string|null
     */
    public function getCreateTime()
    {
        return $this->container['create_time'];
    }

    /**
     * Sets create_time
     *
     * @param string|null $create_time On initial object the returned value for this property may not accurately represent the exact stored value.
     *
     * @return self
     */
    public function setCreateTime($create_time)
    {
        if (is_null($create_time)) {
            throw new \InvalidArgumentException('non-nullable create_time cannot be null');
        }
        $this->container['create_time'] = $create_time;

        return $this;
    }

    /**
     * Gets created_by_user_id
     *
     * @return string|null
     */
    public function getCreatedByUserId()
    {
        return $this->container['created_by_user_id'];
    }

    /**
     * Sets created_by_user_id
     *
     * @param string|null $created_by_user_id created_by_user_id
     *
     * @return self
     */
    public function setCreatedByUserId($created_by_user_id)
    {
        if (is_null($created_by_user_id)) {
            throw new \InvalidArgumentException('non-nullable created_by_user_id cannot be null');
        }
        $this->container['created_by_user_id'] = $created_by_user_id;

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
     * Gets due_time
     *
     * @return string|null
     */
    public function getDueTime()
    {
        return $this->container['due_time'];
    }

    /**
     * Sets due_time
     *
     * @param string|null $due_time due_time
     *
     * @return self
     */
    public function setDueTime($due_time)
    {
        if (is_null($due_time)) {
            throw new \InvalidArgumentException('non-nullable due_time cannot be null');
        }
        $this->container['due_time'] = $due_time;

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
     * Gets priority
     *
     * @return string|null
     */
    public function getPriority()
    {
        return $this->container['priority'];
    }

    /**
     * Sets priority
     *
     * @param string|null $priority priority
     *
     * @return self
     */
    public function setPriority($priority)
    {
        if (is_null($priority)) {
            throw new \InvalidArgumentException('non-nullable priority cannot be null');
        }
        $allowedValues = $this->getPriorityAllowableValues();
        if (!in_array($priority, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'priority', must be one of '%s'",
                    $priority,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['priority'] = $priority;

        return $this;
    }

    /**
     * Gets remind_time_mins
     *
     * @return int|null
     */
    public function getRemindTimeMins()
    {
        return $this->container['remind_time_mins'];
    }

    /**
     * Sets remind_time_mins
     *
     * @param int|null $remind_time_mins remind_time_mins
     *
     * @return self
     */
    public function setRemindTimeMins($remind_time_mins)
    {
        if (is_null($remind_time_mins)) {
            throw new \InvalidArgumentException('non-nullable remind_time_mins cannot be null');
        }
        $this->container['remind_time_mins'] = $remind_time_mins;

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
     * Gets type
     *
     * @return string|null
     */
    public function getType()
    {
        return $this->container['type'];
    }

    /**
     * Sets type
     *
     * @param string|null $type type
     *
     * @return self
     */
    public function setType($type)
    {
        if (is_null($type)) {
            throw new \InvalidArgumentException('non-nullable type cannot be null');
        }
        $allowedValues = $this->getTypeAllowableValues();
        if (!in_array($type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'type', must be one of '%s'",
                    $type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['type'] = $type;

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


