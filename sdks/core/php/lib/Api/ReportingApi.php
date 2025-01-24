<?php
/**
 * ReportingApi
 * PHP version 7.4
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.10.0
 */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Keap\Sdk\Core\Api;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use Keap\Sdk\Core\ApiException;
use Keap\Sdk\Core\Configuration;
use Keap\Sdk\Core\HeaderSelector;
use Keap\Sdk\Core\ObjectSerializer;

/**
 * ReportingApi Class Doc Comment
 *
 * @category Class
 * @package  Keap\Sdk\Core
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class ReportingApi
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
        'runReportUsingPOST' => [
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
     * Operation runReportUsingPOST
     *
     * Run a Report
     *
     * @param  string $report_id The unique identifier of the report (Saved Search) to execute (required)
     * @param  string $fields Comma-separated list of fields to return (or do not supply a value to return all) (optional)
     * @param  string $order_by Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
     * @param  int $page_size Total number of items to return per page (optional, default to 1000)
     * @param  string $page_token Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['runReportUsingPOST'] to see the possible values for this operation
     *
     * @throws \Keap\Sdk\Core\ApiException on non-2xx response or if the response body is not in the expected format
     * @throws \InvalidArgumentException
     * @return \Keap\Sdk\Core\Model\ReportExecutionResult|\Keap\Sdk\Core\Model\Error|\Keap\Sdk\Core\Model\Error
     */
    public function runReportUsingPOST($report_id, $fields = null, $order_by = null, $page_size = 1000, $page_token = null, string $contentType = self::contentTypes['runReportUsingPOST'][0])
    {
        list($response) = $this->runReportUsingPOSTWithHttpInfo($report_id, $fields, $order_by, $page_size, $page_token, $contentType);
        return $response;
    }

    /**
     * Operation runReportUsingPOSTWithHttpInfo
     *
     * Run a Report
     *
     * @param  string $report_id The unique identifier of the report (Saved Search) to execute (required)
     * @param  string $fields Comma-separated list of fields to return (or do not supply a value to return all) (optional)
     * @param  string $order_by Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
     * @param  int $page_size Total number of items to return per page (optional, default to 1000)
     * @param  string $page_token Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['runReportUsingPOST'] to see the possible values for this operation
     *
     * @throws \Keap\Sdk\Core\ApiException on non-2xx response or if the response body is not in the expected format
     * @throws \InvalidArgumentException
     * @return array of \Keap\Sdk\Core\Model\ReportExecutionResult|\Keap\Sdk\Core\Model\Error|\Keap\Sdk\Core\Model\Error, HTTP status code, HTTP response headers (array of strings)
     */
    public function runReportUsingPOSTWithHttpInfo($report_id, $fields = null, $order_by = null, $page_size = 1000, $page_token = null, string $contentType = self::contentTypes['runReportUsingPOST'][0])
    {
        $request = $this->runReportUsingPOSTRequest($report_id, $fields, $order_by, $page_size, $page_token, $contentType);

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
                    if ('\Keap\Sdk\Core\Model\ReportExecutionResult' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Keap\Sdk\Core\Model\ReportExecutionResult' !== 'string') {
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
                        ObjectSerializer::deserialize($content, '\Keap\Sdk\Core\Model\ReportExecutionResult', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 401:
                    if ('\Keap\Sdk\Core\Model\Error' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Keap\Sdk\Core\Model\Error' !== 'string') {
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
                        ObjectSerializer::deserialize($content, '\Keap\Sdk\Core\Model\Error', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 403:
                    if ('\Keap\Sdk\Core\Model\Error' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\Keap\Sdk\Core\Model\Error' !== 'string') {
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
                        ObjectSerializer::deserialize($content, '\Keap\Sdk\Core\Model\Error', []),
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

            $returnType = '\Keap\Sdk\Core\Model\ReportExecutionResult';
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
                        '\Keap\Sdk\Core\Model\ReportExecutionResult',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 401:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\Keap\Sdk\Core\Model\Error',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 403:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\Keap\Sdk\Core\Model\Error',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation runReportUsingPOSTAsync
     *
     * Run a Report
     *
     * @param  string $report_id The unique identifier of the report (Saved Search) to execute (required)
     * @param  string $fields Comma-separated list of fields to return (or do not supply a value to return all) (optional)
     * @param  string $order_by Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
     * @param  int $page_size Total number of items to return per page (optional, default to 1000)
     * @param  string $page_token Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['runReportUsingPOST'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function runReportUsingPOSTAsync($report_id, $fields = null, $order_by = null, $page_size = 1000, $page_token = null, string $contentType = self::contentTypes['runReportUsingPOST'][0])
    {
        return $this->runReportUsingPOSTAsyncWithHttpInfo($report_id, $fields, $order_by, $page_size, $page_token, $contentType)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation runReportUsingPOSTAsyncWithHttpInfo
     *
     * Run a Report
     *
     * @param  string $report_id The unique identifier of the report (Saved Search) to execute (required)
     * @param  string $fields Comma-separated list of fields to return (or do not supply a value to return all) (optional)
     * @param  string $order_by Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
     * @param  int $page_size Total number of items to return per page (optional, default to 1000)
     * @param  string $page_token Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['runReportUsingPOST'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function runReportUsingPOSTAsyncWithHttpInfo($report_id, $fields = null, $order_by = null, $page_size = 1000, $page_token = null, string $contentType = self::contentTypes['runReportUsingPOST'][0])
    {
        $returnType = '\Keap\Sdk\Core\Model\ReportExecutionResult';
        $request = $this->runReportUsingPOSTRequest($report_id, $fields, $order_by, $page_size, $page_token, $contentType);

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
     * Create request for operation 'runReportUsingPOST'
     *
     * @param  string $report_id The unique identifier of the report (Saved Search) to execute (required)
     * @param  string $fields Comma-separated list of fields to return (or do not supply a value to return all) (optional)
     * @param  string $order_by Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
     * @param  int $page_size Total number of items to return per page (optional, default to 1000)
     * @param  string $page_token Representation of the last row retrieved from the previous page. An empty value implies a request for the first page. (optional)
     * @param  string $contentType The value for the Content-Type header. Check self::contentTypes['runReportUsingPOST'] to see the possible values for this operation
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function runReportUsingPOSTRequest($report_id, $fields = null, $order_by = null, $page_size = 1000, $page_token = null, string $contentType = self::contentTypes['runReportUsingPOST'][0])
    {

        // verify the required parameter 'report_id' is set
        if ($report_id === null || (is_array($report_id) && count($report_id) === 0)) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $report_id when calling runReportUsingPOST'
            );
        }



        if ($page_size !== null && $page_size > 1000) {
            throw new \InvalidArgumentException('invalid value for "$page_size" when calling ReportingApi.runReportUsingPOST, must be smaller than or equal to 1000.');
        }
        if ($page_size !== null && $page_size < 1) {
            throw new \InvalidArgumentException('invalid value for "$page_size" when calling ReportingApi.runReportUsingPOST, must be bigger than or equal to 1.');
        }
        


        $resourcePath = '/v2/reporting/reports/{report_id}:run';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $fields,
            'fields', // param base name
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


        // path params
        if ($report_id !== null) {
            $resourcePath = str_replace(
                '{' . 'report_id' . '}',
                ObjectSerializer::toPathValue($report_id),
                $resourcePath
            );
        }


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
