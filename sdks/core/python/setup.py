# coding: utf-8

"""
    Keap REST API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from setuptools import setup, find_packages  # noqa: H301

# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools
NAME = "keap-sdk-core-sdk"
VERSION = "0.0.25"
PYTHON_REQUIRES = ">= 3.8"
REQUIRES = [
    "urllib3 >= 1.25.3, < 3.0.0",
    "python-dateutil >= 2.8.2",
    "pydantic >= 2",
    "typing-extensions >= 4.7.1",
]

setup(
    name=NAME,
    version=VERSION,
    description="Keap REST API",
    author="https://developer.keap.com/get-support/",
    author_email="team@openapitools.org",
    url="https://github.com/infusionsoft/keap-sdk.git",
    keywords=["OpenAPI", "OpenAPI-Generator", "Keap REST API"],
    install_requires=REQUIRES,
    packages=find_packages(exclude=["test", "tests"]),
    include_package_data=True,
    long_description_content_type='text/markdown',
    long_description="""\
    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
    """,  # noqa: E501
    package_data={"keap_sdk_core_client": ["py.typed"]},
)
