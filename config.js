require('dotenv/config');

const OPENHIM = {
  username: process.env.OPENHIM_USERNAME || "interop@openhim.org",
  password: process.env.OPENHIM_PASSWORD || "interop-password",
  apiURL: process.env.OPENHIM_API_URL || "https://openhim-core:8080",
  trustSelfSigned: true,
}

module.exports = {
  OPENHIM,
}
