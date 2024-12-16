/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package com.keap.sdk.sdk.client;

import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Pair;

import com.keap.sdk.sdk.model.CreateLeadSourceRequest;
import com.keap.sdk.sdk.model.Error;
import com.keap.sdk.sdk.model.LeadSource;
import com.keap.sdk.sdk.model.ListLeadSourcesResponse;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.validation.constraints.*;
import jakarta.validation.Valid;

import java.io.InputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.net.http.HttpRequest;
import java.nio.channels.Channels;
import java.nio.channels.Pipe;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

import java.util.ArrayList;
import java.util.StringJoiner;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;

import java.util.function.Supplier;
import io.github.resilience4j.core.functions.CheckedSupplier;
import io.github.resilience4j.retry.Retry;


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class LeadSourcesApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public LeadSourcesApi() {
    this(new ApiClient());
  }

  public LeadSourcesApi(ApiClient apiClient) {
    memberVarHttpClient = apiClient.getHttpClient();
    memberVarObjectMapper = apiClient.getObjectMapper();
    memberVarBaseUri = apiClient.getBaseUri();
    memberVarInterceptor = apiClient.getRequestInterceptor();
    memberVarReadTimeout = apiClient.getReadTimeout();
    memberVarResponseInterceptor = apiClient.getResponseInterceptor();
    memberVarAsyncResponseInterceptor = apiClient.getAsyncResponseInterceptor();

    this.accessTokenSupplier = apiClient.getAccessTokenSupplier();
  }

  protected ApiException getApiException(String operationId, HttpResponse<InputStream> response) throws IOException {
    String body = response.body() == null ? null : new String(response.body().readAllBytes());
    String message = formatExceptionMessage(operationId, response.statusCode(), body);
    return new ApiException(response.statusCode(), message, response.headers(), body);
  }

  private String formatExceptionMessage(String operationId, int statusCode, String body) {
    if (body == null || body.isEmpty()) {
      body = "[no body]";
    }
    return operationId + " call failed with: " + statusCode + " - " + body;
  }

  /**
   * Create a Lead Source
   * Creates a new Lead Source
   * @param leadsource leadsource (optional)
   * @return LeadSource
   * @throws ApiException if fails to make API call
   */
  public LeadSource createLeadSourceUsingPOST(CreateLeadSourceRequest leadsource) throws ApiException {
    ApiResponse<LeadSource> localVarResponse = createLeadSourceUsingPOSTWithHttpInfo(leadsource);
    return localVarResponse.getData();
  }

  /**
   * Create a Lead Source
   * Creates a new Lead Source
   * @param leadsource leadsource (optional)
   * @return ApiResponse&lt;LeadSource&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<LeadSource> createLeadSourceUsingPOSTWithHttpInfo(CreateLeadSourceRequest leadsource) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = createLeadSourceUsingPOSTRequestBuilder(leadsource);

    CheckedSupplier<HttpResponse<InputStream>> responseSupplier = () ->
      memberVarHttpClient.send(
        localVarRequestBuilder.build(),
        HttpResponse.BodyHandlers.ofInputStream());

    try {
      HttpResponse<InputStream> localVarResponse =
          Retry.decorateCheckedSupplier(ApiClient.getRetry(), responseSupplier)
              .get();
      if (memberVarResponseInterceptor != null) {
        memberVarResponseInterceptor.accept(localVarResponse);
      }
      try {
        if (localVarResponse.statusCode()/ 100 != 2) {
          throw getApiException("createLeadSourceUsingPOST", localVarResponse);
        }
        return new ApiResponse<LeadSource>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<LeadSource>() {}) // closes the InputStream
        );
      } finally {
      }
    } catch (IOException e) {
      throw new ApiException(e);
    }
    catch (InterruptedException e) {
      Thread.currentThread().interrupt();
      throw new ApiException(e);
    } catch (Throwable e) {
      if (e instanceof ApiException) {
        throw (ApiException) e;
      }
      // Not collapsing exceptions so we can see this in the stack trace.
      throw new ApiException(e);
    }
  }

  private HttpRequest.Builder createLeadSourceUsingPOSTRequestBuilder(CreateLeadSourceRequest leadsource) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/leadsources";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(leadsource);
      localVarRequestBuilder.method("POST", HttpRequest.BodyPublishers.ofByteArray(localVarPostBody));
    } catch (IOException e) {
      throw new ApiException(e);
    }
    if (memberVarReadTimeout != null) {
      localVarRequestBuilder.timeout(memberVarReadTimeout);
    }
    if (memberVarInterceptor != null) {
      memberVarInterceptor.accept(localVarRequestBuilder);
    }
    return localVarRequestBuilder;
  }

  /**
   * List Lead Sources
   * Retrieves a list of lead sources
   * @param filter Search filter to apply to results (optional)
   * @param orderBy Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @return ListLeadSourcesResponse
   * @throws ApiException if fails to make API call
   */
  public ListLeadSourcesResponse listLeadSourcesUsingGET(String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {
    ApiResponse<ListLeadSourcesResponse> localVarResponse = listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    return localVarResponse.getData();
  }

  /**
   * List Lead Sources
   * Retrieves a list of lead sources
   * @param filter Search filter to apply to results (optional)
   * @param orderBy Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @return ApiResponse&lt;ListLeadSourcesResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ListLeadSourcesResponse> listLeadSourcesUsingGETWithHttpInfo(String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = listLeadSourcesUsingGETRequestBuilder(filter, orderBy, pageSize, pageToken);

    CheckedSupplier<HttpResponse<InputStream>> responseSupplier = () ->
      memberVarHttpClient.send(
        localVarRequestBuilder.build(),
        HttpResponse.BodyHandlers.ofInputStream());

    try {
      HttpResponse<InputStream> localVarResponse =
          Retry.decorateCheckedSupplier(ApiClient.getRetry(), responseSupplier)
              .get();
      if (memberVarResponseInterceptor != null) {
        memberVarResponseInterceptor.accept(localVarResponse);
      }
      try {
        if (localVarResponse.statusCode()/ 100 != 2) {
          throw getApiException("listLeadSourcesUsingGET", localVarResponse);
        }
        return new ApiResponse<ListLeadSourcesResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ListLeadSourcesResponse>() {}) // closes the InputStream
        );
      } finally {
      }
    } catch (IOException e) {
      throw new ApiException(e);
    }
    catch (InterruptedException e) {
      Thread.currentThread().interrupt();
      throw new ApiException(e);
    } catch (Throwable e) {
      if (e instanceof ApiException) {
        throw (ApiException) e;
      }
      // Not collapsing exceptions so we can see this in the stack trace.
      throw new ApiException(e);
    }
  }

  private HttpRequest.Builder listLeadSourcesUsingGETRequestBuilder(String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/leadsources";

    List<Pair> localVarQueryParams = new ArrayList<>();
    StringJoiner localVarQueryStringJoiner = new StringJoiner("&");
    String localVarQueryParameterBaseName;
    localVarQueryParameterBaseName = "filter";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("filter", filter));
    localVarQueryParameterBaseName = "order_by";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("order_by", orderBy));
    localVarQueryParameterBaseName = "page_size";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("page_size", pageSize));
    localVarQueryParameterBaseName = "page_token";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("page_token", pageToken));

    if (!localVarQueryParams.isEmpty() || localVarQueryStringJoiner.length() != 0) {
      StringJoiner queryJoiner = new StringJoiner("&");
      localVarQueryParams.forEach(p -> queryJoiner.add(p.getName() + '=' + p.getValue()));
      if (localVarQueryStringJoiner.length() != 0) {
        queryJoiner.add(localVarQueryStringJoiner.toString());
      }
      localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath + '?' + queryJoiner.toString()));
    } else {
      localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));
    }

    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    localVarRequestBuilder.method("GET", HttpRequest.BodyPublishers.noBody());
    if (memberVarReadTimeout != null) {
      localVarRequestBuilder.timeout(memberVarReadTimeout);
    }
    if (memberVarInterceptor != null) {
      memberVarInterceptor.accept(localVarRequestBuilder);
    }
    return localVarRequestBuilder;
  }


}
