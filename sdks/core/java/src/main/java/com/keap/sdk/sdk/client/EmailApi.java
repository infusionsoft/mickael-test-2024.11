/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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

import com.keap.sdk.sdk.model.CreateEmailSentRequest;
import com.keap.sdk.sdk.model.CreateEmailsSentRequest;
import com.keap.sdk.sdk.model.DeleteEmailsRequest;
import com.keap.sdk.sdk.model.DeleteEmailsResponse;
import com.keap.sdk.sdk.model.EmailSendRequest;
import com.keap.sdk.sdk.model.EmailSentWithContent;
import com.keap.sdk.sdk.model.EmailsSentList;
import com.keap.sdk.sdk.model.Error;

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


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class EmailApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public EmailApi() {
    this(new ApiClient());
  }

  public EmailApi(ApiClient apiClient) {
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
   * Create an Email Record
   * Creates a Record of an Email sent to a Contact
   * @param createEmailSentRequest emailWithContent (required)
   * @return EmailSentWithContent
   * @throws ApiException if fails to make API call
   */
  public EmailSentWithContent createEmailUsingPOST1(CreateEmailSentRequest createEmailSentRequest) throws ApiException {
    ApiResponse<EmailSentWithContent> localVarResponse = createEmailUsingPOST1WithHttpInfo(createEmailSentRequest);
    return localVarResponse.getData();
  }

  /**
   * Create an Email Record
   * Creates a Record of an Email sent to a Contact
   * @param createEmailSentRequest emailWithContent (required)
   * @return ApiResponse&lt;EmailSentWithContent&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<EmailSentWithContent> createEmailUsingPOST1WithHttpInfo(CreateEmailSentRequest createEmailSentRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = createEmailUsingPOST1RequestBuilder(createEmailSentRequest);

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
          throw getApiException("createEmailUsingPOST1", localVarResponse);
        }
        return new ApiResponse<EmailSentWithContent>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<EmailSentWithContent>() {}) // closes the InputStream
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

  private HttpRequest.Builder createEmailUsingPOST1RequestBuilder(CreateEmailSentRequest createEmailSentRequest) throws ApiException {
    // verify the required parameter 'createEmailSentRequest' is set
    if (createEmailSentRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'createEmailSentRequest' when calling createEmailUsingPOST1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/emails";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(createEmailSentRequest);
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
   * Create a set of Email Records
   * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
   * @param createEmailsSentRequest Email records to persist, with content. (optional)
   * @return EmailsSentList
   * @throws ApiException if fails to make API call
   */
  public EmailsSentList createEmailsUsingPOST1(CreateEmailsSentRequest createEmailsSentRequest) throws ApiException {
    ApiResponse<EmailsSentList> localVarResponse = createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest);
    return localVarResponse.getData();
  }

  /**
   * Create a set of Email Records
   * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
   * @param createEmailsSentRequest Email records to persist, with content. (optional)
   * @return ApiResponse&lt;EmailsSentList&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<EmailsSentList> createEmailsUsingPOST1WithHttpInfo(CreateEmailsSentRequest createEmailsSentRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = createEmailsUsingPOST1RequestBuilder(createEmailsSentRequest);

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
          throw getApiException("createEmailsUsingPOST1", localVarResponse);
        }
        return new ApiResponse<EmailsSentList>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<EmailsSentList>() {}) // closes the InputStream
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

  private HttpRequest.Builder createEmailsUsingPOST1RequestBuilder(CreateEmailsSentRequest createEmailsSentRequest) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/emails:batchAdd";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(createEmailsSentRequest);
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
   * Delete an Email Record
   * Deletes a specific Email Record
   * @param id id (required)
   * @throws ApiException if fails to make API call
   */
  public void deleteEmailUsingDELETE1(String id) throws ApiException {
    deleteEmailUsingDELETE1WithHttpInfo(id);
  }

  /**
   * Delete an Email Record
   * Deletes a specific Email Record
   * @param id id (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Void> deleteEmailUsingDELETE1WithHttpInfo(String id) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = deleteEmailUsingDELETE1RequestBuilder(id);

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
          throw getApiException("deleteEmailUsingDELETE1", localVarResponse);
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

  private HttpRequest.Builder deleteEmailUsingDELETE1RequestBuilder(String id) throws ApiException {
    // verify the required parameter 'id' is set
    if (id == null) {
      throw new ApiException(400, "Missing the required parameter 'id' when calling deleteEmailUsingDELETE1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/emails/{id}"
        .replace("{id}", ApiClient.urlEncode(id.toString()));

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
   * Remove a set of Email Records
   * Removes a set of Email Records
   * @param deleteEmailsRequest deleteEmailsRequest (required)
   * @return DeleteEmailsResponse
   * @throws ApiException if fails to make API call
   */
  public DeleteEmailsResponse deleteEmailsUsingPOST1(DeleteEmailsRequest deleteEmailsRequest) throws ApiException {
    ApiResponse<DeleteEmailsResponse> localVarResponse = deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest);
    return localVarResponse.getData();
  }

  /**
   * Remove a set of Email Records
   * Removes a set of Email Records
   * @param deleteEmailsRequest deleteEmailsRequest (required)
   * @return ApiResponse&lt;DeleteEmailsResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<DeleteEmailsResponse> deleteEmailsUsingPOST1WithHttpInfo(DeleteEmailsRequest deleteEmailsRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = deleteEmailsUsingPOST1RequestBuilder(deleteEmailsRequest);

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
          throw getApiException("deleteEmailsUsingPOST1", localVarResponse);
        }
        return new ApiResponse<DeleteEmailsResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<DeleteEmailsResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder deleteEmailsUsingPOST1RequestBuilder(DeleteEmailsRequest deleteEmailsRequest) throws ApiException {
    // verify the required parameter 'deleteEmailsRequest' is set
    if (deleteEmailsRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'deleteEmailsRequest' when calling deleteEmailsUsingPOST1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/emails:batchRemove";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(deleteEmailsRequest);
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
   * Retrieve an Email
   * Retrieves a single Email that has been sent
   * @param id id (required)
   * @return EmailSentWithContent
   * @throws ApiException if fails to make API call
   */
  public EmailSentWithContent getEmailUsingGET1(String id) throws ApiException {
    ApiResponse<EmailSentWithContent> localVarResponse = getEmailUsingGET1WithHttpInfo(id);
    return localVarResponse.getData();
  }

  /**
   * Retrieve an Email
   * Retrieves a single Email that has been sent
   * @param id id (required)
   * @return ApiResponse&lt;EmailSentWithContent&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<EmailSentWithContent> getEmailUsingGET1WithHttpInfo(String id) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = getEmailUsingGET1RequestBuilder(id);

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
          throw getApiException("getEmailUsingGET1", localVarResponse);
        }
        return new ApiResponse<EmailSentWithContent>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<EmailSentWithContent>() {}) // closes the InputStream
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

  private HttpRequest.Builder getEmailUsingGET1RequestBuilder(String id) throws ApiException {
    // verify the required parameter 'id' is set
    if (id == null) {
      throw new ApiException(400, "Missing the required parameter 'id' when calling getEmailUsingGET1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/emails/{id}"
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
   * Send an Email
   * Sends an Email to a list of Contacts
   * @param emailSendRequest emailSendRequest (optional)
   * @throws ApiException if fails to make API call
   */
  public void sendEmailUsingPOST1(EmailSendRequest emailSendRequest) throws ApiException {
    sendEmailUsingPOST1WithHttpInfo(emailSendRequest);
  }

  /**
   * Send an Email
   * Sends an Email to a list of Contacts
   * @param emailSendRequest emailSendRequest (optional)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Void> sendEmailUsingPOST1WithHttpInfo(EmailSendRequest emailSendRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = sendEmailUsingPOST1RequestBuilder(emailSendRequest);

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
          throw getApiException("sendEmailUsingPOST1", localVarResponse);
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

  private HttpRequest.Builder sendEmailUsingPOST1RequestBuilder(EmailSendRequest emailSendRequest) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/emails:send";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(emailSendRequest);
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


}
