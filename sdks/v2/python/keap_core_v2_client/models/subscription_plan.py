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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from keap_core_v2_client.models.currency_value import CurrencyValue
from typing import Optional, Set
from typing_extensions import Self

class SubscriptionPlan(BaseModel):
    """
    SubscriptionPlan
    """ # noqa: E501
    active: Optional[StrictBool] = Field(default=None, description="If the subscription plan is active or not.")
    allow_prorating: Optional[StrictBool] = Field(default=None, description="Whether or not the plan will allow prorating.")
    cycle_type: Optional[StrictStr] = Field(default=None, description="The cycle type of the subscription plan. Possible values: YEAR, MONTH, WEEK, DAY")
    display_order_index: Optional[StrictInt] = Field(default=None, description="The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list.")
    frequency: Optional[StrictInt] = Field(default=None, description="Total number of times of a cycle type which constitutes a plan cycle. Minimum value is 1.")
    id: Optional[StrictStr] = Field(default=None, description="Id of the subscription plan.")
    plan_price: Optional[CurrencyValue] = None
    product_id: Optional[StrictStr] = None
    total_cycles: Optional[StrictInt] = Field(default=None, description="Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["active", "allow_prorating", "cycle_type", "display_order_index", "frequency", "id", "plan_price", "product_id", "total_cycles"]

    @field_validator('cycle_type')
    def cycle_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY']):
            raise ValueError("must be one of enum values ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY')")
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
        """Create an instance of SubscriptionPlan from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of plan_price
        if self.plan_price:
            _dict['plan_price'] = self.plan_price.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of SubscriptionPlan from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "active": obj.get("active"),
            "allow_prorating": obj.get("allow_prorating"),
            "cycle_type": obj.get("cycle_type"),
            "display_order_index": obj.get("display_order_index"),
            "frequency": obj.get("frequency"),
            "id": obj.get("id"),
            "plan_price": CurrencyValue.from_dict(obj["plan_price"]) if obj.get("plan_price") is not None else None,
            "product_id": obj.get("product_id"),
            "total_cycles": obj.get("total_cycles")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


