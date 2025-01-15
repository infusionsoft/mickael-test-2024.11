<?php
/**
 * DealStatus
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
use \Com\Keap\Sdk\Core\ObjectSerializer;

/**
 * DealStatus Class Doc Comment
 *
 * @category Class
 * @description Enum representing the status of a deal.
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class DealStatus
{
    /**
     * Possible values of this enum
     */
    public const ACTIVE = 'ACTIVE';

    public const WON = 'WON';

    public const LOST = 'LOST';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::ACTIVE,
            self::WON,
            self::LOST
        ];
    }
}


