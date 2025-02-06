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

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class CreateContactUtmPropertiesRequest(BaseModel):
    """
    CreateContactUtmPropertiesRequest
    """ # noqa: E501
    keap_source_id: StrictStr = Field(description="The formId")
    utm_campaign: Optional[StrictStr] = Field(default=None, description="UTM campaign information")
    utm_content: Optional[StrictStr] = Field(default=None, description="UTM content information")
    utm_medium: Optional[StrictStr] = Field(default=None, description="UTM medium information")
    utm_source: Optional[StrictStr] = Field(default=None, description="UTM source information")
    utm_term: Optional[StrictStr] = Field(default=None, description="UTM term information")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["keap_source_id", "utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term"]

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
        """Create an instance of CreateContactUtmPropertiesRequest from a JSON string"""
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
        """Create an instance of CreateContactUtmPropertiesRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "keap_source_id": obj.get("keap_source_id"),
            "utm_campaign": obj.get("utm_campaign"),
            "utm_content": obj.get("utm_content"),
            "utm_medium": obj.get("utm_medium"),
            "utm_source": obj.get("utm_source"),
            "utm_term": obj.get("utm_term")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


