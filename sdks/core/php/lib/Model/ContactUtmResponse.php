<?php
/**
 * ContactUtmResponse
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
 * The version of the OpenAPI document: 2.70.0.764128
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
 * ContactUtmResponse Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ContactUtmResponse implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ContactUtmResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'date_created' => '\DateTime',
        'first_touch' => 'bool',
        'id' => 'int',
        'keap_source_id' => 'string',
        'last_touch' => 'bool',
        'utm_campaign' => 'string',
        'utm_content' => 'string',
        'utm_medium' => 'string',
        'utm_source' => 'string',
        'utm_term' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'date_created' => 'date-time',
        'first_touch' => null,
        'id' => 'int64',
        'keap_source_id' => null,
        'last_touch' => null,
        'utm_campaign' => null,
        'utm_content' => null,
        'utm_medium' => null,
        'utm_source' => null,
        'utm_term' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'date_created' => false,
        'first_touch' => false,
        'id' => false,
        'keap_source_id' => false,
        'last_touch' => false,
        'utm_campaign' => false,
        'utm_content' => false,
        'utm_medium' => false,
        'utm_source' => false,
        'utm_term' => false
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
        'date_created' => 'dateCreated',
        'first_touch' => 'firstTouch',
        'id' => 'id',
        'keap_source_id' => 'keapSourceId',
        'last_touch' => 'lastTouch',
        'utm_campaign' => 'utmCampaign',
        'utm_content' => 'utmContent',
        'utm_medium' => 'utmMedium',
        'utm_source' => 'utmSource',
        'utm_term' => 'utmTerm'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'date_created' => 'setDateCreated',
        'first_touch' => 'setFirstTouch',
        'id' => 'setId',
        'keap_source_id' => 'setKeapSourceId',
        'last_touch' => 'setLastTouch',
        'utm_campaign' => 'setUtmCampaign',
        'utm_content' => 'setUtmContent',
        'utm_medium' => 'setUtmMedium',
        'utm_source' => 'setUtmSource',
        'utm_term' => 'setUtmTerm'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'date_created' => 'getDateCreated',
        'first_touch' => 'getFirstTouch',
        'id' => 'getId',
        'keap_source_id' => 'getKeapSourceId',
        'last_touch' => 'getLastTouch',
        'utm_campaign' => 'getUtmCampaign',
        'utm_content' => 'getUtmContent',
        'utm_medium' => 'getUtmMedium',
        'utm_source' => 'getUtmSource',
        'utm_term' => 'getUtmTerm'
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
        $this->setIfExists('date_created', $data ?? [], null);
        $this->setIfExists('first_touch', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('keap_source_id', $data ?? [], null);
        $this->setIfExists('last_touch', $data ?? [], null);
        $this->setIfExists('utm_campaign', $data ?? [], null);
        $this->setIfExists('utm_content', $data ?? [], null);
        $this->setIfExists('utm_medium', $data ?? [], null);
        $this->setIfExists('utm_source', $data ?? [], null);
        $this->setIfExists('utm_term', $data ?? [], null);
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
     * Gets date_created
     *
     * @return \DateTime|null
     */
    public function getDateCreated()
    {
        return $this->container['date_created'];
    }

    /**
     * Sets date_created
     *
     * @param \DateTime|null $date_created date_created
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
     * Gets first_touch
     *
     * @return bool|null
     */
    public function getFirstTouch()
    {
        return $this->container['first_touch'];
    }

    /**
     * Sets first_touch
     *
     * @param bool|null $first_touch first_touch
     *
     * @return self
     */
    public function setFirstTouch($first_touch)
    {
        if (is_null($first_touch)) {
            throw new \InvalidArgumentException('non-nullable first_touch cannot be null');
        }
        $this->container['first_touch'] = $first_touch;

        return $this;
    }

    /**
     * Gets id
     *
     * @return int|null
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int|null $id id
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
     * Gets keap_source_id
     *
     * @return string|null
     */
    public function getKeapSourceId()
    {
        return $this->container['keap_source_id'];
    }

    /**
     * Sets keap_source_id
     *
     * @param string|null $keap_source_id keap_source_id
     *
     * @return self
     */
    public function setKeapSourceId($keap_source_id)
    {
        if (is_null($keap_source_id)) {
            throw new \InvalidArgumentException('non-nullable keap_source_id cannot be null');
        }
        $this->container['keap_source_id'] = $keap_source_id;

        return $this;
    }

    /**
     * Gets last_touch
     *
     * @return bool|null
     */
    public function getLastTouch()
    {
        return $this->container['last_touch'];
    }

    /**
     * Sets last_touch
     *
     * @param bool|null $last_touch last_touch
     *
     * @return self
     */
    public function setLastTouch($last_touch)
    {
        if (is_null($last_touch)) {
            throw new \InvalidArgumentException('non-nullable last_touch cannot be null');
        }
        $this->container['last_touch'] = $last_touch;

        return $this;
    }

    /**
     * Gets utm_campaign
     *
     * @return string|null
     */
    public function getUtmCampaign()
    {
        return $this->container['utm_campaign'];
    }

    /**
     * Sets utm_campaign
     *
     * @param string|null $utm_campaign utm_campaign
     *
     * @return self
     */
    public function setUtmCampaign($utm_campaign)
    {
        if (is_null($utm_campaign)) {
            throw new \InvalidArgumentException('non-nullable utm_campaign cannot be null');
        }
        $this->container['utm_campaign'] = $utm_campaign;

        return $this;
    }

    /**
     * Gets utm_content
     *
     * @return string|null
     */
    public function getUtmContent()
    {
        return $this->container['utm_content'];
    }

    /**
     * Sets utm_content
     *
     * @param string|null $utm_content utm_content
     *
     * @return self
     */
    public function setUtmContent($utm_content)
    {
        if (is_null($utm_content)) {
            throw new \InvalidArgumentException('non-nullable utm_content cannot be null');
        }
        $this->container['utm_content'] = $utm_content;

        return $this;
    }

    /**
     * Gets utm_medium
     *
     * @return string|null
     */
    public function getUtmMedium()
    {
        return $this->container['utm_medium'];
    }

    /**
     * Sets utm_medium
     *
     * @param string|null $utm_medium utm_medium
     *
     * @return self
     */
    public function setUtmMedium($utm_medium)
    {
        if (is_null($utm_medium)) {
            throw new \InvalidArgumentException('non-nullable utm_medium cannot be null');
        }
        $this->container['utm_medium'] = $utm_medium;

        return $this;
    }

    /**
     * Gets utm_source
     *
     * @return string|null
     */
    public function getUtmSource()
    {
        return $this->container['utm_source'];
    }

    /**
     * Sets utm_source
     *
     * @param string|null $utm_source utm_source
     *
     * @return self
     */
    public function setUtmSource($utm_source)
    {
        if (is_null($utm_source)) {
            throw new \InvalidArgumentException('non-nullable utm_source cannot be null');
        }
        $this->container['utm_source'] = $utm_source;

        return $this;
    }

    /**
     * Gets utm_term
     *
     * @return string|null
     */
    public function getUtmTerm()
    {
        return $this->container['utm_term'];
    }

    /**
     * Sets utm_term
     *
     * @param string|null $utm_term utm_term
     *
     * @return self
     */
    public function setUtmTerm($utm_term)
    {
        if (is_null($utm_term)) {
            throw new \InvalidArgumentException('non-nullable utm_term cannot be null');
        }
        $this->container['utm_term'] = $utm_term;

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


