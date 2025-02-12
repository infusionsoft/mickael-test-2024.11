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

from pydantic import BaseModel, ConfigDict, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from keap_core_v2_client.models.basic_contact import BasicContact
from keap_core_v2_client.models.payment_plan import PaymentPlan
from keap_core_v2_client.models.rest_v2_order_item import RestV2OrderItem
from keap_core_v2_client.models.shipping_information import ShippingInformation
from typing import Optional, Set
from typing_extensions import Self

class RestV2Order(BaseModel):
    """
    RestV2Order
    """ # noqa: E501
    allow_payment: Optional[StrictBool] = None
    allow_paypal: Optional[StrictBool] = None
    contact: Optional[BasicContact] = None
    creation_time: Optional[StrictStr] = None
    id: Optional[StrictStr] = None
    invoice_number: Optional[StrictStr] = None
    lead_affiliate_id: Optional[StrictStr] = None
    modification_time: Optional[StrictStr] = None
    notes: Optional[StrictStr] = None
    order_items: Optional[List[RestV2OrderItem]] = None
    order_time: Optional[StrictStr] = None
    order_type: Optional[StrictStr] = None
    payment_plan: Optional[PaymentPlan] = None
    recurring: Optional[StrictBool] = None
    refund_total: Optional[Union[StrictFloat, StrictInt]] = None
    sales_affiliate_id: Optional[StrictStr] = None
    shipping_information: Optional[ShippingInformation] = None
    source_type: Optional[StrictStr] = None
    status: Optional[StrictStr] = None
    terms: Optional[StrictStr] = None
    title: Optional[StrictStr] = None
    total: Optional[Union[StrictFloat, StrictInt]] = None
    total_due: Optional[Union[StrictFloat, StrictInt]] = None
    total_paid: Optional[Union[StrictFloat, StrictInt]] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["allow_payment", "allow_paypal", "contact", "creation_time", "id", "invoice_number", "lead_affiliate_id", "modification_time", "notes", "order_items", "order_time", "order_type", "payment_plan", "recurring", "refund_total", "sales_affiliate_id", "shipping_information", "source_type", "status", "terms", "title", "total", "total_due", "total_paid"]

    @field_validator('source_type')
    def source_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['INVOICE', 'API', 'CHECKOUT_FORM', 'MANUAL_PAYMENT', 'UNKNOWN', 'QBO_SYNC']):
            raise ValueError("must be one of enum values ('INVOICE', 'API', 'CHECKOUT_FORM', 'MANUAL_PAYMENT', 'UNKNOWN', 'QBO_SYNC')")
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
        """Create an instance of RestV2Order from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of contact
        if self.contact:
            _dict['contact'] = self.contact.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in order_items (list)
        _items = []
        if self.order_items:
            for _item_order_items in self.order_items:
                if _item_order_items:
                    _items.append(_item_order_items.to_dict())
            _dict['order_items'] = _items
        # override the default output from pydantic by calling `to_dict()` of payment_plan
        if self.payment_plan:
            _dict['payment_plan'] = self.payment_plan.to_dict()
        # override the default output from pydantic by calling `to_dict()` of shipping_information
        if self.shipping_information:
            _dict['shipping_information'] = self.shipping_information.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of RestV2Order from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "allow_payment": obj.get("allow_payment"),
            "allow_paypal": obj.get("allow_paypal"),
            "contact": BasicContact.from_dict(obj["contact"]) if obj.get("contact") is not None else None,
            "creation_time": obj.get("creation_time"),
            "id": obj.get("id"),
            "invoice_number": obj.get("invoice_number"),
            "lead_affiliate_id": obj.get("lead_affiliate_id"),
            "modification_time": obj.get("modification_time"),
            "notes": obj.get("notes"),
            "order_items": [RestV2OrderItem.from_dict(_item) for _item in obj["order_items"]] if obj.get("order_items") is not None else None,
            "order_time": obj.get("order_time"),
            "order_type": obj.get("order_type"),
            "payment_plan": PaymentPlan.from_dict(obj["payment_plan"]) if obj.get("payment_plan") is not None else None,
            "recurring": obj.get("recurring"),
            "refund_total": obj.get("refund_total"),
            "sales_affiliate_id": obj.get("sales_affiliate_id"),
            "shipping_information": ShippingInformation.from_dict(obj["shipping_information"]) if obj.get("shipping_information") is not None else None,
            "source_type": obj.get("source_type"),
            "status": obj.get("status"),
            "terms": obj.get("terms"),
            "title": obj.get("title"),
            "total": obj.get("total"),
            "total_due": obj.get("total_due"),
            "total_paid": obj.get("total_paid")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


