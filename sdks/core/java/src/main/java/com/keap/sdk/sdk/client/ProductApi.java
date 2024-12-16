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

import com.keap.sdk.sdk.model.CreateProductRequest;
import com.keap.sdk.sdk.model.Error;
import com.keap.sdk.sdk.model.ListProductsResponse;
import com.keap.sdk.sdk.model.RestV2Product;

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


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class ProductApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public ProductApi() {
    this(new ApiClient());
  }

  public ProductApi(ApiClient apiClient) {
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
   * Create a Product
   * Creates a new product
   * @param createProductRequest createProductRequest (required)
   * @return RestV2Product
   * @throws ApiException if fails to make API call
   */
  public RestV2Product createProductUsingPOST1(CreateProductRequest createProductRequest) throws ApiException {
    ApiResponse<RestV2Product> localVarResponse = createProductUsingPOST1WithHttpInfo(createProductRequest);
    return localVarResponse.getData();
  }

  /**
   * Create a Product
   * Creates a new product
   * @param createProductRequest createProductRequest (required)
   * @return ApiResponse&lt;RestV2Product&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<RestV2Product> createProductUsingPOST1WithHttpInfo(CreateProductRequest createProductRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = createProductUsingPOST1RequestBuilder(createProductRequest);

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
          throw getApiException("createProductUsingPOST1", localVarResponse);
        }
        return new ApiResponse<RestV2Product>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<RestV2Product>() {}) // closes the InputStream
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

  private HttpRequest.Builder createProductUsingPOST1RequestBuilder(CreateProductRequest createProductRequest) throws ApiException {
    // verify the required parameter 'createProductRequest' is set
    if (createProductRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'createProductRequest' when calling createProductUsingPOST1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/products";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(createProductRequest);
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
   * Delete a Product
   * Deletes a single product
   * @param productId product_id (required)
   * @throws ApiException if fails to make API call
   */
  public void deleteProductUsingDELETE1(String productId) throws ApiException {
    deleteProductUsingDELETE1WithHttpInfo(productId);
  }

  /**
   * Delete a Product
   * Deletes a single product
   * @param productId product_id (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Void> deleteProductUsingDELETE1WithHttpInfo(String productId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = deleteProductUsingDELETE1RequestBuilder(productId);

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
          throw getApiException("deleteProductUsingDELETE1", localVarResponse);
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

  private HttpRequest.Builder deleteProductUsingDELETE1RequestBuilder(String productId) throws ApiException {
    // verify the required parameter 'productId' is set
    if (productId == null) {
      throw new ApiException(400, "Missing the required parameter 'productId' when calling deleteProductUsingDELETE1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/products/{product_id}"
        .replace("{product_id}", ApiClient.urlEncode(productId.toString()));

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
   * Get a Product
   * Gets a single Product
   * @param productId product_id (required)
   * @return RestV2Product
   * @throws ApiException if fails to make API call
   */
  public RestV2Product getProductUsingGET(String productId) throws ApiException {
    ApiResponse<RestV2Product> localVarResponse = getProductUsingGETWithHttpInfo(productId);
    return localVarResponse.getData();
  }

  /**
   * Get a Product
   * Gets a single Product
   * @param productId product_id (required)
   * @return ApiResponse&lt;RestV2Product&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<RestV2Product> getProductUsingGETWithHttpInfo(String productId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = getProductUsingGETRequestBuilder(productId);

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
          throw getApiException("getProductUsingGET", localVarResponse);
        }
        return new ApiResponse<RestV2Product>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<RestV2Product>() {}) // closes the InputStream
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

  private HttpRequest.Builder getProductUsingGETRequestBuilder(String productId) throws ApiException {
    // verify the required parameter 'productId' is set
    if (productId == null) {
      throw new ApiException(400, "Missing the required parameter 'productId' when calling getProductUsingGET");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/products/{product_id}"
        .replace("{product_id}", ApiClient.urlEncode(productId.toString()));

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
   * List Products
   * Retrieves a list of Products
   * @param filter Filter to apply, allowed fields are:   - (String) name    (optional)
   * @param orderBy Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @return ListProductsResponse
   * @throws ApiException if fails to make API call
   */
  public ListProductsResponse listProductsUsingGET1(String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {
    ApiResponse<ListProductsResponse> localVarResponse = listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
    return localVarResponse.getData();
  }

  /**
   * List Products
   * Retrieves a list of Products
   * @param filter Filter to apply, allowed fields are:   - (String) name    (optional)
   * @param orderBy Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @return ApiResponse&lt;ListProductsResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ListProductsResponse> listProductsUsingGET1WithHttpInfo(String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = listProductsUsingGET1RequestBuilder(filter, orderBy, pageSize, pageToken);

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
          throw getApiException("listProductsUsingGET1", localVarResponse);
        }
        return new ApiResponse<ListProductsResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ListProductsResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder listProductsUsingGET1RequestBuilder(String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/products";

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
