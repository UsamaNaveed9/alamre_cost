// Copyright (c) 2022, smb and contributors
// For license information, please see license.txt

frappe.ui.form.on('Cost Planning', {
	// refresh: function(frm) {

	// },
});

frappe.ui.form.on("CP Material Costing", "qty", function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
		frappe.model.set_value(cdt, cdn, "total", d.qty * d.unit_price);

	var total = 0;
		frm.doc.material_costing.forEach(function(d) { total += d.total; });
		frm.set_value('total_material_cost', total);
});

frappe.ui.form.on('CP Material Costing', {
	material_costing_remove:function(frm, cdt, cdn) {
        var total = 0;
		frm.doc.material_costing.forEach(function(d) { total += d.total; });
		frm.set_value('total_material_cost', total);
	}
});

frappe.ui.form.on("CP Material Costing", "unit_price", function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
		frappe.model.set_value(cdt, cdn, "total", d.qty * d.unit_price);

	var total = 0;
		frm.doc.material_costing.forEach(function(d) { total += d.total; });
		frm.set_value('total_material_cost', total);
});

frappe.ui.form.on("CP Labour Costing", "qty", function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
		frappe.model.set_value(cdt, cdn, "total", d.qty * d.unit_price);

	var total = 0;
		frm.doc.labour_costing.forEach(function(d) { total += d.total; });
		frm.set_value('total_labour_cost', total);
		frm.set_value('total_cost', total + frm.doc.total_material_cost);
});

frappe.ui.form.on("CP Labour Costing", "unit_price", function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
		frappe.model.set_value(cdt, cdn, "total", d.qty * d.unit_price);

	var total = 0;
		frm.doc.labour_costing.forEach(function(d) { total += d.total; });
		frm.set_value('total_labour_cost', total);
		frm.set_value('total_cost', total + frm.doc.total_material_cost);
});

frappe.ui.form.on('CP Labour Costing', {
	labour_costing_remove:function(frm, cdt, cdn) {
        var total = 0;
		frm.doc.labour_costing.forEach(function(d) { total += d.total; });
		frm.set_value('total_labour_cost', total);
		frm.set_value('total_cost', total + frm.doc.total_material_cost);
	}
});