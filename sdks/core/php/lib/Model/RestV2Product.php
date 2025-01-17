<?php
/**
 * RestV2Product
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
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
 * RestV2Product Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class RestV2Product implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'RestV2Product';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'active' => 'bool',
        'categories' => 'string[]',
        'city_taxable' => 'bool',
        'country_taxable' => 'bool',
        'description' => 'string',
        'id' => 'string',
        'inventory' => '\Com\Keap\Sdk\Core\Model\ProductInventory',
        'name' => 'string',
        'options' => '\Com\Keap\Sdk\Core\Model\ProductOptions[]',
        'price' => '\Com\Keap\Sdk\Core\Model\CurrencyValue',
        'short_description' => 'string',
        'sku' => 'string',
        'state_taxable' => 'bool',
        'storefront_hidden' => 'bool',
        'subscription_only' => 'bool',
        'subscription_plans' => '\Com\Keap\Sdk\Core\Model\SubscriptionPlan[]',
        'taxable' => 'bool',
        'weight' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'active' => null,
        'categories' => null,
        'city_taxable' => null,
        'country_taxable' => null,
        'description' => null,
        'id' => null,
        'inventory' => null,
        'name' => null,
        'options' => null,
        'price' => null,
        'short_description' => null,
        'sku' => null,
        'state_taxable' => null,
        'storefront_hidden' => null,
        'subscription_only' => null,
        'subscription_plans' => null,
        'taxable' => null,
        'weight' => 'double'
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'active' => false,
        'categories' => false,
        'city_taxable' => false,
        'country_taxable' => false,
        'description' => false,
        'id' => false,
        'inventory' => false,
        'name' => false,
        'options' => false,
        'price' => false,
        'short_description' => false,
        'sku' => false,
        'state_taxable' => false,
        'storefront_hidden' => false,
        'subscription_only' => false,
        'subscription_plans' => false,
        'taxable' => false,
        'weight' => false
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
        'active' => 'active',
        'categories' => 'categories',
        'city_taxable' => 'city_taxable',
        'country_taxable' => 'country_taxable',
        'description' => 'description',
        'id' => 'id',
        'inventory' => 'inventory',
        'name' => 'name',
        'options' => 'options',
        'price' => 'price',
        'short_description' => 'short_description',
        'sku' => 'sku',
        'state_taxable' => 'state_taxable',
        'storefront_hidden' => 'storefront_hidden',
        'subscription_only' => 'subscription_only',
        'subscription_plans' => 'subscription_plans',
        'taxable' => 'taxable',
        'weight' => 'weight'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'active' => 'setActive',
        'categories' => 'setCategories',
        'city_taxable' => 'setCityTaxable',
        'country_taxable' => 'setCountryTaxable',
        'description' => 'setDescription',
        'id' => 'setId',
        'inventory' => 'setInventory',
        'name' => 'setName',
        'options' => 'setOptions',
        'price' => 'setPrice',
        'short_description' => 'setShortDescription',
        'sku' => 'setSku',
        'state_taxable' => 'setStateTaxable',
        'storefront_hidden' => 'setStorefrontHidden',
        'subscription_only' => 'setSubscriptionOnly',
        'subscription_plans' => 'setSubscriptionPlans',
        'taxable' => 'setTaxable',
        'weight' => 'setWeight'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'active' => 'getActive',
        'categories' => 'getCategories',
        'city_taxable' => 'getCityTaxable',
        'country_taxable' => 'getCountryTaxable',
        'description' => 'getDescription',
        'id' => 'getId',
        'inventory' => 'getInventory',
        'name' => 'getName',
        'options' => 'getOptions',
        'price' => 'getPrice',
        'short_description' => 'getShortDescription',
        'sku' => 'getSku',
        'state_taxable' => 'getStateTaxable',
        'storefront_hidden' => 'getStorefrontHidden',
        'subscription_only' => 'getSubscriptionOnly',
        'subscription_plans' => 'getSubscriptionPlans',
        'taxable' => 'getTaxable',
        'weight' => 'getWeight'
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
        $this->setIfExists('active', $data ?? [], null);
        $this->setIfExists('categories', $data ?? [], null);
        $this->setIfExists('city_taxable', $data ?? [], null);
        $this->setIfExists('country_taxable', $data ?? [], null);
        $this->setIfExists('description', $data ?? [], null);
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('inventory', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('options', $data ?? [], null);
        $this->setIfExists('price', $data ?? [], null);
        $this->setIfExists('short_description', $data ?? [], null);
        $this->setIfExists('sku', $data ?? [], null);
        $this->setIfExists('state_taxable', $data ?? [], null);
        $this->setIfExists('storefront_hidden', $data ?? [], null);
        $this->setIfExists('subscription_only', $data ?? [], null);
        $this->setIfExists('subscription_plans', $data ?? [], null);
        $this->setIfExists('taxable', $data ?? [], null);
        $this->setIfExists('weight', $data ?? [], null);
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
     * Gets active
     *
     * @return bool|null
     */
    public function getActive()
    {
        return $this->container['active'];
    }

    /**
     * Sets active
     *
     * @param bool|null $active True means active, False means inactive
     *
     * @return self
     */
    public function setActive($active)
    {
        if (is_null($active)) {
            throw new \InvalidArgumentException('non-nullable active cannot be null');
        }
        $this->container['active'] = $active;

        return $this;
    }

    /**
     * Gets categories
     *
     * @return string[]|null
     */
    public function getCategories()
    {
        return $this->container['categories'];
    }

    /**
     * Sets categories
     *
     * @param string[]|null $categories List of category ids to indicate which categories this product will belong to. Can be empty.
     *
     * @return self
     */
    public function setCategories($categories)
    {
        if (is_null($categories)) {
            throw new \InvalidArgumentException('non-nullable categories cannot be null');
        }
        $this->container['categories'] = $categories;

        return $this;
    }

    /**
     * Gets city_taxable
     *
     * @return bool|null
     */
    public function getCityTaxable()
    {
        return $this->container['city_taxable'];
    }

    /**
     * Sets city_taxable
     *
     * @param bool|null $city_taxable If city-based taxes should be applied to this product
     *
     * @return self
     */
    public function setCityTaxable($city_taxable)
    {
        if (is_null($city_taxable)) {
            throw new \InvalidArgumentException('non-nullable city_taxable cannot be null');
        }
        $this->container['city_taxable'] = $city_taxable;

        return $this;
    }

    /**
     * Gets country_taxable
     *
     * @return bool|null
     */
    public function getCountryTaxable()
    {
        return $this->container['country_taxable'];
    }

    /**
     * Sets country_taxable
     *
     * @param bool|null $country_taxable If country-based taxes should be applied to this product
     *
     * @return self
     */
    public function setCountryTaxable($country_taxable)
    {
        if (is_null($country_taxable)) {
            throw new \InvalidArgumentException('non-nullable country_taxable cannot be null');
        }
        $this->container['country_taxable'] = $country_taxable;

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
     * @param string|null $description Product long description
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
     * @param string|null $id The product ID
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
     * Gets inventory
     *
     * @return \Com\Keap\Sdk\Core\Model\ProductInventory|null
     */
    public function getInventory()
    {
        return $this->container['inventory'];
    }

    /**
     * Sets inventory
     *
     * @param \Com\Keap\Sdk\Core\Model\ProductInventory|null $inventory inventory
     *
     * @return self
     */
    public function setInventory($inventory)
    {
        if (is_null($inventory)) {
            throw new \InvalidArgumentException('non-nullable inventory cannot be null');
        }
        $this->container['inventory'] = $inventory;

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
     * @param string|null $name Product name
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
     * Gets options
     *
     * @return \Com\Keap\Sdk\Core\Model\ProductOptions[]|null
     */
    public function getOptions()
    {
        return $this->container['options'];
    }

    /**
     * Sets options
     *
     * @param \Com\Keap\Sdk\Core\Model\ProductOptions[]|null $options List of product options. Can be empty.
     *
     * @return self
     */
    public function setOptions($options)
    {
        if (is_null($options)) {
            throw new \InvalidArgumentException('non-nullable options cannot be null');
        }
        $this->container['options'] = $options;

        return $this;
    }

    /**
     * Gets price
     *
     * @return \Com\Keap\Sdk\Core\Model\CurrencyValue|null
     */
    public function getPrice()
    {
        return $this->container['price'];
    }

    /**
     * Sets price
     *
     * @param \Com\Keap\Sdk\Core\Model\CurrencyValue|null $price price
     *
     * @return self
     */
    public function setPrice($price)
    {
        if (is_null($price)) {
            throw new \InvalidArgumentException('non-nullable price cannot be null');
        }
        $this->container['price'] = $price;

        return $this;
    }

    /**
     * Gets short_description
     *
     * @return string|null
     */
    public function getShortDescription()
    {
        return $this->container['short_description'];
    }

    /**
     * Sets short_description
     *
     * @param string|null $short_description Product short description
     *
     * @return self
     */
    public function setShortDescription($short_description)
    {
        if (is_null($short_description)) {
            throw new \InvalidArgumentException('non-nullable short_description cannot be null');
        }
        $this->container['short_description'] = $short_description;

        return $this;
    }

    /**
     * Gets sku
     *
     * @return string|null
     */
    public function getSku()
    {
        return $this->container['sku'];
    }

    /**
     * Sets sku
     *
     * @param string|null $sku Product SKU
     *
     * @return self
     */
    public function setSku($sku)
    {
        if (is_null($sku)) {
            throw new \InvalidArgumentException('non-nullable sku cannot be null');
        }
        $this->container['sku'] = $sku;

        return $this;
    }

    /**
     * Gets state_taxable
     *
     * @return bool|null
     */
    public function getStateTaxable()
    {
        return $this->container['state_taxable'];
    }

    /**
     * Sets state_taxable
     *
     * @param bool|null $state_taxable If state-based taxes should be applied to this product
     *
     * @return self
     */
    public function setStateTaxable($state_taxable)
    {
        if (is_null($state_taxable)) {
            throw new \InvalidArgumentException('non-nullable state_taxable cannot be null');
        }
        $this->container['state_taxable'] = $state_taxable;

        return $this;
    }

    /**
     * Gets storefront_hidden
     *
     * @return bool|null
     */
    public function getStorefrontHidden()
    {
        return $this->container['storefront_hidden'];
    }

    /**
     * Sets storefront_hidden
     *
     * @param bool|null $storefront_hidden If the product should not be shown in the storefront
     *
     * @return self
     */
    public function setStorefrontHidden($storefront_hidden)
    {
        if (is_null($storefront_hidden)) {
            throw new \InvalidArgumentException('non-nullable storefront_hidden cannot be null');
        }
        $this->container['storefront_hidden'] = $storefront_hidden;

        return $this;
    }

    /**
     * Gets subscription_only
     *
     * @return bool|null
     */
    public function getSubscriptionOnly()
    {
        return $this->container['subscription_only'];
    }

    /**
     * Sets subscription_only
     *
     * @param bool|null $subscription_only If the product is a subscription-only product
     *
     * @return self
     */
    public function setSubscriptionOnly($subscription_only)
    {
        if (is_null($subscription_only)) {
            throw new \InvalidArgumentException('non-nullable subscription_only cannot be null');
        }
        $this->container['subscription_only'] = $subscription_only;

        return $this;
    }

    /**
     * Gets subscription_plans
     *
     * @return \Com\Keap\Sdk\Core\Model\SubscriptionPlan[]|null
     */
    public function getSubscriptionPlans()
    {
        return $this->container['subscription_plans'];
    }

    /**
     * Sets subscription_plans
     *
     * @param \Com\Keap\Sdk\Core\Model\SubscriptionPlan[]|null $subscription_plans List of subscription plans associated with the product. Can be empty.
     *
     * @return self
     */
    public function setSubscriptionPlans($subscription_plans)
    {
        if (is_null($subscription_plans)) {
            throw new \InvalidArgumentException('non-nullable subscription_plans cannot be null');
        }
        $this->container['subscription_plans'] = $subscription_plans;

        return $this;
    }

    /**
     * Gets taxable
     *
     * @return bool|null
     */
    public function getTaxable()
    {
        return $this->container['taxable'];
    }

    /**
     * Sets taxable
     *
     * @param bool|null $taxable Whether or not the product should be taxed
     *
     * @return self
     */
    public function setTaxable($taxable)
    {
        if (is_null($taxable)) {
            throw new \InvalidArgumentException('non-nullable taxable cannot be null');
        }
        $this->container['taxable'] = $taxable;

        return $this;
    }

    /**
     * Gets weight
     *
     * @return float|null
     */
    public function getWeight()
    {
        return $this->container['weight'];
    }

    /**
     * Sets weight
     *
     * @param float|null $weight Product weight
     *
     * @return self
     */
    public function setWeight($weight)
    {
        if (is_null($weight)) {
            throw new \InvalidArgumentException('non-nullable weight cannot be null');
        }
        $this->container['weight'] = $weight;

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


