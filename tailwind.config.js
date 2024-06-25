import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          "70%": { opacity: '1' },
          "100%": {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0'
          },
        }
      },
    },
  },
  plugins: [addVariablesForColors],
}

/**
 * Adds CSS variables for all colors defined in the Tailwind CSS theme.
 *
 * This function is used as a Tailwind CSS plugin to automatically generate CSS
 * variables for all colors defined in the theme. The generated variables can
 * then be used throughout the application's CSS.
 */
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => {
      return [`--${key}`, val];
    })
  )

  addBase({
    ":root": newVars,
  })
}
