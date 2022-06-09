module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#336AA1",
        primary_light: "#3E63A9D4",
        primary_theme: "#4473cf",
        secondary: "#32c688",
        "secondary-light": "#73ebaa",
        "secondary-dark": "#02b6a2",
        terceary: "#FFD025",
        "terceary-dark": "#F68625",
      },
      boxShadow: {
        'shadow-form-yellow': '-6px -6px 0px #32c688',
      },
      backgroundImage: {
        'bg-form': "url('/public/assets/bg-form.png')",
      },
      width: {
        '45%': '45%',
      }
    },
  },
  plugins: [],
}
