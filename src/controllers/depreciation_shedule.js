import db from "../models";

export const depreciation_shedule = (req, res) => {
    const {
        id = null,
        select_asset = null,
        cost = null,
        depreciation_method = null,
        date_of_purchase = null,
        purchase_date = null,
        no_of_years = null,
        depreciation_end_date = null,
        depreciation_charges = null
      } = req.body;
      const { query_type = "select " } = req.query;
    
      db.sequelize
        .query(
          `call depreciation_shedule(:id,:query_type,:select_asset,:cost,:depreciation_method,:date_of_purchase,:purchase_date,:no_of_years,:depreciation_end_date,:depreciation_charges)`, {
          replacements: {
            id,
            query_type,
            select_asset,
            cost,
            depreciation_method,
            date_of_purchase,
            purchase_date,
            no_of_years,
            depreciation_end_date,
            depreciation_charges,
          },
        }
        )
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
          console.log(err);
          res.status(500).json({ success: false });
        });
    };
    

export const get_depreciationSchedul = (req, res) => {
  const {
    id = null,
    select_asset = null,
    cost = null,
    depreciation_method = null,
    date_of_purchase = null,
    purchase_date = null,
    no_of_years = null,
    depreciation_end_date = null,
    depreciation_charges = null
  } = req.body;
  const { query_type = "select " } = req.query;

  db.sequelize
    .query(
      `call depreciation_shedule(:id,:query_type,:select_asset,:cost,:depreciation_method,:date_of_purchase,:purchase_date,:no_of_years,:depreciation_end_date,:depreciation_charges)`, {
      replacements: {
        id,
        query_type,
        select_asset,
        cost,
        depreciation_method,
        date_of_purchase,
        purchase_date,
        no_of_years,
        depreciation_end_date,
        depreciation_charges,
      },
    }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};