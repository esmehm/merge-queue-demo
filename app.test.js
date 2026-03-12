// app.test.js — simple test suite
const { fetchData } = require("./app");
const config = require("./config");

// Test 1: fetchData returns ok
const result = fetchData();
if (result.status !== "ok") {
  console.error("FAIL: fetchData should return ok");
  process.exit(1);
}

// Test 2: config has required keys
const required = Object.keys(require("./config"));
for (const key of ["TIMEOUT", "RETRIES"]) {
  if (!required.includes(key)) {
    console.error(`FAIL: config missing ${key}`);
    process.exit(1);
  }
}

// Test 3: API_URL is valid if it exists
if (config.API_URL && !config.API_URL.startsWith("http")) {
  console.error("FAIL: API_URL must start with http");
  process.exit(1);
}

console.log("All tests passed!");
