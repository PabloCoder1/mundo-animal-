/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primária — Verde-petróleo da imagem
        teal:     "#1B6B5A",  // navbar, botões, títulos, footer
        tealDark: "#134D40",  // hover, sombras, variante escura
        tealLight:"#E8F4F0",  // fundos suaves, hover de links
        // Destaque — Quase branco quente para contraste
        ivory:    "#FAF8F5",  // fundo principal
        sand:     "#F2EDE6",  // fundo alternado de seções
        // Acento — Dourado suave para CTAs secundários
        gold:     "#C9A96E",  // badges, destaques, estrelas
        // Texto
        ink:      "#1A1A1A",  // texto principal
        muted:    "#6B7A74",  // texto secundário
        // Superfícies
        border:   "#D6E8E2",  // bordas, divisores
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
