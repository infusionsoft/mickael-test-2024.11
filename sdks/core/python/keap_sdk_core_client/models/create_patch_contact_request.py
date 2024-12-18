# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.752995
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from keap_sdk_core_client.models.address import Address
from keap_sdk_core_client.models.basic_company import BasicCompany
from keap_sdk_core_client.models.create_contact_utm_properties_request import CreateContactUtmPropertiesRequest
from keap_sdk_core_client.models.custom_field_value import CustomFieldValue
from keap_sdk_core_client.models.email_address_request import EmailAddressRequest
from keap_sdk_core_client.models.fax_number import FaxNumber
from keap_sdk_core_client.models.origin_request import OriginRequest
from keap_sdk_core_client.models.phone_number import PhoneNumber
from keap_sdk_core_client.models.social_account import SocialAccount
from typing import Optional, Set
from typing_extensions import Self

class CreatePatchContactRequest(BaseModel):
    """
    CreatePatchContactRequest
    """ # noqa: E501
    addresses: Optional[List[Address]] = Field(default=None, description="If an empty array is specified, all existing values will be removed.")
    anniversary_date: Optional[StrictStr] = None
    birth_date: Optional[StrictStr] = None
    company: Optional[BasicCompany] = None
    contact_type: Optional[StrictStr] = None
    custom_fields: Optional[List[CustomFieldValue]] = Field(default=None, description="If an empty array is specified, all existing values will be removed.")
    email_addresses: Optional[List[EmailAddressRequest]] = Field(default=None, description="If an empty array is specified, all existing values will be removed.")
    family_name: Optional[StrictStr] = None
    fax_numbers: Optional[List[FaxNumber]] = Field(default=None, description="If an empty array is specified, all existing values will be removed.")
    given_name: Optional[StrictStr] = None
    job_title: Optional[StrictStr] = None
    leadsource_id: Optional[StrictStr] = None
    middle_name: Optional[StrictStr] = None
    origin: Optional[OriginRequest] = None
    owner_id: Optional[StrictStr] = None
    phone_numbers: Optional[List[PhoneNumber]] = Field(default=None, description="If an empty array is specified, all existing values will be removed.")
    preferred_locale: Optional[StrictStr] = None
    preferred_name: Optional[StrictStr] = None
    prefix: Optional[StrictStr] = None
    referral_code: Optional[StrictStr] = None
    social_accounts: Optional[List[SocialAccount]] = Field(default=None, description="If an empty array is specified, all existing values will be removed.")
    source_type: Optional[StrictStr] = None
    spouse_name: Optional[StrictStr] = None
    suffix: Optional[StrictStr] = None
    time_zone: Optional[StrictStr] = None
    utm_parameters: Optional[CreateContactUtmPropertiesRequest] = None
    website: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["addresses", "anniversary_date", "birth_date", "company", "contact_type", "custom_fields", "email_addresses", "family_name", "fax_numbers", "given_name", "job_title", "leadsource_id", "middle_name", "origin", "owner_id", "phone_numbers", "preferred_locale", "preferred_name", "prefix", "referral_code", "social_accounts", "source_type", "spouse_name", "suffix", "time_zone", "utm_parameters", "website"]

    @field_validator('source_type')
    def source_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['SOURCE_TYPE_UNSPECIFIED', 'API', 'APPOINTMENT', 'FORM_API_HOSTED', 'FORM_API_INTERNAL', 'IMPORT', 'INTERNAL_FORM', 'LANDING_PAGE', 'MANUAL', 'OTHER', 'UNKNOWN', 'WEBFORM']):
            raise ValueError("must be one of enum values ('SOURCE_TYPE_UNSPECIFIED', 'API', 'APPOINTMENT', 'FORM_API_HOSTED', 'FORM_API_INTERNAL', 'IMPORT', 'INTERNAL_FORM', 'LANDING_PAGE', 'MANUAL', 'OTHER', 'UNKNOWN', 'WEBFORM')")
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
        """Create an instance of CreatePatchContactRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in addresses (list)
        _items = []
        if self.addresses:
            for _item_addresses in self.addresses:
                if _item_addresses:
                    _items.append(_item_addresses.to_dict())
            _dict['addresses'] = _items
        # override the default output from pydantic by calling `to_dict()` of company
        if self.company:
            _dict['company'] = self.company.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in custom_fields (list)
        _items = []
        if self.custom_fields:
            for _item_custom_fields in self.custom_fields:
                if _item_custom_fields:
                    _items.append(_item_custom_fields.to_dict())
            _dict['custom_fields'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in email_addresses (list)
        _items = []
        if self.email_addresses:
            for _item_email_addresses in self.email_addresses:
                if _item_email_addresses:
                    _items.append(_item_email_addresses.to_dict())
            _dict['email_addresses'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in fax_numbers (list)
        _items = []
        if self.fax_numbers:
            for _item_fax_numbers in self.fax_numbers:
                if _item_fax_numbers:
                    _items.append(_item_fax_numbers.to_dict())
            _dict['fax_numbers'] = _items
        # override the default output from pydantic by calling `to_dict()` of origin
        if self.origin:
            _dict['origin'] = self.origin.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in phone_numbers (list)
        _items = []
        if self.phone_numbers:
            for _item_phone_numbers in self.phone_numbers:
                if _item_phone_numbers:
                    _items.append(_item_phone_numbers.to_dict())
            _dict['phone_numbers'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in social_accounts (list)
        _items = []
        if self.social_accounts:
            for _item_social_accounts in self.social_accounts:
                if _item_social_accounts:
                    _items.append(_item_social_accounts.to_dict())
            _dict['social_accounts'] = _items
        # override the default output from pydantic by calling `to_dict()` of utm_parameters
        if self.utm_parameters:
            _dict['utm_parameters'] = self.utm_parameters.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CreatePatchContactRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "addresses": [Address.from_dict(_item) for _item in obj["addresses"]] if obj.get("addresses") is not None else None,
            "anniversary_date": obj.get("anniversary_date"),
            "birth_date": obj.get("birth_date"),
            "company": BasicCompany.from_dict(obj["company"]) if obj.get("company") is not None else None,
            "contact_type": obj.get("contact_type"),
            "custom_fields": [CustomFieldValue.from_dict(_item) for _item in obj["custom_fields"]] if obj.get("custom_fields") is not None else None,
            "email_addresses": [EmailAddressRequest.from_dict(_item) for _item in obj["email_addresses"]] if obj.get("email_addresses") is not None else None,
            "family_name": obj.get("family_name"),
            "fax_numbers": [FaxNumber.from_dict(_item) for _item in obj["fax_numbers"]] if obj.get("fax_numbers") is not None else None,
            "given_name": obj.get("given_name"),
            "job_title": obj.get("job_title"),
            "leadsource_id": obj.get("leadsource_id"),
            "middle_name": obj.get("middle_name"),
            "origin": OriginRequest.from_dict(obj["origin"]) if obj.get("origin") is not None else None,
            "owner_id": obj.get("owner_id"),
            "phone_numbers": [PhoneNumber.from_dict(_item) for _item in obj["phone_numbers"]] if obj.get("phone_numbers") is not None else None,
            "preferred_locale": obj.get("preferred_locale"),
            "preferred_name": obj.get("preferred_name"),
            "prefix": obj.get("prefix"),
            "referral_code": obj.get("referral_code"),
            "social_accounts": [SocialAccount.from_dict(_item) for _item in obj["social_accounts"]] if obj.get("social_accounts") is not None else None,
            "source_type": obj.get("source_type"),
            "spouse_name": obj.get("spouse_name"),
            "suffix": obj.get("suffix"),
            "time_zone": obj.get("time_zone"),
            "utm_parameters": CreateContactUtmPropertiesRequest.from_dict(obj["utm_parameters"]) if obj.get("utm_parameters") is not None else None,
            "website": obj.get("website")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


