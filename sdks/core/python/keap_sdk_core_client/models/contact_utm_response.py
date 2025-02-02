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

from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class ContactUtmResponse(BaseModel):
    """
    ContactUtmResponse
    """ # noqa: E501
    date_created: Optional[datetime] = Field(default=None, alias="dateCreated")
    first_touch: Optional[StrictBool] = Field(default=None, alias="firstTouch")
    id: Optional[StrictInt] = None
    keap_source_id: Optional[StrictStr] = Field(default=None, alias="keapSourceId")
    last_touch: Optional[StrictBool] = Field(default=None, alias="lastTouch")
    utm_campaign: Optional[StrictStr] = Field(default=None, alias="utmCampaign")
    utm_content: Optional[StrictStr] = Field(default=None, alias="utmContent")
    utm_medium: Optional[StrictStr] = Field(default=None, alias="utmMedium")
    utm_source: Optional[StrictStr] = Field(default=None, alias="utmSource")
    utm_term: Optional[StrictStr] = Field(default=None, alias="utmTerm")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["dateCreated", "firstTouch", "id", "keapSourceId", "lastTouch", "utmCampaign", "utmContent", "utmMedium", "utmSource", "utmTerm"]

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
        """Create an instance of ContactUtmResponse from a JSON string"""
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
        """Create an instance of ContactUtmResponse from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "dateCreated": obj.get("dateCreated"),
            "firstTouch": obj.get("firstTouch"),
            "id": obj.get("id"),
            "keapSourceId": obj.get("keapSourceId"),
            "lastTouch": obj.get("lastTouch"),
            "utmCampaign": obj.get("utmCampaign"),
            "utmContent": obj.get("utmContent"),
            "utmMedium": obj.get("utmMedium"),
            "utmSource": obj.get("utmSource"),
            "utmTerm": obj.get("utmTerm")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


