const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // chainWebpack: (config) => {
  //   config.module
  //     .rule("svg")
  //     .test(/\.svg$/)
  //     .use("vue-svg-loader")
  //     .loader("vue-svg-loader");
  // },
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: {
        runtimeErrors: (error) => {
          const ignoreErrors = [
            "ResizeObserver loop limit exceeded",
            "ResizeObserver loop completed with undelivered notifications.",
          ];
          if (ignoreErrors.includes(error.message)) {
            return false;
          }
          return true;
        },
      },
    },
  },
});
