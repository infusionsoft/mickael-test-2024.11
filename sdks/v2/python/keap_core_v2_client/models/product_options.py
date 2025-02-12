# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.775756
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from keap_core_v2_client.models.product_fixed_option import ProductFixedOption
from keap_core_v2_client.models.product_variable_setting import ProductVariableSetting
from typing import Optional, Set
from typing_extensions import Self

class ProductOptions(BaseModel):
    """
    ProductOptions
    """ # noqa: E501
    fixed_options: Optional[List[ProductFixedOption]] = Field(default=None, description="List of option values for the fixed option")
    name: Optional[StrictStr] = Field(default=None, description="The option name")
    required: Optional[StrictBool] = Field(default=None, description="If the user is required to select/fill in an option for the product")
    type: Optional[StrictStr] = Field(default=None, description="Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned.")
    variable_setting: Optional[ProductVariableSetting] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["fixed_options", "name", "required", "type", "variable_setting"]

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['FIXED', 'VARIABLE']):
            raise ValueError("must be one of enum values ('FIXED', 'VARIABLE')")
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
        """Create an instance of ProductOptions from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in fixed_options (list)
        _items = []
        if self.fixed_options:
            for _item_fixed_options in self.fixed_options:
                if _item_fixed_options:
                    _items.append(_item_fixed_options.to_dict())
            _dict['fixed_options'] = _items
        # override the default output from pydantic by calling `to_dict()` of variable_setting
        if self.variable_setting:
            _dict['variable_setting'] = self.variable_setting.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ProductOptions from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "fixed_options": [ProductFixedOption.from_dict(_item) for _item in obj["fixed_options"]] if obj.get("fixed_options") is not None else None,
            "name": obj.get("name"),
            "required": obj.get("required"),
            "type": obj.get("type"),
            "variable_setting": ProductVariableSetting.from_dict(obj["variable_setting"]) if obj.get("variable_setting") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


