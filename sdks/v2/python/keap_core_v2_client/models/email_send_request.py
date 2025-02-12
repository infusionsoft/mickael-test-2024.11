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

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_core_v2_client.models.email_send_request_attachment import EmailSendRequestAttachment
from typing import Optional, Set
from typing_extensions import Self

class EmailSendRequest(BaseModel):
    """
    EmailSendRequest
    """ # noqa: E501
    address_field: Optional[StrictStr] = Field(default=None, description="Email field of each Contact record to address the email to, such as 'Email', 'EmailAddress2', 'EmailAddress3' or '_CustomFieldName', defaulting to the contact's primary email")
    attachments: Optional[List[EmailSendRequestAttachment]] = Field(default=None, description="Attachments to be sent with each copy of the email, maximum of 10 with size of 1MB each")
    contacts: List[StrictStr] = Field(description="An array of Contact Ids to receive the email")
    html_content: Optional[StrictStr] = Field(default=None, description="The HTML-formatted content of the email, encoded in Base64")
    plain_content: Optional[StrictStr] = Field(default=None, description="The plain-text content of the email, encoded in Base64")
    subject: StrictStr = Field(description="The subject line of the email")
    user_id: StrictStr = Field(description="The infusionsoft user to send the email on behalf of")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["address_field", "attachments", "contacts", "html_content", "plain_content", "subject", "user_id"]

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
        """Create an instance of EmailSendRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in attachments (list)
        _items = []
        if self.attachments:
            for _item_attachments in self.attachments:
                if _item_attachments:
                    _items.append(_item_attachments.to_dict())
            _dict['attachments'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of EmailSendRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "address_field": obj.get("address_field"),
            "attachments": [EmailSendRequestAttachment.from_dict(_item) for _item in obj["attachments"]] if obj.get("attachments") is not None else None,
            "contacts": obj.get("contacts"),
            "html_content": obj.get("html_content"),
            "plain_content": obj.get("plain_content"),
            "subject": obj.get("subject"),
            "user_id": obj.get("user_id")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


