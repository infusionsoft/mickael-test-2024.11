<?php
/**
 * UpdateStageRequest
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

namespace Keap\Sdk\Core\Model;

use \ArrayAccess;
use \Keap\Sdk\Core\ObjectSerializer;

/**
 * UpdateStageRequest Class Doc Comment
 *
 * @category Class
 * @description Request for updating a stage.
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class UpdateStageRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'UpdateStageRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'name' => 'string',
        'previous_stage_id' => 'string',
        'next_stage_id' => 'string',
        'pipeline_id' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'name' => null,
        'previous_stage_id' => null,
        'next_stage_id' => null,
        'pipeline_id' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'name' => true,
        'previous_stage_id' => true,
        'next_stage_id' => true,
        'pipeline_id' => true
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
        'name' => 'name',
        'previous_stage_id' => 'previous_stage_id',
        'next_stage_id' => 'next_stage_id',
        'pipeline_id' => 'pipeline_id'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'name' => 'setName',
        'previous_stage_id' => 'setPreviousStageId',
        'next_stage_id' => 'setNextStageId',
        'pipeline_id' => 'setPipelineId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'name' => 'getName',
        'previous_stage_id' => 'getPreviousStageId',
        'next_stage_id' => 'getNextStageId',
        'pipeline_id' => 'getPipelineId'
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
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('previous_stage_id', $data ?? [], null);
        $this->setIfExists('next_stage_id', $data ?? [], null);
        $this->setIfExists('pipeline_id', $data ?? [], null);
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

        if ($this->container['previous_stage_id'] === null) {
            $invalidProperties[] = "'previous_stage_id' can't be null";
        }
        if ((mb_strlen($this->container['previous_stage_id']) < 1)) {
            $invalidProperties[] = "invalid value for 'previous_stage_id', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['next_stage_id'] === null) {
            $invalidProperties[] = "'next_stage_id' can't be null";
        }
        if ((mb_strlen($this->container['next_stage_id']) < 1)) {
            $invalidProperties[] = "invalid value for 'next_stage_id', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['pipeline_id'] === null) {
            $invalidProperties[] = "'pipeline_id' can't be null";
        }
        if ((mb_strlen($this->container['pipeline_id']) < 1)) {
            $invalidProperties[] = "invalid value for 'pipeline_id', the character length must be bigger than or equal to 1.";
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
     * @param string $name The name of the stage.
     *
     * @return self
     */
    public function setName($name)
    {
        if (is_null($name)) {
            array_push($this->openAPINullablesSetToNull, 'name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('name', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($name) && (mb_strlen($name) < 1)) {
            throw new \InvalidArgumentException('invalid length for $name when calling UpdateStageRequest., must be bigger than or equal to 1.');
        }

        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets previous_stage_id
     *
     * @return string
     */
    public function getPreviousStageId()
    {
        return $this->container['previous_stage_id'];
    }

    /**
     * Sets previous_stage_id
     *
     * @param string $previous_stage_id The ID of the previous stage.
     *
     * @return self
     */
    public function setPreviousStageId($previous_stage_id)
    {
        if (is_null($previous_stage_id)) {
            array_push($this->openAPINullablesSetToNull, 'previous_stage_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('previous_stage_id', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($previous_stage_id) && (mb_strlen($previous_stage_id) < 1)) {
            throw new \InvalidArgumentException('invalid length for $previous_stage_id when calling UpdateStageRequest., must be bigger than or equal to 1.');
        }

        $this->container['previous_stage_id'] = $previous_stage_id;

        return $this;
    }

    /**
     * Gets next_stage_id
     *
     * @return string
     */
    public function getNextStageId()
    {
        return $this->container['next_stage_id'];
    }

    /**
     * Sets next_stage_id
     *
     * @param string $next_stage_id The ID of the next stage.
     *
     * @return self
     */
    public function setNextStageId($next_stage_id)
    {
        if (is_null($next_stage_id)) {
            array_push($this->openAPINullablesSetToNull, 'next_stage_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('next_stage_id', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($next_stage_id) && (mb_strlen($next_stage_id) < 1)) {
            throw new \InvalidArgumentException('invalid length for $next_stage_id when calling UpdateStageRequest., must be bigger than or equal to 1.');
        }

        $this->container['next_stage_id'] = $next_stage_id;

        return $this;
    }

    /**
     * Gets pipeline_id
     *
     * @return string
     */
    public function getPipelineId()
    {
        return $this->container['pipeline_id'];
    }

    /**
     * Sets pipeline_id
     *
     * @param string $pipeline_id The ID of the pipeline.
     *
     * @return self
     */
    public function setPipelineId($pipeline_id)
    {
        if (is_null($pipeline_id)) {
            array_push($this->openAPINullablesSetToNull, 'pipeline_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('pipeline_id', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($pipeline_id) && (mb_strlen($pipeline_id) < 1)) {
            throw new \InvalidArgumentException('invalid length for $pipeline_id when calling UpdateStageRequest., must be bigger than or equal to 1.');
        }

        $this->container['pipeline_id'] = $pipeline_id;

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


