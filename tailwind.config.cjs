module.exports = {
  mode: "jit", // enable tailwind just in time
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'sans' : ['Montserrat','sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};