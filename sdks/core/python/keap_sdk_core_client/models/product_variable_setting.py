# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class ProductVariableSetting(BaseModel):
    """
    ProductVariableSetting
    """ # noqa: E501
    contain_spaces: Optional[StrictBool] = Field(default=None, description="If spaces are allowed for the option")
    contains: Optional[StrictStr] = Field(default=None, description="Requires the value (excluding start and end) to contain given type. Can be LETTER, NUMBER, or BOTH.")
    end_with: Optional[StrictStr] = Field(default=None, description="Requires the value to end with the given type. Can be LETTER, NUMBER, or BOTH.")
    max_chars: Optional[StrictInt] = Field(default=None, description="Max allowable chars. Its value must be greater than min_chars")
    min_chars: Optional[StrictInt] = Field(default=None, description="Minimum allowable characters")
    start_with: Optional[StrictStr] = Field(default=None, description="Requires the value to start with the given type. Can be LETTER, NUMBER, or BOTH.")
    validation_msg: Optional[StrictStr] = Field(default=None, description="Customized validation message to display when option criteria aren’t met")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["contain_spaces", "contains", "end_with", "max_chars", "min_chars", "start_with", "validation_msg"]

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
        """Create an instance of ProductVariableSetting from a JSON string"""
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
        """Create an instance of ProductVariableSetting from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "contain_spaces": obj.get("contain_spaces"),
            "contains": obj.get("contains"),
            "end_with": obj.get("end_with"),
            "max_chars": obj.get("max_chars"),
            "min_chars": obj.get("min_chars"),
            "start_with": obj.get("start_with"),
            "validation_msg": obj.get("validation_msg")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


