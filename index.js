// eslint-disable-next-line import/no-unused-modules
module.exports = {
  extends: [
    "ccrazy88",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["html", "jsx-a11y", "react"],
  rules: {
    // JSX accessibility
    "jsx-a11y/lang": "error",

    // React
    "react/boolean-prop-naming": "off",
    "react/button-has-type": "off",
    "react/default-props-match-prop-types": "error",
    "react/destructuring-assignment": "error",
    "react/display-name": "off",
    "react/forbid-component-props": "error",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "error",
    "react/forbid-foreign-prop-types": "off",
    "react/forbid-prop-types": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-access-state-in-setstate": "error",
    "react/no-adjacent-inline-elements": "off",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "warn",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "off",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "off",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "off",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "off",
    "react/no-unstable-nested-components": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-read-only-props": "off",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": "error",
    "react/require-optimization": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "react/sort-prop-types": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",

    // React -> JSX-specific rules
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
    "react/jsx-curly-newline": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-fragments": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-key": "error",
    "react/jsx-max-depth": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-default-props": "off",
    "react/jsx-sort-props": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off",
  },
  settings: {
    "html/report-bad-indent": "error",
    "import/extensions": [".js", ".jsx"],
    react: {
      version: "detect",
    },
  },
};
