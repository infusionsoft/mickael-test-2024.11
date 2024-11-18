# # CreateFunnelIntegrationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **string** | The base URL of the integration, that will be used to call the integration related REST endpoints. | [optional]
**context** | **string** | The context of the integration, that will be used internally to identify the integration. | [optional]
**enabled** | **bool** | The flag to enable or disable the integration. | [optional]
**funnel_integration_actions** | [**\Com\Keap\Sdk\Core\Model\FunnelIntegrationAction[]**](FunnelIntegrationAction.md) | The list of actions that will be installed with the integration. | [optional]
**funnel_integration_triggers** | [**\Com\Keap\Sdk\Core\Model\FunnelIntegrationAction[]**](FunnelIntegrationAction.md) | The list of triggers that will be installed with the integration. | [optional]
**name** | **string** | The name of the integration, that will be used internally to identify the integration. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
