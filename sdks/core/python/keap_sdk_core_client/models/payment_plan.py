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

from pydantic import BaseModel, ConfigDict, StrictBool, StrictFloat, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from keap_sdk_core_client.models.rest_payment_gateway import RestPaymentGateway
from typing import Optional, Set
from typing_extensions import Self

class PaymentPlan(BaseModel):
    """
    PaymentPlan
    """ # noqa: E501
    auto_charge: Optional[StrictBool] = None
    credit_card_id: Optional[StrictStr] = None
    days_between_payments: StrictInt
    initial_payment_amount: Optional[Union[StrictFloat, StrictInt]] = None
    initial_payment_date: Optional[StrictStr] = None
    initial_payment_percent: Optional[Union[StrictFloat, StrictInt]] = None
    number_of_payments: StrictInt
    payment_gateway: Optional[RestPaymentGateway] = None
    payment_method_id: Optional[StrictStr] = None
    plan_start_date: StrictStr
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["auto_charge", "credit_card_id", "days_between_payments", "initial_payment_amount", "initial_payment_date", "initial_payment_percent", "number_of_payments", "payment_gateway", "payment_method_id", "plan_start_date"]

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
        """Create an instance of PaymentPlan from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of payment_gateway
        if self.payment_gateway:
            _dict['payment_gateway'] = self.payment_gateway.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PaymentPlan from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "auto_charge": obj.get("auto_charge"),
            "credit_card_id": obj.get("credit_card_id"),
            "days_between_payments": obj.get("days_between_payments"),
            "initial_payment_amount": obj.get("initial_payment_amount"),
            "initial_payment_date": obj.get("initial_payment_date"),
            "initial_payment_percent": obj.get("initial_payment_percent"),
            "number_of_payments": obj.get("number_of_payments"),
            "payment_gateway": RestPaymentGateway.from_dict(obj["payment_gateway"]) if obj.get("payment_gateway") is not None else None,
            "payment_method_id": obj.get("payment_method_id"),
            "plan_start_date": obj.get("plan_start_date")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


