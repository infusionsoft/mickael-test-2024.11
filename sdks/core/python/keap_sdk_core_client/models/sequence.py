# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.772488
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_sdk_core_client.models.historical_counts import HistoricalCounts
from keap_sdk_core_client.models.sequence_path import SequencePath
from typing import Optional, Set
from typing_extensions import Self

class Sequence(BaseModel):
    """
    Sequence
    """ # noqa: E501
    active_contact_count: Optional[StrictInt] = None
    active_contact_count_completed: Optional[StrictInt] = None
    historical_contact_count: Optional[HistoricalCounts] = None
    id: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    paths: Optional[List[SequencePath]] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["active_contact_count", "active_contact_count_completed", "historical_contact_count", "id", "name", "paths"]

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
        """Create an instance of Sequence from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of historical_contact_count
        if self.historical_contact_count:
            _dict['historical_contact_count'] = self.historical_contact_count.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in paths (list)
        _items = []
        if self.paths:
            for _item_paths in self.paths:
                if _item_paths:
                    _items.append(_item_paths.to_dict())
            _dict['paths'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Sequence from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "active_contact_count": obj.get("active_contact_count"),
            "active_contact_count_completed": obj.get("active_contact_count_completed"),
            "historical_contact_count": HistoricalCounts.from_dict(obj["historical_contact_count"]) if obj.get("historical_contact_count") is not None else None,
            "id": obj.get("id"),
            "name": obj.get("name"),
            "paths": [SequencePath.from_dict(_item) for _item in obj["paths"]] if obj.get("paths") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


