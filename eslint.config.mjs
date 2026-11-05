import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
  // ========================
  // 1. Browser / frontend code
  // ========================
  {
    files: ["*.js", "src/**/*.js"], 
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        console: "readonly",
        localStorage: "readonly",
        NodeList: "readonly",
        Element: "readonly"
      },
      sourceType: "module" // allows import/export
    },
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error"
    }
  },

  // ========================
  // 2. Node / scripts / Webpack
  // ========================
  {
    files: ["webpack.*.js", "scripts/**/*.js"], // all Node scripts
    languageOptions: {
      globals: {
        require: "readonly",
        module: "writable",
        __dirname: "readonly",
        __filename: "readonly",
        console: "readonly"
      },
      sourceType: "script" // allows require/module.exports
    },
    rules: {}
  }
];
