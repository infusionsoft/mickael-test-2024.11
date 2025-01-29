# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.770650
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class CreateUpdateTaskRequest(BaseModel):
    """
    CreateUpdateTaskRequest
    """ # noqa: E501
    assigned_to_user_id: Optional[StrictStr] = None
    completed: Optional[StrictBool] = None
    completion_time: Optional[StrictStr] = None
    contact_id: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    due_time: Optional[StrictStr] = None
    priority: Optional[StrictStr] = None
    remind_time_mins: Optional[StrictInt] = Field(default=None, description="Value in minutes before start_date to show pop-up reminder.  Acceptable values are [5,10,15,30,60,120,240,480,1440,2880]")
    title: Optional[StrictStr] = None
    type: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["assigned_to_user_id", "completed", "completion_time", "contact_id", "description", "due_time", "priority", "remind_time_mins", "title", "type"]

    @field_validator('priority')
    def priority_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['CRITICAL', 'ESSENTIAL', 'NONESSENTIAL']):
            raise ValueError("must be one of enum values ('CRITICAL', 'ESSENTIAL', 'NONESSENTIAL')")
        return value

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['EMAIL', 'CALL', 'APPOINTMENT', 'FAX', 'LETTER', 'OTHER']):
            raise ValueError("must be one of enum values ('EMAIL', 'CALL', 'APPOINTMENT', 'FAX', 'LETTER', 'OTHER')")
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of CreateUpdateTaskRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * Fields in `self.additional_properties` are added to the output dict.
        """
        excluded_fields: Set[str] = set([
            "additional_properties",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CreateUpdateTaskRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "assigned_to_user_id": obj.get("assigned_to_user_id"),
            "completed": obj.get("completed"),
            "completion_time": obj.get("completion_time"),
            "contact_id": obj.get("contact_id"),
            "description": obj.get("description"),
            "due_time": obj.get("due_time"),
            "priority": obj.get("priority"),
            "remind_time_mins": obj.get("remind_time_mins"),
            "title": obj.get("title"),
            "type": obj.get("type")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


