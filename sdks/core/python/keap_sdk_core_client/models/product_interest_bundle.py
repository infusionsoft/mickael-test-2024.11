# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_sdk_core_client.models.product_interest import ProductInterest
from keap_sdk_core_client.models.subscription_plan_interest import SubscriptionPlanInterest
from typing import Optional, Set
from typing_extensions import Self

class ProductInterestBundle(BaseModel):
    """
    ProductInterestBundle
    """ # noqa: E501
    description: Optional[StrictStr] = Field(default=None, description="Product interest bundle description")
    id: Optional[StrictStr] = Field(default=None, description="The product interest bundle ID")
    name: Optional[StrictStr] = Field(default=None, description="Product interest bundle name")
    product_interests: Optional[List[ProductInterest]] = Field(default=None, description="Product interests")
    subscription_plan_interests: Optional[List[SubscriptionPlanInterest]] = Field(default=None, description="Subscription plan interests")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["description", "id", "name", "product_interests", "subscription_plan_interests"]

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
        """Create an instance of ProductInterestBundle from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in product_interests (list)
        _items = []
        if self.product_interests:
            for _item_product_interests in self.product_interests:
                if _item_product_interests:
                    _items.append(_item_product_interests.to_dict())
            _dict['product_interests'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in subscription_plan_interests (list)
        _items = []
        if self.subscription_plan_interests:
            for _item_subscription_plan_interests in self.subscription_plan_interests:
                if _item_subscription_plan_interests:
                    _items.append(_item_subscription_plan_interests.to_dict())
            _dict['subscription_plan_interests'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ProductInterestBundle from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "description": obj.get("description"),
            "id": obj.get("id"),
            "name": obj.get("name"),
            "product_interests": [ProductInterest.from_dict(_item) for _item in obj["product_interests"]] if obj.get("product_interests") is not None else None,
            "subscription_plan_interests": [SubscriptionPlanInterest.from_dict(_item) for _item in obj["subscription_plan_interests"]] if obj.get("subscription_plan_interests") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


