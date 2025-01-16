# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.764128
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_sdk_core_client.models.stack_trace_element import StackTraceElement
from typing import Optional, Set
from typing_extensions import Self

class Throwable(BaseModel):
    """
    Throwable
    """ # noqa: E501
    cause: Optional[Throwable] = None
    localized_message: Optional[StrictStr] = Field(default=None, alias="localizedMessage")
    message: Optional[StrictStr] = None
    stack_trace: Optional[List[StackTraceElement]] = Field(default=None, alias="stackTrace")
    suppressed: Optional[List[Throwable]] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["cause", "localizedMessage", "message", "stackTrace", "suppressed"]

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
        """Create an instance of Throwable from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of cause
        if self.cause:
            _dict['cause'] = self.cause.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in stack_trace (list)
        _items = []
        if self.stack_trace:
            for _item_stack_trace in self.stack_trace:
                if _item_stack_trace:
                    _items.append(_item_stack_trace.to_dict())
            _dict['stackTrace'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in suppressed (list)
        _items = []
        if self.suppressed:
            for _item_suppressed in self.suppressed:
                if _item_suppressed:
                    _items.append(_item_suppressed.to_dict())
            _dict['suppressed'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Throwable from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "cause": Throwable.from_dict(obj["cause"]) if obj.get("cause") is not None else None,
            "localizedMessage": obj.get("localizedMessage"),
            "message": obj.get("message"),
            "stackTrace": [StackTraceElement.from_dict(_item) for _item in obj["stackTrace"]] if obj.get("stackTrace") is not None else None,
            "suppressed": [Throwable.from_dict(_item) for _item in obj["suppressed"]] if obj.get("suppressed") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj

# TODO: Rewrite to not use raise_errors
Throwable.model_rebuild(raise_errors=False)

