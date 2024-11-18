# CheckListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**required** | **bool** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.check_list_item import CheckListItem

# TODO update the JSON string below
json = "{}"
# create an instance of CheckListItem from a JSON string
check_list_item_instance = CheckListItem.from_json(json)
# print the JSON string representation of the object
print(CheckListItem.to_json())

# convert the object into a dict
check_list_item_dict = check_list_item_instance.to_dict()
# create an instance of CheckListItem from a dict
check_list_item_from_dict = CheckListItem.from_dict(check_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


