# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.770650
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from keap_sdk_core_client.models.address import Address
from typing import Optional, Set
from typing_extensions import Self

class UpdateSubscriptionRequest(BaseModel):
    """
    UpdateSubscriptionRequest
    """ # noqa: E501
    active: Optional[StrictBool] = None
    allow_tax: Optional[StrictBool] = None
    auto_charge: Optional[StrictBool] = None
    billing_amount: Optional[Union[StrictFloat, StrictInt]] = None
    billing_cycle: Optional[StrictStr] = None
    billing_frequency: Optional[StrictInt] = None
    contact_id: Optional[StrictStr] = None
    days_between_retries: Optional[StrictInt] = None
    end_bill_date: Optional[StrictStr] = None
    lead_affiliate_id: Optional[StrictStr] = None
    max_charge_attempts: Optional[StrictInt] = None
    next_bill_date: Optional[StrictStr] = None
    payment_method_id: Optional[StrictStr] = None
    previous_bill_date: Optional[StrictStr] = None
    product_id: Optional[StrictStr] = None
    quantity: Optional[StrictInt] = None
    sale_affiliate_id: Optional[StrictStr] = None
    shipping_address: Optional[Address] = None
    start_date: Optional[StrictStr] = None
    subscription_plan_id: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["active", "allow_tax", "auto_charge", "billing_amount", "billing_cycle", "billing_frequency", "contact_id", "days_between_retries", "end_bill_date", "lead_affiliate_id", "max_charge_attempts", "next_bill_date", "payment_method_id", "previous_bill_date", "product_id", "quantity", "sale_affiliate_id", "shipping_address", "start_date", "subscription_plan_id"]

    @field_validator('billing_cycle')
    def billing_cycle_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['YEAR', 'MONTH', 'WEEK', 'DAY']):
            raise ValueError("must be one of enum values ('YEAR', 'MONTH', 'WEEK', 'DAY')")
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
        """Create an instance of UpdateSubscriptionRequest from a JSON string"""
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
        """Create an instance of UpdateSubscriptionRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "active": obj.get("active"),
            "allow_tax": obj.get("allow_tax"),
            "auto_charge": obj.get("auto_charge"),
            "billing_amount": obj.get("billing_amount"),
            "billing_cycle": obj.get("billing_cycle"),
            "billing_frequency": obj.get("billing_frequency"),
            "contact_id": obj.get("contact_id"),
            "days_between_retries": obj.get("days_between_retries"),
            "end_bill_date": obj.get("end_bill_date"),
            "lead_affiliate_id": obj.get("lead_affiliate_id"),
            "max_charge_attempts": obj.get("max_charge_attempts"),
            "next_bill_date": obj.get("next_bill_date"),
            "payment_method_id": obj.get("payment_method_id"),
            "previous_bill_date": obj.get("previous_bill_date"),
            "product_id": obj.get("product_id"),
            "quantity": obj.get("quantity"),
            "sale_affiliate_id": obj.get("sale_affiliate_id"),
            "shipping_address": Address.from_dict(obj["shipping_address"]) if obj.get("shipping_address") is not None else None,
            "start_date": obj.get("start_date"),
            "subscription_plan_id": obj.get("subscription_plan_id")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


