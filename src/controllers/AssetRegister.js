import db from "../models";

export const AssetRegister = (req, res) => {
  const {
    id = null,
    asset_code = null,
    description = null,
    category = null,
    mda = null,
    dept = null,
    suppler = null,
    invoce = null,
    pv_no = null,
    status = null,
    f_o_b_value_invoice_price = null,
    freight = null,
    insurance = null,
    custom_duty_etc = null,
    transport_charges = null,
    handling_charges = null,
    date_put_into_use = null,
    location = null,
    no = 0,
    notes = null
  } = req.body;
  const { query_type = "" } = req.query;
  console.log(req.body)
  db.sequelize
    .query(
      `call AssetRegister(:id,:query_type,:asset_code,:description,:category,:mda,:dept,:suppler,:invoce,:pv_no,:status,:f_o_b_value_invoice_price,:freight,:insurance,:custom_duty_etc,:transport_charges,:handling_charges,:date_put_into_use,:location,:no,:notes )`,
      {
        replacements: {
          id,
          query_type,
          asset_code,
          description,
          category,
          mda,
          dept,
          suppler,
          invoce,
          pv_no,
          status,
          f_o_b_value_invoice_price,
          freight,
          insurance,
          custom_duty_etc,
          transport_charges,
          handling_charges,
          date_put_into_use,
          location,
          no,
          notes
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_AssetRegister = (req, res) => {
  const {
    id = null,
    asset_code = null,
    description = null,
    category = null,
    mda = null,
    dept = null,
    suppler = null,
    invoce = null,
    pv_no = null,
    status = null,
    f_o_b_value_invoice_price = null,
    freight = null,
    insurance = null,
    custom_duty_etc = null,
    transport_charges = null,
    handling_charges = null,
    date_put_into_use = null,
    location = null,
    no = 0,
    notes = null
  } = req.body;
  const { query_type = "select " } = req.query;

  db.sequelize
    .query(
      `call AssetRegister(:id,:query_type,:asset_code,:description,:category,:mda,:dept,:suppler,:invoce,:pv_no,:status,:f_o_b_value_invoice_price,:freight,:insurance,:custom_duty_etc,:transport_charges,:handling_charges,:date_put_into_use,:location,:no,:notes )`, {
      replacements: {
        id,
        query_type,
        asset_code,
        description,
        category,
        mda,
        dept,
        suppler,
        invoce,
        pv_no,
        status,
        f_o_b_value_invoice_price,
        freight,
        insurance,
        custom_duty_etc,
        transport_charges,
        handling_charges,
        date_put_into_use,
        location,
        no,
        notes
      },
    }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
