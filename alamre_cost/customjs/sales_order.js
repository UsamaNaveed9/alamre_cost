
frappe.ui.form.on("Sales Order", {
    refresh: function(frm) {
		if(frm.doc.docstatus === 1 && frm.doc.status !== 'Closed') {
			frm.add_custom_button(__('Create Cost Planning'), () => {
				frappe.model.open_mapped_doc({
					method: "alamre_cost.custompy.sales_order.make_cost_planning",
					frm: cur_frm
				})
			});
		}
	},
});


