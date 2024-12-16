# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
from keap_sdk_core_client.models.discount_criteria import DiscountCriteria
from typing import Optional, Set
from typing_extensions import Self

class CreateShippingDiscountRequest(BaseModel):
    """
    CreateShippingDiscountRequest
    """ # noqa: E501
    criteria: Optional[List[DiscountCriteria]] = None
    description: Optional[StrictStr] = None
    discount_type: StrictStr
    discount_value: Union[StrictFloat, StrictInt]
    name: StrictStr
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["criteria", "description", "discount_type", "discount_value", "name"]

    @field_validator('discount_type')
    def discount_type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['AMOUNT', 'PERCENT']):
            raise ValueError("must be one of enum values ('AMOUNT', 'PERCENT')")
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
        """Create an instance of CreateShippingDiscountRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in criteria (list)
        _items = []
        if self.criteria:
            for _item_criteria in self.criteria:
                if _item_criteria:
                    _items.append(_item_criteria.to_dict())
            _dict['criteria'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CreateShippingDiscountRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "criteria": [DiscountCriteria.from_dict(_item) for _item in obj["criteria"]] if obj.get("criteria") is not None else None,
            "description": obj.get("description"),
            "discount_type": obj.get("discount_type"),
            "discount_value": obj.get("discount_value"),
            "name": obj.get("name")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


