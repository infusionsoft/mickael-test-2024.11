/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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

import com.keap.core.sdk.model.Company;
import com.keap.core.sdk.model.CreateCompanyRequest;
import com.keap.core.sdk.model.Error;
import com.keap.core.sdk.model.ListCompaniesResponse;
import com.keap.core.sdk.model.UpdateCompanyRequest;

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


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class CompanyApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public CompanyApi() {
    this(new ApiClient());
  }

  public CompanyApi(ApiClient apiClient) {
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
   * Create a Company
   * Creates a new Company.&#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.
   * @param createCompanyRequest company (optional)
   * @return Company
   * @throws ApiException if fails to make API call
   */
  public Company createCompanyUsingPOST1(CreateCompanyRequest createCompanyRequest) throws ApiException {
    ApiResponse<Company> localVarResponse = createCompanyUsingPOST1WithHttpInfo(createCompanyRequest);
    return localVarResponse.getData();
  }

  /**
   * Create a Company
   * Creates a new Company.&#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.
   * @param createCompanyRequest company (optional)
   * @return ApiResponse&lt;Company&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Company> createCompanyUsingPOST1WithHttpInfo(CreateCompanyRequest createCompanyRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = createCompanyUsingPOST1RequestBuilder(createCompanyRequest);

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
          throw getApiException("createCompanyUsingPOST1", localVarResponse);
        }
        return new ApiResponse<Company>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<Company>() {}) // closes the InputStream
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

  private HttpRequest.Builder createCompanyUsingPOST1RequestBuilder(CreateCompanyRequest createCompanyRequest) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/companies";

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(createCompanyRequest);
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
   * Delete a Company
   * Deletes the specified Company
   * @param companyId company_id (required)
   * @throws ApiException if fails to make API call
   */
  public void deleteCompanyUsingDELETE(String companyId) throws ApiException {
    deleteCompanyUsingDELETEWithHttpInfo(companyId);
  }

  /**
   * Delete a Company
   * Deletes the specified Company
   * @param companyId company_id (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Void> deleteCompanyUsingDELETEWithHttpInfo(String companyId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = deleteCompanyUsingDELETERequestBuilder(companyId);

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
          throw getApiException("deleteCompanyUsingDELETE", localVarResponse);
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

  private HttpRequest.Builder deleteCompanyUsingDELETERequestBuilder(String companyId) throws ApiException {
    // verify the required parameter 'companyId' is set
    if (companyId == null) {
      throw new ApiException(400, "Missing the required parameter 'companyId' when calling deleteCompanyUsingDELETE");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/companies/{company_id}"
        .replace("{company_id}", ApiClient.urlEncode(companyId.toString()));

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
   * Retrieve a Company
   * Retrieves a single Company
   * @param companyId company_id (required)
   * @param fields Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;) (optional)
   * @return Company
   * @throws ApiException if fails to make API call
   */
  public Company getCompanyUsingGET1(String companyId, List<String> fields) throws ApiException {
    ApiResponse<Company> localVarResponse = getCompanyUsingGET1WithHttpInfo(companyId, fields);
    return localVarResponse.getData();
  }

  /**
   * Retrieve a Company
   * Retrieves a single Company
   * @param companyId company_id (required)
   * @param fields Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;) (optional)
   * @return ApiResponse&lt;Company&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Company> getCompanyUsingGET1WithHttpInfo(String companyId, List<String> fields) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = getCompanyUsingGET1RequestBuilder(companyId, fields);

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
          throw getApiException("getCompanyUsingGET1", localVarResponse);
        }
        return new ApiResponse<Company>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<Company>() {}) // closes the InputStream
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

  private HttpRequest.Builder getCompanyUsingGET1RequestBuilder(String companyId, List<String> fields) throws ApiException {
    // verify the required parameter 'companyId' is set
    if (companyId == null) {
      throw new ApiException(400, "Missing the required parameter 'companyId' when calling getCompanyUsingGET1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/companies/{company_id}"
        .replace("{company_id}", ApiClient.urlEncode(companyId.toString()));

    List<Pair> localVarQueryParams = new ArrayList<>();
    StringJoiner localVarQueryStringJoiner = new StringJoiner("&");
    String localVarQueryParameterBaseName;
    localVarQueryParameterBaseName = "fields";
    localVarQueryParams.addAll(ApiClient.parameterToPairs("multi", "fields", fields));

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
   * List Companies
   * Retrieves a list of all Companies
   * @param fields Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#39;t included, by default.) (optional)
   * @param filter Search filter to apply to results (optional)
   * @param orderBy Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @return ListCompaniesResponse
   * @throws ApiException if fails to make API call
   */
  public ListCompaniesResponse listCompaniesUsingGET1(List<String> fields, String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {
    ApiResponse<ListCompaniesResponse> localVarResponse = listCompaniesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
    return localVarResponse.getData();
  }

  /**
   * List Companies
   * Retrieves a list of all Companies
   * @param fields Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren&#39;t included, by default.) (optional)
   * @param filter Search filter to apply to results (optional)
   * @param orderBy Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @return ApiResponse&lt;ListCompaniesResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ListCompaniesResponse> listCompaniesUsingGET1WithHttpInfo(List<String> fields, String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = listCompaniesUsingGET1RequestBuilder(fields, filter, orderBy, pageSize, pageToken);

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
          throw getApiException("listCompaniesUsingGET1", localVarResponse);
        }
        return new ApiResponse<ListCompaniesResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ListCompaniesResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder listCompaniesUsingGET1RequestBuilder(List<String> fields, String filter, String orderBy, Integer pageSize, String pageToken) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/companies";

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
   * Update a Company
   * Updates a Company with the values provided in the request
   * @param companyId company_id (required)
   * @param updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
   * @param updateCompanyRequest company (optional)
   * @return Company
   * @throws ApiException if fails to make API call
   */
  public Company updateCompanyUsingPATCH1(String companyId, List<String> updateMask, UpdateCompanyRequest updateCompanyRequest) throws ApiException {
    ApiResponse<Company> localVarResponse = updateCompanyUsingPATCH1WithHttpInfo(companyId, updateMask, updateCompanyRequest);
    return localVarResponse.getData();
  }

  /**
   * Update a Company
   * Updates a Company with the values provided in the request
   * @param companyId company_id (required)
   * @param updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
   * @param updateCompanyRequest company (optional)
   * @return ApiResponse&lt;Company&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Company> updateCompanyUsingPATCH1WithHttpInfo(String companyId, List<String> updateMask, UpdateCompanyRequest updateCompanyRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = updateCompanyUsingPATCH1RequestBuilder(companyId, updateMask, updateCompanyRequest);

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
          throw getApiException("updateCompanyUsingPATCH1", localVarResponse);
        }
        return new ApiResponse<Company>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<Company>() {}) // closes the InputStream
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

  private HttpRequest.Builder updateCompanyUsingPATCH1RequestBuilder(String companyId, List<String> updateMask, UpdateCompanyRequest updateCompanyRequest) throws ApiException {
    // verify the required parameter 'companyId' is set
    if (companyId == null) {
      throw new ApiException(400, "Missing the required parameter 'companyId' when calling updateCompanyUsingPATCH1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/companies/{company_id}"
        .replace("{company_id}", ApiClient.urlEncode(companyId.toString()));

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
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(updateCompanyRequest);
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
