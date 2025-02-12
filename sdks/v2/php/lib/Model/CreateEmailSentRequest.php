<?php
/**
 * CreateEmailSentRequest
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
 * The version of the OpenAPI document: 2.70.0.775756
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
 * CreateEmailSentRequest Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateEmailSentRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'CreateEmailSentRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'clicked_time' => 'string',
        'contact_id' => 'string',
        'headers' => 'string',
        'html_content' => 'string',
        'opened_time' => 'string',
        'original_provider' => 'string',
        'original_provider_id' => 'string',
        'plain_content' => 'string',
        'provider_source_id' => 'string',
        'received_time' => 'string',
        'sent_from_address' => 'string',
        'sent_from_reply_address' => 'string',
        'sent_time' => 'string',
        'sent_to_address' => 'string',
        'sent_to_bcc_address_list' => 'string[]',
        'sent_to_cc_address_list' => 'string[]',
        'subject' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'clicked_time' => null,
        'contact_id' => null,
        'headers' => null,
        'html_content' => null,
        'opened_time' => null,
        'original_provider' => null,
        'original_provider_id' => null,
        'plain_content' => null,
        'provider_source_id' => null,
        'received_time' => null,
        'sent_from_address' => null,
        'sent_from_reply_address' => null,
        'sent_time' => null,
        'sent_to_address' => null,
        'sent_to_bcc_address_list' => null,
        'sent_to_cc_address_list' => null,
        'subject' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'clicked_time' => false,
        'contact_id' => false,
        'headers' => false,
        'html_content' => false,
        'opened_time' => false,
        'original_provider' => false,
        'original_provider_id' => false,
        'plain_content' => false,
        'provider_source_id' => false,
        'received_time' => false,
        'sent_from_address' => false,
        'sent_from_reply_address' => false,
        'sent_time' => false,
        'sent_to_address' => false,
        'sent_to_bcc_address_list' => false,
        'sent_to_cc_address_list' => false,
        'subject' => false
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
        'clicked_time' => 'clicked_time',
        'contact_id' => 'contact_id',
        'headers' => 'headers',
        'html_content' => 'html_content',
        'opened_time' => 'opened_time',
        'original_provider' => 'original_provider',
        'original_provider_id' => 'original_provider_id',
        'plain_content' => 'plain_content',
        'provider_source_id' => 'provider_source_id',
        'received_time' => 'received_time',
        'sent_from_address' => 'sent_from_address',
        'sent_from_reply_address' => 'sent_from_reply_address',
        'sent_time' => 'sent_time',
        'sent_to_address' => 'sent_to_address',
        'sent_to_bcc_address_list' => 'sent_to_bcc_address_list',
        'sent_to_cc_address_list' => 'sent_to_cc_address_list',
        'subject' => 'subject'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'clicked_time' => 'setClickedTime',
        'contact_id' => 'setContactId',
        'headers' => 'setHeaders',
        'html_content' => 'setHtmlContent',
        'opened_time' => 'setOpenedTime',
        'original_provider' => 'setOriginalProvider',
        'original_provider_id' => 'setOriginalProviderId',
        'plain_content' => 'setPlainContent',
        'provider_source_id' => 'setProviderSourceId',
        'received_time' => 'setReceivedTime',
        'sent_from_address' => 'setSentFromAddress',
        'sent_from_reply_address' => 'setSentFromReplyAddress',
        'sent_time' => 'setSentTime',
        'sent_to_address' => 'setSentToAddress',
        'sent_to_bcc_address_list' => 'setSentToBccAddressList',
        'sent_to_cc_address_list' => 'setSentToCcAddressList',
        'subject' => 'setSubject'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'clicked_time' => 'getClickedTime',
        'contact_id' => 'getContactId',
        'headers' => 'getHeaders',
        'html_content' => 'getHtmlContent',
        'opened_time' => 'getOpenedTime',
        'original_provider' => 'getOriginalProvider',
        'original_provider_id' => 'getOriginalProviderId',
        'plain_content' => 'getPlainContent',
        'provider_source_id' => 'getProviderSourceId',
        'received_time' => 'getReceivedTime',
        'sent_from_address' => 'getSentFromAddress',
        'sent_from_reply_address' => 'getSentFromReplyAddress',
        'sent_time' => 'getSentTime',
        'sent_to_address' => 'getSentToAddress',
        'sent_to_bcc_address_list' => 'getSentToBccAddressList',
        'sent_to_cc_address_list' => 'getSentToCcAddressList',
        'subject' => 'getSubject'
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

    public const ORIGINAL_PROVIDER_UNKNOWN = 'UNKNOWN';
    public const ORIGINAL_PROVIDER_INFUSIONSOFT = 'INFUSIONSOFT';
    public const ORIGINAL_PROVIDER_MICROSOFT = 'MICROSOFT';
    public const ORIGINAL_PROVIDER_GOOGLE = 'GOOGLE';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getOriginalProviderAllowableValues()
    {
        return [
            self::ORIGINAL_PROVIDER_UNKNOWN,
            self::ORIGINAL_PROVIDER_INFUSIONSOFT,
            self::ORIGINAL_PROVIDER_MICROSOFT,
            self::ORIGINAL_PROVIDER_GOOGLE,
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
        $this->setIfExists('clicked_time', $data ?? [], null);
        $this->setIfExists('contact_id', $data ?? [], null);
        $this->setIfExists('headers', $data ?? [], null);
        $this->setIfExists('html_content', $data ?? [], null);
        $this->setIfExists('opened_time', $data ?? [], null);
        $this->setIfExists('original_provider', $data ?? [], null);
        $this->setIfExists('original_provider_id', $data ?? [], null);
        $this->setIfExists('plain_content', $data ?? [], null);
        $this->setIfExists('provider_source_id', $data ?? [], null);
        $this->setIfExists('received_time', $data ?? [], null);
        $this->setIfExists('sent_from_address', $data ?? [], null);
        $this->setIfExists('sent_from_reply_address', $data ?? [], null);
        $this->setIfExists('sent_time', $data ?? [], null);
        $this->setIfExists('sent_to_address', $data ?? [], null);
        $this->setIfExists('sent_to_bcc_address_list', $data ?? [], null);
        $this->setIfExists('sent_to_cc_address_list', $data ?? [], null);
        $this->setIfExists('subject', $data ?? [], null);
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

        $allowedValues = $this->getOriginalProviderAllowableValues();
        if (!is_null($this->container['original_provider']) && !in_array($this->container['original_provider'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'original_provider', must be one of '%s'",
                $this->container['original_provider'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['sent_to_address'] === null) {
            $invalidProperties[] = "'sent_to_address' can't be null";
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
     * Gets clicked_time
     *
     * @return string|null
     */
    public function getClickedTime()
    {
        return $this->container['clicked_time'];
    }

    /**
     * Sets clicked_time
     *
     * @param string|null $clicked_time clicked_time
     *
     * @return self
     */
    public function setClickedTime($clicked_time)
    {
        if (is_null($clicked_time)) {
            throw new \InvalidArgumentException('non-nullable clicked_time cannot be null');
        }
        $this->container['clicked_time'] = $clicked_time;

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
     * Gets headers
     *
     * @return string|null
     */
    public function getHeaders()
    {
        return $this->container['headers'];
    }

    /**
     * Sets headers
     *
     * @param string|null $headers headers
     *
     * @return self
     */
    public function setHeaders($headers)
    {
        if (is_null($headers)) {
            throw new \InvalidArgumentException('non-nullable headers cannot be null');
        }
        $this->container['headers'] = $headers;

        return $this;
    }

    /**
     * Gets html_content
     *
     * @return string|null
     */
    public function getHtmlContent()
    {
        return $this->container['html_content'];
    }

    /**
     * Sets html_content
     *
     * @param string|null $html_content Base64 encoded HTML
     *
     * @return self
     */
    public function setHtmlContent($html_content)
    {
        if (is_null($html_content)) {
            throw new \InvalidArgumentException('non-nullable html_content cannot be null');
        }
        $this->container['html_content'] = $html_content;

        return $this;
    }

    /**
     * Gets opened_time
     *
     * @return string|null
     */
    public function getOpenedTime()
    {
        return $this->container['opened_time'];
    }

    /**
     * Sets opened_time
     *
     * @param string|null $opened_time opened_time
     *
     * @return self
     */
    public function setOpenedTime($opened_time)
    {
        if (is_null($opened_time)) {
            throw new \InvalidArgumentException('non-nullable opened_time cannot be null');
        }
        $this->container['opened_time'] = $opened_time;

        return $this;
    }

    /**
     * Gets original_provider
     *
     * @return string|null
     */
    public function getOriginalProvider()
    {
        return $this->container['original_provider'];
    }

    /**
     * Sets original_provider
     *
     * @param string|null $original_provider Provider that sent the email, defaults to UNKNOWN
     *
     * @return self
     */
    public function setOriginalProvider($original_provider)
    {
        if (is_null($original_provider)) {
            throw new \InvalidArgumentException('non-nullable original_provider cannot be null');
        }
        $allowedValues = $this->getOriginalProviderAllowableValues();
        if (!in_array($original_provider, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'original_provider', must be one of '%s'",
                    $original_provider,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['original_provider'] = $original_provider;

        return $this;
    }

    /**
     * Gets original_provider_id
     *
     * @return string|null
     */
    public function getOriginalProviderId()
    {
        return $this->container['original_provider_id'];
    }

    /**
     * Sets original_provider_id
     *
     * @param string|null $original_provider_id Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record.
     *
     * @return self
     */
    public function setOriginalProviderId($original_provider_id)
    {
        if (is_null($original_provider_id)) {
            throw new \InvalidArgumentException('non-nullable original_provider_id cannot be null');
        }
        $this->container['original_provider_id'] = $original_provider_id;

        return $this;
    }

    /**
     * Gets plain_content
     *
     * @return string|null
     */
    public function getPlainContent()
    {
        return $this->container['plain_content'];
    }

    /**
     * Sets plain_content
     *
     * @param string|null $plain_content Base64 encoded text
     *
     * @return self
     */
    public function setPlainContent($plain_content)
    {
        if (is_null($plain_content)) {
            throw new \InvalidArgumentException('non-nullable plain_content cannot be null');
        }
        $this->container['plain_content'] = $plain_content;

        return $this;
    }

    /**
     * Gets provider_source_id
     *
     * @return string|null
     */
    public function getProviderSourceId()
    {
        return $this->container['provider_source_id'];
    }

    /**
     * Sets provider_source_id
     *
     * @param string|null $provider_source_id The email address of the synced email account that generated this message.
     *
     * @return self
     */
    public function setProviderSourceId($provider_source_id)
    {
        if (is_null($provider_source_id)) {
            throw new \InvalidArgumentException('non-nullable provider_source_id cannot be null');
        }
        $this->container['provider_source_id'] = $provider_source_id;

        return $this;
    }

    /**
     * Gets received_time
     *
     * @return string|null
     */
    public function getReceivedTime()
    {
        return $this->container['received_time'];
    }

    /**
     * Sets received_time
     *
     * @param string|null $received_time received_time
     *
     * @return self
     */
    public function setReceivedTime($received_time)
    {
        if (is_null($received_time)) {
            throw new \InvalidArgumentException('non-nullable received_time cannot be null');
        }
        $this->container['received_time'] = $received_time;

        return $this;
    }

    /**
     * Gets sent_from_address
     *
     * @return string|null
     */
    public function getSentFromAddress()
    {
        return $this->container['sent_from_address'];
    }

    /**
     * Sets sent_from_address
     *
     * @param string|null $sent_from_address sent_from_address
     *
     * @return self
     */
    public function setSentFromAddress($sent_from_address)
    {
        if (is_null($sent_from_address)) {
            throw new \InvalidArgumentException('non-nullable sent_from_address cannot be null');
        }
        $this->container['sent_from_address'] = $sent_from_address;

        return $this;
    }

    /**
     * Gets sent_from_reply_address
     *
     * @return string|null
     */
    public function getSentFromReplyAddress()
    {
        return $this->container['sent_from_reply_address'];
    }

    /**
     * Sets sent_from_reply_address
     *
     * @param string|null $sent_from_reply_address sent_from_reply_address
     *
     * @return self
     */
    public function setSentFromReplyAddress($sent_from_reply_address)
    {
        if (is_null($sent_from_reply_address)) {
            throw new \InvalidArgumentException('non-nullable sent_from_reply_address cannot be null');
        }
        $this->container['sent_from_reply_address'] = $sent_from_reply_address;

        return $this;
    }

    /**
     * Gets sent_time
     *
     * @return string|null
     */
    public function getSentTime()
    {
        return $this->container['sent_time'];
    }

    /**
     * Sets sent_time
     *
     * @param string|null $sent_time sent_time
     *
     * @return self
     */
    public function setSentTime($sent_time)
    {
        if (is_null($sent_time)) {
            throw new \InvalidArgumentException('non-nullable sent_time cannot be null');
        }
        $this->container['sent_time'] = $sent_time;

        return $this;
    }

    /**
     * Gets sent_to_address
     *
     * @return string
     */
    public function getSentToAddress()
    {
        return $this->container['sent_to_address'];
    }

    /**
     * Sets sent_to_address
     *
     * @param string $sent_to_address sent_to_address
     *
     * @return self
     */
    public function setSentToAddress($sent_to_address)
    {
        if (is_null($sent_to_address)) {
            throw new \InvalidArgumentException('non-nullable sent_to_address cannot be null');
        }
        $this->container['sent_to_address'] = $sent_to_address;

        return $this;
    }

    /**
     * Gets sent_to_bcc_address_list
     *
     * @return string[]|null
     */
    public function getSentToBccAddressList()
    {
        return $this->container['sent_to_bcc_address_list'];
    }

    /**
     * Sets sent_to_bcc_address_list
     *
     * @param string[]|null $sent_to_bcc_address_list sent_to_bcc_address_list
     *
     * @return self
     */
    public function setSentToBccAddressList($sent_to_bcc_address_list)
    {
        if (is_null($sent_to_bcc_address_list)) {
            throw new \InvalidArgumentException('non-nullable sent_to_bcc_address_list cannot be null');
        }
        $this->container['sent_to_bcc_address_list'] = $sent_to_bcc_address_list;

        return $this;
    }

    /**
     * Gets sent_to_cc_address_list
     *
     * @return string[]|null
     */
    public function getSentToCcAddressList()
    {
        return $this->container['sent_to_cc_address_list'];
    }

    /**
     * Sets sent_to_cc_address_list
     *
     * @param string[]|null $sent_to_cc_address_list sent_to_cc_address_list
     *
     * @return self
     */
    public function setSentToCcAddressList($sent_to_cc_address_list)
    {
        if (is_null($sent_to_cc_address_list)) {
            throw new \InvalidArgumentException('non-nullable sent_to_cc_address_list cannot be null');
        }
        $this->container['sent_to_cc_address_list'] = $sent_to_cc_address_list;

        return $this;
    }

    /**
     * Gets subject
     *
     * @return string|null
     */
    public function getSubject()
    {
        return $this->container['subject'];
    }

    /**
     * Sets subject
     *
     * @param string|null $subject subject
     *
     * @return self
     */
    public function setSubject($subject)
    {
        if (is_null($subject)) {
            throw new \InvalidArgumentException('non-nullable subject cannot be null');
        }
        $this->container['subject'] = $subject;

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


