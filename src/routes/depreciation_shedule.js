const { depreciation_shedule, get_depreciationSchedul } = require("../controllers/depreciation_shedule");
const config = require("../config/config");

module.exports = (app) => {
    app.post(
        "/api/depreciationSchedul",
        //    config.authRequest
        depreciation_shedule
    );
    app.get(
        "/api/get_depreciationSchedul",
        //    config.authRequest
        get_depreciationSchedul
    );
};