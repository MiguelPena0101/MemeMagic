module.exports = {
  content: [
    './views/layouts/main.handlebars',  // Scan for main page
    './src/**/*.js',       // Scan all JS files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [],
}
