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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_sdk_core_client.models.funnel_integration_schema_field import FunnelIntegrationSchemaField
from typing import Optional, Set
from typing_extensions import Self

class FunnelIntegrationAction(BaseModel):
    """
    FunnelIntegrationAction
    """ # noqa: E501
    base_url: Optional[StrictStr] = Field(default=None, description="The base URL of the trigger, that will be used to call the integration related REST endpoints.")
    context: Optional[StrictStr] = Field(default=None, description="The context of the trigger, that will be used internally to identify the integration.")
    enabled: Optional[StrictBool] = Field(default=None, description="The flag to enable or disable the integration trigger.")
    icon_url: Optional[StrictStr] = Field(default=None, description="The icon URL of the trigger, that will be used to display the icon of this specific integration trigger.")
    name: Optional[StrictStr] = Field(default=None, description="The name of the trigger, that will be used internally to identify and initiate the trigger.")
    schema_fields: Optional[List[FunnelIntegrationSchemaField]] = Field(default=None, description="The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["base_url", "context", "enabled", "icon_url", "name", "schema_fields"]

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
        """Create an instance of FunnelIntegrationAction from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in schema_fields (list)
        _items = []
        if self.schema_fields:
            for _item_schema_fields in self.schema_fields:
                if _item_schema_fields:
                    _items.append(_item_schema_fields.to_dict())
            _dict['schema_fields'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of FunnelIntegrationAction from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "base_url": obj.get("base_url"),
            "context": obj.get("context"),
            "enabled": obj.get("enabled"),
            "icon_url": obj.get("icon_url"),
            "name": obj.get("name"),
            "schema_fields": [FunnelIntegrationSchemaField.from_dict(_item) for _item in obj["schema_fields"]] if obj.get("schema_fields") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


