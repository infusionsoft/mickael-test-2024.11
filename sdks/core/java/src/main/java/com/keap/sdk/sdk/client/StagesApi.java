/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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

import com.keap.sdk.sdk.model.CreateStageRequest;
import com.keap.sdk.sdk.model.Stage;
import com.keap.sdk.sdk.model.StageDealListResponse;
import com.keap.sdk.sdk.model.StageListResponse;
import com.keap.sdk.sdk.model.UpdateStageRequest;

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


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class StagesApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public StagesApi() {
    this(new ApiClient());
  }

  public StagesApi(ApiClient apiClient) {
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
   * Creates a new entity.
   * Creates a new entity.
   * @param createStageRequest the create request (required)
   * @return Stage
   * @throws ApiException if fails to make API call
   */
  public Stage create1(CreateStageRequest createStageRequest) throws ApiException {
    ApiResponse<Stage> localVarResponse = create1WithHttpInfo(createStageRequest);
    return localVarResponse.getData();
  }

  /**
   * Creates a new entity.
   * Creates a new entity.
   * @param createStageRequest the create request (required)
   * @return ApiResponse&lt;Stage&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Stage> create1WithHttpInfo(CreateStageRequest createStageRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = create1RequestBuilder(createStageRequest);

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
          throw getApiException("create1", localVarResponse);
        }
        return new ApiResponse<Stage>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<Stage>() {}) // closes the InputStream
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

  private HttpRequest.Builder create1RequestBuilder(CreateStageRequest createStageRequest) throws ApiException {
    // verify the required parameter 'createStageRequest' is set
    if (createStageRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'createStageRequest' when calling create1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/stages";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(createStageRequest);
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
   * Deletes a stage by its identifier for a given tenant.
   * Deletes a stage by its identifier for a given tenant.
   * @param id the stage identifier (required)
   * @param newStageId the new stage identifier, can be null (optional)
   * @throws ApiException if fails to make API call
   */
  public void delete2(String id, String newStageId) throws ApiException {
    delete2WithHttpInfo(id, newStageId);
  }

  /**
   * Deletes a stage by its identifier for a given tenant.
   * Deletes a stage by its identifier for a given tenant.
   * @param id the stage identifier (required)
   * @param newStageId the new stage identifier, can be null (optional)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Void> delete2WithHttpInfo(String id, String newStageId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = delete2RequestBuilder(id, newStageId);

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
          throw getApiException("delete2", localVarResponse);
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

  private HttpRequest.Builder delete2RequestBuilder(String id, String newStageId) throws ApiException {
    // verify the required parameter 'id' is set
    if (id == null) {
      throw new ApiException(400, "Missing the required parameter 'id' when calling delete2");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/stages/{id}"
        .replace("{id}", ApiClient.urlEncode(id.toString()));

    List<Pair> localVarQueryParams = new ArrayList<>();
    StringJoiner localVarQueryStringJoiner = new StringJoiner("&");
    String localVarQueryParameterBaseName;
    localVarQueryParameterBaseName = "new_stage_id";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("new_stage_id", newStageId));

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
   * Retrieves an entity by its identifier.
   * Retrieves an entity by its identifier.
   * @param id the entity identifier (required)
   * @return Stage
   * @throws ApiException if fails to make API call
   */
  public Stage get1(String id) throws ApiException {
    ApiResponse<Stage> localVarResponse = get1WithHttpInfo(id);
    return localVarResponse.getData();
  }

  /**
   * Retrieves an entity by its identifier.
   * Retrieves an entity by its identifier.
   * @param id the entity identifier (required)
   * @return ApiResponse&lt;Stage&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Stage> get1WithHttpInfo(String id) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = get1RequestBuilder(id);

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
          throw getApiException("get1", localVarResponse);
        }
        return new ApiResponse<Stage>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<Stage>() {}) // closes the InputStream
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

  private HttpRequest.Builder get1RequestBuilder(String id) throws ApiException {
    // verify the required parameter 'id' is set
    if (id == null) {
      throw new ApiException(400, "Missing the required parameter 'id' when calling get1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/stages/{id}"
        .replace("{id}", ApiClient.urlEncode(id.toString()));

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
   * Lists entities based on the provided ListCommand.
   * Lists entities based on the provided ListCommand.
   * @param filter  (optional)
   * @param pageToken  (optional)
   * @param orderBy  (optional)
   * @param pageSize  (optional, default to 1000)
   * @return StageListResponse
   * @throws ApiException if fails to make API call
   */
  public StageListResponse list1(String filter, String pageToken, String orderBy, Integer pageSize) throws ApiException {
    ApiResponse<StageListResponse> localVarResponse = list1WithHttpInfo(filter, pageToken, orderBy, pageSize);
    return localVarResponse.getData();
  }

  /**
   * Lists entities based on the provided ListCommand.
   * Lists entities based on the provided ListCommand.
   * @param filter  (optional)
   * @param pageToken  (optional)
   * @param orderBy  (optional)
   * @param pageSize  (optional, default to 1000)
   * @return ApiResponse&lt;StageListResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<StageListResponse> list1WithHttpInfo(String filter, String pageToken, String orderBy, Integer pageSize) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = list1RequestBuilder(filter, pageToken, orderBy, pageSize);

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
          throw getApiException("list1", localVarResponse);
        }
        return new ApiResponse<StageListResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<StageListResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder list1RequestBuilder(String filter, String pageToken, String orderBy, Integer pageSize) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/stages";

    List<Pair> localVarQueryParams = new ArrayList<>();
    StringJoiner localVarQueryStringJoiner = new StringJoiner("&");
    String localVarQueryParameterBaseName;
    localVarQueryParameterBaseName = "filter";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("filter", filter));
    localVarQueryParameterBaseName = "page_token";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("page_token", pageToken));
    localVarQueryParameterBaseName = "order_by";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("order_by", orderBy));
    localVarQueryParameterBaseName = "page_size";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("page_size", pageSize));

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
   * Retrieves a list of deals for a specific stage.
   * Retrieves a list of deals for a specific stage.
   * @param id the stage identifier (required)
   * @param filter  (optional)
   * @param pageToken  (optional)
   * @param orderBy  (optional)
   * @param pageSize  (optional, default to 1000)
   * @return StageDealListResponse
   * @throws ApiException if fails to make API call
   */
  public StageDealListResponse listStages1(String id, String filter, String pageToken, String orderBy, Integer pageSize) throws ApiException {
    ApiResponse<StageDealListResponse> localVarResponse = listStages1WithHttpInfo(id, filter, pageToken, orderBy, pageSize);
    return localVarResponse.getData();
  }

  /**
   * Retrieves a list of deals for a specific stage.
   * Retrieves a list of deals for a specific stage.
   * @param id the stage identifier (required)
   * @param filter  (optional)
   * @param pageToken  (optional)
   * @param orderBy  (optional)
   * @param pageSize  (optional, default to 1000)
   * @return ApiResponse&lt;StageDealListResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<StageDealListResponse> listStages1WithHttpInfo(String id, String filter, String pageToken, String orderBy, Integer pageSize) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = listStages1RequestBuilder(id, filter, pageToken, orderBy, pageSize);

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
          throw getApiException("listStages1", localVarResponse);
        }
        return new ApiResponse<StageDealListResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<StageDealListResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder listStages1RequestBuilder(String id, String filter, String pageToken, String orderBy, Integer pageSize) throws ApiException {
    // verify the required parameter 'id' is set
    if (id == null) {
      throw new ApiException(400, "Missing the required parameter 'id' when calling listStages1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/stages/{id}/deals"
        .replace("{id}", ApiClient.urlEncode(id.toString()));

    List<Pair> localVarQueryParams = new ArrayList<>();
    StringJoiner localVarQueryStringJoiner = new StringJoiner("&");
    String localVarQueryParameterBaseName;
    localVarQueryParameterBaseName = "filter";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("filter", filter));
    localVarQueryParameterBaseName = "page_token";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("page_token", pageToken));
    localVarQueryParameterBaseName = "order_by";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("order_by", orderBy));
    localVarQueryParameterBaseName = "page_size";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("page_size", pageSize));

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
   * Updates an existing entity.
   * Updates an existing entity.
   * @param id the entity identifier (required)
   * @param updateMask the fields to update (required)
   * @param updateStageRequest the update request (required)
   * @return Stage
   * @throws ApiException if fails to make API call
   */
  public Stage update2(String id, List<String> updateMask, UpdateStageRequest updateStageRequest) throws ApiException {
    ApiResponse<Stage> localVarResponse = update2WithHttpInfo(id, updateMask, updateStageRequest);
    return localVarResponse.getData();
  }

  /**
   * Updates an existing entity.
   * Updates an existing entity.
   * @param id the entity identifier (required)
   * @param updateMask the fields to update (required)
   * @param updateStageRequest the update request (required)
   * @return ApiResponse&lt;Stage&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Stage> update2WithHttpInfo(String id, List<String> updateMask, UpdateStageRequest updateStageRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = update2RequestBuilder(id, updateMask, updateStageRequest);

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
          throw getApiException("update2", localVarResponse);
        }
        return new ApiResponse<Stage>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<Stage>() {}) // closes the InputStream
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

  private HttpRequest.Builder update2RequestBuilder(String id, List<String> updateMask, UpdateStageRequest updateStageRequest) throws ApiException {
    // verify the required parameter 'id' is set
    if (id == null) {
      throw new ApiException(400, "Missing the required parameter 'id' when calling update2");
    }
    // verify the required parameter 'updateMask' is set
    if (updateMask == null) {
      throw new ApiException(400, "Missing the required parameter 'updateMask' when calling update2");
    }
    // verify the required parameter 'updateStageRequest' is set
    if (updateStageRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'updateStageRequest' when calling update2");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/stages/{id}"
        .replace("{id}", ApiClient.urlEncode(id.toString()));

    List<Pair> localVarQueryParams = new ArrayList<>();
    StringJoiner localVarQueryStringJoiner = new StringJoiner("&");
    String localVarQueryParameterBaseName;
    localVarQueryParameterBaseName = "update_mask";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("multi", "update_mask", updateMask));

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

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(updateStageRequest);
      localVarRequestBuilder.method("PATCH", HttpRequest.BodyPublishers.ofByteArray(localVarPostBody));
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
