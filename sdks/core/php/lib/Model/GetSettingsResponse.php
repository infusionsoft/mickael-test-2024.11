<?php
/**
 * GetSettingsResponse
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
 * GetSettingsResponse Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class GetSettingsResponse implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'GetSettingsResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'affiliate' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleAffiliate',
        'application' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleApplication',
        'appointment' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleAppointment',
        'contact' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleContact',
        'ecommerce' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleEcommerce',
        'email' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleEmail',
        'forms' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleForms',
        'fulfillment' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleFulfillment',
        'invoice' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleInvoice',
        'note' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleNote',
        'opportunity' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleOpportunity',
        'task' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleTask',
        'template' => '\Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleTemplate'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'affiliate' => null,
        'application' => null,
        'appointment' => null,
        'contact' => null,
        'ecommerce' => null,
        'email' => null,
        'forms' => null,
        'fulfillment' => null,
        'invoice' => null,
        'note' => null,
        'opportunity' => null,
        'task' => null,
        'template' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'affiliate' => false,
        'application' => false,
        'appointment' => false,
        'contact' => false,
        'ecommerce' => false,
        'email' => false,
        'forms' => false,
        'fulfillment' => false,
        'invoice' => false,
        'note' => false,
        'opportunity' => false,
        'task' => false,
        'template' => false
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
        'affiliate' => 'affiliate',
        'application' => 'application',
        'appointment' => 'appointment',
        'contact' => 'contact',
        'ecommerce' => 'ecommerce',
        'email' => 'email',
        'forms' => 'forms',
        'fulfillment' => 'fulfillment',
        'invoice' => 'invoice',
        'note' => 'note',
        'opportunity' => 'opportunity',
        'task' => 'task',
        'template' => 'template'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'affiliate' => 'setAffiliate',
        'application' => 'setApplication',
        'appointment' => 'setAppointment',
        'contact' => 'setContact',
        'ecommerce' => 'setEcommerce',
        'email' => 'setEmail',
        'forms' => 'setForms',
        'fulfillment' => 'setFulfillment',
        'invoice' => 'setInvoice',
        'note' => 'setNote',
        'opportunity' => 'setOpportunity',
        'task' => 'setTask',
        'template' => 'setTemplate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'affiliate' => 'getAffiliate',
        'application' => 'getApplication',
        'appointment' => 'getAppointment',
        'contact' => 'getContact',
        'ecommerce' => 'getEcommerce',
        'email' => 'getEmail',
        'forms' => 'getForms',
        'fulfillment' => 'getFulfillment',
        'invoice' => 'getInvoice',
        'note' => 'getNote',
        'opportunity' => 'getOpportunity',
        'task' => 'getTask',
        'template' => 'getTemplate'
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
        $this->setIfExists('affiliate', $data ?? [], null);
        $this->setIfExists('application', $data ?? [], null);
        $this->setIfExists('appointment', $data ?? [], null);
        $this->setIfExists('contact', $data ?? [], null);
        $this->setIfExists('ecommerce', $data ?? [], null);
        $this->setIfExists('email', $data ?? [], null);
        $this->setIfExists('forms', $data ?? [], null);
        $this->setIfExists('fulfillment', $data ?? [], null);
        $this->setIfExists('invoice', $data ?? [], null);
        $this->setIfExists('note', $data ?? [], null);
        $this->setIfExists('opportunity', $data ?? [], null);
        $this->setIfExists('task', $data ?? [], null);
        $this->setIfExists('template', $data ?? [], null);
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
     * Gets affiliate
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleAffiliate|null
     */
    public function getAffiliate()
    {
        return $this->container['affiliate'];
    }

    /**
     * Sets affiliate
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleAffiliate|null $affiliate affiliate
     *
     * @return self
     */
    public function setAffiliate($affiliate)
    {
        if (is_null($affiliate)) {
            throw new \InvalidArgumentException('non-nullable affiliate cannot be null');
        }
        $this->container['affiliate'] = $affiliate;

        return $this;
    }

    /**
     * Gets application
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleApplication|null
     */
    public function getApplication()
    {
        return $this->container['application'];
    }

    /**
     * Sets application
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleApplication|null $application application
     *
     * @return self
     */
    public function setApplication($application)
    {
        if (is_null($application)) {
            throw new \InvalidArgumentException('non-nullable application cannot be null');
        }
        $this->container['application'] = $application;

        return $this;
    }

    /**
     * Gets appointment
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleAppointment|null
     */
    public function getAppointment()
    {
        return $this->container['appointment'];
    }

    /**
     * Sets appointment
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleAppointment|null $appointment appointment
     *
     * @return self
     */
    public function setAppointment($appointment)
    {
        if (is_null($appointment)) {
            throw new \InvalidArgumentException('non-nullable appointment cannot be null');
        }
        $this->container['appointment'] = $appointment;

        return $this;
    }

    /**
     * Gets contact
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleContact|null
     */
    public function getContact()
    {
        return $this->container['contact'];
    }

    /**
     * Sets contact
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleContact|null $contact contact
     *
     * @return self
     */
    public function setContact($contact)
    {
        if (is_null($contact)) {
            throw new \InvalidArgumentException('non-nullable contact cannot be null');
        }
        $this->container['contact'] = $contact;

        return $this;
    }

    /**
     * Gets ecommerce
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleEcommerce|null
     */
    public function getEcommerce()
    {
        return $this->container['ecommerce'];
    }

    /**
     * Sets ecommerce
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleEcommerce|null $ecommerce ecommerce
     *
     * @return self
     */
    public function setEcommerce($ecommerce)
    {
        if (is_null($ecommerce)) {
            throw new \InvalidArgumentException('non-nullable ecommerce cannot be null');
        }
        $this->container['ecommerce'] = $ecommerce;

        return $this;
    }

    /**
     * Gets email
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleEmail|null
     */
    public function getEmail()
    {
        return $this->container['email'];
    }

    /**
     * Sets email
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleEmail|null $email email
     *
     * @return self
     */
    public function setEmail($email)
    {
        if (is_null($email)) {
            throw new \InvalidArgumentException('non-nullable email cannot be null');
        }
        $this->container['email'] = $email;

        return $this;
    }

    /**
     * Gets forms
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleForms|null
     */
    public function getForms()
    {
        return $this->container['forms'];
    }

    /**
     * Sets forms
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleForms|null $forms forms
     *
     * @return self
     */
    public function setForms($forms)
    {
        if (is_null($forms)) {
            throw new \InvalidArgumentException('non-nullable forms cannot be null');
        }
        $this->container['forms'] = $forms;

        return $this;
    }

    /**
     * Gets fulfillment
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleFulfillment|null
     */
    public function getFulfillment()
    {
        return $this->container['fulfillment'];
    }

    /**
     * Sets fulfillment
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleFulfillment|null $fulfillment fulfillment
     *
     * @return self
     */
    public function setFulfillment($fulfillment)
    {
        if (is_null($fulfillment)) {
            throw new \InvalidArgumentException('non-nullable fulfillment cannot be null');
        }
        $this->container['fulfillment'] = $fulfillment;

        return $this;
    }

    /**
     * Gets invoice
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleInvoice|null
     */
    public function getInvoice()
    {
        return $this->container['invoice'];
    }

    /**
     * Sets invoice
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleInvoice|null $invoice invoice
     *
     * @return self
     */
    public function setInvoice($invoice)
    {
        if (is_null($invoice)) {
            throw new \InvalidArgumentException('non-nullable invoice cannot be null');
        }
        $this->container['invoice'] = $invoice;

        return $this;
    }

    /**
     * Gets note
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleNote|null
     */
    public function getNote()
    {
        return $this->container['note'];
    }

    /**
     * Sets note
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleNote|null $note note
     *
     * @return self
     */
    public function setNote($note)
    {
        if (is_null($note)) {
            throw new \InvalidArgumentException('non-nullable note cannot be null');
        }
        $this->container['note'] = $note;

        return $this;
    }

    /**
     * Gets opportunity
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleOpportunity|null
     */
    public function getOpportunity()
    {
        return $this->container['opportunity'];
    }

    /**
     * Sets opportunity
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleOpportunity|null $opportunity opportunity
     *
     * @return self
     */
    public function setOpportunity($opportunity)
    {
        if (is_null($opportunity)) {
            throw new \InvalidArgumentException('non-nullable opportunity cannot be null');
        }
        $this->container['opportunity'] = $opportunity;

        return $this;
    }

    /**
     * Gets task
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleTask|null
     */
    public function getTask()
    {
        return $this->container['task'];
    }

    /**
     * Sets task
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleTask|null $task task
     *
     * @return self
     */
    public function setTask($task)
    {
        if (is_null($task)) {
            throw new \InvalidArgumentException('non-nullable task cannot be null');
        }
        $this->container['task'] = $task;

        return $this;
    }

    /**
     * Gets template
     *
     * @return \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleTemplate|null
     */
    public function getTemplate()
    {
        return $this->container['template'];
    }

    /**
     * Sets template
     *
     * @param \Com\Keap\Sdk\Core\Model\ApplicationConfigurationModuleTemplate|null $template template
     *
     * @return self
     */
    public function setTemplate($template)
    {
        if (is_null($template)) {
            throw new \InvalidArgumentException('non-nullable template cannot be null');
        }
        $this->container['template'] = $template;

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


