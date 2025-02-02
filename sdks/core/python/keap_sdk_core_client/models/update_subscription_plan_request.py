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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing import Optional, Set
from typing_extensions import Self

class UpdateSubscriptionPlanRequest(BaseModel):
    """
    UpdateSubscriptionPlanRequest
    """ # noqa: E501
    active: Optional[StrictBool] = Field(default=None, description="Whether the subscription plan is active.")
    allow_prorating: Optional[StrictBool] = Field(default=None, description="Allow prorating of the subscription plan.")
    cycle_type: StrictStr = Field(description="The cycle type of the subscription plan.")
    display_order_index: Optional[StrictInt] = Field(default=None, description="The order that this plan will be displayed to the user.")
    frequency: Optional[StrictInt] = Field(default=None, description="The frequency of the subscription plan.")
    plan_price: Union[StrictFloat, StrictInt] = Field(description="The price of the subscription plan in the smallest currency unit.")
    total_cycles: Optional[StrictInt] = Field(default=None, description="How many cycles the subscription plan will have.  0 means infinite.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["active", "allow_prorating", "cycle_type", "display_order_index", "frequency", "plan_price", "total_cycles"]

    @field_validator('cycle_type')
    def cycle_type_validate_enum(cls, value):
        """Validates the enum"""
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
        """Create an instance of UpdateSubscriptionPlanRequest from a JSON string"""
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
        """Create an instance of UpdateSubscriptionPlanRequest from a dict"""
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
            "plan_price": obj.get("plan_price"),
            "total_cycles": obj.get("total_cycles")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


