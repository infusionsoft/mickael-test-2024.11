# Criteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**criteria_id** | **str** |  | [optional] 
**end_range_date** | **str** |  | [optional] 
**start_range_date** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.criteria import Criteria

# TODO update the JSON string below
json = "{}"
# create an instance of Criteria from a JSON string
criteria_instance = Criteria.from_json(json)
# print the JSON string representation of the object
print(Criteria.to_json())

# convert the object into a dict
criteria_dict = criteria_instance.to_dict()
# create an instance of Criteria from a dict
criteria_from_dict = Criteria.from_dict(criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


