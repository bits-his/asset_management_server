import db from "../models";

export const configuretion =  (req, res) => {
const {
    id = null,
    query_type = null,
    company_name = '',	
    state_code = '',
    enter_api_name = '',
    end_pow_url = '',
    marchurt_key = '',
    respose_type = '',

} = req.body;
console.log(req.body)
  db.sequelize
    .query(
      `call configuretion(:id,'insert',:company_name,:state_code,:enter_api_name,:end_pow_url,:marchurt_key,:respose_type)`,
      {
        replacements: {
            id,
            query_type,
            company_name,	
            state_code,
            enter_api_name,
            end_pow_url,
            marchurt_key,
            respose_type,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
}

export const get_configuretion =  (req, res) => {
    const {
        id = null,
        query_type = null,
        company_name = null,	
        state_code = null,
        enter_api_name = null,
        end_pow_url = null,
        marchurt_key = null,
        respose_type = null,
    
    } = req.body;
    console.log(req.body)
      db.sequelize
        .query(
          `call configuretion(:id,:query_type,:company_name,:state_code,:enter_api_name,:end_pow_url,:marchurt_key,:respose_type)`,
          {
            replacements: {
                id,
                query_type,
                company_name,	
                state_code,
                enter_api_name,
                end_pow_url,
                marchurt_key,
                respose_type,
            },
          }
        )
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
          console.log(err);
          res.status(500).json({ success: false });
        });
    }