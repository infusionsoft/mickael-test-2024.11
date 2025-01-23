# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.768375
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
from typing import Optional, Set
from typing_extensions import Self

class CreateEmailSentRequest(BaseModel):
    """
    CreateEmailSentRequest
    """ # noqa: E501
    clicked_time: Optional[StrictStr] = None
    contact_id: Optional[StrictStr] = None
    headers: Optional[StrictStr] = None
    html_content: Optional[StrictStr] = Field(default=None, description="Base64 encoded HTML")
    opened_time: Optional[StrictStr] = None
    original_provider: Optional[StrictStr] = Field(default=None, description="Provider that sent the email, defaults to UNKNOWN")
    original_provider_id: Optional[StrictStr] = Field(default=None, description="Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record.")
    plain_content: Optional[StrictStr] = Field(default=None, description="Base64 encoded text")
    provider_source_id: Optional[StrictStr] = Field(default=None, description="The email address of the synced email account that generated this message.")
    received_time: Optional[StrictStr] = None
    sent_from_address: Optional[StrictStr] = None
    sent_from_reply_address: Optional[StrictStr] = None
    sent_time: Optional[StrictStr] = None
    sent_to_address: StrictStr
    sent_to_bcc_address_list: Optional[List[StrictStr]] = None
    sent_to_cc_address_list: Optional[List[StrictStr]] = None
    subject: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["clicked_time", "contact_id", "headers", "html_content", "opened_time", "original_provider", "original_provider_id", "plain_content", "provider_source_id", "received_time", "sent_from_address", "sent_from_reply_address", "sent_time", "sent_to_address", "sent_to_bcc_address_list", "sent_to_cc_address_list", "subject"]

    @field_validator('original_provider')
    def original_provider_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['UNKNOWN', 'INFUSIONSOFT', 'MICROSOFT', 'GOOGLE']):
            raise ValueError("must be one of enum values ('UNKNOWN', 'INFUSIONSOFT', 'MICROSOFT', 'GOOGLE')")
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
        """Create an instance of CreateEmailSentRequest from a JSON string"""
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
        """Create an instance of CreateEmailSentRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "clicked_time": obj.get("clicked_time"),
            "contact_id": obj.get("contact_id"),
            "headers": obj.get("headers"),
            "html_content": obj.get("html_content"),
            "opened_time": obj.get("opened_time"),
            "original_provider": obj.get("original_provider"),
            "original_provider_id": obj.get("original_provider_id"),
            "plain_content": obj.get("plain_content"),
            "provider_source_id": obj.get("provider_source_id"),
            "received_time": obj.get("received_time"),
            "sent_from_address": obj.get("sent_from_address"),
            "sent_from_reply_address": obj.get("sent_from_reply_address"),
            "sent_time": obj.get("sent_time"),
            "sent_to_address": obj.get("sent_to_address"),
            "sent_to_bcc_address_list": obj.get("sent_to_bcc_address_list"),
            "sent_to_cc_address_list": obj.get("sent_to_cc_address_list"),
            "subject": obj.get("subject")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


