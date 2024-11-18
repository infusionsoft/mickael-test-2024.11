# PatchProductCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_amount** | **str** |  | [optional] 
**percentage** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.patch_product_commission_program_request import PatchProductCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchProductCommissionProgramRequest from a JSON string
patch_product_commission_program_request_instance = PatchProductCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(PatchProductCommissionProgramRequest.to_json())

# convert the object into a dict
patch_product_commission_program_request_dict = patch_product_commission_program_request_instance.to_dict()
# create an instance of PatchProductCommissionProgramRequest from a dict
patch_product_commission_program_request_from_dict = PatchProductCommissionProgramRequest.from_dict(patch_product_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


