<?php
/**
 * URI
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
 * URI Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class URI implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'URI';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'absolute' => 'bool',
        'authority' => 'string',
        'fragment' => 'string',
        'host' => 'string',
        'opaque' => 'bool',
        'path' => 'string',
        'port' => 'int',
        'query' => 'string',
        'raw_authority' => 'string',
        'raw_fragment' => 'string',
        'raw_path' => 'string',
        'raw_query' => 'string',
        'raw_scheme_specific_part' => 'string',
        'raw_user_info' => 'string',
        'scheme' => 'string',
        'scheme_specific_part' => 'string',
        'user_info' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'absolute' => null,
        'authority' => null,
        'fragment' => null,
        'host' => null,
        'opaque' => null,
        'path' => null,
        'port' => 'int32',
        'query' => null,
        'raw_authority' => null,
        'raw_fragment' => null,
        'raw_path' => null,
        'raw_query' => null,
        'raw_scheme_specific_part' => null,
        'raw_user_info' => null,
        'scheme' => null,
        'scheme_specific_part' => null,
        'user_info' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'absolute' => false,
        'authority' => false,
        'fragment' => false,
        'host' => false,
        'opaque' => false,
        'path' => false,
        'port' => false,
        'query' => false,
        'raw_authority' => false,
        'raw_fragment' => false,
        'raw_path' => false,
        'raw_query' => false,
        'raw_scheme_specific_part' => false,
        'raw_user_info' => false,
        'scheme' => false,
        'scheme_specific_part' => false,
        'user_info' => false
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
        'absolute' => 'absolute',
        'authority' => 'authority',
        'fragment' => 'fragment',
        'host' => 'host',
        'opaque' => 'opaque',
        'path' => 'path',
        'port' => 'port',
        'query' => 'query',
        'raw_authority' => 'rawAuthority',
        'raw_fragment' => 'rawFragment',
        'raw_path' => 'rawPath',
        'raw_query' => 'rawQuery',
        'raw_scheme_specific_part' => 'rawSchemeSpecificPart',
        'raw_user_info' => 'rawUserInfo',
        'scheme' => 'scheme',
        'scheme_specific_part' => 'schemeSpecificPart',
        'user_info' => 'userInfo'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'absolute' => 'setAbsolute',
        'authority' => 'setAuthority',
        'fragment' => 'setFragment',
        'host' => 'setHost',
        'opaque' => 'setOpaque',
        'path' => 'setPath',
        'port' => 'setPort',
        'query' => 'setQuery',
        'raw_authority' => 'setRawAuthority',
        'raw_fragment' => 'setRawFragment',
        'raw_path' => 'setRawPath',
        'raw_query' => 'setRawQuery',
        'raw_scheme_specific_part' => 'setRawSchemeSpecificPart',
        'raw_user_info' => 'setRawUserInfo',
        'scheme' => 'setScheme',
        'scheme_specific_part' => 'setSchemeSpecificPart',
        'user_info' => 'setUserInfo'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'absolute' => 'getAbsolute',
        'authority' => 'getAuthority',
        'fragment' => 'getFragment',
        'host' => 'getHost',
        'opaque' => 'getOpaque',
        'path' => 'getPath',
        'port' => 'getPort',
        'query' => 'getQuery',
        'raw_authority' => 'getRawAuthority',
        'raw_fragment' => 'getRawFragment',
        'raw_path' => 'getRawPath',
        'raw_query' => 'getRawQuery',
        'raw_scheme_specific_part' => 'getRawSchemeSpecificPart',
        'raw_user_info' => 'getRawUserInfo',
        'scheme' => 'getScheme',
        'scheme_specific_part' => 'getSchemeSpecificPart',
        'user_info' => 'getUserInfo'
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
        $this->setIfExists('absolute', $data ?? [], null);
        $this->setIfExists('authority', $data ?? [], null);
        $this->setIfExists('fragment', $data ?? [], null);
        $this->setIfExists('host', $data ?? [], null);
        $this->setIfExists('opaque', $data ?? [], null);
        $this->setIfExists('path', $data ?? [], null);
        $this->setIfExists('port', $data ?? [], null);
        $this->setIfExists('query', $data ?? [], null);
        $this->setIfExists('raw_authority', $data ?? [], null);
        $this->setIfExists('raw_fragment', $data ?? [], null);
        $this->setIfExists('raw_path', $data ?? [], null);
        $this->setIfExists('raw_query', $data ?? [], null);
        $this->setIfExists('raw_scheme_specific_part', $data ?? [], null);
        $this->setIfExists('raw_user_info', $data ?? [], null);
        $this->setIfExists('scheme', $data ?? [], null);
        $this->setIfExists('scheme_specific_part', $data ?? [], null);
        $this->setIfExists('user_info', $data ?? [], null);
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
     * Gets absolute
     *
     * @return bool|null
     */
    public function getAbsolute()
    {
        return $this->container['absolute'];
    }

    /**
     * Sets absolute
     *
     * @param bool|null $absolute absolute
     *
     * @return self
     */
    public function setAbsolute($absolute)
    {
        if (is_null($absolute)) {
            throw new \InvalidArgumentException('non-nullable absolute cannot be null');
        }
        $this->container['absolute'] = $absolute;

        return $this;
    }

    /**
     * Gets authority
     *
     * @return string|null
     */
    public function getAuthority()
    {
        return $this->container['authority'];
    }

    /**
     * Sets authority
     *
     * @param string|null $authority authority
     *
     * @return self
     */
    public function setAuthority($authority)
    {
        if (is_null($authority)) {
            throw new \InvalidArgumentException('non-nullable authority cannot be null');
        }
        $this->container['authority'] = $authority;

        return $this;
    }

    /**
     * Gets fragment
     *
     * @return string|null
     */
    public function getFragment()
    {
        return $this->container['fragment'];
    }

    /**
     * Sets fragment
     *
     * @param string|null $fragment fragment
     *
     * @return self
     */
    public function setFragment($fragment)
    {
        if (is_null($fragment)) {
            throw new \InvalidArgumentException('non-nullable fragment cannot be null');
        }
        $this->container['fragment'] = $fragment;

        return $this;
    }

    /**
     * Gets host
     *
     * @return string|null
     */
    public function getHost()
    {
        return $this->container['host'];
    }

    /**
     * Sets host
     *
     * @param string|null $host host
     *
     * @return self
     */
    public function setHost($host)
    {
        if (is_null($host)) {
            throw new \InvalidArgumentException('non-nullable host cannot be null');
        }
        $this->container['host'] = $host;

        return $this;
    }

    /**
     * Gets opaque
     *
     * @return bool|null
     */
    public function getOpaque()
    {
        return $this->container['opaque'];
    }

    /**
     * Sets opaque
     *
     * @param bool|null $opaque opaque
     *
     * @return self
     */
    public function setOpaque($opaque)
    {
        if (is_null($opaque)) {
            throw new \InvalidArgumentException('non-nullable opaque cannot be null');
        }
        $this->container['opaque'] = $opaque;

        return $this;
    }

    /**
     * Gets path
     *
     * @return string|null
     */
    public function getPath()
    {
        return $this->container['path'];
    }

    /**
     * Sets path
     *
     * @param string|null $path path
     *
     * @return self
     */
    public function setPath($path)
    {
        if (is_null($path)) {
            throw new \InvalidArgumentException('non-nullable path cannot be null');
        }
        $this->container['path'] = $path;

        return $this;
    }

    /**
     * Gets port
     *
     * @return int|null
     */
    public function getPort()
    {
        return $this->container['port'];
    }

    /**
     * Sets port
     *
     * @param int|null $port port
     *
     * @return self
     */
    public function setPort($port)
    {
        if (is_null($port)) {
            throw new \InvalidArgumentException('non-nullable port cannot be null');
        }
        $this->container['port'] = $port;

        return $this;
    }

    /**
     * Gets query
     *
     * @return string|null
     */
    public function getQuery()
    {
        return $this->container['query'];
    }

    /**
     * Sets query
     *
     * @param string|null $query query
     *
     * @return self
     */
    public function setQuery($query)
    {
        if (is_null($query)) {
            throw new \InvalidArgumentException('non-nullable query cannot be null');
        }
        $this->container['query'] = $query;

        return $this;
    }

    /**
     * Gets raw_authority
     *
     * @return string|null
     */
    public function getRawAuthority()
    {
        return $this->container['raw_authority'];
    }

    /**
     * Sets raw_authority
     *
     * @param string|null $raw_authority raw_authority
     *
     * @return self
     */
    public function setRawAuthority($raw_authority)
    {
        if (is_null($raw_authority)) {
            throw new \InvalidArgumentException('non-nullable raw_authority cannot be null');
        }
        $this->container['raw_authority'] = $raw_authority;

        return $this;
    }

    /**
     * Gets raw_fragment
     *
     * @return string|null
     */
    public function getRawFragment()
    {
        return $this->container['raw_fragment'];
    }

    /**
     * Sets raw_fragment
     *
     * @param string|null $raw_fragment raw_fragment
     *
     * @return self
     */
    public function setRawFragment($raw_fragment)
    {
        if (is_null($raw_fragment)) {
            throw new \InvalidArgumentException('non-nullable raw_fragment cannot be null');
        }
        $this->container['raw_fragment'] = $raw_fragment;

        return $this;
    }

    /**
     * Gets raw_path
     *
     * @return string|null
     */
    public function getRawPath()
    {
        return $this->container['raw_path'];
    }

    /**
     * Sets raw_path
     *
     * @param string|null $raw_path raw_path
     *
     * @return self
     */
    public function setRawPath($raw_path)
    {
        if (is_null($raw_path)) {
            throw new \InvalidArgumentException('non-nullable raw_path cannot be null');
        }
        $this->container['raw_path'] = $raw_path;

        return $this;
    }

    /**
     * Gets raw_query
     *
     * @return string|null
     */
    public function getRawQuery()
    {
        return $this->container['raw_query'];
    }

    /**
     * Sets raw_query
     *
     * @param string|null $raw_query raw_query
     *
     * @return self
     */
    public function setRawQuery($raw_query)
    {
        if (is_null($raw_query)) {
            throw new \InvalidArgumentException('non-nullable raw_query cannot be null');
        }
        $this->container['raw_query'] = $raw_query;

        return $this;
    }

    /**
     * Gets raw_scheme_specific_part
     *
     * @return string|null
     */
    public function getRawSchemeSpecificPart()
    {
        return $this->container['raw_scheme_specific_part'];
    }

    /**
     * Sets raw_scheme_specific_part
     *
     * @param string|null $raw_scheme_specific_part raw_scheme_specific_part
     *
     * @return self
     */
    public function setRawSchemeSpecificPart($raw_scheme_specific_part)
    {
        if (is_null($raw_scheme_specific_part)) {
            throw new \InvalidArgumentException('non-nullable raw_scheme_specific_part cannot be null');
        }
        $this->container['raw_scheme_specific_part'] = $raw_scheme_specific_part;

        return $this;
    }

    /**
     * Gets raw_user_info
     *
     * @return string|null
     */
    public function getRawUserInfo()
    {
        return $this->container['raw_user_info'];
    }

    /**
     * Sets raw_user_info
     *
     * @param string|null $raw_user_info raw_user_info
     *
     * @return self
     */
    public function setRawUserInfo($raw_user_info)
    {
        if (is_null($raw_user_info)) {
            throw new \InvalidArgumentException('non-nullable raw_user_info cannot be null');
        }
        $this->container['raw_user_info'] = $raw_user_info;

        return $this;
    }

    /**
     * Gets scheme
     *
     * @return string|null
     */
    public function getScheme()
    {
        return $this->container['scheme'];
    }

    /**
     * Sets scheme
     *
     * @param string|null $scheme scheme
     *
     * @return self
     */
    public function setScheme($scheme)
    {
        if (is_null($scheme)) {
            throw new \InvalidArgumentException('non-nullable scheme cannot be null');
        }
        $this->container['scheme'] = $scheme;

        return $this;
    }

    /**
     * Gets scheme_specific_part
     *
     * @return string|null
     */
    public function getSchemeSpecificPart()
    {
        return $this->container['scheme_specific_part'];
    }

    /**
     * Sets scheme_specific_part
     *
     * @param string|null $scheme_specific_part scheme_specific_part
     *
     * @return self
     */
    public function setSchemeSpecificPart($scheme_specific_part)
    {
        if (is_null($scheme_specific_part)) {
            throw new \InvalidArgumentException('non-nullable scheme_specific_part cannot be null');
        }
        $this->container['scheme_specific_part'] = $scheme_specific_part;

        return $this;
    }

    /**
     * Gets user_info
     *
     * @return string|null
     */
    public function getUserInfo()
    {
        return $this->container['user_info'];
    }

    /**
     * Sets user_info
     *
     * @param string|null $user_info user_info
     *
     * @return self
     */
    public function setUserInfo($user_info)
    {
        if (is_null($user_info)) {
            throw new \InvalidArgumentException('non-nullable user_info cannot be null');
        }
        $this->container['user_info'] = $user_info;

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


