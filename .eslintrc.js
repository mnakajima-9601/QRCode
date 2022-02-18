module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ["standard"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 13,
    },
    plugins: ["@typescript-eslint"],
    rules: {
        semi: ["error", "never", { beforeStatementContinuationChars: "never" }],
        "semi-spacing": ["error", { after: true, before: false }],
        "semi-style": ["error", "first"],
        "no-extra-semi": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
    },
}