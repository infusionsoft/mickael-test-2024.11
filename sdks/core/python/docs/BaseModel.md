# BaseModel

Base class for all models. Provides a unique identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the model. | [optional] 

## Example

```python
from keap_sdk_core_client.models.base_model import BaseModel

# TODO update the JSON string below
json = "{}"
# create an instance of BaseModel from a JSON string
base_model_instance = BaseModel.from_json(json)
# print the JSON string representation of the object
print(BaseModel.to_json())

# convert the object into a dict
base_model_dict = base_model_instance.to_dict()
# create an instance of BaseModel from a dict
base_model_from_dict = BaseModel.from_dict(base_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


