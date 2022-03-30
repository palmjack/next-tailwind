const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  variants: {
    textTransform: ({ after }) => after(['first-letter'])
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant, e }) {
      addVariant('first-letter', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-letter${separator}${className}`)}:first-letter`;
        });
      });
    })
  ]
};
