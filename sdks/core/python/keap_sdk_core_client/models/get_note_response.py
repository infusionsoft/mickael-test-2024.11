# coding: utf-8

"""
    Keap REST API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_sdk_core_client.models.basic_user import BasicUser
from typing import Optional, Set
from typing_extensions import Self

class GetNoteResponse(BaseModel):
    """
    GetNoteResponse
    """ # noqa: E501
    assigned_to_user: Optional[BasicUser] = None
    contact_id: Optional[StrictStr] = None
    create_time: Optional[StrictStr] = None
    id: Optional[StrictStr] = None
    last_updated_by_user_id: Optional[StrictStr] = None
    text: Optional[StrictStr] = None
    title: Optional[StrictStr] = None
    type: Optional[StrictStr] = None
    update_time: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["assigned_to_user", "contact_id", "create_time", "id", "last_updated_by_user_id", "text", "title", "type", "update_time"]

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
        """Create an instance of GetNoteResponse from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of assigned_to_user
        if self.assigned_to_user:
            _dict['assigned_to_user'] = self.assigned_to_user.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of GetNoteResponse from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "assigned_to_user": BasicUser.from_dict(obj["assigned_to_user"]) if obj.get("assigned_to_user") is not None else None,
            "contact_id": obj.get("contact_id"),
            "create_time": obj.get("create_time"),
            "id": obj.get("id"),
            "last_updated_by_user_id": obj.get("last_updated_by_user_id"),
            "text": obj.get("text"),
            "title": obj.get("title"),
            "type": obj.get("type"),
            "update_time": obj.get("update_time")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


