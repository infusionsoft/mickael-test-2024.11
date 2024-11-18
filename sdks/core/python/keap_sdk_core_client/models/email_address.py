# coding: utf-8

"""
    Keap REST API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class EmailAddress(BaseModel):
    """
    EmailAddress
    """ # noqa: E501
    email: Optional[StrictStr] = None
    email_opt_status: Optional[StrictStr] = None
    var_field: Optional[StrictStr] = Field(default=None, alias="field")
    is_opt_in: Optional[StrictBool] = None
    opt_in_reason: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["email", "email_opt_status", "field", "is_opt_in", "opt_in_reason"]

    @field_validator('email_opt_status')
    def email_opt_status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['UNENGAGED_MARKETABLE', 'SINGLE_OPT_IN', 'DOUBLE_OPT_IN', 'CONFIRMED', 'UNENGAGED_NON_MARKETABLE', 'NON_MARKETABLE', 'LOCKDOWN', 'BOUNCE', 'HARD_BOUNCE', 'MANUAL', 'ADMIN', 'SYSTEM', 'LIST_UNSUBSCRIBE', 'FEEDBACK', 'SPAM', 'INVALID', 'DEACTIVATED']):
            raise ValueError("must be one of enum values ('UNENGAGED_MARKETABLE', 'SINGLE_OPT_IN', 'DOUBLE_OPT_IN', 'CONFIRMED', 'UNENGAGED_NON_MARKETABLE', 'NON_MARKETABLE', 'LOCKDOWN', 'BOUNCE', 'HARD_BOUNCE', 'MANUAL', 'ADMIN', 'SYSTEM', 'LIST_UNSUBSCRIBE', 'FEEDBACK', 'SPAM', 'INVALID', 'DEACTIVATED')")
        return value

    @field_validator('var_field')
    def var_field_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['EMAIL_FIELD_UNSPECIFIED', 'EMAIL1', 'EMAIL2', 'EMAIL3']):
            raise ValueError("must be one of enum values ('EMAIL_FIELD_UNSPECIFIED', 'EMAIL1', 'EMAIL2', 'EMAIL3')")
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
        """Create an instance of EmailAddress from a JSON string"""
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
        """Create an instance of EmailAddress from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "email": obj.get("email"),
            "email_opt_status": obj.get("email_opt_status"),
            "field": obj.get("field"),
            "is_opt_in": obj.get("is_opt_in"),
            "opt_in_reason": obj.get("opt_in_reason")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


