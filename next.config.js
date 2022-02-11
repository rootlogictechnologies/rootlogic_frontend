require("dotenv").config();

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    MCApi: process.env.MAIL_CHIP_API_KEY,
    MCDataCenter: process.env.MC_DATA_CENTER,
    MCListId: process.env.MC_LIST_ID,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    environment: "production",
  },
  images: {
    domains: [
      "rootlogicassets.sfo3.digitaloceanspaces.com",
      "sfo3.digitaloceanspaces.com",
    ],
  },
};
