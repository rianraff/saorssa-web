import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/home-bg.png')",
        'headline-bg': "url('/headline-bg.png')",
        'thumbnail-bg': "url('/thumbnail-bg.png')",
        'user-pp': "url('/user-pp.png')",
      },
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
      colors: {
        white: '#fafafa',
        stone: '#dfdfdf',
        black: '#1d1d1d',
        gray: '#3d3d3d',
      },
    },
  },
  plugins: [],
};
export default config;
