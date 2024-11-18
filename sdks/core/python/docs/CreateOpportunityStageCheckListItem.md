# CreateOpportunityStageCheckListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | 
**order** | **int** |  | 
**required** | **bool** |  | 

## Example

```python
from keap_sdk_core_client.models.create_opportunity_stage_check_list_item import CreateOpportunityStageCheckListItem

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOpportunityStageCheckListItem from a JSON string
create_opportunity_stage_check_list_item_instance = CreateOpportunityStageCheckListItem.from_json(json)
# print the JSON string representation of the object
print(CreateOpportunityStageCheckListItem.to_json())

# convert the object into a dict
create_opportunity_stage_check_list_item_dict = create_opportunity_stage_check_list_item_instance.to_dict()
# create an instance of CreateOpportunityStageCheckListItem from a dict
create_opportunity_stage_check_list_item_from_dict = CreateOpportunityStageCheckListItem.from_dict(create_opportunity_stage_check_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


