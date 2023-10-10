const { configuretion, get_configuretion } = require("../controllers/configuretion");
const config = require("../config/config");

module.exports = (app) => {
    app.post(
        "/api/configuretion",
        //    config.authRequest
        configuretion
    );
    app.get(
        "/api/get_configuretion",
        //    config.authRequest
        get_configuretion
    );
};
