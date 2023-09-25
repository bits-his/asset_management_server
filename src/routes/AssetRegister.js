const { AssetRegister, get_AssetRegister } = require("../controllers/AssetRegister");
const config = require("../config/config");

module.exports = (app) => {
    app.post(
        "/api/AssetRegister",
        //    config.authRequest
        AssetRegister
    );
    app.get(
        "/api/get_AssetRegister",
        //    config.authRequest
        get_AssetRegister
    );
};
