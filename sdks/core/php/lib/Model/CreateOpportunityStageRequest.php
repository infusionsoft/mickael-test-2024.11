<?php
/**
 * CreateOpportunityStageRequest
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
 * CreateOpportunityStageRequest Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateOpportunityStageRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'CreateOpportunityStageRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'checklist_items' => '\Com\Keap\Sdk\Core\Model\CreateOpportunityStageChecklistItem[]',
        'name' => 'string',
        'order' => 'int',
        'probability' => 'int',
        'target_number_days' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'checklist_items' => null,
        'name' => null,
        'order' => 'int32',
        'probability' => 'int32',
        'target_number_days' => 'int32'
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'checklist_items' => false,
        'name' => false,
        'order' => false,
        'probability' => false,
        'target_number_days' => false
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
        'checklist_items' => 'checklist_items',
        'name' => 'name',
        'order' => 'order',
        'probability' => 'probability',
        'target_number_days' => 'target_number_days'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'checklist_items' => 'setChecklistItems',
        'name' => 'setName',
        'order' => 'setOrder',
        'probability' => 'setProbability',
        'target_number_days' => 'setTargetNumberDays'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'checklist_items' => 'getChecklistItems',
        'name' => 'getName',
        'order' => 'getOrder',
        'probability' => 'getProbability',
        'target_number_days' => 'getTargetNumberDays'
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
        $this->setIfExists('checklist_items', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('order', $data ?? [], null);
        $this->setIfExists('probability', $data ?? [], null);
        $this->setIfExists('target_number_days', $data ?? [], null);
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
        if ($this->container['order'] === null) {
            $invalidProperties[] = "'order' can't be null";
        }
        if ($this->container['probability'] === null) {
            $invalidProperties[] = "'probability' can't be null";
        }
        if ($this->container['target_number_days'] === null) {
            $invalidProperties[] = "'target_number_days' can't be null";
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
     * Gets checklist_items
     *
     * @return \Com\Keap\Sdk\Core\Model\CreateOpportunityStageChecklistItem[]|null
     */
    public function getChecklistItems()
    {
        return $this->container['checklist_items'];
    }

    /**
     * Sets checklist_items
     *
     * @param \Com\Keap\Sdk\Core\Model\CreateOpportunityStageChecklistItem[]|null $checklist_items checklist_items
     *
     * @return self
     */
    public function setChecklistItems($checklist_items)
    {
        if (is_null($checklist_items)) {
            throw new \InvalidArgumentException('non-nullable checklist_items cannot be null');
        }
        $this->container['checklist_items'] = $checklist_items;

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
     * @param string $name name
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
     * Gets order
     *
     * @return int
     */
    public function getOrder()
    {
        return $this->container['order'];
    }

    /**
     * Sets order
     *
     * @param int $order order
     *
     * @return self
     */
    public function setOrder($order)
    {
        if (is_null($order)) {
            throw new \InvalidArgumentException('non-nullable order cannot be null');
        }
        $this->container['order'] = $order;

        return $this;
    }

    /**
     * Gets probability
     *
     * @return int
     */
    public function getProbability()
    {
        return $this->container['probability'];
    }

    /**
     * Sets probability
     *
     * @param int $probability probability
     *
     * @return self
     */
    public function setProbability($probability)
    {
        if (is_null($probability)) {
            throw new \InvalidArgumentException('non-nullable probability cannot be null');
        }
        $this->container['probability'] = $probability;

        return $this;
    }

    /**
     * Gets target_number_days
     *
     * @return int
     */
    public function getTargetNumberDays()
    {
        return $this->container['target_number_days'];
    }

    /**
     * Sets target_number_days
     *
     * @param int $target_number_days target_number_days
     *
     * @return self
     */
    public function setTargetNumberDays($target_number_days)
    {
        if (is_null($target_number_days)) {
            throw new \InvalidArgumentException('non-nullable target_number_days cannot be null');
        }
        $this->container['target_number_days'] = $target_number_days;

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


