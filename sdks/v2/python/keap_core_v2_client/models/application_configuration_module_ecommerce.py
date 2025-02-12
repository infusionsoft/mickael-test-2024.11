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

from pydantic import BaseModel, ConfigDict, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class ApplicationConfigurationModuleEcommerce(BaseModel):
    """
    ApplicationConfigurationModuleEcommerce
    """ # noqa: E501
    credit_card_types: Optional[StrictStr] = None
    currency: Optional[StrictStr] = None
    default_charge_max_retry_attempts: Optional[StrictInt] = None
    default_country: Optional[StrictStr] = None
    default_merchant: Optional[StrictStr] = None
    default_number_of_days_between_charge_attempts: Optional[StrictInt] = None
    default_tax: Optional[StrictStr] = None
    default_to_auto_charge: Optional[StrictBool] = None
    merchant_account_max_retry_attempts: Optional[StrictInt] = None
    payment_types: Optional[StrictStr] = None
    promo_codes: Optional[StrictStr] = None
    track_cost_per_unit: Optional[StrictBool] = None
    track_inventory: Optional[StrictBool] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["credit_card_types", "currency", "default_charge_max_retry_attempts", "default_country", "default_merchant", "default_number_of_days_between_charge_attempts", "default_tax", "default_to_auto_charge", "merchant_account_max_retry_attempts", "payment_types", "promo_codes", "track_cost_per_unit", "track_inventory"]

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
        """Create an instance of ApplicationConfigurationModuleEcommerce from a JSON string"""
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
        """Create an instance of ApplicationConfigurationModuleEcommerce from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "credit_card_types": obj.get("credit_card_types"),
            "currency": obj.get("currency"),
            "default_charge_max_retry_attempts": obj.get("default_charge_max_retry_attempts"),
            "default_country": obj.get("default_country"),
            "default_merchant": obj.get("default_merchant"),
            "default_number_of_days_between_charge_attempts": obj.get("default_number_of_days_between_charge_attempts"),
            "default_tax": obj.get("default_tax"),
            "default_to_auto_charge": obj.get("default_to_auto_charge"),
            "merchant_account_max_retry_attempts": obj.get("merchant_account_max_retry_attempts"),
            "payment_types": obj.get("payment_types"),
            "promo_codes": obj.get("promo_codes"),
            "track_cost_per_unit": obj.get("track_cost_per_unit"),
            "track_inventory": obj.get("track_inventory")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


