# CreateRestOrderItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**price** | **float** | Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0. | [optional] 
**product_id** | **str** | The id of the product to be added to the order. | 
**product_type** | **str** |  | [optional] 
**quantity** | **int** | Quantity must be greater than or equal to 1 | 

## Example

```python
from keap_core_v2_client.models.create_rest_order_item_request import CreateRestOrderItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRestOrderItemRequest from a JSON string
create_rest_order_item_request_instance = CreateRestOrderItemRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRestOrderItemRequest.to_json())

# convert the object into a dict
create_rest_order_item_request_dict = create_rest_order_item_request_instance.to_dict()
# create an instance of CreateRestOrderItemRequest from a dict
create_rest_order_item_request_from_dict = CreateRestOrderItemRequest.from_dict(create_rest_order_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


