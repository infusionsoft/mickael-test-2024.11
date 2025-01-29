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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from keap_sdk_core_client.models.discount import Discount
from keap_sdk_core_client.models.order_item_product import OrderItemProduct
from keap_sdk_core_client.models.order_item_tax import OrderItemTax
from keap_sdk_core_client.models.rest_subscription_plan import RestSubscriptionPlan
from keap_sdk_core_client.models.rest_v2_subscription import RestV2Subscription
from typing import Optional, Set
from typing_extensions import Self

class RestV2OrderItem(BaseModel):
    """
    RestV2OrderItem
    """ # noqa: E501
    billing_cycle: Optional[StrictInt] = None
    cost: Optional[Union[StrictFloat, StrictInt]] = None
    cycle: Optional[StrictStr] = Field(default=None, description="The interval at which the customer is charged for the subscription.")
    description: Optional[StrictStr] = None
    discount: Optional[Union[StrictFloat, StrictInt]] = None
    frequency: Optional[StrictInt] = Field(default=None, description="Interval at which a customer receives a product or service as part of a subscription plan.")
    id: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    notes: Optional[StrictStr] = None
    number_of_payments: Optional[StrictInt] = None
    order_item_taxes: Optional[List[OrderItemTax]] = None
    price: Optional[Union[StrictFloat, StrictInt]] = None
    product: Optional[OrderItemProduct] = None
    quantity: Optional[StrictInt] = None
    special: Optional[Discount] = None
    subscription: Optional[RestV2Subscription] = None
    subscription_based: Optional[StrictBool] = None
    subscription_id: Optional[StrictStr] = None
    subscription_plan: Optional[RestSubscriptionPlan] = None
    type: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["billing_cycle", "cost", "cycle", "description", "discount", "frequency", "id", "name", "notes", "number_of_payments", "order_item_taxes", "price", "product", "quantity", "special", "subscription", "subscription_based", "subscription_id", "subscription_plan", "type"]

    @field_validator('cycle')
    def cycle_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY']):
            raise ValueError("must be one of enum values ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY')")
        return value

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['UNKNOWN', 'SHIPPING', 'TAX', 'SERVICE', 'PRODUCT', 'UPSELL', 'FINANCE_CHARGE', 'SPECIAL', 'PROGRAM', 'SUBSCRIPTION', 'SPECIAL_FREE_TRIAL_DAYS', 'SPECIAL_ORDER_TOTAL', 'SPECIAL_PRODUCT', 'SPECIAL_CATEGORY', 'SPECIAL_SHIPPING', 'TIP', 'OTHER']):
            raise ValueError("must be one of enum values ('UNKNOWN', 'SHIPPING', 'TAX', 'SERVICE', 'PRODUCT', 'UPSELL', 'FINANCE_CHARGE', 'SPECIAL', 'PROGRAM', 'SUBSCRIPTION', 'SPECIAL_FREE_TRIAL_DAYS', 'SPECIAL_ORDER_TOTAL', 'SPECIAL_PRODUCT', 'SPECIAL_CATEGORY', 'SPECIAL_SHIPPING', 'TIP', 'OTHER')")
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
        """Create an instance of RestV2OrderItem from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in order_item_taxes (list)
        _items = []
        if self.order_item_taxes:
            for _item_order_item_taxes in self.order_item_taxes:
                if _item_order_item_taxes:
                    _items.append(_item_order_item_taxes.to_dict())
            _dict['order_item_taxes'] = _items
        # override the default output from pydantic by calling `to_dict()` of product
        if self.product:
            _dict['product'] = self.product.to_dict()
        # override the default output from pydantic by calling `to_dict()` of special
        if self.special:
            _dict['special'] = self.special.to_dict()
        # override the default output from pydantic by calling `to_dict()` of subscription
        if self.subscription:
            _dict['subscription'] = self.subscription.to_dict()
        # override the default output from pydantic by calling `to_dict()` of subscription_plan
        if self.subscription_plan:
            _dict['subscription_plan'] = self.subscription_plan.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of RestV2OrderItem from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "billing_cycle": obj.get("billing_cycle"),
            "cost": obj.get("cost"),
            "cycle": obj.get("cycle"),
            "description": obj.get("description"),
            "discount": obj.get("discount"),
            "frequency": obj.get("frequency"),
            "id": obj.get("id"),
            "name": obj.get("name"),
            "notes": obj.get("notes"),
            "number_of_payments": obj.get("number_of_payments"),
            "order_item_taxes": [OrderItemTax.from_dict(_item) for _item in obj["order_item_taxes"]] if obj.get("order_item_taxes") is not None else None,
            "price": obj.get("price"),
            "product": OrderItemProduct.from_dict(obj["product"]) if obj.get("product") is not None else None,
            "quantity": obj.get("quantity"),
            "special": Discount.from_dict(obj["special"]) if obj.get("special") is not None else None,
            "subscription": RestV2Subscription.from_dict(obj["subscription"]) if obj.get("subscription") is not None else None,
            "subscription_based": obj.get("subscription_based"),
            "subscription_id": obj.get("subscription_id"),
            "subscription_plan": RestSubscriptionPlan.from_dict(obj["subscription_plan"]) if obj.get("subscription_plan") is not None else None,
            "type": obj.get("type")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


