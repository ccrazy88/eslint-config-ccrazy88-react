module.exports = {
  extends: [
    "ccrazy88",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "prettier/react"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
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
    "react/forbid-component-props": "error",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "error",
    "react/forbid-prop-types": "error",
    "react/forbid-foreign-prop-types": "off",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-danger": "warn",
    "react/no-did-mount-set-state": "off",
    "react/no-did-update-set-state": "error",
    "react/no-multi-comp": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-set-state": "off",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/require-default-props": "error",
    "react/require-optimization": "off",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "react/sort-prop-types": "off",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",

    // React -> JSX-specific rules
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-handler-names": "error",
    "react/jsx-max-depth": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" }
    ],
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-default-props": "off",
    "react/jsx-sort-props": "off"
  },
  settings: {
    "html/report-bad-indent": "error",
    "import/extensions": [".js", ".jsx"]
  }
};
