/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  // "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      keyframes: {
        infinity: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
        },
      },
      animation: {
        infinity: 'infinity 3s linear infinite',
      },
    },
  },
  plugins: [],
}

