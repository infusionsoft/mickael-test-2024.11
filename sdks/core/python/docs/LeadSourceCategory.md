# LeadSourceCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.lead_source_category import LeadSourceCategory

# TODO update the JSON string below
json = "{}"
# create an instance of LeadSourceCategory from a JSON string
lead_source_category_instance = LeadSourceCategory.from_json(json)
# print the JSON string representation of the object
print(LeadSourceCategory.to_json())

# convert the object into a dict
lead_source_category_dict = lead_source_category_instance.to_dict()
# create an instance of LeadSourceCategory from a dict
lead_source_category_from_dict = LeadSourceCategory.from_dict(lead_source_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


