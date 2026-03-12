// app.js — main application
const config = require("./config");

function fetchData() {
  console.log(`Fetching from ${config.API_URL} with timeout ${config.TIMEOUT}`);
  return { status: "ok" };
}

module.exports = { fetchData };
