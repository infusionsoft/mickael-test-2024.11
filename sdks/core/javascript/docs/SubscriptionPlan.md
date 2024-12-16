# KeapCoreServiceCoreSdk.SubscriptionPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | If the subscription plan should be active/available for purchase | [optional] 
**billingCycle** | **String** | How frequent to bill. Can be: DAILY, WEEKLY, MONTHLY, or YEARLY | [optional] 
**billingFrequency** | **Number** | How many times per billing cycle to bill | [optional] 
**id** | **String** | The subscription plan id | [optional] 
**numberOfCycles** | **Number** | How many billing cycles to bill. Optional field i.e. can be no value or 0. | [optional] 
**orderIndex** | **Number** | Determines the order in which the plan will be displayed | [optional] 
**planPrice** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**prorate** | **Boolean** | If the subscription plan should allow prorating | [optional] 


