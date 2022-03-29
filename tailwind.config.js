module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        loadingbar: 'loadingbar 2s linear infinite'
      },
      keyframes: {
        loadingbar: {
          '0%': {
            transform: 'translateX(-3rem)'
          },
          '100%': {
            transform: 'translateX(22rem)'
          }
        }
      }
    },
  },
  plugins: [],
}
