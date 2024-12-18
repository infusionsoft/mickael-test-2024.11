/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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

import com.keap.sdk.sdk.model.CreateShippingDiscountRequest;
import com.keap.sdk.sdk.model.Error;
import com.keap.sdk.sdk.model.ListShippingDiscountsResponse;
import com.keap.sdk.sdk.model.ShippingDiscount;
import com.keap.sdk.sdk.model.UpdateShippingDiscountRequest;

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


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class ShippingDiscountApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public ShippingDiscountApi() {
    this(new ApiClient());
  }

  public ShippingDiscountApi(ApiClient apiClient) {
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
   * Create a Shipping Discount
   * Creates a Shipping Discount
   * @param createShippingDiscountRequest request (required)
   * @return ShippingDiscount
   * @throws ApiException if fails to make API call
   */
  public ShippingDiscount createDiscountUsingPOST1(CreateShippingDiscountRequest createShippingDiscountRequest) throws ApiException {
    ApiResponse<ShippingDiscount> localVarResponse = createDiscountUsingPOST1WithHttpInfo(createShippingDiscountRequest);
    return localVarResponse.getData();
  }

  /**
   * Create a Shipping Discount
   * Creates a Shipping Discount
   * @param createShippingDiscountRequest request (required)
   * @return ApiResponse&lt;ShippingDiscount&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ShippingDiscount> createDiscountUsingPOST1WithHttpInfo(CreateShippingDiscountRequest createShippingDiscountRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = createDiscountUsingPOST1RequestBuilder(createShippingDiscountRequest);

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
          throw getApiException("createDiscountUsingPOST1", localVarResponse);
        }
        return new ApiResponse<ShippingDiscount>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ShippingDiscount>() {}) // closes the InputStream
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

  private HttpRequest.Builder createDiscountUsingPOST1RequestBuilder(CreateShippingDiscountRequest createShippingDiscountRequest) throws ApiException {
    // verify the required parameter 'createShippingDiscountRequest' is set
    if (createShippingDiscountRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'createShippingDiscountRequest' when calling createDiscountUsingPOST1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/discounts/shipping";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(createShippingDiscountRequest);
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
   * Delete a Shipping Discount
   * Deletes a specified Shipping Discount
   * @param discountId discount_id (required)
   * @throws ApiException if fails to make API call
   */
  public void deleteDiscountUsingDELETE2(String discountId) throws ApiException {
    deleteDiscountUsingDELETE2WithHttpInfo(discountId);
  }

  /**
   * Delete a Shipping Discount
   * Deletes a specified Shipping Discount
   * @param discountId discount_id (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Void> deleteDiscountUsingDELETE2WithHttpInfo(String discountId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = deleteDiscountUsingDELETE2RequestBuilder(discountId);

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
          throw getApiException("deleteDiscountUsingDELETE2", localVarResponse);
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

  private HttpRequest.Builder deleteDiscountUsingDELETE2RequestBuilder(String discountId) throws ApiException {
    // verify the required parameter 'discountId' is set
    if (discountId == null) {
      throw new ApiException(400, "Missing the required parameter 'discountId' when calling deleteDiscountUsingDELETE2");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/discounts/shipping/{discount_id}"
        .replace("{discount_id}", ApiClient.urlEncode(discountId.toString()));

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
   * Retrieve a Shipping Discount
   * Retrieves a Shipping Discount
   * @param discountId discount_id (required)
   * @return ShippingDiscount
   * @throws ApiException if fails to make API call
   */
  public ShippingDiscount getDiscountUsingGET1(String discountId) throws ApiException {
    ApiResponse<ShippingDiscount> localVarResponse = getDiscountUsingGET1WithHttpInfo(discountId);
    return localVarResponse.getData();
  }

  /**
   * Retrieve a Shipping Discount
   * Retrieves a Shipping Discount
   * @param discountId discount_id (required)
   * @return ApiResponse&lt;ShippingDiscount&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ShippingDiscount> getDiscountUsingGET1WithHttpInfo(String discountId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = getDiscountUsingGET1RequestBuilder(discountId);

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
          throw getApiException("getDiscountUsingGET1", localVarResponse);
        }
        return new ApiResponse<ShippingDiscount>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ShippingDiscount>() {}) // closes the InputStream
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

  private HttpRequest.Builder getDiscountUsingGET1RequestBuilder(String discountId) throws ApiException {
    // verify the required parameter 'discountId' is set
    if (discountId == null) {
      throw new ApiException(400, "Missing the required parameter 'discountId' when calling getDiscountUsingGET1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/discounts/shipping/{discount_id}"
        .replace("{discount_id}", ApiClient.urlEncode(discountId.toString()));

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
   * List all Shipping Discounts
   * Retrieves all Shipping Discounts
   * @param fields TODO: PAPI-1449 (optional)
   * @param filter Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60;  (optional)
   * @param orderBy Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @return ListShippingDiscountsResponse
   * @throws ApiException if fails to make API call
   */
  public ListShippingDiscountsResponse listDiscountsUsingGET(List<String> fields, String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {
    ApiResponse<ListShippingDiscountsResponse> localVarResponse = listDiscountsUsingGETWithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
    return localVarResponse.getData();
  }

  /**
   * List all Shipping Discounts
   * Retrieves all Shipping Discounts
   * @param fields TODO: PAPI-1449 (optional)
   * @param filter Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60;  (optional)
   * @param orderBy Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @return ApiResponse&lt;ListShippingDiscountsResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ListShippingDiscountsResponse> listDiscountsUsingGETWithHttpInfo(List<String> fields, String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = listDiscountsUsingGETRequestBuilder(fields, filter, orderBy, pageSize, pageToken);

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
          throw getApiException("listDiscountsUsingGET", localVarResponse);
        }
        return new ApiResponse<ListShippingDiscountsResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ListShippingDiscountsResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder listDiscountsUsingGETRequestBuilder(List<String> fields, String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/discounts/shipping";

    List<Pair> localVarQueryParams = new ArrayList<>();
    StringJoiner localVarQueryStringJoiner = new StringJoiner("&");
    String localVarQueryParameterBaseName;
    localVarQueryParameterBaseName = "fields";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("multi", "fields", fields));
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

  /**
   * Update a Shipping Discount
   * Updates a Shipping Discount
   * @param discountId discount_id (required)
   * @param updateShippingDiscountRequest request (required)
   * @param updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
   * @return ShippingDiscount
   * @throws ApiException if fails to make API call
   */
  public ShippingDiscount updateDiscountUsingPATCH1(String discountId, UpdateShippingDiscountRequest updateShippingDiscountRequest, List<String> updateMask) throws ApiException {
    ApiResponse<ShippingDiscount> localVarResponse = updateDiscountUsingPATCH1WithHttpInfo(discountId, updateShippingDiscountRequest, updateMask);
    return localVarResponse.getData();
  }

  /**
   * Update a Shipping Discount
   * Updates a Shipping Discount
   * @param discountId discount_id (required)
   * @param updateShippingDiscountRequest request (required)
   * @param updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
   * @return ApiResponse&lt;ShippingDiscount&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ShippingDiscount> updateDiscountUsingPATCH1WithHttpInfo(String discountId, UpdateShippingDiscountRequest updateShippingDiscountRequest, List<String> updateMask) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = updateDiscountUsingPATCH1RequestBuilder(discountId, updateShippingDiscountRequest, updateMask);

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
          throw getApiException("updateDiscountUsingPATCH1", localVarResponse);
        }
        return new ApiResponse<ShippingDiscount>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ShippingDiscount>() {}) // closes the InputStream
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

  private HttpRequest.Builder updateDiscountUsingPATCH1RequestBuilder(String discountId, UpdateShippingDiscountRequest updateShippingDiscountRequest, List<String> updateMask) throws ApiException {
    // verify the required parameter 'discountId' is set
    if (discountId == null) {
      throw new ApiException(400, "Missing the required parameter 'discountId' when calling updateDiscountUsingPATCH1");
    }
    // verify the required parameter 'updateShippingDiscountRequest' is set
    if (updateShippingDiscountRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'updateShippingDiscountRequest' when calling updateDiscountUsingPATCH1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/discounts/shipping/{discount_id}"
        .replace("{discount_id}", ApiClient.urlEncode(discountId.toString()));

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
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(updateShippingDiscountRequest);
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
