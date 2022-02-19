require("dotenv").config();

module.exports = {
  assetPrefix: process.env.BASE_PREFIX_FOR_APP,
  serverRuntimeConfig: {
    // Will only be available on the server side
    MCApi: process.env.MAIL_CHIP_API_KEY,
    MCDataCenter: process.env.MC_DATA_CENTER,
    MCListId: process.env.MC_LIST_ID,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    environment: process.env.NODE_ENV,
  },
  images: {
    domains: [
      "rootlogicassets.sfo3.digitaloceanspaces.com",
      "sfo3.digitaloceanspaces.com",
    ],
  },
};
