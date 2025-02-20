<?php
/**
 * CreateUpdateContactRequest
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
 * CreateUpdateContactRequest Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateUpdateContactRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'CreateUpdateContactRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'addresses' => '\Keap\Core\V2\Model\Address[]',
        'anniversary_date' => 'string',
        'birth_date' => 'string',
        'company' => '\Keap\Core\V2\Model\BasicCompany',
        'contact_type' => 'string',
        'custom_fields' => '\Keap\Core\V2\Model\CustomFieldValue[]',
        'email_addresses' => '\Keap\Core\V2\Model\EmailAddressRequest[]',
        'family_name' => 'string',
        'fax_numbers' => '\Keap\Core\V2\Model\FaxNumber[]',
        'given_name' => 'string',
        'job_title' => 'string',
        'leadsource_id' => 'string',
        'middle_name' => 'string',
        'origin' => '\Keap\Core\V2\Model\OriginRequest',
        'owner_id' => 'string',
        'phone_numbers' => '\Keap\Core\V2\Model\PhoneNumber[]',
        'preferred_locale' => 'string',
        'preferred_name' => 'string',
        'prefix' => 'string',
        'referral_code' => 'string',
        'social_accounts' => '\Keap\Core\V2\Model\SocialAccount[]',
        'source_type' => 'string',
        'spouse_name' => 'string',
        'suffix' => 'string',
        'time_zone' => 'string',
        'utm_parameters' => '\Keap\Core\V2\Model\CreateContactUtmPropertiesRequest',
        'website' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'addresses' => null,
        'anniversary_date' => null,
        'birth_date' => null,
        'company' => null,
        'contact_type' => null,
        'custom_fields' => null,
        'email_addresses' => null,
        'family_name' => null,
        'fax_numbers' => null,
        'given_name' => null,
        'job_title' => null,
        'leadsource_id' => null,
        'middle_name' => null,
        'origin' => null,
        'owner_id' => null,
        'phone_numbers' => null,
        'preferred_locale' => null,
        'preferred_name' => null,
        'prefix' => null,
        'referral_code' => null,
        'social_accounts' => null,
        'source_type' => null,
        'spouse_name' => null,
        'suffix' => null,
        'time_zone' => null,
        'utm_parameters' => null,
        'website' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'addresses' => false,
        'anniversary_date' => false,
        'birth_date' => false,
        'company' => false,
        'contact_type' => false,
        'custom_fields' => false,
        'email_addresses' => false,
        'family_name' => false,
        'fax_numbers' => false,
        'given_name' => false,
        'job_title' => false,
        'leadsource_id' => false,
        'middle_name' => false,
        'origin' => false,
        'owner_id' => false,
        'phone_numbers' => false,
        'preferred_locale' => false,
        'preferred_name' => false,
        'prefix' => false,
        'referral_code' => false,
        'social_accounts' => false,
        'source_type' => false,
        'spouse_name' => false,
        'suffix' => false,
        'time_zone' => false,
        'utm_parameters' => false,
        'website' => false
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
        'addresses' => 'addresses',
        'anniversary_date' => 'anniversary_date',
        'birth_date' => 'birth_date',
        'company' => 'company',
        'contact_type' => 'contact_type',
        'custom_fields' => 'custom_fields',
        'email_addresses' => 'email_addresses',
        'family_name' => 'family_name',
        'fax_numbers' => 'fax_numbers',
        'given_name' => 'given_name',
        'job_title' => 'job_title',
        'leadsource_id' => 'leadsource_id',
        'middle_name' => 'middle_name',
        'origin' => 'origin',
        'owner_id' => 'owner_id',
        'phone_numbers' => 'phone_numbers',
        'preferred_locale' => 'preferred_locale',
        'preferred_name' => 'preferred_name',
        'prefix' => 'prefix',
        'referral_code' => 'referral_code',
        'social_accounts' => 'social_accounts',
        'source_type' => 'source_type',
        'spouse_name' => 'spouse_name',
        'suffix' => 'suffix',
        'time_zone' => 'time_zone',
        'utm_parameters' => 'utm_parameters',
        'website' => 'website'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'addresses' => 'setAddresses',
        'anniversary_date' => 'setAnniversaryDate',
        'birth_date' => 'setBirthDate',
        'company' => 'setCompany',
        'contact_type' => 'setContactType',
        'custom_fields' => 'setCustomFields',
        'email_addresses' => 'setEmailAddresses',
        'family_name' => 'setFamilyName',
        'fax_numbers' => 'setFaxNumbers',
        'given_name' => 'setGivenName',
        'job_title' => 'setJobTitle',
        'leadsource_id' => 'setLeadsourceId',
        'middle_name' => 'setMiddleName',
        'origin' => 'setOrigin',
        'owner_id' => 'setOwnerId',
        'phone_numbers' => 'setPhoneNumbers',
        'preferred_locale' => 'setPreferredLocale',
        'preferred_name' => 'setPreferredName',
        'prefix' => 'setPrefix',
        'referral_code' => 'setReferralCode',
        'social_accounts' => 'setSocialAccounts',
        'source_type' => 'setSourceType',
        'spouse_name' => 'setSpouseName',
        'suffix' => 'setSuffix',
        'time_zone' => 'setTimeZone',
        'utm_parameters' => 'setUtmParameters',
        'website' => 'setWebsite'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'addresses' => 'getAddresses',
        'anniversary_date' => 'getAnniversaryDate',
        'birth_date' => 'getBirthDate',
        'company' => 'getCompany',
        'contact_type' => 'getContactType',
        'custom_fields' => 'getCustomFields',
        'email_addresses' => 'getEmailAddresses',
        'family_name' => 'getFamilyName',
        'fax_numbers' => 'getFaxNumbers',
        'given_name' => 'getGivenName',
        'job_title' => 'getJobTitle',
        'leadsource_id' => 'getLeadsourceId',
        'middle_name' => 'getMiddleName',
        'origin' => 'getOrigin',
        'owner_id' => 'getOwnerId',
        'phone_numbers' => 'getPhoneNumbers',
        'preferred_locale' => 'getPreferredLocale',
        'preferred_name' => 'getPreferredName',
        'prefix' => 'getPrefix',
        'referral_code' => 'getReferralCode',
        'social_accounts' => 'getSocialAccounts',
        'source_type' => 'getSourceType',
        'spouse_name' => 'getSpouseName',
        'suffix' => 'getSuffix',
        'time_zone' => 'getTimeZone',
        'utm_parameters' => 'getUtmParameters',
        'website' => 'getWebsite'
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

    public const SOURCE_TYPE_SOURCE_TYPE_UNSPECIFIED = 'SOURCE_TYPE_UNSPECIFIED';
    public const SOURCE_TYPE_API = 'API';
    public const SOURCE_TYPE_APPOINTMENT = 'APPOINTMENT';
    public const SOURCE_TYPE_FORM_API_HOSTED = 'FORM_API_HOSTED';
    public const SOURCE_TYPE_FORM_API_INTERNAL = 'FORM_API_INTERNAL';
    public const SOURCE_TYPE_IMPORT = 'IMPORT';
    public const SOURCE_TYPE_INTERNAL_FORM = 'INTERNAL_FORM';
    public const SOURCE_TYPE_LANDING_PAGE = 'LANDING_PAGE';
    public const SOURCE_TYPE_MANUAL = 'MANUAL';
    public const SOURCE_TYPE_OTHER = 'OTHER';
    public const SOURCE_TYPE_UNKNOWN = 'UNKNOWN';
    public const SOURCE_TYPE_WEBFORM = 'WEBFORM';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getSourceTypeAllowableValues()
    {
        return [
            self::SOURCE_TYPE_SOURCE_TYPE_UNSPECIFIED,
            self::SOURCE_TYPE_API,
            self::SOURCE_TYPE_APPOINTMENT,
            self::SOURCE_TYPE_FORM_API_HOSTED,
            self::SOURCE_TYPE_FORM_API_INTERNAL,
            self::SOURCE_TYPE_IMPORT,
            self::SOURCE_TYPE_INTERNAL_FORM,
            self::SOURCE_TYPE_LANDING_PAGE,
            self::SOURCE_TYPE_MANUAL,
            self::SOURCE_TYPE_OTHER,
            self::SOURCE_TYPE_UNKNOWN,
            self::SOURCE_TYPE_WEBFORM,
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
        $this->setIfExists('addresses', $data ?? [], null);
        $this->setIfExists('anniversary_date', $data ?? [], null);
        $this->setIfExists('birth_date', $data ?? [], null);
        $this->setIfExists('company', $data ?? [], null);
        $this->setIfExists('contact_type', $data ?? [], null);
        $this->setIfExists('custom_fields', $data ?? [], null);
        $this->setIfExists('email_addresses', $data ?? [], null);
        $this->setIfExists('family_name', $data ?? [], null);
        $this->setIfExists('fax_numbers', $data ?? [], null);
        $this->setIfExists('given_name', $data ?? [], null);
        $this->setIfExists('job_title', $data ?? [], null);
        $this->setIfExists('leadsource_id', $data ?? [], null);
        $this->setIfExists('middle_name', $data ?? [], null);
        $this->setIfExists('origin', $data ?? [], null);
        $this->setIfExists('owner_id', $data ?? [], null);
        $this->setIfExists('phone_numbers', $data ?? [], null);
        $this->setIfExists('preferred_locale', $data ?? [], null);
        $this->setIfExists('preferred_name', $data ?? [], null);
        $this->setIfExists('prefix', $data ?? [], null);
        $this->setIfExists('referral_code', $data ?? [], null);
        $this->setIfExists('social_accounts', $data ?? [], null);
        $this->setIfExists('source_type', $data ?? [], null);
        $this->setIfExists('spouse_name', $data ?? [], null);
        $this->setIfExists('suffix', $data ?? [], null);
        $this->setIfExists('time_zone', $data ?? [], null);
        $this->setIfExists('utm_parameters', $data ?? [], null);
        $this->setIfExists('website', $data ?? [], null);
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

        $allowedValues = $this->getSourceTypeAllowableValues();
        if (!is_null($this->container['source_type']) && !in_array($this->container['source_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'source_type', must be one of '%s'",
                $this->container['source_type'],
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
     * Gets addresses
     *
     * @return \Keap\Core\V2\Model\Address[]|null
     */
    public function getAddresses()
    {
        return $this->container['addresses'];
    }

    /**
     * Sets addresses
     *
     * @param \Keap\Core\V2\Model\Address[]|null $addresses Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
     *
     * @return self
     */
    public function setAddresses($addresses)
    {
        if (is_null($addresses)) {
            throw new \InvalidArgumentException('non-nullable addresses cannot be null');
        }
        $this->container['addresses'] = $addresses;

        return $this;
    }

    /**
     * Gets anniversary_date
     *
     * @return string|null
     */
    public function getAnniversaryDate()
    {
        return $this->container['anniversary_date'];
    }

    /**
     * Sets anniversary_date
     *
     * @param string|null $anniversary_date anniversary_date
     *
     * @return self
     */
    public function setAnniversaryDate($anniversary_date)
    {
        if (is_null($anniversary_date)) {
            throw new \InvalidArgumentException('non-nullable anniversary_date cannot be null');
        }
        $this->container['anniversary_date'] = $anniversary_date;

        return $this;
    }

    /**
     * Gets birth_date
     *
     * @return string|null
     */
    public function getBirthDate()
    {
        return $this->container['birth_date'];
    }

    /**
     * Sets birth_date
     *
     * @param string|null $birth_date birth_date
     *
     * @return self
     */
    public function setBirthDate($birth_date)
    {
        if (is_null($birth_date)) {
            throw new \InvalidArgumentException('non-nullable birth_date cannot be null');
        }
        $this->container['birth_date'] = $birth_date;

        return $this;
    }

    /**
     * Gets company
     *
     * @return \Keap\Core\V2\Model\BasicCompany|null
     */
    public function getCompany()
    {
        return $this->container['company'];
    }

    /**
     * Sets company
     *
     * @param \Keap\Core\V2\Model\BasicCompany|null $company company
     *
     * @return self
     */
    public function setCompany($company)
    {
        if (is_null($company)) {
            throw new \InvalidArgumentException('non-nullable company cannot be null');
        }
        $this->container['company'] = $company;

        return $this;
    }

    /**
     * Gets contact_type
     *
     * @return string|null
     */
    public function getContactType()
    {
        return $this->container['contact_type'];
    }

    /**
     * Sets contact_type
     *
     * @param string|null $contact_type contact_type
     *
     * @return self
     */
    public function setContactType($contact_type)
    {
        if (is_null($contact_type)) {
            throw new \InvalidArgumentException('non-nullable contact_type cannot be null');
        }
        $this->container['contact_type'] = $contact_type;

        return $this;
    }

    /**
     * Gets custom_fields
     *
     * @return \Keap\Core\V2\Model\CustomFieldValue[]|null
     */
    public function getCustomFields()
    {
        return $this->container['custom_fields'];
    }

    /**
     * Sets custom_fields
     *
     * @param \Keap\Core\V2\Model\CustomFieldValue[]|null $custom_fields Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
     *
     * @return self
     */
    public function setCustomFields($custom_fields)
    {
        if (is_null($custom_fields)) {
            throw new \InvalidArgumentException('non-nullable custom_fields cannot be null');
        }
        $this->container['custom_fields'] = $custom_fields;

        return $this;
    }

    /**
     * Gets email_addresses
     *
     * @return \Keap\Core\V2\Model\EmailAddressRequest[]|null
     */
    public function getEmailAddresses()
    {
        return $this->container['email_addresses'];
    }

    /**
     * Sets email_addresses
     *
     * @param \Keap\Core\V2\Model\EmailAddressRequest[]|null $email_addresses Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
     *
     * @return self
     */
    public function setEmailAddresses($email_addresses)
    {
        if (is_null($email_addresses)) {
            throw new \InvalidArgumentException('non-nullable email_addresses cannot be null');
        }
        $this->container['email_addresses'] = $email_addresses;

        return $this;
    }

    /**
     * Gets family_name
     *
     * @return string|null
     */
    public function getFamilyName()
    {
        return $this->container['family_name'];
    }

    /**
     * Sets family_name
     *
     * @param string|null $family_name family_name
     *
     * @return self
     */
    public function setFamilyName($family_name)
    {
        if (is_null($family_name)) {
            throw new \InvalidArgumentException('non-nullable family_name cannot be null');
        }
        $this->container['family_name'] = $family_name;

        return $this;
    }

    /**
     * Gets fax_numbers
     *
     * @return \Keap\Core\V2\Model\FaxNumber[]|null
     */
    public function getFaxNumbers()
    {
        return $this->container['fax_numbers'];
    }

    /**
     * Sets fax_numbers
     *
     * @param \Keap\Core\V2\Model\FaxNumber[]|null $fax_numbers Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
     *
     * @return self
     */
    public function setFaxNumbers($fax_numbers)
    {
        if (is_null($fax_numbers)) {
            throw new \InvalidArgumentException('non-nullable fax_numbers cannot be null');
        }
        $this->container['fax_numbers'] = $fax_numbers;

        return $this;
    }

    /**
     * Gets given_name
     *
     * @return string|null
     */
    public function getGivenName()
    {
        return $this->container['given_name'];
    }

    /**
     * Sets given_name
     *
     * @param string|null $given_name given_name
     *
     * @return self
     */
    public function setGivenName($given_name)
    {
        if (is_null($given_name)) {
            throw new \InvalidArgumentException('non-nullable given_name cannot be null');
        }
        $this->container['given_name'] = $given_name;

        return $this;
    }

    /**
     * Gets job_title
     *
     * @return string|null
     */
    public function getJobTitle()
    {
        return $this->container['job_title'];
    }

    /**
     * Sets job_title
     *
     * @param string|null $job_title job_title
     *
     * @return self
     */
    public function setJobTitle($job_title)
    {
        if (is_null($job_title)) {
            throw new \InvalidArgumentException('non-nullable job_title cannot be null');
        }
        $this->container['job_title'] = $job_title;

        return $this;
    }

    /**
     * Gets leadsource_id
     *
     * @return string|null
     */
    public function getLeadsourceId()
    {
        return $this->container['leadsource_id'];
    }

    /**
     * Sets leadsource_id
     *
     * @param string|null $leadsource_id leadsource_id
     *
     * @return self
     */
    public function setLeadsourceId($leadsource_id)
    {
        if (is_null($leadsource_id)) {
            throw new \InvalidArgumentException('non-nullable leadsource_id cannot be null');
        }
        $this->container['leadsource_id'] = $leadsource_id;

        return $this;
    }

    /**
     * Gets middle_name
     *
     * @return string|null
     */
    public function getMiddleName()
    {
        return $this->container['middle_name'];
    }

    /**
     * Sets middle_name
     *
     * @param string|null $middle_name middle_name
     *
     * @return self
     */
    public function setMiddleName($middle_name)
    {
        if (is_null($middle_name)) {
            throw new \InvalidArgumentException('non-nullable middle_name cannot be null');
        }
        $this->container['middle_name'] = $middle_name;

        return $this;
    }

    /**
     * Gets origin
     *
     * @return \Keap\Core\V2\Model\OriginRequest|null
     */
    public function getOrigin()
    {
        return $this->container['origin'];
    }

    /**
     * Sets origin
     *
     * @param \Keap\Core\V2\Model\OriginRequest|null $origin origin
     *
     * @return self
     */
    public function setOrigin($origin)
    {
        if (is_null($origin)) {
            throw new \InvalidArgumentException('non-nullable origin cannot be null');
        }
        $this->container['origin'] = $origin;

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
     * @param string|null $owner_id owner_id
     *
     * @return self
     */
    public function setOwnerId($owner_id)
    {
        if (is_null($owner_id)) {
            throw new \InvalidArgumentException('non-nullable owner_id cannot be null');
        }
        $this->container['owner_id'] = $owner_id;

        return $this;
    }

    /**
     * Gets phone_numbers
     *
     * @return \Keap\Core\V2\Model\PhoneNumber[]|null
     */
    public function getPhoneNumbers()
    {
        return $this->container['phone_numbers'];
    }

    /**
     * Sets phone_numbers
     *
     * @param \Keap\Core\V2\Model\PhoneNumber[]|null $phone_numbers Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
     *
     * @return self
     */
    public function setPhoneNumbers($phone_numbers)
    {
        if (is_null($phone_numbers)) {
            throw new \InvalidArgumentException('non-nullable phone_numbers cannot be null');
        }
        $this->container['phone_numbers'] = $phone_numbers;

        return $this;
    }

    /**
     * Gets preferred_locale
     *
     * @return string|null
     */
    public function getPreferredLocale()
    {
        return $this->container['preferred_locale'];
    }

    /**
     * Sets preferred_locale
     *
     * @param string|null $preferred_locale preferred_locale
     *
     * @return self
     */
    public function setPreferredLocale($preferred_locale)
    {
        if (is_null($preferred_locale)) {
            throw new \InvalidArgumentException('non-nullable preferred_locale cannot be null');
        }
        $this->container['preferred_locale'] = $preferred_locale;

        return $this;
    }

    /**
     * Gets preferred_name
     *
     * @return string|null
     */
    public function getPreferredName()
    {
        return $this->container['preferred_name'];
    }

    /**
     * Sets preferred_name
     *
     * @param string|null $preferred_name preferred_name
     *
     * @return self
     */
    public function setPreferredName($preferred_name)
    {
        if (is_null($preferred_name)) {
            throw new \InvalidArgumentException('non-nullable preferred_name cannot be null');
        }
        $this->container['preferred_name'] = $preferred_name;

        return $this;
    }

    /**
     * Gets prefix
     *
     * @return string|null
     */
    public function getPrefix()
    {
        return $this->container['prefix'];
    }

    /**
     * Sets prefix
     *
     * @param string|null $prefix prefix
     *
     * @return self
     */
    public function setPrefix($prefix)
    {
        if (is_null($prefix)) {
            throw new \InvalidArgumentException('non-nullable prefix cannot be null');
        }
        $this->container['prefix'] = $prefix;

        return $this;
    }

    /**
     * Gets referral_code
     *
     * @return string|null
     */
    public function getReferralCode()
    {
        return $this->container['referral_code'];
    }

    /**
     * Sets referral_code
     *
     * @param string|null $referral_code referral_code
     *
     * @return self
     */
    public function setReferralCode($referral_code)
    {
        if (is_null($referral_code)) {
            throw new \InvalidArgumentException('non-nullable referral_code cannot be null');
        }
        $this->container['referral_code'] = $referral_code;

        return $this;
    }

    /**
     * Gets social_accounts
     *
     * @return \Keap\Core\V2\Model\SocialAccount[]|null
     */
    public function getSocialAccounts()
    {
        return $this->container['social_accounts'];
    }

    /**
     * Sets social_accounts
     *
     * @param \Keap\Core\V2\Model\SocialAccount[]|null $social_accounts Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
     *
     * @return self
     */
    public function setSocialAccounts($social_accounts)
    {
        if (is_null($social_accounts)) {
            throw new \InvalidArgumentException('non-nullable social_accounts cannot be null');
        }
        $this->container['social_accounts'] = $social_accounts;

        return $this;
    }

    /**
     * Gets source_type
     *
     * @return string|null
     */
    public function getSourceType()
    {
        return $this->container['source_type'];
    }

    /**
     * Sets source_type
     *
     * @param string|null $source_type source_type
     *
     * @return self
     */
    public function setSourceType($source_type)
    {
        if (is_null($source_type)) {
            throw new \InvalidArgumentException('non-nullable source_type cannot be null');
        }
        $allowedValues = $this->getSourceTypeAllowableValues();
        if (!in_array($source_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'source_type', must be one of '%s'",
                    $source_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['source_type'] = $source_type;

        return $this;
    }

    /**
     * Gets spouse_name
     *
     * @return string|null
     */
    public function getSpouseName()
    {
        return $this->container['spouse_name'];
    }

    /**
     * Sets spouse_name
     *
     * @param string|null $spouse_name spouse_name
     *
     * @return self
     */
    public function setSpouseName($spouse_name)
    {
        if (is_null($spouse_name)) {
            throw new \InvalidArgumentException('non-nullable spouse_name cannot be null');
        }
        $this->container['spouse_name'] = $spouse_name;

        return $this;
    }

    /**
     * Gets suffix
     *
     * @return string|null
     */
    public function getSuffix()
    {
        return $this->container['suffix'];
    }

    /**
     * Sets suffix
     *
     * @param string|null $suffix suffix
     *
     * @return self
     */
    public function setSuffix($suffix)
    {
        if (is_null($suffix)) {
            throw new \InvalidArgumentException('non-nullable suffix cannot be null');
        }
        $this->container['suffix'] = $suffix;

        return $this;
    }

    /**
     * Gets time_zone
     *
     * @return string|null
     */
    public function getTimeZone()
    {
        return $this->container['time_zone'];
    }

    /**
     * Sets time_zone
     *
     * @param string|null $time_zone time_zone
     *
     * @return self
     */
    public function setTimeZone($time_zone)
    {
        if (is_null($time_zone)) {
            throw new \InvalidArgumentException('non-nullable time_zone cannot be null');
        }
        $this->container['time_zone'] = $time_zone;

        return $this;
    }

    /**
     * Gets utm_parameters
     *
     * @return \Keap\Core\V2\Model\CreateContactUtmPropertiesRequest|null
     */
    public function getUtmParameters()
    {
        return $this->container['utm_parameters'];
    }

    /**
     * Sets utm_parameters
     *
     * @param \Keap\Core\V2\Model\CreateContactUtmPropertiesRequest|null $utm_parameters utm_parameters
     *
     * @return self
     */
    public function setUtmParameters($utm_parameters)
    {
        if (is_null($utm_parameters)) {
            throw new \InvalidArgumentException('non-nullable utm_parameters cannot be null');
        }
        $this->container['utm_parameters'] = $utm_parameters;

        return $this;
    }

    /**
     * Gets website
     *
     * @return string|null
     */
    public function getWebsite()
    {
        return $this->container['website'];
    }

    /**
     * Sets website
     *
     * @param string|null $website website
     *
     * @return self
     */
    public function setWebsite($website)
    {
        if (is_null($website)) {
            throw new \InvalidArgumentException('non-nullable website cannot be null');
        }
        $this->container['website'] = $website;

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


