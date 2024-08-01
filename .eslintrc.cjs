module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    "eslint-config-prettier",
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect",
    },
    // Tells eslint how to resolve imports
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        paths: ["./src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["dist", "types", ".eslintrc.cjs", ".vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "consistent-return": "off",
    "import/order": [
      "error",
      {
        pathGroups: [
          { pattern: "react", group: "builtin" },
          { pattern: "vite", group: "builtin" },
          { pattern: "@/**", group: "internal" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          // {
          //   group: [
          //     '@/6_shared/*/*/**',
          //     '@/5_entities/*/**',
          //     '@/4_features/*/**',
          //     '@/3_widgets/*/**',
          //     '@/2_pages/*/**',
          //     '@/1_app/**',
          //   ],
          //   message:
          //     'Direct access to the internal parts of the module is prohibited',
          // },
          {
            group: [
              "../**/6_shared",
              "../**/5_entities",
              "../**/4_features",
              "../**/3_widgets",
              "../**/2_pages",
              "../**/1_app",
            ],
            message: "Prefer absolute imports instead of relatives",
          },
        ],
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["./vite.config.ts"] },
    ],
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      files: ["./src/**/*.ts", "./src/**/*.tsx"],
      extends: ["plugin:eslint-plugin-import/typescript"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["tsconfig.json"],
      },
      plugins: ["@typescript-eslint/eslint-plugin"],
      rules: {
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/no-shadow": "off",
        "object-curly-newline": "off",
        "@typescript-eslint/indent": "off",
      },
    },
  ],
};
