# SubscriptionPlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | If the subscription plan should be active/available for purchase | [optional] 
**billing_cycle** | **str** | How frequent to bill. Can be: DAILY, WEEKLY, MONTHLY, or YEARLY | [optional] 
**billing_frequency** | **int** | How many times per billing cycle to bill | [optional] 
**id** | **str** | The subscription plan id | [optional] 
**number_of_cycles** | **int** | How many billing cycles to bill. Optional field i.e. can be no value or 0. | [optional] 
**order_index** | **int** | Determines the order in which the plan will be displayed | [optional] 
**plan_price** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**prorate** | **bool** | If the subscription plan should allow prorating | [optional] 

## Example

```python
from keap_sdk_core_client.models.subscription_plan import SubscriptionPlan

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPlan from a JSON string
subscription_plan_instance = SubscriptionPlan.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPlan.to_json())

# convert the object into a dict
subscription_plan_dict = subscription_plan_instance.to_dict()
# create an instance of SubscriptionPlan from a dict
subscription_plan_from_dict = SubscriptionPlan.from_dict(subscription_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


