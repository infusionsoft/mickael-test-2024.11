# coding: utf-8

"""
    Keap REST API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_sdk_core_client.models.application_configuration_module_contact_address_labels import ApplicationConfigurationModuleContactAddressLabels
from typing import Optional, Set
from typing_extensions import Self

class ApplicationConfigurationModuleContact(BaseModel):
    """
    ApplicationConfigurationModuleContact
    """ # noqa: E501
    address_labels: Optional[ApplicationConfigurationModuleContactAddressLabels] = None
    contact_types: Optional[StrictStr] = None
    default_new_contact_form: Optional[StrictStr] = None
    disable_contact_edit_in_client_login: Optional[StrictBool] = None
    fax_types: Optional[StrictStr] = None
    phone_types: Optional[StrictStr] = None
    suffix_types: Optional[StrictStr] = None
    title_types: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["address_labels", "contact_types", "default_new_contact_form", "disable_contact_edit_in_client_login", "fax_types", "phone_types", "suffix_types", "title_types"]

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
        """Create an instance of ApplicationConfigurationModuleContact from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of address_labels
        if self.address_labels:
            _dict['address_labels'] = self.address_labels.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ApplicationConfigurationModuleContact from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "address_labels": ApplicationConfigurationModuleContactAddressLabels.from_dict(obj["address_labels"]) if obj.get("address_labels") is not None else None,
            "contact_types": obj.get("contact_types"),
            "default_new_contact_form": obj.get("default_new_contact_form"),
            "disable_contact_edit_in_client_login": obj.get("disable_contact_edit_in_client_login"),
            "fax_types": obj.get("fax_types"),
            "phone_types": obj.get("phone_types"),
            "suffix_types": obj.get("suffix_types"),
            "title_types": obj.get("title_types")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


