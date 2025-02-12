<?php
/**
 * PaymentMethodConfigApi
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

namespace Keap\Core\V2\Api;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use Keap\Core\V2\ApiException;
use Keap\Core\V2\Configuration;
use Keap\Core\V2\HeaderSelector;
use Keap\Core\V2\ObjectSerializer;

/**
 * PaymentMethodConfigApi Class Doc Comment
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class PaymentMethodConfigApi
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
        'createPaymentMethodConfigUsingPOST' => [
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
     * Operation createPaymentMethodConfigUsingPOST
     *
     * Create Payment Method Configuration
     *
     * @param  \Keap\Core\V2\Model\CreatePaymentMethodConfigRequest $create_payment_method_config_request request (required)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['createPaymentMethodConfigUsingPOST'] to see the possible values for this operation
     *
     * @throws \Keap\Core\V2\ApiException on non-2xx response or if the response body is not in the expected format
     * @throws \InvalidArgumentException
     * @return \Keap\Core\V2\Model\PaymentMethodConfig|\Keap\Core\V2\Model\Error|\Keap\Core\V2\Model\Error
     */
    public function createPaymentMethodConfigUsingPOST($create_payment_method_config_request, string $contentType = self::contentTypes['createPaymentMethodConfigUsingPOST'][0])
    {
        list($response) = $this->createPaymentMethodConfigUsingPOSTWithHttpInfo($create_payment_method_config_request, $contentType);
        return $response;
    }

    /**
     * Operation createPaymentMethodConfigUsingPOSTWithHttpInfo
     *
     * Create Payment Method Configuration
     *
     * @param  \Keap\Core\V2\Model\CreatePaymentMethodConfigRequest $create_payment_method_config_request request (required)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['createPaymentMethodConfigUsingPOST'] to see the possible values for this operation
     *
     * @throws \Keap\Core\V2\ApiException on non-2xx response or if the response body is not in the expected format
     * @throws \InvalidArgumentException
     * @return array of \Keap\Core\V2\Model\PaymentMethodConfig|\Keap\Core\V2\Model\Error|\Keap\Core\V2\Model\Error, HTTP status code, HTTP response headers (array of strings)
     */
    public function createPaymentMethodConfigUsingPOSTWithHttpInfo($create_payment_method_config_request, string $contentType = self::contentTypes['createPaymentMethodConfigUsingPOST'][0])
    {
        $request = $this->createPaymentMethodConfigUsingPOSTRequest($create_payment_method_config_request, $contentType);

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
                    if ('\Keap\Core\V2\Model\PaymentMethodConfig' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Keap\Core\V2\Model\PaymentMethodConfig' !== 'string') {
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
                        ObjectSerializer::deserialize($content, '\Keap\Core\V2\Model\PaymentMethodConfig', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 401:
                    if ('\Keap\Core\V2\Model\Error' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Keap\Core\V2\Model\Error' !== 'string') {
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
                        ObjectSerializer::deserialize($content, '\Keap\Core\V2\Model\Error', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 403:
                    if ('\Keap\Core\V2\Model\Error' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Keap\Core\V2\Model\Error' !== 'string') {
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
                        ObjectSerializer::deserialize($content, '\Keap\Core\V2\Model\Error', []),
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

            $returnType = '\Keap\Core\V2\Model\PaymentMethodConfig';
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
                        '\Keap\Core\V2\Model\PaymentMethodConfig',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 401:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\Keap\Core\V2\Model\Error',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 403:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\Keap\Core\V2\Model\Error',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation createPaymentMethodConfigUsingPOSTAsync
     *
     * Create Payment Method Configuration
     *
     * @param  \Keap\Core\V2\Model\CreatePaymentMethodConfigRequest $create_payment_method_config_request request (required)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['createPaymentMethodConfigUsingPOST'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function createPaymentMethodConfigUsingPOSTAsync($create_payment_method_config_request, string $contentType = self::contentTypes['createPaymentMethodConfigUsingPOST'][0])
    {
        return $this->createPaymentMethodConfigUsingPOSTAsyncWithHttpInfo($create_payment_method_config_request, $contentType)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation createPaymentMethodConfigUsingPOSTAsyncWithHttpInfo
     *
     * Create Payment Method Configuration
     *
     * @param  \Keap\Core\V2\Model\CreatePaymentMethodConfigRequest $create_payment_method_config_request request (required)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['createPaymentMethodConfigUsingPOST'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function createPaymentMethodConfigUsingPOSTAsyncWithHttpInfo($create_payment_method_config_request, string $contentType = self::contentTypes['createPaymentMethodConfigUsingPOST'][0])
    {
        $returnType = '\Keap\Core\V2\Model\PaymentMethodConfig';
        $request = $this->createPaymentMethodConfigUsingPOSTRequest($create_payment_method_config_request, $contentType);

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
     * Create request for operation 'createPaymentMethodConfigUsingPOST'
     *
     * @param  \Keap\Core\V2\Model\CreatePaymentMethodConfigRequest $create_payment_method_config_request request (required)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['createPaymentMethodConfigUsingPOST'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function createPaymentMethodConfigUsingPOSTRequest($create_payment_method_config_request, string $contentType = self::contentTypes['createPaymentMethodConfigUsingPOST'][0])
    {

        // verify the required parameter 'create_payment_method_config_request' is set
        if ($create_payment_method_config_request === null || (is_array($create_payment_method_config_request) && count($create_payment_method_config_request) === 0)) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $create_payment_method_config_request when calling createPaymentMethodConfigUsingPOST'
            );
        }


        $resourcePath = '/v2/paymentMethodConfigs';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;





        $headers = $this->headerSelector->selectHeaders(
            ['application/json', ],
            $contentType,
            $multipart
        );

        // for model (json/xml)
        if (isset($create_payment_method_config_request)) {
            if (stripos($headers['Content-Type'], 'application/json') !== false) {
                # if Content-Type contains "application/json", json_encode the body
                $httpBody = \GuzzleHttp\Utils::jsonEncode(ObjectSerializer::sanitizeForSerialization($create_payment_method_config_request));
            } else {
                $httpBody = $create_payment_method_config_request;
            }
        } elseif (count($formParams) > 0) {
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
            'POST',
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
