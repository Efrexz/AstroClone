/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			colors: {
				'grayTransparent': 'rgba(34, 34, 34, 0.65)',
			}
		},
	},
	plugins: [],
}
