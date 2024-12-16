# # SubscriptionPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | If the subscription plan should be active/available for purchase | [optional]
**billing_cycle** | **string** | How frequent to bill. Can be: DAILY, WEEKLY, MONTHLY, or YEARLY | [optional]
**billing_frequency** | **int** | How many times per billing cycle to bill | [optional]
**id** | **string** | The subscription plan id | [optional]
**number_of_cycles** | **int** | How many billing cycles to bill. Optional field i.e. can be no value or 0. | [optional]
**order_index** | **int** | Determines the order in which the plan will be displayed | [optional]
**plan_price** | [**\Com\Keap\Sdk\Core\Model\CurrencyValue**](CurrencyValue.md) |  | [optional]
**prorate** | **bool** | If the subscription plan should allow prorating | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
