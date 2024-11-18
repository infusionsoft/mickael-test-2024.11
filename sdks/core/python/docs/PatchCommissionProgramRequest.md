# PatchCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the Commission Program | 
**notes** | **str** | The notes of the Commission Program | [optional] 
**priority** | **int** | The priority of the Commission Program | [optional] 

## Example

```python
from keap_sdk_core_client.models.patch_commission_program_request import PatchCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchCommissionProgramRequest from a JSON string
patch_commission_program_request_instance = PatchCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(PatchCommissionProgramRequest.to_json())

# convert the object into a dict
patch_commission_program_request_dict = patch_commission_program_request_instance.to_dict()
# create an instance of PatchCommissionProgramRequest from a dict
patch_commission_program_request_from_dict = PatchCommissionProgramRequest.from_dict(patch_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


