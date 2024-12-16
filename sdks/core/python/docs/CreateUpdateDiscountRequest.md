# CreateUpdateDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_commissions** | **bool** |  | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_percent** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**product_category_ids** | **List[str]** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.create_update_discount_request import CreateUpdateDiscountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUpdateDiscountRequest from a JSON string
create_update_discount_request_instance = CreateUpdateDiscountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUpdateDiscountRequest.to_json())

# convert the object into a dict
create_update_discount_request_dict = create_update_discount_request_instance.to_dict()
# create an instance of CreateUpdateDiscountRequest from a dict
create_update_discount_request_from_dict = CreateUpdateDiscountRequest.from_dict(create_update_discount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


