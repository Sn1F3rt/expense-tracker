export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "ci",
                "chore",
                "docs",
                "init",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
            ],
        ],
    },
};
