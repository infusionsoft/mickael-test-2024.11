/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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

import com.keap.sdk.sdk.model.CreateDealNoteRequest;
import com.keap.sdk.sdk.model.DealNote;
import com.keap.sdk.sdk.model.DealNoteListResponse;
import com.keap.sdk.sdk.model.UpdateDealNoteRequest;

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


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class DealsApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public DealsApi() {
    this(new ApiClient());
  }

  public DealsApi(ApiClient apiClient) {
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
   * Creates a new note for a specific deal.
   * Creates a new note for a specific deal.
   * @param id the deal ID to associate the new note with (required)
   * @param createDealNoteRequest the request body containing note details (required)
   * @return DealNote
   * @throws ApiException if fails to make API call
   */
  public DealNote createNote(String id, CreateDealNoteRequest createDealNoteRequest) throws ApiException {
    ApiResponse<DealNote> localVarResponse = createNoteWithHttpInfo(id, createDealNoteRequest);
    return localVarResponse.getData();
  }

  /**
   * Creates a new note for a specific deal.
   * Creates a new note for a specific deal.
   * @param id the deal ID to associate the new note with (required)
   * @param createDealNoteRequest the request body containing note details (required)
   * @return ApiResponse&lt;DealNote&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<DealNote> createNoteWithHttpInfo(String id, CreateDealNoteRequest createDealNoteRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = createNoteRequestBuilder(id, createDealNoteRequest);

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
          throw getApiException("createNote", localVarResponse);
        }
        return new ApiResponse<DealNote>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<DealNote>() {}) // closes the InputStream
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

  private HttpRequest.Builder createNoteRequestBuilder(String id, CreateDealNoteRequest createDealNoteRequest) throws ApiException {
    // verify the required parameter 'id' is set
    if (id == null) {
      throw new ApiException(400, "Missing the required parameter 'id' when calling createNote");
    }
    // verify the required parameter 'createDealNoteRequest' is set
    if (createDealNoteRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'createDealNoteRequest' when calling createNote");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/deals/{id}/notes"
        .replace("{id}", ApiClient.urlEncode(id.toString()));

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(createDealNoteRequest);
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
   * Deletes a specific deal note by its ID.
   * Deletes a specific deal note by its ID.
   * @param noteId the ID of the note to delete (required)
   * @throws ApiException if fails to make API call
   */
  public void delete(String noteId) throws ApiException {
    deleteWithHttpInfo(noteId);
  }

  /**
   * Deletes a specific deal note by its ID.
   * Deletes a specific deal note by its ID.
   * @param noteId the ID of the note to delete (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Void> deleteWithHttpInfo(String noteId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = deleteRequestBuilder(noteId);

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
          throw getApiException("delete", localVarResponse);
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

  private HttpRequest.Builder deleteRequestBuilder(String noteId) throws ApiException {
    // verify the required parameter 'noteId' is set
    if (noteId == null) {
      throw new ApiException(400, "Missing the required parameter 'noteId' when calling delete");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/deals/-/notes/{note_id}"
        .replace("{note_id}", ApiClient.urlEncode(noteId.toString()));

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

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
   * Retrieves a specific deal note by its ID.
   * Retrieves a specific deal note by its ID.
   * @param noteId the ID of the note to retrieve (required)
   * @return DealNote
   * @throws ApiException if fails to make API call
   */
  public DealNote getNote(String noteId) throws ApiException {
    ApiResponse<DealNote> localVarResponse = getNoteWithHttpInfo(noteId);
    return localVarResponse.getData();
  }

  /**
   * Retrieves a specific deal note by its ID.
   * Retrieves a specific deal note by its ID.
   * @param noteId the ID of the note to retrieve (required)
   * @return ApiResponse&lt;DealNote&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<DealNote> getNoteWithHttpInfo(String noteId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = getNoteRequestBuilder(noteId);

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
          throw getApiException("getNote", localVarResponse);
        }
        return new ApiResponse<DealNote>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<DealNote>() {}) // closes the InputStream
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

  private HttpRequest.Builder getNoteRequestBuilder(String noteId) throws ApiException {
    // verify the required parameter 'noteId' is set
    if (noteId == null) {
      throw new ApiException(400, "Missing the required parameter 'noteId' when calling getNote");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/deals/-/notes/{note_id}"
        .replace("{note_id}", ApiClient.urlEncode(noteId.toString()));

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
   * Lists all notes associated with a specific deal.
   * Lists all notes associated with a specific deal.
   * @param id the deal ID to list notes for (required)
   * @param filter  (optional)
   * @param pageToken  (optional)
   * @param orderBy  (optional)
   * @param pageSize  (optional, default to 1000)
   * @return DealNoteListResponse
   * @throws ApiException if fails to make API call
   */
  public DealNoteListResponse listNotes(String id, String filter, String pageToken, String orderBy, Integer pageSize) throws ApiException {
    ApiResponse<DealNoteListResponse> localVarResponse = listNotesWithHttpInfo(id, filter, pageToken, orderBy, pageSize);
    return localVarResponse.getData();
  }

  /**
   * Lists all notes associated with a specific deal.
   * Lists all notes associated with a specific deal.
   * @param id the deal ID to list notes for (required)
   * @param filter  (optional)
   * @param pageToken  (optional)
   * @param orderBy  (optional)
   * @param pageSize  (optional, default to 1000)
   * @return ApiResponse&lt;DealNoteListResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<DealNoteListResponse> listNotesWithHttpInfo(String id, String filter, String pageToken, String orderBy, Integer pageSize) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = listNotesRequestBuilder(id, filter, pageToken, orderBy, pageSize);

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
          throw getApiException("listNotes", localVarResponse);
        }
        return new ApiResponse<DealNoteListResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<DealNoteListResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder listNotesRequestBuilder(String id, String filter, String pageToken, String orderBy, Integer pageSize) throws ApiException {
    // verify the required parameter 'id' is set
    if (id == null) {
      throw new ApiException(400, "Missing the required parameter 'id' when calling listNotes");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/deals/{id}/notes"
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
   * Updates a specific deal note by its ID.
   * Updates a specific deal note by its ID.
   * @param noteId the ID of the note to update (required)
   * @param updateDealNoteRequest the request body containing updated note details (required)
   * @return DealNote
   * @throws ApiException if fails to make API call
   */
  public DealNote update(String noteId, UpdateDealNoteRequest updateDealNoteRequest) throws ApiException {
    ApiResponse<DealNote> localVarResponse = updateWithHttpInfo(noteId, updateDealNoteRequest);
    return localVarResponse.getData();
  }

  /**
   * Updates a specific deal note by its ID.
   * Updates a specific deal note by its ID.
   * @param noteId the ID of the note to update (required)
   * @param updateDealNoteRequest the request body containing updated note details (required)
   * @return ApiResponse&lt;DealNote&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<DealNote> updateWithHttpInfo(String noteId, UpdateDealNoteRequest updateDealNoteRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = updateRequestBuilder(noteId, updateDealNoteRequest);

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
          throw getApiException("update", localVarResponse);
        }
        return new ApiResponse<DealNote>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<DealNote>() {}) // closes the InputStream
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

  private HttpRequest.Builder updateRequestBuilder(String noteId, UpdateDealNoteRequest updateDealNoteRequest) throws ApiException {
    // verify the required parameter 'noteId' is set
    if (noteId == null) {
      throw new ApiException(400, "Missing the required parameter 'noteId' when calling update");
    }
    // verify the required parameter 'updateDealNoteRequest' is set
    if (updateDealNoteRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'updateDealNoteRequest' when calling update");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/deals/-/notes/{note_id}"
        .replace("{note_id}", ApiClient.urlEncode(noteId.toString()));

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(updateDealNoteRequest);
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
