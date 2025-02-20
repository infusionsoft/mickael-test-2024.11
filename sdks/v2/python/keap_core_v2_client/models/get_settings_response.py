# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.778988
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict
from typing import Any, ClassVar, Dict, List, Optional
from keap_core_v2_client.models.application_configuration_module_affiliate import ApplicationConfigurationModuleAffiliate
from keap_core_v2_client.models.application_configuration_module_application import ApplicationConfigurationModuleApplication
from keap_core_v2_client.models.application_configuration_module_appointment import ApplicationConfigurationModuleAppointment
from keap_core_v2_client.models.application_configuration_module_contact import ApplicationConfigurationModuleContact
from keap_core_v2_client.models.application_configuration_module_ecommerce import ApplicationConfigurationModuleEcommerce
from keap_core_v2_client.models.application_configuration_module_email import ApplicationConfigurationModuleEmail
from keap_core_v2_client.models.application_configuration_module_forms import ApplicationConfigurationModuleForms
from keap_core_v2_client.models.application_configuration_module_fulfillment import ApplicationConfigurationModuleFulfillment
from keap_core_v2_client.models.application_configuration_module_invoice import ApplicationConfigurationModuleInvoice
from keap_core_v2_client.models.application_configuration_module_note import ApplicationConfigurationModuleNote
from keap_core_v2_client.models.application_configuration_module_opportunity import ApplicationConfigurationModuleOpportunity
from keap_core_v2_client.models.application_configuration_module_task import ApplicationConfigurationModuleTask
from keap_core_v2_client.models.application_configuration_module_template import ApplicationConfigurationModuleTemplate
from typing import Optional, Set
from typing_extensions import Self

class GetSettingsResponse(BaseModel):
    """
    GetSettingsResponse
    """ # noqa: E501
    affiliate: Optional[ApplicationConfigurationModuleAffiliate] = None
    application: Optional[ApplicationConfigurationModuleApplication] = None
    appointment: Optional[ApplicationConfigurationModuleAppointment] = None
    contact: Optional[ApplicationConfigurationModuleContact] = None
    ecommerce: Optional[ApplicationConfigurationModuleEcommerce] = None
    email: Optional[ApplicationConfigurationModuleEmail] = None
    forms: Optional[ApplicationConfigurationModuleForms] = None
    fulfillment: Optional[ApplicationConfigurationModuleFulfillment] = None
    invoice: Optional[ApplicationConfigurationModuleInvoice] = None
    note: Optional[ApplicationConfigurationModuleNote] = None
    opportunity: Optional[ApplicationConfigurationModuleOpportunity] = None
    task: Optional[ApplicationConfigurationModuleTask] = None
    template: Optional[ApplicationConfigurationModuleTemplate] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["affiliate", "application", "appointment", "contact", "ecommerce", "email", "forms", "fulfillment", "invoice", "note", "opportunity", "task", "template"]

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
        """Create an instance of GetSettingsResponse from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of affiliate
        if self.affiliate:
            _dict['affiliate'] = self.affiliate.to_dict()
        # override the default output from pydantic by calling `to_dict()` of application
        if self.application:
            _dict['application'] = self.application.to_dict()
        # override the default output from pydantic by calling `to_dict()` of appointment
        if self.appointment:
            _dict['appointment'] = self.appointment.to_dict()
        # override the default output from pydantic by calling `to_dict()` of contact
        if self.contact:
            _dict['contact'] = self.contact.to_dict()
        # override the default output from pydantic by calling `to_dict()` of ecommerce
        if self.ecommerce:
            _dict['ecommerce'] = self.ecommerce.to_dict()
        # override the default output from pydantic by calling `to_dict()` of email
        if self.email:
            _dict['email'] = self.email.to_dict()
        # override the default output from pydantic by calling `to_dict()` of forms
        if self.forms:
            _dict['forms'] = self.forms.to_dict()
        # override the default output from pydantic by calling `to_dict()` of fulfillment
        if self.fulfillment:
            _dict['fulfillment'] = self.fulfillment.to_dict()
        # override the default output from pydantic by calling `to_dict()` of invoice
        if self.invoice:
            _dict['invoice'] = self.invoice.to_dict()
        # override the default output from pydantic by calling `to_dict()` of note
        if self.note:
            _dict['note'] = self.note.to_dict()
        # override the default output from pydantic by calling `to_dict()` of opportunity
        if self.opportunity:
            _dict['opportunity'] = self.opportunity.to_dict()
        # override the default output from pydantic by calling `to_dict()` of task
        if self.task:
            _dict['task'] = self.task.to_dict()
        # override the default output from pydantic by calling `to_dict()` of template
        if self.template:
            _dict['template'] = self.template.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of GetSettingsResponse from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "affiliate": ApplicationConfigurationModuleAffiliate.from_dict(obj["affiliate"]) if obj.get("affiliate") is not None else None,
            "application": ApplicationConfigurationModuleApplication.from_dict(obj["application"]) if obj.get("application") is not None else None,
            "appointment": ApplicationConfigurationModuleAppointment.from_dict(obj["appointment"]) if obj.get("appointment") is not None else None,
            "contact": ApplicationConfigurationModuleContact.from_dict(obj["contact"]) if obj.get("contact") is not None else None,
            "ecommerce": ApplicationConfigurationModuleEcommerce.from_dict(obj["ecommerce"]) if obj.get("ecommerce") is not None else None,
            "email": ApplicationConfigurationModuleEmail.from_dict(obj["email"]) if obj.get("email") is not None else None,
            "forms": ApplicationConfigurationModuleForms.from_dict(obj["forms"]) if obj.get("forms") is not None else None,
            "fulfillment": ApplicationConfigurationModuleFulfillment.from_dict(obj["fulfillment"]) if obj.get("fulfillment") is not None else None,
            "invoice": ApplicationConfigurationModuleInvoice.from_dict(obj["invoice"]) if obj.get("invoice") is not None else None,
            "note": ApplicationConfigurationModuleNote.from_dict(obj["note"]) if obj.get("note") is not None else None,
            "opportunity": ApplicationConfigurationModuleOpportunity.from_dict(obj["opportunity"]) if obj.get("opportunity") is not None else None,
            "task": ApplicationConfigurationModuleTask.from_dict(obj["task"]) if obj.get("task") is not None else None,
            "template": ApplicationConfigurationModuleTemplate.from_dict(obj["template"]) if obj.get("template") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


