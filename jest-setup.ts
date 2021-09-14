import '@testing-library/jest-dom'
const fetch = require("node-fetch")
require('dotenv').config({
    path: './.env',
  });

global.fetch = window.fetch = fetch;
global.Request = window.Request = fetch.Request;
global.Response = window.Response = fetch.Response;

