<?php
/**
 * SubscriptionPlansApi
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

namespace Com\Keap\Sdk\Core\Api;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use Com\Keap\Sdk\Core\ApiException;
use Com\Keap\Sdk\Core\Configuration;
use Com\Keap\Sdk\Core\HeaderSelector;
use Com\Keap\Sdk\Core\ObjectSerializer;

/**
 * SubscriptionPlansApi Class Doc Comment
 *
 * @category Class
 * @package  Com\Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class SubscriptionPlansApi
{
    /**
     * @var ClientInterface
     */
    protected $client;

    /**
     * @var Configuration
     */
    protected $config;

    /**
     * @var HeaderSelector
     */
    protected $headerSelector;

    /**
     * @var int Host index
     */
    protected $hostIndex;

    /** @var string[] $contentTypes **/
    public const contentTypes = [
        'listSubscriptionPlansUsingGET' => [
            'application/json',
        ],
    ];

    /**
     * @param ClientInterface $client
     * @param Configuration   $config
     * @param HeaderSelector  $selector
     * @param int             $hostIndex (Optional) host index to select the list of hosts if defined in the OpenAPI spec
     */
    public function __construct(
        ClientInterface $client = null,
        Configuration $config = null,
        HeaderSelector $selector = null,
        $hostIndex = 0
    ) {
        $this->client = $client ?: new Client();
        $this->config = $config ?: Configuration::getDefaultConfiguration();
        $this->headerSelector = $selector ?: new HeaderSelector();
        $this->hostIndex = $hostIndex;
    }

    /**
     * Set the host index
     *
     * @param int $hostIndex Host index (required)
     */
    public function setHostIndex($hostIndex): void
    {
        $this->hostIndex = $hostIndex;
    }

    /**
     * Get the host index
     *
     * @return int Host index
     */
    public function getHostIndex()
    {
        return $this->hostIndex;
    }

    /**
     * @return Configuration
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * Operation listSubscriptionPlansUsingGET
     *
     * List Subscription Plans
     *
     * @param  string $filter Filter to apply, allowed fields are:   - (String) name (optional)
     * @param  string $order_by Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
     * @param  int $page_size Total number of items to return per page (optional)
     * @param  string $page_token Page token (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listSubscriptionPlansUsingGET'] to see the possible values for this operation
     *
     * @throws \Com\Keap\Sdk\Core\ApiException on non-2xx response or if the response body is not in the expected format
     * @throws \InvalidArgumentException
     * @return \Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse|\Com\Keap\Sdk\Core\Model\Error|\Com\Keap\Sdk\Core\Model\Error|\Com\Keap\Sdk\Core\Model\Error
     */
    public function listSubscriptionPlansUsingGET($filter = null, $order_by = null, $page_size = null, $page_token = null, string $contentType = self::contentTypes['listSubscriptionPlansUsingGET'][0])
    {
        list($response) = $this->listSubscriptionPlansUsingGETWithHttpInfo($filter, $order_by, $page_size, $page_token, $contentType);
        return $response;
    }

    /**
     * Operation listSubscriptionPlansUsingGETWithHttpInfo
     *
     * List Subscription Plans
     *
     * @param  string $filter Filter to apply, allowed fields are:   - (String) name (optional)
     * @param  string $order_by Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
     * @param  int $page_size Total number of items to return per page (optional)
     * @param  string $page_token Page token (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listSubscriptionPlansUsingGET'] to see the possible values for this operation
     *
     * @throws \Com\Keap\Sdk\Core\ApiException on non-2xx response or if the response body is not in the expected format
     * @throws \InvalidArgumentException
     * @return array of \Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse|\Com\Keap\Sdk\Core\Model\Error|\Com\Keap\Sdk\Core\Model\Error|\Com\Keap\Sdk\Core\Model\Error, HTTP status code, HTTP response headers (array of strings)
     */
    public function listSubscriptionPlansUsingGETWithHttpInfo($filter = null, $order_by = null, $page_size = null, $page_token = null, string $contentType = self::contentTypes['listSubscriptionPlansUsingGET'][0])
    {
        $request = $this->listSubscriptionPlansUsingGETRequest($filter, $order_by, $page_size, $page_token, $contentType);

        try {
            $options = $this->createHttpClientOption();
            try {
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? (string) $e->getResponse()->getBody() : null
                );
            } catch (ConnectException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    null,
                    null
                );
            }

            $statusCode = $response->getStatusCode();


            switch($statusCode) {
                case 200:
                    if ('\Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse' !== 'string') {
                            try {
                                $content = json_decode($content, false, 512, JSON_THROW_ON_ERROR);
                            } catch (\JsonException $exception) {
                                throw new ApiException(
                                    sprintf(
                                        'Error JSON decoding server response (%s)',
                                        $request->getUri()
                                    ),
                                    $statusCode,
                                    $response->getHeaders(),
                                    $content
                                );
                            }
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 401:
                    if ('\Com\Keap\Sdk\Core\Model\Error' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Com\Keap\Sdk\Core\Model\Error' !== 'string') {
                            try {
                                $content = json_decode($content, false, 512, JSON_THROW_ON_ERROR);
                            } catch (\JsonException $exception) {
                                throw new ApiException(
                                    sprintf(
                                        'Error JSON decoding server response (%s)',
                                        $request->getUri()
                                    ),
                                    $statusCode,
                                    $response->getHeaders(),
                                    $content
                                );
                            }
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\Com\Keap\Sdk\Core\Model\Error', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 403:
                    if ('\Com\Keap\Sdk\Core\Model\Error' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Com\Keap\Sdk\Core\Model\Error' !== 'string') {
                            try {
                                $content = json_decode($content, false, 512, JSON_THROW_ON_ERROR);
                            } catch (\JsonException $exception) {
                                throw new ApiException(
                                    sprintf(
                                        'Error JSON decoding server response (%s)',
                                        $request->getUri()
                                    ),
                                    $statusCode,
                                    $response->getHeaders(),
                                    $content
                                );
                            }
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\Com\Keap\Sdk\Core\Model\Error', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 404:
                    if ('\Com\Keap\Sdk\Core\Model\Error' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Com\Keap\Sdk\Core\Model\Error' !== 'string') {
                            try {
                                $content = json_decode($content, false, 512, JSON_THROW_ON_ERROR);
                            } catch (\JsonException $exception) {
                                throw new ApiException(
                                    sprintf(
                                        'Error JSON decoding server response (%s)',
                                        $request->getUri()
                                    ),
                                    $statusCode,
                                    $response->getHeaders(),
                                    $content
                                );
                            }
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\Com\Keap\Sdk\Core\Model\Error', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
            }

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        (string) $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    (string) $response->getBody()
                );
            }

            $returnType = '\Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse';
            if ($returnType === '\SplFileObject') {
                $content = $response->getBody(); //stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ($returnType !== 'string') {
                    try {
                        $content = json_decode($content, false, 512, JSON_THROW_ON_ERROR);
                    } catch (\JsonException $exception) {
                        throw new ApiException(
                            sprintf(
                                'Error JSON decoding server response (%s)',
                                $request->getUri()
                            ),
                            $statusCode,
                            $response->getHeaders(),
                            $content
                        );
                    }
                }
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders()
            ];

        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 401:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\Com\Keap\Sdk\Core\Model\Error',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 403:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\Com\Keap\Sdk\Core\Model\Error',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 404:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\Com\Keap\Sdk\Core\Model\Error',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation listSubscriptionPlansUsingGETAsync
     *
     * List Subscription Plans
     *
     * @param  string $filter Filter to apply, allowed fields are:   - (String) name (optional)
     * @param  string $order_by Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
     * @param  int $page_size Total number of items to return per page (optional)
     * @param  string $page_token Page token (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listSubscriptionPlansUsingGET'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function listSubscriptionPlansUsingGETAsync($filter = null, $order_by = null, $page_size = null, $page_token = null, string $contentType = self::contentTypes['listSubscriptionPlansUsingGET'][0])
    {
        return $this->listSubscriptionPlansUsingGETAsyncWithHttpInfo($filter, $order_by, $page_size, $page_token, $contentType)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation listSubscriptionPlansUsingGETAsyncWithHttpInfo
     *
     * List Subscription Plans
     *
     * @param  string $filter Filter to apply, allowed fields are:   - (String) name (optional)
     * @param  string $order_by Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
     * @param  int $page_size Total number of items to return per page (optional)
     * @param  string $page_token Page token (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listSubscriptionPlansUsingGET'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function listSubscriptionPlansUsingGETAsyncWithHttpInfo($filter = null, $order_by = null, $page_size = null, $page_token = null, string $contentType = self::contentTypes['listSubscriptionPlansUsingGET'][0])
    {
        $returnType = '\Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse';
        $request = $this->listSubscriptionPlansUsingGETRequest($filter, $order_by, $page_size, $page_token, $contentType);

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    if ($returnType === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ($returnType !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();
                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        (string) $response->getBody()
                    );
                }
            );
    }

    /**
     * Create request for operation 'listSubscriptionPlansUsingGET'
     *
     * @param  string $filter Filter to apply, allowed fields are:   - (String) name (optional)
     * @param  string $order_by Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
     * @param  int $page_size Total number of items to return per page (optional)
     * @param  string $page_token Page token (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['listSubscriptionPlansUsingGET'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function listSubscriptionPlansUsingGETRequest($filter = null, $order_by = null, $page_size = null, $page_token = null, string $contentType = self::contentTypes['listSubscriptionPlansUsingGET'][0])
    {



        if ($page_size !== null && $page_size > 1000) {
            throw new \InvalidArgumentException('invalid value for "$page_size" when calling SubscriptionPlansApi.listSubscriptionPlansUsingGET, must be smaller than or equal to 1000.');
        }
        if ($page_size !== null && $page_size < 1) {
            throw new \InvalidArgumentException('invalid value for "$page_size" when calling SubscriptionPlansApi.listSubscriptionPlansUsingGET, must be bigger than or equal to 1.');
        }
        


        $resourcePath = '/v2/subscriptionPlans';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $filter,
            'filter', // param base name
            'string', // openApiType
            'form', // style
            true, // explode
            false // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $order_by,
            'order_by', // param base name
            'string', // openApiType
            'form', // style
            true, // explode
            false // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $page_size,
            'page_size', // param base name
            'integer', // openApiType
            'form', // style
            true, // explode
            false // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $page_token,
            'page_token', // param base name
            'string', // openApiType
            'form', // style
            true, // explode
            false // required
        ) ?? []);




        $headers = $this->headerSelector->selectHeaders(
            ['application/json', ],
            $contentType,
            $multipart
        );

        // for model (json/xml)
        if (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $formParamValueItems = is_array($formParamValue) ? $formParamValue : [$formParamValue];
                    foreach ($formParamValueItems as $formParamValueItem) {
                        $multipartContents[] = [
                            'name' => $formParamName,
                            'contents' => $formParamValueItem
                        ];
                    }
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);

            } elseif (stripos($headers['Content-Type'], 'application/json') !== false) {
                # if Content-Type contains "application/json", json_encode the form parameters
                $httpBody = \GuzzleHttp\Utils::jsonEncode($formParams);
            } else {
                // for HTTP post (form)
                $httpBody = ObjectSerializer::buildQuery($formParams);
            }
        }


        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $operationHost = $this->config->getHost();
        $query = ObjectSerializer::buildQuery($queryParams);
        return new Request(
            'GET',
            $operationHost . $resourcePath . ($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Create http client option
     *
     * @throws \RuntimeException on file opening failure
     * @return array of http client options
     */
    protected function createHttpClientOption()
    {
        $options = [];
        if ($this->config->getDebug()) {
            $options[RequestOptions::DEBUG] = fopen($this->config->getDebugFile(), 'a');
            if (!$options[RequestOptions::DEBUG]) {
                throw new \RuntimeException('Failed to open the debug file: ' . $this->config->getDebugFile());
            }
        }

        return $options;
    }
}
