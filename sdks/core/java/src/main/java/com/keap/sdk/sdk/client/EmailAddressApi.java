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

import com.keap.sdk.sdk.model.Error;
import com.keap.sdk.sdk.model.RestEmailAddress;
import com.keap.sdk.sdk.model.UpdateEmailAddress;

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


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class EmailAddressApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public EmailAddressApi() {
    this(new ApiClient());
  }

  public EmailAddressApi(ApiClient apiClient) {
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
   * Retrieve an Email Address status
   * Retrieves the opt-in status for given Email Address
   * @param email email (required)
   * @return RestEmailAddress
   * @throws ApiException if fails to make API call
   */
  public RestEmailAddress getEmailAddressStatusUsingGET(String email) throws ApiException {
    ApiResponse<RestEmailAddress> localVarResponse = getEmailAddressStatusUsingGETWithHttpInfo(email);
    return localVarResponse.getData();
  }

  /**
   * Retrieve an Email Address status
   * Retrieves the opt-in status for given Email Address
   * @param email email (required)
   * @return ApiResponse&lt;RestEmailAddress&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<RestEmailAddress> getEmailAddressStatusUsingGETWithHttpInfo(String email) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = getEmailAddressStatusUsingGETRequestBuilder(email);

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
          throw getApiException("getEmailAddressStatusUsingGET", localVarResponse);
        }
        return new ApiResponse<RestEmailAddress>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<RestEmailAddress>() {}) // closes the InputStream
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

  private HttpRequest.Builder getEmailAddressStatusUsingGETRequestBuilder(String email) throws ApiException {
    // verify the required parameter 'email' is set
    if (email == null) {
      throw new ApiException(400, "Missing the required parameter 'email' when calling getEmailAddressStatusUsingGET");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/emailAddresses/{email}"
        .replace("{email}", ApiClient.urlEncode(email.toString()));

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
   * Update an Email Address opt-in status
   * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
   * @param email email (required)
   * @param updateEmailAddress updateEmailAddress (required)
   * @return RestEmailAddress
   * @throws ApiException if fails to make API call
   */
  public RestEmailAddress updateEmailAddressOptStatusUsingPUT(String email, UpdateEmailAddress updateEmailAddress) throws ApiException {
    ApiResponse<RestEmailAddress> localVarResponse = updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress);
    return localVarResponse.getData();
  }

  /**
   * Update an Email Address opt-in status
   * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
   * @param email email (required)
   * @param updateEmailAddress updateEmailAddress (required)
   * @return ApiResponse&lt;RestEmailAddress&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<RestEmailAddress> updateEmailAddressOptStatusUsingPUTWithHttpInfo(String email, UpdateEmailAddress updateEmailAddress) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = updateEmailAddressOptStatusUsingPUTRequestBuilder(email, updateEmailAddress);

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
          throw getApiException("updateEmailAddressOptStatusUsingPUT", localVarResponse);
        }
        return new ApiResponse<RestEmailAddress>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<RestEmailAddress>() {}) // closes the InputStream
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

  private HttpRequest.Builder updateEmailAddressOptStatusUsingPUTRequestBuilder(String email, UpdateEmailAddress updateEmailAddress) throws ApiException {
    // verify the required parameter 'email' is set
    if (email == null) {
      throw new ApiException(400, "Missing the required parameter 'email' when calling updateEmailAddressOptStatusUsingPUT");
    }
    // verify the required parameter 'updateEmailAddress' is set
    if (updateEmailAddress == null) {
      throw new ApiException(400, "Missing the required parameter 'updateEmailAddress' when calling updateEmailAddressOptStatusUsingPUT");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/emailAddresses/{email}"
        .replace("{email}", ApiClient.urlEncode(email.toString()));

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(updateEmailAddress);
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
