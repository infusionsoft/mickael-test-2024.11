# PatchAffiliateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length | 
**contact_id** | **str** | The contactId identifier , Must be a positive number | [optional] 
**name** | **str** | The Affiliate name will be derived from the Contact, when not explicitly provided | [optional] 
**status** | **str** | The Affiliate Status | 

## Example

```python
from keap_sdk_core_client.models.patch_affiliate_request import PatchAffiliateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchAffiliateRequest from a JSON string
patch_affiliate_request_instance = PatchAffiliateRequest.from_json(json)
# print the JSON string representation of the object
print(PatchAffiliateRequest.to_json())

# convert the object into a dict
patch_affiliate_request_dict = patch_affiliate_request_instance.to_dict()
# create an instance of PatchAffiliateRequest from a dict
patch_affiliate_request_from_dict = PatchAffiliateRequest.from_dict(patch_affiliate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


