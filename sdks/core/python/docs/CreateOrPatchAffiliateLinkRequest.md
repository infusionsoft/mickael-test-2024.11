# CreateOrPatchAffiliateLinkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_id** | **str** | The AffiliateId | [optional] 
**code** | **str** | Code | [optional] 
**name** | **str** | The Affiliate Link Name | [optional] 
**program_ids** | **List[str]** |  | [optional] 
**website_address** | **str** | Website Address | [optional] 

## Example

```python
from keap_sdk_core_client.models.create_or_patch_affiliate_link_request import CreateOrPatchAffiliateLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrPatchAffiliateLinkRequest from a JSON string
create_or_patch_affiliate_link_request_instance = CreateOrPatchAffiliateLinkRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrPatchAffiliateLinkRequest.to_json())

# convert the object into a dict
create_or_patch_affiliate_link_request_dict = create_or_patch_affiliate_link_request_instance.to_dict()
# create an instance of CreateOrPatchAffiliateLinkRequest from a dict
create_or_patch_affiliate_link_request_from_dict = CreateOrPatchAffiliateLinkRequest.from_dict(create_or_patch_affiliate_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


