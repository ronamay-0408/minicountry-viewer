import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore styles and JSON so they don't get JS/React rules
  {
    ignores: ["**/*.css", "**/*.scss", "**/*.sass", "**/*.json"],
  },

  // JavaScript + React rules
  {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: {
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: globals.browser,
  },
  plugins: {
    react: pluginReact,
  },
  rules: {
    ...js.configs.recommended.rules,
    ...pluginReact.configs.flat.recommended.rules,
    "react/react-in-jsx-scope": "off", // React 17+ doesn't need React in scope
    "react/prop-types": "off", // Turn off PropTypes checks (optional)
  },
  settings: {
    react: {
      version: "detect",
    },
  },
},


  // JSON linting
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },

  // Markdown linting
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
]);
