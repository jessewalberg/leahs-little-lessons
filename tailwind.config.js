module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '9/10': '90%',
        '3/4': '75%'
       },
      fontFamily: {
        main: ["SchoolBell", "Helvetica, Arial"],
        writing: ["Helvetica", "Arial"],
      },
      boxShadow: {
        testing: "1px 1px 2px rgba(0, 0, 0, 0.25);"
      }
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
};
