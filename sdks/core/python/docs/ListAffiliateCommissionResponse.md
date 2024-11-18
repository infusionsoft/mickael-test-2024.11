# ListAffiliateCommissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_commissions** | [**List[AffiliateCommission]**](AffiliateCommission.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 
**total_aff_comm_earned** | **float** |  | [optional] 
**total_claw_back** | **float** |  | [optional] 
**total_comm_earned** | **float** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.list_affiliate_commission_response import ListAffiliateCommissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAffiliateCommissionResponse from a JSON string
list_affiliate_commission_response_instance = ListAffiliateCommissionResponse.from_json(json)
# print the JSON string representation of the object
print(ListAffiliateCommissionResponse.to_json())

# convert the object into a dict
list_affiliate_commission_response_dict = list_affiliate_commission_response_instance.to_dict()
# create an instance of ListAffiliateCommissionResponse from a dict
list_affiliate_commission_response_from_dict = ListAffiliateCommissionResponse.from_dict(list_affiliate_commission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


