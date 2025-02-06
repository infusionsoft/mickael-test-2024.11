# GetUserInfoResponseBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**given_name** | **str** |  | [optional] 
**id** | **object** |  | [optional] 
**is_admin** | **bool** |  | [optional] 
**keap_id** | **str** |  | [optional] 
**middle_name** | **str** |  | [optional] 
**preferred_name** | **str** |  | [optional] 
**sub** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.get_user_info_response_base import GetUserInfoResponseBase

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserInfoResponseBase from a JSON string
get_user_info_response_base_instance = GetUserInfoResponseBase.from_json(json)
# print the JSON string representation of the object
print(GetUserInfoResponseBase.to_json())

# convert the object into a dict
get_user_info_response_base_dict = get_user_info_response_base_instance.to_dict()
# create an instance of GetUserInfoResponseBase from a dict
get_user_info_response_base_from_dict = GetUserInfoResponseBase.from_dict(get_user_info_response_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


