/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			
			colors: {
				'elite-orange': '#ff9900', // El naranja de tus capturas
				'elite-dark': '#0a0a0a',   // El negro de fondo
			}
		},
	},
	plugins: [],
	
}
