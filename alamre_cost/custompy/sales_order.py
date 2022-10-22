from __future__ import unicode_literals

import json

import frappe
import frappe.utils
from frappe import _
from frappe.model.mapper import get_mapped_doc
from frappe.utils import add_days, cint, cstr, flt, get_link_to_form, getdate, nowdate, strip_html
from six import string_types


@frappe.whitelist()
def make_cost_planning(source_name, target_doc=None, ignore_permissions=False):
	if not frappe.db.exists("Cost Planning", {"sales_order": source_name}):
		doclist = get_mapped_doc("Sales Order", source_name, {
			"Sales Order": {
				"doctype": "Cost Planning",
				"field_map": {
					"sales_order": "name",
					"transaction_date": "transaction_date",
					"delivery_date": "delivery_date",
				}
			},
			"Sales Order Item": {
				"doctype": "Sales Order Item",
				"add_if_empty": True
			},
			"Payment Schedule": {
				"doctype": "Payment Schedule",
				"add_if_empty": True
			}
		}, target_doc, ignore_permissions=ignore_permissions)
	else:
		frappe.throw(_("Cost Planning already created of this Sales Order"))    


	return doclist