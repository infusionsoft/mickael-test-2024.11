# # Deal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the model. | [optional]
**name** | **string** | The name of the deal. This field is required and must have at least one character. |
**value** | [**\Keap\Sdk\Core\Model\DealValue**](DealValue.md) |  |
**contacts** | [**\Keap\Sdk\Core\Model\DealContact[]**](DealContact.md) | The list of contacts associated with the deal. This field is required. |
**stage** | [**\Keap\Sdk\Core\Model\DealStage**](DealStage.md) |  |
**stage_assignment_time** | **\DateTime** | The time when the deal was assigned to the current stage. This field is required. |
**owners** | [**\Keap\Sdk\Core\Model\Owner[]**](Owner.md) | The list of owners of the deal. This field is required. |
**owner_id** | **string** | The ID of the owner of the deal. This field is optional. | [optional]
**task_ids** | **string[]** | The list of task IDs associated with the deal. This field is required. |
**order_id** | **string** | The order of the deal. This field is optional. | [optional]
**status** | **string** | The status of the deal. This field is required. |
**estimated_close_time** | **\DateTime** | The estimated close time of the deal. This field is optional. | [optional]
**closed_time** | **\DateTime** | The actual close time of the deal. This field is optional. | [optional]
**custom_fields** | **array** | The custom fields associated with the deal. This field is optional. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
