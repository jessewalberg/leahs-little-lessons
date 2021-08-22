module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '9/10': '90%',
     },
    extend: {
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
    extend: {},
  },
  plugins: [],
};
