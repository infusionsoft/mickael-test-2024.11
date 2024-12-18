# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.752995
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
from keap_sdk_core_client.models.business_profile_address_request import BusinessProfileAddressRequest
from typing import Optional, Set
from typing_extensions import Self

class PatchBusinessProfileRequest(BaseModel):
    """
    Update profile information about the business that owns/uses this account
    """ # noqa: E501
    address: Optional[BusinessProfileAddressRequest] = None
    business_goals: Optional[List[StrictStr]] = Field(default=None, description="The goals of this business, ie. Grow Business, Convert more leads")
    business_primary_color: Optional[StrictStr] = None
    business_secondary_color: Optional[StrictStr] = None
    currency_code: Optional[StrictStr] = Field(default=None, description="ISO 4217 Currency Code")
    email: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    phone: Optional[StrictStr] = None
    website: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["address", "business_goals", "business_primary_color", "business_secondary_color", "currency_code", "email", "name", "phone", "website"]

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
        """Create an instance of PatchBusinessProfileRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of address
        if self.address:
            _dict['address'] = self.address.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PatchBusinessProfileRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "address": BusinessProfileAddressRequest.from_dict(obj["address"]) if obj.get("address") is not None else None,
            "business_goals": obj.get("business_goals"),
            "business_primary_color": obj.get("business_primary_color"),
            "business_secondary_color": obj.get("business_secondary_color"),
            "currency_code": obj.get("currency_code"),
            "email": obj.get("email"),
            "name": obj.get("name"),
            "phone": obj.get("phone"),
            "website": obj.get("website")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


