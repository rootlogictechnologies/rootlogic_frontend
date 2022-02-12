import getConfig from "next/config";

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side
console.log(serverRuntimeConfig);
// Will be available on both server-side and client-side
// console.log(publicRuntimeConfig);

const config = {
  environment: publicRuntimeConfig.environment || "development",
  endpoints: {
    prod: "http://104.248.124.20:4000/api",
    dev: "http://localhost:1337/api",
    local: "http://localhost:1337/api",
  },

  // TODO: Add endpoints
  getEndpoint() {
    switch (this.environment) {
      case "local":
        // console.log("from local");
        return this.endpoints.local;
      case "development":
        // console.log("from development");
        return this.endpoints.dev;
      case "production":
        // console.log("from production");
        return this.endpoints.prod;
      default:
        // console.log("from ");
        return "http://localhost:1337/api";
    }
  },
};

export default config;
