# RestSubscriptionPlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**cycle** | **str** |  | [optional] 
**frequency** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**subscription_plan_index** | **int** |  | [optional] 
**subscription_plan_name** | **str** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.rest_subscription_plan import RestSubscriptionPlan

# TODO update the JSON string below
json = "{}"
# create an instance of RestSubscriptionPlan from a JSON string
rest_subscription_plan_instance = RestSubscriptionPlan.from_json(json)
# print the JSON string representation of the object
print(RestSubscriptionPlan.to_json())

# convert the object into a dict
rest_subscription_plan_dict = rest_subscription_plan_instance.to_dict()
# create an instance of RestSubscriptionPlan from a dict
rest_subscription_plan_from_dict = RestSubscriptionPlan.from_dict(rest_subscription_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


