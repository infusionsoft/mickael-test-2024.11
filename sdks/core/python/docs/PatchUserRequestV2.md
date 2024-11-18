# PatchUserRequestV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**company_name** | **str** |  | [optional] 
**email_address** | [**EmailAddressRequest**](EmailAddressRequest.md) |  | [optional] 
**family_name** | **str** |  | [optional] 
**fax_numbers** | [**List[FaxNumber]**](FaxNumber.md) |  | [optional] 
**given_name** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**time_zone** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.patch_user_request_v2 import PatchUserRequestV2

# TODO update the JSON string below
json = "{}"
# create an instance of PatchUserRequestV2 from a JSON string
patch_user_request_v2_instance = PatchUserRequestV2.from_json(json)
# print the JSON string representation of the object
print(PatchUserRequestV2.to_json())

# convert the object into a dict
patch_user_request_v2_dict = patch_user_request_v2_instance.to_dict()
# create an instance of PatchUserRequestV2 from a dict
patch_user_request_v2_from_dict = PatchUserRequestV2.from_dict(patch_user_request_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


