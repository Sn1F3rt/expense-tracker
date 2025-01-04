export default {
    "**/*.{js,jsx,ts,tsx}": ["eslint . --fix"],
    "**/*.{html,json,css,scss,md,mdx}": ["prettier . --write"],
};
