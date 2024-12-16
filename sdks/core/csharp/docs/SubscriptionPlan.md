# Keap.Sdk.Core.Model.SubscriptionPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** | If the subscription plan should be active/available for purchase | [optional] 
**BillingCycle** | **string** | How frequent to bill. Can be: DAILY, WEEKLY, MONTHLY, or YEARLY | [optional] 
**BillingFrequency** | **int** | How many times per billing cycle to bill | [optional] 
**Id** | **string** | The subscription plan id | [optional] 
**NumberOfCycles** | **int** | How many billing cycles to bill. Optional field i.e. can be no value or 0. | [optional] 
**OrderIndex** | **int** | Determines the order in which the plan will be displayed | [optional] 
**PlanPrice** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**Prorate** | **bool** | If the subscription plan should allow prorating | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

