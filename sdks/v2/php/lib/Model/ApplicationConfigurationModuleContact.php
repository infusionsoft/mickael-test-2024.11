<?php
/**
 * ApplicationConfigurationModuleContact
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
 * ApplicationConfigurationModuleContact Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ApplicationConfigurationModuleContact implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ApplicationConfigurationModuleContact';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'address_labels' => '\Keap\Core\V2\Model\ApplicationConfigurationModuleContactAddressLabels',
        'contact_types' => 'string',
        'default_new_contact_form' => 'string',
        'disable_contact_edit_in_client_login' => 'bool',
        'fax_types' => 'string',
        'phone_types' => 'string',
        'suffix_types' => 'string',
        'title_types' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'address_labels' => null,
        'contact_types' => null,
        'default_new_contact_form' => null,
        'disable_contact_edit_in_client_login' => null,
        'fax_types' => null,
        'phone_types' => null,
        'suffix_types' => null,
        'title_types' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'address_labels' => false,
        'contact_types' => false,
        'default_new_contact_form' => false,
        'disable_contact_edit_in_client_login' => false,
        'fax_types' => false,
        'phone_types' => false,
        'suffix_types' => false,
        'title_types' => false
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
        'address_labels' => 'address_labels',
        'contact_types' => 'contact_types',
        'default_new_contact_form' => 'default_new_contact_form',
        'disable_contact_edit_in_client_login' => 'disable_contact_edit_in_client_login',
        'fax_types' => 'fax_types',
        'phone_types' => 'phone_types',
        'suffix_types' => 'suffix_types',
        'title_types' => 'title_types'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'address_labels' => 'setAddressLabels',
        'contact_types' => 'setContactTypes',
        'default_new_contact_form' => 'setDefaultNewContactForm',
        'disable_contact_edit_in_client_login' => 'setDisableContactEditInClientLogin',
        'fax_types' => 'setFaxTypes',
        'phone_types' => 'setPhoneTypes',
        'suffix_types' => 'setSuffixTypes',
        'title_types' => 'setTitleTypes'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'address_labels' => 'getAddressLabels',
        'contact_types' => 'getContactTypes',
        'default_new_contact_form' => 'getDefaultNewContactForm',
        'disable_contact_edit_in_client_login' => 'getDisableContactEditInClientLogin',
        'fax_types' => 'getFaxTypes',
        'phone_types' => 'getPhoneTypes',
        'suffix_types' => 'getSuffixTypes',
        'title_types' => 'getTitleTypes'
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
        $this->setIfExists('address_labels', $data ?? [], null);
        $this->setIfExists('contact_types', $data ?? [], null);
        $this->setIfExists('default_new_contact_form', $data ?? [], null);
        $this->setIfExists('disable_contact_edit_in_client_login', $data ?? [], null);
        $this->setIfExists('fax_types', $data ?? [], null);
        $this->setIfExists('phone_types', $data ?? [], null);
        $this->setIfExists('suffix_types', $data ?? [], null);
        $this->setIfExists('title_types', $data ?? [], null);
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
     * Gets address_labels
     *
     * @return \Keap\Core\V2\Model\ApplicationConfigurationModuleContactAddressLabels|null
     */
    public function getAddressLabels()
    {
        return $this->container['address_labels'];
    }

    /**
     * Sets address_labels
     *
     * @param \Keap\Core\V2\Model\ApplicationConfigurationModuleContactAddressLabels|null $address_labels address_labels
     *
     * @return self
     */
    public function setAddressLabels($address_labels)
    {
        if (is_null($address_labels)) {
            throw new \InvalidArgumentException('non-nullable address_labels cannot be null');
        }
        $this->container['address_labels'] = $address_labels;

        return $this;
    }

    /**
     * Gets contact_types
     *
     * @return string|null
     */
    public function getContactTypes()
    {
        return $this->container['contact_types'];
    }

    /**
     * Sets contact_types
     *
     * @param string|null $contact_types contact_types
     *
     * @return self
     */
    public function setContactTypes($contact_types)
    {
        if (is_null($contact_types)) {
            throw new \InvalidArgumentException('non-nullable contact_types cannot be null');
        }
        $this->container['contact_types'] = $contact_types;

        return $this;
    }

    /**
     * Gets default_new_contact_form
     *
     * @return string|null
     */
    public function getDefaultNewContactForm()
    {
        return $this->container['default_new_contact_form'];
    }

    /**
     * Sets default_new_contact_form
     *
     * @param string|null $default_new_contact_form default_new_contact_form
     *
     * @return self
     */
    public function setDefaultNewContactForm($default_new_contact_form)
    {
        if (is_null($default_new_contact_form)) {
            throw new \InvalidArgumentException('non-nullable default_new_contact_form cannot be null');
        }
        $this->container['default_new_contact_form'] = $default_new_contact_form;

        return $this;
    }

    /**
     * Gets disable_contact_edit_in_client_login
     *
     * @return bool|null
     */
    public function getDisableContactEditInClientLogin()
    {
        return $this->container['disable_contact_edit_in_client_login'];
    }

    /**
     * Sets disable_contact_edit_in_client_login
     *
     * @param bool|null $disable_contact_edit_in_client_login disable_contact_edit_in_client_login
     *
     * @return self
     */
    public function setDisableContactEditInClientLogin($disable_contact_edit_in_client_login)
    {
        if (is_null($disable_contact_edit_in_client_login)) {
            throw new \InvalidArgumentException('non-nullable disable_contact_edit_in_client_login cannot be null');
        }
        $this->container['disable_contact_edit_in_client_login'] = $disable_contact_edit_in_client_login;

        return $this;
    }

    /**
     * Gets fax_types
     *
     * @return string|null
     */
    public function getFaxTypes()
    {
        return $this->container['fax_types'];
    }

    /**
     * Sets fax_types
     *
     * @param string|null $fax_types fax_types
     *
     * @return self
     */
    public function setFaxTypes($fax_types)
    {
        if (is_null($fax_types)) {
            throw new \InvalidArgumentException('non-nullable fax_types cannot be null');
        }
        $this->container['fax_types'] = $fax_types;

        return $this;
    }

    /**
     * Gets phone_types
     *
     * @return string|null
     */
    public function getPhoneTypes()
    {
        return $this->container['phone_types'];
    }

    /**
     * Sets phone_types
     *
     * @param string|null $phone_types phone_types
     *
     * @return self
     */
    public function setPhoneTypes($phone_types)
    {
        if (is_null($phone_types)) {
            throw new \InvalidArgumentException('non-nullable phone_types cannot be null');
        }
        $this->container['phone_types'] = $phone_types;

        return $this;
    }

    /**
     * Gets suffix_types
     *
     * @return string|null
     */
    public function getSuffixTypes()
    {
        return $this->container['suffix_types'];
    }

    /**
     * Sets suffix_types
     *
     * @param string|null $suffix_types suffix_types
     *
     * @return self
     */
    public function setSuffixTypes($suffix_types)
    {
        if (is_null($suffix_types)) {
            throw new \InvalidArgumentException('non-nullable suffix_types cannot be null');
        }
        $this->container['suffix_types'] = $suffix_types;

        return $this;
    }

    /**
     * Gets title_types
     *
     * @return string|null
     */
    public function getTitleTypes()
    {
        return $this->container['title_types'];
    }

    /**
     * Sets title_types
     *
     * @param string|null $title_types title_types
     *
     * @return self
     */
    public function setTitleTypes($title_types)
    {
        if (is_null($title_types)) {
            throw new \InvalidArgumentException('non-nullable title_types cannot be null');
        }
        $this->container['title_types'] = $title_types;

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


