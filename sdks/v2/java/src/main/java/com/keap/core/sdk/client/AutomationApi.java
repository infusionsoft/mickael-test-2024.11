/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package com.keap.core.sdk.client;

import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.ApiResponse;
import com.keap.core.sdk.Pair;

import com.keap.core.sdk.model.AddToAutomationSequenceRequest;
import com.keap.core.sdk.model.AddToAutomationSequenceResponse;
import com.keap.core.sdk.model.Automation;
import com.keap.core.sdk.model.Error;
import com.keap.core.sdk.model.ListAutomationIdsResponse;
import com.keap.core.sdk.model.ListAutomationResponse;
import com.keap.core.sdk.model.UpdateAutomationCategoryRequest;

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


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class AutomationApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public AutomationApi() {
    this(new ApiClient());
  }

  public AutomationApi(ApiClient apiClient) {
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
   * Add Contacts to an Automation Sequence
   * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
   * @param automationId automation_id (required)
   * @param sequenceId sequence_id (required)
   * @param addToAutomationSequenceRequest addToAutomationSequenceRequest (required)
   * @return AddToAutomationSequenceResponse
   * @throws ApiException if fails to make API call
   */
  public AddToAutomationSequenceResponse addContactsToAutomationSequenceUsingPOST(String automationId, String sequenceId, AddToAutomationSequenceRequest addToAutomationSequenceRequest) throws ApiException {
    ApiResponse<AddToAutomationSequenceResponse> localVarResponse = addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest);
    return localVarResponse.getData();
  }

  /**
   * Add Contacts to an Automation Sequence
   * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
   * @param automationId automation_id (required)
   * @param sequenceId sequence_id (required)
   * @param addToAutomationSequenceRequest addToAutomationSequenceRequest (required)
   * @return ApiResponse&lt;AddToAutomationSequenceResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<AddToAutomationSequenceResponse> addContactsToAutomationSequenceUsingPOSTWithHttpInfo(String automationId, String sequenceId, AddToAutomationSequenceRequest addToAutomationSequenceRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = addContactsToAutomationSequenceUsingPOSTRequestBuilder(automationId, sequenceId, addToAutomationSequenceRequest);

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
          throw getApiException("addContactsToAutomationSequenceUsingPOST", localVarResponse);
        }
        return new ApiResponse<AddToAutomationSequenceResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<AddToAutomationSequenceResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder addContactsToAutomationSequenceUsingPOSTRequestBuilder(String automationId, String sequenceId, AddToAutomationSequenceRequest addToAutomationSequenceRequest) throws ApiException {
    // verify the required parameter 'automationId' is set
    if (automationId == null) {
      throw new ApiException(400, "Missing the required parameter 'automationId' when calling addContactsToAutomationSequenceUsingPOST");
    }
    // verify the required parameter 'sequenceId' is set
    if (sequenceId == null) {
      throw new ApiException(400, "Missing the required parameter 'sequenceId' when calling addContactsToAutomationSequenceUsingPOST");
    }
    // verify the required parameter 'addToAutomationSequenceRequest' is set
    if (addToAutomationSequenceRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'addToAutomationSequenceRequest' when calling addContactsToAutomationSequenceUsingPOST");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/automations/{automation_id}/sequences/{sequence_id}:addContacts"
        .replace("{automation_id}", ApiClient.urlEncode(automationId.toString()))
        .replace("{sequence_id}", ApiClient.urlEncode(sequenceId.toString()));

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(addToAutomationSequenceRequest);
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
   * Delete an Automation
   * Deletes a single automation
   * @param automationIds automation_ids (required)
   * @throws ApiException if fails to make API call
   */
  public void deleteAutomationUsingDELETE(List<Long> automationIds) throws ApiException {
    deleteAutomationUsingDELETEWithHttpInfo(automationIds);
  }

  /**
   * Delete an Automation
   * Deletes a single automation
   * @param automationIds automation_ids (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Void> deleteAutomationUsingDELETEWithHttpInfo(List<Long> automationIds) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = deleteAutomationUsingDELETERequestBuilder(automationIds);

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
          throw getApiException("deleteAutomationUsingDELETE", localVarResponse);
        }
        return new ApiResponse<Void>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          null
        );
      } finally {
        // Drain the InputStream
        while (localVarResponse.body().read() != -1) {
            // Ignore
        }
        localVarResponse.body().close();
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

  private HttpRequest.Builder deleteAutomationUsingDELETERequestBuilder(List<Long> automationIds) throws ApiException {
    // verify the required parameter 'automationIds' is set
    if (automationIds == null) {
      throw new ApiException(400, "Missing the required parameter 'automationIds' when calling deleteAutomationUsingDELETE");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/automations";

    List<Pair> localVarQueryParams = new ArrayList<>();
    StringJoiner localVarQueryStringJoiner = new StringJoiner("&");
    String localVarQueryParameterBaseName;
    localVarQueryParameterBaseName = "automation_ids";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("multi", "automation_ids", automationIds));

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

    localVarRequestBuilder.method("DELETE", HttpRequest.BodyPublishers.noBody());
    if (memberVarReadTimeout != null) {
      localVarRequestBuilder.timeout(memberVarReadTimeout);
    }
    if (memberVarInterceptor != null) {
      memberVarInterceptor.accept(localVarRequestBuilder);
    }
    return localVarRequestBuilder;
  }

  /**
   * Retrieve an Automation
   * Retrieves a single automation
   * @param automationId automation_id (required)
   * @return Automation
   * @throws ApiException if fails to make API call
   */
  public Automation getAutomationUsingGET(String automationId) throws ApiException {
    ApiResponse<Automation> localVarResponse = getAutomationUsingGETWithHttpInfo(automationId);
    return localVarResponse.getData();
  }

  /**
   * Retrieve an Automation
   * Retrieves a single automation
   * @param automationId automation_id (required)
   * @return ApiResponse&lt;Automation&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Automation> getAutomationUsingGETWithHttpInfo(String automationId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = getAutomationUsingGETRequestBuilder(automationId);

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
          throw getApiException("getAutomationUsingGET", localVarResponse);
        }
        return new ApiResponse<Automation>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<Automation>() {}) // closes the InputStream
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

  private HttpRequest.Builder getAutomationUsingGETRequestBuilder(String automationId) throws ApiException {
    // verify the required parameter 'automationId' is set
    if (automationId == null) {
      throw new ApiException(400, "Missing the required parameter 'automationId' when calling getAutomationUsingGET");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/automations/{automation_id}"
        .replace("{automation_id}", ApiClient.urlEncode(automationId.toString()));

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

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

  /**
   * List Automations Ids
   * Retrieves a list of automations IDs
   * @param filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;   (optional)
   * @param orderBy Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @param stats  (optional)
   * @return ListAutomationIdsResponse
   * @throws ApiException if fails to make API call
   */
  public ListAutomationIdsResponse listAllAutomationIdsUsingGET(String filter, String orderBy, Integer pageSize, String pageToken, Boolean stats) throws ApiException {
    ApiResponse<ListAutomationIdsResponse> localVarResponse = listAllAutomationIdsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats);
    return localVarResponse.getData();
  }

  /**
   * List Automations Ids
   * Retrieves a list of automations IDs
   * @param filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;   (optional)
   * @param orderBy Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @param stats  (optional)
   * @return ApiResponse&lt;ListAutomationIdsResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ListAutomationIdsResponse> listAllAutomationIdsUsingGETWithHttpInfo(String filter, String orderBy, Integer pageSize, String pageToken, Boolean stats) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = listAllAutomationIdsUsingGETRequestBuilder(filter, orderBy, pageSize, pageToken, stats);

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
          throw getApiException("listAllAutomationIdsUsingGET", localVarResponse);
        }
        return new ApiResponse<ListAutomationIdsResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ListAutomationIdsResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder listAllAutomationIdsUsingGETRequestBuilder(String filter, String orderBy, Integer pageSize, String pageToken, Boolean stats) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/automations/ids";

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
    localVarQueryParameterBaseName = "stats";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("stats", stats));

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

  /**
   * List Automations
   * Retrieves a list of automations
   * @param filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;   (optional)
   * @param orderBy Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @param stats  (optional)
   * @return ListAutomationResponse
   * @throws ApiException if fails to make API call
   */
  public ListAutomationResponse listAutomationsUsingGET(String filter, String orderBy, Integer pageSize, String pageToken, Boolean stats) throws ApiException {
    ApiResponse<ListAutomationResponse> localVarResponse = listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats);
    return localVarResponse.getData();
  }

  /**
   * List Automations
   * Retrieves a list of automations
   * @param filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;   (optional)
   * @param orderBy Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @param stats  (optional)
   * @return ApiResponse&lt;ListAutomationResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ListAutomationResponse> listAutomationsUsingGETWithHttpInfo(String filter, String orderBy, Integer pageSize, String pageToken, Boolean stats) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = listAutomationsUsingGETRequestBuilder(filter, orderBy, pageSize, pageToken, stats);

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
          throw getApiException("listAutomationsUsingGET", localVarResponse);
        }
        return new ApiResponse<ListAutomationResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ListAutomationResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder listAutomationsUsingGETRequestBuilder(String filter, String orderBy, Integer pageSize, String pageToken, Boolean stats) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/automations";

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
    localVarQueryParameterBaseName = "stats";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("stats", stats));

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

  /**
   * Update an Automation&#39;s Category
   * Updates the category of one or more automations
   * @param updateAutomationCategoryRequest updateAutomationCategoryRequest (required)
   * @throws ApiException if fails to make API call
   */
  public void updateAutomationCategoryUsingPUT(UpdateAutomationCategoryRequest updateAutomationCategoryRequest) throws ApiException {
    updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest);
  }

  /**
   * Update an Automation&#39;s Category
   * Updates the category of one or more automations
   * @param updateAutomationCategoryRequest updateAutomationCategoryRequest (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Void> updateAutomationCategoryUsingPUTWithHttpInfo(UpdateAutomationCategoryRequest updateAutomationCategoryRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = updateAutomationCategoryUsingPUTRequestBuilder(updateAutomationCategoryRequest);

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
          throw getApiException("updateAutomationCategoryUsingPUT", localVarResponse);
        }
        return new ApiResponse<Void>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          null
        );
      } finally {
        // Drain the InputStream
        while (localVarResponse.body().read() != -1) {
            // Ignore
        }
        localVarResponse.body().close();
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

  private HttpRequest.Builder updateAutomationCategoryUsingPUTRequestBuilder(UpdateAutomationCategoryRequest updateAutomationCategoryRequest) throws ApiException {
    // verify the required parameter 'updateAutomationCategoryRequest' is set
    if (updateAutomationCategoryRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'updateAutomationCategoryRequest' when calling updateAutomationCategoryUsingPUT");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/automations/category";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(updateAutomationCategoryRequest);
      localVarRequestBuilder.method("PUT", HttpRequest.BodyPublishers.ofByteArray(localVarPostBody));
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


}
