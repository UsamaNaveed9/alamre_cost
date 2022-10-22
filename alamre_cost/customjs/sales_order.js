

frappe.ui.form.on("Sales Order", {
    setup: function(frm) {
		frm.custom_make_buttons = {
			'Cost Planning': 'Cost Planning'
		}
    }
});

erpnext.selling.SalesOrderController = erpnext.selling.SellingController.extend({
	refresh: function(doc, dt, dn) {
		var me = this;
		this._super();

		if (doc.docstatus==1) {

			
			if(doc.status !== 'Closed') {
				if(doc.status !== 'On Hold') {
					
					// Cost Planning
					if(flt(doc.per_billed, 6) < 100) {
						this.frm.add_custom_button(__('Cost Planning'), () => me.make_cost_planning(), __('Create'));
					}
				}
			}
		}
	},

	make_cost_planning: function() {
		frappe.model.open_mapped_doc({
			method: "alamre_cost.custompy.sales_order.make_cost_planning",
			frm: this.frm
		})
	},

});