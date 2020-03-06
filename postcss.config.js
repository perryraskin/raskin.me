const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano')({
  preset: 'default'
});

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './pages/**/*.tsx',
    './public/index.html',
    './components/**/*.tsx',
    './components/**/*.jsx',
    './styles/tailwind.css'
  ],
  css: [
    './styles/tailwind.css'
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('postcss-preset-env'),
    // purgecss, cssnano
    ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []
  ],
}