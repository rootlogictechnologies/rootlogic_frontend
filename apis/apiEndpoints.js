const config = {
  environment: process.env.environment || "development",
  endpoints: {
    prod: "http://localhost:1337/api",
    dev: "http://localhost:1337/api",
    local: "http://localhost:1337/api",
  },

  getEndpoint() {
    switch (this.environment) {
      case "local":
        return this.endpoints.local;
      case "development":
        return this.endpoints.dev;
      case "production":
        return this.endpoints.prod;
      default:
        return "http://localhost:1337/api";
    }
  },
};

export default config;
