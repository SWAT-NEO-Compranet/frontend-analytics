module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/forbid-prop-types": [
      0
    ],
    "react/require-default-props": [
      0
    ],
    "global-require": [
      0
  ]
  }
}
