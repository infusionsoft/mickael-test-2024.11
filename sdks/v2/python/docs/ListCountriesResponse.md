# ListCountriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | [**List[Country]**](Country.md) | A key-value pair of country code and country name. | 

## Example

```python
from keap_core_v2_client.models.list_countries_response import ListCountriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCountriesResponse from a JSON string
list_countries_response_instance = ListCountriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCountriesResponse.to_json())

# convert the object into a dict
list_countries_response_dict = list_countries_response_instance.to_dict()
# create an instance of ListCountriesResponse from a dict
list_countries_response_from_dict = ListCountriesResponse.from_dict(list_countries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


