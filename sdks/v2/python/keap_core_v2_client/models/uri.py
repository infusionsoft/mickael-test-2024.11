# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.778988
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

class URI(BaseModel):
    """
    URI
    """ # noqa: E501
    absolute: Optional[StrictBool] = None
    authority: Optional[StrictStr] = None
    fragment: Optional[StrictStr] = None
    host: Optional[StrictStr] = None
    opaque: Optional[StrictBool] = None
    path: Optional[StrictStr] = None
    port: Optional[StrictInt] = None
    query: Optional[StrictStr] = None
    raw_authority: Optional[StrictStr] = Field(default=None, alias="rawAuthority")
    raw_fragment: Optional[StrictStr] = Field(default=None, alias="rawFragment")
    raw_path: Optional[StrictStr] = Field(default=None, alias="rawPath")
    raw_query: Optional[StrictStr] = Field(default=None, alias="rawQuery")
    raw_scheme_specific_part: Optional[StrictStr] = Field(default=None, alias="rawSchemeSpecificPart")
    raw_user_info: Optional[StrictStr] = Field(default=None, alias="rawUserInfo")
    scheme: Optional[StrictStr] = None
    scheme_specific_part: Optional[StrictStr] = Field(default=None, alias="schemeSpecificPart")
    user_info: Optional[StrictStr] = Field(default=None, alias="userInfo")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["absolute", "authority", "fragment", "host", "opaque", "path", "port", "query", "rawAuthority", "rawFragment", "rawPath", "rawQuery", "rawSchemeSpecificPart", "rawUserInfo", "scheme", "schemeSpecificPart", "userInfo"]

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
        """Create an instance of URI from a JSON string"""
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
        """Create an instance of URI from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "absolute": obj.get("absolute"),
            "authority": obj.get("authority"),
            "fragment": obj.get("fragment"),
            "host": obj.get("host"),
            "opaque": obj.get("opaque"),
            "path": obj.get("path"),
            "port": obj.get("port"),
            "query": obj.get("query"),
            "rawAuthority": obj.get("rawAuthority"),
            "rawFragment": obj.get("rawFragment"),
            "rawPath": obj.get("rawPath"),
            "rawQuery": obj.get("rawQuery"),
            "rawSchemeSpecificPart": obj.get("rawSchemeSpecificPart"),
            "rawUserInfo": obj.get("rawUserInfo"),
            "scheme": obj.get("scheme"),
            "schemeSpecificPart": obj.get("schemeSpecificPart"),
            "userInfo": obj.get("userInfo")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


