# PatchBusinessProfileRequest

Update profile information about the business that owns/uses this account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**BusinessProfileAddressRequest**](BusinessProfileAddressRequest.md) |  | [optional] 
**business_goals** | **List[str]** | The goals of this business, ie. Grow Business, Convert more leads | [optional] 
**business_primary_color** | **str** |  | [optional] 
**business_secondary_color** | **str** |  | [optional] 
**currency_code** | **str** | ISO 4217 Currency Code | [optional] 
**email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.patch_business_profile_request import PatchBusinessProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchBusinessProfileRequest from a JSON string
patch_business_profile_request_instance = PatchBusinessProfileRequest.from_json(json)
# print the JSON string representation of the object
print(PatchBusinessProfileRequest.to_json())

# convert the object into a dict
patch_business_profile_request_dict = patch_business_profile_request_instance.to_dict()
# create an instance of PatchBusinessProfileRequest from a dict
patch_business_profile_request_from_dict = PatchBusinessProfileRequest.from_dict(patch_business_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


