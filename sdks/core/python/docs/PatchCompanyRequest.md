# PatchCompanyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**company_name** | **str** |  | [optional] 
**custom_fields** | [**List[CustomFieldValue]**](CustomFieldValue.md) |  | [optional] 
**email_address** | [**EmailAddress**](EmailAddress.md) |  | [optional] 
**fax_number** | [**FaxNumber**](FaxNumber.md) |  | [optional] 
**notes** | **str** |  | [optional] 
**phone_number** | [**PhoneNumber**](PhoneNumber.md) |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from keap_sdk_core_client.models.patch_company_request import PatchCompanyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchCompanyRequest from a JSON string
patch_company_request_instance = PatchCompanyRequest.from_json(json)
# print the JSON string representation of the object
print(PatchCompanyRequest.to_json())

# convert the object into a dict
patch_company_request_dict = patch_company_request_instance.to_dict()
# create an instance of PatchCompanyRequest from a dict
patch_company_request_from_dict = PatchCompanyRequest.from_dict(patch_company_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


