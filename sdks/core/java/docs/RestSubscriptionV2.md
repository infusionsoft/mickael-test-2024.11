

# RestSubscriptionV2


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** |  |  [optional] |
|**allowTax** | **Boolean** |  |  [optional] |
|**autoCharge** | **Boolean** |  |  [optional] |
|**billingAmount** | **Double** |  |  [optional] |
|**billingCycle** | [**BillingCycleEnum**](#BillingCycleEnum) |  |  [optional] |
|**billingFrequency** | **Integer** |  |  [optional] |
|**contactId** | **String** |  |  [optional] |
|**endDate** | **LocalDate** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**nextBillDate** | **LocalDate** |  |  [optional] |
|**paymentGatewayId** | **String** |  |  [optional] |
|**paymentMethodId** | **Long** |  |  [optional] |
|**productId** | **String** |  |  [optional] |
|**quantity** | **Long** |  |  [optional] |
|**saleAffiliateId** | **String** |  |  [optional] |
|**startDate** | **LocalDate** |  |  [optional] |
|**subscriptionPlanId** | **String** |  |  [optional] |



## Enum: BillingCycleEnum

| Name | Value |
|---- | -----|
| YEAR | &quot;YEAR&quot; |
| MONTH | &quot;MONTH&quot; |
| WEEK | &quot;WEEK&quot; |
| DAY | &quot;DAY&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

