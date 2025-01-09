# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing import Optional, Set
from typing_extensions import Self

class DiscountCriteria(BaseModel):
    """
    DiscountCriteria
    """ # noqa: E501
    code: Optional[StrictStr] = None
    criteria_id: Optional[StrictStr] = None
    operator: Optional[StrictStr] = None
    plan_id: Optional[StrictStr] = None
    product_id: Optional[StrictStr] = None
    product_quantity_max: Optional[StrictInt] = None
    product_quantity_min: Optional[StrictInt] = None
    range_end_time: Optional[StrictStr] = None
    range_start_time: Optional[StrictStr] = None
    subscription_quantity: Optional[StrictInt] = None
    total_amount: Optional[Union[StrictFloat, StrictInt]] = None
    type: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["code", "criteria_id", "operator", "plan_id", "product_id", "product_quantity_max", "product_quantity_min", "range_end_time", "range_start_time", "subscription_quantity", "total_amount", "type"]

    @field_validator('operator')
    def operator_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['LESS_THAN', 'GREATER_THAN']):
            raise ValueError("must be one of enum values ('LESS_THAN', 'GREATER_THAN')")
        return value

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['DATE_RANGE', 'PROMO_CODE', 'PRODUCT', 'SUBSCRIPTION_PLAN', 'ORDER_TOTAL']):
            raise ValueError("must be one of enum values ('DATE_RANGE', 'PROMO_CODE', 'PRODUCT', 'SUBSCRIPTION_PLAN', 'ORDER_TOTAL')")
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
        """Create an instance of DiscountCriteria from a JSON string"""
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
        """Create an instance of DiscountCriteria from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "code": obj.get("code"),
            "criteria_id": obj.get("criteria_id"),
            "operator": obj.get("operator"),
            "plan_id": obj.get("plan_id"),
            "product_id": obj.get("product_id"),
            "product_quantity_max": obj.get("product_quantity_max"),
            "product_quantity_min": obj.get("product_quantity_min"),
            "range_end_time": obj.get("range_end_time"),
            "range_start_time": obj.get("range_start_time"),
            "subscription_quantity": obj.get("subscription_quantity"),
            "total_amount": obj.get("total_amount"),
            "type": obj.get("type")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


