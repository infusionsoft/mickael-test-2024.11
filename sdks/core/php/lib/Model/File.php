<?php
/**
 * File
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
 * File Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class File implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'File';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'absolute' => 'bool',
        'absolute_file' => '\Com\Keap\Sdk\Core\Model\File',
        'absolute_path' => 'string',
        'canonical_file' => '\Com\Keap\Sdk\Core\Model\File',
        'canonical_path' => 'string',
        'directory' => 'bool',
        'executable' => 'bool',
        'file' => 'bool',
        'free_space' => 'int',
        'hidden' => 'bool',
        'last_modified' => 'int',
        'name' => 'string',
        'parent' => 'string',
        'parent_file' => '\Com\Keap\Sdk\Core\Model\File',
        'path' => 'string',
        'readable' => 'bool',
        'total_space' => 'int',
        'usable_space' => 'int',
        'writable' => 'bool'
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
        'absolute_file' => null,
        'absolute_path' => null,
        'canonical_file' => null,
        'canonical_path' => null,
        'directory' => null,
        'executable' => null,
        'file' => null,
        'free_space' => 'int64',
        'hidden' => null,
        'last_modified' => 'int64',
        'name' => null,
        'parent' => null,
        'parent_file' => null,
        'path' => null,
        'readable' => null,
        'total_space' => 'int64',
        'usable_space' => 'int64',
        'writable' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'absolute' => false,
        'absolute_file' => false,
        'absolute_path' => false,
        'canonical_file' => false,
        'canonical_path' => false,
        'directory' => false,
        'executable' => false,
        'file' => false,
        'free_space' => false,
        'hidden' => false,
        'last_modified' => false,
        'name' => false,
        'parent' => false,
        'parent_file' => false,
        'path' => false,
        'readable' => false,
        'total_space' => false,
        'usable_space' => false,
        'writable' => false
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
        'absolute_file' => 'absoluteFile',
        'absolute_path' => 'absolutePath',
        'canonical_file' => 'canonicalFile',
        'canonical_path' => 'canonicalPath',
        'directory' => 'directory',
        'executable' => 'executable',
        'file' => 'file',
        'free_space' => 'freeSpace',
        'hidden' => 'hidden',
        'last_modified' => 'lastModified',
        'name' => 'name',
        'parent' => 'parent',
        'parent_file' => 'parentFile',
        'path' => 'path',
        'readable' => 'readable',
        'total_space' => 'totalSpace',
        'usable_space' => 'usableSpace',
        'writable' => 'writable'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'absolute' => 'setAbsolute',
        'absolute_file' => 'setAbsoluteFile',
        'absolute_path' => 'setAbsolutePath',
        'canonical_file' => 'setCanonicalFile',
        'canonical_path' => 'setCanonicalPath',
        'directory' => 'setDirectory',
        'executable' => 'setExecutable',
        'file' => 'setFile',
        'free_space' => 'setFreeSpace',
        'hidden' => 'setHidden',
        'last_modified' => 'setLastModified',
        'name' => 'setName',
        'parent' => 'setParent',
        'parent_file' => 'setParentFile',
        'path' => 'setPath',
        'readable' => 'setReadable',
        'total_space' => 'setTotalSpace',
        'usable_space' => 'setUsableSpace',
        'writable' => 'setWritable'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'absolute' => 'getAbsolute',
        'absolute_file' => 'getAbsoluteFile',
        'absolute_path' => 'getAbsolutePath',
        'canonical_file' => 'getCanonicalFile',
        'canonical_path' => 'getCanonicalPath',
        'directory' => 'getDirectory',
        'executable' => 'getExecutable',
        'file' => 'getFile',
        'free_space' => 'getFreeSpace',
        'hidden' => 'getHidden',
        'last_modified' => 'getLastModified',
        'name' => 'getName',
        'parent' => 'getParent',
        'parent_file' => 'getParentFile',
        'path' => 'getPath',
        'readable' => 'getReadable',
        'total_space' => 'getTotalSpace',
        'usable_space' => 'getUsableSpace',
        'writable' => 'getWritable'
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
        $this->setIfExists('absolute_file', $data ?? [], null);
        $this->setIfExists('absolute_path', $data ?? [], null);
        $this->setIfExists('canonical_file', $data ?? [], null);
        $this->setIfExists('canonical_path', $data ?? [], null);
        $this->setIfExists('directory', $data ?? [], null);
        $this->setIfExists('executable', $data ?? [], null);
        $this->setIfExists('file', $data ?? [], null);
        $this->setIfExists('free_space', $data ?? [], null);
        $this->setIfExists('hidden', $data ?? [], null);
        $this->setIfExists('last_modified', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('parent', $data ?? [], null);
        $this->setIfExists('parent_file', $data ?? [], null);
        $this->setIfExists('path', $data ?? [], null);
        $this->setIfExists('readable', $data ?? [], null);
        $this->setIfExists('total_space', $data ?? [], null);
        $this->setIfExists('usable_space', $data ?? [], null);
        $this->setIfExists('writable', $data ?? [], null);
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
     * Gets absolute_file
     *
     * @return \Com\Keap\Sdk\Core\Model\File|null
     */
    public function getAbsoluteFile()
    {
        return $this->container['absolute_file'];
    }

    /**
     * Sets absolute_file
     *
     * @param \Com\Keap\Sdk\Core\Model\File|null $absolute_file absolute_file
     *
     * @return self
     */
    public function setAbsoluteFile($absolute_file)
    {
        if (is_null($absolute_file)) {
            throw new \InvalidArgumentException('non-nullable absolute_file cannot be null');
        }
        $this->container['absolute_file'] = $absolute_file;

        return $this;
    }

    /**
     * Gets absolute_path
     *
     * @return string|null
     */
    public function getAbsolutePath()
    {
        return $this->container['absolute_path'];
    }

    /**
     * Sets absolute_path
     *
     * @param string|null $absolute_path absolute_path
     *
     * @return self
     */
    public function setAbsolutePath($absolute_path)
    {
        if (is_null($absolute_path)) {
            throw new \InvalidArgumentException('non-nullable absolute_path cannot be null');
        }
        $this->container['absolute_path'] = $absolute_path;

        return $this;
    }

    /**
     * Gets canonical_file
     *
     * @return \Com\Keap\Sdk\Core\Model\File|null
     */
    public function getCanonicalFile()
    {
        return $this->container['canonical_file'];
    }

    /**
     * Sets canonical_file
     *
     * @param \Com\Keap\Sdk\Core\Model\File|null $canonical_file canonical_file
     *
     * @return self
     */
    public function setCanonicalFile($canonical_file)
    {
        if (is_null($canonical_file)) {
            throw new \InvalidArgumentException('non-nullable canonical_file cannot be null');
        }
        $this->container['canonical_file'] = $canonical_file;

        return $this;
    }

    /**
     * Gets canonical_path
     *
     * @return string|null
     */
    public function getCanonicalPath()
    {
        return $this->container['canonical_path'];
    }

    /**
     * Sets canonical_path
     *
     * @param string|null $canonical_path canonical_path
     *
     * @return self
     */
    public function setCanonicalPath($canonical_path)
    {
        if (is_null($canonical_path)) {
            throw new \InvalidArgumentException('non-nullable canonical_path cannot be null');
        }
        $this->container['canonical_path'] = $canonical_path;

        return $this;
    }

    /**
     * Gets directory
     *
     * @return bool|null
     */
    public function getDirectory()
    {
        return $this->container['directory'];
    }

    /**
     * Sets directory
     *
     * @param bool|null $directory directory
     *
     * @return self
     */
    public function setDirectory($directory)
    {
        if (is_null($directory)) {
            throw new \InvalidArgumentException('non-nullable directory cannot be null');
        }
        $this->container['directory'] = $directory;

        return $this;
    }

    /**
     * Gets executable
     *
     * @return bool|null
     */
    public function getExecutable()
    {
        return $this->container['executable'];
    }

    /**
     * Sets executable
     *
     * @param bool|null $executable executable
     *
     * @return self
     */
    public function setExecutable($executable)
    {
        if (is_null($executable)) {
            throw new \InvalidArgumentException('non-nullable executable cannot be null');
        }
        $this->container['executable'] = $executable;

        return $this;
    }

    /**
     * Gets file
     *
     * @return bool|null
     */
    public function getFile()
    {
        return $this->container['file'];
    }

    /**
     * Sets file
     *
     * @param bool|null $file file
     *
     * @return self
     */
    public function setFile($file)
    {
        if (is_null($file)) {
            throw new \InvalidArgumentException('non-nullable file cannot be null');
        }
        $this->container['file'] = $file;

        return $this;
    }

    /**
     * Gets free_space
     *
     * @return int|null
     */
    public function getFreeSpace()
    {
        return $this->container['free_space'];
    }

    /**
     * Sets free_space
     *
     * @param int|null $free_space free_space
     *
     * @return self
     */
    public function setFreeSpace($free_space)
    {
        if (is_null($free_space)) {
            throw new \InvalidArgumentException('non-nullable free_space cannot be null');
        }
        $this->container['free_space'] = $free_space;

        return $this;
    }

    /**
     * Gets hidden
     *
     * @return bool|null
     */
    public function getHidden()
    {
        return $this->container['hidden'];
    }

    /**
     * Sets hidden
     *
     * @param bool|null $hidden hidden
     *
     * @return self
     */
    public function setHidden($hidden)
    {
        if (is_null($hidden)) {
            throw new \InvalidArgumentException('non-nullable hidden cannot be null');
        }
        $this->container['hidden'] = $hidden;

        return $this;
    }

    /**
     * Gets last_modified
     *
     * @return int|null
     */
    public function getLastModified()
    {
        return $this->container['last_modified'];
    }

    /**
     * Sets last_modified
     *
     * @param int|null $last_modified last_modified
     *
     * @return self
     */
    public function setLastModified($last_modified)
    {
        if (is_null($last_modified)) {
            throw new \InvalidArgumentException('non-nullable last_modified cannot be null');
        }
        $this->container['last_modified'] = $last_modified;

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
     * Gets parent
     *
     * @return string|null
     */
    public function getParent()
    {
        return $this->container['parent'];
    }

    /**
     * Sets parent
     *
     * @param string|null $parent parent
     *
     * @return self
     */
    public function setParent($parent)
    {
        if (is_null($parent)) {
            throw new \InvalidArgumentException('non-nullable parent cannot be null');
        }
        $this->container['parent'] = $parent;

        return $this;
    }

    /**
     * Gets parent_file
     *
     * @return \Com\Keap\Sdk\Core\Model\File|null
     */
    public function getParentFile()
    {
        return $this->container['parent_file'];
    }

    /**
     * Sets parent_file
     *
     * @param \Com\Keap\Sdk\Core\Model\File|null $parent_file parent_file
     *
     * @return self
     */
    public function setParentFile($parent_file)
    {
        if (is_null($parent_file)) {
            throw new \InvalidArgumentException('non-nullable parent_file cannot be null');
        }
        $this->container['parent_file'] = $parent_file;

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
     * Gets readable
     *
     * @return bool|null
     */
    public function getReadable()
    {
        return $this->container['readable'];
    }

    /**
     * Sets readable
     *
     * @param bool|null $readable readable
     *
     * @return self
     */
    public function setReadable($readable)
    {
        if (is_null($readable)) {
            throw new \InvalidArgumentException('non-nullable readable cannot be null');
        }
        $this->container['readable'] = $readable;

        return $this;
    }

    /**
     * Gets total_space
     *
     * @return int|null
     */
    public function getTotalSpace()
    {
        return $this->container['total_space'];
    }

    /**
     * Sets total_space
     *
     * @param int|null $total_space total_space
     *
     * @return self
     */
    public function setTotalSpace($total_space)
    {
        if (is_null($total_space)) {
            throw new \InvalidArgumentException('non-nullable total_space cannot be null');
        }
        $this->container['total_space'] = $total_space;

        return $this;
    }

    /**
     * Gets usable_space
     *
     * @return int|null
     */
    public function getUsableSpace()
    {
        return $this->container['usable_space'];
    }

    /**
     * Sets usable_space
     *
     * @param int|null $usable_space usable_space
     *
     * @return self
     */
    public function setUsableSpace($usable_space)
    {
        if (is_null($usable_space)) {
            throw new \InvalidArgumentException('non-nullable usable_space cannot be null');
        }
        $this->container['usable_space'] = $usable_space;

        return $this;
    }

    /**
     * Gets writable
     *
     * @return bool|null
     */
    public function getWritable()
    {
        return $this->container['writable'];
    }

    /**
     * Sets writable
     *
     * @param bool|null $writable writable
     *
     * @return self
     */
    public function setWritable($writable)
    {
        if (is_null($writable)) {
            throw new \InvalidArgumentException('non-nullable writable cannot be null');
        }
        $this->container['writable'] = $writable;

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


