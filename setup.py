from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in alamre_cost/__init__.py
from alamre_cost import __version__ as version

setup(
	name="alamre_cost",
	version=version,
	description="Alamre Cost Plannig Doctype",
	author="smb",
	author_email="usamanaveed9263@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
