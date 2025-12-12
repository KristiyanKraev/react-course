import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  react.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [js.configs.recommended],
    plugins: {
      react,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // "react/no-unused-prop-types": "on",
    },
  },

  // React flat config recommended
]);
