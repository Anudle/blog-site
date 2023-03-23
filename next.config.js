const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (PHASE_DEVELOPMENT_SERVER === phase) {
    return {
      // future: {
      // 	webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
      // 	// Looks like backward compatibility approach.
      // },
      webpack(config) {
        config.resolve.fallback = {
          ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
          // by next.js will be dropped. Doesn't make much sense, but how it is
          fs: false, // the solution
        };

        return config;
      },
      env: {
        USER_NAME: "anu",
        MONGO_PASSWORD: "514HDesccq5uazzw",
        CLUSTER_NAME: "cluster0",
      },
    };
  }
  return {
    // future: {
    // 	webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // 	// Looks like backward compatibility approach.
    // },
    webpack(config) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
        fs: false, // the solution
      };

      return config;
    },
    env: {
      USER_NAME: "anu",
      MONGO_PASSWORD: "514HDesccq5uazzw",
      CLUSTER_NAME: "cluster0",
    },
  };
};
