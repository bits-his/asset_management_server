    const { route, getRoute } = require("../controllers/route");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/AssetRegister",
    //    config.authRequest
    route
  );
  app.get(
    "/api/get_AssetRegister",
    //    config.authRequest
    getRoute
  );
};
