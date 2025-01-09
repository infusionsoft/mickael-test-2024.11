# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from pydantic import BaseModel, ConfigDict, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_sdk_core_client.models.goal import Goal
from keap_sdk_core_client.models.sequence import Sequence
from typing import Optional, Set
from typing_extensions import Self

class Campaign(BaseModel):
    """
    Campaign
    """ # noqa: E501
    active_contact_count: Optional[StrictInt] = None
    completed_contact_count: Optional[StrictInt] = None
    created_by_global_id: Optional[StrictStr] = None
    date_created: Optional[StrictStr] = None
    error_message: Optional[StrictStr] = None
    goals: Optional[List[Goal]] = None
    id: Optional[StrictStr] = None
    locked: Optional[StrictBool] = None
    name: Optional[StrictStr] = None
    published_date: Optional[datetime] = None
    published_status: Optional[StrictBool] = None
    published_time_zone: Optional[StrictStr] = None
    sequences: Optional[List[Sequence]] = None
    time_zone: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["active_contact_count", "completed_contact_count", "created_by_global_id", "date_created", "error_message", "goals", "id", "locked", "name", "published_date", "published_status", "published_time_zone", "sequences", "time_zone"]

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
        """Create an instance of Campaign from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in goals (list)
        _items = []
        if self.goals:
            for _item_goals in self.goals:
                if _item_goals:
                    _items.append(_item_goals.to_dict())
            _dict['goals'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in sequences (list)
        _items = []
        if self.sequences:
            for _item_sequences in self.sequences:
                if _item_sequences:
                    _items.append(_item_sequences.to_dict())
            _dict['sequences'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Campaign from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "active_contact_count": obj.get("active_contact_count"),
            "completed_contact_count": obj.get("completed_contact_count"),
            "created_by_global_id": obj.get("created_by_global_id"),
            "date_created": obj.get("date_created"),
            "error_message": obj.get("error_message"),
            "goals": [Goal.from_dict(_item) for _item in obj["goals"]] if obj.get("goals") is not None else None,
            "id": obj.get("id"),
            "locked": obj.get("locked"),
            "name": obj.get("name"),
            "published_date": obj.get("published_date"),
            "published_status": obj.get("published_status"),
            "published_time_zone": obj.get("published_time_zone"),
            "sequences": [Sequence.from_dict(_item) for _item in obj["sequences"]] if obj.get("sequences") is not None else None,
            "time_zone": obj.get("time_zone")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


