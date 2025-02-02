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

class File(BaseModel):
    """
    File
    """ # noqa: E501
    absolute: Optional[StrictBool] = None
    absolute_file: Optional[File] = Field(default=None, alias="absoluteFile")
    absolute_path: Optional[StrictStr] = Field(default=None, alias="absolutePath")
    canonical_file: Optional[File] = Field(default=None, alias="canonicalFile")
    canonical_path: Optional[StrictStr] = Field(default=None, alias="canonicalPath")
    directory: Optional[StrictBool] = None
    executable: Optional[StrictBool] = None
    file: Optional[StrictBool] = None
    free_space: Optional[StrictInt] = Field(default=None, alias="freeSpace")
    hidden: Optional[StrictBool] = None
    last_modified: Optional[StrictInt] = Field(default=None, alias="lastModified")
    name: Optional[StrictStr] = None
    parent: Optional[StrictStr] = None
    parent_file: Optional[File] = Field(default=None, alias="parentFile")
    path: Optional[StrictStr] = None
    readable: Optional[StrictBool] = None
    total_space: Optional[StrictInt] = Field(default=None, alias="totalSpace")
    usable_space: Optional[StrictInt] = Field(default=None, alias="usableSpace")
    writable: Optional[StrictBool] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["absolute", "absoluteFile", "absolutePath", "canonicalFile", "canonicalPath", "directory", "executable", "file", "freeSpace", "hidden", "lastModified", "name", "parent", "parentFile", "path", "readable", "totalSpace", "usableSpace", "writable"]

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
        """Create an instance of File from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of absolute_file
        if self.absolute_file:
            _dict['absoluteFile'] = self.absolute_file.to_dict()
        # override the default output from pydantic by calling `to_dict()` of canonical_file
        if self.canonical_file:
            _dict['canonicalFile'] = self.canonical_file.to_dict()
        # override the default output from pydantic by calling `to_dict()` of parent_file
        if self.parent_file:
            _dict['parentFile'] = self.parent_file.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of File from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "absolute": obj.get("absolute"),
            "absoluteFile": File.from_dict(obj["absoluteFile"]) if obj.get("absoluteFile") is not None else None,
            "absolutePath": obj.get("absolutePath"),
            "canonicalFile": File.from_dict(obj["canonicalFile"]) if obj.get("canonicalFile") is not None else None,
            "canonicalPath": obj.get("canonicalPath"),
            "directory": obj.get("directory"),
            "executable": obj.get("executable"),
            "file": obj.get("file"),
            "freeSpace": obj.get("freeSpace"),
            "hidden": obj.get("hidden"),
            "lastModified": obj.get("lastModified"),
            "name": obj.get("name"),
            "parent": obj.get("parent"),
            "parentFile": File.from_dict(obj["parentFile"]) if obj.get("parentFile") is not None else None,
            "path": obj.get("path"),
            "readable": obj.get("readable"),
            "totalSpace": obj.get("totalSpace"),
            "usableSpace": obj.get("usableSpace"),
            "writable": obj.get("writable")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj

# TODO: Rewrite to not use raise_errors
File.model_rebuild(raise_errors=False)

