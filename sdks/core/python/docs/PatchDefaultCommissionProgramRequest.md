# PatchDefaultCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_amount** | **str** |  | [optional] 
**percentage** | **str** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.patch_default_commission_program_request import PatchDefaultCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchDefaultCommissionProgramRequest from a JSON string
patch_default_commission_program_request_instance = PatchDefaultCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(PatchDefaultCommissionProgramRequest.to_json())

# convert the object into a dict
patch_default_commission_program_request_dict = patch_default_commission_program_request_instance.to_dict()
# create an instance of PatchDefaultCommissionProgramRequest from a dict
patch_default_commission_program_request_from_dict = PatchDefaultCommissionProgramRequest.from_dict(patch_default_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


