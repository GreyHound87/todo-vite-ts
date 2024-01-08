module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    'prettier',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ["node_modules", "dist", "build", '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parser: 'babel-eslint',
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: './tsconfig.json',
  },
  plugins: ["react", "prettier", "import", 'react-refresh', 'react-hooks', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    "indent": ["error", 2],
    "prettier/prettier": "error",
    "linebreak-style": [0, "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "import/no-unresolved": [2, { "caseSensitive": false }],
    'import/extensions': ['error', 'ignorePackages', { 'ts': 'never', 'js': 'never', 'jsx': 'never' }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "import/order": [
      2,
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always"
      }
    ],
    'react/jsx-uses-react': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    'import/resolver': {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["node_modules", "src/"]
      }
    },
    react: {
      version: 'detect',
    },
  },
}
