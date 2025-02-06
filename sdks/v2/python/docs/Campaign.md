# Campaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_contact_count** | **int** |  | [optional] 
**completed_contact_count** | **int** |  | [optional] 
**created_by_global_id** | **str** |  | [optional] 
**date_created** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 
**goals** | [**List[Goal]**](Goal.md) |  | [optional] 
**id** | **str** |  | [optional] 
**locked** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**published_date** | **datetime** |  | [optional] 
**published_status** | **bool** |  | [optional] 
**published_time_zone** | **str** |  | [optional] 
**sequences** | [**List[Sequence]**](Sequence.md) |  | [optional] 
**time_zone** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.campaign import Campaign

# TODO update the JSON string below
json = "{}"
# create an instance of Campaign from a JSON string
campaign_instance = Campaign.from_json(json)
# print the JSON string representation of the object
print(Campaign.to_json())

# convert the object into a dict
campaign_dict = campaign_instance.to_dict()
# create an instance of Campaign from a dict
campaign_from_dict = Campaign.from_dict(campaign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


