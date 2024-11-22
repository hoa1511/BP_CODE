module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Cấu hình PurgeCSS
  darkMode: false, // hoặc 'media' hoặc 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    sans: ['Inter', 'Arial', 'sans-serif'], // Thêm Inter vào font-sans
  },
};
