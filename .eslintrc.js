// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const tsconfigPath = path.resolve(
  (() => {
    const cwd = process.cwd();

    if (cwd.endsWith("site")) {
      return "./tsconfig.json";
    }

    return "apps/site/tsconfig.json";
  })()
);

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "no-use-before-define": "off",
    "react/no-danger": "off",
    "@next/next/no-document-import-in-page": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "import/extensions": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".tsx", ".jsx"] }
    ],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" }
    ],

    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: true }
    ],
    "arrow-body-style": ["error", "as-needed"],
    "react/require-default-props": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "jsx-a11y/anchor-is-valid": 0,
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*"
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      }
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true
      }
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "type",
          "index"
        ],
        pathGroups: [
          {
            pattern: "./styles.ts",
            group: "sibling"
          }
        ],
        "newlines-between": "always"
      }
    ],
    "no-restricted-exports": "off",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "_+",
        varsIgnorePattern: "_+"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "_+",
        varsIgnorePattern: "_+"
      }
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description"
      }
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: [
          "_ref",
          "_type",
          "_id",
          "__typename",
          "_key",
          "__IS_STORYBOOK",
          "_original"
        ]
      }
    ],
    "no-console": [
      "warn",
      {
        allow: ["warn"]
      }
    ]
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: tsconfigPath
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "prettier"
      ]
    }
  ]
};
