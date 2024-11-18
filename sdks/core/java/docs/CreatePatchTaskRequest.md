

# CreatePatchTaskRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assignedToUserId** | **String** |  |  [optional] |
|**completed** | **Boolean** |  |  [optional] |
|**completionTime** | **String** |  |  [optional] |
|**contactId** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**dueTime** | **String** |  |  [optional] |
|**priority** | [**PriorityEnum**](#PriorityEnum) |  |  [optional] |
|**remindTimeMins** | **Integer** | Value in minutes before start_date to show pop-up reminder.  Acceptable values are [5,10,15,30,60,120,240,480,1440,2880] |  [optional] |
|**title** | **String** |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  [optional] |



## Enum: PriorityEnum

| Name | Value |
|---- | -----|
| CRITICAL | &quot;CRITICAL&quot; |
| ESSENTIAL | &quot;ESSENTIAL&quot; |
| NONESSENTIAL | &quot;NONESSENTIAL&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| EMAIL | &quot;EMAIL&quot; |
| CALL | &quot;CALL&quot; |
| APPOINTMENT | &quot;APPOINTMENT&quot; |
| FAX | &quot;FAX&quot; |
| LETTER | &quot;LETTER&quot; |
| OTHER | &quot;OTHER&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

