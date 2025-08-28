/**
 * tailwind.config.js
 */
module.exports = {
  content: [
    // Scan semua template Django
    '../templates/**/*.html',
    '../../templates/**/*.html',
    '../../**/templates/**/*.html',

    // Kalau kamu punya file js di static
    '../static/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
