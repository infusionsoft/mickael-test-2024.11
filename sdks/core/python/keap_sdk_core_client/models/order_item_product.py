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
from keap_sdk_core_client.models.rest_product_option import RestProductOption
from keap_sdk_core_client.models.rest_subscription_plan import RestSubscriptionPlan
from typing import Optional, Set
from typing_extensions import Self

class OrderItemProduct(BaseModel):
    """
    OrderItemProduct
    """ # noqa: E501
    created_time: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    id: Optional[StrictStr] = None
    last_updated_time: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    product_options: Optional[List[RestProductOption]] = None
    product_price: Optional[Union[StrictFloat, StrictInt]] = None
    product_short_description: Optional[StrictStr] = None
    shippable: Optional[StrictBool] = None
    sku: Optional[StrictStr] = None
    status: Optional[StrictStr] = None
    subscription_only: Optional[StrictBool] = None
    subscription_plans: Optional[List[RestSubscriptionPlan]] = None
    taxable: Optional[StrictBool] = None
    url: Optional[StrictStr] = Field(default=None, description="The url is the permalink to the resource")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["created_time", "description", "id", "last_updated_time", "name", "product_options", "product_price", "product_short_description", "shippable", "sku", "status", "subscription_only", "subscription_plans", "taxable", "url"]

    @field_validator('status')
    def status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['INACTIVE', 'ACTIVE']):
            raise ValueError("must be one of enum values ('INACTIVE', 'ACTIVE')")
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
        """Create an instance of OrderItemProduct from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in product_options (list)
        _items = []
        if self.product_options:
            for _item_product_options in self.product_options:
                if _item_product_options:
                    _items.append(_item_product_options.to_dict())
            _dict['product_options'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in subscription_plans (list)
        _items = []
        if self.subscription_plans:
            for _item_subscription_plans in self.subscription_plans:
                if _item_subscription_plans:
                    _items.append(_item_subscription_plans.to_dict())
            _dict['subscription_plans'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of OrderItemProduct from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "created_time": obj.get("created_time"),
            "description": obj.get("description"),
            "id": obj.get("id"),
            "last_updated_time": obj.get("last_updated_time"),
            "name": obj.get("name"),
            "product_options": [RestProductOption.from_dict(_item) for _item in obj["product_options"]] if obj.get("product_options") is not None else None,
            "product_price": obj.get("product_price"),
            "product_short_description": obj.get("product_short_description"),
            "shippable": obj.get("shippable"),
            "sku": obj.get("sku"),
            "status": obj.get("status"),
            "subscription_only": obj.get("subscription_only"),
            "subscription_plans": [RestSubscriptionPlan.from_dict(_item) for _item in obj["subscription_plans"]] if obj.get("subscription_plans") is not None else None,
            "taxable": obj.get("taxable"),
            "url": obj.get("url")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


