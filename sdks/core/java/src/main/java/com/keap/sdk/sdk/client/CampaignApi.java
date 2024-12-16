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

import com.keap.sdk.sdk.model.AddContactsToSequenceRequest;
import com.keap.sdk.sdk.model.AddContactsToSequenceResponse;
import com.keap.sdk.sdk.model.Campaign;
import com.keap.sdk.sdk.model.Error;
import com.keap.sdk.sdk.model.ListCampaignsResponse;
import com.keap.sdk.sdk.model.RemoveContactsFromSequenceRequest;
import com.keap.sdk.sdk.model.RemoveContactsFromSequenceResponse;

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


@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.10.0")public class CampaignApi {
  private final HttpClient memberVarHttpClient;
  private final ObjectMapper memberVarObjectMapper;
  private final String memberVarBaseUri;
  private final Consumer<HttpRequest.Builder> memberVarInterceptor;
  private final Duration memberVarReadTimeout;
  private final Consumer<HttpResponse<InputStream>> memberVarResponseInterceptor;
  private final Consumer<HttpResponse<String>> memberVarAsyncResponseInterceptor;

  private final Supplier<String> accessTokenSupplier;

  public CampaignApi() {
    this(new ApiClient());
  }

  public CampaignApi(ApiClient apiClient) {
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
   * Add Contacts to Campaign Sequence
   * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
   * @param campaignId campaign_id (required)
   * @param sequenceId sequence_id (required)
   * @param addContactsToSequenceRequest addContactsToSequenceRequest (required)
   * @return AddContactsToSequenceResponse
   * @throws ApiException if fails to make API call
   */
  public AddContactsToSequenceResponse addContactsToCampaignSequenceUsingPOST1(String campaignId, String sequenceId, AddContactsToSequenceRequest addContactsToSequenceRequest) throws ApiException {
    ApiResponse<AddContactsToSequenceResponse> localVarResponse = addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest);
    return localVarResponse.getData();
  }

  /**
   * Add Contacts to Campaign Sequence
   * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
   * @param campaignId campaign_id (required)
   * @param sequenceId sequence_id (required)
   * @param addContactsToSequenceRequest addContactsToSequenceRequest (required)
   * @return ApiResponse&lt;AddContactsToSequenceResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<AddContactsToSequenceResponse> addContactsToCampaignSequenceUsingPOST1WithHttpInfo(String campaignId, String sequenceId, AddContactsToSequenceRequest addContactsToSequenceRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = addContactsToCampaignSequenceUsingPOST1RequestBuilder(campaignId, sequenceId, addContactsToSequenceRequest);

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
          throw getApiException("addContactsToCampaignSequenceUsingPOST1", localVarResponse);
        }
        return new ApiResponse<AddContactsToSequenceResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<AddContactsToSequenceResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder addContactsToCampaignSequenceUsingPOST1RequestBuilder(String campaignId, String sequenceId, AddContactsToSequenceRequest addContactsToSequenceRequest) throws ApiException {
    // verify the required parameter 'campaignId' is set
    if (campaignId == null) {
      throw new ApiException(400, "Missing the required parameter 'campaignId' when calling addContactsToCampaignSequenceUsingPOST1");
    }
    // verify the required parameter 'sequenceId' is set
    if (sequenceId == null) {
      throw new ApiException(400, "Missing the required parameter 'sequenceId' when calling addContactsToCampaignSequenceUsingPOST1");
    }
    // verify the required parameter 'addContactsToSequenceRequest' is set
    if (addContactsToSequenceRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'addContactsToSequenceRequest' when calling addContactsToCampaignSequenceUsingPOST1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/campaigns/{campaign_id}/sequences/{sequence_id}:addContacts"
        .replace("{campaign_id}", ApiClient.urlEncode(campaignId.toString()))
        .replace("{sequence_id}", ApiClient.urlEncode(sequenceId.toString()));

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(addContactsToSequenceRequest);
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
   * Retrieve a Campaign
   * Retrieves a single campaign
   * @param campaignId campaign_id (required)
   * @return Campaign
   * @throws ApiException if fails to make API call
   */
  public Campaign getCampaignUsingGET1(String campaignId) throws ApiException {
    ApiResponse<Campaign> localVarResponse = getCampaignUsingGET1WithHttpInfo(campaignId);
    return localVarResponse.getData();
  }

  /**
   * Retrieve a Campaign
   * Retrieves a single campaign
   * @param campaignId campaign_id (required)
   * @return ApiResponse&lt;Campaign&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<Campaign> getCampaignUsingGET1WithHttpInfo(String campaignId) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = getCampaignUsingGET1RequestBuilder(campaignId);

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
          throw getApiException("getCampaignUsingGET1", localVarResponse);
        }
        return new ApiResponse<Campaign>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<Campaign>() {}) // closes the InputStream
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

  private HttpRequest.Builder getCampaignUsingGET1RequestBuilder(String campaignId) throws ApiException {
    // verify the required parameter 'campaignId' is set
    if (campaignId == null) {
      throw new ApiException(400, "Missing the required parameter 'campaignId' when calling getCampaignUsingGET1");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/campaigns/{campaign_id}"
        .replace("{campaign_id}", ApiClient.urlEncode(campaignId.toString()));

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
   * List Campaigns
   * Retrieves all campaigns for the authenticated user
   * @param filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name.   - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;   (optional)
   * @param orderBy Attribute and direction to order items.   One of the following fields:   - name   - publisheddate   - id   - completedContactCount   - activeContacts   - datecreated   - lastupdated   One of the following directions:   - asc   - desc (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @param stats  (optional)
   * @return ListCampaignsResponse
   * @throws ApiException if fails to make API call
   */
  public ListCampaignsResponse listCampaignsUsingGET1(String filter, String orderBy, Integer pageSize, String pageToken, Boolean stats) throws ApiException {
    ApiResponse<ListCampaignsResponse> localVarResponse = listCampaignsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, stats);
    return localVarResponse.getData();
  }

  /**
   * List Campaigns
   * Retrieves all campaigns for the authenticated user
   * @param filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name.   - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;   (optional)
   * @param orderBy Attribute and direction to order items.   One of the following fields:   - name   - publisheddate   - id   - completedContactCount   - activeContacts   - datecreated   - lastupdated   One of the following directions:   - asc   - desc (optional)
   * @param pageSize Total number of items to return per page (optional)
   * @param pageToken Page token (optional)
   * @param stats  (optional)
   * @return ApiResponse&lt;ListCampaignsResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<ListCampaignsResponse> listCampaignsUsingGET1WithHttpInfo(String filter, String orderBy, Integer pageSize, String pageToken, Boolean stats) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = listCampaignsUsingGET1RequestBuilder(filter, orderBy, pageSize, pageToken, stats);

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
          throw getApiException("listCampaignsUsingGET1", localVarResponse);
        }
        return new ApiResponse<ListCampaignsResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<ListCampaignsResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder listCampaignsUsingGET1RequestBuilder(String filter, String orderBy, Integer pageSize, String pageToken, Boolean stats) throws ApiException {

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/campaigns";

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
   * Remove Contacts from Campaign Sequence
   * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
   * @param campaignId campaign_id (required)
   * @param sequenceId sequence_id (required)
   * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest (required)
   * @return RemoveContactsFromSequenceResponse
   * @throws ApiException if fails to make API call
   */
  public RemoveContactsFromSequenceResponse removeContactsFromCampaignSequenceUsingPOST(String campaignId, String sequenceId, RemoveContactsFromSequenceRequest removeContactsFromSequenceRequest) throws ApiException {
    ApiResponse<RemoveContactsFromSequenceResponse> localVarResponse = removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest);
    return localVarResponse.getData();
  }

  /**
   * Remove Contacts from Campaign Sequence
   * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
   * @param campaignId campaign_id (required)
   * @param sequenceId sequence_id (required)
   * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest (required)
   * @return ApiResponse&lt;RemoveContactsFromSequenceResponse&gt;
   * @throws ApiException if fails to make API call
   */
  public ApiResponse<RemoveContactsFromSequenceResponse> removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(String campaignId, String sequenceId, RemoveContactsFromSequenceRequest removeContactsFromSequenceRequest) throws ApiException {
    HttpRequest.Builder localVarRequestBuilder = removeContactsFromCampaignSequenceUsingPOSTRequestBuilder(campaignId, sequenceId, removeContactsFromSequenceRequest);

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
          throw getApiException("removeContactsFromCampaignSequenceUsingPOST", localVarResponse);
        }
        return new ApiResponse<RemoveContactsFromSequenceResponse>(
          localVarResponse.statusCode(),
          localVarResponse.headers().map(),
          localVarResponse.body() == null ? null : memberVarObjectMapper.readValue(localVarResponse.body(), new TypeReference<RemoveContactsFromSequenceResponse>() {}) // closes the InputStream
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

  private HttpRequest.Builder removeContactsFromCampaignSequenceUsingPOSTRequestBuilder(String campaignId, String sequenceId, RemoveContactsFromSequenceRequest removeContactsFromSequenceRequest) throws ApiException {
    // verify the required parameter 'campaignId' is set
    if (campaignId == null) {
      throw new ApiException(400, "Missing the required parameter 'campaignId' when calling removeContactsFromCampaignSequenceUsingPOST");
    }
    // verify the required parameter 'sequenceId' is set
    if (sequenceId == null) {
      throw new ApiException(400, "Missing the required parameter 'sequenceId' when calling removeContactsFromCampaignSequenceUsingPOST");
    }
    // verify the required parameter 'removeContactsFromSequenceRequest' is set
    if (removeContactsFromSequenceRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'removeContactsFromSequenceRequest' when calling removeContactsFromCampaignSequenceUsingPOST");
    }

    HttpRequest.Builder localVarRequestBuilder = HttpRequest.newBuilder();

    String localVarPath = "/v2/campaigns/{campaign_id}/sequences/{sequence_id}:removeContacts"
        .replace("{campaign_id}", ApiClient.urlEncode(campaignId.toString()))
        .replace("{sequence_id}", ApiClient.urlEncode(sequenceId.toString()));

    localVarRequestBuilder.uri(URI.create(memberVarBaseUri + localVarPath));

    localVarRequestBuilder.header("Content-Type", "application/json");
    localVarRequestBuilder.header("Accept", "application/json");
    localVarRequestBuilder.header("Authorization", "Bearer " + this.accessTokenSupplier.get());

    try {
      byte[] localVarPostBody = memberVarObjectMapper.writeValueAsBytes(removeContactsFromSequenceRequest);
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
