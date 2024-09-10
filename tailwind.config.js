/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      textShadow:{'default': '2px 2px 2px rgba(0, 0, 0, 0.3)',
      'red': '2px 2px 2px rgba(255, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
     function ({ addUtilities, theme }) {
      const textShadow = theme('textShadow')
      const utilities = Object.keys(textShadow).map(key => {
        return {
          [`.text-shadow-${key}`]: {
            textShadow: textShadow[key],
          },
        }
      })

      addUtilities(utilities, ['responsive', 'hover'])
    },
  ],
}
