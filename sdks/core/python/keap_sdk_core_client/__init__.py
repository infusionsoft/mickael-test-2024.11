# coding: utf-8

# flake8: noqa

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.768375
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

__version__ = "0.0.106"

# import apis into sdk package
from keap_sdk_core_client.api.affiliate_api import AffiliateApi
from keap_sdk_core_client.api.automation_api import AutomationApi
from keap_sdk_core_client.api.automation_category_api import AutomationCategoryApi
from keap_sdk_core_client.api.business_profile_api import BusinessProfileApi
from keap_sdk_core_client.api.campaign_api import CampaignApi
from keap_sdk_core_client.api.company_api import CompanyApi
from keap_sdk_core_client.api.contact_api import ContactApi
from keap_sdk_core_client.api.deals_api import DealsApi
from keap_sdk_core_client.api.email_api import EmailApi
from keap_sdk_core_client.api.email_address_api import EmailAddressApi
from keap_sdk_core_client.api.note_api import NoteApi
from keap_sdk_core_client.api.payment_method_config_api import PaymentMethodConfigApi
from keap_sdk_core_client.api.pipelines_api import PipelinesApi
from keap_sdk_core_client.api.reporting_api import ReportingApi
from keap_sdk_core_client.api.sales_api import SalesApi
from keap_sdk_core_client.api.settings_api import SettingsApi
from keap_sdk_core_client.api.stages_api import StagesApi
from keap_sdk_core_client.api.subscriptions_api import SubscriptionsApi
from keap_sdk_core_client.api.tags_api import TagsApi

# import ApiClient
from keap_sdk_core_client.api_response import ApiResponse
from keap_sdk_core_client.api_client import ApiClient
from keap_sdk_core_client.configuration import Configuration
from keap_sdk_core_client.exceptions import OpenApiException
from keap_sdk_core_client.exceptions import ApiTypeError
from keap_sdk_core_client.exceptions import ApiValueError
from keap_sdk_core_client.exceptions import ApiKeyError
from keap_sdk_core_client.exceptions import ApiAttributeError
from keap_sdk_core_client.exceptions import ApiException

# import models into sdk package
from keap_sdk_core_client.models.add_contacts_to_sequence_request import AddContactsToSequenceRequest
from keap_sdk_core_client.models.add_contacts_to_sequence_response import AddContactsToSequenceResponse
from keap_sdk_core_client.models.add_to_automation_sequence_request import AddToAutomationSequenceRequest
from keap_sdk_core_client.models.add_to_automation_sequence_response import AddToAutomationSequenceResponse
from keap_sdk_core_client.models.address import Address
from keap_sdk_core_client.models.address_information import AddressInformation
from keap_sdk_core_client.models.affiliate_add_to_program_request import AffiliateAddToProgramRequest
from keap_sdk_core_client.models.affiliate_commission import AffiliateCommission
from keap_sdk_core_client.models.affiliate_commission_earned import AffiliateCommissionEarned
from keap_sdk_core_client.models.affiliate_commission_program_response import AffiliateCommissionProgramResponse
from keap_sdk_core_client.models.affiliate_link import AffiliateLink
from keap_sdk_core_client.models.affiliate_program_v2 import AffiliateProgramV2
from keap_sdk_core_client.models.affiliate_remove_from_program_request import AffiliateRemoveFromProgramRequest
from keap_sdk_core_client.models.affiliate_summary_record import AffiliateSummaryRecord
from keap_sdk_core_client.models.application_company import ApplicationCompany
from keap_sdk_core_client.models.application_configuration_module_affiliate import ApplicationConfigurationModuleAffiliate
from keap_sdk_core_client.models.application_configuration_module_affiliate_commission import ApplicationConfigurationModuleAffiliateCommission
from keap_sdk_core_client.models.application_configuration_module_application import ApplicationConfigurationModuleApplication
from keap_sdk_core_client.models.application_configuration_module_appointment import ApplicationConfigurationModuleAppointment
from keap_sdk_core_client.models.application_configuration_module_contact import ApplicationConfigurationModuleContact
from keap_sdk_core_client.models.application_configuration_module_contact_address_labels import ApplicationConfigurationModuleContactAddressLabels
from keap_sdk_core_client.models.application_configuration_module_ecommerce import ApplicationConfigurationModuleEcommerce
from keap_sdk_core_client.models.application_configuration_module_email import ApplicationConfigurationModuleEmail
from keap_sdk_core_client.models.application_configuration_module_forms import ApplicationConfigurationModuleForms
from keap_sdk_core_client.models.application_configuration_module_fulfillment import ApplicationConfigurationModuleFulfillment
from keap_sdk_core_client.models.application_configuration_module_invoice import ApplicationConfigurationModuleInvoice
from keap_sdk_core_client.models.application_configuration_module_note import ApplicationConfigurationModuleNote
from keap_sdk_core_client.models.application_configuration_module_opportunity import ApplicationConfigurationModuleOpportunity
from keap_sdk_core_client.models.application_configuration_module_opportunity_states import ApplicationConfigurationModuleOpportunityStates
from keap_sdk_core_client.models.application_configuration_module_opportunity_states_active import ApplicationConfigurationModuleOpportunityStatesActive
from keap_sdk_core_client.models.application_configuration_module_opportunity_states_loss import ApplicationConfigurationModuleOpportunityStatesLoss
from keap_sdk_core_client.models.application_configuration_module_opportunity_states_win import ApplicationConfigurationModuleOpportunityStatesWin
from keap_sdk_core_client.models.application_configuration_module_task import ApplicationConfigurationModuleTask
from keap_sdk_core_client.models.application_configuration_module_template import ApplicationConfigurationModuleTemplate
from keap_sdk_core_client.models.application_features_enabled import ApplicationFeaturesEnabled
from keap_sdk_core_client.models.apply_remove_tag_request import ApplyRemoveTagRequest
from keap_sdk_core_client.models.apply_tags_response import ApplyTagsResponse
from keap_sdk_core_client.models.assign_product_categories_request import AssignProductCategoriesRequest
from keap_sdk_core_client.models.assign_products_request import AssignProductsRequest
from keap_sdk_core_client.models.automation import Automation
from keap_sdk_core_client.models.automation_category import AutomationCategory
from keap_sdk_core_client.models.automation_lock_status import AutomationLockStatus
from keap_sdk_core_client.models.base_list_response_deal import BaseListResponseDeal
from keap_sdk_core_client.models.base_list_response_deal_note import BaseListResponseDealNote
from keap_sdk_core_client.models.base_list_response_pipeline import BaseListResponsePipeline
from keap_sdk_core_client.models.base_list_response_pipeline_summary import BaseListResponsePipelineSummary
from keap_sdk_core_client.models.base_list_response_stage import BaseListResponseStage
from keap_sdk_core_client.models.base_model import BaseModel
from keap_sdk_core_client.models.basic_company import BasicCompany
from keap_sdk_core_client.models.basic_contact import BasicContact
from keap_sdk_core_client.models.basic_user import BasicUser
from keap_sdk_core_client.models.business_profile_address_request import BusinessProfileAddressRequest
from keap_sdk_core_client.models.business_profile_address_response import BusinessProfileAddressResponse
from keap_sdk_core_client.models.campaign import Campaign
from keap_sdk_core_client.models.cancel_subscriptions_request import CancelSubscriptionsRequest
from keap_sdk_core_client.models.card_info import CardInfo
from keap_sdk_core_client.models.category_discount import CategoryDiscount
from keap_sdk_core_client.models.category_reference import CategoryReference
from keap_sdk_core_client.models.check_list_item_details import CheckListItemDetails
from keap_sdk_core_client.models.checklist_item import ChecklistItem
from keap_sdk_core_client.models.company import Company
from keap_sdk_core_client.models.contact import Contact
from keap_sdk_core_client.models.contact_link import ContactLink
from keap_sdk_core_client.models.contact_link_type import ContactLinkType
from keap_sdk_core_client.models.contact_utm_response import ContactUtmResponse
from keap_sdk_core_client.models.country import Country
from keap_sdk_core_client.models.create_affiliate_request import CreateAffiliateRequest
from keap_sdk_core_client.models.create_automation_category_request import CreateAutomationCategoryRequest
from keap_sdk_core_client.models.create_category_discount_request import CreateCategoryDiscountRequest
from keap_sdk_core_client.models.create_commission_program_request import CreateCommissionProgramRequest
from keap_sdk_core_client.models.create_company_request import CreateCompanyRequest
from keap_sdk_core_client.models.create_contact_link_type_request import CreateContactLinkTypeRequest
from keap_sdk_core_client.models.create_contact_utm_properties_request import CreateContactUtmPropertiesRequest
from keap_sdk_core_client.models.create_custom_field_option_request import CreateCustomFieldOptionRequest
from keap_sdk_core_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_sdk_core_client.models.create_custom_field_response import CreateCustomFieldResponse
from keap_sdk_core_client.models.create_deal_note_request import CreateDealNoteRequest
from keap_sdk_core_client.models.create_default_commission_program_request import CreateDefaultCommissionProgramRequest
from keap_sdk_core_client.models.create_email_sent_request import CreateEmailSentRequest
from keap_sdk_core_client.models.create_emails_sent_request import CreateEmailsSentRequest
from keap_sdk_core_client.models.create_funnel_integration_request import CreateFunnelIntegrationRequest
from keap_sdk_core_client.models.create_funnel_integration_trigger_events import CreateFunnelIntegrationTriggerEvents
from keap_sdk_core_client.models.create_lead_source_request import CreateLeadSourceRequest
from keap_sdk_core_client.models.create_note_request import CreateNoteRequest
from keap_sdk_core_client.models.create_opportunity_request import CreateOpportunityRequest
from keap_sdk_core_client.models.create_opportunity_stage_checklist_item import CreateOpportunityStageChecklistItem
from keap_sdk_core_client.models.create_opportunity_stage_request import CreateOpportunityStageRequest
from keap_sdk_core_client.models.create_or_update_affiliate_link_request import CreateOrUpdateAffiliateLinkRequest
from keap_sdk_core_client.models.create_order_total_discount_request import CreateOrderTotalDiscountRequest
from keap_sdk_core_client.models.create_payment_method_config_request import CreatePaymentMethodConfigRequest
from keap_sdk_core_client.models.create_payment_request import CreatePaymentRequest
from keap_sdk_core_client.models.create_pipeline_request import CreatePipelineRequest
from keap_sdk_core_client.models.create_product_category_request import CreateProductCategoryRequest
from keap_sdk_core_client.models.create_product_commission_program_request import CreateProductCommissionProgramRequest
from keap_sdk_core_client.models.create_product_discount_request import CreateProductDiscountRequest
from keap_sdk_core_client.models.create_product_interest_bundle_request import CreateProductInterestBundleRequest
from keap_sdk_core_client.models.create_product_request import CreateProductRequest
from keap_sdk_core_client.models.create_referral_request import CreateReferralRequest
from keap_sdk_core_client.models.create_rest_order_item_request import CreateRestOrderItemRequest
from keap_sdk_core_client.models.create_shipping_discount_request import CreateShippingDiscountRequest
from keap_sdk_core_client.models.create_stage_request import CreateStageRequest
from keap_sdk_core_client.models.create_subscription_commission_program_request import CreateSubscriptionCommissionProgramRequest
from keap_sdk_core_client.models.create_subscription_plan_request import CreateSubscriptionPlanRequest
from keap_sdk_core_client.models.create_subscription_v2 import CreateSubscriptionV2
from keap_sdk_core_client.models.create_task_request import CreateTaskRequest
from keap_sdk_core_client.models.create_update_contact_request import CreateUpdateContactRequest
from keap_sdk_core_client.models.create_update_lead_source_category_request import CreateUpdateLeadSourceCategoryRequest
from keap_sdk_core_client.models.create_update_tag_category_request import CreateUpdateTagCategoryRequest
from keap_sdk_core_client.models.create_update_tag_request import CreateUpdateTagRequest
from keap_sdk_core_client.models.create_update_task_request import CreateUpdateTaskRequest
from keap_sdk_core_client.models.create_user_request_v2 import CreateUserRequestV2
from keap_sdk_core_client.models.currency_value import CurrencyValue
from keap_sdk_core_client.models.custom_field import CustomField
from keap_sdk_core_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_sdk_core_client.models.custom_field_option import CustomFieldOption
from keap_sdk_core_client.models.custom_field_value import CustomFieldValue
from keap_sdk_core_client.models.deal import Deal
from keap_sdk_core_client.models.deal_all_of_custom_fields import DealAllOfCustomFields
from keap_sdk_core_client.models.deal_all_of_stage import DealAllOfStage
from keap_sdk_core_client.models.deal_all_of_value import DealAllOfValue
from keap_sdk_core_client.models.deal_contact import DealContact
from keap_sdk_core_client.models.deal_note import DealNote
from keap_sdk_core_client.models.deal_note_list_response import DealNoteListResponse
from keap_sdk_core_client.models.deal_status import DealStatus
from keap_sdk_core_client.models.default_commission import DefaultCommission
from keap_sdk_core_client.models.delete_emails_request import DeleteEmailsRequest
from keap_sdk_core_client.models.delete_emails_response import DeleteEmailsResponse
from keap_sdk_core_client.models.delete_funnel_integration_request import DeleteFunnelIntegrationRequest
from keap_sdk_core_client.models.delete_subscription_plan_commission_request import DeleteSubscriptionPlanCommissionRequest
from keap_sdk_core_client.models.discount import Discount
from keap_sdk_core_client.models.discount_criteria import DiscountCriteria
from keap_sdk_core_client.models.email_address import EmailAddress
from keap_sdk_core_client.models.email_address_request import EmailAddressRequest
from keap_sdk_core_client.models.email_send_request import EmailSendRequest
from keap_sdk_core_client.models.email_send_request_attachment import EmailSendRequestAttachment
from keap_sdk_core_client.models.email_sent_create_error import EmailSentCreateError
from keap_sdk_core_client.models.email_sent_with_content import EmailSentWithContent
from keap_sdk_core_client.models.emails_sent_list import EmailsSentList
from keap_sdk_core_client.models.error import Error
from keap_sdk_core_client.models.fax_number import FaxNumber
from keap_sdk_core_client.models.file import File
from keap_sdk_core_client.models.file_metadata import FileMetadata
from keap_sdk_core_client.models.funnel_integration_action import FunnelIntegrationAction
from keap_sdk_core_client.models.funnel_integration_http_request import FunnelIntegrationHttpRequest
from keap_sdk_core_client.models.funnel_integration_schema_field import FunnelIntegrationSchemaField
from keap_sdk_core_client.models.funnel_integration_trigger_event_dto import FunnelIntegrationTriggerEventDTO
from keap_sdk_core_client.models.funnel_integration_trigger_result_dto import FunnelIntegrationTriggerResultDTO
from keap_sdk_core_client.models.get_application_enabled_status_response import GetApplicationEnabledStatusResponse
from keap_sdk_core_client.models.get_business_profile_response import GetBusinessProfileResponse
from keap_sdk_core_client.models.get_contact_option_types_response import GetContactOptionTypesResponse
from keap_sdk_core_client.models.get_note_response import GetNoteResponse
from keap_sdk_core_client.models.get_settings_response import GetSettingsResponse
from keap_sdk_core_client.models.get_tag_category_response import GetTagCategoryResponse
from keap_sdk_core_client.models.get_user_info_response_base import GetUserInfoResponseBase
from keap_sdk_core_client.models.goal import Goal
from keap_sdk_core_client.models.historical_counts import HistoricalCounts
from keap_sdk_core_client.models.invoice_order_payment import InvoiceOrderPayment
from keap_sdk_core_client.models.item import Item
from keap_sdk_core_client.models.landing_page import LandingPage
from keap_sdk_core_client.models.lead_score import LeadScore
from keap_sdk_core_client.models.lead_source import LeadSource
from keap_sdk_core_client.models.lead_source_category import LeadSourceCategory
from keap_sdk_core_client.models.link import Link
from keap_sdk_core_client.models.link_contacts_request import LinkContactsRequest
from keap_sdk_core_client.models.list_affiliate_commission_programs_response import ListAffiliateCommissionProgramsResponse
from keap_sdk_core_client.models.list_affiliate_commission_response import ListAffiliateCommissionResponse
from keap_sdk_core_client.models.list_affiliate_links_response import ListAffiliateLinksResponse
from keap_sdk_core_client.models.list_affiliate_summaries_response import ListAffiliateSummariesResponse
from keap_sdk_core_client.models.list_automation_category_response import ListAutomationCategoryResponse
from keap_sdk_core_client.models.list_automation_ids_response import ListAutomationIdsResponse
from keap_sdk_core_client.models.list_automation_response import ListAutomationResponse
from keap_sdk_core_client.models.list_basic_contact_response import ListBasicContactResponse
from keap_sdk_core_client.models.list_campaigns_response import ListCampaignsResponse
from keap_sdk_core_client.models.list_category_discounts_response import ListCategoryDiscountsResponse
from keap_sdk_core_client.models.list_companies_response import ListCompaniesResponse
from keap_sdk_core_client.models.list_contact_link_types_response import ListContactLinkTypesResponse
from keap_sdk_core_client.models.list_contact_links_response import ListContactLinksResponse
from keap_sdk_core_client.models.list_contacts_response import ListContactsResponse
from keap_sdk_core_client.models.list_countries_response import ListCountriesResponse
from keap_sdk_core_client.models.list_files_response import ListFilesResponse
from keap_sdk_core_client.models.list_landing_pages_response import ListLandingPagesResponse
from keap_sdk_core_client.models.list_lead_source_categories_response import ListLeadSourceCategoriesResponse
from keap_sdk_core_client.models.list_lead_sources_response import ListLeadSourcesResponse
from keap_sdk_core_client.models.list_note_template_response import ListNoteTemplateResponse
from keap_sdk_core_client.models.list_notes_response import ListNotesResponse
from keap_sdk_core_client.models.list_opportunities_response import ListOpportunitiesResponse
from keap_sdk_core_client.models.list_opportunity_stages_response import ListOpportunityStagesResponse
from keap_sdk_core_client.models.list_order_payments_response import ListOrderPaymentsResponse
from keap_sdk_core_client.models.list_order_total_discounts_response import ListOrderTotalDiscountsResponse
from keap_sdk_core_client.models.list_orders import ListOrders
from keap_sdk_core_client.models.list_product_categories_response import ListProductCategoriesResponse
from keap_sdk_core_client.models.list_product_interest_bundle_response import ListProductInterestBundleResponse
from keap_sdk_core_client.models.list_products_response import ListProductsResponse
from keap_sdk_core_client.models.list_provinces_response import ListProvincesResponse
from keap_sdk_core_client.models.list_rest_merchant_account_response import ListRestMerchantAccountResponse
from keap_sdk_core_client.models.list_rest_merchant_response import ListRestMerchantResponse
from keap_sdk_core_client.models.list_rest_shipping_methods_response import ListRestShippingMethodsResponse
from keap_sdk_core_client.models.list_shipping_discounts_response import ListShippingDiscountsResponse
from keap_sdk_core_client.models.list_subscription_plans_response import ListSubscriptionPlansResponse
from keap_sdk_core_client.models.list_subscriptions_response import ListSubscriptionsResponse
from keap_sdk_core_client.models.list_tag_categories_response import ListTagCategoriesResponse
from keap_sdk_core_client.models.list_tagged_companies_response import ListTaggedCompaniesResponse
from keap_sdk_core_client.models.list_tagged_contacts_response import ListTaggedContactsResponse
from keap_sdk_core_client.models.list_tags_response import ListTagsResponse
from keap_sdk_core_client.models.list_tasks_response import ListTasksResponse
from keap_sdk_core_client.models.list_user_response import ListUserResponse
from keap_sdk_core_client.models.money import Money
from keap_sdk_core_client.models.note import Note
from keap_sdk_core_client.models.note_template import NoteTemplate
from keap_sdk_core_client.models.object_model import ObjectModel
from keap_sdk_core_client.models.opportunity_contact import OpportunityContact
from keap_sdk_core_client.models.opportunity_stage import OpportunityStage
from keap_sdk_core_client.models.order_item_product import OrderItemProduct
from keap_sdk_core_client.models.order_item_tax import OrderItemTax
from keap_sdk_core_client.models.order_total_discount import OrderTotalDiscount
from keap_sdk_core_client.models.origin import Origin
from keap_sdk_core_client.models.origin_request import OriginRequest
from keap_sdk_core_client.models.owner import Owner
from keap_sdk_core_client.models.payment_method_config import PaymentMethodConfig
from keap_sdk_core_client.models.payment_method_list import PaymentMethodList
from keap_sdk_core_client.models.payment_plan import PaymentPlan
from keap_sdk_core_client.models.payment_result import PaymentResult
from keap_sdk_core_client.models.phone_number import PhoneNumber
from keap_sdk_core_client.models.pipeline import Pipeline
from keap_sdk_core_client.models.pipeline_list_response import PipelineListResponse
from keap_sdk_core_client.models.pipeline_outcome_label import PipelineOutcomeLabel
from keap_sdk_core_client.models.pipeline_outcome_label_list_response import PipelineOutcomeLabelListResponse
from keap_sdk_core_client.models.pipeline_stage_list_response import PipelineStageListResponse
from keap_sdk_core_client.models.pipeline_summaries_list_response import PipelineSummariesListResponse
from keap_sdk_core_client.models.pipeline_summary import PipelineSummary
from keap_sdk_core_client.models.product_category import ProductCategory
from keap_sdk_core_client.models.product_commission import ProductCommission
from keap_sdk_core_client.models.product_commission_program import ProductCommissionProgram
from keap_sdk_core_client.models.product_discount import ProductDiscount
from keap_sdk_core_client.models.product_fixed_option import ProductFixedOption
from keap_sdk_core_client.models.product_interest import ProductInterest
from keap_sdk_core_client.models.product_interest_bundle import ProductInterestBundle
from keap_sdk_core_client.models.product_inventory import ProductInventory
from keap_sdk_core_client.models.product_options import ProductOptions
from keap_sdk_core_client.models.product_variable_setting import ProductVariableSetting
from keap_sdk_core_client.models.provinces import Provinces
from keap_sdk_core_client.models.referral import Referral
from keap_sdk_core_client.models.remove_contacts_from_sequence_request import RemoveContactsFromSequenceRequest
from keap_sdk_core_client.models.remove_contacts_from_sequence_response import RemoveContactsFromSequenceResponse
from keap_sdk_core_client.models.report_entry_record import ReportEntryRecord
from keap_sdk_core_client.models.report_entry_value import ReportEntryValue
from keap_sdk_core_client.models.report_execution_result import ReportExecutionResult
from keap_sdk_core_client.models.resource import Resource
from keap_sdk_core_client.models.rest_affiliate import RestAffiliate
from keap_sdk_core_client.models.rest_create_order_request import RestCreateOrderRequest
from keap_sdk_core_client.models.rest_email_address import RestEmailAddress
from keap_sdk_core_client.models.rest_opportunity_stage import RestOpportunityStage
from keap_sdk_core_client.models.rest_payment_gateway import RestPaymentGateway
from keap_sdk_core_client.models.rest_payment_method import RestPaymentMethod
from keap_sdk_core_client.models.rest_product_option import RestProductOption
from keap_sdk_core_client.models.rest_product_option_value import RestProductOptionValue
from keap_sdk_core_client.models.rest_subscription_plan import RestSubscriptionPlan
from keap_sdk_core_client.models.rest_subscription_v2 import RestSubscriptionV2
from keap_sdk_core_client.models.rest_v2_opportunity import RestV2Opportunity
from keap_sdk_core_client.models.rest_v2_order import RestV2Order
from keap_sdk_core_client.models.rest_v2_order_item import RestV2OrderItem
from keap_sdk_core_client.models.rest_v2_product import RestV2Product
from keap_sdk_core_client.models.rest_v2_subscription import RestV2Subscription
from keap_sdk_core_client.models.rest_v2_user import RestV2User
from keap_sdk_core_client.models.save_automation_category_request import SaveAutomationCategoryRequest
from keap_sdk_core_client.models.sequence import Sequence
from keap_sdk_core_client.models.sequence_path import SequencePath
from keap_sdk_core_client.models.set_default_commission_program_response import SetDefaultCommissionProgramResponse
from keap_sdk_core_client.models.shipping_discount import ShippingDiscount
from keap_sdk_core_client.models.shipping_information import ShippingInformation
from keap_sdk_core_client.models.shipping_method import ShippingMethod
from keap_sdk_core_client.models.social_account import SocialAccount
from keap_sdk_core_client.models.stack_trace_element import StackTraceElement
from keap_sdk_core_client.models.stage import Stage
from keap_sdk_core_client.models.stage_deal_list_response import StageDealListResponse
from keap_sdk_core_client.models.stage_details import StageDetails
from keap_sdk_core_client.models.stage_list_response import StageListResponse
from keap_sdk_core_client.models.subscription_commission import SubscriptionCommission
from keap_sdk_core_client.models.subscription_commission_program import SubscriptionCommissionProgram
from keap_sdk_core_client.models.subscription_plan import SubscriptionPlan
from keap_sdk_core_client.models.subscription_plan_interest import SubscriptionPlanInterest
from keap_sdk_core_client.models.tag import Tag
from keap_sdk_core_client.models.tagged_company import TaggedCompany
from keap_sdk_core_client.models.task import Task
from keap_sdk_core_client.models.throwable import Throwable
from keap_sdk_core_client.models.transaction import Transaction
from keap_sdk_core_client.models.uri import URI
from keap_sdk_core_client.models.url import URL
from keap_sdk_core_client.models.update_affiliate_request import UpdateAffiliateRequest
from keap_sdk_core_client.models.update_automation_category_request import UpdateAutomationCategoryRequest
from keap_sdk_core_client.models.update_business_profile_request import UpdateBusinessProfileRequest
from keap_sdk_core_client.models.update_category_discount_request import UpdateCategoryDiscountRequest
from keap_sdk_core_client.models.update_commission_program_request import UpdateCommissionProgramRequest
from keap_sdk_core_client.models.update_company_request import UpdateCompanyRequest
from keap_sdk_core_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
from keap_sdk_core_client.models.update_deal_note_request import UpdateDealNoteRequest
from keap_sdk_core_client.models.update_default_commission_program_request import UpdateDefaultCommissionProgramRequest
from keap_sdk_core_client.models.update_email_address import UpdateEmailAddress
from keap_sdk_core_client.models.update_note_request import UpdateNoteRequest
from keap_sdk_core_client.models.update_note_response import UpdateNoteResponse
from keap_sdk_core_client.models.update_opportunity_request_v2 import UpdateOpportunityRequestV2
from keap_sdk_core_client.models.update_opportunity_stage_checklist_item import UpdateOpportunityStageChecklistItem
from keap_sdk_core_client.models.update_opportunity_stage_request import UpdateOpportunityStageRequest
from keap_sdk_core_client.models.update_order_item_request import UpdateOrderItemRequest
from keap_sdk_core_client.models.update_order_request import UpdateOrderRequest
from keap_sdk_core_client.models.update_order_total_discount_request import UpdateOrderTotalDiscountRequest
from keap_sdk_core_client.models.update_outcome_labels_request import UpdateOutcomeLabelsRequest
from keap_sdk_core_client.models.update_pipeline_request import UpdatePipelineRequest
from keap_sdk_core_client.models.update_product_category_request import UpdateProductCategoryRequest
from keap_sdk_core_client.models.update_product_commission_program_request import UpdateProductCommissionProgramRequest
from keap_sdk_core_client.models.update_product_interest_bundle_request import UpdateProductInterestBundleRequest
from keap_sdk_core_client.models.update_product_inventory_request import UpdateProductInventoryRequest
from keap_sdk_core_client.models.update_shipping_discount_request import UpdateShippingDiscountRequest
from keap_sdk_core_client.models.update_stage_request import UpdateStageRequest
from keap_sdk_core_client.models.update_subscription_commission_program_request import UpdateSubscriptionCommissionProgramRequest
from keap_sdk_core_client.models.update_subscription_plan_request import UpdateSubscriptionPlanRequest
from keap_sdk_core_client.models.update_subscription_request import UpdateSubscriptionRequest
from keap_sdk_core_client.models.update_tag_category_response import UpdateTagCategoryResponse
from keap_sdk_core_client.models.update_tag_response import UpdateTagResponse
from keap_sdk_core_client.models.update_task_response import UpdateTaskResponse
from keap_sdk_core_client.models.update_user_request import UpdateUserRequest
from keap_sdk_core_client.models.user import User
