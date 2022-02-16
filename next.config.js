require("dotenv").config();

module.exports = {
  assetPrefix: process.env.BASE_PREFIX_FOR_APP,
  // async rewrites() {
  //   return [
  //     {
  //       /** ASSET PREFIX */
  //       source: `${process.env.BASE_PREFIX_FOR_APP}/_next/:path*`,
  //       destination: "/_next/:path*",
  //     },
  //     {
  //       /** IMAGE PREFIX */
  //       source: `${process.env.BASE_PREFIX_FOR_APP}/images/:query*`,
  //       destination: "/_next/image/:query*",
  //     },
  //     /** API PREFIX */
  //     {
  //       source: `${process.env.BASE_PREFIX_FOR_APP}/api/:path*`,
  //       destination: "/api/:path*",
  //     },
  //   ];
  // },
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
