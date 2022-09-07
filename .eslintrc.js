module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    project: ['tsconfig.json', 'tsconfig.lib.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  ignorePatterns: ['.eslintrc.js', 'postcss.config.js', 'prettier.config.js', 'tailwind.config.js'],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-var-requires": "off",
    "camelcase": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "import/no-anonymous-default-export": "off",
    "max-len": "off",
    "no-console": ["warn", { "allow": ["warn"] }],
    "no-process-exit": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "object-curly-newline": "off",
    "object-shorthand": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],    
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/require-default-props": "off",
    "semi": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
};
