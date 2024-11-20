# RestV2PatchOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** |  | [optional] 
**lead_affiliate_id** | **str** |  | [optional] 
**order_time** | **str** |  | [optional] 
**order_title** | **str** |  | [optional] 
**order_type** | **str** |  | [optional] 
**promo_codes** | **List[str]** | Uses multiple strings as promo codes. The corresponding discount will be applied to the order. | [optional] 
**sales_affiliate_id** | **str** |  | [optional] 
**shipping_address** | [**AddressInformation**](AddressInformation.md) |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.rest_v2_patch_order_request import RestV2PatchOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestV2PatchOrderRequest from a JSON string
rest_v2_patch_order_request_instance = RestV2PatchOrderRequest.from_json(json)
# print the JSON string representation of the object
print(RestV2PatchOrderRequest.to_json())

# convert the object into a dict
rest_v2_patch_order_request_dict = rest_v2_patch_order_request_instance.to_dict()
# create an instance of RestV2PatchOrderRequest from a dict
rest_v2_patch_order_request_from_dict = RestV2PatchOrderRequest.from_dict(rest_v2_patch_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


