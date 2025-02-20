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

from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from keap_core_v2_client.models.address_information import AddressInformation
from typing import Optional, Set
from typing_extensions import Self

class UpdateOrderRequest(BaseModel):
    """
    UpdateOrderRequest
    """ # noqa: E501
    contact_id: Optional[StrictStr] = None
    lead_affiliate_id: Optional[StrictStr] = None
    order_time: Optional[StrictStr] = None
    order_title: Optional[StrictStr] = None
    order_type: Optional[StrictStr] = None
    promo_codes: Optional[List[StrictStr]] = Field(default=None, description="Uses multiple strings as promo codes. The corresponding discount will be applied to the order.")
    sales_affiliate_id: Optional[StrictStr] = None
    shipping_address: Optional[AddressInformation] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["contact_id", "lead_affiliate_id", "order_time", "order_title", "order_type", "promo_codes", "sales_affiliate_id", "shipping_address"]

    @field_validator('order_type')
    def order_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['OFFLINE', 'ONLINE']):
            raise ValueError("must be one of enum values ('OFFLINE', 'ONLINE')")
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
        """Create an instance of UpdateOrderRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of shipping_address
        if self.shipping_address:
            _dict['shipping_address'] = self.shipping_address.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of UpdateOrderRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "contact_id": obj.get("contact_id"),
            "lead_affiliate_id": obj.get("lead_affiliate_id"),
            "order_time": obj.get("order_time"),
            "order_title": obj.get("order_title"),
            "order_type": obj.get("order_type"),
            "promo_codes": obj.get("promo_codes"),
            "sales_affiliate_id": obj.get("sales_affiliate_id"),
            "shipping_address": AddressInformation.from_dict(obj["shipping_address"]) if obj.get("shipping_address") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


