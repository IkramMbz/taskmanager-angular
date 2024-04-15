module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#111'
        },
        light: {
          primary: '#fafafa'
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}
