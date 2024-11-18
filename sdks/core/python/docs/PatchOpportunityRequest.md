# PatchOpportunityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_id** | **str** |  | [optional] 
**contact_id** | **str** |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**estimated_close_time** | **str** |  | [optional] 
**include_in_forecast** | **bool** |  | [optional] 
**next_action_notes** | **str** |  | [optional] 
**next_action_time** | **str** |  | [optional] 
**opportunity_notes** | **str** |  | [optional] 
**opportunity_title** | **str** |  | [optional] 
**projected_revenue_high** | **float** |  | [optional] 
**projected_revenue_low** | **float** |  | [optional] 
**stage_id** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.patch_opportunity_request import PatchOpportunityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchOpportunityRequest from a JSON string
patch_opportunity_request_instance = PatchOpportunityRequest.from_json(json)
# print the JSON string representation of the object
print(PatchOpportunityRequest.to_json())

# convert the object into a dict
patch_opportunity_request_dict = patch_opportunity_request_instance.to_dict()
# create an instance of PatchOpportunityRequest from a dict
patch_opportunity_request_from_dict = PatchOpportunityRequest.from_dict(patch_opportunity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


