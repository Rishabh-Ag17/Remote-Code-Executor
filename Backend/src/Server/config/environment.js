require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5010,
  nodeEnv: process.env.NODE_ENV || "development",
};
