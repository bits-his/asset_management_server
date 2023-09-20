import db from "../models";

export const AssetRegister = (req, res) => {
  const {
    id = null,
    asset_code=null,
    description=null,
    category=null,
    mda=null,
    dept=null,
    suppler=null,
    invoce=null,
    pv_no=null,
    status=null
  } = req.body;
  const { query_type = "" } = req.query;
console.log(req.body)
  db.sequelize
    .query(
      `call AssetRegister(:id,:query_type,:asset_code,:description,:category,:mda,:dept,:suppler,:invoce,:pv_no,:status)`,
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
          status
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
    asset_code=null,
    description=null,
    category=null,
    mda=null,
    dept=null,
    suppler=null,
    invoce=null,
    pv_no=null,
    status=null
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
        `call AssetRegister(:id,:query_type,:asset_code,:description,:category,:mda,:dept,:suppler,:invoce,:pv_no,:status)`,
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
          status
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
