# RestProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**price** | **float** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.rest_product import RestProduct

# TODO update the JSON string below
json = "{}"
# create an instance of RestProduct from a JSON string
rest_product_instance = RestProduct.from_json(json)
# print the JSON string representation of the object
print(RestProduct.to_json())

# convert the object into a dict
rest_product_dict = rest_product_instance.to_dict()
# create an instance of RestProduct from a dict
rest_product_from_dict = RestProduct.from_dict(rest_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


